import { useTheme } from "../utils/ThemeContext";

export default function Education () {
    const { isNightMode } = useTheme(); // Corrected line

    const    itemList1 = ['Web Dev','OOP' , 'Database', 'Mobile App', 'Software Analysis', 'UX/UI', 'Security']
    const    itemList2 = ['Network Protocols', 'Cloud', 'OS', 'Python', 'Encryption']
    const    itemList3 = ['IT infrastructure', 'Agile', 'Project Management', 'DNS', 'DHCP', 'Active Directory','OpenLDAP']

    return (
<main className={`font-normal text-base py-6 ${isNightMode ? 'text-night-light' : 'text-day-light'}`}>
    <h2 className={`font-semibold text-xl my-6 ${isNightMode ? 'text-night' : 'text-day'}`}>EDUCATION</h2>

    <div className="education-section">
        <div className=" mb-8 md:flex md:flex-row">
            <p className="text-base hidden md:inline-block md:w-4/12">2022 - 2024</p>
            <div className="md:w-7/12">
                <h3 className={`font-semibold text-base mb-1 ${isNightMode ? 'text-night' : 'text-day'}`}>Software Development Diploma</h3>
                <p className="text-base md:hidden">2022 - 2024</p>
                <p className="text-base font-medium">Southern Alberta Institution of Technology (SAIT)</p>
                <div className="flex flex-wrap">
                    {itemList1.map((item) => (
                        <div className={`rounded-full px-1 mr-1 mt-1 opacity-70 ${isNightMode? 'tag-night' : 'tag-day'}`}>
                            <p className=" text-base">#{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className=" mb-8 md:flex md:flex-row">
            <p className="text-base hidden md:inline-block md:w-4/12">2022</p>
            <div className="md:w-6/12">
                <h3 className={`font-semibold text-base ${isNightMode ? 'text-night' : 'text-day'}`}>Google IT Support Professional Certificate</h3>
                <p className="text-base md:hidden">2022</p>
                <div className="flex flex-wrap">
                    {itemList2.map((item) => (
                        <div className={`rounded-full px-1 mr-1 mt-1 opacity-70 ${isNightMode? 'tag-night' : 'tag-day'}`}>
                            <p className=" text-base">#{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className=" mb-8 md:flex md:flex-row">
            <p className="text-base hidden md:inline-block md:w-4/12">2022 - 2023</p>
            <div className="md:w-6/12">
                <h3 className={`font-semibold text-base ${isNightMode ? 'text-night' : 'text-day'}`}>Junior IT Analyst Program</h3>
                <p className="text-base md:hidden">2022 - 2023</p>
                <p className="text-base font-medium">NPower Canada</p>
                <div className="flex flex-wrap">
                    {itemList3.map((item) => (
                        <div className={`rounded-full px-1 mr-1 mt-1 opacity-70 ${isNightMode? 'tag-night' : 'tag-day'}`}>
                            <p className=" text-base">#{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>





        

    </div>
</main>
    );
}