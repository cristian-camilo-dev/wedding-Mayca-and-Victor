import { Icon } from "@iconify/react";

const ControlSongs = () => {
  return (
    <div className="container_songs">
    <div className="container_songs__icon">
    <div className="container_songs__controls">
    <Icon
      icon="material-symbols:add-circle-outline-rounded"
      width={25}
      color="white"
    />
    <Icon
      icon="mdi:arrow-down-thin-circle-outline"
      width={25}
      color="white"
    />
    
    <Icon icon="mdi:dots-horizontal" width={25} color="white" />
    </div>
    <div className="container_songs__controls">
    <Icon icon="mdi:shuffle-variant" width={25} color="white" />
    <Icon icon="mdi:play-circle" width={40} color="white" />
    </div>
  </div>
  </div>
  )
}

export default ControlSongs