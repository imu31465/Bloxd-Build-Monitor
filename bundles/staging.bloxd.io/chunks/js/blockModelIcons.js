export const id = 4;
export const ids = [4];
export const modules = {
  37558: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => gR,
      i: () => bR,
      m: () => CR,
      o: () => WR,
      r: () => XR
    });
    var yR = GR(289),
      tR = GR(103);
    const uR = new(GR(37561).b)(new URL(GR.p + GR.u(3), GR.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var ZR = GR(1825),
      qR = GR(2366);
    const iR = 1e4,
      fR = 3e4;
    let VR = null,
      KR = null,
      wR = null,
      rR = !1,
      eR = 0;
    const aR = new Map;
    let LR = null;
    const nR = new Map,
      UR = new Map;

    function WR(RR) {
      const JR = new Promise(((JR, GR) => {
        const yR = new Image;
        yR.crossOrigin = "anonymous", yR.fetchPriority = "high", yR.onload = () => {
          JR(yR)
        }, yR.onerror = () => {
          GR(new Error(`A block icon's texture did not load: ${RR.slice(0,100)}`))
        }, yR.src = RR
      }));
      return (0, qR.h)(JR)
    }

    function AR(RR) {
      var JR, GR;
      rR || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${RR}`), rR = !0, null === (JR = VR) || void 0 === JR || JR.terminate(), VR = null, KR = null, nR.clear(), UR.clear();
      for (const yR of aR.values()) yR(null);
      aR.clear(), null === (GR = LR) || void 0 === GR || GR()
    }

    function CR() {
      return null !== KR
    }

    function XR() {
      return wR ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === yR.c.ios_icon_worker_v1 && (0, tR.isWebKit)()) return;
        try {
          VR = await async function() {
            return await uR.ready(), uR.start()
          }()
        } catch (qR) {
          return void AR(`did not start (${String(qR)})`)
        }
        let RR = () => {};
        const JR = new Promise((JR => {
          RR = JR
        }));
        VR.onmessage = JR => {
          let {
            data: GR
          } = JR;
          if ("started" === GR.type) KR = VR, RR();
          else if ("failed" === GR.type) AR(`failed a draw (${GR.message})`);
          else {
            var yR, tR;
            null === (yR = aR.get(GR.id)) || void 0 === yR || yR(GR.url), aR.delete(GR.id), null === (tR = LR) || void 0 === tR || tR()
          }
        }, VR.onerror = JR => {
          JR.preventDefault(), AR(`stopped (${JR.message||"its script did not load or run"})`), RR()
        };
        const GR = `did not start in ${fR/1e3} s`;
        await (0, ZR.k)(JR, fR, GR).catch((() => {
          AR(GR)
        }))
      }(), wR
    }

    function MR() {
      if (null !== LR || 0 === aR.size) return;
      const RR = new Promise((RR => {
          LR = RR
        })),
        JR = `did not answer in ${iR/1e3} s`;
      (0, ZR.k)(RR, iR, JR).then((() => {
        LR = null, MR()
      }), (() => {
        LR = null, AR(JR)
      }))
    }

    function BR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      RR.postMessage(JR, GR)
    }

    function lR(RR, JR, GR, yR) {
      let tR = JR.get(GR);
      return void 0 === tR && (tR = yR().then((async JR => {
        let {
          image: GR,
          request: yR
        } = JR;
        try {
          const JR = await createImageBitmap(GR);
          BR(RR, yR(JR), [JR])
        } catch (tR) {
          AR(`could not take an image (${String(tR)})`)
        }
      })), tR.catch((() => {
        JR.get(GR) === tR && JR.delete(GR)
      })), JR.set(GR, tR)), tR
    }
    async function pR(RR, JR) {
      XR();
      const GR = KR;
      if (null === GR) return null;
      if (await RR(GR), KR !== GR) return null;
      const yR = ++eR;
      return new Promise((RR => {
        aR.set(yR, RR), BR(GR, JR(yR)), MR()
      }))
    }

    function gR(RR, JR, GR) {
      return pR((JR => Promise.all([RR.top, RR.left, RR.right].map((RR => function(RR, JR) {
        return lR(RR, nR, JR, (async () => ({
          image: await WR(JR),
          request: RR => ({
            type: "texture",
            url: JR,
            bitmap: RR
          })
        })))
      }(JR, RR))))), (yR => ({
        type: "draw",
        id: yR,
        ...RR,
        size: JR,
        outlineWidth: GR
      })))
    }

    function bR(RR, JR, GR, yR) {
      return pR((GR => function(RR, JR, GR) {
        return lR(RR, UR, JR, (async () => {
          const {
            texture: RR,
            ...yR
          } = await GR();
          return {
            image: await WR(RR),
            request: RR => ({
              type: "model",
              name: JR,
              bitmap: RR,
              geometry: yR
            })
          }
        }))
      }(GR, RR, JR)), (JR => ({
        type: "drawModel",
        id: JR,
        name: RR,
        size: GR,
        outlineWidth: yR
      })))
    }
  },
  37567: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      blockModelIconModels: () => wR,
      drawnBlockModelIconUrl: () => LR,
      getBlockModelIconUrl: () => aR,
      hasBlockModelIcon: () => KR
    });
    var yR = GR(37558),
      tR = GR(37549);
    const uR = JSON.parse('{"67 Statue":["67"],"A Doe Through The Green":["_Deer Painting Bottom Left","_Deer Painting Bottom Right","_Deer Painting Top Left","_Deer Painting Top Right"],"Aspen Door":["Aspen Door","_Aspen Door Top"],"Auto Miner":["auto_miner_body","auto_miner_drill_back","auto_miner_drill_front","auto_miner_foot_back","auto_miner_foot_front"],"Bebek Bebek Bebek Statue":["bebek_bebek_bebek"],"Bin":["bin"],"Black Banner":["Black Banner","_Black Banner Flag"],"Black Bed":["Black Bed","_Black Bed Head"],"Black Carpet":["carpet_black_model"],"Black Strongbed":["Black Strongbed","_Black Strongbed Head"],"Black Torch":["torch_black"],"Black Wave":["wave_black"],"Blue Banner":["Blue Banner","_Blue Banner Flag"],"Blue Bed":["Blue Bed","_Blue Bed Head"],"Blue Carpet":["carpet_blue_model"],"Blue Strongbed":["Blue Strongbed","_Blue Strongbed Head"],"Blue Torch":["torch_blue"],"Blue Wave":["wave_blue"],"Bobino Musculino Statue":["bobino_musculino"],"Bobzilla Statue":["bobzilla"],"Boiling Pot":["boiling_pot"],"Bone Antlers":["bone_antlers_model"],"Brown Banner":["Brown Banner","_Brown Banner Flag"],"Brown Bed":["Brown Bed","_Brown Bed Head"],"Brown Carpet":["carpet_brown_model"],"Brown Strongbed":["Brown Strongbed","_Brown Strongbed Head"],"Brown Torch":["torch_brown"],"Brown Wave":["wave_brown"],"Brra Brra Pachim Statue":["brra_brra_pachim"],"Cannon":["cannon_barrel_back","cannon_barrel_front","cannon_bottom_back","cannon_bottom_front","cannon_top_back","cannon_top_front"],"Capitano Explovissimo Statue":["capitano_explovissimo"],"Cappuccino Ninjino Statue":["cappuccino_ninjino"],"Cedar Door":["Cedar Door","_Cedar Door Top"],"Cherry Door":["Cherry Door","_Cherry Door Top"],"Chili Pepper Plant":["chili_pepper_stage5_model"],"Chili Pepper Plant_stage1":["chili_pepper_stage1_model"],"Chili Pepper Plant_stage2":["chili_pepper_stage2_model"],"Chili Pepper Plant_stage3":["chili_pepper_stage3_model"],"Chili Pepper Plant_stage4":["chili_pepper_stage4_model"],"Chili Pepper Plant_stage5":["chili_pepper_stage5_model"],"Chimpanzano Bananano Statue":["chimpanzano_bananano"],"Chopping Board":["chopping_board"],"Coloured Wheel":["wheel"],"Coolant Pipe":["baf2_fluid_pipe_nz_pz"],"Crystal":["crystal"],"Cyan Banner":["Cyan Banner","_Cyan Banner Flag"],"Cyan Bed":["Cyan Bed","_Cyan Bed Head"],"Cyan Carpet":["carpet_cyan_model"],"Cyan Strongbed":["Cyan Strongbed","_Cyan Strongbed Head"],"Cyan Torch":["torch_cyan"],"Cyan Wave":["wave_cyan"],"Diamond Spikes":["Spikes_Diamond"],"Draugr Banner":["Draugr Banner","_Draugr Banner Flag"],"Dreaming Canine":["_Wolf Painting Bottom Left","_Wolf Painting Bottom Right","_Wolf Painting Top Left","_Wolf Painting Top Right"],"Duo Blocchino Statue":["2_block"],"Extractor Pipe":["extractor_pipe_straight_z"],"Filter Pipe":["filter_pipe_input_pz"],"Fluid Pipe":["baf2_fluid_pipe_nz_pz"],"Football":["football"],"Frying Pan":["frying_pan"],"Glowing Mushroom":["glowing_mushroom"],"Gold Antlers":["gold_antlers_model"],"Gold Spikes":["Spikes_Gold"],"Grant Wool":["_Sheep Painting Bottom Left","_Sheep Painting Bottom Right","_Sheep Painting Top Left","_Sheep Painting Top Right"],"Gray Banner":["Gray Banner","_Gray Banner Flag"],"Gray Bed":["Gray Bed","_Gray Bed Head"],"Gray Carpet":["carpet_gray_model"],"Gray Strongbed":["Gray Strongbed","_Gray Strongbed Head"],"Gray Torch":["torch_gray"],"Green Banner":["Green Banner","_Green Banner Flag"],"Green Bed":["Green Bed","_Green Bed Head"],"Green Carpet":["carpet_green_model"],"Green Strongbed":["Green Strongbed","_Green Strongbed Head"],"Green Torch":["torch_green"],"Green Wave":["wave_green"],"Grey Wave":["wave_grey"],"Hob Boiling":["hob_boiling"],"Hob Frying":["hob_frying"],"Hump Day":["_Camel Painting Bottom Left","_Camel Painting Bottom Right","_Camel Painting Top Left","_Camel Painting Top Right"],"Il Wizardini Del Porko Statue":["il_wizardini_del_porko"],"Iron Spikes":["Spikes_Iron"],"Job Application Statue":["job_application"],"John Beef Statue":["john_beef"],"Jump Pad":["jump_pad"],"Jungle Door":["Jungle Door","_Jungle Door Top"],"Kill Spikes":["Spikes_Kill"],"Kitchen Worktop":["kitchen_worktop"],"Landing Pad":["landing_pad"],"Lantern":["lantern"],"Light Blue Banner":["Light Blue Banner","_Light Blue Banner Flag"],"Light Blue Bed":["Light Blue Bed","_Light Blue Bed Head"],"Light Blue Carpet":["carpet_light_blue_model"],"Light Blue Strongbed":["Light Blue Strongbed","_Light Blue Strongbed Head"],"Light Blue Torch":["torch_light_blue"],"Light Blue Wave":["wave_light_blue"],"Light Gray Banner":["Light Gray Banner","_Light Gray Banner Flag"],"Light Gray Bed":["Light Gray Bed","_Light Gray Bed Head"],"Light Gray Carpet":["carpet_light_gray_model"],"Light Gray Strongbed":["Light Gray Strongbed","_Light Gray Strongbed Head"],"Light Gray Torch":["torch_light_gray"],"Light Grey Wave":["wave_light_grey"],"Lily Pad":["lily_pad_model"],"Lime Banner":["Lime Banner","_Lime Banner Flag"],"Lime Bed":["Lime Bed","_Lime Bed Head"],"Lime Carpet":["carpet_lime_model"],"Lime Strongbed":["Lime Strongbed","_Lime Strongbed Head"],"Lime Torch":["torch_lime"],"Lime Wave":["wave_lime"],"Lucchia Blocchi Statue":["lucchia_blocchi"],"Lunite Auto Miner":["auto_miner_lunite_body","auto_miner_lunite_drill_back","auto_miner_lunite_drill_front","auto_miner_lunite_foot_back","auto_miner_lunite_foot_front"],"Magenta Banner":["Magenta Banner","_Magenta Banner Flag"],"Magenta Bed":["Magenta Bed","_Magenta Bed Head"],"Magenta Carpet":["carpet_magenta_model"],"Magenta Strongbed":["Magenta Strongbed","_Magenta Strongbed Head"],"Magenta Torch":["torch_magenta"],"Magenta Wave":["wave_magenta"],"Mango Door":["Mango Door","_Mango Door Top"],"Maple Door":["Maple Door","_Maple Door Top"],"Merger Pipe":["merger_pipe_output_pz"],"Monsieur Bedwar Statue":["monsieur_bedwar"],"Noticeboard":["noticeboard_wall_single"],"Noticeboard Standing":["noticeboard_standing"],"Noticeboard Standing Bottom":["noticeboard_standing_bottom"],"Noticeboard Standing Bottom Left":["noticeboard_standing_bottom_left"],"Noticeboard Standing Bottom Right":["noticeboard_standing_bottom_right"],"Noticeboard Standing Left":["noticeboard_standing_left"],"Noticeboard Standing Leg":["noticeboard_standing_leg"],"Noticeboard Standing Right":["noticeboard_standing_right"],"Noticeboard Standing Top":["noticeboard_standing_top"],"Noticeboard Standing Top Left":["noticeboard_standing_top_left"],"Noticeboard Standing Top Right":["noticeboard_standing_top_right"],"Noticeboard Wall":["noticeboard_wall"],"Noticeboard Wall Bottom":["noticeboard_wall_bottom"],"Noticeboard Wall Bottom Left":["noticeboard_wall_bottom_left"],"Noticeboard Wall Bottom Right":["noticeboard_wall_bottom_right"],"Noticeboard Wall Left":["noticeboard_wall_left"],"Noticeboard Wall Right":["noticeboard_wall_right"],"Noticeboard Wall Top":["noticeboard_wall_top"],"Noticeboard Wall Top Left":["noticeboard_wall_top_left"],"Noticeboard Wall Top Right":["noticeboard_wall_top_right"],"Orange Banner":["Orange Banner","_Orange Banner Flag"],"Orange Bed":["Orange Bed","_Orange Bed Head"],"Orange Carpet":["carpet_orange_model"],"Orange Strongbed":["Orange Strongbed","_Orange Strongbed Head"],"Orange Torch":["torch_orange"],"Orange Wave":["wave_orange"],"Palm Door":["Palm Door","_Palm Door Top"],"Pear Door":["Pear Door","_Pear Door Top"],"Pine Door":["Pine Door","_Pine Door Top"],"Pink Banner":["Pink Banner","_Pink Banner Flag"],"Pink Bed":["Pink Bed","_Pink Bed Head"],"Pink Carpet":["carpet_pink_model"],"Pink Strongbed":["Pink Strongbed","_Pink Strongbed Head"],"Pink Torch":["torch_pink"],"Pink Wave":["wave_pink"],"Pipe":["pipe_straight_z"],"Plum Door":["Plum Door","_Plum Door Top"],"Purple Banner":["Purple Banner","_Purple Banner Flag"],"Purple Bed":["Purple Bed","_Purple Bed Head"],"Purple Carpet":["carpet_purple_model"],"Purple Strongbed":["Purple Strongbed","_Purple Strongbed Head"],"Purple Torch":["torch_purple"],"Purple Wave":["wave_purple"],"Rainbow Banner":["Rainbow Banner","_Rainbow Banner Flag"],"Red Banner":["Red Banner","_Red Banner Flag"],"Red Bed":["Red Bed","_Red Bed Head"],"Red Carpet":["carpet_red_model"],"Red Strongbed":["Red Strongbed","_Red Strongbed Head"],"Red Torch":["torch_red"],"Red Wave":["wave_red"],"Rocket Ship":["rocket_northeast_1","rocket_northwest_1","rocket_southeast_1","rocket_southwest_1"],"Rocket Ship S2":["rocket_northeast_1","rocket_northeast_2","rocket_northwest_1","rocket_northwest_2","rocket_southeast_1","rocket_southeast_2","rocket_southwest_1","rocket_southwest_2"],"Rocket Ship S3":["rocket_northeast_1","rocket_northeast_2","rocket_northeast_3","rocket_northwest_1","rocket_northwest_2","rocket_northwest_3","rocket_southeast_1","rocket_southeast_2","rocket_southeast_3","rocket_southwest_1","rocket_southwest_2","rocket_southwest_3"],"Rocket Ship S4":["rocket_northeast_1","rocket_northeast_2","rocket_northeast_3","rocket_northeast_4","rocket_northwest_1","rocket_northwest_2","rocket_northwest_3","rocket_northwest_4","rocket_southeast_1","rocket_southeast_2","rocket_southeast_3","rocket_southeast_4","rocket_southwest_1","rocket_southwest_2","rocket_southwest_3","rocket_southwest_4"],"Rocket Ship S5":["rocket_northeast_1","rocket_northeast_2","rocket_northeast_3","rocket_northeast_4","rocket_northeast_5","rocket_northwest_1","rocket_northwest_2","rocket_northwest_3","rocket_northwest_4","rocket_northwest_5","rocket_southeast_1","rocket_southeast_2","rocket_southeast_3","rocket_southeast_4","rocket_southeast_5","rocket_southwest_1","rocket_southwest_2","rocket_southwest_3","rocket_southwest_4","rocket_southwest_5"],"Skull Banner":["Skull Banner","_Skull Banner Flag"],"Slicing Board":["slicing_board"],"Slime Trail":["slime_trail"],"Small Black Pod":["Small Black Pod","_Small Black Pod Mid","_Small Black Pod Top"],"Small Blue Pod":["Small Blue Pod","_Small Blue Pod Mid","_Small Blue Pod Top"],"Small Brown Pod":["Small Brown Pod","_Small Brown Pod Mid","_Small Brown Pod Top"],"Small Cyan Pod":["Small Cyan Pod","_Small Cyan Pod Mid","_Small Cyan Pod Top"],"Small Gray Pod":["Small Gray Pod","_Small Gray Pod Mid","_Small Gray Pod Top"],"Small Green Pod":["Small Green Pod","_Small Green Pod Mid","_Small Green Pod Top"],"Small Light Blue Pod":["Small Light Blue Pod","_Small Light Blue Pod Mid","_Small Light Blue Pod Top"],"Small Light Gray Pod":["Small Light Gray Pod","_Small Light Gray Pod Mid","_Small Light Gray Pod Top"],"Small Lime Pod":["Small Lime Pod","_Small Lime Pod Mid","_Small Lime Pod Top"],"Small Magenta Pod":["Small Magenta Pod","_Small Magenta Pod Mid","_Small Magenta Pod Top"],"Small Orange Pod":["Small Orange Pod","_Small Orange Pod Mid","_Small Orange Pod Top"],"Small Pink Pod":["Small Pink Pod","_Small Pink Pod Mid","_Small Pink Pod Top"],"Small Purple Pod":["Small Purple Pod","_Small Purple Pod Mid","_Small Purple Pod Top"],"Small Red Pod":["Small Red Pod","_Small Red Pod Mid","_Small Red Pod Top"],"Small White Pod":["Small White Pod","_Small White Pod Mid","_Small White Pod Top"],"Small Yellow Pod":["Small Yellow Pod","_Small Yellow Pod Mid","_Small Yellow Pod Top"],"Spectral Door":["Spectral Door","_Spectral Door Top"],"Splitter Pipe":["splitter_pipe"],"Stampede":["_Cow Painting Bottom Left","_Cow Painting Bottom Right","_Cow Painting Top Left","_Cow Painting Top Right"],"Standing Noticeboard":["noticeboard_standing_single"],"Stone Spikes":["Spikes_Stone"],"Strong Jump Pad":["jump_pad_strong"],"Sunbathed Gallope":["_Horse Painting Bottom Left","_Horse Painting Bottom Right","_Horse Painting Top Left","_Horse Painting Top Right"],"Super Jump Pad":["jump_pad_super"],"Torch":["torch"],"Twirlina Cappucina Statue":["twirlina_cappucina"],"UFO":["ufo"],"Unforgotten Pig":["_Pig Painting Bottom Left","_Pig Painting Bottom Right","_Pig Painting Top Left","_Pig Painting Top Right"],"Vending Machine":["vending_machine_bottom","vending_machine_top"],"Weak Jump Pad":["jump_pad_weak"],"Whiskers":["_Wildcat Painting Bottom Left","_Wildcat Painting Bottom Right","_Wildcat Painting Top Left","_Wildcat Painting Top Right"],"White Banner":["White Banner","_White Banner Flag"],"White Bed":["White Bed","_White Bed Head"],"White Carpet":["carpet_white_model"],"White Strongbed":["White Strongbed","_White Strongbed Head"],"White Torch":["torch_white"],"White Wave":["wave_white"],"Wire":["wire_straight_z"],"Wood Spikes":["Spikes_Wood"],"Yellow Banner":["Yellow Banner","_Yellow Banner Flag"],"Yellow Bed":["Yellow Bed","_Yellow Bed Head"],"Yellow Carpet":["carpet_yellow_model"],"Yellow Strongbed":["Yellow Strongbed","_Yellow Strongbed Head"],"Yellow Torch":["torch_yellow"],"Yellow Wave":["wave_yellow"]}'),
      ZR = GR(37576),
      qR = new Map(ZR.keys().filter((RR => RR.startsWith("./"))).map((RR => [RR.slice(2, -5), RR]))),
      iR = new Map,
      fR = new Map,
      VR = new Map;

    function KR(RR) {
      return qR.has(RR)
    }

    function wR(RR) {
      var JR;
      return null !== (JR = uR[RR]) && void 0 !== JR ? JR : [RR]
    }

    function rR(RR) {
      return ZR(qR.get(RR))
    }
    async function eR(RR, JR, GR) {
      const {
        data: yR,
        texture: uR
      } = await
      function(RR) {
        let JR = iR.get(RR);
        return JR || (JR = rR(RR).then((async RR => {
          const JR = new Image;
          JR.src = RR.texture, await JR.decode();
          const GR = document.createElement("canvas");
          GR.width = JR.width, GR.height = JR.height;
          const yR = GR.getContext("2d");
          return yR.drawImage(JR, 0, 0), {
            data: RR,
            texture: {
              width: JR.width,
              height: JR.height,
              pixels: yR.getImageData(0, 0, JR.width, JR.height).data
            }
          }
        })), JR.catch((() => {
          iR.delete(RR)
        })), iR.set(RR, JR)), JR
      }(RR), ZR = document.createElement("canvas");
      return ZR.width = JR, ZR.height = JR, ZR.getContext("2d").putImageData(new ImageData((0, tR.n)(yR, uR, JR, GR), JR, JR), 0, 0), ZR.toDataURL()
    }

    function aR(RR, JR, GR) {
      const tR = `${JR}|${GR}|${RR}`;
      let uR = fR.get(tR);
      return uR || (uR = (0, yR.i)(RR, (() => rR(RR)), JR, GR).then((yR => null !== yR && void 0 !== yR ? yR : eR(RR, JR, GR))), uR.then((GR => {
        const yR = VR.get(RR);
        GR && (void 0 === yR || yR.size < JR) && VR.set(RR, {
          size: JR,
          url: GR
        })
      }), (() => {
        fR.delete(tR)
      })), fR.set(tR, uR)), uR
    }

    function LR(RR) {
      var JR, GR;
      return null !== (JR = null === (GR = VR.get(RR)) || void 0 === GR ? void 0 : GR.url) && void 0 !== JR ? JR : null
    }
  },
  37549: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR,
      g: () => iR,
      i: () => ZR,
      m: () => wR,
      n: () => fR
    });
    const yR = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      tR = .6,
      uR = {
        width: 2 * yR.across,
        height: 2 * yR.down + yR.up
      };

    function ZR(RR, JR) {
      const GR = JR > 0 ? JR + 1 : 0,
        ZR = RR * tR - JR / yR.across;
      return Math.max(0, Math.min(ZR, (RR - 2 * GR) / uR.height))
    }
    const qR = [15, 15, 15],
      iR = {
        top: 1,
        left: .85,
        right: .7
      };

    function fR(RR, JR, GR, yR) {
      const {
        vertices: tR,
        uvs: qR,
        indices: iR,
        shades: fR
      } = RR, VR = function(RR, JR) {
        const GR = ZR(RR, JR),
          yR = uR.width * GR,
          tR = uR.height * GR;
        return {
          left: (RR - yR) / 2,
          top: (RR - tR) / 2,
          width: yR,
          height: tR
        }
      }(GR, yR), KR = new Float32Array(tR.length);
      for (let uR = 0; uR < tR.length; uR += 3) KR[uR] = VR.left + tR[uR] * VR.width, KR[uR + 1] = VR.top + tR[uR + 1] * VR.height, KR[uR + 2] = tR[uR + 2];
      const rR = new Float32Array(GR * GR).fill(-1 / 0),
        eR = new Uint8ClampedArray(GR * GR * 4),
        aR = 255 * RR.alphaCutoff;
      for (let uR = 0; uR < iR.length; uR += 3) {
        const [RR, yR, tR] = [iR[uR], iR[uR + 1], iR[uR + 2]], [ZR, VR, wR] = [3 * RR, 3 * yR, 3 * tR], [LR, nR, UR, WR, AR, CR] = [KR[ZR], KR[ZR + 1], KR[VR], KR[VR + 1], KR[wR], KR[wR + 1]], XR = (UR - LR) * (CR - nR) - (AR - LR) * (WR - nR);
        if (Math.abs(XR) < 1e-9) continue;
        const MR = fR[uR / 3],
          [BR, lR, pR, gR, bR, vR] = [qR[2 * RR], qR[2 * RR + 1], qR[2 * yR], qR[2 * yR + 1], qR[2 * tR], qR[2 * tR + 1]],
          OR = Math.max(0, Math.floor(Math.min(LR, UR, AR))),
          xR = Math.min(GR - 1, Math.ceil(Math.max(LR, UR, AR))),
          NR = Math.max(0, Math.floor(Math.min(nR, WR, CR))),
          DR = Math.min(GR - 1, Math.ceil(Math.max(nR, WR, CR)));
        for (let uR = NR; uR <= DR; uR++)
          for (let RR = OR; RR <= xR; RR++) {
            const [yR, tR] = [RR + .5, uR + .5], qR = ((yR - LR) * (CR - nR) - (AR - LR) * (tR - nR)) / XR, iR = ((UR - LR) * (tR - nR) - (yR - LR) * (WR - nR)) / XR, fR = 1 - qR - iR;
            if (fR < 0 || qR < 0 || iR < 0) continue;
            const OR = fR * KR[ZR + 2] + qR * KR[VR + 2] + iR * KR[wR + 2],
              xR = uR * GR + RR;
            if (OR <= rR[xR]) continue;
            const NR = Math.max(0, Math.min(JR.width - 1, Math.floor((fR * BR + qR * pR + iR * bR) * JR.width))),
              DR = 4 * (Math.max(0, Math.min(JR.height - 1, Math.floor((fR * lR + qR * gR + iR * vR) * JR.height))) * JR.width + NR);
            JR.pixels[DR + 3] < aR || (rR[xR] = OR, eR[4 * xR] = JR.pixels[DR] * MR, eR[4 * xR + 1] = JR.pixels[DR + 1] * MR, eR[4 * xR + 2] = JR.pixels[DR + 2] * MR, eR[4 * xR + 3] = 255)
          }
      }
      return wR(eR, GR, yR), eR
    }
    let VR = NaN,
      KR = new Int32Array(0);

    function wR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JR => 0 !== RR[4 * JR + 3];
      const tR = new Uint8Array(JR * JR);
      for (let qR = 0; qR < JR * JR; qR++) tR[qR] = yR(qR) ? 1 : 0;
      const uR = (RR, GR) => RR >= 0 && GR >= 0 && RR < JR && GR < JR && 0 === tR[GR * JR + RR],
        ZR = new Float32Array(JR * JR).fill(1 / 0),
        iR = function(RR) {
          if (RR !== VR) {
            const JR = Math.ceil(RR + 1),
              GR = [];
            for (let yR = -JR; yR <= JR; yR++)
              for (let tR = -JR; tR <= JR; tR++) {
                const JR = tR * tR + yR * yR;
                JR > 0 && JR < (RR + 1) ** 2 && GR.push(tR, yR, JR)
              }
            VR = RR, KR = Int32Array.from(GR)
          }
          return KR
        }(GR);
      for (let qR = 0; qR < JR; qR++)
        for (let RR = 0; RR < JR; RR++) {
          if (1 === tR[qR * JR + RR] && (uR(RR - 1, qR) || uR(RR + 1, qR) || uR(RR, qR - 1) || uR(RR, qR + 1)))
            for (let GR = 0; GR < iR.length; GR += 3) {
              const yR = RR + iR[GR],
                tR = qR + iR[GR + 1];
              if (yR >= 0 && tR >= 0 && yR < JR && tR < JR) {
                const RR = tR * JR + yR;
                ZR[RR] = Math.min(ZR[RR], iR[GR + 2])
              }
            }
        }
      for (let fR = 0; fR < JR * JR; fR++) 1 !== tR[fR] && ZR[fR] !== 1 / 0 && (RR.set(qR, 4 * fR), RR[4 * fR + 3] = Math.round(255 * Math.min(1, GR + 1 - Math.sqrt(ZR[fR]))))
    }
  },
  37561: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR
    });
    const yR = {
      wait: function(RR) {
        return new Promise((JR => {
          setTimeout(JR, RR)
        }))
      },
      stallMs: 2e4
    };
    class tR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yR;
        this.url = RR, this.options = JR, this.timing = GR, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = RR
      }
      ready() {
        if (null === this.fetched) {
          const RR = new AbortController;
          this.fetchAbort = RR, this.fetched = this.fetchWithRetries(RR.signal).then((JR => (this.fetchAbort === RR && (this.fetchAbort = null), JR)))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      forgetFailedFetch() {
        this.fetched = null
      }
      get href() {
        return this.url.href
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(RR) {
        for (let JR = 0;; JR++) {
          const GR = new URL(this.url);
          if (JR > 0 && GR.searchParams.set("cache-bust", `${Date.now()}-${JR}`), await this.fetchWhole(GR, RR)) return this.scriptUrl = GR, !0;
          if (JR >= 3 || RR.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** JR), RR.aborted) return !1
        }
      }
      async fetchWhole(RR, JR) {
        const GR = new AbortController;
        let yR;
        const tR = () => {
            clearTimeout(yR), yR = setTimeout((() => {
              GR.abort()
            }), this.timing.stallMs)
          },
          uR = () => {
            GR.abort()
          };
        JR.addEventListener("abort", uR, {
          once: !0
        }), tR();
        try {
          var ZR;
          const JR = await fetch(RR, {
            signal: GR.signal
          });
          if (!JR.ok) return !1;
          const yR = null === (ZR = JR.body) || void 0 === ZR ? void 0 : ZR.getReader();
          if (!yR) return !1;
          for (;;) {
            const {
              done: RR
            } = await yR.read();
            if (RR) return !0;
            tR()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(yR), JR.removeEventListener("abort", uR)
        }
      }
    }
  },
  37576: (RR, JR, GR) => {
    var yR = {
      "./67 Statue.json": [43351, 312],
      "./A Doe Through The Green.json": [43356, 313],
      "./Artisan Bench.json": [43363, 314],
      "./Aspen Door.json": [43366, 315],
      "./Aspen Item Pedestal.json": [43369, 316],
      "./Aspen Ladder.json": [43374, 317],
      "./Aspen Trapdoor.json": [43380, 318],
      "./Auto Miner.json": [43387, 319],
      "./Bebek Bebek Bebek Statue.json": [43396, 320],
      "./Bin.json": [43404, 321],
      "./Black Banner.json": [43410, 322],
      "./Black Bed.json": [43413, 323],
      "./Black Carpet.json": [43418, 324],
      "./Black Directional Arrow.json": [43424, 325],
      "./Black Strongbed.json": [43429, 326],
      "./Black Torch.json": [43434, 327],
      "./Black Wave.json": [43437, 328],
      "./Blue Banner.json": [43443, 329],
      "./Blue Bed.json": [43445, 330],
      "./Blue Carpet.json": [43448, 331],
      "./Blue Directional Arrow.json": [43457, 332],
      "./Blue Strongbed.json": [43462, 333],
      "./Blue Torch.json": [43469, 334],
      "./Blue Wave.json": [43475, 335],
      "./Board.json": [43481, 336],
      "./Bobino Musculino Statue.json": [43486, 337],
      "./Bobzilla Statue.json": [43493, 338],
      "./Boiling Pot.json": [43501, 339],
      "./Bone Antlers.json": [43510, 340],
      "./Brown Banner.json": [43513, 341],
      "./Brown Bed.json": [43519, 342],
      "./Brown Carpet.json": [43526, 343],
      "./Brown Directional Arrow.json": [43530, 344],
      "./Brown Strongbed.json": [43532, 345],
      "./Brown Torch.json": [43540, 346],
      "./Brown Wave.json": [43543, 347],
      "./Brra Brra Pachim Statue.json": [43546, 348],
      "./Cannon.json": [43549, 349],
      "./Capitano Explovissimo Statue.json": [43557, 350],
      "./Cappuccino Ninjino Statue.json": [43564, 351],
      "./Cedar Door.json": [43568, 352],
      "./Cedar Item Pedestal.json": [43570, 353],
      "./Cedar Ladder.json": [43578, 354],
      "./Cedar Trapdoor.json": [43584, 355],
      "./Cherry Door.json": [43588, 356],
      "./Cherry Item Pedestal.json": [43591, 357],
      "./Cherry Ladder.json": [43594, 358],
      "./Cherry Trapdoor.json": [43603, 359],
      "./Chili Pepper Plant.json": [43607, 360],
      "./Chili Pepper Plant_stage1.json": [43614, 361],
      "./Chili Pepper Plant_stage2.json": [43620, 362],
      "./Chili Pepper Plant_stage3.json": [43629, 363],
      "./Chili Pepper Plant_stage4.json": [43634, 364],
      "./Chili Pepper Plant_stage5.json": [43642, 365],
      "./Chimpanzano Bananano Statue.json": [43648, 366],
      "./Chopping Board.json": [43650, 367],
      "./Coloured Wheel.json": [43652, 368],
      "./Coolant Pipe.json": [43657, 369],
      "./Crystal.json": [43660, 370],
      "./Cyan Banner.json": [43662, 371],
      "./Cyan Bed.json": [43668, 372],
      "./Cyan Carpet.json": [43670, 373],
      "./Cyan Directional Arrow.json": [43673, 374],
      "./Cyan Strongbed.json": [43682, 375],
      "./Cyan Torch.json": [43690, 376],
      "./Cyan Wave.json": [43697, 377],
      "./Dangling Rope.json": [43706, 378],
      "./Dangling Vine.json": [43710, 379],
      "./Diamond Enchanting Table.json": [43713, 380],
      "./Diamond Spikes.json": [43717, 381],
      "./Diamond Trophy.json": [43726, 382],
      "./Draugr Banner.json": [43729, 383],
      "./Dreaming Canine.json": [43736, 384],
      "./Duo Blocchino Statue.json": [43744, 385],
      "./Extractor Pipe.json": [43746, 386],
      "./Fat Brown Mushroom.json": [43751, 387],
      "./Fat Red Mushroom.json": [43756, 388],
      "./Filter Pipe.json": [43760, 389],
      "./Fluid Pipe.json": [43766, 390],
      "./Football.json": [43770, 391],
      "./Frying Pan.json": [43778, 392],
      "./Furnace.json": [43787, 393],
      "./Glowing Mushroom.json": [43792, 394],
      "./Gold Antlers.json": [43800, 395],
      "./Gold Enchanting Table.json": [43803, 396],
      "./Gold Spikes.json": [43810, 397],
      "./Gold Trophy.json": [43813, 398],
      "./Grant Wool.json": [43819, 399],
      "./Gray Banner.json": [43827, 400],
      "./Gray Bed.json": [43836, 401],
      "./Gray Carpet.json": [43844, 402],
      "./Gray Strongbed.json": [43847, 403],
      "./Gray Torch.json": [43849, 404],
      "./Green Banner.json": [43856, 405],
      "./Green Bed.json": [43861, 406],
      "./Green Carpet.json": [43864, 407],
      "./Green Directional Arrow.json": [43870, 408],
      "./Green Strongbed.json": [43878, 409],
      "./Green Torch.json": [43887, 410],
      "./Green Wave.json": [43889, 411],
      "./Grey Directional Arrow.json": [43895, 412],
      "./Grey Wave.json": [43899, 413],
      "./Hob Boiling.json": [43902, 414],
      "./Hob Frying.json": [43911, 415],
      "./Hump Day.json": [43913, 416],
      "./Il Wizardini Del Porko Statue.json": [43922, 417],
      "./Iron Enchanting Table.json": [43925, 418],
      "./Iron Ladder.json": [43931, 419],
      "./Iron Spikes.json": [43937, 420],
      "./Iron Trophy.json": [43939, 421],
      "./Job Application Statue.json": [43942, 422],
      "./John Beef Statue.json": [43947, 423],
      "./Jump Pad.json": [43954, 424],
      "./Jungle Door.json": [43956, 425],
      "./Jungle Item Pedestal.json": [43962, 426],
      "./Jungle Ladder.json": [43971, 427],
      "./Jungle Trapdoor.json": [43980, 428],
      "./Kill Spikes.json": [43984, 429],
      "./Kitchen Worktop.json": [43993, 430],
      "./Landing Pad.json": [43998, 431],
      "./Lantern.json": [44001, 432],
      "./Leaf Bed.json": [44003, 433],
      "./Light Blue Banner.json": [44006, 434],
      "./Light Blue Bed.json": [44008, 435],
      "./Light Blue Carpet.json": [44010, 436],
      "./Light Blue Directional Arrow.json": [44013, 437],
      "./Light Blue Strongbed.json": [44021, 438],
      "./Light Blue Torch.json": [44023, 439],
      "./Light Blue Wave.json": [44030, 440],
      "./Light Gray Banner.json": [44038, 441],
      "./Light Gray Bed.json": [44043, 442],
      "./Light Gray Carpet.json": [44051, 443],
      "./Light Gray Strongbed.json": [44057, 444],
      "./Light Gray Torch.json": [44065, 445],
      "./Light Grey Directional Arrow.json": [44067, 446],
      "./Light Grey Wave.json": [44072, 447],
      "./Lily Pad.json": [44079, 448],
      "./Lime Banner.json": [44088, 449],
      "./Lime Bed.json": [44096, 450],
      "./Lime Carpet.json": [44103, 451],
      "./Lime Directional Arrow.json": [44107, 452],
      "./Lime Strongbed.json": [44111, 453],
      "./Lime Torch.json": [44113, 454],
      "./Lime Wave.json": [44117, 455],
      "./Lucchia Blocchi Statue.json": [44126, 456],
      "./Lunite Auto Miner.json": [44131, 457],
      "./Magenta Banner.json": [44134, 458],
      "./Magenta Bed.json": [44136, 459],
      "./Magenta Carpet.json": [44142, 460],
      "./Magenta Directional Arrow.json": [44144, 461],
      "./Magenta Strongbed.json": [44150, 462],
      "./Magenta Torch.json": [44157, 463],
      "./Magenta Wave.json": [44164, 464],
      "./Mango Door.json": [44170, 465],
      "./Mango Item Pedestal.json": [44177, 466],
      "./Mango Ladder.json": [44179, 467],
      "./Mango Trapdoor.json": [44183, 468],
      "./Maple Door.json": [44192, 469],
      "./Maple Ladder.json": [44201, 470],
      "./Maple Trapdoor.json": [44206, 471],
      "./Merger Pipe.json": [44214, 472],
      "./Monsieur Bedwar Statue.json": [44219, 473],
      "./Moonstone Trophy.json": [44226, 474],
      "./Noticeboard Standing Bottom Left.json": [44235, 475],
      "./Noticeboard Standing Bottom Right.json": [44244, 476],
      "./Noticeboard Standing Bottom.json": [44251, 477],
      "./Noticeboard Standing Left.json": [44258, 478],
      "./Noticeboard Standing Leg.json": [44266, 479],
      "./Noticeboard Standing Right.json": [44270, 480],
      "./Noticeboard Standing Top Left.json": [44279, 481],
      "./Noticeboard Standing Top Right.json": [44285, 482],
      "./Noticeboard Standing Top.json": [44289, 483],
      "./Noticeboard Standing.json": [44292, 484],
      "./Noticeboard Wall Bottom Left.json": [44300, 485],
      "./Noticeboard Wall Bottom Right.json": [44305, 486],
      "./Noticeboard Wall Bottom.json": [44313, 487],
      "./Noticeboard Wall Left.json": [44317, 488],
      "./Noticeboard Wall Right.json": [44326, 489],
      "./Noticeboard Wall Top Left.json": [44333, 490],
      "./Noticeboard Wall Top Right.json": [44337, 491],
      "./Noticeboard Wall Top.json": [44345, 492],
      "./Noticeboard Wall.json": [44348, 493],
      "./Noticeboard.json": [44354, 494],
      "./Nova Trophy.json": [44362, 495],
      "./Orange Banner.json": [44368, 496],
      "./Orange Bed.json": [44376, 497],
      "./Orange Carpet.json": [44380, 498],
      "./Orange Directional Arrow.json": [44382, 499],
      "./Orange Strongbed.json": [44384, 500],
      "./Orange Torch.json": [44390, 501],
      "./Orange Wave.json": [44394, 502],
      "./Palm Door.json": [44397, 503],
      "./Palm Item Pedestal.json": [44401, 504],
      "./Palm Ladder.json": [44404, 505],
      "./Palm Trapdoor.json": [44407, 506],
      "./Pear Door.json": [44411, 507],
      "./Pear Item Pedestal.json": [44415, 508],
      "./Pear Ladder.json": [44417, 509],
      "./Pear Trapdoor.json": [44424, 510],
      "./Pine Door.json": [44429, 511],
      "./Pine Item Pedestal.json": [44433, 512],
      "./Pine Ladder.json": [44439, 513],
      "./Pine Trapdoor.json": [44444, 514],
      "./Pink Banner.json": [44451, 515],
      "./Pink Bed.json": [44456, 516],
      "./Pink Carpet.json": [44460, 517],
      "./Pink Directional Arrow.json": [44467, 518],
      "./Pink Strongbed.json": [44475, 519],
      "./Pink Torch.json": [44484, 520],
      "./Pink Wave.json": [44492, 521],
      "./Pipe.json": [44500, 522],
      "./Plum Door.json": [44508, 523],
      "./Plum Item Pedestal.json": [44512, 524],
      "./Plum Ladder.json": [44515, 525],
      "./Plum Trapdoor.json": [44520, 526],
      "./Potion Table.json": [44528, 527],
      "./Purple Banner.json": [44536, 528],
      "./Purple Bed.json": [44541, 529],
      "./Purple Carpet.json": [44549, 530],
      "./Purple Directional Arrow.json": [44551, 531],
      "./Purple Strongbed.json": [44556, 532],
      "./Purple Torch.json": [44562, 533],
      "./Purple Wave.json": [44571, 534],
      "./Rainbow Banner.json": [44579, 535],
      "./Red Banner.json": [44587, 536],
      "./Red Bed.json": [44591, 537],
      "./Red Carpet.json": [44594, 538],
      "./Red Directional Arrow.json": [44603, 539],
      "./Red Strongbed.json": [44607, 540],
      "./Red Torch.json": [44609, 541],
      "./Red Wave.json": [44616, 542],
      "./Rocket Ship S2.json": [44622, 543],
      "./Rocket Ship S3.json": [44626, 544],
      "./Rocket Ship S4.json": [44631, 545],
      "./Rocket Ship S5.json": [44635, 546],
      "./Rocket Ship.json": [44642, 547],
      "./Salvaging Table.json": [44644, 548],
      "./Showcase.json": [44646, 549],
      "./Skull Banner.json": [44653, 550],
      "./Slicing Board.json": [44656, 551],
      "./Slime Trail.json": [44663, 552],
      "./Small Black Pod.json": [44670, 553],
      "./Small Blue Pod.json": [44679, 554],
      "./Small Brown Pod.json": [44682, 555],
      "./Small Cyan Pod.json": [44684, 556],
      "./Small Gray Pod.json": [44688, 557],
      "./Small Green Pod.json": [44693, 558],
      "./Small Light Blue Pod.json": [44702, 559],
      "./Small Light Gray Pod.json": [44707, 560],
      "./Small Lime Pod.json": [44709, 561],
      "./Small Magenta Pod.json": [44712, 562],
      "./Small Orange Pod.json": [44716, 563],
      "./Small Pink Pod.json": [44718, 564],
      "./Small Purple Pod.json": [44724, 565],
      "./Small Red Pod.json": [44733, 566],
      "./Small White Pod.json": [44738, 567],
      "./Small Yellow Pod.json": [44746, 568],
      "./Spectral Door.json": [44754, 569],
      "./Spectral Item Pedestal.json": [44760, 570],
      "./Spectral Ladder.json": [44763, 571],
      "./Spectral Trapdoor.json": [44770, 572],
      "./Splitter Pipe.json": [44773, 573],
      "./Stampede.json": [44779, 574],
      "./Standing Noticeboard.json": [44783, 575],
      "./Stone Enchanting Table.json": [44787, 576],
      "./Stone Spikes.json": [44795, 577],
      "./Stone Trophy.json": [44801, 578],
      "./Strong Jump Pad.json": [44804, 579],
      "./Sunbathed Gallope.json": [44808, 580],
      "./Super Jump Pad.json": [44815, 581],
      "./Timed Spike Bomb Block.json": [44818, 582],
      "./Torch.json": [44824, 583],
      "./Twirlina Cappucina Statue.json": [44829, 584],
      "./UFO.json": [44836, 585],
      "./Unforgotten Pig.json": [44845, 586],
      "./Vending Machine.json": [44847, 587],
      "./Vines.json": [44852, 588],
      "./Weak Jump Pad.json": [44857, 589],
      "./Whiskers.json": [44865, 590],
      "./White Banner.json": [44870, 591],
      "./White Bed.json": [44872, 592],
      "./White Carpet.json": [44876, 593],
      "./White Directional Arrow.json": [44884, 594],
      "./White Strongbed.json": [44886, 595],
      "./White Torch.json": [44893, 596],
      "./White Wave.json": [44896, 597],
      "./Wire.json": [44900, 598],
      "./Wood Enchanting Table.json": [44907, 599],
      "./Wood Spikes.json": [44915, 600],
      "./Wood Trophy.json": [44917, 601],
      "./Workbench.json": [44921, 602],
      "./Yellow Banner.json": [44930, 603],
      "./Yellow Bed.json": [44938, 604],
      "./Yellow Carpet.json": [44945, 605],
      "./Yellow Directional Arrow.json": [44949, 606],
      "./Yellow Strongbed.json": [44956, 607],
      "./Yellow Torch.json": [44959, 608],
      "./Yellow Wave.json": [44968, 609]
    };

    function tR(RR) {
      if (!GR.o(yR, RR)) return Promise.resolve().then((() => {
        var JR = new Error("Cannot find module '" + RR + "'");
        throw JR.code = "MODULE_NOT_FOUND", JR
      }));
      var JR = yR[RR],
        tR = JR[0];
      return GR.e(JR[1]).then((() => GR(tR)))
    }
    tR.keys = () => Object.keys(yR), tR.id = 37576, RR.exports = tR
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);