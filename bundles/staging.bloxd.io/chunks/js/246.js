export const id = 246;
export const ids = [246];
export const modules = {
  41140: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      openMobLineupPreview: () => sm,
      openMobPreview: () => rm,
      openPetPreview: () => lm
    });
    var hm = fm(39930),
      Am = fm(40196),
      am = fm(41143),
      xm = fm(37330),
      wm = fm(37181),
      Dm = fm(40344),
      im = fm(41166),
      Rm = fm(38570),
      pm = fm(37245),
      Em = fm(37233),
      om = fm(37175),
      Om = fm(38471),
      Ym = fm(38466),
      qm = fm(38159),
      jm = fm(38218),
      Vm = fm(38185),
      Im = fm(37836),
      Km = fm(2760),
      Qm = fm(37688);
    fm(41173), fm(40590), fm(41176);
    const nm = 22,
      Jm = 13,
      cm = Math.PI - Math.PI / 16,
      zm = 6,
      Zm = Math.PI / 4;
    let km = null;
    const bm = {},
      Sm = new Map;

    function em() {
      if (null !== km) return km;
      const mm = document.createElement("canvas");
      mm.classList.add("MobPreviewCanvas");
      const Tm = new hm.d(mm, !0, {
        preserveDrawingBuffer: !0
      });
      Tm.fhm = (0, Km.d)().qY.engine.fhm;
      const fm = new Am.c(Tm);
      fm.clearColor = new xm.e(0, 0, 0, 0), fm.ambientColor = new xm.Color3(1, 1, 1);
      const im = new am.e("Bq", Math.PI / 2, Math.PI / 2, nm, wm.WO.Zero(), fm),
        Rm = new Dm.c("light", new wm.WO(-.1, 1, -.3), fm);
      return Rm.diffuse = new xm.Color3(1, 1, 1), Rm.specular = new xm.Color3(1, 1, 1), Rm.groundColor = new xm.Color3(.5, .5, .5), km = {
        engine: Tm,
        Aq: fm,
        canvas: mm,
        camera: im
      }, km
    }

    function Nm(mm) {
      return bm[mm] ??= (0, qm.B)(mm, em().Aq, !0).catch((Tm => {
        throw delete bm[mm], Tm
      })), bm[mm]
    }

    function Gm(mm) {
      let Tm = Sm.get(mm);
      return Tm || (Tm = Im.x[mm].loadModel(em().Aq, !1).then((mm => (mm.Dk(!1), mm)), (Tm => {
        throw Sm.delete(mm), Tm
      })), Sm.set(mm, Tm)), Tm
    }

    function Xm(mm) {
      var Tm, fm, hm;
      let {
        mobType: Am,
        variation: am,
        animation: xm
      } = mm, Dm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, nm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const zm = null !== (Tm = null === Dm || void 0 === Dm ? void 0 : Dm.size) && void 0 !== Tm ? Tm : 1,
        Zm = null !== (fm = null === Dm || void 0 === Dm ? void 0 : Dm.cosmetics) && void 0 !== fm ? fm : [],
        km = null !== (hm = null === Dm || void 0 === Dm ? void 0 : Dm.zK) && void 0 !== hm ? hm : null;
      let bm = !1,
        Sm = null,
        Xm = null;
      const {
        engine: Pm,
        Aq: Hm
      } = em(), ym = Hm.onBeforeRenderObservable.add((() => {
        var mm;
        null === (mm = Xm) || void 0 === mm || mm.render(Pm.getDeltaTime())
      })), Cm = null === km ? null : Gm(km).catch((mm => (console.error(`Mob preview: could not load ${km}`, mm), null)));
      return Promise.all([Nm(Am), Cm]).then((mm => {
        var Tm, fm, hm;
        let [Dm, Nm] = mm;
        if (bm) return;
        const Gm = (0, Km.d)().qY.YG,
          {
            hitBoxDimensions: Pm
          } = (0, Rm.b)(Am),
          Hm = Jm / Math.max(Pm.height, Pm.width);
        if (Sm = (0, qm.o)(Am, Hm * zm, !0, !0), Gm.setPosition(Sm, nm, -Pm.height * Hm / 2, 0), Gm.setRotationEulerY(Sm, cm), Dm.meshApi instanceof Vm.c && Zm.length > 0)
          for (const [Am, am] of Zm) Dm.meshApi.updatePlayerCosmetic(null, Sm, Am, am, !0);
        else Dm.meshApi.updateVariation(Sm, Am, null !== am && void 0 !== am ? am : "default");
        null !== km && null !== Nm && function(mm, Tm, fm, hm) {
          var Am;
          const am = Im.x[mm],
            xm = (0, Om.l)();
          (0, Om.f)(am, null === (Am = (0, jm.c)(fm).meshMetadata.heldItemPositionParams) || void 0 === Am ? void 0 : Am.itemOffset, xm);
          const Dm = Qm.e * xm.fi.y,
            Rm = xm.usesQuaternion ? xm.quaternion : wm.Quaternion.FromEulerVector(xm.rotation),
            pm = new im.c(`${Tm.name}Hand`, em().Aq);
          pm.position.ZZ((0, Ym.c)(xm.position, Rm, Dm, am.heldModelOffsetY())), pm.rotationQuaternion = Rm, pm.fi.set(xm.fi.x, Dm, xm.fi.z), Tm.clone(`${Tm.name}Held`, pm).Dk(!0);
          const Em = (0, Km.d)().qY.YG;
          Em.attachTransformNode(pm, hm, Em.getNamedNode(hm, "ArmRightMesh"))
        }(km, Nm, Am, Sm), Gm.set(Sm, "aOpacity", 1);
        const ym = null !== (Tm = (0, jm.c)(Am).meshMetadata.lifeformTypeForModelOverride) && void 0 !== Tm ? Tm : Am;
        Xm = new om.AnimatorState, Xm.thinInstMgr = Gm, Xm.QG = Sm, Xm.kfm = Gm.hhm(Sm, 0), Xm.modelLifeformType = ym, Xm.nodeNameAliases = null !== (fm = null === (hm = (0, pm.c)(ym)) || void 0 === hm ? void 0 : hm.nodeNameAliases) && void 0 !== fm ? fm : null, Xm.startAnimation(xm, Em.h.Movement)
      })).catch((mm => {
        console.error(`Mob preview: could not load ${Am}`, mm)
      })), () => {
        bm = !0, Hm.onBeforeRenderObservable.remove(ym), null !== Sm && (0, Km.d)().qY.YG.delete(Sm)
      }
    }

    function Pm(mm, Tm) {
      return Xm({
        mobType: "NPC",
        variation: null,
        animation: mm.animation
      }, mm, Tm)
    }

    function Hm(mm) {
      let {
        mobType: Tm,
        variation: fm,
        metaInfo: hm,
        tamed: Am
      } = mm, am = !1, xm = null, wm = 0;
      const Dm = (0, Km.d)(),
        im = Dm.qY.YG,
        Rm = mm => {
          wm += Zm * (mm / 1e3) % (2 * Math.PI), im.setRotationEulerY(xm, wm)
        };
      return Nm(Tm).then((mm => {
        if (am) return;
        xm = (0, qm.o)(Tm, zm, !0, !0), im.setPosition(xm, 0, -zm, 0), mm.meshApi.updateVariation(xm, Tm, fm);
        const wm = {
          wool: "Sheared" !== hm,
          saddle: "Saddled" === hm,
          antlers: "Antlers" === hm,
          collar: Am
        };
        for (const [Tm, fm] of Object.entries(wm)) im.hasGroup(xm, Tm) && mm.meshApi.setMeshGroupVisibility(xm, Tm, fm);
        im.set(xm, "aOpacity", 1), Dm.on("renderTickBegin", Rm)
      })).catch((mm => {
        console.error(`Pet preview: could not load ${Tm}`, mm)
      })), () => {
        am = !0, Dm.off("renderTickBegin", Rm), null !== xm && im.delete(xm)
      }
    }
    class ym {
      constructor(mm, Tm) {
        this.place = Tm, this.remove = null;
        const {
          engine: fm,
          Aq: hm,
          canvas: Am
        } = em();
        mm.appendChild(Am), fm.resize(), fm.runRenderLoop((() => {
          hm.render()
        }))
      }
      show(mm) {
        var Tm;
        null === (Tm = this.remove) || void 0 === Tm || Tm.call(this), this.remove = this.place(mm)
      }
      resize(mm, Tm) {
        const {
          engine: fm,
          canvas: hm
        } = em();
        hm.width = mm, hm.height = Tm, fm.resize()
      }
      close() {
        var mm;
        em().engine.stopRenderLoop(), null === (mm = this.remove) || void 0 === mm || mm.call(this), this.remove = null
      }
    }
    class Cm {
      constructor(mm) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new ym(mm, (() => () => {}))
      }
      show(mm) {
        mm.figures !== this.view.figures && this.preload(mm.figures), this.view = mm, this.place()
      }
      resize(mm, Tm) {
        this.preview.resize(mm, Tm), this.aspect = mm / Tm, this.place()
      }
      close() {
        this.preview.close();
        for (const mm of this.placed) null === mm || void 0 === mm || mm.remove();
        this.placed = []
      }
      preload(mm) {
        const Tm = () => {};
        Nm("NPC").catch(Tm);
        for (const {
            zK: fm
          }
          of mm) null !== fm && Gm(fm).catch(Tm)
      }
      place() {
        const {
          figures: mm,
          shown: Tm
        } = this.view, fm = mm.map(((fm, hm) => {
          var Am;
          const am = null !== (Am = this.placed[hm]) && void 0 !== Am ? Am : null;
          if (!Tm[hm]) return null === am || void 0 === am || am.remove(), null;
          const xm = (wm = (hm + .5) / mm.length, Dm = this.aspect, (.5 - wm) * (2 * nm * Math.tan(em().camera.fov / 2)) * Dm);
          var wm, Dm;
          return null !== am && am.figure === fm && am.x === xm ? am : (null === am || void 0 === am || am.remove(), {
            figure: fm,
            x: xm,
            remove: Pm(fm, xm)
          })
        }));
        for (const hm of this.placed.slice(mm.length)) null === hm || void 0 === hm || hm.remove();
        this.placed = fm
      }
    }

    function rm(mm) {
      return new ym(mm, Xm)
    }

    function sm(mm) {
      return new Cm(mm)
    }

    function lm(mm) {
      return new ym(mm, Hm)
    }
  },
  38890: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Em
    });
    var hm = fm(37255),
      Am = fm(37267),
      am = fm(37507),
      xm = fm(37274),
      wm = fm(37260);

    function Dm(mm) {
      return `\n\t\t\t\t${(0,wm.r)(mm,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, wm.u)(mm, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, wm.u)(mm, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, wm.j)(mm, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function im(mm, Tm) {
      let fm = (0, wm.Ab)(mm, "skele" + (Tm - 1));
      for (let Am = Tm - 2; Am >= 0; Am--) fm = (0, wm.nb)(mm, `boneIdx == ${Am}`, (0, wm.Ab)(mm, `skele${Am}`), fm);
      const hm = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,wm.u)(mm,"int","boneIdx",(0,wm.tb)(mm,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,wm.u)(mm,"vec3","bone",fm)}\n\t\t\t\t${(0,wm.u)(mm,"vec2","pivot",(0,wm.j)(mm,"vec2","0.0",`${(0,wm.Ib)(mm,"position")}.z`))}\n\t\t\t\t${(0,wm.T)(mm)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${hm}));`:`positionUpdated.yz += ${hm};`}\n\t\t`
    }

    function Rm(mm) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,wm.j)(mm,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const pm = {
        x: 0,
        y: 0,
        z: 0,
        UTm(mm, Tm) {
          return this.x = mm[Tm], this.y = mm[Tm + 1], this.z = mm[Tm + 2], this
        }
      },
      Em = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (mm, Tm) => ({
          ...(0, hm.b)("CAPE"),
          BLOXD_CAPE_BONES: `${mm}`,
          BLOXD_CAPE_MAX_Y: (0, Am.qb)(Tm)
        }),
        getUniforms(mm) {
          return (0, am.c)(function(mm) {
            const Tm = [];
            for (let fm = 0; fm < mm; fm++) Tm.push({
              name: `skele${fm}`,
              type: "highp vec3"
            });
            return Tm
          }(this.skeleLen), "vertex", mm)
        },
        bind(mm) {
          for (let Tm = 0; Tm < this.skeleLen; Tm++) mm.updateVector3(`skele${Tm}`, pm.UTm(this.skele, 3 * Tm))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(mm, Tm) {
          return "vertex" !== mm ? null : {
            CUSTOM_VERTEX_DEFINITIONS: Dm(Tm),
            CUSTOM_VERTEX_UPDATE_POSITION: im(Tm, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: Rm(Tm)
          }
        }
      };
    (0, xm.n)(Em)
  },
  38781: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Rm,
      d: () => pm
    });
    var hm = fm(37255),
      Am = fm(37507),
      am = fm(37260),
      xm = fm(37274);
    const wm = "bloxdTextLodBias",
      Dm = [{
        name: wm,
        type: "float"
      }],
      im = "bloxdTextSample",
      Rm = {
        planes: -.5,
        boards: -.5
      },
      pm = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, hm.b)("TEXT_SAMPLER"),
        getUniforms: mm => (0, Am.c)(Dm, "fragment", mm),
        bind(mm) {
          mm.updateFloat(wm, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(mm, Tm) {
          if ("fragment" !== mm) return null;
          const fm = (0, am.B)(Tm, `vec4 ${im}(sampler2D s, vec2 uv, float bias)`, `fn ${im}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            hm = (0, am.B)(Tm, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Am = `${(0,am.O)(Tm,"vDiffuseUV")} + uvOffset`,
            xm = (0, am.B)(Tm, `${im}(diffuseSampler, ${Am}, ${(0,am.Ab)(Tm,wm)})`, `${im}(diffuseSampler, diffuseSamplerSampler, ${Am}, ${(0,am.Ab)(Tm,wm)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${fm} {\n\t\t\t\t\t${(0,am.u)(Tm,"vec4","texel",hm)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,am.j)(Tm,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,am.j)(Tm,"vec3","0.0")}, ${(0,am.j)(Tm,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, am.w)(Tm)]: `baseColor = ${xm};`
          }
        }
      };
    (0, xm.n)(pm)
  },
  41176: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      CapeMaterialPlugin: () => Km,
      HueTintMaterialPlugin: () => Qm,
      LifeformMaterialPlugin: () => nm,
      OverlayMaterialPlugin: () => Jm
    });
    var hm = fm(41178),
      Am = fm(38070);
    class am extends((0, hm.h)(Am.b)) {}(0, hm.j)(Am.b, am);
    var xm = fm(37250);
    class wm extends((0, hm.h)(xm.d)) {}(0, hm.j)(xm.d, wm);
    var Dm = fm(37905);
    class im extends((0, hm.h)(Dm.f)) {}(0, hm.j)(Dm.f, im);
    var Rm = fm(37488),
      pm = fm(40357),
      Em = fm(37479);
    class om extends((0, hm.h)(Em.i)) {
      constructor(mm, Tm, fm) {
        super(mm, Tm, fm), (0, Rm.e)(mm)
      }
      dispose(mm) {
        (0, Rm.i)(this._material), super.dispose(mm)
      }
    }(0, hm.j)(Em.i, om), (0, Em.k)({
      disableUnusedSpecularTerm: hm.d,
      isLightingDisabled: mm => mm instanceof pm.StandardMaterial && mm.disableLighting
    });
    var Om = fm(38781);
    class Ym extends((0, hm.h)(Om.d)) {}(0, hm.j)(Om.d, Ym);
    var qm = fm(38890),
      jm = fm(37341),
      Vm = fm(38196),
      Im = fm(37294);
    class Km extends((0, hm.h)(qm.d)) {}(0, hm.j)(qm.d, Km);
    class Qm extends((0, hm.h)(jm.b)) {}(0, hm.j)(jm.b, Qm);
    class nm extends((0, hm.h)(Vm.n)) {}(0, hm.j)(Vm.n, nm);
    class Jm extends((0, hm.h)(Im.b)) {}(0, hm.j)(Im.b, Jm)
  },
  41178: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => lm,
      h: () => Vm,
      j: () => Um
    });
    var hm = fm(40357),
      Am = fm(41186),
      am = fm(41220),
      xm = fm(41194),
      wm = fm(37872),
      Dm = fm(37880),
      im = fm(37888),
      Rm = fm(37894),
      pm = fm(37286),
      Em = fm(37290),
      om = fm(41198),
      Om = fm(37274),
      Ym = fm(37276),
      qm = fm(37260);

    function jm(mm, Tm) {
      return Object.assign((function(mm, fm, hm, Am) {
        return Tm(this.featureState, mm, fm, hm, Am)
      }), {
        nO: mm
      })
    }

    function Vm(mm) {
      const Tm = class extends om.e {
          constructor(Tm, fm) {
            const hm = (0, Ym.cb)(Tm),
              Am = hm && (0, Ym.y)(hm, mm.name);
            for (var am = arguments.length, xm = new Array(am > 2 ? am - 2 : 0), wm = 2; wm < am; wm++) xm[wm - 2] = arguments[wm];
            super(Tm, mm.name, mm.priority, Am ? Am.defines : mm.defines(...xm), !1), this.featureState = void 0, this.featureState = fm, this._pluginManager._addPlugin(this), this._enable(!0), (0, Ym.A)(this._material, mm, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return mm.className
          }
          isCompatible(mm) {
            return mm === qm.b.GLSL || mm === qm.b.WGSL
          }
        },
        fm = (0, Om.i)(mm);
      for (const [hm, Am] of Object.entries(Om.d)) {
        const am = mm[hm];
        if (am) {
          const mm = fm[hm];
          Object.defineProperty(Tm.prototype, Am, {
            value: jm(am, mm),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Tm
    }
    class Im extends(Vm(wm.e)) {}
    var Km = fm(39930),
      Qm = fm(41201);
    const nm = new WeakMap;

    function Jm(mm, Tm, fm) {
      let hm = nm.get(fm);
      hm || (hm = new Map, nm.set(fm, hm));
      const {
        url: Am
      } = mm;
      let am = hm.get(Am);
      return am || (am = async function(mm, Tm, fm) {
        var hm;
        const {
          width: Am,
          height: am
        } = mm.getSize(), wm = Math.round(am / Am), Dm = mm.getInternalTexture(), im = Tm && Tm.byteLength === Am * Am * wm * 4 ? Tm : null !== (hm = cm.get(Dm)) && void 0 !== hm ? hm : mm._readPixelsSync(), Rm = new Qm.c(im, Am, Am, wm, Km.d.TEXTUREFORMAT_RGBA, fm, !0, !1, xm.c.NEAREST_NEAREST_MIPLINEAR);
        cm.has(Dm) || (! function(mm, Tm) {
          const fm = Tm.createRawTexture(new Uint8Array(4), 1, 1, Km.d.TEXTUREFORMAT_RGBA, !1, !1, xm.c.NEAREST_SAMPLINGMODE);
          mm._hardwareTexture.release(), Tm.unbindAllTextures(), fm._swapAndDie(mm, !1)
        }(Dm, fm.dO()), cm.set(Dm, im));
        return Rm
      }(mm, Tm, fm), hm.set(Am, am), am.catch((() => {
        hm.delete(Am)
      }))), am
    }
    const cm = new WeakMap;
    var zm = fm(37903);
    class Zm extends(Vm(Dm.j)) {
      constructor(mm, Tm) {
        super(mm, Tm), Tm.textures.forEach(((mm, Tm) => {
          mm.mirror.onLoadObservable.add((mm => {
            this.setTextureArrayData(mm, Tm).catch((mm => {
              console.error(`Failed to build texture array for atlas ${Tm}`, mm)
            }))
          }))
        })), (0, zm.h)(Tm, mm.shaderLanguage)
      }
      async setTextureArrayData(mm, Tm) {
        var fm, hm;
        const Am = this.featureState,
          {
            width: am,
            height: xm
          } = mm.getSize(),
          wm = Am.useWebGL2 ? await Jm(mm, null !== (fm = null === (hm = Am.sources.pixels) || void 0 === hm ? void 0 : hm[Tm]) && void 0 !== fm ? fm : null, this._material.wG()) : null;
        (0, zm.c)(this._material, Am, Tm, wm, am, Math.round(xm / am), this._material.shaderLanguage)
      }
    }
    var km = fm(41203),
      bm = fm(40404),
      Sm = fm(37181),
      em = fm(41212),
      Nm = fm(40527),
      Gm = fm(40391),
      Xm = fm(41166),
      Pm = fm(37661),
      Hm = fm(41218);
    class ym extends km.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Cm = {
      Mesh: em.c,
      TransformNode: Xm.c,
      XO: km.e,
      VertexBuffer: km.g,
      BoundingInfo: bm.b,
      WO: Sm.WO,
      ArenaBuffer: ym,
      SubMesh: Gm.e,
      VertexData: Nm.c,
      MirroredGeometry: Hm.d,
      meshFromArrays: Hm.f,
      plainMeshFromArrays: Hm.h
    };
    (0, Pm.f)(Cm);
    var rm = fm(37488);
    class sm extends(Vm(Rm.g)) {
      constructor(mm, Tm) {
        if (super(mm, Tm), mm instanceof hm.StandardMaterial && Tm.dirLightCount > 0) {
          const Tm = mm,
            fm = Tm._blockDirtyMechanism;
          Tm._blockDirtyMechanism = !0, mm.disableLighting = !0, Tm._blockDirtyMechanism = fm;
          const hm = (0, Ym.cb)(mm);
          hm && (hm.disableLighting = !0, (0, Ym.$)(hm))
        }(0, rm.e)(mm)
      }
      dispose(mm) {
        (0, rm.i)(this._material), super.dispose(mm)
      }
    }

    function lm(mm, Tm) {
      if (!(Tm instanceof hm.StandardMaterial) || Tm.specularTexture) return;
      const {
        r: fm,
        g: Am,
        b: am
      } = Tm.specularColor;
      0 === fm && 0 === Am && 0 === am && (mm.SPECULARTERM = !1)
    }(0, Rm.d)({
      disableUnusedSpecularTerm: lm
    });
    var Mm = fm(37357),
      um = fm(37671);
    const Bm = new RegExp(`^#define ${im.c}\\s*$`, "m");
    class Lm extends(Vm(im.j)) {
      constructor(mm, Tm) {
        super(mm, Tm), this.PO = !1, Tm.ditherOnlyWhileFading && (um.e.add(mm), this.prewarmDitherTwins(mm))
      }
      prewarmDitherTwins(mm) {
        const Tm = new WeakSet;
        mm.onEffectCreatedObservable.add((fm => {
          let {
            effect: hm,
            subMesh: Am
          } = fm;
          if (this.featureState.prewarmingDither || Tm.has(hm)) return;
          Tm.add(hm);
          const am = null === Am || void 0 === Am ? void 0 : Am.getMesh();
          am && !Bm.test(hm.defines) && mm.wG().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(am) || Tm.delete(hm)
          }))
        }))
      }
      prewarmDither(mm) {
        if (this.PO || mm.aJ()) return !1;
        const Tm = new Gm.e(0, 0, 0, 0, 0, mm, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(mm, Tm)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Tm.effect
      }
      dispose(mm) {
        this.PO = !0, super.dispose(mm)
      }
    }
    const tm = new Map;

    function Um(mm, Tm) {
      tm.set(mm, Tm)
    }
    Um(wm.e, Im), Um(Dm.j, Zm), Um(im.j, Lm), Um(Rm.g, sm), (0, pm.d)({
      create: (mm, Tm) => {
        const fm = new hm.StandardMaterial(mm.name, Tm);
        return (0, Mm.s)(mm, fm), fm.detailMap._pluginDefineNames
      },
      write: (mm, Tm, fm) => {
        (0, Mm.W)(mm.mirror, Tm, fm)
      },
      addFeature: (mm, Tm, fm) => {
        const hm = tm.get(Tm.feature);
        if (!hm) throw new Error(`${Tm.feature.name} has no plugin class (registerPluginClass)`);
        new hm(mm.mirror, Tm.state, ...fm)
      },
      texture: (mm, Tm, fm) => {
        let {
          url: hm,
          noMipmap: Am,
          invertY: am,
          samplingMode: wm,
          data: Dm,
          sets: im
        } = fm;
        if (!Dm) {
          const fm = new xm.c(hm, Tm, Am, am, wm);
          return Object.assign(fm, im), void(0, Em.H)(mm, fm)
        }
        const Rm = {},
          pm = new Promise(((mm, Tm) => {
            Rm.onLoad = mm, Rm.onError = (mm, fm) => {
              Tm(new Error(`${Dm.context}: ${(null===fm||void 0===fm?void 0:fm.message)||mm||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: om,
            bytes: Om,
            label: Ym
          } = Dm,
          qm = {
            noMipmap: Am,
            invertY: !1,
            samplingMode: wm,
            ...Rm,
            mimeType: om,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          jm = new xm.c(null, Tm, qm);
        Mm.w.set(jm, pm), Object.assign(jm, im), jm.updateURL(hm, Om);
        const Vm = jm.getInternalTexture();
        Vm && (Vm.label = Ym), mm.uvSet = jm.coordinatesIndex, mm.matrix.set((0, Mm.P)(jm)), (0, Em.H)(mm, jm)
      },
      cube: (mm, Tm, fm) => {
        let {
          rootUrl: hm,
          files: am,
          noMipmap: wm,
          luminance: Dm
        } = fm;
        const {
          samplingMode: im
        } = mm.sampler, Rm = im === (0, Em.y)(wm) ? null : () => {
          (0, Mm.L)(pm, im)
        }, pm = new Am.b(hm, Tm, null, wm, am, Rm, null, (0, Em.w)(Dm));
        pm.coordinatesMode = xm.c.SKYBOX_MODE, (0, Em.H)(mm, pm)
      },
      canvas: (mm, Tm, fm) => {
        let {
          width: hm,
          height: Am,
          mipmaps: wm,
          samplingMode: Dm,
          hasAlpha: im = !1,
          wrap: Rm = xm.c.CLAMP_ADDRESSMODE
        } = fm;
        const pm = new am.b(Tm, {
          width: hm,
          height: Am
        }, mm, wm, Dm);
        pm.hasAlpha = im, pm.wrapU = Rm, pm.wrapV = Rm;
        const Em = (0, Mm.B)(pm);
        return (0, Mm.F)(Em, pm), Em
      }
    })
  },
  41218: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Rm,
      f: () => pm,
      h: () => Em
    });
    var hm = fm(41203),
      Am = fm(40180),
      am = fm(40404),
      xm = fm(40529),
      wm = fm(41212),
      Dm = fm(40527),
      im = fm(37545);
    class Rm extends xm.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (mm, Tm) => {
          this.releaseUnlessInstanced(Tm)
        }, this.onLinked = null
      }
      link(mm) {
        var Tm;
        (0, im.i)(mm), this.model = mm, null === (Tm = this.onLinked) || void 0 === Tm || Tm.call(this, mm)
      }
      relink() {
        this.release();
        const mm = [];
        for (const Am of Object.values(this._vertexBuffers))
          if (!Am.getIsInstanced()) {
            const {
              byteOffset: Tm,
              byteStride: fm,
              type: hm,
              normalized: am
            } = Am;
            mm.push({
              kind: Am.getKind(),
              data: Am.getData(),
              offset: Tm,
              stride: fm,
              components: Am.getSize(),
              glType: hm,
              isNormalized: am
            })
          } const Tm = this._indices.length ? this._indices : null,
          {
            minimum: fm,
            maximum: hm
          } = this.extend;
        this.link(new im.e(mm, Tm, this.getTotalVertices(), new Float64Array(fm.ahm()), new Float64Array(hm.ahm())))
      }
      copy(mm) {
        if (!this.model) return super.copy(mm);
        const Tm = new Rm(mm, this.wG()),
          fm = this.xhm(void 0, !0);
        fm && Tm.setIndices(fm);
        let xm = !1;
        for (const am in this._vertexBuffers) {
          const mm = this._vertexBuffers[am],
            fm = mm.getData();
          if (!fm) continue;
          const wm = mm.getSize(),
            {
              type: Dm,
              byteOffset: im,
              byteStride: Rm,
              normalized: pm
            } = mm;
          xm ||= mm.isUpdatable();
          const Em = mm.getIsInstanced() ? (fm instanceof Array ? 4 * fm.length : fm.byteLength) / Rm : this.getTotalVertices(),
            om = (0, Am.u)(fm, wm, Dm, im, Rm, Em, !0),
            Om = {
              updatable: mm.isUpdatable(),
              stride: wm,
              type: Dm,
              normalized: pm,
              takeBufferOwnership: !0,
              instanced: mm.getIsInstanced()
            };
          Tm.setVerticesBuffer(new hm.g(this.dO(), om, am, Om), Em)
        }
        return Tm._updatable = xm, Tm._boundingInfo = new am.b(this.extend.minimum, this.extend.maximum), Tm.relink(), Tm
      }
      static mergeMeshes(mm, Tm, fm, hm, Am, am) {
        const Dm = mm[0].wG(),
          im = new wm.c(mm[0].name + "_merged", Dm),
          pm = new Rm(xm.d.RandomId(), Dm, void 0, !1, im);
        try {
          if (!wm.c.MergeMeshes(mm, Tm, fm, im, Am, am)) return im.dispose(), null
        } catch (Em) {
          throw im.dispose(), Em
        }
        return pm.relink(), im
      }
      removeVerticesData(mm) {
        this.releaseUnlessInstanced(mm), super.removeVerticesData(mm)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(mm) {
        var Tm;
        mm && null !== (Tm = this.getVertexBuffer(mm)) && void 0 !== Tm && Tm.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, im.m)(this.model), this.model = null)
      }
    }

    function pm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new wm.c(mm, fm);
      const Am = (0, im.g)(Tm),
        {
          positions: am,
          normals: pm,
          uvs: Em,
          indices: om,
          named: Om = {}
        } = Tm,
        Ym = new Dm.c;
      Ym.positions = am, Ym.normals = null !== pm && void 0 !== pm ? pm : null, Ym.uvs = null !== Em && void 0 !== Em ? Em : null, Ym.indices = om;
      const qm = new Rm(xm.d.RandomId(), fm, Ym, !1, hm);
      for (const {
          kind: xm,
          components: wm
        }
        of Am.vertexAttributes) xm in Om && hm.setVerticesData(xm, Om[xm], !1, wm);
      return qm.link(Am), hm
    }

    function Em(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Am = new wm.c(mm, fm),
        {
          positions: am,
          normals: xm,
          uvs: im,
          indices: Rm
        } = Tm;
      return Object.assign(new Dm.c, {
        positions: am,
        normals: xm,
        uvs: im,
        indices: Rm
      }).applyToMesh(Am, hm), Am
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);