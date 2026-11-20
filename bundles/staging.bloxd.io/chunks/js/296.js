export const id = 296;
export const ids = [296];
export const modules = {
  41010: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Wv,
      i: () => iv,
      j: () => wv,
      l: () => av,
      o: () => Gv,
      p: () => cv
    });
    var hv = Pv(40962);
    var Sv = "Babylon Lite v1.32.0",
      ev = Pv(41017);

    function gv(vv) {
      return "clientWidth" in vv
    }
    var pv = 1;

    function dv(vv, zv, Pv) {
      const dv = zv.getContext("webgpu");
      dv || (0, hv.e)(54), gv(zv) && zv.setAttribute("data-engine", Sv);
      const Nv = Pv?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        lv = Pv?.srgb ? (Tv = Nv).endsWith("-srgb") ? Tv : `${Tv}-srgb` : Nv;
      var Tv;
      const Wv = Pv?.alphaMode ?? "opaque";
      dv.configure({
        device: vv._device,
        format: Nv,
        alphaMode: Wv,
        viewFormats: [lv]
      });
      const wv = 1 === Pv?.msaaSamples ? 1 : 4,
        av = (0, ev.b)({
          lbl: "swapchain",
          format: lv,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return av._eager = !0, {
        engine: vv,
        canvas: zv,
        format: lv,
        msaaSamples: wv,
        scRT: av,
        maxDevicePixelRatio: Pv?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: pv++,
        _context: dv,
        _configureFormat: Nv,
        _alphaMode: Wv,
        _renderingContexts: []
      }
    }

    function Nv(vv) {
      const zv = vv._context.getCurrentTexture(),
        Pv = vv.scRT;
      Pv._colorTexture = zv, Pv._colorView = zv.createView({
        format: vv.format
      }), Pv._width = zv.width, Pv._height = zv.height
    }

    function lv(vv) {
      const zv = vv.canvas;
      if (!gv(zv)) return;
      const Pv = vv._w ?? zv.clientWidth,
        hv = vv._h ?? zv.clientHeight;
      if (!(Pv > 0 && hv > 0)) return;
      const Sv = Math.min(globalThis.devicePixelRatio || 1, vv.maxDevicePixelRatio);
      Tv(vv, Pv * Sv | 0, hv * Sv | 0)
    }

    function Tv(vv, zv, Pv) {
      const hv = vv.canvas,
        Sv = 0 | zv,
        ev = 0 | Pv;
      if (Sv > 0 && ev > 0 && (Sv !== hv.width || ev !== hv.height)) {
        hv.width = Sv, hv.height = ev, vv.scRT._width = Sv, vv.scRT._height = ev;
        for (const zv of vv._renderingContexts) zv._resize?.()
      }
    }
    var Wv = 0;

    function wv(vv, zv) {
      return -1 !== vv._renderingContexts.indexOf(zv)
    }

    function av(vv, zv) {
      return -1 === vv._renderingContexts.indexOf(zv) && (vv._renderingContexts.push(zv), !0)
    }
    var sv = null;
    var Cv = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function iv(vv, zv) {
      const ev = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...sv ? sv() : {}
      });
      ev || (0, hv.e)(47);
      const gv = sv?.deviceFeatures?.(ev, zv) ?? function(vv) {
          return Cv.filter((zv => vv.features.has(zv)))
        }(ev),
        pv = await ev.requestDevice({
          requiredFeatures: gv,
          requiredLimits: zv?.requiredLimits
        });
      console.log(`${Sv} - WebGPU engine`);
      const Tv = !!zv?.useHighPrecisionMatrix,
        Wv = !!zv?.useFloatingOrigin;
      if (Wv && !Tv && (0, hv.e)(48), Tv) {
        const {
          allocateF64Mat4: vv
        } = await Pv.e(350).then((() => Pv(60659)));
        0
      }
      let wv, av, iv, cv;
      if (Wv) {
        const [{
          wrapRenderableForFO: vv,
          lightFoVersion: zv,
          applyLightFoOffset: hv
        }, {
          makePackMeshWorld: Sv
        }] = await Promise.all([Pv.e(351).then((() => Pv(60666))), Pv.e(352).then((() => Pv(60673)))]);
        wv = vv, av = Sv, iv = zv, cv = hv
      }
      const Gv = {
          _device: pv
        },
        mv = [Gv];
      return Object.assign(Gv, {
        engine: Gv,
        surfaces: mv,
        _surfaces: mv,
        _device: pv,
        _options: zv,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: Tv,
        useFloatingOrigin: Wv,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: wv,
        _makePackMeshWorld: av,
        _lightFoVersion: iv,
        _applyLightFoOffset: cv
      }, dv(Gv, vv, zv)), lv(Gv), Nv(Gv), Gv
    }

    function cv(vv, zv, Pv) {
      Tv(vv, zv, Pv)
    }

    function Gv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vv.surfaces;
      if (Pv !== vv.surfaces)
        for (let Sv = Pv.length; Sv--;) Pv[Sv].engine !== vv && (0, hv.e)(49);
      mv(vv, zv, Pv)
    }

    function mv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vv._surfaces,
        hv = 0;
      for (let ev = Pv.length; ev--;) hv += Pv[ev]._renderingContexts.length;
      if (!hv) return vv.drawCallCount = 0, vv._flushGpuRetirements?.(vv);
      const Sv = vv._device.createCommandEncoder({
        label: "frame"
      });
      vv._currentEncoder = Sv, vv._currentDelta = zv;
      try {
        vv._gpuTimerBegin?.(Sv), hv = 0;
        for (let vv = 0; vv < Pv.length; vv++) {
          const zv = Pv[vv];
          zv._capturePreFrame?.(zv), Nv(zv);
          const Sv = zv._renderingContexts;
          for (let vv = 0; vv < Sv.length; vv++) {
            const zv = Sv[vv];
            zv._update(), hv += zv._drawCallsPre + zv._record()
          }
        }
        const zv = vv._currentEncoder;
        for (let vv = 0; vv < Pv.length; vv++) {
          const hv = Pv[vv];
          hv._captureService?.(hv, zv)
        }
        vv._gpuTimerEnd?.(zv), vv._cbs[0] = zv.finish(), vv._device.queue.submit(vv._cbs), vv._flushGpuRetirements?.(vv), vv.drawCallCount = hv, vv._gpuTimerResolve?.()
      } finally {
        vv._currentEncoder = void 0
      }
    }
  },
  40967: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      e: () => ev,
      h: () => hv
    });
    var hv = globalThis.GPUTextureUsage,
      Sv = globalThis.GPUBufferUsage,
      ev = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41035: (vv, zv, Pv) => {
    function hv(vv) {
      Sv(vv.splice(0))
    }

    function Sv(vv) {
      for (const Pv of vv) try {
        Pv()
      } catch (zv) {
        console.error("GPU resource retirement failed.", zv)
      }
    }

    function ev(vv, zv) {
      vv._flushGpuRetirements ??= gv, (vv._retirements ??= []).push(zv)
    }

    function gv(vv) {
      const zv = vv._retirements;
      if (!zv) return;
      vv._retirements = null;
      const Pv = vv._retiring ??= new Set;
      Pv.add(zv), queueMicrotask((() => {
        vv._device.queue.onSubmittedWorkDone().then((() => {
          Pv.delete(zv), hv(zv)
        })).catch((() => {}))
      }))
    }
    Pv.d(zv, {
      b: () => ev
    })
  },
  41017: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      f: () => gv,
      h: () => pv
    });
    var hv = Pv(40967);

    function Sv(vv) {
      const zv = vv.size;
      return "canvas" in zv ? zv.canvas : zv
    }

    function ev(vv) {
      return {
        _descriptor: vv,
        _resolveSize: Sv,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function gv(vv, zv) {
      if (vv._eager) return void vv._syncEager?.(zv);
      pv(vv);
      const Pv = vv._descriptor,
        {
          width: ev,
          height: gv
        } = (vv._resolveSize ?? Sv)(Pv);
      vv._width = ev, vv._height = gv;
      const dv = zv._device;
      Pv.format && (vv._colorTexture = dv.createTexture({
        label: Pv.lbl,
        size: {
          width: ev,
          height: gv
        },
        format: Pv.format,
        sampleCount: Pv.samples,
        usage: hv.h.RENDER_ATTACHMENT | hv.h.TEXTURE_BINDING | hv.h.COPY_SRC | hv.h.COPY_DST
      }), vv._colorView = vv._colorTexture.createView()), Pv.dFormat && (vv._depthTexture = dv.createTexture({
        label: Pv.lbl,
        size: {
          width: ev,
          height: gv
        },
        format: Pv.dFormat,
        sampleCount: Pv.samples,
        usage: hv.h.RENDER_ATTACHMENT | hv.h.TEXTURE_BINDING
      }), vv._depthView = vv._depthTexture.createView())
    }

    function pv(vv) {
      if (!vv || vv._eager && !vv._disposeAttachments) return;
      const zv = vv._colorTexture,
        Pv = vv._depthTexture;
      if (vv._colorTexture = vv._depthTexture = null, vv._colorView = vv._depthView = null, vv._width = vv._height = 0, vv._disposeAttachments) vv._disposeAttachments(zv, Pv);
      else try {
        zv?.destroy()
      } finally {
        !1 !== vv._ownsDepthTexture && Pv?.destroy()
      }
    }
  },
  41033: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv,
      h: () => Sv,
      j: () => ev
    });
    var hv = Float32Array,
      Sv = Float64Array,
      ev = Uint32Array
  },
  41037: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv
    });
    var hv = 16
  },
  40962: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv
    });
    var hv = null;

    function Sv(vv) {
      for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), Sv = 1; Sv < zv; Sv++) Pv[Sv - 1] = arguments[Sv];
      const ev = new Error(hv?.(vv, Pv) ?? `#${vv}`);
      throw ev.lite = Pv, ev
    }
  },
  40993: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv
    });
    var hv = Pv(40978);

    function Sv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Pv = zv.compare,
        Sv = zv.lodMinClamp ?? 0,
        ev = zv.lodMaxClamp ?? 32,
        gv = void 0 !== Pv || 0 !== Sv || 32 !== ev ? `${Pv??""}:${Sv}:${ev}` : "";
      return (0, hv.e)(vv, zv, gv)
    }
  },
  40976: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev
    });
    var hv = null;

    function Sv(vv) {
      const zv = hv ??= new WeakMap;
      zv.set(vv, (zv.get(vv) ?? 0) + 1)
    }

    function ev(vv) {
      Sv(vv.texture)
    }
  },
  40978: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv
    });
    var hv = null,
      Sv = "nearest",
      ev = "clamp-to-edge",
      gv = {
        minFilter: Sv,
        magFilter: Sv,
        mipmapFilter: Sv,
        addressModeU: ev,
        addressModeV: ev,
        addressModeW: ev,
        maxAnisotropy: 1
      };

    function pv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Sv = vv._device,
        ev = hv ??= new WeakMap;
      let pv = ev.get(Sv);
      pv || ev.set(Sv, pv = new Map);
      let dv = Pv;
      for (const hv in gv) {
        const vv = hv;
        dv += `:${zv[vv]??gv[vv]}`
      }
      let Nv = pv.get(dv);
      return Nv || pv.set(dv, Nv = Sv.createSampler(zv)), Nv
    }
  },
  41025: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Qv,
      e: () => Lv
    });
    var hv = Pv(41017),
      Sv = Pv(41010);

    function ev(vv, zv) {
      zv._passes.length = 0, vv._currentProcessedTask = zv;
      try {
        zv.record()
      } finally {
        vv._currentProcessedTask = null
      }
    }
    var gv = Pv(41033);

    function pv(vv) {
      const zv = vv.worldMatrixVersion;
      if (vv._viewVer === zv) return vv._viewCache;
      const Pv = vv._viewCache,
        hv = vv.worldMatrix,
        Sv = vv._useFloatingOrigin,
        ev = Sv ? 0 : hv[12],
        gv = Sv ? 0 : hv[13],
        pv = Sv ? 0 : hv[14];
      return Pv[0] = hv[0], Pv[1] = hv[4], Pv[2] = hv[8], Pv[3] = 0, Pv[4] = hv[1], Pv[5] = hv[5], Pv[6] = hv[9], Pv[7] = 0, Pv[8] = hv[2], Pv[9] = hv[6], Pv[10] = hv[10], Pv[11] = 0, Pv[12] = -(hv[0] * ev + hv[1] * gv + hv[2] * pv), Pv[13] = -(hv[4] * ev + hv[5] * gv + hv[6] * pv), Pv[14] = -(hv[8] * ev + hv[9] * gv + hv[10] * pv), Pv[15] = 1, vv._viewVer = zv, Pv
    }
    var dv = null;

    function Nv(vv) {
      return vv._projFov === vv.fov && vv._projNear === vv.nearPlane && vv._projFar === vv.farPlane || (vv._projFov = vv.fov, vv._projNear = vv.nearPlane, vv._projFar = vv.farPlane, vv._projRev = (vv._projRev ?? 0) + 1), vv.worldMatrixVersion + (vv._projRev ?? 0)
    }

    function lv(vv, zv) {
      const Pv = Nv(vv);
      if (vv._projVer === Pv && vv._projAspect === zv) return vv._projCache;
      const hv = vv._projCache;
      return null !== dv && vv.ortho ? dv(vv, zv, hv) : function(vv, zv, Pv, hv, Sv) {
        const ev = 1 / Math.tan(.5 * zv),
          gv = Sv - hv;
        vv[0] = ev / Pv, vv[5] = ev, vv[10] = -hv / gv, vv[11] = 1, vv[14] = Sv * hv / gv
      }(hv, vv.fov, zv, vv.nearPlane, vv.farPlane), vv._projVer = Pv, vv._projAspect = zv, hv
    }
    var Tv = Pv(40967);

    function Wv(vv, zv, Pv) {
      return vv._device.createBuffer({
        label: Pv,
        size: (hv = zv, Sv = 16, Math.ceil(hv / Sv) * Sv),
        usage: Tv.b.UNIFORM | Tv.b.COPY_DST
      });
      var hv, Sv
    }
    var wv = Pv(41035),
      av = null;

    function sv(vv) {
      const zv = vv._device,
        Pv = av ??= new WeakMap;
      let hv = Pv.get(zv);
      return hv || (hv = zv.createBindGroupLayout({
        label: "Is",
        entries: [{
          binding: 0,
          visibility: Tv.e.VERTEX | Tv.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: Tv.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), Pv.set(zv, hv)), hv
    }

    function Cv(vv, zv, Pv) {
      const hv = vv._device,
        Sv = Wv(vv, zv.byteLength, Pv);
      try {
        hv.queue.writeBuffer(Sv, 0, zv.buffer, zv.byteOffset, zv.byteLength)
      } catch (ev) {
        throw Sv.destroy(), ev
      }
      return Sv
    }
    var iv = Pv(41037),
      cv = new gv.j(1),
      Gv = new gv.d(cv.buffer);

    function mv(vv) {
      let zv = 0;
      for (const Pv of vv) zv += Pv._lightVersion ?? 0;
      return zv
    }

    function jv(vv, zv) {
      vv.fill(0);
      let Pv = 0;
      for (const hv of zv) {
        if (Pv >= iv.c) break;
        hv._writeLightUbo && (hv._writeLightUbo(vv, 4 + 16 * Pv), Pv++)
      }
      cv[0] = Pv, vv[0] = Gv[0]
    }

    function fv(vv, zv) {
      let Pv = zv._lightGpuState;
      const hv = 16 + 16 * iv.c * 4;
      if (Pv && Pv._byteSize === hv) return Pv;
      const Sv = !Pv;
      Pv?._buffer.destroy();
      const ev = new gv.d(hv / 4);
      return jv(ev, zv.lights), vv._applyLightFoOffset?.(ev, zv), Pv = {
        _buffer: Cv(vv, ev),
        _scratch: ev,
        xR: mv(zv.lights) + (vv._lightFoVersion?.(zv) ?? 0),
        _listVersion: zv._lightListVersion ?? 0,
        _lightCount: zv.lights.length,
        _byteSize: hv
      }, zv._lightGpuState = Pv, Sv && zv._disposables.push((() => {
        zv._lightGpuState?._buffer.destroy(), zv._lightGpuState = void 0
      })), Pv
    }

    function Fv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Sv = zv;
      if (0 === hv && 16 === Sv.length) return void vv.set(Sv, Pv);
      const ev = hv,
        gv = Pv;
      vv[gv + 0] = Sv[ev + 0], vv[gv + 1] = Sv[ev + 1], vv[gv + 2] = Sv[ev + 2], vv[gv + 3] = Sv[ev + 3], vv[gv + 4] = Sv[ev + 4], vv[gv + 5] = Sv[ev + 5], vv[gv + 6] = Sv[ev + 6], vv[gv + 7] = Sv[ev + 7], vv[gv + 8] = Sv[ev + 8], vv[gv + 9] = Sv[ev + 9], vv[gv + 10] = Sv[ev + 10], vv[gv + 11] = Sv[ev + 11], vv[gv + 12] = Sv[ev + 12], vv[gv + 13] = Sv[ev + 13], vv[gv + 14] = Sv[ev + 14], vv[gv + 15] = Sv[ev + 15]
    }

    function Yv(vv, zv, Pv, hv, Sv) {
      vv.fill(0);
      const ev = function(vv, zv) {
          const Pv = Nv(vv);
          if (vv._vpVer === Pv && vv._vpAspect === zv) return vv._vpCache;
          const hv = vv._vpCache;
          return function(vv, zv, Pv, hv, Sv, ev) {
            const gv = Pv[hv],
              pv = Pv[hv + 1],
              dv = Pv[hv + 2],
              Nv = Pv[hv + 3],
              lv = Pv[hv + 4],
              Tv = Pv[hv + 5],
              Wv = Pv[hv + 6],
              wv = Pv[hv + 7],
              av = Pv[hv + 8],
              sv = Pv[hv + 9],
              Cv = Pv[hv + 10],
              iv = Pv[hv + 11],
              cv = Pv[hv + 12],
              Gv = Pv[hv + 13],
              mv = Pv[hv + 14],
              jv = Pv[hv + 15];
            let fv = Sv[ev],
              Fv = Sv[ev + 1],
              Yv = Sv[ev + 2],
              nv = Sv[ev + 3];
            vv[zv] = gv * fv + lv * Fv + av * Yv + cv * nv, vv[zv + 1] = pv * fv + Tv * Fv + sv * Yv + Gv * nv, vv[zv + 2] = dv * fv + Wv * Fv + Cv * Yv + mv * nv, vv[zv + 3] = Nv * fv + wv * Fv + iv * Yv + jv * nv, fv = Sv[ev + 4], Fv = Sv[ev + 5], Yv = Sv[ev + 6], nv = Sv[ev + 7], vv[zv + 4] = gv * fv + lv * Fv + av * Yv + cv * nv, vv[zv + 5] = pv * fv + Tv * Fv + sv * Yv + Gv * nv, vv[zv + 6] = dv * fv + Wv * Fv + Cv * Yv + mv * nv, vv[zv + 7] = Nv * fv + wv * Fv + iv * Yv + jv * nv, fv = Sv[ev + 8], Fv = Sv[ev + 9], Yv = Sv[ev + 10], nv = Sv[ev + 11], vv[zv + 8] = gv * fv + lv * Fv + av * Yv + cv * nv, vv[zv + 9] = pv * fv + Tv * Fv + sv * Yv + Gv * nv, vv[zv + 10] = dv * fv + Wv * Fv + Cv * Yv + mv * nv, vv[zv + 11] = Nv * fv + wv * Fv + iv * Yv + jv * nv, fv = Sv[ev + 12], Fv = Sv[ev + 13], Yv = Sv[ev + 14], nv = Sv[ev + 15], vv[zv + 12] = gv * fv + lv * Fv + av * Yv + cv * nv, vv[zv + 13] = pv * fv + Tv * Fv + sv * Yv + Gv * nv, vv[zv + 14] = dv * fv + Wv * Fv + Cv * Yv + mv * nv, vv[zv + 15] = Nv * fv + wv * Fv + iv * Yv + jv * nv
          }(hv, 0, lv(vv, zv), 0, pv(vv), 0), vv._vpVer = Pv, vv._vpAspect = zv, hv
        }(hv, Sv),
        gv = pv(hv),
        dv = hv.worldMatrix;
      Fv(vv, ev, 0), Fv(vv, gv, 16), zv.useFloatingOrigin ? (vv[32] = 0, vv[33] = 0, vv[34] = 0) : (vv[32] = dv[12], vv[33] = dv[13], vv[34] = dv[14]), vv[87] = zv.canvas.width;
      const Tv = Pv.imageProcessing;
      vv[76] = Tv.exposure, vv[77] = Tv.contrast, vv[78] = Pv._envTextures?.lodGenerationScale ?? .8, vv[79] = +Tv.toneMappingEnabled, vv[37] = zv.canvas.height
    }

    function nv(vv, zv) {
      return {
        _renderables: vv,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: zv
      }
    }

    function Ov(vv, zv, Pv) {
      vv.clr ??= !0;
      const Sv = vv.rt._descriptor,
        ev = vv.depth?._descriptor,
        dv = {
          _colorFormat: Sv.format,
          _depthStencilFormat: ev?.dFormat ?? Sv.dFormat,
          _depthCompare: Sv.depthCompare ?? ev?.depthCompare,
          _sampleCount: Sv.samples
        },
        lv = {
          loadOp: "clear",
          storeOp: "store"
        },
        Tv = {
          ...nv([], -1),
          name: vv.name,
          _config: vv,
          _ownsTargets: !vv.sharedRt,
          engine: zv,
          Is: Pv,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [lv]
          },
          _colorAttachment: lv,
          _sceneUBO: Wv(zv, 368),
          _suData: new gv.d(92),
          _sceneUboCacheKey: [],
          _targetSignature: dv,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (Tv._disposed) throw new Error("RenderTask has been disposed.");
            Tv._recordExplicit ? Tv._recordExplicit(Tv, !0) : Vv(Tv, !1 !== vv.autoMirror ? Pv._renderables.slice() : Tv._renderables, !0)
          },
          execute: () => function(vv, zv, Pv) {
            if (!1 === vv.enabled) return 0;
            const hv = vv.Is;
            ! function(vv, zv, Pv) {
              const hv = vv.Is;
              !1 !== vv._config.autoMirror && vv._lastVersion !== hv._renderableVersion && Vv(vv, hv._renderables.slice());
              Rv(vv, zv);
              const Sv = vv._updateContext,
                ev = vv._config.cam ?? hv.camera;
              Pv._colorFormat && (vv._config._skipClusteredLights || hv._clusteredLightUpdater?.(ev, Sv.targetWidth, Sv.targetHeight), function(vv, zv) {
                const Pv = fv(vv, zv),
                  hv = mv(zv.lights) + (vv._lightFoVersion?.(zv) ?? 0),
                  Sv = zv._lightListVersion ?? 0;
                hv === Pv.xR && Sv === Pv._listVersion && zv.lights.length === Pv._lightCount || (Pv.xR = hv, Pv._listVersion = Sv, Pv._lightCount = zv.lights.length, jv(Pv._scratch, zv.lights), vv._applyLightFoOffset?.(Pv._scratch, zv), vv._device.queue.writeBuffer(Pv._buffer, 0, Pv._scratch)), Pv._buffer
              }(zv, hv));
              (function(vv, zv, Pv, hv) {
                if (!hv) return;
                const Sv = hv.viewport,
                  ev = vv._config.rt,
                  gv = (vv._config.cs ? zv.canvas.width / zv.canvas.height : ev._width / ev._height) * (Sv ? Sv.width / Sv.height : 1),
                  pv = Pv.fog,
                  dv = Pv.imageProcessing,
                  lv = Nv(hv),
                  Tv = Pv._envTextures,
                  Wv = vv._sceneUboCacheKey;
                if (Wv[0] === hv && Wv[1] === pv && Wv[2] === lv && Wv[3] === gv && Wv[4] === dv.exposure && Wv[5] === dv.contrast && Wv[6] === Tv) return;
                Wv[0] = hv, Wv[1] = pv, Wv[2] = lv, Wv[3] = gv, Wv[4] = dv.exposure, Wv[5] = dv.contrast, Wv[6] = Tv;
                const wv = vv._suData;
                Yv(wv, zv, Pv, hv, gv);
                const av = Pv._sceneUboContributors;
                if (av)
                  for (const Nv of av) Nv(wv, Pv);
                zv._device.queue.writeBuffer(vv._sceneUBO, 0, wv)
              })(vv, zv, hv, ev), Sv.jy = ev, vv._batchState?._reset(), xv(vv._opaqueBindings, Sv), xv(vv._directBindings, Sv), xv(vv._transparentBindings, Sv), vv._batchState?._flush(zv),
                function(vv, zv) {
                  const Pv = vv._transparentBindings;
                  if (Pv.length <= 1 || !zv) return;
                  const hv = pv(zv);
                  for (const Sv of Pv) {
                    const vv = Sv.renderable._worldCenter;
                    Sv._sortDistance = vv ? vv[0] * hv[2] + vv[1] * hv[6] + vv[2] * hv[10] + hv[14] : 0
                  }
                  Pv.sort(Dv)
                }(vv, ev)
            }(vv, zv, Pv);
            const Sv = vv._colorAttachment,
              ev = vv._config;
            ev.rt._colorView && (ev.rt === hv.surface.scRT && (Sv.view = ev.rt._colorView), Sv.resolveTarget = ev.rst?._colorView ?? void 0, Sv.clearValue = ev.clrColor ?? hv.clearColor, Sv.loadOp = ev.clr ? "clear" : "load");
            if (vv._executeWithTransmission) return vv._executeWithTransmission(Pv._sampleCount);
            const gv = zv._currentEncoder.beginRenderPass(vv._renderPassDescriptor),
              dv = Uv(vv, gv);
            return gv.end(), dv
          }(Tv, zv, dv),
          dispose() {
            if (Tv._disposed) return;
            Tv._disposed = !0;
            const zv = Tv._pendingMeshes;
            zv && (zv.length = 0);
            for (const vv of Tv._renderables) Tv._retireRenderable?.(Tv.engine, vv);
            Tv._passes.length = Tv._opaqueBindings.length = Tv._directBindings.length = 0, Tv._transparentBindings.length = Tv._renderables.length = Tv._ob.length = 0, Tv._ownsTargets && ((0, hv.h)(vv.rt), (0, hv.h)(vv.rst)), vv.depth?._eager || (0, hv.h)(vv.depth);
            const Pv = Tv._sceneUBO;
            (0, wv.b)(Tv.engine, (() => Pv.destroy())), Tv._batchState?._release(Tv.engine), Tv._batchState = void 0
          }
        };
      return Tv
    }

    function Dv(vv, zv) {
      return zv._sortDistance - vv._sortDistance || vv.renderable.order - zv.renderable.order
    }

    function Kv(vv, zv) {
      return vv.renderable.order - zv.renderable.order
    }

    function Vv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv._renderables,
        Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Sv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        ev = arguments.length > 4 ? arguments[4] : void 0;
      const gv = vv._config,
        pv = gv.rt,
        dv = vv._batchState,
        Nv = nv(zv, vv.Is._renderableVersion);
      if (Pv) {
        const zv = (zv, Pv) => {
          zv && (Pv || vv._ownsTargets || zv._eager) && (0, hv.f)(zv, vv.engine)
        };
        zv(pv), pv._descriptor.samples > 1 && zv(gv.rst), zv(gv.depth, !0)
      }
      const {
        _opaqueBindings: lv,
        _directBindings: Tv,
        _transparentBindings: Wv
      } = Nv;
      try {
        for (const Pv of zv) {
          const zv = Pv.bind(vv.engine, vv._targetSignature);
          Nv._batchState = vv._targetSignature._collectBatches?.(Nv._batchState, zv), Pv.isTransparent || Pv._transmissive ? Wv.push(zv) : Pv._direct ? Tv.push(zv) : lv.push(zv)
        }
        lv.sort(Kv), Tv.sort(Kv), Pv && Rv(vv, vv.engine, !1)
      } catch (wv) {
        throw Nv._batchState?._release(void 0, ev ?? [dv]), wv
      }
      return Pv && (! function(vv, zv) {
        const Pv = vv._config,
          hv = vv._colorAttachment;
        hv.view = zv._colorView, vv._renderPassDescriptor.colorAttachments = zv._colorView ? [hv] : [];
        const Sv = Pv.depth ?? zv,
          ev = Sv._depthView;
        let gv;
        if (ev) {
          const vv = Sv._descriptor,
            zv = (Pv.depth ? Sv._eager : !1 === Pv.depthClear) ? "load" : "clear";
          gv = {
            view: ev,
            depthClearValue: vv.depthClearValue ?? 0,
            depthLoadOp: zv,
            depthStoreOp: "store"
          }, vv.dFormat?.includes("stencil") && (gv.stencilClearValue = 0, gv.stencilLoadOp = zv, gv.stencilStoreOp = "store")
        }
        vv._renderPassDescriptor.depthStencilAttachment = gv
      }(vv, pv), vv._updateContext.targetWidth = pv._width, vv._updateContext.targetHeight = pv._height), Sv && (Object.assign(vv, Nv), dv?._release(vv.engine, [Nv._batchState])), Nv
    }

    function Uv(vv, zv) {
      const Pv = vv.engine,
        hv = vv._config,
        ev = hv.rt,
        gv = vv.Is,
        pv = vv._opaqueBindings,
        dv = vv._ob,
        Nv = vv._sceneBG;
      if (function(vv, zv, Pv, hv) {
          const Sv = zv?.viewport;
          if (!Sv) return;
          const ev = Math.floor(Sv.x * Pv),
            gv = Math.floor((1 - Sv.y - Sv.height) * hv),
            pv = Math.ceil((Sv.x + Sv.width) * Pv) - ev,
            dv = Math.ceil((1 - Sv.y) * hv) - gv;
          vv.setViewport(ev, gv, pv, dv, 0, 1), vv.setScissorRect(ev, gv, pv, dv)
        }(zv, hv.cam ?? gv.camera, ev._width, ev._height), zv.setBindGroup(0, Nv), vv._lastVis !== Sv.e || !dv.length) {
        const zv = ev._descriptor,
          hv = Pv._device.createRenderBundleEncoder({
            colorFormats: zv.format ? [zv.format] : [],
            depthStencilFormat: vv._targetSignature._depthStencilFormat,
            sampleCount: zv.samples
          });
        hv.setBindGroup(0, Nv), tv(hv, pv, Pv), dv[0] = hv.finish(), vv._lastVis = Sv.e
      }
      let lv = pv.length;
      return zv.executeBundles(dv), zv.setBindGroup(0, Nv), lv += tv(zv, vv._directBindings, Pv), lv += tv(zv, vv._transparentBindings, Pv), lv
    }

    function Rv(vv, zv) {
      let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const hv = fv(zv, vv.Is)._buffer;
      if (hv === vv._lightsUBO) return;
      const Sv = zv._device.createBindGroup({
        layout: sv(zv),
        entries: [{
          binding: 0,
          resource: {
            buffer: vv._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: hv
          }
        }]
      });
      vv._lightsUBO = hv, vv._sceneBG = Sv, Pv && (vv._ob = [])
    }

    function xv(vv, zv) {
      for (const Pv of vv) Pv.update?.(zv)
    }

    function tv(vv, zv, Pv) {
      let hv = null,
        Sv = 0;
      for (const ev of zv) {
        const zv = ev.renderable.mesh;
        zv && !1 === zv.visible || (ev.pipeline !== hv && (vv.setPipeline(ev.pipeline), hv = ev.pipeline), Sv += ev.draw(vv, Pv))
      }
      return Sv
    }

    function qv(vv) {
      const zv = vv._materialSwapQueue;
      if (!zv[0] || vv._runtimeBuilds?.w) return;
      let hv, Sv, ev;
      const gv = vv._renderables;
      for (const Pv of zv) {
        const zv = Pv.material;
        if (!zv) continue;
        const pv = Pv._runtimeThinBuild;
        if (pv) {
          Sv = pv(vv, Pv, Sv);
          continue
        }
        const dv = vv._groups.get(zv._buildGroup),
          Nv = dv?.r;
        if (!Nv) {
          (ev ??= []).push(Pv);
          continue
        }
        if (dv._w?.(Pv)) {
          (ev ??= []).push([Pv, zv]);
          continue
        }
        const lv = vv._meshDisposables.get(Pv);
        lv && (vv._meshDisposables.delete(Pv), (0, wv.b)(vv.surface.engine, (() => lv.forEach((vv => vv())))));
        const Tv = dv.o;
        let Wv;
        for (let vv = gv.length; vv--;) gv[vv].mesh === Pv && (Wv = gv.splice(vv, 1)[0]);
        zv._csmGen = -~zv._csmGen;
        const av = Nv(vv, Pv);
        if (Tv) {
          const vv = Tv.indexOf(Wv);
          vv < 0 ? Tv.push(av) : Tv[vv] = av
        }
        hv = gv.push(av)
      }
      if (hv && (gv.sort(((vv, zv) => vv.order - zv.order)), vv._renderableVersion++, vv._materialEpoch++), zv.length = 0, !ev) return Sv;
      const pv = ev;
      return Pv.e(356).then((() => Pv(60696))).then((zv => {
        let {
          C: Pv
        } = zv;
        return Pv(vv, pv, Sv)
      }), (zv => {
        const Pv = vv._runtimeBuilds;
        Pv ? Pv._x(zv) : console.error(zv)
      }))
    }
    var Iv = null;

    function Qv(vv, zv) {
      const Pv = vv.engine,
        Sv = {
          _kind: "Is",
          surface: vv,
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
            Pv.useFloatingOrigin && Sv.camera && !Sv.camera._useFloatingOrigin && (Sv.camera._useFloatingOrigin = !0, Sv.camera._viewVer = -1, Sv.camera._vpVer = -1);
            const vv = Sv.fixedDeltaMs > 0 ? Sv.fixedDeltaMs : Pv._currentDelta,
              zv = Pv._currentEncoder;
            let hv = 0;
            for (const Pv of Sv._beforeRender) Pv(vv);
            Sv._materialSwapQueue.length && qv(Sv);
            for (const ev of Sv._prePasses) hv += ev.execute(zv, Pv);
            for (const ev of Sv._uniformUpdaters) ev.update(Pv);
            Sv._drawCallsPre = hv
          },
          _record: () => Sv._frameGraph.execute(),
          _resize() {
            Sv._frameGraph.build()
          }
        },
        gv = function() {
          const vv = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let zv = 0; zv < vv._tasks.length; zv++) ev(vv, vv._tasks[zv]);
              for (const zv of vv._tasks)
                for (const vv of zv._passes) vv._initialize()
            },
            execute() {
              let zv = 0;
              for (const Pv of vv._tasks)
                if (!1 !== Pv.executionEnabled)
                  if (Pv.execute) zv += Pv.execute();
                  else
                    for (const vv of Pv._passes) zv += vv._execute();
              return zv
            },
            dispose() {
              for (const zv of vv._tasks) zv.dispose();
              vv._tasks.length = 0, vv._currentProcessedTask = null
            }
          };
          return vv
        }();
      if (Sv._frameGraph = gv, !1 !== zv?.defaultRenderTask) {
        const zv = vv.msaaSamples > 1,
          ev = zv ? (0, hv.b)({
            lbl: "scene-color",
            format: vv.format,
            dFormat: "depth24plus-stencil8",
            samples: vv.msaaSamples,
            size: vv
          }) : vv.scRT,
          pv = zv ? void 0 : (0, hv.b)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: vv
          });
        ! function(vv, zv) {
          vv._tasks.push(zv)
        }(gv, Ov({
          name: "Is",
          rt: ev,
          rst: zv ? vv.scRT : void 0,
          depth: pv
        }, Pv, Sv))
      }
      return Sv._disposables.push((() => gv.dispose())), Sv
    }
    async function Zv(vv) {
      const zv = vv;
      for (zv._built || (zv._materialSwapQueue.length = 0); zv._deferredBuilders.length;) {
        const vv = zv._deferredBuilders.splice(0);
        await Promise.all(vv.map((vv => vv())))
      }
      await qv(zv), Iv?.get(zv)?.() || (zv._runtimeBuilds?._e(), zv._renderableVersion++, zv._built = !0), await (zv._rebuildHook?.(zv))
    }
    var Av = null;
    async function Lv(vv) {
      const zv = vv,
        hv = zv.surface;
      (0, Sv.j)(hv, zv) || (await Zv(vv), zv._renderables.sort(Hv), await Promise.all(zv._frameGraph._tasks.map((vv => vv._preload?.()))), Av && await Av(zv), zv._frameGraph.build(), hv._renderingContexts[0] && (await Pv.e(354).then((() => Pv(60683)))).configureSwapchainOverlayScene(hv, zv), Iv?.get(zv)?.() || (0, Sv.l)(hv, zv))
    }
    var Hv = (vv, zv) => vv.order - zv.order
  },
  41004: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Nv,
      f: () => lv
    });
    var hv = Pv(40962),
      Sv = Pv(40967),
      ev = Pv(40976),
      gv = Pv(40978),
      pv = Pv(40980),
      dv = Pv(40987);

    function Nv(vv, zv, Pv) {
      let pv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (zv < 1 || Pv < 1) && (0, hv.e)(676, zv, Pv);
      const Nv = vv._device,
        lv = pv.mipMaps ?? !1,
        Tv = pv.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Wv = lv ? (0, dv.e)(zv, Pv) : 1,
        wv = Nv.createTexture({
          size: {
            width: zv,
            height: Pv
          },
          format: Tv,
          mipLevelCount: Wv,
          usage: Sv.h.TEXTURE_BINDING | Sv.h.COPY_DST | Sv.h.RENDER_ATTACHMENT
        }),
        av = {
          addressModeU: pv.addressModeU ?? "clamp-to-edge",
          addressModeV: pv.addressModeV ?? "clamp-to-edge",
          minFilter: pv.minFilter ?? "linear",
          magFilter: pv.magFilter ?? "linear",
          mipmapFilter: lv ? "linear" : "nearest"
        },
        sv = (0, gv.e)(vv, av),
        Cv = {
          texture: wv,
          view: wv.createView(),
          sampler: sv,
          width: zv,
          height: Pv
        };
      return (0, ev.e)(Cv), vv._dlr && vv._dlr.t(Cv, {
        kind: "dynamic",
        width: zv,
        height: Pv,
        format: Tv,
        levels: Wv,
        samplerDesc: av,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), Cv
    }

    function lv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Sv = hv.invertY ?? !0,
        ev = hv.premultiplyAlpha ?? !1;
      vv._device.queue.copyExternalImageToTexture({
        source: Pv,
        flipY: Sv
      }, {
        texture: zv.texture,
        premultipliedAlpha: ev
      }, [zv.width, zv.height]);
      const gv = zv._recoverySource;
      gv && "dynamic" === gv.kind && (gv.source = Pv, gv.flipY = Sv, gv.premultipliedAlpha = ev), zv.texture.mipLevelCount > 1 && (0, pv.generateMipmaps)(vv, zv.texture)
    }
  },
  40995: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => dv
    });
    var hv = Pv(40962),
      Sv = Pv(40967),
      ev = Pv(40976),
      gv = Pv(40978),
      pv = Pv(40987);
    async function dv(vv, zv) {
      let dv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [Nv, lv] = function(vv) {
        const zv = vv,
          Pv = [
            [zv.displayWidth, zv.displayHeight],
            [zv.videoWidth, zv.videoHeight],
            [zv.naturalWidth, zv.naturalHeight],
            [zv.width, zv.height]
          ];
        for (const [hv, Sv] of Pv)
          if (void 0 !== hv && void 0 !== Sv && Number.isInteger(hv) && Number.isInteger(Sv) && hv > 0 && Sv > 0) return [hv, Sv];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(zv), [Tv, Wv] = function(vv, zv, Pv) {
        if (void 0 === Pv) return [vv, zv];
        if (!Number.isInteger(Pv) || Pv < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${Pv})`);
        if (Math.max(vv, zv) <= Pv) return [vv, zv];
        const hv = Pv / Math.max(vv, zv);
        return vv >= zv ? [Pv, Math.max(1, Math.round(zv * hv))] : [Math.max(1, Math.round(vv * hv)), Pv]
      }(Nv, lv, dv.maxDimension), wv = dv.mipMaps ?? !0, av = dv.premultiplyAlpha ?? !1;
      let sv = zv,
        Cv = null;
      const iv = {
        texture: null
      };
      try {
        Tv === Nv && Wv === lv || (Cv = await createImageBitmap(zv, {
          resizeWidth: Tv,
          resizeHeight: Wv,
          resizeQuality: "high",
          premultiplyAlpha: av ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), sv = Cv);
        const cv = vv._device,
          Gv = dv.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          mv = wv ? (0, pv.e)(Tv, Wv) : 1,
          jv = mv > 1 ? (await Promise.resolve().then((() => Pv(40980)))).generateMipmaps : null,
          fv = {
            addressModeU: dv.addressModeU ?? "repeat",
            addressModeV: dv.addressModeV ?? "repeat",
            minFilter: dv.minFilter ?? "linear",
            magFilter: dv.magFilter ?? "linear",
            mipmapFilter: wv ? "linear" : "nearest"
          };
        fv.maxAnisotropy = "linear" === fv.minFilter && "linear" === fv.magFilter && "linear" === fv.mipmapFilter ? 4 : 1;
        const Fv = dv.invertY ?? !0,
          Yv = async zv => {
            let Pv;
            cv.pushErrorScope("validation"), cv.pushErrorScope("out-of-memory");
            let ev = null;
            try {
              const Pv = iv.texture = cv.createTexture({
                size: {
                  width: Tv,
                  height: Wv
                },
                format: Gv,
                mipLevelCount: mv,
                usage: Sv.h.TEXTURE_BINDING | Sv.h.COPY_DST | Sv.h.RENDER_ATTACHMENT
              });
              cv.queue.copyExternalImageToTexture({
                source: zv,
                flipY: Fv
              }, {
                texture: Pv,
                premultipliedAlpha: av
              }, {
                width: Tv,
                height: Wv
              }), jv && jv(vv, Pv), ev = (0, gv.e)(vv, fv)
            } catch (wv) {
              Pv = wv
            }
            const [pv, dv] = await Promise.all([cv.popErrorScope(), cv.popErrorScope()]);
            if (Pv) throw Pv;
            const Nv = dv ?? pv;
            if (Nv) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${Nv.message}`, {
              cause: Nv
            });
            const lv = iv.texture;
            return lv && ev || (0, hv.e)(677), {
              texture: lv,
              view: lv.createView(),
              sampler: ev,
              width: Tv,
              height: Wv
            }
          }, nv = await (vv._dlr?.x(sv, Tv, Wv, Gv, mv, fv, Fv, av, Yv)) ?? await Yv(sv);
        return (0, ev.e)(nv), nv
      } catch (cv) {
        throw iv.texture?.destroy(), cv
      } finally {
        Cv?.close()
      }
    }
  },
  40980: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      generateMipmaps: () => wv,
      recordMipmaps: () => av
    });
    var hv = Pv(40967),
      Sv = Pv(40978),
      ev = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var gv = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      pv = null,
      dv = null,
      Nv = null,
      lv = null,
      Tv = null;

    function Wv(vv) {
      const zv = vv._device;
      zv !== Tv && (pv?.clear(), pv = null, dv = null, Nv = null, lv = null, Tv = null, Tv = zv), dv ??= zv.createShaderModule({
        code: gv
      }), Nv ??= function(vv) {
        return (0, Sv.e)(vv, ev)
      }(vv), lv ??= zv.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: hv.e.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: hv.e.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function wv(vv, zv, Pv) {
      const hv = vv._device,
        Sv = hv.createCommandEncoder();
      av(vv, zv, Sv, Pv), hv.queue.submit([Sv.finish()])
    }

    function av(vv, zv, Pv, hv) {
      if (zv.mipLevelCount <= 1) return;
      const Sv = vv._device,
        ev = function(vv, zv) {
          const Pv = vv._device;
          Wv(vv), pv ??= new Map;
          let hv = pv.get(zv);
          return hv || (hv = Pv.createRenderPipeline({
            layout: Pv.createPipelineLayout({
              bindGroupLayouts: [lv]
            }),
            vertex: {
              module: dv,
              entryPoint: "vs"
            },
            fragment: {
              module: dv,
              entryPoint: "fs",
              targets: [{
                format: zv
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), pv.set(zv, hv)), hv
        }(vv, zv.format),
        gv = null != hv ? {
          dimension: "2d",
          baseArrayLayer: hv,
          arrayLayerCount: 1
        } : {};
      for (let pv = 1; pv < zv.mipLevelCount; pv++) {
        const vv = zv.createView({
            baseMipLevel: pv - 1,
            mipLevelCount: 1,
            ...gv
          }),
          hv = zv.createView({
            baseMipLevel: pv,
            mipLevelCount: 1,
            ...gv
          }),
          dv = Sv.createBindGroup({
            layout: lv,
            entries: [{
              binding: 0,
              resource: vv
            }, {
              binding: 1,
              resource: Nv
            }]
          }),
          Tv = Pv.beginRenderPass({
            colorAttachments: [{
              view: hv,
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
        Tv.setPipeline(ev), Tv.setBindGroup(0, dv), Tv.draw(3), Tv.end()
      }
    }
  },
  40987: (vv, zv, Pv) => {
    function hv(vv, zv) {
      return Math.floor(Math.log2(Math.max(vv, zv))) + 1
    }
    Pv.d(zv, {
      e: () => hv
    })
  },
  40954: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Nv,
      e: () => lv
    });
    var hv = Pv(40962),
      Sv = Pv(40967),
      ev = Pv(40976),
      gv = Pv(40978),
      pv = Pv(40980),
      dv = Pv(40987);

    function Nv(vv, zv, Pv, pv) {
      let Nv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (zv < 1 || Pv < 1 || pv < 1) && (0, hv.e)(722, zv, Pv, pv);
      const lv = vv._device,
        Tv = Nv.mipMaps ?? !0,
        Wv = Nv.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        wv = lv.createTexture({
          size: {
            width: zv,
            height: Pv,
            depthOrArrayLayers: pv
          },
          dimension: "2d",
          format: Wv,
          mipLevelCount: Tv ? (0, dv.e)(zv, Pv) : 1,
          usage: Sv.h.TEXTURE_BINDING | Sv.h.COPY_DST | Sv.h.RENDER_ATTACHMENT
        }),
        av = (0, gv.e)(vv, {
          addressModeU: Nv.addressModeU ?? "repeat",
          addressModeV: Nv.addressModeV ?? "repeat",
          minFilter: Nv.minFilter ?? "linear",
          magFilter: Nv.magFilter ?? "linear",
          mipmapFilter: Tv ? "linear" : "nearest"
        }),
        sv = {
          texture: wv,
          view: wv.createView({
            dimension: "2d-array"
          }),
          sampler: av,
          width: zv,
          height: Pv,
          layers: pv
        };
      return (0, ev.e)(sv), sv
    }

    function lv(vv, zv, Pv, Sv) {
      let ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Pv < 0 || Pv >= zv.layers || (0 | Pv) !== Pv) && (0, hv.e)(723, zv.layers, Pv);
      const gv = ev.invertY ?? !0,
        dv = ev.premultiplyAlpha ?? !1;
      vv._device.queue.copyExternalImageToTexture({
        source: Sv,
        flipY: gv
      }, {
        texture: zv.texture,
        origin: [0, 0, Pv],
        premultipliedAlpha: dv
      }, [zv.width, zv.height, 1]), zv.texture.mipLevelCount > 1 && (0, pv.generateMipmaps)(vv, zv.texture, Pv)
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);