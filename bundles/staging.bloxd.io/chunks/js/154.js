export const id = 154;
export const ids = [154];
export const modules = {
  40376: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      openMobLineupPreview: () => Lv,
      openMobPreview: () => Av,
      openPetPreview: () => Hv
    });
    var hv = Pv(39127),
      Sv = Pv(39387),
      ev = Pv(40380),
      gv = Pv(36745),
      pv = Pv(36591),
      dv = Pv(39537),
      Nv = Pv(40408),
      lv = Pv(37989),
      Tv = Pv(36653),
      Wv = Pv(36639),
      wv = Pv(36583),
      av = Pv(37902),
      sv = Pv(37898),
      Cv = Pv(37637),
      iv = Pv(37678),
      cv = Pv(37657),
      Gv = Pv(37304),
      mv = Pv(2599),
      jv = Pv(37114);
    Pv(40410), Pv(39800), Pv(40416);
    const fv = 22,
      Fv = 13,
      Yv = Math.PI - Math.PI / 16,
      nv = 6,
      Ov = Math.PI / 4;
    let Dv = null;
    const Kv = {},
      Vv = new Map;

    function Uv() {
      if (null !== Dv) return Dv;
      const vv = document.createElement("canvas");
      vv.classList.add("MobPreviewCanvas");
      const zv = new hv.d(vv, !0, {
        preserveDrawingBuffer: !0
      });
      zv.SPv = (0, mv.g)().Ma.engine.SPv;
      const Pv = new Sv.b(zv);
      Pv.clearColor = new gv.d(0, 0, 0, 0), Pv.ambientColor = new gv.Color3(1, 1, 1);
      const Nv = new ev.b("OC", Math.PI / 2, Math.PI / 2, fv, pv.fa.Zero(), Pv),
        lv = new dv.e("light", new pv.fa(-.1, 1, -.3), Pv);
      return lv.diffuse = new gv.Color3(1, 1, 1), lv.specular = new gv.Color3(1, 1, 1), lv.groundColor = new gv.Color3(.5, .5, .5), Dv = {
        engine: zv,
        Is: Pv,
        canvas: vv,
        camera: Nv
      }, Dv
    }

    function Rv(vv) {
      return Kv[vv] ??= (0, Cv.t)(vv, Uv().Is, !0).catch((zv => {
        throw delete Kv[vv], zv
      })), Kv[vv]
    }

    function xv(vv) {
      let zv = Vv.get(vv);
      return zv || (zv = Gv.w[vv].loadModel(Uv().Is, !1).then((vv => (vv.uF(!1), vv)), (zv => {
        throw Vv.delete(vv), zv
      })), Vv.set(vv, zv)), zv
    }

    function tv(vv) {
      var zv, Pv, hv;
      let {
        mobType: Sv,
        variation: ev,
        animation: gv
      } = vv, dv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, fv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const nv = null !== (zv = null === dv || void 0 === dv ? void 0 : dv.size) && void 0 !== zv ? zv : 1,
        Ov = null !== (Pv = null === dv || void 0 === dv ? void 0 : dv.cosmetics) && void 0 !== Pv ? Pv : [],
        Dv = null !== (hv = null === dv || void 0 === dv ? void 0 : dv.YF) && void 0 !== hv ? hv : null;
      let Kv = !1,
        Vv = null,
        tv = null;
      const {
        engine: qv,
        Is: Iv
      } = Uv(), Qv = Iv.onBeforeRenderObservable.add((() => {
        var vv;
        null === (vv = tv) || void 0 === vv || vv.render(qv.getDeltaTime())
      })), Zv = null === Dv ? null : xv(Dv).catch((vv => (console.error(`Mob preview: could not load ${Dv}`, vv), null)));
      return Promise.all([Rv(Sv), Zv]).then((vv => {
        var zv, Pv, hv;
        let [dv, Rv] = vv;
        if (Kv) return;
        const xv = (0, mv.g)().Ma.hK,
          {
            hitBoxDimensions: qv
          } = (0, lv.c)(Sv),
          Iv = Fv / Math.max(qv.height, qv.width);
        if (Vv = (0, Cv.k)(Sv, Iv * nv, !0, !0), xv.setPosition(Vv, fv, -qv.height * Iv / 2, 0), xv.setRotationEulerY(Vv, Yv), dv.meshApi instanceof cv.d && Ov.length > 0)
          for (const [Sv, ev] of Ov) dv.meshApi.updatePlayerCosmetic(null, Vv, Sv, ev, !0);
        else dv.meshApi.updateVariation(Vv, Sv, null !== ev && void 0 !== ev ? ev : "default");
        null !== Dv && null !== Rv && function(vv, zv, Pv, hv) {
          var Sv;
          const ev = Gv.w[vv],
            gv = (0, av.n)();
          (0, av.f)(ev, null === (Sv = (0, iv.d)(Pv).meshMetadata.heldItemPositionParams) || void 0 === Sv ? void 0 : Sv.itemOffset, gv);
          const dv = jv.e * gv.pp.y,
            lv = gv.usesQuaternion ? gv.quaternion : pv.Quaternion.FromEulerVector(gv.rotation),
            Tv = new Nv.b(`${zv.name}Hand`, Uv().Is);
          Tv.position.Vzv((0, sv.e)(gv.position, lv, dv, ev.heldModelOffsetY())), Tv.rotationQuaternion = lv, Tv.pp.set(gv.pp.x, dv, gv.pp.z), zv.clone(`${zv.name}Held`, Tv).uF(!0);
          const Wv = (0, mv.g)().Ma.hK;
          Wv.attachTransformNode(Tv, hv, Wv.getNamedNode(hv, "ArmRightMesh"))
        }(Dv, Rv, Sv, Vv), xv.set(Vv, "aOpacity", 1);
        const Qv = null !== (zv = (0, iv.d)(Sv).meshMetadata.lifeformTypeForModelOverride) && void 0 !== zv ? zv : Sv;
        tv = new wv.AnimatorState, tv.thinInstMgr = xv, tv.NK = Vv, tv.Ozv = xv.ePv(Vv, 0), tv.modelLifeformType = Qv, tv.nodeNameAliases = null !== (Pv = null === (hv = (0, Tv.b)(Qv)) || void 0 === hv ? void 0 : hv.nodeNameAliases) && void 0 !== Pv ? Pv : null, tv.startAnimation(gv, Wv.f.Movement)
      })).catch((vv => {
        console.error(`Mob preview: could not load ${Sv}`, vv)
      })), () => {
        Kv = !0, Iv.onBeforeRenderObservable.remove(Qv), null !== Vv && (0, mv.g)().Ma.hK.delete(Vv)
      }
    }

    function qv(vv, zv) {
      return tv({
        mobType: "NPC",
        variation: null,
        animation: vv.animation
      }, vv, zv)
    }

    function Iv(vv) {
      let {
        mobType: zv,
        variation: Pv,
        metaInfo: hv,
        tamed: Sv
      } = vv, ev = !1, gv = null, pv = 0;
      const dv = (0, mv.g)(),
        Nv = dv.Ma.hK,
        lv = vv => {
          pv += Ov * (vv / 1e3) % (2 * Math.PI), Nv.setRotationEulerY(gv, pv)
        };
      return Rv(zv).then((vv => {
        if (ev) return;
        gv = (0, Cv.k)(zv, nv, !0, !0), Nv.setPosition(gv, 0, -nv, 0), vv.meshApi.updateVariation(gv, zv, Pv);
        const pv = {
          wool: "Sheared" !== hv,
          saddle: "Saddled" === hv,
          antlers: "Antlers" === hv,
          collar: Sv
        };
        for (const [zv, Pv] of Object.entries(pv)) Nv.hasGroup(gv, zv) && vv.meshApi.setMeshGroupVisibility(gv, zv, Pv);
        Nv.set(gv, "aOpacity", 1), dv.on("renderTickBegin", lv)
      })).catch((vv => {
        console.error(`Pet preview: could not load ${zv}`, vv)
      })), () => {
        ev = !0, dv.off("renderTickBegin", lv), null !== gv && Nv.delete(gv)
      }
    }
    class Qv {
      constructor(vv, zv) {
        this.place = zv, this.remove = null;
        const {
          engine: Pv,
          Is: hv,
          canvas: Sv
        } = Uv();
        vv.appendChild(Sv), Pv.resize(), Pv.runRenderLoop((() => {
          hv.render()
        }))
      }
      show(vv) {
        var zv;
        null === (zv = this.remove) || void 0 === zv || zv.call(this), this.remove = this.place(vv)
      }
      resize(vv, zv) {
        const {
          engine: Pv,
          canvas: hv
        } = Uv();
        hv.width = vv, hv.height = zv, Pv.resize()
      }
      close() {
        var vv;
        Uv().engine.stopRenderLoop(), null === (vv = this.remove) || void 0 === vv || vv.call(this), this.remove = null
      }
    }
    class Zv {
      constructor(vv) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new Qv(vv, (() => () => {}))
      }
      show(vv) {
        vv.figures !== this.view.figures && this.preload(vv.figures), this.view = vv, this.place()
      }
      resize(vv, zv) {
        this.preview.resize(vv, zv), this.aspect = vv / zv, this.place()
      }
      close() {
        this.preview.close();
        for (const vv of this.placed) null === vv || void 0 === vv || vv.remove();
        this.placed = []
      }
      preload(vv) {
        const zv = () => {};
        Rv("NPC").catch(zv);
        for (const {
            YF: Pv
          }
          of vv) null !== Pv && xv(Pv).catch(zv)
      }
      place() {
        const {
          figures: vv,
          shown: zv
        } = this.view, Pv = vv.map(((Pv, hv) => {
          var Sv;
          const ev = null !== (Sv = this.placed[hv]) && void 0 !== Sv ? Sv : null;
          if (!zv[hv]) return null === ev || void 0 === ev || ev.remove(), null;
          const gv = (pv = (hv + .5) / vv.length, dv = this.aspect, (.5 - pv) * (2 * fv * Math.tan(Uv().camera.fov / 2)) * dv);
          var pv, dv;
          return null !== ev && ev.figure === Pv && ev.x === gv ? ev : (null === ev || void 0 === ev || ev.remove(), {
            figure: Pv,
            x: gv,
            remove: qv(Pv, gv)
          })
        }));
        for (const hv of this.placed.slice(vv.length)) null === hv || void 0 === hv || hv.remove();
        this.placed = Pv
      }
    }

    function Av(vv) {
      return new Qv(vv, tv)
    }

    function Lv(vv) {
      return new Zv(vv)
    }

    function Hv(vv) {
      return new Qv(vv, Iv)
    }
  },
  38330: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Wv
    });
    var hv = Pv(36665),
      Sv = Pv(36676),
      ev = Pv(36910),
      gv = Pv(36681),
      pv = Pv(36668);

    function dv(vv) {
      return `\n\t\t\t\t${(0,pv.y)(vv,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, pv.F)(vv, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, pv.F)(vv, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, pv.n)(vv, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Nv(vv, zv) {
      let Pv = (0, pv.vb)(vv, "skele" + (zv - 1));
      for (let Sv = zv - 2; Sv >= 0; Sv--) Pv = (0, pv.mb)(vv, `boneIdx == ${Sv}`, (0, pv.vb)(vv, `skele${Sv}`), Pv);
      const hv = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,pv.F)(vv,"int","boneIdx",(0,pv.qb)(vv,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,pv.F)(vv,"vec3","bone",Pv)}\n\t\t\t\t${(0,pv.F)(vv,"vec2","pivot",(0,pv.n)(vv,"vec2","0.0",`${(0,pv.Bb)(vv,"position")}.z`))}\n\t\t\t\t${(0,pv._)(vv)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${hv}));`:`positionUpdated.yz += ${hv};`}\n\t\t`
    }

    function lv(vv) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,pv.n)(vv,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const Tv = {
        x: 0,
        y: 0,
        z: 0,
        Evv(vv, zv) {
          return this.x = vv[zv], this.y = vv[zv + 1], this.z = vv[zv + 2], this
        }
      },
      Wv = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (vv, zv) => ({
          ...(0, hv.d)("CAPE"),
          BLOXD_CAPE_BONES: `${vv}`,
          BLOXD_CAPE_MAX_Y: (0, Sv.gb)(zv)
        }),
        getUniforms(vv) {
          return (0, ev.c)(function(vv) {
            const zv = [];
            for (let Pv = 0; Pv < vv; Pv++) zv.push({
              name: `skele${Pv}`,
              type: "highp vec3"
            });
            return zv
          }(this.skeleLen), "vertex", vv)
        },
        bind(vv) {
          for (let zv = 0; zv < this.skeleLen; zv++) vv.updateVector3(`skele${zv}`, Tv.Evv(this.skele, 3 * zv))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(vv, zv) {
          return "vertex" !== vv ? null : {
            CUSTOM_VERTEX_DEFINITIONS: dv(zv),
            CUSTOM_VERTEX_UPDATE_POSITION: Nv(zv, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: lv(zv)
          }
        }
      };
    (0, gv.m)(Wv)
  },
  38226: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => lv,
      g: () => Tv
    });
    var hv = Pv(36665),
      Sv = Pv(36910),
      ev = Pv(36668),
      gv = Pv(36681);
    const pv = "bloxdTextLodBias",
      dv = [{
        name: pv,
        type: "float"
      }],
      Nv = "bloxdTextSample",
      lv = {
        planes: -.5,
        boards: -.5
      },
      Tv = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, hv.d)("TEXT_SAMPLER"),
        getUniforms: vv => (0, Sv.c)(dv, "fragment", vv),
        bind(vv) {
          vv.updateFloat(pv, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(vv, zv) {
          if ("fragment" !== vv) return null;
          const Pv = (0, ev.M)(zv, `vec4 ${Nv}(sampler2D s, vec2 uv, float bias)`, `fn ${Nv}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            hv = (0, ev.M)(zv, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Sv = `${(0,ev.U)(zv,"vDiffuseUV")} + uvOffset`,
            gv = (0, ev.M)(zv, `${Nv}(diffuseSampler, ${Sv}, ${(0,ev.vb)(zv,pv)})`, `${Nv}(diffuseSampler, diffuseSamplerSampler, ${Sv}, ${(0,ev.vb)(zv,pv)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${Pv} {\n\t\t\t\t\t${(0,ev.F)(zv,"vec4","texel",hv)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,ev.n)(zv,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,ev.n)(zv,"vec3","0.0")}, ${(0,ev.n)(zv,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, ev.H)(zv)]: `baseColor = ${gv};`
          }
        }
      };
    (0, gv.m)(Tv)
  },
  40416: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      CapeMaterialPlugin: () => mv,
      HueTintMaterialPlugin: () => jv,
      LifeformMaterialPlugin: () => fv,
      OverlayMaterialPlugin: () => Fv
    });
    var hv = Pv(40423),
      Sv = Pv(37536);
    class ev extends((0, hv.e)(Sv.b)) {}(0, hv.i)(Sv.b, ev);
    var gv = Pv(36659);
    class pv extends((0, hv.e)(gv.h)) {}(0, hv.i)(gv.h, pv);
    var dv = Pv(37384);
    class Nv extends((0, hv.e)(dv.e)) {}(0, hv.i)(dv.e, Nv);
    var lv = Pv(36898),
      Tv = Pv(39560),
      Wv = Pv(36895);
    class wv extends((0, hv.e)(Wv.h)) {
      constructor(vv, zv, Pv) {
        super(vv, zv, Pv), (0, lv.j)(vv)
      }
      dispose(vv) {
        (0, lv.k)(this._material), super.dispose(vv)
      }
    }(0, hv.i)(Wv.h, wv), (0, Wv.j)({
      disableUnusedSpecularTerm: hv.b,
      isLightingDisabled: vv => vv instanceof Tv.StandardMaterial && vv.disableLighting
    });
    var av = Pv(38226);
    class sv extends((0, hv.e)(av.g)) {}(0, hv.i)(av.g, sv);
    var Cv = Pv(38330),
      iv = Pv(36757),
      cv = Pv(37662),
      Gv = Pv(36708);
    class mv extends((0, hv.e)(Cv.d)) {}(0, hv.i)(Cv.d, mv);
    class jv extends((0, hv.e)(iv.e)) {}(0, hv.i)(iv.e, jv);
    class fv extends((0, hv.e)(cv.q)) {}(0, hv.i)(cv.q, fv);
    class Fv extends((0, hv.e)(Gv.c)) {}(0, hv.i)(Gv.c, Fv)
  },
  40423: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Lv,
      e: () => cv,
      i: () => Ev
    });
    var hv = Pv(39560),
      Sv = Pv(40430),
      ev = Pv(40471),
      gv = Pv(40435),
      pv = Pv(37341),
      dv = Pv(37349),
      Nv = Pv(37358),
      lv = Pv(37366),
      Tv = Pv(36697),
      Wv = Pv(36705),
      wv = Pv(40444),
      av = Pv(36681),
      sv = Pv(36685),
      Cv = Pv(36668);

    function iv(vv, zv) {
      return Object.assign((function(vv, Pv, hv, Sv) {
        return zv(this.featureState, vv, Pv, hv, Sv)
      }), {
        Ew: vv
      })
    }

    function cv(vv) {
      const zv = class extends wv.e {
          constructor(zv, Pv) {
            const hv = (0, sv.bb)(zv),
              Sv = hv && (0, sv.x)(hv, vv.name);
            for (var ev = arguments.length, gv = new Array(ev > 2 ? ev - 2 : 0), pv = 2; pv < ev; pv++) gv[pv - 2] = arguments[pv];
            super(zv, vv.name, vv.priority, Sv ? Sv.defines : vv.defines(...gv), !1), this.featureState = void 0, this.featureState = Pv, this._pluginManager._addPlugin(this), this._enable(!0), (0, sv.A)(this._material, vv, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return vv.className
          }
          isCompatible(vv) {
            return vv === Cv.d.GLSL || vv === Cv.d.WGSL
          }
        },
        Pv = (0, av.g)(vv);
      for (const [hv, Sv] of Object.entries(av.d)) {
        const ev = vv[hv];
        if (ev) {
          const vv = Pv[hv];
          Object.defineProperty(zv.prototype, Sv, {
            value: iv(ev, vv),
            writable: !0,
            configurable: !0
          })
        }
      }
      return zv
    }
    class Gv extends(cv(pv.c)) {}
    var mv = Pv(39127),
      jv = Pv(40452);
    const fv = new WeakMap;

    function Fv(vv, zv, Pv) {
      let hv = fv.get(Pv);
      hv || (hv = new Map, fv.set(Pv, hv));
      const {
        url: Sv
      } = vv;
      let ev = hv.get(Sv);
      return ev || (ev = async function(vv, zv, Pv) {
        const {
          width: hv,
          height: Sv
        } = vv.getSize(), ev = Math.round(Sv / hv), pv = zv && zv.byteLength === hv * hv * ev * 4 ? zv : vv._readPixelsSync();
        return new jv.c(pv, hv, hv, ev, mv.d.TEXTUREFORMAT_RGBA, Pv, !0, !1, gv.d.NEAREST_NEAREST_MIPLINEAR)
      }(vv, zv, Pv), hv.set(Sv, ev), ev.catch((() => {
        hv.delete(Sv)
      }))), ev
    }
    var Yv = Pv(37375);
    class nv extends(cv(dv.g)) {
      constructor(vv, zv) {
        super(vv, zv), zv.textures.forEach(((vv, zv) => {
          vv.mirror.onLoadObservable.add((vv => {
            this.setTextureArrayData(vv, zv).catch((vv => {
              console.error(`Failed to build texture array for atlas ${zv}`, vv)
            }))
          }))
        })), (0, Yv.i)(zv, vv.shaderLanguage)
      }
      async setTextureArrayData(vv, zv) {
        var Pv, hv;
        const Sv = this.featureState,
          {
            width: ev,
            height: gv
          } = vv.getSize(),
          pv = Sv.useWebGL2 ? await Fv(vv, null !== (Pv = null === (hv = Sv.sources.pixels) || void 0 === hv ? void 0 : hv[zv]) && void 0 !== Pv ? Pv : null, this._material.rD()) : null;
        (0, Yv.d)(this._material, Sv, zv, pv, ev, Math.round(gv / ev), this._material.shaderLanguage)
      }
    }
    var Ov = Pv(40454),
      Dv = Pv(39609),
      Kv = Pv(36591),
      Vv = Pv(40460),
      Uv = Pv(39720),
      Rv = Pv(39598),
      xv = Pv(40408),
      tv = Pv(37086),
      qv = Pv(40469);
    class Iv extends Ov.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Qv = {
      Mesh: Vv.e,
      TransformNode: xv.b,
      Sa: Ov.e,
      VertexBuffer: Ov.i,
      BoundingInfo: Dv.e,
      fa: Kv.fa,
      ArenaBuffer: Iv,
      SubMesh: Rv.c,
      VertexData: Uv.d,
      MirroredGeometry: qv.d,
      meshFromArrays: qv.g,
      plainMeshFromArrays: qv.i
    };
    (0, tv.d)(Qv);
    var Zv = Pv(36898);
    class Av extends(cv(lv.i)) {
      constructor(vv, zv) {
        if (super(vv, zv), vv instanceof hv.StandardMaterial && zv.dirLightCount > 0) {
          const zv = vv,
            Pv = zv._blockDirtyMechanism;
          zv._blockDirtyMechanism = !0, vv.disableLighting = !0, zv._blockDirtyMechanism = Pv;
          const hv = (0, sv.bb)(vv);
          hv && (hv.disableLighting = !0, (0, sv.Z)(hv))
        }(0, Zv.j)(vv)
      }
      dispose(vv) {
        (0, Zv.k)(this._material), super.dispose(vv)
      }
    }

    function Lv(vv, zv) {
      if (!(zv instanceof hv.StandardMaterial) || zv.specularTexture) return;
      const {
        r: Pv,
        g: Sv,
        b: ev
      } = zv.specularColor;
      0 === Pv && 0 === Sv && 0 === ev && (vv.SPECULARTERM = !1)
    }(0, lv.h)({
      disableUnusedSpecularTerm: Lv
    });
    var Hv = Pv(36775),
      Mv = Pv(37095);
    const yv = new RegExp(`^#define ${Nv.b}\\s*$`, "m");
    class Bv extends(cv(Nv.g)) {
      constructor(vv, zv) {
        super(vv, zv), this.ea = !1, zv.ditherOnlyWhileFading && (Mv.h.add(vv), this.prewarmDitherTwins(vv))
      }
      prewarmDitherTwins(vv) {
        const zv = new WeakSet;
        vv.onEffectCreatedObservable.add((Pv => {
          let {
            effect: hv,
            subMesh: Sv
          } = Pv;
          if (this.featureState.prewarmingDither || zv.has(hv)) return;
          zv.add(hv);
          const ev = null === Sv || void 0 === Sv ? void 0 : Sv.getMesh();
          ev && !yv.test(hv.defines) && vv.rD().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(ev) || zv.delete(hv)
          }))
        }))
      }
      prewarmDither(vv) {
        if (this.ea || vv.mzv()) return !1;
        const zv = new Rv.c(0, 0, 0, 0, 0, vv, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(vv, zv)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== zv.effect
      }
      dispose(vv) {
        this.ea = !0, super.dispose(vv)
      }
    }
    const Jv = new Map;

    function Ev(vv, zv) {
      Jv.set(vv, zv)
    }
    Ev(pv.c, Gv), Ev(dv.g, nv), Ev(Nv.g, Bv), Ev(lv.i, Av), (0, Tv.c)({
      create: (vv, zv) => {
        const Pv = new hv.StandardMaterial(vv.name, zv);
        return (0, Hv.m)(vv, Pv), Pv.detailMap._pluginDefineNames
      },
      write: (vv, zv, Pv) => {
        (0, Hv.M)(vv.mirror, zv, Pv)
      },
      addFeature: (vv, zv, Pv) => {
        const hv = Jv.get(zv.feature);
        if (!hv) throw new Error(`${zv.feature.name} has no plugin class (registerPluginClass)`);
        new hv(vv.mirror, zv.state, ...Pv)
      },
      texture: (vv, zv, Pv) => {
        let {
          url: hv,
          noMipmap: Sv,
          invertY: ev,
          samplingMode: pv,
          data: dv,
          sets: Nv
        } = Pv;
        if (!dv) {
          const Pv = new gv.d(hv, zv, Sv, ev, pv);
          return Object.assign(Pv, Nv), void(0, Wv.K)(vv, Pv)
        }
        const lv = {},
          Tv = new Promise(((vv, zv) => {
            lv.onLoad = vv, lv.onError = (vv, Pv) => {
              zv(new Error(`${dv.context}: ${(null===Pv||void 0===Pv?void 0:Pv.message)||vv||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: wv,
            bytes: av,
            label: sv
          } = dv,
          Cv = {
            noMipmap: Sv,
            invertY: !1,
            samplingMode: pv,
            ...lv,
            mimeType: wv,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          iv = new gv.d(null, zv, Cv);
        Hv.q.set(iv, Tv), Object.assign(iv, Nv), iv.updateURL(hv, av);
        const cv = iv.getInternalTexture();
        cv && (cv.label = sv), vv.uvSet = iv.coordinatesIndex, vv.matrix.set((0, Hv.F)(iv)), (0, Wv.K)(vv, iv)
      },
      cube: (vv, zv, Pv) => {
        let {
          rootUrl: hv,
          files: ev,
          noMipmap: pv,
          luminance: dv
        } = Pv;
        const {
          samplingMode: Nv
        } = vv.sampler, lv = Nv === (0, Wv.z)(pv) ? null : () => {
          (0, Hv.C)(Tv, Nv)
        }, Tv = new Sv.b(hv, zv, null, pv, ev, lv, null, (0, Wv.v)(dv));
        Tv.coordinatesMode = gv.d.SKYBOX_MODE, (0, Wv.K)(vv, Tv)
      },
      canvas: (vv, zv, Pv) => {
        let {
          width: hv,
          height: Sv,
          mipmaps: pv,
          samplingMode: dv,
          hasAlpha: Nv = !1,
          wrap: lv = gv.d.CLAMP_ADDRESSMODE
        } = Pv;
        const Tv = new ev.b(zv, {
          width: hv,
          height: Sv
        }, vv, pv, dv);
        Tv.hasAlpha = Nv, Tv.wrapU = lv, Tv.wrapV = lv;
        const Wv = (0, Hv.v)(Tv);
        return (0, Hv.w)(Wv, Tv), Wv
      }
    })
  },
  40469: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => lv,
      g: () => Tv,
      i: () => Wv
    });
    var hv = Pv(40454),
      Sv = Pv(39361),
      ev = Pv(39609),
      gv = Pv(39728),
      pv = Pv(40460),
      dv = Pv(39720),
      Nv = Pv(36964);
    class lv extends gv.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (vv, zv) => {
          this.releaseUnlessInstanced(zv)
        }, this.onLinked = null
      }
      link(vv) {
        var zv;
        (0, Nv.p)(vv), this.model = vv, null === (zv = this.onLinked) || void 0 === zv || zv.call(this, vv)
      }
      relink() {
        this.release();
        const vv = [];
        for (const Sv of Object.values(this._vertexBuffers))
          if (!Sv.getIsInstanced()) {
            const {
              byteOffset: zv,
              byteStride: Pv,
              type: hv,
              normalized: ev
            } = Sv;
            vv.push({
              kind: Sv.getKind(),
              data: Sv.getData(),
              offset: zv,
              stride: Pv,
              components: Sv.getSize(),
              glType: hv,
              isNormalized: ev
            })
          } const zv = this._indices.length ? this._indices : null,
          {
            minimum: Pv,
            maximum: hv
          } = this.extend;
        this.link(new Nv.g(vv, zv, this.getTotalVertices(), new Float64Array(Pv.pPv()), new Float64Array(hv.pPv())))
      }
      copy(vv) {
        if (!this.model) return super.copy(vv);
        const zv = new lv(vv, this.rD()),
          Pv = this.dPv(void 0, !0);
        Pv && zv.setIndices(Pv);
        let gv = !1;
        for (const ev in this._vertexBuffers) {
          const vv = this._vertexBuffers[ev],
            Pv = vv.getData();
          if (!Pv) continue;
          const pv = vv.getSize(),
            {
              type: dv,
              byteOffset: Nv,
              byteStride: lv,
              normalized: Tv
            } = vv;
          gv ||= vv.isUpdatable();
          const Wv = vv.getIsInstanced() ? (Pv instanceof Array ? 4 * Pv.length : Pv.byteLength) / lv : this.getTotalVertices(),
            wv = (0, Sv.t)(Pv, pv, dv, Nv, lv, Wv, !0),
            av = {
              updatable: vv.isUpdatable(),
              stride: pv,
              type: dv,
              normalized: Tv,
              takeBufferOwnership: !0,
              instanced: vv.getIsInstanced()
            };
          zv.setVerticesBuffer(new hv.i(this.ma(), wv, ev, av), Wv)
        }
        return zv._updatable = gv, zv._boundingInfo = new ev.e(this.extend.minimum, this.extend.maximum), zv.relink(), zv
      }
      static mergeMeshes(vv, zv, Pv, hv, Sv, ev) {
        const dv = vv[0].rD(),
          Nv = new pv.e(vv[0].name + "_merged", dv),
          Tv = new lv(gv.b.RandomId(), dv, void 0, !1, Nv);
        try {
          if (!pv.e.MergeMeshes(vv, zv, Pv, Nv, Sv, ev)) return Nv.dispose(), null
        } catch (Wv) {
          throw Nv.dispose(), Wv
        }
        return Tv.relink(), Nv
      }
      removeVerticesData(vv) {
        this.releaseUnlessInstanced(vv), super.removeVerticesData(vv)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(vv) {
        var zv;
        vv && null !== (zv = this.getVertexBuffer(vv)) && void 0 !== zv && zv.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Nv.A)(this.model), this.model = null)
      }
    }

    function Tv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pv.e(vv, Pv);
      const Sv = (0, Nv.l)(zv),
        {
          positions: ev,
          normals: Tv,
          uvs: Wv,
          indices: wv,
          named: av = {}
        } = zv,
        sv = new dv.d;
      sv.positions = ev, sv.normals = null !== Tv && void 0 !== Tv ? Tv : null, sv.uvs = null !== Wv && void 0 !== Wv ? Wv : null, sv.indices = wv;
      const Cv = new lv(gv.b.RandomId(), Pv, sv, !1, hv);
      for (const {
          kind: gv,
          components: pv
        }
        of Sv.vertexAttributes) gv in av && hv.setVerticesData(gv, av[gv], !1, pv);
      return Cv.link(Sv), hv
    }

    function Wv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Sv = new pv.e(vv, Pv),
        {
          positions: ev,
          normals: gv,
          uvs: Nv,
          indices: lv
        } = zv;
      return Object.assign(new dv.d, {
        positions: ev,
        normals: gv,
        uvs: Nv,
        indices: lv
      }).applyToMesh(Sv, hv), Sv
    }
  },
  8501: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => lv,
      c: () => pv,
      f: () => dv
    });
    var hv = Pv(2160),
      Sv = Pv(1226),
      ev = Pv(2169);
    const gv = ",";

    function pv(vv) {
      if (!vv) return [];
      const zv = new Set,
        Pv = [];
      for (const hv of vv.split(gv)) {
        const vv = hv.trim();
        if ((0, ev.n)(vv) && !zv.has(vv) && (zv.add(vv), Pv.push(vv), Pv.length >= Sv.m)) break
      }
      return Pv
    }

    function dv(vv) {
      const zv = new Set,
        Pv = [];
      for (const hv of vv)
        if ((0, ev.n)(hv) && !zv.has(hv) && (zv.add(hv), Pv.push(hv), Pv.length >= Sv.m)) break;
      return Pv.join(gv)
    }

    function Nv() {
      return dv(ev.i)
    }

    function lv(vv) {
      var zv;
      return "emote" === vv ? Nv() : null !== (zv = Tv[vv][0]) && void 0 !== zv ? zv : Wv[vv]
    }
    const Tv = Sv.u.reduce(((vv, zv) => {
        const Pv = [];
        for (const ev in hv.i[zv]) {
          var Sv;
          "default" === (null === (Sv = (0, hv.o)(zv, ev)) || void 0 === Sv ? void 0 : Sv.cosmeticPack) && Pv.push(ev)
        }
        return vv[zv] = Pv, vv
      }), {}),
      Wv = Sv.u.reduce(((vv, zv) => (vv[zv] = Object.keys(hv.i[zv])[0], vv)), {})
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);