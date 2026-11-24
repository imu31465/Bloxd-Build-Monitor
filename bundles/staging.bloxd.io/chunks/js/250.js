export const id = 250;
export const ids = [250];
export const modules = {
  41396: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      openCharacterPreview: () => pt
    });
    var Ot = Vt(38347),
      qt = Vt(2848),
      Dt = Vt(697),
      mt = Vt(37403),
      dt = Vt(2295),
      jt = Vt(37398),
      Ht = Vt(40023),
      Xt = Vt(40289),
      Qt = Vt(41289),
      lt = Vt(37331),
      Et = Vt(40433),
      ft = Vt(37510),
      wt = Vt(40452),
      yt = Vt(41348),
      Nt = Vt(37323),
      Mt = Vt(1308),
      bt = Vt(2290),
      Jt = Vt(37478),
      Ct = Vt(37568);
    class ut {
      constructor(tt, et) {
        this.pose = tt, this.nodes = void 0, this.nodes = tt.boneNames.map((tt => et.get(tt)))
      }
      write(tt) {
        this.pose.pose(tt);
        const {
          rotations: et
        } = this.pose;
        for (let Vt = 0; Vt < this.nodes.length; Vt++) {
          const tt = 4 * Vt;
          this.nodes[Vt].rotationQuaternion.set(et[tt], et[tt + 1], et[tt + 2], et[tt + 3])
        }
      }
    }

    function Kt(tt) {
      tt.unfreezeWorldMatrix();
      for (const et of tt.getChildren()) Kt(et)
    }

    function ht(tt, et) {
      tt.isVisible = et;
      for (const Vt of tt.getChildMeshes()) Vt.isVisible = et
    }
    class vt {
      constructor(tt, et, Vt) {
        this.Fw = tt, this.thinInstMgr = et, this.RP = Vt, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(tt, et, Vt) {
        const Ot = (0, Jt.g)(tt, et);
        return Ot in this.modelCache || (this.modelCache[Ot] = (async () => {
          try {
            const Ot = await (0, Jt.k)(tt, this.Fw),
              qt = new Map;
            for (const tt of Ot.getNodes()) qt.set(tt.name, tt);
            const Dt = (0, Jt.c)(null !== et && void 0 !== et ? et : tt, this.Fw);
            (0, Jt.m)(Ot, Dt, {
              keepTransforms: void 0 !== Vt,
              onProcessedMesh: tt => {
                (0, Jt.p)(tt), this.Fw.oOt(tt, !1), tt.isVisible = !1
              }
            });
            for (const tt of Ot.rootNodes) Kt(tt);
            const mt = void 0 === Vt ? null : (0, Ct.d)(Vt, (tt => {
              var et, Vt;
              return null !== (et = null === (Vt = qt.get(tt)) || void 0 === Vt ? void 0 : Vt.rotationQuaternion) && void 0 !== et ? et : null
            }));
            return {
              nodesByName: qt,
              bones: null === mt ? null : new ut(mt, qt)
            }
          } catch (qt) {
            throw delete this.modelCache[Ot], console.error(`Failed to load preview attachment ${Ot}:`, qt), qt
          }
        })()), this.modelCache[Ot]
      }
      async update(tt, et) {
        var Vt;
        const {
          thinInstMgr: Ot,
          RP: qt
        } = this;
        this.cosmeticNames[tt] = et;
        const Dt = this.attachmentsByType[tt];
        if (Dt)
          for (const {
              mesh: dt,
              destNode: jt,
              bones: Ht
            }
            of Dt) {
            null !== Ht && (0, Mt.pb)(this.shownBones, Ht), ht(dt, !1);
            const tt = Ot.getNamedNode(qt, jt);
            Ot.detachTransformNodeIfFound(dt, qt, tt)
          }
        this.attachmentsByType[tt] = [];
        const mt = (0, bt.n)(tt, et);
        if (null !== mt && void 0 !== mt && null !== (Vt = mt.attachments) && void 0 !== Vt && Vt.length)
          for (const dt of mt.attachments) {
            let Vt;
            try {
              Vt = await this.loadModel(dt.modelGlb, dt.texture, dt.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[tt] !== et) return;
            const Dt = Vt.nodesByName.get(dt.modelNode);
            if (!Dt) {
              console.error(`Preview attachment node ${dt.modelNode} not found in ${dt.modelGlb}`);
              continue
            }
            ht(Dt, !0), (0, Jt.t)(Dt, dt.overlayColour);
            const mt = Ot.getNamedNode(qt, dt.destNode);
            Ot.attachTransformNode(Dt, qt, mt), this.attachmentsByType[tt].push({
              mesh: Dt,
              destNode: dt.destNode,
              bones: Vt.bones
            }), null !== Vt.bones && this.shownBones.push(Vt.bones)
          }
      }
      writePoses(tt) {
        for (const et of this.shownBones) et.write(tt)
      }
    }
    var Wt = Vt(37420),
      St = (Vt(41316), Vt(40669), Vt(41323), Vt(34414));
    let ct, Rt, It, Pt, Zt, Lt, Ft, kt, Gt, zt;
    const ot = document.createElement("canvas");
    async function rt() {
      await new Promise((tt => {
        setTimeout((() => {
          tt()
        }), 100)
      }))
    }
    ot.classList.add("CharCustomisationPreviewCanvas");
    const Ut = {};

    function At(tt, et) {
      ot.width = tt, ot.height = et, ct.resize()
    }
    let it = 0;
    class Yt {
      constructor(tt, et) {
        this.framing = et, this.ready = zt, this.dev = {
          canvas: () => ot,
          isolateHead(tt) {
            const et = Lt.getNodeNames(Ft);
            for (let Vt = 0; Vt < et.length; Vt++) "HeadMesh" !== et[Vt] && "__root__" !== et[Vt] && "TorsoNode" !== et[Vt] && Lt.setNodeEnabled(Ft, Vt, !1);
            if (tt) {
              const tt = Lt.getNamedNode(Ft, "HeadMesh");
              Lt.setNodeDisableColorWrite(Ft, tt, !0, (tt => {
                const et = new wt.StandardMaterial(`${tt.name}_depthOnly`, tt.vI());
                return et.disableColorWrite = !0, et
              }))
            }
            Lt.setPosition(Ft, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const Vt = tt.getBoundingClientRect();
        At(Vt.width, Vt.height), it++, ct.stopRenderLoop(), ct.runRenderLoop((() => {
          var tt, et;
          null === (tt = kt) || void 0 === tt || tt.render(ct.getDeltaTime()), null === (et = Gt) || void 0 === et || et.writePoses(performance.now() / 1e3), It.render()
        }))
      }
      isReady() {
        return !!Pt
      }
      setCosmetic(tt, et) {
        ! function(tt, et) {
          if (!Pt) return;
          const mt = (0, qt.e)();
          mt.oW(!1), Ot.b.Player.meshApi.updatePlayerCosmetic(mt.lL, Ft, tt, et, !0), "cape" === tt && (et === Dt.e ? Zt.Av(!1) : (Zt.Av(!0), Zt.material.diffuseTexture = new yt.b(Vt(39024)(`./cape_${et}.png`), Zt.vI(), {
            invertY: !1,
            samplingMode: yt.b.NEAREST_NEAREST_MIPLINEAR
          })));
          Ut[tt] = Gt.update(tt, et)
        }(tt, et)
      }
      playEmote(tt) {
        if (!kt) return;
        if (!tt) return void kt.stopAnimation(jt.g.Emote);
        const et = (0, mt.e)((0, dt.j)(tt).animation);
        kt.startAnimation(et, jt.g.Emote, 0, dt.d)
      }
      async untilDrawn(tt) {
        if (await rt(), "cape" === tt && Zt) {
          const tt = Zt.material,
            et = null === tt || void 0 === tt ? void 0 : tt.diffuseTexture;
          et && !et.isReady() && (await new Promise((tt => {
            et.onLoadObservable.addOnce((() => {
              tt()
            }))
          })), await rt())
        }
        Ut[tt] && (await Ut[tt], await rt()), await It.whenReadyAsync(), await new Promise((tt => {
          It.onAfterRenderObservable.addOnce((() => {
            tt()
          }))
        }))
      }
      setOrbit(tt) {
        Bt(tt)
      }
      resetCamera() {
        Rt.inertialAlphaOffset = 0, Rt.inertialBetaOffset = 0, Rt.inertialRadiusOffset = 0, Bt(St.b[this.framing])
      }
      resize(tt, et) {
        At(tt, et)
      }
      close() {
        this.closed || (this.closed = !0, it--, 0 === it && ct.stopRenderLoop())
      }
    }

    function Bt(tt) {
      let {
        yaw: et,
        pitch: Vt,
        radius: Ot,
        target: qt
      } = tt;
      Rt.alpha = et, Rt.beta = Vt, Ot && (Rt.radius = Ot), qt && Rt.target.set(qt[0], qt[1], qt[2])
    }

    function pt(tt, et) {
      return tt.appendChild(ot), ct || function() {
        ct = new Ht.e(ot, !0, {
          preserveDrawingBuffer: !0
        });
        const tt = (0, qt.e)();
        ct.LOt = tt.Bf.engine.LOt, It = new Xt.c(ct), It.clearColor = new ft.e(0, 0, 0, 0), It.ambientColor = new ft.Color3(1, 1, 1), Rt = new Qt.c("Gy", 0, 0, 1, lt.uf.Zero(), It), Rt.attachControl(ot, !0), Rt.panningSensibility = 0, zt = (0, Ot.t)("Player", It, !0).then((et => {
          Pt = et.meshApi, Zt = et.capeMesh, Lt = tt.Bf.xI;
          const Vt = 8.33;
          Ft = (0, Ot.k)("Player", Vt, !0, !0), Lt.setPosition(Ft, 0, -8.33, 0);
          const qt = Lt.getNamedNode(Ft, "BodyMesh");
          Lt.attachTransformNode(Zt, Ft, qt), Lt.set(Ft, "aOpacity", 1), Lt.wL(Ft, "aOpacity", 1), Gt = new vt(It, Lt, Ft), kt = new Nt.AnimatorState, kt.ql = tt, kt.thinInstMgr = Lt, kt.RP = Ft, kt.DOt = Lt.FOt(Ft, 0), kt.modelLifeformType = "Player", kt.nodeNameAliases = (0, Wt.b)("Player").nodeNameAliases;
          const Dt = Zt.fL().boundingBox;
          Zt.position.y = ((24 - Dt.maximum.y + Dt.minimum.y) / 2 - 1 / 32) / Vt, Zt.position.z = -1 / Vt, Zt.rotationQuaternion = null;
          const mt = Math.PI / 18,
            dt = Dt.maximum.y / Vt;
          Zt.rotation.x = mt;
          const jt = Math.cos(mt),
            Ht = Math.sin(mt);
          Zt.position.y += dt * (1 - jt) + 0 * Ht, Zt.position.z -= dt * Ht + 0 * (1 - jt);
          const Xt = new wt.StandardMaterial("capeMaterial", Zt.vI());
          Zt.material = Xt;
          const Qt = new ft.Color3(1, 1, 1);
          Xt.diffuseColor = new ft.Color3, Xt.specularColor = new ft.Color3, Xt.emissiveColor = new ft.Color3, Xt.ambientColor = new ft.Color3, Qt.scaleToRef(.43, Xt.diffuseColor), Qt.scaleToRef(1.75, Xt.ambientColor), Xt.freeze();
          const yt = new Et.c("light", new lt.uf(-.1, 1, -.3), It);
          yt.diffuse = new ft.Color3(1, 1, 1), yt.specular = new ft.Color3(1, 1, 1), yt.groundColor = new ft.Color3(.5, .5, .5)
        }))
      }(), new Yt(tt, et)
    }
  },
  39019: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => lt
    });
    var Ot = Vt(37433),
      qt = Vt(37440),
      Dt = Vt(37692),
      mt = Vt(37448),
      dt = Vt(37435);

    function jt(tt) {
      return `\n\t\t\t\t${(0,dt.u)(tt,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, dt.y)(tt, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, dt.y)(tt, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, dt.l)(tt, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Ht(tt, et) {
      let Vt = (0, dt.vb)(tt, "skele" + (et - 1));
      for (let qt = et - 2; qt >= 0; qt--) Vt = (0, dt.kb)(tt, `boneIdx == ${qt}`, (0, dt.vb)(tt, `skele${qt}`), Vt);
      const Ot = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,dt.y)(tt,"int","boneIdx",(0,dt.nb)(tt,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,dt.y)(tt,"vec3","bone",Vt)}\n\t\t\t\t${(0,dt.y)(tt,"vec2","pivot",(0,dt.l)(tt,"vec2","0.0",`${(0,dt.Ab)(tt,"position")}.z`))}\n\t\t\t\t${(0,dt.Y)(tt)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Ot}));`:`positionUpdated.yz += ${Ot};`}\n\t\t`
    }

    function Xt(tt) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,dt.l)(tt,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const Qt = {
        x: 0,
        y: 0,
        z: 0,
        vVt(tt, et) {
          return this.x = tt[et], this.y = tt[et + 1], this.z = tt[et + 2], this
        }
      },
      lt = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (tt, et) => ({
          ...(0, Ot.e)("CAPE"),
          BLOXD_CAPE_BONES: `${tt}`,
          BLOXD_CAPE_MAX_Y: (0, qt.gb)(et)
        }),
        getUniforms(tt) {
          return (0, Dt.b)(function(tt) {
            const et = [];
            for (let Vt = 0; Vt < tt; Vt++) et.push({
              name: `skele${Vt}`,
              type: "highp vec3"
            });
            return et
          }(this.skeleLen), "vertex", tt)
        },
        bind(tt) {
          for (let et = 0; et < this.skeleLen; et++) tt.updateVector3(`skele${et}`, Qt.vVt(this.skele, 3 * et))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(tt, et) {
          return "vertex" !== tt ? null : {
            CUSTOM_VERTEX_DEFINITIONS: jt(et),
            CUSTOM_VERTEX_UPDATE_POSITION: Ht(et, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: Xt(et)
          }
        }
      };
    (0, mt.k)(lt)
  },
  38913: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Xt,
      f: () => Qt
    });
    var Ot = Vt(37433),
      qt = Vt(37692),
      Dt = Vt(37435),
      mt = Vt(37448);
    const dt = "bloxdTextLodBias",
      jt = [{
        name: dt,
        type: "float"
      }],
      Ht = "bloxdTextSample",
      Xt = {
        planes: -.5,
        boards: -.5
      },
      Qt = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Ot.e)("TEXT_SAMPLER"),
        getUniforms: tt => (0, qt.b)(jt, "fragment", tt),
        bind(tt) {
          tt.updateFloat(dt, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(tt, et) {
          if ("fragment" !== tt) return null;
          const Vt = (0, Dt.J)(et, `vec4 ${Ht}(sampler2D s, vec2 uv, float bias)`, `fn ${Ht}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Ot = (0, Dt.J)(et, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            qt = `${(0,Dt.T)(et,"vDiffuseUV")} + uvOffset`,
            mt = (0, Dt.J)(et, `${Ht}(diffuseSampler, ${qt}, ${(0,Dt.vb)(et,dt)})`, `${Ht}(diffuseSampler, diffuseSamplerSampler, ${qt}, ${(0,Dt.vb)(et,dt)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${Vt} {\n\t\t\t\t\t${(0,Dt.y)(et,"vec4","texel",Ot)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Dt.l)(et,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,Dt.l)(et,"vec3","0.0")}, ${(0,Dt.l)(et,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, Dt.C)(et)]: `baseColor = ${mt};`
          }
        }
      };
    (0, mt.k)(Qt)
  },
  41323: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      CapeMaterialPlugin: () => Jt,
      HueTintMaterialPlugin: () => Ct,
      LifeformMaterialPlugin: () => ut,
      OverlayMaterialPlugin: () => Kt
    });
    var Ot = Vt(41332),
      qt = Vt(38261);
    class Dt extends((0, Ot.d)(qt.e)) {}(0, Ot.f)(qt.e, Dt);
    var mt = Vt(37426);
    class dt extends((0, Ot.d)(mt.e)) {}(0, Ot.f)(mt.e, dt);
    var jt = Vt(38105);
    class Ht extends((0, Ot.d)(jt.d)) {}(0, Ot.f)(jt.d, Ht);
    var Xt = Vt(37670),
      Qt = Vt(40452),
      lt = Vt(37663);
    class Et extends((0, Ot.d)(lt.h)) {
      constructor(tt, et, Vt) {
        super(tt, et, Vt), (0, Xt.j)(tt)
      }
      dispose(tt) {
        (0, Xt.m)(this._material), super.dispose(tt)
      }
    }(0, Ot.f)(lt.h, Et), (0, lt.j)({
      disableUnusedSpecularTerm: Ot.c,
      isLightingDisabled: tt => tt instanceof Qt.StandardMaterial && tt.disableLighting
    });
    var ft = Vt(38913);
    class wt extends((0, Ot.d)(ft.f)) {}(0, Ot.f)(ft.f, wt);
    var yt = Vt(39019),
      Nt = Vt(37521),
      Mt = Vt(38386),
      bt = Vt(37476);
    class Jt extends((0, Ot.d)(yt.b)) {}(0, Ot.f)(yt.b, Jt);
    class Ct extends((0, Ot.d)(Nt.d)) {}(0, Ot.f)(Nt.d, Ct);
    class ut extends((0, Ot.d)(Mt.m)) {}(0, Ot.f)(Mt.m, ut);
    class Kt extends((0, Ot.d)(bt.b)) {}(0, Ot.f)(bt.b, Kt)
  },
  41332: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ut,
      d: () => Mt,
      f: () => xt
    });
    var Ot = Vt(40452),
      qt = Vt(41339),
      Dt = Vt(41394),
      mt = Vt(41348),
      dt = Vt(38068),
      jt = Vt(38080),
      Ht = Vt(38085),
      Xt = Vt(38091),
      Qt = Vt(37461),
      lt = Vt(37467),
      Et = Vt(41355),
      ft = Vt(37448),
      wt = Vt(37454),
      yt = Vt(37435);

    function Nt(tt, et) {
      return Object.assign((function(tt, Vt, Ot, qt) {
        return et(this.featureState, tt, Vt, Ot, qt)
      }), {
        pE: tt
      })
    }

    function Mt(tt) {
      const et = class extends Et.d {
          constructor(et, Vt) {
            const Ot = (0, wt.X)(et),
              qt = Ot && (0, wt.s)(Ot, tt.name);
            for (var Dt = arguments.length, mt = new Array(Dt > 2 ? Dt - 2 : 0), dt = 2; dt < Dt; dt++) mt[dt - 2] = arguments[dt];
            super(et, tt.name, tt.priority, qt ? qt.defines : tt.defines(...mt), !1), this.featureState = void 0, this.featureState = Vt, this._pluginManager._addPlugin(this), this._enable(!0), (0, wt.v)(this._material, tt, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return tt.className
          }
          isCompatible(tt) {
            return tt === yt.c.GLSL || tt === yt.c.WGSL
          }
        },
        Vt = (0, ft.g)(tt);
      for (const [Ot, qt] of Object.entries(ft.c)) {
        const Dt = tt[Ot];
        if (Dt) {
          const tt = Vt[Ot];
          Object.defineProperty(et.prototype, qt, {
            value: Nt(Dt, tt),
            writable: !0,
            configurable: !0
          })
        }
      }
      return et
    }
    class bt extends(Mt(dt.e)) {}
    var Jt = Vt(40023),
      Ct = Vt(41361),
      ut = Vt(41370);

    function Kt(tt, et, Vt) {
      return (0, ut.e)(Vt, et.urls, (() => async function(tt, et, Vt) {
        const {
          width: Ot
        } = tt[0].getSize(), qt = tt.map(((tt, Vt) => {
          var qt;
          const Dt = Math.round(tt.getSize().height / Ot),
            mt = null === et || void 0 === et ? void 0 : et[Vt];
          return {
            pixels: mt && mt.byteLength === Ot * Ot * Dt * 4 ? mt : null !== (qt = ht.get(tt.getInternalTexture())) && void 0 !== qt ? qt : tt._readPixelsSync(),
            layers: Dt
          }
        })), Dt = Vt.Jf().getCaps().texture2DArrayMaxLayerCount, dt = (0, ut.d)(qt, Ot, Dt).map((tt => {
          let {
            pixels: et,
            layers: qt
          } = tt;
          return {
            atlas: new Ct.c(et, Ot, Ot, qt, Jt.e.TEXTUREFORMAT_RGBA, Vt, !0, !1, mt.b.NEAREST_NEAREST_MIPLINEAR),
            layers: qt
          }
        }));
        return tt.forEach(((tt, et) => {
          const Ot = tt.getInternalTexture();
          ht.has(Ot) || (! function(tt, et) {
            const Vt = et.createRawTexture(new Uint8Array(4), 1, 1, Jt.e.TEXTUREFORMAT_RGBA, !1, !1, mt.b.NEAREST_SAMPLINGMODE);
            tt._hardwareTexture.release(), et.unbindAllTextures(), Vt._swapAndDie(tt, !1)
          }(Ot, Vt.Jf()), ht.set(Ot, qt[et].pixels))
        })), dt
      }(tt, et.pixels, Vt)))
    }
    const ht = new WeakMap;
    var vt = Vt(38100);
    class Wt extends(Mt(jt.j)) {
      constructor(tt, et) {
        super(tt, et), this.loaded = new Set, this.mirrors = void 0, this.mirrors = et.textures.map((tt => tt.mirror)), this.mirrors.forEach(((tt, et) => {
          tt.onLoadObservable.add((tt => {
            this.setTextureArrayData(tt, et).catch((tt => {
              console.error(`Failed to build the texture arrays, at atlas ${et}`, tt)
            }))
          }))
        })), (0, vt.m)(et, tt.shaderLanguage)
      }
      async setTextureArrayData(tt, et) {
        const Vt = this.featureState,
          {
            width: Ot,
            height: qt
          } = tt.getSize(),
          Dt = this._material.shaderLanguage;
        if (!Vt.useWebGL2) return void(0, vt.g)(this._material, Vt, et, Ot, Math.round(qt / Ot), Dt);
        if (this.loaded.add(et), this.loaded.size < this.mirrors.length) return;
        const mt = await Kt(this.mirrors, Vt.sources, this._material.vI());
        (0, vt.e)(this._material, Vt, mt, Ot, Dt)
      }
    }
    var St = Vt(41374),
      ct = Vt(40490),
      Rt = Vt(37331),
      It = Vt(41379),
      Pt = Vt(40608),
      Zt = Vt(40476),
      Lt = Vt(41312),
      Ft = Vt(37846),
      kt = Vt(41387);
    class Gt extends St.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const zt = {
      Mesh: It.b,
      TransformNode: Lt.c,
      mf: St.b,
      VertexBuffer: St.e,
      BoundingInfo: ct.c,
      uf: Rt.uf,
      ArenaBuffer: Gt,
      SubMesh: Zt.d,
      VertexData: Pt.d,
      MirroredGeometry: kt.e,
      meshFromArrays: kt.h,
      plainMeshFromArrays: kt.k
    };
    (0, Ft.g)(zt);
    var ot = Vt(37670);
    class rt extends(Mt(Xt.i)) {
      constructor(tt, et) {
        if (super(tt, et), tt instanceof Ot.StandardMaterial && et.dirLightCount > 0) {
          const et = tt,
            Vt = et._blockDirtyMechanism;
          et._blockDirtyMechanism = !0, tt.disableLighting = !0, et._blockDirtyMechanism = Vt;
          const Ot = (0, wt.X)(tt);
          Ot && (Ot.disableLighting = !0, (0, wt.U)(Ot))
        }(0, ot.j)(tt)
      }
      dispose(tt) {
        (0, ot.m)(this._material), super.dispose(tt)
      }
    }

    function Ut(tt, et) {
      if (!(et instanceof Ot.StandardMaterial) || et.specularTexture) return;
      const {
        r: Vt,
        g: qt,
        b: Dt
      } = et.specularColor;
      0 === Vt && 0 === qt && 0 === Dt && (tt.SPECULARTERM = !1)
    }(0, Xt.g)({
      disableUnusedSpecularTerm: Ut
    });
    var At = Vt(37545),
      it = Vt(37856);
    const Yt = new RegExp(`^#define ${Ht.c}\\s*$`, "m");
    class Bt extends(Mt(Ht.h)) {
      constructor(tt, et) {
        super(tt, et), this.df = !1, et.ditherOnlyWhileFading && (it.g.add(tt), this.prewarmDitherTwins(tt))
      }
      prewarmDitherTwins(tt) {
        const et = new WeakSet;
        tt.onEffectCreatedObservable.add((Vt => {
          let {
            effect: Ot,
            subMesh: qt
          } = Vt;
          if (this.featureState.prewarmingDither || et.has(Ot)) return;
          et.add(Ot);
          const Dt = null === qt || void 0 === qt ? void 0 : qt.getMesh();
          Dt && !Yt.test(Ot.defines) && tt.vI().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Dt) || et.delete(Ot)
          }))
        }))
      }
      prewarmDither(tt) {
        if (this.df || tt.bC()) return !1;
        const et = new Zt.d(0, 0, 0, 0, 0, tt, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(tt, et)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== et.effect
      }
      dispose(tt) {
        this.df = !0, super.dispose(tt)
      }
    }
    const pt = new Map;

    function xt(tt, et) {
      pt.set(tt, et)
    }
    xt(dt.e, bt), xt(jt.j, Wt), xt(Ht.h, Bt), xt(Xt.i, rt), (0, Qt.e)({
      create: (tt, et) => {
        const Vt = new Ot.StandardMaterial(tt.name, et);
        return (0, At.q)(tt, Vt), Vt.detailMap._pluginDefineNames
      },
      write: (tt, et, Vt) => {
        (0, At.V)(tt.mirror, et, Vt)
      },
      addFeature: (tt, et, Vt) => {
        const Ot = pt.get(et.feature);
        if (!Ot) throw new Error(`${et.feature.name} has no plugin class (registerPluginClass)`);
        new Ot(tt.mirror, et.state, ...Vt)
      },
      texture: (tt, et, Vt) => {
        let {
          url: Ot,
          noMipmap: qt,
          invertY: Dt,
          samplingMode: dt,
          data: jt,
          sets: Ht
        } = Vt;
        if (!jt) {
          const Vt = new mt.b(Ot, et, qt, Dt, dt);
          return Object.assign(Vt, Ht), void(0, lt.N)(tt, Vt)
        }
        const Xt = {},
          Qt = new Promise(((tt, et) => {
            Xt.onLoad = tt, Xt.onError = (tt, Vt) => {
              et(new Error(`${jt.context}: ${(null===Vt||void 0===Vt?void 0:Vt.message)||tt||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Et,
            bytes: ft,
            label: wt
          } = jt,
          yt = {
            noMipmap: qt,
            invertY: !1,
            samplingMode: dt,
            ...Xt,
            mimeType: Et,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Nt = new mt.b(null, et, yt);
        At.s.set(Nt, Qt), Object.assign(Nt, Ht), Nt.updateURL(Ot, ft);
        const Mt = Nt.getInternalTexture();
        Mt && (Mt.label = wt), tt.uvSet = Nt.coordinatesIndex, tt.matrix.set((0, At.N)(Nt)), (0, lt.N)(tt, Nt)
      },
      cube: (tt, et, Vt) => {
        let {
          rootUrl: Ot,
          files: Dt,
          noMipmap: dt,
          luminance: jt
        } = Vt;
        const {
          samplingMode: Ht
        } = tt.sampler, Xt = Ht === (0, lt.E)(dt) ? null : () => {
          (0, At.L)(Qt, Ht)
        }, Qt = new qt.e(Ot, et, null, dt, Dt, Xt, null, (0, lt.B)(jt));
        Qt.coordinatesMode = mt.b.SKYBOX_MODE, (0, lt.N)(tt, Qt)
      },
      canvas: (tt, et, Vt) => {
        let {
          width: Ot,
          height: qt,
          mipmaps: dt,
          samplingMode: jt,
          hasAlpha: Ht = !1,
          wrap: Xt = mt.b.CLAMP_ADDRESSMODE
        } = Vt;
        const Qt = new Dt.c(et, {
          width: Ot,
          height: qt
        }, tt, dt, jt);
        Qt.hasAlpha = Ht, Qt.wrapU = Xt, Qt.wrapV = Xt;
        const lt = (0, At.C)(Qt);
        return (0, At.G)(lt, Qt), lt
      }
    })
  },
  41387: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt,
      h: () => Qt,
      k: () => lt
    });
    var Ot = Vt(41374),
      qt = Vt(40270),
      Dt = Vt(40490),
      mt = Vt(40614),
      dt = Vt(41379),
      jt = Vt(40608),
      Ht = Vt(37727);
    class Xt extends mt.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (tt, et) => {
          this.releaseUnlessInstanced(et)
        }, this.onLinked = null
      }
      link(tt) {
        var et;
        (0, Ht.n)(tt), this.model = tt, null === (et = this.onLinked) || void 0 === et || et.call(this, tt)
      }
      relink() {
        this.release();
        const tt = [];
        for (const qt of Object.values(this._vertexBuffers))
          if (!qt.getIsInstanced()) {
            const {
              byteOffset: et,
              byteStride: Vt,
              type: Ot,
              normalized: Dt
            } = qt;
            tt.push({
              kind: qt.getKind(),
              data: qt.getData(),
              offset: et,
              stride: Vt,
              components: qt.getSize(),
              glType: Ot,
              isNormalized: Dt
            })
          } const et = this._indices.length ? this._indices : null,
          {
            minimum: Vt,
            maximum: Ot
          } = this.extend;
        this.link(new Ht.d(tt, et, this.getTotalVertices(), new Float64Array(Vt.GOt()), new Float64Array(Ot.GOt())))
      }
      copy(tt) {
        if (!this.model) return super.copy(tt);
        const et = new Xt(tt, this.vI()),
          Vt = this.zOt(void 0, !0);
        Vt && et.setIndices(Vt);
        let mt = !1;
        for (const Dt in this._vertexBuffers) {
          const tt = this._vertexBuffers[Dt],
            Vt = tt.getData();
          if (!Vt) continue;
          const dt = tt.getSize(),
            {
              type: jt,
              byteOffset: Ht,
              byteStride: Xt,
              normalized: Qt
            } = tt;
          mt ||= tt.isUpdatable();
          const lt = tt.getIsInstanced() ? (Vt instanceof Array ? 4 * Vt.length : Vt.byteLength) / Xt : this.getTotalVertices(),
            Et = (0, qt.z)(Vt, dt, jt, Ht, Xt, lt, !0),
            ft = {
              updatable: tt.isUpdatable(),
              stride: dt,
              type: jt,
              normalized: Qt,
              takeBufferOwnership: !0,
              instanced: tt.getIsInstanced()
            };
          et.setVerticesBuffer(new Ot.e(this.Jf(), Et, Dt, ft), lt)
        }
        return et._updatable = mt, et._boundingInfo = new Dt.c(this.extend.minimum, this.extend.maximum), et.relink(), et
      }
      static mergeMeshes(tt, et, Vt, Ot, qt, Dt) {
        const jt = tt[0].vI(),
          Ht = new dt.b(tt[0].name + "_merged", jt),
          Qt = new Xt(mt.d.RandomId(), jt, void 0, !1, Ht);
        try {
          if (!dt.b.MergeMeshes(tt, et, Vt, Ht, qt, Dt)) return Ht.dispose(), null
        } catch (lt) {
          throw Ht.dispose(), lt
        }
        return Qt.relink(), Ht
      }
      removeVerticesData(tt) {
        this.releaseUnlessInstanced(tt), super.removeVerticesData(tt)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(tt) {
        var et;
        tt && null !== (et = this.getVertexBuffer(tt)) && void 0 !== et && et.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Ht.x)(this.model), this.model = null)
      }
    }

    function Qt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new dt.b(tt, Vt);
      const qt = (0, Ht.j)(et),
        {
          positions: Dt,
          normals: Qt,
          uvs: lt,
          indices: Et,
          named: ft = {}
        } = et,
        wt = new jt.d;
      wt.positions = Dt, wt.normals = null !== Qt && void 0 !== Qt ? Qt : null, wt.uvs = null !== lt && void 0 !== lt ? lt : null, wt.indices = Et;
      const yt = new Xt(mt.d.RandomId(), Vt, wt, !1, Ot);
      for (const {
          kind: mt,
          components: dt
        }
        of qt.vertexAttributes) mt in ft && Ot.setVerticesData(mt, ft[mt], !1, dt);
      return yt.link(qt), Ot
    }

    function lt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const qt = new dt.b(tt, Vt),
        {
          positions: Dt,
          normals: mt,
          uvs: Ht,
          indices: Xt
        } = et;
      return Object.assign(new jt.d, {
        positions: Dt,
        normals: mt,
        uvs: Ht,
        indices: Xt
      }).applyToMesh(qt, Ot), qt
    }
  },
  41370: (tt, et, Vt) => {
    function Ot(tt, et, Vt) {
      const Ot = et * et * 4,
        qt = tt[0].layers,
        Dt = qt * (tt.length - 1) + tt[tt.length - 1].layers,
        mt = new Uint8Array(Dt * Ot);
      tt.forEach(((et, Vt) => {
        const Dt = Vt + 1 < tt.length ? Math.min(et.layers, qt) : et.layers;
        mt.set(new Uint8Array(et.pixels.buffer, et.pixels.byteOffset, Dt * Ot), Vt * qt * Ot)
      }));
      const dt = Math.max(1, Math.min(Dt, Vt || Dt));
      if (dt === Dt) return [{
        pixels: mt,
        layers: Dt
      }];
      const jt = [];
      for (let Ht = 0; Ht < Dt; Ht += dt) {
        const tt = Math.min(Dt, Ht + dt);
        jt.push({
          pixels: mt.slice(Ht * Ot, tt * Ot),
          layers: tt - Ht
        })
      }
      return jt
    }
    Vt.d(et, {
      d: () => Ot,
      e: () => Dt
    });
    const qt = new WeakMap;

    function Dt(tt, et, Vt) {
      var Ot, Dt;
      const mt = null !== (Ot = qt.get(tt)) && void 0 !== Ot ? Ot : new Map;
      qt.set(tt, mt);
      const dt = null !== (Dt = mt.get(et[0])) && void 0 !== Dt ? Dt : [];
      mt.set(et[0], dt);
      const jt = dt.find((tt => tt.urls.length === et.length && tt.urls.every(((tt, Vt) => tt === et[Vt]))));
      if (jt) return jt.built;
      const Ht = {
        urls: [...et],
        built: Vt()
      };
      return dt.push(Ht), Ht.built.catch((() => {
        dt.splice(dt.indexOf(Ht), 1)
      })), Ht.built
    }
  },
  39024: (tt, et, Vt) => {
    var Ot = {
      "./cape_cow_cream.png": 28179,
      "./cape_cow_normal.png": 28187,
      "./cape_creator_level1.png": 28193,
      "./cape_creator_level2.png": 28201,
      "./cape_creator_level3.png": 28203,
      "./cape_none.png": 28212,
      "./cape_pig.png": 28220,
      "./cape_sheep.png": 28224,
      "./cape_super.png": 28233,
      "./cape_super_inverted.png": 28237,
      "./cape_youtuber.png": 28240
    };

    function qt(tt) {
      var et = Dt(tt);
      return Vt(et)
    }

    function Dt(tt) {
      if (!Vt.o(Ot, tt)) {
        var et = new Error("Cannot find module '" + tt + "'");
        throw et.code = "MODULE_NOT_FOUND", et
      }
      return Ot[tt]
    }
    qt.keys = function() {
      return Object.keys(Ot)
    }, qt.resolve = Dt, tt.exports = qt, qt.id = 39024
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);