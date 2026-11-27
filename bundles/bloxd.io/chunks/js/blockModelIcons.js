export const id = 4;
export const ids = [4];
export const modules = {
  37942: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Lr,
      d: () => lr,
      f: () => Kr,
      g: () => nr,
      k: () => yr
    });
    var Zr = Qr(300),
      Wr = Qr(109);
    const ar = new(Qr(37945).d)(new URL(Qr.p + Qr.u(3), Qr.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var jr = Qr(1783),
      Ir = Qr(2311);
    const fr = 1e4,
      Er = 3e4;
    let pr = null,
      xr = null,
      mr = null,
      Nr = !1,
      Ur = 0;
    const tr = new Map;
    let hr = null;
    const zr = new Map,
      Yr = new Map;

    function nr(rr) {
      const Sr = new Promise(((Sr, Qr) => {
        const Zr = new Image;
        Zr.crossOrigin = "anonymous", Zr.fetchPriority = "high", Zr.onload = () => {
          Sr(Zr)
        }, Zr.onerror = () => {
          Qr(new Error(`A block icon's texture did not load: ${rr.slice(0,100)}`))
        }, Zr.src = rr
      }));
      return (0, Ir.g)(Sr)
    }

    function er(rr) {
      var Sr, Qr;
      Nr || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${rr}`), Nr = !0, null === (Sr = pr) || void 0 === Sr || Sr.terminate(), pr = null, xr = null, zr.clear(), Yr.clear();
      for (const Zr of tr.values()) Zr(null);
      tr.clear(), null === (Qr = hr) || void 0 === Qr || Qr()
    }

    function Kr() {
      return null !== xr
    }

    function yr() {
      return mr ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Zr.e.ios_icon_worker_v1 && (0, Wr.isWebKit)()) return;
        try {
          pr = await async function() {
            return await ar.ready(), ar.start()
          }()
        } catch (Ir) {
          return void er(`did not start (${String(Ir)})`)
        }
        let rr = () => {};
        const Sr = new Promise((Sr => {
          rr = Sr
        }));
        pr.onmessage = Sr => {
          let {
            data: Qr
          } = Sr;
          if ("started" === Qr.type) xr = pr, rr();
          else if ("failed" === Qr.type) er(`failed a draw (${Qr.message})`);
          else {
            var Zr, Wr;
            null === (Zr = tr.get(Qr.id)) || void 0 === Zr || Zr(Qr.url), tr.delete(Qr.id), null === (Wr = hr) || void 0 === Wr || Wr()
          }
        }, pr.onerror = Sr => {
          Sr.preventDefault(), er(`stopped (${Sr.message||"its script did not load or run"})`), rr()
        };
        const Qr = `did not start in ${Er/1e3} s`;
        await (0, jr.h)(Sr, Er, Qr).catch((() => {
          er(Qr)
        }))
      }(), mr
    }

    function Br() {
      if (null !== hr || 0 === tr.size) return;
      const rr = new Promise((rr => {
          hr = rr
        })),
        Sr = `did not answer in ${fr/1e3} s`;
      (0, jr.h)(rr, fr, Sr).then((() => {
        hr = null, Br()
      }), (() => {
        hr = null, er(Sr)
      }))
    }

    function Tr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      rr.postMessage(Sr, Qr)
    }

    function vr(rr, Sr, Qr, Zr) {
      let Wr = Sr.get(Qr);
      return void 0 === Wr && (Wr = Zr().then((async Sr => {
        let {
          image: Qr,
          request: Zr
        } = Sr;
        try {
          const Sr = await createImageBitmap(Qr);
          Tr(rr, Zr(Sr), [Sr])
        } catch (Wr) {
          er(`could not take an image (${String(Wr)})`)
        }
      })), Wr.catch((() => {
        Sr.get(Qr) === Wr && Sr.delete(Qr)
      })), Sr.set(Qr, Wr)), Wr
    }
    async function Or(rr, Sr) {
      yr();
      const Qr = xr;
      if (null === Qr) return null;
      if (await rr(Qr), xr !== Qr) return null;
      const Zr = ++Ur;
      return new Promise((rr => {
        tr.set(Zr, rr), Tr(Qr, Sr(Zr)), Br()
      }))
    }

    function Lr(rr, Sr, Qr) {
      return Or((Sr => Promise.all([rr.top, rr.left, rr.right].map((rr => function(rr, Sr) {
        return vr(rr, zr, Sr, (async () => ({
          image: await nr(Sr),
          request: rr => ({
            type: "texture",
            url: Sr,
            bitmap: rr
          })
        })))
      }(Sr, rr))))), (Zr => ({
        type: "draw",
        id: Zr,
        ...rr,
        size: Sr,
        outlineWidth: Qr
      })))
    }

    function lr(rr, Sr, Qr, Zr) {
      return Or((Qr => function(rr, Sr, Qr) {
        return vr(rr, Yr, Sr, (async () => {
          const {
            texture: rr,
            ...Zr
          } = await Qr();
          return {
            image: await nr(rr),
            request: rr => ({
              type: "model",
              name: Sr,
              bitmap: rr,
              geometry: Zr
            })
          }
        }))
      }(Qr, rr, Sr)), (Sr => ({
        type: "drawModel",
        id: Sr,
        name: rr,
        size: Qr,
        outlineWidth: Zr
      })))
    }
  },
  37950: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      blockModelIconModels: () => mr,
      drawnBlockModelIconUrl: () => hr,
      getBlockModelIconUrl: () => tr,
      hasBlockModelIcon: () => xr
    });
    var Zr = Qr(37942),
      Wr = Qr(37939);
    const ar = JSON.parse('{"67 Statue":["67"],"A Doe Through The Green":["_Deer Painting Bottom Left","_Deer Painting Bottom Right","_Deer Painting Top Left","_Deer Painting Top Right"],"Aspen Door":["Aspen Door","_Aspen Door Top"],"Auto Miner":["auto_miner_body","auto_miner_drill_back","auto_miner_drill_front","auto_miner_foot_back","auto_miner_foot_front"],"Bebek Bebek Bebek Statue":["bebek_bebek_bebek"],"Bin":["bin"],"Black Banner":["Black Banner","_Black Banner Flag"],"Black Bed":["Black Bed","_Black Bed Head"],"Black Carpet":["carpet_black_model"],"Black Strongbed":["Black Strongbed","_Black Strongbed Head"],"Black Torch":["torch_black"],"Black Wave":["wave_black"],"Blue Banner":["Blue Banner","_Blue Banner Flag"],"Blue Bed":["Blue Bed","_Blue Bed Head"],"Blue Carpet":["carpet_blue_model"],"Blue Strongbed":["Blue Strongbed","_Blue Strongbed Head"],"Blue Torch":["torch_blue"],"Blue Wave":["wave_blue"],"Bobino Musculino Statue":["bobino_musculino"],"Bobzilla Statue":["bobzilla"],"Boiling Pot":["boiling_pot"],"Bone Antlers":["bone_antlers_model"],"Brown Banner":["Brown Banner","_Brown Banner Flag"],"Brown Bed":["Brown Bed","_Brown Bed Head"],"Brown Carpet":["carpet_brown_model"],"Brown Strongbed":["Brown Strongbed","_Brown Strongbed Head"],"Brown Torch":["torch_brown"],"Brown Wave":["wave_brown"],"Brra Brra Pachim Statue":["brra_brra_pachim"],"Cannon":["cannon_barrel_back","cannon_barrel_front","cannon_bottom_back","cannon_bottom_front","cannon_top_back","cannon_top_front"],"Capitano Explovissimo Statue":["capitano_explovissimo"],"Cappuccino Ninjino Statue":["cappuccino_ninjino"],"Cedar Door":["Cedar Door","_Cedar Door Top"],"Cherry Door":["Cherry Door","_Cherry Door Top"],"Chili Pepper Plant":["chili_pepper_stage5_model"],"Chili Pepper Plant_stage1":["chili_pepper_stage1_model"],"Chili Pepper Plant_stage2":["chili_pepper_stage2_model"],"Chili Pepper Plant_stage3":["chili_pepper_stage3_model"],"Chili Pepper Plant_stage4":["chili_pepper_stage4_model"],"Chili Pepper Plant_stage5":["chili_pepper_stage5_model"],"Chimpanzano Bananano Statue":["chimpanzano_bananano"],"Chopping Board":["chopping_board"],"Coloured Wheel":["wheel"],"Coolant Pipe":["baf2_fluid_pipe_nz_pz"],"Crystal":["crystal"],"Cyan Banner":["Cyan Banner","_Cyan Banner Flag"],"Cyan Bed":["Cyan Bed","_Cyan Bed Head"],"Cyan Carpet":["carpet_cyan_model"],"Cyan Strongbed":["Cyan Strongbed","_Cyan Strongbed Head"],"Cyan Torch":["torch_cyan"],"Cyan Wave":["wave_cyan"],"Diamond Spikes":["Spikes_Diamond"],"Draugr Banner":["Draugr Banner","_Draugr Banner Flag"],"Dreaming Canine":["_Wolf Painting Bottom Left","_Wolf Painting Bottom Right","_Wolf Painting Top Left","_Wolf Painting Top Right"],"Duo Blocchino Statue":["2_block"],"Extractor Pipe":["extractor_pipe_straight_z"],"Filter Pipe":["filter_pipe_input_pz"],"Fluid Pipe":["baf2_fluid_pipe_nz_pz"],"Football":["football"],"Frying Pan":["frying_pan"],"Glowing Mushroom":["glowing_mushroom"],"Gold Antlers":["gold_antlers_model"],"Gold Spikes":["Spikes_Gold"],"Grant Wool":["_Sheep Painting Bottom Left","_Sheep Painting Bottom Right","_Sheep Painting Top Left","_Sheep Painting Top Right"],"Gray Banner":["Gray Banner","_Gray Banner Flag"],"Gray Bed":["Gray Bed","_Gray Bed Head"],"Gray Carpet":["carpet_gray_model"],"Gray Strongbed":["Gray Strongbed","_Gray Strongbed Head"],"Gray Torch":["torch_gray"],"Green Banner":["Green Banner","_Green Banner Flag"],"Green Bed":["Green Bed","_Green Bed Head"],"Green Carpet":["carpet_green_model"],"Green Strongbed":["Green Strongbed","_Green Strongbed Head"],"Green Torch":["torch_green"],"Green Wave":["wave_green"],"Grey Wave":["wave_grey"],"Hob Boiling":["hob_boiling"],"Hob Frying":["hob_frying"],"Hump Day":["_Camel Painting Bottom Left","_Camel Painting Bottom Right","_Camel Painting Top Left","_Camel Painting Top Right"],"Il Wizardini Del Porko Statue":["il_wizardini_del_porko"],"Iron Spikes":["Spikes_Iron"],"Job Application Statue":["job_application"],"John Beef Statue":["john_beef"],"Jump Pad":["jump_pad"],"Jungle Door":["Jungle Door","_Jungle Door Top"],"Kill Spikes":["Spikes_Kill"],"Kitchen Worktop":["kitchen_worktop"],"Landing Pad":["landing_pad"],"Lantern":["lantern"],"Light Blue Banner":["Light Blue Banner","_Light Blue Banner Flag"],"Light Blue Bed":["Light Blue Bed","_Light Blue Bed Head"],"Light Blue Carpet":["carpet_light_blue_model"],"Light Blue Strongbed":["Light Blue Strongbed","_Light Blue Strongbed Head"],"Light Blue Torch":["torch_light_blue"],"Light Blue Wave":["wave_light_blue"],"Light Gray Banner":["Light Gray Banner","_Light Gray Banner Flag"],"Light Gray Bed":["Light Gray Bed","_Light Gray Bed Head"],"Light Gray Carpet":["carpet_light_gray_model"],"Light Gray Strongbed":["Light Gray Strongbed","_Light Gray Strongbed Head"],"Light Gray Torch":["torch_light_gray"],"Light Grey Wave":["wave_light_grey"],"Lily Pad":["lily_pad_model"],"Lime Banner":["Lime Banner","_Lime Banner Flag"],"Lime Bed":["Lime Bed","_Lime Bed Head"],"Lime Carpet":["carpet_lime_model"],"Lime Strongbed":["Lime Strongbed","_Lime Strongbed Head"],"Lime Torch":["torch_lime"],"Lime Wave":["wave_lime"],"Lucchia Blocchi Statue":["lucchia_blocchi"],"Lunite Auto Miner":["auto_miner_lunite_body","auto_miner_lunite_drill_back","auto_miner_lunite_drill_front","auto_miner_lunite_foot_back","auto_miner_lunite_foot_front"],"Magenta Banner":["Magenta Banner","_Magenta Banner Flag"],"Magenta Bed":["Magenta Bed","_Magenta Bed Head"],"Magenta Carpet":["carpet_magenta_model"],"Magenta Strongbed":["Magenta Strongbed","_Magenta Strongbed Head"],"Magenta Torch":["torch_magenta"],"Magenta Wave":["wave_magenta"],"Mango Door":["Mango Door","_Mango Door Top"],"Maple Door":["Maple Door","_Maple Door Top"],"Merger Pipe":["merger_pipe_output_pz"],"Monsieur Bedwar Statue":["monsieur_bedwar"],"Noticeboard":["noticeboard_wall_single"],"Noticeboard Standing":["noticeboard_standing"],"Noticeboard Standing Bottom":["noticeboard_standing_bottom"],"Noticeboard Standing Bottom Left":["noticeboard_standing_bottom_left"],"Noticeboard Standing Bottom Right":["noticeboard_standing_bottom_right"],"Noticeboard Standing Left":["noticeboard_standing_left"],"Noticeboard Standing Leg":["noticeboard_standing_leg"],"Noticeboard Standing Right":["noticeboard_standing_right"],"Noticeboard Standing Top":["noticeboard_standing_top"],"Noticeboard Standing Top Left":["noticeboard_standing_top_left"],"Noticeboard Standing Top Right":["noticeboard_standing_top_right"],"Noticeboard Wall":["noticeboard_wall"],"Noticeboard Wall Bottom":["noticeboard_wall_bottom"],"Noticeboard Wall Bottom Left":["noticeboard_wall_bottom_left"],"Noticeboard Wall Bottom Right":["noticeboard_wall_bottom_right"],"Noticeboard Wall Left":["noticeboard_wall_left"],"Noticeboard Wall Right":["noticeboard_wall_right"],"Noticeboard Wall Top":["noticeboard_wall_top"],"Noticeboard Wall Top Left":["noticeboard_wall_top_left"],"Noticeboard Wall Top Right":["noticeboard_wall_top_right"],"Orange Banner":["Orange Banner","_Orange Banner Flag"],"Orange Bed":["Orange Bed","_Orange Bed Head"],"Orange Carpet":["carpet_orange_model"],"Orange Strongbed":["Orange Strongbed","_Orange Strongbed Head"],"Orange Torch":["torch_orange"],"Orange Wave":["wave_orange"],"Palm Door":["Palm Door","_Palm Door Top"],"Pear Door":["Pear Door","_Pear Door Top"],"Pine Door":["Pine Door","_Pine Door Top"],"Pink Banner":["Pink Banner","_Pink Banner Flag"],"Pink Bed":["Pink Bed","_Pink Bed Head"],"Pink Carpet":["carpet_pink_model"],"Pink Strongbed":["Pink Strongbed","_Pink Strongbed Head"],"Pink Torch":["torch_pink"],"Pink Wave":["wave_pink"],"Pipe":["pipe_straight_z"],"Plum Door":["Plum Door","_Plum Door Top"],"Purple Banner":["Purple Banner","_Purple Banner Flag"],"Purple Bed":["Purple Bed","_Purple Bed Head"],"Purple Carpet":["carpet_purple_model"],"Purple Strongbed":["Purple Strongbed","_Purple Strongbed Head"],"Purple Torch":["torch_purple"],"Purple Wave":["wave_purple"],"Rainbow Banner":["Rainbow Banner","_Rainbow Banner Flag"],"Red Banner":["Red Banner","_Red Banner Flag"],"Red Bed":["Red Bed","_Red Bed Head"],"Red Carpet":["carpet_red_model"],"Red Strongbed":["Red Strongbed","_Red Strongbed Head"],"Red Torch":["torch_red"],"Red Wave":["wave_red"],"Rocket Ship":["rocket_northeast_1","rocket_northwest_1","rocket_southeast_1","rocket_southwest_1"],"Rocket Ship S2":["rocket_northeast_1","rocket_northeast_2","rocket_northwest_1","rocket_northwest_2","rocket_southeast_1","rocket_southeast_2","rocket_southwest_1","rocket_southwest_2"],"Rocket Ship S3":["rocket_northeast_1","rocket_northeast_2","rocket_northeast_3","rocket_northwest_1","rocket_northwest_2","rocket_northwest_3","rocket_southeast_1","rocket_southeast_2","rocket_southeast_3","rocket_southwest_1","rocket_southwest_2","rocket_southwest_3"],"Rocket Ship S4":["rocket_northeast_1","rocket_northeast_2","rocket_northeast_3","rocket_northeast_4","rocket_northwest_1","rocket_northwest_2","rocket_northwest_3","rocket_northwest_4","rocket_southeast_1","rocket_southeast_2","rocket_southeast_3","rocket_southeast_4","rocket_southwest_1","rocket_southwest_2","rocket_southwest_3","rocket_southwest_4"],"Rocket Ship S5":["rocket_northeast_1","rocket_northeast_2","rocket_northeast_3","rocket_northeast_4","rocket_northeast_5","rocket_northwest_1","rocket_northwest_2","rocket_northwest_3","rocket_northwest_4","rocket_northwest_5","rocket_southeast_1","rocket_southeast_2","rocket_southeast_3","rocket_southeast_4","rocket_southeast_5","rocket_southwest_1","rocket_southwest_2","rocket_southwest_3","rocket_southwest_4","rocket_southwest_5"],"Skull Banner":["Skull Banner","_Skull Banner Flag"],"Slicing Board":["slicing_board"],"Slime Trail":["slime_trail"],"Small Black Pod":["Small Black Pod","_Small Black Pod Mid","_Small Black Pod Top"],"Small Blue Pod":["Small Blue Pod","_Small Blue Pod Mid","_Small Blue Pod Top"],"Small Brown Pod":["Small Brown Pod","_Small Brown Pod Mid","_Small Brown Pod Top"],"Small Cyan Pod":["Small Cyan Pod","_Small Cyan Pod Mid","_Small Cyan Pod Top"],"Small Gray Pod":["Small Gray Pod","_Small Gray Pod Mid","_Small Gray Pod Top"],"Small Green Pod":["Small Green Pod","_Small Green Pod Mid","_Small Green Pod Top"],"Small Light Blue Pod":["Small Light Blue Pod","_Small Light Blue Pod Mid","_Small Light Blue Pod Top"],"Small Light Gray Pod":["Small Light Gray Pod","_Small Light Gray Pod Mid","_Small Light Gray Pod Top"],"Small Lime Pod":["Small Lime Pod","_Small Lime Pod Mid","_Small Lime Pod Top"],"Small Magenta Pod":["Small Magenta Pod","_Small Magenta Pod Mid","_Small Magenta Pod Top"],"Small Orange Pod":["Small Orange Pod","_Small Orange Pod Mid","_Small Orange Pod Top"],"Small Pink Pod":["Small Pink Pod","_Small Pink Pod Mid","_Small Pink Pod Top"],"Small Purple Pod":["Small Purple Pod","_Small Purple Pod Mid","_Small Purple Pod Top"],"Small Red Pod":["Small Red Pod","_Small Red Pod Mid","_Small Red Pod Top"],"Small White Pod":["Small White Pod","_Small White Pod Mid","_Small White Pod Top"],"Small Yellow Pod":["Small Yellow Pod","_Small Yellow Pod Mid","_Small Yellow Pod Top"],"Spectral Door":["Spectral Door","_Spectral Door Top"],"Splitter Pipe":["splitter_pipe"],"Stampede":["_Cow Painting Bottom Left","_Cow Painting Bottom Right","_Cow Painting Top Left","_Cow Painting Top Right"],"Standing Noticeboard":["noticeboard_standing_single"],"Stone Spikes":["Spikes_Stone"],"Strong Jump Pad":["jump_pad_strong"],"Sunbathed Gallope":["_Horse Painting Bottom Left","_Horse Painting Bottom Right","_Horse Painting Top Left","_Horse Painting Top Right"],"Super Jump Pad":["jump_pad_super"],"Torch":["torch"],"Twirlina Cappucina Statue":["twirlina_cappucina"],"UFO":["ufo"],"Unforgotten Pig":["_Pig Painting Bottom Left","_Pig Painting Bottom Right","_Pig Painting Top Left","_Pig Painting Top Right"],"Vending Machine":["vending_machine_bottom","vending_machine_top"],"Weak Jump Pad":["jump_pad_weak"],"Whiskers":["_Wildcat Painting Bottom Left","_Wildcat Painting Bottom Right","_Wildcat Painting Top Left","_Wildcat Painting Top Right"],"White Banner":["White Banner","_White Banner Flag"],"White Bed":["White Bed","_White Bed Head"],"White Carpet":["carpet_white_model"],"White Strongbed":["White Strongbed","_White Strongbed Head"],"White Torch":["torch_white"],"White Wave":["wave_white"],"Wire":["wire_straight_z"],"Wood Spikes":["Spikes_Wood"],"Yellow Banner":["Yellow Banner","_Yellow Banner Flag"],"Yellow Bed":["Yellow Bed","_Yellow Bed Head"],"Yellow Carpet":["carpet_yellow_model"],"Yellow Strongbed":["Yellow Strongbed","_Yellow Strongbed Head"],"Yellow Torch":["torch_yellow"],"Yellow Wave":["wave_yellow"]}'),
      jr = Qr(37955),
      Ir = new Map(jr.keys().filter((rr => rr.startsWith("./"))).map((rr => [rr.slice(2, -5), rr]))),
      fr = new Map,
      Er = new Map,
      pr = new Map;

    function xr(rr) {
      return Ir.has(rr)
    }

    function mr(rr) {
      var Sr;
      return null !== (Sr = ar[rr]) && void 0 !== Sr ? Sr : [rr]
    }

    function Nr(rr) {
      return jr(Ir.get(rr))
    }
    async function Ur(rr, Sr, Qr) {
      const {
        data: Zr,
        texture: ar
      } = await
      function(rr) {
        let Sr = fr.get(rr);
        return Sr || (Sr = Nr(rr).then((async rr => {
          const Sr = new Image;
          Sr.src = rr.texture, await Sr.decode();
          const Qr = document.createElement("canvas");
          Qr.width = Sr.width, Qr.height = Sr.height;
          const Zr = Qr.getContext("2d");
          return Zr.drawImage(Sr, 0, 0), {
            data: rr,
            texture: {
              width: Sr.width,
              height: Sr.height,
              pixels: Zr.getImageData(0, 0, Sr.width, Sr.height).data
            }
          }
        })), Sr.catch((() => {
          fr.delete(rr)
        })), fr.set(rr, Sr)), Sr
      }(rr), jr = document.createElement("canvas");
      return jr.width = Sr, jr.height = Sr, jr.getContext("2d").putImageData(new ImageData((0, Wr.n)(Zr, ar, Sr, Qr), Sr, Sr), 0, 0), jr.toDataURL()
    }

    function tr(rr, Sr, Qr) {
      const Wr = `${Sr}|${Qr}|${rr}`;
      let ar = Er.get(Wr);
      return ar || (ar = (0, Zr.d)(rr, (() => Nr(rr)), Sr, Qr).then((Zr => null !== Zr && void 0 !== Zr ? Zr : Ur(rr, Sr, Qr))), ar.then((Qr => {
        const Zr = pr.get(rr);
        Qr && (void 0 === Zr || Zr.size < Sr) && pr.set(rr, {
          size: Sr,
          url: Qr
        })
      }), (() => {
        Er.delete(Wr)
      })), Er.set(Wr, ar)), ar
    }

    function hr(rr) {
      var Sr, Qr;
      return null !== (Sr = null === (Qr = pr.get(rr)) || void 0 === Qr ? void 0 : Qr.url) && void 0 !== Sr ? Sr : null
    }
  },
  37939: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      g: () => fr,
      j: () => jr,
      l: () => mr,
      n: () => Er
    });
    const Zr = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      Wr = .6,
      ar = {
        width: 2 * Zr.across,
        height: 2 * Zr.down + Zr.up
      };

    function jr(rr, Sr) {
      const Qr = Sr > 0 ? Sr + 1 : 0,
        jr = rr * Wr - Sr / Zr.across;
      return Math.max(0, Math.min(jr, (rr - 2 * Qr) / ar.height))
    }
    const Ir = [15, 15, 15],
      fr = {
        top: 1,
        left: .85,
        right: .7
      };

    function Er(rr, Sr, Qr, Zr) {
      const {
        vertices: Wr,
        uvs: Ir,
        indices: fr,
        shades: Er
      } = rr, pr = function(rr, Sr) {
        const Qr = jr(rr, Sr),
          Zr = ar.width * Qr,
          Wr = ar.height * Qr;
        return {
          left: (rr - Zr) / 2,
          top: (rr - Wr) / 2,
          width: Zr,
          height: Wr
        }
      }(Qr, Zr), xr = new Float32Array(Wr.length);
      for (let ar = 0; ar < Wr.length; ar += 3) xr[ar] = pr.left + Wr[ar] * pr.width, xr[ar + 1] = pr.top + Wr[ar + 1] * pr.height, xr[ar + 2] = Wr[ar + 2];
      const Nr = new Float32Array(Qr * Qr).fill(-1 / 0),
        Ur = new Uint8ClampedArray(Qr * Qr * 4),
        tr = 255 * rr.alphaCutoff;
      for (let ar = 0; ar < fr.length; ar += 3) {
        const [rr, Zr, Wr] = [fr[ar], fr[ar + 1], fr[ar + 2]], [jr, pr, mr] = [3 * rr, 3 * Zr, 3 * Wr], [hr, zr, Yr, nr, er, Kr] = [xr[jr], xr[jr + 1], xr[pr], xr[pr + 1], xr[mr], xr[mr + 1]], yr = (Yr - hr) * (Kr - zr) - (er - hr) * (nr - zr);
        if (Math.abs(yr) < 1e-9) continue;
        const Br = Er[ar / 3],
          [Tr, vr, Or, Lr, lr, Xr] = [Ir[2 * rr], Ir[2 * rr + 1], Ir[2 * Zr], Ir[2 * Zr + 1], Ir[2 * Wr], Ir[2 * Wr + 1]],
          Pr = Math.max(0, Math.floor(Math.min(hr, Yr, er))),
          Hr = Math.min(Qr - 1, Math.ceil(Math.max(hr, Yr, er))),
          qr = Math.max(0, Math.floor(Math.min(zr, nr, Kr))),
          Rr = Math.min(Qr - 1, Math.ceil(Math.max(zr, nr, Kr)));
        for (let ar = qr; ar <= Rr; ar++)
          for (let rr = Pr; rr <= Hr; rr++) {
            const [Zr, Wr] = [rr + .5, ar + .5], Ir = ((Zr - hr) * (Kr - zr) - (er - hr) * (Wr - zr)) / yr, fr = ((Yr - hr) * (Wr - zr) - (Zr - hr) * (nr - zr)) / yr, Er = 1 - Ir - fr;
            if (Er < 0 || Ir < 0 || fr < 0) continue;
            const Pr = Er * xr[jr + 2] + Ir * xr[pr + 2] + fr * xr[mr + 2],
              Hr = ar * Qr + rr;
            if (Pr <= Nr[Hr]) continue;
            const qr = Math.max(0, Math.min(Sr.width - 1, Math.floor((Er * Tr + Ir * Or + fr * lr) * Sr.width))),
              Rr = 4 * (Math.max(0, Math.min(Sr.height - 1, Math.floor((Er * vr + Ir * Lr + fr * Xr) * Sr.height))) * Sr.width + qr);
            Sr.pixels[Rr + 3] < tr || (Nr[Hr] = Pr, Ur[4 * Hr] = Sr.pixels[Rr] * Br, Ur[4 * Hr + 1] = Sr.pixels[Rr + 1] * Br, Ur[4 * Hr + 2] = Sr.pixels[Rr + 2] * Br, Ur[4 * Hr + 3] = 255)
          }
      }
      return mr(Ur, Qr, Zr), Ur
    }
    let pr = NaN,
      xr = new Int32Array(0);

    function mr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sr => 0 !== rr[4 * Sr + 3];
      const Wr = new Uint8Array(Sr * Sr);
      for (let Ir = 0; Ir < Sr * Sr; Ir++) Wr[Ir] = Zr(Ir) ? 1 : 0;
      const ar = (rr, Qr) => rr >= 0 && Qr >= 0 && rr < Sr && Qr < Sr && 0 === Wr[Qr * Sr + rr],
        jr = new Float32Array(Sr * Sr).fill(1 / 0),
        fr = function(rr) {
          if (rr !== pr) {
            const Sr = Math.ceil(rr + 1),
              Qr = [];
            for (let Zr = -Sr; Zr <= Sr; Zr++)
              for (let Wr = -Sr; Wr <= Sr; Wr++) {
                const Sr = Wr * Wr + Zr * Zr;
                Sr > 0 && Sr < (rr + 1) ** 2 && Qr.push(Wr, Zr, Sr)
              }
            pr = rr, xr = Int32Array.from(Qr)
          }
          return xr
        }(Qr);
      for (let Ir = 0; Ir < Sr; Ir++)
        for (let rr = 0; rr < Sr; rr++) {
          if (1 === Wr[Ir * Sr + rr] && (ar(rr - 1, Ir) || ar(rr + 1, Ir) || ar(rr, Ir - 1) || ar(rr, Ir + 1)))
            for (let Qr = 0; Qr < fr.length; Qr += 3) {
              const Zr = rr + fr[Qr],
                Wr = Ir + fr[Qr + 1];
              if (Zr >= 0 && Wr >= 0 && Zr < Sr && Wr < Sr) {
                const rr = Wr * Sr + Zr;
                jr[rr] = Math.min(jr[rr], fr[Qr + 2])
              }
            }
        }
      for (let Er = 0; Er < Sr * Sr; Er++) 1 !== Wr[Er] && jr[Er] !== 1 / 0 && (rr.set(Ir, 4 * Er), rr[4 * Er + 3] = Math.round(255 * Math.min(1, Qr + 1 - Math.sqrt(jr[Er]))))
    }
  },
  37945: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    const Zr = {
      wait: function(rr) {
        return new Promise((Sr => {
          setTimeout(Sr, rr)
        }))
      },
      stallMs: 2e4
    };
    class Wr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Zr;
        this.url = rr, this.options = Sr, this.timing = Qr, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = rr
      }
      ready() {
        if (null === this.fetched) {
          const rr = new AbortController;
          this.fetchAbort = rr, this.fetched = this.fetchWithRetries(rr.signal).then((Sr => (this.fetchAbort === rr && (this.fetchAbort = null), Sr)))
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
      async fetchWithRetries(rr) {
        for (let Sr = 0;; Sr++) {
          const Qr = new URL(this.url);
          if (Sr > 0 && Qr.searchParams.set("cache-bust", `${Date.now()}-${Sr}`), await this.fetchWhole(Qr, rr)) return this.scriptUrl = Qr, !0;
          if (Sr >= 3 || rr.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** Sr), rr.aborted) return !1
        }
      }
      async fetchWhole(rr, Sr) {
        const Qr = new AbortController;
        let Zr;
        const Wr = () => {
            clearTimeout(Zr), Zr = setTimeout((() => {
              Qr.abort()
            }), this.timing.stallMs)
          },
          ar = () => {
            Qr.abort()
          };
        Sr.addEventListener("abort", ar, {
          once: !0
        }), Wr();
        try {
          var jr;
          const Sr = await fetch(rr, {
            signal: Qr.signal
          });
          if (!Sr.ok) return !1;
          const Zr = null === (jr = Sr.body) || void 0 === jr ? void 0 : jr.getReader();
          if (!Zr) return !1;
          for (;;) {
            const {
              done: rr
            } = await Zr.read();
            if (rr) return !0;
            Wr()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Zr), Sr.removeEventListener("abort", ar)
        }
      }
    }
  },
  37955: (rr, Sr, Qr) => {
    var Zr = {
      "./67 Statue.json": [43675, 313],
      "./A Doe Through The Green.json": [43678, 314],
      "./Artisan Bench.json": [43681, 315],
      "./Aspen Door.json": [43686, 316],
      "./Aspen Item Pedestal.json": [43688, 317],
      "./Aspen Ladder.json": [43694, 318],
      "./Aspen Trapdoor.json": [43701, 319],
      "./Auto Miner.json": [43705, 320],
      "./Bebek Bebek Bebek Statue.json": [43709, 321],
      "./Bin.json": [43714, 322],
      "./Black Banner.json": [43723, 323],
      "./Black Bed.json": [43727, 324],
      "./Black Carpet.json": [43736, 325],
      "./Black Directional Arrow.json": [43743, 326],
      "./Black Strongbed.json": [43752, 327],
      "./Black Torch.json": [43757, 328],
      "./Black Wave.json": [43763, 329],
      "./Blue Banner.json": [43771, 330],
      "./Blue Bed.json": [43775, 331],
      "./Blue Carpet.json": [43783, 332],
      "./Blue Directional Arrow.json": [43787, 333],
      "./Blue Strongbed.json": [43789, 334],
      "./Blue Torch.json": [43798, 335],
      "./Blue Wave.json": [43801, 336],
      "./Board.json": [43803, 337],
      "./Bobino Musculino Statue.json": [43812, 338],
      "./Bobzilla Statue.json": [43816, 339],
      "./Boiling Pot.json": [43823, 340],
      "./Bone Antlers.json": [43830, 341],
      "./Brown Banner.json": [43834, 342],
      "./Brown Bed.json": [43837, 343],
      "./Brown Carpet.json": [43839, 344],
      "./Brown Directional Arrow.json": [43847, 345],
      "./Brown Strongbed.json": [43853, 346],
      "./Brown Torch.json": [43857, 347],
      "./Brown Wave.json": [43861, 348],
      "./Brra Brra Pachim Statue.json": [43870, 349],
      "./Cannon.json": [43873, 350],
      "./Capitano Explovissimo Statue.json": [43878, 351],
      "./Cappuccino Ninjino Statue.json": [43883, 352],
      "./Cedar Door.json": [43888, 353],
      "./Cedar Item Pedestal.json": [43897, 354],
      "./Cedar Ladder.json": [43905, 355],
      "./Cedar Trapdoor.json": [43912, 356],
      "./Cherry Door.json": [43916, 357],
      "./Cherry Item Pedestal.json": [43923, 358],
      "./Cherry Ladder.json": [43926, 359],
      "./Cherry Trapdoor.json": [43933, 360],
      "./Chili Pepper Plant.json": [43942, 361],
      "./Chili Pepper Plant_stage1.json": [43944, 362],
      "./Chili Pepper Plant_stage2.json": [43946, 363],
      "./Chili Pepper Plant_stage3.json": [43949, 364],
      "./Chili Pepper Plant_stage4.json": [43956, 365],
      "./Chili Pepper Plant_stage5.json": [43961, 366],
      "./Chimpanzano Bananano Statue.json": [43967, 367],
      "./Chopping Board.json": [43976, 368],
      "./Coloured Wheel.json": [43985, 369],
      "./Coolant Pipe.json": [43992, 370],
      "./Crystal.json": [44e3, 371],
      "./Cyan Banner.json": [44004, 372],
      "./Cyan Bed.json": [44009, 373],
      "./Cyan Carpet.json": [44015, 374],
      "./Cyan Directional Arrow.json": [44024, 375],
      "./Cyan Strongbed.json": [44026, 376],
      "./Cyan Torch.json": [44034, 377],
      "./Cyan Wave.json": [44041, 378],
      "./Dangling Rope.json": [44047, 379],
      "./Dangling Vine.json": [44053, 380],
      "./Diamond Enchanting Table.json": [44057, 381],
      "./Diamond Spikes.json": [44062, 382],
      "./Diamond Trophy.json": [44067, 383],
      "./Draugr Banner.json": [44069, 384],
      "./Dreaming Canine.json": [44071, 385],
      "./Duo Blocchino Statue.json": [44074, 386],
      "./Extractor Pipe.json": [44077, 387],
      "./Fat Brown Mushroom.json": [44080, 388],
      "./Fat Red Mushroom.json": [44082, 389],
      "./Filter Pipe.json": [44087, 390],
      "./Fluid Pipe.json": [44091, 391],
      "./Football.json": [44093, 392],
      "./Frying Pan.json": [44097, 393],
      "./Furnace.json": [44105, 394],
      "./Glowing Mushroom.json": [44112, 395],
      "./Gold Antlers.json": [44117, 396],
      "./Gold Enchanting Table.json": [44123, 397],
      "./Gold Spikes.json": [44131, 398],
      "./Gold Trophy.json": [44140, 399],
      "./Grant Wool.json": [44149, 400],
      "./Gray Banner.json": [44151, 401],
      "./Gray Bed.json": [44158, 402],
      "./Gray Carpet.json": [44161, 403],
      "./Gray Strongbed.json": [44163, 404],
      "./Gray Torch.json": [44167, 405],
      "./Green Banner.json": [44176, 406],
      "./Green Bed.json": [44181, 407],
      "./Green Carpet.json": [44187, 408],
      "./Green Directional Arrow.json": [44191, 409],
      "./Green Strongbed.json": [44193, 410],
      "./Green Torch.json": [44198, 411],
      "./Green Wave.json": [44202, 412],
      "./Grey Directional Arrow.json": [44204, 413],
      "./Grey Wave.json": [44210, 414],
      "./Hob Boiling.json": [44213, 415],
      "./Hob Frying.json": [44220, 416],
      "./Hump Day.json": [44227, 417],
      "./Il Wizardini Del Porko Statue.json": [44235, 418],
      "./Iron Enchanting Table.json": [44243, 419],
      "./Iron Ladder.json": [44246, 420],
      "./Iron Spikes.json": [44255, 421],
      "./Iron Trophy.json": [44260, 422],
      "./Job Application Statue.json": [44269, 423],
      "./John Beef Statue.json": [44278, 424],
      "./Jump Pad.json": [44281, 425],
      "./Jungle Door.json": [44285, 426],
      "./Jungle Item Pedestal.json": [44288, 427],
      "./Jungle Ladder.json": [44296, 428],
      "./Jungle Trapdoor.json": [44298, 429],
      "./Kill Spikes.json": [44301, 430],
      "./Kitchen Worktop.json": [44304, 431],
      "./Landing Pad.json": [44312, 432],
      "./Lantern.json": [44320, 433],
      "./Leaf Bed.json": [44323, 434],
      "./Light Blue Banner.json": [44325, 435],
      "./Light Blue Bed.json": [44330, 436],
      "./Light Blue Carpet.json": [44336, 437],
      "./Light Blue Directional Arrow.json": [44343, 438],
      "./Light Blue Strongbed.json": [44351, 439],
      "./Light Blue Torch.json": [44359, 440],
      "./Light Blue Wave.json": [44361, 441],
      "./Light Gray Banner.json": [44365, 442],
      "./Light Gray Bed.json": [44372, 443],
      "./Light Gray Carpet.json": [44378, 444],
      "./Light Gray Strongbed.json": [44385, 445],
      "./Light Gray Torch.json": [44394, 446],
      "./Light Grey Directional Arrow.json": [44396, 447],
      "./Light Grey Wave.json": [44400, 448],
      "./Lily Pad.json": [44406, 449],
      "./Lime Banner.json": [44409, 450],
      "./Lime Bed.json": [44418, 451],
      "./Lime Carpet.json": [44422, 452],
      "./Lime Directional Arrow.json": [44425, 453],
      "./Lime Strongbed.json": [44427, 454],
      "./Lime Torch.json": [44435, 455],
      "./Lime Wave.json": [44438, 456],
      "./Lucchia Blocchi Statue.json": [44443, 457],
      "./Lunite Auto Miner.json": [44448, 458],
      "./Magenta Banner.json": [44450, 459],
      "./Magenta Bed.json": [44459, 460],
      "./Magenta Carpet.json": [44468, 461],
      "./Magenta Directional Arrow.json": [44472, 462],
      "./Magenta Strongbed.json": [44475, 463],
      "./Magenta Torch.json": [44482, 464],
      "./Magenta Wave.json": [44487, 465],
      "./Mango Door.json": [44493, 466],
      "./Mango Item Pedestal.json": [44496, 467],
      "./Mango Ladder.json": [44503, 468],
      "./Mango Trapdoor.json": [44511, 469],
      "./Maple Door.json": [44520, 470],
      "./Maple Ladder.json": [44523, 471],
      "./Maple Trapdoor.json": [44528, 472],
      "./Merger Pipe.json": [44530, 473],
      "./Monsieur Bedwar Statue.json": [44535, 474],
      "./Moonstone Trophy.json": [44542, 475],
      "./Noticeboard Standing Bottom Left.json": [44549, 476],
      "./Noticeboard Standing Bottom Right.json": [44555, 477],
      "./Noticeboard Standing Bottom.json": [44558, 478],
      "./Noticeboard Standing Left.json": [44567, 479],
      "./Noticeboard Standing Leg.json": [44572, 480],
      "./Noticeboard Standing Right.json": [44578, 481],
      "./Noticeboard Standing Top Left.json": [44583, 482],
      "./Noticeboard Standing Top Right.json": [44589, 483],
      "./Noticeboard Standing Top.json": [44594, 484],
      "./Noticeboard Standing.json": [44597, 485],
      "./Noticeboard Wall Bottom Left.json": [44599, 486],
      "./Noticeboard Wall Bottom Right.json": [44605, 487],
      "./Noticeboard Wall Bottom.json": [44611, 488],
      "./Noticeboard Wall Left.json": [44620, 489],
      "./Noticeboard Wall Right.json": [44626, 490],
      "./Noticeboard Wall Top Left.json": [44631, 491],
      "./Noticeboard Wall Top Right.json": [44635, 492],
      "./Noticeboard Wall Top.json": [44642, 493],
      "./Noticeboard Wall.json": [44645, 494],
      "./Noticeboard.json": [44648, 495],
      "./Nova Trophy.json": [44650, 496],
      "./Orange Banner.json": [44653, 497],
      "./Orange Bed.json": [44661, 498],
      "./Orange Carpet.json": [44670, 499],
      "./Orange Directional Arrow.json": [44672, 500],
      "./Orange Strongbed.json": [44679, 501],
      "./Orange Torch.json": [44686, 502],
      "./Orange Wave.json": [44695, 503],
      "./Palm Door.json": [44699, 504],
      "./Palm Item Pedestal.json": [44708, 505],
      "./Palm Ladder.json": [44715, 506],
      "./Palm Trapdoor.json": [44721, 507],
      "./Pear Door.json": [44730, 508],
      "./Pear Item Pedestal.json": [44737, 509],
      "./Pear Ladder.json": [44742, 510],
      "./Pear Trapdoor.json": [44750, 511],
      "./Pine Door.json": [44755, 512],
      "./Pine Item Pedestal.json": [44760, 513],
      "./Pine Ladder.json": [44769, 514],
      "./Pine Trapdoor.json": [44774, 515],
      "./Pink Banner.json": [44782, 516],
      "./Pink Bed.json": [44790, 517],
      "./Pink Carpet.json": [44796, 518],
      "./Pink Directional Arrow.json": [44799, 519],
      "./Pink Strongbed.json": [44808, 520],
      "./Pink Torch.json": [44810, 521],
      "./Pink Wave.json": [44814, 522],
      "./Pipe.json": [44817, 523],
      "./Plum Door.json": [44819, 524],
      "./Plum Item Pedestal.json": [44822, 525],
      "./Plum Ladder.json": [44831, 526],
      "./Plum Trapdoor.json": [44838, 527],
      "./Potion Table.json": [44842, 528],
      "./Purple Banner.json": [44851, 529],
      "./Purple Bed.json": [44859, 530],
      "./Purple Carpet.json": [44865, 531],
      "./Purple Directional Arrow.json": [44873, 532],
      "./Purple Strongbed.json": [44875, 533],
      "./Purple Torch.json": [44881, 534],
      "./Purple Wave.json": [44889, 535],
      "./Rainbow Banner.json": [44892, 536],
      "./Red Banner.json": [44899, 537],
      "./Red Bed.json": [44908, 538],
      "./Red Carpet.json": [44912, 539],
      "./Red Directional Arrow.json": [44921, 540],
      "./Red Strongbed.json": [44924, 541],
      "./Red Torch.json": [44931, 542],
      "./Red Wave.json": [44940, 543],
      "./Rocket Ship S2.json": [44946, 544],
      "./Rocket Ship S3.json": [44954, 545],
      "./Rocket Ship S4.json": [44959, 546],
      "./Rocket Ship S5.json": [44962, 547],
      "./Rocket Ship.json": [44969, 548],
      "./Salvaging Table.json": [44971, 549],
      "./Showcase.json": [44976, 550],
      "./Skull Banner.json": [44981, 551],
      "./Slicing Board.json": [44983, 552],
      "./Slime Trail.json": [44985, 553],
      "./Small Black Pod.json": [44989, 554],
      "./Small Blue Pod.json": [44997, 555],
      "./Small Brown Pod.json": [45001, 556],
      "./Small Cyan Pod.json": [45006, 557],
      "./Small Gray Pod.json": [45009, 558],
      "./Small Green Pod.json": [45014, 559],
      "./Small Light Blue Pod.json": [45018, 560],
      "./Small Light Gray Pod.json": [45026, 561],
      "./Small Lime Pod.json": [45033, 562],
      "./Small Magenta Pod.json": [45039, 563],
      "./Small Orange Pod.json": [45047, 564],
      "./Small Pink Pod.json": [45049, 565],
      "./Small Purple Pod.json": [45054, 566],
      "./Small Red Pod.json": [45061, 567],
      "./Small White Pod.json": [45067, 568],
      "./Small Yellow Pod.json": [45073, 569],
      "./Spectral Door.json": [45077, 570],
      "./Spectral Item Pedestal.json": [45079, 571],
      "./Spectral Ladder.json": [45085, 572],
      "./Spectral Trapdoor.json": [45093, 573],
      "./Splitter Pipe.json": [45096, 574],
      "./Stampede.json": [45098, 575],
      "./Standing Noticeboard.json": [45105, 576],
      "./Stone Enchanting Table.json": [45107, 577],
      "./Stone Spikes.json": [45109, 578],
      "./Stone Trophy.json": [45112, 579],
      "./Strong Jump Pad.json": [45114, 580],
      "./Sunbathed Gallope.json": [45119, 581],
      "./Super Jump Pad.json": [45123, 582],
      "./Timed Spike Bomb Block.json": [45132, 583],
      "./Torch.json": [45135, 584],
      "./Twirlina Cappucina Statue.json": [45142, 585],
      "./UFO.json": [45146, 586],
      "./Unforgotten Pig.json": [45154, 587],
      "./Vending Machine.json": [45156, 588],
      "./Vines.json": [45160, 589],
      "./Weak Jump Pad.json": [45166, 590],
      "./Whiskers.json": [45171, 591],
      "./White Banner.json": [45178, 592],
      "./White Bed.json": [45181, 593],
      "./White Carpet.json": [45183, 594],
      "./White Directional Arrow.json": [45186, 595],
      "./White Strongbed.json": [45191, 596],
      "./White Torch.json": [45196, 597],
      "./White Wave.json": [45200, 598],
      "./Wire.json": [45203, 599],
      "./Wood Enchanting Table.json": [45209, 600],
      "./Wood Spikes.json": [45218, 601],
      "./Wood Trophy.json": [45227, 602],
      "./Workbench.json": [45233, 603],
      "./Yellow Banner.json": [45236, 604],
      "./Yellow Bed.json": [45242, 605],
      "./Yellow Carpet.json": [45250, 606],
      "./Yellow Directional Arrow.json": [45254, 607],
      "./Yellow Strongbed.json": [45258, 608],
      "./Yellow Torch.json": [45267, 609],
      "./Yellow Wave.json": [45271, 610]
    };

    function Wr(rr) {
      if (!Qr.o(Zr, rr)) return Promise.resolve().then((() => {
        var Sr = new Error("Cannot find module '" + rr + "'");
        throw Sr.code = "MODULE_NOT_FOUND", Sr
      }));
      var Sr = Zr[rr],
        Wr = Sr[0];
      return Qr.e(Sr[1]).then((() => Qr(Wr)))
    }
    Wr.keys = () => Object.keys(Zr), Wr.id = 37955, rr.exports = Wr
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);