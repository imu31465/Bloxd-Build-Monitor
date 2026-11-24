export const id = 309;
export const ids = [309];
export const modules = {
  41847: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT
    });
    var WT = mT(41835),
      zT = mT(41850);

    function MT(TT) {
      (0, zT.c)(TT), (0, WT.z)(TT);
      const UT = TT._surfaces;
      for (const mT of UT) mT._renderingContexts.length = 0, mT._ro?.disconnect(), mT._context.unconfigure();
      UT.length = 0;
      try {
        TT._disposeManagedResources?.(), TT._disposeStorageBuffers?.()
      } finally {
        TT._device.destroy()
      }
    }
  },
  41835: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => LT,
      i: () => vT,
      l: () => pT,
      p: () => BT,
      s: () => iT,
      w: () => fT,
      z: () => qT
    });
    var WT = mT(41793);
    var zT = "Babylon Lite v1.32.0",
      MT = mT(41843);

    function gT(TT) {
      return "clientWidth" in TT
    }
    var nT = 1;

    function HT(TT, UT, mT) {
      const HT = UT.getContext("webgpu");
      HT || (0, WT.b)(54), gT(UT) && UT.setAttribute("data-engine", zT);
      const kT = mT?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        jT = mT?.srgb ? (lT = kT).endsWith("-srgb") ? lT : `${lT}-srgb` : kT;
      var lT;
      const LT = mT?.alphaMode ?? "opaque";
      HT.configure({
        device: TT._device,
        format: kT,
        alphaMode: LT,
        viewFormats: [jT]
      });
      const pT = 1 === mT?.msaaSamples ? 1 : 4,
        BT = (0, MT.b)({
          lbl: "swapchain",
          format: jT,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return BT._eager = !0, {
        engine: TT,
        canvas: UT,
        format: jT,
        msaaSamples: pT,
        scRT: BT,
        maxDevicePixelRatio: mT?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: nT++,
        _context: HT,
        _configureFormat: kT,
        _alphaMode: LT,
        _renderingContexts: []
      }
    }

    function kT(TT) {
      const UT = TT._context.getCurrentTexture(),
        mT = TT.scRT;
      mT._colorTexture = UT, mT._colorView = UT.createView({
        format: TT.format
      }), mT._width = UT.width, mT._height = UT.height
    }

    function jT(TT) {
      const UT = TT.canvas;
      if (!gT(UT)) return;
      const mT = TT._w ?? UT.clientWidth,
        WT = TT._h ?? UT.clientHeight;
      if (!(mT > 0 && WT > 0)) return;
      const zT = Math.min(globalThis.devicePixelRatio || 1, TT.maxDevicePixelRatio);
      lT(TT, mT * zT | 0, WT * zT | 0)
    }

    function lT(TT, UT, mT) {
      const WT = TT.canvas,
        zT = 0 | UT,
        MT = 0 | mT;
      if (zT > 0 && MT > 0 && (zT !== WT.width || MT !== WT.height)) {
        WT.width = zT, WT.height = MT, TT.scRT._width = zT, TT.scRT._height = MT;
        for (const UT of TT._renderingContexts) UT._resize?.()
      }
    }
    var LT = 0;

    function pT(TT, UT) {
      return -1 !== TT._renderingContexts.indexOf(UT)
    }

    function BT(TT, UT) {
      return -1 === TT._renderingContexts.indexOf(UT) && (TT._renderingContexts.push(UT), !0)
    }
    var ZT = null;
    var cT = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function vT(TT, UT) {
      const MT = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...ZT ? ZT() : {}
      });
      MT || (0, WT.b)(47);
      const gT = ZT?.deviceFeatures?.(MT, UT) ?? function(TT) {
          return cT.filter((UT => TT.features.has(UT)))
        }(MT),
        nT = await MT.requestDevice({
          requiredFeatures: gT,
          requiredLimits: UT?.requiredLimits
        });
      console.log(`${zT} - WebGPU engine`);
      const lT = !!UT?.useHighPrecisionMatrix,
        LT = !!UT?.useFloatingOrigin;
      if (LT && !lT && (0, WT.b)(48), lT) {
        const {
          allocateF64Mat4: TT
        } = await mT.e(361).then((() => mT(61213)));
        0
      }
      let pT, BT, vT, fT;
      if (LT) {
        const [{
          wrapRenderableForFO: TT,
          lightFoVersion: UT,
          applyLightFoOffset: WT
        }, {
          makePackMeshWorld: zT
        }] = await Promise.all([mT.e(362).then((() => mT(61222))), mT.e(363).then((() => mT(61229)))]);
        pT = TT, BT = zT, vT = UT, fT = WT
      }
      const qT = {
          _device: nT
        },
        iT = [qT];
      return Object.assign(qT, {
        engine: qT,
        surfaces: iT,
        _surfaces: iT,
        _device: nT,
        _options: UT,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: lT,
        useFloatingOrigin: LT,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: pT,
        _makePackMeshWorld: BT,
        _lightFoVersion: vT,
        _applyLightFoOffset: fT
      }, HT(qT, TT, UT)), jT(qT), kT(qT), qT
    }

    function fT(TT, UT, mT) {
      lT(TT, UT, mT)
    }

    function qT(TT) {
      TT._animFrameId && cancelAnimationFrame(TT._animFrameId), TT._animFrameId = 0, TT._renderFn = null, TT._flushGpuRetirements?.(TT)
    }

    function iT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT.surfaces;
      if (mT !== TT.surfaces)
        for (let zT = mT.length; zT--;) mT[zT].engine !== TT && (0, WT.b)(49);
      bT(TT, UT, mT)
    }

    function bT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT._surfaces,
        WT = 0;
      for (let MT = mT.length; MT--;) WT += mT[MT]._renderingContexts.length;
      if (!WT) return TT.drawCallCount = 0, TT._flushGpuRetirements?.(TT);
      const zT = TT._device.createCommandEncoder({
        label: "frame"
      });
      TT._currentEncoder = zT, TT._currentDelta = UT;
      try {
        TT._gpuTimerBegin?.(zT), WT = 0;
        for (let TT = 0; TT < mT.length; TT++) {
          const UT = mT[TT];
          UT._capturePreFrame?.(UT), kT(UT);
          const zT = UT._renderingContexts;
          for (let TT = 0; TT < zT.length; TT++) {
            const UT = zT[TT];
            UT._update(), WT += UT._drawCallsPre + UT._record()
          }
        }
        const UT = TT._currentEncoder;
        for (let TT = 0; TT < mT.length; TT++) {
          const WT = mT[TT];
          WT._captureService?.(WT, UT)
        }
        TT._gpuTimerEnd?.(UT), TT._cbs[0] = UT.finish(), TT._device.queue.submit(TT._cbs), TT._flushGpuRetirements?.(TT), TT.drawCallCount = WT, TT._gpuTimerResolve?.()
      } finally {
        TT._currentEncoder = void 0
      }
    }
  },
  41802: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      h: () => MT,
      i: () => WT
    });
    var WT = globalThis.GPUTextureUsage,
      zT = globalThis.GPUBufferUsage,
      MT = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41850: (TT, UT, mT) => {
    function WT(TT) {
      zT(TT.splice(0))
    }

    function zT(TT) {
      for (const mT of TT) try {
        mT()
      } catch (UT) {
        console.error("GPU resource retirement failed.", UT)
      }
    }

    function MT(TT, UT) {
      TT._flushGpuRetirements ??= gT, (TT._retirements ??= []).push(UT)
    }

    function gT(TT) {
      const UT = TT._retirements;
      if (!UT) return;
      TT._retirements = null;
      const mT = TT._retiring ??= new Set;
      mT.add(UT), queueMicrotask((() => {
        TT._device.queue.onSubmittedWorkDone().then((() => {
          mT.delete(UT), WT(UT)
        })).catch((() => {}))
      }))
    }

    function nT(TT) {
      const UT = TT._retirements,
        mT = TT._retiring;
      TT._retirements = null, TT._retiring = null, UT && WT(UT), mT?.forEach(WT)
    }
    mT.d(UT, {
      c: () => nT,
      f: () => MT
    })
  },
  41843: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT,
      f: () => gT,
      g: () => nT
    });
    var WT = mT(41802);

    function zT(TT) {
      const UT = TT.size;
      return "canvas" in UT ? UT.canvas : UT
    }

    function MT(TT) {
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

    function gT(TT, UT) {
      if (TT._eager) return void TT._syncEager?.(UT);
      nT(TT);
      const mT = TT._descriptor,
        {
          width: MT,
          height: gT
        } = (TT._resolveSize ?? zT)(mT);
      TT._width = MT, TT._height = gT;
      const HT = UT._device;
      mT.format && (TT._colorTexture = HT.createTexture({
        label: mT.lbl,
        size: {
          width: MT,
          height: gT
        },
        format: mT.format,
        sampleCount: mT.samples,
        usage: WT.i.RENDER_ATTACHMENT | WT.i.TEXTURE_BINDING | WT.i.COPY_SRC | WT.i.COPY_DST
      }), TT._colorView = TT._colorTexture.createView()), mT.dFormat && (TT._depthTexture = HT.createTexture({
        label: mT.lbl,
        size: {
          width: MT,
          height: gT
        },
        format: mT.dFormat,
        sampleCount: mT.samples,
        usage: WT.i.RENDER_ATTACHMENT | WT.i.TEXTURE_BINDING
      }), TT._depthView = TT._depthTexture.createView())
    }

    function nT(TT) {
      if (!TT || TT._eager && !TT._disposeAttachments) return;
      const UT = TT._colorTexture,
        mT = TT._depthTexture;
      if (TT._colorTexture = TT._depthTexture = null, TT._colorView = TT._depthView = null, TT._width = TT._height = 0, TT._disposeAttachments) TT._disposeAttachments(UT, mT);
      else try {
        UT?.destroy()
      } finally {
        !1 !== TT._ownsDepthTexture && mT?.destroy()
      }
    }
  },
  41860: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      e: () => zT,
      f: () => MT
    });
    var WT = Float32Array,
      zT = Float64Array,
      MT = Uint32Array
  },
  41868: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT
    });
    var WT = 16
  },
  41793: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT
    });
    var WT = null;

    function zT(TT) {
      for (var UT = arguments.length, mT = new Array(UT > 1 ? UT - 1 : 0), zT = 1; zT < UT; zT++) mT[zT - 1] = arguments[zT];
      const MT = new Error(WT?.(TT, mT) ?? `#${TT}`);
      throw MT.lite = mT, MT
    }
  },
  41822: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT
    });
    var WT = mT(41808);

    function zT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const mT = UT.compare,
        zT = UT.lodMinClamp ?? 0,
        MT = UT.lodMaxClamp ?? 32,
        gT = void 0 !== mT || 0 !== zT || 32 !== MT ? `${mT??""}:${zT}:${MT}` : "";
      return (0, WT.c)(TT, UT, gT)
    }
  },
  41804: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT
    });
    var WT = null;

    function zT(TT) {
      const UT = WT ??= new WeakMap;
      UT.set(TT, (UT.get(TT) ?? 0) + 1)
    }

    function MT(TT) {
      zT(TT.texture)
    }
  },
  41808: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => nT
    });
    var WT = null,
      zT = "nearest",
      MT = "clamp-to-edge",
      gT = {
        minFilter: zT,
        magFilter: zT,
        mipmapFilter: zT,
        addressModeU: MT,
        addressModeV: MT,
        addressModeW: MT,
        maxAnisotropy: 1
      };

    function nT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const zT = TT._device,
        MT = WT ??= new WeakMap;
      let nT = MT.get(zT);
      nT || MT.set(zT, nT = new Map);
      let HT = mT;
      for (const WT in gT) {
        const TT = WT;
        HT += `:${UT[TT]??gT[TT]}`
      }
      let kT = nT.get(HT);
      return kT || nT.set(HT, kT = zT.createSampler(UT)), kT
    }
  },
  41853: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => FT,
      d: () => uT
    });
    var WT = mT(41843),
      zT = mT(41835);

    function MT(TT, UT) {
      UT._passes.length = 0, TT._currentProcessedTask = UT;
      try {
        UT.record()
      } finally {
        TT._currentProcessedTask = null
      }
    }
    var gT = mT(41860);

    function nT(TT) {
      const UT = TT.worldMatrixVersion;
      if (TT._viewVer === UT) return TT._viewCache;
      const mT = TT._viewCache,
        WT = TT.worldMatrix,
        zT = TT._useFloatingOrigin,
        MT = zT ? 0 : WT[12],
        gT = zT ? 0 : WT[13],
        nT = zT ? 0 : WT[14];
      return mT[0] = WT[0], mT[1] = WT[4], mT[2] = WT[8], mT[3] = 0, mT[4] = WT[1], mT[5] = WT[5], mT[6] = WT[9], mT[7] = 0, mT[8] = WT[2], mT[9] = WT[6], mT[10] = WT[10], mT[11] = 0, mT[12] = -(WT[0] * MT + WT[1] * gT + WT[2] * nT), mT[13] = -(WT[4] * MT + WT[5] * gT + WT[6] * nT), mT[14] = -(WT[8] * MT + WT[9] * gT + WT[10] * nT), mT[15] = 1, TT._viewVer = UT, mT
    }
    var HT = null;

    function kT(TT) {
      return TT._projFov === TT.fov && TT._projNear === TT.nearPlane && TT._projFar === TT.farPlane || (TT._projFov = TT.fov, TT._projNear = TT.nearPlane, TT._projFar = TT.farPlane, TT._projRev = (TT._projRev ?? 0) + 1), TT.worldMatrixVersion + (TT._projRev ?? 0)
    }

    function jT(TT, UT) {
      const mT = kT(TT);
      if (TT._projVer === mT && TT._projAspect === UT) return TT._projCache;
      const WT = TT._projCache;
      return null !== HT && TT.ortho ? HT(TT, UT, WT) : function(TT, UT, mT, WT, zT) {
        const MT = 1 / Math.tan(.5 * UT),
          gT = zT - WT;
        TT[0] = MT / mT, TT[5] = MT, TT[10] = -WT / gT, TT[11] = 1, TT[14] = zT * WT / gT
      }(WT, TT.fov, UT, TT.nearPlane, TT.farPlane), TT._projVer = mT, TT._projAspect = UT, WT
    }
    var lT = mT(41802);

    function LT(TT, UT, mT) {
      return TT._device.createBuffer({
        label: mT,
        size: (WT = UT, zT = 16, Math.ceil(WT / zT) * zT),
        usage: lT.d.UNIFORM | lT.d.COPY_DST
      });
      var WT, zT
    }
    var pT = mT(41850),
      BT = null;

    function ZT(TT) {
      const UT = TT._device,
        mT = BT ??= new WeakMap;
      let WT = mT.get(UT);
      return WT || (WT = UT.createBindGroupLayout({
        label: "XZ",
        entries: [{
          binding: 0,
          visibility: lT.h.VERTEX | lT.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: lT.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), mT.set(UT, WT)), WT
    }

    function cT(TT, UT, mT) {
      const WT = TT._device,
        zT = LT(TT, UT.byteLength, mT);
      try {
        WT.queue.writeBuffer(zT, 0, UT.buffer, UT.byteOffset, UT.byteLength)
      } catch (MT) {
        throw zT.destroy(), MT
      }
      return zT
    }
    var vT = mT(41868),
      fT = new gT.f(1),
      qT = new gT.b(fT.buffer);

    function iT(TT) {
      let UT = 0;
      for (const mT of TT) UT += mT._lightVersion ?? 0;
      return UT
    }

    function bT(TT, UT) {
      TT.fill(0);
      let mT = 0;
      for (const WT of UT) {
        if (mT >= vT.c) break;
        WT._writeLightUbo && (WT._writeLightUbo(TT, 4 + 16 * mT), mT++)
      }
      fT[0] = mT, TT[0] = qT[0]
    }

    function OT(TT, UT) {
      let mT = UT._lightGpuState;
      const WT = 16 + 16 * vT.c * 4;
      if (mT && mT._byteSize === WT) return mT;
      const zT = !mT;
      mT?._buffer.destroy();
      const MT = new gT.b(WT / 4);
      return bT(MT, UT.lights), TT._applyLightFoOffset?.(MT, UT), mT = {
        _buffer: cT(TT, MT),
        _scratch: MT,
        lK: iT(UT.lights) + (TT._lightFoVersion?.(UT) ?? 0),
        _listVersion: UT._lightListVersion ?? 0,
        _lightCount: UT.lights.length,
        _byteSize: WT
      }, UT._lightGpuState = mT, zT && UT._disposables.push((() => {
        UT._lightGpuState?._buffer.destroy(), UT._lightGpuState = void 0
      })), mT
    }

    function eT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const zT = UT;
      if (0 === WT && 16 === zT.length) return void TT.set(zT, mT);
      const MT = WT,
        gT = mT;
      TT[gT + 0] = zT[MT + 0], TT[gT + 1] = zT[MT + 1], TT[gT + 2] = zT[MT + 2], TT[gT + 3] = zT[MT + 3], TT[gT + 4] = zT[MT + 4], TT[gT + 5] = zT[MT + 5], TT[gT + 6] = zT[MT + 6], TT[gT + 7] = zT[MT + 7], TT[gT + 8] = zT[MT + 8], TT[gT + 9] = zT[MT + 9], TT[gT + 10] = zT[MT + 10], TT[gT + 11] = zT[MT + 11], TT[gT + 12] = zT[MT + 12], TT[gT + 13] = zT[MT + 13], TT[gT + 14] = zT[MT + 14], TT[gT + 15] = zT[MT + 15]
    }

    function YT(TT, UT, mT, WT, zT) {
      TT.fill(0);
      const MT = function(TT, UT) {
          const mT = kT(TT);
          if (TT._vpVer === mT && TT._vpAspect === UT) return TT._vpCache;
          const WT = TT._vpCache;
          return function(TT, UT, mT, WT, zT, MT) {
            const gT = mT[WT],
              nT = mT[WT + 1],
              HT = mT[WT + 2],
              kT = mT[WT + 3],
              jT = mT[WT + 4],
              lT = mT[WT + 5],
              LT = mT[WT + 6],
              pT = mT[WT + 7],
              BT = mT[WT + 8],
              ZT = mT[WT + 9],
              cT = mT[WT + 10],
              vT = mT[WT + 11],
              fT = mT[WT + 12],
              qT = mT[WT + 13],
              iT = mT[WT + 14],
              bT = mT[WT + 15];
            let OT = zT[MT],
              eT = zT[MT + 1],
              YT = zT[MT + 2],
              JT = zT[MT + 3];
            TT[UT] = gT * OT + jT * eT + BT * YT + fT * JT, TT[UT + 1] = nT * OT + lT * eT + ZT * YT + qT * JT, TT[UT + 2] = HT * OT + LT * eT + cT * YT + iT * JT, TT[UT + 3] = kT * OT + pT * eT + vT * YT + bT * JT, OT = zT[MT + 4], eT = zT[MT + 5], YT = zT[MT + 6], JT = zT[MT + 7], TT[UT + 4] = gT * OT + jT * eT + BT * YT + fT * JT, TT[UT + 5] = nT * OT + lT * eT + ZT * YT + qT * JT, TT[UT + 6] = HT * OT + LT * eT + cT * YT + iT * JT, TT[UT + 7] = kT * OT + pT * eT + vT * YT + bT * JT, OT = zT[MT + 8], eT = zT[MT + 9], YT = zT[MT + 10], JT = zT[MT + 11], TT[UT + 8] = gT * OT + jT * eT + BT * YT + fT * JT, TT[UT + 9] = nT * OT + lT * eT + ZT * YT + qT * JT, TT[UT + 10] = HT * OT + LT * eT + cT * YT + iT * JT, TT[UT + 11] = kT * OT + pT * eT + vT * YT + bT * JT, OT = zT[MT + 12], eT = zT[MT + 13], YT = zT[MT + 14], JT = zT[MT + 15], TT[UT + 12] = gT * OT + jT * eT + BT * YT + fT * JT, TT[UT + 13] = nT * OT + lT * eT + ZT * YT + qT * JT, TT[UT + 14] = HT * OT + LT * eT + cT * YT + iT * JT, TT[UT + 15] = kT * OT + pT * eT + vT * YT + bT * JT
          }(WT, 0, jT(TT, UT), 0, nT(TT), 0), TT._vpVer = mT, TT._vpAspect = UT, WT
        }(WT, zT),
        gT = nT(WT),
        HT = WT.worldMatrix;
      eT(TT, MT, 0), eT(TT, gT, 16), UT.useFloatingOrigin ? (TT[32] = 0, TT[33] = 0, TT[34] = 0) : (TT[32] = HT[12], TT[33] = HT[13], TT[34] = HT[14]), TT[87] = UT.canvas.width;
      const lT = mT.imageProcessing;
      TT[76] = lT.exposure, TT[77] = lT.contrast, TT[78] = mT._envTextures?.lodGenerationScale ?? .8, TT[79] = +lT.toneMappingEnabled, TT[37] = UT.canvas.height
    }

    function JT(TT, UT) {
      return {
        _renderables: TT,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: UT
      }
    }

    function xT(TT, UT, mT) {
      TT.clr ??= !0;
      const zT = TT.rt._descriptor,
        MT = TT.depth?._descriptor,
        HT = {
          _colorFormat: zT.format,
          _depthStencilFormat: MT?.dFormat ?? zT.dFormat,
          _depthCompare: zT.depthCompare ?? MT?.depthCompare,
          _sampleCount: zT.samples
        },
        jT = {
          loadOp: "clear",
          storeOp: "store"
        },
        lT = {
          ...JT([], -1),
          name: TT.name,
          _config: TT,
          _ownsTargets: !TT.sharedRt,
          engine: UT,
          XZ: mT,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [jT]
          },
          _colorAttachment: jT,
          _sceneUBO: LT(UT, 368),
          _suData: new gT.b(92),
          _sceneUboCacheKey: [],
          _targetSignature: HT,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (lT._disposed) throw new Error("RenderTask has been disposed.");
            lT._recordExplicit ? lT._recordExplicit(lT, !0) : tT(lT, !1 !== TT.autoMirror ? mT._renderables.slice() : lT._renderables, !0)
          },
          execute: () => function(TT, UT, mT) {
            if (!1 === TT.enabled) return 0;
            const WT = TT.XZ;
            ! function(TT, UT, mT) {
              const WT = TT.XZ;
              !1 !== TT._config.autoMirror && TT._lastVersion !== WT._renderableVersion && tT(TT, WT._renderables.slice());
              yT(TT, UT);
              const zT = TT._updateContext,
                MT = TT._config.cam ?? WT.camera;
              mT._colorFormat && (TT._config._skipClusteredLights || WT._clusteredLightUpdater?.(MT, zT.targetWidth, zT.targetHeight), function(TT, UT) {
                const mT = OT(TT, UT),
                  WT = iT(UT.lights) + (TT._lightFoVersion?.(UT) ?? 0),
                  zT = UT._lightListVersion ?? 0;
                WT === mT.lK && zT === mT._listVersion && UT.lights.length === mT._lightCount || (mT.lK = WT, mT._listVersion = zT, mT._lightCount = UT.lights.length, bT(mT._scratch, UT.lights), TT._applyLightFoOffset?.(mT._scratch, UT), TT._device.queue.writeBuffer(mT._buffer, 0, mT._scratch)), mT._buffer
              }(UT, WT));
              (function(TT, UT, mT, WT) {
                if (!WT) return;
                const zT = WT.viewport,
                  MT = TT._config.rt,
                  gT = (TT._config.cs ? UT.canvas.width / UT.canvas.height : MT._width / MT._height) * (zT ? zT.width / zT.height : 1),
                  nT = mT.fog,
                  HT = mT.imageProcessing,
                  jT = kT(WT),
                  lT = mT._envTextures,
                  LT = TT._sceneUboCacheKey;
                if (LT[0] === WT && LT[1] === nT && LT[2] === jT && LT[3] === gT && LT[4] === HT.exposure && LT[5] === HT.contrast && LT[6] === lT) return;
                LT[0] = WT, LT[1] = nT, LT[2] = jT, LT[3] = gT, LT[4] = HT.exposure, LT[5] = HT.contrast, LT[6] = lT;
                const pT = TT._suData;
                YT(pT, UT, mT, WT, gT);
                const BT = mT._sceneUboContributors;
                if (BT)
                  for (const kT of BT) kT(pT, mT);
                UT._device.queue.writeBuffer(TT._sceneUBO, 0, pT)
              })(TT, UT, WT, MT), zT.sA = MT, TT._batchState?._reset(), XT(TT._opaqueBindings, zT), XT(TT._directBindings, zT), XT(TT._transparentBindings, zT), TT._batchState?._flush(UT),
                function(TT, UT) {
                  const mT = TT._transparentBindings;
                  if (mT.length <= 1 || !UT) return;
                  const WT = nT(UT);
                  for (const zT of mT) {
                    const TT = zT.renderable._worldCenter;
                    zT._sortDistance = TT ? TT[0] * WT[2] + TT[1] * WT[6] + TT[2] * WT[10] + WT[14] : 0
                  }
                  mT.sort(dT)
                }(TT, MT)
            }(TT, UT, mT);
            const zT = TT._colorAttachment,
              MT = TT._config;
            MT.rt._colorView && (MT.rt === WT.surface.scRT && (zT.view = MT.rt._colorView), zT.resolveTarget = MT.rst?._colorView ?? void 0, zT.clearValue = MT.clrColor ?? WT.clearColor, zT.loadOp = MT.clr ? "clear" : "load");
            if (TT._executeWithTransmission) return TT._executeWithTransmission(mT._sampleCount);
            const gT = UT._currentEncoder.beginRenderPass(TT._renderPassDescriptor),
              HT = aT(TT, gT);
            return gT.end(), HT
          }(lT, UT, HT),
          dispose() {
            if (lT._disposed) return;
            lT._disposed = !0;
            const UT = lT._pendingMeshes;
            UT && (UT.length = 0);
            for (const TT of lT._renderables) lT._retireRenderable?.(lT.engine, TT);
            lT._passes.length = lT._opaqueBindings.length = lT._directBindings.length = 0, lT._transparentBindings.length = lT._renderables.length = lT._ob.length = 0, lT._ownsTargets && ((0, WT.g)(TT.rt), (0, WT.g)(TT.rst)), TT.depth?._eager || (0, WT.g)(TT.depth);
            const mT = lT._sceneUBO;
            (0, pT.f)(lT.engine, (() => mT.destroy())), lT._batchState?._release(lT.engine), lT._batchState = void 0
          }
        };
      return lT
    }

    function dT(TT, UT) {
      return UT._sortDistance - TT._sortDistance || TT.renderable.order - UT.renderable.order
    }

    function wT(TT, UT) {
      return TT.renderable.order - UT.renderable.order
    }

    function tT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT._renderables,
        mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        zT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        MT = arguments.length > 4 ? arguments[4] : void 0;
      const gT = TT._config,
        nT = gT.rt,
        HT = TT._batchState,
        kT = JT(UT, TT.XZ._renderableVersion);
      if (mT) {
        const UT = (UT, mT) => {
          UT && (mT || TT._ownsTargets || UT._eager) && (0, WT.f)(UT, TT.engine)
        };
        UT(nT), nT._descriptor.samples > 1 && UT(gT.rst), UT(gT.depth, !0)
      }
      const {
        _opaqueBindings: jT,
        _directBindings: lT,
        _transparentBindings: LT
      } = kT;
      try {
        for (const mT of UT) {
          const UT = mT.bind(TT.engine, TT._targetSignature);
          kT._batchState = TT._targetSignature._collectBatches?.(kT._batchState, UT), mT.isTransparent || mT._transmissive ? LT.push(UT) : mT._direct ? lT.push(UT) : jT.push(UT)
        }
        jT.sort(wT), lT.sort(wT), mT && yT(TT, TT.engine, !1)
      } catch (pT) {
        throw kT._batchState?._release(void 0, MT ?? [HT]), pT
      }
      return mT && (! function(TT, UT) {
        const mT = TT._config,
          WT = TT._colorAttachment;
        WT.view = UT._colorView, TT._renderPassDescriptor.colorAttachments = UT._colorView ? [WT] : [];
        const zT = mT.depth ?? UT,
          MT = zT._depthView;
        let gT;
        if (MT) {
          const TT = zT._descriptor,
            UT = (mT.depth ? zT._eager : !1 === mT.depthClear) ? "load" : "clear";
          gT = {
            view: MT,
            depthClearValue: TT.depthClearValue ?? 0,
            depthLoadOp: UT,
            depthStoreOp: "store"
          }, TT.dFormat?.includes("stencil") && (gT.stencilClearValue = 0, gT.stencilLoadOp = UT, gT.stencilStoreOp = "store")
        }
        TT._renderPassDescriptor.depthStencilAttachment = gT
      }(TT, nT), TT._updateContext.targetWidth = nT._width, TT._updateContext.targetHeight = nT._height), zT && (Object.assign(TT, kT), HT?._release(TT.engine, [kT._batchState])), kT
    }

    function aT(TT, UT) {
      const mT = TT.engine,
        WT = TT._config,
        MT = WT.rt,
        gT = TT.XZ,
        nT = TT._opaqueBindings,
        HT = TT._ob,
        kT = TT._sceneBG;
      if (function(TT, UT, mT, WT) {
          const zT = UT?.viewport;
          if (!zT) return;
          const MT = Math.floor(zT.x * mT),
            gT = Math.floor((1 - zT.y - zT.height) * WT),
            nT = Math.ceil((zT.x + zT.width) * mT) - MT,
            HT = Math.ceil((1 - zT.y) * WT) - gT;
          TT.setViewport(MT, gT, nT, HT, 0, 1), TT.setScissorRect(MT, gT, nT, HT)
        }(UT, WT.cam ?? gT.camera, MT._width, MT._height), UT.setBindGroup(0, kT), TT._lastVis !== zT.e || !HT.length) {
        const UT = MT._descriptor,
          WT = mT._device.createRenderBundleEncoder({
            colorFormats: UT.format ? [UT.format] : [],
            depthStencilFormat: TT._targetSignature._depthStencilFormat,
            sampleCount: UT.samples
          });
        WT.setBindGroup(0, kT), IT(WT, nT, mT), HT[0] = WT.finish(), TT._lastVis = zT.e
      }
      let jT = nT.length;
      return UT.executeBundles(HT), UT.setBindGroup(0, kT), jT += IT(UT, TT._directBindings, mT), jT += IT(UT, TT._transparentBindings, mT), jT
    }

    function yT(TT, UT) {
      let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const WT = OT(UT, TT.XZ)._buffer;
      if (WT === TT._lightsUBO) return;
      const zT = UT._device.createBindGroup({
        layout: ZT(UT),
        entries: [{
          binding: 0,
          resource: {
            buffer: TT._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: WT
          }
        }]
      });
      TT._lightsUBO = WT, TT._sceneBG = zT, mT && (TT._ob = [])
    }

    function XT(TT, UT) {
      for (const mT of TT) mT.update?.(UT)
    }

    function IT(TT, UT, mT) {
      let WT = null,
        zT = 0;
      for (const MT of UT) {
        const UT = MT.renderable.mesh;
        UT && !1 === UT.visible || (MT.pipeline !== WT && (TT.setPipeline(MT.pipeline), WT = MT.pipeline), zT += MT.draw(TT, mT))
      }
      return zT
    }

    function QT(TT) {
      const UT = TT._materialSwapQueue;
      if (!UT[0] || TT._runtimeBuilds?.w) return;
      let WT, zT, MT;
      const gT = TT._renderables;
      for (const mT of UT) {
        const UT = mT.material;
        if (!UT) continue;
        const nT = mT._runtimeThinBuild;
        if (nT) {
          zT = nT(TT, mT, zT);
          continue
        }
        const HT = TT._groups.get(UT._buildGroup),
          kT = HT?.r;
        if (!kT) {
          (MT ??= []).push(mT);
          continue
        }
        if (HT._w?.(mT)) {
          (MT ??= []).push([mT, UT]);
          continue
        }
        const jT = TT._meshDisposables.get(mT);
        jT && (TT._meshDisposables.delete(mT), (0, pT.f)(TT.surface.engine, (() => jT.forEach((TT => TT())))));
        const lT = HT.o;
        let LT;
        for (let TT = gT.length; TT--;) gT[TT].mesh === mT && (LT = gT.splice(TT, 1)[0]);
        UT._csmGen = -~UT._csmGen;
        const BT = kT(TT, mT);
        if (lT) {
          const TT = lT.indexOf(LT);
          TT < 0 ? lT.push(BT) : lT[TT] = BT
        }
        WT = gT.push(BT)
      }
      if (WT && (gT.sort(((TT, UT) => TT.order - UT.order)), TT._renderableVersion++, TT._materialEpoch++), UT.length = 0, !MT) return zT;
      const nT = MT;
      return mT.e(367).then((() => mT(61251))).then((UT => {
        let {
          C: mT
        } = UT;
        return mT(TT, nT, zT)
      }), (UT => {
        const mT = TT._runtimeBuilds;
        mT ? mT._x(UT) : console.error(UT)
      }))
    }
    var sT = null;

    function FT(TT, UT) {
      const mT = TT.engine,
        zT = {
          _kind: "XZ",
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
            mT.useFloatingOrigin && zT.camera && !zT.camera._useFloatingOrigin && (zT.camera._useFloatingOrigin = !0, zT.camera._viewVer = -1, zT.camera._vpVer = -1);
            const TT = zT.fixedDeltaMs > 0 ? zT.fixedDeltaMs : mT._currentDelta,
              UT = mT._currentEncoder;
            let WT = 0;
            for (const mT of zT._beforeRender) mT(TT);
            zT._materialSwapQueue.length && QT(zT);
            for (const MT of zT._prePasses) WT += MT.execute(UT, mT);
            for (const MT of zT._uniformUpdaters) MT.update(mT);
            zT._drawCallsPre = WT
          },
          _record: () => zT._frameGraph.execute(),
          _resize() {
            zT._frameGraph.build()
          }
        },
        gT = function() {
          const TT = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let UT = 0; UT < TT._tasks.length; UT++) MT(TT, TT._tasks[UT]);
              for (const UT of TT._tasks)
                for (const TT of UT._passes) TT._initialize()
            },
            execute() {
              let UT = 0;
              for (const mT of TT._tasks)
                if (!1 !== mT.executionEnabled)
                  if (mT.execute) UT += mT.execute();
                  else
                    for (const TT of mT._passes) UT += TT._execute();
              return UT
            },
            dispose() {
              for (const UT of TT._tasks) UT.dispose();
              TT._tasks.length = 0, TT._currentProcessedTask = null
            }
          };
          return TT
        }();
      if (zT._frameGraph = gT, !1 !== UT?.defaultRenderTask) {
        const UT = TT.msaaSamples > 1,
          MT = UT ? (0, WT.b)({
            lbl: "scene-color",
            format: TT.format,
            dFormat: "depth24plus-stencil8",
            samples: TT.msaaSamples,
            size: TT
          }) : TT.scRT,
          nT = UT ? void 0 : (0, WT.b)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: TT
          });
        ! function(TT, UT) {
          TT._tasks.push(UT)
        }(gT, xT({
          name: "XZ",
          rt: MT,
          rst: UT ? TT.scRT : void 0,
          depth: nT
        }, mT, zT))
      }
      return zT._disposables.push((() => gT.dispose())), zT
    }
    async function PT(TT) {
      const UT = TT;
      for (UT._built || (UT._materialSwapQueue.length = 0); UT._deferredBuilders.length;) {
        const TT = UT._deferredBuilders.splice(0);
        await Promise.all(TT.map((TT => TT())))
      }
      await QT(UT), sT?.get(UT)?.() || (UT._runtimeBuilds?._e(), UT._renderableVersion++, UT._built = !0), await (UT._rebuildHook?.(UT))
    }
    var VT = null;
    async function uT(TT) {
      const UT = TT,
        WT = UT.surface;
      (0, zT.l)(WT, UT) || (await PT(TT), UT._renderables.sort(CT), await Promise.all(UT._frameGraph._tasks.map((TT => TT._preload?.()))), VT && await VT(UT), UT._frameGraph.build(), WT._renderingContexts[0] && (await mT.e(365).then((() => mT(61238)))).configureSwapchainOverlayScene(WT, UT), sT?.get(UT)?.() || (0, zT.p)(WT, UT))
    }
    var CT = (TT, UT) => TT.order - UT.order
  },
  41829: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => kT,
      f: () => jT
    });
    var WT = mT(41793),
      zT = mT(41802),
      MT = mT(41804),
      gT = mT(41808),
      nT = mT(41811),
      HT = mT(41818);

    function kT(TT, UT, mT) {
      let nT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (UT < 1 || mT < 1) && (0, WT.b)(676, UT, mT);
      const kT = TT._device,
        jT = nT.mipMaps ?? !1,
        lT = nT.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        LT = jT ? (0, HT.d)(UT, mT) : 1,
        pT = kT.createTexture({
          size: {
            width: UT,
            height: mT
          },
          format: lT,
          mipLevelCount: LT,
          usage: zT.i.TEXTURE_BINDING | zT.i.COPY_DST | zT.i.RENDER_ATTACHMENT
        }),
        BT = {
          addressModeU: nT.addressModeU ?? "clamp-to-edge",
          addressModeV: nT.addressModeV ?? "clamp-to-edge",
          minFilter: nT.minFilter ?? "linear",
          magFilter: nT.magFilter ?? "linear",
          mipmapFilter: jT ? "linear" : "nearest"
        },
        ZT = (0, gT.c)(TT, BT),
        cT = {
          texture: pT,
          view: pT.createView(),
          sampler: ZT,
          width: UT,
          height: mT
        };
      return (0, MT.b)(cT), TT._dlr && TT._dlr.t(cT, {
        kind: "dynamic",
        width: UT,
        height: mT,
        format: lT,
        levels: LT,
        samplerDesc: BT,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), cT
    }

    function jT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const zT = WT.invertY ?? !0,
        MT = WT.premultiplyAlpha ?? !1;
      TT._device.queue.copyExternalImageToTexture({
        source: mT,
        flipY: zT
      }, {
        texture: UT.texture,
        premultipliedAlpha: MT
      }, [UT.width, UT.height]);
      const gT = UT._recoverySource;
      gT && "dynamic" === gT.kind && (gT.source = mT, gT.flipY = zT, gT.premultipliedAlpha = MT), UT.texture.mipLevelCount > 1 && (0, nT.generateMipmaps)(TT, UT.texture)
    }
  },
  41825: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => HT
    });
    var WT = mT(41793),
      zT = mT(41802),
      MT = mT(41804),
      gT = mT(41808),
      nT = mT(41818);
    async function HT(TT, UT) {
      let HT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [kT, jT] = function(TT) {
        const UT = TT,
          mT = [
            [UT.displayWidth, UT.displayHeight],
            [UT.videoWidth, UT.videoHeight],
            [UT.naturalWidth, UT.naturalHeight],
            [UT.width, UT.height]
          ];
        for (const [WT, zT] of mT)
          if (void 0 !== WT && void 0 !== zT && Number.isInteger(WT) && Number.isInteger(zT) && WT > 0 && zT > 0) return [WT, zT];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(UT), [lT, LT] = function(TT, UT, mT) {
        if (void 0 === mT) return [TT, UT];
        if (!Number.isInteger(mT) || mT < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${mT})`);
        if (Math.max(TT, UT) <= mT) return [TT, UT];
        const WT = mT / Math.max(TT, UT);
        return TT >= UT ? [mT, Math.max(1, Math.round(UT * WT))] : [Math.max(1, Math.round(TT * WT)), mT]
      }(kT, jT, HT.maxDimension), pT = HT.mipMaps ?? !0, BT = HT.premultiplyAlpha ?? !1;
      let ZT = UT,
        cT = null;
      const vT = {
        texture: null
      };
      try {
        lT === kT && LT === jT || (cT = await createImageBitmap(UT, {
          resizeWidth: lT,
          resizeHeight: LT,
          resizeQuality: "high",
          premultiplyAlpha: BT ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), ZT = cT);
        const fT = TT._device,
          qT = HT.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          iT = pT ? (0, nT.d)(lT, LT) : 1,
          bT = iT > 1 ? (await Promise.resolve().then((() => mT(41811)))).generateMipmaps : null,
          OT = {
            addressModeU: HT.addressModeU ?? "repeat",
            addressModeV: HT.addressModeV ?? "repeat",
            minFilter: HT.minFilter ?? "linear",
            magFilter: HT.magFilter ?? "linear",
            mipmapFilter: pT ? "linear" : "nearest"
          };
        OT.maxAnisotropy = "linear" === OT.minFilter && "linear" === OT.magFilter && "linear" === OT.mipmapFilter ? 4 : 1;
        const eT = HT.invertY ?? !0,
          YT = async UT => {
            let mT;
            fT.pushErrorScope("validation"), fT.pushErrorScope("out-of-memory");
            let MT = null;
            try {
              const mT = vT.texture = fT.createTexture({
                size: {
                  width: lT,
                  height: LT
                },
                format: qT,
                mipLevelCount: iT,
                usage: zT.i.TEXTURE_BINDING | zT.i.COPY_DST | zT.i.RENDER_ATTACHMENT
              });
              fT.queue.copyExternalImageToTexture({
                source: UT,
                flipY: eT
              }, {
                texture: mT,
                premultipliedAlpha: BT
              }, {
                width: lT,
                height: LT
              }), bT && bT(TT, mT), MT = (0, gT.c)(TT, OT)
            } catch (pT) {
              mT = pT
            }
            const [nT, HT] = await Promise.all([fT.popErrorScope(), fT.popErrorScope()]);
            if (mT) throw mT;
            const kT = HT ?? nT;
            if (kT) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${kT.message}`, {
              cause: kT
            });
            const jT = vT.texture;
            return jT && MT || (0, WT.b)(677), {
              texture: jT,
              view: jT.createView(),
              sampler: MT,
              width: lT,
              height: LT
            }
          }, JT = await (TT._dlr?.x(ZT, lT, LT, qT, iT, OT, eT, BT, YT)) ?? await YT(ZT);
        return (0, MT.b)(JT), JT
      } catch (fT) {
        throw vT.texture?.destroy(), fT
      } finally {
        cT?.close()
      }
    }
  },
  41811: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      generateMipmaps: () => pT,
      recordMipmaps: () => BT
    });
    var WT = mT(41802),
      zT = mT(41808),
      MT = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var gT = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      nT = null,
      HT = null,
      kT = null,
      jT = null,
      lT = null;

    function LT(TT) {
      const UT = TT._device;
      UT !== lT && (nT?.clear(), nT = null, HT = null, kT = null, jT = null, lT = null, lT = UT), HT ??= UT.createShaderModule({
        code: gT
      }), kT ??= function(TT) {
        return (0, zT.c)(TT, MT)
      }(TT), jT ??= UT.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: WT.h.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: WT.h.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function pT(TT, UT, mT) {
      const WT = TT._device,
        zT = WT.createCommandEncoder();
      BT(TT, UT, zT, mT), WT.queue.submit([zT.finish()])
    }

    function BT(TT, UT, mT, WT) {
      if (UT.mipLevelCount <= 1) return;
      const zT = TT._device,
        MT = function(TT, UT) {
          const mT = TT._device;
          LT(TT), nT ??= new Map;
          let WT = nT.get(UT);
          return WT || (WT = mT.createRenderPipeline({
            layout: mT.createPipelineLayout({
              bindGroupLayouts: [jT]
            }),
            vertex: {
              module: HT,
              entryPoint: "vs"
            },
            fragment: {
              module: HT,
              entryPoint: "fs",
              targets: [{
                format: UT
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), nT.set(UT, WT)), WT
        }(TT, UT.format),
        gT = null != WT ? {
          dimension: "2d",
          baseArrayLayer: WT,
          arrayLayerCount: 1
        } : {};
      for (let nT = 1; nT < UT.mipLevelCount; nT++) {
        const TT = UT.createView({
            baseMipLevel: nT - 1,
            mipLevelCount: 1,
            ...gT
          }),
          WT = UT.createView({
            baseMipLevel: nT,
            mipLevelCount: 1,
            ...gT
          }),
          HT = zT.createBindGroup({
            layout: jT,
            entries: [{
              binding: 0,
              resource: TT
            }, {
              binding: 1,
              resource: kT
            }]
          }),
          lT = mT.beginRenderPass({
            colorAttachments: [{
              view: WT,
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
        lT.setPipeline(MT), lT.setBindGroup(0, HT), lT.draw(3), lT.end()
      }
    }
  },
  41818: (TT, UT, mT) => {
    function WT(TT, UT) {
      return Math.floor(Math.log2(Math.max(TT, UT))) + 1
    }
    mT.d(UT, {
      d: () => WT
    })
  },
  41786: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => kT,
      g: () => jT
    });
    var WT = mT(41793),
      zT = mT(41802),
      MT = mT(41804),
      gT = mT(41808),
      nT = mT(41811),
      HT = mT(41818);

    function kT(TT, UT, mT, nT) {
      let kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (UT < 1 || mT < 1 || nT < 1) && (0, WT.b)(722, UT, mT, nT);
      const jT = TT._device,
        lT = kT.mipMaps ?? !0,
        LT = kT.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        pT = jT.createTexture({
          size: {
            width: UT,
            height: mT,
            depthOrArrayLayers: nT
          },
          dimension: "2d",
          format: LT,
          mipLevelCount: lT ? (0, HT.d)(UT, mT) : 1,
          usage: zT.i.TEXTURE_BINDING | zT.i.COPY_DST | zT.i.RENDER_ATTACHMENT
        }),
        BT = (0, gT.c)(TT, {
          addressModeU: kT.addressModeU ?? "repeat",
          addressModeV: kT.addressModeV ?? "repeat",
          minFilter: kT.minFilter ?? "linear",
          magFilter: kT.magFilter ?? "linear",
          mipmapFilter: lT ? "linear" : "nearest"
        }),
        ZT = {
          texture: pT,
          view: pT.createView({
            dimension: "2d-array"
          }),
          sampler: BT,
          width: UT,
          height: mT,
          layers: nT
        };
      return (0, MT.b)(ZT), ZT
    }

    function jT(TT, UT, mT, zT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (mT < 0 || mT >= UT.layers || (0 | mT) !== mT) && (0, WT.b)(723, UT.layers, mT);
      const gT = MT.invertY ?? !0,
        HT = MT.premultiplyAlpha ?? !1;
      TT._device.queue.copyExternalImageToTexture({
        source: zT,
        flipY: gT
      }, {
        texture: UT.texture,
        origin: [0, 0, mT],
        premultipliedAlpha: HT
      }, [UT.width, UT.height, 1]), UT.texture.mipLevelCount > 1 && (0, nT.generateMipmaps)(TT, UT.texture, mT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);