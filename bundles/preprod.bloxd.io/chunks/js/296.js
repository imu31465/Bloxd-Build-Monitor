export const id = 296;
export const ids = [296];
export const modules = {
  41459: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Wq,
      f: () => jq,
      i: () => Nq,
      l: () => aq,
      o: () => oq,
      r: () => Hq
    });
    var Yq = gq(41402);
    var lq = "Babylon Lite v1.32.0",
      Oq = gq(41467);

    function mq(qq) {
      return "clientWidth" in qq
    }
    var xq = 1;

    function Aq(qq, Eq, gq) {
      const Aq = Eq.getContext("webgpu");
      Aq || (0, Yq.d)(54), mq(Eq) && Eq.setAttribute("data-engine", lq);
      const cq = gq?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        uq = gq?.srgb ? (Bq = cq).endsWith("-srgb") ? Bq : `${Bq}-srgb` : cq;
      var Bq;
      const Wq = gq?.alphaMode ?? "opaque";
      Aq.configure({
        device: qq._device,
        format: cq,
        alphaMode: Wq,
        viewFormats: [uq]
      });
      const Nq = 1 === gq?.msaaSamples ? 1 : 4,
        aq = (0, Oq.d)({
          lbl: "swapchain",
          format: uq,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return aq._eager = !0, {
        engine: qq,
        canvas: Eq,
        format: uq,
        msaaSamples: Nq,
        scRT: aq,
        maxDevicePixelRatio: gq?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: xq++,
        _context: Aq,
        _configureFormat: cq,
        _alphaMode: Wq,
        _renderingContexts: []
      }
    }

    function cq(qq) {
      const Eq = qq._context.getCurrentTexture(),
        gq = qq.scRT;
      gq._colorTexture = Eq, gq._colorView = Eq.createView({
        format: qq.format
      }), gq._width = Eq.width, gq._height = Eq.height
    }

    function uq(qq) {
      const Eq = qq.canvas;
      if (!mq(Eq)) return;
      const gq = qq._w ?? Eq.clientWidth,
        Yq = qq._h ?? Eq.clientHeight;
      if (!(gq > 0 && Yq > 0)) return;
      const lq = Math.min(globalThis.devicePixelRatio || 1, qq.maxDevicePixelRatio);
      Bq(qq, gq * lq | 0, Yq * lq | 0)
    }

    function Bq(qq, Eq, gq) {
      const Yq = qq.canvas,
        lq = 0 | Eq,
        Oq = 0 | gq;
      if (lq > 0 && Oq > 0 && (lq !== Yq.width || Oq !== Yq.height)) {
        Yq.width = lq, Yq.height = Oq, qq.scRT._width = lq, qq.scRT._height = Oq;
        for (const Eq of qq._renderingContexts) Eq._resize?.()
      }
    }
    var Wq = 0;

    function Nq(qq, Eq) {
      return -1 !== qq._renderingContexts.indexOf(Eq)
    }

    function aq(qq, Eq) {
      return -1 === qq._renderingContexts.indexOf(Eq) && (qq._renderingContexts.push(Eq), !0)
    }
    var Vq = null;
    var dq = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function jq(qq, Eq) {
      const Oq = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...Vq ? Vq() : {}
      });
      Oq || (0, Yq.d)(47);
      const mq = Vq?.deviceFeatures?.(Oq, Eq) ?? function(qq) {
          return dq.filter((Eq => qq.features.has(Eq)))
        }(Oq),
        xq = await Oq.requestDevice({
          requiredFeatures: mq,
          requiredLimits: Eq?.requiredLimits
        });
      console.log(`${lq} - WebGPU engine`);
      const Bq = !!Eq?.useHighPrecisionMatrix,
        Wq = !!Eq?.useFloatingOrigin;
      if (Wq && !Bq && (0, Yq.d)(48), Bq) {
        const {
          allocateF64Mat4: qq
        } = await gq.e(350).then((() => gq(61205)));
        0
      }
      let Nq, aq, jq, Hq;
      if (Wq) {
        const [{
          wrapRenderableForFO: qq,
          lightFoVersion: Eq,
          applyLightFoOffset: Yq
        }, {
          makePackMeshWorld: lq
        }] = await Promise.all([gq.e(351).then((() => gq(61207))), gq.e(352).then((() => gq(61212)))]);
        Nq = qq, aq = lq, jq = Eq, Hq = Yq
      }
      const oq = {
          _device: xq
        },
        Pq = [oq];
      return Object.assign(oq, {
        engine: oq,
        surfaces: Pq,
        _surfaces: Pq,
        _device: xq,
        _options: Eq,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: Bq,
        useFloatingOrigin: Wq,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: Nq,
        _makePackMeshWorld: aq,
        _lightFoVersion: jq,
        _applyLightFoOffset: Hq
      }, Aq(oq, qq, Eq)), uq(oq), cq(oq), oq
    }

    function Hq(qq, Eq, gq) {
      Bq(qq, Eq, gq)
    }

    function oq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qq.surfaces;
      if (gq !== qq.surfaces)
        for (let lq = gq.length; lq--;) gq[lq].engine !== qq && (0, Yq.d)(49);
      Pq(qq, Eq, gq)
    }

    function Pq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qq._surfaces,
        Yq = 0;
      for (let Oq = gq.length; Oq--;) Yq += gq[Oq]._renderingContexts.length;
      if (!Yq) return qq.drawCallCount = 0, qq._flushGpuRetirements?.(qq);
      const lq = qq._device.createCommandEncoder({
        label: "frame"
      });
      qq._currentEncoder = lq, qq._currentDelta = Eq;
      try {
        qq._gpuTimerBegin?.(lq), Yq = 0;
        for (let qq = 0; qq < gq.length; qq++) {
          const Eq = gq[qq];
          Eq._capturePreFrame?.(Eq), cq(Eq);
          const lq = Eq._renderingContexts;
          for (let qq = 0; qq < lq.length; qq++) {
            const Eq = lq[qq];
            Eq._update(), Yq += Eq._drawCallsPre + Eq._record()
          }
        }
        const Eq = qq._currentEncoder;
        for (let qq = 0; qq < gq.length; qq++) {
          const Yq = gq[qq];
          Yq._captureService?.(Yq, Eq)
        }
        qq._gpuTimerEnd?.(Eq), qq._cbs[0] = Eq.finish(), qq._device.queue.submit(qq._cbs), qq._flushGpuRetirements?.(qq), qq.drawCallCount = Yq, qq._gpuTimerResolve?.()
      } finally {
        qq._currentEncoder = void 0
      }
    }
  },
  41406: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      c: () => Oq,
      f: () => Yq
    });
    var Yq = globalThis.GPUTextureUsage,
      lq = globalThis.GPUBufferUsage,
      Oq = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41489: (qq, Eq, gq) => {
    function Yq(qq) {
      lq(qq.splice(0))
    }

    function lq(qq) {
      for (const gq of qq) try {
        gq()
      } catch (Eq) {
        console.error("GPU resource retirement failed.", Eq)
      }
    }

    function Oq(qq, Eq) {
      qq._flushGpuRetirements ??= mq, (qq._retirements ??= []).push(Eq)
    }

    function mq(qq) {
      const Eq = qq._retirements;
      if (!Eq) return;
      qq._retirements = null;
      const gq = qq._retiring ??= new Set;
      gq.add(Eq), queueMicrotask((() => {
        qq._device.queue.onSubmittedWorkDone().then((() => {
          gq.delete(Eq), Yq(Eq)
        })).catch((() => {}))
      }))
    }
    gq.d(Eq, {
      c: () => Oq
    })
  },
  41467: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq,
      h: () => mq,
      l: () => xq
    });
    var Yq = gq(41406);

    function lq(qq) {
      const Eq = qq.size;
      return "canvas" in Eq ? Eq.canvas : Eq
    }

    function Oq(qq) {
      return {
        _descriptor: qq,
        _resolveSize: lq,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function mq(qq, Eq) {
      if (qq._eager) return void qq._syncEager?.(Eq);
      xq(qq);
      const gq = qq._descriptor,
        {
          width: Oq,
          height: mq
        } = (qq._resolveSize ?? lq)(gq);
      qq._width = Oq, qq._height = mq;
      const Aq = Eq._device;
      gq.format && (qq._colorTexture = Aq.createTexture({
        label: gq.lbl,
        size: {
          width: Oq,
          height: mq
        },
        format: gq.format,
        sampleCount: gq.samples,
        usage: Yq.f.RENDER_ATTACHMENT | Yq.f.TEXTURE_BINDING | Yq.f.COPY_SRC | Yq.f.COPY_DST
      }), qq._colorView = qq._colorTexture.createView()), gq.dFormat && (qq._depthTexture = Aq.createTexture({
        label: gq.lbl,
        size: {
          width: Oq,
          height: mq
        },
        format: gq.dFormat,
        sampleCount: gq.samples,
        usage: Yq.f.RENDER_ATTACHMENT | Yq.f.TEXTURE_BINDING
      }), qq._depthView = qq._depthTexture.createView())
    }

    function xq(qq) {
      if (!qq || qq._eager && !qq._disposeAttachments) return;
      const Eq = qq._colorTexture,
        gq = qq._depthTexture;
      if (qq._colorTexture = qq._depthTexture = null, qq._colorView = qq._depthView = null, qq._width = qq._height = 0, qq._disposeAttachments) qq._disposeAttachments(Eq, gq);
      else try {
        Eq?.destroy()
      } finally {
        !1 !== qq._ownsDepthTexture && gq?.destroy()
      }
    }
  },
  41483: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq,
      e: () => lq,
      h: () => Oq
    });
    var Yq = Float32Array,
      lq = Float64Array,
      Oq = Uint32Array
  },
  41492: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq
    });
    var Yq = 16
  },
  41402: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq
    });
    var Yq = null;

    function lq(qq) {
      for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), lq = 1; lq < Eq; lq++) gq[lq - 1] = arguments[lq];
      const Oq = new Error(Yq?.(qq, gq) ?? `#${qq}`);
      throw Oq.lite = gq, Oq
    }
  },
  41436: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq
    });
    var Yq = gq(41422);

    function lq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const gq = Eq.compare,
        lq = Eq.lodMinClamp ?? 0,
        Oq = Eq.lodMaxClamp ?? 32,
        mq = void 0 !== gq || 0 !== lq || 32 !== Oq ? `${gq??""}:${lq}:${Oq}` : "";
      return (0, Yq.c)(qq, Eq, mq)
    }
  },
  41413: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = null;

    function lq(qq) {
      const Eq = Yq ??= new WeakMap;
      Eq.set(qq, (Eq.get(qq) ?? 0) + 1)
    }

    function Oq(qq) {
      lq(qq.texture)
    }
  },
  41422: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq
    });
    var Yq = null,
      lq = "nearest",
      Oq = "clamp-to-edge",
      mq = {
        minFilter: lq,
        magFilter: lq,
        mipmapFilter: lq,
        addressModeU: Oq,
        addressModeV: Oq,
        addressModeW: Oq,
        maxAnisotropy: 1
      };

    function xq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const lq = qq._device,
        Oq = Yq ??= new WeakMap;
      let xq = Oq.get(lq);
      xq || Oq.set(lq, xq = new Map);
      let Aq = gq;
      for (const Yq in mq) {
        const qq = Yq;
        Aq += `:${Eq[qq]??mq[qq]}`
      }
      let cq = xq.get(Aq);
      return cq || xq.set(Aq, cq = lq.createSampler(Eq)), cq
    }
  },
  41475: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => pq,
      g: () => Jq
    });
    var Yq = gq(41467),
      lq = gq(41459);

    function Oq(qq, Eq) {
      Eq._passes.length = 0, qq._currentProcessedTask = Eq;
      try {
        Eq.record()
      } finally {
        qq._currentProcessedTask = null
      }
    }
    var mq = gq(41483);

    function xq(qq) {
      const Eq = qq.worldMatrixVersion;
      if (qq._viewVer === Eq) return qq._viewCache;
      const gq = qq._viewCache,
        Yq = qq.worldMatrix,
        lq = qq._useFloatingOrigin,
        Oq = lq ? 0 : Yq[12],
        mq = lq ? 0 : Yq[13],
        xq = lq ? 0 : Yq[14];
      return gq[0] = Yq[0], gq[1] = Yq[4], gq[2] = Yq[8], gq[3] = 0, gq[4] = Yq[1], gq[5] = Yq[5], gq[6] = Yq[9], gq[7] = 0, gq[8] = Yq[2], gq[9] = Yq[6], gq[10] = Yq[10], gq[11] = 0, gq[12] = -(Yq[0] * Oq + Yq[1] * mq + Yq[2] * xq), gq[13] = -(Yq[4] * Oq + Yq[5] * mq + Yq[6] * xq), gq[14] = -(Yq[8] * Oq + Yq[9] * mq + Yq[10] * xq), gq[15] = 1, qq._viewVer = Eq, gq
    }
    var Aq = null;

    function cq(qq) {
      return qq._projFov === qq.fov && qq._projNear === qq.nearPlane && qq._projFar === qq.farPlane || (qq._projFov = qq.fov, qq._projNear = qq.nearPlane, qq._projFar = qq.farPlane, qq._projRev = (qq._projRev ?? 0) + 1), qq.worldMatrixVersion + (qq._projRev ?? 0)
    }

    function uq(qq, Eq) {
      const gq = cq(qq);
      if (qq._projVer === gq && qq._projAspect === Eq) return qq._projCache;
      const Yq = qq._projCache;
      return null !== Aq && qq.ortho ? Aq(qq, Eq, Yq) : function(qq, Eq, gq, Yq, lq) {
        const Oq = 1 / Math.tan(.5 * Eq),
          mq = lq - Yq;
        qq[0] = Oq / gq, qq[5] = Oq, qq[10] = -Yq / mq, qq[11] = 1, qq[14] = lq * Yq / mq
      }(Yq, qq.fov, Eq, qq.nearPlane, qq.farPlane), qq._projVer = gq, qq._projAspect = Eq, Yq
    }
    var Bq = gq(41406);

    function Wq(qq, Eq, gq) {
      return qq._device.createBuffer({
        label: gq,
        size: (Yq = Eq, lq = 16, Math.ceil(Yq / lq) * lq),
        usage: Bq.b.UNIFORM | Bq.b.COPY_DST
      });
      var Yq, lq
    }
    var Nq = gq(41489),
      aq = null;

    function Vq(qq) {
      const Eq = qq._device,
        gq = aq ??= new WeakMap;
      let Yq = gq.get(Eq);
      return Yq || (Yq = Eq.createBindGroupLayout({
        label: "PV",
        entries: [{
          binding: 0,
          visibility: Bq.c.VERTEX | Bq.c.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: Bq.c.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), gq.set(Eq, Yq)), Yq
    }

    function dq(qq, Eq, gq) {
      const Yq = qq._device,
        lq = Wq(qq, Eq.byteLength, gq);
      try {
        Yq.queue.writeBuffer(lq, 0, Eq.buffer, Eq.byteOffset, Eq.byteLength)
      } catch (Oq) {
        throw lq.destroy(), Oq
      }
      return lq
    }
    var jq = gq(41492),
      Hq = new mq.h(1),
      oq = new mq.c(Hq.buffer);

    function Pq(qq) {
      let Eq = 0;
      for (const gq of qq) Eq += gq._lightVersion ?? 0;
      return Eq
    }

    function Qq(qq, Eq) {
      qq.fill(0);
      let gq = 0;
      for (const Yq of Eq) {
        if (gq >= jq.e) break;
        Yq._writeLightUbo && (Yq._writeLightUbo(qq, 4 + 16 * gq), gq++)
      }
      Hq[0] = gq, qq[0] = oq[0]
    }

    function yq(qq, Eq) {
      let gq = Eq._lightGpuState;
      const Yq = 16 + 16 * jq.e * 4;
      if (gq && gq._byteSize === Yq) return gq;
      const lq = !gq;
      gq?._buffer.destroy();
      const Oq = new mq.c(Yq / 4);
      return Qq(Oq, Eq.lights), qq._applyLightFoOffset?.(Oq, Eq), gq = {
        _buffer: dq(qq, Oq),
        _scratch: Oq,
        Gs: Pq(Eq.lights) + (qq._lightFoVersion?.(Eq) ?? 0),
        _listVersion: Eq._lightListVersion ?? 0,
        _lightCount: Eq.lights.length,
        _byteSize: Yq
      }, Eq._lightGpuState = gq, lq && Eq._disposables.push((() => {
        Eq._lightGpuState?._buffer.destroy(), Eq._lightGpuState = void 0
      })), gq
    }

    function tq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const lq = Eq;
      if (0 === Yq && 16 === lq.length) return void qq.set(lq, gq);
      const Oq = Yq,
        mq = gq;
      qq[mq + 0] = lq[Oq + 0], qq[mq + 1] = lq[Oq + 1], qq[mq + 2] = lq[Oq + 2], qq[mq + 3] = lq[Oq + 3], qq[mq + 4] = lq[Oq + 4], qq[mq + 5] = lq[Oq + 5], qq[mq + 6] = lq[Oq + 6], qq[mq + 7] = lq[Oq + 7], qq[mq + 8] = lq[Oq + 8], qq[mq + 9] = lq[Oq + 9], qq[mq + 10] = lq[Oq + 10], qq[mq + 11] = lq[Oq + 11], qq[mq + 12] = lq[Oq + 12], qq[mq + 13] = lq[Oq + 13], qq[mq + 14] = lq[Oq + 14], qq[mq + 15] = lq[Oq + 15]
    }

    function rq(qq, Eq, gq, Yq, lq) {
      qq.fill(0);
      const Oq = function(qq, Eq) {
          const gq = cq(qq);
          if (qq._vpVer === gq && qq._vpAspect === Eq) return qq._vpCache;
          const Yq = qq._vpCache;
          return function(qq, Eq, gq, Yq, lq, Oq) {
            const mq = gq[Yq],
              xq = gq[Yq + 1],
              Aq = gq[Yq + 2],
              cq = gq[Yq + 3],
              uq = gq[Yq + 4],
              Bq = gq[Yq + 5],
              Wq = gq[Yq + 6],
              Nq = gq[Yq + 7],
              aq = gq[Yq + 8],
              Vq = gq[Yq + 9],
              dq = gq[Yq + 10],
              jq = gq[Yq + 11],
              Hq = gq[Yq + 12],
              oq = gq[Yq + 13],
              Pq = gq[Yq + 14],
              Qq = gq[Yq + 15];
            let yq = lq[Oq],
              tq = lq[Oq + 1],
              rq = lq[Oq + 2],
              vq = lq[Oq + 3];
            qq[Eq] = mq * yq + uq * tq + aq * rq + Hq * vq, qq[Eq + 1] = xq * yq + Bq * tq + Vq * rq + oq * vq, qq[Eq + 2] = Aq * yq + Wq * tq + dq * rq + Pq * vq, qq[Eq + 3] = cq * yq + Nq * tq + jq * rq + Qq * vq, yq = lq[Oq + 4], tq = lq[Oq + 5], rq = lq[Oq + 6], vq = lq[Oq + 7], qq[Eq + 4] = mq * yq + uq * tq + aq * rq + Hq * vq, qq[Eq + 5] = xq * yq + Bq * tq + Vq * rq + oq * vq, qq[Eq + 6] = Aq * yq + Wq * tq + dq * rq + Pq * vq, qq[Eq + 7] = cq * yq + Nq * tq + jq * rq + Qq * vq, yq = lq[Oq + 8], tq = lq[Oq + 9], rq = lq[Oq + 10], vq = lq[Oq + 11], qq[Eq + 8] = mq * yq + uq * tq + aq * rq + Hq * vq, qq[Eq + 9] = xq * yq + Bq * tq + Vq * rq + oq * vq, qq[Eq + 10] = Aq * yq + Wq * tq + dq * rq + Pq * vq, qq[Eq + 11] = cq * yq + Nq * tq + jq * rq + Qq * vq, yq = lq[Oq + 12], tq = lq[Oq + 13], rq = lq[Oq + 14], vq = lq[Oq + 15], qq[Eq + 12] = mq * yq + uq * tq + aq * rq + Hq * vq, qq[Eq + 13] = xq * yq + Bq * tq + Vq * rq + oq * vq, qq[Eq + 14] = Aq * yq + Wq * tq + dq * rq + Pq * vq, qq[Eq + 15] = cq * yq + Nq * tq + jq * rq + Qq * vq
          }(Yq, 0, uq(qq, Eq), 0, xq(qq), 0), qq._vpVer = gq, qq._vpAspect = Eq, Yq
        }(Yq, lq),
        mq = xq(Yq),
        Aq = Yq.worldMatrix;
      tq(qq, Oq, 0), tq(qq, mq, 16), Eq.useFloatingOrigin ? (qq[32] = 0, qq[33] = 0, qq[34] = 0) : (qq[32] = Aq[12], qq[33] = Aq[13], qq[34] = Aq[14]), qq[87] = Eq.canvas.width;
      const Bq = gq.imageProcessing;
      qq[76] = Bq.exposure, qq[77] = Bq.contrast, qq[78] = gq._envTextures?.lodGenerationScale ?? .8, qq[79] = +Bq.toneMappingEnabled, qq[37] = Eq.canvas.height
    }

    function vq(qq, Eq) {
      return {
        _renderables: qq,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: Eq
      }
    }

    function hq(qq, Eq, gq) {
      qq.clr ??= !0;
      const lq = qq.rt._descriptor,
        Oq = qq.depth?._descriptor,
        Aq = {
          _colorFormat: lq.format,
          _depthStencilFormat: Oq?.dFormat ?? lq.dFormat,
          _depthCompare: lq.depthCompare ?? Oq?.depthCompare,
          _sampleCount: lq.samples
        },
        uq = {
          loadOp: "clear",
          storeOp: "store"
        },
        Bq = {
          ...vq([], -1),
          name: qq.name,
          _config: qq,
          _ownsTargets: !qq.sharedRt,
          engine: Eq,
          PV: gq,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [uq]
          },
          _colorAttachment: uq,
          _sceneUBO: Wq(Eq, 368),
          _suData: new mq.c(92),
          _sceneUboCacheKey: [],
          _targetSignature: Aq,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (Bq._disposed) throw new Error("RenderTask has been disposed.");
            Bq._recordExplicit ? Bq._recordExplicit(Bq, !0) : iq(Bq, !1 !== qq.autoMirror ? gq._renderables.slice() : Bq._renderables, !0)
          },
          execute: () => function(qq, Eq, gq) {
            if (!1 === qq.enabled) return 0;
            const Yq = qq.PV;
            ! function(qq, Eq, gq) {
              const Yq = qq.PV;
              !1 !== qq._config.autoMirror && qq._lastVersion !== Yq._renderableVersion && iq(qq, Yq._renderables.slice());
              fq(qq, Eq);
              const lq = qq._updateContext,
                Oq = qq._config.cam ?? Yq.camera;
              gq._colorFormat && (qq._config._skipClusteredLights || Yq._clusteredLightUpdater?.(Oq, lq.targetWidth, lq.targetHeight), function(qq, Eq) {
                const gq = yq(qq, Eq),
                  Yq = Pq(Eq.lights) + (qq._lightFoVersion?.(Eq) ?? 0),
                  lq = Eq._lightListVersion ?? 0;
                Yq === gq.Gs && lq === gq._listVersion && Eq.lights.length === gq._lightCount || (gq.Gs = Yq, gq._listVersion = lq, gq._lightCount = Eq.lights.length, Qq(gq._scratch, Eq.lights), qq._applyLightFoOffset?.(gq._scratch, Eq), qq._device.queue.writeBuffer(gq._buffer, 0, gq._scratch)), gq._buffer
              }(Eq, Yq));
              (function(qq, Eq, gq, Yq) {
                if (!Yq) return;
                const lq = Yq.viewport,
                  Oq = qq._config.rt,
                  mq = (qq._config.cs ? Eq.canvas.width / Eq.canvas.height : Oq._width / Oq._height) * (lq ? lq.width / lq.height : 1),
                  xq = gq.fog,
                  Aq = gq.imageProcessing,
                  uq = cq(Yq),
                  Bq = gq._envTextures,
                  Wq = qq._sceneUboCacheKey;
                if (Wq[0] === Yq && Wq[1] === xq && Wq[2] === uq && Wq[3] === mq && Wq[4] === Aq.exposure && Wq[5] === Aq.contrast && Wq[6] === Bq) return;
                Wq[0] = Yq, Wq[1] = xq, Wq[2] = uq, Wq[3] = mq, Wq[4] = Aq.exposure, Wq[5] = Aq.contrast, Wq[6] = Bq;
                const Nq = qq._suData;
                rq(Nq, Eq, gq, Yq, mq);
                const aq = gq._sceneUboContributors;
                if (aq)
                  for (const cq of aq) cq(Nq, gq);
                Eq._device.queue.writeBuffer(qq._sceneUBO, 0, Nq)
              })(qq, Eq, Yq, Oq), lq.X3 = Oq, qq._batchState?._reset(), Mq(qq._opaqueBindings, lq), Mq(qq._directBindings, lq), Mq(qq._transparentBindings, lq), qq._batchState?._flush(Eq),
                function(qq, Eq) {
                  const gq = qq._transparentBindings;
                  if (gq.length <= 1 || !Eq) return;
                  const Yq = xq(Eq);
                  for (const lq of gq) {
                    const qq = lq.renderable._worldCenter;
                    lq._sortDistance = qq ? qq[0] * Yq[2] + qq[1] * Yq[6] + qq[2] * Yq[10] + Yq[14] : 0
                  }
                  gq.sort(nq)
                }(qq, Oq)
            }(qq, Eq, gq);
            const lq = qq._colorAttachment,
              Oq = qq._config;
            Oq.rt._colorView && (Oq.rt === Yq.surface.scRT && (lq.view = Oq.rt._colorView), lq.resolveTarget = Oq.rst?._colorView ?? void 0, lq.clearValue = Oq.clrColor ?? Yq.clearColor, lq.loadOp = Oq.clr ? "clear" : "load");
            if (qq._executeWithTransmission) return qq._executeWithTransmission(gq._sampleCount);
            const mq = Eq._currentEncoder.beginRenderPass(qq._renderPassDescriptor),
              Aq = Zq(qq, mq);
            return mq.end(), Aq
          }(Bq, Eq, Aq),
          dispose() {
            if (Bq._disposed) return;
            Bq._disposed = !0;
            const Eq = Bq._pendingMeshes;
            Eq && (Eq.length = 0);
            for (const qq of Bq._renderables) Bq._retireRenderable?.(Bq.engine, qq);
            Bq._passes.length = Bq._opaqueBindings.length = Bq._directBindings.length = 0, Bq._transparentBindings.length = Bq._renderables.length = Bq._ob.length = 0, Bq._ownsTargets && ((0, Yq.l)(qq.rt), (0, Yq.l)(qq.rst)), qq.depth?._eager || (0, Yq.l)(qq.depth);
            const gq = Bq._sceneUBO;
            (0, Nq.c)(Bq.engine, (() => gq.destroy())), Bq._batchState?._release(Bq.engine), Bq._batchState = void 0
          }
        };
      return Bq
    }

    function nq(qq, Eq) {
      return Eq._sortDistance - qq._sortDistance || qq.renderable.order - Eq.renderable.order
    }

    function bq(qq, Eq) {
      return qq.renderable.order - Eq.renderable.order
    }

    function iq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq._renderables,
        gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        lq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        Oq = arguments.length > 4 ? arguments[4] : void 0;
      const mq = qq._config,
        xq = mq.rt,
        Aq = qq._batchState,
        cq = vq(Eq, qq.PV._renderableVersion);
      if (gq) {
        const Eq = (Eq, gq) => {
          Eq && (gq || qq._ownsTargets || Eq._eager) && (0, Yq.h)(Eq, qq.engine)
        };
        Eq(xq), xq._descriptor.samples > 1 && Eq(mq.rst), Eq(mq.depth, !0)
      }
      const {
        _opaqueBindings: uq,
        _directBindings: Bq,
        _transparentBindings: Wq
      } = cq;
      try {
        for (const gq of Eq) {
          const Eq = gq.bind(qq.engine, qq._targetSignature);
          cq._batchState = qq._targetSignature._collectBatches?.(cq._batchState, Eq), gq.isTransparent || gq._transmissive ? Wq.push(Eq) : gq._direct ? Bq.push(Eq) : uq.push(Eq)
        }
        uq.sort(bq), Bq.sort(bq), gq && fq(qq, qq.engine, !1)
      } catch (Nq) {
        throw cq._batchState?._release(void 0, Oq ?? [Aq]), Nq
      }
      return gq && (! function(qq, Eq) {
        const gq = qq._config,
          Yq = qq._colorAttachment;
        Yq.view = Eq._colorView, qq._renderPassDescriptor.colorAttachments = Eq._colorView ? [Yq] : [];
        const lq = gq.depth ?? Eq,
          Oq = lq._depthView;
        let mq;
        if (Oq) {
          const qq = lq._descriptor,
            Eq = (gq.depth ? lq._eager : !1 === gq.depthClear) ? "load" : "clear";
          mq = {
            view: Oq,
            depthClearValue: qq.depthClearValue ?? 0,
            depthLoadOp: Eq,
            depthStoreOp: "store"
          }, qq.dFormat?.includes("stencil") && (mq.stencilClearValue = 0, mq.stencilLoadOp = Eq, mq.stencilStoreOp = "store")
        }
        qq._renderPassDescriptor.depthStencilAttachment = mq
      }(qq, xq), qq._updateContext.targetWidth = xq._width, qq._updateContext.targetHeight = xq._height), lq && (Object.assign(qq, cq), Aq?._release(qq.engine, [cq._batchState])), cq
    }

    function Zq(qq, Eq) {
      const gq = qq.engine,
        Yq = qq._config,
        Oq = Yq.rt,
        mq = qq.PV,
        xq = qq._opaqueBindings,
        Aq = qq._ob,
        cq = qq._sceneBG;
      if (function(qq, Eq, gq, Yq) {
          const lq = Eq?.viewport;
          if (!lq) return;
          const Oq = Math.floor(lq.x * gq),
            mq = Math.floor((1 - lq.y - lq.height) * Yq),
            xq = Math.ceil((lq.x + lq.width) * gq) - Oq,
            Aq = Math.ceil((1 - lq.y) * Yq) - mq;
          qq.setViewport(Oq, mq, xq, Aq, 0, 1), qq.setScissorRect(Oq, mq, xq, Aq)
        }(Eq, Yq.cam ?? mq.camera, Oq._width, Oq._height), Eq.setBindGroup(0, cq), qq._lastVis !== lq.e || !Aq.length) {
        const Eq = Oq._descriptor,
          Yq = gq._device.createRenderBundleEncoder({
            colorFormats: Eq.format ? [Eq.format] : [],
            depthStencilFormat: qq._targetSignature._depthStencilFormat,
            sampleCount: Eq.samples
          });
        Yq.setBindGroup(0, cq), Tq(Yq, xq, gq), Aq[0] = Yq.finish(), qq._lastVis = lq.e
      }
      let uq = xq.length;
      return Eq.executeBundles(Aq), Eq.setBindGroup(0, cq), uq += Tq(Eq, qq._directBindings, gq), uq += Tq(Eq, qq._transparentBindings, gq), uq
    }

    function fq(qq, Eq) {
      let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Yq = yq(Eq, qq.PV)._buffer;
      if (Yq === qq._lightsUBO) return;
      const lq = Eq._device.createBindGroup({
        layout: Vq(Eq),
        entries: [{
          binding: 0,
          resource: {
            buffer: qq._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: Yq
          }
        }]
      });
      qq._lightsUBO = Yq, qq._sceneBG = lq, gq && (qq._ob = [])
    }

    function Mq(qq, Eq) {
      for (const gq of qq) gq.update?.(Eq)
    }

    function Tq(qq, Eq, gq) {
      let Yq = null,
        lq = 0;
      for (const Oq of Eq) {
        const Eq = Oq.renderable.mesh;
        Eq && !1 === Eq.visible || (Oq.pipeline !== Yq && (qq.setPipeline(Oq.pipeline), Yq = Oq.pipeline), lq += Oq.draw(qq, gq))
      }
      return lq
    }

    function zq(qq) {
      const Eq = qq._materialSwapQueue;
      if (!Eq[0] || qq._runtimeBuilds?.w) return;
      let Yq, lq, Oq;
      const mq = qq._renderables;
      for (const gq of Eq) {
        const Eq = gq.material;
        if (!Eq) continue;
        const xq = gq._runtimeThinBuild;
        if (xq) {
          lq = xq(qq, gq, lq);
          continue
        }
        const Aq = qq._groups.get(Eq._buildGroup),
          cq = Aq?.r;
        if (!cq) {
          (Oq ??= []).push(gq);
          continue
        }
        if (Aq._w?.(gq)) {
          (Oq ??= []).push([gq, Eq]);
          continue
        }
        const uq = qq._meshDisposables.get(gq);
        uq && (qq._meshDisposables.delete(gq), (0, Nq.c)(qq.surface.engine, (() => uq.forEach((qq => qq())))));
        const Bq = Aq.o;
        let Wq;
        for (let qq = mq.length; qq--;) mq[qq].mesh === gq && (Wq = mq.splice(qq, 1)[0]);
        Eq._csmGen = -~Eq._csmGen;
        const aq = cq(qq, gq);
        if (Bq) {
          const qq = Bq.indexOf(Wq);
          qq < 0 ? Bq.push(aq) : Bq[qq] = aq
        }
        Yq = mq.push(aq)
      }
      if (Yq && (mq.sort(((qq, Eq) => qq.order - Eq.order)), qq._renderableVersion++, qq._materialEpoch++), Eq.length = 0, !Oq) return lq;
      const xq = Oq;
      return gq.e(356).then((() => gq(61241))).then((Eq => {
        let {
          C: gq
        } = Eq;
        return gq(qq, xq, lq)
      }), (Eq => {
        const gq = qq._runtimeBuilds;
        gq ? gq._x(Eq) : console.error(Eq)
      }))
    }
    var Sq = null;

    function pq(qq, Eq) {
      const gq = qq.engine,
        lq = {
          _kind: "PV",
          surface: qq,
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
            gq.useFloatingOrigin && lq.camera && !lq.camera._useFloatingOrigin && (lq.camera._useFloatingOrigin = !0, lq.camera._viewVer = -1, lq.camera._vpVer = -1);
            const qq = lq.fixedDeltaMs > 0 ? lq.fixedDeltaMs : gq._currentDelta,
              Eq = gq._currentEncoder;
            let Yq = 0;
            for (const gq of lq._beforeRender) gq(qq);
            lq._materialSwapQueue.length && zq(lq);
            for (const Oq of lq._prePasses) Yq += Oq.execute(Eq, gq);
            for (const Oq of lq._uniformUpdaters) Oq.update(gq);
            lq._drawCallsPre = Yq
          },
          _record: () => lq._frameGraph.execute(),
          _resize() {
            lq._frameGraph.build()
          }
        },
        mq = function() {
          const qq = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let Eq = 0; Eq < qq._tasks.length; Eq++) Oq(qq, qq._tasks[Eq]);
              for (const Eq of qq._tasks)
                for (const qq of Eq._passes) qq._initialize()
            },
            execute() {
              let Eq = 0;
              for (const gq of qq._tasks)
                if (!1 !== gq.executionEnabled)
                  if (gq.execute) Eq += gq.execute();
                  else
                    for (const qq of gq._passes) Eq += qq._execute();
              return Eq
            },
            dispose() {
              for (const Eq of qq._tasks) Eq.dispose();
              qq._tasks.length = 0, qq._currentProcessedTask = null
            }
          };
          return qq
        }();
      if (lq._frameGraph = mq, !1 !== Eq?.defaultRenderTask) {
        const Eq = qq.msaaSamples > 1,
          Oq = Eq ? (0, Yq.d)({
            lbl: "scene-color",
            format: qq.format,
            dFormat: "depth24plus-stencil8",
            samples: qq.msaaSamples,
            size: qq
          }) : qq.scRT,
          xq = Eq ? void 0 : (0, Yq.d)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: qq
          });
        ! function(qq, Eq) {
          qq._tasks.push(Eq)
        }(mq, hq({
          name: "PV",
          rt: Oq,
          rst: Eq ? qq.scRT : void 0,
          depth: xq
        }, gq, lq))
      }
      return lq._disposables.push((() => mq.dispose())), lq
    }
    async function Gq(qq) {
      const Eq = qq;
      for (Eq._built || (Eq._materialSwapQueue.length = 0); Eq._deferredBuilders.length;) {
        const qq = Eq._deferredBuilders.splice(0);
        await Promise.all(qq.map((qq => qq())))
      }
      await zq(Eq), Sq?.get(Eq)?.() || (Eq._runtimeBuilds?._e(), Eq._renderableVersion++, Eq._built = !0), await (Eq._rebuildHook?.(Eq))
    }
    var Lq = null;
    async function Jq(qq) {
      const Eq = qq,
        Yq = Eq.surface;
      (0, lq.i)(Yq, Eq) || (await Gq(qq), Eq._renderables.sort(kq), await Promise.all(Eq._frameGraph._tasks.map((qq => qq._preload?.()))), Lq && await Lq(Eq), Eq._frameGraph.build(), Yq._renderingContexts[0] && (await gq.e(354).then((() => gq(61225)))).configureSwapchainOverlayScene(Yq, Eq), Sq?.get(Eq)?.() || (0, lq.l)(Yq, Eq))
    }
    var kq = (qq, Eq) => qq.order - Eq.order
  },
  41450: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => cq,
      d: () => uq
    });
    var Yq = gq(41402),
      lq = gq(41406),
      Oq = gq(41413),
      mq = gq(41422),
      xq = gq(41427),
      Aq = gq(41429);

    function cq(qq, Eq, gq) {
      let xq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (Eq < 1 || gq < 1) && (0, Yq.d)(676, Eq, gq);
      const cq = qq._device,
        uq = xq.mipMaps ?? !1,
        Bq = xq.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Wq = uq ? (0, Aq.d)(Eq, gq) : 1,
        Nq = cq.createTexture({
          size: {
            width: Eq,
            height: gq
          },
          format: Bq,
          mipLevelCount: Wq,
          usage: lq.f.TEXTURE_BINDING | lq.f.COPY_DST | lq.f.RENDER_ATTACHMENT
        }),
        aq = {
          addressModeU: xq.addressModeU ?? "clamp-to-edge",
          addressModeV: xq.addressModeV ?? "clamp-to-edge",
          minFilter: xq.minFilter ?? "linear",
          magFilter: xq.magFilter ?? "linear",
          mipmapFilter: uq ? "linear" : "nearest"
        },
        Vq = (0, mq.c)(qq, aq),
        dq = {
          texture: Nq,
          view: Nq.createView(),
          sampler: Vq,
          width: Eq,
          height: gq
        };
      return (0, Oq.b)(dq), qq._dlr && qq._dlr.t(dq, {
        kind: "dynamic",
        width: Eq,
        height: gq,
        format: Bq,
        levels: Wq,
        samplerDesc: aq,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), dq
    }

    function uq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const lq = Yq.invertY ?? !0,
        Oq = Yq.premultiplyAlpha ?? !1;
      qq._device.queue.copyExternalImageToTexture({
        source: gq,
        flipY: lq
      }, {
        texture: Eq.texture,
        premultipliedAlpha: Oq
      }, [Eq.width, Eq.height]);
      const mq = Eq._recoverySource;
      mq && "dynamic" === mq.kind && (mq.source = gq, mq.flipY = lq, mq.premultipliedAlpha = Oq), Eq.texture.mipLevelCount > 1 && (0, xq.generateMipmaps)(qq, Eq.texture)
    }
  },
  41443: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Aq
    });
    var Yq = gq(41402),
      lq = gq(41406),
      Oq = gq(41413),
      mq = gq(41422),
      xq = gq(41429);
    async function Aq(qq, Eq) {
      let Aq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [cq, uq] = function(qq) {
        const Eq = qq,
          gq = [
            [Eq.displayWidth, Eq.displayHeight],
            [Eq.videoWidth, Eq.videoHeight],
            [Eq.naturalWidth, Eq.naturalHeight],
            [Eq.width, Eq.height]
          ];
        for (const [Yq, lq] of gq)
          if (void 0 !== Yq && void 0 !== lq && Number.isInteger(Yq) && Number.isInteger(lq) && Yq > 0 && lq > 0) return [Yq, lq];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(Eq), [Bq, Wq] = function(qq, Eq, gq) {
        if (void 0 === gq) return [qq, Eq];
        if (!Number.isInteger(gq) || gq < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${gq})`);
        if (Math.max(qq, Eq) <= gq) return [qq, Eq];
        const Yq = gq / Math.max(qq, Eq);
        return qq >= Eq ? [gq, Math.max(1, Math.round(Eq * Yq))] : [Math.max(1, Math.round(qq * Yq)), gq]
      }(cq, uq, Aq.maxDimension), Nq = Aq.mipMaps ?? !0, aq = Aq.premultiplyAlpha ?? !1;
      let Vq = Eq,
        dq = null;
      const jq = {
        texture: null
      };
      try {
        Bq === cq && Wq === uq || (dq = await createImageBitmap(Eq, {
          resizeWidth: Bq,
          resizeHeight: Wq,
          resizeQuality: "high",
          premultiplyAlpha: aq ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), Vq = dq);
        const Hq = qq._device,
          oq = Aq.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          Pq = Nq ? (0, xq.d)(Bq, Wq) : 1,
          Qq = Pq > 1 ? (await Promise.resolve().then((() => gq(41427)))).generateMipmaps : null,
          yq = {
            addressModeU: Aq.addressModeU ?? "repeat",
            addressModeV: Aq.addressModeV ?? "repeat",
            minFilter: Aq.minFilter ?? "linear",
            magFilter: Aq.magFilter ?? "linear",
            mipmapFilter: Nq ? "linear" : "nearest"
          };
        yq.maxAnisotropy = "linear" === yq.minFilter && "linear" === yq.magFilter && "linear" === yq.mipmapFilter ? 4 : 1;
        const tq = Aq.invertY ?? !0,
          rq = async Eq => {
            let gq;
            Hq.pushErrorScope("validation"), Hq.pushErrorScope("out-of-memory");
            let Oq = null;
            try {
              const gq = jq.texture = Hq.createTexture({
                size: {
                  width: Bq,
                  height: Wq
                },
                format: oq,
                mipLevelCount: Pq,
                usage: lq.f.TEXTURE_BINDING | lq.f.COPY_DST | lq.f.RENDER_ATTACHMENT
              });
              Hq.queue.copyExternalImageToTexture({
                source: Eq,
                flipY: tq
              }, {
                texture: gq,
                premultipliedAlpha: aq
              }, {
                width: Bq,
                height: Wq
              }), Qq && Qq(qq, gq), Oq = (0, mq.c)(qq, yq)
            } catch (Nq) {
              gq = Nq
            }
            const [xq, Aq] = await Promise.all([Hq.popErrorScope(), Hq.popErrorScope()]);
            if (gq) throw gq;
            const cq = Aq ?? xq;
            if (cq) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${cq.message}`, {
              cause: cq
            });
            const uq = jq.texture;
            return uq && Oq || (0, Yq.d)(677), {
              texture: uq,
              view: uq.createView(),
              sampler: Oq,
              width: Bq,
              height: Wq
            }
          }, vq = await (qq._dlr?.x(Vq, Bq, Wq, oq, Pq, yq, tq, aq, rq)) ?? await rq(Vq);
        return (0, Oq.b)(vq), vq
      } catch (Hq) {
        throw jq.texture?.destroy(), Hq
      } finally {
        dq?.close()
      }
    }
  },
  41427: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      generateMipmaps: () => Nq,
      recordMipmaps: () => aq
    });
    var Yq = gq(41406),
      lq = gq(41422),
      Oq = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var mq = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      xq = null,
      Aq = null,
      cq = null,
      uq = null,
      Bq = null;

    function Wq(qq) {
      const Eq = qq._device;
      Eq !== Bq && (xq?.clear(), xq = null, Aq = null, cq = null, uq = null, Bq = null, Bq = Eq), Aq ??= Eq.createShaderModule({
        code: mq
      }), cq ??= function(qq) {
        return (0, lq.c)(qq, Oq)
      }(qq), uq ??= Eq.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: Yq.c.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: Yq.c.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function Nq(qq, Eq, gq) {
      const Yq = qq._device,
        lq = Yq.createCommandEncoder();
      aq(qq, Eq, lq, gq), Yq.queue.submit([lq.finish()])
    }

    function aq(qq, Eq, gq, Yq) {
      if (Eq.mipLevelCount <= 1) return;
      const lq = qq._device,
        Oq = function(qq, Eq) {
          const gq = qq._device;
          Wq(qq), xq ??= new Map;
          let Yq = xq.get(Eq);
          return Yq || (Yq = gq.createRenderPipeline({
            layout: gq.createPipelineLayout({
              bindGroupLayouts: [uq]
            }),
            vertex: {
              module: Aq,
              entryPoint: "vs"
            },
            fragment: {
              module: Aq,
              entryPoint: "fs",
              targets: [{
                format: Eq
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), xq.set(Eq, Yq)), Yq
        }(qq, Eq.format),
        mq = null != Yq ? {
          dimension: "2d",
          baseArrayLayer: Yq,
          arrayLayerCount: 1
        } : {};
      for (let xq = 1; xq < Eq.mipLevelCount; xq++) {
        const qq = Eq.createView({
            baseMipLevel: xq - 1,
            mipLevelCount: 1,
            ...mq
          }),
          Yq = Eq.createView({
            baseMipLevel: xq,
            mipLevelCount: 1,
            ...mq
          }),
          Aq = lq.createBindGroup({
            layout: uq,
            entries: [{
              binding: 0,
              resource: qq
            }, {
              binding: 1,
              resource: cq
            }]
          }),
          Bq = gq.beginRenderPass({
            colorAttachments: [{
              view: Yq,
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
        Bq.setPipeline(Oq), Bq.setBindGroup(0, Aq), Bq.draw(3), Bq.end()
      }
    }
  },
  41429: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      return Math.floor(Math.log2(Math.max(qq, Eq))) + 1
    }
    gq.d(Eq, {
      d: () => Yq
    })
  },
  41394: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => cq,
      f: () => uq
    });
    var Yq = gq(41402),
      lq = gq(41406),
      Oq = gq(41413),
      mq = gq(41422),
      xq = gq(41427),
      Aq = gq(41429);

    function cq(qq, Eq, gq, xq) {
      let cq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Eq < 1 || gq < 1 || xq < 1) && (0, Yq.d)(722, Eq, gq, xq);
      const uq = qq._device,
        Bq = cq.mipMaps ?? !0,
        Wq = cq.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Nq = uq.createTexture({
          size: {
            width: Eq,
            height: gq,
            depthOrArrayLayers: xq
          },
          dimension: "2d",
          format: Wq,
          mipLevelCount: Bq ? (0, Aq.d)(Eq, gq) : 1,
          usage: lq.f.TEXTURE_BINDING | lq.f.COPY_DST | lq.f.RENDER_ATTACHMENT
        }),
        aq = (0, mq.c)(qq, {
          addressModeU: cq.addressModeU ?? "repeat",
          addressModeV: cq.addressModeV ?? "repeat",
          minFilter: cq.minFilter ?? "linear",
          magFilter: cq.magFilter ?? "linear",
          mipmapFilter: Bq ? "linear" : "nearest"
        }),
        Vq = {
          texture: Nq,
          view: Nq.createView({
            dimension: "2d-array"
          }),
          sampler: aq,
          width: Eq,
          height: gq,
          layers: xq
        };
      return (0, Oq.b)(Vq), Vq
    }

    function uq(qq, Eq, gq, lq) {
      let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (gq < 0 || gq >= Eq.layers || (0 | gq) !== gq) && (0, Yq.d)(723, Eq.layers, gq);
      const mq = Oq.invertY ?? !0,
        Aq = Oq.premultiplyAlpha ?? !1;
      qq._device.queue.copyExternalImageToTexture({
        source: lq,
        flipY: mq
      }, {
        texture: Eq.texture,
        origin: [0, 0, gq],
        premultipliedAlpha: Aq
      }, [Eq.width, Eq.height, 1]), Eq.texture.mipLevelCount > 1 && (0, xq.generateMipmaps)(qq, Eq.texture, gq)
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);