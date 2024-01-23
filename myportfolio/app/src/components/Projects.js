import { useTheme } from '../utils/ThemeContext';


export default function Projects () {
    const { isNightMode } = useTheme(); // Corrected line
    const   itemList1 = ['Next.js','TailwindCSS' , 'Firebase', 'FireStore', 'OAuth', 'JS', 'React']
    const   itemList2 = ['React', 'React Native', 'Firebase', 'JS', 'Android']
    const   itemList3 = ['Next.js','TailwindCSS','React', 'MySQL','JS']


    return(
    <div className={`font-normal text-base py-2 ${isNightMode ? 'text-night-light' : 'text-day-light'}`}>
        <h2 className={`font-semibold text-xl my-6 ${isNightMode ? 'text-night' : 'text-day'}`}>MY PROJECTS</h2>

        <div className={`relative project-section my-4 transition-all duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1 opacity-80 ${isNightMode ? 'bg-stone-700' : 'bg-slate-200'}`}>
            <div className='p-6'>
                <h3 className={`font-semibold text-2xl mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>NGO Management - Solo Project</h3>
                <p className="text-base font-semibold">A management system for small and medium non-profit organization</p>
                <ul className="list-disc list-inside">
                    <li className="text-base font-semibold">Manage members, volunteers, and events</li>
                    <li className="text-base font-semibold">Mange event's attendees and volunteers</li>
                    <li className="text-base font-semibold">Schedule volunteers</li>
                </ul>
                <div className="flex flex-wrap">
                    {itemList1.map((item) => (
                        <div className={`rounded-full px-1 mr-1 mt-1 opacity-70 ${isNightMode? 'tag-night' : 'tag-day'}`}>
                            <p className=" text-base">#{item}</p>
                        </div>
                    ))}
                </div>
                <div className="thumbnail mt-2">
                    <video className="w-full" src="/path/to/project-video.mp4" autoPlay loop muted />
                </div>
            </div>
        </div>
        <div className={`relative project-section my-4 transition-all duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1 opacity-80 ${isNightMode ? 'bg-stone-700' : 'bg-slate-200'}`}>
            <div className='p-6'>
                <h3 className={`font-semibold text-2xl mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Expense Tracking Mobile App - BillX - Solo Project</h3>
                <p className="text-base font-semibold">Tracking everyday's expense, designed for personal and small business, providing a financial insight.</p>
                <ul className="list-disc list-inside">
                    <li className="text-base font-semibold">Store expense record, provide insight visually with charts</li>
                    <li className="text-base font-semibold">Instant sync with online database</li>
                    <li className="text-base font-semibold">Expense group in categories, accounts, savings, budget</li>
                    <li className="text-base font-semibold">Store up to 10 years expense to assist tax filing</li>
                </ul>
                <div className="flex flex-wrap">
                    {itemList2.map((item) => (
                        <div className={`rounded-full px-1 mr-1 mt-1 opacity-70 ${isNightMode? 'tag-night' : 'tag-day'}`}>
                            <p className=" text-base">#{item}</p>
                        </div>
                    ))}
                </div>                <div className="thumbnail mt-2">
                    <video className="w-full" src="/path/to/project-video.mp4" autoPlay loop muted />
                </div>
            </div>
        </div>
        <div className={`relative project-section my-4 transition-all duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1 opacity-80 ${isNightMode ? 'bg-stone-700' : 'bg-slate-200'}`}>
            <div className='p-6'>
                <h3 className={`font-semibold text-base mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Grow with Nutrition management webapp - Team project</h3>
                <p className="text-base font-semibold">Short description of the project. Detailing the purpose and functionality.</p>
                <ul className="list-disc list-inside">
                    <li className="text-base font-semibold">Manage users</li>
                    <li className="text-base font-semibold">Selling services</li>
                    <li className="text-base font-semibold">Schedule session and assign staffs</li>
                    <li className="text-base font-semibold">Display information and advertising</li>
                </ul>
                <div className="flex flex-wrap">
                    {itemList3.map((item) => (
                        <div className={`rounded-full px-1 mr-1 mt-1 opacity-70 ${isNightMode? 'tag-night' : 'tag-day'}`}>
                            <p className=" text-base">#{item}</p>
                        </div>
                    ))}
                </div>                <div className="thumbnail mt-2">
                    <video className="w-full" src="/path/to/project-video.mp4" autoPlay loop muted />
                </div>
            </div>
        </div>

    </div>
    );
}