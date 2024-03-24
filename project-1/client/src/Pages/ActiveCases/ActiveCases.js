import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMembersQuery } from '../../features/membersApiSlice';
import GraphActiveCases from '../../Components/GraphActiveCases/GraphActiveCases';

const ActiveCases = () => {
    const {data, isLoading} = useGetMembersQuery()
    const thisDate = new Date();
    const graphData = [];

    if (isLoading || !data) {
        return <div>Loading...</div>; // or return some other placeholder content
    }
    for(let i = 0; i < 30; i++) {
        const sumActiveIllenes = data.filter((member)=>{
            const positiveTestDate = new Date(member.coronaDetails.positiveTestDate);
            const recoveryDate = member.recoveryDate ? new Date(member.coronaDetails.recoveryDate) : null;
            const comparisonDate = new Date(thisDate - i * 24 * 60 * 60 * 1000);
            return (positiveTestDate && positiveTestDate < comparisonDate && ((recoveryDate && recoveryDate > comparisonDate) || !recoveryDate)) 
        }).length;

        const date = new Date(thisDate - i * 24 * 60 * 60 * 1000)
        const stringDate = `${date.getDate()}/${date.getMonth() + 1}` 
        graphData.push({date: stringDate, activeCases: sumActiveIllenes});
    }
    console.log(graphData);

    return <GraphActiveCases data={graphData} />;
}

export default ActiveCases;