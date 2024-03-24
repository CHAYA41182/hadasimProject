import React, { useMemo } from 'react';
import { useGetMembersQuery } from '../../features/membersApiSlice';
import GraphActiveCases from '../../Components/GraphActiveCases/GraphActiveCases';

const calculateGraphData = (data, thisDate) => {
    const graphData = [];
    for(let i = 29; i >= 0; i--) {
        const sumActiveIllenes = data.filter((member)=>{
            const positiveTestDate = new Date(member.coronaDetails.positiveTestDate);
            const recoveryDate = member.recoveryDate ? new Date(member.coronaDetails.recoveryDate) : null;
            const comparisonDate = new Date(thisDate - i * 24 * 60 * 60 * 1000);
            return (positiveTestDate && positiveTestDate < comparisonDate && ((recoveryDate && recoveryDate > comparisonDate) || !recoveryDate)) 
        }).length;

        const date = new Date(thisDate - i * 24 * 60 * 60 * 1000)
        let stringDate;
        if(i === 0) {
            stringDate = `היום`;
        } else if(i === 1) {
            stringDate = `אתמול`;
        } else {
            stringDate = `${date.getDate()}/${date.getMonth() + 1}`;
        }
        graphData.push({date: stringDate, activeCases: sumActiveIllenes});
    }
    return graphData;
}

const calculateVaccineData = (data) => {
    return {
        notVaccinated: data.filter(member => member.coronaDetails.vaccinations.length === 0).length,
        oneDose: data.filter(member => member.coronaDetails.vaccinations.length === 1).length,
        twoDoses: data.filter(member => member.coronaDetails.vaccinations.length === 2).length,
        threeDoses: data.filter(member => member.coronaDetails.vaccinations.length === 3).length,
        fourDoses: data.filter(member => member.coronaDetails.vaccinations.length === 4).length,
    };
}

const CoronaInformation = () => {
    const {data} = useGetMembersQuery();
    const thisDate = new Date();


    if (!data) {
        return <div>Loading...</div>; 
    }
    const graphData =  calculateGraphData(data, thisDate)
    const vaccineData = calculateVaccineData(data)


    return (
        <div>
            <div id="activeCasesChart">
                <GraphActiveCases data={graphData} />
            </div>
            <div id="vaccineChart">
                <h2>סטטיסטיקת חיסונים</h2>
                <div>חברי קופ"ח שעדיין לא התחסנו: {vaccineData.notVaccinated}</div>
                <div>חברי קופ"ח שהתחסנו בחיסון אחד: {vaccineData.oneDose}</div>
                <div>חברי קופ"ח שהתחסנו בחיסון שני: {vaccineData.twoDoses}</div>
                <div>חברי קופ"ח שהתחסנו בחיסון שלישי: {vaccineData.threeDoses}</div>
                <div>חברי קופ"ח שהתחסנו בחיסון רביעי: {vaccineData.fourDoses}</div>
            </div>
        </div>
    );
}

export default CoronaInformation;