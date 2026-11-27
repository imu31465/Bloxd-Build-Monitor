export const id = 622;
export const ids = [622];
export const modules = {
  53878: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW
    });
    var mW = OW(53868),
      EW = OW(53885);

    function NW(WW) {
      (0, EW.d)(WW), (0, mW.s)(WW);
      const iW = WW._surfaces;
      for (const OW of iW) OW._renderingContexts.length = 0, OW._ro?.disconnect(), OW._context.unconfigure();
      iW.length = 0;
      try {
        WW._disposeManagedResources?.(), WW._disposeStorageBuffers?.()
      } finally {
        WW._device.destroy()
      }
    }
  },
  53868: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => xW,
      f: () => UW,
      i: () => lW,
      l: () => AW,
      o: () => MW,
      p: () => kW,
      s: () => sW
    });
    var mW = OW(53822);
    var EW = "Babylon Lite v1.32.0",
      NW = OW(53875);

    function PW(WW) {
      return "clientWidth" in WW
    }
    var LW = 1;

    function cW(WW, iW, OW) {
      const cW = iW.getContext("webgpu");
      cW || (0, mW.c)(54), PW(iW) && iW.setAttribute("data-engine", EW);
      const wW = OW?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        tW = OW?.srgb ? (ZW = wW).endsWith("-srgb") ? ZW : `${ZW}-srgb` : wW;
      var ZW;
      const xW = OW?.alphaMode ?? "opaque";
      cW.configure({
        device: WW._device,
        format: wW,
        alphaMode: xW,
        viewFormats: [tW]
      });
      const lW = 1 === OW?.msaaSamples ? 1 : 4,
        AW = (0, NW.c)({
          lbl: "swapchain",
          format: tW,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return AW._eager = !0, {
        engine: WW,
        canvas: iW,
        format: tW,
        msaaSamples: lW,
        scRT: AW,
        maxDevicePixelRatio: OW?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: LW++,
        _context: cW,
        _configureFormat: wW,
        _alphaMode: xW,
        _renderingContexts: []
      }
    }

    function wW(WW) {
      const iW = WW._context.getCurrentTexture(),
        OW = WW.scRT;
      OW._colorTexture = iW, OW._colorView = iW.createView({
        format: WW.format
      }), OW._width = iW.width, OW._height = iW.height
    }

    function tW(WW) {
      const iW = WW.canvas;
      if (!PW(iW)) return;
      const OW = WW._w ?? iW.clientWidth,
        mW = WW._h ?? iW.clientHeight;
      if (!(OW > 0 && mW > 0)) return;
      const EW = Math.min(globalThis.devicePixelRatio || 1, WW.maxDevicePixelRatio);
      ZW(WW, OW * EW | 0, mW * EW | 0)
    }

    function ZW(WW, iW, OW) {
      const mW = WW.canvas,
        EW = 0 | iW,
        NW = 0 | OW;
      if (EW > 0 && NW > 0 && (EW !== mW.width || NW !== mW.height)) {
        mW.width = EW, mW.height = NW, WW.scRT._width = EW, WW.scRT._height = NW;
        for (const iW of WW._renderingContexts) iW._resize?.()
      }
    }
    var xW = 0;

    function lW(WW, iW) {
      return -1 !== WW._renderingContexts.indexOf(iW)
    }

    function AW(WW, iW) {
      return -1 === WW._renderingContexts.indexOf(iW) && (WW._renderingContexts.push(iW), !0)
    }
    var bW = null;
    var jW = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function UW(WW, iW) {
      const NW = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...bW ? bW() : {}
      });
      NW || (0, mW.c)(47);
      const PW = bW?.deviceFeatures?.(NW, iW) ?? function(WW) {
          return jW.filter((iW => WW.features.has(iW)))
        }(NW),
        LW = await NW.requestDevice({
          requiredFeatures: PW,
          requiredLimits: iW?.requiredLimits
        });
      console.log(`${EW} - WebGPU engine`);
      const ZW = !!iW?.useHighPrecisionMatrix,
        xW = !!iW?.useFloatingOrigin;
      if (xW && !ZW && (0, mW.c)(48), ZW) {
        const {
          allocateF64Mat4: WW
        } = await OW.e(674).then((() => OW(64470)));
        0
      }
      let lW, AW, UW, kW;
      if (xW) {
        const [{
          wrapRenderableForFO: WW,
          lightFoVersion: iW,
          applyLightFoOffset: mW
        }, {
          makePackMeshWorld: EW
        }] = await Promise.all([OW.e(675).then((() => OW(64479))), OW.e(676).then((() => OW(64482)))]);
        lW = WW, AW = EW, UW = iW, kW = mW
      }
      const sW = {
          _device: LW
        },
        MW = [sW];
      return Object.assign(sW, {
        engine: sW,
        surfaces: MW,
        _surfaces: MW,
        _device: LW,
        _options: iW,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: ZW,
        useFloatingOrigin: xW,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: lW,
        _makePackMeshWorld: AW,
        _lightFoVersion: UW,
        _applyLightFoOffset: kW
      }, cW(sW, WW, iW)), tW(sW), wW(sW), sW
    }

    function kW(WW, iW, OW) {
      ZW(WW, iW, OW)
    }

    function sW(WW) {
      WW._animFrameId && cancelAnimationFrame(WW._animFrameId), WW._animFrameId = 0, WW._renderFn = null, WW._flushGpuRetirements?.(WW)
    }

    function MW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WW.surfaces;
      if (OW !== WW.surfaces)
        for (let EW = OW.length; EW--;) OW[EW].engine !== WW && (0, mW.c)(49);
      KW(WW, iW, OW)
    }

    function KW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WW._surfaces,
        mW = 0;
      for (let NW = OW.length; NW--;) mW += OW[NW]._renderingContexts.length;
      if (!mW) return WW.drawCallCount = 0, WW._flushGpuRetirements?.(WW);
      const EW = WW._device.createCommandEncoder({
        label: "frame"
      });
      WW._currentEncoder = EW, WW._currentDelta = iW;
      try {
        WW._gpuTimerBegin?.(EW), mW = 0;
        for (let WW = 0; WW < OW.length; WW++) {
          const iW = OW[WW];
          iW._capturePreFrame?.(iW), wW(iW);
          const EW = iW._renderingContexts;
          for (let WW = 0; WW < EW.length; WW++) {
            const iW = EW[WW];
            iW._update(), mW += iW._drawCallsPre + iW._record()
          }
        }
        const iW = WW._currentEncoder;
        for (let WW = 0; WW < OW.length; WW++) {
          const mW = OW[WW];
          mW._captureService?.(mW, iW)
        }
        WW._gpuTimerEnd?.(iW), WW._cbs[0] = iW.finish(), WW._device.queue.submit(WW._cbs), WW._flushGpuRetirements?.(WW), WW.drawCallCount = mW, WW._gpuTimerResolve?.()
      } finally {
        WW._currentEncoder = void 0
      }
    }
  },
  53828: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW,
      e: () => NW,
      h: () => mW
    });
    var mW = globalThis.GPUTextureUsage,
      EW = globalThis.GPUBufferUsage,
      NW = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  53885: (WW, iW, OW) => {
    function mW(WW) {
      EW(WW.splice(0))
    }

    function EW(WW) {
      for (const OW of WW) try {
        OW()
      } catch (iW) {
        console.error("GPU resource retirement failed.", iW)
      }
    }

    function NW(WW, iW) {
      WW._flushGpuRetirements ??= PW, (WW._retirements ??= []).push(iW)
    }

    function PW(WW) {
      const iW = WW._retirements;
      if (!iW) return;
      WW._retirements = null;
      const OW = WW._retiring ??= new Set;
      OW.add(iW), queueMicrotask((() => {
        WW._device.queue.onSubmittedWorkDone().then((() => {
          OW.delete(iW), mW(iW)
        })).catch((() => {}))
      }))
    }

    function LW(WW) {
      const iW = WW._retirements,
        OW = WW._retiring;
      WW._retirements = null, WW._retiring = null, iW && mW(iW), OW?.forEach(mW)
    }
    OW.d(iW, {
      d: () => LW,
      g: () => NW
    })
  },
  53875: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      f: () => PW,
      h: () => LW
    });
    var mW = OW(53828);

    function EW(WW) {
      const iW = WW.size;
      return "canvas" in iW ? iW.canvas : iW
    }

    function NW(WW) {
      return {
        _descriptor: WW,
        _resolveSize: EW,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function PW(WW, iW) {
      if (WW._eager) return void WW._syncEager?.(iW);
      LW(WW);
      const OW = WW._descriptor,
        {
          width: NW,
          height: PW
        } = (WW._resolveSize ?? EW)(OW);
      WW._width = NW, WW._height = PW;
      const cW = iW._device;
      OW.format && (WW._colorTexture = cW.createTexture({
        label: OW.lbl,
        size: {
          width: NW,
          height: PW
        },
        format: OW.format,
        sampleCount: OW.samples,
        usage: mW.h.RENDER_ATTACHMENT | mW.h.TEXTURE_BINDING | mW.h.COPY_SRC | mW.h.COPY_DST
      }), WW._colorView = WW._colorTexture.createView()), OW.dFormat && (WW._depthTexture = cW.createTexture({
        label: OW.lbl,
        size: {
          width: NW,
          height: PW
        },
        format: OW.dFormat,
        sampleCount: OW.samples,
        usage: mW.h.RENDER_ATTACHMENT | mW.h.TEXTURE_BINDING
      }), WW._depthView = WW._depthTexture.createView())
    }

    function LW(WW) {
      if (!WW || WW._eager && !WW._disposeAttachments) return;
      const iW = WW._colorTexture,
        OW = WW._depthTexture;
      if (WW._colorTexture = WW._depthTexture = null, WW._colorView = WW._depthView = null, WW._width = WW._height = 0, WW._disposeAttachments) WW._disposeAttachments(iW, OW);
      else try {
        iW?.destroy()
      } finally {
        !1 !== WW._ownsDepthTexture && OW?.destroy()
      }
    }
  },
  53896: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW,
      g: () => EW,
      h: () => NW
    });
    var mW = Float32Array,
      EW = Float64Array,
      NW = Uint32Array
  },
  53901: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW
    });
    var mW = 16
  },
  53822: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW
    });
    var mW = null;

    function EW(WW) {
      for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), EW = 1; EW < iW; EW++) OW[EW - 1] = arguments[EW];
      const NW = new Error(mW?.(WW, OW) ?? `#${WW}`);
      throw NW.lite = OW, NW
    }
  },
  53857: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW
    });
    var mW = OW(53836);

    function EW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const OW = iW.compare,
        EW = iW.lodMinClamp ?? 0,
        NW = iW.lodMaxClamp ?? 32,
        PW = void 0 !== OW || 0 !== EW || 32 !== NW ? `${OW??""}:${EW}:${NW}` : "";
      return (0, mW.b)(WW, iW, PW)
    }
  },
  53833: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW
    });
    var mW = null;

    function EW(WW) {
      const iW = mW ??= new WeakMap;
      iW.set(WW, (iW.get(WW) ?? 0) + 1)
    }

    function NW(WW) {
      EW(WW.texture)
    }
  },
  53836: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW
    });
    var mW = null,
      EW = "nearest",
      NW = "clamp-to-edge",
      PW = {
        minFilter: EW,
        magFilter: EW,
        mipmapFilter: EW,
        addressModeU: NW,
        addressModeV: NW,
        addressModeW: NW,
        maxAnisotropy: 1
      };

    function LW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const EW = WW._device,
        NW = mW ??= new WeakMap;
      let LW = NW.get(EW);
      LW || NW.set(EW, LW = new Map);
      let cW = OW;
      for (const mW in PW) {
        const WW = mW;
        cW += `:${iW[WW]??PW[WW]}`
      }
      let wW = LW.get(cW);
      return wW || LW.set(cW, wW = EW.createSampler(iW)), wW
    }
  },
  53891: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => DW,
      e: () => fW
    });
    var mW = OW(53875),
      EW = OW(53868);

    function NW(WW, iW) {
      iW._passes.length = 0, WW._currentProcessedTask = iW;
      try {
        iW.record()
      } finally {
        WW._currentProcessedTask = null
      }
    }
    var PW = OW(53896);

    function LW(WW) {
      const iW = WW.worldMatrixVersion;
      if (WW._viewVer === iW) return WW._viewCache;
      const OW = WW._viewCache,
        mW = WW.worldMatrix,
        EW = WW._useFloatingOrigin,
        NW = EW ? 0 : mW[12],
        PW = EW ? 0 : mW[13],
        LW = EW ? 0 : mW[14];
      return OW[0] = mW[0], OW[1] = mW[4], OW[2] = mW[8], OW[3] = 0, OW[4] = mW[1], OW[5] = mW[5], OW[6] = mW[9], OW[7] = 0, OW[8] = mW[2], OW[9] = mW[6], OW[10] = mW[10], OW[11] = 0, OW[12] = -(mW[0] * NW + mW[1] * PW + mW[2] * LW), OW[13] = -(mW[4] * NW + mW[5] * PW + mW[6] * LW), OW[14] = -(mW[8] * NW + mW[9] * PW + mW[10] * LW), OW[15] = 1, WW._viewVer = iW, OW
    }
    var cW = null;

    function wW(WW) {
      return WW._projFov === WW.fov && WW._projNear === WW.nearPlane && WW._projFar === WW.farPlane || (WW._projFov = WW.fov, WW._projNear = WW.nearPlane, WW._projFar = WW.farPlane, WW._projRev = (WW._projRev ?? 0) + 1), WW.worldMatrixVersion + (WW._projRev ?? 0)
    }

    function tW(WW, iW) {
      const OW = wW(WW);
      if (WW._projVer === OW && WW._projAspect === iW) return WW._projCache;
      const mW = WW._projCache;
      return null !== cW && WW.ortho ? cW(WW, iW, mW) : function(WW, iW, OW, mW, EW) {
        const NW = 1 / Math.tan(.5 * iW),
          PW = EW - mW;
        WW[0] = NW / OW, WW[5] = NW, WW[10] = -mW / PW, WW[11] = 1, WW[14] = EW * mW / PW
      }(mW, WW.fov, iW, WW.nearPlane, WW.farPlane), WW._projVer = OW, WW._projAspect = iW, mW
    }
    var ZW = OW(53828);

    function xW(WW, iW, OW) {
      return WW._device.createBuffer({
        label: OW,
        size: (mW = iW, EW = 16, Math.ceil(mW / EW) * EW),
        usage: ZW.b.UNIFORM | ZW.b.COPY_DST
      });
      var mW, EW
    }
    var lW = OW(53885),
      AW = null;

    function bW(WW) {
      const iW = WW._device,
        OW = AW ??= new WeakMap;
      let mW = OW.get(iW);
      return mW || (mW = iW.createBindGroupLayout({
        label: "rb",
        entries: [{
          binding: 0,
          visibility: ZW.e.VERTEX | ZW.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: ZW.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), OW.set(iW, mW)), mW
    }

    function jW(WW, iW, OW) {
      const mW = WW._device,
        EW = xW(WW, iW.byteLength, OW);
      try {
        mW.queue.writeBuffer(EW, 0, iW.buffer, iW.byteOffset, iW.byteLength)
      } catch (NW) {
        throw EW.destroy(), NW
      }
      return EW
    }
    var UW = OW(53901),
      kW = new PW.h(1),
      sW = new PW.e(kW.buffer);

    function MW(WW) {
      let iW = 0;
      for (const OW of WW) iW += OW._lightVersion ?? 0;
      return iW
    }

    function KW(WW, iW) {
      WW.fill(0);
      let OW = 0;
      for (const mW of iW) {
        if (OW >= UW.b) break;
        mW._writeLightUbo && (mW._writeLightUbo(WW, 4 + 16 * OW), OW++)
      }
      kW[0] = OW, WW[0] = sW[0]
    }

    function SW(WW, iW) {
      let OW = iW._lightGpuState;
      const mW = 16 + 16 * UW.b * 4;
      if (OW && OW._byteSize === mW) return OW;
      const EW = !OW;
      OW?._buffer.destroy();
      const NW = new PW.e(mW / 4);
      return KW(NW, iW.lights), WW._applyLightFoOffset?.(NW, iW), OW = {
        _buffer: jW(WW, NW),
        _scratch: NW,
        zC: MW(iW.lights) + (WW._lightFoVersion?.(iW) ?? 0),
        _listVersion: iW._lightListVersion ?? 0,
        _lightCount: iW.lights.length,
        _byteSize: mW
      }, iW._lightGpuState = OW, EW && iW._disposables.push((() => {
        iW._lightGpuState?._buffer.destroy(), iW._lightGpuState = void 0
      })), OW
    }

    function YW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const EW = iW;
      if (0 === mW && 16 === EW.length) return void WW.set(EW, OW);
      const NW = mW,
        PW = OW;
      WW[PW + 0] = EW[NW + 0], WW[PW + 1] = EW[NW + 1], WW[PW + 2] = EW[NW + 2], WW[PW + 3] = EW[NW + 3], WW[PW + 4] = EW[NW + 4], WW[PW + 5] = EW[NW + 5], WW[PW + 6] = EW[NW + 6], WW[PW + 7] = EW[NW + 7], WW[PW + 8] = EW[NW + 8], WW[PW + 9] = EW[NW + 9], WW[PW + 10] = EW[NW + 10], WW[PW + 11] = EW[NW + 11], WW[PW + 12] = EW[NW + 12], WW[PW + 13] = EW[NW + 13], WW[PW + 14] = EW[NW + 14], WW[PW + 15] = EW[NW + 15]
    }

    function yW(WW, iW, OW, mW, EW) {
      WW.fill(0);
      const NW = function(WW, iW) {
          const OW = wW(WW);
          if (WW._vpVer === OW && WW._vpAspect === iW) return WW._vpCache;
          const mW = WW._vpCache;
          return function(WW, iW, OW, mW, EW, NW) {
            const PW = OW[mW],
              LW = OW[mW + 1],
              cW = OW[mW + 2],
              wW = OW[mW + 3],
              tW = OW[mW + 4],
              ZW = OW[mW + 5],
              xW = OW[mW + 6],
              lW = OW[mW + 7],
              AW = OW[mW + 8],
              bW = OW[mW + 9],
              jW = OW[mW + 10],
              UW = OW[mW + 11],
              kW = OW[mW + 12],
              sW = OW[mW + 13],
              MW = OW[mW + 14],
              KW = OW[mW + 15];
            let SW = EW[NW],
              YW = EW[NW + 1],
              yW = EW[NW + 2],
              TW = EW[NW + 3];
            WW[iW] = PW * SW + tW * YW + AW * yW + kW * TW, WW[iW + 1] = LW * SW + ZW * YW + bW * yW + sW * TW, WW[iW + 2] = cW * SW + xW * YW + jW * yW + MW * TW, WW[iW + 3] = wW * SW + lW * YW + UW * yW + KW * TW, SW = EW[NW + 4], YW = EW[NW + 5], yW = EW[NW + 6], TW = EW[NW + 7], WW[iW + 4] = PW * SW + tW * YW + AW * yW + kW * TW, WW[iW + 5] = LW * SW + ZW * YW + bW * yW + sW * TW, WW[iW + 6] = cW * SW + xW * YW + jW * yW + MW * TW, WW[iW + 7] = wW * SW + lW * YW + UW * yW + KW * TW, SW = EW[NW + 8], YW = EW[NW + 9], yW = EW[NW + 10], TW = EW[NW + 11], WW[iW + 8] = PW * SW + tW * YW + AW * yW + kW * TW, WW[iW + 9] = LW * SW + ZW * YW + bW * yW + sW * TW, WW[iW + 10] = cW * SW + xW * YW + jW * yW + MW * TW, WW[iW + 11] = wW * SW + lW * YW + UW * yW + KW * TW, SW = EW[NW + 12], YW = EW[NW + 13], yW = EW[NW + 14], TW = EW[NW + 15], WW[iW + 12] = PW * SW + tW * YW + AW * yW + kW * TW, WW[iW + 13] = LW * SW + ZW * YW + bW * yW + sW * TW, WW[iW + 14] = cW * SW + xW * YW + jW * yW + MW * TW, WW[iW + 15] = wW * SW + lW * YW + UW * yW + KW * TW
          }(mW, 0, tW(WW, iW), 0, LW(WW), 0), WW._vpVer = OW, WW._vpAspect = iW, mW
        }(mW, EW),
        PW = LW(mW),
        cW = mW.worldMatrix;
      YW(WW, NW, 0), YW(WW, PW, 16), iW.useFloatingOrigin ? (WW[32] = 0, WW[33] = 0, WW[34] = 0) : (WW[32] = cW[12], WW[33] = cW[13], WW[34] = cW[14]), WW[87] = iW.canvas.width;
      const ZW = OW.imageProcessing;
      WW[76] = ZW.exposure, WW[77] = ZW.contrast, WW[78] = OW._envTextures?.lodGenerationScale ?? .8, WW[79] = +ZW.toneMappingEnabled, WW[37] = iW.canvas.height
    }

    function TW(WW, iW) {
      return {
        _renderables: WW,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: iW
      }
    }

    function JW(WW, iW, OW) {
      WW.clr ??= !0;
      const EW = WW.rt._descriptor,
        NW = WW.depth?._descriptor,
        cW = {
          _colorFormat: EW.format,
          _depthStencilFormat: NW?.dFormat ?? EW.dFormat,
          _depthCompare: EW.depthCompare ?? NW?.depthCompare,
          _sampleCount: EW.samples
        },
        tW = {
          loadOp: "clear",
          storeOp: "store"
        },
        ZW = {
          ...TW([], -1),
          name: WW.name,
          _config: WW,
          _ownsTargets: !WW.sharedRt,
          engine: iW,
          rb: OW,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [tW]
          },
          _colorAttachment: tW,
          _sceneUBO: xW(iW, 368),
          _suData: new PW.e(92),
          _sceneUboCacheKey: [],
          _targetSignature: cW,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (ZW._disposed) throw new Error("RenderTask has been disposed.");
            ZW._recordExplicit ? ZW._recordExplicit(ZW, !0) : nW(ZW, !1 !== WW.autoMirror ? OW._renderables.slice() : ZW._renderables, !0)
          },
          execute: () => function(WW, iW, OW) {
            if (!1 === WW.enabled) return 0;
            const mW = WW.rb;
            ! function(WW, iW, OW) {
              const mW = WW.rb;
              !1 !== WW._config.autoMirror && WW._lastVersion !== mW._renderableVersion && nW(WW, mW._renderables.slice());
              oW(WW, iW);
              const EW = WW._updateContext,
                NW = WW._config.cam ?? mW.camera;
              OW._colorFormat && (WW._config._skipClusteredLights || mW._clusteredLightUpdater?.(NW, EW.targetWidth, EW.targetHeight), function(WW, iW) {
                const OW = SW(WW, iW),
                  mW = MW(iW.lights) + (WW._lightFoVersion?.(iW) ?? 0),
                  EW = iW._lightListVersion ?? 0;
                mW === OW.zC && EW === OW._listVersion && iW.lights.length === OW._lightCount || (OW.zC = mW, OW._listVersion = EW, OW._lightCount = iW.lights.length, KW(OW._scratch, iW.lights), WW._applyLightFoOffset?.(OW._scratch, iW), WW._device.queue.writeBuffer(OW._buffer, 0, OW._scratch)), OW._buffer
              }(iW, mW));
              (function(WW, iW, OW, mW) {
                if (!mW) return;
                const EW = mW.viewport,
                  NW = WW._config.rt,
                  PW = (WW._config.cs ? iW.canvas.width / iW.canvas.height : NW._width / NW._height) * (EW ? EW.width / EW.height : 1),
                  LW = OW.fog,
                  cW = OW.imageProcessing,
                  tW = wW(mW),
                  ZW = OW._envTextures,
                  xW = WW._sceneUboCacheKey;
                if (xW[0] === mW && xW[1] === LW && xW[2] === tW && xW[3] === PW && xW[4] === cW.exposure && xW[5] === cW.contrast && xW[6] === ZW) return;
                xW[0] = mW, xW[1] = LW, xW[2] = tW, xW[3] = PW, xW[4] = cW.exposure, xW[5] = cW.contrast, xW[6] = ZW;
                const lW = WW._suData;
                yW(lW, iW, OW, mW, PW);
                const AW = OW._sceneUboContributors;
                if (AW)
                  for (const wW of AW) wW(lW, OW);
                iW._device.queue.writeBuffer(WW._sceneUBO, 0, lW)
              })(WW, iW, mW, NW), EW.W9 = NW, WW._batchState?._reset(), dW(WW._opaqueBindings, EW), dW(WW._directBindings, EW), dW(WW._transparentBindings, EW), WW._batchState?._flush(iW),
                function(WW, iW) {
                  const OW = WW._transparentBindings;
                  if (OW.length <= 1 || !iW) return;
                  const mW = LW(iW);
                  for (const EW of OW) {
                    const WW = EW.renderable._worldCenter;
                    EW._sortDistance = WW ? WW[0] * mW[2] + WW[1] * mW[6] + WW[2] * mW[10] + mW[14] : 0
                  }
                  OW.sort(hW)
                }(WW, NW)
            }(WW, iW, OW);
            const EW = WW._colorAttachment,
              NW = WW._config;
            NW.rt._colorView && (NW.rt === mW.surface.scRT && (EW.view = NW.rt._colorView), EW.resolveTarget = NW.rst?._colorView ?? void 0, EW.clearValue = NW.clrColor ?? mW.clearColor, EW.loadOp = NW.clr ? "clear" : "load");
            if (WW._executeWithTransmission) return WW._executeWithTransmission(OW._sampleCount);
            const PW = iW._currentEncoder.beginRenderPass(WW._renderPassDescriptor),
              cW = uW(WW, PW);
            return PW.end(), cW
          }(ZW, iW, cW),
          dispose() {
            if (ZW._disposed) return;
            ZW._disposed = !0;
            const iW = ZW._pendingMeshes;
            iW && (iW.length = 0);
            for (const WW of ZW._renderables) ZW._retireRenderable?.(ZW.engine, WW);
            ZW._passes.length = ZW._opaqueBindings.length = ZW._directBindings.length = 0, ZW._transparentBindings.length = ZW._renderables.length = ZW._ob.length = 0, ZW._ownsTargets && ((0, mW.h)(WW.rt), (0, mW.h)(WW.rst)), WW.depth?._eager || (0, mW.h)(WW.depth);
            const OW = ZW._sceneUBO;
            (0, lW.g)(ZW.engine, (() => OW.destroy())), ZW._batchState?._release(ZW.engine), ZW._batchState = void 0
          }
        };
      return ZW
    }

    function hW(WW, iW) {
      return iW._sortDistance - WW._sortDistance || WW.renderable.order - iW.renderable.order
    }

    function HW(WW, iW) {
      return WW.renderable.order - iW.renderable.order
    }

    function nW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW._renderables,
        OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        EW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        NW = arguments.length > 4 ? arguments[4] : void 0;
      const PW = WW._config,
        LW = PW.rt,
        cW = WW._batchState,
        wW = TW(iW, WW.rb._renderableVersion);
      if (OW) {
        const iW = (iW, OW) => {
          iW && (OW || WW._ownsTargets || iW._eager) && (0, mW.f)(iW, WW.engine)
        };
        iW(LW), LW._descriptor.samples > 1 && iW(PW.rst), iW(PW.depth, !0)
      }
      const {
        _opaqueBindings: tW,
        _directBindings: ZW,
        _transparentBindings: xW
      } = wW;
      try {
        for (const OW of iW) {
          const iW = OW.bind(WW.engine, WW._targetSignature);
          wW._batchState = WW._targetSignature._collectBatches?.(wW._batchState, iW), OW.isTransparent || OW._transmissive ? xW.push(iW) : OW._direct ? ZW.push(iW) : tW.push(iW)
        }
        tW.sort(HW), ZW.sort(HW), OW && oW(WW, WW.engine, !1)
      } catch (lW) {
        throw wW._batchState?._release(void 0, NW ?? [cW]), lW
      }
      return OW && (! function(WW, iW) {
        const OW = WW._config,
          mW = WW._colorAttachment;
        mW.view = iW._colorView, WW._renderPassDescriptor.colorAttachments = iW._colorView ? [mW] : [];
        const EW = OW.depth ?? iW,
          NW = EW._depthView;
        let PW;
        if (NW) {
          const WW = EW._descriptor,
            iW = (OW.depth ? EW._eager : !1 === OW.depthClear) ? "load" : "clear";
          PW = {
            view: NW,
            depthClearValue: WW.depthClearValue ?? 0,
            depthLoadOp: iW,
            depthStoreOp: "store"
          }, WW.dFormat?.includes("stencil") && (PW.stencilClearValue = 0, PW.stencilLoadOp = iW, PW.stencilStoreOp = "store")
        }
        WW._renderPassDescriptor.depthStencilAttachment = PW
      }(WW, LW), WW._updateContext.targetWidth = LW._width, WW._updateContext.targetHeight = LW._height), EW && (Object.assign(WW, wW), cW?._release(WW.engine, [wW._batchState])), wW
    }

    function uW(WW, iW) {
      const OW = WW.engine,
        mW = WW._config,
        NW = mW.rt,
        PW = WW.rb,
        LW = WW._opaqueBindings,
        cW = WW._ob,
        wW = WW._sceneBG;
      if (function(WW, iW, OW, mW) {
          const EW = iW?.viewport;
          if (!EW) return;
          const NW = Math.floor(EW.x * OW),
            PW = Math.floor((1 - EW.y - EW.height) * mW),
            LW = Math.ceil((EW.x + EW.width) * OW) - NW,
            cW = Math.ceil((1 - EW.y) * mW) - PW;
          WW.setViewport(NW, PW, LW, cW, 0, 1), WW.setScissorRect(NW, PW, LW, cW)
        }(iW, mW.cam ?? PW.camera, NW._width, NW._height), iW.setBindGroup(0, wW), WW._lastVis !== EW.c || !cW.length) {
        const iW = NW._descriptor,
          mW = OW._device.createRenderBundleEncoder({
            colorFormats: iW.format ? [iW.format] : [],
            depthStencilFormat: WW._targetSignature._depthStencilFormat,
            sampleCount: iW.samples
          });
        mW.setBindGroup(0, wW), eW(mW, LW, OW), cW[0] = mW.finish(), WW._lastVis = EW.c
      }
      let tW = LW.length;
      return iW.executeBundles(cW), iW.setBindGroup(0, wW), tW += eW(iW, WW._directBindings, OW), tW += eW(iW, WW._transparentBindings, OW), tW
    }

    function oW(WW, iW) {
      let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const mW = SW(iW, WW.rb)._buffer;
      if (mW === WW._lightsUBO) return;
      const EW = iW._device.createBindGroup({
        layout: bW(iW),
        entries: [{
          binding: 0,
          resource: {
            buffer: WW._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: mW
          }
        }]
      });
      WW._lightsUBO = mW, WW._sceneBG = EW, OW && (WW._ob = [])
    }

    function dW(WW, iW) {
      for (const OW of WW) OW.update?.(iW)
    }

    function eW(WW, iW, OW) {
      let mW = null,
        EW = 0;
      for (const NW of iW) {
        const iW = NW.renderable.mesh;
        iW && !1 === iW.visible || (NW.pipeline !== mW && (WW.setPipeline(NW.pipeline), mW = NW.pipeline), EW += NW.draw(WW, OW))
      }
      return EW
    }

    function vW(WW) {
      const iW = WW._materialSwapQueue;
      if (!iW[0] || WW._runtimeBuilds?.w) return;
      let mW, EW, NW;
      const PW = WW._renderables;
      for (const OW of iW) {
        const iW = OW.material;
        if (!iW) continue;
        const LW = OW._runtimeThinBuild;
        if (LW) {
          EW = LW(WW, OW, EW);
          continue
        }
        const cW = WW._groups.get(iW._buildGroup),
          wW = cW?.r;
        if (!wW) {
          (NW ??= []).push(OW);
          continue
        }
        if (cW._w?.(OW)) {
          (NW ??= []).push([OW, iW]);
          continue
        }
        const tW = WW._meshDisposables.get(OW);
        tW && (WW._meshDisposables.delete(OW), (0, lW.g)(WW.surface.engine, (() => tW.forEach((WW => WW())))));
        const ZW = cW.o;
        let xW;
        for (let WW = PW.length; WW--;) PW[WW].mesh === OW && (xW = PW.splice(WW, 1)[0]);
        iW._csmGen = -~iW._csmGen;
        const AW = wW(WW, OW);
        if (ZW) {
          const WW = ZW.indexOf(xW);
          WW < 0 ? ZW.push(AW) : ZW[WW] = AW
        }
        mW = PW.push(AW)
      }
      if (mW && (PW.sort(((WW, iW) => WW.order - iW.order)), WW._renderableVersion++, WW._materialEpoch++), iW.length = 0, !NW) return EW;
      const LW = NW;
      return OW.e(680).then((() => OW(64503))).then((iW => {
        let {
          C: OW
        } = iW;
        return OW(WW, LW, EW)
      }), (iW => {
        const OW = WW._runtimeBuilds;
        OW ? OW._x(iW) : console.error(iW)
      }))
    }
    var gW = null;

    function DW(WW, iW) {
      const OW = WW.engine,
        EW = {
          _kind: "rb",
          surface: WW,
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
            OW.useFloatingOrigin && EW.camera && !EW.camera._useFloatingOrigin && (EW.camera._useFloatingOrigin = !0, EW.camera._viewVer = -1, EW.camera._vpVer = -1);
            const WW = EW.fixedDeltaMs > 0 ? EW.fixedDeltaMs : OW._currentDelta,
              iW = OW._currentEncoder;
            let mW = 0;
            for (const OW of EW._beforeRender) OW(WW);
            EW._materialSwapQueue.length && vW(EW);
            for (const NW of EW._prePasses) mW += NW.execute(iW, OW);
            for (const NW of EW._uniformUpdaters) NW.update(OW);
            EW._drawCallsPre = mW
          },
          _record: () => EW._frameGraph.execute(),
          _resize() {
            EW._frameGraph.build()
          }
        },
        PW = function() {
          const WW = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let iW = 0; iW < WW._tasks.length; iW++) NW(WW, WW._tasks[iW]);
              for (const iW of WW._tasks)
                for (const WW of iW._passes) WW._initialize()
            },
            execute() {
              let iW = 0;
              for (const OW of WW._tasks)
                if (!1 !== OW.executionEnabled)
                  if (OW.execute) iW += OW.execute();
                  else
                    for (const WW of OW._passes) iW += WW._execute();
              return iW
            },
            dispose() {
              for (const iW of WW._tasks) iW.dispose();
              WW._tasks.length = 0, WW._currentProcessedTask = null
            }
          };
          return WW
        }();
      if (EW._frameGraph = PW, !1 !== iW?.defaultRenderTask) {
        const iW = WW.msaaSamples > 1,
          NW = iW ? (0, mW.c)({
            lbl: "scene-color",
            format: WW.format,
            dFormat: "depth24plus-stencil8",
            samples: WW.msaaSamples,
            size: WW
          }) : WW.scRT,
          LW = iW ? void 0 : (0, mW.c)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: WW
          });
        ! function(WW, iW) {
          WW._tasks.push(iW)
        }(PW, JW({
          name: "rb",
          rt: NW,
          rst: iW ? WW.scRT : void 0,
          depth: LW
        }, OW, EW))
      }
      return EW._disposables.push((() => PW.dispose())), EW
    }
    async function VW(WW) {
      const iW = WW;
      for (iW._built || (iW._materialSwapQueue.length = 0); iW._deferredBuilders.length;) {
        const WW = iW._deferredBuilders.splice(0);
        await Promise.all(WW.map((WW => WW())))
      }
      await vW(iW), gW?.get(iW)?.() || (iW._runtimeBuilds?._e(), iW._renderableVersion++, iW._built = !0), await (iW._rebuildHook?.(iW))
    }
    var pW = null;
    async function fW(WW) {
      const iW = WW,
        mW = iW.surface;
      (0, EW.i)(mW, iW) || (await VW(WW), iW._renderables.sort(CW), await Promise.all(iW._frameGraph._tasks.map((WW => WW._preload?.()))), pW && await pW(iW), iW._frameGraph.build(), mW._renderingContexts[0] && (await OW.e(678).then((() => OW(64490)))).configureSwapchainOverlayScene(mW, iW), gW?.get(iW)?.() || (0, EW.l)(mW, iW))
    }
    var CW = (WW, iW) => WW.order - iW.order
  },
  53862: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => wW,
      f: () => tW
    });
    var mW = OW(53822),
      EW = OW(53828),
      NW = OW(53833),
      PW = OW(53836),
      LW = OW(53845),
      cW = OW(53853);

    function wW(WW, iW, OW) {
      let LW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (iW < 1 || OW < 1) && (0, mW.c)(676, iW, OW);
      const wW = WW._device,
        tW = LW.mipMaps ?? !1,
        ZW = LW.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        xW = tW ? (0, cW.d)(iW, OW) : 1,
        lW = wW.createTexture({
          size: {
            width: iW,
            height: OW
          },
          format: ZW,
          mipLevelCount: xW,
          usage: EW.h.TEXTURE_BINDING | EW.h.COPY_DST | EW.h.RENDER_ATTACHMENT
        }),
        AW = {
          addressModeU: LW.addressModeU ?? "clamp-to-edge",
          addressModeV: LW.addressModeV ?? "clamp-to-edge",
          minFilter: LW.minFilter ?? "linear",
          magFilter: LW.magFilter ?? "linear",
          mipmapFilter: tW ? "linear" : "nearest"
        },
        bW = (0, PW.b)(WW, AW),
        jW = {
          texture: lW,
          view: lW.createView(),
          sampler: bW,
          width: iW,
          height: OW
        };
      return (0, NW.e)(jW), WW._dlr && WW._dlr.t(jW, {
        kind: "dynamic",
        width: iW,
        height: OW,
        format: ZW,
        levels: xW,
        samplerDesc: AW,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), jW
    }

    function tW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const EW = mW.invertY ?? !0,
        NW = mW.premultiplyAlpha ?? !1;
      WW._device.queue.copyExternalImageToTexture({
        source: OW,
        flipY: EW
      }, {
        texture: iW.texture,
        premultipliedAlpha: NW
      }, [iW.width, iW.height]);
      const PW = iW._recoverySource;
      PW && "dynamic" === PW.kind && (PW.source = OW, PW.flipY = EW, PW.premultipliedAlpha = NW), iW.texture.mipLevelCount > 1 && (0, LW.generateMipmaps)(WW, iW.texture)
    }
  },
  53859: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => cW
    });
    var mW = OW(53822),
      EW = OW(53828),
      NW = OW(53833),
      PW = OW(53836),
      LW = OW(53853);
    async function cW(WW, iW) {
      let cW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [wW, tW] = function(WW) {
        const iW = WW,
          OW = [
            [iW.displayWidth, iW.displayHeight],
            [iW.videoWidth, iW.videoHeight],
            [iW.naturalWidth, iW.naturalHeight],
            [iW.width, iW.height]
          ];
        for (const [mW, EW] of OW)
          if (void 0 !== mW && void 0 !== EW && Number.isInteger(mW) && Number.isInteger(EW) && mW > 0 && EW > 0) return [mW, EW];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(iW), [ZW, xW] = function(WW, iW, OW) {
        if (void 0 === OW) return [WW, iW];
        if (!Number.isInteger(OW) || OW < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${OW})`);
        if (Math.max(WW, iW) <= OW) return [WW, iW];
        const mW = OW / Math.max(WW, iW);
        return WW >= iW ? [OW, Math.max(1, Math.round(iW * mW))] : [Math.max(1, Math.round(WW * mW)), OW]
      }(wW, tW, cW.maxDimension), lW = cW.mipMaps ?? !0, AW = cW.premultiplyAlpha ?? !1;
      let bW = iW,
        jW = null;
      const UW = {
        texture: null
      };
      try {
        ZW === wW && xW === tW || (jW = await createImageBitmap(iW, {
          resizeWidth: ZW,
          resizeHeight: xW,
          resizeQuality: "high",
          premultiplyAlpha: AW ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), bW = jW);
        const kW = WW._device,
          sW = cW.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          MW = lW ? (0, LW.d)(ZW, xW) : 1,
          KW = MW > 1 ? (await Promise.resolve().then((() => OW(53845)))).generateMipmaps : null,
          SW = {
            addressModeU: cW.addressModeU ?? "repeat",
            addressModeV: cW.addressModeV ?? "repeat",
            minFilter: cW.minFilter ?? "linear",
            magFilter: cW.magFilter ?? "linear",
            mipmapFilter: lW ? "linear" : "nearest"
          };
        SW.maxAnisotropy = "linear" === SW.minFilter && "linear" === SW.magFilter && "linear" === SW.mipmapFilter ? 4 : 1;
        const YW = cW.invertY ?? !0,
          yW = async iW => {
            let OW;
            kW.pushErrorScope("validation"), kW.pushErrorScope("out-of-memory");
            let NW = null;
            try {
              const OW = UW.texture = kW.createTexture({
                size: {
                  width: ZW,
                  height: xW
                },
                format: sW,
                mipLevelCount: MW,
                usage: EW.h.TEXTURE_BINDING | EW.h.COPY_DST | EW.h.RENDER_ATTACHMENT
              });
              kW.queue.copyExternalImageToTexture({
                source: iW,
                flipY: YW
              }, {
                texture: OW,
                premultipliedAlpha: AW
              }, {
                width: ZW,
                height: xW
              }), KW && KW(WW, OW), NW = (0, PW.b)(WW, SW)
            } catch (lW) {
              OW = lW
            }
            const [LW, cW] = await Promise.all([kW.popErrorScope(), kW.popErrorScope()]);
            if (OW) throw OW;
            const wW = cW ?? LW;
            if (wW) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${wW.message}`, {
              cause: wW
            });
            const tW = UW.texture;
            return tW && NW || (0, mW.c)(677), {
              texture: tW,
              view: tW.createView(),
              sampler: NW,
              width: ZW,
              height: xW
            }
          }, TW = await (WW._dlr?.x(bW, ZW, xW, sW, MW, SW, YW, AW, yW)) ?? await yW(bW);
        return (0, NW.e)(TW), TW
      } catch (kW) {
        throw UW.texture?.destroy(), kW
      } finally {
        jW?.close()
      }
    }
  },
  53845: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      generateMipmaps: () => lW,
      recordMipmaps: () => AW
    });
    var mW = OW(53828),
      EW = OW(53836),
      NW = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var PW = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      LW = null,
      cW = null,
      wW = null,
      tW = null,
      ZW = null;

    function xW(WW) {
      const iW = WW._device;
      iW !== ZW && (LW?.clear(), LW = null, cW = null, wW = null, tW = null, ZW = null, ZW = iW), cW ??= iW.createShaderModule({
        code: PW
      }), wW ??= function(WW) {
        return (0, EW.b)(WW, NW)
      }(WW), tW ??= iW.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: mW.e.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: mW.e.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function lW(WW, iW, OW) {
      const mW = WW._device,
        EW = mW.createCommandEncoder();
      AW(WW, iW, EW, OW), mW.queue.submit([EW.finish()])
    }

    function AW(WW, iW, OW, mW) {
      if (iW.mipLevelCount <= 1) return;
      const EW = WW._device,
        NW = function(WW, iW) {
          const OW = WW._device;
          xW(WW), LW ??= new Map;
          let mW = LW.get(iW);
          return mW || (mW = OW.createRenderPipeline({
            layout: OW.createPipelineLayout({
              bindGroupLayouts: [tW]
            }),
            vertex: {
              module: cW,
              entryPoint: "vs"
            },
            fragment: {
              module: cW,
              entryPoint: "fs",
              targets: [{
                format: iW
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), LW.set(iW, mW)), mW
        }(WW, iW.format),
        PW = null != mW ? {
          dimension: "2d",
          baseArrayLayer: mW,
          arrayLayerCount: 1
        } : {};
      for (let LW = 1; LW < iW.mipLevelCount; LW++) {
        const WW = iW.createView({
            baseMipLevel: LW - 1,
            mipLevelCount: 1,
            ...PW
          }),
          mW = iW.createView({
            baseMipLevel: LW,
            mipLevelCount: 1,
            ...PW
          }),
          cW = EW.createBindGroup({
            layout: tW,
            entries: [{
              binding: 0,
              resource: WW
            }, {
              binding: 1,
              resource: wW
            }]
          }),
          ZW = OW.beginRenderPass({
            colorAttachments: [{
              view: mW,
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
        ZW.setPipeline(NW), ZW.setBindGroup(0, cW), ZW.draw(3), ZW.end()
      }
    }
  },
  53853: (WW, iW, OW) => {
    function mW(WW, iW) {
      return Math.floor(Math.log2(Math.max(WW, iW))) + 1
    }
    OW.d(iW, {
      d: () => mW
    })
  },
  53819: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW,
      d: () => tW
    });
    var mW = OW(53822),
      EW = OW(53828),
      NW = OW(53833),
      PW = OW(53836),
      LW = OW(53845),
      cW = OW(53853);

    function wW(WW, iW, OW, LW) {
      let wW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (iW < 1 || OW < 1 || LW < 1) && (0, mW.c)(722, iW, OW, LW);
      const tW = WW._device,
        ZW = wW.mipMaps ?? !0,
        xW = wW.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        lW = tW.createTexture({
          size: {
            width: iW,
            height: OW,
            depthOrArrayLayers: LW
          },
          dimension: "2d",
          format: xW,
          mipLevelCount: ZW ? (0, cW.d)(iW, OW) : 1,
          usage: EW.h.TEXTURE_BINDING | EW.h.COPY_DST | EW.h.RENDER_ATTACHMENT
        }),
        AW = (0, PW.b)(WW, {
          addressModeU: wW.addressModeU ?? "repeat",
          addressModeV: wW.addressModeV ?? "repeat",
          minFilter: wW.minFilter ?? "linear",
          magFilter: wW.magFilter ?? "linear",
          mipmapFilter: ZW ? "linear" : "nearest"
        }),
        bW = {
          texture: lW,
          view: lW.createView({
            dimension: "2d-array"
          }),
          sampler: AW,
          width: iW,
          height: OW,
          layers: LW
        };
      return (0, NW.e)(bW), bW
    }

    function tW(WW, iW, OW, EW) {
      let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (OW < 0 || OW >= iW.layers || (0 | OW) !== OW) && (0, mW.c)(723, iW.layers, OW);
      const PW = NW.invertY ?? !0,
        cW = NW.premultiplyAlpha ?? !1;
      WW._device.queue.copyExternalImageToTexture({
        source: EW,
        flipY: PW
      }, {
        texture: iW.texture,
        origin: [0, 0, OW],
        premultipliedAlpha: cW
      }, [iW.width, iW.height, 1]), iW.texture.mipLevelCount > 1 && (0, LW.generateMipmaps)(WW, iW.texture, OW)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);