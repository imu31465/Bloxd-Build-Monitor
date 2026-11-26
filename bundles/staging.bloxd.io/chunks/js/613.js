export const id = 613;
export const ids = [613];
export const modules = {
  44612: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    var JV = xV(44603),
      YV = xV(44615);

    function UV(VV) {
      (0, YV.b)(VV), (0, JV.p)(VV);
      const eV = VV._surfaces;
      for (const xV of eV) xV._renderingContexts.length = 0, xV._ro?.disconnect(), xV._context.unconfigure();
      eV.length = 0;
      try {
        VV._disposeManagedResources?.(), VV._disposeStorageBuffers?.()
      } finally {
        VV._device.destroy()
      }
    }
  },
  44603: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => vV,
      e: () => BV,
      h: () => rV,
      i: () => kV,
      l: () => tV,
      m: () => jV,
      p: () => qV
    });
    var JV = xV(44559);
    var YV = "Babylon Lite v1.32.0",
      UV = xV(44609);

    function yV(VV) {
      return "clientWidth" in VV
    }
    var pV = 1;

    function QV(VV, eV, xV) {
      const QV = eV.getContext("webgpu");
      QV || (0, JV.b)(54), yV(eV) && eV.setAttribute("data-engine", YV);
      const nV = xV?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        wV = xV?.srgb ? (ZV = nV).endsWith("-srgb") ? ZV : `${ZV}-srgb` : nV;
      var ZV;
      const vV = xV?.alphaMode ?? "opaque";
      QV.configure({
        device: VV._device,
        format: nV,
        alphaMode: vV,
        viewFormats: [wV]
      });
      const rV = 1 === xV?.msaaSamples ? 1 : 4,
        kV = (0, UV.d)({
          lbl: "swapchain",
          format: wV,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return kV._eager = !0, {
        engine: VV,
        canvas: eV,
        format: wV,
        msaaSamples: rV,
        scRT: kV,
        maxDevicePixelRatio: xV?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: pV++,
        _context: QV,
        _configureFormat: nV,
        _alphaMode: vV,
        _renderingContexts: []
      }
    }

    function nV(VV) {
      const eV = VV._context.getCurrentTexture(),
        xV = VV.scRT;
      xV._colorTexture = eV, xV._colorView = eV.createView({
        format: VV.format
      }), xV._width = eV.width, xV._height = eV.height
    }

    function wV(VV) {
      const eV = VV.canvas;
      if (!yV(eV)) return;
      const xV = VV._w ?? eV.clientWidth,
        JV = VV._h ?? eV.clientHeight;
      if (!(xV > 0 && JV > 0)) return;
      const YV = Math.min(globalThis.devicePixelRatio || 1, VV.maxDevicePixelRatio);
      ZV(VV, xV * YV | 0, JV * YV | 0)
    }

    function ZV(VV, eV, xV) {
      const JV = VV.canvas,
        YV = 0 | eV,
        UV = 0 | xV;
      if (YV > 0 && UV > 0 && (YV !== JV.width || UV !== JV.height)) {
        JV.width = YV, JV.height = UV, VV.scRT._width = YV, VV.scRT._height = UV;
        for (const eV of VV._renderingContexts) eV._resize?.()
      }
    }
    var vV = 0;

    function rV(VV, eV) {
      return -1 !== VV._renderingContexts.indexOf(eV)
    }

    function kV(VV, eV) {
      return -1 === VV._renderingContexts.indexOf(eV) && (VV._renderingContexts.push(eV), !0)
    }
    var bV = null;
    var EV = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function BV(VV, eV) {
      const UV = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...bV ? bV() : {}
      });
      UV || (0, JV.b)(47);
      const yV = bV?.deviceFeatures?.(UV, eV) ?? function(VV) {
          return EV.filter((eV => VV.features.has(eV)))
        }(UV),
        pV = await UV.requestDevice({
          requiredFeatures: yV,
          requiredLimits: eV?.requiredLimits
        });
      console.log(`${YV} - WebGPU engine`);
      const ZV = !!eV?.useHighPrecisionMatrix,
        vV = !!eV?.useFloatingOrigin;
      if (vV && !ZV && (0, JV.b)(48), ZV) {
        const {
          allocateF64Mat4: VV
        } = await xV.e(665).then((() => xV(64378)));
        0
      }
      let rV, kV, BV, jV;
      if (vV) {
        const [{
          wrapRenderableForFO: VV,
          lightFoVersion: eV,
          applyLightFoOffset: JV
        }, {
          makePackMeshWorld: YV
        }] = await Promise.all([xV.e(666).then((() => xV(64380))), xV.e(667).then((() => xV(64383)))]);
        rV = VV, kV = YV, BV = eV, jV = JV
      }
      const qV = {
          _device: pV
        },
        tV = [qV];
      return Object.assign(qV, {
        engine: qV,
        surfaces: tV,
        _surfaces: tV,
        _device: pV,
        _options: eV,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: ZV,
        useFloatingOrigin: vV,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: rV,
        _makePackMeshWorld: kV,
        _lightFoVersion: BV,
        _applyLightFoOffset: jV
      }, QV(qV, VV, eV)), wV(qV), nV(qV), qV
    }

    function jV(VV, eV, xV) {
      ZV(VV, eV, xV)
    }

    function qV(VV) {
      VV._animFrameId && cancelAnimationFrame(VV._animFrameId), VV._animFrameId = 0, VV._renderFn = null, VV._flushGpuRetirements?.(VV)
    }

    function tV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VV.surfaces;
      if (xV !== VV.surfaces)
        for (let YV = xV.length; YV--;) xV[YV].engine !== VV && (0, JV.b)(49);
      FV(VV, eV, xV)
    }

    function FV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VV._surfaces,
        JV = 0;
      for (let UV = xV.length; UV--;) JV += xV[UV]._renderingContexts.length;
      if (!JV) return VV.drawCallCount = 0, VV._flushGpuRetirements?.(VV);
      const YV = VV._device.createCommandEncoder({
        label: "frame"
      });
      VV._currentEncoder = YV, VV._currentDelta = eV;
      try {
        VV._gpuTimerBegin?.(YV), JV = 0;
        for (let VV = 0; VV < xV.length; VV++) {
          const eV = xV[VV];
          eV._capturePreFrame?.(eV), nV(eV);
          const YV = eV._renderingContexts;
          for (let VV = 0; VV < YV.length; VV++) {
            const eV = YV[VV];
            eV._update(), JV += eV._drawCallsPre + eV._record()
          }
        }
        const eV = VV._currentEncoder;
        for (let VV = 0; VV < xV.length; VV++) {
          const JV = xV[VV];
          JV._captureService?.(JV, eV)
        }
        VV._gpuTimerEnd?.(eV), VV._cbs[0] = eV.finish(), VV._device.queue.submit(VV._cbs), VV._flushGpuRetirements?.(VV), VV.drawCallCount = JV, VV._gpuTimerResolve?.()
      } finally {
        VV._currentEncoder = void 0
      }
    }
  },
  44564: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      g: () => UV,
      k: () => JV
    });
    var JV = globalThis.GPUTextureUsage,
      YV = globalThis.GPUBufferUsage,
      UV = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  44615: (VV, eV, xV) => {
    function JV(VV) {
      YV(VV.splice(0))
    }

    function YV(VV) {
      for (const xV of VV) try {
        xV()
      } catch (eV) {
        console.error("GPU resource retirement failed.", eV)
      }
    }

    function UV(VV, eV) {
      VV._flushGpuRetirements ??= yV, (VV._retirements ??= []).push(eV)
    }

    function yV(VV) {
      const eV = VV._retirements;
      if (!eV) return;
      VV._retirements = null;
      const xV = VV._retiring ??= new Set;
      xV.add(eV), queueMicrotask((() => {
        VV._device.queue.onSubmittedWorkDone().then((() => {
          xV.delete(eV), JV(eV)
        })).catch((() => {}))
      }))
    }

    function pV(VV) {
      const eV = VV._retirements,
        xV = VV._retiring;
      VV._retirements = null, VV._retiring = null, eV && JV(eV), xV?.forEach(JV)
    }
    xV.d(eV, {
      b: () => pV,
      e: () => UV
    })
  },
  44609: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      f: () => yV,
      g: () => pV
    });
    var JV = xV(44564);

    function YV(VV) {
      const eV = VV.size;
      return "canvas" in eV ? eV.canvas : eV
    }

    function UV(VV) {
      return {
        _descriptor: VV,
        _resolveSize: YV,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function yV(VV, eV) {
      if (VV._eager) return void VV._syncEager?.(eV);
      pV(VV);
      const xV = VV._descriptor,
        {
          width: UV,
          height: yV
        } = (VV._resolveSize ?? YV)(xV);
      VV._width = UV, VV._height = yV;
      const QV = eV._device;
      xV.format && (VV._colorTexture = QV.createTexture({
        label: xV.lbl,
        size: {
          width: UV,
          height: yV
        },
        format: xV.format,
        sampleCount: xV.samples,
        usage: JV.k.RENDER_ATTACHMENT | JV.k.TEXTURE_BINDING | JV.k.COPY_SRC | JV.k.COPY_DST
      }), VV._colorView = VV._colorTexture.createView()), xV.dFormat && (VV._depthTexture = QV.createTexture({
        label: xV.lbl,
        size: {
          width: UV,
          height: yV
        },
        format: xV.dFormat,
        sampleCount: xV.samples,
        usage: JV.k.RENDER_ATTACHMENT | JV.k.TEXTURE_BINDING
      }), VV._depthView = VV._depthTexture.createView())
    }

    function pV(VV) {
      if (!VV || VV._eager && !VV._disposeAttachments) return;
      const eV = VV._colorTexture,
        xV = VV._depthTexture;
      if (VV._colorTexture = VV._depthTexture = null, VV._colorView = VV._depthView = null, VV._width = VV._height = 0, VV._disposeAttachments) VV._disposeAttachments(eV, xV);
      else try {
        eV?.destroy()
      } finally {
        !1 !== VV._ownsDepthTexture && xV?.destroy()
      }
    }
  },
  44625: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV,
      f: () => YV,
      j: () => UV
    });
    var JV = Float32Array,
      YV = Float64Array,
      UV = Uint32Array
  },
  44627: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    var JV = 16
  },
  44559: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV
    });
    var JV = null;

    function YV(VV) {
      for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), YV = 1; YV < eV; YV++) xV[YV - 1] = arguments[YV];
      const UV = new Error(JV?.(VV, xV) ?? `#${VV}`);
      throw UV.lite = xV, UV
    }
  },
  44592: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV
    });
    var JV = xV(44578);

    function YV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const xV = eV.compare,
        YV = eV.lodMinClamp ?? 0,
        UV = eV.lodMaxClamp ?? 32,
        yV = void 0 !== xV || 0 !== YV || 32 !== UV ? `${xV??""}:${YV}:${UV}` : "";
      return (0, JV.d)(VV, eV, yV)
    }
  },
  44570: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = null;

    function YV(VV) {
      const eV = JV ??= new WeakMap;
      eV.set(VV, (eV.get(VV) ?? 0) + 1)
    }

    function UV(VV) {
      YV(VV.texture)
    }
  },
  44578: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV
    });
    var JV = null,
      YV = "nearest",
      UV = "clamp-to-edge",
      yV = {
        minFilter: YV,
        magFilter: YV,
        mipmapFilter: YV,
        addressModeU: UV,
        addressModeV: UV,
        addressModeW: UV,
        maxAnisotropy: 1
      };

    function pV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const YV = VV._device,
        UV = JV ??= new WeakMap;
      let pV = UV.get(YV);
      pV || UV.set(YV, pV = new Map);
      let QV = xV;
      for (const JV in yV) {
        const VV = JV;
        QV += `:${eV[VV]??yV[VV]}`
      }
      let nV = pV.get(QV);
      return nV || pV.set(QV, nV = YV.createSampler(eV)), nV
    }
  },
  44621: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => aV,
      h: () => hV
    });
    var JV = xV(44609),
      YV = xV(44603);

    function UV(VV, eV) {
      eV._passes.length = 0, VV._currentProcessedTask = eV;
      try {
        eV.record()
      } finally {
        VV._currentProcessedTask = null
      }
    }
    var yV = xV(44625);

    function pV(VV) {
      const eV = VV.worldMatrixVersion;
      if (VV._viewVer === eV) return VV._viewCache;
      const xV = VV._viewCache,
        JV = VV.worldMatrix,
        YV = VV._useFloatingOrigin,
        UV = YV ? 0 : JV[12],
        yV = YV ? 0 : JV[13],
        pV = YV ? 0 : JV[14];
      return xV[0] = JV[0], xV[1] = JV[4], xV[2] = JV[8], xV[3] = 0, xV[4] = JV[1], xV[5] = JV[5], xV[6] = JV[9], xV[7] = 0, xV[8] = JV[2], xV[9] = JV[6], xV[10] = JV[10], xV[11] = 0, xV[12] = -(JV[0] * UV + JV[1] * yV + JV[2] * pV), xV[13] = -(JV[4] * UV + JV[5] * yV + JV[6] * pV), xV[14] = -(JV[8] * UV + JV[9] * yV + JV[10] * pV), xV[15] = 1, VV._viewVer = eV, xV
    }
    var QV = null;

    function nV(VV) {
      return VV._projFov === VV.fov && VV._projNear === VV.nearPlane && VV._projFar === VV.farPlane || (VV._projFov = VV.fov, VV._projNear = VV.nearPlane, VV._projFar = VV.farPlane, VV._projRev = (VV._projRev ?? 0) + 1), VV.worldMatrixVersion + (VV._projRev ?? 0)
    }

    function wV(VV, eV) {
      const xV = nV(VV);
      if (VV._projVer === xV && VV._projAspect === eV) return VV._projCache;
      const JV = VV._projCache;
      return null !== QV && VV.ortho ? QV(VV, eV, JV) : function(VV, eV, xV, JV, YV) {
        const UV = 1 / Math.tan(.5 * eV),
          yV = YV - JV;
        VV[0] = UV / xV, VV[5] = UV, VV[10] = -JV / yV, VV[11] = 1, VV[14] = YV * JV / yV
      }(JV, VV.fov, eV, VV.nearPlane, VV.farPlane), VV._projVer = xV, VV._projAspect = eV, JV
    }
    var ZV = xV(44564);

    function vV(VV, eV, xV) {
      return VV._device.createBuffer({
        label: xV,
        size: (JV = eV, YV = 16, Math.ceil(JV / YV) * YV),
        usage: ZV.e.UNIFORM | ZV.e.COPY_DST
      });
      var JV, YV
    }
    var rV = xV(44615),
      kV = null;

    function bV(VV) {
      const eV = VV._device,
        xV = kV ??= new WeakMap;
      let JV = xV.get(eV);
      return JV || (JV = eV.createBindGroupLayout({
        label: "yE",
        entries: [{
          binding: 0,
          visibility: ZV.g.VERTEX | ZV.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: ZV.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), xV.set(eV, JV)), JV
    }

    function EV(VV, eV, xV) {
      const JV = VV._device,
        YV = vV(VV, eV.byteLength, xV);
      try {
        JV.queue.writeBuffer(YV, 0, eV.buffer, eV.byteOffset, eV.byteLength)
      } catch (UV) {
        throw YV.destroy(), UV
      }
      return YV
    }
    var BV = xV(44627),
      jV = new yV.j(1),
      qV = new yV.b(jV.buffer);

    function tV(VV) {
      let eV = 0;
      for (const xV of VV) eV += xV._lightVersion ?? 0;
      return eV
    }

    function FV(VV, eV) {
      VV.fill(0);
      let xV = 0;
      for (const JV of eV) {
        if (xV >= BV.b) break;
        JV._writeLightUbo && (JV._writeLightUbo(VV, 4 + 16 * xV), xV++)
      }
      jV[0] = xV, VV[0] = qV[0]
    }

    function TV(VV, eV) {
      let xV = eV._lightGpuState;
      const JV = 16 + 16 * BV.b * 4;
      if (xV && xV._byteSize === JV) return xV;
      const YV = !xV;
      xV?._buffer.destroy();
      const UV = new yV.b(JV / 4);
      return FV(UV, eV.lights), VV._applyLightFoOffset?.(UV, eV), xV = {
        _buffer: EV(VV, UV),
        _scratch: UV,
        WH: tV(eV.lights) + (VV._lightFoVersion?.(eV) ?? 0),
        _listVersion: eV._lightListVersion ?? 0,
        _lightCount: eV.lights.length,
        _byteSize: JV
      }, eV._lightGpuState = xV, YV && eV._disposables.push((() => {
        eV._lightGpuState?._buffer.destroy(), eV._lightGpuState = void 0
      })), xV
    }

    function PV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const YV = eV;
      if (0 === JV && 16 === YV.length) return void VV.set(YV, xV);
      const UV = JV,
        yV = xV;
      VV[yV + 0] = YV[UV + 0], VV[yV + 1] = YV[UV + 1], VV[yV + 2] = YV[UV + 2], VV[yV + 3] = YV[UV + 3], VV[yV + 4] = YV[UV + 4], VV[yV + 5] = YV[UV + 5], VV[yV + 6] = YV[UV + 6], VV[yV + 7] = YV[UV + 7], VV[yV + 8] = YV[UV + 8], VV[yV + 9] = YV[UV + 9], VV[yV + 10] = YV[UV + 10], VV[yV + 11] = YV[UV + 11], VV[yV + 12] = YV[UV + 12], VV[yV + 13] = YV[UV + 13], VV[yV + 14] = YV[UV + 14], VV[yV + 15] = YV[UV + 15]
    }

    function AV(VV, eV, xV, JV, YV) {
      VV.fill(0);
      const UV = function(VV, eV) {
          const xV = nV(VV);
          if (VV._vpVer === xV && VV._vpAspect === eV) return VV._vpCache;
          const JV = VV._vpCache;
          return function(VV, eV, xV, JV, YV, UV) {
            const yV = xV[JV],
              pV = xV[JV + 1],
              QV = xV[JV + 2],
              nV = xV[JV + 3],
              wV = xV[JV + 4],
              ZV = xV[JV + 5],
              vV = xV[JV + 6],
              rV = xV[JV + 7],
              kV = xV[JV + 8],
              bV = xV[JV + 9],
              EV = xV[JV + 10],
              BV = xV[JV + 11],
              jV = xV[JV + 12],
              qV = xV[JV + 13],
              tV = xV[JV + 14],
              FV = xV[JV + 15];
            let TV = YV[UV],
              PV = YV[UV + 1],
              AV = YV[UV + 2],
              NV = YV[UV + 3];
            VV[eV] = yV * TV + wV * PV + kV * AV + jV * NV, VV[eV + 1] = pV * TV + ZV * PV + bV * AV + qV * NV, VV[eV + 2] = QV * TV + vV * PV + EV * AV + tV * NV, VV[eV + 3] = nV * TV + rV * PV + BV * AV + FV * NV, TV = YV[UV + 4], PV = YV[UV + 5], AV = YV[UV + 6], NV = YV[UV + 7], VV[eV + 4] = yV * TV + wV * PV + kV * AV + jV * NV, VV[eV + 5] = pV * TV + ZV * PV + bV * AV + qV * NV, VV[eV + 6] = QV * TV + vV * PV + EV * AV + tV * NV, VV[eV + 7] = nV * TV + rV * PV + BV * AV + FV * NV, TV = YV[UV + 8], PV = YV[UV + 9], AV = YV[UV + 10], NV = YV[UV + 11], VV[eV + 8] = yV * TV + wV * PV + kV * AV + jV * NV, VV[eV + 9] = pV * TV + ZV * PV + bV * AV + qV * NV, VV[eV + 10] = QV * TV + vV * PV + EV * AV + tV * NV, VV[eV + 11] = nV * TV + rV * PV + BV * AV + FV * NV, TV = YV[UV + 12], PV = YV[UV + 13], AV = YV[UV + 14], NV = YV[UV + 15], VV[eV + 12] = yV * TV + wV * PV + kV * AV + jV * NV, VV[eV + 13] = pV * TV + ZV * PV + bV * AV + qV * NV, VV[eV + 14] = QV * TV + vV * PV + EV * AV + tV * NV, VV[eV + 15] = nV * TV + rV * PV + BV * AV + FV * NV
          }(JV, 0, wV(VV, eV), 0, pV(VV), 0), VV._vpVer = xV, VV._vpAspect = eV, JV
        }(JV, YV),
        yV = pV(JV),
        QV = JV.worldMatrix;
      PV(VV, UV, 0), PV(VV, yV, 16), eV.useFloatingOrigin ? (VV[32] = 0, VV[33] = 0, VV[34] = 0) : (VV[32] = QV[12], VV[33] = QV[13], VV[34] = QV[14]), VV[87] = eV.canvas.width;
      const ZV = xV.imageProcessing;
      VV[76] = ZV.exposure, VV[77] = ZV.contrast, VV[78] = xV._envTextures?.lodGenerationScale ?? .8, VV[79] = +ZV.toneMappingEnabled, VV[37] = eV.canvas.height
    }

    function NV(VV, eV) {
      return {
        _renderables: VV,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: eV
      }
    }

    function XV(VV, eV, xV) {
      VV.clr ??= !0;
      const YV = VV.rt._descriptor,
        UV = VV.depth?._descriptor,
        QV = {
          _colorFormat: YV.format,
          _depthStencilFormat: UV?.dFormat ?? YV.dFormat,
          _depthCompare: YV.depthCompare ?? UV?.depthCompare,
          _sampleCount: YV.samples
        },
        wV = {
          loadOp: "clear",
          storeOp: "store"
        },
        ZV = {
          ...NV([], -1),
          name: VV.name,
          _config: VV,
          _ownsTargets: !VV.sharedRt,
          engine: eV,
          yE: xV,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [wV]
          },
          _colorAttachment: wV,
          _sceneUBO: vV(eV, 368),
          _suData: new yV.b(92),
          _sceneUboCacheKey: [],
          _targetSignature: QV,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (ZV._disposed) throw new Error("RenderTask has been disposed.");
            ZV._recordExplicit ? ZV._recordExplicit(ZV, !0) : GV(ZV, !1 !== VV.autoMirror ? xV._renderables.slice() : ZV._renderables, !0)
          },
          execute: () => function(VV, eV, xV) {
            if (!1 === VV.enabled) return 0;
            const JV = VV.yE;
            ! function(VV, eV, xV) {
              const JV = VV.yE;
              !1 !== VV._config.autoMirror && VV._lastVersion !== JV._renderableVersion && GV(VV, JV._renderables.slice());
              RV(VV, eV);
              const YV = VV._updateContext,
                UV = VV._config.cam ?? JV.camera;
              xV._colorFormat && (VV._config._skipClusteredLights || JV._clusteredLightUpdater?.(UV, YV.targetWidth, YV.targetHeight), function(VV, eV) {
                const xV = TV(VV, eV),
                  JV = tV(eV.lights) + (VV._lightFoVersion?.(eV) ?? 0),
                  YV = eV._lightListVersion ?? 0;
                JV === xV.WH && YV === xV._listVersion && eV.lights.length === xV._lightCount || (xV.WH = JV, xV._listVersion = YV, xV._lightCount = eV.lights.length, FV(xV._scratch, eV.lights), VV._applyLightFoOffset?.(xV._scratch, eV), VV._device.queue.writeBuffer(xV._buffer, 0, xV._scratch)), xV._buffer
              }(eV, JV));
              (function(VV, eV, xV, JV) {
                if (!JV) return;
                const YV = JV.viewport,
                  UV = VV._config.rt,
                  yV = (VV._config.cs ? eV.canvas.width / eV.canvas.height : UV._width / UV._height) * (YV ? YV.width / YV.height : 1),
                  pV = xV.fog,
                  QV = xV.imageProcessing,
                  wV = nV(JV),
                  ZV = xV._envTextures,
                  vV = VV._sceneUboCacheKey;
                if (vV[0] === JV && vV[1] === pV && vV[2] === wV && vV[3] === yV && vV[4] === QV.exposure && vV[5] === QV.contrast && vV[6] === ZV) return;
                vV[0] = JV, vV[1] = pV, vV[2] = wV, vV[3] = yV, vV[4] = QV.exposure, vV[5] = QV.contrast, vV[6] = ZV;
                const rV = VV._suData;
                AV(rV, eV, xV, JV, yV);
                const kV = xV._sceneUboContributors;
                if (kV)
                  for (const nV of kV) nV(rV, xV);
                eV._device.queue.writeBuffer(VV._sceneUBO, 0, rV)
              })(VV, eV, JV, UV), YV.U1 = UV, VV._batchState?._reset(), gV(VV._opaqueBindings, YV), gV(VV._directBindings, YV), gV(VV._transparentBindings, YV), VV._batchState?._flush(eV),
                function(VV, eV) {
                  const xV = VV._transparentBindings;
                  if (xV.length <= 1 || !eV) return;
                  const JV = pV(eV);
                  for (const YV of xV) {
                    const VV = YV.renderable._worldCenter;
                    YV._sortDistance = VV ? VV[0] * JV[2] + VV[1] * JV[6] + VV[2] * JV[10] + JV[14] : 0
                  }
                  xV.sort(MV)
                }(VV, UV)
            }(VV, eV, xV);
            const YV = VV._colorAttachment,
              UV = VV._config;
            UV.rt._colorView && (UV.rt === JV.surface.scRT && (YV.view = UV.rt._colorView), YV.resolveTarget = UV.rst?._colorView ?? void 0, YV.clearValue = UV.clrColor ?? JV.clearColor, YV.loadOp = UV.clr ? "clear" : "load");
            if (VV._executeWithTransmission) return VV._executeWithTransmission(xV._sampleCount);
            const yV = eV._currentEncoder.beginRenderPass(VV._renderPassDescriptor),
              QV = WV(VV, yV);
            return yV.end(), QV
          }(ZV, eV, QV),
          dispose() {
            if (ZV._disposed) return;
            ZV._disposed = !0;
            const eV = ZV._pendingMeshes;
            eV && (eV.length = 0);
            for (const VV of ZV._renderables) ZV._retireRenderable?.(ZV.engine, VV);
            ZV._passes.length = ZV._opaqueBindings.length = ZV._directBindings.length = 0, ZV._transparentBindings.length = ZV._renderables.length = ZV._ob.length = 0, ZV._ownsTargets && ((0, JV.g)(VV.rt), (0, JV.g)(VV.rst)), VV.depth?._eager || (0, JV.g)(VV.depth);
            const xV = ZV._sceneUBO;
            (0, rV.e)(ZV.engine, (() => xV.destroy())), ZV._batchState?._release(ZV.engine), ZV._batchState = void 0
          }
        };
      return ZV
    }

    function MV(VV, eV) {
      return eV._sortDistance - VV._sortDistance || VV.renderable.order - eV.renderable.order
    }

    function zV(VV, eV) {
      return VV.renderable.order - eV.renderable.order
    }

    function GV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV._renderables,
        xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        YV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        UV = arguments.length > 4 ? arguments[4] : void 0;
      const yV = VV._config,
        pV = yV.rt,
        QV = VV._batchState,
        nV = NV(eV, VV.yE._renderableVersion);
      if (xV) {
        const eV = (eV, xV) => {
          eV && (xV || VV._ownsTargets || eV._eager) && (0, JV.f)(eV, VV.engine)
        };
        eV(pV), pV._descriptor.samples > 1 && eV(yV.rst), eV(yV.depth, !0)
      }
      const {
        _opaqueBindings: wV,
        _directBindings: ZV,
        _transparentBindings: vV
      } = nV;
      try {
        for (const xV of eV) {
          const eV = xV.bind(VV.engine, VV._targetSignature);
          nV._batchState = VV._targetSignature._collectBatches?.(nV._batchState, eV), xV.isTransparent || xV._transmissive ? vV.push(eV) : xV._direct ? ZV.push(eV) : wV.push(eV)
        }
        wV.sort(zV), ZV.sort(zV), xV && RV(VV, VV.engine, !1)
      } catch (rV) {
        throw nV._batchState?._release(void 0, UV ?? [QV]), rV
      }
      return xV && (! function(VV, eV) {
        const xV = VV._config,
          JV = VV._colorAttachment;
        JV.view = eV._colorView, VV._renderPassDescriptor.colorAttachments = eV._colorView ? [JV] : [];
        const YV = xV.depth ?? eV,
          UV = YV._depthView;
        let yV;
        if (UV) {
          const VV = YV._descriptor,
            eV = (xV.depth ? YV._eager : !1 === xV.depthClear) ? "load" : "clear";
          yV = {
            view: UV,
            depthClearValue: VV.depthClearValue ?? 0,
            depthLoadOp: eV,
            depthStoreOp: "store"
          }, VV.dFormat?.includes("stencil") && (yV.stencilClearValue = 0, yV.stencilLoadOp = eV, yV.stencilStoreOp = "store")
        }
        VV._renderPassDescriptor.depthStencilAttachment = yV
      }(VV, pV), VV._updateContext.targetWidth = pV._width, VV._updateContext.targetHeight = pV._height), YV && (Object.assign(VV, nV), QV?._release(VV.engine, [nV._batchState])), nV
    }

    function WV(VV, eV) {
      const xV = VV.engine,
        JV = VV._config,
        UV = JV.rt,
        yV = VV.yE,
        pV = VV._opaqueBindings,
        QV = VV._ob,
        nV = VV._sceneBG;
      if (function(VV, eV, xV, JV) {
          const YV = eV?.viewport;
          if (!YV) return;
          const UV = Math.floor(YV.x * xV),
            yV = Math.floor((1 - YV.y - YV.height) * JV),
            pV = Math.ceil((YV.x + YV.width) * xV) - UV,
            QV = Math.ceil((1 - YV.y) * JV) - yV;
          VV.setViewport(UV, yV, pV, QV, 0, 1), VV.setScissorRect(UV, yV, pV, QV)
        }(eV, JV.cam ?? yV.camera, UV._width, UV._height), eV.setBindGroup(0, nV), VV._lastVis !== YV.b || !QV.length) {
        const eV = UV._descriptor,
          JV = xV._device.createRenderBundleEncoder({
            colorFormats: eV.format ? [eV.format] : [],
            depthStencilFormat: VV._targetSignature._depthStencilFormat,
            sampleCount: eV.samples
          });
        JV.setBindGroup(0, nV), DV(JV, pV, xV), QV[0] = JV.finish(), VV._lastVis = YV.b
      }
      let wV = pV.length;
      return eV.executeBundles(QV), eV.setBindGroup(0, nV), wV += DV(eV, VV._directBindings, xV), wV += DV(eV, VV._transparentBindings, xV), wV
    }

    function RV(VV, eV) {
      let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const JV = TV(eV, VV.yE)._buffer;
      if (JV === VV._lightsUBO) return;
      const YV = eV._device.createBindGroup({
        layout: bV(eV),
        entries: [{
          binding: 0,
          resource: {
            buffer: VV._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: JV
          }
        }]
      });
      VV._lightsUBO = JV, VV._sceneBG = YV, xV && (VV._ob = [])
    }

    function gV(VV, eV) {
      for (const xV of VV) xV.update?.(eV)
    }

    function DV(VV, eV, xV) {
      let JV = null,
        YV = 0;
      for (const UV of eV) {
        const eV = UV.renderable.mesh;
        eV && !1 === eV.visible || (UV.pipeline !== JV && (VV.setPipeline(UV.pipeline), JV = UV.pipeline), YV += UV.draw(VV, xV))
      }
      return YV
    }

    function iV(VV) {
      const eV = VV._materialSwapQueue;
      if (!eV[0] || VV._runtimeBuilds?.w) return;
      let JV, YV, UV;
      const yV = VV._renderables;
      for (const xV of eV) {
        const eV = xV.material;
        if (!eV) continue;
        const pV = xV._runtimeThinBuild;
        if (pV) {
          YV = pV(VV, xV, YV);
          continue
        }
        const QV = VV._groups.get(eV._buildGroup),
          nV = QV?.r;
        if (!nV) {
          (UV ??= []).push(xV);
          continue
        }
        if (QV._w?.(xV)) {
          (UV ??= []).push([xV, eV]);
          continue
        }
        const wV = VV._meshDisposables.get(xV);
        wV && (VV._meshDisposables.delete(xV), (0, rV.e)(VV.surface.engine, (() => wV.forEach((VV => VV())))));
        const ZV = QV.o;
        let vV;
        for (let VV = yV.length; VV--;) yV[VV].mesh === xV && (vV = yV.splice(VV, 1)[0]);
        eV._csmGen = -~eV._csmGen;
        const kV = nV(VV, xV);
        if (ZV) {
          const VV = ZV.indexOf(vV);
          VV < 0 ? ZV.push(kV) : ZV[VV] = kV
        }
        JV = yV.push(kV)
      }
      if (JV && (yV.sort(((VV, eV) => VV.order - eV.order)), VV._renderableVersion++, VV._materialEpoch++), eV.length = 0, !UV) return YV;
      const pV = UV;
      return xV.e(671).then((() => xV(64396))).then((eV => {
        let {
          C: xV
        } = eV;
        return xV(VV, pV, YV)
      }), (eV => {
        const xV = VV._runtimeBuilds;
        xV ? xV._x(eV) : console.error(eV)
      }))
    }
    var CV = null;

    function aV(VV, eV) {
      const xV = VV.engine,
        YV = {
          _kind: "yE",
          surface: VV,
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
            xV.useFloatingOrigin && YV.camera && !YV.camera._useFloatingOrigin && (YV.camera._useFloatingOrigin = !0, YV.camera._viewVer = -1, YV.camera._vpVer = -1);
            const VV = YV.fixedDeltaMs > 0 ? YV.fixedDeltaMs : xV._currentDelta,
              eV = xV._currentEncoder;
            let JV = 0;
            for (const xV of YV._beforeRender) xV(VV);
            YV._materialSwapQueue.length && iV(YV);
            for (const UV of YV._prePasses) JV += UV.execute(eV, xV);
            for (const UV of YV._uniformUpdaters) UV.update(xV);
            YV._drawCallsPre = JV
          },
          _record: () => YV._frameGraph.execute(),
          _resize() {
            YV._frameGraph.build()
          }
        },
        yV = function() {
          const VV = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let eV = 0; eV < VV._tasks.length; eV++) UV(VV, VV._tasks[eV]);
              for (const eV of VV._tasks)
                for (const VV of eV._passes) VV._initialize()
            },
            execute() {
              let eV = 0;
              for (const xV of VV._tasks)
                if (!1 !== xV.executionEnabled)
                  if (xV.execute) eV += xV.execute();
                  else
                    for (const VV of xV._passes) eV += VV._execute();
              return eV
            },
            dispose() {
              for (const eV of VV._tasks) eV.dispose();
              VV._tasks.length = 0, VV._currentProcessedTask = null
            }
          };
          return VV
        }();
      if (YV._frameGraph = yV, !1 !== eV?.defaultRenderTask) {
        const eV = VV.msaaSamples > 1,
          UV = eV ? (0, JV.d)({
            lbl: "scene-color",
            format: VV.format,
            dFormat: "depth24plus-stencil8",
            samples: VV.msaaSamples,
            size: VV
          }) : VV.scRT,
          pV = eV ? void 0 : (0, JV.d)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: VV
          });
        ! function(VV, eV) {
          VV._tasks.push(eV)
        }(yV, XV({
          name: "yE",
          rt: UV,
          rst: eV ? VV.scRT : void 0,
          depth: pV
        }, xV, YV))
      }
      return YV._disposables.push((() => yV.dispose())), YV
    }
    async function oV(VV) {
      const eV = VV;
      for (eV._built || (eV._materialSwapQueue.length = 0); eV._deferredBuilders.length;) {
        const VV = eV._deferredBuilders.splice(0);
        await Promise.all(VV.map((VV => VV())))
      }
      await iV(eV), CV?.get(eV)?.() || (eV._runtimeBuilds?._e(), eV._renderableVersion++, eV._built = !0), await (eV._rebuildHook?.(eV))
    }
    var cV = null;
    async function hV(VV) {
      const eV = VV,
        JV = eV.surface;
      (0, YV.h)(JV, eV) || (await oV(VV), eV._renderables.sort(lV), await Promise.all(eV._frameGraph._tasks.map((VV => VV._preload?.()))), cV && await cV(eV), eV._frameGraph.build(), JV._renderingContexts[0] && (await xV.e(669).then((() => xV(64392)))).configureSwapchainOverlayScene(JV, eV), CV?.get(eV)?.() || (0, YV.i)(JV, eV))
    }
    var lV = (VV, eV) => VV.order - eV.order
  },
  44601: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => nV,
      i: () => wV
    });
    var JV = xV(44559),
      YV = xV(44564),
      UV = xV(44570),
      yV = xV(44578),
      pV = xV(44583),
      QV = xV(44589);

    function nV(VV, eV, xV) {
      let pV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (eV < 1 || xV < 1) && (0, JV.b)(676, eV, xV);
      const nV = VV._device,
        wV = pV.mipMaps ?? !1,
        ZV = pV.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        vV = wV ? (0, QV.e)(eV, xV) : 1,
        rV = nV.createTexture({
          size: {
            width: eV,
            height: xV
          },
          format: ZV,
          mipLevelCount: vV,
          usage: YV.k.TEXTURE_BINDING | YV.k.COPY_DST | YV.k.RENDER_ATTACHMENT
        }),
        kV = {
          addressModeU: pV.addressModeU ?? "clamp-to-edge",
          addressModeV: pV.addressModeV ?? "clamp-to-edge",
          minFilter: pV.minFilter ?? "linear",
          magFilter: pV.magFilter ?? "linear",
          mipmapFilter: wV ? "linear" : "nearest"
        },
        bV = (0, yV.d)(VV, kV),
        EV = {
          texture: rV,
          view: rV.createView(),
          sampler: bV,
          width: eV,
          height: xV
        };
      return (0, UV.c)(EV), VV._dlr && VV._dlr.t(EV, {
        kind: "dynamic",
        width: eV,
        height: xV,
        format: ZV,
        levels: vV,
        samplerDesc: kV,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), EV
    }

    function wV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const YV = JV.invertY ?? !0,
        UV = JV.premultiplyAlpha ?? !1;
      VV._device.queue.copyExternalImageToTexture({
        source: xV,
        flipY: YV
      }, {
        texture: eV.texture,
        premultipliedAlpha: UV
      }, [eV.width, eV.height]);
      const yV = eV._recoverySource;
      yV && "dynamic" === yV.kind && (yV.source = xV, yV.flipY = YV, yV.premultipliedAlpha = UV), eV.texture.mipLevelCount > 1 && (0, pV.generateMipmaps)(VV, eV.texture)
    }
  },
  44595: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => QV
    });
    var JV = xV(44559),
      YV = xV(44564),
      UV = xV(44570),
      yV = xV(44578),
      pV = xV(44589);
    async function QV(VV, eV) {
      let QV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [nV, wV] = function(VV) {
        const eV = VV,
          xV = [
            [eV.displayWidth, eV.displayHeight],
            [eV.videoWidth, eV.videoHeight],
            [eV.naturalWidth, eV.naturalHeight],
            [eV.width, eV.height]
          ];
        for (const [JV, YV] of xV)
          if (void 0 !== JV && void 0 !== YV && Number.isInteger(JV) && Number.isInteger(YV) && JV > 0 && YV > 0) return [JV, YV];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(eV), [ZV, vV] = function(VV, eV, xV) {
        if (void 0 === xV) return [VV, eV];
        if (!Number.isInteger(xV) || xV < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${xV})`);
        if (Math.max(VV, eV) <= xV) return [VV, eV];
        const JV = xV / Math.max(VV, eV);
        return VV >= eV ? [xV, Math.max(1, Math.round(eV * JV))] : [Math.max(1, Math.round(VV * JV)), xV]
      }(nV, wV, QV.maxDimension), rV = QV.mipMaps ?? !0, kV = QV.premultiplyAlpha ?? !1;
      let bV = eV,
        EV = null;
      const BV = {
        texture: null
      };
      try {
        ZV === nV && vV === wV || (EV = await createImageBitmap(eV, {
          resizeWidth: ZV,
          resizeHeight: vV,
          resizeQuality: "high",
          premultiplyAlpha: kV ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), bV = EV);
        const jV = VV._device,
          qV = QV.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          tV = rV ? (0, pV.e)(ZV, vV) : 1,
          FV = tV > 1 ? (await Promise.resolve().then((() => xV(44583)))).generateMipmaps : null,
          TV = {
            addressModeU: QV.addressModeU ?? "repeat",
            addressModeV: QV.addressModeV ?? "repeat",
            minFilter: QV.minFilter ?? "linear",
            magFilter: QV.magFilter ?? "linear",
            mipmapFilter: rV ? "linear" : "nearest"
          };
        TV.maxAnisotropy = "linear" === TV.minFilter && "linear" === TV.magFilter && "linear" === TV.mipmapFilter ? 4 : 1;
        const PV = QV.invertY ?? !0,
          AV = async eV => {
            let xV;
            jV.pushErrorScope("validation"), jV.pushErrorScope("out-of-memory");
            let UV = null;
            try {
              const xV = BV.texture = jV.createTexture({
                size: {
                  width: ZV,
                  height: vV
                },
                format: qV,
                mipLevelCount: tV,
                usage: YV.k.TEXTURE_BINDING | YV.k.COPY_DST | YV.k.RENDER_ATTACHMENT
              });
              jV.queue.copyExternalImageToTexture({
                source: eV,
                flipY: PV
              }, {
                texture: xV,
                premultipliedAlpha: kV
              }, {
                width: ZV,
                height: vV
              }), FV && FV(VV, xV), UV = (0, yV.d)(VV, TV)
            } catch (rV) {
              xV = rV
            }
            const [pV, QV] = await Promise.all([jV.popErrorScope(), jV.popErrorScope()]);
            if (xV) throw xV;
            const nV = QV ?? pV;
            if (nV) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${nV.message}`, {
              cause: nV
            });
            const wV = BV.texture;
            return wV && UV || (0, JV.b)(677), {
              texture: wV,
              view: wV.createView(),
              sampler: UV,
              width: ZV,
              height: vV
            }
          }, NV = await (VV._dlr?.x(bV, ZV, vV, qV, tV, TV, PV, kV, AV)) ?? await AV(bV);
        return (0, UV.c)(NV), NV
      } catch (jV) {
        throw BV.texture?.destroy(), jV
      } finally {
        EV?.close()
      }
    }
  },
  44583: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      generateMipmaps: () => rV,
      recordMipmaps: () => kV
    });
    var JV = xV(44564),
      YV = xV(44578),
      UV = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var yV = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      pV = null,
      QV = null,
      nV = null,
      wV = null,
      ZV = null;

    function vV(VV) {
      const eV = VV._device;
      eV !== ZV && (pV?.clear(), pV = null, QV = null, nV = null, wV = null, ZV = null, ZV = eV), QV ??= eV.createShaderModule({
        code: yV
      }), nV ??= function(VV) {
        return (0, YV.d)(VV, UV)
      }(VV), wV ??= eV.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: JV.g.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: JV.g.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function rV(VV, eV, xV) {
      const JV = VV._device,
        YV = JV.createCommandEncoder();
      kV(VV, eV, YV, xV), JV.queue.submit([YV.finish()])
    }

    function kV(VV, eV, xV, JV) {
      if (eV.mipLevelCount <= 1) return;
      const YV = VV._device,
        UV = function(VV, eV) {
          const xV = VV._device;
          vV(VV), pV ??= new Map;
          let JV = pV.get(eV);
          return JV || (JV = xV.createRenderPipeline({
            layout: xV.createPipelineLayout({
              bindGroupLayouts: [wV]
            }),
            vertex: {
              module: QV,
              entryPoint: "vs"
            },
            fragment: {
              module: QV,
              entryPoint: "fs",
              targets: [{
                format: eV
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), pV.set(eV, JV)), JV
        }(VV, eV.format),
        yV = null != JV ? {
          dimension: "2d",
          baseArrayLayer: JV,
          arrayLayerCount: 1
        } : {};
      for (let pV = 1; pV < eV.mipLevelCount; pV++) {
        const VV = eV.createView({
            baseMipLevel: pV - 1,
            mipLevelCount: 1,
            ...yV
          }),
          JV = eV.createView({
            baseMipLevel: pV,
            mipLevelCount: 1,
            ...yV
          }),
          QV = YV.createBindGroup({
            layout: wV,
            entries: [{
              binding: 0,
              resource: VV
            }, {
              binding: 1,
              resource: nV
            }]
          }),
          ZV = xV.beginRenderPass({
            colorAttachments: [{
              view: JV,
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
        ZV.setPipeline(UV), ZV.setBindGroup(0, QV), ZV.draw(3), ZV.end()
      }
    }
  },
  44589: (VV, eV, xV) => {
    function JV(VV, eV) {
      return Math.floor(Math.log2(Math.max(VV, eV))) + 1
    }
    xV.d(eV, {
      e: () => JV
    })
  },
  44554: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => nV,
      c: () => wV
    });
    var JV = xV(44559),
      YV = xV(44564),
      UV = xV(44570),
      yV = xV(44578),
      pV = xV(44583),
      QV = xV(44589);

    function nV(VV, eV, xV, pV) {
      let nV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (eV < 1 || xV < 1 || pV < 1) && (0, JV.b)(722, eV, xV, pV);
      const wV = VV._device,
        ZV = nV.mipMaps ?? !0,
        vV = nV.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        rV = wV.createTexture({
          size: {
            width: eV,
            height: xV,
            depthOrArrayLayers: pV
          },
          dimension: "2d",
          format: vV,
          mipLevelCount: ZV ? (0, QV.e)(eV, xV) : 1,
          usage: YV.k.TEXTURE_BINDING | YV.k.COPY_DST | YV.k.RENDER_ATTACHMENT
        }),
        kV = (0, yV.d)(VV, {
          addressModeU: nV.addressModeU ?? "repeat",
          addressModeV: nV.addressModeV ?? "repeat",
          minFilter: nV.minFilter ?? "linear",
          magFilter: nV.magFilter ?? "linear",
          mipmapFilter: ZV ? "linear" : "nearest"
        }),
        bV = {
          texture: rV,
          view: rV.createView({
            dimension: "2d-array"
          }),
          sampler: kV,
          width: eV,
          height: xV,
          layers: pV
        };
      return (0, UV.c)(bV), bV
    }

    function wV(VV, eV, xV, YV) {
      let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (xV < 0 || xV >= eV.layers || (0 | xV) !== xV) && (0, JV.b)(723, eV.layers, xV);
      const yV = UV.invertY ?? !0,
        QV = UV.premultiplyAlpha ?? !1;
      VV._device.queue.copyExternalImageToTexture({
        source: YV,
        flipY: yV
      }, {
        texture: eV.texture,
        origin: [0, 0, xV],
        premultipliedAlpha: QV
      }, [eV.width, eV.height, 1]), eV.texture.mipLevelCount > 1 && (0, pV.generateMipmaps)(VV, eV.texture, xV)
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);