export const id = 613;
export const ids = [613];
export const modules = {
  44365: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM
    });
    var OM = iM(44358),
      SM = iM(44368);

    function jM(MM) {
      (0, SM.e)(MM), (0, OM.t)(MM);
      const rM = MM._surfaces;
      for (const iM of rM) iM._renderingContexts.length = 0, iM._ro?.disconnect(), iM._context.unconfigure();
      rM.length = 0;
      try {
        MM._disposeManagedResources?.(), MM._disposeStorageBuffers?.()
      } finally {
        MM._device.destroy()
      }
    }
  },
  44358: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => mM,
      f: () => yM,
      g: () => HM,
      j: () => hM,
      n: () => UM,
      p: () => lM,
      t: () => EM
    });
    var OM = iM(44320);
    var SM = "Babylon Lite v1.32.0",
      jM = iM(44363);

    function aM(MM) {
      return "clientWidth" in MM
    }
    var PM = 1;

    function nM(MM, rM, iM) {
      const nM = rM.getContext("webgpu");
      nM || (0, OM.d)(54), aM(rM) && rM.setAttribute("data-engine", SM);
      const QM = iM?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        zM = iM?.srgb ? (LM = QM).endsWith("-srgb") ? LM : `${LM}-srgb` : QM;
      var LM;
      const mM = iM?.alphaMode ?? "opaque";
      nM.configure({
        device: MM._device,
        format: QM,
        alphaMode: mM,
        viewFormats: [zM]
      });
      const HM = 1 === iM?.msaaSamples ? 1 : 4,
        hM = (0, jM.e)({
          lbl: "swapchain",
          format: zM,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return hM._eager = !0, {
        engine: MM,
        canvas: rM,
        format: zM,
        msaaSamples: HM,
        scRT: hM,
        maxDevicePixelRatio: iM?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: PM++,
        _context: nM,
        _configureFormat: QM,
        _alphaMode: mM,
        _renderingContexts: []
      }
    }

    function QM(MM) {
      const rM = MM._context.getCurrentTexture(),
        iM = MM.scRT;
      iM._colorTexture = rM, iM._colorView = rM.createView({
        format: MM.format
      }), iM._width = rM.width, iM._height = rM.height
    }

    function zM(MM) {
      const rM = MM.canvas;
      if (!aM(rM)) return;
      const iM = MM._w ?? rM.clientWidth,
        OM = MM._h ?? rM.clientHeight;
      if (!(iM > 0 && OM > 0)) return;
      const SM = Math.min(globalThis.devicePixelRatio || 1, MM.maxDevicePixelRatio);
      LM(MM, iM * SM | 0, OM * SM | 0)
    }

    function LM(MM, rM, iM) {
      const OM = MM.canvas,
        SM = 0 | rM,
        jM = 0 | iM;
      if (SM > 0 && jM > 0 && (SM !== OM.width || jM !== OM.height)) {
        OM.width = SM, OM.height = jM, MM.scRT._width = SM, MM.scRT._height = jM;
        for (const rM of MM._renderingContexts) rM._resize?.()
      }
    }
    var mM = 0;

    function HM(MM, rM) {
      return -1 !== MM._renderingContexts.indexOf(rM)
    }

    function hM(MM, rM) {
      return -1 === MM._renderingContexts.indexOf(rM) && (MM._renderingContexts.push(rM), !0)
    }
    var JM = null;
    var dM = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function yM(MM, rM) {
      const jM = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...JM ? JM() : {}
      });
      jM || (0, OM.d)(47);
      const aM = JM?.deviceFeatures?.(jM, rM) ?? function(MM) {
          return dM.filter((rM => MM.features.has(rM)))
        }(jM),
        PM = await jM.requestDevice({
          requiredFeatures: aM,
          requiredLimits: rM?.requiredLimits
        });
      console.log(`${SM} - WebGPU engine`);
      const LM = !!rM?.useHighPrecisionMatrix,
        mM = !!rM?.useFloatingOrigin;
      if (mM && !LM && (0, OM.d)(48), LM) {
        const {
          allocateF64Mat4: MM
        } = await iM.e(665).then((() => iM(63976)));
        0
      }
      let HM, hM, yM, lM;
      if (mM) {
        const [{
          wrapRenderableForFO: MM,
          lightFoVersion: rM,
          applyLightFoOffset: OM
        }, {
          makePackMeshWorld: SM
        }] = await Promise.all([iM.e(666).then((() => iM(63981))), iM.e(667).then((() => iM(63990)))]);
        HM = MM, hM = SM, yM = rM, lM = OM
      }
      const EM = {
          _device: PM
        },
        UM = [EM];
      return Object.assign(EM, {
        engine: EM,
        surfaces: UM,
        _surfaces: UM,
        _device: PM,
        _options: rM,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: LM,
        useFloatingOrigin: mM,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: HM,
        _makePackMeshWorld: hM,
        _lightFoVersion: yM,
        _applyLightFoOffset: lM
      }, nM(EM, MM, rM)), zM(EM), QM(EM), EM
    }

    function lM(MM, rM, iM) {
      LM(MM, rM, iM)
    }

    function EM(MM) {
      MM._animFrameId && cancelAnimationFrame(MM._animFrameId), MM._animFrameId = 0, MM._renderFn = null, MM._flushGpuRetirements?.(MM)
    }

    function UM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MM.surfaces;
      if (iM !== MM.surfaces)
        for (let SM = iM.length; SM--;) iM[SM].engine !== MM && (0, OM.d)(49);
      GM(MM, rM, iM)
    }

    function GM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MM._surfaces,
        OM = 0;
      for (let jM = iM.length; jM--;) OM += iM[jM]._renderingContexts.length;
      if (!OM) return MM.drawCallCount = 0, MM._flushGpuRetirements?.(MM);
      const SM = MM._device.createCommandEncoder({
        label: "frame"
      });
      MM._currentEncoder = SM, MM._currentDelta = rM;
      try {
        MM._gpuTimerBegin?.(SM), OM = 0;
        for (let MM = 0; MM < iM.length; MM++) {
          const rM = iM[MM];
          rM._capturePreFrame?.(rM), QM(rM);
          const SM = rM._renderingContexts;
          for (let MM = 0; MM < SM.length; MM++) {
            const rM = SM[MM];
            rM._update(), OM += rM._drawCallsPre + rM._record()
          }
        }
        const rM = MM._currentEncoder;
        for (let MM = 0; MM < iM.length; MM++) {
          const OM = iM[MM];
          OM._captureService?.(OM, rM)
        }
        MM._gpuTimerEnd?.(rM), MM._cbs[0] = rM.finish(), MM._device.queue.submit(MM._cbs), MM._flushGpuRetirements?.(MM), MM.drawCallCount = OM, MM._gpuTimerResolve?.()
      } finally {
        MM._currentEncoder = void 0
      }
    }
  },
  44327: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      g: () => jM,
      h: () => OM
    });
    var OM = globalThis.GPUTextureUsage,
      SM = globalThis.GPUBufferUsage,
      jM = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  44368: (MM, rM, iM) => {
    function OM(MM) {
      SM(MM.splice(0))
    }

    function SM(MM) {
      for (const iM of MM) try {
        iM()
      } catch (rM) {
        console.error("GPU resource retirement failed.", rM)
      }
    }

    function jM(MM, rM) {
      MM._flushGpuRetirements ??= aM, (MM._retirements ??= []).push(rM)
    }

    function aM(MM) {
      const rM = MM._retirements;
      if (!rM) return;
      MM._retirements = null;
      const iM = MM._retiring ??= new Set;
      iM.add(rM), queueMicrotask((() => {
        MM._device.queue.onSubmittedWorkDone().then((() => {
          iM.delete(rM), OM(rM)
        })).catch((() => {}))
      }))
    }

    function PM(MM) {
      const rM = MM._retirements,
        iM = MM._retiring;
      MM._retirements = null, MM._retiring = null, rM && OM(rM), iM?.forEach(OM)
    }
    iM.d(rM, {
      e: () => PM,
      g: () => jM
    })
  },
  44363: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM,
      i: () => aM,
      k: () => PM
    });
    var OM = iM(44327);

    function SM(MM) {
      const rM = MM.size;
      return "canvas" in rM ? rM.canvas : rM
    }

    function jM(MM) {
      return {
        _descriptor: MM,
        _resolveSize: SM,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function aM(MM, rM) {
      if (MM._eager) return void MM._syncEager?.(rM);
      PM(MM);
      const iM = MM._descriptor,
        {
          width: jM,
          height: aM
        } = (MM._resolveSize ?? SM)(iM);
      MM._width = jM, MM._height = aM;
      const nM = rM._device;
      iM.format && (MM._colorTexture = nM.createTexture({
        label: iM.lbl,
        size: {
          width: jM,
          height: aM
        },
        format: iM.format,
        sampleCount: iM.samples,
        usage: OM.h.RENDER_ATTACHMENT | OM.h.TEXTURE_BINDING | OM.h.COPY_SRC | OM.h.COPY_DST
      }), MM._colorView = MM._colorTexture.createView()), iM.dFormat && (MM._depthTexture = nM.createTexture({
        label: iM.lbl,
        size: {
          width: jM,
          height: aM
        },
        format: iM.dFormat,
        sampleCount: iM.samples,
        usage: OM.h.RENDER_ATTACHMENT | OM.h.TEXTURE_BINDING
      }), MM._depthView = MM._depthTexture.createView())
    }

    function PM(MM) {
      if (!MM || MM._eager && !MM._disposeAttachments) return;
      const rM = MM._colorTexture,
        iM = MM._depthTexture;
      if (MM._colorTexture = MM._depthTexture = null, MM._colorView = MM._depthView = null, MM._width = MM._height = 0, MM._disposeAttachments) MM._disposeAttachments(rM, iM);
      else try {
        rM?.destroy()
      } finally {
        !1 !== MM._ownsDepthTexture && iM?.destroy()
      }
    }
  },
  44379: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM,
      g: () => SM,
      k: () => jM
    });
    var OM = Float32Array,
      SM = Float64Array,
      jM = Uint32Array
  },
  44384: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM
    });
    var OM = 16
  },
  44320: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = null;

    function SM(MM) {
      for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), SM = 1; SM < rM; SM++) iM[SM - 1] = arguments[SM];
      const jM = new Error(OM?.(MM, iM) ?? `#${MM}`);
      throw jM.lite = iM, jM
    }
  },
  44348: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM
    });
    var OM = iM(44337);

    function SM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const iM = rM.compare,
        SM = rM.lodMinClamp ?? 0,
        jM = rM.lodMaxClamp ?? 32,
        aM = void 0 !== iM || 0 !== SM || 32 !== jM ? `${iM??""}:${SM}:${jM}` : "";
      return (0, OM.c)(MM, rM, aM)
    }
  },
  44330: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM
    });
    var OM = null;

    function SM(MM) {
      const rM = OM ??= new WeakMap;
      rM.set(MM, (rM.get(MM) ?? 0) + 1)
    }

    function jM(MM) {
      SM(MM.texture)
    }
  },
  44337: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM
    });
    var OM = null,
      SM = "nearest",
      jM = "clamp-to-edge",
      aM = {
        minFilter: SM,
        magFilter: SM,
        mipmapFilter: SM,
        addressModeU: jM,
        addressModeV: jM,
        addressModeW: jM,
        maxAnisotropy: 1
      };

    function PM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const SM = MM._device,
        jM = OM ??= new WeakMap;
      let PM = jM.get(SM);
      PM || jM.set(SM, PM = new Map);
      let nM = iM;
      for (const OM in aM) {
        const MM = OM;
        nM += `:${rM[MM]??aM[MM]}`
      }
      let QM = PM.get(nM);
      return QM || PM.set(nM, QM = SM.createSampler(rM)), QM
    }
  },
  44372: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => oM,
      f: () => NM
    });
    var OM = iM(44363),
      SM = iM(44358);

    function jM(MM, rM) {
      rM._passes.length = 0, MM._currentProcessedTask = rM;
      try {
        rM.record()
      } finally {
        MM._currentProcessedTask = null
      }
    }
    var aM = iM(44379);

    function PM(MM) {
      const rM = MM.worldMatrixVersion;
      if (MM._viewVer === rM) return MM._viewCache;
      const iM = MM._viewCache,
        OM = MM.worldMatrix,
        SM = MM._useFloatingOrigin,
        jM = SM ? 0 : OM[12],
        aM = SM ? 0 : OM[13],
        PM = SM ? 0 : OM[14];
      return iM[0] = OM[0], iM[1] = OM[4], iM[2] = OM[8], iM[3] = 0, iM[4] = OM[1], iM[5] = OM[5], iM[6] = OM[9], iM[7] = 0, iM[8] = OM[2], iM[9] = OM[6], iM[10] = OM[10], iM[11] = 0, iM[12] = -(OM[0] * jM + OM[1] * aM + OM[2] * PM), iM[13] = -(OM[4] * jM + OM[5] * aM + OM[6] * PM), iM[14] = -(OM[8] * jM + OM[9] * aM + OM[10] * PM), iM[15] = 1, MM._viewVer = rM, iM
    }
    var nM = null;

    function QM(MM) {
      return MM._projFov === MM.fov && MM._projNear === MM.nearPlane && MM._projFar === MM.farPlane || (MM._projFov = MM.fov, MM._projNear = MM.nearPlane, MM._projFar = MM.farPlane, MM._projRev = (MM._projRev ?? 0) + 1), MM.worldMatrixVersion + (MM._projRev ?? 0)
    }

    function zM(MM, rM) {
      const iM = QM(MM);
      if (MM._projVer === iM && MM._projAspect === rM) return MM._projCache;
      const OM = MM._projCache;
      return null !== nM && MM.ortho ? nM(MM, rM, OM) : function(MM, rM, iM, OM, SM) {
        const jM = 1 / Math.tan(.5 * rM),
          aM = SM - OM;
        MM[0] = jM / iM, MM[5] = jM, MM[10] = -OM / aM, MM[11] = 1, MM[14] = SM * OM / aM
      }(OM, MM.fov, rM, MM.nearPlane, MM.farPlane), MM._projVer = iM, MM._projAspect = rM, OM
    }
    var LM = iM(44327);

    function mM(MM, rM, iM) {
      return MM._device.createBuffer({
        label: iM,
        size: (OM = rM, SM = 16, Math.ceil(OM / SM) * SM),
        usage: LM.d.UNIFORM | LM.d.COPY_DST
      });
      var OM, SM
    }
    var HM = iM(44368),
      hM = null;

    function JM(MM) {
      const rM = MM._device,
        iM = hM ??= new WeakMap;
      let OM = iM.get(rM);
      return OM || (OM = rM.createBindGroupLayout({
        label: "YJ",
        entries: [{
          binding: 0,
          visibility: LM.g.VERTEX | LM.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: LM.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), iM.set(rM, OM)), OM
    }

    function dM(MM, rM, iM) {
      const OM = MM._device,
        SM = mM(MM, rM.byteLength, iM);
      try {
        OM.queue.writeBuffer(SM, 0, rM.buffer, rM.byteOffset, rM.byteLength)
      } catch (jM) {
        throw SM.destroy(), jM
      }
      return SM
    }
    var yM = iM(44384),
      lM = new aM.k(1),
      EM = new aM.d(lM.buffer);

    function UM(MM) {
      let rM = 0;
      for (const iM of MM) rM += iM._lightVersion ?? 0;
      return rM
    }

    function GM(MM, rM) {
      MM.fill(0);
      let iM = 0;
      for (const OM of rM) {
        if (iM >= yM.b) break;
        OM._writeLightUbo && (OM._writeLightUbo(MM, 4 + 16 * iM), iM++)
      }
      lM[0] = iM, MM[0] = EM[0]
    }

    function CM(MM, rM) {
      let iM = rM._lightGpuState;
      const OM = 16 + 16 * yM.b * 4;
      if (iM && iM._byteSize === OM) return iM;
      const SM = !iM;
      iM?._buffer.destroy();
      const jM = new aM.d(OM / 4);
      return GM(jM, rM.lights), MM._applyLightFoOffset?.(jM, rM), iM = {
        _buffer: dM(MM, jM),
        _scratch: jM,
        vx: UM(rM.lights) + (MM._lightFoVersion?.(rM) ?? 0),
        _listVersion: rM._lightListVersion ?? 0,
        _lightCount: rM.lights.length,
        _byteSize: OM
      }, rM._lightGpuState = iM, SM && rM._disposables.push((() => {
        rM._lightGpuState?._buffer.destroy(), rM._lightGpuState = void 0
      })), iM
    }

    function eM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const SM = rM;
      if (0 === OM && 16 === SM.length) return void MM.set(SM, iM);
      const jM = OM,
        aM = iM;
      MM[aM + 0] = SM[jM + 0], MM[aM + 1] = SM[jM + 1], MM[aM + 2] = SM[jM + 2], MM[aM + 3] = SM[jM + 3], MM[aM + 4] = SM[jM + 4], MM[aM + 5] = SM[jM + 5], MM[aM + 6] = SM[jM + 6], MM[aM + 7] = SM[jM + 7], MM[aM + 8] = SM[jM + 8], MM[aM + 9] = SM[jM + 9], MM[aM + 10] = SM[jM + 10], MM[aM + 11] = SM[jM + 11], MM[aM + 12] = SM[jM + 12], MM[aM + 13] = SM[jM + 13], MM[aM + 14] = SM[jM + 14], MM[aM + 15] = SM[jM + 15]
    }

    function bM(MM, rM, iM, OM, SM) {
      MM.fill(0);
      const jM = function(MM, rM) {
          const iM = QM(MM);
          if (MM._vpVer === iM && MM._vpAspect === rM) return MM._vpCache;
          const OM = MM._vpCache;
          return function(MM, rM, iM, OM, SM, jM) {
            const aM = iM[OM],
              PM = iM[OM + 1],
              nM = iM[OM + 2],
              QM = iM[OM + 3],
              zM = iM[OM + 4],
              LM = iM[OM + 5],
              mM = iM[OM + 6],
              HM = iM[OM + 7],
              hM = iM[OM + 8],
              JM = iM[OM + 9],
              dM = iM[OM + 10],
              yM = iM[OM + 11],
              lM = iM[OM + 12],
              EM = iM[OM + 13],
              UM = iM[OM + 14],
              GM = iM[OM + 15];
            let CM = SM[jM],
              eM = SM[jM + 1],
              bM = SM[jM + 2],
              wM = SM[jM + 3];
            MM[rM] = aM * CM + zM * eM + hM * bM + lM * wM, MM[rM + 1] = PM * CM + LM * eM + JM * bM + EM * wM, MM[rM + 2] = nM * CM + mM * eM + dM * bM + UM * wM, MM[rM + 3] = QM * CM + HM * eM + yM * bM + GM * wM, CM = SM[jM + 4], eM = SM[jM + 5], bM = SM[jM + 6], wM = SM[jM + 7], MM[rM + 4] = aM * CM + zM * eM + hM * bM + lM * wM, MM[rM + 5] = PM * CM + LM * eM + JM * bM + EM * wM, MM[rM + 6] = nM * CM + mM * eM + dM * bM + UM * wM, MM[rM + 7] = QM * CM + HM * eM + yM * bM + GM * wM, CM = SM[jM + 8], eM = SM[jM + 9], bM = SM[jM + 10], wM = SM[jM + 11], MM[rM + 8] = aM * CM + zM * eM + hM * bM + lM * wM, MM[rM + 9] = PM * CM + LM * eM + JM * bM + EM * wM, MM[rM + 10] = nM * CM + mM * eM + dM * bM + UM * wM, MM[rM + 11] = QM * CM + HM * eM + yM * bM + GM * wM, CM = SM[jM + 12], eM = SM[jM + 13], bM = SM[jM + 14], wM = SM[jM + 15], MM[rM + 12] = aM * CM + zM * eM + hM * bM + lM * wM, MM[rM + 13] = PM * CM + LM * eM + JM * bM + EM * wM, MM[rM + 14] = nM * CM + mM * eM + dM * bM + UM * wM, MM[rM + 15] = QM * CM + HM * eM + yM * bM + GM * wM
          }(OM, 0, zM(MM, rM), 0, PM(MM), 0), MM._vpVer = iM, MM._vpAspect = rM, OM
        }(OM, SM),
        aM = PM(OM),
        nM = OM.worldMatrix;
      eM(MM, jM, 0), eM(MM, aM, 16), rM.useFloatingOrigin ? (MM[32] = 0, MM[33] = 0, MM[34] = 0) : (MM[32] = nM[12], MM[33] = nM[13], MM[34] = nM[14]), MM[87] = rM.canvas.width;
      const LM = iM.imageProcessing;
      MM[76] = LM.exposure, MM[77] = LM.contrast, MM[78] = iM._envTextures?.lodGenerationScale ?? .8, MM[79] = +LM.toneMappingEnabled, MM[37] = rM.canvas.height
    }

    function wM(MM, rM) {
      return {
        _renderables: MM,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: rM
      }
    }

    function tM(MM, rM, iM) {
      MM.clr ??= !0;
      const SM = MM.rt._descriptor,
        jM = MM.depth?._descriptor,
        nM = {
          _colorFormat: SM.format,
          _depthStencilFormat: jM?.dFormat ?? SM.dFormat,
          _depthCompare: SM.depthCompare ?? jM?.depthCompare,
          _sampleCount: SM.samples
        },
        zM = {
          loadOp: "clear",
          storeOp: "store"
        },
        LM = {
          ...wM([], -1),
          name: MM.name,
          _config: MM,
          _ownsTargets: !MM.sharedRt,
          engine: rM,
          YJ: iM,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [zM]
          },
          _colorAttachment: zM,
          _sceneUBO: mM(rM, 368),
          _suData: new aM.d(92),
          _sceneUboCacheKey: [],
          _targetSignature: nM,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (LM._disposed) throw new Error("RenderTask has been disposed.");
            LM._recordExplicit ? LM._recordExplicit(LM, !0) : RM(LM, !1 !== MM.autoMirror ? iM._renderables.slice() : LM._renderables, !0)
          },
          execute: () => function(MM, rM, iM) {
            if (!1 === MM.enabled) return 0;
            const OM = MM.YJ;
            ! function(MM, rM, iM) {
              const OM = MM.YJ;
              !1 !== MM._config.autoMirror && MM._lastVersion !== OM._renderableVersion && RM(MM, OM._renderables.slice());
              WM(MM, rM);
              const SM = MM._updateContext,
                jM = MM._config.cam ?? OM.camera;
              iM._colorFormat && (MM._config._skipClusteredLights || OM._clusteredLightUpdater?.(jM, SM.targetWidth, SM.targetHeight), function(MM, rM) {
                const iM = CM(MM, rM),
                  OM = UM(rM.lights) + (MM._lightFoVersion?.(rM) ?? 0),
                  SM = rM._lightListVersion ?? 0;
                OM === iM.vx && SM === iM._listVersion && rM.lights.length === iM._lightCount || (iM.vx = OM, iM._listVersion = SM, iM._lightCount = rM.lights.length, GM(iM._scratch, rM.lights), MM._applyLightFoOffset?.(iM._scratch, rM), MM._device.queue.writeBuffer(iM._buffer, 0, iM._scratch)), iM._buffer
              }(rM, OM));
              (function(MM, rM, iM, OM) {
                if (!OM) return;
                const SM = OM.viewport,
                  jM = MM._config.rt,
                  aM = (MM._config.cs ? rM.canvas.width / rM.canvas.height : jM._width / jM._height) * (SM ? SM.width / SM.height : 1),
                  PM = iM.fog,
                  nM = iM.imageProcessing,
                  zM = QM(OM),
                  LM = iM._envTextures,
                  mM = MM._sceneUboCacheKey;
                if (mM[0] === OM && mM[1] === PM && mM[2] === zM && mM[3] === aM && mM[4] === nM.exposure && mM[5] === nM.contrast && mM[6] === LM) return;
                mM[0] = OM, mM[1] = PM, mM[2] = zM, mM[3] = aM, mM[4] = nM.exposure, mM[5] = nM.contrast, mM[6] = LM;
                const HM = MM._suData;
                bM(HM, rM, iM, OM, aM);
                const hM = iM._sceneUboContributors;
                if (hM)
                  for (const QM of hM) QM(HM, iM);
                rM._device.queue.writeBuffer(MM._sceneUBO, 0, HM)
              })(MM, rM, OM, jM), SM.lV = jM, MM._batchState?._reset(), sM(MM._opaqueBindings, SM), sM(MM._directBindings, SM), sM(MM._transparentBindings, SM), MM._batchState?._flush(rM),
                function(MM, rM) {
                  const iM = MM._transparentBindings;
                  if (iM.length <= 1 || !rM) return;
                  const OM = PM(rM);
                  for (const SM of iM) {
                    const MM = SM.renderable._worldCenter;
                    SM._sortDistance = MM ? MM[0] * OM[2] + MM[1] * OM[6] + MM[2] * OM[10] + OM[14] : 0
                  }
                  iM.sort(gM)
                }(MM, jM)
            }(MM, rM, iM);
            const SM = MM._colorAttachment,
              jM = MM._config;
            jM.rt._colorView && (jM.rt === OM.surface.scRT && (SM.view = jM.rt._colorView), SM.resolveTarget = jM.rst?._colorView ?? void 0, SM.clearValue = jM.clrColor ?? OM.clearColor, SM.loadOp = jM.clr ? "clear" : "load");
            if (MM._executeWithTransmission) return MM._executeWithTransmission(iM._sampleCount);
            const aM = rM._currentEncoder.beginRenderPass(MM._renderPassDescriptor),
              nM = pM(MM, aM);
            return aM.end(), nM
          }(LM, rM, nM),
          dispose() {
            if (LM._disposed) return;
            LM._disposed = !0;
            const rM = LM._pendingMeshes;
            rM && (rM.length = 0);
            for (const MM of LM._renderables) LM._retireRenderable?.(LM.engine, MM);
            LM._passes.length = LM._opaqueBindings.length = LM._directBindings.length = 0, LM._transparentBindings.length = LM._renderables.length = LM._ob.length = 0, LM._ownsTargets && ((0, OM.k)(MM.rt), (0, OM.k)(MM.rst)), MM.depth?._eager || (0, OM.k)(MM.depth);
            const iM = LM._sceneUBO;
            (0, HM.g)(LM.engine, (() => iM.destroy())), LM._batchState?._release(LM.engine), LM._batchState = void 0
          }
        };
      return LM
    }

    function gM(MM, rM) {
      return rM._sortDistance - MM._sortDistance || MM.renderable.order - rM.renderable.order
    }

    function uM(MM, rM) {
      return MM.renderable.order - rM.renderable.order
    }

    function RM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM._renderables,
        iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        SM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        jM = arguments.length > 4 ? arguments[4] : void 0;
      const aM = MM._config,
        PM = aM.rt,
        nM = MM._batchState,
        QM = wM(rM, MM.YJ._renderableVersion);
      if (iM) {
        const rM = (rM, iM) => {
          rM && (iM || MM._ownsTargets || rM._eager) && (0, OM.i)(rM, MM.engine)
        };
        rM(PM), PM._descriptor.samples > 1 && rM(aM.rst), rM(aM.depth, !0)
      }
      const {
        _opaqueBindings: zM,
        _directBindings: LM,
        _transparentBindings: mM
      } = QM;
      try {
        for (const iM of rM) {
          const rM = iM.bind(MM.engine, MM._targetSignature);
          QM._batchState = MM._targetSignature._collectBatches?.(QM._batchState, rM), iM.isTransparent || iM._transmissive ? mM.push(rM) : iM._direct ? LM.push(rM) : zM.push(rM)
        }
        zM.sort(uM), LM.sort(uM), iM && WM(MM, MM.engine, !1)
      } catch (HM) {
        throw QM._batchState?._release(void 0, jM ?? [nM]), HM
      }
      return iM && (! function(MM, rM) {
        const iM = MM._config,
          OM = MM._colorAttachment;
        OM.view = rM._colorView, MM._renderPassDescriptor.colorAttachments = rM._colorView ? [OM] : [];
        const SM = iM.depth ?? rM,
          jM = SM._depthView;
        let aM;
        if (jM) {
          const MM = SM._descriptor,
            rM = (iM.depth ? SM._eager : !1 === iM.depthClear) ? "load" : "clear";
          aM = {
            view: jM,
            depthClearValue: MM.depthClearValue ?? 0,
            depthLoadOp: rM,
            depthStoreOp: "store"
          }, MM.dFormat?.includes("stencil") && (aM.stencilClearValue = 0, aM.stencilLoadOp = rM, aM.stencilStoreOp = "store")
        }
        MM._renderPassDescriptor.depthStencilAttachment = aM
      }(MM, PM), MM._updateContext.targetWidth = PM._width, MM._updateContext.targetHeight = PM._height), SM && (Object.assign(MM, QM), nM?._release(MM.engine, [QM._batchState])), QM
    }

    function pM(MM, rM) {
      const iM = MM.engine,
        OM = MM._config,
        jM = OM.rt,
        aM = MM.YJ,
        PM = MM._opaqueBindings,
        nM = MM._ob,
        QM = MM._sceneBG;
      if (function(MM, rM, iM, OM) {
          const SM = rM?.viewport;
          if (!SM) return;
          const jM = Math.floor(SM.x * iM),
            aM = Math.floor((1 - SM.y - SM.height) * OM),
            PM = Math.ceil((SM.x + SM.width) * iM) - jM,
            nM = Math.ceil((1 - SM.y) * OM) - aM;
          MM.setViewport(jM, aM, PM, nM, 0, 1), MM.setScissorRect(jM, aM, PM, nM)
        }(rM, OM.cam ?? aM.camera, jM._width, jM._height), rM.setBindGroup(0, QM), MM._lastVis !== SM.c || !nM.length) {
        const rM = jM._descriptor,
          OM = iM._device.createRenderBundleEncoder({
            colorFormats: rM.format ? [rM.format] : [],
            depthStencilFormat: MM._targetSignature._depthStencilFormat,
            sampleCount: rM.samples
          });
        OM.setBindGroup(0, QM), DM(OM, PM, iM), nM[0] = OM.finish(), MM._lastVis = SM.c
      }
      let zM = PM.length;
      return rM.executeBundles(nM), rM.setBindGroup(0, QM), zM += DM(rM, MM._directBindings, iM), zM += DM(rM, MM._transparentBindings, iM), zM
    }

    function WM(MM, rM) {
      let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const OM = CM(rM, MM.YJ)._buffer;
      if (OM === MM._lightsUBO) return;
      const SM = rM._device.createBindGroup({
        layout: JM(rM),
        entries: [{
          binding: 0,
          resource: {
            buffer: MM._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: OM
          }
        }]
      });
      MM._lightsUBO = OM, MM._sceneBG = SM, iM && (MM._ob = [])
    }

    function sM(MM, rM) {
      for (const iM of MM) iM.update?.(rM)
    }

    function DM(MM, rM, iM) {
      let OM = null,
        SM = 0;
      for (const jM of rM) {
        const rM = jM.renderable.mesh;
        rM && !1 === rM.visible || (jM.pipeline !== OM && (MM.setPipeline(jM.pipeline), OM = jM.pipeline), SM += jM.draw(MM, iM))
      }
      return SM
    }

    function kM(MM) {
      const rM = MM._materialSwapQueue;
      if (!rM[0] || MM._runtimeBuilds?.w) return;
      let OM, SM, jM;
      const aM = MM._renderables;
      for (const iM of rM) {
        const rM = iM.material;
        if (!rM) continue;
        const PM = iM._runtimeThinBuild;
        if (PM) {
          SM = PM(MM, iM, SM);
          continue
        }
        const nM = MM._groups.get(rM._buildGroup),
          QM = nM?.r;
        if (!QM) {
          (jM ??= []).push(iM);
          continue
        }
        if (nM._w?.(iM)) {
          (jM ??= []).push([iM, rM]);
          continue
        }
        const zM = MM._meshDisposables.get(iM);
        zM && (MM._meshDisposables.delete(iM), (0, HM.g)(MM.surface.engine, (() => zM.forEach((MM => MM())))));
        const LM = nM.o;
        let mM;
        for (let MM = aM.length; MM--;) aM[MM].mesh === iM && (mM = aM.splice(MM, 1)[0]);
        rM._csmGen = -~rM._csmGen;
        const hM = QM(MM, iM);
        if (LM) {
          const MM = LM.indexOf(mM);
          MM < 0 ? LM.push(hM) : LM[MM] = hM
        }
        OM = aM.push(hM)
      }
      if (OM && (aM.sort(((MM, rM) => MM.order - rM.order)), MM._renderableVersion++, MM._materialEpoch++), rM.length = 0, !jM) return SM;
      const PM = jM;
      return iM.e(671).then((() => iM(64015))).then((rM => {
        let {
          C: iM
        } = rM;
        return iM(MM, PM, SM)
      }), (rM => {
        const iM = MM._runtimeBuilds;
        iM ? iM._x(rM) : console.error(rM)
      }))
    }
    var ZM = null;

    function oM(MM, rM) {
      const iM = MM.engine,
        SM = {
          _kind: "YJ",
          surface: MM,
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
            iM.useFloatingOrigin && SM.camera && !SM.camera._useFloatingOrigin && (SM.camera._useFloatingOrigin = !0, SM.camera._viewVer = -1, SM.camera._vpVer = -1);
            const MM = SM.fixedDeltaMs > 0 ? SM.fixedDeltaMs : iM._currentDelta,
              rM = iM._currentEncoder;
            let OM = 0;
            for (const iM of SM._beforeRender) iM(MM);
            SM._materialSwapQueue.length && kM(SM);
            for (const jM of SM._prePasses) OM += jM.execute(rM, iM);
            for (const jM of SM._uniformUpdaters) jM.update(iM);
            SM._drawCallsPre = OM
          },
          _record: () => SM._frameGraph.execute(),
          _resize() {
            SM._frameGraph.build()
          }
        },
        aM = function() {
          const MM = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let rM = 0; rM < MM._tasks.length; rM++) jM(MM, MM._tasks[rM]);
              for (const rM of MM._tasks)
                for (const MM of rM._passes) MM._initialize()
            },
            execute() {
              let rM = 0;
              for (const iM of MM._tasks)
                if (!1 !== iM.executionEnabled)
                  if (iM.execute) rM += iM.execute();
                  else
                    for (const MM of iM._passes) rM += MM._execute();
              return rM
            },
            dispose() {
              for (const rM of MM._tasks) rM.dispose();
              MM._tasks.length = 0, MM._currentProcessedTask = null
            }
          };
          return MM
        }();
      if (SM._frameGraph = aM, !1 !== rM?.defaultRenderTask) {
        const rM = MM.msaaSamples > 1,
          jM = rM ? (0, OM.e)({
            lbl: "scene-color",
            format: MM.format,
            dFormat: "depth24plus-stencil8",
            samples: MM.msaaSamples,
            size: MM
          }) : MM.scRT,
          PM = rM ? void 0 : (0, OM.e)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: MM
          });
        ! function(MM, rM) {
          MM._tasks.push(rM)
        }(aM, tM({
          name: "YJ",
          rt: jM,
          rst: rM ? MM.scRT : void 0,
          depth: PM
        }, iM, SM))
      }
      return SM._disposables.push((() => aM.dispose())), SM
    }
    async function fM(MM) {
      const rM = MM;
      for (rM._built || (rM._materialSwapQueue.length = 0); rM._deferredBuilders.length;) {
        const MM = rM._deferredBuilders.splice(0);
        await Promise.all(MM.map((MM => MM())))
      }
      await kM(rM), ZM?.get(rM)?.() || (rM._runtimeBuilds?._e(), rM._renderableVersion++, rM._built = !0), await (rM._rebuildHook?.(rM))
    }
    var YM = null;
    async function NM(MM) {
      const rM = MM,
        OM = rM.surface;
      (0, SM.g)(OM, rM) || (await fM(MM), rM._renderables.sort(AM), await Promise.all(rM._frameGraph._tasks.map((MM => MM._preload?.()))), YM && await YM(rM), rM._frameGraph.build(), OM._renderingContexts[0] && (await iM.e(669).then((() => iM(64007)))).configureSwapchainOverlayScene(OM, rM), ZM?.get(rM)?.() || (0, SM.j)(OM, rM))
    }
    var AM = (MM, rM) => MM.order - rM.order
  },
  44354: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => QM,
      g: () => zM
    });
    var OM = iM(44320),
      SM = iM(44327),
      jM = iM(44330),
      aM = iM(44337),
      PM = iM(44341),
      nM = iM(44346);

    function QM(MM, rM, iM) {
      let PM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (rM < 1 || iM < 1) && (0, OM.d)(676, rM, iM);
      const QM = MM._device,
        zM = PM.mipMaps ?? !1,
        LM = PM.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        mM = zM ? (0, nM.e)(rM, iM) : 1,
        HM = QM.createTexture({
          size: {
            width: rM,
            height: iM
          },
          format: LM,
          mipLevelCount: mM,
          usage: SM.h.TEXTURE_BINDING | SM.h.COPY_DST | SM.h.RENDER_ATTACHMENT
        }),
        hM = {
          addressModeU: PM.addressModeU ?? "clamp-to-edge",
          addressModeV: PM.addressModeV ?? "clamp-to-edge",
          minFilter: PM.minFilter ?? "linear",
          magFilter: PM.magFilter ?? "linear",
          mipmapFilter: zM ? "linear" : "nearest"
        },
        JM = (0, aM.c)(MM, hM),
        dM = {
          texture: HM,
          view: HM.createView(),
          sampler: JM,
          width: rM,
          height: iM
        };
      return (0, jM.d)(dM), MM._dlr && MM._dlr.t(dM, {
        kind: "dynamic",
        width: rM,
        height: iM,
        format: LM,
        levels: mM,
        samplerDesc: hM,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), dM
    }

    function zM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const SM = OM.invertY ?? !0,
        jM = OM.premultiplyAlpha ?? !1;
      MM._device.queue.copyExternalImageToTexture({
        source: iM,
        flipY: SM
      }, {
        texture: rM.texture,
        premultipliedAlpha: jM
      }, [rM.width, rM.height]);
      const aM = rM._recoverySource;
      aM && "dynamic" === aM.kind && (aM.source = iM, aM.flipY = SM, aM.premultipliedAlpha = jM), rM.texture.mipLevelCount > 1 && (0, PM.generateMipmaps)(MM, rM.texture)
    }
  },
  44352: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => nM
    });
    var OM = iM(44320),
      SM = iM(44327),
      jM = iM(44330),
      aM = iM(44337),
      PM = iM(44346);
    async function nM(MM, rM) {
      let nM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [QM, zM] = function(MM) {
        const rM = MM,
          iM = [
            [rM.displayWidth, rM.displayHeight],
            [rM.videoWidth, rM.videoHeight],
            [rM.naturalWidth, rM.naturalHeight],
            [rM.width, rM.height]
          ];
        for (const [OM, SM] of iM)
          if (void 0 !== OM && void 0 !== SM && Number.isInteger(OM) && Number.isInteger(SM) && OM > 0 && SM > 0) return [OM, SM];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(rM), [LM, mM] = function(MM, rM, iM) {
        if (void 0 === iM) return [MM, rM];
        if (!Number.isInteger(iM) || iM < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${iM})`);
        if (Math.max(MM, rM) <= iM) return [MM, rM];
        const OM = iM / Math.max(MM, rM);
        return MM >= rM ? [iM, Math.max(1, Math.round(rM * OM))] : [Math.max(1, Math.round(MM * OM)), iM]
      }(QM, zM, nM.maxDimension), HM = nM.mipMaps ?? !0, hM = nM.premultiplyAlpha ?? !1;
      let JM = rM,
        dM = null;
      const yM = {
        texture: null
      };
      try {
        LM === QM && mM === zM || (dM = await createImageBitmap(rM, {
          resizeWidth: LM,
          resizeHeight: mM,
          resizeQuality: "high",
          premultiplyAlpha: hM ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), JM = dM);
        const lM = MM._device,
          EM = nM.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          UM = HM ? (0, PM.e)(LM, mM) : 1,
          GM = UM > 1 ? (await Promise.resolve().then((() => iM(44341)))).generateMipmaps : null,
          CM = {
            addressModeU: nM.addressModeU ?? "repeat",
            addressModeV: nM.addressModeV ?? "repeat",
            minFilter: nM.minFilter ?? "linear",
            magFilter: nM.magFilter ?? "linear",
            mipmapFilter: HM ? "linear" : "nearest"
          };
        CM.maxAnisotropy = "linear" === CM.minFilter && "linear" === CM.magFilter && "linear" === CM.mipmapFilter ? 4 : 1;
        const eM = nM.invertY ?? !0,
          bM = async rM => {
            let iM;
            lM.pushErrorScope("validation"), lM.pushErrorScope("out-of-memory");
            let jM = null;
            try {
              const iM = yM.texture = lM.createTexture({
                size: {
                  width: LM,
                  height: mM
                },
                format: EM,
                mipLevelCount: UM,
                usage: SM.h.TEXTURE_BINDING | SM.h.COPY_DST | SM.h.RENDER_ATTACHMENT
              });
              lM.queue.copyExternalImageToTexture({
                source: rM,
                flipY: eM
              }, {
                texture: iM,
                premultipliedAlpha: hM
              }, {
                width: LM,
                height: mM
              }), GM && GM(MM, iM), jM = (0, aM.c)(MM, CM)
            } catch (HM) {
              iM = HM
            }
            const [PM, nM] = await Promise.all([lM.popErrorScope(), lM.popErrorScope()]);
            if (iM) throw iM;
            const QM = nM ?? PM;
            if (QM) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${QM.message}`, {
              cause: QM
            });
            const zM = yM.texture;
            return zM && jM || (0, OM.d)(677), {
              texture: zM,
              view: zM.createView(),
              sampler: jM,
              width: LM,
              height: mM
            }
          }, wM = await (MM._dlr?.x(JM, LM, mM, EM, UM, CM, eM, hM, bM)) ?? await bM(JM);
        return (0, jM.d)(wM), wM
      } catch (lM) {
        throw yM.texture?.destroy(), lM
      } finally {
        dM?.close()
      }
    }
  },
  44341: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      generateMipmaps: () => HM,
      recordMipmaps: () => hM
    });
    var OM = iM(44327),
      SM = iM(44337),
      jM = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var aM = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      PM = null,
      nM = null,
      QM = null,
      zM = null,
      LM = null;

    function mM(MM) {
      const rM = MM._device;
      rM !== LM && (PM?.clear(), PM = null, nM = null, QM = null, zM = null, LM = null, LM = rM), nM ??= rM.createShaderModule({
        code: aM
      }), QM ??= function(MM) {
        return (0, SM.c)(MM, jM)
      }(MM), zM ??= rM.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: OM.g.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: OM.g.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function HM(MM, rM, iM) {
      const OM = MM._device,
        SM = OM.createCommandEncoder();
      hM(MM, rM, SM, iM), OM.queue.submit([SM.finish()])
    }

    function hM(MM, rM, iM, OM) {
      if (rM.mipLevelCount <= 1) return;
      const SM = MM._device,
        jM = function(MM, rM) {
          const iM = MM._device;
          mM(MM), PM ??= new Map;
          let OM = PM.get(rM);
          return OM || (OM = iM.createRenderPipeline({
            layout: iM.createPipelineLayout({
              bindGroupLayouts: [zM]
            }),
            vertex: {
              module: nM,
              entryPoint: "vs"
            },
            fragment: {
              module: nM,
              entryPoint: "fs",
              targets: [{
                format: rM
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), PM.set(rM, OM)), OM
        }(MM, rM.format),
        aM = null != OM ? {
          dimension: "2d",
          baseArrayLayer: OM,
          arrayLayerCount: 1
        } : {};
      for (let PM = 1; PM < rM.mipLevelCount; PM++) {
        const MM = rM.createView({
            baseMipLevel: PM - 1,
            mipLevelCount: 1,
            ...aM
          }),
          OM = rM.createView({
            baseMipLevel: PM,
            mipLevelCount: 1,
            ...aM
          }),
          nM = SM.createBindGroup({
            layout: zM,
            entries: [{
              binding: 0,
              resource: MM
            }, {
              binding: 1,
              resource: QM
            }]
          }),
          LM = iM.beginRenderPass({
            colorAttachments: [{
              view: OM,
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
        LM.setPipeline(jM), LM.setBindGroup(0, nM), LM.draw(3), LM.end()
      }
    }
  },
  44346: (MM, rM, iM) => {
    function OM(MM, rM) {
      return Math.floor(Math.log2(Math.max(MM, rM))) + 1
    }
    iM.d(rM, {
      e: () => OM
    })
  },
  44311: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => QM,
      e: () => zM
    });
    var OM = iM(44320),
      SM = iM(44327),
      jM = iM(44330),
      aM = iM(44337),
      PM = iM(44341),
      nM = iM(44346);

    function QM(MM, rM, iM, PM) {
      let QM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (rM < 1 || iM < 1 || PM < 1) && (0, OM.d)(722, rM, iM, PM);
      const zM = MM._device,
        LM = QM.mipMaps ?? !0,
        mM = QM.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        HM = zM.createTexture({
          size: {
            width: rM,
            height: iM,
            depthOrArrayLayers: PM
          },
          dimension: "2d",
          format: mM,
          mipLevelCount: LM ? (0, nM.e)(rM, iM) : 1,
          usage: SM.h.TEXTURE_BINDING | SM.h.COPY_DST | SM.h.RENDER_ATTACHMENT
        }),
        hM = (0, aM.c)(MM, {
          addressModeU: QM.addressModeU ?? "repeat",
          addressModeV: QM.addressModeV ?? "repeat",
          minFilter: QM.minFilter ?? "linear",
          magFilter: QM.magFilter ?? "linear",
          mipmapFilter: LM ? "linear" : "nearest"
        }),
        JM = {
          texture: HM,
          view: HM.createView({
            dimension: "2d-array"
          }),
          sampler: hM,
          width: rM,
          height: iM,
          layers: PM
        };
      return (0, jM.d)(JM), JM
    }

    function zM(MM, rM, iM, SM) {
      let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (iM < 0 || iM >= rM.layers || (0 | iM) !== iM) && (0, OM.d)(723, rM.layers, iM);
      const aM = jM.invertY ?? !0,
        nM = jM.premultiplyAlpha ?? !1;
      MM._device.queue.copyExternalImageToTexture({
        source: SM,
        flipY: aM
      }, {
        texture: rM.texture,
        origin: [0, 0, iM],
        premultipliedAlpha: nM
      }, [rM.width, rM.height, 1]), rM.texture.mipLevelCount > 1 && (0, PM.generateMipmaps)(MM, rM.texture, iM)
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);