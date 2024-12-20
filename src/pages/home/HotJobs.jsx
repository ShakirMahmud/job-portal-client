import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {

    const [jobs, setJobs] = useState([]) || [];

    useEffect(() => {
        fetch('https://job-portal-server-shakir.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div className='my-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job =>
                        <HotJobCard key={job._id} job={job}>
                        </HotJobCard>
                    )
                }
            </div>
        </div>
    );
};

export default HotJobs;