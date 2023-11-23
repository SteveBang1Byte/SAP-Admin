/**
 * Creates a tabs component using the Tailwind CSS framework.
 */
const Tabs = ({ children }) => {
    // const [activeTab, setActiveTab] = useState(0);
    // const [tabs, setTabs] = useState([]);

    // useEffect(() => {
    //     const tabs = [];
    //     React.Children.forEach(children, (child) => {
    //         if (!React.isValidElement(child)) return;
    //         if (child.type !== Tab) return;
    //         tabs.push(child);
    //     });
    //     setTabs(tabs);
    // }, [children]);

    // const handleTabClick = (index) => {
    //     setActiveTab(index);
    // };

    // return (
    //     <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
    //         <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
    //             {tabs.map((tab, index) => {
    //                 const { label } = tab.props;
    //                 return (
    //                     <li key={index} className="me-2" role="presentation">
    //                         <button
    //                             className={`inline-block p-4 border-b-2 rounded-t-lg ${
    //                                 activeTab === index
    //                                     ? "border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
    //                                     : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500"
    //                             }`}
    //                             onClick={() => handleTabClick(index)}
    //                             role="tab"
    //                             aria-controls={label}
    //                             aria-selected={activeTab === index}
    //                         >
    //                             {label}
    //                         </button>
    //                     </li>
    //                 );
    //             })}
    //         </ul>
    //         <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel" aria-labelledby={tabs[activeTab].props.label}>
    //             {tabs[activeTab].props.children}
    //         </div>
    //     </div>
    // );

    return (   <>Tabs</> );
};

export default Tabs;
