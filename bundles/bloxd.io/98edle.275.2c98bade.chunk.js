export const id = 275;
export const ids = [275];
export const modules = {
  39174: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => tR,
      g: () => JW,
      h: () => TW,
      i: () => gR,
      m: () => IW,
      p: () => PW
    });
    var wW = MW(39128);
    var CW = "Babylon Lite v1.32.0",
      zR = MW(39179);

    function AW(WW) {
      return "clientWidth" in WW
    }
    var bR = 1;

    function yR(WW, RW, MW) {
      const yR = RW.getContext("webgpu");
      yR || (0, wW.b)(54), AW(RW) && RW.setAttribute("data-engine", CW);
      const NW = MW?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        eW = MW?.srgb ? (BW = NW).endsWith("-srgb") ? BW : `${BW}-srgb` : NW;
      var BW;
      const tR = MW?.alphaMode ?? "opaque";
      yR.configure({
        device: WW._device,
        format: NW,
        alphaMode: tR,
        viewFormats: [eW]
      });
      const TW = 1 === MW?.msaaSamples ? 1 : 4,
        gR = (0, zR.c)({
          lbl: "swapchain",
          format: eW,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return gR._eager = !0, {
        engine: WW,
        canvas: RW,
        format: eW,
        msaaSamples: TW,
        scRT: gR,
        maxDevicePixelRatio: MW?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: bR++,
        _context: yR,
        _configureFormat: NW,
        _alphaMode: tR,
        _renderingContexts: []
      }
    }

    function NW(WW) {
      const RW = WW._context.getCurrentTexture(),
        MW = WW.scRT;
      MW._colorTexture = RW, MW._colorView = RW.createView({
        format: WW.format
      }), MW._width = RW.width, MW._height = RW.height
    }

    function eW(WW) {
      const RW = WW.canvas;
      if (!AW(RW)) return;
      const MW = WW._w ?? RW.clientWidth,
        wW = WW._h ?? RW.clientHeight;
      if (!(MW > 0 && wW > 0)) return;
      const CW = Math.min(globalThis.devicePixelRatio || 1, WW.maxDevicePixelRatio);
      BW(WW, MW * CW | 0, wW * CW | 0)
    }

    function BW(WW, RW, MW) {
      const wW = WW.canvas,
        CW = 0 | RW,
        zR = 0 | MW;
      if (CW > 0 && zR > 0 && (CW !== wW.width || zR !== wW.height)) {
        wW.width = CW, wW.height = zR, WW.scRT._width = CW, WW.scRT._height = zR;
        for (const RW of WW._renderingContexts) RW._resize?.()
      }
    }
    var tR = 0;

    function TW(WW, RW) {
      return -1 !== WW._renderingContexts.indexOf(RW)
    }

    function gR(WW, RW) {
      return -1 === WW._renderingContexts.indexOf(RW) && (WW._renderingContexts.push(RW), !0)
    }
    var iR = null;
    var YW = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function JW(WW, RW) {
      const zR = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...iR ? iR() : {}
      });
      zR || (0, wW.b)(47);
      const AW = iR?.deviceFeatures?.(zR, RW) ?? function(WW) {
          return YW.filter((RW => WW.features.has(RW)))
        }(zR),
        bR = await zR.requestDevice({
          requiredFeatures: AW,
          requiredLimits: RW?.requiredLimits
        });
      console.log(`${CW} - WebGPU engine`);
      const BW = !!RW?.useHighPrecisionMatrix,
        tR = !!RW?.useFloatingOrigin;
      if (tR && !BW && (0, wW.b)(48), BW) {
        const {
          allocateF64Mat4: WW
        } = await MW.e(329).then((() => MW(58668)));
        0
      }
      let TW, gR, JW, PW;
      if (tR) {
        const [{
          wrapRenderableForFO: WW,
          lightFoVersion: RW,
          applyLightFoOffset: wW
        }, {
          makePackMeshWorld: CW
        }] = await Promise.all([MW.e(330).then((() => MW(58676))), MW.e(331).then((() => MW(58681)))]);
        TW = WW, gR = CW, JW = RW, PW = wW
      }
      const IW = {
          _device: bR
        },
        oW = [IW];
      return Object.assign(IW, {
        engine: IW,
        surfaces: oW,
        _surfaces: oW,
        _device: bR,
        _options: RW,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: BW,
        useFloatingOrigin: tR,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: TW,
        _makePackMeshWorld: gR,
        _lightFoVersion: JW,
        _applyLightFoOffset: PW
      }, yR(IW, WW, RW)), eW(IW), NW(IW), IW
    }

    function PW(WW, RW, MW) {
      BW(WW, RW, MW)
    }

    function IW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WW.surfaces;
      if (MW !== WW.surfaces)
        for (let CW = MW.length; CW--;) MW[CW].engine !== WW && (0, wW.b)(49);
      oW(WW, RW, MW)
    }

    function oW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WW._surfaces,
        wW = 0;
      for (let zR = MW.length; zR--;) wW += MW[zR]._renderingContexts.length;
      if (!wW) return WW.drawCallCount = 0, WW._flushGpuRetirements?.(WW);
      const CW = WW._device.createCommandEncoder({
        label: "frame"
      });
      WW._currentEncoder = CW, WW._currentDelta = RW;
      try {
        WW._gpuTimerBegin?.(CW), wW = 0;
        for (let WW = 0; WW < MW.length; WW++) {
          const RW = MW[WW];
          RW._capturePreFrame?.(RW), NW(RW);
          const CW = RW._renderingContexts;
          for (let WW = 0; WW < CW.length; WW++) {
            const RW = CW[WW];
            RW._update(), wW += RW._drawCallsPre + RW._record()
          }
        }
        const RW = WW._currentEncoder;
        for (let WW = 0; WW < MW.length; WW++) {
          const wW = MW[WW];
          wW._captureService?.(wW, RW)
        }
        WW._gpuTimerEnd?.(RW), WW._cbs[0] = RW.finish(), WW._device.queue.submit(WW._cbs), WW._flushGpuRetirements?.(WW), WW.drawCallCount = wW, WW._gpuTimerResolve?.()
      } finally {
        WW._currentEncoder = void 0
      }
    }
  },
  39133: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW,
      g: () => zR,
      h: () => wW
    });
    var wW = globalThis.GPUTextureUsage,
      CW = globalThis.GPUBufferUsage,
      zR = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  39196: (WW, RW, MW) => {
    function wW(WW) {
      CW(WW.splice(0))
    }

    function CW(WW) {
      for (const MW of WW) try {
        MW()
      } catch (RW) {
        console.error("GPU resource retirement failed.", RW)
      }
    }

    function zR(WW, RW) {
      WW._flushGpuRetirements ??= AW, (WW._retirements ??= []).push(RW)
    }

    function AW(WW) {
      const RW = WW._retirements;
      if (!RW) return;
      WW._retirements = null;
      const MW = WW._retiring ??= new Set;
      MW.add(RW), queueMicrotask((() => {
        WW._device.queue.onSubmittedWorkDone().then((() => {
          MW.delete(RW), wW(RW)
        })).catch((() => {}))
      }))
    }
    MW.d(RW, {
      b: () => zR
    })
  },
  39179: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR,
      e: () => AW,
      g: () => bR
    });
    var wW = MW(39133);

    function CW(WW) {
      const RW = WW.size;
      return "canvas" in RW ? RW.canvas : RW
    }

    function zR(WW) {
      return {
        _descriptor: WW,
        _resolveSize: CW,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function AW(WW, RW) {
      if (WW._eager) return void WW._syncEager?.(RW);
      bR(WW);
      const MW = WW._descriptor,
        {
          width: zR,
          height: AW
        } = (WW._resolveSize ?? CW)(MW);
      WW._width = zR, WW._height = AW;
      const yR = RW._device;
      MW.format && (WW._colorTexture = yR.createTexture({
        label: MW.lbl,
        size: {
          width: zR,
          height: AW
        },
        format: MW.format,
        sampleCount: MW.samples,
        usage: wW.h.RENDER_ATTACHMENT | wW.h.TEXTURE_BINDING | wW.h.COPY_SRC | wW.h.COPY_DST
      }), WW._colorView = WW._colorTexture.createView()), MW.dFormat && (WW._depthTexture = yR.createTexture({
        label: MW.lbl,
        size: {
          width: zR,
          height: AW
        },
        format: MW.dFormat,
        sampleCount: MW.samples,
        usage: wW.h.RENDER_ATTACHMENT | wW.h.TEXTURE_BINDING
      }), WW._depthView = WW._depthTexture.createView())
    }

    function bR(WW) {
      if (!WW || WW._eager && !WW._disposeAttachments) return;
      const RW = WW._colorTexture,
        MW = WW._depthTexture;
      if (WW._colorTexture = WW._depthTexture = null, WW._colorView = WW._depthView = null, WW._width = WW._height = 0, WW._disposeAttachments) WW._disposeAttachments(RW, MW);
      else try {
        RW?.destroy()
      } finally {
        !1 !== WW._ownsDepthTexture && MW?.destroy()
      }
    }
  },
  39189: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW,
      g: () => CW,
      j: () => zR
    });
    var wW = Float32Array,
      CW = Float64Array,
      zR = Uint32Array
  },
  39201: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW
    });
    var wW = 16
  },
  39128: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW
    });
    var wW = null;

    function CW(WW) {
      for (var RW = arguments.length, MW = new Array(RW > 1 ? RW - 1 : 0), CW = 1; CW < RW; CW++) MW[CW - 1] = arguments[CW];
      const zR = new Error(wW?.(WW, MW) ?? `#${WW}`);
      throw zR.lite = MW, zR
    }
  },
  39162: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW
    });
    var wW = MW(39146);

    function CW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const MW = RW.compare,
        CW = RW.lodMinClamp ?? 0,
        zR = RW.lodMaxClamp ?? 32,
        AW = void 0 !== MW || 0 !== CW || 32 !== zR ? `${MW??""}:${CW}:${zR}` : "";
      return (0, wW.e)(WW, RW, AW)
    }
  },
  39138: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR
    });
    var wW = null;

    function CW(WW) {
      const RW = wW ??= new WeakMap;
      RW.set(WW, (RW.get(WW) ?? 0) + 1)
    }

    function zR(WW) {
      CW(WW.texture)
    }
  },
  39146: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => bR
    });
    var wW = null,
      CW = "nearest",
      zR = "clamp-to-edge",
      AW = {
        minFilter: CW,
        magFilter: CW,
        mipmapFilter: CW,
        addressModeU: zR,
        addressModeV: zR,
        addressModeW: zR,
        maxAnisotropy: 1
      };

    function bR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const CW = WW._device,
        zR = wW ??= new WeakMap;
      let bR = zR.get(CW);
      bR || zR.set(CW, bR = new Map);
      let yR = MW;
      for (const wW in AW) {
        const WW = wW;
        yR += `:${RW[WW]??AW[WW]}`
      }
      let NW = bR.get(yR);
      return NW || bR.set(yR, NW = CW.createSampler(RW)), NW
    }
  },
  39184: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => EW,
      h: () => xR
    });
    var wW = MW(39179),
      CW = MW(39174);

    function zR(WW, RW) {
      RW._passes.length = 0, WW._currentProcessedTask = RW;
      try {
        RW.record()
      } finally {
        WW._currentProcessedTask = null
      }
    }
    var AW = MW(39189);

    function bR(WW) {
      const RW = WW.worldMatrixVersion;
      if (WW._viewVer === RW) return WW._viewCache;
      const MW = WW._viewCache,
        wW = WW.worldMatrix,
        CW = WW._useFloatingOrigin,
        zR = CW ? 0 : wW[12],
        AW = CW ? 0 : wW[13],
        bR = CW ? 0 : wW[14];
      return MW[0] = wW[0], MW[1] = wW[4], MW[2] = wW[8], MW[3] = 0, MW[4] = wW[1], MW[5] = wW[5], MW[6] = wW[9], MW[7] = 0, MW[8] = wW[2], MW[9] = wW[6], MW[10] = wW[10], MW[11] = 0, MW[12] = -(wW[0] * zR + wW[1] * AW + wW[2] * bR), MW[13] = -(wW[4] * zR + wW[5] * AW + wW[6] * bR), MW[14] = -(wW[8] * zR + wW[9] * AW + wW[10] * bR), MW[15] = 1, WW._viewVer = RW, MW
    }
    var yR = null;

    function NW(WW) {
      return WW._projFov === WW.fov && WW._projNear === WW.nearPlane && WW._projFar === WW.farPlane || (WW._projFov = WW.fov, WW._projNear = WW.nearPlane, WW._projFar = WW.farPlane, WW._projRev = (WW._projRev ?? 0) + 1), WW.worldMatrixVersion + (WW._projRev ?? 0)
    }

    function eW(WW, RW) {
      const MW = NW(WW);
      if (WW._projVer === MW && WW._projAspect === RW) return WW._projCache;
      const wW = WW._projCache;
      return null !== yR && WW.ortho ? yR(WW, RW, wW) : function(WW, RW, MW, wW, CW) {
        const zR = 1 / Math.tan(.5 * RW),
          AW = CW - wW;
        WW[0] = zR / MW, WW[5] = zR, WW[10] = -wW / AW, WW[11] = 1, WW[14] = CW * wW / AW
      }(wW, WW.fov, RW, WW.nearPlane, WW.farPlane), WW._projVer = MW, WW._projAspect = RW, wW
    }
    var BW = MW(39133);

    function tR(WW, RW, MW) {
      return WW._device.createBuffer({
        label: MW,
        size: (wW = RW, CW = 16, Math.ceil(wW / CW) * CW),
        usage: BW.d.UNIFORM | BW.d.COPY_DST
      });
      var wW, CW
    }
    var TW = MW(39196),
      gR = null;

    function iR(WW) {
      const RW = WW._device,
        MW = gR ??= new WeakMap;
      let wW = MW.get(RW);
      return wW || (wW = RW.createBindGroupLayout({
        label: "LC",
        entries: [{
          binding: 0,
          visibility: BW.g.VERTEX | BW.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: BW.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), MW.set(RW, wW)), wW
    }

    function YW(WW, RW, MW) {
      const wW = WW._device,
        CW = tR(WW, RW.byteLength, MW);
      try {
        wW.queue.writeBuffer(CW, 0, RW.buffer, RW.byteOffset, RW.byteLength)
      } catch (zR) {
        throw CW.destroy(), zR
      }
      return CW
    }
    var JW = MW(39201),
      PW = new AW.j(1),
      IW = new AW.d(PW.buffer);

    function oW(WW) {
      let RW = 0;
      for (const MW of WW) RW += MW._lightVersion ?? 0;
      return RW
    }

    function lW(WW, RW) {
      WW.fill(0);
      let MW = 0;
      for (const wW of RW) {
        if (MW >= JW.e) break;
        wW._writeLightUbo && (wW._writeLightUbo(WW, 4 + 16 * MW), MW++)
      }
      PW[0] = MW, WW[0] = IW[0]
    }

    function FW(WW, RW) {
      let MW = RW._lightGpuState;
      const wW = 16 + 16 * JW.e * 4;
      if (MW && MW._byteSize === wW) return MW;
      const CW = !MW;
      MW?._buffer.destroy();
      const zR = new AW.d(wW / 4);
      return lW(zR, RW.lights), WW._applyLightFoOffset?.(zR, RW), MW = {
        _buffer: YW(WW, zR),
        _scratch: zR,
        kwW: oW(RW.lights) + (WW._lightFoVersion?.(RW) ?? 0),
        _listVersion: RW._lightListVersion ?? 0,
        _lightCount: RW.lights.length,
        _byteSize: wW
      }, RW._lightGpuState = MW, CW && RW._disposables.push((() => {
        RW._lightGpuState?._buffer.destroy(), RW._lightGpuState = void 0
      })), MW
    }

    function fW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const CW = RW;
      if (0 === wW && 16 === CW.length) return void WW.set(CW, MW);
      const zR = wW,
        AW = MW;
      WW[AW + 0] = CW[zR + 0], WW[AW + 1] = CW[zR + 1], WW[AW + 2] = CW[zR + 2], WW[AW + 3] = CW[zR + 3], WW[AW + 4] = CW[zR + 4], WW[AW + 5] = CW[zR + 5], WW[AW + 6] = CW[zR + 6], WW[AW + 7] = CW[zR + 7], WW[AW + 8] = CW[zR + 8], WW[AW + 9] = CW[zR + 9], WW[AW + 10] = CW[zR + 10], WW[AW + 11] = CW[zR + 11], WW[AW + 12] = CW[zR + 12], WW[AW + 13] = CW[zR + 13], WW[AW + 14] = CW[zR + 14], WW[AW + 15] = CW[zR + 15]
    }

    function QW(WW, RW, MW, wW, CW) {
      WW.fill(0);
      const zR = function(WW, RW) {
          const MW = NW(WW);
          if (WW._vpVer === MW && WW._vpAspect === RW) return WW._vpCache;
          const wW = WW._vpCache;
          return function(WW, RW, MW, wW, CW, zR) {
            const AW = MW[wW],
              bR = MW[wW + 1],
              yR = MW[wW + 2],
              NW = MW[wW + 3],
              eW = MW[wW + 4],
              BW = MW[wW + 5],
              tR = MW[wW + 6],
              TW = MW[wW + 7],
              gR = MW[wW + 8],
              iR = MW[wW + 9],
              YW = MW[wW + 10],
              JW = MW[wW + 11],
              PW = MW[wW + 12],
              IW = MW[wW + 13],
              oW = MW[wW + 14],
              lW = MW[wW + 15];
            let FW = CW[zR],
              fW = CW[zR + 1],
              QW = CW[zR + 2],
              rR = CW[zR + 3];
            WW[RW] = AW * FW + eW * fW + gR * QW + PW * rR, WW[RW + 1] = bR * FW + BW * fW + iR * QW + IW * rR, WW[RW + 2] = yR * FW + tR * fW + YW * QW + oW * rR, WW[RW + 3] = NW * FW + TW * fW + JW * QW + lW * rR, FW = CW[zR + 4], fW = CW[zR + 5], QW = CW[zR + 6], rR = CW[zR + 7], WW[RW + 4] = AW * FW + eW * fW + gR * QW + PW * rR, WW[RW + 5] = bR * FW + BW * fW + iR * QW + IW * rR, WW[RW + 6] = yR * FW + tR * fW + YW * QW + oW * rR, WW[RW + 7] = NW * FW + TW * fW + JW * QW + lW * rR, FW = CW[zR + 8], fW = CW[zR + 9], QW = CW[zR + 10], rR = CW[zR + 11], WW[RW + 8] = AW * FW + eW * fW + gR * QW + PW * rR, WW[RW + 9] = bR * FW + BW * fW + iR * QW + IW * rR, WW[RW + 10] = yR * FW + tR * fW + YW * QW + oW * rR, WW[RW + 11] = NW * FW + TW * fW + JW * QW + lW * rR, FW = CW[zR + 12], fW = CW[zR + 13], QW = CW[zR + 14], rR = CW[zR + 15], WW[RW + 12] = AW * FW + eW * fW + gR * QW + PW * rR, WW[RW + 13] = bR * FW + BW * fW + iR * QW + IW * rR, WW[RW + 14] = yR * FW + tR * fW + YW * QW + oW * rR, WW[RW + 15] = NW * FW + TW * fW + JW * QW + lW * rR
          }(wW, 0, eW(WW, RW), 0, bR(WW), 0), WW._vpVer = MW, WW._vpAspect = RW, wW
        }(wW, CW),
        AW = bR(wW),
        yR = wW.worldMatrix;
      fW(WW, zR, 0), fW(WW, AW, 16), RW.useFloatingOrigin ? (WW[32] = 0, WW[33] = 0, WW[34] = 0) : (WW[32] = yR[12], WW[33] = yR[13], WW[34] = yR[14]), WW[87] = RW.canvas.width;
      const BW = MW.imageProcessing;
      WW[76] = BW.exposure, WW[77] = BW.contrast, WW[78] = MW._envTextures?.lodGenerationScale ?? .8, WW[79] = +BW.toneMappingEnabled, WW[37] = RW.canvas.height
    }

    function rR(WW, RW) {
      return {
        _renderables: WW,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: RW
      }
    }

    function cR(WW, RW, MW) {
      WW.clr ??= !0;
      const CW = WW.rt._descriptor,
        zR = WW.depth?._descriptor,
        yR = {
          _colorFormat: CW.format,
          _depthStencilFormat: zR?.dFormat ?? CW.dFormat,
          _depthCompare: CW.depthCompare ?? zR?.depthCompare,
          _sampleCount: CW.samples
        },
        eW = {
          loadOp: "clear",
          storeOp: "store"
        },
        BW = {
          ...rR([], -1),
          name: WW.name,
          _config: WW,
          _ownsTargets: !WW.sharedRt,
          engine: RW,
          LC: MW,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [eW]
          },
          _colorAttachment: eW,
          _sceneUBO: tR(RW, 368),
          _suData: new AW.d(92),
          _sceneUboCacheKey: [],
          _targetSignature: yR,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (BW._disposed) throw new Error("RenderTask has been disposed.");
            BW._recordExplicit ? BW._recordExplicit(BW, !0) : kR(BW, !1 !== WW.autoMirror ? MW._renderables.slice() : BW._renderables, !0)
          },
          execute: () => function(WW, RW, MW) {
            if (!1 === WW.enabled) return 0;
            const wW = WW.LC;
            ! function(WW, RW, MW) {
              const wW = WW.LC;
              !1 !== WW._config.autoMirror && WW._lastVersion !== wW._renderableVersion && kR(WW, wW._renderables.slice());
              sW(WW, RW);
              const CW = WW._updateContext,
                zR = WW._config.cam ?? wW.camera;
              MW._colorFormat && (WW._config._skipClusteredLights || wW._clusteredLightUpdater?.(zR, CW.targetWidth, CW.targetHeight), function(WW, RW) {
                const MW = FW(WW, RW),
                  wW = oW(RW.lights) + (WW._lightFoVersion?.(RW) ?? 0),
                  CW = RW._lightListVersion ?? 0;
                wW === MW.kwW && CW === MW._listVersion && RW.lights.length === MW._lightCount || (MW.kwW = wW, MW._listVersion = CW, MW._lightCount = RW.lights.length, lW(MW._scratch, RW.lights), WW._applyLightFoOffset?.(MW._scratch, RW), WW._device.queue.writeBuffer(MW._buffer, 0, MW._scratch)), MW._buffer
              }(RW, wW));
              (function(WW, RW, MW, wW) {
                if (!wW) return;
                const CW = wW.viewport,
                  zR = WW._config.rt,
                  AW = (WW._config.cs ? RW.canvas.width / RW.canvas.height : zR._width / zR._height) * (CW ? CW.width / CW.height : 1),
                  bR = MW.fog,
                  yR = MW.imageProcessing,
                  eW = NW(wW),
                  BW = MW._envTextures,
                  tR = WW._sceneUboCacheKey;
                if (tR[0] === wW && tR[1] === bR && tR[2] === eW && tR[3] === AW && tR[4] === yR.exposure && tR[5] === yR.contrast && tR[6] === BW) return;
                tR[0] = wW, tR[1] = bR, tR[2] = eW, tR[3] = AW, tR[4] = yR.exposure, tR[5] = yR.contrast, tR[6] = BW;
                const TW = WW._suData;
                QW(TW, RW, MW, wW, AW);
                const gR = MW._sceneUboContributors;
                if (gR)
                  for (const NW of gR) NW(TW, MW);
                RW._device.queue.writeBuffer(WW._sceneUBO, 0, TW)
              })(WW, RW, wW, zR), CW.yzW = zR, WW._batchState?._reset(), dW(WW._opaqueBindings, CW), dW(WW._directBindings, CW), dW(WW._transparentBindings, CW), WW._batchState?._flush(RW),
                function(WW, RW) {
                  const MW = WW._transparentBindings;
                  if (MW.length <= 1 || !RW) return;
                  const wW = bR(RW);
                  for (const CW of MW) {
                    const WW = CW.renderable._worldCenter;
                    CW._sortDistance = WW ? WW[0] * wW[2] + WW[1] * wW[6] + WW[2] * wW[10] + wW[14] : 0
                  }
                  MW.sort(XW)
                }(WW, zR)
            }(WW, RW, MW);
            const CW = WW._colorAttachment,
              zR = WW._config;
            zR.rt._colorView && (zR.rt === wW.surface.scRT && (CW.view = zR.rt._colorView), CW.resolveTarget = zR.rst?._colorView ?? void 0, CW.clearValue = zR.clrColor ?? wW.clearColor, CW.loadOp = zR.clr ? "clear" : "load");
            if (WW._executeWithTransmission) return WW._executeWithTransmission(MW._sampleCount);
            const AW = RW._currentEncoder.beginRenderPass(WW._renderPassDescriptor),
              yR = aR(WW, AW);
            return AW.end(), yR
          }(BW, RW, yR),
          dispose() {
            if (BW._disposed) return;
            BW._disposed = !0;
            const RW = BW._pendingMeshes;
            RW && (RW.length = 0);
            for (const WW of BW._renderables) BW._retireRenderable?.(BW.engine, WW);
            BW._passes.length = BW._opaqueBindings.length = BW._directBindings.length = 0, BW._transparentBindings.length = BW._renderables.length = BW._ob.length = 0, BW._ownsTargets && ((0, wW.g)(WW.rt), (0, wW.g)(WW.rst)), WW.depth?._eager || (0, wW.g)(WW.depth);
            const MW = BW._sceneUBO;
            (0, TW.b)(BW.engine, (() => MW.destroy())), BW._batchState?._release(BW.engine), BW._batchState = void 0
          }
        };
      return BW
    }

    function XW(WW, RW) {
      return RW._sortDistance - WW._sortDistance || WW.renderable.order - RW.renderable.order
    }

    function jR(WW, RW) {
      return WW.renderable.order - RW.renderable.order
    }

    function kR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW._renderables,
        MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        CW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        zR = arguments.length > 4 ? arguments[4] : void 0;
      const AW = WW._config,
        bR = AW.rt,
        yR = WW._batchState,
        NW = rR(RW, WW.LC._renderableVersion);
      if (MW) {
        const RW = (RW, MW) => {
          RW && (MW || WW._ownsTargets || RW._eager) && (0, wW.e)(RW, WW.engine)
        };
        RW(bR), bR._descriptor.samples > 1 && RW(AW.rst), RW(AW.depth, !0)
      }
      const {
        _opaqueBindings: eW,
        _directBindings: BW,
        _transparentBindings: tR
      } = NW;
      try {
        for (const MW of RW) {
          const RW = MW.bind(WW.engine, WW._targetSignature);
          NW._batchState = WW._targetSignature._collectBatches?.(NW._batchState, RW), MW.isTransparent || MW._transmissive ? tR.push(RW) : MW._direct ? BW.push(RW) : eW.push(RW)
        }
        eW.sort(jR), BW.sort(jR), MW && sW(WW, WW.engine, !1)
      } catch (TW) {
        throw NW._batchState?._release(void 0, zR ?? [yR]), TW
      }
      return MW && (! function(WW, RW) {
        const MW = WW._config,
          wW = WW._colorAttachment;
        wW.view = RW._colorView, WW._renderPassDescriptor.colorAttachments = RW._colorView ? [wW] : [];
        const CW = MW.depth ?? RW,
          zR = CW._depthView;
        let AW;
        if (zR) {
          const WW = CW._descriptor,
            RW = (MW.depth ? CW._eager : !1 === MW.depthClear) ? "load" : "clear";
          AW = {
            view: zR,
            depthClearValue: WW.depthClearValue ?? 0,
            depthLoadOp: RW,
            depthStoreOp: "store"
          }, WW.dFormat?.includes("stencil") && (AW.stencilClearValue = 0, AW.stencilLoadOp = RW, AW.stencilStoreOp = "store")
        }
        WW._renderPassDescriptor.depthStencilAttachment = AW
      }(WW, bR), WW._updateContext.targetWidth = bR._width, WW._updateContext.targetHeight = bR._height), CW && (Object.assign(WW, NW), yR?._release(WW.engine, [NW._batchState])), NW
    }

    function aR(WW, RW) {
      const MW = WW.engine,
        wW = WW._config,
        zR = wW.rt,
        AW = WW.LC,
        bR = WW._opaqueBindings,
        yR = WW._ob,
        NW = WW._sceneBG;
      if (function(WW, RW, MW, wW) {
          const CW = RW?.viewport;
          if (!CW) return;
          const zR = Math.floor(CW.x * MW),
            AW = Math.floor((1 - CW.y - CW.height) * wW),
            bR = Math.ceil((CW.x + CW.width) * MW) - zR,
            yR = Math.ceil((1 - CW.y) * wW) - AW;
          WW.setViewport(zR, AW, bR, yR, 0, 1), WW.setScissorRect(zR, AW, bR, yR)
        }(RW, wW.cam ?? AW.camera, zR._width, zR._height), RW.setBindGroup(0, NW), WW._lastVis !== CW.c || !yR.length) {
        const RW = zR._descriptor,
          wW = MW._device.createRenderBundleEncoder({
            colorFormats: RW.format ? [RW.format] : [],
            depthStencilFormat: WW._targetSignature._depthStencilFormat,
            sampleCount: RW.samples
          });
        wW.setBindGroup(0, NW), pW(wW, bR, MW), yR[0] = wW.finish(), WW._lastVis = CW.c
      }
      let eW = bR.length;
      return RW.executeBundles(yR), RW.setBindGroup(0, NW), eW += pW(RW, WW._directBindings, MW), eW += pW(RW, WW._transparentBindings, MW), eW
    }

    function sW(WW, RW) {
      let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const wW = FW(RW, WW.LC)._buffer;
      if (wW === WW._lightsUBO) return;
      const CW = RW._device.createBindGroup({
        layout: iR(RW),
        entries: [{
          binding: 0,
          resource: {
            buffer: WW._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: wW
          }
        }]
      });
      WW._lightsUBO = wW, WW._sceneBG = CW, MW && (WW._ob = [])
    }

    function dW(WW, RW) {
      for (const MW of WW) MW.update?.(RW)
    }

    function pW(WW, RW, MW) {
      let wW = null,
        CW = 0;
      for (const zR of RW) {
        const RW = zR.renderable.mesh;
        RW && !1 === RW.visible || (zR.pipeline !== wW && (WW.setPipeline(zR.pipeline), wW = zR.pipeline), CW += zR.draw(WW, MW))
      }
      return CW
    }

    function hW(WW) {
      const RW = WW._materialSwapQueue;
      if (!RW[0] || WW._runtimeBuilds?.w) return;
      let wW, CW, zR;
      const AW = WW._renderables;
      for (const MW of RW) {
        const RW = MW.material;
        if (!RW) continue;
        const bR = MW._runtimeThinBuild;
        if (bR) {
          CW = bR(WW, MW, CW);
          continue
        }
        const yR = WW._groups.get(RW._buildGroup),
          NW = yR?.r;
        if (!NW) {
          (zR ??= []).push(MW);
          continue
        }
        if (yR._w?.(MW)) {
          (zR ??= []).push([MW, RW]);
          continue
        }
        const eW = WW._meshDisposables.get(MW);
        eW && (WW._meshDisposables.delete(MW), (0, TW.b)(WW.surface.engine, (() => eW.forEach((WW => WW())))));
        const BW = yR.o;
        let tR;
        for (let WW = AW.length; WW--;) AW[WW].mesh === MW && (tR = AW.splice(WW, 1)[0]);
        RW._csmGen = -~RW._csmGen;
        const gR = NW(WW, MW);
        if (BW) {
          const WW = BW.indexOf(tR);
          WW < 0 ? BW.push(gR) : BW[WW] = gR
        }
        wW = AW.push(gR)
      }
      if (wW && (AW.sort(((WW, RW) => WW.order - RW.order)), WW._renderableVersion++, WW._materialEpoch++), RW.length = 0, !zR) return CW;
      const bR = zR;
      return MW.e(335).then((() => MW(58697))).then((RW => {
        let {
          C: MW
        } = RW;
        return MW(WW, bR, CW)
      }), (RW => {
        const MW = WW._runtimeBuilds;
        MW ? MW._x(RW) : console.error(RW)
      }))
    }
    var UW = null;

    function EW(WW, RW) {
      const MW = WW.engine,
        CW = {
          _kind: "LC",
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
            MW.useFloatingOrigin && CW.camera && !CW.camera._useFloatingOrigin && (CW.camera._useFloatingOrigin = !0, CW.camera._viewVer = -1, CW.camera._vpVer = -1);
            const WW = CW.fixedDeltaMs > 0 ? CW.fixedDeltaMs : MW._currentDelta,
              RW = MW._currentEncoder;
            let wW = 0;
            for (const MW of CW._beforeRender) MW(WW);
            CW._materialSwapQueue.length && hW(CW);
            for (const zR of CW._prePasses) wW += zR.execute(RW, MW);
            for (const zR of CW._uniformUpdaters) zR.update(MW);
            CW._drawCallsPre = wW
          },
          _record: () => CW._frameGraph.execute(),
          _resize() {
            CW._frameGraph.build()
          }
        },
        AW = function() {
          const WW = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let RW = 0; RW < WW._tasks.length; RW++) zR(WW, WW._tasks[RW]);
              for (const RW of WW._tasks)
                for (const WW of RW._passes) WW._initialize()
            },
            execute() {
              let RW = 0;
              for (const MW of WW._tasks)
                if (!1 !== MW.executionEnabled)
                  if (MW.execute) RW += MW.execute();
                  else
                    for (const WW of MW._passes) RW += WW._execute();
              return RW
            },
            dispose() {
              for (const RW of WW._tasks) RW.dispose();
              WW._tasks.length = 0, WW._currentProcessedTask = null
            }
          };
          return WW
        }();
      if (CW._frameGraph = AW, !1 !== RW?.defaultRenderTask) {
        const RW = WW.msaaSamples > 1,
          zR = RW ? (0, wW.c)({
            lbl: "scene-color",
            format: WW.format,
            dFormat: "depth24plus-stencil8",
            samples: WW.msaaSamples,
            size: WW
          }) : WW.scRT,
          bR = RW ? void 0 : (0, wW.c)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: WW
          });
        ! function(WW, RW) {
          WW._tasks.push(RW)
        }(AW, cR({
          name: "LC",
          rt: zR,
          rst: RW ? WW.scRT : void 0,
          depth: bR
        }, MW, CW))
      }
      return CW._disposables.push((() => AW.dispose())), CW
    }
    async function VW(WW) {
      const RW = WW;
      for (RW._built || (RW._materialSwapQueue.length = 0); RW._deferredBuilders.length;) {
        const WW = RW._deferredBuilders.splice(0);
        await Promise.all(WW.map((WW => WW())))
      }
      await hW(RW), UW?.get(RW)?.() || (RW._runtimeBuilds?._e(), RW._renderableVersion++, RW._built = !0), await (RW._rebuildHook?.(RW))
    }
    var mR = null;
    async function xR(WW) {
      const RW = WW,
        wW = RW.surface;
      (0, CW.h)(wW, RW) || (await VW(WW), RW._renderables.sort(vR), await Promise.all(RW._frameGraph._tasks.map((WW => WW._preload?.()))), mR && await mR(RW), RW._frameGraph.build(), wW._renderingContexts[0] && (await MW.e(333).then((() => MW(58689)))).configureSwapchainOverlayScene(wW, RW), UW?.get(RW)?.() || (0, CW.i)(wW, RW))
    }
    var vR = (WW, RW) => WW.order - RW.order
  },
  39171: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => NW,
      e: () => eW
    });
    var wW = MW(39128),
      CW = MW(39133),
      zR = MW(39138),
      AW = MW(39146),
      bR = MW(39150),
      yR = MW(39159);

    function NW(WW, RW, MW) {
      let bR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (RW < 1 || MW < 1) && (0, wW.b)(676, RW, MW);
      const NW = WW._device,
        eW = bR.mipMaps ?? !1,
        BW = bR.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        tR = eW ? (0, yR.c)(RW, MW) : 1,
        TW = NW.createTexture({
          size: {
            width: RW,
            height: MW
          },
          format: BW,
          mipLevelCount: tR,
          usage: CW.h.TEXTURE_BINDING | CW.h.COPY_DST | CW.h.RENDER_ATTACHMENT
        }),
        gR = {
          addressModeU: bR.addressModeU ?? "clamp-to-edge",
          addressModeV: bR.addressModeV ?? "clamp-to-edge",
          minFilter: bR.minFilter ?? "linear",
          magFilter: bR.magFilter ?? "linear",
          mipmapFilter: eW ? "linear" : "nearest"
        },
        iR = (0, AW.e)(WW, gR),
        YW = {
          texture: TW,
          view: TW.createView(),
          sampler: iR,
          width: RW,
          height: MW
        };
      return (0, zR.b)(YW), WW._dlr && WW._dlr.t(YW, {
        kind: "dynamic",
        width: RW,
        height: MW,
        format: BW,
        levels: tR,
        samplerDesc: gR,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), YW
    }

    function eW(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const CW = wW.invertY ?? !0,
        zR = wW.premultiplyAlpha ?? !1;
      WW._device.queue.copyExternalImageToTexture({
        source: MW,
        flipY: CW
      }, {
        texture: RW.texture,
        premultipliedAlpha: zR
      }, [RW.width, RW.height]);
      const AW = RW._recoverySource;
      AW && "dynamic" === AW.kind && (AW.source = MW, AW.flipY = CW, AW.premultipliedAlpha = zR), RW.texture.mipLevelCount > 1 && (0, bR.generateMipmaps)(WW, RW.texture)
    }
  },
  39168: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => yR
    });
    var wW = MW(39128),
      CW = MW(39133),
      zR = MW(39138),
      AW = MW(39146),
      bR = MW(39159);
    async function yR(WW, RW) {
      let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [NW, eW] = function(WW) {
        const RW = WW,
          MW = [
            [RW.displayWidth, RW.displayHeight],
            [RW.videoWidth, RW.videoHeight],
            [RW.naturalWidth, RW.naturalHeight],
            [RW.width, RW.height]
          ];
        for (const [wW, CW] of MW)
          if (void 0 !== wW && void 0 !== CW && Number.isInteger(wW) && Number.isInteger(CW) && wW > 0 && CW > 0) return [wW, CW];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(RW), [BW, tR] = function(WW, RW, MW) {
        if (void 0 === MW) return [WW, RW];
        if (!Number.isInteger(MW) || MW < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${MW})`);
        if (Math.max(WW, RW) <= MW) return [WW, RW];
        const wW = MW / Math.max(WW, RW);
        return WW >= RW ? [MW, Math.max(1, Math.round(RW * wW))] : [Math.max(1, Math.round(WW * wW)), MW]
      }(NW, eW, yR.maxDimension), TW = yR.mipMaps ?? !0, gR = yR.premultiplyAlpha ?? !1;
      let iR = RW,
        YW = null;
      const JW = {
        texture: null
      };
      try {
        BW === NW && tR === eW || (YW = await createImageBitmap(RW, {
          resizeWidth: BW,
          resizeHeight: tR,
          resizeQuality: "high",
          premultiplyAlpha: gR ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), iR = YW);
        const PW = WW._device,
          IW = yR.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          oW = TW ? (0, bR.c)(BW, tR) : 1,
          lW = oW > 1 ? (await Promise.resolve().then((() => MW(39150)))).generateMipmaps : null,
          FW = {
            addressModeU: yR.addressModeU ?? "repeat",
            addressModeV: yR.addressModeV ?? "repeat",
            minFilter: yR.minFilter ?? "linear",
            magFilter: yR.magFilter ?? "linear",
            mipmapFilter: TW ? "linear" : "nearest"
          };
        FW.maxAnisotropy = "linear" === FW.minFilter && "linear" === FW.magFilter && "linear" === FW.mipmapFilter ? 4 : 1;
        const fW = yR.invertY ?? !0,
          QW = async RW => {
            let MW;
            PW.pushErrorScope("validation"), PW.pushErrorScope("out-of-memory");
            let zR = null;
            try {
              const MW = JW.texture = PW.createTexture({
                size: {
                  width: BW,
                  height: tR
                },
                format: IW,
                mipLevelCount: oW,
                usage: CW.h.TEXTURE_BINDING | CW.h.COPY_DST | CW.h.RENDER_ATTACHMENT
              });
              PW.queue.copyExternalImageToTexture({
                source: RW,
                flipY: fW
              }, {
                texture: MW,
                premultipliedAlpha: gR
              }, {
                width: BW,
                height: tR
              }), lW && lW(WW, MW), zR = (0, AW.e)(WW, FW)
            } catch (TW) {
              MW = TW
            }
            const [bR, yR] = await Promise.all([PW.popErrorScope(), PW.popErrorScope()]);
            if (MW) throw MW;
            const NW = yR ?? bR;
            if (NW) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${NW.message}`, {
              cause: NW
            });
            const eW = JW.texture;
            return eW && zR || (0, wW.b)(677), {
              texture: eW,
              view: eW.createView(),
              sampler: zR,
              width: BW,
              height: tR
            }
          }, rR = await (WW._dlr?.x(iR, BW, tR, IW, oW, FW, fW, gR, QW)) ?? await QW(iR);
        return (0, zR.b)(rR), rR
      } catch (PW) {
        throw JW.texture?.destroy(), PW
      } finally {
        YW?.close()
      }
    }
  },
  39150: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      generateMipmaps: () => TW,
      recordMipmaps: () => gR
    });
    var wW = MW(39133),
      CW = MW(39146),
      zR = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var AW = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      bR = null,
      yR = null,
      NW = null,
      eW = null,
      BW = null;

    function tR(WW) {
      const RW = WW._device;
      RW !== BW && (bR?.clear(), bR = null, yR = null, NW = null, eW = null, BW = null, BW = RW), yR ??= RW.createShaderModule({
        code: AW
      }), NW ??= function(WW) {
        return (0, CW.e)(WW, zR)
      }(WW), eW ??= RW.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: wW.g.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: wW.g.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function TW(WW, RW, MW) {
      const wW = WW._device,
        CW = wW.createCommandEncoder();
      gR(WW, RW, CW, MW), wW.queue.submit([CW.finish()])
    }

    function gR(WW, RW, MW, wW) {
      if (RW.mipLevelCount <= 1) return;
      const CW = WW._device,
        zR = function(WW, RW) {
          const MW = WW._device;
          tR(WW), bR ??= new Map;
          let wW = bR.get(RW);
          return wW || (wW = MW.createRenderPipeline({
            layout: MW.createPipelineLayout({
              bindGroupLayouts: [eW]
            }),
            vertex: {
              module: yR,
              entryPoint: "vs"
            },
            fragment: {
              module: yR,
              entryPoint: "fs",
              targets: [{
                format: RW
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), bR.set(RW, wW)), wW
        }(WW, RW.format),
        AW = null != wW ? {
          dimension: "2d",
          baseArrayLayer: wW,
          arrayLayerCount: 1
        } : {};
      for (let bR = 1; bR < RW.mipLevelCount; bR++) {
        const WW = RW.createView({
            baseMipLevel: bR - 1,
            mipLevelCount: 1,
            ...AW
          }),
          wW = RW.createView({
            baseMipLevel: bR,
            mipLevelCount: 1,
            ...AW
          }),
          yR = CW.createBindGroup({
            layout: eW,
            entries: [{
              binding: 0,
              resource: WW
            }, {
              binding: 1,
              resource: NW
            }]
          }),
          BW = MW.beginRenderPass({
            colorAttachments: [{
              view: wW,
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
        BW.setPipeline(zR), BW.setBindGroup(0, yR), BW.draw(3), BW.end()
      }
    }
  },
  39159: (WW, RW, MW) => {
    function wW(WW, RW) {
      return Math.floor(Math.log2(Math.max(WW, RW))) + 1
    }
    MW.d(RW, {
      c: () => wW
    })
  },
  39126: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => NW,
      f: () => eW
    });
    var wW = MW(39128),
      CW = MW(39133),
      zR = MW(39138),
      AW = MW(39146),
      bR = MW(39150),
      yR = MW(39159);

    function NW(WW, RW, MW, bR) {
      let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (RW < 1 || MW < 1 || bR < 1) && (0, wW.b)(722, RW, MW, bR);
      const eW = WW._device,
        BW = NW.mipMaps ?? !0,
        tR = NW.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        TW = eW.createTexture({
          size: {
            width: RW,
            height: MW,
            depthOrArrayLayers: bR
          },
          dimension: "2d",
          format: tR,
          mipLevelCount: BW ? (0, yR.c)(RW, MW) : 1,
          usage: CW.h.TEXTURE_BINDING | CW.h.COPY_DST | CW.h.RENDER_ATTACHMENT
        }),
        gR = (0, AW.e)(WW, {
          addressModeU: NW.addressModeU ?? "repeat",
          addressModeV: NW.addressModeV ?? "repeat",
          minFilter: NW.minFilter ?? "linear",
          magFilter: NW.magFilter ?? "linear",
          mipmapFilter: BW ? "linear" : "nearest"
        }),
        iR = {
          texture: TW,
          view: TW.createView({
            dimension: "2d-array"
          }),
          sampler: gR,
          width: RW,
          height: MW,
          layers: bR
        };
      return (0, zR.b)(iR), iR
    }

    function eW(WW, RW, MW, CW) {
      let zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (MW < 0 || MW >= RW.layers || (0 | MW) !== MW) && (0, wW.b)(723, RW.layers, MW);
      const AW = zR.invertY ?? !0,
        yR = zR.premultiplyAlpha ?? !1;
      WW._device.queue.copyExternalImageToTexture({
        source: CW,
        flipY: AW
      }, {
        texture: RW.texture,
        origin: [0, 0, MW],
        premultipliedAlpha: yR
      }, [RW.width, RW.height, 1]), RW.texture.mipLevelCount > 1 && (0, bR.generateMipmaps)(WW, RW.texture, MW)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);