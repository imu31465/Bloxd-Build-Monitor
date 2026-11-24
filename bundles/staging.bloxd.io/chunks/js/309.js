export const id = 309;
export const ids = [309];
export const modules = {
  41960: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt
    });
    var Ot = Vt(41951),
      qt = Vt(41967);

    function Dt(tt) {
      (0, qt.c)(tt), (0, Ot.s)(tt);
      const et = tt._surfaces;
      for (const Vt of et) Vt._renderingContexts.length = 0, Vt._ro?.disconnect(), Vt._context.unconfigure();
      et.length = 0;
      try {
        tt._disposeManagedResources?.(), tt._disposeStorageBuffers?.()
      } finally {
        tt._device.destroy()
      }
    }
  },
  41951: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => lt,
      g: () => Nt,
      i: () => Et,
      m: () => ft,
      o: () => Jt,
      r: () => Mt,
      s: () => bt
    });
    var Ot = Vt(41897);
    var qt = "Babylon Lite v1.32.0",
      Dt = Vt(41957);

    function mt(tt) {
      return "clientWidth" in tt
    }
    var dt = 1;

    function jt(tt, et, Vt) {
      const jt = et.getContext("webgpu");
      jt || (0, Ot.d)(54), mt(et) && et.setAttribute("data-engine", qt);
      const Ht = Vt?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        Xt = Vt?.srgb ? (Qt = Ht).endsWith("-srgb") ? Qt : `${Qt}-srgb` : Ht;
      var Qt;
      const lt = Vt?.alphaMode ?? "opaque";
      jt.configure({
        device: tt._device,
        format: Ht,
        alphaMode: lt,
        viewFormats: [Xt]
      });
      const Et = 1 === Vt?.msaaSamples ? 1 : 4,
        ft = (0, Dt.e)({
          lbl: "swapchain",
          format: Xt,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return ft._eager = !0, {
        engine: tt,
        canvas: et,
        format: Xt,
        msaaSamples: Et,
        scRT: ft,
        maxDevicePixelRatio: Vt?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: dt++,
        _context: jt,
        _configureFormat: Ht,
        _alphaMode: lt,
        _renderingContexts: []
      }
    }

    function Ht(tt) {
      const et = tt._context.getCurrentTexture(),
        Vt = tt.scRT;
      Vt._colorTexture = et, Vt._colorView = et.createView({
        format: tt.format
      }), Vt._width = et.width, Vt._height = et.height
    }

    function Xt(tt) {
      const et = tt.canvas;
      if (!mt(et)) return;
      const Vt = tt._w ?? et.clientWidth,
        Ot = tt._h ?? et.clientHeight;
      if (!(Vt > 0 && Ot > 0)) return;
      const qt = Math.min(globalThis.devicePixelRatio || 1, tt.maxDevicePixelRatio);
      Qt(tt, Vt * qt | 0, Ot * qt | 0)
    }

    function Qt(tt, et, Vt) {
      const Ot = tt.canvas,
        qt = 0 | et,
        Dt = 0 | Vt;
      if (qt > 0 && Dt > 0 && (qt !== Ot.width || Dt !== Ot.height)) {
        Ot.width = qt, Ot.height = Dt, tt.scRT._width = qt, tt.scRT._height = Dt;
        for (const et of tt._renderingContexts) et._resize?.()
      }
    }
    var lt = 0;

    function Et(tt, et) {
      return -1 !== tt._renderingContexts.indexOf(et)
    }

    function ft(tt, et) {
      return -1 === tt._renderingContexts.indexOf(et) && (tt._renderingContexts.push(et), !0)
    }
    var wt = null;
    var yt = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function Nt(tt, et) {
      const Dt = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...wt ? wt() : {}
      });
      Dt || (0, Ot.d)(47);
      const mt = wt?.deviceFeatures?.(Dt, et) ?? function(tt) {
          return yt.filter((et => tt.features.has(et)))
        }(Dt),
        dt = await Dt.requestDevice({
          requiredFeatures: mt,
          requiredLimits: et?.requiredLimits
        });
      console.log(`${qt} - WebGPU engine`);
      const Qt = !!et?.useHighPrecisionMatrix,
        lt = !!et?.useFloatingOrigin;
      if (lt && !Qt && (0, Ot.d)(48), Qt) {
        const {
          allocateF64Mat4: tt
        } = await Vt.e(361).then((() => Vt(61598)));
        0
      }
      let Et, ft, Nt, Mt;
      if (lt) {
        const [{
          wrapRenderableForFO: tt,
          lightFoVersion: et,
          applyLightFoOffset: Ot
        }, {
          makePackMeshWorld: qt
        }] = await Promise.all([Vt.e(362).then((() => Vt(61600))), Vt.e(363).then((() => Vt(61609)))]);
        Et = tt, ft = qt, Nt = et, Mt = Ot
      }
      const bt = {
          _device: dt
        },
        Jt = [bt];
      return Object.assign(bt, {
        engine: bt,
        surfaces: Jt,
        _surfaces: Jt,
        _device: dt,
        _options: et,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: Qt,
        useFloatingOrigin: lt,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: Et,
        _makePackMeshWorld: ft,
        _lightFoVersion: Nt,
        _applyLightFoOffset: Mt
      }, jt(bt, tt, et)), Xt(bt), Ht(bt), bt
    }

    function Mt(tt, et, Vt) {
      Qt(tt, et, Vt)
    }

    function bt(tt) {
      tt._animFrameId && cancelAnimationFrame(tt._animFrameId), tt._animFrameId = 0, tt._renderFn = null, tt._flushGpuRetirements?.(tt)
    }

    function Jt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tt.surfaces;
      if (Vt !== tt.surfaces)
        for (let qt = Vt.length; qt--;) Vt[qt].engine !== tt && (0, Ot.d)(49);
      Ct(tt, et, Vt)
    }

    function Ct(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tt._surfaces,
        Ot = 0;
      for (let Dt = Vt.length; Dt--;) Ot += Vt[Dt]._renderingContexts.length;
      if (!Ot) return tt.drawCallCount = 0, tt._flushGpuRetirements?.(tt);
      const qt = tt._device.createCommandEncoder({
        label: "frame"
      });
      tt._currentEncoder = qt, tt._currentDelta = et;
      try {
        tt._gpuTimerBegin?.(qt), Ot = 0;
        for (let tt = 0; tt < Vt.length; tt++) {
          const et = Vt[tt];
          et._capturePreFrame?.(et), Ht(et);
          const qt = et._renderingContexts;
          for (let tt = 0; tt < qt.length; tt++) {
            const et = qt[tt];
            et._update(), Ot += et._drawCallsPre + et._record()
          }
        }
        const et = tt._currentEncoder;
        for (let tt = 0; tt < Vt.length; tt++) {
          const Ot = Vt[tt];
          Ot._captureService?.(Ot, et)
        }
        tt._gpuTimerEnd?.(et), tt._cbs[0] = et.finish(), tt._device.queue.submit(tt._cbs), tt._flushGpuRetirements?.(tt), tt.drawCallCount = Ot, tt._gpuTimerResolve?.()
      } finally {
        tt._currentEncoder = void 0
      }
    }
  },
  41899: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      i: () => Dt,
      k: () => Ot
    });
    var Ot = globalThis.GPUTextureUsage,
      qt = globalThis.GPUBufferUsage,
      Dt = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41967: (tt, et, Vt) => {
    function Ot(tt) {
      qt(tt.splice(0))
    }

    function qt(tt) {
      for (const Vt of tt) try {
        Vt()
      } catch (et) {
        console.error("GPU resource retirement failed.", et)
      }
    }

    function Dt(tt, et) {
      tt._flushGpuRetirements ??= mt, (tt._retirements ??= []).push(et)
    }

    function mt(tt) {
      const et = tt._retirements;
      if (!et) return;
      tt._retirements = null;
      const Vt = tt._retiring ??= new Set;
      Vt.add(et), queueMicrotask((() => {
        tt._device.queue.onSubmittedWorkDone().then((() => {
          Vt.delete(et), Ot(et)
        })).catch((() => {}))
      }))
    }

    function dt(tt) {
      const et = tt._retirements,
        Vt = tt._retiring;
      tt._retirements = null, tt._retiring = null, et && Ot(et), Vt?.forEach(Ot)
    }
    Vt.d(et, {
      c: () => dt,
      f: () => Dt
    })
  },
  41957: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      h: () => mt,
      k: () => dt
    });
    var Ot = Vt(41899);

    function qt(tt) {
      const et = tt.size;
      return "canvas" in et ? et.canvas : et
    }

    function Dt(tt) {
      return {
        _descriptor: tt,
        _resolveSize: qt,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function mt(tt, et) {
      if (tt._eager) return void tt._syncEager?.(et);
      dt(tt);
      const Vt = tt._descriptor,
        {
          width: Dt,
          height: mt
        } = (tt._resolveSize ?? qt)(Vt);
      tt._width = Dt, tt._height = mt;
      const jt = et._device;
      Vt.format && (tt._colorTexture = jt.createTexture({
        label: Vt.lbl,
        size: {
          width: Dt,
          height: mt
        },
        format: Vt.format,
        sampleCount: Vt.samples,
        usage: Ot.k.RENDER_ATTACHMENT | Ot.k.TEXTURE_BINDING | Ot.k.COPY_SRC | Ot.k.COPY_DST
      }), tt._colorView = tt._colorTexture.createView()), Vt.dFormat && (tt._depthTexture = jt.createTexture({
        label: Vt.lbl,
        size: {
          width: Dt,
          height: mt
        },
        format: Vt.dFormat,
        sampleCount: Vt.samples,
        usage: Ot.k.RENDER_ATTACHMENT | Ot.k.TEXTURE_BINDING
      }), tt._depthView = tt._depthTexture.createView())
    }

    function dt(tt) {
      if (!tt || tt._eager && !tt._disposeAttachments) return;
      const et = tt._colorTexture,
        Vt = tt._depthTexture;
      if (tt._colorTexture = tt._depthTexture = null, tt._colorView = tt._depthView = null, tt._width = tt._height = 0, tt._disposeAttachments) tt._disposeAttachments(et, Vt);
      else try {
        et?.destroy()
      } finally {
        !1 !== tt._ownsDepthTexture && Vt?.destroy()
      }
    }
  },
  41983: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot,
      f: () => qt,
      g: () => Dt
    });
    var Ot = Float32Array,
      qt = Float64Array,
      Dt = Uint32Array
  },
  41988: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot
    });
    var Ot = 16
  },
  41897: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt
    });
    var Ot = null;

    function qt(tt) {
      for (var et = arguments.length, Vt = new Array(et > 1 ? et - 1 : 0), qt = 1; qt < et; qt++) Vt[qt - 1] = arguments[qt];
      const Dt = new Error(Ot?.(tt, Vt) ?? `#${tt}`);
      throw Dt.lite = Vt, Dt
    }
  },
  41933: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt
    });
    var Ot = Vt(41916);

    function qt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Vt = et.compare,
        qt = et.lodMinClamp ?? 0,
        Dt = et.lodMaxClamp ?? 32,
        mt = void 0 !== Vt || 0 !== qt || 32 !== Dt ? `${Vt??""}:${qt}:${Dt}` : "";
      return (0, Ot.c)(tt, et, mt)
    }
  },
  41907: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt
    });
    var Ot = null;

    function qt(tt) {
      const et = Ot ??= new WeakMap;
      et.set(tt, (et.get(tt) ?? 0) + 1)
    }

    function Dt(tt) {
      qt(tt.texture)
    }
  },
  41916: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => dt
    });
    var Ot = null,
      qt = "nearest",
      Dt = "clamp-to-edge",
      mt = {
        minFilter: qt,
        magFilter: qt,
        mipmapFilter: qt,
        addressModeU: Dt,
        addressModeV: Dt,
        addressModeW: Dt,
        maxAnisotropy: 1
      };

    function dt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const qt = tt._device,
        Dt = Ot ??= new WeakMap;
      let dt = Dt.get(qt);
      dt || Dt.set(qt, dt = new Map);
      let jt = Vt;
      for (const Ot in mt) {
        const tt = Ot;
        jt += `:${et[tt]??mt[tt]}`
      }
      let Ht = dt.get(jt);
      return Ht || dt.set(jt, Ht = qt.createSampler(et)), Ht
    }
  },
  41974: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Gt,
      i: () => rt
    });
    var Ot = Vt(41957),
      qt = Vt(41951);

    function Dt(tt, et) {
      et._passes.length = 0, tt._currentProcessedTask = et;
      try {
        et.record()
      } finally {
        tt._currentProcessedTask = null
      }
    }
    var mt = Vt(41983);

    function dt(tt) {
      const et = tt.worldMatrixVersion;
      if (tt._viewVer === et) return tt._viewCache;
      const Vt = tt._viewCache,
        Ot = tt.worldMatrix,
        qt = tt._useFloatingOrigin,
        Dt = qt ? 0 : Ot[12],
        mt = qt ? 0 : Ot[13],
        dt = qt ? 0 : Ot[14];
      return Vt[0] = Ot[0], Vt[1] = Ot[4], Vt[2] = Ot[8], Vt[3] = 0, Vt[4] = Ot[1], Vt[5] = Ot[5], Vt[6] = Ot[9], Vt[7] = 0, Vt[8] = Ot[2], Vt[9] = Ot[6], Vt[10] = Ot[10], Vt[11] = 0, Vt[12] = -(Ot[0] * Dt + Ot[1] * mt + Ot[2] * dt), Vt[13] = -(Ot[4] * Dt + Ot[5] * mt + Ot[6] * dt), Vt[14] = -(Ot[8] * Dt + Ot[9] * mt + Ot[10] * dt), Vt[15] = 1, tt._viewVer = et, Vt
    }
    var jt = null;

    function Ht(tt) {
      return tt._projFov === tt.fov && tt._projNear === tt.nearPlane && tt._projFar === tt.farPlane || (tt._projFov = tt.fov, tt._projNear = tt.nearPlane, tt._projFar = tt.farPlane, tt._projRev = (tt._projRev ?? 0) + 1), tt.worldMatrixVersion + (tt._projRev ?? 0)
    }

    function Xt(tt, et) {
      const Vt = Ht(tt);
      if (tt._projVer === Vt && tt._projAspect === et) return tt._projCache;
      const Ot = tt._projCache;
      return null !== jt && tt.ortho ? jt(tt, et, Ot) : function(tt, et, Vt, Ot, qt) {
        const Dt = 1 / Math.tan(.5 * et),
          mt = qt - Ot;
        tt[0] = Dt / Vt, tt[5] = Dt, tt[10] = -Ot / mt, tt[11] = 1, tt[14] = qt * Ot / mt
      }(Ot, tt.fov, et, tt.nearPlane, tt.farPlane), tt._projVer = Vt, tt._projAspect = et, Ot
    }
    var Qt = Vt(41899);

    function lt(tt, et, Vt) {
      return tt._device.createBuffer({
        label: Vt,
        size: (Ot = et, qt = 16, Math.ceil(Ot / qt) * qt),
        usage: Qt.e.UNIFORM | Qt.e.COPY_DST
      });
      var Ot, qt
    }
    var Et = Vt(41967),
      ft = null;

    function wt(tt) {
      const et = tt._device,
        Vt = ft ??= new WeakMap;
      let Ot = Vt.get(et);
      return Ot || (Ot = et.createBindGroupLayout({
        label: "Fw",
        entries: [{
          binding: 0,
          visibility: Qt.i.VERTEX | Qt.i.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: Qt.i.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), Vt.set(et, Ot)), Ot
    }

    function yt(tt, et, Vt) {
      const Ot = tt._device,
        qt = lt(tt, et.byteLength, Vt);
      try {
        Ot.queue.writeBuffer(qt, 0, et.buffer, et.byteOffset, et.byteLength)
      } catch (Dt) {
        throw qt.destroy(), Dt
      }
      return qt
    }
    var Nt = Vt(41988),
      Mt = new mt.g(1),
      bt = new mt.d(Mt.buffer);

    function Jt(tt) {
      let et = 0;
      for (const Vt of tt) et += Vt._lightVersion ?? 0;
      return et
    }

    function Ct(tt, et) {
      tt.fill(0);
      let Vt = 0;
      for (const Ot of et) {
        if (Vt >= Nt.e) break;
        Ot._writeLightUbo && (Ot._writeLightUbo(tt, 4 + 16 * Vt), Vt++)
      }
      Mt[0] = Vt, tt[0] = bt[0]
    }

    function ut(tt, et) {
      let Vt = et._lightGpuState;
      const Ot = 16 + 16 * Nt.e * 4;
      if (Vt && Vt._byteSize === Ot) return Vt;
      const qt = !Vt;
      Vt?._buffer.destroy();
      const Dt = new mt.d(Ot / 4);
      return Ct(Dt, et.lights), tt._applyLightFoOffset?.(Dt, et), Vt = {
        _buffer: yt(tt, Dt),
        _scratch: Dt,
        JG: Jt(et.lights) + (tt._lightFoVersion?.(et) ?? 0),
        _listVersion: et._lightListVersion ?? 0,
        _lightCount: et.lights.length,
        _byteSize: Ot
      }, et._lightGpuState = Vt, qt && et._disposables.push((() => {
        et._lightGpuState?._buffer.destroy(), et._lightGpuState = void 0
      })), Vt
    }

    function Kt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const qt = et;
      if (0 === Ot && 16 === qt.length) return void tt.set(qt, Vt);
      const Dt = Ot,
        mt = Vt;
      tt[mt + 0] = qt[Dt + 0], tt[mt + 1] = qt[Dt + 1], tt[mt + 2] = qt[Dt + 2], tt[mt + 3] = qt[Dt + 3], tt[mt + 4] = qt[Dt + 4], tt[mt + 5] = qt[Dt + 5], tt[mt + 6] = qt[Dt + 6], tt[mt + 7] = qt[Dt + 7], tt[mt + 8] = qt[Dt + 8], tt[mt + 9] = qt[Dt + 9], tt[mt + 10] = qt[Dt + 10], tt[mt + 11] = qt[Dt + 11], tt[mt + 12] = qt[Dt + 12], tt[mt + 13] = qt[Dt + 13], tt[mt + 14] = qt[Dt + 14], tt[mt + 15] = qt[Dt + 15]
    }

    function ht(tt, et, Vt, Ot, qt) {
      tt.fill(0);
      const Dt = function(tt, et) {
          const Vt = Ht(tt);
          if (tt._vpVer === Vt && tt._vpAspect === et) return tt._vpCache;
          const Ot = tt._vpCache;
          return function(tt, et, Vt, Ot, qt, Dt) {
            const mt = Vt[Ot],
              dt = Vt[Ot + 1],
              jt = Vt[Ot + 2],
              Ht = Vt[Ot + 3],
              Xt = Vt[Ot + 4],
              Qt = Vt[Ot + 5],
              lt = Vt[Ot + 6],
              Et = Vt[Ot + 7],
              ft = Vt[Ot + 8],
              wt = Vt[Ot + 9],
              yt = Vt[Ot + 10],
              Nt = Vt[Ot + 11],
              Mt = Vt[Ot + 12],
              bt = Vt[Ot + 13],
              Jt = Vt[Ot + 14],
              Ct = Vt[Ot + 15];
            let ut = qt[Dt],
              Kt = qt[Dt + 1],
              ht = qt[Dt + 2],
              vt = qt[Dt + 3];
            tt[et] = mt * ut + Xt * Kt + ft * ht + Mt * vt, tt[et + 1] = dt * ut + Qt * Kt + wt * ht + bt * vt, tt[et + 2] = jt * ut + lt * Kt + yt * ht + Jt * vt, tt[et + 3] = Ht * ut + Et * Kt + Nt * ht + Ct * vt, ut = qt[Dt + 4], Kt = qt[Dt + 5], ht = qt[Dt + 6], vt = qt[Dt + 7], tt[et + 4] = mt * ut + Xt * Kt + ft * ht + Mt * vt, tt[et + 5] = dt * ut + Qt * Kt + wt * ht + bt * vt, tt[et + 6] = jt * ut + lt * Kt + yt * ht + Jt * vt, tt[et + 7] = Ht * ut + Et * Kt + Nt * ht + Ct * vt, ut = qt[Dt + 8], Kt = qt[Dt + 9], ht = qt[Dt + 10], vt = qt[Dt + 11], tt[et + 8] = mt * ut + Xt * Kt + ft * ht + Mt * vt, tt[et + 9] = dt * ut + Qt * Kt + wt * ht + bt * vt, tt[et + 10] = jt * ut + lt * Kt + yt * ht + Jt * vt, tt[et + 11] = Ht * ut + Et * Kt + Nt * ht + Ct * vt, ut = qt[Dt + 12], Kt = qt[Dt + 13], ht = qt[Dt + 14], vt = qt[Dt + 15], tt[et + 12] = mt * ut + Xt * Kt + ft * ht + Mt * vt, tt[et + 13] = dt * ut + Qt * Kt + wt * ht + bt * vt, tt[et + 14] = jt * ut + lt * Kt + yt * ht + Jt * vt, tt[et + 15] = Ht * ut + Et * Kt + Nt * ht + Ct * vt
          }(Ot, 0, Xt(tt, et), 0, dt(tt), 0), tt._vpVer = Vt, tt._vpAspect = et, Ot
        }(Ot, qt),
        mt = dt(Ot),
        jt = Ot.worldMatrix;
      Kt(tt, Dt, 0), Kt(tt, mt, 16), et.useFloatingOrigin ? (tt[32] = 0, tt[33] = 0, tt[34] = 0) : (tt[32] = jt[12], tt[33] = jt[13], tt[34] = jt[14]), tt[87] = et.canvas.width;
      const Qt = Vt.imageProcessing;
      tt[76] = Qt.exposure, tt[77] = Qt.contrast, tt[78] = Vt._envTextures?.lodGenerationScale ?? .8, tt[79] = +Qt.toneMappingEnabled, tt[37] = et.canvas.height
    }

    function vt(tt, et) {
      return {
        _renderables: tt,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: et
      }
    }

    function Wt(tt, et, Vt) {
      tt.clr ??= !0;
      const qt = tt.rt._descriptor,
        Dt = tt.depth?._descriptor,
        jt = {
          _colorFormat: qt.format,
          _depthStencilFormat: Dt?.dFormat ?? qt.dFormat,
          _depthCompare: qt.depthCompare ?? Dt?.depthCompare,
          _sampleCount: qt.samples
        },
        Xt = {
          loadOp: "clear",
          storeOp: "store"
        },
        Qt = {
          ...vt([], -1),
          name: tt.name,
          _config: tt,
          _ownsTargets: !tt.sharedRt,
          engine: et,
          Fw: Vt,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [Xt]
          },
          _colorAttachment: Xt,
          _sceneUBO: lt(et, 368),
          _suData: new mt.d(92),
          _sceneUboCacheKey: [],
          _targetSignature: jt,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (Qt._disposed) throw new Error("RenderTask has been disposed.");
            Qt._recordExplicit ? Qt._recordExplicit(Qt, !0) : Rt(Qt, !1 !== tt.autoMirror ? Vt._renderables.slice() : Qt._renderables, !0)
          },
          execute: () => function(tt, et, Vt) {
            if (!1 === tt.enabled) return 0;
            const Ot = tt.Fw;
            ! function(tt, et, Vt) {
              const Ot = tt.Fw;
              !1 !== tt._config.autoMirror && tt._lastVersion !== Ot._renderableVersion && Rt(tt, Ot._renderables.slice());
              Pt(tt, et);
              const qt = tt._updateContext,
                Dt = tt._config.cam ?? Ot.camera;
              Vt._colorFormat && (tt._config._skipClusteredLights || Ot._clusteredLightUpdater?.(Dt, qt.targetWidth, qt.targetHeight), function(tt, et) {
                const Vt = ut(tt, et),
                  Ot = Jt(et.lights) + (tt._lightFoVersion?.(et) ?? 0),
                  qt = et._lightListVersion ?? 0;
                Ot === Vt.JG && qt === Vt._listVersion && et.lights.length === Vt._lightCount || (Vt.JG = Ot, Vt._listVersion = qt, Vt._lightCount = et.lights.length, Ct(Vt._scratch, et.lights), tt._applyLightFoOffset?.(Vt._scratch, et), tt._device.queue.writeBuffer(Vt._buffer, 0, Vt._scratch)), Vt._buffer
              }(et, Ot));
              (function(tt, et, Vt, Ot) {
                if (!Ot) return;
                const qt = Ot.viewport,
                  Dt = tt._config.rt,
                  mt = (tt._config.cs ? et.canvas.width / et.canvas.height : Dt._width / Dt._height) * (qt ? qt.width / qt.height : 1),
                  dt = Vt.fog,
                  jt = Vt.imageProcessing,
                  Xt = Ht(Ot),
                  Qt = Vt._envTextures,
                  lt = tt._sceneUboCacheKey;
                if (lt[0] === Ot && lt[1] === dt && lt[2] === Xt && lt[3] === mt && lt[4] === jt.exposure && lt[5] === jt.contrast && lt[6] === Qt) return;
                lt[0] = Ot, lt[1] = dt, lt[2] = Xt, lt[3] = mt, lt[4] = jt.exposure, lt[5] = jt.contrast, lt[6] = Qt;
                const Et = tt._suData;
                ht(Et, et, Vt, Ot, mt);
                const ft = Vt._sceneUboContributors;
                if (ft)
                  for (const Ht of ft) Ht(Et, Vt);
                et._device.queue.writeBuffer(tt._sceneUBO, 0, Et)
              })(tt, et, Ot, Dt), qt.wT = Dt, tt._batchState?._reset(), Zt(tt._opaqueBindings, qt), Zt(tt._directBindings, qt), Zt(tt._transparentBindings, qt), tt._batchState?._flush(et),
                function(tt, et) {
                  const Vt = tt._transparentBindings;
                  if (Vt.length <= 1 || !et) return;
                  const Ot = dt(et);
                  for (const qt of Vt) {
                    const tt = qt.renderable._worldCenter;
                    qt._sortDistance = tt ? tt[0] * Ot[2] + tt[1] * Ot[6] + tt[2] * Ot[10] + Ot[14] : 0
                  }
                  Vt.sort(St)
                }(tt, Dt)
            }(tt, et, Vt);
            const qt = tt._colorAttachment,
              Dt = tt._config;
            Dt.rt._colorView && (Dt.rt === Ot.surface.scRT && (qt.view = Dt.rt._colorView), qt.resolveTarget = Dt.rst?._colorView ?? void 0, qt.clearValue = Dt.clrColor ?? Ot.clearColor, qt.loadOp = Dt.clr ? "clear" : "load");
            if (tt._executeWithTransmission) return tt._executeWithTransmission(Vt._sampleCount);
            const mt = et._currentEncoder.beginRenderPass(tt._renderPassDescriptor),
              jt = It(tt, mt);
            return mt.end(), jt
          }(Qt, et, jt),
          dispose() {
            if (Qt._disposed) return;
            Qt._disposed = !0;
            const et = Qt._pendingMeshes;
            et && (et.length = 0);
            for (const tt of Qt._renderables) Qt._retireRenderable?.(Qt.engine, tt);
            Qt._passes.length = Qt._opaqueBindings.length = Qt._directBindings.length = 0, Qt._transparentBindings.length = Qt._renderables.length = Qt._ob.length = 0, Qt._ownsTargets && ((0, Ot.k)(tt.rt), (0, Ot.k)(tt.rst)), tt.depth?._eager || (0, Ot.k)(tt.depth);
            const Vt = Qt._sceneUBO;
            (0, Et.f)(Qt.engine, (() => Vt.destroy())), Qt._batchState?._release(Qt.engine), Qt._batchState = void 0
          }
        };
      return Qt
    }

    function St(tt, et) {
      return et._sortDistance - tt._sortDistance || tt.renderable.order - et.renderable.order
    }

    function ct(tt, et) {
      return tt.renderable.order - et.renderable.order
    }

    function Rt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt._renderables,
        Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        qt = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        Dt = arguments.length > 4 ? arguments[4] : void 0;
      const mt = tt._config,
        dt = mt.rt,
        jt = tt._batchState,
        Ht = vt(et, tt.Fw._renderableVersion);
      if (Vt) {
        const et = (et, Vt) => {
          et && (Vt || tt._ownsTargets || et._eager) && (0, Ot.h)(et, tt.engine)
        };
        et(dt), dt._descriptor.samples > 1 && et(mt.rst), et(mt.depth, !0)
      }
      const {
        _opaqueBindings: Xt,
        _directBindings: Qt,
        _transparentBindings: lt
      } = Ht;
      try {
        for (const Vt of et) {
          const et = Vt.bind(tt.engine, tt._targetSignature);
          Ht._batchState = tt._targetSignature._collectBatches?.(Ht._batchState, et), Vt.isTransparent || Vt._transmissive ? lt.push(et) : Vt._direct ? Qt.push(et) : Xt.push(et)
        }
        Xt.sort(ct), Qt.sort(ct), Vt && Pt(tt, tt.engine, !1)
      } catch (Et) {
        throw Ht._batchState?._release(void 0, Dt ?? [jt]), Et
      }
      return Vt && (! function(tt, et) {
        const Vt = tt._config,
          Ot = tt._colorAttachment;
        Ot.view = et._colorView, tt._renderPassDescriptor.colorAttachments = et._colorView ? [Ot] : [];
        const qt = Vt.depth ?? et,
          Dt = qt._depthView;
        let mt;
        if (Dt) {
          const tt = qt._descriptor,
            et = (Vt.depth ? qt._eager : !1 === Vt.depthClear) ? "load" : "clear";
          mt = {
            view: Dt,
            depthClearValue: tt.depthClearValue ?? 0,
            depthLoadOp: et,
            depthStoreOp: "store"
          }, tt.dFormat?.includes("stencil") && (mt.stencilClearValue = 0, mt.stencilLoadOp = et, mt.stencilStoreOp = "store")
        }
        tt._renderPassDescriptor.depthStencilAttachment = mt
      }(tt, dt), tt._updateContext.targetWidth = dt._width, tt._updateContext.targetHeight = dt._height), qt && (Object.assign(tt, Ht), jt?._release(tt.engine, [Ht._batchState])), Ht
    }

    function It(tt, et) {
      const Vt = tt.engine,
        Ot = tt._config,
        Dt = Ot.rt,
        mt = tt.Fw,
        dt = tt._opaqueBindings,
        jt = tt._ob,
        Ht = tt._sceneBG;
      if (function(tt, et, Vt, Ot) {
          const qt = et?.viewport;
          if (!qt) return;
          const Dt = Math.floor(qt.x * Vt),
            mt = Math.floor((1 - qt.y - qt.height) * Ot),
            dt = Math.ceil((qt.x + qt.width) * Vt) - Dt,
            jt = Math.ceil((1 - qt.y) * Ot) - mt;
          tt.setViewport(Dt, mt, dt, jt, 0, 1), tt.setScissorRect(Dt, mt, dt, jt)
        }(et, Ot.cam ?? mt.camera, Dt._width, Dt._height), et.setBindGroup(0, Ht), tt._lastVis !== qt.e || !jt.length) {
        const et = Dt._descriptor,
          Ot = Vt._device.createRenderBundleEncoder({
            colorFormats: et.format ? [et.format] : [],
            depthStencilFormat: tt._targetSignature._depthStencilFormat,
            sampleCount: et.samples
          });
        Ot.setBindGroup(0, Ht), Lt(Ot, dt, Vt), jt[0] = Ot.finish(), tt._lastVis = qt.e
      }
      let Xt = dt.length;
      return et.executeBundles(jt), et.setBindGroup(0, Ht), Xt += Lt(et, tt._directBindings, Vt), Xt += Lt(et, tt._transparentBindings, Vt), Xt
    }

    function Pt(tt, et) {
      let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Ot = ut(et, tt.Fw)._buffer;
      if (Ot === tt._lightsUBO) return;
      const qt = et._device.createBindGroup({
        layout: wt(et),
        entries: [{
          binding: 0,
          resource: {
            buffer: tt._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: Ot
          }
        }]
      });
      tt._lightsUBO = Ot, tt._sceneBG = qt, Vt && (tt._ob = [])
    }

    function Zt(tt, et) {
      for (const Vt of tt) Vt.update?.(et)
    }

    function Lt(tt, et, Vt) {
      let Ot = null,
        qt = 0;
      for (const Dt of et) {
        const et = Dt.renderable.mesh;
        et && !1 === et.visible || (Dt.pipeline !== Ot && (tt.setPipeline(Dt.pipeline), Ot = Dt.pipeline), qt += Dt.draw(tt, Vt))
      }
      return qt
    }

    function Ft(tt) {
      const et = tt._materialSwapQueue;
      if (!et[0] || tt._runtimeBuilds?.w) return;
      let Ot, qt, Dt;
      const mt = tt._renderables;
      for (const Vt of et) {
        const et = Vt.material;
        if (!et) continue;
        const dt = Vt._runtimeThinBuild;
        if (dt) {
          qt = dt(tt, Vt, qt);
          continue
        }
        const jt = tt._groups.get(et._buildGroup),
          Ht = jt?.r;
        if (!Ht) {
          (Dt ??= []).push(Vt);
          continue
        }
        if (jt._w?.(Vt)) {
          (Dt ??= []).push([Vt, et]);
          continue
        }
        const Xt = tt._meshDisposables.get(Vt);
        Xt && (tt._meshDisposables.delete(Vt), (0, Et.f)(tt.surface.engine, (() => Xt.forEach((tt => tt())))));
        const Qt = jt.o;
        let lt;
        for (let tt = mt.length; tt--;) mt[tt].mesh === Vt && (lt = mt.splice(tt, 1)[0]);
        et._csmGen = -~et._csmGen;
        const ft = Ht(tt, Vt);
        if (Qt) {
          const tt = Qt.indexOf(lt);
          tt < 0 ? Qt.push(ft) : Qt[tt] = ft
        }
        Ot = mt.push(ft)
      }
      if (Ot && (mt.sort(((tt, et) => tt.order - et.order)), tt._renderableVersion++, tt._materialEpoch++), et.length = 0, !Dt) return qt;
      const dt = Dt;
      return Vt.e(367).then((() => Vt(61634))).then((et => {
        let {
          C: Vt
        } = et;
        return Vt(tt, dt, qt)
      }), (et => {
        const Vt = tt._runtimeBuilds;
        Vt ? Vt._x(et) : console.error(et)
      }))
    }
    var kt = null;

    function Gt(tt, et) {
      const Vt = tt.engine,
        qt = {
          _kind: "Fw",
          surface: tt,
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
            Vt.useFloatingOrigin && qt.camera && !qt.camera._useFloatingOrigin && (qt.camera._useFloatingOrigin = !0, qt.camera._viewVer = -1, qt.camera._vpVer = -1);
            const tt = qt.fixedDeltaMs > 0 ? qt.fixedDeltaMs : Vt._currentDelta,
              et = Vt._currentEncoder;
            let Ot = 0;
            for (const Vt of qt._beforeRender) Vt(tt);
            qt._materialSwapQueue.length && Ft(qt);
            for (const Dt of qt._prePasses) Ot += Dt.execute(et, Vt);
            for (const Dt of qt._uniformUpdaters) Dt.update(Vt);
            qt._drawCallsPre = Ot
          },
          _record: () => qt._frameGraph.execute(),
          _resize() {
            qt._frameGraph.build()
          }
        },
        mt = function() {
          const tt = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let et = 0; et < tt._tasks.length; et++) Dt(tt, tt._tasks[et]);
              for (const et of tt._tasks)
                for (const tt of et._passes) tt._initialize()
            },
            execute() {
              let et = 0;
              for (const Vt of tt._tasks)
                if (!1 !== Vt.executionEnabled)
                  if (Vt.execute) et += Vt.execute();
                  else
                    for (const tt of Vt._passes) et += tt._execute();
              return et
            },
            dispose() {
              for (const et of tt._tasks) et.dispose();
              tt._tasks.length = 0, tt._currentProcessedTask = null
            }
          };
          return tt
        }();
      if (qt._frameGraph = mt, !1 !== et?.defaultRenderTask) {
        const et = tt.msaaSamples > 1,
          Dt = et ? (0, Ot.e)({
            lbl: "scene-color",
            format: tt.format,
            dFormat: "depth24plus-stencil8",
            samples: tt.msaaSamples,
            size: tt
          }) : tt.scRT,
          dt = et ? void 0 : (0, Ot.e)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: tt
          });
        ! function(tt, et) {
          tt._tasks.push(et)
        }(mt, Wt({
          name: "Fw",
          rt: Dt,
          rst: et ? tt.scRT : void 0,
          depth: dt
        }, Vt, qt))
      }
      return qt._disposables.push((() => mt.dispose())), qt
    }
    async function zt(tt) {
      const et = tt;
      for (et._built || (et._materialSwapQueue.length = 0); et._deferredBuilders.length;) {
        const tt = et._deferredBuilders.splice(0);
        await Promise.all(tt.map((tt => tt())))
      }
      await Ft(et), kt?.get(et)?.() || (et._runtimeBuilds?._e(), et._renderableVersion++, et._built = !0), await (et._rebuildHook?.(et))
    }
    var ot = null;
    async function rt(tt) {
      const et = tt,
        Ot = et.surface;
      (0, qt.i)(Ot, et) || (await zt(tt), et._renderables.sort(Ut), await Promise.all(et._frameGraph._tasks.map((tt => tt._preload?.()))), ot && await ot(et), et._frameGraph.build(), Ot._renderingContexts[0] && (await Vt.e(365).then((() => Vt(61621)))).configureSwapchainOverlayScene(Ot, et), kt?.get(et)?.() || (0, qt.m)(Ot, et))
    }
    var Ut = (tt, et) => tt.order - et.order
  },
  41946: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ht,
      h: () => Xt
    });
    var Ot = Vt(41897),
      qt = Vt(41899),
      Dt = Vt(41907),
      mt = Vt(41916),
      dt = Vt(41921),
      jt = Vt(41924);

    function Ht(tt, et, Vt) {
      let dt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (et < 1 || Vt < 1) && (0, Ot.d)(676, et, Vt);
      const Ht = tt._device,
        Xt = dt.mipMaps ?? !1,
        Qt = dt.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        lt = Xt ? (0, jt.e)(et, Vt) : 1,
        Et = Ht.createTexture({
          size: {
            width: et,
            height: Vt
          },
          format: Qt,
          mipLevelCount: lt,
          usage: qt.k.TEXTURE_BINDING | qt.k.COPY_DST | qt.k.RENDER_ATTACHMENT
        }),
        ft = {
          addressModeU: dt.addressModeU ?? "clamp-to-edge",
          addressModeV: dt.addressModeV ?? "clamp-to-edge",
          minFilter: dt.minFilter ?? "linear",
          magFilter: dt.magFilter ?? "linear",
          mipmapFilter: Xt ? "linear" : "nearest"
        },
        wt = (0, mt.c)(tt, ft),
        yt = {
          texture: Et,
          view: Et.createView(),
          sampler: wt,
          width: et,
          height: Vt
        };
      return (0, Dt.b)(yt), tt._dlr && tt._dlr.t(yt, {
        kind: "dynamic",
        width: et,
        height: Vt,
        format: Qt,
        levels: lt,
        samplerDesc: ft,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), yt
    }

    function Xt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const qt = Ot.invertY ?? !0,
        Dt = Ot.premultiplyAlpha ?? !1;
      tt._device.queue.copyExternalImageToTexture({
        source: Vt,
        flipY: qt
      }, {
        texture: et.texture,
        premultipliedAlpha: Dt
      }, [et.width, et.height]);
      const mt = et._recoverySource;
      mt && "dynamic" === mt.kind && (mt.source = Vt, mt.flipY = qt, mt.premultipliedAlpha = Dt), et.texture.mipLevelCount > 1 && (0, dt.generateMipmaps)(tt, et.texture)
    }
  },
  41941: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => jt
    });
    var Ot = Vt(41897),
      qt = Vt(41899),
      Dt = Vt(41907),
      mt = Vt(41916),
      dt = Vt(41924);
    async function jt(tt, et) {
      let jt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [Ht, Xt] = function(tt) {
        const et = tt,
          Vt = [
            [et.displayWidth, et.displayHeight],
            [et.videoWidth, et.videoHeight],
            [et.naturalWidth, et.naturalHeight],
            [et.width, et.height]
          ];
        for (const [Ot, qt] of Vt)
          if (void 0 !== Ot && void 0 !== qt && Number.isInteger(Ot) && Number.isInteger(qt) && Ot > 0 && qt > 0) return [Ot, qt];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(et), [Qt, lt] = function(tt, et, Vt) {
        if (void 0 === Vt) return [tt, et];
        if (!Number.isInteger(Vt) || Vt < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${Vt})`);
        if (Math.max(tt, et) <= Vt) return [tt, et];
        const Ot = Vt / Math.max(tt, et);
        return tt >= et ? [Vt, Math.max(1, Math.round(et * Ot))] : [Math.max(1, Math.round(tt * Ot)), Vt]
      }(Ht, Xt, jt.maxDimension), Et = jt.mipMaps ?? !0, ft = jt.premultiplyAlpha ?? !1;
      let wt = et,
        yt = null;
      const Nt = {
        texture: null
      };
      try {
        Qt === Ht && lt === Xt || (yt = await createImageBitmap(et, {
          resizeWidth: Qt,
          resizeHeight: lt,
          resizeQuality: "high",
          premultiplyAlpha: ft ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), wt = yt);
        const Mt = tt._device,
          bt = jt.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          Jt = Et ? (0, dt.e)(Qt, lt) : 1,
          Ct = Jt > 1 ? (await Promise.resolve().then((() => Vt(41921)))).generateMipmaps : null,
          ut = {
            addressModeU: jt.addressModeU ?? "repeat",
            addressModeV: jt.addressModeV ?? "repeat",
            minFilter: jt.minFilter ?? "linear",
            magFilter: jt.magFilter ?? "linear",
            mipmapFilter: Et ? "linear" : "nearest"
          };
        ut.maxAnisotropy = "linear" === ut.minFilter && "linear" === ut.magFilter && "linear" === ut.mipmapFilter ? 4 : 1;
        const Kt = jt.invertY ?? !0,
          ht = async et => {
            let Vt;
            Mt.pushErrorScope("validation"), Mt.pushErrorScope("out-of-memory");
            let Dt = null;
            try {
              const Vt = Nt.texture = Mt.createTexture({
                size: {
                  width: Qt,
                  height: lt
                },
                format: bt,
                mipLevelCount: Jt,
                usage: qt.k.TEXTURE_BINDING | qt.k.COPY_DST | qt.k.RENDER_ATTACHMENT
              });
              Mt.queue.copyExternalImageToTexture({
                source: et,
                flipY: Kt
              }, {
                texture: Vt,
                premultipliedAlpha: ft
              }, {
                width: Qt,
                height: lt
              }), Ct && Ct(tt, Vt), Dt = (0, mt.c)(tt, ut)
            } catch (Et) {
              Vt = Et
            }
            const [dt, jt] = await Promise.all([Mt.popErrorScope(), Mt.popErrorScope()]);
            if (Vt) throw Vt;
            const Ht = jt ?? dt;
            if (Ht) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${Ht.message}`, {
              cause: Ht
            });
            const Xt = Nt.texture;
            return Xt && Dt || (0, Ot.d)(677), {
              texture: Xt,
              view: Xt.createView(),
              sampler: Dt,
              width: Qt,
              height: lt
            }
          }, vt = await (tt._dlr?.x(wt, Qt, lt, bt, Jt, ut, Kt, ft, ht)) ?? await ht(wt);
        return (0, Dt.b)(vt), vt
      } catch (Mt) {
        throw Nt.texture?.destroy(), Mt
      } finally {
        yt?.close()
      }
    }
  },
  41921: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      generateMipmaps: () => Et,
      recordMipmaps: () => ft
    });
    var Ot = Vt(41899),
      qt = Vt(41916),
      Dt = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var mt = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      dt = null,
      jt = null,
      Ht = null,
      Xt = null,
      Qt = null;

    function lt(tt) {
      const et = tt._device;
      et !== Qt && (dt?.clear(), dt = null, jt = null, Ht = null, Xt = null, Qt = null, Qt = et), jt ??= et.createShaderModule({
        code: mt
      }), Ht ??= function(tt) {
        return (0, qt.c)(tt, Dt)
      }(tt), Xt ??= et.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: Ot.i.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: Ot.i.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function Et(tt, et, Vt) {
      const Ot = tt._device,
        qt = Ot.createCommandEncoder();
      ft(tt, et, qt, Vt), Ot.queue.submit([qt.finish()])
    }

    function ft(tt, et, Vt, Ot) {
      if (et.mipLevelCount <= 1) return;
      const qt = tt._device,
        Dt = function(tt, et) {
          const Vt = tt._device;
          lt(tt), dt ??= new Map;
          let Ot = dt.get(et);
          return Ot || (Ot = Vt.createRenderPipeline({
            layout: Vt.createPipelineLayout({
              bindGroupLayouts: [Xt]
            }),
            vertex: {
              module: jt,
              entryPoint: "vs"
            },
            fragment: {
              module: jt,
              entryPoint: "fs",
              targets: [{
                format: et
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), dt.set(et, Ot)), Ot
        }(tt, et.format),
        mt = null != Ot ? {
          dimension: "2d",
          baseArrayLayer: Ot,
          arrayLayerCount: 1
        } : {};
      for (let dt = 1; dt < et.mipLevelCount; dt++) {
        const tt = et.createView({
            baseMipLevel: dt - 1,
            mipLevelCount: 1,
            ...mt
          }),
          Ot = et.createView({
            baseMipLevel: dt,
            mipLevelCount: 1,
            ...mt
          }),
          jt = qt.createBindGroup({
            layout: Xt,
            entries: [{
              binding: 0,
              resource: tt
            }, {
              binding: 1,
              resource: Ht
            }]
          }),
          Qt = Vt.beginRenderPass({
            colorAttachments: [{
              view: Ot,
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
        Qt.setPipeline(Dt), Qt.setBindGroup(0, jt), Qt.draw(3), Qt.end()
      }
    }
  },
  41924: (tt, et, Vt) => {
    function Ot(tt, et) {
      return Math.floor(Math.log2(Math.max(tt, et))) + 1
    }
    Vt.d(et, {
      e: () => Ot
    })
  },
  41891: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ht,
      d: () => Xt
    });
    var Ot = Vt(41897),
      qt = Vt(41899),
      Dt = Vt(41907),
      mt = Vt(41916),
      dt = Vt(41921),
      jt = Vt(41924);

    function Ht(tt, et, Vt, dt) {
      let Ht = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (et < 1 || Vt < 1 || dt < 1) && (0, Ot.d)(722, et, Vt, dt);
      const Xt = tt._device,
        Qt = Ht.mipMaps ?? !0,
        lt = Ht.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Et = Xt.createTexture({
          size: {
            width: et,
            height: Vt,
            depthOrArrayLayers: dt
          },
          dimension: "2d",
          format: lt,
          mipLevelCount: Qt ? (0, jt.e)(et, Vt) : 1,
          usage: qt.k.TEXTURE_BINDING | qt.k.COPY_DST | qt.k.RENDER_ATTACHMENT
        }),
        ft = (0, mt.c)(tt, {
          addressModeU: Ht.addressModeU ?? "repeat",
          addressModeV: Ht.addressModeV ?? "repeat",
          minFilter: Ht.minFilter ?? "linear",
          magFilter: Ht.magFilter ?? "linear",
          mipmapFilter: Qt ? "linear" : "nearest"
        }),
        wt = {
          texture: Et,
          view: Et.createView({
            dimension: "2d-array"
          }),
          sampler: ft,
          width: et,
          height: Vt,
          layers: dt
        };
      return (0, Dt.b)(wt), wt
    }

    function Xt(tt, et, Vt, qt) {
      let Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Vt < 0 || Vt >= et.layers || (0 | Vt) !== Vt) && (0, Ot.d)(723, et.layers, Vt);
      const mt = Dt.invertY ?? !0,
        jt = Dt.premultiplyAlpha ?? !1;
      tt._device.queue.copyExternalImageToTexture({
        source: qt,
        flipY: mt
      }, {
        texture: et.texture,
        origin: [0, 0, Vt],
        premultipliedAlpha: jt
      }, [et.width, et.height, 1]), et.texture.mipLevelCount > 1 && (0, dt.generateMipmaps)(tt, et.texture, Vt)
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);