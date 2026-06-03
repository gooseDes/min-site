import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IconProps {
    icon: IconProp;
    size?: number;
}

function Icon(props: IconProps) {
    const { icon, size } = props;
    return <FontAwesomeIcon icon={icon} fontSize={size} color="#fff" />;
}

export default Icon;
