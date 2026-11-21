export const id = 154;
export const ids = [154];
export const modules = {
  41150: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      openCharacterPreview: () => td
    });
    var pd = kd(38286),
      Nd = kd(2634),
      Wd = kd(593),
      Pd = kd(37329),
      Zd = kd(2203),
      gd = kd(37314),
      Cd = kd(39791),
      Kd = kd(40054),
      od = kd(41074),
      ld = kd(37245),
      Qd = kd(40226),
      Ld = kd(37438),
      Od = kd(40251),
      ed = kd(41115),
      Rd = kd(37236),
      Id = kd(1245),
      Gd = kd(2196),
      vd = kd(37395),
      xd = kd(37501);
    class qd {
      constructor(dd, Jd) {
        this.pose = dd, this.nodes = void 0, this.nodes = dd.boneNames.map((dd => Jd.get(dd)))
      }
      write(dd) {
        this.pose.pose(dd);
        const {
          rotations: Jd
        } = this.pose;
        for (let kd = 0; kd < this.nodes.length; kd++) {
          const dd = 4 * kd;
          this.nodes[kd].rotationQuaternion.set(Jd[dd], Jd[dd + 1], Jd[dd + 2], Jd[dd + 3])
        }
      }
    }

    function Bd(dd) {
      dd.unfreezeWorldMatrix();
      for (const Jd of dd.getChildren()) Bd(Jd)
    }

    function sd(dd, Jd) {
      dd.isVisible = Jd;
      for (const kd of dd.getChildMeshes()) kd.isVisible = Jd
    }
    class ad {
      constructor(dd, Jd, kd) {
        this.BO = dd, this.thinInstMgr = Jd, this.Rm = kd, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(dd, Jd, kd) {
        const pd = (0, vd.h)(dd, Jd);
        return pd in this.modelCache || (this.modelCache[pd] = (async () => {
          try {
            const pd = await (0, vd.i)(dd, this.BO),
              Nd = new Map;
            for (const dd of pd.getNodes()) Nd.set(dd.name, dd);
            const Wd = (0, vd.d)(null !== Jd && void 0 !== Jd ? Jd : dd, this.BO);
            (0, vd.l)(pd, Wd, {
              keepTransforms: void 0 !== kd,
              onProcessedMesh: dd => {
                (0, vd.o)(dd), this.BO.apd(dd, !1), dd.isVisible = !1
              }
            });
            for (const dd of pd.rootNodes) Bd(dd);
            const Pd = void 0 === kd ? null : (0, xd.e)(kd, (dd => {
              var Jd, kd;
              return null !== (Jd = null === (kd = Nd.get(dd)) || void 0 === kd ? void 0 : kd.rotationQuaternion) && void 0 !== Jd ? Jd : null
            }));
            return {
              nodesByName: Nd,
              bones: null === Pd ? null : new qd(Pd, Nd)
            }
          } catch (Nd) {
            throw delete this.modelCache[pd], console.error(`Failed to load preview attachment ${pd}:`, Nd), Nd
          }
        })()), this.modelCache[pd]
      }
      async update(dd, Jd) {
        var kd;
        const {
          thinInstMgr: pd,
          Rm: Nd
        } = this;
        this.cosmeticNames[dd] = Jd;
        const Wd = this.attachmentsByType[dd];
        if (Wd)
          for (const {
              mesh: Zd,
              destNode: gd,
              bones: Cd
            }
            of Wd) {
            null !== Cd && (0, Id.jb)(this.shownBones, Cd), sd(Zd, !1);
            const dd = pd.getNamedNode(Nd, gd);
            pd.detachTransformNodeIfFound(Zd, Nd, dd)
          }
        this.attachmentsByType[dd] = [];
        const Pd = (0, Gd.h)(dd, Jd);
        if (null !== Pd && void 0 !== Pd && null !== (kd = Pd.attachments) && void 0 !== kd && kd.length)
          for (const Zd of Pd.attachments) {
            let kd;
            try {
              kd = await this.loadModel(Zd.modelGlb, Zd.texture, Zd.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[dd] !== Jd) return;
            const Wd = kd.nodesByName.get(Zd.modelNode);
            if (!Wd) {
              console.error(`Preview attachment node ${Zd.modelNode} not found in ${Zd.modelGlb}`);
              continue
            }
            sd(Wd, !0), (0, vd.s)(Wd, Zd.overlayColour);
            const Pd = pd.getNamedNode(Nd, Zd.destNode);
            pd.attachTransformNode(Wd, Nd, Pd), this.attachmentsByType[dd].push({
              mesh: Wd,
              destNode: Zd.destNode,
              bones: kd.bones
            }), null !== kd.bones && this.shownBones.push(kd.bones)
          }
      }
      writePoses(dd) {
        for (const Jd of this.shownBones) Jd.write(dd)
      }
    }
    var Md = kd(37334),
      Fd = (kd(41095), kd(40475), kd(41099), kd(9274));
    let Yd, md, bd, Sd, jd, Xd, fd, nd, Ud, yd;
    const Dd = document.createElement("canvas");
    async function Td() {
      await new Promise((dd => {
        setTimeout((() => {
          dd()
        }), 100)
      }))
    }
    Dd.classList.add("CharCustomisationPreviewCanvas");
    const Ed = {};

    function cd(dd, Jd) {
      Dd.width = dd, Dd.height = Jd, Yd.resize()
    }
    let hd = 0;
    class rd {
      constructor(dd, Jd) {
        this.framing = Jd, this.ready = yd, this.dev = {
          canvas: () => Dd,
          isolateHead(dd) {
            const Jd = Xd.getNodeNames(fd);
            for (let kd = 0; kd < Jd.length; kd++) "HeadMesh" !== Jd[kd] && "__root__" !== Jd[kd] && "TorsoNode" !== Jd[kd] && Xd.setNodeEnabled(fd, kd, !1);
            if (dd) {
              const dd = Xd.getNamedNode(fd, "HeadMesh");
              Xd.setNodeDisableColorWrite(fd, dd, !0, (dd => {
                const Jd = new Od.StandardMaterial(`${dd.name}_depthOnly`, dd.Wm());
                return Jd.disableColorWrite = !0, Jd
              }))
            }
            Xd.setPosition(fd, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const kd = dd.getBoundingClientRect();
        cd(kd.width, kd.height), hd++, Yd.stopRenderLoop(), Yd.runRenderLoop((() => {
          var dd, Jd;
          null === (dd = nd) || void 0 === dd || dd.render(Yd.getDeltaTime()), null === (Jd = Ud) || void 0 === Jd || Jd.writePoses(performance.now() / 1e3), bd.render()
        }))
      }
      isReady() {
        return !!Sd
      }
      setCosmetic(dd, Jd) {
        ! function(dd, Jd) {
          if (!Sd) return;
          const Pd = (0, Nd.e)();
          Pd.SF(!1), pd.e.Player.meshApi.updatePlayerCosmetic(Pd.kU, fd, dd, Jd, !0), "cape" === dd && (Jd === Wd.d ? jd.XM(!1) : (jd.XM(!0), jd.material.diffuseTexture = new ed.d(kd(38955)(`./cape_${Jd}.png`), jd.Wm(), {
            invertY: !1,
            samplingMode: ed.d.NEAREST_NEAREST_MIPLINEAR
          })));
          Ed[dd] = Ud.update(dd, Jd)
        }(dd, Jd)
      }
      playEmote(dd) {
        if (!nd) return;
        if (!dd) return void nd.stopAnimation(gd.h.Emote);
        const Jd = (0, Pd.h)((0, Zd.h)(dd).animation);
        nd.startAnimation(Jd, gd.h.Emote, 0, Zd.d)
      }
      async untilDrawn(dd) {
        if (await Td(), "cape" === dd && jd) {
          const dd = jd.material,
            Jd = null === dd || void 0 === dd ? void 0 : dd.diffuseTexture;
          Jd && !Jd.isReady() && (await new Promise((dd => {
            Jd.onLoadObservable.addOnce((() => {
              dd()
            }))
          })), await Td())
        }
        Ed[dd] && (await Ed[dd], await Td()), await bd.whenReadyAsync(), await new Promise((dd => {
          bd.onAfterRenderObservable.addOnce((() => {
            dd()
          }))
        }))
      }
      setOrbit(dd) {
        ud(dd)
      }
      resetCamera() {
        md.inertialAlphaOffset = 0, md.inertialBetaOffset = 0, md.inertialRadiusOffset = 0, ud(Fd.c[this.framing])
      }
      resize(dd, Jd) {
        cd(dd, Jd)
      }
      close() {
        this.closed || (this.closed = !0, hd--, 0 === hd && Yd.stopRenderLoop())
      }
    }

    function ud(dd) {
      let {
        yaw: Jd,
        pitch: kd,
        radius: pd,
        target: Nd
      } = dd;
      md.alpha = Jd, md.beta = kd, pd && (md.radius = pd), Nd && md.target.set(Nd[0], Nd[1], Nd[2])
    }

    function td(dd, Jd) {
      return dd.appendChild(Dd), Yd || function() {
        Yd = new Cd.b(Dd, !0, {
          preserveDrawingBuffer: !0
        });
        const dd = (0, Nd.e)();
        Yd.vpd = dd.UL.engine.vpd, bd = new Kd.e(Yd), bd.clearColor = new Ld.c(0, 0, 0, 0), bd.ambientColor = new Ld.Color3(1, 1, 1), md = new od.e("Ge", 0, 0, 1, ld.IL.Zero(), bd), md.attachControl(Dd, !0), md.panningSensibility = 0, yd = (0, pd.z)("Player", bd, !0).then((Jd => {
          Sd = Jd.meshApi, jd = Jd.capeMesh, Xd = dd.UL.Qm;
          const kd = 8.33;
          fd = (0, pd.m)("Player", kd, !0, !0), Xd.setPosition(fd, 0, -8.33, 0);
          const Nd = Xd.getNamedNode(fd, "BodyMesh");
          Xd.attachTransformNode(jd, fd, Nd), Xd.set(fd, "aOpacity", 1), Xd.WU(fd, "aOpacity", 1), Ud = new ad(bd, Xd, fd), nd = new Rd.AnimatorState, nd.Jl = dd, nd.thinInstMgr = Xd, nd.Rm = fd, nd.rkd = Xd.qpd(fd, 0), nd.modelLifeformType = "Player", nd.nodeNameAliases = (0, Md.b)("Player").nodeNameAliases;
          const Wd = jd.pU().boundingBox;
          jd.position.y = ((24 - Wd.maximum.y + Wd.minimum.y) / 2 - 1 / 32) / kd, jd.position.z = -1 / kd, jd.rotationQuaternion = null;
          const Pd = Math.PI / 18,
            Zd = Wd.maximum.y / kd;
          jd.rotation.x = Pd;
          const gd = Math.cos(Pd),
            Cd = Math.sin(Pd);
          jd.position.y += Zd * (1 - gd) + 0 * Cd, jd.position.z -= Zd * Cd + 0 * (1 - gd);
          const Kd = new Od.StandardMaterial("capeMaterial", jd.Wm());
          jd.material = Kd;
          const od = new Ld.Color3(1, 1, 1);
          Kd.diffuseColor = new Ld.Color3, Kd.specularColor = new Ld.Color3, Kd.emissiveColor = new Ld.Color3, Kd.ambientColor = new Ld.Color3, od.scaleToRef(.43, Kd.diffuseColor), od.scaleToRef(1.75, Kd.ambientColor), Kd.freeze();
          const ed = new Qd.c("light", new ld.IL(-.1, 1, -.3), bd);
          ed.diffuse = new Ld.Color3(1, 1, 1), ed.specular = new Ld.Color3(1, 1, 1), ed.groundColor = new Ld.Color3(.5, .5, .5)
        }))
      }(), new rd(dd, Jd)
    }
  },
  38947: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => ld
    });
    var pd = kd(37341),
      Nd = kd(37351),
      Wd = kd(37632),
      Pd = kd(37360),
      Zd = kd(37347);

    function gd(dd) {
      return `\n\t\t\t\t${(0,Zd.w)(dd,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, Zd.z)(dd, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, Zd.z)(dd, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, Zd.n)(dd, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Cd(dd, Jd) {
      let kd = (0, Zd.Cb)(dd, "skele" + (Jd - 1));
      for (let Nd = Jd - 2; Nd >= 0; Nd--) kd = (0, Zd.sb)(dd, `boneIdx == ${Nd}`, (0, Zd.Cb)(dd, `skele${Nd}`), kd);
      const pd = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,Zd.z)(dd,"int","boneIdx",(0,Zd.yb)(dd,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,Zd.z)(dd,"vec3","bone",kd)}\n\t\t\t\t${(0,Zd.z)(dd,"vec2","pivot",(0,Zd.n)(dd,"vec2","0.0",`${(0,Zd.Jb)(dd,"position")}.z`))}\n\t\t\t\t${(0,Zd.V)(dd)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${pd}));`:`positionUpdated.yz += ${pd};`}\n\t\t`
    }

    function Kd(dd) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,Zd.n)(dd,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const od = {
        x: 0,
        y: 0,
        z: 0,
        lkd(dd, Jd) {
          return this.x = dd[Jd], this.y = dd[Jd + 1], this.z = dd[Jd + 2], this
        }
      },
      ld = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (dd, Jd) => ({
          ...(0, pd.b)("CAPE"),
          BLOXD_CAPE_BONES: `${dd}`,
          BLOXD_CAPE_MAX_Y: (0, Nd.mb)(Jd)
        }),
        getUniforms(dd) {
          return (0, Wd.c)(function(dd) {
            const Jd = [];
            for (let kd = 0; kd < dd; kd++) Jd.push({
              name: `skele${kd}`,
              type: "highp vec3"
            });
            return Jd
          }(this.skeleLen), "vertex", dd)
        },
        bind(dd) {
          for (let Jd = 0; Jd < this.skeleLen; Jd++) dd.updateVector3(`skele${Jd}`, od.lkd(this.skele, 3 * Jd))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(dd, Jd) {
          return "vertex" !== dd ? null : {
            CUSTOM_VERTEX_DEFINITIONS: gd(Jd),
            CUSTOM_VERTEX_UPDATE_POSITION: Cd(Jd, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: Kd(Jd)
          }
        }
      };
    (0, Pd.n)(ld)
  },
  38817: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Kd,
      f: () => od
    });
    var pd = kd(37341),
      Nd = kd(37632),
      Wd = kd(37347),
      Pd = kd(37360);
    const Zd = "bloxdTextLodBias",
      gd = [{
        name: Zd,
        type: "float"
      }],
      Cd = "bloxdTextSample",
      Kd = {
        planes: -.5,
        boards: -.5
      },
      od = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, pd.b)("TEXT_SAMPLER"),
        getUniforms: dd => (0, Nd.c)(gd, "fragment", dd),
        bind(dd) {
          dd.updateFloat(Zd, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(dd, Jd) {
          if ("fragment" !== dd) return null;
          const kd = (0, Wd.F)(Jd, `vec4 ${Cd}(sampler2D s, vec2 uv, float bias)`, `fn ${Cd}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            pd = (0, Wd.F)(Jd, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Nd = `${(0,Wd.M)(Jd,"vDiffuseUV")} + uvOffset`,
            Pd = (0, Wd.F)(Jd, `${Cd}(diffuseSampler, ${Nd}, ${(0,Wd.Cb)(Jd,Zd)})`, `${Cd}(diffuseSampler, diffuseSamplerSampler, ${Nd}, ${(0,Wd.Cb)(Jd,Zd)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${kd} {\n\t\t\t\t\t${(0,Wd.z)(Jd,"vec4","texel",pd)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Wd.n)(Jd,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,Wd.n)(Jd,"vec3","0.0")}, ${(0,Wd.n)(Jd,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, Wd.A)(Jd)]: `baseColor = ${Pd};`
          }
        }
      };
    (0, Pd.n)(od)
  },
  41099: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      CapeMaterialPlugin: () => vd,
      HueTintMaterialPlugin: () => xd,
      LifeformMaterialPlugin: () => qd,
      OverlayMaterialPlugin: () => Bd
    });
    var pd = kd(41102),
      Nd = kd(38202);
    class Wd extends((0, pd.g)(Nd.c)) {}(0, pd.k)(Nd.c, Wd);
    var Pd = kd(37337);
    class Zd extends((0, pd.g)(Pd.h)) {}(0, pd.k)(Pd.h, Zd);
    var gd = kd(38054);
    class Cd extends((0, pd.g)(gd.f)) {}(0, pd.k)(gd.f, Cd);
    var Kd = kd(37613),
      od = kd(40251),
      ld = kd(37610);
    class Qd extends((0, pd.g)(ld.f)) {
      constructor(dd, Jd, kd) {
        super(dd, Jd, kd), (0, Kd.j)(dd)
      }
      dispose(dd) {
        (0, Kd.l)(this._material), super.dispose(dd)
      }
    }(0, pd.k)(ld.f, Qd), (0, ld.j)({
      disableUnusedSpecularTerm: pd.e,
      isLightingDisabled: dd => dd instanceof od.StandardMaterial && dd.disableLighting
    });
    var Ld = kd(38817);
    class Od extends((0, pd.g)(Ld.f)) {}(0, pd.k)(Ld.f, Od);
    var ed = kd(38947),
      Rd = kd(37446),
      Id = kd(38317),
      Gd = kd(37389);
    class vd extends((0, pd.g)(ed.e)) {}(0, pd.k)(ed.e, vd);
    class xd extends((0, pd.g)(Rd.b)) {}(0, pd.k)(Rd.b, xd);
    class qd extends((0, pd.g)(Id.n)) {}(0, pd.k)(Id.n, qd);
    class Bd extends((0, pd.g)(Gd.d)) {}(0, pd.k)(Gd.d, Bd)
  },
  41102: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Td,
      g: () => Id,
      k: () => td
    });
    var pd = kd(40251),
      Nd = kd(41108),
      Wd = kd(41148),
      Pd = kd(41115),
      Zd = kd(38016),
      gd = kd(38027),
      Cd = kd(38034),
      Kd = kd(38043),
      od = kd(37381),
      ld = kd(37386),
      Qd = kd(41117),
      Ld = kd(37360),
      Od = kd(37366),
      ed = kd(37347);

    function Rd(dd, Jd) {
      return Object.assign((function(dd, kd, pd, Nd) {
        return Jd(this.featureState, dd, kd, pd, Nd)
      }), {
        hQ: dd
      })
    }

    function Id(dd) {
      const Jd = class extends Qd.d {
          constructor(Jd, kd) {
            const pd = (0, Od.$)(Jd),
              Nd = pd && (0, Od.v)(pd, dd.name);
            for (var Wd = arguments.length, Pd = new Array(Wd > 2 ? Wd - 2 : 0), Zd = 2; Zd < Wd; Zd++) Pd[Zd - 2] = arguments[Zd];
            super(Jd, dd.name, dd.priority, Nd ? Nd.defines : dd.defines(...Pd), !1), this.featureState = void 0, this.featureState = kd, this._pluginManager._addPlugin(this), this._enable(!0), (0, Od.w)(this._material, dd, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return dd.className
          }
          isCompatible(dd) {
            return dd === ed.d.GLSL || dd === ed.d.WGSL
          }
        },
        kd = (0, Ld.i)(dd);
      for (const [pd, Nd] of Object.entries(Ld.c)) {
        const Wd = dd[pd];
        if (Wd) {
          const dd = kd[pd];
          Object.defineProperty(Jd.prototype, Nd, {
            value: Rd(Wd, dd),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Jd
    }
    class Gd extends(Id(Zd.d)) {}
    var vd = kd(39791),
      xd = kd(41125);
    const qd = new WeakMap;

    function Bd(dd, Jd, kd) {
      let pd = qd.get(kd);
      pd || (pd = new Map, qd.set(kd, pd));
      const {
        url: Nd
      } = dd;
      let Wd = pd.get(Nd);
      return Wd || (Wd = async function(dd, Jd, kd) {
        const {
          width: pd,
          height: Nd
        } = dd.getSize(), Wd = Math.round(Nd / pd), Zd = Jd && Jd.byteLength === pd * pd * Wd * 4 ? Jd : dd._readPixelsSync();
        return new xd.d(Zd, pd, pd, Wd, vd.b.TEXTUREFORMAT_RGBA, kd, !0, !1, Pd.d.NEAREST_NEAREST_MIPLINEAR)
      }(dd, Jd, kd), pd.set(Nd, Wd), Wd.catch((() => {
        pd.delete(Nd)
      }))), Wd
    }
    var sd = kd(38047);
    class ad extends(Id(gd.i)) {
      constructor(dd, Jd) {
        super(dd, Jd), Jd.textures.forEach(((dd, Jd) => {
          dd.mirror.onLoadObservable.add((dd => {
            this.setTextureArrayData(dd, Jd).catch((dd => {
              console.error(`Failed to build texture array for atlas ${Jd}`, dd)
            }))
          }))
        })), (0, sd.j)(Jd, dd.shaderLanguage)
      }
      async setTextureArrayData(dd, Jd) {
        var kd, pd;
        const Nd = this.featureState,
          {
            width: Wd,
            height: Pd
          } = dd.getSize(),
          Zd = Nd.useWebGL2 ? await Bd(dd, null !== (kd = null === (pd = Nd.sources.pixels) || void 0 === pd ? void 0 : pd[Jd]) && void 0 !== kd ? kd : null, this._material.Wm()) : null;
        (0, sd.e)(this._material, Nd, Jd, Zd, Wd, Math.round(Pd / Wd), this._material.shaderLanguage)
      }
    }
    var Md = kd(41134),
      Fd = kd(40292),
      Yd = kd(37245),
      md = kd(41140),
      bd = kd(40402),
      Sd = kd(40282),
      jd = kd(41090),
      Xd = kd(37797),
      fd = kd(41144);
    class nd extends Md.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Ud = {
      Mesh: md.d,
      TransformNode: jd.e,
      kL: Md.e,
      VertexBuffer: Md.f,
      BoundingInfo: Fd.b,
      IL: Yd.IL,
      ArenaBuffer: nd,
      SubMesh: Sd.c,
      VertexData: bd.c,
      MirroredGeometry: fd.b,
      meshFromArrays: fd.c,
      plainMeshFromArrays: fd.g
    };
    (0, Xd.g)(Ud);
    var yd = kd(37613);
    class Dd extends(Id(Kd.f)) {
      constructor(dd, Jd) {
        if (super(dd, Jd), dd instanceof pd.StandardMaterial && Jd.dirLightCount > 0) {
          const Jd = dd,
            kd = Jd._blockDirtyMechanism;
          Jd._blockDirtyMechanism = !0, dd.disableLighting = !0, Jd._blockDirtyMechanism = kd;
          const pd = (0, Od.$)(dd);
          pd && (pd.disableLighting = !0, (0, Od.Y)(pd))
        }(0, yd.j)(dd)
      }
      dispose(dd) {
        (0, yd.l)(this._material), super.dispose(dd)
      }
    }

    function Td(dd, Jd) {
      if (!(Jd instanceof pd.StandardMaterial) || Jd.specularTexture) return;
      const {
        r: kd,
        g: Nd,
        b: Wd
      } = Jd.specularColor;
      0 === kd && 0 === Nd && 0 === Wd && (dd.SPECULARTERM = !1)
    }(0, Kd.c)({
      disableUnusedSpecularTerm: Td
    });
    var Ed = kd(37473),
      cd = kd(37807);
    const hd = new RegExp(`^#define ${Cd.c}\\s*$`, "m");
    class rd extends(Id(Cd.i)) {
      constructor(dd, Jd) {
        super(dd, Jd), this.pL = !1, Jd.ditherOnlyWhileFading && (cd.e.add(dd), this.prewarmDitherTwins(dd))
      }
      prewarmDitherTwins(dd) {
        const Jd = new WeakSet;
        dd.onEffectCreatedObservable.add((kd => {
          let {
            effect: pd,
            subMesh: Nd
          } = kd;
          if (this.featureState.prewarmingDither || Jd.has(pd)) return;
          Jd.add(pd);
          const Wd = null === Nd || void 0 === Nd ? void 0 : Nd.getMesh();
          Wd && !hd.test(pd.defines) && dd.Wm().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Wd) || Jd.delete(pd)
          }))
        }))
      }
      prewarmDither(dd) {
        if (this.pL || dd.lq()) return !1;
        const Jd = new Sd.c(0, 0, 0, 0, 0, dd, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(dd, Jd)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Jd.effect
      }
      dispose(dd) {
        this.pL = !0, super.dispose(dd)
      }
    }
    const ud = new Map;

    function td(dd, Jd) {
      ud.set(dd, Jd)
    }
    td(Zd.d, Gd), td(gd.i, ad), td(Cd.i, rd), td(Kd.f, Dd), (0, od.c)({
      create: (dd, Jd) => {
        const kd = new pd.StandardMaterial(dd.name, Jd);
        return (0, Ed.p)(dd, kd), kd.detailMap._pluginDefineNames
      },
      write: (dd, Jd, kd) => {
        (0, Ed.R)(dd.mirror, Jd, kd)
      },
      addFeature: (dd, Jd, kd) => {
        const pd = ud.get(Jd.feature);
        if (!pd) throw new Error(`${Jd.feature.name} has no plugin class (registerPluginClass)`);
        new pd(dd.mirror, Jd.state, ...kd)
      },
      texture: (dd, Jd, kd) => {
        let {
          url: pd,
          noMipmap: Nd,
          invertY: Wd,
          samplingMode: Zd,
          data: gd,
          sets: Cd
        } = kd;
        if (!gd) {
          const kd = new Pd.d(pd, Jd, Nd, Wd, Zd);
          return Object.assign(kd, Cd), void(0, ld.K)(dd, kd)
        }
        const Kd = {},
          od = new Promise(((dd, Jd) => {
            Kd.onLoad = dd, Kd.onError = (dd, kd) => {
              Jd(new Error(`${gd.context}: ${(null===kd||void 0===kd?void 0:kd.message)||dd||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Qd,
            bytes: Ld,
            label: Od
          } = gd,
          ed = {
            noMipmap: Nd,
            invertY: !1,
            samplingMode: Zd,
            ...Kd,
            mimeType: Qd,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Rd = new Pd.d(null, Jd, ed);
        Ed.s.set(Rd, od), Object.assign(Rd, Cd), Rd.updateURL(pd, Ld);
        const Id = Rd.getInternalTexture();
        Id && (Id.label = Od), dd.uvSet = Rd.coordinatesIndex, dd.matrix.set((0, Ed.L)(Rd)), (0, ld.K)(dd, Rd)
      },
      cube: (dd, Jd, kd) => {
        let {
          rootUrl: pd,
          files: Wd,
          noMipmap: Zd,
          luminance: gd
        } = kd;
        const {
          samplingMode: Cd
        } = dd.sampler, Kd = Cd === (0, ld.D)(Zd) ? null : () => {
          (0, Ed.I)(od, Cd)
        }, od = new Nd.e(pd, Jd, null, Zd, Wd, Kd, null, (0, ld.A)(gd));
        od.coordinatesMode = Pd.d.SKYBOX_MODE, (0, ld.K)(dd, od)
      },
      canvas: (dd, Jd, kd) => {
        let {
          width: pd,
          height: Nd,
          mipmaps: Zd,
          samplingMode: gd,
          hasAlpha: Cd = !1,
          wrap: Kd = Pd.d.CLAMP_ADDRESSMODE
        } = kd;
        const od = new Wd.b(Jd, {
          width: pd,
          height: Nd
        }, dd, Zd, gd);
        od.hasAlpha = Cd, od.wrapU = Kd, od.wrapV = Kd;
        const ld = (0, Ed.z)(od);
        return (0, Ed.B)(ld, od), ld
      }
    })
  },
  41144: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Kd,
      c: () => od,
      g: () => ld
    });
    var pd = kd(41134),
      Nd = kd(40032),
      Wd = kd(40292),
      Pd = kd(40411),
      Zd = kd(41140),
      gd = kd(40402),
      Cd = kd(37682);
    class Kd extends Pd.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (dd, Jd) => {
          this.releaseUnlessInstanced(Jd)
        }, this.onLinked = null
      }
      link(dd) {
        var Jd;
        (0, Cd.j)(dd), this.model = dd, null === (Jd = this.onLinked) || void 0 === Jd || Jd.call(this, dd)
      }
      relink() {
        this.release();
        const dd = [];
        for (const Nd of Object.values(this._vertexBuffers))
          if (!Nd.getIsInstanced()) {
            const {
              byteOffset: Jd,
              byteStride: kd,
              type: pd,
              normalized: Wd
            } = Nd;
            dd.push({
              kind: Nd.getKind(),
              data: Nd.getData(),
              offset: Jd,
              stride: kd,
              components: Nd.getSize(),
              glType: pd,
              isNormalized: Wd
            })
          } const Jd = this._indices.length ? this._indices : null,
          {
            minimum: kd,
            maximum: pd
          } = this.extend;
        this.link(new Cd.c(dd, Jd, this.getTotalVertices(), new Float64Array(kd.spd()), new Float64Array(pd.spd())))
      }
      copy(dd) {
        if (!this.model) return super.copy(dd);
        const Jd = new Kd(dd, this.Wm()),
          kd = this.ipd(void 0, !0);
        kd && Jd.setIndices(kd);
        let Pd = !1;
        for (const Wd in this._vertexBuffers) {
          const dd = this._vertexBuffers[Wd],
            kd = dd.getData();
          if (!kd) continue;
          const Zd = dd.getSize(),
            {
              type: gd,
              byteOffset: Cd,
              byteStride: Kd,
              normalized: od
            } = dd;
          Pd ||= dd.isUpdatable();
          const ld = dd.getIsInstanced() ? (kd instanceof Array ? 4 * kd.length : kd.byteLength) / Kd : this.getTotalVertices(),
            Qd = (0, Nd.t)(kd, Zd, gd, Cd, Kd, ld, !0),
            Ld = {
              updatable: dd.isUpdatable(),
              stride: Zd,
              type: gd,
              normalized: od,
              takeBufferOwnership: !0,
              instanced: dd.getIsInstanced()
            };
          Jd.setVerticesBuffer(new pd.f(this.eL(), Qd, Wd, Ld), ld)
        }
        return Jd._updatable = Pd, Jd._boundingInfo = new Wd.b(this.extend.minimum, this.extend.maximum), Jd.relink(), Jd
      }
      static mergeMeshes(dd, Jd, kd, pd, Nd, Wd) {
        const gd = dd[0].Wm(),
          Cd = new Zd.d(dd[0].name + "_merged", gd),
          od = new Kd(Pd.e.RandomId(), gd, void 0, !1, Cd);
        try {
          if (!Zd.d.MergeMeshes(dd, Jd, kd, Cd, Nd, Wd)) return Cd.dispose(), null
        } catch (ld) {
          throw Cd.dispose(), ld
        }
        return od.relink(), Cd
      }
      removeVerticesData(dd) {
        this.releaseUnlessInstanced(dd), super.removeVerticesData(dd)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(dd) {
        var Jd;
        dd && null !== (Jd = this.getVertexBuffer(dd)) && void 0 !== Jd && Jd.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Cd.t)(this.model), this.model = null)
      }
    }

    function od(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Zd.d(dd, kd);
      const Nd = (0, Cd.h)(Jd),
        {
          positions: Wd,
          normals: od,
          uvs: ld,
          indices: Qd,
          named: Ld = {}
        } = Jd,
        Od = new gd.c;
      Od.positions = Wd, Od.normals = null !== od && void 0 !== od ? od : null, Od.uvs = null !== ld && void 0 !== ld ? ld : null, Od.indices = Qd;
      const ed = new Kd(Pd.e.RandomId(), kd, Od, !1, pd);
      for (const {
          kind: Pd,
          components: Zd
        }
        of Nd.vertexAttributes) Pd in Ld && pd.setVerticesData(Pd, Ld[Pd], !1, Zd);
      return ed.link(Nd), pd
    }

    function ld(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Nd = new Zd.d(dd, kd),
        {
          positions: Wd,
          normals: Pd,
          uvs: Cd,
          indices: Kd
        } = Jd;
      return Object.assign(new gd.c, {
        positions: Wd,
        normals: Pd,
        uvs: Cd,
        indices: Kd
      }).applyToMesh(Nd, pd), Nd
    }
  },
  8734: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Kd,
      d: () => Zd,
      e: () => gd
    });
    var pd = kd(2196),
      Nd = kd(1260),
      Wd = kd(2203);
    const Pd = ",";

    function Zd(dd) {
      if (!dd) return [];
      const Jd = new Set,
        kd = [];
      for (const pd of dd.split(Pd)) {
        const dd = pd.trim();
        if ((0, Wd.i)(dd) && !Jd.has(dd) && (Jd.add(dd), kd.push(dd), kd.length >= Nd.n)) break
      }
      return kd
    }

    function gd(dd) {
      const Jd = new Set,
        kd = [];
      for (const pd of dd)
        if ((0, Wd.i)(pd) && !Jd.has(pd) && (Jd.add(pd), kd.push(pd), kd.length >= Nd.n)) break;
      return kd.join(Pd)
    }

    function Cd() {
      return gd(Wd.e)
    }

    function Kd(dd) {
      var Jd;
      return "emote" === dd ? Cd() : null !== (Jd = od[dd][0]) && void 0 !== Jd ? Jd : ld[dd]
    }
    const od = Nd.x.reduce(((dd, Jd) => {
        const kd = [];
        for (const Wd in pd.e[Jd]) {
          var Nd;
          "default" === (null === (Nd = (0, pd.h)(Jd, Wd)) || void 0 === Nd ? void 0 : Nd.cosmeticPack) && kd.push(Wd)
        }
        return dd[Jd] = kd, dd
      }), {}),
      ld = Nd.x.reduce(((dd, Jd) => (dd[Jd] = Object.keys(pd.e[Jd])[0], dd)), {})
  },
  38955: (dd, Jd, kd) => {
    var pd = {
      "./cape_cow_cream.png": 28259,
      "./cape_cow_normal.png": 28265,
      "./cape_creator_level1.png": 28268,
      "./cape_creator_level2.png": 28277,
      "./cape_creator_level3.png": 28285,
      "./cape_none.png": 28288,
      "./cape_pig.png": 28293,
      "./cape_sheep.png": 28299,
      "./cape_super.png": 28303,
      "./cape_super_inverted.png": 28306,
      "./cape_youtuber.png": 28311
    };

    function Nd(dd) {
      var Jd = Wd(dd);
      return kd(Jd)
    }

    function Wd(dd) {
      if (!kd.o(pd, dd)) {
        var Jd = new Error("Cannot find module '" + dd + "'");
        throw Jd.code = "MODULE_NOT_FOUND", Jd
      }
      return pd[dd]
    }
    Nd.keys = function() {
      return Object.keys(pd)
    }, Nd.resolve = Wd, dd.exports = Nd, Nd.id = 38955
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);