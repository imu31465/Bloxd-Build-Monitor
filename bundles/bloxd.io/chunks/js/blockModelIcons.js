export const id = 4;
export const ids = [4];
export const modules = {
  37190: (ee, ie, He) => {
    He.d(ie, {
      e: () => we,
      i: () => De,
      k: () => ge,
      m: () => Be,
      p: () => Oe
    });
    var ye = He(272),
      be = He(97);
    const Me = new(He(37192).b)(new URL(He.p + He.u(3), He.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Ke = He(1851),
      Ue = He(2173);
    const Fe = 1e4,
      Je = 3e4;
    let oe = null,
      Re = null,
      ke = null,
      qe = !1,
      fe = 0;
    const Te = new Map;
    let pe = null;
    const Xe = new Map,
      ze = new Map;

    function Be(ee) {
      const ie = new Promise(((ie, He) => {
        const ye = new Image;
        ye.crossOrigin = "anonymous", ye.fetchPriority = "high", ye.onload = () => {
          ie(ye)
        }, ye.onerror = () => {
          He(new Error(`A block icon's texture did not load: ${ee.slice(0,100)}`))
        }, ye.src = ee
      }));
      return (0, Ue.f)(ie)
    }

    function Ee(ee) {
      var ie, He;
      qe || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${ee}`), qe = !0, null === (ie = oe) || void 0 === ie || ie.terminate(), oe = null, Re = null, Xe.clear(), ze.clear();
      for (const ye of Te.values()) ye(null);
      Te.clear(), null === (He = pe) || void 0 === He || He()
    }

    function ge() {
      return null !== Re
    }

    function Oe() {
      return ke ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === ye.c.ios_icon_worker_v1 && (0, be.isWebKit)()) return;
        try {
          oe = await async function() {
            return await Me.ready(), Me.start()
          }()
        } catch (Ue) {
          return void Ee(`did not start (${String(Ue)})`)
        }
        let ee = () => {};
        const ie = new Promise((ie => {
          ee = ie
        }));
        oe.onmessage = ie => {
          let {
            data: He
          } = ie;
          if ("started" === He.type) Re = oe, ee();
          else if ("failed" === He.type) Ee(`failed a draw (${He.message})`);
          else {
            var ye, be;
            null === (ye = Te.get(He.id)) || void 0 === ye || ye(He.url), Te.delete(He.id), null === (be = pe) || void 0 === be || be()
          }
        }, oe.onerror = ie => {
          ie.preventDefault(), Ee(`stopped (${ie.message||"its script did not load or run"})`), ee()
        };
        const He = `did not start in ${Je/1e3} s`;
        await (0, Ke.k)(ie, Je, He).catch((() => {
          Ee(He)
        }))
      }(), ke
    }

    function de() {
      if (null !== pe || 0 === Te.size) return;
      const ee = new Promise((ee => {
          pe = ee
        })),
        ie = `did not answer in ${Fe/1e3} s`;
      (0, Ke.k)(ee, Fe, ie).then((() => {
        pe = null, de()
      }), (() => {
        pe = null, Ee(ie)
      }))
    }

    function We(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      ee.postMessage(ie, He)
    }

    function te(ee, ie, He, ye) {
      let be = ie.get(He);
      return void 0 === be && (be = ye().then((async ie => {
        let {
          image: He,
          request: ye
        } = ie;
        try {
          const ie = await createImageBitmap(He);
          We(ee, ye(ie), [ie])
        } catch (be) {
          Ee(`could not take an image (${String(be)})`)
        }
      })), be.catch((() => {
        ie.get(He) === be && ie.delete(He)
      })), ie.set(He, be)), be
    }
    async function Ze(ee, ie) {
      Oe();
      const He = Re;
      if (null === He) return null;
      if (await ee(He), Re !== He) return null;
      const ye = ++fe;
      return new Promise((ee => {
        Te.set(ye, ee), We(He, ie(ye)), de()
      }))
    }

    function we(ee, ie, He) {
      return Ze((ie => Promise.all([ee.top, ee.left, ee.right].map((ee => function(ee, ie) {
        return te(ee, Xe, ie, (async () => ({
          image: await Be(ie),
          request: ee => ({
            type: "texture",
            url: ie,
            bitmap: ee
          })
        })))
      }(ie, ee))))), (ye => ({
        type: "draw",
        id: ye,
        ...ee,
        size: ie,
        outlineWidth: He
      })))
    }

    function De(ee, ie, He, ye) {
      return Ze((He => function(ee, ie, He) {
        return te(ee, ze, ie, (async () => {
          const {
            texture: ee,
            ...ye
          } = await He();
          return {
            image: await Be(ee),
            request: ee => ({
              type: "model",
              name: ie,
              bitmap: ee,
              geometry: ye
            })
          }
        }))
      }(He, ee, ie)), (ie => ({
        type: "drawModel",
        id: ie,
        name: ee,
        size: He,
        outlineWidth: ye
      })))
    }
  },
  37200: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      blockModelIconModels: () => ke,
      drawnBlockModelIconUrl: () => pe,
      getBlockModelIconUrl: () => Te,
      hasBlockModelIcon: () => Re
    });
    var ye = He(37190),
      be = He(37187);
    const Me = JSON.parse('{"67 Statue":["67"],"A Doe Through The Green":["_Deer Painting Bottom Left","_Deer Painting Bottom Right","_Deer Painting Top Left","_Deer Painting Top Right"],"Aspen Door":["Aspen Door","_Aspen Door Top"],"Auto Miner":["auto_miner_body","auto_miner_drill_back","auto_miner_drill_front","auto_miner_foot_back","auto_miner_foot_front"],"Bebek Bebek Bebek Statue":["bebek_bebek_bebek"],"Bin":["bin"],"Black Banner":["Black Banner","_Black Banner Flag"],"Black Bed":["Black Bed","_Black Bed Head"],"Black Carpet":["carpet_black_model"],"Black Strongbed":["Black Strongbed","_Black Strongbed Head"],"Black Torch":["torch_black"],"Black Wave":["wave_black"],"Blue Banner":["Blue Banner","_Blue Banner Flag"],"Blue Bed":["Blue Bed","_Blue Bed Head"],"Blue Carpet":["carpet_blue_model"],"Blue Strongbed":["Blue Strongbed","_Blue Strongbed Head"],"Blue Torch":["torch_blue"],"Blue Wave":["wave_blue"],"Bobino Musculino Statue":["bobino_musculino"],"Bobzilla Statue":["bobzilla"],"Boiling Pot":["boiling_pot"],"Bone Antlers":["bone_antlers_model"],"Brown Banner":["Brown Banner","_Brown Banner Flag"],"Brown Bed":["Brown Bed","_Brown Bed Head"],"Brown Carpet":["carpet_brown_model"],"Brown Strongbed":["Brown Strongbed","_Brown Strongbed Head"],"Brown Torch":["torch_brown"],"Brown Wave":["wave_brown"],"Brra Brra Pachim Statue":["brra_brra_pachim"],"Cannon":["cannon_barrel_back","cannon_barrel_front","cannon_bottom_back","cannon_bottom_front","cannon_top_back","cannon_top_front"],"Capitano Explovissimo Statue":["capitano_explovissimo"],"Cappuccino Ninjino Statue":["cappuccino_ninjino"],"Cedar Door":["Cedar Door","_Cedar Door Top"],"Cherry Door":["Cherry Door","_Cherry Door Top"],"Chili Pepper Plant":["chili_pepper_stage5_model"],"Chili Pepper Plant_stage1":["chili_pepper_stage1_model"],"Chili Pepper Plant_stage2":["chili_pepper_stage2_model"],"Chili Pepper Plant_stage3":["chili_pepper_stage3_model"],"Chili Pepper Plant_stage4":["chili_pepper_stage4_model"],"Chili Pepper Plant_stage5":["chili_pepper_stage5_model"],"Chimpanzano Bananano Statue":["chimpanzano_bananano"],"Chopping Board":["chopping_board"],"Coloured Wheel":["wheel"],"Coolant Pipe":["baf2_fluid_pipe_nz_pz"],"Crystal":["crystal"],"Cyan Banner":["Cyan Banner","_Cyan Banner Flag"],"Cyan Bed":["Cyan Bed","_Cyan Bed Head"],"Cyan Carpet":["carpet_cyan_model"],"Cyan Strongbed":["Cyan Strongbed","_Cyan Strongbed Head"],"Cyan Torch":["torch_cyan"],"Cyan Wave":["wave_cyan"],"Diamond Spikes":["Spikes_Diamond"],"Draugr Banner":["Draugr Banner","_Draugr Banner Flag"],"Dreaming Canine":["_Wolf Painting Bottom Left","_Wolf Painting Bottom Right","_Wolf Painting Top Left","_Wolf Painting Top Right"],"Duo Blocchino Statue":["2_block"],"Extractor Pipe":["extractor_pipe_straight_z"],"Filter Pipe":["filter_pipe_input_pz"],"Fluid Pipe":["baf2_fluid_pipe_nz_pz"],"Football":["football"],"Frying Pan":["frying_pan"],"Glowing Mushroom":["glowing_mushroom"],"Gold Antlers":["gold_antlers_model"],"Gold Spikes":["Spikes_Gold"],"Grant Wool":["_Sheep Painting Bottom Left","_Sheep Painting Bottom Right","_Sheep Painting Top Left","_Sheep Painting Top Right"],"Gray Banner":["Gray Banner","_Gray Banner Flag"],"Gray Bed":["Gray Bed","_Gray Bed Head"],"Gray Carpet":["carpet_gray_model"],"Gray Strongbed":["Gray Strongbed","_Gray Strongbed Head"],"Gray Torch":["torch_gray"],"Green Banner":["Green Banner","_Green Banner Flag"],"Green Bed":["Green Bed","_Green Bed Head"],"Green Carpet":["carpet_green_model"],"Green Strongbed":["Green Strongbed","_Green Strongbed Head"],"Green Torch":["torch_green"],"Green Wave":["wave_green"],"Grey Wave":["wave_grey"],"Hob Boiling":["hob_boiling"],"Hob Frying":["hob_frying"],"Hump Day":["_Camel Painting Bottom Left","_Camel Painting Bottom Right","_Camel Painting Top Left","_Camel Painting Top Right"],"Il Wizardini Del Porko Statue":["il_wizardini_del_porko"],"Iron Spikes":["Spikes_Iron"],"Job Application Statue":["job_application"],"John Beef Statue":["john_beef"],"Jump Pad":["jump_pad"],"Jungle Door":["Jungle Door","_Jungle Door Top"],"Kill Spikes":["Spikes_Kill"],"Kitchen Worktop":["kitchen_worktop"],"Landing Pad":["landing_pad"],"Lantern":["lantern"],"Light Blue Banner":["Light Blue Banner","_Light Blue Banner Flag"],"Light Blue Bed":["Light Blue Bed","_Light Blue Bed Head"],"Light Blue Carpet":["carpet_light_blue_model"],"Light Blue Strongbed":["Light Blue Strongbed","_Light Blue Strongbed Head"],"Light Blue Torch":["torch_light_blue"],"Light Blue Wave":["wave_light_blue"],"Light Gray Banner":["Light Gray Banner","_Light Gray Banner Flag"],"Light Gray Bed":["Light Gray Bed","_Light Gray Bed Head"],"Light Gray Carpet":["carpet_light_gray_model"],"Light Gray Strongbed":["Light Gray Strongbed","_Light Gray Strongbed Head"],"Light Gray Torch":["torch_light_gray"],"Light Grey Wave":["wave_light_grey"],"Lily Pad":["lily_pad_model"],"Lime Banner":["Lime Banner","_Lime Banner Flag"],"Lime Bed":["Lime Bed","_Lime Bed Head"],"Lime Carpet":["carpet_lime_model"],"Lime Strongbed":["Lime Strongbed","_Lime Strongbed Head"],"Lime Torch":["torch_lime"],"Lime Wave":["wave_lime"],"Lucchia Blocchi Statue":["lucchia_blocchi"],"Lunite Auto Miner":["auto_miner_lunite_body","auto_miner_lunite_drill_back","auto_miner_lunite_drill_front","auto_miner_lunite_foot_back","auto_miner_lunite_foot_front"],"Magenta Banner":["Magenta Banner","_Magenta Banner Flag"],"Magenta Bed":["Magenta Bed","_Magenta Bed Head"],"Magenta Carpet":["carpet_magenta_model"],"Magenta Strongbed":["Magenta Strongbed","_Magenta Strongbed Head"],"Magenta Torch":["torch_magenta"],"Magenta Wave":["wave_magenta"],"Mango Door":["Mango Door","_Mango Door Top"],"Maple Door":["Maple Door","_Maple Door Top"],"Merger Pipe":["merger_pipe_output_pz"],"Monsieur Bedwar Statue":["monsieur_bedwar"],"Noticeboard":["noticeboard_wall_single"],"Noticeboard Standing":["noticeboard_standing"],"Noticeboard Standing Bottom":["noticeboard_standing_bottom"],"Noticeboard Standing Bottom Left":["noticeboard_standing_bottom_left"],"Noticeboard Standing Bottom Right":["noticeboard_standing_bottom_right"],"Noticeboard Standing Left":["noticeboard_standing_left"],"Noticeboard Standing Leg":["noticeboard_standing_leg"],"Noticeboard Standing Right":["noticeboard_standing_right"],"Noticeboard Standing Top":["noticeboard_standing_top"],"Noticeboard Standing Top Left":["noticeboard_standing_top_left"],"Noticeboard Standing Top Right":["noticeboard_standing_top_right"],"Noticeboard Wall":["noticeboard_wall"],"Noticeboard Wall Bottom":["noticeboard_wall_bottom"],"Noticeboard Wall Bottom Left":["noticeboard_wall_bottom_left"],"Noticeboard Wall Bottom Right":["noticeboard_wall_bottom_right"],"Noticeboard Wall Left":["noticeboard_wall_left"],"Noticeboard Wall Right":["noticeboard_wall_right"],"Noticeboard Wall Top":["noticeboard_wall_top"],"Noticeboard Wall Top Left":["noticeboard_wall_top_left"],"Noticeboard Wall Top Right":["noticeboard_wall_top_right"],"Orange Banner":["Orange Banner","_Orange Banner Flag"],"Orange Bed":["Orange Bed","_Orange Bed Head"],"Orange Carpet":["carpet_orange_model"],"Orange Strongbed":["Orange Strongbed","_Orange Strongbed Head"],"Orange Torch":["torch_orange"],"Orange Wave":["wave_orange"],"Palm Door":["Palm Door","_Palm Door Top"],"Pear Door":["Pear Door","_Pear Door Top"],"Pine Door":["Pine Door","_Pine Door Top"],"Pink Banner":["Pink Banner","_Pink Banner Flag"],"Pink Bed":["Pink Bed","_Pink Bed Head"],"Pink Carpet":["carpet_pink_model"],"Pink Strongbed":["Pink Strongbed","_Pink Strongbed Head"],"Pink Torch":["torch_pink"],"Pink Wave":["wave_pink"],"Pipe":["pipe_straight_z"],"Plum Door":["Plum Door","_Plum Door Top"],"Purple Banner":["Purple Banner","_Purple Banner Flag"],"Purple Bed":["Purple Bed","_Purple Bed Head"],"Purple Carpet":["carpet_purple_model"],"Purple Strongbed":["Purple Strongbed","_Purple Strongbed Head"],"Purple Torch":["torch_purple"],"Purple Wave":["wave_purple"],"Rainbow Banner":["Rainbow Banner","_Rainbow Banner Flag"],"Red Banner":["Red Banner","_Red Banner Flag"],"Red Bed":["Red Bed","_Red Bed Head"],"Red Carpet":["carpet_red_model"],"Red Strongbed":["Red Strongbed","_Red Strongbed Head"],"Red Torch":["torch_red"],"Red Wave":["wave_red"],"Rocket Ship":["rocket_northeast_1","rocket_northwest_1","rocket_southeast_1","rocket_southwest_1"],"Rocket Ship S2":["rocket_northeast_1","rocket_northeast_2","rocket_northwest_1","rocket_northwest_2","rocket_southeast_1","rocket_southeast_2","rocket_southwest_1","rocket_southwest_2"],"Rocket Ship S3":["rocket_northeast_1","rocket_northeast_2","rocket_northeast_3","rocket_northwest_1","rocket_northwest_2","rocket_northwest_3","rocket_southeast_1","rocket_southeast_2","rocket_southeast_3","rocket_southwest_1","rocket_southwest_2","rocket_southwest_3"],"Rocket Ship S4":["rocket_northeast_1","rocket_northeast_2","rocket_northeast_3","rocket_northeast_4","rocket_northwest_1","rocket_northwest_2","rocket_northwest_3","rocket_northwest_4","rocket_southeast_1","rocket_southeast_2","rocket_southeast_3","rocket_southeast_4","rocket_southwest_1","rocket_southwest_2","rocket_southwest_3","rocket_southwest_4"],"Rocket Ship S5":["rocket_northeast_1","rocket_northeast_2","rocket_northeast_3","rocket_northeast_4","rocket_northeast_5","rocket_northwest_1","rocket_northwest_2","rocket_northwest_3","rocket_northwest_4","rocket_northwest_5","rocket_southeast_1","rocket_southeast_2","rocket_southeast_3","rocket_southeast_4","rocket_southeast_5","rocket_southwest_1","rocket_southwest_2","rocket_southwest_3","rocket_southwest_4","rocket_southwest_5"],"Skull Banner":["Skull Banner","_Skull Banner Flag"],"Slicing Board":["slicing_board"],"Slime Trail":["slime_trail"],"Small Black Pod":["Small Black Pod","_Small Black Pod Mid","_Small Black Pod Top"],"Small Blue Pod":["Small Blue Pod","_Small Blue Pod Mid","_Small Blue Pod Top"],"Small Brown Pod":["Small Brown Pod","_Small Brown Pod Mid","_Small Brown Pod Top"],"Small Cyan Pod":["Small Cyan Pod","_Small Cyan Pod Mid","_Small Cyan Pod Top"],"Small Gray Pod":["Small Gray Pod","_Small Gray Pod Mid","_Small Gray Pod Top"],"Small Green Pod":["Small Green Pod","_Small Green Pod Mid","_Small Green Pod Top"],"Small Light Blue Pod":["Small Light Blue Pod","_Small Light Blue Pod Mid","_Small Light Blue Pod Top"],"Small Light Gray Pod":["Small Light Gray Pod","_Small Light Gray Pod Mid","_Small Light Gray Pod Top"],"Small Lime Pod":["Small Lime Pod","_Small Lime Pod Mid","_Small Lime Pod Top"],"Small Magenta Pod":["Small Magenta Pod","_Small Magenta Pod Mid","_Small Magenta Pod Top"],"Small Orange Pod":["Small Orange Pod","_Small Orange Pod Mid","_Small Orange Pod Top"],"Small Pink Pod":["Small Pink Pod","_Small Pink Pod Mid","_Small Pink Pod Top"],"Small Purple Pod":["Small Purple Pod","_Small Purple Pod Mid","_Small Purple Pod Top"],"Small Red Pod":["Small Red Pod","_Small Red Pod Mid","_Small Red Pod Top"],"Small White Pod":["Small White Pod","_Small White Pod Mid","_Small White Pod Top"],"Small Yellow Pod":["Small Yellow Pod","_Small Yellow Pod Mid","_Small Yellow Pod Top"],"Spectral Door":["Spectral Door","_Spectral Door Top"],"Splitter Pipe":["splitter_pipe"],"Stampede":["_Cow Painting Bottom Left","_Cow Painting Bottom Right","_Cow Painting Top Left","_Cow Painting Top Right"],"Standing Noticeboard":["noticeboard_standing_single"],"Stone Spikes":["Spikes_Stone"],"Strong Jump Pad":["jump_pad_strong"],"Sunbathed Gallope":["_Horse Painting Bottom Left","_Horse Painting Bottom Right","_Horse Painting Top Left","_Horse Painting Top Right"],"Super Jump Pad":["jump_pad_super"],"Torch":["torch"],"Twirlina Cappucina Statue":["twirlina_cappucina"],"UFO":["ufo"],"Unforgotten Pig":["_Pig Painting Bottom Left","_Pig Painting Bottom Right","_Pig Painting Top Left","_Pig Painting Top Right"],"Vending Machine":["vending_machine_bottom","vending_machine_top"],"Weak Jump Pad":["jump_pad_weak"],"Whiskers":["_Wildcat Painting Bottom Left","_Wildcat Painting Bottom Right","_Wildcat Painting Top Left","_Wildcat Painting Top Right"],"White Banner":["White Banner","_White Banner Flag"],"White Bed":["White Bed","_White Bed Head"],"White Carpet":["carpet_white_model"],"White Strongbed":["White Strongbed","_White Strongbed Head"],"White Torch":["torch_white"],"White Wave":["wave_white"],"Wire":["wire_straight_z"],"Wood Spikes":["Spikes_Wood"],"Yellow Banner":["Yellow Banner","_Yellow Banner Flag"],"Yellow Bed":["Yellow Bed","_Yellow Bed Head"],"Yellow Carpet":["carpet_yellow_model"],"Yellow Strongbed":["Yellow Strongbed","_Yellow Strongbed Head"],"Yellow Torch":["torch_yellow"],"Yellow Wave":["wave_yellow"]}'),
      Ke = He(37203),
      Ue = new Map(Ke.keys().filter((ee => ee.startsWith("./"))).map((ee => [ee.slice(2, -5), ee]))),
      Fe = new Map,
      Je = new Map,
      oe = new Map;

    function Re(ee) {
      return Ue.has(ee)
    }

    function ke(ee) {
      var ie;
      return null !== (ie = Me[ee]) && void 0 !== ie ? ie : [ee]
    }

    function qe(ee) {
      return Ke(Ue.get(ee))
    }
    async function fe(ee, ie, He) {
      const {
        data: ye,
        texture: Me
      } = await
      function(ee) {
        let ie = Fe.get(ee);
        return ie || (ie = qe(ee).then((async ee => {
          const ie = new Image;
          ie.src = ee.texture, await ie.decode();
          const He = document.createElement("canvas");
          He.width = ie.width, He.height = ie.height;
          const ye = He.getContext("2d");
          return ye.drawImage(ie, 0, 0), {
            data: ee,
            texture: {
              width: ie.width,
              height: ie.height,
              pixels: ye.getImageData(0, 0, ie.width, ie.height).data
            }
          }
        })), ie.catch((() => {
          Fe.delete(ee)
        })), Fe.set(ee, ie)), ie
      }(ee), Ke = document.createElement("canvas");
      return Ke.width = ie, Ke.height = ie, Ke.getContext("2d").putImageData(new ImageData((0, be.m)(ye, Me, ie, He), ie, ie), 0, 0), Ke.toDataURL()
    }

    function Te(ee, ie, He) {
      const be = `${ie}|${He}|${ee}`;
      let Me = Je.get(be);
      return Me || (Me = (0, ye.i)(ee, (() => qe(ee)), ie, He).then((ye => null !== ye && void 0 !== ye ? ye : fe(ee, ie, He))), Me.then((He => {
        const ye = oe.get(ee);
        He && (void 0 === ye || ye.size < ie) && oe.set(ee, {
          size: ie,
          url: He
        })
      }), (() => {
        Je.delete(be)
      })), Je.set(be, Me)), Me
    }

    function pe(ee) {
      var ie, He;
      return null !== (ie = null === (He = oe.get(ee)) || void 0 === He ? void 0 : He.url) && void 0 !== ie ? ie : null
    }
  },
  37187: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      d: () => Fe,
      h: () => Ke,
      j: () => ke,
      m: () => Je
    });
    const ye = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      be = .6,
      Me = {
        width: 2 * ye.across,
        height: 2 * ye.down + ye.up
      };

    function Ke(ee, ie) {
      const He = ie > 0 ? ie + 1 : 0,
        Ke = ee * be - ie / ye.across;
      return Math.max(0, Math.min(Ke, (ee - 2 * He) / Me.height))
    }
    const Ue = [15, 15, 15],
      Fe = {
        top: 1,
        left: .85,
        right: .7
      };

    function Je(ee, ie, He, ye) {
      const {
        vertices: be,
        uvs: Ue,
        indices: Fe,
        shades: Je
      } = ee, oe = function(ee, ie) {
        const He = Ke(ee, ie),
          ye = Me.width * He,
          be = Me.height * He;
        return {
          left: (ee - ye) / 2,
          top: (ee - be) / 2,
          width: ye,
          height: be
        }
      }(He, ye), Re = new Float32Array(be.length);
      for (let Me = 0; Me < be.length; Me += 3) Re[Me] = oe.left + be[Me] * oe.width, Re[Me + 1] = oe.top + be[Me + 1] * oe.height, Re[Me + 2] = be[Me + 2];
      const qe = new Float32Array(He * He).fill(-1 / 0),
        fe = new Uint8ClampedArray(He * He * 4),
        Te = 255 * ee.alphaCutoff;
      for (let Me = 0; Me < Fe.length; Me += 3) {
        const [ee, ye, be] = [Fe[Me], Fe[Me + 1], Fe[Me + 2]], [Ke, oe, ke] = [3 * ee, 3 * ye, 3 * be], [pe, Xe, ze, Be, Ee, ge] = [Re[Ke], Re[Ke + 1], Re[oe], Re[oe + 1], Re[ke], Re[ke + 1]], Oe = (ze - pe) * (ge - Xe) - (Ee - pe) * (Be - Xe);
        if (Math.abs(Oe) < 1e-9) continue;
        const de = Je[Me / 3],
          [We, te, Ze, we, De, Pe] = [Ue[2 * ee], Ue[2 * ee + 1], Ue[2 * ye], Ue[2 * ye + 1], Ue[2 * be], Ue[2 * be + 1]],
          Ae = Math.max(0, Math.floor(Math.min(pe, ze, Ee))),
          Ye = Math.min(He - 1, Math.ceil(Math.max(pe, ze, Ee))),
          Ve = Math.max(0, Math.floor(Math.min(Xe, Be, ge))),
          ae = Math.min(He - 1, Math.ceil(Math.max(Xe, Be, ge)));
        for (let Me = Ve; Me <= ae; Me++)
          for (let ee = Ae; ee <= Ye; ee++) {
            const [ye, be] = [ee + .5, Me + .5], Ue = ((ye - pe) * (ge - Xe) - (Ee - pe) * (be - Xe)) / Oe, Fe = ((ze - pe) * (be - Xe) - (ye - pe) * (Be - Xe)) / Oe, Je = 1 - Ue - Fe;
            if (Je < 0 || Ue < 0 || Fe < 0) continue;
            const Ae = Je * Re[Ke + 2] + Ue * Re[oe + 2] + Fe * Re[ke + 2],
              Ye = Me * He + ee;
            if (Ae <= qe[Ye]) continue;
            const Ve = Math.max(0, Math.min(ie.width - 1, Math.floor((Je * We + Ue * Ze + Fe * De) * ie.width))),
              ae = 4 * (Math.max(0, Math.min(ie.height - 1, Math.floor((Je * te + Ue * we + Fe * Pe) * ie.height))) * ie.width + Ve);
            ie.pixels[ae + 3] < Te || (qe[Ye] = Ae, fe[4 * Ye] = ie.pixels[ae] * de, fe[4 * Ye + 1] = ie.pixels[ae + 1] * de, fe[4 * Ye + 2] = ie.pixels[ae + 2] * de, fe[4 * Ye + 3] = 255)
          }
      }
      return ke(fe, He, ye), fe
    }
    let oe = NaN,
      Re = new Int32Array(0);

    function ke(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ie => 0 !== ee[4 * ie + 3];
      const be = new Uint8Array(ie * ie);
      for (let Ue = 0; Ue < ie * ie; Ue++) be[Ue] = ye(Ue) ? 1 : 0;
      const Me = (ee, He) => ee >= 0 && He >= 0 && ee < ie && He < ie && 0 === be[He * ie + ee],
        Ke = new Float32Array(ie * ie).fill(1 / 0),
        Fe = function(ee) {
          if (ee !== oe) {
            const ie = Math.ceil(ee + 1),
              He = [];
            for (let ye = -ie; ye <= ie; ye++)
              for (let be = -ie; be <= ie; be++) {
                const ie = be * be + ye * ye;
                ie > 0 && ie < (ee + 1) ** 2 && He.push(be, ye, ie)
              }
            oe = ee, Re = Int32Array.from(He)
          }
          return Re
        }(He);
      for (let Ue = 0; Ue < ie; Ue++)
        for (let ee = 0; ee < ie; ee++) {
          if (1 === be[Ue * ie + ee] && (Me(ee - 1, Ue) || Me(ee + 1, Ue) || Me(ee, Ue - 1) || Me(ee, Ue + 1)))
            for (let He = 0; He < Fe.length; He += 3) {
              const ye = ee + Fe[He],
                be = Ue + Fe[He + 1];
              if (ye >= 0 && be >= 0 && ye < ie && be < ie) {
                const ee = be * ie + ye;
                Ke[ee] = Math.min(Ke[ee], Fe[He + 2])
              }
            }
        }
      for (let Je = 0; Je < ie * ie; Je++) 1 !== be[Je] && Ke[Je] !== 1 / 0 && (ee.set(Ue, 4 * Je), ee[4 * Je + 3] = Math.round(255 * Math.min(1, He + 1 - Math.sqrt(Ke[Je]))))
    }
  },
  37192: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    const ye = {
      wait: function(ee) {
        return new Promise((ie => {
          setTimeout(ie, ee)
        }))
      },
      stallMs: 2e4
    };
    class be {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ye;
        this.url = ee, this.options = ie, this.timing = He, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = ee
      }
      ready() {
        if (null === this.fetched) {
          const ee = new AbortController;
          this.fetchAbort = ee, this.fetched = this.fetchWithRetries(ee.signal).then((ie => (this.fetchAbort === ee && (this.fetchAbort = null), ie)))
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
      async fetchWithRetries(ee) {
        for (let ie = 0;; ie++) {
          const He = new URL(this.url);
          if (ie > 0 && He.searchParams.set("cache-bust", `${Date.now()}-${ie}`), await this.fetchWhole(He, ee)) return this.scriptUrl = He, !0;
          if (ie >= 3 || ee.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** ie), ee.aborted) return !1
        }
      }
      async fetchWhole(ee, ie) {
        const He = new AbortController;
        let ye;
        const be = () => {
            clearTimeout(ye), ye = setTimeout((() => {
              He.abort()
            }), this.timing.stallMs)
          },
          Me = () => {
            He.abort()
          };
        ie.addEventListener("abort", Me, {
          once: !0
        }), be();
        try {
          var Ke;
          const ie = await fetch(ee, {
            signal: He.signal
          });
          if (!ie.ok) return !1;
          const ye = null === (Ke = ie.body) || void 0 === Ke ? void 0 : Ke.getReader();
          if (!ye) return !1;
          for (;;) {
            const {
              done: ee
            } = await ye.read();
            if (ee) return !0;
            be()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(ye), ie.removeEventListener("abort", Me)
        }
      }
    }
  },
  37203: (ee, ie, He) => {
    var ye = {
      "./67 Statue.json": [42863, 304],
      "./A Doe Through The Green.json": [42869, 305],
      "./Artisan Bench.json": [42873, 306],
      "./Aspen Door.json": [42878, 307],
      "./Aspen Item Pedestal.json": [42885, 308],
      "./Aspen Ladder.json": [42891, 309],
      "./Aspen Trapdoor.json": [42894, 310],
      "./Auto Miner.json": [42899, 311],
      "./Bebek Bebek Bebek Statue.json": [42903, 312],
      "./Bin.json": [42911, 313],
      "./Black Banner.json": [42917, 314],
      "./Black Bed.json": [42921, 315],
      "./Black Carpet.json": [42924, 316],
      "./Black Directional Arrow.json": [42932, 317],
      "./Black Strongbed.json": [42939, 318],
      "./Black Torch.json": [42943, 319],
      "./Black Wave.json": [42946, 320],
      "./Blue Banner.json": [42951, 321],
      "./Blue Bed.json": [42957, 322],
      "./Blue Carpet.json": [42966, 323],
      "./Blue Directional Arrow.json": [42973, 324],
      "./Blue Strongbed.json": [42976, 325],
      "./Blue Torch.json": [42984, 326],
      "./Blue Wave.json": [42990, 327],
      "./Board.json": [42999, 328],
      "./Bobino Musculino Statue.json": [43002, 329],
      "./Bobzilla Statue.json": [43007, 330],
      "./Boiling Pot.json": [43012, 331],
      "./Bone Antlers.json": [43020, 332],
      "./Brown Banner.json": [43029, 333],
      "./Brown Bed.json": [43036, 334],
      "./Brown Carpet.json": [43042, 335],
      "./Brown Directional Arrow.json": [43045, 336],
      "./Brown Strongbed.json": [43053, 337],
      "./Brown Torch.json": [43057, 338],
      "./Brown Wave.json": [43063, 339],
      "./Brra Brra Pachim Statue.json": [43070, 340],
      "./Cannon.json": [43072, 341],
      "./Capitano Explovissimo Statue.json": [43074, 342],
      "./Cappuccino Ninjino Statue.json": [43077, 343],
      "./Cedar Door.json": [43084, 344],
      "./Cedar Item Pedestal.json": [43090, 345],
      "./Cedar Ladder.json": [43093, 346],
      "./Cedar Trapdoor.json": [43096, 347],
      "./Cherry Door.json": [43098, 348],
      "./Cherry Item Pedestal.json": [43102, 349],
      "./Cherry Ladder.json": [43105, 350],
      "./Cherry Trapdoor.json": [43111, 351],
      "./Chili Pepper Plant.json": [43116, 352],
      "./Chili Pepper Plant_stage1.json": [43125, 353],
      "./Chili Pepper Plant_stage2.json": [43134, 354],
      "./Chili Pepper Plant_stage3.json": [43138, 355],
      "./Chili Pepper Plant_stage4.json": [43147, 356],
      "./Chili Pepper Plant_stage5.json": [43155, 357],
      "./Chimpanzano Bananano Statue.json": [43160, 358],
      "./Chopping Board.json": [43163, 359],
      "./Coloured Wheel.json": [43167, 360],
      "./Coolant Pipe.json": [43169, 361],
      "./Crystal.json": [43176, 362],
      "./Cyan Banner.json": [43179, 363],
      "./Cyan Bed.json": [43181, 364],
      "./Cyan Carpet.json": [43186, 365],
      "./Cyan Directional Arrow.json": [43190, 366],
      "./Cyan Strongbed.json": [43196, 367],
      "./Cyan Torch.json": [43198, 368],
      "./Cyan Wave.json": [43201, 369],
      "./Dangling Rope.json": [43207, 370],
      "./Dangling Vine.json": [43214, 371],
      "./Diamond Enchanting Table.json": [43219, 372],
      "./Diamond Spikes.json": [43222, 373],
      "./Diamond Trophy.json": [43225, 374],
      "./Draugr Banner.json": [43227, 375],
      "./Dreaming Canine.json": [43233, 376],
      "./Duo Blocchino Statue.json": [43242, 377],
      "./Extractor Pipe.json": [43247, 378],
      "./Fat Brown Mushroom.json": [43249, 379],
      "./Fat Red Mushroom.json": [43251, 380],
      "./Filter Pipe.json": [43254, 381],
      "./Fluid Pipe.json": [43257, 382],
      "./Football.json": [43259, 383],
      "./Frying Pan.json": [43266, 384],
      "./Furnace.json": [43270, 385],
      "./Glowing Mushroom.json": [43275, 386],
      "./Gold Antlers.json": [43283, 387],
      "./Gold Enchanting Table.json": [43290, 388],
      "./Gold Spikes.json": [43293, 389],
      "./Gold Trophy.json": [43295, 390],
      "./Grant Wool.json": [43301, 391],
      "./Gray Banner.json": [43303, 392],
      "./Gray Bed.json": [43308, 393],
      "./Gray Carpet.json": [43317, 394],
      "./Gray Strongbed.json": [43324, 395],
      "./Gray Torch.json": [43328, 396],
      "./Green Banner.json": [43333, 397],
      "./Green Bed.json": [43336, 398],
      "./Green Carpet.json": [43344, 399],
      "./Green Directional Arrow.json": [43352, 400],
      "./Green Strongbed.json": [43357, 401],
      "./Green Torch.json": [43366, 402],
      "./Green Wave.json": [43374, 403],
      "./Grey Directional Arrow.json": [43383, 404],
      "./Grey Wave.json": [43391, 405],
      "./Hob Boiling.json": [43399, 406],
      "./Hob Frying.json": [43406, 407],
      "./Hump Day.json": [43408, 408],
      "./Il Wizardini Del Porko Statue.json": [43411, 409],
      "./Iron Enchanting Table.json": [43417, 410],
      "./Iron Ladder.json": [43426, 411],
      "./Iron Spikes.json": [43434, 412],
      "./Iron Trophy.json": [43441, 413],
      "./Job Application Statue.json": [43443, 414],
      "./John Beef Statue.json": [43447, 415],
      "./Jump Pad.json": [43451, 416],
      "./Jungle Door.json": [43456, 417],
      "./Jungle Item Pedestal.json": [43458, 418],
      "./Jungle Ladder.json": [43460, 419],
      "./Jungle Trapdoor.json": [43465, 420],
      "./Kill Spikes.json": [43472, 421],
      "./Kitchen Worktop.json": [43480, 422],
      "./Landing Pad.json": [43488, 423],
      "./Lantern.json": [43495, 424],
      "./Leaf Bed.json": [43499, 425],
      "./Light Blue Banner.json": [43506, 426],
      "./Light Blue Bed.json": [43513, 427],
      "./Light Blue Carpet.json": [43516, 428],
      "./Light Blue Directional Arrow.json": [43518, 429],
      "./Light Blue Strongbed.json": [43522, 430],
      "./Light Blue Torch.json": [43530, 431],
      "./Light Blue Wave.json": [43532, 432],
      "./Light Gray Banner.json": [43534, 433],
      "./Light Gray Bed.json": [43539, 434],
      "./Light Gray Carpet.json": [43541, 435],
      "./Light Gray Strongbed.json": [43547, 436],
      "./Light Gray Torch.json": [43556, 437],
      "./Light Grey Directional Arrow.json": [43563, 438],
      "./Light Grey Wave.json": [43569, 439],
      "./Lily Pad.json": [43574, 440],
      "./Lime Banner.json": [43577, 441],
      "./Lime Bed.json": [43585, 442],
      "./Lime Carpet.json": [43589, 443],
      "./Lime Directional Arrow.json": [43594, 444],
      "./Lime Strongbed.json": [43598, 445],
      "./Lime Torch.json": [43604, 446],
      "./Lime Wave.json": [43609, 447],
      "./Lucchia Blocchi Statue.json": [43612, 448],
      "./Lunite Auto Miner.json": [43614, 449],
      "./Magenta Banner.json": [43621, 450],
      "./Magenta Bed.json": [43628, 451],
      "./Magenta Carpet.json": [43634, 452],
      "./Magenta Directional Arrow.json": [43641, 453],
      "./Magenta Strongbed.json": [43648, 454],
      "./Magenta Torch.json": [43651, 455],
      "./Magenta Wave.json": [43654, 456],
      "./Mango Door.json": [43663, 457],
      "./Mango Item Pedestal.json": [43669, 458],
      "./Mango Ladder.json": [43678, 459],
      "./Mango Trapdoor.json": [43687, 460],
      "./Maple Door.json": [43694, 461],
      "./Maple Ladder.json": [43703, 462],
      "./Maple Trapdoor.json": [43706, 463],
      "./Merger Pipe.json": [43714, 464],
      "./Monsieur Bedwar Statue.json": [43717, 465],
      "./Moonstone Trophy.json": [43721, 466],
      "./Noticeboard Standing Bottom Left.json": [43730, 467],
      "./Noticeboard Standing Bottom Right.json": [43735, 468],
      "./Noticeboard Standing Bottom.json": [43740, 469],
      "./Noticeboard Standing Left.json": [43743, 470],
      "./Noticeboard Standing Leg.json": [43749, 471],
      "./Noticeboard Standing Right.json": [43754, 472],
      "./Noticeboard Standing Top Left.json": [43758, 473],
      "./Noticeboard Standing Top Right.json": [43763, 474],
      "./Noticeboard Standing Top.json": [43765, 475],
      "./Noticeboard Standing.json": [43768, 476],
      "./Noticeboard Wall Bottom Left.json": [43777, 477],
      "./Noticeboard Wall Bottom Right.json": [43784, 478],
      "./Noticeboard Wall Bottom.json": [43789, 479],
      "./Noticeboard Wall Left.json": [43794, 480],
      "./Noticeboard Wall Right.json": [43796, 481],
      "./Noticeboard Wall Top Left.json": [43802, 482],
      "./Noticeboard Wall Top Right.json": [43804, 483],
      "./Noticeboard Wall Top.json": [43807, 484],
      "./Noticeboard Wall.json": [43812, 485],
      "./Noticeboard.json": [43816, 486],
      "./Nova Trophy.json": [43821, 487],
      "./Orange Banner.json": [43828, 488],
      "./Orange Bed.json": [43837, 489],
      "./Orange Carpet.json": [43842, 490],
      "./Orange Directional Arrow.json": [43845, 491],
      "./Orange Strongbed.json": [43847, 492],
      "./Orange Torch.json": [43852, 493],
      "./Orange Wave.json": [43861, 494],
      "./Palm Door.json": [43863, 495],
      "./Palm Item Pedestal.json": [43871, 496],
      "./Palm Ladder.json": [43874, 497],
      "./Palm Trapdoor.json": [43881, 498],
      "./Pear Door.json": [43885, 499],
      "./Pear Item Pedestal.json": [43890, 500],
      "./Pear Ladder.json": [43895, 501],
      "./Pear Trapdoor.json": [43904, 502],
      "./Pine Door.json": [43912, 503],
      "./Pine Item Pedestal.json": [43917, 504],
      "./Pine Ladder.json": [43926, 505],
      "./Pine Trapdoor.json": [43929, 506],
      "./Pink Banner.json": [43935, 507],
      "./Pink Bed.json": [43942, 508],
      "./Pink Carpet.json": [43950, 509],
      "./Pink Directional Arrow.json": [43953, 510],
      "./Pink Strongbed.json": [43961, 511],
      "./Pink Torch.json": [43967, 512],
      "./Pink Wave.json": [43970, 513],
      "./Pipe.json": [43979, 514],
      "./Plum Door.json": [43982, 515],
      "./Plum Item Pedestal.json": [43985, 516],
      "./Plum Ladder.json": [43987, 517],
      "./Plum Trapdoor.json": [43995, 518],
      "./Potion Table.json": [43998, 519],
      "./Purple Banner.json": [44006, 520],
      "./Purple Bed.json": [44013, 521],
      "./Purple Carpet.json": [44018, 522],
      "./Purple Directional Arrow.json": [44023, 523],
      "./Purple Strongbed.json": [44029, 524],
      "./Purple Torch.json": [44036, 525],
      "./Purple Wave.json": [44045, 526],
      "./Rainbow Banner.json": [44049, 527],
      "./Red Banner.json": [44052, 528],
      "./Red Bed.json": [44058, 529],
      "./Red Carpet.json": [44066, 530],
      "./Red Directional Arrow.json": [44072, 531],
      "./Red Strongbed.json": [44074, 532],
      "./Red Torch.json": [44079, 533],
      "./Red Wave.json": [44088, 534],
      "./Rocket Ship S2.json": [44095, 535],
      "./Rocket Ship S3.json": [44100, 536],
      "./Rocket Ship S4.json": [44103, 537],
      "./Rocket Ship S5.json": [44110, 538],
      "./Rocket Ship.json": [44113, 539],
      "./Salvaging Table.json": [44118, 540],
      "./Showcase.json": [44120, 541],
      "./Skull Banner.json": [44129, 542],
      "./Slicing Board.json": [44135, 543],
      "./Slime Trail.json": [44138, 544],
      "./Small Black Pod.json": [44144, 545],
      "./Small Blue Pod.json": [44153, 546],
      "./Small Brown Pod.json": [44157, 547],
      "./Small Cyan Pod.json": [44163, 548],
      "./Small Gray Pod.json": [44169, 549],
      "./Small Green Pod.json": [44171, 550],
      "./Small Light Blue Pod.json": [44180, 551],
      "./Small Light Gray Pod.json": [44186, 552],
      "./Small Lime Pod.json": [44194, 553],
      "./Small Magenta Pod.json": [44200, 554],
      "./Small Orange Pod.json": [44208, 555],
      "./Small Pink Pod.json": [44216, 556],
      "./Small Purple Pod.json": [44225, 557],
      "./Small Red Pod.json": [44233, 558],
      "./Small White Pod.json": [44242, 559],
      "./Small Yellow Pod.json": [44250, 560],
      "./Spectral Door.json": [44254, 561],
      "./Spectral Item Pedestal.json": [44258, 562],
      "./Spectral Ladder.json": [44261, 563],
      "./Spectral Trapdoor.json": [44269, 564],
      "./Splitter Pipe.json": [44273, 565],
      "./Stampede.json": [44277, 566],
      "./Standing Noticeboard.json": [44283, 567],
      "./Stone Enchanting Table.json": [44287, 568],
      "./Stone Spikes.json": [44292, 569],
      "./Stone Trophy.json": [44300, 570],
      "./Strong Jump Pad.json": [44307, 571],
      "./Sunbathed Gallope.json": [44311, 572],
      "./Super Jump Pad.json": [44319, 573],
      "./Timed Spike Bomb Block.json": [44323, 574],
      "./Torch.json": [44330, 575],
      "./Twirlina Cappucina Statue.json": [44332, 576],
      "./UFO.json": [44334, 577],
      "./Unforgotten Pig.json": [44343, 578],
      "./Vending Machine.json": [44345, 579],
      "./Vines.json": [44347, 580],
      "./Weak Jump Pad.json": [44350, 581],
      "./Whiskers.json": [44358, 582],
      "./White Banner.json": [44362, 583],
      "./White Bed.json": [44365, 584],
      "./White Carpet.json": [44372, 585],
      "./White Directional Arrow.json": [44375, 586],
      "./White Strongbed.json": [44377, 587],
      "./White Torch.json": [44384, 588],
      "./White Wave.json": [44389, 589],
      "./Wire.json": [44395, 590],
      "./Wood Enchanting Table.json": [44397, 591],
      "./Wood Spikes.json": [44405, 592],
      "./Wood Trophy.json": [44410, 593],
      "./Workbench.json": [44412, 594],
      "./Yellow Banner.json": [44416, 595],
      "./Yellow Bed.json": [44422, 596],
      "./Yellow Carpet.json": [44431, 597],
      "./Yellow Directional Arrow.json": [44440, 598],
      "./Yellow Strongbed.json": [44443, 599],
      "./Yellow Torch.json": [44448, 600],
      "./Yellow Wave.json": [44454, 601]
    };

    function be(ee) {
      if (!He.o(ye, ee)) return Promise.resolve().then((() => {
        var ie = new Error("Cannot find module '" + ee + "'");
        throw ie.code = "MODULE_NOT_FOUND", ie
      }));
      var ie = ye[ee],
        be = ie[0];
      return He.e(ie[1]).then((() => He(be)))
    }
    be.keys = () => Object.keys(ye), be.id = 37203, ee.exports = be
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);