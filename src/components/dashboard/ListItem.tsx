export const ListItem = ({
    iconSrc,
    altText,
    listContent
}: {
    iconSrc?: string;
    altText?: string;
    listContent: string;
}) => {
    return (
        <li>
            <div className="flex items-center">
                <img
                    src={iconSrc ?? "/chart-line-icon.svg"}
                    alt={altText ?? "list-img-one"}
                    className="inline-block mr-1 w-4 h-4"
                />
                <a className="flex-1 text=[#303030]">{listContent}</a>
                <img
                    src={iconSrc ?? "/circle-question-regular.svg"}
                    alt={altText ?? "list-img-two"}
                    className="inline-block w-4 h-4"
                />
            </div>
        </li>
    )
}