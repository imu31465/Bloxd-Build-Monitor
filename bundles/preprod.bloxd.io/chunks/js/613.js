export const id = 613;
export const ids = [613];
export const modules = {
  44834: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB
    });
    var YB = GB(44824),
      DB = GB(44838);

    function QB(BB) {
      (0, DB.d)(BB), (0, YB.r)(BB);
      const OB = BB._surfaces;
      for (const GB of OB) GB._renderingContexts.length = 0, GB._ro?.disconnect(), GB._context.unconfigure();
      OB.length = 0;
      try {
        BB._disposeManagedResources?.(), BB._disposeStorageBuffers?.()
      } finally {
        BB._device.destroy()
      }
    }
  },
  44824: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => zB,
      e: () => NB,
      i: () => lB,
      l: () => pB,
      p: () => AB,
      q: () => RB,
      r: () => WB
    });
    var YB = GB(44780);
    var DB = "Babylon Lite v1.32.0",
      QB = GB(44826);

    function oB(BB) {
      return "clientWidth" in BB
    }
    var jB = 1;

    function yB(BB, OB, GB) {
      const yB = OB.getContext("webgpu");
      yB || (0, YB.d)(54), oB(OB) && OB.setAttribute("data-engine", DB);
      const JB = GB?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        MB = GB?.srgb ? (PB = JB).endsWith("-srgb") ? PB : `${PB}-srgb` : JB;
      var PB;
      const zB = GB?.alphaMode ?? "opaque";
      yB.configure({
        device: BB._device,
        format: JB,
        alphaMode: zB,
        viewFormats: [MB]
      });
      const lB = 1 === GB?.msaaSamples ? 1 : 4,
        pB = (0, QB.e)({
          lbl: "swapchain",
          format: MB,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return pB._eager = !0, {
        engine: BB,
        canvas: OB,
        format: MB,
        msaaSamples: lB,
        scRT: pB,
        maxDevicePixelRatio: GB?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: jB++,
        _context: yB,
        _configureFormat: JB,
        _alphaMode: zB,
        _renderingContexts: []
      }
    }

    function JB(BB) {
      const OB = BB._context.getCurrentTexture(),
        GB = BB.scRT;
      GB._colorTexture = OB, GB._colorView = OB.createView({
        format: BB.format
      }), GB._width = OB.width, GB._height = OB.height
    }

    function MB(BB) {
      const OB = BB.canvas;
      if (!oB(OB)) return;
      const GB = BB._w ?? OB.clientWidth,
        YB = BB._h ?? OB.clientHeight;
      if (!(GB > 0 && YB > 0)) return;
      const DB = Math.min(globalThis.devicePixelRatio || 1, BB.maxDevicePixelRatio);
      PB(BB, GB * DB | 0, YB * DB | 0)
    }

    function PB(BB, OB, GB) {
      const YB = BB.canvas,
        DB = 0 | OB,
        QB = 0 | GB;
      if (DB > 0 && QB > 0 && (DB !== YB.width || QB !== YB.height)) {
        YB.width = DB, YB.height = QB, BB.scRT._width = DB, BB.scRT._height = QB;
        for (const OB of BB._renderingContexts) OB._resize?.()
      }
    }
    var zB = 0;

    function lB(BB, OB) {
      return -1 !== BB._renderingContexts.indexOf(OB)
    }

    function pB(BB, OB) {
      return -1 === BB._renderingContexts.indexOf(OB) && (BB._renderingContexts.push(OB), !0)
    }
    var qB = null;
    var ZB = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function NB(BB, OB) {
      const QB = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...qB ? qB() : {}
      });
      QB || (0, YB.d)(47);
      const oB = qB?.deviceFeatures?.(QB, OB) ?? function(BB) {
          return ZB.filter((OB => BB.features.has(OB)))
        }(QB),
        jB = await QB.requestDevice({
          requiredFeatures: oB,
          requiredLimits: OB?.requiredLimits
        });
      console.log(`${DB} - WebGPU engine`);
      const PB = !!OB?.useHighPrecisionMatrix,
        zB = !!OB?.useFloatingOrigin;
      if (zB && !PB && (0, YB.d)(48), PB) {
        const {
          allocateF64Mat4: BB
        } = await GB.e(665).then((() => GB(63957)));
        0
      }
      let lB, pB, NB, RB;
      if (zB) {
        const [{
          wrapRenderableForFO: BB,
          lightFoVersion: OB,
          applyLightFoOffset: YB
        }, {
          makePackMeshWorld: DB
        }] = await Promise.all([GB.e(666).then((() => GB(63963))), GB.e(667).then((() => GB(63966)))]);
        lB = BB, pB = DB, NB = OB, RB = YB
      }
      const WB = {
          _device: jB
        },
        AB = [WB];
      return Object.assign(WB, {
        engine: WB,
        surfaces: AB,
        _surfaces: AB,
        _device: jB,
        _options: OB,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: PB,
        useFloatingOrigin: zB,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: lB,
        _makePackMeshWorld: pB,
        _lightFoVersion: NB,
        _applyLightFoOffset: RB
      }, yB(WB, BB, OB)), MB(WB), JB(WB), WB
    }

    function RB(BB, OB, GB) {
      PB(BB, OB, GB)
    }

    function WB(BB) {
      BB._animFrameId && cancelAnimationFrame(BB._animFrameId), BB._animFrameId = 0, BB._renderFn = null, BB._flushGpuRetirements?.(BB)
    }

    function AB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.surfaces;
      if (GB !== BB.surfaces)
        for (let DB = GB.length; DB--;) GB[DB].engine !== BB && (0, YB.d)(49);
      VB(BB, OB, GB)
    }

    function VB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB._surfaces,
        YB = 0;
      for (let QB = GB.length; QB--;) YB += GB[QB]._renderingContexts.length;
      if (!YB) return BB.drawCallCount = 0, BB._flushGpuRetirements?.(BB);
      const DB = BB._device.createCommandEncoder({
        label: "frame"
      });
      BB._currentEncoder = DB, BB._currentDelta = OB;
      try {
        BB._gpuTimerBegin?.(DB), YB = 0;
        for (let BB = 0; BB < GB.length; BB++) {
          const OB = GB[BB];
          OB._capturePreFrame?.(OB), JB(OB);
          const DB = OB._renderingContexts;
          for (let BB = 0; BB < DB.length; BB++) {
            const OB = DB[BB];
            OB._update(), YB += OB._drawCallsPre + OB._record()
          }
        }
        const OB = BB._currentEncoder;
        for (let BB = 0; BB < GB.length; BB++) {
          const YB = GB[BB];
          YB._captureService?.(YB, OB)
        }
        BB._gpuTimerEnd?.(OB), BB._cbs[0] = OB.finish(), BB._device.queue.submit(BB._cbs), BB._flushGpuRetirements?.(BB), BB.drawCallCount = YB, BB._gpuTimerResolve?.()
      } finally {
        BB._currentEncoder = void 0
      }
    }
  },
  44786: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      h: () => QB,
      i: () => YB
    });
    var YB = globalThis.GPUTextureUsage,
      DB = globalThis.GPUBufferUsage,
      QB = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  44838: (BB, OB, GB) => {
    function YB(BB) {
      DB(BB.splice(0))
    }

    function DB(BB) {
      for (const GB of BB) try {
        GB()
      } catch (OB) {
        console.error("GPU resource retirement failed.", OB)
      }
    }

    function QB(BB, OB) {
      BB._flushGpuRetirements ??= oB, (BB._retirements ??= []).push(OB)
    }

    function oB(BB) {
      const OB = BB._retirements;
      if (!OB) return;
      BB._retirements = null;
      const GB = BB._retiring ??= new Set;
      GB.add(OB), queueMicrotask((() => {
        BB._device.queue.onSubmittedWorkDone().then((() => {
          GB.delete(OB), YB(OB)
        })).catch((() => {}))
      }))
    }

    function jB(BB) {
      const OB = BB._retirements,
        GB = BB._retiring;
      BB._retirements = null, BB._retiring = null, OB && YB(OB), GB?.forEach(YB)
    }
    GB.d(OB, {
      d: () => jB,
      e: () => QB
    })
  },
  44826: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      h: () => oB,
      l: () => jB
    });
    var YB = GB(44786);

    function DB(BB) {
      const OB = BB.size;
      return "canvas" in OB ? OB.canvas : OB
    }

    function QB(BB) {
      return {
        _descriptor: BB,
        _resolveSize: DB,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function oB(BB, OB) {
      if (BB._eager) return void BB._syncEager?.(OB);
      jB(BB);
      const GB = BB._descriptor,
        {
          width: QB,
          height: oB
        } = (BB._resolveSize ?? DB)(GB);
      BB._width = QB, BB._height = oB;
      const yB = OB._device;
      GB.format && (BB._colorTexture = yB.createTexture({
        label: GB.lbl,
        size: {
          width: QB,
          height: oB
        },
        format: GB.format,
        sampleCount: GB.samples,
        usage: YB.i.RENDER_ATTACHMENT | YB.i.TEXTURE_BINDING | YB.i.COPY_SRC | YB.i.COPY_DST
      }), BB._colorView = BB._colorTexture.createView()), GB.dFormat && (BB._depthTexture = yB.createTexture({
        label: GB.lbl,
        size: {
          width: QB,
          height: oB
        },
        format: GB.dFormat,
        sampleCount: GB.samples,
        usage: YB.i.RENDER_ATTACHMENT | YB.i.TEXTURE_BINDING
      }), BB._depthView = BB._depthTexture.createView())
    }

    function jB(BB) {
      if (!BB || BB._eager && !BB._disposeAttachments) return;
      const OB = BB._colorTexture,
        GB = BB._depthTexture;
      if (BB._colorTexture = BB._depthTexture = null, BB._colorView = BB._depthView = null, BB._width = BB._height = 0, BB._disposeAttachments) BB._disposeAttachments(OB, GB);
      else try {
        OB?.destroy()
      } finally {
        !1 !== BB._ownsDepthTexture && GB?.destroy()
      }
    }
  },
  44854: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB,
      g: () => DB,
      j: () => QB
    });
    var YB = Float32Array,
      DB = Float64Array,
      QB = Uint32Array
  },
  44858: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    var YB = 16
  },
  44780: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB
    });
    var YB = null;

    function DB(BB) {
      for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), DB = 1; DB < OB; DB++) GB[DB - 1] = arguments[DB];
      const QB = new Error(YB?.(BB, GB) ?? `#${BB}`);
      throw QB.lite = GB, QB
    }
  },
  44812: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB
    });
    var YB = GB(44795);

    function DB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const GB = OB.compare,
        DB = OB.lodMinClamp ?? 0,
        QB = OB.lodMaxClamp ?? 32,
        oB = void 0 !== GB || 0 !== DB || 32 !== QB ? `${GB??""}:${DB}:${QB}` : "";
      return (0, YB.c)(BB, OB, oB)
    }
  },
  44791: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB
    });
    var YB = null;

    function DB(BB) {
      const OB = YB ??= new WeakMap;
      OB.set(BB, (OB.get(BB) ?? 0) + 1)
    }

    function QB(BB) {
      DB(BB.texture)
    }
  },
  44795: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB
    });
    var YB = null,
      DB = "nearest",
      QB = "clamp-to-edge",
      oB = {
        minFilter: DB,
        magFilter: DB,
        mipmapFilter: DB,
        addressModeU: QB,
        addressModeV: QB,
        addressModeW: QB,
        maxAnisotropy: 1
      };

    function jB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const DB = BB._device,
        QB = YB ??= new WeakMap;
      let jB = QB.get(DB);
      jB || QB.set(DB, jB = new Map);
      let yB = GB;
      for (const YB in oB) {
        const BB = YB;
        yB += `:${OB[BB]??oB[BB]}`
      }
      let JB = jB.get(yB);
      return JB || jB.set(yB, JB = DB.createSampler(OB)), JB
    }
  },
  44845: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => rB,
      e: () => EB
    });
    var YB = GB(44826),
      DB = GB(44824);

    function QB(BB, OB) {
      OB._passes.length = 0, BB._currentProcessedTask = OB;
      try {
        OB.record()
      } finally {
        BB._currentProcessedTask = null
      }
    }
    var oB = GB(44854);

    function jB(BB) {
      const OB = BB.worldMatrixVersion;
      if (BB._viewVer === OB) return BB._viewCache;
      const GB = BB._viewCache,
        YB = BB.worldMatrix,
        DB = BB._useFloatingOrigin,
        QB = DB ? 0 : YB[12],
        oB = DB ? 0 : YB[13],
        jB = DB ? 0 : YB[14];
      return GB[0] = YB[0], GB[1] = YB[4], GB[2] = YB[8], GB[3] = 0, GB[4] = YB[1], GB[5] = YB[5], GB[6] = YB[9], GB[7] = 0, GB[8] = YB[2], GB[9] = YB[6], GB[10] = YB[10], GB[11] = 0, GB[12] = -(YB[0] * QB + YB[1] * oB + YB[2] * jB), GB[13] = -(YB[4] * QB + YB[5] * oB + YB[6] * jB), GB[14] = -(YB[8] * QB + YB[9] * oB + YB[10] * jB), GB[15] = 1, BB._viewVer = OB, GB
    }
    var yB = null;

    function JB(BB) {
      return BB._projFov === BB.fov && BB._projNear === BB.nearPlane && BB._projFar === BB.farPlane || (BB._projFov = BB.fov, BB._projNear = BB.nearPlane, BB._projFar = BB.farPlane, BB._projRev = (BB._projRev ?? 0) + 1), BB.worldMatrixVersion + (BB._projRev ?? 0)
    }

    function MB(BB, OB) {
      const GB = JB(BB);
      if (BB._projVer === GB && BB._projAspect === OB) return BB._projCache;
      const YB = BB._projCache;
      return null !== yB && BB.ortho ? yB(BB, OB, YB) : function(BB, OB, GB, YB, DB) {
        const QB = 1 / Math.tan(.5 * OB),
          oB = DB - YB;
        BB[0] = QB / GB, BB[5] = QB, BB[10] = -YB / oB, BB[11] = 1, BB[14] = DB * YB / oB
      }(YB, BB.fov, OB, BB.nearPlane, BB.farPlane), BB._projVer = GB, BB._projAspect = OB, YB
    }
    var PB = GB(44786);

    function zB(BB, OB, GB) {
      return BB._device.createBuffer({
        label: GB,
        size: (YB = OB, DB = 16, Math.ceil(YB / DB) * DB),
        usage: PB.d.UNIFORM | PB.d.COPY_DST
      });
      var YB, DB
    }
    var lB = GB(44838),
      pB = null;

    function qB(BB) {
      const OB = BB._device,
        GB = pB ??= new WeakMap;
      let YB = GB.get(OB);
      return YB || (YB = OB.createBindGroupLayout({
        label: "eq",
        entries: [{
          binding: 0,
          visibility: PB.h.VERTEX | PB.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: PB.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), GB.set(OB, YB)), YB
    }

    function ZB(BB, OB, GB) {
      const YB = BB._device,
        DB = zB(BB, OB.byteLength, GB);
      try {
        YB.queue.writeBuffer(DB, 0, OB.buffer, OB.byteOffset, OB.byteLength)
      } catch (QB) {
        throw DB.destroy(), QB
      }
      return DB
    }
    var NB = GB(44858),
      RB = new oB.j(1),
      WB = new oB.e(RB.buffer);

    function AB(BB) {
      let OB = 0;
      for (const GB of BB) OB += GB._lightVersion ?? 0;
      return OB
    }

    function VB(BB, OB) {
      BB.fill(0);
      let GB = 0;
      for (const YB of OB) {
        if (GB >= NB.e) break;
        YB._writeLightUbo && (YB._writeLightUbo(BB, 4 + 16 * GB), GB++)
      }
      RB[0] = GB, BB[0] = WB[0]
    }

    function SB(BB, OB) {
      let GB = OB._lightGpuState;
      const YB = 16 + 16 * NB.e * 4;
      if (GB && GB._byteSize === YB) return GB;
      const DB = !GB;
      GB?._buffer.destroy();
      const QB = new oB.e(YB / 4);
      return VB(QB, OB.lights), BB._applyLightFoOffset?.(QB, OB), GB = {
        _buffer: ZB(BB, QB),
        _scratch: QB,
        pC: AB(OB.lights) + (BB._lightFoVersion?.(OB) ?? 0),
        _listVersion: OB._lightListVersion ?? 0,
        _lightCount: OB.lights.length,
        _byteSize: YB
      }, OB._lightGpuState = GB, DB && OB._disposables.push((() => {
        OB._lightGpuState?._buffer.destroy(), OB._lightGpuState = void 0
      })), GB
    }

    function nB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const DB = OB;
      if (0 === YB && 16 === DB.length) return void BB.set(DB, GB);
      const QB = YB,
        oB = GB;
      BB[oB + 0] = DB[QB + 0], BB[oB + 1] = DB[QB + 1], BB[oB + 2] = DB[QB + 2], BB[oB + 3] = DB[QB + 3], BB[oB + 4] = DB[QB + 4], BB[oB + 5] = DB[QB + 5], BB[oB + 6] = DB[QB + 6], BB[oB + 7] = DB[QB + 7], BB[oB + 8] = DB[QB + 8], BB[oB + 9] = DB[QB + 9], BB[oB + 10] = DB[QB + 10], BB[oB + 11] = DB[QB + 11], BB[oB + 12] = DB[QB + 12], BB[oB + 13] = DB[QB + 13], BB[oB + 14] = DB[QB + 14], BB[oB + 15] = DB[QB + 15]
    }

    function UB(BB, OB, GB, YB, DB) {
      BB.fill(0);
      const QB = function(BB, OB) {
          const GB = JB(BB);
          if (BB._vpVer === GB && BB._vpAspect === OB) return BB._vpCache;
          const YB = BB._vpCache;
          return function(BB, OB, GB, YB, DB, QB) {
            const oB = GB[YB],
              jB = GB[YB + 1],
              yB = GB[YB + 2],
              JB = GB[YB + 3],
              MB = GB[YB + 4],
              PB = GB[YB + 5],
              zB = GB[YB + 6],
              lB = GB[YB + 7],
              pB = GB[YB + 8],
              qB = GB[YB + 9],
              ZB = GB[YB + 10],
              NB = GB[YB + 11],
              RB = GB[YB + 12],
              WB = GB[YB + 13],
              AB = GB[YB + 14],
              VB = GB[YB + 15];
            let SB = DB[QB],
              nB = DB[QB + 1],
              UB = DB[QB + 2],
              fB = DB[QB + 3];
            BB[OB] = oB * SB + MB * nB + pB * UB + RB * fB, BB[OB + 1] = jB * SB + PB * nB + qB * UB + WB * fB, BB[OB + 2] = yB * SB + zB * nB + ZB * UB + AB * fB, BB[OB + 3] = JB * SB + lB * nB + NB * UB + VB * fB, SB = DB[QB + 4], nB = DB[QB + 5], UB = DB[QB + 6], fB = DB[QB + 7], BB[OB + 4] = oB * SB + MB * nB + pB * UB + RB * fB, BB[OB + 5] = jB * SB + PB * nB + qB * UB + WB * fB, BB[OB + 6] = yB * SB + zB * nB + ZB * UB + AB * fB, BB[OB + 7] = JB * SB + lB * nB + NB * UB + VB * fB, SB = DB[QB + 8], nB = DB[QB + 9], UB = DB[QB + 10], fB = DB[QB + 11], BB[OB + 8] = oB * SB + MB * nB + pB * UB + RB * fB, BB[OB + 9] = jB * SB + PB * nB + qB * UB + WB * fB, BB[OB + 10] = yB * SB + zB * nB + ZB * UB + AB * fB, BB[OB + 11] = JB * SB + lB * nB + NB * UB + VB * fB, SB = DB[QB + 12], nB = DB[QB + 13], UB = DB[QB + 14], fB = DB[QB + 15], BB[OB + 12] = oB * SB + MB * nB + pB * UB + RB * fB, BB[OB + 13] = jB * SB + PB * nB + qB * UB + WB * fB, BB[OB + 14] = yB * SB + zB * nB + ZB * UB + AB * fB, BB[OB + 15] = JB * SB + lB * nB + NB * UB + VB * fB
          }(YB, 0, MB(BB, OB), 0, jB(BB), 0), BB._vpVer = GB, BB._vpAspect = OB, YB
        }(YB, DB),
        oB = jB(YB),
        yB = YB.worldMatrix;
      nB(BB, QB, 0), nB(BB, oB, 16), OB.useFloatingOrigin ? (BB[32] = 0, BB[33] = 0, BB[34] = 0) : (BB[32] = yB[12], BB[33] = yB[13], BB[34] = yB[14]), BB[87] = OB.canvas.width;
      const PB = GB.imageProcessing;
      BB[76] = PB.exposure, BB[77] = PB.contrast, BB[78] = GB._envTextures?.lodGenerationScale ?? .8, BB[79] = +PB.toneMappingEnabled, BB[37] = OB.canvas.height
    }

    function fB(BB, OB) {
      return {
        _renderables: BB,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: OB
      }
    }

    function kB(BB, OB, GB) {
      BB.clr ??= !0;
      const DB = BB.rt._descriptor,
        QB = BB.depth?._descriptor,
        yB = {
          _colorFormat: DB.format,
          _depthStencilFormat: QB?.dFormat ?? DB.dFormat,
          _depthCompare: DB.depthCompare ?? QB?.depthCompare,
          _sampleCount: DB.samples
        },
        MB = {
          loadOp: "clear",
          storeOp: "store"
        },
        PB = {
          ...fB([], -1),
          name: BB.name,
          _config: BB,
          _ownsTargets: !BB.sharedRt,
          engine: OB,
          eq: GB,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [MB]
          },
          _colorAttachment: MB,
          _sceneUBO: zB(OB, 368),
          _suData: new oB.e(92),
          _sceneUboCacheKey: [],
          _targetSignature: yB,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (PB._disposed) throw new Error("RenderTask has been disposed.");
            PB._recordExplicit ? PB._recordExplicit(PB, !0) : uB(PB, !1 !== BB.autoMirror ? GB._renderables.slice() : PB._renderables, !0)
          },
          execute: () => function(BB, OB, GB) {
            if (!1 === BB.enabled) return 0;
            const YB = BB.eq;
            ! function(BB, OB, GB) {
              const YB = BB.eq;
              !1 !== BB._config.autoMirror && BB._lastVersion !== YB._renderableVersion && uB(BB, YB._renderables.slice());
              IB(BB, OB);
              const DB = BB._updateContext,
                QB = BB._config.cam ?? YB.camera;
              GB._colorFormat && (BB._config._skipClusteredLights || YB._clusteredLightUpdater?.(QB, DB.targetWidth, DB.targetHeight), function(BB, OB) {
                const GB = SB(BB, OB),
                  YB = AB(OB.lights) + (BB._lightFoVersion?.(OB) ?? 0),
                  DB = OB._lightListVersion ?? 0;
                YB === GB.pC && DB === GB._listVersion && OB.lights.length === GB._lightCount || (GB.pC = YB, GB._listVersion = DB, GB._lightCount = OB.lights.length, VB(GB._scratch, OB.lights), BB._applyLightFoOffset?.(GB._scratch, OB), BB._device.queue.writeBuffer(GB._buffer, 0, GB._scratch)), GB._buffer
              }(OB, YB));
              (function(BB, OB, GB, YB) {
                if (!YB) return;
                const DB = YB.viewport,
                  QB = BB._config.rt,
                  oB = (BB._config.cs ? OB.canvas.width / OB.canvas.height : QB._width / QB._height) * (DB ? DB.width / DB.height : 1),
                  jB = GB.fog,
                  yB = GB.imageProcessing,
                  MB = JB(YB),
                  PB = GB._envTextures,
                  zB = BB._sceneUboCacheKey;
                if (zB[0] === YB && zB[1] === jB && zB[2] === MB && zB[3] === oB && zB[4] === yB.exposure && zB[5] === yB.contrast && zB[6] === PB) return;
                zB[0] = YB, zB[1] = jB, zB[2] = MB, zB[3] = oB, zB[4] = yB.exposure, zB[5] = yB.contrast, zB[6] = PB;
                const lB = BB._suData;
                UB(lB, OB, GB, YB, oB);
                const pB = GB._sceneUboContributors;
                if (pB)
                  for (const JB of pB) JB(lB, GB);
                OB._device.queue.writeBuffer(BB._sceneUBO, 0, lB)
              })(BB, OB, YB, QB), DB.N_ = QB, BB._batchState?._reset(), FB(BB._opaqueBindings, DB), FB(BB._directBindings, DB), FB(BB._transparentBindings, DB), BB._batchState?._flush(OB),
                function(BB, OB) {
                  const GB = BB._transparentBindings;
                  if (GB.length <= 1 || !OB) return;
                  const YB = jB(OB);
                  for (const DB of GB) {
                    const BB = DB.renderable._worldCenter;
                    DB._sortDistance = BB ? BB[0] * YB[2] + BB[1] * YB[6] + BB[2] * YB[10] + YB[14] : 0
                  }
                  GB.sort(dB)
                }(BB, QB)
            }(BB, OB, GB);
            const DB = BB._colorAttachment,
              QB = BB._config;
            QB.rt._colorView && (QB.rt === YB.surface.scRT && (DB.view = QB.rt._colorView), DB.resolveTarget = QB.rst?._colorView ?? void 0, DB.clearValue = QB.clrColor ?? YB.clearColor, DB.loadOp = QB.clr ? "clear" : "load");
            if (BB._executeWithTransmission) return BB._executeWithTransmission(GB._sampleCount);
            const oB = OB._currentEncoder.beginRenderPass(BB._renderPassDescriptor),
              yB = mB(BB, oB);
            return oB.end(), yB
          }(PB, OB, yB),
          dispose() {
            if (PB._disposed) return;
            PB._disposed = !0;
            const OB = PB._pendingMeshes;
            OB && (OB.length = 0);
            for (const BB of PB._renderables) PB._retireRenderable?.(PB.engine, BB);
            PB._passes.length = PB._opaqueBindings.length = PB._directBindings.length = 0, PB._transparentBindings.length = PB._renderables.length = PB._ob.length = 0, PB._ownsTargets && ((0, YB.l)(BB.rt), (0, YB.l)(BB.rst)), BB.depth?._eager || (0, YB.l)(BB.depth);
            const GB = PB._sceneUBO;
            (0, lB.e)(PB.engine, (() => GB.destroy())), PB._batchState?._release(PB.engine), PB._batchState = void 0
          }
        };
      return PB
    }

    function dB(BB, OB) {
      return OB._sortDistance - BB._sortDistance || BB.renderable.order - OB.renderable.order
    }

    function KB(BB, OB) {
      return BB.renderable.order - OB.renderable.order
    }

    function uB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB._renderables,
        GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        DB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        QB = arguments.length > 4 ? arguments[4] : void 0;
      const oB = BB._config,
        jB = oB.rt,
        yB = BB._batchState,
        JB = fB(OB, BB.eq._renderableVersion);
      if (GB) {
        const OB = (OB, GB) => {
          OB && (GB || BB._ownsTargets || OB._eager) && (0, YB.h)(OB, BB.engine)
        };
        OB(jB), jB._descriptor.samples > 1 && OB(oB.rst), OB(oB.depth, !0)
      }
      const {
        _opaqueBindings: MB,
        _directBindings: PB,
        _transparentBindings: zB
      } = JB;
      try {
        for (const GB of OB) {
          const OB = GB.bind(BB.engine, BB._targetSignature);
          JB._batchState = BB._targetSignature._collectBatches?.(JB._batchState, OB), GB.isTransparent || GB._transmissive ? zB.push(OB) : GB._direct ? PB.push(OB) : MB.push(OB)
        }
        MB.sort(KB), PB.sort(KB), GB && IB(BB, BB.engine, !1)
      } catch (lB) {
        throw JB._batchState?._release(void 0, QB ?? [yB]), lB
      }
      return GB && (! function(BB, OB) {
        const GB = BB._config,
          YB = BB._colorAttachment;
        YB.view = OB._colorView, BB._renderPassDescriptor.colorAttachments = OB._colorView ? [YB] : [];
        const DB = GB.depth ?? OB,
          QB = DB._depthView;
        let oB;
        if (QB) {
          const BB = DB._descriptor,
            OB = (GB.depth ? DB._eager : !1 === GB.depthClear) ? "load" : "clear";
          oB = {
            view: QB,
            depthClearValue: BB.depthClearValue ?? 0,
            depthLoadOp: OB,
            depthStoreOp: "store"
          }, BB.dFormat?.includes("stencil") && (oB.stencilClearValue = 0, oB.stencilLoadOp = OB, oB.stencilStoreOp = "store")
        }
        BB._renderPassDescriptor.depthStencilAttachment = oB
      }(BB, jB), BB._updateContext.targetWidth = jB._width, BB._updateContext.targetHeight = jB._height), DB && (Object.assign(BB, JB), yB?._release(BB.engine, [JB._batchState])), JB
    }

    function mB(BB, OB) {
      const GB = BB.engine,
        YB = BB._config,
        QB = YB.rt,
        oB = BB.eq,
        jB = BB._opaqueBindings,
        yB = BB._ob,
        JB = BB._sceneBG;
      if (function(BB, OB, GB, YB) {
          const DB = OB?.viewport;
          if (!DB) return;
          const QB = Math.floor(DB.x * GB),
            oB = Math.floor((1 - DB.y - DB.height) * YB),
            jB = Math.ceil((DB.x + DB.width) * GB) - QB,
            yB = Math.ceil((1 - DB.y) * YB) - oB;
          BB.setViewport(QB, oB, jB, yB, 0, 1), BB.setScissorRect(QB, oB, jB, yB)
        }(OB, YB.cam ?? oB.camera, QB._width, QB._height), OB.setBindGroup(0, JB), BB._lastVis !== DB.b || !yB.length) {
        const OB = QB._descriptor,
          YB = GB._device.createRenderBundleEncoder({
            colorFormats: OB.format ? [OB.format] : [],
            depthStencilFormat: BB._targetSignature._depthStencilFormat,
            sampleCount: OB.samples
          });
        YB.setBindGroup(0, JB), iB(YB, jB, GB), yB[0] = YB.finish(), BB._lastVis = DB.b
      }
      let MB = jB.length;
      return OB.executeBundles(yB), OB.setBindGroup(0, JB), MB += iB(OB, BB._directBindings, GB), MB += iB(OB, BB._transparentBindings, GB), MB
    }

    function IB(BB, OB) {
      let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const YB = SB(OB, BB.eq)._buffer;
      if (YB === BB._lightsUBO) return;
      const DB = OB._device.createBindGroup({
        layout: qB(OB),
        entries: [{
          binding: 0,
          resource: {
            buffer: BB._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: YB
          }
        }]
      });
      BB._lightsUBO = YB, BB._sceneBG = DB, GB && (BB._ob = [])
    }

    function FB(BB, OB) {
      for (const GB of BB) GB.update?.(OB)
    }

    function iB(BB, OB, GB) {
      let YB = null,
        DB = 0;
      for (const QB of OB) {
        const OB = QB.renderable.mesh;
        OB && !1 === OB.visible || (QB.pipeline !== YB && (BB.setPipeline(QB.pipeline), YB = QB.pipeline), DB += QB.draw(BB, GB))
      }
      return DB
    }

    function LB(BB) {
      const OB = BB._materialSwapQueue;
      if (!OB[0] || BB._runtimeBuilds?.w) return;
      let YB, DB, QB;
      const oB = BB._renderables;
      for (const GB of OB) {
        const OB = GB.material;
        if (!OB) continue;
        const jB = GB._runtimeThinBuild;
        if (jB) {
          DB = jB(BB, GB, DB);
          continue
        }
        const yB = BB._groups.get(OB._buildGroup),
          JB = yB?.r;
        if (!JB) {
          (QB ??= []).push(GB);
          continue
        }
        if (yB._w?.(GB)) {
          (QB ??= []).push([GB, OB]);
          continue
        }
        const MB = BB._meshDisposables.get(GB);
        MB && (BB._meshDisposables.delete(GB), (0, lB.e)(BB.surface.engine, (() => MB.forEach((BB => BB())))));
        const PB = yB.o;
        let zB;
        for (let BB = oB.length; BB--;) oB[BB].mesh === GB && (zB = oB.splice(BB, 1)[0]);
        OB._csmGen = -~OB._csmGen;
        const pB = JB(BB, GB);
        if (PB) {
          const BB = PB.indexOf(zB);
          BB < 0 ? PB.push(pB) : PB[BB] = pB
        }
        YB = oB.push(pB)
      }
      if (YB && (oB.sort(((BB, OB) => BB.order - OB.order)), BB._renderableVersion++, BB._materialEpoch++), OB.length = 0, !QB) return DB;
      const jB = QB;
      return GB.e(671).then((() => GB(63982))).then((OB => {
        let {
          C: GB
        } = OB;
        return GB(BB, jB, DB)
      }), (OB => {
        const GB = BB._runtimeBuilds;
        GB ? GB._x(OB) : console.error(OB)
      }))
    }
    var gB = null;

    function rB(BB, OB) {
      const GB = BB.engine,
        DB = {
          _kind: "eq",
          surface: BB,
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
            GB.useFloatingOrigin && DB.camera && !DB.camera._useFloatingOrigin && (DB.camera._useFloatingOrigin = !0, DB.camera._viewVer = -1, DB.camera._vpVer = -1);
            const BB = DB.fixedDeltaMs > 0 ? DB.fixedDeltaMs : GB._currentDelta,
              OB = GB._currentEncoder;
            let YB = 0;
            for (const GB of DB._beforeRender) GB(BB);
            DB._materialSwapQueue.length && LB(DB);
            for (const QB of DB._prePasses) YB += QB.execute(OB, GB);
            for (const QB of DB._uniformUpdaters) QB.update(GB);
            DB._drawCallsPre = YB
          },
          _record: () => DB._frameGraph.execute(),
          _resize() {
            DB._frameGraph.build()
          }
        },
        oB = function() {
          const BB = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let OB = 0; OB < BB._tasks.length; OB++) QB(BB, BB._tasks[OB]);
              for (const OB of BB._tasks)
                for (const BB of OB._passes) BB._initialize()
            },
            execute() {
              let OB = 0;
              for (const GB of BB._tasks)
                if (!1 !== GB.executionEnabled)
                  if (GB.execute) OB += GB.execute();
                  else
                    for (const BB of GB._passes) OB += BB._execute();
              return OB
            },
            dispose() {
              for (const OB of BB._tasks) OB.dispose();
              BB._tasks.length = 0, BB._currentProcessedTask = null
            }
          };
          return BB
        }();
      if (DB._frameGraph = oB, !1 !== OB?.defaultRenderTask) {
        const OB = BB.msaaSamples > 1,
          QB = OB ? (0, YB.e)({
            lbl: "scene-color",
            format: BB.format,
            dFormat: "depth24plus-stencil8",
            samples: BB.msaaSamples,
            size: BB
          }) : BB.scRT,
          jB = OB ? void 0 : (0, YB.e)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: BB
          });
        ! function(BB, OB) {
          BB._tasks.push(OB)
        }(oB, kB({
          name: "eq",
          rt: QB,
          rst: OB ? BB.scRT : void 0,
          depth: jB
        }, GB, DB))
      }
      return DB._disposables.push((() => oB.dispose())), DB
    }
    async function XB(BB) {
      const OB = BB;
      for (OB._built || (OB._materialSwapQueue.length = 0); OB._deferredBuilders.length;) {
        const BB = OB._deferredBuilders.splice(0);
        await Promise.all(BB.map((BB => BB())))
      }
      await LB(OB), gB?.get(OB)?.() || (OB._runtimeBuilds?._e(), OB._renderableVersion++, OB._built = !0), await (OB._rebuildHook?.(OB))
    }
    var wB = null;
    async function EB(BB) {
      const OB = BB,
        YB = OB.surface;
      (0, DB.i)(YB, OB) || (await XB(BB), OB._renderables.sort(cB), await Promise.all(OB._frameGraph._tasks.map((BB => BB._preload?.()))), wB && await wB(OB), OB._frameGraph.build(), YB._renderingContexts[0] && (await GB.e(669).then((() => GB(63977)))).configureSwapchainOverlayScene(YB, OB), gB?.get(OB)?.() || (0, DB.l)(YB, OB))
    }
    var cB = (BB, OB) => BB.order - OB.order
  },
  44820: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => JB,
      i: () => MB
    });
    var YB = GB(44780),
      DB = GB(44786),
      QB = GB(44791),
      oB = GB(44795),
      jB = GB(44804),
      yB = GB(44807);

    function JB(BB, OB, GB) {
      let jB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (OB < 1 || GB < 1) && (0, YB.d)(676, OB, GB);
      const JB = BB._device,
        MB = jB.mipMaps ?? !1,
        PB = jB.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        zB = MB ? (0, yB.d)(OB, GB) : 1,
        lB = JB.createTexture({
          size: {
            width: OB,
            height: GB
          },
          format: PB,
          mipLevelCount: zB,
          usage: DB.i.TEXTURE_BINDING | DB.i.COPY_DST | DB.i.RENDER_ATTACHMENT
        }),
        pB = {
          addressModeU: jB.addressModeU ?? "clamp-to-edge",
          addressModeV: jB.addressModeV ?? "clamp-to-edge",
          minFilter: jB.minFilter ?? "linear",
          magFilter: jB.magFilter ?? "linear",
          mipmapFilter: MB ? "linear" : "nearest"
        },
        qB = (0, oB.c)(BB, pB),
        ZB = {
          texture: lB,
          view: lB.createView(),
          sampler: qB,
          width: OB,
          height: GB
        };
      return (0, QB.c)(ZB), BB._dlr && BB._dlr.t(ZB, {
        kind: "dynamic",
        width: OB,
        height: GB,
        format: PB,
        levels: zB,
        samplerDesc: pB,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), ZB
    }

    function MB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const DB = YB.invertY ?? !0,
        QB = YB.premultiplyAlpha ?? !1;
      BB._device.queue.copyExternalImageToTexture({
        source: GB,
        flipY: DB
      }, {
        texture: OB.texture,
        premultipliedAlpha: QB
      }, [OB.width, OB.height]);
      const oB = OB._recoverySource;
      oB && "dynamic" === oB.kind && (oB.source = GB, oB.flipY = DB, oB.premultipliedAlpha = QB), OB.texture.mipLevelCount > 1 && (0, jB.generateMipmaps)(BB, OB.texture)
    }
  },
  44815: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => yB
    });
    var YB = GB(44780),
      DB = GB(44786),
      QB = GB(44791),
      oB = GB(44795),
      jB = GB(44807);
    async function yB(BB, OB) {
      let yB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [JB, MB] = function(BB) {
        const OB = BB,
          GB = [
            [OB.displayWidth, OB.displayHeight],
            [OB.videoWidth, OB.videoHeight],
            [OB.naturalWidth, OB.naturalHeight],
            [OB.width, OB.height]
          ];
        for (const [YB, DB] of GB)
          if (void 0 !== YB && void 0 !== DB && Number.isInteger(YB) && Number.isInteger(DB) && YB > 0 && DB > 0) return [YB, DB];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(OB), [PB, zB] = function(BB, OB, GB) {
        if (void 0 === GB) return [BB, OB];
        if (!Number.isInteger(GB) || GB < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${GB})`);
        if (Math.max(BB, OB) <= GB) return [BB, OB];
        const YB = GB / Math.max(BB, OB);
        return BB >= OB ? [GB, Math.max(1, Math.round(OB * YB))] : [Math.max(1, Math.round(BB * YB)), GB]
      }(JB, MB, yB.maxDimension), lB = yB.mipMaps ?? !0, pB = yB.premultiplyAlpha ?? !1;
      let qB = OB,
        ZB = null;
      const NB = {
        texture: null
      };
      try {
        PB === JB && zB === MB || (ZB = await createImageBitmap(OB, {
          resizeWidth: PB,
          resizeHeight: zB,
          resizeQuality: "high",
          premultiplyAlpha: pB ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), qB = ZB);
        const RB = BB._device,
          WB = yB.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          AB = lB ? (0, jB.d)(PB, zB) : 1,
          VB = AB > 1 ? (await Promise.resolve().then((() => GB(44804)))).generateMipmaps : null,
          SB = {
            addressModeU: yB.addressModeU ?? "repeat",
            addressModeV: yB.addressModeV ?? "repeat",
            minFilter: yB.minFilter ?? "linear",
            magFilter: yB.magFilter ?? "linear",
            mipmapFilter: lB ? "linear" : "nearest"
          };
        SB.maxAnisotropy = "linear" === SB.minFilter && "linear" === SB.magFilter && "linear" === SB.mipmapFilter ? 4 : 1;
        const nB = yB.invertY ?? !0,
          UB = async OB => {
            let GB;
            RB.pushErrorScope("validation"), RB.pushErrorScope("out-of-memory");
            let QB = null;
            try {
              const GB = NB.texture = RB.createTexture({
                size: {
                  width: PB,
                  height: zB
                },
                format: WB,
                mipLevelCount: AB,
                usage: DB.i.TEXTURE_BINDING | DB.i.COPY_DST | DB.i.RENDER_ATTACHMENT
              });
              RB.queue.copyExternalImageToTexture({
                source: OB,
                flipY: nB
              }, {
                texture: GB,
                premultipliedAlpha: pB
              }, {
                width: PB,
                height: zB
              }), VB && VB(BB, GB), QB = (0, oB.c)(BB, SB)
            } catch (lB) {
              GB = lB
            }
            const [jB, yB] = await Promise.all([RB.popErrorScope(), RB.popErrorScope()]);
            if (GB) throw GB;
            const JB = yB ?? jB;
            if (JB) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${JB.message}`, {
              cause: JB
            });
            const MB = NB.texture;
            return MB && QB || (0, YB.d)(677), {
              texture: MB,
              view: MB.createView(),
              sampler: QB,
              width: PB,
              height: zB
            }
          }, fB = await (BB._dlr?.x(qB, PB, zB, WB, AB, SB, nB, pB, UB)) ?? await UB(qB);
        return (0, QB.c)(fB), fB
      } catch (RB) {
        throw NB.texture?.destroy(), RB
      } finally {
        ZB?.close()
      }
    }
  },
  44804: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      generateMipmaps: () => lB,
      recordMipmaps: () => pB
    });
    var YB = GB(44786),
      DB = GB(44795),
      QB = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var oB = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      jB = null,
      yB = null,
      JB = null,
      MB = null,
      PB = null;

    function zB(BB) {
      const OB = BB._device;
      OB !== PB && (jB?.clear(), jB = null, yB = null, JB = null, MB = null, PB = null, PB = OB), yB ??= OB.createShaderModule({
        code: oB
      }), JB ??= function(BB) {
        return (0, DB.c)(BB, QB)
      }(BB), MB ??= OB.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: YB.h.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: YB.h.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function lB(BB, OB, GB) {
      const YB = BB._device,
        DB = YB.createCommandEncoder();
      pB(BB, OB, DB, GB), YB.queue.submit([DB.finish()])
    }

    function pB(BB, OB, GB, YB) {
      if (OB.mipLevelCount <= 1) return;
      const DB = BB._device,
        QB = function(BB, OB) {
          const GB = BB._device;
          zB(BB), jB ??= new Map;
          let YB = jB.get(OB);
          return YB || (YB = GB.createRenderPipeline({
            layout: GB.createPipelineLayout({
              bindGroupLayouts: [MB]
            }),
            vertex: {
              module: yB,
              entryPoint: "vs"
            },
            fragment: {
              module: yB,
              entryPoint: "fs",
              targets: [{
                format: OB
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), jB.set(OB, YB)), YB
        }(BB, OB.format),
        oB = null != YB ? {
          dimension: "2d",
          baseArrayLayer: YB,
          arrayLayerCount: 1
        } : {};
      for (let jB = 1; jB < OB.mipLevelCount; jB++) {
        const BB = OB.createView({
            baseMipLevel: jB - 1,
            mipLevelCount: 1,
            ...oB
          }),
          YB = OB.createView({
            baseMipLevel: jB,
            mipLevelCount: 1,
            ...oB
          }),
          yB = DB.createBindGroup({
            layout: MB,
            entries: [{
              binding: 0,
              resource: BB
            }, {
              binding: 1,
              resource: JB
            }]
          }),
          PB = GB.beginRenderPass({
            colorAttachments: [{
              view: YB,
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
        PB.setPipeline(QB), PB.setBindGroup(0, yB), PB.draw(3), PB.end()
      }
    }
  },
  44807: (BB, OB, GB) => {
    function YB(BB, OB) {
      return Math.floor(Math.log2(Math.max(BB, OB))) + 1
    }
    GB.d(OB, {
      d: () => YB
    })
  },
  44778: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => JB,
      d: () => MB
    });
    var YB = GB(44780),
      DB = GB(44786),
      QB = GB(44791),
      oB = GB(44795),
      jB = GB(44804),
      yB = GB(44807);

    function JB(BB, OB, GB, jB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (OB < 1 || GB < 1 || jB < 1) && (0, YB.d)(722, OB, GB, jB);
      const MB = BB._device,
        PB = JB.mipMaps ?? !0,
        zB = JB.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        lB = MB.createTexture({
          size: {
            width: OB,
            height: GB,
            depthOrArrayLayers: jB
          },
          dimension: "2d",
          format: zB,
          mipLevelCount: PB ? (0, yB.d)(OB, GB) : 1,
          usage: DB.i.TEXTURE_BINDING | DB.i.COPY_DST | DB.i.RENDER_ATTACHMENT
        }),
        pB = (0, oB.c)(BB, {
          addressModeU: JB.addressModeU ?? "repeat",
          addressModeV: JB.addressModeV ?? "repeat",
          minFilter: JB.minFilter ?? "linear",
          magFilter: JB.magFilter ?? "linear",
          mipmapFilter: PB ? "linear" : "nearest"
        }),
        qB = {
          texture: lB,
          view: lB.createView({
            dimension: "2d-array"
          }),
          sampler: pB,
          width: OB,
          height: GB,
          layers: jB
        };
      return (0, QB.c)(qB), qB
    }

    function MB(BB, OB, GB, DB) {
      let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (GB < 0 || GB >= OB.layers || (0 | GB) !== GB) && (0, YB.d)(723, OB.layers, GB);
      const oB = QB.invertY ?? !0,
        yB = QB.premultiplyAlpha ?? !1;
      BB._device.queue.copyExternalImageToTexture({
        source: DB,
        flipY: oB
      }, {
        texture: OB.texture,
        origin: [0, 0, GB],
        premultipliedAlpha: yB
      }, [OB.width, OB.height, 1]), OB.texture.mipLevelCount > 1 && (0, jB.generateMipmaps)(BB, OB.texture, GB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);