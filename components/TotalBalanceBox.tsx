import AnimatedCounter from '@/components/AnimatedCounter';
import DoughnutChart from './DoughnutChart';


const TotalBalanceBox = ({
    accounts = [],totalBanks ,totalCurrentBalance
}:TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='toatl-balance-chart'>
            <DoughnutChart
            accounts={accounts}/>
        </div>
        <div className='flex flex-col gaap-6'>
            <h2 className='header-2'>
            Banks Accounts: {totalBanks} 
            </h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total Current Balnce
                    </p>
                    <div className='total-balance-amount flex-center gap-2'>
                        <AnimatedCounter amount=
                        {totalCurrentBalance}
                        />
                    </div>
                
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox