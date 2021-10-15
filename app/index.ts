import * as PIXI from "pixi.js";
// window.PIXI = PIXI;
// import "pixi-spine";
import { Spine } from "pixi-spine";
import { setText } from "./setText";
import { FunctionTypeNode } from "typescript";

// constant
const WIDTH: number = 1280;
const HEIGHT: number = 640;
const BG_COLOR: number = 0x000000;

// renderer
const renderer: PIXI.Renderer = new PIXI.Renderer({
  width: WIDTH,
  height: HEIGHT,
  backgroundColor: BG_COLOR,
});
document.body.appendChild(renderer.view);

// stage
const stage: PIXI.Container = new PIXI.Container();

// init
let position: number = 0;
let background: PIXI.Sprite;
let background2: PIXI.Sprite;
let foreground: PIXI.Sprite;
let foreground2: PIXI.Sprite;

// text
let text_libVersion: PIXI.Text;
let text_instruct: PIXI.Text;

// Custom GameLoop(v5), call requestAnimationFrame directly.
let oldTime: number = Date.now();
let ms: number = 1000;
// let fps: number = 60;
let animate = () => {
  // console.log("animate()");
  let newTime: number = Date.now();
  let deltaTime: number = newTime - oldTime;
  oldTime = newTime;
  deltaTime < 0 ? (deltaTime = 0) : deltaTime;
  deltaTime > ms ? (deltaTime = ms) : deltaTime;
  renderer.render(stage);
  // stats.begin();
  requestAnimationFrame(animate);
  position += 10;

  background.x = -(position * 0.6);
  background.x %= 1286 * 2;
  if (background.x < 0) {
    background.x += 1286 * 2;
  }
  background.x -= 1286;

  background2.x = -(position * 0.6) + 1286;
  background2.x %= 1286 * 2;
  if (background2.x < 0) {
    background2.x += 1286 * 2;
  }
  background2.x -= 1286;

  foreground.x = -position;
  foreground.x %= 1286 * 2;
  if (foreground.x < 0) {
    foreground.x += 1286 * 2;
  }
  foreground.x -= 1286;

  foreground2.x = -position + 1286;
  foreground2.x %= 1286 * 2;
  if (foreground2.x < 0) {
    foreground2.x += 1286 * 2;
  }
  foreground2.x -= 1286;
  // stats.end();
};

// loader
let loader: PIXI.Loader = new PIXI.Loader();

// asset
const ASSET_SP: string = "assets/spine/alien-pro.json";
const ASSET_BG: string = "assets/images/iP4_BGtile.jpg";
const ASSET_FG: string = "assets/images/iP4_ground.png";

// container
let container: any = new PIXI.Container();
container.width = WIDTH;
container.height = HEIGHT;
container.x = 0;
container.y = 0;
container.pivot.x = 0.5;
container.pivot.y = 0.5;
container.interactive = true;
container.interactiveChildren = true;
container.buttonMode = false;
stage.addChild(container);

// load
loader.add("sp_data2", ASSET_SP);
loader.add("bg_data", ASSET_BG);
loader.add("fg_data", ASSET_FG);

loader.load((loader: PIXI.Loader, resources: any) => {
  console.log(loader);
  console.log(resources);

  // bg
  background = new PIXI.Sprite(resources.bg_data.texture);
  container.addChild(background);
  background2 = new PIXI.Sprite(resources.bg_data.texture);
  container.addChild(background2);

  // fg
  foreground = new PIXI.Sprite(resources.fg_data.texture);
  foreground2 = new PIXI.Sprite(resources.fg_data.texture);
  foreground.anchor.set(0, 0.7);
  foreground.position.y = HEIGHT;
  foreground2.anchor.set(0, 0.7);
  foreground2.position.y = HEIGHT;
  container.addChild(foreground, foreground2);

  // spine
  const alien: any = new Spine(
    resources.sp_data2.spineData
  );
  const scale: number = 0.5; //0.3;
  alien.x = 1280 / 2; // - alien.width / 2;
  alien.y = 580;
  alien.scale.x = alien.scale.y = scale;
  container.addChild(alien);

  alien.stateData.setMix("run", "jump", 0.2);
  alien.stateData.setMix("jump", "run", 0.4);

  alien.state.setAnimation(0, "run", true);
  alien.state.timeScale = 0.5;

  // touch event
  alien.interactive = true;
  alien.on("pointerdown", onTouchStart);

  // text pixi version
  let version: string = `PixiJS: ver.${PIXI.VERSION}`;
  text_libVersion = setText(version, "Arial", 16, 0xf0fff0, "left", "normal");
  container.addChild(text_libVersion);
  text_libVersion.x = 1280 / 2 - alien.width / 2;
  text_libVersion.y = 50;

  // text instruct
  let instruct: string = "Touch the Alien!";
  text_instruct = setText(instruct,
    "Arial",
    24,
    0xffcc00,
    "center",
    "bold",
    "#996600",
    4,
    false,
    "#666666");
  container.addChild(text_instruct);
  text_instruct.x = 1280 / 2 - alien.width / 2;
  text_instruct.y = 100;

  // app start
  requestAnimationFrame(animate);
});

const onTouchStart: Function = (e: PIXI.InteractionEvent) => {
  console.log("spine obj touched");
  let obj: any = e.currentTarget as Spine;
  obj.state.setAnimation(0, "jump", false);
  obj.state.addAnimation(0, "run", true, 0);
};
