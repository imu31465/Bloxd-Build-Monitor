export const id = 245;
export const ids = [245];
export const modules = {
  41185: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      openCharacterPreview: () => gk
    });
    var Xk = Ik(38105),
      Tk = Ik(2700),
      ik = Ik(612),
      yk = Ik(37224),
      lk = Ik(2157),
      ak = Ik(37215),
      qk = Ik(39806),
      Lk = Ik(40082),
      tk = Ik(41093),
      Zk = Ik(37144),
      jk = Ik(40252),
      ek = Ik(37327),
      wk = Ik(40269),
      Hk = Ik(41147),
      Jk = Ik(37139),
      xk = Ik(1217),
      Pk = Ik(2148),
      Kk = Ik(37293),
      Qk = Ik(37383);
    class sk {
      constructor(kk, Fk) {
        this.pose = kk, this.nodes = void 0, this.nodes = kk.boneNames.map((kk => Fk.get(kk)))
      }
      write(kk) {
        this.pose.pose(kk);
        const {
          rotations: Fk
        } = this.pose;
        for (let Ik = 0; Ik < this.nodes.length; Ik++) {
          const kk = 4 * Ik;
          this.nodes[Ik].rotationQuaternion.set(Fk[kk], Fk[kk + 1], Fk[kk + 2], Fk[kk + 3])
        }
      }
    }

    function Vk(kk) {
      kk.unfreezeWorldMatrix();
      for (const Fk of kk.getChildren()) Vk(Fk)
    }

    function zk(kk, Fk) {
      kk.isVisible = Fk;
      for (const Ik of kk.getChildMeshes()) Ik.isVisible = Fk
    }
    class Sk {
      constructor(kk, Fk, Ik) {
        this.Yw = kk, this.thinInstMgr = Fk, this.Ip = Ik, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(kk, Fk, Ik) {
        const Xk = (0, Kk.f)(kk, Fk);
        return Xk in this.modelCache || (this.modelCache[Xk] = (async () => {
          try {
            const Xk = await (0, Kk.j)(kk, this.Yw),
              Tk = new Map;
            for (const kk of Xk.getNodes()) Tk.set(kk.name, kk);
            const ik = (0, Kk.c)(null !== Fk && void 0 !== Fk ? Fk : kk, this.Yw);
            (0, Kk.l)(Xk, ik, {
              keepTransforms: void 0 !== Ik,
              onProcessedMesh: kk => {
                (0, Kk.p)(kk), this.Yw.lXk(kk, !1), kk.isVisible = !1
              }
            });
            for (const kk of Xk.rootNodes) Vk(kk);
            const yk = void 0 === Ik ? null : (0, Qk.e)(Ik, (kk => {
              var Fk, Ik;
              return null !== (Fk = null === (Ik = Tk.get(kk)) || void 0 === Ik ? void 0 : Ik.rotationQuaternion) && void 0 !== Fk ? Fk : null
            }));
            return {
              nodesByName: Tk,
              bones: null === yk ? null : new sk(yk, Tk)
            }
          } catch (Tk) {
            throw delete this.modelCache[Xk], console.error(`Failed to load preview attachment ${Xk}:`, Tk), Tk
          }
        })()), this.modelCache[Xk]
      }
      async update(kk, Fk) {
        var Ik;
        const {
          thinInstMgr: Xk,
          Ip: Tk
        } = this;
        this.cosmeticNames[kk] = Fk;
        const ik = this.attachmentsByType[kk];
        if (ik)
          for (const {
              mesh: lk,
              destNode: ak,
              bones: qk
            }
            of ik) {
            null !== qk && (0, xk.kb)(this.shownBones, qk), zk(lk, !1);
            const kk = Xk.getNamedNode(Tk, ak);
            Xk.detachTransformNodeIfFound(lk, Tk, kk)
          }
        this.attachmentsByType[kk] = [];
        const yk = (0, Pk.k)(kk, Fk);
        if (null !== yk && void 0 !== yk && null !== (Ik = yk.attachments) && void 0 !== Ik && Ik.length)
          for (const lk of yk.attachments) {
            let Ik;
            try {
              Ik = await this.loadModel(lk.modelGlb, lk.texture, lk.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[kk] !== Fk) return;
            const ik = Ik.nodesByName.get(lk.modelNode);
            if (!ik) {
              console.error(`Preview attachment node ${lk.modelNode} not found in ${lk.modelGlb}`);
              continue
            }
            zk(ik, !0), (0, Kk.v)(ik, lk.overlayColour);
            const yk = Xk.getNamedNode(Tk, lk.destNode);
            Xk.attachTransformNode(ik, Tk, yk), this.attachmentsByType[kk].push({
              mesh: ik,
              destNode: lk.destNode,
              bones: Ik.bones
            }), null !== Ik.bones && this.shownBones.push(Ik.bones)
          }
      }
      writePoses(kk) {
        for (const Fk of this.shownBones) Fk.write(kk)
      }
    }
    var vk = Ik(37227),
      Ek = (Ik(41117), Ik(40498), Ik(41123), Ik(34222));
    let Ok, nk, Gk, pk, uk, bk, Rk, Uk, Ck, Nk;
    const ck = document.createElement("canvas");
    async function Wk() {
      await new Promise((kk => {
        setTimeout((() => {
          kk()
        }), 100)
      }))
    }
    ck.classList.add("CharCustomisationPreviewCanvas");
    const fk = {};

    function Bk(kk, Fk) {
      ck.width = kk, ck.height = Fk, Ok.resize()
    }
    let dk = 0;
    class Yk {
      constructor(kk, Fk) {
        this.framing = Fk, this.ready = Nk, this.dev = {
          canvas: () => ck,
          isolateHead(kk) {
            const Fk = bk.getNodeNames(Rk);
            for (let Ik = 0; Ik < Fk.length; Ik++) "HeadMesh" !== Fk[Ik] && "__root__" !== Fk[Ik] && "TorsoNode" !== Fk[Ik] && bk.setNodeEnabled(Rk, Ik, !1);
            if (kk) {
              const kk = bk.getNamedNode(Rk, "HeadMesh");
              bk.setNodeDisableColorWrite(Rk, kk, !0, (kk => {
                const Fk = new wk.StandardMaterial(`${kk.name}_depthOnly`, kk.mG());
                return Fk.disableColorWrite = !0, Fk
              }))
            }
            bk.setPosition(Rk, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const Ik = kk.getBoundingClientRect();
        Bk(Ik.width, Ik.height), dk++, Ok.stopRenderLoop(), Ok.runRenderLoop((() => {
          var kk, Fk;
          null === (kk = Uk) || void 0 === kk || kk.render(Ok.getDeltaTime()), null === (Fk = Ck) || void 0 === Fk || Fk.writePoses(performance.now() / 1e3), Gk.render()
        }))
      }
      isReady() {
        return !!pk
      }
      setCosmetic(kk, Fk) {
        ! function(kk, Fk) {
          if (!pk) return;
          const yk = (0, Tk.e)();
          yk.sE(!1), Xk.c.Player.meshApi.updatePlayerCosmetic(yk.oR, Rk, kk, Fk, !0), "cape" === kk && (Fk === ik.f ? uk.Av(!1) : (uk.Av(!0), uk.material.diffuseTexture = new Hk.c(Ik(38794)(`./cape_${Fk}.png`), uk.mG(), {
            invertY: !1,
            samplingMode: Hk.c.NEAREST_NEAREST_MIPLINEAR
          })));
          fk[kk] = Ck.update(kk, Fk)
        }(kk, Fk)
      }
      playEmote(kk) {
        if (!Uk) return;
        if (!kk) return void Uk.stopAnimation(ak.c.Emote);
        const Fk = (0, yk.i)((0, lk.i)(kk).animation);
        Uk.startAnimation(Fk, ak.c.Emote, 0, lk.c)
      }
      async untilDrawn(kk) {
        if (await Wk(), "cape" === kk && uk) {
          const kk = uk.material,
            Fk = null === kk || void 0 === kk ? void 0 : kk.diffuseTexture;
          Fk && !Fk.isReady() && (await new Promise((kk => {
            Fk.onLoadObservable.addOnce((() => {
              kk()
            }))
          })), await Wk())
        }
        fk[kk] && (await fk[kk], await Wk()), await Gk.whenReadyAsync(), await new Promise((kk => {
          Gk.onAfterRenderObservable.addOnce((() => {
            kk()
          }))
        }))
      }
      setOrbit(kk) {
        Ak(kk)
      }
      resetCamera() {
        nk.inertialAlphaOffset = 0, nk.inertialBetaOffset = 0, nk.inertialRadiusOffset = 0, Ak(Ek.c[this.framing])
      }
      resize(kk, Fk) {
        Bk(kk, Fk)
      }
      close() {
        this.closed || (this.closed = !0, dk--, 0 === dk && Ok.stopRenderLoop())
      }
    }

    function Ak(kk) {
      let {
        yaw: Fk,
        pitch: Ik,
        radius: Xk,
        target: Tk
      } = kk;
      nk.alpha = Fk, nk.beta = Ik, Xk && (nk.radius = Xk), Tk && nk.target.set(Tk[0], Tk[1], Tk[2])
    }

    function gk(kk, Fk) {
      return kk.appendChild(ck), Ok || function() {
        Ok = new qk.c(ck, !0, {
          preserveDrawingBuffer: !0
        });
        const kk = (0, Tk.e)();
        Ok.IXk = kk.Xw.engine.IXk, Gk = new Lk.c(Ok), Gk.clearColor = new ek.b(0, 0, 0, 0), Gk.ambientColor = new ek.Color3(1, 1, 1), nk = new tk.c("pH", 0, 0, 1, Zk.Ge.Zero(), Gk), nk.attachControl(ck, !0), nk.panningSensibility = 0, Nk = (0, Xk.t)("Player", Gk, !0).then((Fk => {
          pk = Fk.meshApi, uk = Fk.capeMesh, bk = kk.Xw.kp;
          const Ik = 8.33;
          Rk = (0, Xk.k)("Player", Ik, !0, !0), bk.setPosition(Rk, 0, -8.33, 0);
          const Tk = bk.getNamedNode(Rk, "BodyMesh");
          bk.attachTransformNode(uk, Rk, Tk), bk.set(Rk, "aOpacity", 1), bk.pR(Rk, "aOpacity", 1), Ck = new Sk(Gk, bk, Rk), Uk = new Jk.AnimatorState, Uk.qZ = kk, Uk.thinInstMgr = bk, Uk.Ip = Rk, Uk.vIk = bk.XXk(Rk, 0), Uk.modelLifeformType = "Player", Uk.nodeNameAliases = (0, vk.e)("Player").nodeNameAliases;
          const ik = uk.vR().boundingBox;
          uk.position.y = ((24 - ik.maximum.y + ik.minimum.y) / 2 - 1 / 32) / Ik, uk.position.z = -1 / Ik, uk.rotationQuaternion = null;
          const yk = Math.PI / 18,
            lk = ik.maximum.y / Ik;
          uk.rotation.x = yk;
          const ak = Math.cos(yk),
            qk = Math.sin(yk);
          uk.position.y += lk * (1 - ak) + 0 * qk, uk.position.z -= lk * qk + 0 * (1 - ak);
          const Lk = new wk.StandardMaterial("capeMaterial", uk.mG());
          uk.material = Lk;
          const tk = new ek.Color3(1, 1, 1);
          Lk.diffuseColor = new ek.Color3, Lk.specularColor = new ek.Color3, Lk.emissiveColor = new ek.Color3, Lk.ambientColor = new ek.Color3, tk.scaleToRef(.43, Lk.diffuseColor), tk.scaleToRef(1.75, Lk.ambientColor), Lk.freeze();
          const Hk = new jk.d("light", new Zk.Ge(-.1, 1, -.3), Gk);
          Hk.diffuse = new ek.Color3(1, 1, 1), Hk.specular = new ek.Color3(1, 1, 1), Hk.groundColor = new ek.Color3(.5, .5, .5)
        }))
      }(), new Yk(kk, Fk)
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
  },
  38794: (kk, Fk, Ik) => {
    var Xk = {
      "./cape_cow_cream.png": 27940,
      "./cape_cow_normal.png": 27944,
      "./cape_creator_level1.png": 27950,
      "./cape_creator_level2.png": 27955,
      "./cape_creator_level3.png": 27963,
      "./cape_none.png": 27967,
      "./cape_pig.png": 27974,
      "./cape_sheep.png": 27983,
      "./cape_super.png": 27992,
      "./cape_super_inverted.png": 27994,
      "./cape_youtuber.png": 28002
    };

    function Tk(kk) {
      var Fk = ik(kk);
      return Ik(Fk)
    }

    function ik(kk) {
      if (!Ik.o(Xk, kk)) {
        var Fk = new Error("Cannot find module '" + kk + "'");
        throw Fk.code = "MODULE_NOT_FOUND", Fk
      }
      return Xk[kk]
    }
    Tk.keys = function() {
      return Object.keys(Xk)
    }, Tk.resolve = ik, kk.exports = Tk, Tk.id = 38794
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);