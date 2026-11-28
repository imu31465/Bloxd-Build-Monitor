export const id = 4;
export const ids = [4];
export const modules = {
  37705: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Rb,
      i: () => Db,
      m: () => zb,
      q: () => mb,
      u: () => Xb
    });
    var eb = Mb(318),
      Hb = Mb(110);
    const pb = new(Mb(37707).b)(new URL(Mb.p + Mb.u(3), Mb.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Vb = Mb(1848),
      gb = Mb(2367);
    const lb = 1e4,
      Lb = 3e4;
    let Ib = null,
      Ob = null,
      Ub = null,
      tb = !1,
      Cb = 0;
    const Eb = new Map;
    let Fb = null;
    const Bb = new Map,
      sb = new Map;

    function mb(bb) {
      const wb = new Promise(((wb, Mb) => {
        const eb = new Image;
        eb.crossOrigin = "anonymous", eb.fetchPriority = "high", eb.onload = () => {
          wb(eb)
        }, eb.onerror = () => {
          Mb(new Error(`A block icon's texture did not load: ${bb.slice(0,100)}`))
        }, eb.src = bb
      }));
      return (0, gb.h)(wb)
    }

    function hb(bb) {
      var wb, Mb;
      tb || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${bb}`), tb = !0, null === (wb = Ib) || void 0 === wb || wb.terminate(), Ib = null, Ob = null, Bb.clear(), sb.clear();
      for (const eb of Eb.values()) eb(null);
      Eb.clear(), null === (Mb = Fb) || void 0 === Mb || Mb()
    }

    function zb() {
      return null !== Ob
    }

    function Xb() {
      return Ub ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === eb.d.ios_icon_worker_v1 && (0, Hb.isWebKit)()) return;
        try {
          Ib = await async function() {
            return await pb.ready(), pb.start()
          }()
        } catch (gb) {
          return void hb(`did not start (${String(gb)})`)
        }
        let bb = () => {};
        const wb = new Promise((wb => {
          bb = wb
        }));
        Ib.onmessage = wb => {
          let {
            data: Mb
          } = wb;
          if ("started" === Mb.type) Ob = Ib, bb();
          else if ("failed" === Mb.type) hb(`failed a draw (${Mb.message})`);
          else {
            var eb, Hb;
            null === (eb = Eb.get(Mb.id)) || void 0 === eb || eb(Mb.url), Eb.delete(Mb.id), null === (Hb = Fb) || void 0 === Hb || Hb()
          }
        }, Ib.onerror = wb => {
          wb.preventDefault(), hb(`stopped (${wb.message||"its script did not load or run"})`), bb()
        };
        const Mb = `did not start in ${Lb/1e3} s`;
        await (0, Vb.n)(wb, Lb, Mb).catch((() => {
          hb(Mb)
        }))
      }(), Ub
    }

    function xb() {
      if (null !== Fb || 0 === Eb.size) return;
      const bb = new Promise((bb => {
          Fb = bb
        })),
        wb = `did not answer in ${lb/1e3} s`;
      (0, Vb.n)(bb, lb, wb).then((() => {
        Fb = null, xb()
      }), (() => {
        Fb = null, hb(wb)
      }))
    }

    function jb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      bb.postMessage(wb, Mb)
    }

    function Kb(bb, wb, Mb, eb) {
      let Hb = wb.get(Mb);
      return void 0 === Hb && (Hb = eb().then((async wb => {
        let {
          image: Mb,
          request: eb
        } = wb;
        try {
          const wb = await createImageBitmap(Mb);
          jb(bb, eb(wb), [wb])
        } catch (Hb) {
          hb(`could not take an image (${String(Hb)})`)
        }
      })), Hb.catch((() => {
        wb.get(Mb) === Hb && wb.delete(Mb)
      })), wb.set(Mb, Hb)), Hb
    }
    async function rb(bb, wb) {
      Xb();
      const Mb = Ob;
      if (null === Mb) return null;
      if (await bb(Mb), Ob !== Mb) return null;
      const eb = ++Cb;
      return new Promise((bb => {
        Eb.set(eb, bb), jb(Mb, wb(eb)), xb()
      }))
    }

    function Rb(bb, wb, Mb) {
      return rb((wb => Promise.all([bb.top, bb.left, bb.right].map((bb => function(bb, wb) {
        return Kb(bb, Bb, wb, (async () => ({
          image: await mb(wb),
          request: bb => ({
            type: "texture",
            url: wb,
            bitmap: bb
          })
        })))
      }(wb, bb))))), (eb => ({
        type: "draw",
        id: eb,
        ...bb,
        size: wb,
        outlineWidth: Mb
      })))
    }

    function Db(bb, wb, Mb, eb) {
      return rb((Mb => function(bb, wb, Mb) {
        return Kb(bb, sb, wb, (async () => {
          const {
            texture: bb,
            ...eb
          } = await Mb();
          return {
            image: await mb(bb),
            request: bb => ({
              type: "model",
              name: wb,
              bitmap: bb,
              geometry: eb
            })
          }
        }))
      }(Mb, bb, wb)), (wb => ({
        type: "drawModel",
        id: wb,
        name: bb,
        size: Mb,
        outlineWidth: eb
      })))
    }
  },
  37712: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      blockModelIconModels: () => Ub,
      drawnBlockModelIconUrl: () => Fb,
      getBlockModelIconUrl: () => Eb,
      hasBlockModelIcon: () => Ob
    });
    var eb = Mb(37705),
      Hb = Mb(37702);
    const pb = JSON.parse('{"67 Statue":["67"],"A Doe Through The Green":["_Deer Painting Bottom Left","_Deer Painting Bottom Right","_Deer Painting Top Left","_Deer Painting Top Right"],"Aspen Door":["Aspen Door","_Aspen Door Top"],"Auto Miner":["auto_miner_body","auto_miner_drill_back","auto_miner_drill_front","auto_miner_foot_back","auto_miner_foot_front"],"Bebek Bebek Bebek Statue":["bebek_bebek_bebek"],"Bin":["bin"],"Black Banner":["Black Banner","_Black Banner Flag"],"Black Bed":["Black Bed","_Black Bed Head"],"Black Carpet":["carpet_black_model"],"Black Strongbed":["Black Strongbed","_Black Strongbed Head"],"Black Torch":["torch_black"],"Black Wave":["wave_black"],"Blue Banner":["Blue Banner","_Blue Banner Flag"],"Blue Bed":["Blue Bed","_Blue Bed Head"],"Blue Carpet":["carpet_blue_model"],"Blue Strongbed":["Blue Strongbed","_Blue Strongbed Head"],"Blue Torch":["torch_blue"],"Blue Wave":["wave_blue"],"Bobino Musculino Statue":["bobino_musculino"],"Bobzilla Statue":["bobzilla"],"Boiling Pot":["boiling_pot"],"Bone Antlers":["bone_antlers_model"],"Brown Banner":["Brown Banner","_Brown Banner Flag"],"Brown Bed":["Brown Bed","_Brown Bed Head"],"Brown Carpet":["carpet_brown_model"],"Brown Strongbed":["Brown Strongbed","_Brown Strongbed Head"],"Brown Torch":["torch_brown"],"Brown Wave":["wave_brown"],"Brra Brra Pachim Statue":["brra_brra_pachim"],"Cannon":["cannon_barrel_back","cannon_barrel_front","cannon_bottom_back","cannon_bottom_front","cannon_top_back","cannon_top_front"],"Capitano Explovissimo Statue":["capitano_explovissimo"],"Cappuccino Ninjino Statue":["cappuccino_ninjino"],"Cedar Door":["Cedar Door","_Cedar Door Top"],"Cherry Door":["Cherry Door","_Cherry Door Top"],"Chili Pepper Plant":["chili_pepper_stage5_model"],"Chili Pepper Plant_stage1":["chili_pepper_stage1_model"],"Chili Pepper Plant_stage2":["chili_pepper_stage2_model"],"Chili Pepper Plant_stage3":["chili_pepper_stage3_model"],"Chili Pepper Plant_stage4":["chili_pepper_stage4_model"],"Chili Pepper Plant_stage5":["chili_pepper_stage5_model"],"Chimpanzano Bananano Statue":["chimpanzano_bananano"],"Chopping Board":["chopping_board"],"Coloured Wheel":["wheel"],"Coolant Pipe":["baf2_fluid_pipe_nz_pz"],"Crystal":["crystal"],"Cyan Banner":["Cyan Banner","_Cyan Banner Flag"],"Cyan Bed":["Cyan Bed","_Cyan Bed Head"],"Cyan Carpet":["carpet_cyan_model"],"Cyan Strongbed":["Cyan Strongbed","_Cyan Strongbed Head"],"Cyan Torch":["torch_cyan"],"Cyan Wave":["wave_cyan"],"Diamond Spikes":["Spikes_Diamond"],"Draugr Banner":["Draugr Banner","_Draugr Banner Flag"],"Dreaming Canine":["_Wolf Painting Bottom Left","_Wolf Painting Bottom Right","_Wolf Painting Top Left","_Wolf Painting Top Right"],"Duo Blocchino Statue":["2_block"],"Extractor Pipe":["extractor_pipe_straight_z"],"Filter Pipe":["filter_pipe_input_pz"],"Fluid Pipe":["baf2_fluid_pipe_nz_pz"],"Football":["football"],"Frying Pan":["frying_pan"],"Glowing Mushroom":["glowing_mushroom"],"Gold Antlers":["gold_antlers_model"],"Gold Spikes":["Spikes_Gold"],"Grant Wool":["_Sheep Painting Bottom Left","_Sheep Painting Bottom Right","_Sheep Painting Top Left","_Sheep Painting Top Right"],"Gray Banner":["Gray Banner","_Gray Banner Flag"],"Gray Bed":["Gray Bed","_Gray Bed Head"],"Gray Carpet":["carpet_gray_model"],"Gray Strongbed":["Gray Strongbed","_Gray Strongbed Head"],"Gray Torch":["torch_gray"],"Green Banner":["Green Banner","_Green Banner Flag"],"Green Bed":["Green Bed","_Green Bed Head"],"Green Carpet":["carpet_green_model"],"Green Strongbed":["Green Strongbed","_Green Strongbed Head"],"Green Torch":["torch_green"],"Green Wave":["wave_green"],"Grey Wave":["wave_grey"],"Hob Boiling":["hob_boiling"],"Hob Frying":["hob_frying"],"Hump Day":["_Camel Painting Bottom Left","_Camel Painting Bottom Right","_Camel Painting Top Left","_Camel Painting Top Right"],"Il Wizardini Del Porko Statue":["il_wizardini_del_porko"],"Iron Spikes":["Spikes_Iron"],"Job Application Statue":["job_application"],"John Beef Statue":["john_beef"],"Jump Pad":["jump_pad"],"Jungle Door":["Jungle Door","_Jungle Door Top"],"Kill Spikes":["Spikes_Kill"],"Kitchen Worktop":["kitchen_worktop"],"Landing Pad":["landing_pad"],"Lantern":["lantern"],"Light Blue Banner":["Light Blue Banner","_Light Blue Banner Flag"],"Light Blue Bed":["Light Blue Bed","_Light Blue Bed Head"],"Light Blue Carpet":["carpet_light_blue_model"],"Light Blue Strongbed":["Light Blue Strongbed","_Light Blue Strongbed Head"],"Light Blue Torch":["torch_light_blue"],"Light Blue Wave":["wave_light_blue"],"Light Gray Banner":["Light Gray Banner","_Light Gray Banner Flag"],"Light Gray Bed":["Light Gray Bed","_Light Gray Bed Head"],"Light Gray Carpet":["carpet_light_gray_model"],"Light Gray Strongbed":["Light Gray Strongbed","_Light Gray Strongbed Head"],"Light Gray Torch":["torch_light_gray"],"Light Grey Wave":["wave_light_grey"],"Lily Pad":["lily_pad_model"],"Lime Banner":["Lime Banner","_Lime Banner Flag"],"Lime Bed":["Lime Bed","_Lime Bed Head"],"Lime Carpet":["carpet_lime_model"],"Lime Strongbed":["Lime Strongbed","_Lime Strongbed Head"],"Lime Torch":["torch_lime"],"Lime Wave":["wave_lime"],"Lucchia Blocchi Statue":["lucchia_blocchi"],"Lunite Auto Miner":["auto_miner_lunite_body","auto_miner_lunite_drill_back","auto_miner_lunite_drill_front","auto_miner_lunite_foot_back","auto_miner_lunite_foot_front"],"Magenta Banner":["Magenta Banner","_Magenta Banner Flag"],"Magenta Bed":["Magenta Bed","_Magenta Bed Head"],"Magenta Carpet":["carpet_magenta_model"],"Magenta Strongbed":["Magenta Strongbed","_Magenta Strongbed Head"],"Magenta Torch":["torch_magenta"],"Magenta Wave":["wave_magenta"],"Mango Door":["Mango Door","_Mango Door Top"],"Maple Door":["Maple Door","_Maple Door Top"],"Merger Pipe":["merger_pipe_output_pz"],"Monsieur Bedwar Statue":["monsieur_bedwar"],"Noticeboard":["noticeboard_wall_single"],"Noticeboard Standing":["noticeboard_standing"],"Noticeboard Standing Bottom":["noticeboard_standing_bottom"],"Noticeboard Standing Bottom Left":["noticeboard_standing_bottom_left"],"Noticeboard Standing Bottom Right":["noticeboard_standing_bottom_right"],"Noticeboard Standing Left":["noticeboard_standing_left"],"Noticeboard Standing Leg":["noticeboard_standing_leg"],"Noticeboard Standing Right":["noticeboard_standing_right"],"Noticeboard Standing Top":["noticeboard_standing_top"],"Noticeboard Standing Top Left":["noticeboard_standing_top_left"],"Noticeboard Standing Top Right":["noticeboard_standing_top_right"],"Noticeboard Wall":["noticeboard_wall"],"Noticeboard Wall Bottom":["noticeboard_wall_bottom"],"Noticeboard Wall Bottom Left":["noticeboard_wall_bottom_left"],"Noticeboard Wall Bottom Right":["noticeboard_wall_bottom_right"],"Noticeboard Wall Left":["noticeboard_wall_left"],"Noticeboard Wall Right":["noticeboard_wall_right"],"Noticeboard Wall Top":["noticeboard_wall_top"],"Noticeboard Wall Top Left":["noticeboard_wall_top_left"],"Noticeboard Wall Top Right":["noticeboard_wall_top_right"],"Orange Banner":["Orange Banner","_Orange Banner Flag"],"Orange Bed":["Orange Bed","_Orange Bed Head"],"Orange Carpet":["carpet_orange_model"],"Orange Strongbed":["Orange Strongbed","_Orange Strongbed Head"],"Orange Torch":["torch_orange"],"Orange Wave":["wave_orange"],"Palm Door":["Palm Door","_Palm Door Top"],"Pear Door":["Pear Door","_Pear Door Top"],"Pine Door":["Pine Door","_Pine Door Top"],"Pink Banner":["Pink Banner","_Pink Banner Flag"],"Pink Bed":["Pink Bed","_Pink Bed Head"],"Pink Carpet":["carpet_pink_model"],"Pink Strongbed":["Pink Strongbed","_Pink Strongbed Head"],"Pink Torch":["torch_pink"],"Pink Wave":["wave_pink"],"Pipe":["pipe_straight_z"],"Plum Door":["Plum Door","_Plum Door Top"],"Purple Banner":["Purple Banner","_Purple Banner Flag"],"Purple Bed":["Purple Bed","_Purple Bed Head"],"Purple Carpet":["carpet_purple_model"],"Purple Strongbed":["Purple Strongbed","_Purple Strongbed Head"],"Purple Torch":["torch_purple"],"Purple Wave":["wave_purple"],"Rainbow Banner":["Rainbow Banner","_Rainbow Banner Flag"],"Red Banner":["Red Banner","_Red Banner Flag"],"Red Bed":["Red Bed","_Red Bed Head"],"Red Carpet":["carpet_red_model"],"Red Strongbed":["Red Strongbed","_Red Strongbed Head"],"Red Torch":["torch_red"],"Red Wave":["wave_red"],"Rocket Ship":["rocket_northeast_1","rocket_northwest_1","rocket_southeast_1","rocket_southwest_1"],"Rocket Ship S2":["rocket_northeast_1","rocket_northeast_2","rocket_northwest_1","rocket_northwest_2","rocket_southeast_1","rocket_southeast_2","rocket_southwest_1","rocket_southwest_2"],"Rocket Ship S3":["rocket_northeast_1","rocket_northeast_2","rocket_northeast_3","rocket_northwest_1","rocket_northwest_2","rocket_northwest_3","rocket_southeast_1","rocket_southeast_2","rocket_southeast_3","rocket_southwest_1","rocket_southwest_2","rocket_southwest_3"],"Rocket Ship S4":["rocket_northeast_1","rocket_northeast_2","rocket_northeast_3","rocket_northeast_4","rocket_northwest_1","rocket_northwest_2","rocket_northwest_3","rocket_northwest_4","rocket_southeast_1","rocket_southeast_2","rocket_southeast_3","rocket_southeast_4","rocket_southwest_1","rocket_southwest_2","rocket_southwest_3","rocket_southwest_4"],"Rocket Ship S5":["rocket_northeast_1","rocket_northeast_2","rocket_northeast_3","rocket_northeast_4","rocket_northeast_5","rocket_northwest_1","rocket_northwest_2","rocket_northwest_3","rocket_northwest_4","rocket_northwest_5","rocket_southeast_1","rocket_southeast_2","rocket_southeast_3","rocket_southeast_4","rocket_southeast_5","rocket_southwest_1","rocket_southwest_2","rocket_southwest_3","rocket_southwest_4","rocket_southwest_5"],"Skull Banner":["Skull Banner","_Skull Banner Flag"],"Slicing Board":["slicing_board"],"Slime Trail":["slime_trail"],"Small Black Pod":["Small Black Pod","_Small Black Pod Mid","_Small Black Pod Top"],"Small Blue Pod":["Small Blue Pod","_Small Blue Pod Mid","_Small Blue Pod Top"],"Small Brown Pod":["Small Brown Pod","_Small Brown Pod Mid","_Small Brown Pod Top"],"Small Cyan Pod":["Small Cyan Pod","_Small Cyan Pod Mid","_Small Cyan Pod Top"],"Small Gray Pod":["Small Gray Pod","_Small Gray Pod Mid","_Small Gray Pod Top"],"Small Green Pod":["Small Green Pod","_Small Green Pod Mid","_Small Green Pod Top"],"Small Light Blue Pod":["Small Light Blue Pod","_Small Light Blue Pod Mid","_Small Light Blue Pod Top"],"Small Light Gray Pod":["Small Light Gray Pod","_Small Light Gray Pod Mid","_Small Light Gray Pod Top"],"Small Lime Pod":["Small Lime Pod","_Small Lime Pod Mid","_Small Lime Pod Top"],"Small Magenta Pod":["Small Magenta Pod","_Small Magenta Pod Mid","_Small Magenta Pod Top"],"Small Orange Pod":["Small Orange Pod","_Small Orange Pod Mid","_Small Orange Pod Top"],"Small Pink Pod":["Small Pink Pod","_Small Pink Pod Mid","_Small Pink Pod Top"],"Small Purple Pod":["Small Purple Pod","_Small Purple Pod Mid","_Small Purple Pod Top"],"Small Red Pod":["Small Red Pod","_Small Red Pod Mid","_Small Red Pod Top"],"Small White Pod":["Small White Pod","_Small White Pod Mid","_Small White Pod Top"],"Small Yellow Pod":["Small Yellow Pod","_Small Yellow Pod Mid","_Small Yellow Pod Top"],"Spectral Door":["Spectral Door","_Spectral Door Top"],"Splitter Pipe":["splitter_pipe"],"Stampede":["_Cow Painting Bottom Left","_Cow Painting Bottom Right","_Cow Painting Top Left","_Cow Painting Top Right"],"Standing Noticeboard":["noticeboard_standing_single"],"Stone Spikes":["Spikes_Stone"],"Strong Jump Pad":["jump_pad_strong"],"Sunbathed Gallope":["_Horse Painting Bottom Left","_Horse Painting Bottom Right","_Horse Painting Top Left","_Horse Painting Top Right"],"Super Jump Pad":["jump_pad_super"],"Torch":["torch"],"Twirlina Cappucina Statue":["twirlina_cappucina"],"UFO":["ufo"],"Unforgotten Pig":["_Pig Painting Bottom Left","_Pig Painting Bottom Right","_Pig Painting Top Left","_Pig Painting Top Right"],"Vending Machine":["vending_machine_bottom","vending_machine_top"],"Weak Jump Pad":["jump_pad_weak"],"Whiskers":["_Wildcat Painting Bottom Left","_Wildcat Painting Bottom Right","_Wildcat Painting Top Left","_Wildcat Painting Top Right"],"White Banner":["White Banner","_White Banner Flag"],"White Bed":["White Bed","_White Bed Head"],"White Carpet":["carpet_white_model"],"White Strongbed":["White Strongbed","_White Strongbed Head"],"White Torch":["torch_white"],"White Wave":["wave_white"],"Wire":["wire_straight_z"],"Wood Spikes":["Spikes_Wood"],"Yellow Banner":["Yellow Banner","_Yellow Banner Flag"],"Yellow Bed":["Yellow Bed","_Yellow Bed Head"],"Yellow Carpet":["carpet_yellow_model"],"Yellow Strongbed":["Yellow Strongbed","_Yellow Strongbed Head"],"Yellow Torch":["torch_yellow"],"Yellow Wave":["wave_yellow"]}'),
      Vb = Mb(37716),
      gb = new Map(Vb.keys().filter((bb => bb.startsWith("./"))).map((bb => [bb.slice(2, -5), bb]))),
      lb = new Map,
      Lb = new Map,
      Ib = new Map;

    function Ob(bb) {
      return gb.has(bb)
    }

    function Ub(bb) {
      var wb;
      return null !== (wb = pb[bb]) && void 0 !== wb ? wb : [bb]
    }

    function tb(bb) {
      return Vb(gb.get(bb))
    }
    async function Cb(bb, wb, Mb) {
      const {
        data: eb,
        texture: pb
      } = await
      function(bb) {
        let wb = lb.get(bb);
        return wb || (wb = tb(bb).then((async bb => {
          const wb = new Image;
          wb.src = bb.texture, await wb.decode();
          const Mb = document.createElement("canvas");
          Mb.width = wb.width, Mb.height = wb.height;
          const eb = Mb.getContext("2d");
          return eb.drawImage(wb, 0, 0), {
            data: bb,
            texture: {
              width: wb.width,
              height: wb.height,
              pixels: eb.getImageData(0, 0, wb.width, wb.height).data
            }
          }
        })), wb.catch((() => {
          lb.delete(bb)
        })), lb.set(bb, wb)), wb
      }(bb), Vb = document.createElement("canvas");
      return Vb.width = wb, Vb.height = wb, Vb.getContext("2d").putImageData(new ImageData((0, Hb.n)(eb, pb, wb, Mb), wb, wb), 0, 0), Vb.toDataURL()
    }

    function Eb(bb, wb, Mb) {
      const Hb = `${wb}|${Mb}|${bb}`;
      let pb = Lb.get(Hb);
      return pb || (pb = (0, eb.i)(bb, (() => tb(bb)), wb, Mb).then((eb => null !== eb && void 0 !== eb ? eb : Cb(bb, wb, Mb))), pb.then((Mb => {
        const eb = Ib.get(bb);
        Mb && (void 0 === eb || eb.size < wb) && Ib.set(bb, {
          size: wb,
          url: Mb
        })
      }), (() => {
        Lb.delete(Hb)
      })), Lb.set(Hb, pb)), pb
    }

    function Fb(bb) {
      var wb, Mb;
      return null !== (wb = null === (Mb = Ib.get(bb)) || void 0 === Mb ? void 0 : Mb.url) && void 0 !== wb ? wb : null
    }
  },
  37702: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb,
      h: () => lb,
      i: () => Vb,
      k: () => Ub,
      n: () => Lb
    });
    const eb = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      Hb = .6,
      pb = {
        width: 2 * eb.across,
        height: 2 * eb.down + eb.up
      };

    function Vb(bb, wb) {
      const Mb = wb > 0 ? wb + 1 : 0,
        Vb = bb * Hb - wb / eb.across;
      return Math.max(0, Math.min(Vb, (bb - 2 * Mb) / pb.height))
    }
    const gb = [15, 15, 15],
      lb = {
        top: 1,
        left: .85,
        right: .7
      };

    function Lb(bb, wb, Mb, eb) {
      const {
        vertices: Hb,
        uvs: gb,
        indices: lb,
        shades: Lb
      } = bb, Ib = function(bb, wb) {
        const Mb = Vb(bb, wb),
          eb = pb.width * Mb,
          Hb = pb.height * Mb;
        return {
          left: (bb - eb) / 2,
          top: (bb - Hb) / 2,
          width: eb,
          height: Hb
        }
      }(Mb, eb), Ob = new Float32Array(Hb.length);
      for (let pb = 0; pb < Hb.length; pb += 3) Ob[pb] = Ib.left + Hb[pb] * Ib.width, Ob[pb + 1] = Ib.top + Hb[pb + 1] * Ib.height, Ob[pb + 2] = Hb[pb + 2];
      const tb = new Float32Array(Mb * Mb).fill(-1 / 0),
        Cb = new Uint8ClampedArray(Mb * Mb * 4),
        Eb = 255 * bb.alphaCutoff;
      for (let pb = 0; pb < lb.length; pb += 3) {
        const [bb, eb, Hb] = [lb[pb], lb[pb + 1], lb[pb + 2]], [Vb, Ib, Ub] = [3 * bb, 3 * eb, 3 * Hb], [Fb, Bb, sb, mb, hb, zb] = [Ob[Vb], Ob[Vb + 1], Ob[Ib], Ob[Ib + 1], Ob[Ub], Ob[Ub + 1]], Xb = (sb - Fb) * (zb - Bb) - (hb - Fb) * (mb - Bb);
        if (Math.abs(Xb) < 1e-9) continue;
        const xb = Lb[pb / 3],
          [jb, Kb, rb, Rb, Db, cb] = [gb[2 * bb], gb[2 * bb + 1], gb[2 * eb], gb[2 * eb + 1], gb[2 * Hb], gb[2 * Hb + 1]],
          Yb = Math.max(0, Math.floor(Math.min(Fb, sb, hb))),
          Zb = Math.min(Mb - 1, Math.ceil(Math.max(Fb, sb, hb))),
          fb = Math.max(0, Math.floor(Math.min(Bb, mb, zb))),
          Ab = Math.min(Mb - 1, Math.ceil(Math.max(Bb, mb, zb)));
        for (let pb = fb; pb <= Ab; pb++)
          for (let bb = Yb; bb <= Zb; bb++) {
            const [eb, Hb] = [bb + .5, pb + .5], gb = ((eb - Fb) * (zb - Bb) - (hb - Fb) * (Hb - Bb)) / Xb, lb = ((sb - Fb) * (Hb - Bb) - (eb - Fb) * (mb - Bb)) / Xb, Lb = 1 - gb - lb;
            if (Lb < 0 || gb < 0 || lb < 0) continue;
            const Yb = Lb * Ob[Vb + 2] + gb * Ob[Ib + 2] + lb * Ob[Ub + 2],
              Zb = pb * Mb + bb;
            if (Yb <= tb[Zb]) continue;
            const fb = Math.max(0, Math.min(wb.width - 1, Math.floor((Lb * jb + gb * rb + lb * Db) * wb.width))),
              Ab = 4 * (Math.max(0, Math.min(wb.height - 1, Math.floor((Lb * Kb + gb * Rb + lb * cb) * wb.height))) * wb.width + fb);
            wb.pixels[Ab + 3] < Eb || (tb[Zb] = Yb, Cb[4 * Zb] = wb.pixels[Ab] * xb, Cb[4 * Zb + 1] = wb.pixels[Ab + 1] * xb, Cb[4 * Zb + 2] = wb.pixels[Ab + 2] * xb, Cb[4 * Zb + 3] = 255)
          }
      }
      return Ub(Cb, Mb, eb), Cb
    }
    let Ib = NaN,
      Ob = new Int32Array(0);

    function Ub(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wb => 0 !== bb[4 * wb + 3];
      const Hb = new Uint8Array(wb * wb);
      for (let gb = 0; gb < wb * wb; gb++) Hb[gb] = eb(gb) ? 1 : 0;
      const pb = (bb, Mb) => bb >= 0 && Mb >= 0 && bb < wb && Mb < wb && 0 === Hb[Mb * wb + bb],
        Vb = new Float32Array(wb * wb).fill(1 / 0),
        lb = function(bb) {
          if (bb !== Ib) {
            const wb = Math.ceil(bb + 1),
              Mb = [];
            for (let eb = -wb; eb <= wb; eb++)
              for (let Hb = -wb; Hb <= wb; Hb++) {
                const wb = Hb * Hb + eb * eb;
                wb > 0 && wb < (bb + 1) ** 2 && Mb.push(Hb, eb, wb)
              }
            Ib = bb, Ob = Int32Array.from(Mb)
          }
          return Ob
        }(Mb);
      for (let gb = 0; gb < wb; gb++)
        for (let bb = 0; bb < wb; bb++) {
          if (1 === Hb[gb * wb + bb] && (pb(bb - 1, gb) || pb(bb + 1, gb) || pb(bb, gb - 1) || pb(bb, gb + 1)))
            for (let Mb = 0; Mb < lb.length; Mb += 3) {
              const eb = bb + lb[Mb],
                Hb = gb + lb[Mb + 1];
              if (eb >= 0 && Hb >= 0 && eb < wb && Hb < wb) {
                const bb = Hb * wb + eb;
                Vb[bb] = Math.min(Vb[bb], lb[Mb + 2])
              }
            }
        }
      for (let Lb = 0; Lb < wb * wb; Lb++) 1 !== Hb[Lb] && Vb[Lb] !== 1 / 0 && (bb.set(gb, 4 * Lb), bb[4 * Lb + 3] = Math.round(255 * Math.min(1, Mb + 1 - Math.sqrt(Vb[Lb]))))
    }
  },
  37707: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    const eb = {
      wait: function(bb) {
        return new Promise((wb => {
          setTimeout(wb, bb)
        }))
      },
      stallMs: 2e4
    };
    class Hb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eb;
        this.url = bb, this.options = wb, this.timing = Mb, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = bb
      }
      ready() {
        if (null === this.fetched) {
          const bb = new AbortController;
          this.fetchAbort = bb, this.fetched = this.fetchWithRetries(bb.signal).then((wb => (this.fetchAbort === bb && (this.fetchAbort = null), wb)))
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
      async fetchWithRetries(bb) {
        for (let wb = 0;; wb++) {
          const Mb = new URL(this.url);
          if (wb > 0 && Mb.searchParams.set("cache-bust", `${Date.now()}-${wb}`), await this.fetchWhole(Mb, bb)) return this.scriptUrl = Mb, !0;
          if (wb >= 3 || bb.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** wb), bb.aborted) return !1
        }
      }
      async fetchWhole(bb, wb) {
        const Mb = new AbortController;
        let eb;
        const Hb = () => {
            clearTimeout(eb), eb = setTimeout((() => {
              Mb.abort()
            }), this.timing.stallMs)
          },
          pb = () => {
            Mb.abort()
          };
        wb.addEventListener("abort", pb, {
          once: !0
        }), Hb();
        try {
          var Vb;
          const wb = await fetch(bb, {
            signal: Mb.signal
          });
          if (!wb.ok) return !1;
          const eb = null === (Vb = wb.body) || void 0 === Vb ? void 0 : Vb.getReader();
          if (!eb) return !1;
          for (;;) {
            const {
              done: bb
            } = await eb.read();
            if (bb) return !0;
            Hb()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(eb), wb.removeEventListener("abort", pb)
        }
      }
    }
  },
  37716: (bb, wb, Mb) => {
    var eb = {
      "./67 Statue.json": [43509, 313],
      "./A Doe Through The Green.json": [43513, 314],
      "./Artisan Bench.json": [43518, 315],
      "./Aspen Door.json": [43520, 316],
      "./Aspen Item Pedestal.json": [43529, 317],
      "./Aspen Ladder.json": [43534, 318],
      "./Aspen Trapdoor.json": [43536, 319],
      "./Auto Miner.json": [43542, 320],
      "./Bebek Bebek Bebek Statue.json": [43546, 321],
      "./Bin.json": [43553, 322],
      "./Black Banner.json": [43560, 323],
      "./Black Bed.json": [43565, 324],
      "./Black Carpet.json": [43570, 325],
      "./Black Directional Arrow.json": [43577, 326],
      "./Black Strongbed.json": [43586, 327],
      "./Black Torch.json": [43595, 328],
      "./Black Wave.json": [43603, 329],
      "./Blue Banner.json": [43610, 330],
      "./Blue Bed.json": [43613, 331],
      "./Blue Carpet.json": [43619, 332],
      "./Blue Directional Arrow.json": [43628, 333],
      "./Blue Strongbed.json": [43634, 334],
      "./Blue Torch.json": [43636, 335],
      "./Blue Wave.json": [43638, 336],
      "./Board.json": [43640, 337],
      "./Bobino Musculino Statue.json": [43648, 338],
      "./Bobzilla Statue.json": [43654, 339],
      "./Boiling Pot.json": [43657, 340],
      "./Bone Antlers.json": [43662, 341],
      "./Brown Banner.json": [43668, 342],
      "./Brown Bed.json": [43675, 343],
      "./Brown Carpet.json": [43682, 344],
      "./Brown Directional Arrow.json": [43688, 345],
      "./Brown Strongbed.json": [43692, 346],
      "./Brown Torch.json": [43700, 347],
      "./Brown Wave.json": [43703, 348],
      "./Brra Brra Pachim Statue.json": [43711, 349],
      "./Cannon.json": [43718, 350],
      "./Capitano Explovissimo Statue.json": [43720, 351],
      "./Cappuccino Ninjino Statue.json": [43728, 352],
      "./Cedar Door.json": [43732, 353],
      "./Cedar Item Pedestal.json": [43741, 354],
      "./Cedar Ladder.json": [43744, 355],
      "./Cedar Trapdoor.json": [43751, 356],
      "./Cherry Door.json": [43760, 357],
      "./Cherry Item Pedestal.json": [43762, 358],
      "./Cherry Ladder.json": [43765, 359],
      "./Cherry Trapdoor.json": [43771, 360],
      "./Chili Pepper Plant.json": [43775, 361],
      "./Chili Pepper Plant_stage1.json": [43778, 362],
      "./Chili Pepper Plant_stage2.json": [43787, 363],
      "./Chili Pepper Plant_stage3.json": [43792, 364],
      "./Chili Pepper Plant_stage4.json": [43799, 365],
      "./Chili Pepper Plant_stage5.json": [43802, 366],
      "./Chimpanzano Bananano Statue.json": [43807, 367],
      "./Chopping Board.json": [43810, 368],
      "./Coloured Wheel.json": [43818, 369],
      "./Coolant Pipe.json": [43824, 370],
      "./Crystal.json": [43833, 371],
      "./Cyan Banner.json": [43842, 372],
      "./Cyan Bed.json": [43850, 373],
      "./Cyan Carpet.json": [43853, 374],
      "./Cyan Directional Arrow.json": [43858, 375],
      "./Cyan Strongbed.json": [43861, 376],
      "./Cyan Torch.json": [43868, 377],
      "./Cyan Wave.json": [43872, 378],
      "./Dangling Rope.json": [43879, 379],
      "./Dangling Vine.json": [43884, 380],
      "./Diamond Enchanting Table.json": [43887, 381],
      "./Diamond Spikes.json": [43892, 382],
      "./Diamond Trophy.json": [43899, 383],
      "./Draugr Banner.json": [43904, 384],
      "./Dreaming Canine.json": [43907, 385],
      "./Duo Blocchino Statue.json": [43912, 386],
      "./Extractor Pipe.json": [43914, 387],
      "./Fat Brown Mushroom.json": [43921, 388],
      "./Fat Red Mushroom.json": [43927, 389],
      "./Filter Pipe.json": [43930, 390],
      "./Fluid Pipe.json": [43932, 391],
      "./Football.json": [43934, 392],
      "./Frying Pan.json": [43941, 393],
      "./Furnace.json": [43944, 394],
      "./Glowing Mushroom.json": [43946, 395],
      "./Gold Antlers.json": [43952, 396],
      "./Gold Enchanting Table.json": [43960, 397],
      "./Gold Spikes.json": [43967, 398],
      "./Gold Trophy.json": [43971, 399],
      "./Grant Wool.json": [43980, 400],
      "./Gray Banner.json": [43988, 401],
      "./Gray Bed.json": [43996, 402],
      "./Gray Carpet.json": [43998, 403],
      "./Gray Strongbed.json": [44e3, 404],
      "./Gray Torch.json": [44008, 405],
      "./Green Banner.json": [44014, 406],
      "./Green Bed.json": [44021, 407],
      "./Green Carpet.json": [44030, 408],
      "./Green Directional Arrow.json": [44036, 409],
      "./Green Strongbed.json": [44039, 410],
      "./Green Torch.json": [44046, 411],
      "./Green Wave.json": [44052, 412],
      "./Grey Directional Arrow.json": [44057, 413],
      "./Grey Wave.json": [44066, 414],
      "./Hob Boiling.json": [44074, 415],
      "./Hob Frying.json": [44077, 416],
      "./Hump Day.json": [44082, 417],
      "./Il Wizardini Del Porko Statue.json": [44089, 418],
      "./Iron Enchanting Table.json": [44091, 419],
      "./Iron Ladder.json": [44099, 420],
      "./Iron Spikes.json": [44101, 421],
      "./Iron Trophy.json": [44108, 422],
      "./Job Application Statue.json": [44115, 423],
      "./John Beef Statue.json": [44117, 424],
      "./Jump Pad.json": [44124, 425],
      "./Jungle Door.json": [44127, 426],
      "./Jungle Item Pedestal.json": [44129, 427],
      "./Jungle Ladder.json": [44138, 428],
      "./Jungle Trapdoor.json": [44145, 429],
      "./Kill Spikes.json": [44147, 430],
      "./Kitchen Worktop.json": [44153, 431],
      "./Landing Pad.json": [44162, 432],
      "./Lantern.json": [44169, 433],
      "./Leaf Bed.json": [44176, 434],
      "./Light Blue Banner.json": [44183, 435],
      "./Light Blue Bed.json": [44189, 436],
      "./Light Blue Carpet.json": [44196, 437],
      "./Light Blue Directional Arrow.json": [44201, 438],
      "./Light Blue Strongbed.json": [44209, 439],
      "./Light Blue Torch.json": [44217, 440],
      "./Light Blue Wave.json": [44223, 441],
      "./Light Gray Banner.json": [44226, 442],
      "./Light Gray Bed.json": [44229, 443],
      "./Light Gray Carpet.json": [44233, 444],
      "./Light Gray Strongbed.json": [44242, 445],
      "./Light Gray Torch.json": [44249, 446],
      "./Light Grey Directional Arrow.json": [44253, 447],
      "./Light Grey Wave.json": [44256, 448],
      "./Lily Pad.json": [44262, 449],
      "./Lime Banner.json": [44268, 450],
      "./Lime Bed.json": [44274, 451],
      "./Lime Carpet.json": [44280, 452],
      "./Lime Directional Arrow.json": [44284, 453],
      "./Lime Strongbed.json": [44288, 454],
      "./Lime Torch.json": [44293, 455],
      "./Lime Wave.json": [44295, 456],
      "./Lucchia Blocchi Statue.json": [44304, 457],
      "./Lunite Auto Miner.json": [44307, 458],
      "./Magenta Banner.json": [44313, 459],
      "./Magenta Bed.json": [44318, 460],
      "./Magenta Carpet.json": [44322, 461],
      "./Magenta Directional Arrow.json": [44324, 462],
      "./Magenta Strongbed.json": [44329, 463],
      "./Magenta Torch.json": [44331, 464],
      "./Magenta Wave.json": [44338, 465],
      "./Mango Door.json": [44346, 466],
      "./Mango Item Pedestal.json": [44354, 467],
      "./Mango Ladder.json": [44360, 468],
      "./Mango Trapdoor.json": [44364, 469],
      "./Maple Door.json": [44368, 470],
      "./Maple Ladder.json": [44376, 471],
      "./Maple Trapdoor.json": [44381, 472],
      "./Merger Pipe.json": [44387, 473],
      "./Monsieur Bedwar Statue.json": [44389, 474],
      "./Moonstone Trophy.json": [44394, 475],
      "./Noticeboard Standing Bottom Left.json": [44400, 476],
      "./Noticeboard Standing Bottom Right.json": [44406, 477],
      "./Noticeboard Standing Bottom.json": [44410, 478],
      "./Noticeboard Standing Left.json": [44417, 479],
      "./Noticeboard Standing Leg.json": [44422, 480],
      "./Noticeboard Standing Right.json": [44431, 481],
      "./Noticeboard Standing Top Left.json": [44434, 482],
      "./Noticeboard Standing Top Right.json": [44439, 483],
      "./Noticeboard Standing Top.json": [44446, 484],
      "./Noticeboard Standing.json": [44449, 485],
      "./Noticeboard Wall Bottom Left.json": [44451, 486],
      "./Noticeboard Wall Bottom Right.json": [44456, 487],
      "./Noticeboard Wall Bottom.json": [44459, 488],
      "./Noticeboard Wall Left.json": [44463, 489],
      "./Noticeboard Wall Right.json": [44467, 490],
      "./Noticeboard Wall Top Left.json": [44474, 491],
      "./Noticeboard Wall Top Right.json": [44480, 492],
      "./Noticeboard Wall Top.json": [44486, 493],
      "./Noticeboard Wall.json": [44492, 494],
      "./Noticeboard.json": [44497, 495],
      "./Nova Trophy.json": [44504, 496],
      "./Orange Banner.json": [44508, 497],
      "./Orange Bed.json": [44515, 498],
      "./Orange Carpet.json": [44524, 499],
      "./Orange Directional Arrow.json": [44533, 500],
      "./Orange Strongbed.json": [44540, 501],
      "./Orange Torch.json": [44544, 502],
      "./Orange Wave.json": [44551, 503],
      "./Palm Door.json": [44559, 504],
      "./Palm Item Pedestal.json": [44561, 505],
      "./Palm Ladder.json": [44565, 506],
      "./Palm Trapdoor.json": [44571, 507],
      "./Pear Door.json": [44575, 508],
      "./Pear Item Pedestal.json": [44584, 509],
      "./Pear Ladder.json": [44586, 510],
      "./Pear Trapdoor.json": [44595, 511],
      "./Pine Door.json": [44598, 512],
      "./Pine Item Pedestal.json": [44602, 513],
      "./Pine Ladder.json": [44610, 514],
      "./Pine Trapdoor.json": [44612, 515],
      "./Pink Banner.json": [44615, 516],
      "./Pink Bed.json": [44617, 517],
      "./Pink Carpet.json": [44619, 518],
      "./Pink Directional Arrow.json": [44625, 519],
      "./Pink Strongbed.json": [44631, 520],
      "./Pink Torch.json": [44638, 521],
      "./Pink Wave.json": [44644, 522],
      "./Pipe.json": [44646, 523],
      "./Plum Door.json": [44648, 524],
      "./Plum Item Pedestal.json": [44653, 525],
      "./Plum Ladder.json": [44659, 526],
      "./Plum Trapdoor.json": [44665, 527],
      "./Potion Table.json": [44674, 528],
      "./Purple Banner.json": [44676, 529],
      "./Purple Bed.json": [44678, 530],
      "./Purple Carpet.json": [44682, 531],
      "./Purple Directional Arrow.json": [44689, 532],
      "./Purple Strongbed.json": [44693, 533],
      "./Purple Torch.json": [44700, 534],
      "./Purple Wave.json": [44705, 535],
      "./Rainbow Banner.json": [44711, 536],
      "./Red Banner.json": [44719, 537],
      "./Red Bed.json": [44722, 538],
      "./Red Carpet.json": [44729, 539],
      "./Red Directional Arrow.json": [44736, 540],
      "./Red Strongbed.json": [44743, 541],
      "./Red Torch.json": [44751, 542],
      "./Red Wave.json": [44755, 543],
      "./Rocket Ship S2.json": [44764, 544],
      "./Rocket Ship S3.json": [44769, 545],
      "./Rocket Ship S4.json": [44777, 546],
      "./Rocket Ship S5.json": [44783, 547],
      "./Rocket Ship.json": [44788, 548],
      "./Salvaging Table.json": [44794, 549],
      "./Showcase.json": [44800, 550],
      "./Skull Banner.json": [44808, 551],
      "./Slicing Board.json": [44810, 552],
      "./Slime Trail.json": [44815, 553],
      "./Small Black Pod.json": [44823, 554],
      "./Small Blue Pod.json": [44827, 555],
      "./Small Brown Pod.json": [44831, 556],
      "./Small Cyan Pod.json": [44835, 557],
      "./Small Gray Pod.json": [44840, 558],
      "./Small Green Pod.json": [44849, 559],
      "./Small Light Blue Pod.json": [44852, 560],
      "./Small Light Gray Pod.json": [44856, 561],
      "./Small Lime Pod.json": [44863, 562],
      "./Small Magenta Pod.json": [44867, 563],
      "./Small Orange Pod.json": [44870, 564],
      "./Small Pink Pod.json": [44872, 565],
      "./Small Purple Pod.json": [44875, 566],
      "./Small Red Pod.json": [44881, 567],
      "./Small White Pod.json": [44884, 568],
      "./Small Yellow Pod.json": [44888, 569],
      "./Spectral Door.json": [44895, 570],
      "./Spectral Item Pedestal.json": [44899, 571],
      "./Spectral Ladder.json": [44901, 572],
      "./Spectral Trapdoor.json": [44910, 573],
      "./Splitter Pipe.json": [44915, 574],
      "./Stampede.json": [44923, 575],
      "./Standing Noticeboard.json": [44925, 576],
      "./Stone Enchanting Table.json": [44927, 577],
      "./Stone Spikes.json": [44936, 578],
      "./Stone Trophy.json": [44943, 579],
      "./Strong Jump Pad.json": [44950, 580],
      "./Sunbathed Gallope.json": [44958, 581],
      "./Super Jump Pad.json": [44961, 582],
      "./Timed Spike Bomb Block.json": [44968, 583],
      "./Torch.json": [44975, 584],
      "./Twirlina Cappucina Statue.json": [44977, 585],
      "./UFO.json": [44982, 586],
      "./Unforgotten Pig.json": [44989, 587],
      "./Vending Machine.json": [44992, 588],
      "./Vines.json": [45001, 589],
      "./Weak Jump Pad.json": [45008, 590],
      "./Whiskers.json": [45015, 591],
      "./White Banner.json": [45018, 592],
      "./White Bed.json": [45027, 593],
      "./White Carpet.json": [45036, 594],
      "./White Directional Arrow.json": [45045, 595],
      "./White Strongbed.json": [45050, 596],
      "./White Torch.json": [45056, 597],
      "./White Wave.json": [45060, 598],
      "./Wire.json": [45065, 599],
      "./Wood Enchanting Table.json": [45071, 600],
      "./Wood Spikes.json": [45074, 601],
      "./Wood Trophy.json": [45082, 602],
      "./Workbench.json": [45085, 603],
      "./Yellow Banner.json": [45091, 604],
      "./Yellow Bed.json": [45095, 605],
      "./Yellow Carpet.json": [45097, 606],
      "./Yellow Directional Arrow.json": [45102, 607],
      "./Yellow Strongbed.json": [45111, 608],
      "./Yellow Torch.json": [45117, 609],
      "./Yellow Wave.json": [45121, 610]
    };

    function Hb(bb) {
      if (!Mb.o(eb, bb)) return Promise.resolve().then((() => {
        var wb = new Error("Cannot find module '" + bb + "'");
        throw wb.code = "MODULE_NOT_FOUND", wb
      }));
      var wb = eb[bb],
        Hb = wb[0];
      return Mb.e(wb[1]).then((() => Mb(Hb)))
    }
    Hb.keys = () => Object.keys(eb), Hb.id = 37716, bb.exports = Hb
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);