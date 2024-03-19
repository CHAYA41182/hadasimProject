const isValidCoronaDetiles = (coronaDetiles) => {
    const { isImmune1, isImmune2, isRecovered, isSerology, DateOfIllness, DateOfRecovery, CurrentStatus, DateOfVaccine1, DateOfVaccine2 } = coronaDetiles;

    // validate coronaDetiles
    if (coronaDetiles) {
        if (isImmune2) {
            if (!isImmune1)
                return false;
            if (!DateOfVaccine1 || !DateOfVaccine2) {
                return false;
            }

        }
        if (isImmune1) {
            if (!DateOfVaccine1) {
                return false;
            }
        }

        if (isRecovered) {
            if (!DateOfRecovery) {
                return false;
            }
            if (!DateOfIllness) {
                return false;
            }
        }
        if (CurrentStatus == 'Healthy' && (isRecovered || DateOfRecovery || DateOfIllness)) {
            return false;
        }
        if (CurrentStatus == 'Sick' && (isRecovered || DateOfRecovery || !DateOfIllness)) {
            return false;
        }
        if (CurrentStatus == 'Recovered' && (!isRecovered || !DateOfRecovery || !DateOfIllness)) {
            return false;
        }
    }
}

module.exports = isValidCoronaDetiles;