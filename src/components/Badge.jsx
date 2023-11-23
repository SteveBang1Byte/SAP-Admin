const Badge = ({ badgeType}) => {

    const getBadgeClass = () => {
        switch (badgeType) {
            case BadgeType.ACTIVE:
                return (
                    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Active</span>
                )
            case BadgeType.INACTIVE:
                return (
                    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Inactive</span>
                )
            case BadgeType.DEACTIVATED:
                return (
                    <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Deactivated</span>
                )
            default:
                return '';
        }
    };

    return (
            <>
            {
                getBadgeClass(badgeType)
            }
            </>
    )
};



export default Badge;

export const BadgeType = {
    ACTIVE : 'active',
    INACTIVE : 'inactive',
    DEACTIVATED : 'deactivated',
}