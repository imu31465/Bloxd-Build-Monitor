export const id = 4;
export const ids = [4];
export const modules = {
  38020: (dd, Od, md) => {
    md.d(Od, {
      b: () => Bd,
      c: () => Sd,
      f: () => gd,
      j: () => pd,
      l: () => wd
    });
    var Wd = md(320),
      Fd = md(107);
    const Rd = new(md(38022).c)(new URL(md.p + md.u(3), md.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Xd = md(1786),
      Kd = md(2324);
    const hd = 1e4,
      vd = 3e4;
    let Qd = null,
      td = null,
      od = null,
      Nd = !1,
      qd = 0;
    const Hd = new Map;
    let yd = null;
    const bd = new Map,
      Td = new Map;

    function pd(dd) {
      const Od = new Promise(((Od, md) => {
        const Wd = new Image;
        Wd.crossOrigin = "anonymous", Wd.fetchPriority = "high", Wd.onload = () => {
          Od(Wd)
        }, Wd.onerror = () => {
          md(new Error(`A block icon's texture did not load: ${dd.slice(0,100)}`))
        }, Wd.src = dd
      }));
      return (0, Kd.g)(Od)
    }

    function Yd(dd) {
      var Od, md;
      Nd || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${dd}`), Nd = !0, null === (Od = Qd) || void 0 === Od || Od.terminate(), Qd = null, td = null, bd.clear(), Td.clear();
      for (const Wd of Hd.values()) Wd(null);
      Hd.clear(), null === (md = yd) || void 0 === md || md()
    }

    function gd() {
      return null !== td
    }

    function wd() {
      return od ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Wd.d.ios_icon_worker_v1 && (0, Fd.isWebKit)()) return;
        try {
          Qd = await async function() {
            return await Rd.ready(), Rd.start()
          }()
        } catch (Kd) {
          return void Yd(`did not start (${String(Kd)})`)
        }
        let dd = () => {};
        const Od = new Promise((Od => {
          dd = Od
        }));
        Qd.onmessage = Od => {
          let {
            data: md
          } = Od;
          if ("started" === md.type) td = Qd, dd();
          else if ("failed" === md.type) Yd(`failed a draw (${md.message})`);
          else {
            var Wd, Fd;
            null === (Wd = Hd.get(md.id)) || void 0 === Wd || Wd(md.url), Hd.delete(md.id), null === (Fd = yd) || void 0 === Fd || Fd()
          }
        }, Qd.onerror = Od => {
          Od.preventDefault(), Yd(`stopped (${Od.message||"its script did not load or run"})`), dd()
        };
        const md = `did not start in ${vd/1e3} s`;
        await (0, Xd.k)(Od, vd, md).catch((() => {
          Yd(md)
        }))
      }(), od
    }

    function Ed() {
      if (null !== yd || 0 === Hd.size) return;
      const dd = new Promise((dd => {
          yd = dd
        })),
        Od = `did not answer in ${hd/1e3} s`;
      (0, Xd.k)(dd, hd, Od).then((() => {
        yd = null, Ed()
      }), (() => {
        yd = null, Yd(Od)
      }))
    }

    function Jd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      dd.postMessage(Od, md)
    }

    function Ud(dd, Od, md, Wd) {
      let Fd = Od.get(md);
      return void 0 === Fd && (Fd = Wd().then((async Od => {
        let {
          image: md,
          request: Wd
        } = Od;
        try {
          const Od = await createImageBitmap(md);
          Jd(dd, Wd(Od), [Od])
        } catch (Fd) {
          Yd(`could not take an image (${String(Fd)})`)
        }
      })), Fd.catch((() => {
        Od.get(md) === Fd && Od.delete(md)
      })), Od.set(md, Fd)), Fd
    }
    async function xd(dd, Od) {
      wd();
      const md = td;
      if (null === md) return null;
      if (await dd(md), td !== md) return null;
      const Wd = ++qd;
      return new Promise((dd => {
        Hd.set(Wd, dd), Jd(md, Od(Wd)), Ed()
      }))
    }

    function Bd(dd, Od, md) {
      return xd((Od => Promise.all([dd.top, dd.left, dd.right].map((dd => function(dd, Od) {
        return Ud(dd, bd, Od, (async () => ({
          image: await pd(Od),
          request: dd => ({
            type: "texture",
            url: Od,
            bitmap: dd
          })
        })))
      }(Od, dd))))), (Wd => ({
        type: "draw",
        id: Wd,
        ...dd,
        size: Od,
        outlineWidth: md
      })))
    }

    function Sd(dd, Od, md, Wd) {
      return xd((md => function(dd, Od, md) {
        return Ud(dd, Td, Od, (async () => {
          const {
            texture: dd,
            ...Wd
          } = await md();
          return {
            image: await pd(dd),
            request: dd => ({
              type: "model",
              name: Od,
              bitmap: dd,
              geometry: Wd
            })
          }
        }))
      }(md, dd, Od)), (Od => ({
        type: "drawModel",
        id: Od,
        name: dd,
        size: md,
        outlineWidth: Wd
      })))
    }
  },
  38024: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      blockModelIconModels: () => od,
      drawnBlockModelIconUrl: () => yd,
      getBlockModelIconUrl: () => Hd,
      hasBlockModelIcon: () => td
    });
    var Wd = md(38020),
      Fd = md(38013);
    const Rd = JSON.parse('{"67 Statue":["67"],"A Doe Through The Green":["_Deer Painting Bottom Left","_Deer Painting Bottom Right","_Deer Painting Top Left","_Deer Painting Top Right"],"Aspen Door":["Aspen Door","_Aspen Door Top"],"Auto Miner":["auto_miner_body","auto_miner_drill_back","auto_miner_drill_front","auto_miner_foot_back","auto_miner_foot_front"],"Bebek Bebek Bebek Statue":["bebek_bebek_bebek"],"Bin":["bin"],"Black Banner":["Black Banner","_Black Banner Flag"],"Black Bed":["Black Bed","_Black Bed Head"],"Black Carpet":["carpet_black_model"],"Black Strongbed":["Black Strongbed","_Black Strongbed Head"],"Black Torch":["torch_black"],"Black Wave":["wave_black"],"Blue Banner":["Blue Banner","_Blue Banner Flag"],"Blue Bed":["Blue Bed","_Blue Bed Head"],"Blue Carpet":["carpet_blue_model"],"Blue Strongbed":["Blue Strongbed","_Blue Strongbed Head"],"Blue Torch":["torch_blue"],"Blue Wave":["wave_blue"],"Bobino Musculino Statue":["bobino_musculino"],"Bobzilla Statue":["bobzilla"],"Boiling Pot":["boiling_pot"],"Bone Antlers":["bone_antlers_model"],"Brown Banner":["Brown Banner","_Brown Banner Flag"],"Brown Bed":["Brown Bed","_Brown Bed Head"],"Brown Carpet":["carpet_brown_model"],"Brown Strongbed":["Brown Strongbed","_Brown Strongbed Head"],"Brown Torch":["torch_brown"],"Brown Wave":["wave_brown"],"Brra Brra Pachim Statue":["brra_brra_pachim"],"Cannon":["cannon_barrel_back","cannon_barrel_front","cannon_bottom_back","cannon_bottom_front","cannon_top_back","cannon_top_front"],"Capitano Explovissimo Statue":["capitano_explovissimo"],"Cappuccino Ninjino Statue":["cappuccino_ninjino"],"Cedar Door":["Cedar Door","_Cedar Door Top"],"Cherry Door":["Cherry Door","_Cherry Door Top"],"Chili Pepper Plant":["chili_pepper_stage5_model"],"Chili Pepper Plant_stage1":["chili_pepper_stage1_model"],"Chili Pepper Plant_stage2":["chili_pepper_stage2_model"],"Chili Pepper Plant_stage3":["chili_pepper_stage3_model"],"Chili Pepper Plant_stage4":["chili_pepper_stage4_model"],"Chili Pepper Plant_stage5":["chili_pepper_stage5_model"],"Chimpanzano Bananano Statue":["chimpanzano_bananano"],"Chopping Board":["chopping_board"],"Coloured Wheel":["wheel"],"Coolant Pipe":["baf2_fluid_pipe_nz_pz"],"Crystal":["crystal"],"Cyan Banner":["Cyan Banner","_Cyan Banner Flag"],"Cyan Bed":["Cyan Bed","_Cyan Bed Head"],"Cyan Carpet":["carpet_cyan_model"],"Cyan Strongbed":["Cyan Strongbed","_Cyan Strongbed Head"],"Cyan Torch":["torch_cyan"],"Cyan Wave":["wave_cyan"],"Diamond Spikes":["Spikes_Diamond"],"Draugr Banner":["Draugr Banner","_Draugr Banner Flag"],"Dreaming Canine":["_Wolf Painting Bottom Left","_Wolf Painting Bottom Right","_Wolf Painting Top Left","_Wolf Painting Top Right"],"Duo Blocchino Statue":["2_block"],"Extractor Pipe":["extractor_pipe_straight_z"],"Filter Pipe":["filter_pipe_input_pz"],"Fluid Pipe":["baf2_fluid_pipe_nz_pz"],"Football":["football"],"Frying Pan":["frying_pan"],"Glowing Mushroom":["glowing_mushroom"],"Gold Antlers":["gold_antlers_model"],"Gold Spikes":["Spikes_Gold"],"Grant Wool":["_Sheep Painting Bottom Left","_Sheep Painting Bottom Right","_Sheep Painting Top Left","_Sheep Painting Top Right"],"Gray Banner":["Gray Banner","_Gray Banner Flag"],"Gray Bed":["Gray Bed","_Gray Bed Head"],"Gray Carpet":["carpet_gray_model"],"Gray Strongbed":["Gray Strongbed","_Gray Strongbed Head"],"Gray Torch":["torch_gray"],"Green Banner":["Green Banner","_Green Banner Flag"],"Green Bed":["Green Bed","_Green Bed Head"],"Green Carpet":["carpet_green_model"],"Green Strongbed":["Green Strongbed","_Green Strongbed Head"],"Green Torch":["torch_green"],"Green Wave":["wave_green"],"Grey Wave":["wave_grey"],"Hob Boiling":["hob_boiling"],"Hob Frying":["hob_frying"],"Hump Day":["_Camel Painting Bottom Left","_Camel Painting Bottom Right","_Camel Painting Top Left","_Camel Painting Top Right"],"Il Wizardini Del Porko Statue":["il_wizardini_del_porko"],"Iron Spikes":["Spikes_Iron"],"Job Application Statue":["job_application"],"John Beef Statue":["john_beef"],"Jump Pad":["jump_pad"],"Jungle Door":["Jungle Door","_Jungle Door Top"],"Kill Spikes":["Spikes_Kill"],"Kitchen Worktop":["kitchen_worktop"],"Landing Pad":["landing_pad"],"Lantern":["lantern"],"Light Blue Banner":["Light Blue Banner","_Light Blue Banner Flag"],"Light Blue Bed":["Light Blue Bed","_Light Blue Bed Head"],"Light Blue Carpet":["carpet_light_blue_model"],"Light Blue Strongbed":["Light Blue Strongbed","_Light Blue Strongbed Head"],"Light Blue Torch":["torch_light_blue"],"Light Blue Wave":["wave_light_blue"],"Light Gray Banner":["Light Gray Banner","_Light Gray Banner Flag"],"Light Gray Bed":["Light Gray Bed","_Light Gray Bed Head"],"Light Gray Carpet":["carpet_light_gray_model"],"Light Gray Strongbed":["Light Gray Strongbed","_Light Gray Strongbed Head"],"Light Gray Torch":["torch_light_gray"],"Light Grey Wave":["wave_light_grey"],"Lily Pad":["lily_pad_model"],"Lime Banner":["Lime Banner","_Lime Banner Flag"],"Lime Bed":["Lime Bed","_Lime Bed Head"],"Lime Carpet":["carpet_lime_model"],"Lime Strongbed":["Lime Strongbed","_Lime Strongbed Head"],"Lime Torch":["torch_lime"],"Lime Wave":["wave_lime"],"Lucchia Blocchi Statue":["lucchia_blocchi"],"Lunite Auto Miner":["auto_miner_lunite_body","auto_miner_lunite_drill_back","auto_miner_lunite_drill_front","auto_miner_lunite_foot_back","auto_miner_lunite_foot_front"],"Magenta Banner":["Magenta Banner","_Magenta Banner Flag"],"Magenta Bed":["Magenta Bed","_Magenta Bed Head"],"Magenta Carpet":["carpet_magenta_model"],"Magenta Strongbed":["Magenta Strongbed","_Magenta Strongbed Head"],"Magenta Torch":["torch_magenta"],"Magenta Wave":["wave_magenta"],"Mango Door":["Mango Door","_Mango Door Top"],"Maple Door":["Maple Door","_Maple Door Top"],"Merger Pipe":["merger_pipe_output_pz"],"Monsieur Bedwar Statue":["monsieur_bedwar"],"Noticeboard":["noticeboard_wall_single"],"Noticeboard Standing":["noticeboard_standing"],"Noticeboard Standing Bottom":["noticeboard_standing_bottom"],"Noticeboard Standing Bottom Left":["noticeboard_standing_bottom_left"],"Noticeboard Standing Bottom Right":["noticeboard_standing_bottom_right"],"Noticeboard Standing Left":["noticeboard_standing_left"],"Noticeboard Standing Leg":["noticeboard_standing_leg"],"Noticeboard Standing Right":["noticeboard_standing_right"],"Noticeboard Standing Top":["noticeboard_standing_top"],"Noticeboard Standing Top Left":["noticeboard_standing_top_left"],"Noticeboard Standing Top Right":["noticeboard_standing_top_right"],"Noticeboard Wall":["noticeboard_wall"],"Noticeboard Wall Bottom":["noticeboard_wall_bottom"],"Noticeboard Wall Bottom Left":["noticeboard_wall_bottom_left"],"Noticeboard Wall Bottom Right":["noticeboard_wall_bottom_right"],"Noticeboard Wall Left":["noticeboard_wall_left"],"Noticeboard Wall Right":["noticeboard_wall_right"],"Noticeboard Wall Top":["noticeboard_wall_top"],"Noticeboard Wall Top Left":["noticeboard_wall_top_left"],"Noticeboard Wall Top Right":["noticeboard_wall_top_right"],"Orange Banner":["Orange Banner","_Orange Banner Flag"],"Orange Bed":["Orange Bed","_Orange Bed Head"],"Orange Carpet":["carpet_orange_model"],"Orange Strongbed":["Orange Strongbed","_Orange Strongbed Head"],"Orange Torch":["torch_orange"],"Orange Wave":["wave_orange"],"Palm Door":["Palm Door","_Palm Door Top"],"Pear Door":["Pear Door","_Pear Door Top"],"Pine Door":["Pine Door","_Pine Door Top"],"Pink Banner":["Pink Banner","_Pink Banner Flag"],"Pink Bed":["Pink Bed","_Pink Bed Head"],"Pink Carpet":["carpet_pink_model"],"Pink Strongbed":["Pink Strongbed","_Pink Strongbed Head"],"Pink Torch":["torch_pink"],"Pink Wave":["wave_pink"],"Pipe":["pipe_straight_z"],"Plum Door":["Plum Door","_Plum Door Top"],"Purple Banner":["Purple Banner","_Purple Banner Flag"],"Purple Bed":["Purple Bed","_Purple Bed Head"],"Purple Carpet":["carpet_purple_model"],"Purple Strongbed":["Purple Strongbed","_Purple Strongbed Head"],"Purple Torch":["torch_purple"],"Purple Wave":["wave_purple"],"Rainbow Banner":["Rainbow Banner","_Rainbow Banner Flag"],"Red Banner":["Red Banner","_Red Banner Flag"],"Red Bed":["Red Bed","_Red Bed Head"],"Red Carpet":["carpet_red_model"],"Red Strongbed":["Red Strongbed","_Red Strongbed Head"],"Red Torch":["torch_red"],"Red Wave":["wave_red"],"Rocket Ship":["rocket_northeast_1","rocket_northwest_1","rocket_southeast_1","rocket_southwest_1"],"Rocket Ship S2":["rocket_northeast_1","rocket_northeast_2","rocket_northwest_1","rocket_northwest_2","rocket_southeast_1","rocket_southeast_2","rocket_southwest_1","rocket_southwest_2"],"Rocket Ship S3":["rocket_northeast_1","rocket_northeast_2","rocket_northeast_3","rocket_northwest_1","rocket_northwest_2","rocket_northwest_3","rocket_southeast_1","rocket_southeast_2","rocket_southeast_3","rocket_southwest_1","rocket_southwest_2","rocket_southwest_3"],"Rocket Ship S4":["rocket_northeast_1","rocket_northeast_2","rocket_northeast_3","rocket_northeast_4","rocket_northwest_1","rocket_northwest_2","rocket_northwest_3","rocket_northwest_4","rocket_southeast_1","rocket_southeast_2","rocket_southeast_3","rocket_southeast_4","rocket_southwest_1","rocket_southwest_2","rocket_southwest_3","rocket_southwest_4"],"Rocket Ship S5":["rocket_northeast_1","rocket_northeast_2","rocket_northeast_3","rocket_northeast_4","rocket_northeast_5","rocket_northwest_1","rocket_northwest_2","rocket_northwest_3","rocket_northwest_4","rocket_northwest_5","rocket_southeast_1","rocket_southeast_2","rocket_southeast_3","rocket_southeast_4","rocket_southeast_5","rocket_southwest_1","rocket_southwest_2","rocket_southwest_3","rocket_southwest_4","rocket_southwest_5"],"Skull Banner":["Skull Banner","_Skull Banner Flag"],"Slicing Board":["slicing_board"],"Slime Trail":["slime_trail"],"Small Black Pod":["Small Black Pod","_Small Black Pod Mid","_Small Black Pod Top"],"Small Blue Pod":["Small Blue Pod","_Small Blue Pod Mid","_Small Blue Pod Top"],"Small Brown Pod":["Small Brown Pod","_Small Brown Pod Mid","_Small Brown Pod Top"],"Small Cyan Pod":["Small Cyan Pod","_Small Cyan Pod Mid","_Small Cyan Pod Top"],"Small Gray Pod":["Small Gray Pod","_Small Gray Pod Mid","_Small Gray Pod Top"],"Small Green Pod":["Small Green Pod","_Small Green Pod Mid","_Small Green Pod Top"],"Small Light Blue Pod":["Small Light Blue Pod","_Small Light Blue Pod Mid","_Small Light Blue Pod Top"],"Small Light Gray Pod":["Small Light Gray Pod","_Small Light Gray Pod Mid","_Small Light Gray Pod Top"],"Small Lime Pod":["Small Lime Pod","_Small Lime Pod Mid","_Small Lime Pod Top"],"Small Magenta Pod":["Small Magenta Pod","_Small Magenta Pod Mid","_Small Magenta Pod Top"],"Small Orange Pod":["Small Orange Pod","_Small Orange Pod Mid","_Small Orange Pod Top"],"Small Pink Pod":["Small Pink Pod","_Small Pink Pod Mid","_Small Pink Pod Top"],"Small Purple Pod":["Small Purple Pod","_Small Purple Pod Mid","_Small Purple Pod Top"],"Small Red Pod":["Small Red Pod","_Small Red Pod Mid","_Small Red Pod Top"],"Small White Pod":["Small White Pod","_Small White Pod Mid","_Small White Pod Top"],"Small Yellow Pod":["Small Yellow Pod","_Small Yellow Pod Mid","_Small Yellow Pod Top"],"Spectral Door":["Spectral Door","_Spectral Door Top"],"Splitter Pipe":["splitter_pipe"],"Stampede":["_Cow Painting Bottom Left","_Cow Painting Bottom Right","_Cow Painting Top Left","_Cow Painting Top Right"],"Standing Noticeboard":["noticeboard_standing_single"],"Stone Spikes":["Spikes_Stone"],"Strong Jump Pad":["jump_pad_strong"],"Sunbathed Gallope":["_Horse Painting Bottom Left","_Horse Painting Bottom Right","_Horse Painting Top Left","_Horse Painting Top Right"],"Super Jump Pad":["jump_pad_super"],"Torch":["torch"],"Twirlina Cappucina Statue":["twirlina_cappucina"],"UFO":["ufo"],"Unforgotten Pig":["_Pig Painting Bottom Left","_Pig Painting Bottom Right","_Pig Painting Top Left","_Pig Painting Top Right"],"Vending Machine":["vending_machine_bottom","vending_machine_top"],"Weak Jump Pad":["jump_pad_weak"],"Whiskers":["_Wildcat Painting Bottom Left","_Wildcat Painting Bottom Right","_Wildcat Painting Top Left","_Wildcat Painting Top Right"],"White Banner":["White Banner","_White Banner Flag"],"White Bed":["White Bed","_White Bed Head"],"White Carpet":["carpet_white_model"],"White Strongbed":["White Strongbed","_White Strongbed Head"],"White Torch":["torch_white"],"White Wave":["wave_white"],"Wire":["wire_straight_z"],"Wood Spikes":["Spikes_Wood"],"Yellow Banner":["Yellow Banner","_Yellow Banner Flag"],"Yellow Bed":["Yellow Bed","_Yellow Bed Head"],"Yellow Carpet":["carpet_yellow_model"],"Yellow Strongbed":["Yellow Strongbed","_Yellow Strongbed Head"],"Yellow Torch":["torch_yellow"],"Yellow Wave":["wave_yellow"]}'),
      Xd = md(38033),
      Kd = new Map(Xd.keys().filter((dd => dd.startsWith("./"))).map((dd => [dd.slice(2, -5), dd]))),
      hd = new Map,
      vd = new Map,
      Qd = new Map;

    function td(dd) {
      return Kd.has(dd)
    }

    function od(dd) {
      var Od;
      return null !== (Od = Rd[dd]) && void 0 !== Od ? Od : [dd]
    }

    function Nd(dd) {
      return Xd(Kd.get(dd))
    }
    async function qd(dd, Od, md) {
      const {
        data: Wd,
        texture: Rd
      } = await
      function(dd) {
        let Od = hd.get(dd);
        return Od || (Od = Nd(dd).then((async dd => {
          const Od = new Image;
          Od.src = dd.texture, await Od.decode();
          const md = document.createElement("canvas");
          md.width = Od.width, md.height = Od.height;
          const Wd = md.getContext("2d");
          return Wd.drawImage(Od, 0, 0), {
            data: dd,
            texture: {
              width: Od.width,
              height: Od.height,
              pixels: Wd.getImageData(0, 0, Od.width, Od.height).data
            }
          }
        })), Od.catch((() => {
          hd.delete(dd)
        })), hd.set(dd, Od)), Od
      }(dd), Xd = document.createElement("canvas");
      return Xd.width = Od, Xd.height = Od, Xd.getContext("2d").putImageData(new ImageData((0, Fd.i)(Wd, Rd, Od, md), Od, Od), 0, 0), Xd.toDataURL()
    }

    function Hd(dd, Od, md) {
      const Fd = `${Od}|${md}|${dd}`;
      let Rd = vd.get(Fd);
      return Rd || (Rd = (0, Wd.c)(dd, (() => Nd(dd)), Od, md).then((Wd => null !== Wd && void 0 !== Wd ? Wd : qd(dd, Od, md))), Rd.then((md => {
        const Wd = Qd.get(dd);
        md && (void 0 === Wd || Wd.size < Od) && Qd.set(dd, {
          size: Od,
          url: md
        })
      }), (() => {
        vd.delete(Fd)
      })), vd.set(Fd, Rd)), Rd
    }

    function yd(dd) {
      var Od, md;
      return null !== (Od = null === (md = Qd.get(dd)) || void 0 === md ? void 0 : md.url) && void 0 !== Od ? Od : null
    }
  },
  38013: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      e: () => hd,
      g: () => Xd,
      h: () => od,
      i: () => vd
    });
    const Wd = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      Fd = .6,
      Rd = {
        width: 2 * Wd.across,
        height: 2 * Wd.down + Wd.up
      };

    function Xd(dd, Od) {
      const md = Od > 0 ? Od + 1 : 0,
        Xd = dd * Fd - Od / Wd.across;
      return Math.max(0, Math.min(Xd, (dd - 2 * md) / Rd.height))
    }
    const Kd = [15, 15, 15],
      hd = {
        top: 1,
        left: .85,
        right: .7
      };

    function vd(dd, Od, md, Wd) {
      const {
        vertices: Fd,
        uvs: Kd,
        indices: hd,
        shades: vd
      } = dd, Qd = function(dd, Od) {
        const md = Xd(dd, Od),
          Wd = Rd.width * md,
          Fd = Rd.height * md;
        return {
          left: (dd - Wd) / 2,
          top: (dd - Fd) / 2,
          width: Wd,
          height: Fd
        }
      }(md, Wd), td = new Float32Array(Fd.length);
      for (let Rd = 0; Rd < Fd.length; Rd += 3) td[Rd] = Qd.left + Fd[Rd] * Qd.width, td[Rd + 1] = Qd.top + Fd[Rd + 1] * Qd.height, td[Rd + 2] = Fd[Rd + 2];
      const Nd = new Float32Array(md * md).fill(-1 / 0),
        qd = new Uint8ClampedArray(md * md * 4),
        Hd = 255 * dd.alphaCutoff;
      for (let Rd = 0; Rd < hd.length; Rd += 3) {
        const [dd, Wd, Fd] = [hd[Rd], hd[Rd + 1], hd[Rd + 2]], [Xd, Qd, od] = [3 * dd, 3 * Wd, 3 * Fd], [yd, bd, Td, pd, Yd, gd] = [td[Xd], td[Xd + 1], td[Qd], td[Qd + 1], td[od], td[od + 1]], wd = (Td - yd) * (gd - bd) - (Yd - yd) * (pd - bd);
        if (Math.abs(wd) < 1e-9) continue;
        const Ed = vd[Rd / 3],
          [Jd, Ud, xd, Bd, Sd, sd] = [Kd[2 * dd], Kd[2 * dd + 1], Kd[2 * Wd], Kd[2 * Wd + 1], Kd[2 * Fd], Kd[2 * Fd + 1]],
          ud = Math.max(0, Math.floor(Math.min(yd, Td, Yd))),
          Vd = Math.min(md - 1, Math.ceil(Math.max(yd, Td, Yd))),
          Ad = Math.max(0, Math.floor(Math.min(bd, pd, gd))),
          rd = Math.min(md - 1, Math.ceil(Math.max(bd, pd, gd)));
        for (let Rd = Ad; Rd <= rd; Rd++)
          for (let dd = ud; dd <= Vd; dd++) {
            const [Wd, Fd] = [dd + .5, Rd + .5], Kd = ((Wd - yd) * (gd - bd) - (Yd - yd) * (Fd - bd)) / wd, hd = ((Td - yd) * (Fd - bd) - (Wd - yd) * (pd - bd)) / wd, vd = 1 - Kd - hd;
            if (vd < 0 || Kd < 0 || hd < 0) continue;
            const ud = vd * td[Xd + 2] + Kd * td[Qd + 2] + hd * td[od + 2],
              Vd = Rd * md + dd;
            if (ud <= Nd[Vd]) continue;
            const Ad = Math.max(0, Math.min(Od.width - 1, Math.floor((vd * Jd + Kd * xd + hd * Sd) * Od.width))),
              rd = 4 * (Math.max(0, Math.min(Od.height - 1, Math.floor((vd * Ud + Kd * Bd + hd * sd) * Od.height))) * Od.width + Ad);
            Od.pixels[rd + 3] < Hd || (Nd[Vd] = ud, qd[4 * Vd] = Od.pixels[rd] * Ed, qd[4 * Vd + 1] = Od.pixels[rd + 1] * Ed, qd[4 * Vd + 2] = Od.pixels[rd + 2] * Ed, qd[4 * Vd + 3] = 255)
          }
      }
      return od(qd, md, Wd), qd
    }
    let Qd = NaN,
      td = new Int32Array(0);

    function od(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Od => 0 !== dd[4 * Od + 3];
      const Fd = new Uint8Array(Od * Od);
      for (let Kd = 0; Kd < Od * Od; Kd++) Fd[Kd] = Wd(Kd) ? 1 : 0;
      const Rd = (dd, md) => dd >= 0 && md >= 0 && dd < Od && md < Od && 0 === Fd[md * Od + dd],
        Xd = new Float32Array(Od * Od).fill(1 / 0),
        hd = function(dd) {
          if (dd !== Qd) {
            const Od = Math.ceil(dd + 1),
              md = [];
            for (let Wd = -Od; Wd <= Od; Wd++)
              for (let Fd = -Od; Fd <= Od; Fd++) {
                const Od = Fd * Fd + Wd * Wd;
                Od > 0 && Od < (dd + 1) ** 2 && md.push(Fd, Wd, Od)
              }
            Qd = dd, td = Int32Array.from(md)
          }
          return td
        }(md);
      for (let Kd = 0; Kd < Od; Kd++)
        for (let dd = 0; dd < Od; dd++) {
          if (1 === Fd[Kd * Od + dd] && (Rd(dd - 1, Kd) || Rd(dd + 1, Kd) || Rd(dd, Kd - 1) || Rd(dd, Kd + 1)))
            for (let md = 0; md < hd.length; md += 3) {
              const Wd = dd + hd[md],
                Fd = Kd + hd[md + 1];
              if (Wd >= 0 && Fd >= 0 && Wd < Od && Fd < Od) {
                const dd = Fd * Od + Wd;
                Xd[dd] = Math.min(Xd[dd], hd[md + 2])
              }
            }
        }
      for (let vd = 0; vd < Od * Od; vd++) 1 !== Fd[vd] && Xd[vd] !== 1 / 0 && (dd.set(Kd, 4 * vd), dd[4 * vd + 3] = Math.round(255 * Math.min(1, md + 1 - Math.sqrt(Xd[vd]))))
    }
  },
  38022: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd
    });
    const Wd = {
      wait: function(dd) {
        return new Promise((Od => {
          setTimeout(Od, dd)
        }))
      },
      stallMs: 2e4
    };
    class Fd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wd;
        this.url = dd, this.options = Od, this.timing = md, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = dd
      }
      ready() {
        if (null === this.fetched) {
          const dd = new AbortController;
          this.fetchAbort = dd, this.fetched = this.fetchWithRetries(dd.signal).then((Od => (this.fetchAbort === dd && (this.fetchAbort = null), Od)))
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
      async fetchWithRetries(dd) {
        for (let Od = 0;; Od++) {
          const md = new URL(this.url);
          if (Od > 0 && md.searchParams.set("cache-bust", `${Date.now()}-${Od}`), await this.fetchWhole(md, dd)) return this.scriptUrl = md, !0;
          if (Od >= 3 || dd.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** Od), dd.aborted) return !1
        }
      }
      async fetchWhole(dd, Od) {
        const md = new AbortController;
        let Wd;
        const Fd = () => {
            clearTimeout(Wd), Wd = setTimeout((() => {
              md.abort()
            }), this.timing.stallMs)
          },
          Rd = () => {
            md.abort()
          };
        Od.addEventListener("abort", Rd, {
          once: !0
        }), Fd();
        try {
          var Xd;
          const Od = await fetch(dd, {
            signal: md.signal
          });
          if (!Od.ok) return !1;
          const Wd = null === (Xd = Od.body) || void 0 === Xd ? void 0 : Xd.getReader();
          if (!Wd) return !1;
          for (;;) {
            const {
              done: dd
            } = await Wd.read();
            if (dd) return !0;
            Fd()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Wd), Od.removeEventListener("abort", Rd)
        }
      }
    }
  },
  38033: (dd, Od, md) => {
    var Wd = {
      "./67 Statue.json": [43776, 313],
      "./A Doe Through The Green.json": [43785, 314],
      "./Artisan Bench.json": [43793, 315],
      "./Aspen Door.json": [43795, 316],
      "./Aspen Item Pedestal.json": [43802, 317],
      "./Aspen Ladder.json": [43805, 318],
      "./Aspen Trapdoor.json": [43809, 319],
      "./Auto Miner.json": [43812, 320],
      "./Bebek Bebek Bebek Statue.json": [43818, 321],
      "./Bin.json": [43824, 322],
      "./Black Banner.json": [43828, 323],
      "./Black Bed.json": [43836, 324],
      "./Black Carpet.json": [43839, 325],
      "./Black Directional Arrow.json": [43841, 326],
      "./Black Strongbed.json": [43848, 327],
      "./Black Torch.json": [43856, 328],
      "./Black Wave.json": [43865, 329],
      "./Blue Banner.json": [43870, 330],
      "./Blue Bed.json": [43872, 331],
      "./Blue Carpet.json": [43875, 332],
      "./Blue Directional Arrow.json": [43879, 333],
      "./Blue Strongbed.json": [43888, 334],
      "./Blue Torch.json": [43895, 335],
      "./Blue Wave.json": [43897, 336],
      "./Board.json": [43903, 337],
      "./Bobino Musculino Statue.json": [43906, 338],
      "./Bobzilla Statue.json": [43910, 339],
      "./Boiling Pot.json": [43917, 340],
      "./Bone Antlers.json": [43919, 341],
      "./Brown Banner.json": [43925, 342],
      "./Brown Bed.json": [43929, 343],
      "./Brown Carpet.json": [43931, 344],
      "./Brown Directional Arrow.json": [43933, 345],
      "./Brown Strongbed.json": [43937, 346],
      "./Brown Torch.json": [43944, 347],
      "./Brown Wave.json": [43952, 348],
      "./Brra Brra Pachim Statue.json": [43959, 349],
      "./Cannon.json": [43961, 350],
      "./Capitano Explovissimo Statue.json": [43967, 351],
      "./Cappuccino Ninjino Statue.json": [43970, 352],
      "./Cedar Door.json": [43972, 353],
      "./Cedar Item Pedestal.json": [43979, 354],
      "./Cedar Ladder.json": [43986, 355],
      "./Cedar Trapdoor.json": [43988, 356],
      "./Cherry Door.json": [43991, 357],
      "./Cherry Item Pedestal.json": [43994, 358],
      "./Cherry Ladder.json": [43997, 359],
      "./Cherry Trapdoor.json": [43999, 360],
      "./Chili Pepper Plant.json": [44001, 361],
      "./Chili Pepper Plant_stage1.json": [44005, 362],
      "./Chili Pepper Plant_stage2.json": [44011, 363],
      "./Chili Pepper Plant_stage3.json": [44015, 364],
      "./Chili Pepper Plant_stage4.json": [44023, 365],
      "./Chili Pepper Plant_stage5.json": [44032, 366],
      "./Chimpanzano Bananano Statue.json": [44035, 367],
      "./Chopping Board.json": [44040, 368],
      "./Coloured Wheel.json": [44042, 369],
      "./Coolant Pipe.json": [44044, 370],
      "./Crystal.json": [44053, 371],
      "./Cyan Banner.json": [44058, 372],
      "./Cyan Bed.json": [44065, 373],
      "./Cyan Carpet.json": [44067, 374],
      "./Cyan Directional Arrow.json": [44069, 375],
      "./Cyan Strongbed.json": [44072, 376],
      "./Cyan Torch.json": [44078, 377],
      "./Cyan Wave.json": [44085, 378],
      "./Dangling Rope.json": [44088, 379],
      "./Dangling Vine.json": [44097, 380],
      "./Diamond Enchanting Table.json": [44106, 381],
      "./Diamond Spikes.json": [44109, 382],
      "./Diamond Trophy.json": [44117, 383],
      "./Draugr Banner.json": [44119, 384],
      "./Dreaming Canine.json": [44122, 385],
      "./Duo Blocchino Statue.json": [44127, 386],
      "./Extractor Pipe.json": [44129, 387],
      "./Fat Brown Mushroom.json": [44133, 388],
      "./Fat Red Mushroom.json": [44135, 389],
      "./Filter Pipe.json": [44144, 390],
      "./Fluid Pipe.json": [44148, 391],
      "./Football.json": [44154, 392],
      "./Frying Pan.json": [44158, 393],
      "./Furnace.json": [44163, 394],
      "./Glowing Mushroom.json": [44165, 395],
      "./Gold Antlers.json": [44171, 396],
      "./Gold Enchanting Table.json": [44176, 397],
      "./Gold Spikes.json": [44179, 398],
      "./Gold Trophy.json": [44181, 399],
      "./Grant Wool.json": [44188, 400],
      "./Gray Banner.json": [44196, 401],
      "./Gray Bed.json": [44202, 402],
      "./Gray Carpet.json": [44208, 403],
      "./Gray Strongbed.json": [44216, 404],
      "./Gray Torch.json": [44218, 405],
      "./Green Banner.json": [44226, 406],
      "./Green Bed.json": [44235, 407],
      "./Green Carpet.json": [44238, 408],
      "./Green Directional Arrow.json": [44240, 409],
      "./Green Strongbed.json": [44245, 410],
      "./Green Torch.json": [44249, 411],
      "./Green Wave.json": [44256, 412],
      "./Grey Directional Arrow.json": [44262, 413],
      "./Grey Wave.json": [44268, 414],
      "./Hob Boiling.json": [44275, 415],
      "./Hob Frying.json": [44284, 416],
      "./Hump Day.json": [44289, 417],
      "./Il Wizardini Del Porko Statue.json": [44293, 418],
      "./Iron Enchanting Table.json": [44295, 419],
      "./Iron Ladder.json": [44301, 420],
      "./Iron Spikes.json": [44310, 421],
      "./Iron Trophy.json": [44315, 422],
      "./Job Application Statue.json": [44323, 423],
      "./John Beef Statue.json": [44330, 424],
      "./Jump Pad.json": [44336, 425],
      "./Jungle Door.json": [44345, 426],
      "./Jungle Item Pedestal.json": [44349, 427],
      "./Jungle Ladder.json": [44353, 428],
      "./Jungle Trapdoor.json": [44355, 429],
      "./Kill Spikes.json": [44364, 430],
      "./Kitchen Worktop.json": [44367, 431],
      "./Landing Pad.json": [44372, 432],
      "./Lantern.json": [44381, 433],
      "./Leaf Bed.json": [44389, 434],
      "./Light Blue Banner.json": [44392, 435],
      "./Light Blue Bed.json": [44395, 436],
      "./Light Blue Carpet.json": [44397, 437],
      "./Light Blue Directional Arrow.json": [44406, 438],
      "./Light Blue Strongbed.json": [44411, 439],
      "./Light Blue Torch.json": [44413, 440],
      "./Light Blue Wave.json": [44415, 441],
      "./Light Gray Banner.json": [44421, 442],
      "./Light Gray Bed.json": [44423, 443],
      "./Light Gray Carpet.json": [44431, 444],
      "./Light Gray Strongbed.json": [44438, 445],
      "./Light Gray Torch.json": [44447, 446],
      "./Light Grey Directional Arrow.json": [44454, 447],
      "./Light Grey Wave.json": [44462, 448],
      "./Lily Pad.json": [44467, 449],
      "./Lime Banner.json": [44474, 450],
      "./Lime Bed.json": [44477, 451],
      "./Lime Carpet.json": [44481, 452],
      "./Lime Directional Arrow.json": [44484, 453],
      "./Lime Strongbed.json": [44487, 454],
      "./Lime Torch.json": [44489, 455],
      "./Lime Wave.json": [44492, 456],
      "./Lucchia Blocchi Statue.json": [44500, 457],
      "./Lunite Auto Miner.json": [44509, 458],
      "./Magenta Banner.json": [44515, 459],
      "./Magenta Bed.json": [44517, 460],
      "./Magenta Carpet.json": [44519, 461],
      "./Magenta Directional Arrow.json": [44524, 462],
      "./Magenta Strongbed.json": [44530, 463],
      "./Magenta Torch.json": [44535, 464],
      "./Magenta Wave.json": [44540, 465],
      "./Mango Door.json": [44544, 466],
      "./Mango Item Pedestal.json": [44549, 467],
      "./Mango Ladder.json": [44558, 468],
      "./Mango Trapdoor.json": [44564, 469],
      "./Maple Door.json": [44567, 470],
      "./Maple Ladder.json": [44570, 471],
      "./Maple Trapdoor.json": [44578, 472],
      "./Merger Pipe.json": [44580, 473],
      "./Monsieur Bedwar Statue.json": [44582, 474],
      "./Moonstone Trophy.json": [44587, 475],
      "./Noticeboard Standing Bottom Left.json": [44591, 476],
      "./Noticeboard Standing Bottom Right.json": [44596, 477],
      "./Noticeboard Standing Bottom.json": [44604, 478],
      "./Noticeboard Standing Left.json": [44608, 479],
      "./Noticeboard Standing Leg.json": [44610, 480],
      "./Noticeboard Standing Right.json": [44615, 481],
      "./Noticeboard Standing Top Left.json": [44618, 482],
      "./Noticeboard Standing Top Right.json": [44621, 483],
      "./Noticeboard Standing Top.json": [44626, 484],
      "./Noticeboard Standing.json": [44633, 485],
      "./Noticeboard Wall Bottom Left.json": [44642, 486],
      "./Noticeboard Wall Bottom Right.json": [44648, 487],
      "./Noticeboard Wall Bottom.json": [44652, 488],
      "./Noticeboard Wall Left.json": [44658, 489],
      "./Noticeboard Wall Right.json": [44660, 490],
      "./Noticeboard Wall Top Left.json": [44662, 491],
      "./Noticeboard Wall Top Right.json": [44666, 492],
      "./Noticeboard Wall Top.json": [44669, 493],
      "./Noticeboard Wall.json": [44677, 494],
      "./Noticeboard.json": [44680, 495],
      "./Nova Trophy.json": [44683, 496],
      "./Orange Banner.json": [44685, 497],
      "./Orange Bed.json": [44694, 498],
      "./Orange Carpet.json": [44696, 499],
      "./Orange Directional Arrow.json": [44703, 500],
      "./Orange Strongbed.json": [44712, 501],
      "./Orange Torch.json": [44721, 502],
      "./Orange Wave.json": [44723, 503],
      "./Palm Door.json": [44727, 504],
      "./Palm Item Pedestal.json": [44730, 505],
      "./Palm Ladder.json": [44735, 506],
      "./Palm Trapdoor.json": [44738, 507],
      "./Pear Door.json": [44746, 508],
      "./Pear Item Pedestal.json": [44752, 509],
      "./Pear Ladder.json": [44755, 510],
      "./Pear Trapdoor.json": [44757, 511],
      "./Pine Door.json": [44760, 512],
      "./Pine Item Pedestal.json": [44768, 513],
      "./Pine Ladder.json": [44772, 514],
      "./Pine Trapdoor.json": [44777, 515],
      "./Pink Banner.json": [44784, 516],
      "./Pink Bed.json": [44792, 517],
      "./Pink Carpet.json": [44801, 518],
      "./Pink Directional Arrow.json": [44806, 519],
      "./Pink Strongbed.json": [44815, 520],
      "./Pink Torch.json": [44818, 521],
      "./Pink Wave.json": [44823, 522],
      "./Pipe.json": [44825, 523],
      "./Plum Door.json": [44832, 524],
      "./Plum Item Pedestal.json": [44836, 525],
      "./Plum Ladder.json": [44845, 526],
      "./Plum Trapdoor.json": [44852, 527],
      "./Potion Table.json": [44859, 528],
      "./Purple Banner.json": [44868, 529],
      "./Purple Bed.json": [44870, 530],
      "./Purple Carpet.json": [44878, 531],
      "./Purple Directional Arrow.json": [44884, 532],
      "./Purple Strongbed.json": [44886, 533],
      "./Purple Torch.json": [44894, 534],
      "./Purple Wave.json": [44899, 535],
      "./Rainbow Banner.json": [44905, 536],
      "./Red Banner.json": [44909, 537],
      "./Red Bed.json": [44913, 538],
      "./Red Carpet.json": [44916, 539],
      "./Red Directional Arrow.json": [44923, 540],
      "./Red Strongbed.json": [44930, 541],
      "./Red Torch.json": [44933, 542],
      "./Red Wave.json": [44940, 543],
      "./Rocket Ship S2.json": [44947, 544],
      "./Rocket Ship S3.json": [44951, 545],
      "./Rocket Ship S4.json": [44958, 546],
      "./Rocket Ship S5.json": [44962, 547],
      "./Rocket Ship.json": [44969, 548],
      "./Salvaging Table.json": [44978, 549],
      "./Showcase.json": [44983, 550],
      "./Skull Banner.json": [44990, 551],
      "./Slicing Board.json": [44993, 552],
      "./Slime Trail.json": [44995, 553],
      "./Small Black Pod.json": [45002, 554],
      "./Small Blue Pod.json": [45009, 555],
      "./Small Brown Pod.json": [45017, 556],
      "./Small Cyan Pod.json": [45019, 557],
      "./Small Gray Pod.json": [45024, 558],
      "./Small Green Pod.json": [45028, 559],
      "./Small Light Blue Pod.json": [45032, 560],
      "./Small Light Gray Pod.json": [45041, 561],
      "./Small Lime Pod.json": [45047, 562],
      "./Small Magenta Pod.json": [45054, 563],
      "./Small Orange Pod.json": [45061, 564],
      "./Small Pink Pod.json": [45068, 565],
      "./Small Purple Pod.json": [45072, 566],
      "./Small Red Pod.json": [45080, 567],
      "./Small White Pod.json": [45083, 568],
      "./Small Yellow Pod.json": [45089, 569],
      "./Spectral Door.json": [45093, 570],
      "./Spectral Item Pedestal.json": [45097, 571],
      "./Spectral Ladder.json": [45105, 572],
      "./Spectral Trapdoor.json": [45113, 573],
      "./Splitter Pipe.json": [45120, 574],
      "./Stampede.json": [45126, 575],
      "./Standing Noticeboard.json": [45130, 576],
      "./Stone Enchanting Table.json": [45137, 577],
      "./Stone Spikes.json": [45142, 578],
      "./Stone Trophy.json": [45151, 579],
      "./Strong Jump Pad.json": [45156, 580],
      "./Sunbathed Gallope.json": [45160, 581],
      "./Super Jump Pad.json": [45165, 582],
      "./Timed Spike Bomb Block.json": [45168, 583],
      "./Torch.json": [45175, 584],
      "./Twirlina Cappucina Statue.json": [45177, 585],
      "./UFO.json": [45182, 586],
      "./Unforgotten Pig.json": [45191, 587],
      "./Vending Machine.json": [45195, 588],
      "./Vines.json": [45204, 589],
      "./Weak Jump Pad.json": [45207, 590],
      "./Whiskers.json": [45210, 591],
      "./White Banner.json": [45217, 592],
      "./White Bed.json": [45222, 593],
      "./White Carpet.json": [45224, 594],
      "./White Directional Arrow.json": [45227, 595],
      "./White Strongbed.json": [45232, 596],
      "./White Torch.json": [45234, 597],
      "./White Wave.json": [45238, 598],
      "./Wire.json": [45240, 599],
      "./Wood Enchanting Table.json": [45249, 600],
      "./Wood Spikes.json": [45256, 601],
      "./Wood Trophy.json": [45262, 602],
      "./Workbench.json": [45264, 603],
      "./Yellow Banner.json": [45272, 604],
      "./Yellow Bed.json": [45277, 605],
      "./Yellow Carpet.json": [45280, 606],
      "./Yellow Directional Arrow.json": [45284, 607],
      "./Yellow Strongbed.json": [45289, 608],
      "./Yellow Torch.json": [45298, 609],
      "./Yellow Wave.json": [45302, 610]
    };

    function Fd(dd) {
      if (!md.o(Wd, dd)) return Promise.resolve().then((() => {
        var Od = new Error("Cannot find module '" + dd + "'");
        throw Od.code = "MODULE_NOT_FOUND", Od
      }));
      var Od = Wd[dd],
        Fd = Od[0];
      return md.e(Od[1]).then((() => md(Fd)))
    }
    Fd.keys = () => Object.keys(Wd), Fd.id = 38033, dd.exports = Fd
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);