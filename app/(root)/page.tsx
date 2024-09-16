import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
const Home = () => {
    const LoggedIn = { firstName: 'Anoushka' ,lastName:'Sengupta',email:'anoushkasengupta@gamil.com'};
    return (
        <section className="home">
            <div className="home-content">
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={LoggedIn?.firstName || 'Guest'}
                        subtext="Access and mange your account and transactions efficiantly."
                    />
                    <TotalBalanceBox
                    accounts = {[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                    />
                </header>
                RECENT TRANCATIONS
            </div >
            <RightSidebar
            user ={LoggedIn}
            transctions={[]}
            banks={[{},{}]}
            />
        </section>

    )
}

export default Home