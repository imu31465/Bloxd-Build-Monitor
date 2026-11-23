export const id = 246;
export const ids = [246];
export const modules = {
  41091: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      openMobLineupPreview: () => Wk,
      openMobPreview: () => ck,
      openPetPreview: () => fk
    });
    var Xk = Ik(39806),
      Tk = Ik(40082),
      ik = Ik(41093),
      yk = Ik(37327),
      lk = Ik(37144),
      ak = Ik(40252),
      qk = Ik(41114),
      Lk = Ik(38460),
      tk = Ik(37227),
      Zk = Ik(37215),
      jk = Ik(37139),
      ek = Ik(38361),
      wk = Ik(38353),
      Hk = Ik(38105),
      Jk = Ik(38143),
      xk = Ik(38118),
      Pk = Ik(37794),
      Kk = Ik(2700),
      Qk = Ik(37657);
    Ik(41117), Ik(40498), Ik(41123);
    const sk = 22,
      Vk = 13,
      zk = Math.PI - Math.PI / 16,
      Sk = 6,
      vk = Math.PI / 4;
    let Ek = null;
    const Ok = {},
      nk = new Map;

    function Gk() {
      if (null !== Ek) return Ek;
      const kk = document.createElement("canvas");
      kk.classList.add("MobPreviewCanvas");
      const Fk = new Xk.c(kk, !0, {
        preserveDrawingBuffer: !0
      });
      Fk.IXk = (0, Kk.e)().Xw.engine.IXk;
      const Ik = new Tk.c(Fk);
      Ik.clearColor = new yk.b(0, 0, 0, 0), Ik.ambientColor = new yk.Color3(1, 1, 1);
      const qk = new ik.c("pH", Math.PI / 2, Math.PI / 2, sk, lk.Ge.Zero(), Ik),
        Lk = new ak.d("light", new lk.Ge(-.1, 1, -.3), Ik);
      return Lk.diffuse = new yk.Color3(1, 1, 1), Lk.specular = new yk.Color3(1, 1, 1), Lk.groundColor = new yk.Color3(.5, .5, .5), Ek = {
        engine: Fk,
        Yw: Ik,
        canvas: kk,
        camera: qk
      }, Ek
    }

    function pk(kk) {
      return Ok[kk] ??= (0, Hk.t)(kk, Gk().Yw, !0).catch((Fk => {
        throw delete Ok[kk], Fk
      })), Ok[kk]
    }

    function uk(kk) {
      let Fk = nk.get(kk);
      return Fk || (Fk = Pk.E[kk].loadModel(Gk().Yw, !1).then((kk => (kk.Av(!1), kk)), (Fk => {
        throw nk.delete(kk), Fk
      })), nk.set(kk, Fk)), Fk
    }

    function bk(kk) {
      var Fk, Ik, Xk;
      let {
        mobType: Tk,
        variation: ik,
        animation: yk
      } = kk, ak = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, sk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Sk = null !== (Fk = null === ak || void 0 === ak ? void 0 : ak.size) && void 0 !== Fk ? Fk : 1,
        vk = null !== (Ik = null === ak || void 0 === ak ? void 0 : ak.cosmetics) && void 0 !== Ik ? Ik : [],
        Ek = null !== (Xk = null === ak || void 0 === ak ? void 0 : ak.VK) && void 0 !== Xk ? Xk : null;
      let Ok = !1,
        nk = null,
        bk = null;
      const {
        engine: Rk,
        Yw: Uk
      } = Gk(), Ck = Uk.onBeforeRenderObservable.add((() => {
        var kk;
        null === (kk = bk) || void 0 === kk || kk.render(Rk.getDeltaTime())
      })), Nk = null === Ek ? null : uk(Ek).catch((kk => (console.error(`Mob preview: could not load ${Ek}`, kk), null)));
      return Promise.all([pk(Tk), Nk]).then((kk => {
        var Fk, Ik, Xk;
        let [ak, pk] = kk;
        if (Ok) return;
        const uk = (0, Kk.e)().Xw.kp,
          {
            hitBoxDimensions: Rk
          } = (0, Lk.c)(Tk),
          Uk = Vk / Math.max(Rk.height, Rk.width);
        if (nk = (0, Hk.k)(Tk, Uk * Sk, !0, !0), uk.setPosition(nk, sk, -Rk.height * Uk / 2, 0), uk.setRotationEulerY(nk, zk), ak.meshApi instanceof xk.b && vk.length > 0)
          for (const [Tk, ik] of vk) ak.meshApi.updatePlayerCosmetic(null, nk, Tk, ik, !0);
        else ak.meshApi.updateVariation(nk, Tk, null !== ik && void 0 !== ik ? ik : "default");
        null !== Ek && null !== pk && function(kk, Fk, Ik, Xk) {
          var Tk;
          const ik = Pk.E[kk],
            yk = (0, ek.i)();
          (0, ek.g)(ik, null === (Tk = (0, Jk.d)(Ik).meshMetadata.heldItemPositionParams) || void 0 === Tk ? void 0 : Tk.itemOffset, yk);
          const ak = Qk.e * yk.ci.y,
            Lk = yk.usesQuaternion ? yk.quaternion : lk.Quaternion.FromEulerVector(yk.rotation),
            tk = new qk.b(`${Fk.name}Hand`, Gk().Yw);
          tk.position.kS((0, wk.c)(yk.position, Lk, ak, ik.heldModelOffsetY())), tk.rotationQuaternion = Lk, tk.ci.set(yk.ci.x, ak, yk.ci.z), Fk.clone(`${Fk.name}Held`, tk).Av(!0);
          const Zk = (0, Kk.e)().Xw.kp;
          Zk.attachTransformNode(tk, Xk, Zk.getNamedNode(Xk, "ArmRightMesh"))
        }(Ek, pk, Tk, nk), uk.set(nk, "aOpacity", 1);
        const Ck = null !== (Fk = (0, Jk.d)(Tk).meshMetadata.lifeformTypeForModelOverride) && void 0 !== Fk ? Fk : Tk;
        bk = new jk.AnimatorState, bk.thinInstMgr = uk, bk.Ip = nk, bk.vIk = uk.XXk(nk, 0), bk.modelLifeformType = Ck, bk.nodeNameAliases = null !== (Ik = null === (Xk = (0, tk.e)(Ck)) || void 0 === Xk ? void 0 : Xk.nodeNameAliases) && void 0 !== Ik ? Ik : null, bk.startAnimation(yk, Zk.c.Movement)
      })).catch((kk => {
        console.error(`Mob preview: could not load ${Tk}`, kk)
      })), () => {
        Ok = !0, Uk.onBeforeRenderObservable.remove(Ck), null !== nk && (0, Kk.e)().Xw.kp.delete(nk)
      }
    }

    function Rk(kk, Fk) {
      return bk({
        mobType: "NPC",
        variation: null,
        animation: kk.animation
      }, kk, Fk)
    }

    function Uk(kk) {
      let {
        mobType: Fk,
        variation: Ik,
        metaInfo: Xk,
        tamed: Tk
      } = kk, ik = !1, yk = null, lk = 0;
      const ak = (0, Kk.e)(),
        qk = ak.Xw.kp,
        Lk = kk => {
          lk += vk * (kk / 1e3) % (2 * Math.PI), qk.setRotationEulerY(yk, lk)
        };
      return pk(Fk).then((kk => {
        if (ik) return;
        yk = (0, Hk.k)(Fk, Sk, !0, !0), qk.setPosition(yk, 0, -Sk, 0), kk.meshApi.updateVariation(yk, Fk, Ik);
        const lk = {
          wool: "Sheared" !== Xk,
          saddle: "Saddled" === Xk,
          antlers: "Antlers" === Xk,
          collar: Tk
        };
        for (const [Fk, Ik] of Object.entries(lk)) qk.hasGroup(yk, Fk) && kk.meshApi.setMeshGroupVisibility(yk, Fk, Ik);
        qk.set(yk, "aOpacity", 1), ak.on("renderTickBegin", Lk)
      })).catch((kk => {
        console.error(`Pet preview: could not load ${Fk}`, kk)
      })), () => {
        ik = !0, ak.off("renderTickBegin", Lk), null !== yk && qk.delete(yk)
      }
    }
    class Ck {
      constructor(kk, Fk) {
        this.place = Fk, this.remove = null;
        const {
          engine: Ik,
          Yw: Xk,
          canvas: Tk
        } = Gk();
        kk.appendChild(Tk), Ik.resize(), Ik.runRenderLoop((() => {
          Xk.render()
        }))
      }
      show(kk) {
        var Fk;
        null === (Fk = this.remove) || void 0 === Fk || Fk.call(this), this.remove = this.place(kk)
      }
      resize(kk, Fk) {
        const {
          engine: Ik,
          canvas: Xk
        } = Gk();
        Xk.width = kk, Xk.height = Fk, Ik.resize()
      }
      close() {
        var kk;
        Gk().engine.stopRenderLoop(), null === (kk = this.remove) || void 0 === kk || kk.call(this), this.remove = null
      }
    }
    class Nk {
      constructor(kk) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new Ck(kk, (() => () => {}))
      }
      show(kk) {
        kk.figures !== this.view.figures && this.preload(kk.figures), this.view = kk, this.place()
      }
      resize(kk, Fk) {
        this.preview.resize(kk, Fk), this.aspect = kk / Fk, this.place()
      }
      close() {
        this.preview.close();
        for (const kk of this.placed) null === kk || void 0 === kk || kk.remove();
        this.placed = []
      }
      preload(kk) {
        const Fk = () => {};
        pk("NPC").catch(Fk);
        for (const {
            VK: Ik
          }
          of kk) null !== Ik && uk(Ik).catch(Fk)
      }
      place() {
        const {
          figures: kk,
          shown: Fk
        } = this.view, Ik = kk.map(((Ik, Xk) => {
          var Tk;
          const ik = null !== (Tk = this.placed[Xk]) && void 0 !== Tk ? Tk : null;
          if (!Fk[Xk]) return null === ik || void 0 === ik || ik.remove(), null;
          const yk = (lk = (Xk + .5) / kk.length, ak = this.aspect, (.5 - lk) * (2 * sk * Math.tan(Gk().camera.fov / 2)) * ak);
          var lk, ak;
          return null !== ik && ik.figure === Ik && ik.x === yk ? ik : (null === ik || void 0 === ik || ik.remove(), {
            figure: Ik,
            x: yk,
            remove: Rk(Ik, yk)
          })
        }));
        for (const Xk of this.placed.slice(kk.length)) null === Xk || void 0 === Xk || Xk.remove();
        this.placed = Ik
      }
    }

    function ck(kk) {
      return new Ck(kk, bk)
    }

    function Wk(kk) {
      return new Nk(kk)
    }

    function fk(kk) {
      return new Ck(kk, Uk)
    }
  },
  38791: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Zk
    });
    var Xk = Ik(37243),
      Tk = Ik(37253),
      ik = Ik(37475),
      yk = Ik(37255),
      lk = Ik(37249);

    function ak(kk) {
      return `\n\t\t\t\t${(0,lk.y)(kk,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, lk.G)(kk, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, lk.G)(kk, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, lk.m)(kk, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function qk(kk, Fk) {
      let Ik = (0, lk.Mb)(kk, "skele" + (Fk - 1));
      for (let Tk = Fk - 2; Tk >= 0; Tk--) Ik = (0, lk.yb)(kk, `boneIdx == ${Tk}`, (0, lk.Mb)(kk, `skele${Tk}`), Ik);
      const Xk = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,lk.G)(kk,"int","boneIdx",(0,lk.Gb)(kk,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,lk.G)(kk,"vec3","bone",Ik)}\n\t\t\t\t${(0,lk.G)(kk,"vec2","pivot",(0,lk.m)(kk,"vec2","0.0",`${(0,lk.Wb)(kk,"position")}.z`))}\n\t\t\t\t${(0,lk.eb)(kk)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Xk}));`:`positionUpdated.yz += ${Xk};`}\n\t\t`
    }

    function Lk(kk) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,lk.m)(kk,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const tk = {
        x: 0,
        y: 0,
        z: 0,
        hFk(kk, Fk) {
          return this.x = kk[Fk], this.y = kk[Fk + 1], this.z = kk[Fk + 2], this
        }
      },
      Zk = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (kk, Fk) => ({
          ...(0, Xk.b)("CAPE"),
          BLOXD_CAPE_BONES: `${kk}`,
          BLOXD_CAPE_MAX_Y: (0, Tk.ob)(Fk)
        }),
        getUniforms(kk) {
          return (0, ik.e)(function(kk) {
            const Fk = [];
            for (let Ik = 0; Ik < kk; Ik++) Fk.push({
              name: `skele${Ik}`,
              type: "highp vec3"
            });
            return Fk
          }(this.skeleLen), "vertex", kk)
        },
        bind(kk) {
          for (let Fk = 0; Fk < this.skeleLen; Fk++) kk.updateVector3(`skele${Fk}`, tk.hFk(this.skele, 3 * Fk))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(kk, Fk) {
          return "vertex" !== kk ? null : {
            CUSTOM_VERTEX_DEFINITIONS: ak(Fk),
            CUSTOM_VERTEX_UPDATE_POSITION: qk(Fk, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: Lk(Fk)
          }
        }
      };
    (0, yk.p)(Zk)
  },
  38684: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Lk,
      d: () => tk
    });
    var Xk = Ik(37243),
      Tk = Ik(37475),
      ik = Ik(37249),
      yk = Ik(37255);
    const lk = "bloxdTextLodBias",
      ak = [{
        name: lk,
        type: "float"
      }],
      qk = "bloxdTextSample",
      Lk = {
        planes: -.5,
        boards: -.5
      },
      tk = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Xk.b)("TEXT_SAMPLER"),
        getUniforms: kk => (0, Tk.e)(ak, "fragment", kk),
        bind(kk) {
          kk.updateFloat(lk, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(kk, Fk) {
          if ("fragment" !== kk) return null;
          const Ik = (0, ik.K)(Fk, `vec4 ${qk}(sampler2D s, vec2 uv, float bias)`, `fn ${qk}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Xk = (0, ik.K)(Fk, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Tk = `${(0,ik.X)(Fk,"vDiffuseUV")} + uvOffset`,
            yk = (0, ik.K)(Fk, `${qk}(diffuseSampler, ${Tk}, ${(0,ik.Mb)(Fk,lk)})`, `${qk}(diffuseSampler, diffuseSamplerSampler, ${Tk}, ${(0,ik.Mb)(Fk,lk)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${Ik} {\n\t\t\t\t\t${(0,ik.G)(Fk,"vec4","texel",Xk)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,ik.m)(Fk,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,ik.m)(Fk,"vec3","0.0")}, ${(0,ik.m)(Fk,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, ik.H)(Fk)]: `baseColor = ${yk};`
          }
        }
      };
    (0, yk.p)(tk)
  },
  41123: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      CapeMaterialPlugin: () => Kk,
      HueTintMaterialPlugin: () => Qk,
      LifeformMaterialPlugin: () => sk,
      OverlayMaterialPlugin: () => Vk
    });
    var Xk = Ik(41132),
      Tk = Ik(38010);
    class ik extends((0, Xk.g)(Tk.d)) {}(0, Xk.h)(Tk.d, ik);
    var yk = Ik(37236);
    class lk extends((0, Xk.g)(yk.f)) {}(0, Xk.h)(yk.f, lk);
    var ak = Ik(37835);
    class qk extends((0, Xk.g)(ak.e)) {}(0, Xk.h)(ak.e, qk);
    var Lk = Ik(37461),
      tk = Ik(40269),
      Zk = Ik(37457);
    class jk extends((0, Xk.g)(Zk.e)) {
      constructor(kk, Fk, Ik) {
        super(kk, Fk, Ik), (0, Lk.h)(kk)
      }
      dispose(kk) {
        (0, Lk.l)(this._material), super.dispose(kk)
      }
    }(0, Xk.h)(Zk.e, jk), (0, Zk.f)({
      disableUnusedSpecularTerm: Xk.d,
      isLightingDisabled: kk => kk instanceof tk.StandardMaterial && kk.disableLighting
    });
    var ek = Ik(38684);
    class wk extends((0, Xk.g)(ek.d)) {}(0, Xk.h)(ek.d, wk);
    var Hk = Ik(38791),
      Jk = Ik(37340),
      xk = Ik(38126),
      Pk = Ik(37286);
    class Kk extends((0, Xk.g)(Hk.d)) {}(0, Xk.h)(Hk.d, Kk);
    class Qk extends((0, Xk.g)(Jk.d)) {}(0, Xk.h)(Jk.d, Qk);
    class sk extends((0, Xk.g)(xk.m)) {}(0, Xk.h)(xk.m, sk);
    class Vk extends((0, Xk.g)(Pk.d)) {}(0, Xk.h)(Pk.d, Vk)
  },
  41132: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => fk,
      g: () => xk,
      h: () => mk
    });
    var Xk = Ik(40269),
      Tk = Ik(41139),
      ik = Ik(41178),
      yk = Ik(41147),
      lk = Ik(37815),
      ak = Ik(37821),
      qk = Ik(37823),
      Lk = Ik(37829),
      tk = Ik(37270),
      Zk = Ik(37277),
      jk = Ik(41149),
      ek = Ik(37255),
      wk = Ik(37259),
      Hk = Ik(37249);

    function Jk(kk, Fk) {
      return Object.assign((function(kk, Ik, Xk, Tk) {
        return Fk(this.featureState, kk, Ik, Xk, Tk)
      }), {
        Ie: kk
      })
    }

    function xk(kk) {
      const Fk = class extends jk.d {
          constructor(Fk, Ik) {
            const Xk = (0, wk.X)(Fk),
              Tk = Xk && (0, wk.B)(Xk, kk.name);
            for (var ik = arguments.length, yk = new Array(ik > 2 ? ik - 2 : 0), lk = 2; lk < ik; lk++) yk[lk - 2] = arguments[lk];
            super(Fk, kk.name, kk.priority, Tk ? Tk.defines : kk.defines(...yk), !1), this.featureState = void 0, this.featureState = Ik, this._pluginManager._addPlugin(this), this._enable(!0), (0, wk.D)(this._material, kk, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return kk.className
          }
          isCompatible(kk) {
            return kk === Hk.e.GLSL || kk === Hk.e.WGSL
          }
        },
        Ik = (0, ek.i)(kk);
      for (const [Xk, Tk] of Object.entries(ek.e)) {
        const ik = kk[Xk];
        if (ik) {
          const kk = Ik[Xk];
          Object.defineProperty(Fk.prototype, Tk, {
            value: Jk(ik, kk),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Fk
    }
    class Pk extends(xk(lk.b)) {}
    var Kk = Ik(39806),
      Qk = Ik(41155);
    const sk = new WeakMap;

    function Vk(kk, Fk, Ik) {
      let Xk = sk.get(Ik);
      Xk || (Xk = new Map, sk.set(Ik, Xk));
      const {
        url: Tk
      } = kk;
      let ik = Xk.get(Tk);
      return ik || (ik = async function(kk, Fk, Ik) {
        var Xk;
        const {
          width: Tk,
          height: ik
        } = kk.getSize(), lk = Math.round(ik / Tk), ak = kk.getInternalTexture(), qk = Fk && Fk.byteLength === Tk * Tk * lk * 4 ? Fk : null !== (Xk = zk.get(ak)) && void 0 !== Xk ? Xk : kk._readPixelsSync(), Lk = new Qk.c(qk, Tk, Tk, lk, Kk.c.TEXTUREFORMAT_RGBA, Ik, !0, !1, yk.c.NEAREST_NEAREST_MIPLINEAR);
        zk.has(ak) || (! function(kk, Fk) {
          const Ik = Fk.createRawTexture(new Uint8Array(4), 1, 1, Kk.c.TEXTUREFORMAT_RGBA, !1, !1, yk.c.NEAREST_SAMPLINGMODE);
          kk._hardwareTexture.release(), Fk.unbindAllTextures(), Ik._swapAndDie(kk, !1)
        }(ak, Ik.Oe()), zk.set(ak, qk));
        return Lk
      }(kk, Fk, Ik), Xk.set(Tk, ik), ik.catch((() => {
        Xk.delete(Tk)
      }))), ik
    }
    const zk = new WeakMap;
    var Sk = Ik(37832);
    class vk extends(xk(ak.l)) {
      constructor(kk, Fk) {
        super(kk, Fk), Fk.textures.forEach(((kk, Fk) => {
          kk.mirror.onLoadObservable.add((kk => {
            this.setTextureArrayData(kk, Fk).catch((kk => {
              console.error(`Failed to build texture array for atlas ${Fk}`, kk)
            }))
          }))
        })), (0, Sk.h)(Fk, kk.shaderLanguage)
      }
      async setTextureArrayData(kk, Fk) {
        var Ik, Xk;
        const Tk = this.featureState,
          {
            width: ik,
            height: yk
          } = kk.getSize(),
          lk = Tk.useWebGL2 ? await Vk(kk, null !== (Ik = null === (Xk = Tk.sources.pixels) || void 0 === Xk ? void 0 : Xk[Fk]) && void 0 !== Ik ? Ik : null, this._material.mG()) : null;
        (0, Sk.e)(this._material, Tk, Fk, lk, ik, Math.round(yk / ik), this._material.shaderLanguage)
      }
    }
    var Ek = Ik(41158),
      Ok = Ik(40308),
      nk = Ik(37144),
      Gk = Ik(41165),
      pk = Ik(40427),
      uk = Ik(40297),
      bk = Ik(41114),
      Rk = Ik(37623),
      Uk = Ik(41170);
    class Ck extends Ek.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Nk = {
      Mesh: Gk.c,
      TransformNode: bk.b,
      je: Ek.c,
      VertexBuffer: Ek.g,
      BoundingInfo: Ok.d,
      Ge: nk.Ge,
      ArenaBuffer: Ck,
      SubMesh: uk.b,
      VertexData: pk.c,
      MirroredGeometry: Uk.c,
      meshFromArrays: Uk.g,
      plainMeshFromArrays: Uk.k
    };
    (0, Rk.f)(Nk);
    var ck = Ik(37461);
    class Wk extends(xk(Lk.e)) {
      constructor(kk, Fk) {
        if (super(kk, Fk), kk instanceof Xk.StandardMaterial && Fk.dirLightCount > 0) {
          const Fk = kk,
            Ik = Fk._blockDirtyMechanism;
          Fk._blockDirtyMechanism = !0, kk.disableLighting = !0, Fk._blockDirtyMechanism = Ik;
          const Xk = (0, wk.X)(kk);
          Xk && (Xk.disableLighting = !0, (0, wk.W)(Xk))
        }(0, ck.h)(kk)
      }
      dispose(kk) {
        (0, ck.l)(this._material), super.dispose(kk)
      }
    }

    function fk(kk, Fk) {
      if (!(Fk instanceof Xk.StandardMaterial) || Fk.specularTexture) return;
      const {
        r: Ik,
        g: Tk,
        b: ik
      } = Fk.specularColor;
      0 === Ik && 0 === Tk && 0 === ik && (kk.SPECULARTERM = !1)
    }(0, Lk.c)({
      disableUnusedSpecularTerm: fk
    });
    var Bk = Ik(37365),
      dk = Ik(37633);
    const Yk = new RegExp(`^#define ${qk.d}\\s*$`, "m");
    class Ak extends(xk(qk.h)) {
      constructor(kk, Fk) {
        super(kk, Fk), this.ee = !1, Fk.ditherOnlyWhileFading && (dk.e.add(kk), this.prewarmDitherTwins(kk))
      }
      prewarmDitherTwins(kk) {
        const Fk = new WeakSet;
        kk.onEffectCreatedObservable.add((Ik => {
          let {
            effect: Xk,
            subMesh: Tk
          } = Ik;
          if (this.featureState.prewarmingDither || Fk.has(Xk)) return;
          Fk.add(Xk);
          const ik = null === Tk || void 0 === Tk ? void 0 : Tk.getMesh();
          ik && !Yk.test(Xk.defines) && kk.mG().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(ik) || Fk.delete(Xk)
          }))
        }))
      }
      prewarmDither(kk) {
        if (this.ee || kk.Hs()) return !1;
        const Fk = new uk.b(0, 0, 0, 0, 0, kk, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(kk, Fk)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Fk.effect
      }
      dispose(kk) {
        this.ee = !0, super.dispose(kk)
      }
    }
    const gk = new Map;

    function mk(kk, Fk) {
      gk.set(kk, Fk)
    }
    mk(lk.b, Pk), mk(ak.l, vk), mk(qk.h, Ak), mk(Lk.e, Wk), (0, tk.d)({
      create: (kk, Fk) => {
        const Ik = new Xk.StandardMaterial(kk.name, Fk);
        return (0, Bk.q)(kk, Ik), Ik.detailMap._pluginDefineNames
      },
      write: (kk, Fk, Ik) => {
        (0, Bk.X)(kk.mirror, Fk, Ik)
      },
      addFeature: (kk, Fk, Ik) => {
        const Xk = gk.get(Fk.feature);
        if (!Xk) throw new Error(`${Fk.feature.name} has no plugin class (registerPluginClass)`);
        new Xk(kk.mirror, Fk.state, ...Ik)
      },
      texture: (kk, Fk, Ik) => {
        let {
          url: Xk,
          noMipmap: Tk,
          invertY: ik,
          samplingMode: lk,
          data: ak,
          sets: qk
        } = Ik;
        if (!ak) {
          const Ik = new yk.c(Xk, Fk, Tk, ik, lk);
          return Object.assign(Ik, qk), void(0, Zk.H)(kk, Ik)
        }
        const Lk = {},
          tk = new Promise(((kk, Fk) => {
            Lk.onLoad = kk, Lk.onError = (kk, Ik) => {
              Fk(new Error(`${ak.context}: ${(null===Ik||void 0===Ik?void 0:Ik.message)||kk||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: jk,
            bytes: ek,
            label: wk
          } = ak,
          Hk = {
            noMipmap: Tk,
            invertY: !1,
            samplingMode: lk,
            ...Lk,
            mimeType: jk,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Jk = new yk.c(null, Fk, Hk);
        Bk.r.set(Jk, tk), Object.assign(Jk, qk), Jk.updateURL(Xk, ek);
        const xk = Jk.getInternalTexture();
        xk && (xk.label = wk), kk.uvSet = Jk.coordinatesIndex, kk.matrix.set((0, Bk.P)(Jk)), (0, Zk.H)(kk, Jk)
      },
      cube: (kk, Fk, Ik) => {
        let {
          rootUrl: Xk,
          files: ik,
          noMipmap: lk,
          luminance: ak
        } = Ik;
        const {
          samplingMode: qk
        } = kk.sampler, Lk = qk === (0, Zk.z)(lk) ? null : () => {
          (0, Bk.O)(tk, qk)
        }, tk = new Tk.c(Xk, Fk, null, lk, ik, Lk, null, (0, Zk.x)(ak));
        tk.coordinatesMode = yk.c.SKYBOX_MODE, (0, Zk.H)(kk, tk)
      },
      canvas: (kk, Fk, Ik) => {
        let {
          width: Xk,
          height: Tk,
          mipmaps: lk,
          samplingMode: ak,
          hasAlpha: qk = !1,
          wrap: Lk = yk.c.CLAMP_ADDRESSMODE
        } = Ik;
        const tk = new ik.d(Fk, {
          width: Xk,
          height: Tk
        }, kk, lk, ak);
        tk.hasAlpha = qk, tk.wrapU = Lk, tk.wrapV = Lk;
        const Zk = (0, Bk.B)(tk);
        return (0, Bk.E)(Zk, tk), Zk
      }
    })
  },
  41170: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Lk,
      g: () => tk,
      k: () => Zk
    });
    var Xk = Ik(41158),
      Tk = Ik(40056),
      ik = Ik(40308),
      yk = Ik(40429),
      lk = Ik(41165),
      ak = Ik(40427),
      qk = Ik(37519);
    class Lk extends yk.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (kk, Fk) => {
          this.releaseUnlessInstanced(Fk)
        }, this.onLinked = null
      }
      link(kk) {
        var Fk;
        (0, qk.o)(kk), this.model = kk, null === (Fk = this.onLinked) || void 0 === Fk || Fk.call(this, kk)
      }
      relink() {
        this.release();
        const kk = [];
        for (const Tk of Object.values(this._vertexBuffers))
          if (!Tk.getIsInstanced()) {
            const {
              byteOffset: Fk,
              byteStride: Ik,
              type: Xk,
              normalized: ik
            } = Tk;
            kk.push({
              kind: Tk.getKind(),
              data: Tk.getData(),
              offset: Fk,
              stride: Ik,
              components: Tk.getSize(),
              glType: Xk,
              isNormalized: ik
            })
          } const Fk = this._indices.length ? this._indices : null,
          {
            minimum: Ik,
            maximum: Xk
          } = this.extend;
        this.link(new qk.h(kk, Fk, this.getTotalVertices(), new Float64Array(Ik.iXk()), new Float64Array(Xk.iXk())))
      }
      copy(kk) {
        if (!this.model) return super.copy(kk);
        const Fk = new Lk(kk, this.mG()),
          Ik = this.yXk(void 0, !0);
        Ik && Fk.setIndices(Ik);
        let yk = !1;
        for (const ik in this._vertexBuffers) {
          const kk = this._vertexBuffers[ik],
            Ik = kk.getData();
          if (!Ik) continue;
          const lk = kk.getSize(),
            {
              type: ak,
              byteOffset: qk,
              byteStride: Lk,
              normalized: tk
            } = kk;
          yk ||= kk.isUpdatable();
          const Zk = kk.getIsInstanced() ? (Ik instanceof Array ? 4 * Ik.length : Ik.byteLength) / Lk : this.getTotalVertices(),
            jk = (0, Tk.l)(Ik, lk, ak, qk, Lk, Zk, !0),
            ek = {
              updatable: kk.isUpdatable(),
              stride: lk,
              type: ak,
              normalized: tk,
              takeBufferOwnership: !0,
              instanced: kk.getIsInstanced()
            };
          Fk.setVerticesBuffer(new Xk.g(this.Oe(), jk, ik, ek), Zk)
        }
        return Fk._updatable = yk, Fk._boundingInfo = new ik.d(this.extend.minimum, this.extend.maximum), Fk.relink(), Fk
      }
      static mergeMeshes(kk, Fk, Ik, Xk, Tk, ik) {
        const ak = kk[0].mG(),
          qk = new lk.c(kk[0].name + "_merged", ak),
          tk = new Lk(yk.d.RandomId(), ak, void 0, !1, qk);
        try {
          if (!lk.c.MergeMeshes(kk, Fk, Ik, qk, Tk, ik)) return qk.dispose(), null
        } catch (Zk) {
          throw qk.dispose(), Zk
        }
        return tk.relink(), qk
      }
      removeVerticesData(kk) {
        this.releaseUnlessInstanced(kk), super.removeVerticesData(kk)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(kk) {
        var Fk;
        kk && null !== (Fk = this.getVertexBuffer(kk)) && void 0 !== Fk && Fk.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, qk.u)(this.model), this.model = null)
      }
    }

    function tk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new lk.c(kk, Ik);
      const Tk = (0, qk.l)(Fk),
        {
          positions: ik,
          normals: tk,
          uvs: Zk,
          indices: jk,
          named: ek = {}
        } = Fk,
        wk = new ak.c;
      wk.positions = ik, wk.normals = null !== tk && void 0 !== tk ? tk : null, wk.uvs = null !== Zk && void 0 !== Zk ? Zk : null, wk.indices = jk;
      const Hk = new Lk(yk.d.RandomId(), Ik, wk, !1, Xk);
      for (const {
          kind: yk,
          components: lk
        }
        of Tk.vertexAttributes) yk in ek && Xk.setVerticesData(yk, ek[yk], !1, lk);
      return Hk.link(Tk), Xk
    }

    function Zk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Tk = new lk.c(kk, Ik),
        {
          positions: ik,
          normals: yk,
          uvs: qk,
          indices: Lk
        } = Fk;
      return Object.assign(new ak.c, {
        positions: ik,
        normals: yk,
        uvs: qk,
        indices: Lk
      }).applyToMesh(Tk, Xk), Tk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);