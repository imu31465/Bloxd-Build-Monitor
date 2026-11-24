export const id = 304;
export const ids = [304];
export const modules = {
  41595: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => UD,
      g: () => hD,
      k: () => fD,
      n: () => ID,
      r: () => MD,
      s: () => nD
    });
    var pD = wD(41545);
    var sD = "Babylon Lite v1.32.0",
      KD = wD(41602);

    function rD(DD) {
      return "clientWidth" in DD
    }
    var LD = 1;

    function cD(DD, zD, wD) {
      const cD = zD.getContext("webgpu");
      cD || (0, pD.d)(54), rD(zD) && zD.setAttribute("data-engine", sD);
      const gD = wD?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        RD = wD?.srgb ? (AD = gD).endsWith("-srgb") ? AD : `${AD}-srgb` : gD;
      var AD;
      const UD = wD?.alphaMode ?? "opaque";
      cD.configure({
        device: DD._device,
        format: gD,
        alphaMode: UD,
        viewFormats: [RD]
      });
      const fD = 1 === wD?.msaaSamples ? 1 : 4,
        ID = (0, KD.e)({
          lbl: "swapchain",
          format: RD,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return ID._eager = !0, {
        engine: DD,
        canvas: zD,
        format: RD,
        msaaSamples: fD,
        scRT: ID,
        maxDevicePixelRatio: wD?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: LD++,
        _context: cD,
        _configureFormat: gD,
        _alphaMode: UD,
        _renderingContexts: []
      }
    }

    function gD(DD) {
      const zD = DD._context.getCurrentTexture(),
        wD = DD.scRT;
      wD._colorTexture = zD, wD._colorView = zD.createView({
        format: DD.format
      }), wD._width = zD.width, wD._height = zD.height
    }

    function RD(DD) {
      const zD = DD.canvas;
      if (!rD(zD)) return;
      const wD = DD._w ?? zD.clientWidth,
        pD = DD._h ?? zD.clientHeight;
      if (!(wD > 0 && pD > 0)) return;
      const sD = Math.min(globalThis.devicePixelRatio || 1, DD.maxDevicePixelRatio);
      AD(DD, wD * sD | 0, pD * sD | 0)
    }

    function AD(DD, zD, wD) {
      const pD = DD.canvas,
        sD = 0 | zD,
        KD = 0 | wD;
      if (sD > 0 && KD > 0 && (sD !== pD.width || KD !== pD.height)) {
        pD.width = sD, pD.height = KD, DD.scRT._width = sD, DD.scRT._height = KD;
        for (const zD of DD._renderingContexts) zD._resize?.()
      }
    }
    var UD = 0;

    function fD(DD, zD) {
      return -1 !== DD._renderingContexts.indexOf(zD)
    }

    function ID(DD, zD) {
      return -1 === DD._renderingContexts.indexOf(zD) && (DD._renderingContexts.push(zD), !0)
    }
    var BD = null;
    var GD = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function hD(DD, zD) {
      const KD = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...BD ? BD() : {}
      });
      KD || (0, pD.d)(47);
      const rD = BD?.deviceFeatures?.(KD, zD) ?? function(DD) {
          return GD.filter((zD => DD.features.has(zD)))
        }(KD),
        LD = await KD.requestDevice({
          requiredFeatures: rD,
          requiredLimits: zD?.requiredLimits
        });
      console.log(`${sD} - WebGPU engine`);
      const AD = !!zD?.useHighPrecisionMatrix,
        UD = !!zD?.useFloatingOrigin;
      if (UD && !AD && (0, pD.d)(48), AD) {
        const {
          allocateF64Mat4: DD
        } = await wD.e(357).then((() => wD(61106)));
        0
      }
      let fD, ID, hD, nD;
      if (UD) {
        const [{
          wrapRenderableForFO: DD,
          lightFoVersion: zD,
          applyLightFoOffset: pD
        }, {
          makePackMeshWorld: sD
        }] = await Promise.all([wD.e(358).then((() => wD(61108))), wD.e(359).then((() => wD(61116)))]);
        fD = DD, ID = sD, hD = zD, nD = pD
      }
      const MD = {
          _device: LD
        },
        OD = [MD];
      return Object.assign(MD, {
        engine: MD,
        surfaces: OD,
        _surfaces: OD,
        _device: LD,
        _options: zD,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: AD,
        useFloatingOrigin: UD,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: fD,
        _makePackMeshWorld: ID,
        _lightFoVersion: hD,
        _applyLightFoOffset: nD
      }, cD(MD, DD, zD)), RD(MD), gD(MD), MD
    }

    function nD(DD, zD, wD) {
      AD(DD, zD, wD)
    }

    function MD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DD.surfaces;
      if (wD !== DD.surfaces)
        for (let sD = wD.length; sD--;) wD[sD].engine !== DD && (0, pD.d)(49);
      OD(DD, zD, wD)
    }

    function OD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DD._surfaces,
        pD = 0;
      for (let KD = wD.length; KD--;) pD += wD[KD]._renderingContexts.length;
      if (!pD) return DD.drawCallCount = 0, DD._flushGpuRetirements?.(DD);
      const sD = DD._device.createCommandEncoder({
        label: "frame"
      });
      DD._currentEncoder = sD, DD._currentDelta = zD;
      try {
        DD._gpuTimerBegin?.(sD), pD = 0;
        for (let DD = 0; DD < wD.length; DD++) {
          const zD = wD[DD];
          zD._capturePreFrame?.(zD), gD(zD);
          const sD = zD._renderingContexts;
          for (let DD = 0; DD < sD.length; DD++) {
            const zD = sD[DD];
            zD._update(), pD += zD._drawCallsPre + zD._record()
          }
        }
        const zD = DD._currentEncoder;
        for (let DD = 0; DD < wD.length; DD++) {
          const pD = wD[DD];
          pD._captureService?.(pD, zD)
        }
        DD._gpuTimerEnd?.(zD), DD._cbs[0] = zD.finish(), DD._device.queue.submit(DD._cbs), DD._flushGpuRetirements?.(DD), DD.drawCallCount = pD, DD._gpuTimerResolve?.()
      } finally {
        DD._currentEncoder = void 0
      }
    }
  },
  41551: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      e: () => KD,
      i: () => pD
    });
    var pD = globalThis.GPUTextureUsage,
      sD = globalThis.GPUBufferUsage,
      KD = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41625: (DD, zD, wD) => {
    function pD(DD) {
      sD(DD.splice(0))
    }

    function sD(DD) {
      for (const wD of DD) try {
        wD()
      } catch (zD) {
        console.error("GPU resource retirement failed.", zD)
      }
    }

    function KD(DD, zD) {
      DD._flushGpuRetirements ??= rD, (DD._retirements ??= []).push(zD)
    }

    function rD(DD) {
      const zD = DD._retirements;
      if (!zD) return;
      DD._retirements = null;
      const wD = DD._retiring ??= new Set;
      wD.add(zD), queueMicrotask((() => {
        DD._device.queue.onSubmittedWorkDone().then((() => {
          wD.delete(zD), pD(zD)
        })).catch((() => {}))
      }))
    }
    wD.d(zD, {
      c: () => KD
    })
  },
  41602: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      f: () => rD,
      g: () => LD
    });
    var pD = wD(41551);

    function sD(DD) {
      const zD = DD.size;
      return "canvas" in zD ? zD.canvas : zD
    }

    function KD(DD) {
      return {
        _descriptor: DD,
        _resolveSize: sD,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function rD(DD, zD) {
      if (DD._eager) return void DD._syncEager?.(zD);
      LD(DD);
      const wD = DD._descriptor,
        {
          width: KD,
          height: rD
        } = (DD._resolveSize ?? sD)(wD);
      DD._width = KD, DD._height = rD;
      const cD = zD._device;
      wD.format && (DD._colorTexture = cD.createTexture({
        label: wD.lbl,
        size: {
          width: KD,
          height: rD
        },
        format: wD.format,
        sampleCount: wD.samples,
        usage: pD.i.RENDER_ATTACHMENT | pD.i.TEXTURE_BINDING | pD.i.COPY_SRC | pD.i.COPY_DST
      }), DD._colorView = DD._colorTexture.createView()), wD.dFormat && (DD._depthTexture = cD.createTexture({
        label: wD.lbl,
        size: {
          width: KD,
          height: rD
        },
        format: wD.dFormat,
        sampleCount: wD.samples,
        usage: pD.i.RENDER_ATTACHMENT | pD.i.TEXTURE_BINDING
      }), DD._depthView = DD._depthTexture.createView())
    }

    function LD(DD) {
      if (!DD || DD._eager && !DD._disposeAttachments) return;
      const zD = DD._colorTexture,
        wD = DD._depthTexture;
      if (DD._colorTexture = DD._depthTexture = null, DD._colorView = DD._depthView = null, DD._width = DD._height = 0, DD._disposeAttachments) DD._disposeAttachments(zD, wD);
      else try {
        zD?.destroy()
      } finally {
        !1 !== DD._ownsDepthTexture && wD?.destroy()
      }
    }
  },
  41620: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD,
      f: () => sD,
      g: () => KD
    });
    var pD = Float32Array,
      sD = Float64Array,
      KD = Uint32Array
  },
  41634: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    var pD = 16
  },
  41545: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD
    });
    var pD = null;

    function sD(DD) {
      for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), sD = 1; sD < zD; sD++) wD[sD - 1] = arguments[sD];
      const KD = new Error(pD?.(DD, wD) ?? `#${DD}`);
      throw KD.lite = wD, KD
    }
  },
  41580: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    var pD = wD(41563);

    function sD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const wD = zD.compare,
        sD = zD.lodMinClamp ?? 0,
        KD = zD.lodMaxClamp ?? 32,
        rD = void 0 !== wD || 0 !== sD || 32 !== KD ? `${wD??""}:${sD}:${KD}` : "";
      return (0, pD.c)(DD, zD, rD)
    }
  },
  41554: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD
    });
    var pD = null;

    function sD(DD) {
      const zD = pD ??= new WeakMap;
      zD.set(DD, (zD.get(DD) ?? 0) + 1)
    }

    function KD(DD) {
      sD(DD.texture)
    }
  },
  41563: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD
    });
    var pD = null,
      sD = "nearest",
      KD = "clamp-to-edge",
      rD = {
        minFilter: sD,
        magFilter: sD,
        mipmapFilter: sD,
        addressModeU: KD,
        addressModeV: KD,
        addressModeW: KD,
        maxAnisotropy: 1
      };

    function LD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const sD = DD._device,
        KD = pD ??= new WeakMap;
      let LD = KD.get(sD);
      LD || KD.set(sD, LD = new Map);
      let cD = wD;
      for (const pD in rD) {
        const DD = pD;
        cD += `:${zD[DD]??rD[DD]}`
      }
      let gD = LD.get(cD);
      return gD || LD.set(cD, gD = sD.createSampler(zD)), gD
    }
  },
  41611: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => WD,
      f: () => yD
    });
    var pD = wD(41602),
      sD = wD(41595);

    function KD(DD, zD) {
      zD._passes.length = 0, DD._currentProcessedTask = zD;
      try {
        zD.record()
      } finally {
        DD._currentProcessedTask = null
      }
    }
    var rD = wD(41620);

    function LD(DD) {
      const zD = DD.worldMatrixVersion;
      if (DD._viewVer === zD) return DD._viewCache;
      const wD = DD._viewCache,
        pD = DD.worldMatrix,
        sD = DD._useFloatingOrigin,
        KD = sD ? 0 : pD[12],
        rD = sD ? 0 : pD[13],
        LD = sD ? 0 : pD[14];
      return wD[0] = pD[0], wD[1] = pD[4], wD[2] = pD[8], wD[3] = 0, wD[4] = pD[1], wD[5] = pD[5], wD[6] = pD[9], wD[7] = 0, wD[8] = pD[2], wD[9] = pD[6], wD[10] = pD[10], wD[11] = 0, wD[12] = -(pD[0] * KD + pD[1] * rD + pD[2] * LD), wD[13] = -(pD[4] * KD + pD[5] * rD + pD[6] * LD), wD[14] = -(pD[8] * KD + pD[9] * rD + pD[10] * LD), wD[15] = 1, DD._viewVer = zD, wD
    }
    var cD = null;

    function gD(DD) {
      return DD._projFov === DD.fov && DD._projNear === DD.nearPlane && DD._projFar === DD.farPlane || (DD._projFov = DD.fov, DD._projNear = DD.nearPlane, DD._projFar = DD.farPlane, DD._projRev = (DD._projRev ?? 0) + 1), DD.worldMatrixVersion + (DD._projRev ?? 0)
    }

    function RD(DD, zD) {
      const wD = gD(DD);
      if (DD._projVer === wD && DD._projAspect === zD) return DD._projCache;
      const pD = DD._projCache;
      return null !== cD && DD.ortho ? cD(DD, zD, pD) : function(DD, zD, wD, pD, sD) {
        const KD = 1 / Math.tan(.5 * zD),
          rD = sD - pD;
        DD[0] = KD / wD, DD[5] = KD, DD[10] = -pD / rD, DD[11] = 1, DD[14] = sD * pD / rD
      }(pD, DD.fov, zD, DD.nearPlane, DD.farPlane), DD._projVer = wD, DD._projAspect = zD, pD
    }
    var AD = wD(41551);

    function UD(DD, zD, wD) {
      return DD._device.createBuffer({
        label: wD,
        size: (pD = zD, sD = 16, Math.ceil(pD / sD) * sD),
        usage: AD.b.UNIFORM | AD.b.COPY_DST
      });
      var pD, sD
    }
    var fD = wD(41625),
      ID = null;

    function BD(DD) {
      const zD = DD._device,
        wD = ID ??= new WeakMap;
      let pD = wD.get(zD);
      return pD || (pD = zD.createBindGroupLayout({
        label: "oB",
        entries: [{
          binding: 0,
          visibility: AD.e.VERTEX | AD.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: AD.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), wD.set(zD, pD)), pD
    }

    function GD(DD, zD, wD) {
      const pD = DD._device,
        sD = UD(DD, zD.byteLength, wD);
      try {
        pD.queue.writeBuffer(sD, 0, zD.buffer, zD.byteOffset, zD.byteLength)
      } catch (KD) {
        throw sD.destroy(), KD
      }
      return sD
    }
    var hD = wD(41634),
      nD = new rD.g(1),
      MD = new rD.d(nD.buffer);

    function OD(DD) {
      let zD = 0;
      for (const wD of DD) zD += wD._lightVersion ?? 0;
      return zD
    }

    function JD(DD, zD) {
      DD.fill(0);
      let wD = 0;
      for (const pD of zD) {
        if (wD >= hD.d) break;
        pD._writeLightUbo && (pD._writeLightUbo(DD, 4 + 16 * wD), wD++)
      }
      nD[0] = wD, DD[0] = MD[0]
    }

    function ED(DD, zD) {
      let wD = zD._lightGpuState;
      const pD = 16 + 16 * hD.d * 4;
      if (wD && wD._byteSize === pD) return wD;
      const sD = !wD;
      wD?._buffer.destroy();
      const KD = new rD.d(pD / 4);
      return JD(KD, zD.lights), DD._applyLightFoOffset?.(KD, zD), wD = {
        _buffer: GD(DD, KD),
        _scratch: KD,
        vy: OD(zD.lights) + (DD._lightFoVersion?.(zD) ?? 0),
        _listVersion: zD._lightListVersion ?? 0,
        _lightCount: zD.lights.length,
        _byteSize: pD
      }, zD._lightGpuState = wD, sD && zD._disposables.push((() => {
        zD._lightGpuState?._buffer.destroy(), zD._lightGpuState = void 0
      })), wD
    }

    function QD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const sD = zD;
      if (0 === pD && 16 === sD.length) return void DD.set(sD, wD);
      const KD = pD,
        rD = wD;
      DD[rD + 0] = sD[KD + 0], DD[rD + 1] = sD[KD + 1], DD[rD + 2] = sD[KD + 2], DD[rD + 3] = sD[KD + 3], DD[rD + 4] = sD[KD + 4], DD[rD + 5] = sD[KD + 5], DD[rD + 6] = sD[KD + 6], DD[rD + 7] = sD[KD + 7], DD[rD + 8] = sD[KD + 8], DD[rD + 9] = sD[KD + 9], DD[rD + 10] = sD[KD + 10], DD[rD + 11] = sD[KD + 11], DD[rD + 12] = sD[KD + 12], DD[rD + 13] = sD[KD + 13], DD[rD + 14] = sD[KD + 14], DD[rD + 15] = sD[KD + 15]
    }

    function XD(DD, zD, wD, pD, sD) {
      DD.fill(0);
      const KD = function(DD, zD) {
          const wD = gD(DD);
          if (DD._vpVer === wD && DD._vpAspect === zD) return DD._vpCache;
          const pD = DD._vpCache;
          return function(DD, zD, wD, pD, sD, KD) {
            const rD = wD[pD],
              LD = wD[pD + 1],
              cD = wD[pD + 2],
              gD = wD[pD + 3],
              RD = wD[pD + 4],
              AD = wD[pD + 5],
              UD = wD[pD + 6],
              fD = wD[pD + 7],
              ID = wD[pD + 8],
              BD = wD[pD + 9],
              GD = wD[pD + 10],
              hD = wD[pD + 11],
              nD = wD[pD + 12],
              MD = wD[pD + 13],
              OD = wD[pD + 14],
              JD = wD[pD + 15];
            let ED = sD[KD],
              QD = sD[KD + 1],
              XD = sD[KD + 2],
              VD = sD[KD + 3];
            DD[zD] = rD * ED + RD * QD + ID * XD + nD * VD, DD[zD + 1] = LD * ED + AD * QD + BD * XD + MD * VD, DD[zD + 2] = cD * ED + UD * QD + GD * XD + OD * VD, DD[zD + 3] = gD * ED + fD * QD + hD * XD + JD * VD, ED = sD[KD + 4], QD = sD[KD + 5], XD = sD[KD + 6], VD = sD[KD + 7], DD[zD + 4] = rD * ED + RD * QD + ID * XD + nD * VD, DD[zD + 5] = LD * ED + AD * QD + BD * XD + MD * VD, DD[zD + 6] = cD * ED + UD * QD + GD * XD + OD * VD, DD[zD + 7] = gD * ED + fD * QD + hD * XD + JD * VD, ED = sD[KD + 8], QD = sD[KD + 9], XD = sD[KD + 10], VD = sD[KD + 11], DD[zD + 8] = rD * ED + RD * QD + ID * XD + nD * VD, DD[zD + 9] = LD * ED + AD * QD + BD * XD + MD * VD, DD[zD + 10] = cD * ED + UD * QD + GD * XD + OD * VD, DD[zD + 11] = gD * ED + fD * QD + hD * XD + JD * VD, ED = sD[KD + 12], QD = sD[KD + 13], XD = sD[KD + 14], VD = sD[KD + 15], DD[zD + 12] = rD * ED + RD * QD + ID * XD + nD * VD, DD[zD + 13] = LD * ED + AD * QD + BD * XD + MD * VD, DD[zD + 14] = cD * ED + UD * QD + GD * XD + OD * VD, DD[zD + 15] = gD * ED + fD * QD + hD * XD + JD * VD
          }(pD, 0, RD(DD, zD), 0, LD(DD), 0), DD._vpVer = wD, DD._vpAspect = zD, pD
        }(pD, sD),
        rD = LD(pD),
        cD = pD.worldMatrix;
      QD(DD, KD, 0), QD(DD, rD, 16), zD.useFloatingOrigin ? (DD[32] = 0, DD[33] = 0, DD[34] = 0) : (DD[32] = cD[12], DD[33] = cD[13], DD[34] = cD[14]), DD[87] = zD.canvas.width;
      const AD = wD.imageProcessing;
      DD[76] = AD.exposure, DD[77] = AD.contrast, DD[78] = wD._envTextures?.lodGenerationScale ?? .8, DD[79] = +AD.toneMappingEnabled, DD[37] = zD.canvas.height
    }

    function VD(DD, zD) {
      return {
        _renderables: DD,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: zD
      }
    }

    function PD(DD, zD, wD) {
      DD.clr ??= !0;
      const sD = DD.rt._descriptor,
        KD = DD.depth?._descriptor,
        cD = {
          _colorFormat: sD.format,
          _depthStencilFormat: KD?.dFormat ?? sD.dFormat,
          _depthCompare: sD.depthCompare ?? KD?.depthCompare,
          _sampleCount: sD.samples
        },
        RD = {
          loadOp: "clear",
          storeOp: "store"
        },
        AD = {
          ...VD([], -1),
          name: DD.name,
          _config: DD,
          _ownsTargets: !DD.sharedRt,
          engine: zD,
          oB: wD,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [RD]
          },
          _colorAttachment: RD,
          _sceneUBO: UD(zD, 368),
          _suData: new rD.d(92),
          _sceneUboCacheKey: [],
          _targetSignature: cD,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (AD._disposed) throw new Error("RenderTask has been disposed.");
            AD._recordExplicit ? AD._recordExplicit(AD, !0) : TD(AD, !1 !== DD.autoMirror ? wD._renderables.slice() : AD._renderables, !0)
          },
          execute: () => function(DD, zD, wD) {
            if (!1 === DD.enabled) return 0;
            const pD = DD.oB;
            ! function(DD, zD, wD) {
              const pD = DD.oB;
              !1 !== DD._config.autoMirror && DD._lastVersion !== pD._renderableVersion && TD(DD, pD._renderables.slice());
              jD(DD, zD);
              const sD = DD._updateContext,
                KD = DD._config.cam ?? pD.camera;
              wD._colorFormat && (DD._config._skipClusteredLights || pD._clusteredLightUpdater?.(KD, sD.targetWidth, sD.targetHeight), function(DD, zD) {
                const wD = ED(DD, zD),
                  pD = OD(zD.lights) + (DD._lightFoVersion?.(zD) ?? 0),
                  sD = zD._lightListVersion ?? 0;
                pD === wD.vy && sD === wD._listVersion && zD.lights.length === wD._lightCount || (wD.vy = pD, wD._listVersion = sD, wD._lightCount = zD.lights.length, JD(wD._scratch, zD.lights), DD._applyLightFoOffset?.(wD._scratch, zD), DD._device.queue.writeBuffer(wD._buffer, 0, wD._scratch)), wD._buffer
              }(zD, pD));
              (function(DD, zD, wD, pD) {
                if (!pD) return;
                const sD = pD.viewport,
                  KD = DD._config.rt,
                  rD = (DD._config.cs ? zD.canvas.width / zD.canvas.height : KD._width / KD._height) * (sD ? sD.width / sD.height : 1),
                  LD = wD.fog,
                  cD = wD.imageProcessing,
                  RD = gD(pD),
                  AD = wD._envTextures,
                  UD = DD._sceneUboCacheKey;
                if (UD[0] === pD && UD[1] === LD && UD[2] === RD && UD[3] === rD && UD[4] === cD.exposure && UD[5] === cD.contrast && UD[6] === AD) return;
                UD[0] = pD, UD[1] = LD, UD[2] = RD, UD[3] = rD, UD[4] = cD.exposure, UD[5] = cD.contrast, UD[6] = AD;
                const fD = DD._suData;
                XD(fD, zD, wD, pD, rD);
                const ID = wD._sceneUboContributors;
                if (ID)
                  for (const gD of ID) gD(fD, wD);
                zD._device.queue.writeBuffer(DD._sceneUBO, 0, fD)
              })(DD, zD, pD, KD), sD.Qq = KD, DD._batchState?._reset(), dD(DD._opaqueBindings, sD), dD(DD._directBindings, sD), dD(DD._transparentBindings, sD), DD._batchState?._flush(zD),
                function(DD, zD) {
                  const wD = DD._transparentBindings;
                  if (wD.length <= 1 || !zD) return;
                  const pD = LD(zD);
                  for (const sD of wD) {
                    const DD = sD.renderable._worldCenter;
                    sD._sortDistance = DD ? DD[0] * pD[2] + DD[1] * pD[6] + DD[2] * pD[10] + pD[14] : 0
                  }
                  wD.sort(CD)
                }(DD, KD)
            }(DD, zD, wD);
            const sD = DD._colorAttachment,
              KD = DD._config;
            KD.rt._colorView && (KD.rt === pD.surface.scRT && (sD.view = KD.rt._colorView), sD.resolveTarget = KD.rst?._colorView ?? void 0, sD.clearValue = KD.clrColor ?? pD.clearColor, sD.loadOp = KD.clr ? "clear" : "load");
            if (DD._executeWithTransmission) return DD._executeWithTransmission(wD._sampleCount);
            const rD = zD._currentEncoder.beginRenderPass(DD._renderPassDescriptor),
              cD = bD(DD, rD);
            return rD.end(), cD
          }(AD, zD, cD),
          dispose() {
            if (AD._disposed) return;
            AD._disposed = !0;
            const zD = AD._pendingMeshes;
            zD && (zD.length = 0);
            for (const DD of AD._renderables) AD._retireRenderable?.(AD.engine, DD);
            AD._passes.length = AD._opaqueBindings.length = AD._directBindings.length = 0, AD._transparentBindings.length = AD._renderables.length = AD._ob.length = 0, AD._ownsTargets && ((0, pD.g)(DD.rt), (0, pD.g)(DD.rst)), DD.depth?._eager || (0, pD.g)(DD.depth);
            const wD = AD._sceneUBO;
            (0, fD.c)(AD.engine, (() => wD.destroy())), AD._batchState?._release(AD.engine), AD._batchState = void 0
          }
        };
      return AD
    }

    function CD(DD, zD) {
      return zD._sortDistance - DD._sortDistance || DD.renderable.order - zD.renderable.order
    }

    function xD(DD, zD) {
      return DD.renderable.order - zD.renderable.order
    }

    function TD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD._renderables,
        wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        sD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        KD = arguments.length > 4 ? arguments[4] : void 0;
      const rD = DD._config,
        LD = rD.rt,
        cD = DD._batchState,
        gD = VD(zD, DD.oB._renderableVersion);
      if (wD) {
        const zD = (zD, wD) => {
          zD && (wD || DD._ownsTargets || zD._eager) && (0, pD.f)(zD, DD.engine)
        };
        zD(LD), LD._descriptor.samples > 1 && zD(rD.rst), zD(rD.depth, !0)
      }
      const {
        _opaqueBindings: RD,
        _directBindings: AD,
        _transparentBindings: UD
      } = gD;
      try {
        for (const wD of zD) {
          const zD = wD.bind(DD.engine, DD._targetSignature);
          gD._batchState = DD._targetSignature._collectBatches?.(gD._batchState, zD), wD.isTransparent || wD._transmissive ? UD.push(zD) : wD._direct ? AD.push(zD) : RD.push(zD)
        }
        RD.sort(xD), AD.sort(xD), wD && jD(DD, DD.engine, !1)
      } catch (fD) {
        throw gD._batchState?._release(void 0, KD ?? [cD]), fD
      }
      return wD && (! function(DD, zD) {
        const wD = DD._config,
          pD = DD._colorAttachment;
        pD.view = zD._colorView, DD._renderPassDescriptor.colorAttachments = zD._colorView ? [pD] : [];
        const sD = wD.depth ?? zD,
          KD = sD._depthView;
        let rD;
        if (KD) {
          const DD = sD._descriptor,
            zD = (wD.depth ? sD._eager : !1 === wD.depthClear) ? "load" : "clear";
          rD = {
            view: KD,
            depthClearValue: DD.depthClearValue ?? 0,
            depthLoadOp: zD,
            depthStoreOp: "store"
          }, DD.dFormat?.includes("stencil") && (rD.stencilClearValue = 0, rD.stencilLoadOp = zD, rD.stencilStoreOp = "store")
        }
        DD._renderPassDescriptor.depthStencilAttachment = rD
      }(DD, LD), DD._updateContext.targetWidth = LD._width, DD._updateContext.targetHeight = LD._height), sD && (Object.assign(DD, gD), cD?._release(DD.engine, [gD._batchState])), gD
    }

    function bD(DD, zD) {
      const wD = DD.engine,
        pD = DD._config,
        KD = pD.rt,
        rD = DD.oB,
        LD = DD._opaqueBindings,
        cD = DD._ob,
        gD = DD._sceneBG;
      if (function(DD, zD, wD, pD) {
          const sD = zD?.viewport;
          if (!sD) return;
          const KD = Math.floor(sD.x * wD),
            rD = Math.floor((1 - sD.y - sD.height) * pD),
            LD = Math.ceil((sD.x + sD.width) * wD) - KD,
            cD = Math.ceil((1 - sD.y) * pD) - rD;
          DD.setViewport(KD, rD, LD, cD, 0, 1), DD.setScissorRect(KD, rD, LD, cD)
        }(zD, pD.cam ?? rD.camera, KD._width, KD._height), zD.setBindGroup(0, gD), DD._lastVis !== sD.e || !cD.length) {
        const zD = KD._descriptor,
          pD = wD._device.createRenderBundleEncoder({
            colorFormats: zD.format ? [zD.format] : [],
            depthStencilFormat: DD._targetSignature._depthStencilFormat,
            sampleCount: zD.samples
          });
        pD.setBindGroup(0, gD), SD(pD, LD, wD), cD[0] = pD.finish(), DD._lastVis = sD.e
      }
      let RD = LD.length;
      return zD.executeBundles(cD), zD.setBindGroup(0, gD), RD += SD(zD, DD._directBindings, wD), RD += SD(zD, DD._transparentBindings, wD), RD
    }

    function jD(DD, zD) {
      let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const pD = ED(zD, DD.oB)._buffer;
      if (pD === DD._lightsUBO) return;
      const sD = zD._device.createBindGroup({
        layout: BD(zD),
        entries: [{
          binding: 0,
          resource: {
            buffer: DD._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: pD
          }
        }]
      });
      DD._lightsUBO = pD, DD._sceneBG = sD, wD && (DD._ob = [])
    }

    function dD(DD, zD) {
      for (const wD of DD) wD.update?.(zD)
    }

    function SD(DD, zD, wD) {
      let pD = null,
        sD = 0;
      for (const KD of zD) {
        const zD = KD.renderable.mesh;
        zD && !1 === zD.visible || (KD.pipeline !== pD && (DD.setPipeline(KD.pipeline), pD = KD.pipeline), sD += KD.draw(DD, wD))
      }
      return sD
    }

    function iD(DD) {
      const zD = DD._materialSwapQueue;
      if (!zD[0] || DD._runtimeBuilds?.w) return;
      let pD, sD, KD;
      const rD = DD._renderables;
      for (const wD of zD) {
        const zD = wD.material;
        if (!zD) continue;
        const LD = wD._runtimeThinBuild;
        if (LD) {
          sD = LD(DD, wD, sD);
          continue
        }
        const cD = DD._groups.get(zD._buildGroup),
          gD = cD?.r;
        if (!gD) {
          (KD ??= []).push(wD);
          continue
        }
        if (cD._w?.(wD)) {
          (KD ??= []).push([wD, zD]);
          continue
        }
        const RD = DD._meshDisposables.get(wD);
        RD && (DD._meshDisposables.delete(wD), (0, fD.c)(DD.surface.engine, (() => RD.forEach((DD => DD())))));
        const AD = cD.o;
        let UD;
        for (let DD = rD.length; DD--;) rD[DD].mesh === wD && (UD = rD.splice(DD, 1)[0]);
        zD._csmGen = -~zD._csmGen;
        const ID = gD(DD, wD);
        if (AD) {
          const DD = AD.indexOf(UD);
          DD < 0 ? AD.push(ID) : AD[DD] = ID
        }
        pD = rD.push(ID)
      }
      if (pD && (rD.sort(((DD, zD) => DD.order - zD.order)), DD._renderableVersion++, DD._materialEpoch++), zD.length = 0, !KD) return sD;
      const LD = KD;
      return wD.e(363).then((() => wD(61140))).then((zD => {
        let {
          C: wD
        } = zD;
        return wD(DD, LD, sD)
      }), (zD => {
        const wD = DD._runtimeBuilds;
        wD ? wD._x(zD) : console.error(zD)
      }))
    }
    var lD = null;

    function WD(DD, zD) {
      const wD = DD.engine,
        sD = {
          _kind: "oB",
          surface: DD,
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
            wD.useFloatingOrigin && sD.camera && !sD.camera._useFloatingOrigin && (sD.camera._useFloatingOrigin = !0, sD.camera._viewVer = -1, sD.camera._vpVer = -1);
            const DD = sD.fixedDeltaMs > 0 ? sD.fixedDeltaMs : wD._currentDelta,
              zD = wD._currentEncoder;
            let pD = 0;
            for (const wD of sD._beforeRender) wD(DD);
            sD._materialSwapQueue.length && iD(sD);
            for (const KD of sD._prePasses) pD += KD.execute(zD, wD);
            for (const KD of sD._uniformUpdaters) KD.update(wD);
            sD._drawCallsPre = pD
          },
          _record: () => sD._frameGraph.execute(),
          _resize() {
            sD._frameGraph.build()
          }
        },
        rD = function() {
          const DD = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let zD = 0; zD < DD._tasks.length; zD++) KD(DD, DD._tasks[zD]);
              for (const zD of DD._tasks)
                for (const DD of zD._passes) DD._initialize()
            },
            execute() {
              let zD = 0;
              for (const wD of DD._tasks)
                if (!1 !== wD.executionEnabled)
                  if (wD.execute) zD += wD.execute();
                  else
                    for (const DD of wD._passes) zD += DD._execute();
              return zD
            },
            dispose() {
              for (const zD of DD._tasks) zD.dispose();
              DD._tasks.length = 0, DD._currentProcessedTask = null
            }
          };
          return DD
        }();
      if (sD._frameGraph = rD, !1 !== zD?.defaultRenderTask) {
        const zD = DD.msaaSamples > 1,
          KD = zD ? (0, pD.e)({
            lbl: "scene-color",
            format: DD.format,
            dFormat: "depth24plus-stencil8",
            samples: DD.msaaSamples,
            size: DD
          }) : DD.scRT,
          LD = zD ? void 0 : (0, pD.e)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: DD
          });
        ! function(DD, zD) {
          DD._tasks.push(zD)
        }(rD, PD({
          name: "oB",
          rt: KD,
          rst: zD ? DD.scRT : void 0,
          depth: LD
        }, wD, sD))
      }
      return sD._disposables.push((() => rD.dispose())), sD
    }
    async function ND(DD) {
      const zD = DD;
      for (zD._built || (zD._materialSwapQueue.length = 0); zD._deferredBuilders.length;) {
        const DD = zD._deferredBuilders.splice(0);
        await Promise.all(DD.map((DD => DD())))
      }
      await iD(zD), lD?.get(zD)?.() || (zD._runtimeBuilds?._e(), zD._renderableVersion++, zD._built = !0), await (zD._rebuildHook?.(zD))
    }
    var ZD = null;
    async function yD(DD) {
      const zD = DD,
        pD = zD.surface;
      (0, sD.k)(pD, zD) || (await ND(DD), zD._renderables.sort(kD), await Promise.all(zD._frameGraph._tasks.map((DD => DD._preload?.()))), ZD && await ZD(zD), zD._frameGraph.build(), pD._renderingContexts[0] && (await wD.e(361).then((() => wD(61129)))).configureSwapchainOverlayScene(pD, zD), lD?.get(zD)?.() || (0, sD.n)(pD, zD))
    }
    var kD = (DD, zD) => DD.order - zD.order
  },
  41588: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => gD,
      e: () => RD
    });
    var pD = wD(41545),
      sD = wD(41551),
      KD = wD(41554),
      rD = wD(41563),
      LD = wD(41570),
      cD = wD(41578);

    function gD(DD, zD, wD) {
      let LD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (zD < 1 || wD < 1) && (0, pD.d)(676, zD, wD);
      const gD = DD._device,
        RD = LD.mipMaps ?? !1,
        AD = LD.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        UD = RD ? (0, cD.b)(zD, wD) : 1,
        fD = gD.createTexture({
          size: {
            width: zD,
            height: wD
          },
          format: AD,
          mipLevelCount: UD,
          usage: sD.i.TEXTURE_BINDING | sD.i.COPY_DST | sD.i.RENDER_ATTACHMENT
        }),
        ID = {
          addressModeU: LD.addressModeU ?? "clamp-to-edge",
          addressModeV: LD.addressModeV ?? "clamp-to-edge",
          minFilter: LD.minFilter ?? "linear",
          magFilter: LD.magFilter ?? "linear",
          mipmapFilter: RD ? "linear" : "nearest"
        },
        BD = (0, rD.c)(DD, ID),
        GD = {
          texture: fD,
          view: fD.createView(),
          sampler: BD,
          width: zD,
          height: wD
        };
      return (0, KD.b)(GD), DD._dlr && DD._dlr.t(GD, {
        kind: "dynamic",
        width: zD,
        height: wD,
        format: AD,
        levels: UD,
        samplerDesc: ID,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), GD
    }

    function RD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const sD = pD.invertY ?? !0,
        KD = pD.premultiplyAlpha ?? !1;
      DD._device.queue.copyExternalImageToTexture({
        source: wD,
        flipY: sD
      }, {
        texture: zD.texture,
        premultipliedAlpha: KD
      }, [zD.width, zD.height]);
      const rD = zD._recoverySource;
      rD && "dynamic" === rD.kind && (rD.source = wD, rD.flipY = sD, rD.premultipliedAlpha = KD), zD.texture.mipLevelCount > 1 && (0, LD.generateMipmaps)(DD, zD.texture)
    }
  },
  41582: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => cD
    });
    var pD = wD(41545),
      sD = wD(41551),
      KD = wD(41554),
      rD = wD(41563),
      LD = wD(41578);
    async function cD(DD, zD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [gD, RD] = function(DD) {
        const zD = DD,
          wD = [
            [zD.displayWidth, zD.displayHeight],
            [zD.videoWidth, zD.videoHeight],
            [zD.naturalWidth, zD.naturalHeight],
            [zD.width, zD.height]
          ];
        for (const [pD, sD] of wD)
          if (void 0 !== pD && void 0 !== sD && Number.isInteger(pD) && Number.isInteger(sD) && pD > 0 && sD > 0) return [pD, sD];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(zD), [AD, UD] = function(DD, zD, wD) {
        if (void 0 === wD) return [DD, zD];
        if (!Number.isInteger(wD) || wD < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${wD})`);
        if (Math.max(DD, zD) <= wD) return [DD, zD];
        const pD = wD / Math.max(DD, zD);
        return DD >= zD ? [wD, Math.max(1, Math.round(zD * pD))] : [Math.max(1, Math.round(DD * pD)), wD]
      }(gD, RD, cD.maxDimension), fD = cD.mipMaps ?? !0, ID = cD.premultiplyAlpha ?? !1;
      let BD = zD,
        GD = null;
      const hD = {
        texture: null
      };
      try {
        AD === gD && UD === RD || (GD = await createImageBitmap(zD, {
          resizeWidth: AD,
          resizeHeight: UD,
          resizeQuality: "high",
          premultiplyAlpha: ID ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), BD = GD);
        const nD = DD._device,
          MD = cD.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          OD = fD ? (0, LD.b)(AD, UD) : 1,
          JD = OD > 1 ? (await Promise.resolve().then((() => wD(41570)))).generateMipmaps : null,
          ED = {
            addressModeU: cD.addressModeU ?? "repeat",
            addressModeV: cD.addressModeV ?? "repeat",
            minFilter: cD.minFilter ?? "linear",
            magFilter: cD.magFilter ?? "linear",
            mipmapFilter: fD ? "linear" : "nearest"
          };
        ED.maxAnisotropy = "linear" === ED.minFilter && "linear" === ED.magFilter && "linear" === ED.mipmapFilter ? 4 : 1;
        const QD = cD.invertY ?? !0,
          XD = async zD => {
            let wD;
            nD.pushErrorScope("validation"), nD.pushErrorScope("out-of-memory");
            let KD = null;
            try {
              const wD = hD.texture = nD.createTexture({
                size: {
                  width: AD,
                  height: UD
                },
                format: MD,
                mipLevelCount: OD,
                usage: sD.i.TEXTURE_BINDING | sD.i.COPY_DST | sD.i.RENDER_ATTACHMENT
              });
              nD.queue.copyExternalImageToTexture({
                source: zD,
                flipY: QD
              }, {
                texture: wD,
                premultipliedAlpha: ID
              }, {
                width: AD,
                height: UD
              }), JD && JD(DD, wD), KD = (0, rD.c)(DD, ED)
            } catch (fD) {
              wD = fD
            }
            const [LD, cD] = await Promise.all([nD.popErrorScope(), nD.popErrorScope()]);
            if (wD) throw wD;
            const gD = cD ?? LD;
            if (gD) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${gD.message}`, {
              cause: gD
            });
            const RD = hD.texture;
            return RD && KD || (0, pD.d)(677), {
              texture: RD,
              view: RD.createView(),
              sampler: KD,
              width: AD,
              height: UD
            }
          }, VD = await (DD._dlr?.x(BD, AD, UD, MD, OD, ED, QD, ID, XD)) ?? await XD(BD);
        return (0, KD.b)(VD), VD
      } catch (nD) {
        throw hD.texture?.destroy(), nD
      } finally {
        GD?.close()
      }
    }
  },
  41570: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      generateMipmaps: () => fD,
      recordMipmaps: () => ID
    });
    var pD = wD(41551),
      sD = wD(41563),
      KD = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var rD = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      LD = null,
      cD = null,
      gD = null,
      RD = null,
      AD = null;

    function UD(DD) {
      const zD = DD._device;
      zD !== AD && (LD?.clear(), LD = null, cD = null, gD = null, RD = null, AD = null, AD = zD), cD ??= zD.createShaderModule({
        code: rD
      }), gD ??= function(DD) {
        return (0, sD.c)(DD, KD)
      }(DD), RD ??= zD.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: pD.e.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: pD.e.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function fD(DD, zD, wD) {
      const pD = DD._device,
        sD = pD.createCommandEncoder();
      ID(DD, zD, sD, wD), pD.queue.submit([sD.finish()])
    }

    function ID(DD, zD, wD, pD) {
      if (zD.mipLevelCount <= 1) return;
      const sD = DD._device,
        KD = function(DD, zD) {
          const wD = DD._device;
          UD(DD), LD ??= new Map;
          let pD = LD.get(zD);
          return pD || (pD = wD.createRenderPipeline({
            layout: wD.createPipelineLayout({
              bindGroupLayouts: [RD]
            }),
            vertex: {
              module: cD,
              entryPoint: "vs"
            },
            fragment: {
              module: cD,
              entryPoint: "fs",
              targets: [{
                format: zD
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), LD.set(zD, pD)), pD
        }(DD, zD.format),
        rD = null != pD ? {
          dimension: "2d",
          baseArrayLayer: pD,
          arrayLayerCount: 1
        } : {};
      for (let LD = 1; LD < zD.mipLevelCount; LD++) {
        const DD = zD.createView({
            baseMipLevel: LD - 1,
            mipLevelCount: 1,
            ...rD
          }),
          pD = zD.createView({
            baseMipLevel: LD,
            mipLevelCount: 1,
            ...rD
          }),
          cD = sD.createBindGroup({
            layout: RD,
            entries: [{
              binding: 0,
              resource: DD
            }, {
              binding: 1,
              resource: gD
            }]
          }),
          AD = wD.beginRenderPass({
            colorAttachments: [{
              view: pD,
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
        AD.setPipeline(KD), AD.setBindGroup(0, cD), AD.draw(3), AD.end()
      }
    }
  },
  41578: (DD, zD, wD) => {
    function pD(DD, zD) {
      return Math.floor(Math.log2(Math.max(DD, zD))) + 1
    }
    wD.d(zD, {
      b: () => pD
    })
  },
  41542: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => gD,
      i: () => RD
    });
    var pD = wD(41545),
      sD = wD(41551),
      KD = wD(41554),
      rD = wD(41563),
      LD = wD(41570),
      cD = wD(41578);

    function gD(DD, zD, wD, LD) {
      let gD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (zD < 1 || wD < 1 || LD < 1) && (0, pD.d)(722, zD, wD, LD);
      const RD = DD._device,
        AD = gD.mipMaps ?? !0,
        UD = gD.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        fD = RD.createTexture({
          size: {
            width: zD,
            height: wD,
            depthOrArrayLayers: LD
          },
          dimension: "2d",
          format: UD,
          mipLevelCount: AD ? (0, cD.b)(zD, wD) : 1,
          usage: sD.i.TEXTURE_BINDING | sD.i.COPY_DST | sD.i.RENDER_ATTACHMENT
        }),
        ID = (0, rD.c)(DD, {
          addressModeU: gD.addressModeU ?? "repeat",
          addressModeV: gD.addressModeV ?? "repeat",
          minFilter: gD.minFilter ?? "linear",
          magFilter: gD.magFilter ?? "linear",
          mipmapFilter: AD ? "linear" : "nearest"
        }),
        BD = {
          texture: fD,
          view: fD.createView({
            dimension: "2d-array"
          }),
          sampler: ID,
          width: zD,
          height: wD,
          layers: LD
        };
      return (0, KD.b)(BD), BD
    }

    function RD(DD, zD, wD, sD) {
      let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (wD < 0 || wD >= zD.layers || (0 | wD) !== wD) && (0, pD.d)(723, zD.layers, wD);
      const rD = KD.invertY ?? !0,
        cD = KD.premultiplyAlpha ?? !1;
      DD._device.queue.copyExternalImageToTexture({
        source: sD,
        flipY: rD
      }, {
        texture: zD.texture,
        origin: [0, 0, wD],
        premultipliedAlpha: cD
      }, [zD.width, zD.height, 1]), zD.texture.mipLevelCount > 1 && (0, LD.generateMipmaps)(DD, zD.texture, wD)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);