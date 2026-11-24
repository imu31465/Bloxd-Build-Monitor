export const id = 304;
export const ids = [304];
export const modules = {
  41717: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Em,
      e: () => jm,
      f: () => om,
      g: () => Om,
      k: () => Im,
      o: () => Vm
    });
    var hm = fm(41678);
    var Am = "Babylon Lite v1.32.0",
      am = fm(41723);

    function xm(mm) {
      return "clientWidth" in mm
    }
    var wm = 1;

    function Dm(mm, Tm, fm) {
      const Dm = Tm.getContext("webgpu");
      Dm || (0, hm.c)(54), xm(Tm) && Tm.setAttribute("data-engine", Am);
      const im = fm?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        Rm = fm?.srgb ? (pm = im).endsWith("-srgb") ? pm : `${pm}-srgb` : im;
      var pm;
      const Em = fm?.alphaMode ?? "opaque";
      Dm.configure({
        device: mm._device,
        format: im,
        alphaMode: Em,
        viewFormats: [Rm]
      });
      const om = 1 === fm?.msaaSamples ? 1 : 4,
        Om = (0, am.d)({
          lbl: "swapchain",
          format: Rm,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return Om._eager = !0, {
        engine: mm,
        canvas: Tm,
        format: Rm,
        msaaSamples: om,
        scRT: Om,
        maxDevicePixelRatio: fm?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: wm++,
        _context: Dm,
        _configureFormat: im,
        _alphaMode: Em,
        _renderingContexts: []
      }
    }

    function im(mm) {
      const Tm = mm._context.getCurrentTexture(),
        fm = mm.scRT;
      fm._colorTexture = Tm, fm._colorView = Tm.createView({
        format: mm.format
      }), fm._width = Tm.width, fm._height = Tm.height
    }

    function Rm(mm) {
      const Tm = mm.canvas;
      if (!xm(Tm)) return;
      const fm = mm._w ?? Tm.clientWidth,
        hm = mm._h ?? Tm.clientHeight;
      if (!(fm > 0 && hm > 0)) return;
      const Am = Math.min(globalThis.devicePixelRatio || 1, mm.maxDevicePixelRatio);
      pm(mm, fm * Am | 0, hm * Am | 0)
    }

    function pm(mm, Tm, fm) {
      const hm = mm.canvas,
        Am = 0 | Tm,
        am = 0 | fm;
      if (Am > 0 && am > 0 && (Am !== hm.width || am !== hm.height)) {
        hm.width = Am, hm.height = am, mm.scRT._width = Am, mm.scRT._height = am;
        for (const Tm of mm._renderingContexts) Tm._resize?.()
      }
    }
    var Em = 0;

    function om(mm, Tm) {
      return -1 !== mm._renderingContexts.indexOf(Tm)
    }

    function Om(mm, Tm) {
      return -1 === mm._renderingContexts.indexOf(Tm) && (mm._renderingContexts.push(Tm), !0)
    }
    var Ym = null;
    var qm = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function jm(mm, Tm) {
      const am = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...Ym ? Ym() : {}
      });
      am || (0, hm.c)(47);
      const xm = Ym?.deviceFeatures?.(am, Tm) ?? function(mm) {
          return qm.filter((Tm => mm.features.has(Tm)))
        }(am),
        wm = await am.requestDevice({
          requiredFeatures: xm,
          requiredLimits: Tm?.requiredLimits
        });
      console.log(`${Am} - WebGPU engine`);
      const pm = !!Tm?.useHighPrecisionMatrix,
        Em = !!Tm?.useFloatingOrigin;
      if (Em && !pm && (0, hm.c)(48), pm) {
        const {
          allocateF64Mat4: mm
        } = await fm.e(357).then((() => fm(61407)));
        0
      }
      let om, Om, jm, Vm;
      if (Em) {
        const [{
          wrapRenderableForFO: mm,
          lightFoVersion: Tm,
          applyLightFoOffset: hm
        }, {
          makePackMeshWorld: Am
        }] = await Promise.all([fm.e(358).then((() => fm(61416))), fm.e(359).then((() => fm(61422)))]);
        om = mm, Om = Am, jm = Tm, Vm = hm
      }
      const Im = {
          _device: wm
        },
        Km = [Im];
      return Object.assign(Im, {
        engine: Im,
        surfaces: Km,
        _surfaces: Km,
        _device: wm,
        _options: Tm,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: pm,
        useFloatingOrigin: Em,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: om,
        _makePackMeshWorld: Om,
        _lightFoVersion: jm,
        _applyLightFoOffset: Vm
      }, Dm(Im, mm, Tm)), Rm(Im), im(Im), Im
    }

    function Vm(mm, Tm, fm) {
      pm(mm, Tm, fm)
    }

    function Im(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mm.surfaces;
      if (fm !== mm.surfaces)
        for (let Am = fm.length; Am--;) fm[Am].engine !== mm && (0, hm.c)(49);
      Km(mm, Tm, fm)
    }

    function Km(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mm._surfaces,
        hm = 0;
      for (let am = fm.length; am--;) hm += fm[am]._renderingContexts.length;
      if (!hm) return mm.drawCallCount = 0, mm._flushGpuRetirements?.(mm);
      const Am = mm._device.createCommandEncoder({
        label: "frame"
      });
      mm._currentEncoder = Am, mm._currentDelta = Tm;
      try {
        mm._gpuTimerBegin?.(Am), hm = 0;
        for (let mm = 0; mm < fm.length; mm++) {
          const Tm = fm[mm];
          Tm._capturePreFrame?.(Tm), im(Tm);
          const Am = Tm._renderingContexts;
          for (let mm = 0; mm < Am.length; mm++) {
            const Tm = Am[mm];
            Tm._update(), hm += Tm._drawCallsPre + Tm._record()
          }
        }
        const Tm = mm._currentEncoder;
        for (let mm = 0; mm < fm.length; mm++) {
          const hm = fm[mm];
          hm._captureService?.(hm, Tm)
        }
        mm._gpuTimerEnd?.(Tm), mm._cbs[0] = Tm.finish(), mm._device.queue.submit(mm._cbs), mm._flushGpuRetirements?.(mm), mm.drawCallCount = hm, mm._gpuTimerResolve?.()
      } finally {
        mm._currentEncoder = void 0
      }
    }
  },
  41682: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      h: () => am,
      j: () => hm
    });
    var hm = globalThis.GPUTextureUsage,
      Am = globalThis.GPUBufferUsage,
      am = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41743: (mm, Tm, fm) => {
    function hm(mm) {
      Am(mm.splice(0))
    }

    function Am(mm) {
      for (const fm of mm) try {
        fm()
      } catch (Tm) {
        console.error("GPU resource retirement failed.", Tm)
      }
    }

    function am(mm, Tm) {
      mm._flushGpuRetirements ??= xm, (mm._retirements ??= []).push(Tm)
    }

    function xm(mm) {
      const Tm = mm._retirements;
      if (!Tm) return;
      mm._retirements = null;
      const fm = mm._retiring ??= new Set;
      fm.add(Tm), queueMicrotask((() => {
        mm._device.queue.onSubmittedWorkDone().then((() => {
          fm.delete(Tm), hm(Tm)
        })).catch((() => {}))
      }))
    }
    fm.d(Tm, {
      c: () => am
    })
  },
  41723: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am,
      h: () => xm,
      k: () => wm
    });
    var hm = fm(41682);

    function Am(mm) {
      const Tm = mm.size;
      return "canvas" in Tm ? Tm.canvas : Tm
    }

    function am(mm) {
      return {
        _descriptor: mm,
        _resolveSize: Am,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function xm(mm, Tm) {
      if (mm._eager) return void mm._syncEager?.(Tm);
      wm(mm);
      const fm = mm._descriptor,
        {
          width: am,
          height: xm
        } = (mm._resolveSize ?? Am)(fm);
      mm._width = am, mm._height = xm;
      const Dm = Tm._device;
      fm.format && (mm._colorTexture = Dm.createTexture({
        label: fm.lbl,
        size: {
          width: am,
          height: xm
        },
        format: fm.format,
        sampleCount: fm.samples,
        usage: hm.j.RENDER_ATTACHMENT | hm.j.TEXTURE_BINDING | hm.j.COPY_SRC | hm.j.COPY_DST
      }), mm._colorView = mm._colorTexture.createView()), fm.dFormat && (mm._depthTexture = Dm.createTexture({
        label: fm.lbl,
        size: {
          width: am,
          height: xm
        },
        format: fm.dFormat,
        sampleCount: fm.samples,
        usage: hm.j.RENDER_ATTACHMENT | hm.j.TEXTURE_BINDING
      }), mm._depthView = mm._depthTexture.createView())
    }

    function wm(mm) {
      if (!mm || mm._eager && !mm._disposeAttachments) return;
      const Tm = mm._colorTexture,
        fm = mm._depthTexture;
      if (mm._colorTexture = mm._depthTexture = null, mm._colorView = mm._depthView = null, mm._width = mm._height = 0, mm._disposeAttachments) mm._disposeAttachments(Tm, fm);
      else try {
        Tm?.destroy()
      } finally {
        !1 !== mm._ownsDepthTexture && fm?.destroy()
      }
    }
  },
  41735: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm,
      h: () => Am,
      l: () => am
    });
    var hm = Float32Array,
      Am = Float64Array,
      am = Uint32Array
  },
  41745: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    var hm = 16
  },
  41678: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    var hm = null;

    function Am(mm) {
      for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), Am = 1; Am < Tm; Am++) fm[Am - 1] = arguments[Am];
      const am = new Error(hm?.(mm, fm) ?? `#${mm}`);
      throw am.lite = fm, am
    }
  },
  41703: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am
    });
    var hm = fm(41688);

    function Am(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const fm = Tm.compare,
        Am = Tm.lodMinClamp ?? 0,
        am = Tm.lodMaxClamp ?? 32,
        xm = void 0 !== fm || 0 !== Am || 32 !== am ? `${fm??""}:${Am}:${am}` : "";
      return (0, hm.b)(mm, Tm, xm)
    }
  },
  41686: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am
    });
    var hm = null;

    function Am(mm) {
      const Tm = hm ??= new WeakMap;
      Tm.set(mm, (Tm.get(mm) ?? 0) + 1)
    }

    function am(mm) {
      Am(mm.texture)
    }
  },
  41688: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm
    });
    var hm = null,
      Am = "nearest",
      am = "clamp-to-edge",
      xm = {
        minFilter: Am,
        magFilter: Am,
        mipmapFilter: Am,
        addressModeU: am,
        addressModeV: am,
        addressModeW: am,
        maxAnisotropy: 1
      };

    function wm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Am = mm._device,
        am = hm ??= new WeakMap;
      let wm = am.get(Am);
      wm || am.set(Am, wm = new Map);
      let Dm = fm;
      for (const hm in xm) {
        const mm = hm;
        Dm += `:${Tm[mm]??xm[mm]}`
      }
      let im = wm.get(Dm);
      return im || wm.set(Dm, im = Am.createSampler(Tm)), im
    }
  },
  41727: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => ym,
      e: () => sm
    });
    var hm = fm(41723),
      Am = fm(41717);

    function am(mm, Tm) {
      Tm._passes.length = 0, mm._currentProcessedTask = Tm;
      try {
        Tm.record()
      } finally {
        mm._currentProcessedTask = null
      }
    }
    var xm = fm(41735);

    function wm(mm) {
      const Tm = mm.worldMatrixVersion;
      if (mm._viewVer === Tm) return mm._viewCache;
      const fm = mm._viewCache,
        hm = mm.worldMatrix,
        Am = mm._useFloatingOrigin,
        am = Am ? 0 : hm[12],
        xm = Am ? 0 : hm[13],
        wm = Am ? 0 : hm[14];
      return fm[0] = hm[0], fm[1] = hm[4], fm[2] = hm[8], fm[3] = 0, fm[4] = hm[1], fm[5] = hm[5], fm[6] = hm[9], fm[7] = 0, fm[8] = hm[2], fm[9] = hm[6], fm[10] = hm[10], fm[11] = 0, fm[12] = -(hm[0] * am + hm[1] * xm + hm[2] * wm), fm[13] = -(hm[4] * am + hm[5] * xm + hm[6] * wm), fm[14] = -(hm[8] * am + hm[9] * xm + hm[10] * wm), fm[15] = 1, mm._viewVer = Tm, fm
    }
    var Dm = null;

    function im(mm) {
      return mm._projFov === mm.fov && mm._projNear === mm.nearPlane && mm._projFar === mm.farPlane || (mm._projFov = mm.fov, mm._projNear = mm.nearPlane, mm._projFar = mm.farPlane, mm._projRev = (mm._projRev ?? 0) + 1), mm.worldMatrixVersion + (mm._projRev ?? 0)
    }

    function Rm(mm, Tm) {
      const fm = im(mm);
      if (mm._projVer === fm && mm._projAspect === Tm) return mm._projCache;
      const hm = mm._projCache;
      return null !== Dm && mm.ortho ? Dm(mm, Tm, hm) : function(mm, Tm, fm, hm, Am) {
        const am = 1 / Math.tan(.5 * Tm),
          xm = Am - hm;
        mm[0] = am / fm, mm[5] = am, mm[10] = -hm / xm, mm[11] = 1, mm[14] = Am * hm / xm
      }(hm, mm.fov, Tm, mm.nearPlane, mm.farPlane), mm._projVer = fm, mm._projAspect = Tm, hm
    }
    var pm = fm(41682);

    function Em(mm, Tm, fm) {
      return mm._device.createBuffer({
        label: fm,
        size: (hm = Tm, Am = 16, Math.ceil(hm / Am) * Am),
        usage: pm.e.UNIFORM | pm.e.COPY_DST
      });
      var hm, Am
    }
    var om = fm(41743),
      Om = null;

    function Ym(mm) {
      const Tm = mm._device,
        fm = Om ??= new WeakMap;
      let hm = fm.get(Tm);
      return hm || (hm = Tm.createBindGroupLayout({
        label: "Aq",
        entries: [{
          binding: 0,
          visibility: pm.h.VERTEX | pm.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: pm.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), fm.set(Tm, hm)), hm
    }

    function qm(mm, Tm, fm) {
      const hm = mm._device,
        Am = Em(mm, Tm.byteLength, fm);
      try {
        hm.queue.writeBuffer(Am, 0, Tm.buffer, Tm.byteOffset, Tm.byteLength)
      } catch (am) {
        throw Am.destroy(), am
      }
      return Am
    }
    var jm = fm(41745),
      Vm = new xm.l(1),
      Im = new xm.e(Vm.buffer);

    function Km(mm) {
      let Tm = 0;
      for (const fm of mm) Tm += fm._lightVersion ?? 0;
      return Tm
    }

    function Qm(mm, Tm) {
      mm.fill(0);
      let fm = 0;
      for (const hm of Tm) {
        if (fm >= jm.e) break;
        hm._writeLightUbo && (hm._writeLightUbo(mm, 4 + 16 * fm), fm++)
      }
      Vm[0] = fm, mm[0] = Im[0]
    }

    function nm(mm, Tm) {
      let fm = Tm._lightGpuState;
      const hm = 16 + 16 * jm.e * 4;
      if (fm && fm._byteSize === hm) return fm;
      const Am = !fm;
      fm?._buffer.destroy();
      const am = new xm.e(hm / 4);
      return Qm(am, Tm.lights), mm._applyLightFoOffset?.(am, Tm), fm = {
        _buffer: qm(mm, am),
        _scratch: am,
        rC: Km(Tm.lights) + (mm._lightFoVersion?.(Tm) ?? 0),
        _listVersion: Tm._lightListVersion ?? 0,
        _lightCount: Tm.lights.length,
        _byteSize: hm
      }, Tm._lightGpuState = fm, Am && Tm._disposables.push((() => {
        Tm._lightGpuState?._buffer.destroy(), Tm._lightGpuState = void 0
      })), fm
    }

    function Jm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Am = Tm;
      if (0 === hm && 16 === Am.length) return void mm.set(Am, fm);
      const am = hm,
        xm = fm;
      mm[xm + 0] = Am[am + 0], mm[xm + 1] = Am[am + 1], mm[xm + 2] = Am[am + 2], mm[xm + 3] = Am[am + 3], mm[xm + 4] = Am[am + 4], mm[xm + 5] = Am[am + 5], mm[xm + 6] = Am[am + 6], mm[xm + 7] = Am[am + 7], mm[xm + 8] = Am[am + 8], mm[xm + 9] = Am[am + 9], mm[xm + 10] = Am[am + 10], mm[xm + 11] = Am[am + 11], mm[xm + 12] = Am[am + 12], mm[xm + 13] = Am[am + 13], mm[xm + 14] = Am[am + 14], mm[xm + 15] = Am[am + 15]
    }

    function cm(mm, Tm, fm, hm, Am) {
      mm.fill(0);
      const am = function(mm, Tm) {
          const fm = im(mm);
          if (mm._vpVer === fm && mm._vpAspect === Tm) return mm._vpCache;
          const hm = mm._vpCache;
          return function(mm, Tm, fm, hm, Am, am) {
            const xm = fm[hm],
              wm = fm[hm + 1],
              Dm = fm[hm + 2],
              im = fm[hm + 3],
              Rm = fm[hm + 4],
              pm = fm[hm + 5],
              Em = fm[hm + 6],
              om = fm[hm + 7],
              Om = fm[hm + 8],
              Ym = fm[hm + 9],
              qm = fm[hm + 10],
              jm = fm[hm + 11],
              Vm = fm[hm + 12],
              Im = fm[hm + 13],
              Km = fm[hm + 14],
              Qm = fm[hm + 15];
            let nm = Am[am],
              Jm = Am[am + 1],
              cm = Am[am + 2],
              zm = Am[am + 3];
            mm[Tm] = xm * nm + Rm * Jm + Om * cm + Vm * zm, mm[Tm + 1] = wm * nm + pm * Jm + Ym * cm + Im * zm, mm[Tm + 2] = Dm * nm + Em * Jm + qm * cm + Km * zm, mm[Tm + 3] = im * nm + om * Jm + jm * cm + Qm * zm, nm = Am[am + 4], Jm = Am[am + 5], cm = Am[am + 6], zm = Am[am + 7], mm[Tm + 4] = xm * nm + Rm * Jm + Om * cm + Vm * zm, mm[Tm + 5] = wm * nm + pm * Jm + Ym * cm + Im * zm, mm[Tm + 6] = Dm * nm + Em * Jm + qm * cm + Km * zm, mm[Tm + 7] = im * nm + om * Jm + jm * cm + Qm * zm, nm = Am[am + 8], Jm = Am[am + 9], cm = Am[am + 10], zm = Am[am + 11], mm[Tm + 8] = xm * nm + Rm * Jm + Om * cm + Vm * zm, mm[Tm + 9] = wm * nm + pm * Jm + Ym * cm + Im * zm, mm[Tm + 10] = Dm * nm + Em * Jm + qm * cm + Km * zm, mm[Tm + 11] = im * nm + om * Jm + jm * cm + Qm * zm, nm = Am[am + 12], Jm = Am[am + 13], cm = Am[am + 14], zm = Am[am + 15], mm[Tm + 12] = xm * nm + Rm * Jm + Om * cm + Vm * zm, mm[Tm + 13] = wm * nm + pm * Jm + Ym * cm + Im * zm, mm[Tm + 14] = Dm * nm + Em * Jm + qm * cm + Km * zm, mm[Tm + 15] = im * nm + om * Jm + jm * cm + Qm * zm
          }(hm, 0, Rm(mm, Tm), 0, wm(mm), 0), mm._vpVer = fm, mm._vpAspect = Tm, hm
        }(hm, Am),
        xm = wm(hm),
        Dm = hm.worldMatrix;
      Jm(mm, am, 0), Jm(mm, xm, 16), Tm.useFloatingOrigin ? (mm[32] = 0, mm[33] = 0, mm[34] = 0) : (mm[32] = Dm[12], mm[33] = Dm[13], mm[34] = Dm[14]), mm[87] = Tm.canvas.width;
      const pm = fm.imageProcessing;
      mm[76] = pm.exposure, mm[77] = pm.contrast, mm[78] = fm._envTextures?.lodGenerationScale ?? .8, mm[79] = +pm.toneMappingEnabled, mm[37] = Tm.canvas.height
    }

    function zm(mm, Tm) {
      return {
        _renderables: mm,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: Tm
      }
    }

    function Zm(mm, Tm, fm) {
      mm.clr ??= !0;
      const Am = mm.rt._descriptor,
        am = mm.depth?._descriptor,
        Dm = {
          _colorFormat: Am.format,
          _depthStencilFormat: am?.dFormat ?? Am.dFormat,
          _depthCompare: Am.depthCompare ?? am?.depthCompare,
          _sampleCount: Am.samples
        },
        Rm = {
          loadOp: "clear",
          storeOp: "store"
        },
        pm = {
          ...zm([], -1),
          name: mm.name,
          _config: mm,
          _ownsTargets: !mm.sharedRt,
          engine: Tm,
          Aq: fm,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [Rm]
          },
          _colorAttachment: Rm,
          _sceneUBO: Em(Tm, 368),
          _suData: new xm.e(92),
          _sceneUboCacheKey: [],
          _targetSignature: Dm,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (pm._disposed) throw new Error("RenderTask has been disposed.");
            pm._recordExplicit ? pm._recordExplicit(pm, !0) : Sm(pm, !1 !== mm.autoMirror ? fm._renderables.slice() : pm._renderables, !0)
          },
          execute: () => function(mm, Tm, fm) {
            if (!1 === mm.enabled) return 0;
            const hm = mm.Aq;
            ! function(mm, Tm, fm) {
              const hm = mm.Aq;
              !1 !== mm._config.autoMirror && mm._lastVersion !== hm._renderableVersion && Sm(mm, hm._renderables.slice());
              Nm(mm, Tm);
              const Am = mm._updateContext,
                am = mm._config.cam ?? hm.camera;
              fm._colorFormat && (mm._config._skipClusteredLights || hm._clusteredLightUpdater?.(am, Am.targetWidth, Am.targetHeight), function(mm, Tm) {
                const fm = nm(mm, Tm),
                  hm = Km(Tm.lights) + (mm._lightFoVersion?.(Tm) ?? 0),
                  Am = Tm._lightListVersion ?? 0;
                hm === fm.rC && Am === fm._listVersion && Tm.lights.length === fm._lightCount || (fm.rC = hm, fm._listVersion = Am, fm._lightCount = Tm.lights.length, Qm(fm._scratch, Tm.lights), mm._applyLightFoOffset?.(fm._scratch, Tm), mm._device.queue.writeBuffer(fm._buffer, 0, fm._scratch)), fm._buffer
              }(Tm, hm));
              (function(mm, Tm, fm, hm) {
                if (!hm) return;
                const Am = hm.viewport,
                  am = mm._config.rt,
                  xm = (mm._config.cs ? Tm.canvas.width / Tm.canvas.height : am._width / am._height) * (Am ? Am.width / Am.height : 1),
                  wm = fm.fog,
                  Dm = fm.imageProcessing,
                  Rm = im(hm),
                  pm = fm._envTextures,
                  Em = mm._sceneUboCacheKey;
                if (Em[0] === hm && Em[1] === wm && Em[2] === Rm && Em[3] === xm && Em[4] === Dm.exposure && Em[5] === Dm.contrast && Em[6] === pm) return;
                Em[0] = hm, Em[1] = wm, Em[2] = Rm, Em[3] = xm, Em[4] = Dm.exposure, Em[5] = Dm.contrast, Em[6] = pm;
                const om = mm._suData;
                cm(om, Tm, fm, hm, xm);
                const Om = fm._sceneUboContributors;
                if (Om)
                  for (const im of Om) im(om, fm);
                Tm._device.queue.writeBuffer(mm._sceneUBO, 0, om)
              })(mm, Tm, hm, am), Am.rW = am, mm._batchState?._reset(), Gm(mm._opaqueBindings, Am), Gm(mm._directBindings, Am), Gm(mm._transparentBindings, Am), mm._batchState?._flush(Tm),
                function(mm, Tm) {
                  const fm = mm._transparentBindings;
                  if (fm.length <= 1 || !Tm) return;
                  const hm = wm(Tm);
                  for (const Am of fm) {
                    const mm = Am.renderable._worldCenter;
                    Am._sortDistance = mm ? mm[0] * hm[2] + mm[1] * hm[6] + mm[2] * hm[10] + hm[14] : 0
                  }
                  fm.sort(km)
                }(mm, am)
            }(mm, Tm, fm);
            const Am = mm._colorAttachment,
              am = mm._config;
            am.rt._colorView && (am.rt === hm.surface.scRT && (Am.view = am.rt._colorView), Am.resolveTarget = am.rst?._colorView ?? void 0, Am.clearValue = am.clrColor ?? hm.clearColor, Am.loadOp = am.clr ? "clear" : "load");
            if (mm._executeWithTransmission) return mm._executeWithTransmission(fm._sampleCount);
            const xm = Tm._currentEncoder.beginRenderPass(mm._renderPassDescriptor),
              Dm = em(mm, xm);
            return xm.end(), Dm
          }(pm, Tm, Dm),
          dispose() {
            if (pm._disposed) return;
            pm._disposed = !0;
            const Tm = pm._pendingMeshes;
            Tm && (Tm.length = 0);
            for (const mm of pm._renderables) pm._retireRenderable?.(pm.engine, mm);
            pm._passes.length = pm._opaqueBindings.length = pm._directBindings.length = 0, pm._transparentBindings.length = pm._renderables.length = pm._ob.length = 0, pm._ownsTargets && ((0, hm.k)(mm.rt), (0, hm.k)(mm.rst)), mm.depth?._eager || (0, hm.k)(mm.depth);
            const fm = pm._sceneUBO;
            (0, om.c)(pm.engine, (() => fm.destroy())), pm._batchState?._release(pm.engine), pm._batchState = void 0
          }
        };
      return pm
    }

    function km(mm, Tm) {
      return Tm._sortDistance - mm._sortDistance || mm.renderable.order - Tm.renderable.order
    }

    function bm(mm, Tm) {
      return mm.renderable.order - Tm.renderable.order
    }

    function Sm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm._renderables,
        fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Am = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        am = arguments.length > 4 ? arguments[4] : void 0;
      const xm = mm._config,
        wm = xm.rt,
        Dm = mm._batchState,
        im = zm(Tm, mm.Aq._renderableVersion);
      if (fm) {
        const Tm = (Tm, fm) => {
          Tm && (fm || mm._ownsTargets || Tm._eager) && (0, hm.h)(Tm, mm.engine)
        };
        Tm(wm), wm._descriptor.samples > 1 && Tm(xm.rst), Tm(xm.depth, !0)
      }
      const {
        _opaqueBindings: Rm,
        _directBindings: pm,
        _transparentBindings: Em
      } = im;
      try {
        for (const fm of Tm) {
          const Tm = fm.bind(mm.engine, mm._targetSignature);
          im._batchState = mm._targetSignature._collectBatches?.(im._batchState, Tm), fm.isTransparent || fm._transmissive ? Em.push(Tm) : fm._direct ? pm.push(Tm) : Rm.push(Tm)
        }
        Rm.sort(bm), pm.sort(bm), fm && Nm(mm, mm.engine, !1)
      } catch (om) {
        throw im._batchState?._release(void 0, am ?? [Dm]), om
      }
      return fm && (! function(mm, Tm) {
        const fm = mm._config,
          hm = mm._colorAttachment;
        hm.view = Tm._colorView, mm._renderPassDescriptor.colorAttachments = Tm._colorView ? [hm] : [];
        const Am = fm.depth ?? Tm,
          am = Am._depthView;
        let xm;
        if (am) {
          const mm = Am._descriptor,
            Tm = (fm.depth ? Am._eager : !1 === fm.depthClear) ? "load" : "clear";
          xm = {
            view: am,
            depthClearValue: mm.depthClearValue ?? 0,
            depthLoadOp: Tm,
            depthStoreOp: "store"
          }, mm.dFormat?.includes("stencil") && (xm.stencilClearValue = 0, xm.stencilLoadOp = Tm, xm.stencilStoreOp = "store")
        }
        mm._renderPassDescriptor.depthStencilAttachment = xm
      }(mm, wm), mm._updateContext.targetWidth = wm._width, mm._updateContext.targetHeight = wm._height), Am && (Object.assign(mm, im), Dm?._release(mm.engine, [im._batchState])), im
    }

    function em(mm, Tm) {
      const fm = mm.engine,
        hm = mm._config,
        am = hm.rt,
        xm = mm.Aq,
        wm = mm._opaqueBindings,
        Dm = mm._ob,
        im = mm._sceneBG;
      if (function(mm, Tm, fm, hm) {
          const Am = Tm?.viewport;
          if (!Am) return;
          const am = Math.floor(Am.x * fm),
            xm = Math.floor((1 - Am.y - Am.height) * hm),
            wm = Math.ceil((Am.x + Am.width) * fm) - am,
            Dm = Math.ceil((1 - Am.y) * hm) - xm;
          mm.setViewport(am, xm, wm, Dm, 0, 1), mm.setScissorRect(am, xm, wm, Dm)
        }(Tm, hm.cam ?? xm.camera, am._width, am._height), Tm.setBindGroup(0, im), mm._lastVis !== Am.c || !Dm.length) {
        const Tm = am._descriptor,
          hm = fm._device.createRenderBundleEncoder({
            colorFormats: Tm.format ? [Tm.format] : [],
            depthStencilFormat: mm._targetSignature._depthStencilFormat,
            sampleCount: Tm.samples
          });
        hm.setBindGroup(0, im), Xm(hm, wm, fm), Dm[0] = hm.finish(), mm._lastVis = Am.c
      }
      let Rm = wm.length;
      return Tm.executeBundles(Dm), Tm.setBindGroup(0, im), Rm += Xm(Tm, mm._directBindings, fm), Rm += Xm(Tm, mm._transparentBindings, fm), Rm
    }

    function Nm(mm, Tm) {
      let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const hm = nm(Tm, mm.Aq)._buffer;
      if (hm === mm._lightsUBO) return;
      const Am = Tm._device.createBindGroup({
        layout: Ym(Tm),
        entries: [{
          binding: 0,
          resource: {
            buffer: mm._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: hm
          }
        }]
      });
      mm._lightsUBO = hm, mm._sceneBG = Am, fm && (mm._ob = [])
    }

    function Gm(mm, Tm) {
      for (const fm of mm) fm.update?.(Tm)
    }

    function Xm(mm, Tm, fm) {
      let hm = null,
        Am = 0;
      for (const am of Tm) {
        const Tm = am.renderable.mesh;
        Tm && !1 === Tm.visible || (am.pipeline !== hm && (mm.setPipeline(am.pipeline), hm = am.pipeline), Am += am.draw(mm, fm))
      }
      return Am
    }

    function Pm(mm) {
      const Tm = mm._materialSwapQueue;
      if (!Tm[0] || mm._runtimeBuilds?.w) return;
      let hm, Am, am;
      const xm = mm._renderables;
      for (const fm of Tm) {
        const Tm = fm.material;
        if (!Tm) continue;
        const wm = fm._runtimeThinBuild;
        if (wm) {
          Am = wm(mm, fm, Am);
          continue
        }
        const Dm = mm._groups.get(Tm._buildGroup),
          im = Dm?.r;
        if (!im) {
          (am ??= []).push(fm);
          continue
        }
        if (Dm._w?.(fm)) {
          (am ??= []).push([fm, Tm]);
          continue
        }
        const Rm = mm._meshDisposables.get(fm);
        Rm && (mm._meshDisposables.delete(fm), (0, om.c)(mm.surface.engine, (() => Rm.forEach((mm => mm())))));
        const pm = Dm.o;
        let Em;
        for (let mm = xm.length; mm--;) xm[mm].mesh === fm && (Em = xm.splice(mm, 1)[0]);
        Tm._csmGen = -~Tm._csmGen;
        const Om = im(mm, fm);
        if (pm) {
          const mm = pm.indexOf(Em);
          mm < 0 ? pm.push(Om) : pm[mm] = Om
        }
        hm = xm.push(Om)
      }
      if (hm && (xm.sort(((mm, Tm) => mm.order - Tm.order)), mm._renderableVersion++, mm._materialEpoch++), Tm.length = 0, !am) return Am;
      const wm = am;
      return fm.e(363).then((() => fm(61450))).then((Tm => {
        let {
          C: fm
        } = Tm;
        return fm(mm, wm, Am)
      }), (Tm => {
        const fm = mm._runtimeBuilds;
        fm ? fm._x(Tm) : console.error(Tm)
      }))
    }
    var Hm = null;

    function ym(mm, Tm) {
      const fm = mm.engine,
        Am = {
          _kind: "Aq",
          surface: mm,
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
            fm.useFloatingOrigin && Am.camera && !Am.camera._useFloatingOrigin && (Am.camera._useFloatingOrigin = !0, Am.camera._viewVer = -1, Am.camera._vpVer = -1);
            const mm = Am.fixedDeltaMs > 0 ? Am.fixedDeltaMs : fm._currentDelta,
              Tm = fm._currentEncoder;
            let hm = 0;
            for (const fm of Am._beforeRender) fm(mm);
            Am._materialSwapQueue.length && Pm(Am);
            for (const am of Am._prePasses) hm += am.execute(Tm, fm);
            for (const am of Am._uniformUpdaters) am.update(fm);
            Am._drawCallsPre = hm
          },
          _record: () => Am._frameGraph.execute(),
          _resize() {
            Am._frameGraph.build()
          }
        },
        xm = function() {
          const mm = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let Tm = 0; Tm < mm._tasks.length; Tm++) am(mm, mm._tasks[Tm]);
              for (const Tm of mm._tasks)
                for (const mm of Tm._passes) mm._initialize()
            },
            execute() {
              let Tm = 0;
              for (const fm of mm._tasks)
                if (!1 !== fm.executionEnabled)
                  if (fm.execute) Tm += fm.execute();
                  else
                    for (const mm of fm._passes) Tm += mm._execute();
              return Tm
            },
            dispose() {
              for (const Tm of mm._tasks) Tm.dispose();
              mm._tasks.length = 0, mm._currentProcessedTask = null
            }
          };
          return mm
        }();
      if (Am._frameGraph = xm, !1 !== Tm?.defaultRenderTask) {
        const Tm = mm.msaaSamples > 1,
          am = Tm ? (0, hm.d)({
            lbl: "scene-color",
            format: mm.format,
            dFormat: "depth24plus-stencil8",
            samples: mm.msaaSamples,
            size: mm
          }) : mm.scRT,
          wm = Tm ? void 0 : (0, hm.d)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: mm
          });
        ! function(mm, Tm) {
          mm._tasks.push(Tm)
        }(xm, Zm({
          name: "Aq",
          rt: am,
          rst: Tm ? mm.scRT : void 0,
          depth: wm
        }, fm, Am))
      }
      return Am._disposables.push((() => xm.dispose())), Am
    }
    async function Cm(mm) {
      const Tm = mm;
      for (Tm._built || (Tm._materialSwapQueue.length = 0); Tm._deferredBuilders.length;) {
        const mm = Tm._deferredBuilders.splice(0);
        await Promise.all(mm.map((mm => mm())))
      }
      await Pm(Tm), Hm?.get(Tm)?.() || (Tm._runtimeBuilds?._e(), Tm._renderableVersion++, Tm._built = !0), await (Tm._rebuildHook?.(Tm))
    }
    var rm = null;
    async function sm(mm) {
      const Tm = mm,
        hm = Tm.surface;
      (0, Am.f)(hm, Tm) || (await Cm(mm), Tm._renderables.sort(lm), await Promise.all(Tm._frameGraph._tasks.map((mm => mm._preload?.()))), rm && await rm(Tm), Tm._frameGraph.build(), hm._renderingContexts[0] && (await fm.e(361).then((() => fm(61437)))).configureSwapchainOverlayScene(hm, Tm), Hm?.get(Tm)?.() || (0, Am.g)(hm, Tm))
    }
    var lm = (mm, Tm) => mm.order - Tm.order
  },
  41714: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => im,
      c: () => Rm
    });
    var hm = fm(41678),
      Am = fm(41682),
      am = fm(41686),
      xm = fm(41688),
      wm = fm(41691),
      Dm = fm(41696);

    function im(mm, Tm, fm) {
      let wm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (Tm < 1 || fm < 1) && (0, hm.c)(676, Tm, fm);
      const im = mm._device,
        Rm = wm.mipMaps ?? !1,
        pm = wm.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Em = Rm ? (0, Dm.c)(Tm, fm) : 1,
        om = im.createTexture({
          size: {
            width: Tm,
            height: fm
          },
          format: pm,
          mipLevelCount: Em,
          usage: Am.j.TEXTURE_BINDING | Am.j.COPY_DST | Am.j.RENDER_ATTACHMENT
        }),
        Om = {
          addressModeU: wm.addressModeU ?? "clamp-to-edge",
          addressModeV: wm.addressModeV ?? "clamp-to-edge",
          minFilter: wm.minFilter ?? "linear",
          magFilter: wm.magFilter ?? "linear",
          mipmapFilter: Rm ? "linear" : "nearest"
        },
        Ym = (0, xm.b)(mm, Om),
        qm = {
          texture: om,
          view: om.createView(),
          sampler: Ym,
          width: Tm,
          height: fm
        };
      return (0, am.b)(qm), mm._dlr && mm._dlr.t(qm, {
        kind: "dynamic",
        width: Tm,
        height: fm,
        format: pm,
        levels: Em,
        samplerDesc: Om,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), qm
    }

    function Rm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Am = hm.invertY ?? !0,
        am = hm.premultiplyAlpha ?? !1;
      mm._device.queue.copyExternalImageToTexture({
        source: fm,
        flipY: Am
      }, {
        texture: Tm.texture,
        premultipliedAlpha: am
      }, [Tm.width, Tm.height]);
      const xm = Tm._recoverySource;
      xm && "dynamic" === xm.kind && (xm.source = fm, xm.flipY = Am, xm.premultipliedAlpha = am), Tm.texture.mipLevelCount > 1 && (0, wm.generateMipmaps)(mm, Tm.texture)
    }
  },
  41709: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Dm
    });
    var hm = fm(41678),
      Am = fm(41682),
      am = fm(41686),
      xm = fm(41688),
      wm = fm(41696);
    async function Dm(mm, Tm) {
      let Dm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [im, Rm] = function(mm) {
        const Tm = mm,
          fm = [
            [Tm.displayWidth, Tm.displayHeight],
            [Tm.videoWidth, Tm.videoHeight],
            [Tm.naturalWidth, Tm.naturalHeight],
            [Tm.width, Tm.height]
          ];
        for (const [hm, Am] of fm)
          if (void 0 !== hm && void 0 !== Am && Number.isInteger(hm) && Number.isInteger(Am) && hm > 0 && Am > 0) return [hm, Am];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(Tm), [pm, Em] = function(mm, Tm, fm) {
        if (void 0 === fm) return [mm, Tm];
        if (!Number.isInteger(fm) || fm < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${fm})`);
        if (Math.max(mm, Tm) <= fm) return [mm, Tm];
        const hm = fm / Math.max(mm, Tm);
        return mm >= Tm ? [fm, Math.max(1, Math.round(Tm * hm))] : [Math.max(1, Math.round(mm * hm)), fm]
      }(im, Rm, Dm.maxDimension), om = Dm.mipMaps ?? !0, Om = Dm.premultiplyAlpha ?? !1;
      let Ym = Tm,
        qm = null;
      const jm = {
        texture: null
      };
      try {
        pm === im && Em === Rm || (qm = await createImageBitmap(Tm, {
          resizeWidth: pm,
          resizeHeight: Em,
          resizeQuality: "high",
          premultiplyAlpha: Om ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), Ym = qm);
        const Vm = mm._device,
          Im = Dm.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          Km = om ? (0, wm.c)(pm, Em) : 1,
          Qm = Km > 1 ? (await Promise.resolve().then((() => fm(41691)))).generateMipmaps : null,
          nm = {
            addressModeU: Dm.addressModeU ?? "repeat",
            addressModeV: Dm.addressModeV ?? "repeat",
            minFilter: Dm.minFilter ?? "linear",
            magFilter: Dm.magFilter ?? "linear",
            mipmapFilter: om ? "linear" : "nearest"
          };
        nm.maxAnisotropy = "linear" === nm.minFilter && "linear" === nm.magFilter && "linear" === nm.mipmapFilter ? 4 : 1;
        const Jm = Dm.invertY ?? !0,
          cm = async Tm => {
            let fm;
            Vm.pushErrorScope("validation"), Vm.pushErrorScope("out-of-memory");
            let am = null;
            try {
              const fm = jm.texture = Vm.createTexture({
                size: {
                  width: pm,
                  height: Em
                },
                format: Im,
                mipLevelCount: Km,
                usage: Am.j.TEXTURE_BINDING | Am.j.COPY_DST | Am.j.RENDER_ATTACHMENT
              });
              Vm.queue.copyExternalImageToTexture({
                source: Tm,
                flipY: Jm
              }, {
                texture: fm,
                premultipliedAlpha: Om
              }, {
                width: pm,
                height: Em
              }), Qm && Qm(mm, fm), am = (0, xm.b)(mm, nm)
            } catch (om) {
              fm = om
            }
            const [wm, Dm] = await Promise.all([Vm.popErrorScope(), Vm.popErrorScope()]);
            if (fm) throw fm;
            const im = Dm ?? wm;
            if (im) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${im.message}`, {
              cause: im
            });
            const Rm = jm.texture;
            return Rm && am || (0, hm.c)(677), {
              texture: Rm,
              view: Rm.createView(),
              sampler: am,
              width: pm,
              height: Em
            }
          }, zm = await (mm._dlr?.x(Ym, pm, Em, Im, Km, nm, Jm, Om, cm)) ?? await cm(Ym);
        return (0, am.b)(zm), zm
      } catch (Vm) {
        throw jm.texture?.destroy(), Vm
      } finally {
        qm?.close()
      }
    }
  },
  41691: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      generateMipmaps: () => om,
      recordMipmaps: () => Om
    });
    var hm = fm(41682),
      Am = fm(41688),
      am = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var xm = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      wm = null,
      Dm = null,
      im = null,
      Rm = null,
      pm = null;

    function Em(mm) {
      const Tm = mm._device;
      Tm !== pm && (wm?.clear(), wm = null, Dm = null, im = null, Rm = null, pm = null, pm = Tm), Dm ??= Tm.createShaderModule({
        code: xm
      }), im ??= function(mm) {
        return (0, Am.b)(mm, am)
      }(mm), Rm ??= Tm.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: hm.h.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: hm.h.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function om(mm, Tm, fm) {
      const hm = mm._device,
        Am = hm.createCommandEncoder();
      Om(mm, Tm, Am, fm), hm.queue.submit([Am.finish()])
    }

    function Om(mm, Tm, fm, hm) {
      if (Tm.mipLevelCount <= 1) return;
      const Am = mm._device,
        am = function(mm, Tm) {
          const fm = mm._device;
          Em(mm), wm ??= new Map;
          let hm = wm.get(Tm);
          return hm || (hm = fm.createRenderPipeline({
            layout: fm.createPipelineLayout({
              bindGroupLayouts: [Rm]
            }),
            vertex: {
              module: Dm,
              entryPoint: "vs"
            },
            fragment: {
              module: Dm,
              entryPoint: "fs",
              targets: [{
                format: Tm
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), wm.set(Tm, hm)), hm
        }(mm, Tm.format),
        xm = null != hm ? {
          dimension: "2d",
          baseArrayLayer: hm,
          arrayLayerCount: 1
        } : {};
      for (let wm = 1; wm < Tm.mipLevelCount; wm++) {
        const mm = Tm.createView({
            baseMipLevel: wm - 1,
            mipLevelCount: 1,
            ...xm
          }),
          hm = Tm.createView({
            baseMipLevel: wm,
            mipLevelCount: 1,
            ...xm
          }),
          Dm = Am.createBindGroup({
            layout: Rm,
            entries: [{
              binding: 0,
              resource: mm
            }, {
              binding: 1,
              resource: im
            }]
          }),
          pm = fm.beginRenderPass({
            colorAttachments: [{
              view: hm,
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
        pm.setPipeline(am), pm.setBindGroup(0, Dm), pm.draw(3), pm.end()
      }
    }
  },
  41696: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      return Math.floor(Math.log2(Math.max(mm, Tm))) + 1
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  41676: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => im,
      g: () => Rm
    });
    var hm = fm(41678),
      Am = fm(41682),
      am = fm(41686),
      xm = fm(41688),
      wm = fm(41691),
      Dm = fm(41696);

    function im(mm, Tm, fm, wm) {
      let im = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Tm < 1 || fm < 1 || wm < 1) && (0, hm.c)(722, Tm, fm, wm);
      const Rm = mm._device,
        pm = im.mipMaps ?? !0,
        Em = im.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        om = Rm.createTexture({
          size: {
            width: Tm,
            height: fm,
            depthOrArrayLayers: wm
          },
          dimension: "2d",
          format: Em,
          mipLevelCount: pm ? (0, Dm.c)(Tm, fm) : 1,
          usage: Am.j.TEXTURE_BINDING | Am.j.COPY_DST | Am.j.RENDER_ATTACHMENT
        }),
        Om = (0, xm.b)(mm, {
          addressModeU: im.addressModeU ?? "repeat",
          addressModeV: im.addressModeV ?? "repeat",
          minFilter: im.minFilter ?? "linear",
          magFilter: im.magFilter ?? "linear",
          mipmapFilter: pm ? "linear" : "nearest"
        }),
        Ym = {
          texture: om,
          view: om.createView({
            dimension: "2d-array"
          }),
          sampler: Om,
          width: Tm,
          height: fm,
          layers: wm
        };
      return (0, am.b)(Ym), Ym
    }

    function Rm(mm, Tm, fm, Am) {
      let am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (fm < 0 || fm >= Tm.layers || (0 | fm) !== fm) && (0, hm.c)(723, Tm.layers, fm);
      const xm = am.invertY ?? !0,
        Dm = am.premultiplyAlpha ?? !1;
      mm._device.queue.copyExternalImageToTexture({
        source: Am,
        flipY: xm
      }, {
        texture: Tm.texture,
        origin: [0, 0, fm],
        premultipliedAlpha: Dm
      }, [Tm.width, Tm.height, 1]), Tm.texture.mipLevelCount > 1 && (0, wm.generateMipmaps)(mm, Tm.texture, fm)
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);