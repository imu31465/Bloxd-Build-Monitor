export const id = 295;
export const ids = [295];
export const modules = {
  40530: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => LT,
      h: () => rT,
      i: () => xT,
      m: () => cT,
      n: () => gT,
      p: () => AT
    });
    var iT = IT(40476);
    var zT = "Babylon Lite v1.32.0",
      kT = IT(40536);

    function WT(TT) {
      return "clientWidth" in TT
    }
    var XT = 1;

    function BT(TT, oT, IT) {
      const BT = oT.getContext("webgpu");
      BT || (0, iT.b)(54), WT(oT) && oT.setAttribute("data-engine", zT);
      const FT = IT?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        ST = IT?.srgb ? (DT = FT).endsWith("-srgb") ? DT : `${DT}-srgb` : FT;
      var DT;
      const LT = IT?.alphaMode ?? "opaque";
      BT.configure({
        device: TT._device,
        format: FT,
        alphaMode: LT,
        viewFormats: [ST]
      });
      const xT = 1 === IT?.msaaSamples ? 1 : 4,
        cT = (0, kT.b)({
          lbl: "swapchain",
          format: ST,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return cT._eager = !0, {
        engine: TT,
        canvas: oT,
        format: ST,
        msaaSamples: xT,
        scRT: cT,
        maxDevicePixelRatio: IT?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: XT++,
        _context: BT,
        _configureFormat: FT,
        _alphaMode: LT,
        _renderingContexts: []
      }
    }

    function FT(TT) {
      const oT = TT._context.getCurrentTexture(),
        IT = TT.scRT;
      IT._colorTexture = oT, IT._colorView = oT.createView({
        format: TT.format
      }), IT._width = oT.width, IT._height = oT.height
    }

    function ST(TT) {
      const oT = TT.canvas;
      if (!WT(oT)) return;
      const IT = TT._w ?? oT.clientWidth,
        iT = TT._h ?? oT.clientHeight;
      if (!(IT > 0 && iT > 0)) return;
      const zT = Math.min(globalThis.devicePixelRatio || 1, TT.maxDevicePixelRatio);
      DT(TT, IT * zT | 0, iT * zT | 0)
    }

    function DT(TT, oT, IT) {
      const iT = TT.canvas,
        zT = 0 | oT,
        kT = 0 | IT;
      if (zT > 0 && kT > 0 && (zT !== iT.width || kT !== iT.height)) {
        iT.width = zT, iT.height = kT, TT.scRT._width = zT, TT.scRT._height = kT;
        for (const oT of TT._renderingContexts) oT._resize?.()
      }
    }
    var LT = 0;

    function xT(TT, oT) {
      return -1 !== TT._renderingContexts.indexOf(oT)
    }

    function cT(TT, oT) {
      return -1 === TT._renderingContexts.indexOf(oT) && (TT._renderingContexts.push(oT), !0)
    }
    var KT = null;
    var MT = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function rT(TT, oT) {
      const kT = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...KT ? KT() : {}
      });
      kT || (0, iT.b)(47);
      const WT = KT?.deviceFeatures?.(kT, oT) ?? function(TT) {
          return MT.filter((oT => TT.features.has(oT)))
        }(kT),
        XT = await kT.requestDevice({
          requiredFeatures: WT,
          requiredLimits: oT?.requiredLimits
        });
      console.log(`${zT} - WebGPU engine`);
      const DT = !!oT?.useHighPrecisionMatrix,
        LT = !!oT?.useFloatingOrigin;
      if (LT && !DT && (0, iT.b)(48), DT) {
        const {
          allocateF64Mat4: TT
        } = await IT.e(349).then((() => IT(60084)));
        0
      }
      let xT, cT, rT, AT;
      if (LT) {
        const [{
          wrapRenderableForFO: TT,
          lightFoVersion: oT,
          applyLightFoOffset: iT
        }, {
          makePackMeshWorld: zT
        }] = await Promise.all([IT.e(350).then((() => IT(60091))), IT.e(351).then((() => IT(60098)))]);
        xT = TT, cT = zT, rT = oT, AT = iT
      }
      const gT = {
          _device: XT
        },
        hT = [gT];
      return Object.assign(gT, {
        engine: gT,
        surfaces: hT,
        _surfaces: hT,
        _device: XT,
        _options: oT,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: DT,
        useFloatingOrigin: LT,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: xT,
        _makePackMeshWorld: cT,
        _lightFoVersion: rT,
        _applyLightFoOffset: AT
      }, BT(gT, TT, oT)), ST(gT), FT(gT), gT
    }

    function AT(TT, oT, IT) {
      DT(TT, oT, IT)
    }

    function gT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT.surfaces;
      if (IT !== TT.surfaces)
        for (let zT = IT.length; zT--;) IT[zT].engine !== TT && (0, iT.b)(49);
      hT(TT, oT, IT)
    }

    function hT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT._surfaces,
        iT = 0;
      for (let kT = IT.length; kT--;) iT += IT[kT]._renderingContexts.length;
      if (!iT) return TT.drawCallCount = 0, TT._flushGpuRetirements?.(TT);
      const zT = TT._device.createCommandEncoder({
        label: "frame"
      });
      TT._currentEncoder = zT, TT._currentDelta = oT;
      try {
        TT._gpuTimerBegin?.(zT), iT = 0;
        for (let TT = 0; TT < IT.length; TT++) {
          const oT = IT[TT];
          oT._capturePreFrame?.(oT), FT(oT);
          const zT = oT._renderingContexts;
          for (let TT = 0; TT < zT.length; TT++) {
            const oT = zT[TT];
            oT._update(), iT += oT._drawCallsPre + oT._record()
          }
        }
        const oT = TT._currentEncoder;
        for (let TT = 0; TT < IT.length; TT++) {
          const iT = IT[TT];
          iT._captureService?.(iT, oT)
        }
        TT._gpuTimerEnd?.(oT), TT._cbs[0] = oT.finish(), TT._device.queue.submit(TT._cbs), TT._flushGpuRetirements?.(TT), TT.drawCallCount = iT, TT._gpuTimerResolve?.()
      } finally {
        TT._currentEncoder = void 0
      }
    }
  },
  40485: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      g: () => kT,
      h: () => iT
    });
    var iT = globalThis.GPUTextureUsage,
      zT = globalThis.GPUBufferUsage,
      kT = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  40561: (TT, oT, IT) => {
    function iT(TT) {
      zT(TT.splice(0))
    }

    function zT(TT) {
      for (const IT of TT) try {
        IT()
      } catch (oT) {
        console.error("GPU resource retirement failed.", oT)
      }
    }

    function kT(TT, oT) {
      TT._flushGpuRetirements ??= WT, (TT._retirements ??= []).push(oT)
    }

    function WT(TT) {
      const oT = TT._retirements;
      if (!oT) return;
      TT._retirements = null;
      const IT = TT._retiring ??= new Set;
      IT.add(oT), queueMicrotask((() => {
        TT._device.queue.onSubmittedWorkDone().then((() => {
          IT.delete(oT), iT(oT)
        })).catch((() => {}))
      }))
    }
    IT.d(oT, {
      c: () => kT
    })
  },
  40536: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => kT,
      d: () => WT,
      h: () => XT
    });
    var iT = IT(40485);

    function zT(TT) {
      const oT = TT.size;
      return "canvas" in oT ? oT.canvas : oT
    }

    function kT(TT) {
      return {
        _descriptor: TT,
        _resolveSize: zT,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function WT(TT, oT) {
      if (TT._eager) return void TT._syncEager?.(oT);
      XT(TT);
      const IT = TT._descriptor,
        {
          width: kT,
          height: WT
        } = (TT._resolveSize ?? zT)(IT);
      TT._width = kT, TT._height = WT;
      const BT = oT._device;
      IT.format && (TT._colorTexture = BT.createTexture({
        label: IT.lbl,
        size: {
          width: kT,
          height: WT
        },
        format: IT.format,
        sampleCount: IT.samples,
        usage: iT.h.RENDER_ATTACHMENT | iT.h.TEXTURE_BINDING | iT.h.COPY_SRC | iT.h.COPY_DST
      }), TT._colorView = TT._colorTexture.createView()), IT.dFormat && (TT._depthTexture = BT.createTexture({
        label: IT.lbl,
        size: {
          width: kT,
          height: WT
        },
        format: IT.dFormat,
        sampleCount: IT.samples,
        usage: iT.h.RENDER_ATTACHMENT | iT.h.TEXTURE_BINDING
      }), TT._depthView = TT._depthTexture.createView())
    }

    function XT(TT) {
      if (!TT || TT._eager && !TT._disposeAttachments) return;
      const oT = TT._colorTexture,
        IT = TT._depthTexture;
      if (TT._colorTexture = TT._depthTexture = null, TT._colorView = TT._depthView = null, TT._width = TT._height = 0, TT._disposeAttachments) TT._disposeAttachments(oT, IT);
      else try {
        oT?.destroy()
      } finally {
        !1 !== TT._ownsDepthTexture && IT?.destroy()
      }
    }
  },
  40554: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT,
      f: () => zT,
      g: () => kT
    });
    var iT = Float32Array,
      zT = Float64Array,
      kT = Uint32Array
  },
  40563: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT
    });
    var iT = 16
  },
  40476: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    var iT = null;

    function zT(TT) {
      for (var oT = arguments.length, IT = new Array(oT > 1 ? oT - 1 : 0), zT = 1; zT < oT; zT++) IT[zT - 1] = arguments[zT];
      const kT = new Error(iT?.(TT, IT) ?? `#${TT}`);
      throw kT.lite = IT, kT
    }
  },
  40515: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT
    });
    var iT = IT(40496);

    function zT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const IT = oT.compare,
        zT = oT.lodMinClamp ?? 0,
        kT = oT.lodMaxClamp ?? 32,
        WT = void 0 !== IT || 0 !== zT || 32 !== kT ? `${IT??""}:${zT}:${kT}` : "";
      return (0, iT.d)(TT, oT, WT)
    }
  },
  40490: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => kT
    });
    var iT = null;

    function zT(TT) {
      const oT = iT ??= new WeakMap;
      oT.set(TT, (oT.get(TT) ?? 0) + 1)
    }

    function kT(TT) {
      zT(TT.texture)
    }
  },
  40496: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => XT
    });
    var iT = null,
      zT = "nearest",
      kT = "clamp-to-edge",
      WT = {
        minFilter: zT,
        magFilter: zT,
        mipmapFilter: zT,
        addressModeU: kT,
        addressModeV: kT,
        addressModeW: kT,
        maxAnisotropy: 1
      };

    function XT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const zT = TT._device,
        kT = iT ??= new WeakMap;
      let XT = kT.get(zT);
      XT || kT.set(zT, XT = new Map);
      let BT = IT;
      for (const iT in WT) {
        const TT = iT;
        BT += `:${oT[TT]??WT[TT]}`
      }
      let FT = XT.get(BT);
      return FT || XT.set(BT, FT = zT.createSampler(oT)), FT
    }
  },
  40545: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => OT,
      g: () => qT
    });
    var iT = IT(40536),
      zT = IT(40530);

    function kT(TT, oT) {
      oT._passes.length = 0, TT._currentProcessedTask = oT;
      try {
        oT.record()
      } finally {
        TT._currentProcessedTask = null
      }
    }
    var WT = IT(40554);

    function XT(TT) {
      const oT = TT.worldMatrixVersion;
      if (TT._viewVer === oT) return TT._viewCache;
      const IT = TT._viewCache,
        iT = TT.worldMatrix,
        zT = TT._useFloatingOrigin,
        kT = zT ? 0 : iT[12],
        WT = zT ? 0 : iT[13],
        XT = zT ? 0 : iT[14];
      return IT[0] = iT[0], IT[1] = iT[4], IT[2] = iT[8], IT[3] = 0, IT[4] = iT[1], IT[5] = iT[5], IT[6] = iT[9], IT[7] = 0, IT[8] = iT[2], IT[9] = iT[6], IT[10] = iT[10], IT[11] = 0, IT[12] = -(iT[0] * kT + iT[1] * WT + iT[2] * XT), IT[13] = -(iT[4] * kT + iT[5] * WT + iT[6] * XT), IT[14] = -(iT[8] * kT + iT[9] * WT + iT[10] * XT), IT[15] = 1, TT._viewVer = oT, IT
    }
    var BT = null;

    function FT(TT) {
      return TT._projFov === TT.fov && TT._projNear === TT.nearPlane && TT._projFar === TT.farPlane || (TT._projFov = TT.fov, TT._projNear = TT.nearPlane, TT._projFar = TT.farPlane, TT._projRev = (TT._projRev ?? 0) + 1), TT.worldMatrixVersion + (TT._projRev ?? 0)
    }

    function ST(TT, oT) {
      const IT = FT(TT);
      if (TT._projVer === IT && TT._projAspect === oT) return TT._projCache;
      const iT = TT._projCache;
      return null !== BT && TT.ortho ? BT(TT, oT, iT) : function(TT, oT, IT, iT, zT) {
        const kT = 1 / Math.tan(.5 * oT),
          WT = zT - iT;
        TT[0] = kT / IT, TT[5] = kT, TT[10] = -iT / WT, TT[11] = 1, TT[14] = zT * iT / WT
      }(iT, TT.fov, oT, TT.nearPlane, TT.farPlane), TT._projVer = IT, TT._projAspect = oT, iT
    }
    var DT = IT(40485);

    function LT(TT, oT, IT) {
      return TT._device.createBuffer({
        label: IT,
        size: (iT = oT, zT = 16, Math.ceil(iT / zT) * zT),
        usage: DT.e.UNIFORM | DT.e.COPY_DST
      });
      var iT, zT
    }
    var xT = IT(40561),
      cT = null;

    function KT(TT) {
      const oT = TT._device,
        IT = cT ??= new WeakMap;
      let iT = IT.get(oT);
      return iT || (iT = oT.createBindGroupLayout({
        label: "NK",
        entries: [{
          binding: 0,
          visibility: DT.g.VERTEX | DT.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: DT.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), IT.set(oT, iT)), iT
    }

    function MT(TT, oT, IT) {
      const iT = TT._device,
        zT = LT(TT, oT.byteLength, IT);
      try {
        iT.queue.writeBuffer(zT, 0, oT.buffer, oT.byteOffset, oT.byteLength)
      } catch (kT) {
        throw zT.destroy(), kT
      }
      return zT
    }
    var rT = IT(40563),
      AT = new WT.g(1),
      gT = new WT.c(AT.buffer);

    function hT(TT) {
      let oT = 0;
      for (const IT of TT) oT += IT._lightVersion ?? 0;
      return oT
    }

    function wT(TT, oT) {
      TT.fill(0);
      let IT = 0;
      for (const iT of oT) {
        if (IT >= rT.e) break;
        iT._writeLightUbo && (iT._writeLightUbo(TT, 4 + 16 * IT), IT++)
      }
      AT[0] = IT, TT[0] = gT[0]
    }

    function mT(TT, oT) {
      let IT = oT._lightGpuState;
      const iT = 16 + 16 * rT.e * 4;
      if (IT && IT._byteSize === iT) return IT;
      const zT = !IT;
      IT?._buffer.destroy();
      const kT = new WT.c(iT / 4);
      return wT(kT, oT.lights), TT._applyLightFoOffset?.(kT, oT), IT = {
        _buffer: MT(TT, kT),
        _scratch: kT,
        bY: hT(oT.lights) + (TT._lightFoVersion?.(oT) ?? 0),
        _listVersion: oT._lightListVersion ?? 0,
        _lightCount: oT.lights.length,
        _byteSize: iT
      }, oT._lightGpuState = IT, zT && oT._disposables.push((() => {
        oT._lightGpuState?._buffer.destroy(), oT._lightGpuState = void 0
      })), IT
    }

    function eT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const zT = oT;
      if (0 === iT && 16 === zT.length) return void TT.set(zT, IT);
      const kT = iT,
        WT = IT;
      TT[WT + 0] = zT[kT + 0], TT[WT + 1] = zT[kT + 1], TT[WT + 2] = zT[kT + 2], TT[WT + 3] = zT[kT + 3], TT[WT + 4] = zT[kT + 4], TT[WT + 5] = zT[kT + 5], TT[WT + 6] = zT[kT + 6], TT[WT + 7] = zT[kT + 7], TT[WT + 8] = zT[kT + 8], TT[WT + 9] = zT[kT + 9], TT[WT + 10] = zT[kT + 10], TT[WT + 11] = zT[kT + 11], TT[WT + 12] = zT[kT + 12], TT[WT + 13] = zT[kT + 13], TT[WT + 14] = zT[kT + 14], TT[WT + 15] = zT[kT + 15]
    }

    function RT(TT, oT, IT, iT, zT) {
      TT.fill(0);
      const kT = function(TT, oT) {
          const IT = FT(TT);
          if (TT._vpVer === IT && TT._vpAspect === oT) return TT._vpCache;
          const iT = TT._vpCache;
          return function(TT, oT, IT, iT, zT, kT) {
            const WT = IT[iT],
              XT = IT[iT + 1],
              BT = IT[iT + 2],
              FT = IT[iT + 3],
              ST = IT[iT + 4],
              DT = IT[iT + 5],
              LT = IT[iT + 6],
              xT = IT[iT + 7],
              cT = IT[iT + 8],
              KT = IT[iT + 9],
              MT = IT[iT + 10],
              rT = IT[iT + 11],
              AT = IT[iT + 12],
              gT = IT[iT + 13],
              hT = IT[iT + 14],
              wT = IT[iT + 15];
            let mT = zT[kT],
              eT = zT[kT + 1],
              RT = zT[kT + 2],
              uT = zT[kT + 3];
            TT[oT] = WT * mT + ST * eT + cT * RT + AT * uT, TT[oT + 1] = XT * mT + DT * eT + KT * RT + gT * uT, TT[oT + 2] = BT * mT + LT * eT + MT * RT + hT * uT, TT[oT + 3] = FT * mT + xT * eT + rT * RT + wT * uT, mT = zT[kT + 4], eT = zT[kT + 5], RT = zT[kT + 6], uT = zT[kT + 7], TT[oT + 4] = WT * mT + ST * eT + cT * RT + AT * uT, TT[oT + 5] = XT * mT + DT * eT + KT * RT + gT * uT, TT[oT + 6] = BT * mT + LT * eT + MT * RT + hT * uT, TT[oT + 7] = FT * mT + xT * eT + rT * RT + wT * uT, mT = zT[kT + 8], eT = zT[kT + 9], RT = zT[kT + 10], uT = zT[kT + 11], TT[oT + 8] = WT * mT + ST * eT + cT * RT + AT * uT, TT[oT + 9] = XT * mT + DT * eT + KT * RT + gT * uT, TT[oT + 10] = BT * mT + LT * eT + MT * RT + hT * uT, TT[oT + 11] = FT * mT + xT * eT + rT * RT + wT * uT, mT = zT[kT + 12], eT = zT[kT + 13], RT = zT[kT + 14], uT = zT[kT + 15], TT[oT + 12] = WT * mT + ST * eT + cT * RT + AT * uT, TT[oT + 13] = XT * mT + DT * eT + KT * RT + gT * uT, TT[oT + 14] = BT * mT + LT * eT + MT * RT + hT * uT, TT[oT + 15] = FT * mT + xT * eT + rT * RT + wT * uT
          }(iT, 0, ST(TT, oT), 0, XT(TT), 0), TT._vpVer = IT, TT._vpAspect = oT, iT
        }(iT, zT),
        WT = XT(iT),
        BT = iT.worldMatrix;
      eT(TT, kT, 0), eT(TT, WT, 16), oT.useFloatingOrigin ? (TT[32] = 0, TT[33] = 0, TT[34] = 0) : (TT[32] = BT[12], TT[33] = BT[13], TT[34] = BT[14]), TT[87] = oT.canvas.width;
      const DT = IT.imageProcessing;
      TT[76] = DT.exposure, TT[77] = DT.contrast, TT[78] = IT._envTextures?.lodGenerationScale ?? .8, TT[79] = +DT.toneMappingEnabled, TT[37] = oT.canvas.height
    }

    function uT(TT, oT) {
      return {
        _renderables: TT,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: oT
      }
    }

    function vT(TT, oT, IT) {
      TT.clr ??= !0;
      const zT = TT.rt._descriptor,
        kT = TT.depth?._descriptor,
        BT = {
          _colorFormat: zT.format,
          _depthStencilFormat: kT?.dFormat ?? zT.dFormat,
          _depthCompare: zT.depthCompare ?? kT?.depthCompare,
          _sampleCount: zT.samples
        },
        ST = {
          loadOp: "clear",
          storeOp: "store"
        },
        DT = {
          ...uT([], -1),
          name: TT.name,
          _config: TT,
          _ownsTargets: !TT.sharedRt,
          engine: oT,
          NK: IT,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [ST]
          },
          _colorAttachment: ST,
          _sceneUBO: LT(oT, 368),
          _suData: new WT.c(92),
          _sceneUboCacheKey: [],
          _targetSignature: BT,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (DT._disposed) throw new Error("RenderTask has been disposed.");
            DT._recordExplicit ? DT._recordExplicit(DT, !0) : CT(DT, !1 !== TT.autoMirror ? IT._renderables.slice() : DT._renderables, !0)
          },
          execute: () => function(TT, oT, IT) {
            if (!1 === TT.enabled) return 0;
            const iT = TT.NK;
            ! function(TT, oT, IT) {
              const iT = TT.NK;
              !1 !== TT._config.autoMirror && TT._lastVersion !== iT._renderableVersion && CT(TT, iT._renderables.slice());
              JT(TT, oT);
              const zT = TT._updateContext,
                kT = TT._config.cam ?? iT.camera;
              IT._colorFormat && (TT._config._skipClusteredLights || iT._clusteredLightUpdater?.(kT, zT.targetWidth, zT.targetHeight), function(TT, oT) {
                const IT = mT(TT, oT),
                  iT = hT(oT.lights) + (TT._lightFoVersion?.(oT) ?? 0),
                  zT = oT._lightListVersion ?? 0;
                iT === IT.bY && zT === IT._listVersion && oT.lights.length === IT._lightCount || (IT.bY = iT, IT._listVersion = zT, IT._lightCount = oT.lights.length, wT(IT._scratch, oT.lights), TT._applyLightFoOffset?.(IT._scratch, oT), TT._device.queue.writeBuffer(IT._buffer, 0, IT._scratch)), IT._buffer
              }(oT, iT));
              (function(TT, oT, IT, iT) {
                if (!iT) return;
                const zT = iT.viewport,
                  kT = TT._config.rt,
                  WT = (TT._config.cs ? oT.canvas.width / oT.canvas.height : kT._width / kT._height) * (zT ? zT.width / zT.height : 1),
                  XT = IT.fog,
                  BT = IT.imageProcessing,
                  ST = FT(iT),
                  DT = IT._envTextures,
                  LT = TT._sceneUboCacheKey;
                if (LT[0] === iT && LT[1] === XT && LT[2] === ST && LT[3] === WT && LT[4] === BT.exposure && LT[5] === BT.contrast && LT[6] === DT) return;
                LT[0] = iT, LT[1] = XT, LT[2] = ST, LT[3] = WT, LT[4] = BT.exposure, LT[5] = BT.contrast, LT[6] = DT;
                const xT = TT._suData;
                RT(xT, oT, IT, iT, WT);
                const cT = IT._sceneUboContributors;
                if (cT)
                  for (const FT of cT) FT(xT, IT);
                oT._device.queue.writeBuffer(TT._sceneUBO, 0, xT)
              })(TT, oT, iT, kT), zT.Gy = kT, TT._batchState?._reset(), UT(TT._opaqueBindings, zT), UT(TT._directBindings, zT), UT(TT._transparentBindings, zT), TT._batchState?._flush(oT),
                function(TT, oT) {
                  const IT = TT._transparentBindings;
                  if (IT.length <= 1 || !oT) return;
                  const iT = XT(oT);
                  for (const zT of IT) {
                    const TT = zT.renderable._worldCenter;
                    zT._sortDistance = TT ? TT[0] * iT[2] + TT[1] * iT[6] + TT[2] * iT[10] + iT[14] : 0
                  }
                  IT.sort(ET)
                }(TT, kT)
            }(TT, oT, IT);
            const zT = TT._colorAttachment,
              kT = TT._config;
            kT.rt._colorView && (kT.rt === iT.surface.scRT && (zT.view = kT.rt._colorView), zT.resolveTarget = kT.rst?._colorView ?? void 0, zT.clearValue = kT.clrColor ?? iT.clearColor, zT.loadOp = kT.clr ? "clear" : "load");
            if (TT._executeWithTransmission) return TT._executeWithTransmission(IT._sampleCount);
            const WT = oT._currentEncoder.beginRenderPass(TT._renderPassDescriptor),
              BT = jT(TT, WT);
            return WT.end(), BT
          }(DT, oT, BT),
          dispose() {
            if (DT._disposed) return;
            DT._disposed = !0;
            const oT = DT._pendingMeshes;
            oT && (oT.length = 0);
            for (const TT of DT._renderables) DT._retireRenderable?.(DT.engine, TT);
            DT._passes.length = DT._opaqueBindings.length = DT._directBindings.length = 0, DT._transparentBindings.length = DT._renderables.length = DT._ob.length = 0, DT._ownsTargets && ((0, iT.h)(TT.rt), (0, iT.h)(TT.rst)), TT.depth?._eager || (0, iT.h)(TT.depth);
            const IT = DT._sceneUBO;
            (0, xT.c)(DT.engine, (() => IT.destroy())), DT._batchState?._release(DT.engine), DT._batchState = void 0
          }
        };
      return DT
    }

    function ET(TT, oT) {
      return oT._sortDistance - TT._sortDistance || TT.renderable.order - oT.renderable.order
    }

    function fT(TT, oT) {
      return TT.renderable.order - oT.renderable.order
    }

    function CT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT._renderables,
        IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        zT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        kT = arguments.length > 4 ? arguments[4] : void 0;
      const WT = TT._config,
        XT = WT.rt,
        BT = TT._batchState,
        FT = uT(oT, TT.NK._renderableVersion);
      if (IT) {
        const oT = (oT, IT) => {
          oT && (IT || TT._ownsTargets || oT._eager) && (0, iT.d)(oT, TT.engine)
        };
        oT(XT), XT._descriptor.samples > 1 && oT(WT.rst), oT(WT.depth, !0)
      }
      const {
        _opaqueBindings: ST,
        _directBindings: DT,
        _transparentBindings: LT
      } = FT;
      try {
        for (const IT of oT) {
          const oT = IT.bind(TT.engine, TT._targetSignature);
          FT._batchState = TT._targetSignature._collectBatches?.(FT._batchState, oT), IT.isTransparent || IT._transmissive ? LT.push(oT) : IT._direct ? DT.push(oT) : ST.push(oT)
        }
        ST.sort(fT), DT.sort(fT), IT && JT(TT, TT.engine, !1)
      } catch (xT) {
        throw FT._batchState?._release(void 0, kT ?? [BT]), xT
      }
      return IT && (! function(TT, oT) {
        const IT = TT._config,
          iT = TT._colorAttachment;
        iT.view = oT._colorView, TT._renderPassDescriptor.colorAttachments = oT._colorView ? [iT] : [];
        const zT = IT.depth ?? oT,
          kT = zT._depthView;
        let WT;
        if (kT) {
          const TT = zT._descriptor,
            oT = (IT.depth ? zT._eager : !1 === IT.depthClear) ? "load" : "clear";
          WT = {
            view: kT,
            depthClearValue: TT.depthClearValue ?? 0,
            depthLoadOp: oT,
            depthStoreOp: "store"
          }, TT.dFormat?.includes("stencil") && (WT.stencilClearValue = 0, WT.stencilLoadOp = oT, WT.stencilStoreOp = "store")
        }
        TT._renderPassDescriptor.depthStencilAttachment = WT
      }(TT, XT), TT._updateContext.targetWidth = XT._width, TT._updateContext.targetHeight = XT._height), zT && (Object.assign(TT, FT), BT?._release(TT.engine, [FT._batchState])), FT
    }

    function jT(TT, oT) {
      const IT = TT.engine,
        iT = TT._config,
        kT = iT.rt,
        WT = TT.NK,
        XT = TT._opaqueBindings,
        BT = TT._ob,
        FT = TT._sceneBG;
      if (function(TT, oT, IT, iT) {
          const zT = oT?.viewport;
          if (!zT) return;
          const kT = Math.floor(zT.x * IT),
            WT = Math.floor((1 - zT.y - zT.height) * iT),
            XT = Math.ceil((zT.x + zT.width) * IT) - kT,
            BT = Math.ceil((1 - zT.y) * iT) - WT;
          TT.setViewport(kT, WT, XT, BT, 0, 1), TT.setScissorRect(kT, WT, XT, BT)
        }(oT, iT.cam ?? WT.camera, kT._width, kT._height), oT.setBindGroup(0, FT), TT._lastVis !== zT.d || !BT.length) {
        const oT = kT._descriptor,
          iT = IT._device.createRenderBundleEncoder({
            colorFormats: oT.format ? [oT.format] : [],
            depthStencilFormat: TT._targetSignature._depthStencilFormat,
            sampleCount: oT.samples
          });
        iT.setBindGroup(0, FT), aT(iT, XT, IT), BT[0] = iT.finish(), TT._lastVis = zT.d
      }
      let ST = XT.length;
      return oT.executeBundles(BT), oT.setBindGroup(0, FT), ST += aT(oT, TT._directBindings, IT), ST += aT(oT, TT._transparentBindings, IT), ST
    }

    function JT(TT, oT) {
      let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const iT = mT(oT, TT.NK)._buffer;
      if (iT === TT._lightsUBO) return;
      const zT = oT._device.createBindGroup({
        layout: KT(oT),
        entries: [{
          binding: 0,
          resource: {
            buffer: TT._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: iT
          }
        }]
      });
      TT._lightsUBO = iT, TT._sceneBG = zT, IT && (TT._ob = [])
    }

    function UT(TT, oT) {
      for (const IT of TT) IT.update?.(oT)
    }

    function aT(TT, oT, IT) {
      let iT = null,
        zT = 0;
      for (const kT of oT) {
        const oT = kT.renderable.mesh;
        oT && !1 === oT.visible || (kT.pipeline !== iT && (TT.setPipeline(kT.pipeline), iT = kT.pipeline), zT += kT.draw(TT, IT))
      }
      return zT
    }

    function YT(TT) {
      const oT = TT._materialSwapQueue;
      if (!oT[0] || TT._runtimeBuilds?.w) return;
      let iT, zT, kT;
      const WT = TT._renderables;
      for (const IT of oT) {
        const oT = IT.material;
        if (!oT) continue;
        const XT = IT._runtimeThinBuild;
        if (XT) {
          zT = XT(TT, IT, zT);
          continue
        }
        const BT = TT._groups.get(oT._buildGroup),
          FT = BT?.r;
        if (!FT) {
          (kT ??= []).push(IT);
          continue
        }
        if (BT._w?.(IT)) {
          (kT ??= []).push([IT, oT]);
          continue
        }
        const ST = TT._meshDisposables.get(IT);
        ST && (TT._meshDisposables.delete(IT), (0, xT.c)(TT.surface.engine, (() => ST.forEach((TT => TT())))));
        const DT = BT.o;
        let LT;
        for (let TT = WT.length; TT--;) WT[TT].mesh === IT && (LT = WT.splice(TT, 1)[0]);
        oT._csmGen = -~oT._csmGen;
        const cT = FT(TT, IT);
        if (DT) {
          const TT = DT.indexOf(LT);
          TT < 0 ? DT.push(cT) : DT[TT] = cT
        }
        iT = WT.push(cT)
      }
      if (iT && (WT.sort(((TT, oT) => TT.order - oT.order)), TT._renderableVersion++, TT._materialEpoch++), oT.length = 0, !kT) return zT;
      const XT = kT;
      return IT.e(355).then((() => IT(60125))).then((oT => {
        let {
          C: IT
        } = oT;
        return IT(TT, XT, zT)
      }), (oT => {
        const IT = TT._runtimeBuilds;
        IT ? IT._x(oT) : console.error(oT)
      }))
    }
    var QT = null;

    function OT(TT, oT) {
      const IT = TT.engine,
        zT = {
          _kind: "NK",
          surface: TT,
          clearColor: {
            r: .2,
            g: .2,
            b: .3,
            a: 1
          },
          camera: null,
          lights: [],
          meshes: [],
          animationGroups: [],
          fog: null,
          clipPlane: null,
          shadowGenerators: [],
          imageProcessing: {
            exposure: 1,
            contrast: 1,
            toneMappingEnabled: !1
          },
          _renderables: [],
          _prePasses: [],
          _pickSources: [],
          _uniformUpdaters: [],
          fixedDeltaMs: 0,
          _beforeRender: [],
          _deferredBuilders: [],
          _groups: new Map,
          _disposables: [],
          _meshDisposables: new Map,
          _materialSwapQueue: [],
          _renderableVersion: 0,
          _materialEpoch: 0,
          _built: !1,
          _drawCallsPre: 0,
          _update() {
            IT.useFloatingOrigin && zT.camera && !zT.camera._useFloatingOrigin && (zT.camera._useFloatingOrigin = !0, zT.camera._viewVer = -1, zT.camera._vpVer = -1);
            const TT = zT.fixedDeltaMs > 0 ? zT.fixedDeltaMs : IT._currentDelta,
              oT = IT._currentEncoder;
            let iT = 0;
            for (const IT of zT._beforeRender) IT(TT);
            zT._materialSwapQueue.length && YT(zT);
            for (const kT of zT._prePasses) iT += kT.execute(oT, IT);
            for (const kT of zT._uniformUpdaters) kT.update(IT);
            zT._drawCallsPre = iT
          },
          _record: () => zT._frameGraph.execute(),
          _resize() {
            zT._frameGraph.build()
          }
        },
        WT = function() {
          const TT = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let oT = 0; oT < TT._tasks.length; oT++) kT(TT, TT._tasks[oT]);
              for (const oT of TT._tasks)
                for (const TT of oT._passes) TT._initialize()
            },
            execute() {
              let oT = 0;
              for (const IT of TT._tasks)
                if (!1 !== IT.executionEnabled)
                  if (IT.execute) oT += IT.execute();
                  else
                    for (const TT of IT._passes) oT += TT._execute();
              return oT
            },
            dispose() {
              for (const oT of TT._tasks) oT.dispose();
              TT._tasks.length = 0, TT._currentProcessedTask = null
            }
          };
          return TT
        }();
      if (zT._frameGraph = WT, !1 !== oT?.defaultRenderTask) {
        const oT = TT.msaaSamples > 1,
          kT = oT ? (0, iT.b)({
            lbl: "scene-color",
            format: TT.format,
            dFormat: "depth24plus-stencil8",
            samples: TT.msaaSamples,
            size: TT
          }) : TT.scRT,
          XT = oT ? void 0 : (0, iT.b)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: TT
          });
        ! function(TT, oT) {
          TT._tasks.push(oT)
        }(WT, vT({
          name: "NK",
          rt: kT,
          rst: oT ? TT.scRT : void 0,
          depth: XT
        }, IT, zT))
      }
      return zT._disposables.push((() => WT.dispose())), zT
    }
    async function HT(TT) {
      const oT = TT;
      for (oT._built || (oT._materialSwapQueue.length = 0); oT._deferredBuilders.length;) {
        const TT = oT._deferredBuilders.splice(0);
        await Promise.all(TT.map((TT => TT())))
      }
      await YT(oT), QT?.get(oT)?.() || (oT._runtimeBuilds?._e(), oT._renderableVersion++, oT._built = !0), await (oT._rebuildHook?.(oT))
    }
    var nT = null;
    async function qT(TT) {
      const oT = TT,
        iT = oT.surface;
      (0, zT.i)(iT, oT) || (await HT(TT), oT._renderables.sort(ZT), await Promise.all(oT._frameGraph._tasks.map((TT => TT._preload?.()))), nT && await nT(oT), oT._frameGraph.build(), iT._renderingContexts[0] && (await IT.e(353).then((() => IT(60113)))).configureSwapchainOverlayScene(iT, oT), QT?.get(oT)?.() || (0, zT.m)(iT, oT))
    }
    var ZT = (TT, oT) => TT.order - oT.order
  },
  40525: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => FT,
      e: () => ST
    });
    var iT = IT(40476),
      zT = IT(40485),
      kT = IT(40490),
      WT = IT(40496),
      XT = IT(40503),
      BT = IT(40506);

    function FT(TT, oT, IT) {
      let XT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (oT < 1 || IT < 1) && (0, iT.b)(676, oT, IT);
      const FT = TT._device,
        ST = XT.mipMaps ?? !1,
        DT = XT.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        LT = ST ? (0, BT.d)(oT, IT) : 1,
        xT = FT.createTexture({
          size: {
            width: oT,
            height: IT
          },
          format: DT,
          mipLevelCount: LT,
          usage: zT.h.TEXTURE_BINDING | zT.h.COPY_DST | zT.h.RENDER_ATTACHMENT
        }),
        cT = {
          addressModeU: XT.addressModeU ?? "clamp-to-edge",
          addressModeV: XT.addressModeV ?? "clamp-to-edge",
          minFilter: XT.minFilter ?? "linear",
          magFilter: XT.magFilter ?? "linear",
          mipmapFilter: ST ? "linear" : "nearest"
        },
        KT = (0, WT.d)(TT, cT),
        MT = {
          texture: xT,
          view: xT.createView(),
          sampler: KT,
          width: oT,
          height: IT
        };
      return (0, kT.b)(MT), TT._dlr && TT._dlr.t(MT, {
        kind: "dynamic",
        width: oT,
        height: IT,
        format: DT,
        levels: LT,
        samplerDesc: cT,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), MT
    }

    function ST(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const zT = iT.invertY ?? !0,
        kT = iT.premultiplyAlpha ?? !1;
      TT._device.queue.copyExternalImageToTexture({
        source: IT,
        flipY: zT
      }, {
        texture: oT.texture,
        premultipliedAlpha: kT
      }, [oT.width, oT.height]);
      const WT = oT._recoverySource;
      WT && "dynamic" === WT.kind && (WT.source = IT, WT.flipY = zT, WT.premultipliedAlpha = kT), oT.texture.mipLevelCount > 1 && (0, XT.generateMipmaps)(TT, oT.texture)
    }
  },
  40518: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => BT
    });
    var iT = IT(40476),
      zT = IT(40485),
      kT = IT(40490),
      WT = IT(40496),
      XT = IT(40506);
    async function BT(TT, oT) {
      let BT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [FT, ST] = function(TT) {
        const oT = TT,
          IT = [
            [oT.displayWidth, oT.displayHeight],
            [oT.videoWidth, oT.videoHeight],
            [oT.naturalWidth, oT.naturalHeight],
            [oT.width, oT.height]
          ];
        for (const [iT, zT] of IT)
          if (void 0 !== iT && void 0 !== zT && Number.isInteger(iT) && Number.isInteger(zT) && iT > 0 && zT > 0) return [iT, zT];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(oT), [DT, LT] = function(TT, oT, IT) {
        if (void 0 === IT) return [TT, oT];
        if (!Number.isInteger(IT) || IT < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${IT})`);
        if (Math.max(TT, oT) <= IT) return [TT, oT];
        const iT = IT / Math.max(TT, oT);
        return TT >= oT ? [IT, Math.max(1, Math.round(oT * iT))] : [Math.max(1, Math.round(TT * iT)), IT]
      }(FT, ST, BT.maxDimension), xT = BT.mipMaps ?? !0, cT = BT.premultiplyAlpha ?? !1;
      let KT = oT,
        MT = null;
      const rT = {
        texture: null
      };
      try {
        DT === FT && LT === ST || (MT = await createImageBitmap(oT, {
          resizeWidth: DT,
          resizeHeight: LT,
          resizeQuality: "high",
          premultiplyAlpha: cT ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), KT = MT);
        const AT = TT._device,
          gT = BT.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          hT = xT ? (0, XT.d)(DT, LT) : 1,
          wT = hT > 1 ? (await Promise.resolve().then((() => IT(40503)))).generateMipmaps : null,
          mT = {
            addressModeU: BT.addressModeU ?? "repeat",
            addressModeV: BT.addressModeV ?? "repeat",
            minFilter: BT.minFilter ?? "linear",
            magFilter: BT.magFilter ?? "linear",
            mipmapFilter: xT ? "linear" : "nearest"
          };
        mT.maxAnisotropy = "linear" === mT.minFilter && "linear" === mT.magFilter && "linear" === mT.mipmapFilter ? 4 : 1;
        const eT = BT.invertY ?? !0,
          RT = async oT => {
            let IT;
            AT.pushErrorScope("validation"), AT.pushErrorScope("out-of-memory");
            let kT = null;
            try {
              const IT = rT.texture = AT.createTexture({
                size: {
                  width: DT,
                  height: LT
                },
                format: gT,
                mipLevelCount: hT,
                usage: zT.h.TEXTURE_BINDING | zT.h.COPY_DST | zT.h.RENDER_ATTACHMENT
              });
              AT.queue.copyExternalImageToTexture({
                source: oT,
                flipY: eT
              }, {
                texture: IT,
                premultipliedAlpha: cT
              }, {
                width: DT,
                height: LT
              }), wT && wT(TT, IT), kT = (0, WT.d)(TT, mT)
            } catch (xT) {
              IT = xT
            }
            const [XT, BT] = await Promise.all([AT.popErrorScope(), AT.popErrorScope()]);
            if (IT) throw IT;
            const FT = BT ?? XT;
            if (FT) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${FT.message}`, {
              cause: FT
            });
            const ST = rT.texture;
            return ST && kT || (0, iT.b)(677), {
              texture: ST,
              view: ST.createView(),
              sampler: kT,
              width: DT,
              height: LT
            }
          }, uT = await (TT._dlr?.x(KT, DT, LT, gT, hT, mT, eT, cT, RT)) ?? await RT(KT);
        return (0, kT.b)(uT), uT
      } catch (AT) {
        throw rT.texture?.destroy(), AT
      } finally {
        MT?.close()
      }
    }
  },
  40503: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      generateMipmaps: () => xT,
      recordMipmaps: () => cT
    });
    var iT = IT(40485),
      zT = IT(40496),
      kT = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var WT = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      XT = null,
      BT = null,
      FT = null,
      ST = null,
      DT = null;

    function LT(TT) {
      const oT = TT._device;
      oT !== DT && (XT?.clear(), XT = null, BT = null, FT = null, ST = null, DT = null, DT = oT), BT ??= oT.createShaderModule({
        code: WT
      }), FT ??= function(TT) {
        return (0, zT.d)(TT, kT)
      }(TT), ST ??= oT.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: iT.g.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: iT.g.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function xT(TT, oT, IT) {
      const iT = TT._device,
        zT = iT.createCommandEncoder();
      cT(TT, oT, zT, IT), iT.queue.submit([zT.finish()])
    }

    function cT(TT, oT, IT, iT) {
      if (oT.mipLevelCount <= 1) return;
      const zT = TT._device,
        kT = function(TT, oT) {
          const IT = TT._device;
          LT(TT), XT ??= new Map;
          let iT = XT.get(oT);
          return iT || (iT = IT.createRenderPipeline({
            layout: IT.createPipelineLayout({
              bindGroupLayouts: [ST]
            }),
            vertex: {
              module: BT,
              entryPoint: "vs"
            },
            fragment: {
              module: BT,
              entryPoint: "fs",
              targets: [{
                format: oT
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), XT.set(oT, iT)), iT
        }(TT, oT.format),
        WT = null != iT ? {
          dimension: "2d",
          baseArrayLayer: iT,
          arrayLayerCount: 1
        } : {};
      for (let XT = 1; XT < oT.mipLevelCount; XT++) {
        const TT = oT.createView({
            baseMipLevel: XT - 1,
            mipLevelCount: 1,
            ...WT
          }),
          iT = oT.createView({
            baseMipLevel: XT,
            mipLevelCount: 1,
            ...WT
          }),
          BT = zT.createBindGroup({
            layout: ST,
            entries: [{
              binding: 0,
              resource: TT
            }, {
              binding: 1,
              resource: FT
            }]
          }),
          DT = IT.beginRenderPass({
            colorAttachments: [{
              view: iT,
              loadOp: "clear",
              storeOp: "store",
              clearValue: {
                r: 0,
                g: 0,
                b: 0,
                a: 0
              }
            }]
          });
        DT.setPipeline(kT), DT.setBindGroup(0, BT), DT.draw(3), DT.end()
      }
    }
  },
  40506: (TT, oT, IT) => {
    function iT(TT, oT) {
      return Math.floor(Math.log2(Math.max(TT, oT))) + 1
    }
    IT.d(oT, {
      d: () => iT
    })
  },
  40474: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => FT,
      e: () => ST
    });
    var iT = IT(40476),
      zT = IT(40485),
      kT = IT(40490),
      WT = IT(40496),
      XT = IT(40503),
      BT = IT(40506);

    function FT(TT, oT, IT, XT) {
      let FT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (oT < 1 || IT < 1 || XT < 1) && (0, iT.b)(722, oT, IT, XT);
      const ST = TT._device,
        DT = FT.mipMaps ?? !0,
        LT = FT.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        xT = ST.createTexture({
          size: {
            width: oT,
            height: IT,
            depthOrArrayLayers: XT
          },
          dimension: "2d",
          format: LT,
          mipLevelCount: DT ? (0, BT.d)(oT, IT) : 1,
          usage: zT.h.TEXTURE_BINDING | zT.h.COPY_DST | zT.h.RENDER_ATTACHMENT
        }),
        cT = (0, WT.d)(TT, {
          addressModeU: FT.addressModeU ?? "repeat",
          addressModeV: FT.addressModeV ?? "repeat",
          minFilter: FT.minFilter ?? "linear",
          magFilter: FT.magFilter ?? "linear",
          mipmapFilter: DT ? "linear" : "nearest"
        }),
        KT = {
          texture: xT,
          view: xT.createView({
            dimension: "2d-array"
          }),
          sampler: cT,
          width: oT,
          height: IT,
          layers: XT
        };
      return (0, kT.b)(KT), KT
    }

    function ST(TT, oT, IT, zT) {
      let kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (IT < 0 || IT >= oT.layers || (0 | IT) !== IT) && (0, iT.b)(723, oT.layers, IT);
      const WT = kT.invertY ?? !0,
        BT = kT.premultiplyAlpha ?? !1;
      TT._device.queue.copyExternalImageToTexture({
        source: zT,
        flipY: WT
      }, {
        texture: oT.texture,
        origin: [0, 0, IT],
        premultipliedAlpha: BT
      }, [oT.width, oT.height, 1]), oT.texture.mipLevelCount > 1 && (0, XT.generateMipmaps)(TT, oT.texture, IT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);