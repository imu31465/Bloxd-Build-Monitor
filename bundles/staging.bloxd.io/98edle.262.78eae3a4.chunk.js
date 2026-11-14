export const id = 262;
export const ids = [262];
export const modules = {
  38709: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      CapeMaterialPlugin: () => oW,
      HueTintMaterialPlugin: () => lW,
      LifeformMaterialPlugin: () => FW,
      OverlayMaterialPlugin: () => fW
    });
    var wW = MW(38718),
      CW = MW(36072);
    class zR extends((0, wW.f)(CW.c)) {}(0, wW.j)(CW.c, zR);
    var AW = MW(35234);
    class bR extends((0, wW.f)(AW.e)) {}(0, wW.j)(AW.e, bR);
    var yR = MW(35922);
    class NW extends((0, wW.f)(yR.e)) {}(0, wW.j)(yR.e, NW);
    var eW = MW(35452),
      BW = MW(37844),
      tR = MW(35449);
    class TW extends((0, wW.f)(tR.e)) {
      constructor(WW, RW, MW) {
        super(WW, RW, MW), (0, eW.g)(WW)
      }
      dispose(WW) {
        (0, eW.h)(this._material), super.dispose(WW)
      }
    }(0, wW.j)(tR.e, TW), (0, tR.i)({
      disableUnusedSpecularTerm: wW.d,
      isLightingDisabled: WW => WW instanceof BW.StandardMaterial && WW.disableLighting
    });
    var gR = MW(36737);
    class iR extends((0, wW.f)(gR.h)) {}(0, wW.j)(gR.h, iR);
    var YW = MW(36814),
      JW = MW(35379),
      PW = MW(36224),
      IW = MW(35288);
    class oW extends((0, wW.f)(YW.e)) {}(0, wW.j)(YW.e, oW);
    class lW extends((0, wW.f)(JW.e)) {}(0, wW.j)(JW.e, lW);
    class FW extends((0, wW.f)(PW.p)) {}(0, wW.j)(PW.p, FW);
    class fW extends((0, wW.f)(IW.e)) {}(0, wW.j)(IW.e, fW)
  },
  38718: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => xR,
      f: () => PW,
      j: () => GW
    });
    var wW = MW(37844),
      CW = MW(38723),
      zR = MW(38763),
      AW = MW(38729),
      bR = MW(35898),
      yR = MW(35905),
      NW = MW(35907),
      eW = MW(35912),
      BW = MW(35275),
      tR = MW(35284),
      TW = MW(38732),
      gR = MW(35259),
      iR = MW(35261),
      YW = MW(35248);

    function JW(WW, RW) {
      return Object.assign((function(WW, MW, wW, CW) {
        return RW(this.featureState, WW, MW, wW, CW)
      }), {
        bC: WW
      })
    }

    function PW(WW) {
      const RW = class extends TW.c {
          constructor(RW, MW) {
            const wW = (0, iR.Y)(RW),
              CW = wW && (0, iR.y)(wW, WW.name);
            for (var zR = arguments.length, AW = new Array(zR > 2 ? zR - 2 : 0), bR = 2; bR < zR; bR++) AW[bR - 2] = arguments[bR];
            super(RW, WW.name, WW.priority, CW ? CW.defines : WW.defines(...AW), !1), this.featureState = void 0, this.featureState = MW, this._pluginManager._addPlugin(this), this._enable(!0), (0, iR.A)(this._material, WW, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return WW.className
          }
          isCompatible(WW) {
            return WW === YW.e.GLSL || WW === YW.e.WGSL
          }
        },
        MW = (0, gR.i)(WW);
      for (const [wW, CW] of Object.entries(gR.b)) {
        const zR = WW[wW];
        if (zR) {
          const WW = MW[wW];
          Object.defineProperty(RW.prototype, CW, {
            value: JW(zR, WW),
            writable: !0,
            configurable: !0
          })
        }
      }
      return RW
    }
    class IW extends(PW(bR.b)) {}
    var oW = MW(37418),
      lW = MW(38740);
    const FW = new WeakMap;

    function fW(WW, RW, MW) {
      let wW = FW.get(MW);
      wW || (wW = new Map, FW.set(MW, wW));
      const {
        url: CW
      } = WW;
      let zR = wW.get(CW);
      return zR || (zR = async function(WW, RW, MW) {
        const {
          width: wW,
          height: CW
        } = WW.getSize(), zR = Math.round(CW / wW), bR = RW && RW.byteLength === wW * wW * zR * 4 ? RW : WW._readPixelsSync();
        return new lW.b(bR, wW, wW, zR, oW.b.TEXTUREFORMAT_RGBA, MW, !0, !1, AW.b.NEAREST_NEAREST_MIPLINEAR)
      }(WW, RW, MW), wW.set(CW, zR), zR.catch((() => {
        wW.delete(CW)
      }))), zR
    }
    var QW = MW(35919);
    class rR extends(PW(yR.i)) {
      constructor(WW, RW) {
        super(WW, RW), RW.textures.forEach(((WW, RW) => {
          WW.mirror.onLoadObservable.add((WW => {
            this.setTextureArrayData(WW, RW).catch((WW => {
              console.error(`Failed to build texture array for atlas ${RW}`, WW)
            }))
          }))
        })), (0, QW.g)(RW, WW.shaderLanguage)
      }
      async setTextureArrayData(WW, RW) {
        var MW, wW;
        const CW = this.featureState,
          {
            width: zR,
            height: AW
          } = WW.getSize(),
          bR = CW.useWebGL2 ? await fW(WW, null !== (MW = null === (wW = CW.sources.pixels) || void 0 === wW ? void 0 : wW[RW]) && void 0 !== MW ? MW : null, this._material.QRW()) : null;
        (0, QW.d)(this._material, CW, RW, bR, zR, Math.round(AW / zR), this._material.shaderLanguage)
      }
    }
    var cR = MW(38747),
      XW = MW(37884),
      jR = MW(35317),
      kR = MW(38751),
      aR = MW(38003),
      sW = MW(37874),
      dW = MW(38701),
      pW = MW(35632),
      hW = MW(38757);
    class UW extends cR.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const EW = {
      Mesh: kR.c,
      TransformNode: dW.d,
      fw: cR.e,
      VertexBuffer: cR.h,
      BoundingInfo: XW.e,
      vC: jR.vC,
      ArenaBuffer: UW,
      SubMesh: sW.e,
      VertexData: aR.c,
      MirroredGeometry: hW.e,
      meshFromArrays: hW.f,
      plainMeshFromArrays: hW.i
    };
    (0, pW.c)(EW);
    var VW = MW(35452);
    class mR extends(PW(eW.j)) {
      constructor(WW, RW) {
        if (super(WW, RW), WW instanceof wW.StandardMaterial && RW.dirLightCount > 0) {
          const RW = WW,
            MW = RW._blockDirtyMechanism;
          RW._blockDirtyMechanism = !0, WW.disableLighting = !0, RW._blockDirtyMechanism = MW;
          const wW = (0, iR.Y)(WW);
          wW && (wW.disableLighting = !0, (0, iR.V)(wW))
        }(0, VW.g)(WW)
      }
      dispose(WW) {
        (0, VW.h)(this._material), super.dispose(WW)
      }
    }

    function xR(WW, RW) {
      if (!(RW instanceof wW.StandardMaterial) || RW.specularTexture) return;
      const {
        r: MW,
        g: CW,
        b: zR
      } = RW.specularColor;
      0 === MW && 0 === CW && 0 === zR && (WW.SPECULARTERM = !1)
    }(0, eW.i)({
      disableUnusedSpecularTerm: xR
    });
    var vR = MW(35403),
      KW = MW(35646);
    const uW = new RegExp(`^#define ${NW.c}\\s*$`, "m");
    class OW extends(PW(NW.f)) {
      constructor(WW, RW) {
        super(WW, RW), this.Qw = !1, RW.ditherOnlyWhileFading && (KW.e.add(WW), this.prewarmDitherTwins(WW))
      }
      prewarmDitherTwins(WW) {
        const RW = new WeakSet;
        WW.onEffectCreatedObservable.add((MW => {
          let {
            effect: wW,
            subMesh: CW
          } = MW;
          if (this.featureState.prewarmingDither || RW.has(wW)) return;
          RW.add(wW);
          const zR = null === CW || void 0 === CW ? void 0 : CW.getMesh();
          zR && !uW.test(wW.defines) && WW.QRW().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(zR) || RW.delete(wW)
          }))
        }))
      }
      prewarmDither(WW) {
        if (this.Qw || WW.cNW()) return !1;
        const RW = new sW.e(0, 0, 0, 0, 0, WW, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(WW, RW)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== RW.effect
      }
      dispose(WW) {
        this.Qw = !0, super.dispose(WW)
      }
    }
    const nW = new Map;

    function GW(WW, RW) {
      nW.set(WW, RW)
    }
    GW(bR.b, IW), GW(yR.i, rR), GW(NW.f, OW), GW(eW.j, mR), (0, BW.e)({
      create: (WW, RW) => {
        const MW = new wW.StandardMaterial(WW.name, RW);
        return (0, vR.n)(WW, MW), MW.detailMap._pluginDefineNames
      },
      write: (WW, RW, MW) => {
        (0, vR.N)(WW.mirror, RW, MW)
      },
      addFeature: (WW, RW, MW) => {
        const wW = nW.get(RW.feature);
        if (!wW) throw new Error(`${RW.feature.name} has no plugin class (registerPluginClass)`);
        new wW(WW.mirror, RW.state, ...MW)
      },
      texture: (WW, RW, MW) => {
        let {
          url: wW,
          noMipmap: CW,
          invertY: zR,
          samplingMode: bR,
          data: yR,
          sets: NW
        } = MW;
        if (!yR) {
          const MW = new AW.b(wW, RW, CW, zR, bR);
          return Object.assign(MW, NW), void(0, tR.I)(WW, MW)
        }
        const eW = {},
          BW = new Promise(((WW, RW) => {
            eW.onLoad = WW, eW.onError = (WW, MW) => {
              RW(new Error(`${yR.context}: ${(null===MW||void 0===MW?void 0:MW.message)||WW||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: TW,
            bytes: gR,
            label: iR
          } = yR,
          YW = {
            noMipmap: CW,
            invertY: !1,
            samplingMode: bR,
            ...eW,
            mimeType: TW,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          JW = new AW.b(null, RW, YW);
        vR.o.set(JW, BW), Object.assign(JW, NW), JW.updateURL(wW, gR);
        const PW = JW.getInternalTexture();
        PW && (PW.label = iR), WW.uvSet = JW.coordinatesIndex, WW.matrix.set((0, vR.H)(JW)), (0, tR.I)(WW, JW)
      },
      cube: (WW, RW, MW) => {
        let {
          rootUrl: wW,
          files: zR,
          noMipmap: bR,
          luminance: yR
        } = MW;
        const {
          samplingMode: NW
        } = WW.sampler, eW = NW === (0, tR.B)(bR) ? null : () => {
          (0, vR.D)(BW, NW)
        }, BW = new CW.c(wW, RW, null, bR, zR, eW, null, (0, tR.A)(yR));
        BW.coordinatesMode = AW.b.SKYBOX_MODE, (0, tR.I)(WW, BW)
      },
      canvas: (WW, RW, MW) => {
        let {
          width: wW,
          height: CW,
          mipmaps: bR,
          samplingMode: yR,
          hasAlpha: NW = !1,
          wrap: eW = AW.b.CLAMP_ADDRESSMODE
        } = MW;
        const BW = new zR.e(RW, {
          width: wW,
          height: CW
        }, WW, bR, yR);
        BW.hasAlpha = NW, BW.wrapU = eW, BW.wrapV = eW;
        const tR = (0, vR.s)(BW);
        return (0, vR.v)(tR, BW), tR
      }
    })
  },
  38757: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => eW,
      f: () => BW,
      i: () => tR
    });
    var wW = MW(38747),
      CW = MW(37652),
      zR = MW(37884),
      AW = MW(38010),
      bR = MW(38751),
      yR = MW(38003),
      NW = MW(35506);
    class eW extends AW.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (WW, RW) => {
          this.releaseUnlessInstanced(RW)
        }, this.onLinked = null
      }
      link(WW) {
        var RW;
        (0, NW.n)(WW), this.model = WW, null === (RW = this.onLinked) || void 0 === RW || RW.call(this, WW)
      }
      relink() {
        this.release();
        const WW = [];
        for (const CW of Object.values(this._vertexBuffers))
          if (!CW.getIsInstanced()) {
            const {
              byteOffset: RW,
              byteStride: MW,
              type: wW,
              normalized: zR
            } = CW;
            WW.push({
              kind: CW.getKind(),
              data: CW.getData(),
              offset: RW,
              stride: MW,
              components: CW.getSize(),
              glType: wW,
              isNormalized: zR
            })
          } const RW = this._indices.length ? this._indices : null,
          {
            minimum: MW,
            maximum: wW
          } = this.extend;
        this.link(new NW.e(WW, RW, this.getTotalVertices(), new Float64Array(MW.JNW()), new Float64Array(wW.JNW())))
      }
      copy(WW) {
        if (!this.model) return super.copy(WW);
        const RW = new eW(WW, this.QRW()),
          MW = this.ptW(void 0, !0);
        MW && RW.setIndices(MW);
        let AW = !1;
        for (const zR in this._vertexBuffers) {
          const WW = this._vertexBuffers[zR],
            MW = WW.getData();
          if (!MW) continue;
          const bR = WW.getSize(),
            {
              type: yR,
              byteOffset: NW,
              byteStride: eW,
              normalized: BW
            } = WW;
          AW ||= WW.isUpdatable();
          const tR = WW.getIsInstanced() ? (MW instanceof Array ? 4 * MW.length : MW.byteLength) / eW : this.getTotalVertices(),
            TW = (0, CW.t)(MW, bR, yR, NW, eW, tR, !0),
            gR = {
              updatable: WW.isUpdatable(),
              stride: bR,
              type: yR,
              normalized: BW,
              takeBufferOwnership: !0,
              instanced: WW.getIsInstanced()
            };
          RW.setVerticesBuffer(new wW.h(this.mC(), TW, zR, gR), tR)
        }
        return RW._updatable = AW, RW._boundingInfo = new zR.e(this.extend.minimum, this.extend.maximum), RW.relink(), RW
      }
      static mergeMeshes(WW, RW, MW, wW, CW, zR) {
        const yR = WW[0].QRW(),
          NW = new bR.c(WW[0].name + "_merged", yR),
          BW = new eW(AW.e.RandomId(), yR, void 0, !1, NW);
        try {
          if (!bR.c.MergeMeshes(WW, RW, MW, NW, CW, zR)) return NW.dispose(), null
        } catch (tR) {
          throw NW.dispose(), tR
        }
        return BW.relink(), NW
      }
      removeVerticesData(WW) {
        this.releaseUnlessInstanced(WW), super.removeVerticesData(WW)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(WW) {
        var RW;
        WW && null !== (RW = this.getVertexBuffer(WW)) && void 0 !== RW && RW.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, NW.w)(this.model), this.model = null)
      }
    }

    function BW(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new bR.c(WW, MW);
      const CW = (0, NW.j)(RW),
        {
          positions: zR,
          normals: BW,
          uvs: tR,
          indices: TW,
          named: gR = {}
        } = RW,
        iR = new yR.c;
      iR.positions = zR, iR.normals = null !== BW && void 0 !== BW ? BW : null, iR.uvs = null !== tR && void 0 !== tR ? tR : null, iR.indices = TW;
      const YW = new eW(AW.e.RandomId(), MW, iR, !1, wW);
      for (const {
          kind: AW,
          components: bR
        }
        of CW.vertexAttributes) AW in gR && wW.setVerticesData(AW, gR[AW], !1, bR);
      return YW.link(CW), wW
    }

    function tR(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const CW = new bR.c(WW, MW),
        {
          positions: zR,
          normals: AW,
          uvs: NW,
          indices: eW
        } = RW;
      return Object.assign(new yR.c, {
        positions: zR,
        normals: AW,
        uvs: NW,
        indices: eW
      }).applyToMesh(CW, wW), CW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);