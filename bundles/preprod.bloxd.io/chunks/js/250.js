export const id = 250;
export const ids = [250];
export const modules = {
  39017: (pp, ip, cp) => {
    var Op = {
      "./cape_cow_cream.png": 28171,
      "./cape_cow_normal.png": 28176,
      "./cape_creator_level1.png": 28184,
      "./cape_creator_level2.png": 28191,
      "./cape_creator_level3.png": 28197,
      "./cape_none.png": 28204,
      "./cape_pig.png": 28213,
      "./cape_sheep.png": 28217,
      "./cape_super.png": 28226,
      "./cape_super_inverted.png": 28234,
      "./cape_youtuber.png": 28239
    };

    function op(pp) {
      var ip = Ip(pp);
      return cp(ip)
    }

    function Ip(pp) {
      if (!cp.o(Op, pp)) {
        var ip = new Error("Cannot find module '" + pp + "'");
        throw ip.code = "MODULE_NOT_FOUND", ip
      }
      return Op[pp]
    }
    op.keys = function() {
      return Object.keys(Op)
    }, op.resolve = Ip, pp.exports = op, op.id = 39017
  },
  41400: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      openCharacterPreview: () => rp
    });
    var Op = cp(38317),
      op = cp(2849),
      Ip = cp(620),
      Sp = cp(37395),
      xp = cp(2281),
      Lp = cp(37385),
      Yp = cp(40024),
      Dp = cp(40289),
      Ap = cp(41300),
      Pp = cp(37313),
      Wp = cp(40443),
      yp = cp(37479),
      Up = cp(40459),
      wp = cp(41353),
      vp = cp(37305),
      tp = cp(1234),
      Hp = cp(2276),
      dp = cp(37459),
      ep = cp(37551);
    class jp {
      constructor(pp, ip) {
        this.pose = pp, this.nodes = void 0, this.nodes = pp.boneNames.map((pp => ip.get(pp)))
      }
      write(pp) {
        this.pose.pose(pp);
        const {
          rotations: ip
        } = this.pose;
        for (let cp = 0; cp < this.nodes.length; cp++) {
          const pp = 4 * cp;
          this.nodes[cp].rotationQuaternion.set(ip[pp], ip[pp + 1], ip[pp + 2], ip[pp + 3])
        }
      }
    }

    function kp(pp) {
      pp.unfreezeWorldMatrix();
      for (const ip of pp.getChildren()) kp(ip)
    }

    function mp(pp, ip) {
      pp.isVisible = ip;
      for (const cp of pp.getChildMeshes()) cp.isVisible = ip
    }
    class Rp {
      constructor(pp, ip, cp) {
        this.pw = pp, this.thinInstMgr = ip, this.FQ = cp, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(pp, ip, cp) {
        const Op = (0, dp.g)(pp, ip);
        return Op in this.modelCache || (this.modelCache[Op] = (async () => {
          try {
            const Op = await (0, dp.j)(pp, this.pw),
              op = new Map;
            for (const pp of Op.getNodes()) op.set(pp.name, pp);
            const Ip = (0, dp.e)(null !== ip && void 0 !== ip ? ip : pp, this.pw);
            (0, dp.l)(Op, Ip, {
              keepTransforms: void 0 !== cp,
              onProcessedMesh: pp => {
                (0, dp.o)(pp), this.pw.TOp(pp, !1), pp.isVisible = !1
              }
            });
            for (const pp of Op.rootNodes) kp(pp);
            const Sp = void 0 === cp ? null : (0, ep.e)(cp, (pp => {
              var ip, cp;
              return null !== (ip = null === (cp = op.get(pp)) || void 0 === cp ? void 0 : cp.rotationQuaternion) && void 0 !== ip ? ip : null
            }));
            return {
              nodesByName: op,
              bones: null === Sp ? null : new jp(Sp, op)
            }
          } catch (op) {
            throw delete this.modelCache[Op], console.error(`Failed to load preview attachment ${Op}:`, op), op
          }
        })()), this.modelCache[Op]
      }
      async update(pp, ip) {
        var cp;
        const {
          thinInstMgr: Op,
          FQ: op
        } = this;
        this.cosmeticNames[pp] = ip;
        const Ip = this.attachmentsByType[pp];
        if (Ip)
          for (const {
              mesh: xp,
              destNode: Lp,
              bones: Yp
            }
            of Ip) {
            null !== Yp && (0, tp.kb)(this.shownBones, Yp), mp(xp, !1);
            const pp = Op.getNamedNode(op, Lp);
            Op.detachTransformNodeIfFound(xp, op, pp)
          }
        this.attachmentsByType[pp] = [];
        const Sp = (0, Hp.m)(pp, ip);
        if (null !== Sp && void 0 !== Sp && null !== (cp = Sp.attachments) && void 0 !== cp && cp.length)
          for (const xp of Sp.attachments) {
            let cp;
            try {
              cp = await this.loadModel(xp.modelGlb, xp.texture, xp.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[pp] !== ip) return;
            const Ip = cp.nodesByName.get(xp.modelNode);
            if (!Ip) {
              console.error(`Preview attachment node ${xp.modelNode} not found in ${xp.modelGlb}`);
              continue
            }
            mp(Ip, !0), (0, dp.q)(Ip, xp.overlayColour);
            const Sp = Op.getNamedNode(op, xp.destNode);
            Op.attachTransformNode(Ip, op, Sp), this.attachmentsByType[pp].push({
              mesh: Ip,
              destNode: xp.destNode,
              bones: cp.bones
            }), null !== cp.bones && this.shownBones.push(cp.bones)
          }
      }
      writePoses(pp) {
        for (const ip of this.shownBones) ip.write(pp)
      }
    }
    var qp = cp(37403),
      Mp = (cp(41333), cp(40663), cp(41339), cp(34466));
    let Cp, Ep, Xp, lp, Qp, Jp, Bp, Np, Tp, fp;
    const bp = document.createElement("canvas");
    async function hp() {
      await new Promise((pp => {
        setTimeout((() => {
          pp()
        }), 100)
      }))
    }
    bp.classList.add("CharCustomisationPreviewCanvas");
    const ap = {};

    function np(pp, ip) {
      bp.width = pp, bp.height = ip, Cp.resize()
    }
    let Fp = 0;
    class gp {
      constructor(pp, ip) {
        this.framing = ip, this.ready = fp, this.dev = {
          canvas: () => bp,
          isolateHead(pp) {
            const ip = Jp.getNodeNames(Bp);
            for (let cp = 0; cp < ip.length; cp++) "HeadMesh" !== ip[cp] && "__root__" !== ip[cp] && "TorsoNode" !== ip[cp] && Jp.setNodeEnabled(Bp, cp, !1);
            if (pp) {
              const pp = Jp.getNamedNode(Bp, "HeadMesh");
              Jp.setNodeDisableColorWrite(Bp, pp, !0, (pp => {
                const ip = new Up.StandardMaterial(`${pp.name}_depthOnly`, pp.Gl());
                return ip.disableColorWrite = !0, ip
              }))
            }
            Jp.setPosition(Bp, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const cp = pp.getBoundingClientRect();
        np(cp.width, cp.height), Fp++, Cp.stopRenderLoop(), Cp.runRenderLoop((() => {
          var pp, ip;
          null === (pp = Np) || void 0 === pp || pp.render(Cp.getDeltaTime()), null === (ip = Tp) || void 0 === ip || ip.writePoses(performance.now() / 1e3), Xp.render()
        }))
      }
      isReady() {
        return !!lp
      }
      setCosmetic(pp, ip) {
        ! function(pp, ip) {
          if (!lp) return;
          const Sp = (0, op.g)();
          Sp.ZC(!1), Op.d.Player.meshApi.updatePlayerCosmetic(Sp.NJ, Bp, pp, ip, !0), "cape" === pp && (ip === Ip.c ? Qp.eC(!1) : (Qp.eC(!0), Qp.material.diffuseTexture = new wp.d(cp(39017)(`./cape_${ip}.png`), Qp.Gl(), {
            invertY: !1,
            samplingMode: wp.d.NEAREST_NEAREST_MIPLINEAR
          })));
          ap[pp] = Tp.update(pp, ip)
        }(pp, ip)
      }
      playEmote(pp) {
        if (!Np) return;
        if (!pp) return void Np.stopAnimation(Lp.e.Emote);
        const ip = (0, Sp.d)((0, xp.g)(pp).animation);
        Np.startAnimation(ip, Lp.e.Emote, 0, xp.c)
      }
      async untilDrawn(pp) {
        if (await hp(), "cape" === pp && Qp) {
          const pp = Qp.material,
            ip = null === pp || void 0 === pp ? void 0 : pp.diffuseTexture;
          ip && !ip.isReady() && (await new Promise((pp => {
            ip.onLoadObservable.addOnce((() => {
              pp()
            }))
          })), await hp())
        }
        ap[pp] && (await ap[pp], await hp()), await Xp.whenReadyAsync(), await new Promise((pp => {
          Xp.onAfterRenderObservable.addOnce((() => {
            pp()
          }))
        }))
      }
      setOrbit(pp) {
        Gp(pp)
      }
      resetCamera() {
        Ep.inertialAlphaOffset = 0, Ep.inertialBetaOffset = 0, Ep.inertialRadiusOffset = 0, Gp(Mp.b[this.framing])
      }
      resize(pp, ip) {
        np(pp, ip)
      }
      close() {
        this.closed || (this.closed = !0, Fp--, 0 === Fp && Cp.stopRenderLoop())
      }
    }

    function Gp(pp) {
      let {
        yaw: ip,
        pitch: cp,
        radius: Op,
        target: op
      } = pp;
      Ep.alpha = ip, Ep.beta = cp, Op && (Ep.radius = Op), op && Ep.target.set(op[0], op[1], op[2])
    }

    function rp(pp, ip) {
      return pp.appendChild(bp), Cp || function() {
        Cp = new Yp.d(bp, !0, {
          preserveDrawingBuffer: !0
        });
        const pp = (0, op.g)();
        Cp.lOp = pp.WU.engine.lOp, Xp = new Dp.c(Cp), Xp.clearColor = new yp.b(0, 0, 0, 0), Xp.ambientColor = new yp.Color3(1, 1, 1), Ep = new Ap.c("Gw", 0, 0, 1, Pp.Zy.Zero(), Xp), Ep.attachControl(bp, !0), Ep.panningSensibility = 0, fp = (0, Op.u)("Player", Xp, !0).then((ip => {
          lp = ip.meshApi, Qp = ip.capeMesh, Jp = pp.WU.EQ;
          const cp = 8.33;
          Bp = (0, Op.n)("Player", cp, !0, !0), Jp.setPosition(Bp, 0, -8.33, 0);
          const op = Jp.getNamedNode(Bp, "BodyMesh");
          Jp.attachTransformNode(Qp, Bp, op), Jp.set(Bp, "aOpacity", 1), Jp.aJ(Bp, "aOpacity", 1), Tp = new Rp(Xp, Jp, Bp), Np = new vp.AnimatorState, Np.HP = pp, Np.thinInstMgr = Jp, Np.FQ = Bp, Np.iOp = Jp.QOp(Bp, 0), Np.modelLifeformType = "Player", Np.nodeNameAliases = (0, qp.d)("Player").nodeNameAliases;
          const Ip = Qp.bJ().boundingBox;
          Qp.position.y = ((24 - Ip.maximum.y + Ip.minimum.y) / 2 - 1 / 32) / cp, Qp.position.z = -1 / cp, Qp.rotationQuaternion = null;
          const Sp = Math.PI / 18,
            xp = Ip.maximum.y / cp;
          Qp.rotation.x = Sp;
          const Lp = Math.cos(Sp),
            Yp = Math.sin(Sp);
          Qp.position.y += xp * (1 - Lp) + 0 * Yp, Qp.position.z -= xp * Yp + 0 * (1 - Lp);
          const Dp = new Up.StandardMaterial("capeMaterial", Qp.Gl());
          Qp.material = Dp;
          const Ap = new yp.Color3(1, 1, 1);
          Dp.diffuseColor = new yp.Color3, Dp.specularColor = new yp.Color3, Dp.emissiveColor = new yp.Color3, Dp.ambientColor = new yp.Color3, Ap.scaleToRef(.43, Dp.diffuseColor), Ap.scaleToRef(1.75, Dp.ambientColor), Dp.freeze();
          const wp = new Wp.d("light", new Pp.Zy(-.1, 1, -.3), Xp);
          wp.diffuse = new yp.Color3(1, 1, 1), wp.specular = new yp.Color3(1, 1, 1), wp.groundColor = new yp.Color3(.5, .5, .5)
        }))
      }(), new gp(pp, ip)
    }
  },
  39014: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Pp
    });
    var Op = cp(37413),
      op = cp(37429),
      Ip = cp(37662),
      Sp = cp(37433),
      xp = cp(37421);

    function Lp(pp) {
      return `\n\t\t\t\t${(0,xp.v)(pp,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, xp.A)(pp, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, xp.A)(pp, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, xp.j)(pp, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Yp(pp, ip) {
      let cp = (0, xp.sb)(pp, "skele" + (ip - 1));
      for (let op = ip - 2; op >= 0; op--) cp = (0, xp.jb)(pp, `boneIdx == ${op}`, (0, xp.sb)(pp, `skele${op}`), cp);
      const Op = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,xp.A)(pp,"int","boneIdx",(0,xp.qb)(pp,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,xp.A)(pp,"vec3","bone",cp)}\n\t\t\t\t${(0,xp.A)(pp,"vec2","pivot",(0,xp.j)(pp,"vec2","0.0",`${(0,xp.zb)(pp,"position")}.z`))}\n\t\t\t\t${(0,xp.Y)(pp)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Op}));`:`positionUpdated.yz += ${Op};`}\n\t\t`
    }

    function Dp(pp) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,xp.j)(pp,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const Ap = {
        x: 0,
        y: 0,
        z: 0,
        vcp(pp, ip) {
          return this.x = pp[ip], this.y = pp[ip + 1], this.z = pp[ip + 2], this
        }
      },
      Pp = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (pp, ip) => ({
          ...(0, Op.b)("CAPE"),
          BLOXD_CAPE_BONES: `${pp}`,
          BLOXD_CAPE_MAX_Y: (0, op.hb)(ip)
        }),
        getUniforms(pp) {
          return (0, Ip.b)(function(pp) {
            const ip = [];
            for (let cp = 0; cp < pp; cp++) ip.push({
              name: `skele${cp}`,
              type: "highp vec3"
            });
            return ip
          }(this.skeleLen), "vertex", pp)
        },
        bind(pp) {
          for (let ip = 0; ip < this.skeleLen; ip++) pp.updateVector3(`skele${ip}`, Ap.vcp(this.skele, 3 * ip))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(pp, ip) {
          return "vertex" !== pp ? null : {
            CUSTOM_VERTEX_DEFINITIONS: Lp(ip),
            CUSTOM_VERTEX_UPDATE_POSITION: Yp(ip, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: Dp(ip)
          }
        }
      };
    (0, Sp.q)(Pp)
  },
  38916: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Dp,
      g: () => Ap
    });
    var Op = cp(37413),
      op = cp(37662),
      Ip = cp(37421),
      Sp = cp(37433);
    const xp = "bloxdTextLodBias",
      Lp = [{
        name: xp,
        type: "float"
      }],
      Yp = "bloxdTextSample",
      Dp = {
        planes: -.5,
        boards: -.5
      },
      Ap = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Op.b)("TEXT_SAMPLER"),
        getUniforms: pp => (0, op.b)(Lp, "fragment", pp),
        bind(pp) {
          pp.updateFloat(xp, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(pp, ip) {
          if ("fragment" !== pp) return null;
          const cp = (0, Ip.G)(ip, `vec4 ${Yp}(sampler2D s, vec2 uv, float bias)`, `fn ${Yp}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Op = (0, Ip.G)(ip, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            op = `${(0,Ip.R)(ip,"vDiffuseUV")} + uvOffset`,
            Sp = (0, Ip.G)(ip, `${Yp}(diffuseSampler, ${op}, ${(0,Ip.sb)(ip,xp)})`, `${Yp}(diffuseSampler, diffuseSamplerSampler, ${op}, ${(0,Ip.sb)(ip,xp)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${cp} {\n\t\t\t\t\t${(0,Ip.A)(ip,"vec4","texel",Op)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Ip.j)(ip,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,Ip.j)(ip,"vec3","0.0")}, ${(0,Ip.j)(ip,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, Ip.B)(ip)]: `baseColor = ${Sp};`
          }
        }
      };
    (0, Sp.q)(Ap)
  },
  41339: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      CapeMaterialPlugin: () => dp,
      HueTintMaterialPlugin: () => ep,
      LifeformMaterialPlugin: () => jp,
      OverlayMaterialPlugin: () => kp
    });
    var Op = cp(41345),
      op = cp(38232);
    class Ip extends((0, Op.d)(op.d)) {}(0, Op.g)(op.d, Ip);
    var Sp = cp(37411);
    class xp extends((0, Op.d)(Sp.h)) {}(0, Op.g)(Sp.h, xp);
    var Lp = cp(38071);
    class Yp extends((0, Op.d)(Lp.i)) {}(0, Op.g)(Lp.i, Yp);
    var Dp = cp(37655),
      Ap = cp(40459),
      Pp = cp(37646);
    class Wp extends((0, Op.d)(Pp.i)) {
      constructor(pp, ip, cp) {
        super(pp, ip, cp), (0, Dp.g)(pp)
      }
      dispose(pp) {
        (0, Dp.i)(this._material), super.dispose(pp)
      }
    }(0, Op.g)(Pp.i, Wp), (0, Pp.j)({
      disableUnusedSpecularTerm: Op.c,
      isLightingDisabled: pp => pp instanceof Ap.StandardMaterial && pp.disableLighting
    });
    var yp = cp(38916);
    class Up extends((0, Op.d)(yp.g)) {}(0, Op.g)(yp.g, Up);
    var wp = cp(39014),
      vp = cp(37496),
      tp = cp(38352),
      Hp = cp(37454);
    class dp extends((0, Op.d)(wp.b)) {}(0, Op.g)(wp.b, dp);
    class ep extends((0, Op.d)(vp.d)) {}(0, Op.g)(vp.d, ep);
    class jp extends((0, Op.d)(tp.q)) {}(0, Op.g)(tp.q, jp);
    class kp extends((0, Op.d)(Hp.d)) {}(0, Op.g)(Hp.d, kp)
  },
  41345: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => ap,
      d: () => tp,
      g: () => Zp
    });
    var Op = cp(40459),
      op = cp(41347),
      Ip = cp(41393),
      Sp = cp(41353),
      xp = cp(38045),
      Lp = cp(38055),
      Yp = cp(38061),
      Dp = cp(38064),
      Ap = cp(37445),
      Pp = cp(37448),
      Wp = cp(41359),
      yp = cp(37433),
      Up = cp(37436),
      wp = cp(37421);

    function vp(pp, ip) {
      return Object.assign((function(pp, cp, Op, op) {
        return ip(this.featureState, pp, cp, Op, op)
      }), {
        Py: pp
      })
    }

    function tp(pp) {
      const ip = class extends Wp.c {
          constructor(ip, cp) {
            const Op = (0, Up.$)(ip),
              op = Op && (0, Up.s)(Op, pp.name);
            for (var Ip = arguments.length, Sp = new Array(Ip > 2 ? Ip - 2 : 0), xp = 2; xp < Ip; xp++) Sp[xp - 2] = arguments[xp];
            super(ip, pp.name, pp.priority, op ? op.defines : pp.defines(...Sp), !1), this.featureState = void 0, this.featureState = cp, this._pluginManager._addPlugin(this), this._enable(!0), (0, Up.v)(this._material, pp, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return pp.className
          }
          isCompatible(pp) {
            return pp === wp.b.GLSL || pp === wp.b.WGSL
          }
        },
        cp = (0, yp.l)(pp);
      for (const [Op, op] of Object.entries(yp.e)) {
        const Ip = pp[Op];
        if (Ip) {
          const pp = cp[Op];
          Object.defineProperty(ip.prototype, op, {
            value: vp(Ip, pp),
            writable: !0,
            configurable: !0
          })
        }
      }
      return ip
    }
    class Hp extends(tp(xp.d)) {}
    var dp = cp(40024),
      ep = cp(41367),
      jp = cp(41375);

    function kp(pp, ip, cp) {
      return (0, jp.h)(cp, ip.urls, (() => async function(pp, ip, cp) {
        const {
          width: Op
        } = pp[0].getSize(), op = pp.map(((pp, cp) => {
          var op;
          const Ip = Math.round(pp.getSize().height / Op),
            Sp = null === ip || void 0 === ip ? void 0 : ip[cp];
          return {
            pixels: Sp && Sp.byteLength === Op * Op * Ip * 4 ? Sp : null !== (op = mp.get(pp.getInternalTexture())) && void 0 !== op ? op : pp._readPixelsSync(),
            layers: Ip
          }
        })), Ip = cp.gy().getCaps().texture2DArrayMaxLayerCount, xp = (0, jp.d)(op, Op, Ip).map((pp => {
          let {
            pixels: ip,
            layers: op
          } = pp;
          return {
            atlas: new ep.c(ip, Op, Op, op, dp.d.TEXTUREFORMAT_RGBA, cp, !0, !1, Sp.d.NEAREST_NEAREST_MIPLINEAR),
            layers: op
          }
        }));
        return pp.forEach(((pp, ip) => {
          const Op = pp.getInternalTexture();
          mp.has(Op) || (! function(pp, ip) {
            const cp = ip.createRawTexture(new Uint8Array(4), 1, 1, dp.d.TEXTUREFORMAT_RGBA, !1, !1, Sp.d.NEAREST_SAMPLINGMODE);
            pp._hardwareTexture.release(), ip.unbindAllTextures(), cp._swapAndDie(pp, !1)
          }(Op, cp.gy()), mp.set(Op, op[ip].pixels))
        })), xp
      }(pp, ip.pixels, cp)))
    }
    const mp = new WeakMap;
    var Rp = cp(38069);
    class qp extends(tp(Lp.f)) {
      constructor(pp, ip) {
        super(pp, ip), this.loaded = new Set, this.mirrors = void 0, this.mirrors = ip.textures.map((pp => pp.mirror)), this.mirrors.forEach(((pp, ip) => {
          pp.onLoadObservable.add((pp => {
            this.setTextureArrayData(pp, ip).catch((pp => {
              console.error(`Failed to build the texture arrays, at atlas ${ip}`, pp)
            }))
          }))
        })), (0, Rp.n)(ip, pp.shaderLanguage)
      }
      async setTextureArrayData(pp, ip) {
        const cp = this.featureState,
          {
            width: Op,
            height: op
          } = pp.getSize(),
          Ip = this._material.shaderLanguage;
        if (!cp.useWebGL2) return void(0, Rp.f)(this._material, cp, ip, Op, Math.round(op / Op), Ip);
        if (this.loaded.add(ip), this.loaded.size < this.mirrors.length) return;
        const Sp = await kp(this.mirrors, cp.sources, this._material.Gl());
        (0, Rp.b)(this._material, cp, Sp, Op, Ip)
      }
    }
    var Mp = cp(41378),
      Cp = cp(40498),
      Ep = cp(37313),
      Xp = cp(41383),
      lp = cp(40589),
      Qp = cp(40481),
      Jp = cp(41325),
      Bp = cp(37800),
      Np = cp(41391);
    class Tp extends Mp.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const fp = {
      Mesh: Xp.c,
      TransformNode: Jp.b,
      my: Mp.c,
      VertexBuffer: Mp.f,
      BoundingInfo: Cp.d,
      Zy: Ep.Zy,
      ArenaBuffer: Tp,
      SubMesh: Qp.d,
      VertexData: lp.d,
      MirroredGeometry: Np.b,
      meshFromArrays: Np.e,
      plainMeshFromArrays: Np.f
    };
    (0, Bp.g)(fp);
    var bp = cp(37655);
    class hp extends(tp(Dp.g)) {
      constructor(pp, ip) {
        if (super(pp, ip), pp instanceof Op.StandardMaterial && ip.dirLightCount > 0) {
          const ip = pp,
            cp = ip._blockDirtyMechanism;
          ip._blockDirtyMechanism = !0, pp.disableLighting = !0, ip._blockDirtyMechanism = cp;
          const Op = (0, Up.$)(pp);
          Op && (Op.disableLighting = !0, (0, Up.Y)(Op))
        }(0, bp.g)(pp)
      }
      dispose(pp) {
        (0, bp.i)(this._material), super.dispose(pp)
      }
    }

    function ap(pp, ip) {
      if (!(ip instanceof Op.StandardMaterial) || ip.specularTexture) return;
      const {
        r: cp,
        g: op,
        b: Ip
      } = ip.specularColor;
      0 === cp && 0 === op && 0 === Ip && (pp.SPECULARTERM = !1)
    }(0, Dp.d)({
      disableUnusedSpecularTerm: ap
    });
    var np = cp(37519),
      Fp = cp(37807);
    const gp = new RegExp(`^#define ${Yp.b}\\s*$`, "m");
    class Gp extends(tp(Yp.h)) {
      constructor(pp, ip) {
        super(pp, ip), this.Ry = !1, ip.ditherOnlyWhileFading && (Fp.d.add(pp), this.prewarmDitherTwins(pp))
      }
      prewarmDitherTwins(pp) {
        const ip = new WeakSet;
        pp.onEffectCreatedObservable.add((cp => {
          let {
            effect: Op,
            subMesh: op
          } = cp;
          if (this.featureState.prewarmingDither || ip.has(Op)) return;
          ip.add(Op);
          const Ip = null === op || void 0 === op ? void 0 : op.getMesh();
          Ip && !gp.test(Op.defines) && pp.Gl().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Ip) || ip.delete(Op)
          }))
        }))
      }
      prewarmDither(pp) {
        if (this.Ry || pp.uR()) return !1;
        const ip = new Qp.d(0, 0, 0, 0, 0, pp, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(pp, ip)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== ip.effect
      }
      dispose(pp) {
        this.Ry = !0, super.dispose(pp)
      }
    }
    const rp = new Map;

    function Zp(pp, ip) {
      rp.set(pp, ip)
    }
    Zp(xp.d, Hp), Zp(Lp.f, qp), Zp(Yp.h, Gp), Zp(Dp.g, hp), (0, Ap.e)({
      create: (pp, ip) => {
        const cp = new Op.StandardMaterial(pp.name, ip);
        return (0, np.p)(pp, cp), cp.detailMap._pluginDefineNames
      },
      write: (pp, ip, cp) => {
        (0, np.S)(pp.mirror, ip, cp)
      },
      addFeature: (pp, ip, cp) => {
        const Op = rp.get(ip.feature);
        if (!Op) throw new Error(`${ip.feature.name} has no plugin class (registerPluginClass)`);
        new Op(pp.mirror, ip.state, ...cp)
      },
      texture: (pp, ip, cp) => {
        let {
          url: Op,
          noMipmap: op,
          invertY: Ip,
          samplingMode: xp,
          data: Lp,
          sets: Yp
        } = cp;
        if (!Lp) {
          const cp = new Sp.d(Op, ip, op, Ip, xp);
          return Object.assign(cp, Yp), void(0, Pp.K)(pp, cp)
        }
        const Dp = {},
          Ap = new Promise(((pp, ip) => {
            Dp.onLoad = pp, Dp.onError = (pp, cp) => {
              ip(new Error(`${Lp.context}: ${(null===cp||void 0===cp?void 0:cp.message)||pp||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Wp,
            bytes: yp,
            label: Up
          } = Lp,
          wp = {
            noMipmap: op,
            invertY: !1,
            samplingMode: xp,
            ...Dp,
            mimeType: Wp,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          vp = new Sp.d(null, ip, wp);
        np.t.set(vp, Ap), Object.assign(vp, Yp), vp.updateURL(Op, yp);
        const tp = vp.getInternalTexture();
        tp && (tp.label = Up), pp.uvSet = vp.coordinatesIndex, pp.matrix.set((0, np.L)(vp)), (0, Pp.K)(pp, vp)
      },
      cube: (pp, ip, cp) => {
        let {
          rootUrl: Op,
          files: Ip,
          noMipmap: xp,
          luminance: Lp
        } = cp;
        const {
          samplingMode: Yp
        } = pp.sampler, Dp = Yp === (0, Pp.z)(xp) ? null : () => {
          (0, np.J)(Ap, Yp)
        }, Ap = new op.b(Op, ip, null, xp, Ip, Dp, null, (0, Pp.w)(Lp));
        Ap.coordinatesMode = Sp.d.SKYBOX_MODE, (0, Pp.K)(pp, Ap)
      },
      canvas: (pp, ip, cp) => {
        let {
          width: Op,
          height: op,
          mipmaps: xp,
          samplingMode: Lp,
          hasAlpha: Yp = !1,
          wrap: Dp = Sp.d.CLAMP_ADDRESSMODE
        } = cp;
        const Ap = new Ip.e(ip, {
          width: Op,
          height: op
        }, pp, xp, Lp);
        Ap.hasAlpha = Yp, Ap.wrapU = Dp, Ap.wrapV = Dp;
        const Pp = (0, np.B)(Ap);
        return (0, np.D)(Pp, Ap), Pp
      }
    })
  },
  41391: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Dp,
      e: () => Ap,
      f: () => Pp
    });
    var Op = cp(41378),
      op = cp(40273),
      Ip = cp(40498),
      Sp = cp(40593),
      xp = cp(41383),
      Lp = cp(40589),
      Yp = cp(37698);
    class Dp extends Sp.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (pp, ip) => {
          this.releaseUnlessInstanced(ip)
        }, this.onLinked = null
      }
      link(pp) {
        var ip;
        (0, Yp.m)(pp), this.model = pp, null === (ip = this.onLinked) || void 0 === ip || ip.call(this, pp)
      }
      relink() {
        this.release();
        const pp = [];
        for (const op of Object.values(this._vertexBuffers))
          if (!op.getIsInstanced()) {
            const {
              byteOffset: ip,
              byteStride: cp,
              type: Op,
              normalized: Ip
            } = op;
            pp.push({
              kind: op.getKind(),
              data: op.getData(),
              offset: ip,
              stride: cp,
              components: op.getSize(),
              glType: Op,
              isNormalized: Ip
            })
          } const ip = this._indices.length ? this._indices : null,
          {
            minimum: cp,
            maximum: Op
          } = this.extend;
        this.link(new Yp.f(pp, ip, this.getTotalVertices(), new Float64Array(cp.BOp()), new Float64Array(Op.BOp())))
      }
      copy(pp) {
        if (!this.model) return super.copy(pp);
        const ip = new Dp(pp, this.Gl()),
          cp = this.NOp(void 0, !0);
        cp && ip.setIndices(cp);
        let Sp = !1;
        for (const Ip in this._vertexBuffers) {
          const pp = this._vertexBuffers[Ip],
            cp = pp.getData();
          if (!cp) continue;
          const xp = pp.getSize(),
            {
              type: Lp,
              byteOffset: Yp,
              byteStride: Dp,
              normalized: Ap
            } = pp;
          Sp ||= pp.isUpdatable();
          const Pp = pp.getIsInstanced() ? (cp instanceof Array ? 4 * cp.length : cp.byteLength) / Dp : this.getTotalVertices(),
            Wp = (0, op.s)(cp, xp, Lp, Yp, Dp, Pp, !0),
            yp = {
              updatable: pp.isUpdatable(),
              stride: xp,
              type: Lp,
              normalized: Ap,
              takeBufferOwnership: !0,
              instanced: pp.getIsInstanced()
            };
          ip.setVerticesBuffer(new Op.f(this.gy(), Wp, Ip, yp), Pp)
        }
        return ip._updatable = Sp, ip._boundingInfo = new Ip.d(this.extend.minimum, this.extend.maximum), ip.relink(), ip
      }
      static mergeMeshes(pp, ip, cp, Op, op, Ip) {
        const Lp = pp[0].Gl(),
          Yp = new xp.c(pp[0].name + "_merged", Lp),
          Ap = new Dp(Sp.b.RandomId(), Lp, void 0, !1, Yp);
        try {
          if (!xp.c.MergeMeshes(pp, ip, cp, Yp, op, Ip)) return Yp.dispose(), null
        } catch (Pp) {
          throw Yp.dispose(), Pp
        }
        return Ap.relink(), Yp
      }
      removeVerticesData(pp) {
        this.releaseUnlessInstanced(pp), super.removeVerticesData(pp)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(pp) {
        var ip;
        pp && null !== (ip = this.getVertexBuffer(pp)) && void 0 !== ip && ip.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Yp.v)(this.model), this.model = null)
      }
    }

    function Ap(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new xp.c(pp, cp);
      const op = (0, Yp.j)(ip),
        {
          positions: Ip,
          normals: Ap,
          uvs: Pp,
          indices: Wp,
          named: yp = {}
        } = ip,
        Up = new Lp.d;
      Up.positions = Ip, Up.normals = null !== Ap && void 0 !== Ap ? Ap : null, Up.uvs = null !== Pp && void 0 !== Pp ? Pp : null, Up.indices = Wp;
      const wp = new Dp(Sp.b.RandomId(), cp, Up, !1, Op);
      for (const {
          kind: Sp,
          components: xp
        }
        of op.vertexAttributes) Sp in yp && Op.setVerticesData(Sp, yp[Sp], !1, xp);
      return wp.link(op), Op
    }

    function Pp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const op = new xp.c(pp, cp),
        {
          positions: Ip,
          normals: Sp,
          uvs: Yp,
          indices: Dp
        } = ip;
      return Object.assign(new Lp.d, {
        positions: Ip,
        normals: Sp,
        uvs: Yp,
        indices: Dp
      }).applyToMesh(op, Op), op
    }
  },
  41375: (pp, ip, cp) => {
    function Op(pp, ip, cp) {
      const Op = ip * ip * 4,
        op = pp[0].layers,
        Ip = op * (pp.length - 1) + pp[pp.length - 1].layers,
        Sp = new Uint8Array(Ip * Op);
      pp.forEach(((ip, cp) => {
        const Ip = cp + 1 < pp.length ? Math.min(ip.layers, op) : ip.layers;
        Sp.set(new Uint8Array(ip.pixels.buffer, ip.pixels.byteOffset, Ip * Op), cp * op * Op)
      }));
      const xp = Math.max(1, Math.min(Ip, cp || Ip));
      if (xp === Ip) return [{
        pixels: Sp,
        layers: Ip
      }];
      const Lp = [];
      for (let Yp = 0; Yp < Ip; Yp += xp) {
        const pp = Math.min(Ip, Yp + xp);
        Lp.push({
          pixels: Sp.slice(Yp * Op, pp * Op),
          layers: pp - Yp
        })
      }
      return Lp
    }
    cp.d(ip, {
      d: () => Op,
      h: () => Ip
    });
    const op = new WeakMap;

    function Ip(pp, ip, cp) {
      var Op, Ip;
      const Sp = null !== (Op = op.get(pp)) && void 0 !== Op ? Op : new Map;
      op.set(pp, Sp);
      const xp = null !== (Ip = Sp.get(ip[0])) && void 0 !== Ip ? Ip : [];
      Sp.set(ip[0], xp);
      const Lp = xp.find((pp => pp.urls.length === ip.length && pp.urls.every(((pp, cp) => pp === ip[cp]))));
      if (Lp) return Lp.built;
      const Yp = {
        urls: [...ip],
        built: cp()
      };
      return xp.push(Yp), Yp.built.catch((() => {
        xp.splice(xp.indexOf(Yp), 1)
      })), Yp.built
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);