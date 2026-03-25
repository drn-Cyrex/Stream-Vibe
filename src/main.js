import { overlayMenu } from "@/modules/OverlayMenu"
import SliderCollection from "@/modules/SliderCollection"
import TabsCollection from "@/modules/TabsCollection"
import VideoPlayerCollection from "./modules/VideoPlayerCollection"

new SliderCollection()
new TabsCollection()
new VideoPlayerCollection()

function initApp() {
   overlayMenu()
}

initApp()
