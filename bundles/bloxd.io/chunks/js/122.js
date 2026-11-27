export const id = 122;
export const ids = [122];
export const modules = {
  42974: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Nr,
      f: () => Er,
      g: () => xr,
      k: () => pr,
      m: () => mr
    });
    var Zr = Qr(1279),
      Wr = Qr(3139),
      ar = Qr(38656),
      jr = Qr(39038);
    class Ir {
      constructor(rr, Sr) {
        this.pose = rr, this.nodes = void 0, this.nodes = rr.boneNames.map((rr => Sr.get(rr)))
      }
      write(rr) {
        this.pose.pose(rr), (0, jr.o)(this.pose, this.nodes)
      }
    }

    function fr(rr) {
      rr.unfreezeWorldMatrix();
      for (const Sr of rr.getChildren()) fr(Sr)
    }
    async function Er(rr, Sr, Qr, Zr) {
      let {
        keepTransforms: Wr,
        backFaceCulling: jr
      } = Zr;
      const Ir = await (0, ar.n)(Sr, rr),
        Er = (0, ar.h)(null !== Qr && void 0 !== Qr ? Qr : Sr, rr, void 0, jr);
      (0, ar.o)(Ir, Er, {
        keepTransforms: Wr,
        backFaceCulling: jr,
        onProcessedMesh: Sr => {
          rr.XWr(Sr, !1), Sr.isVisible = !1
        }
      });
      for (const ar of Ir.rootNodes) fr(ar);
      return Ir
    }

    function pr(rr, Sr) {
      rr.isVisible = Sr;
      for (const Qr of rr.getChildMeshes()) Qr.isVisible = Sr
    }

    function xr(rr) {
      const Sr = new Map;
      for (const Qr of rr.getNodes()) Sr.set(Qr.name, Qr);
      return Sr
    }

    function mr(rr, Sr, Qr, Zr) {
      pr(rr, !0), (0, ar.q)(rr, Sr.overlayColour), Qr.attachTransformNode(rr, Zr, Qr.getNamedNode(Zr, Sr.destNode))
    }
    class Nr {
      constructor(rr, Sr, Qr) {
        this.Dt = rr, this.thinInstMgr = Sr, this.JC = Qr, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(rr, Sr, Qr) {
        const Zr = (0, ar.l)(rr, Sr);
        return Zr in this.modelCache || (this.modelCache[Zr] = (async () => {
          try {
            const Zr = xr(await Er(this.Dt, rr, Sr, {
                keepTransforms: void 0 !== Qr,
                backFaceCulling: !1
              })),
              Wr = void 0 === Qr ? null : (0, jr.h)(Qr, (rr => {
                const Sr = Zr.get(rr);
                return Sr ? (0, jr.g)(Sr) : null
              }));
            return {
              nodesByName: Zr,
              bones: null === Wr ? null : new Ir(Wr, Zr)
            }
          } catch (Wr) {
            throw delete this.modelCache[Zr], console.error(`Failed to load preview attachment ${Zr}:`, Wr), Wr
          }
        })()), this.modelCache[Zr]
      }
      async update(rr, Sr) {
        var Qr;
        const {
          thinInstMgr: ar,
          JC: jr
        } = this;
        this.cosmeticNames[rr] = Sr;
        const Ir = this.attachmentsByType[rr];
        if (Ir)
          for (const {
              mesh: Wr,
              destNode: Er,
              bones: xr
            }
            of Ir) {
            null !== xr && (0, Zr.ob)(this.shownBones, xr), pr(Wr, !1);
            const rr = ar.getNamedNode(jr, Er);
            ar.detachTransformNodeIfFound(Wr, jr, rr)
          }
        this.attachmentsByType[rr] = [];
        const fr = (0, Wr.k)(rr, Sr);
        if (null !== fr && void 0 !== fr && null !== (Qr = fr.attachments) && void 0 !== Qr && Qr.length)
          for (const Zr of fr.attachments) {
            let Qr;
            try {
              Qr = await this.loadModel(Zr.modelGlb, Zr.texture, Zr.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[rr] !== Sr) return;
            const Wr = Qr.nodesByName.get(Zr.modelNode);
            Wr ? (mr(Wr, Zr, ar, jr), this.attachmentsByType[rr].push({
              mesh: Wr,
              destNode: Zr.destNode,
              bones: Qr.bones
            }), null !== Qr.bones && this.shownBones.push(Qr.bones)) : console.error(`Preview attachment node ${Zr.modelNode} not found in ${Zr.modelGlb}`)
          }
      }
      writePoses(rr) {
        for (const Sr of this.shownBones) Sr.write(rr)
      }
    }
  },
  40371: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => mr
    });
    var Zr = Qr(38694),
      Wr = Qr(38813),
      ar = Qr(38804),
      jr = Qr(38715),
      Ir = Qr(38702);

    function fr(rr) {
      return `\n\t\t\t\t${(0,Ir.A)(rr,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, Ir.E)(rr, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, Ir.E)(rr, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, Ir.p)(rr, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Er(rr, Sr) {
      let Qr = (0, Ir.zb)(rr, "skele" + (Sr - 1));
      for (let Wr = Sr - 2; Wr >= 0; Wr--) Qr = (0, Ir.vb)(rr, `boneIdx == ${Wr}`, (0, Ir.zb)(rr, `skele${Wr}`), Qr);
      const Zr = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,Ir.E)(rr,"int","boneIdx",(0,Ir.xb)(rr,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,Ir.E)(rr,"vec3","bone",Qr)}\n\t\t\t\t${(0,Ir.E)(rr,"vec2","pivot",(0,Ir.p)(rr,"vec2","0.0",`${(0,Ir.Hb)(rr,"position")}.z`))}\n\t\t\t\t${(0,Ir.fb)(rr)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Zr}));`:`positionUpdated.yz += ${Zr};`}\n\t\t`
    }

    function pr(rr) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,Ir.p)(rr,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const xr = {
        x: 0,
        y: 0,
        z: 0,
        dp(rr, Sr) {
          return this.x = rr[Sr], this.y = rr[Sr + 1], this.z = rr[Sr + 2], this
        }
      },
      mr = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (rr, Sr) => ({
          ...(0, Zr.b)("CAPE"),
          BLOXD_CAPE_BONES: `${rr}`,
          BLOXD_CAPE_MAX_Y: (0, Wr.tb)(Sr)
        }),
        getUniforms(rr) {
          return (0, ar.e)(function(rr) {
            const Sr = [];
            for (let Qr = 0; Qr < rr; Qr++) Sr.push({
              name: `skele${Qr}`,
              type: "highp vec3"
            });
            return Sr
          }(this.skeleLen), "vertex", rr)
        },
        bind(rr) {
          for (let Sr = 0; Sr < this.skeleLen; Sr++) rr.updateVector3(`skele${Sr}`, xr.dp(this.skele, 3 * Sr))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(rr, Sr) {
          return "vertex" !== rr ? null : {
            CUSTOM_VERTEX_DEFINITIONS: fr(Sr),
            CUSTOM_VERTEX_UPDATE_POSITION: Er(Sr, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: pr(Sr)
          }
        }
      };
    (0, jr.k)(mr)
  },
  40263: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => pr,
      h: () => xr
    });
    var Zr = Qr(38694),
      Wr = Qr(38804),
      ar = Qr(38702),
      jr = Qr(38715);
    const Ir = "bloxdTextLodBias",
      fr = [{
        name: Ir,
        type: "float"
      }],
      Er = "bloxdTextSample",
      pr = {
        planes: -.5,
        boards: -.5
      },
      xr = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Zr.b)("TEXT_SAMPLER"),
        getUniforms: rr => (0, Wr.e)(fr, "fragment", rr),
        bind(rr) {
          rr.updateFloat(Ir, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(rr, Sr) {
          if ("fragment" !== rr) return null;
          const Qr = (0, ar.L)(Sr, `vec4 ${Er}(sampler2D s, vec2 uv, float bias)`, `fn ${Er}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Zr = (0, ar.L)(Sr, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Wr = `${(0,ar.Y)(Sr,"vDiffuseUV")} + uvOffset`,
            jr = (0, ar.L)(Sr, `${Er}(diffuseSampler, ${Wr}, ${(0,ar.zb)(Sr,Ir)})`, `${Er}(diffuseSampler, diffuseSamplerSampler, ${Wr}, ${(0,ar.zb)(Sr,Ir)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${Qr} {\n\t\t\t\t\t${(0,ar.E)(Sr,"vec4","texel",Zr)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,ar.p)(Sr,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,ar.p)(Sr,"vec3","0.0")}, ${(0,ar.p)(Sr,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, ar.G)(Sr)]: `baseColor = ${jr};`
          }
        }
      };
    (0, jr.k)(xr)
  },
  42986: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      CapeMaterialPlugin: () => er,
      HueTintMaterialPlugin: () => Kr,
      LifeformMaterialPlugin: () => yr,
      OverlayMaterialPlugin: () => Br
    });
    var Zr = Qr(42995),
      Wr = Qr(39507);
    class ar extends((0, Zr.h)(Wr.e)) {}(0, Zr.l)(Wr.e, ar);
    var jr = Qr(38809);
    class Ir extends((0, Zr.h)(jr.i)) {}(0, Zr.l)(jr.i, Ir);
    var fr = Qr(39348);
    class Er extends((0, Zr.h)(fr.h)) {}(0, Zr.l)(fr.h, Er);
    var pr = Qr(38831),
      xr = Qr(42100),
      mr = Qr(38824);
    class Nr extends((0, Zr.h)(mr.e)) {
      constructor(rr, Sr, Qr) {
        super(rr, Sr, Qr), (0, pr.j)(rr)
      }
      dispose(rr) {
        (0, pr.m)(this._material), super.dispose(rr)
      }
    }(0, Zr.l)(mr.e, Nr), (0, mr.i)({
      disableUnusedSpecularTerm: Zr.d,
      isLightingDisabled: rr => rr instanceof xr.StandardMaterial && rr.disableLighting
    });
    var Ur = Qr(40263);
    class tr extends((0, Zr.h)(Ur.h)) {}(0, Zr.l)(Ur.h, tr);
    var hr = Qr(40371),
      zr = Qr(38692),
      Yr = Qr(39632),
      nr = Qr(38819);
    class er extends((0, Zr.h)(hr.e)) {}(0, Zr.l)(hr.e, er);
    class Kr extends((0, Zr.h)(zr.e)) {}(0, Zr.l)(zr.e, Kr);
    class yr extends((0, Zr.h)(Yr.p)) {}(0, Zr.l)(Yr.p, yr);
    class Br extends((0, Zr.h)(nr.b)) {}(0, Zr.l)(nr.b, Br)
  },
  9996: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr,
      g: () => jr,
      i: () => Ir,
      j: () => fr
    });
    var Zr = Qr(34);
    const Wr = "touchSprintChanged";
    let ar = !0;

    function jr() {
      return ar
    }

    function Ir(rr) {
      rr !== ar && (ar = rr, Zr.i.Jp(Wr, rr))
    }

    function fr(rr, Sr) {
      return null !== rr && null !== Sr && rr > Sr
    }
  },
  42995: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ir,
      h: () => nr,
      l: () => Dr
    });
    var Zr = Qr(42100),
      Wr = Qr(43001),
      ar = Qr(43041),
      jr = Qr(43008),
      Ir = Qr(39324),
      fr = Qr(39332),
      Er = Qr(39337),
      pr = Qr(39342),
      xr = Qr(38788),
      mr = Qr(38747),
      Nr = Qr(38754),
      Ur = Qr(43012),
      tr = Qr(38715),
      hr = Qr(38736),
      zr = Qr(38702);

    function Yr(rr, Sr) {
      return Object.assign((function(rr, Qr, Zr, Wr) {
        return Sr(this.featureState, rr, Qr, Zr, Wr)
      }), {
        Wx: rr
      })
    }

    function nr(rr) {
      const Sr = class extends Ur.e {
          constructor(Sr, Qr) {
            const Zr = (0, hr.Y)(Sr),
              Wr = Zr && (0, hr.v)(Zr, rr.name);
            for (var ar = arguments.length, jr = new Array(ar > 2 ? ar - 2 : 0), Ir = 2; Ir < ar; Ir++) jr[Ir - 2] = arguments[Ir];
            super(Sr, rr.name, rr.priority, Wr ? Wr.defines : rr.defines(...jr), !1), this.featureState = void 0, this.featureState = Qr, this._pluginManager._addPlugin(this), this._enable(!0), (0, hr.x)(this._material, rr, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return rr.className
          }
          isCompatible(rr) {
            return rr === zr.d.GLSL || rr === zr.d.WGSL
          }
        },
        Qr = (0, tr.h)(rr);
      for (const [Zr, Wr] of Object.entries(tr.c)) {
        const ar = rr[Zr];
        if (ar) {
          const rr = Qr[Zr];
          Object.defineProperty(Sr.prototype, Wr, {
            value: Yr(ar, rr),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Sr
    }
    class er extends(nr(Ir.c)) {}
    var Kr = Qr(41725),
      yr = Qr(43021),
      Br = Qr(43027);

    function Tr(rr, Sr, Qr) {
      return (0, Br.f)(Qr, Sr.urls, (() => async function(rr, Sr, Qr) {
        const {
          width: Zr
        } = rr[0].getSize(), Wr = rr.map(((rr, Qr) => {
          var Wr;
          const ar = Math.round(rr.getSize().height / Zr),
            jr = null === Sr || void 0 === Sr ? void 0 : Sr[Qr];
          return {
            pixels: jr && jr.byteLength === Zr * Zr * ar * 4 ? jr : null !== (Wr = vr.get(rr.getInternalTexture())) && void 0 !== Wr ? Wr : rr._readPixelsSync(),
            layers: ar
          }
        })), ar = Math.min(Qr.MU().getCaps().texture2DArrayMaxLayerCount, 256), Ir = (0, Br.b)(Wr, Zr, ar).map((rr => {
          let {
            pixels: Sr,
            layers: Wr
          } = rr;
          return {
            atlas: new yr.b(Sr, Zr, Zr, Wr, Kr.d.TEXTUREFORMAT_RGBA, Qr, !0, !1, jr.e.NEAREST_NEAREST_MIPLINEAR),
            layers: Wr
          }
        }));
        return rr.forEach(((rr, Sr) => {
          const Zr = rr.getInternalTexture();
          vr.has(Zr) || (! function(rr, Sr) {
            const Qr = Sr.createRawTexture(new Uint8Array(4), 1, 1, Kr.d.TEXTUREFORMAT_RGBA, !1, !1, jr.e.NEAREST_SAMPLINGMODE);
            rr._hardwareTexture.release(), Sr.unbindAllTextures(), Qr._swapAndDie(rr, !1)
          }(Zr, Qr.MU()), vr.set(Zr, Wr[Sr].pixels))
        })), Ir
      }(rr, Sr.pixels, Qr)))
    }
    const vr = new WeakMap;
    var Or = Qr(39345);
    class Lr extends(nr(fr.j)) {
      constructor(rr, Sr) {
        super(rr, Sr), this.loaded = new Set, this.mirrors = void 0, this.mirrors = Sr.textures.map((rr => rr.mirror)), Sr.useWebGL2 && !Sr.imagesPerAtlas.length && Sr.textureAtlases.splice(0, Sr.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((rr, Sr) => {
          rr.onLoadObservable.add((rr => {
            this.setTextureArrayData(rr, Sr).catch((rr => {
              console.error(`Failed to build the texture arrays, at atlas ${Sr}`, rr)
            }))
          }))
        })), (0, Or.i)(Sr, rr.shaderLanguage)
      }
      async setTextureArrayData(rr, Sr) {
        const Qr = this.featureState,
          {
            width: Zr,
            height: Wr
          } = rr.getSize(),
          ar = this._material.shaderLanguage;
        if (!Qr.useWebGL2) return void(0, Or.e)(this._material, Qr, Sr, Zr, Math.round(Wr / Zr), ar);
        if (this.loaded.add(Sr), this.loaded.size < this.mirrors.length) return;
        const jr = await Tr(this.mirrors, Qr.sources, this._material.eC());
        (0, Or.c)(this._material, Qr, jr, Zr, ar)
      }
    }
    var lr = Qr(43031),
      Xr = Qr(42147),
      Pr = Qr(38555),
      Hr = Qr(43037),
      qr = Qr(42256),
      Rr = Qr(42134),
      gr = Qr(42966),
      Cr = Qr(39002),
      Mr = Qr(43039);
    class Gr extends lr.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const kr = {
      Mesh: Hr.d,
      TransformNode: gr.b,
      Dp: lr.d,
      VertexBuffer: lr.g,
      BoundingInfo: Xr.c,
      kU: Pr.kU,
      ArenaBuffer: Gr,
      SubMesh: Rr.b,
      VertexData: qr.b,
      MirroredGeometry: Mr.d,
      meshFromArrays: Mr.g,
      plainMeshFromArrays: Mr.j
    };
    (0, Cr.g)(kr);
    var Ar = Qr(38831);
    class Vr extends(nr(pr.e)) {
      constructor(rr, Sr) {
        if (super(rr, Sr), rr instanceof Zr.StandardMaterial && Sr.dirLightCount > 0) {
          const Sr = rr,
            Qr = Sr._blockDirtyMechanism;
          Sr._blockDirtyMechanism = !0, rr.disableLighting = !0, Sr._blockDirtyMechanism = Qr;
          const Zr = (0, hr.Y)(rr);
          Zr && (Zr.disableLighting = !0, (0, hr.W)(Zr))
        }(0, Ar.j)(rr)
      }
      dispose(rr) {
        (0, Ar.m)(this._material), super.dispose(rr)
      }
    }

    function ir(rr, Sr) {
      if (!(Sr instanceof Zr.StandardMaterial) || Sr.specularTexture) return;
      const {
        r: Qr,
        g: Wr,
        b: ar
      } = Sr.specularColor;
      0 === Qr && 0 === Wr && 0 === ar && (rr.SPECULARTERM = !1)
    }(0, pr.d)({
      disableUnusedSpecularTerm: ir
    });
    var wr = Qr(38762),
      cr = Qr(39013);
    const Fr = new RegExp(`^#define ${Er.d}\\s*$`, "m");
    class or extends(nr(Er.k)) {
      constructor(rr, Sr) {
        super(rr, Sr), this.vU = !1, Sr.ditherOnlyWhileFading && (cr.e.add(rr), this.prewarmDitherTwins(rr))
      }
      prewarmDitherTwins(rr) {
        const Sr = new WeakSet;
        rr.onEffectCreatedObservable.add((Qr => {
          let {
            effect: Zr,
            subMesh: Wr
          } = Qr;
          if (this.featureState.prewarmingDither || Sr.has(Zr)) return;
          Sr.add(Zr);
          const ar = null === Wr || void 0 === Wr ? void 0 : Wr.getMesh();
          ar && !Fr.test(Zr.defines) && rr.eC().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(ar) || Sr.delete(Zr)
          }))
        }))
      }
      prewarmDither(rr) {
        if (this.vU || rr.Dv()) return !1;
        const Sr = new Rr.b(0, 0, 0, 0, 0, rr, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(rr, Sr)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Sr.effect
      }
      dispose(rr) {
        this.vU = !0, super.dispose(rr)
      }
    }
    class br extends(nr(xr.d)) {}
    const Jr = new Map;

    function Dr(rr, Sr) {
      Jr.set(rr, Sr)
    }
    Dr(Ir.c, er), Dr(fr.j, Lr), Dr(Er.k, or), Dr(pr.e, Vr), Dr(xr.d, br), (0, mr.d)({
      create: (rr, Sr) => {
        const Qr = new Zr.StandardMaterial(rr.name, Sr);
        return (0, wr.p)(rr, Qr), Qr.detailMap._pluginDefineNames
      },
      write: (rr, Sr, Qr) => {
        (0, wr.V)(rr.mirror, Sr, Qr)
      },
      addFeature: (rr, Sr, Qr) => {
        const Zr = Jr.get(Sr.feature);
        if (!Zr) throw new Error(`${Sr.feature.name} has no plugin class (registerPluginClass)`);
        new Zr(rr.mirror, Sr.state, ...Qr)
      },
      texture: (rr, Sr, Qr) => {
        let {
          url: Zr,
          noMipmap: Wr,
          invertY: ar,
          samplingMode: Ir,
          data: fr,
          sets: Er
        } = Qr;
        if (!fr) {
          const Qr = new jr.e(Zr, Sr, Wr, ar, Ir);
          return Object.assign(Qr, Er), void(0, Nr.H)(rr, Qr)
        }
        const pr = {},
          xr = new Promise(((rr, Sr) => {
            pr.onLoad = rr, pr.onError = (rr, Qr) => {
              Sr(new Error(`${fr.context}: ${(null===Qr||void 0===Qr?void 0:Qr.message)||rr||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: mr,
            bytes: Ur,
            label: tr
          } = fr,
          hr = {
            noMipmap: Wr,
            invertY: !1,
            samplingMode: Ir,
            ...pr,
            mimeType: mr,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          zr = new jr.e(null, Sr, hr);
        wr.s.set(zr, xr), Object.assign(zr, Er), zr.updateURL(Zr, Ur);
        const Yr = zr.getInternalTexture();
        Yr && (Yr.label = tr), rr.uvSet = zr.coordinatesIndex, rr.matrix.set((0, wr.N)(zr)), (0, Nr.H)(rr, zr)
      },
      cube: (rr, Sr, Qr) => {
        let {
          rootUrl: Zr,
          files: ar,
          noMipmap: Ir,
          luminance: fr
        } = Qr;
        const {
          samplingMode: Er
        } = rr.sampler, pr = Er === (0, Nr.w)(Ir) ? null : () => {
          (0, wr.K)(xr, Er)
        }, xr = new Wr.d(Zr, Sr, null, Ir, ar, pr, null, (0, Nr.s)(fr));
        xr.coordinatesMode = jr.e.SKYBOX_MODE, (0, Nr.H)(rr, xr)
      },
      canvas: (rr, Sr, Qr) => {
        let {
          width: Zr,
          height: Wr,
          mipmaps: Ir,
          samplingMode: fr,
          hasAlpha: Er = !1,
          wrap: pr = jr.e.CLAMP_ADDRESSMODE
        } = Qr;
        const xr = new ar.e(Sr, {
          width: Zr,
          height: Wr
        }, rr, Ir, fr);
        xr.hasAlpha = Er, xr.wrapU = pr, xr.wrapV = pr;
        const mr = (0, wr.B)(xr);
        return (0, wr.F)(mr, xr), mr
      }
    })
  },
  43039: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => pr,
      g: () => xr,
      j: () => mr
    });
    var Zr = Qr(43031),
      Wr = Qr(41919),
      ar = Qr(42147),
      jr = Qr(42265),
      Ir = Qr(43037),
      fr = Qr(42256),
      Er = Qr(38879);
    class pr extends jr.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (rr, Sr) => {
          this.releaseUnlessInstanced(Sr)
        }, this.onLinked = null
      }
      link(rr) {
        var Sr;
        (0, Er.i)(rr), this.model = rr, null === (Sr = this.onLinked) || void 0 === Sr || Sr.call(this, rr)
      }
      relink() {
        this.release();
        const rr = [];
        for (const Wr of Object.values(this._vertexBuffers))
          if (!Wr.getIsInstanced()) {
            const {
              byteOffset: Sr,
              byteStride: Qr,
              type: Zr,
              normalized: ar
            } = Wr;
            rr.push({
              kind: Wr.getKind(),
              data: Wr.getData(),
              offset: Sr,
              stride: Qr,
              components: Wr.getSize(),
              glType: Zr,
              isNormalized: ar
            })
          } const Sr = this._indices.length ? this._indices : null,
          {
            minimum: Qr,
            maximum: Zr
          } = this.extend;
        this.link(new Er.f(rr, Sr, this.getTotalVertices(), new Float64Array(Qr.OWr()), new Float64Array(Zr.OWr())))
      }
      copy(rr) {
        if (!this.model) return super.copy(rr);
        const Sr = new pr(rr, this.eC()),
          Qr = this.yar(void 0, !0);
        Qr && Sr.setIndices(Qr);
        let jr = !1;
        for (const ar in this._vertexBuffers) {
          const rr = this._vertexBuffers[ar],
            Qr = rr.getData();
          if (!Qr) continue;
          const Ir = rr.getSize(),
            {
              type: fr,
              byteOffset: Er,
              byteStride: pr,
              normalized: xr
            } = rr;
          jr ||= rr.isUpdatable();
          const mr = rr.getIsInstanced() ? (Qr instanceof Array ? 4 * Qr.length : Qr.byteLength) / pr : this.getTotalVertices(),
            Nr = (0, Wr.n)(Qr, Ir, fr, Er, pr, mr, !0),
            Ur = {
              updatable: rr.isUpdatable(),
              stride: Ir,
              type: fr,
              normalized: xr,
              takeBufferOwnership: !0,
              instanced: rr.getIsInstanced()
            };
          Sr.setVerticesBuffer(new Zr.g(this.MU(), Nr, ar, Ur), mr)
        }
        return Sr._updatable = jr, Sr._boundingInfo = new ar.c(this.extend.minimum, this.extend.maximum), Sr.relink(), Sr
      }
      static mergeMeshes(rr, Sr, Qr, Zr, Wr, ar) {
        const fr = rr[0].eC(),
          Er = new Ir.d(rr[0].name + "_merged", fr),
          xr = new pr(jr.e.RandomId(), fr, void 0, !1, Er);
        try {
          if (!Ir.d.MergeMeshes(rr, Sr, Qr, Er, Wr, ar)) return Er.dispose(), null
        } catch (mr) {
          throw Er.dispose(), mr
        }
        return xr.relink(), Er
      }
      removeVerticesData(rr) {
        this.releaseUnlessInstanced(rr), super.removeVerticesData(rr)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(rr) {
        var Sr;
        rr && null !== (Sr = this.getVertexBuffer(rr)) && void 0 !== Sr && Sr.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Er.r)(this.model), this.model = null)
      }
    }

    function xr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ir.d(rr, Qr);
      const Wr = (0, Er.h)(Sr),
        {
          positions: ar,
          normals: xr,
          uvs: mr,
          indices: Nr,
          named: Ur = {}
        } = Sr,
        tr = new fr.b;
      tr.positions = ar, tr.normals = null !== xr && void 0 !== xr ? xr : null, tr.uvs = null !== mr && void 0 !== mr ? mr : null, tr.indices = Nr;
      const hr = new pr(jr.e.RandomId(), Qr, tr, !1, Zr);
      for (const {
          kind: jr,
          components: Ir
        }
        of Wr.vertexAttributes) jr in Ur && Zr.setVerticesData(jr, Ur[jr], !1, Ir);
      return hr.link(Wr), Zr
    }

    function mr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Wr = new Ir.d(rr, Qr),
        {
          positions: ar,
          normals: jr,
          uvs: Er,
          indices: pr
        } = Sr;
      return Object.assign(new fr.b, {
        positions: ar,
        normals: jr,
        uvs: Er,
        indices: pr
      }).applyToMesh(Wr, Zr), Wr
    }
  },
  43027: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr) {
      const Zr = Sr * Sr * 4,
        Wr = rr[0].layers,
        ar = Wr * (rr.length - 1) + rr[rr.length - 1].layers,
        jr = new Uint8Array(ar * Zr);
      rr.forEach(((Sr, Qr) => {
        const ar = Qr + 1 < rr.length ? Math.min(Sr.layers, Wr) : Sr.layers;
        jr.set(new Uint8Array(Sr.pixels.buffer, Sr.pixels.byteOffset, ar * Zr), Qr * Wr * Zr)
      }));
      const Ir = Math.max(1, Math.min(ar, Qr || ar));
      if (Ir === ar) return [{
        pixels: jr,
        layers: ar
      }];
      const fr = [];
      for (let Er = 0; Er < ar; Er += Ir) {
        const rr = Math.min(ar, Er + Ir);
        fr.push({
          pixels: jr.slice(Er * Zr, rr * Zr),
          layers: rr - Er
        })
      }
      return fr
    }
    Qr.d(Sr, {
      b: () => Zr,
      f: () => ar
    });
    const Wr = new WeakMap;

    function ar(rr, Sr, Qr) {
      var Zr, ar;
      const jr = null !== (Zr = Wr.get(rr)) && void 0 !== Zr ? Zr : new Map;
      Wr.set(rr, jr);
      const Ir = null !== (ar = jr.get(Sr[0])) && void 0 !== ar ? ar : [];
      jr.set(Sr[0], Ir);
      const fr = Ir.find((rr => rr.urls.length === Sr.length && rr.urls.every(((rr, Qr) => rr === Sr[Qr]))));
      if (fr) return fr.built;
      const Er = {
        urls: [...Sr],
        built: Qr()
      };
      return Ir.push(Er), Er.built.catch((() => {
        Ir.splice(Ir.indexOf(Er), 1)
      })), Er.built
    }
  },
  5767: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      h: () => mr,
      l: () => fr,
      o: () => Ur,
      q: () => Er,
      t: () => Nr
    });
    var Zr = Qr(5774),
      Wr = Qr(5779);
    const ar = !1,
      jr = Zr.i.map((rr => {
        const Sr = [];
        for (let ar = 1; ar <= rr.reach; ar++) Sr.push(Wr.j[(0, Zr.e)(rr.source, ar)].id);
        const Qr = "water" === rr.family;
        return Object.freeze({
          name: rr.kind,
          family: rr.family,
          reach: rr.reach,
          stepTicks: Qr ? 5 : 10,
          slopeDistance: Qr ? 4 : 2,
          sourceId: Wr.j[rr.source].id,
          fallingId: Wr.j[(0, Zr.b)(rr.source)].id,
          flowingIds: Object.freeze(Sr),
          makesSources: Qr,
          stillId: Wr.j[rr.still].id
        })
      })),
      Ir = new Map;
    for (const tr of jr) Ir.set(tr.sourceId, Object.freeze({
      kind: tr,
      state: "source",
      distance: 0
    })), Ir.set(tr.fallingId, Object.freeze({
      kind: tr,
      state: "falling",
      distance: 0
    })), tr.flowingIds.forEach(((rr, Sr) => {
      Ir.set(rr, Object.freeze({
        kind: tr,
        state: "flowing",
        distance: Sr + 1
      }))
    }));

    function fr(rr) {
      return jr.find((Sr => Sr.name === rr))
    }

    function Er(rr) {
      return null === rr ? void 0 : Ir.get(rr)
    }
    const pr = new Uint8Array(65536);
    for (const [tr, hr] of Ir) pr[tr] = "source" === hr.state ? 1 : 2;
    const xr = new Map;
    for (const tr of jr) xr.set(tr.stillId, tr.family);

    function mr(rr) {
      var Sr, Qr;
      return null !== (Sr = null === (Qr = Er(rr)) || void 0 === Qr ? void 0 : Qr.kind.family) && void 0 !== Sr ? Sr : Nr(rr)
    }

    function Nr(rr) {
      var Sr;
      return null === rr ? null : null !== (Sr = xr.get(rr)) && void 0 !== Sr ? Sr : null
    }
    Wr.j.Obsidian.id, Wr.j["Messy Stone"].id;

    function Ur() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
        let rr = 0;
        for (const Sr of jr) rr = Math.max(rr, Sr.stillId, Sr.sourceId, Sr.fallingId, ...Sr.flowingIds);
        return rr
      }() + 1;
      const Sr = new Uint8Array(rr);
      for (const Qr of jr) {
        const Zr = ("water" === Qr.family ? 1 : 2) << 4;
        for (const Wr of [Qr.stillId, Qr.sourceId, Qr.fallingId, ...Qr.flowingIds]) Wr < rr && (Sr[Wr] = Zr)
      }
      return Sr
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);