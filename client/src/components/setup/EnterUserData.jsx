import React from 'react';
import SinglePersonForm from '../forms/SinglePersonForm';
import CouplesForm from '../forms/CouplesForm';
import FamilyForm from '../forms/FamilyForm';

function EnterUserData({ accountData }) {
  const handleSubmitSinglePersonForm = (e) => {
    e.preventDefault();
  };
  return (
    <section className='grid grid-rows-reg gap-2 h-full overflow-y-scroll'>
      <div className='text-center'>
        <h6>Enter Information about yourself</h6>
      </div>
      <section className='grid h-full pb-2'>
        {/* Singles Form */}
        {accountData.accountUserType === 'single' && (
          <SinglePersonForm
            handleSubmitSinglePersonForm={handleSubmitSinglePersonForm}
          />
        )}

        {/* Couples Form */}
        {accountData.accountUserType === 'couple' && <CouplesForm />}

        {/* Family Form */}
        {accountData.accountUserType === 'family' && <FamilyForm />}
      </section>
    </section>
  );
}

export default EnterUserData;
