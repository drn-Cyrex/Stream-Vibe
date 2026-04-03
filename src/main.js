import { overlayMenu } from "@/modules/OverlayMenu"
import SliderCollection from "@/modules/SliderCollection"
import TabsCollection from "@/modules/TabsCollection"
import VideoPlayerCollection from "./modules/VideoPlayerCollection"
import InputMaskCollection from "./modules/inputMaskCollection"
import SelectCollection from "./modules/SelectCollection"

new SliderCollection()
new TabsCollection()
new VideoPlayerCollection()
new InputMaskCollection()
new SelectCollection()

function initApp() {
   overlayMenu()
}

initApp()
