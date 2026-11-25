export const id = 309;
export const ids = [309];
export const modules = {
  41972: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu
    });
    var su = ju(41959),
      Uu = ju(41976);

    function Zu(uu) {
      (0, Uu.c)(uu), (0, su.r)(uu);
      const Eu = uu._surfaces;
      for (const ju of Eu) ju._renderingContexts.length = 0, ju._ro?.disconnect(), ju._context.unconfigure();
      Eu.length = 0;
      try {
        uu._disposeManagedResources?.(), uu._disposeStorageBuffers?.()
      } finally {
        uu._device.destroy()
      }
    }
  },
  41959: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => cu,
      g: () => Du,
      h: () => Nu,
      i: () => Ou,
      m: () => eu,
      q: () => gu,
      r: () => Mu
    });
    var su = ju(41909);
    var Uu = "Babylon Lite v1.32.0",
      Zu = ju(41964);

    function Xu(uu) {
      return "clientWidth" in uu
    }
    var lu = 1;

    function qu(uu, Eu, ju) {
      const qu = Eu.getContext("webgpu");
      qu || (0, su.d)(54), Xu(Eu) && Eu.setAttribute("data-engine", Uu);
      const fu = ju?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        Cu = ju?.srgb ? (bu = fu).endsWith("-srgb") ? bu : `${bu}-srgb` : fu;
      var bu;
      const cu = ju?.alphaMode ?? "opaque";
      qu.configure({
        device: uu._device,
        format: fu,
        alphaMode: cu,
        viewFormats: [Cu]
      });
      const Nu = 1 === ju?.msaaSamples ? 1 : 4,
        Ou = (0, Zu.b)({
          lbl: "swapchain",
          format: Cu,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return Ou._eager = !0, {
        engine: uu,
        canvas: Eu,
        format: Cu,
        msaaSamples: Nu,
        scRT: Ou,
        maxDevicePixelRatio: ju?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: lu++,
        _context: qu,
        _configureFormat: fu,
        _alphaMode: cu,
        _renderingContexts: []
      }
    }

    function fu(uu) {
      const Eu = uu._context.getCurrentTexture(),
        ju = uu.scRT;
      ju._colorTexture = Eu, ju._colorView = Eu.createView({
        format: uu.format
      }), ju._width = Eu.width, ju._height = Eu.height
    }

    function Cu(uu) {
      const Eu = uu.canvas;
      if (!Xu(Eu)) return;
      const ju = uu._w ?? Eu.clientWidth,
        su = uu._h ?? Eu.clientHeight;
      if (!(ju > 0 && su > 0)) return;
      const Uu = Math.min(globalThis.devicePixelRatio || 1, uu.maxDevicePixelRatio);
      bu(uu, ju * Uu | 0, su * Uu | 0)
    }

    function bu(uu, Eu, ju) {
      const su = uu.canvas,
        Uu = 0 | Eu,
        Zu = 0 | ju;
      if (Uu > 0 && Zu > 0 && (Uu !== su.width || Zu !== su.height)) {
        su.width = Uu, su.height = Zu, uu.scRT._width = Uu, uu.scRT._height = Zu;
        for (const Eu of uu._renderingContexts) Eu._resize?.()
      }
    }
    var cu = 0;

    function Nu(uu, Eu) {
      return -1 !== uu._renderingContexts.indexOf(Eu)
    }

    function Ou(uu, Eu) {
      return -1 === uu._renderingContexts.indexOf(Eu) && (uu._renderingContexts.push(Eu), !0)
    }
    var Yu = null;
    var hu = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function Du(uu, Eu) {
      const Zu = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...Yu ? Yu() : {}
      });
      Zu || (0, su.d)(47);
      const Xu = Yu?.deviceFeatures?.(Zu, Eu) ?? function(uu) {
          return hu.filter((Eu => uu.features.has(Eu)))
        }(Zu),
        lu = await Zu.requestDevice({
          requiredFeatures: Xu,
          requiredLimits: Eu?.requiredLimits
        });
      console.log(`${Uu} - WebGPU engine`);
      const bu = !!Eu?.useHighPrecisionMatrix,
        cu = !!Eu?.useFloatingOrigin;
      if (cu && !bu && (0, su.d)(48), bu) {
        const {
          allocateF64Mat4: uu
        } = await ju.e(361).then((() => ju(61574)));
        0
      }
      let Nu, Ou, Du, gu;
      if (cu) {
        const [{
          wrapRenderableForFO: uu,
          lightFoVersion: Eu,
          applyLightFoOffset: su
        }, {
          makePackMeshWorld: Uu
        }] = await Promise.all([ju.e(362).then((() => ju(61581))), ju.e(363).then((() => ju(61584)))]);
        Nu = uu, Ou = Uu, Du = Eu, gu = su
      }
      const Mu = {
          _device: lu
        },
        eu = [Mu];
      return Object.assign(Mu, {
        engine: Mu,
        surfaces: eu,
        _surfaces: eu,
        _device: lu,
        _options: Eu,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: bu,
        useFloatingOrigin: cu,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: Nu,
        _makePackMeshWorld: Ou,
        _lightFoVersion: Du,
        _applyLightFoOffset: gu
      }, qu(Mu, uu, Eu)), Cu(Mu), fu(Mu), Mu
    }

    function gu(uu, Eu, ju) {
      bu(uu, Eu, ju)
    }

    function Mu(uu) {
      uu._animFrameId && cancelAnimationFrame(uu._animFrameId), uu._animFrameId = 0, uu._renderFn = null, uu._flushGpuRetirements?.(uu)
    }

    function eu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uu.surfaces;
      if (ju !== uu.surfaces)
        for (let Uu = ju.length; Uu--;) ju[Uu].engine !== uu && (0, su.d)(49);
      Gu(uu, Eu, ju)
    }

    function Gu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uu._surfaces,
        su = 0;
      for (let Zu = ju.length; Zu--;) su += ju[Zu]._renderingContexts.length;
      if (!su) return uu.drawCallCount = 0, uu._flushGpuRetirements?.(uu);
      const Uu = uu._device.createCommandEncoder({
        label: "frame"
      });
      uu._currentEncoder = Uu, uu._currentDelta = Eu;
      try {
        uu._gpuTimerBegin?.(Uu), su = 0;
        for (let uu = 0; uu < ju.length; uu++) {
          const Eu = ju[uu];
          Eu._capturePreFrame?.(Eu), fu(Eu);
          const Uu = Eu._renderingContexts;
          for (let uu = 0; uu < Uu.length; uu++) {
            const Eu = Uu[uu];
            Eu._update(), su += Eu._drawCallsPre + Eu._record()
          }
        }
        const Eu = uu._currentEncoder;
        for (let uu = 0; uu < ju.length; uu++) {
          const su = ju[uu];
          su._captureService?.(su, Eu)
        }
        uu._gpuTimerEnd?.(Eu), uu._cbs[0] = Eu.finish(), uu._device.queue.submit(uu._cbs), uu._flushGpuRetirements?.(uu), uu.drawCallCount = su, uu._gpuTimerResolve?.()
      } finally {
        uu._currentEncoder = void 0
      }
    }
  },
  41912: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      h: () => Zu,
      k: () => su
    });
    var su = globalThis.GPUTextureUsage,
      Uu = globalThis.GPUBufferUsage,
      Zu = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41976: (uu, Eu, ju) => {
    function su(uu) {
      Uu(uu.splice(0))
    }

    function Uu(uu) {
      for (const ju of uu) try {
        ju()
      } catch (Eu) {
        console.error("GPU resource retirement failed.", Eu)
      }
    }

    function Zu(uu, Eu) {
      uu._flushGpuRetirements ??= Xu, (uu._retirements ??= []).push(Eu)
    }

    function Xu(uu) {
      const Eu = uu._retirements;
      if (!Eu) return;
      uu._retirements = null;
      const ju = uu._retiring ??= new Set;
      ju.add(Eu), queueMicrotask((() => {
        uu._device.queue.onSubmittedWorkDone().then((() => {
          ju.delete(Eu), su(Eu)
        })).catch((() => {}))
      }))
    }

    function lu(uu) {
      const Eu = uu._retirements,
        ju = uu._retiring;
      uu._retirements = null, uu._retiring = null, Eu && su(Eu), ju?.forEach(su)
    }
    ju.d(Eu, {
      c: () => lu,
      d: () => Zu
    })
  },
  41964: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu,
      d: () => Xu,
      f: () => lu
    });
    var su = ju(41912);

    function Uu(uu) {
      const Eu = uu.size;
      return "canvas" in Eu ? Eu.canvas : Eu
    }

    function Zu(uu) {
      return {
        _descriptor: uu,
        _resolveSize: Uu,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function Xu(uu, Eu) {
      if (uu._eager) return void uu._syncEager?.(Eu);
      lu(uu);
      const ju = uu._descriptor,
        {
          width: Zu,
          height: Xu
        } = (uu._resolveSize ?? Uu)(ju);
      uu._width = Zu, uu._height = Xu;
      const qu = Eu._device;
      ju.format && (uu._colorTexture = qu.createTexture({
        label: ju.lbl,
        size: {
          width: Zu,
          height: Xu
        },
        format: ju.format,
        sampleCount: ju.samples,
        usage: su.k.RENDER_ATTACHMENT | su.k.TEXTURE_BINDING | su.k.COPY_SRC | su.k.COPY_DST
      }), uu._colorView = uu._colorTexture.createView()), ju.dFormat && (uu._depthTexture = qu.createTexture({
        label: ju.lbl,
        size: {
          width: Zu,
          height: Xu
        },
        format: ju.dFormat,
        sampleCount: ju.samples,
        usage: su.k.RENDER_ATTACHMENT | su.k.TEXTURE_BINDING
      }), uu._depthView = uu._depthTexture.createView())
    }

    function lu(uu) {
      if (!uu || uu._eager && !uu._disposeAttachments) return;
      const Eu = uu._colorTexture,
        ju = uu._depthTexture;
      if (uu._colorTexture = uu._depthTexture = null, uu._colorView = uu._depthView = null, uu._width = uu._height = 0, uu._disposeAttachments) uu._disposeAttachments(Eu, ju);
      else try {
        Eu?.destroy()
      } finally {
        !1 !== uu._ownsDepthTexture && ju?.destroy()
      }
    }
  },
  41986: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su,
      g: () => Uu,
      j: () => Zu
    });
    var su = Float32Array,
      Uu = Float64Array,
      Zu = Uint32Array
  },
  41993: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su
    });
    var su = 16
  },
  41909: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    var su = null;

    function Uu(uu) {
      for (var Eu = arguments.length, ju = new Array(Eu > 1 ? Eu - 1 : 0), Uu = 1; Uu < Eu; Uu++) ju[Uu - 1] = arguments[Uu];
      const Zu = new Error(su?.(uu, ju) ?? `#${uu}`);
      throw Zu.lite = ju, Zu
    }
  },
  41938: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu
    });
    var su = ju(41919);

    function Uu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ju = Eu.compare,
        Uu = Eu.lodMinClamp ?? 0,
        Zu = Eu.lodMaxClamp ?? 32,
        Xu = void 0 !== ju || 0 !== Uu || 32 !== Zu ? `${ju??""}:${Uu}:${Zu}` : "";
      return (0, su.b)(uu, Eu, Xu)
    }
  },
  41916: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu
    });
    var su = null;

    function Uu(uu) {
      const Eu = su ??= new WeakMap;
      Eu.set(uu, (Eu.get(uu) ?? 0) + 1)
    }

    function Zu(uu) {
      Uu(uu.texture)
    }
  },
  41919: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => lu
    });
    var su = null,
      Uu = "nearest",
      Zu = "clamp-to-edge",
      Xu = {
        minFilter: Uu,
        magFilter: Uu,
        mipmapFilter: Uu,
        addressModeU: Zu,
        addressModeV: Zu,
        addressModeW: Zu,
        maxAnisotropy: 1
      };

    function lu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Uu = uu._device,
        Zu = su ??= new WeakMap;
      let lu = Zu.get(Uu);
      lu || Zu.set(Uu, lu = new Map);
      let qu = ju;
      for (const su in Xu) {
        const uu = su;
        qu += `:${Eu[uu]??Xu[uu]}`
      }
      let fu = lu.get(qu);
      return fu || lu.set(qu, fu = Uu.createSampler(Eu)), fu
    }
  },
  41984: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => iu,
      f: () => Iu
    });
    var su = ju(41964),
      Uu = ju(41959);

    function Zu(uu, Eu) {
      Eu._passes.length = 0, uu._currentProcessedTask = Eu;
      try {
        Eu.record()
      } finally {
        uu._currentProcessedTask = null
      }
    }
    var Xu = ju(41986);

    function lu(uu) {
      const Eu = uu.worldMatrixVersion;
      if (uu._viewVer === Eu) return uu._viewCache;
      const ju = uu._viewCache,
        su = uu.worldMatrix,
        Uu = uu._useFloatingOrigin,
        Zu = Uu ? 0 : su[12],
        Xu = Uu ? 0 : su[13],
        lu = Uu ? 0 : su[14];
      return ju[0] = su[0], ju[1] = su[4], ju[2] = su[8], ju[3] = 0, ju[4] = su[1], ju[5] = su[5], ju[6] = su[9], ju[7] = 0, ju[8] = su[2], ju[9] = su[6], ju[10] = su[10], ju[11] = 0, ju[12] = -(su[0] * Zu + su[1] * Xu + su[2] * lu), ju[13] = -(su[4] * Zu + su[5] * Xu + su[6] * lu), ju[14] = -(su[8] * Zu + su[9] * Xu + su[10] * lu), ju[15] = 1, uu._viewVer = Eu, ju
    }
    var qu = null;

    function fu(uu) {
      return uu._projFov === uu.fov && uu._projNear === uu.nearPlane && uu._projFar === uu.farPlane || (uu._projFov = uu.fov, uu._projNear = uu.nearPlane, uu._projFar = uu.farPlane, uu._projRev = (uu._projRev ?? 0) + 1), uu.worldMatrixVersion + (uu._projRev ?? 0)
    }

    function Cu(uu, Eu) {
      const ju = fu(uu);
      if (uu._projVer === ju && uu._projAspect === Eu) return uu._projCache;
      const su = uu._projCache;
      return null !== qu && uu.ortho ? qu(uu, Eu, su) : function(uu, Eu, ju, su, Uu) {
        const Zu = 1 / Math.tan(.5 * Eu),
          Xu = Uu - su;
        uu[0] = Zu / ju, uu[5] = Zu, uu[10] = -su / Xu, uu[11] = 1, uu[14] = Uu * su / Xu
      }(su, uu.fov, Eu, uu.nearPlane, uu.farPlane), uu._projVer = ju, uu._projAspect = Eu, su
    }
    var bu = ju(41912);

    function cu(uu, Eu, ju) {
      return uu._device.createBuffer({
        label: ju,
        size: (su = Eu, Uu = 16, Math.ceil(su / Uu) * Uu),
        usage: bu.e.UNIFORM | bu.e.COPY_DST
      });
      var su, Uu
    }
    var Nu = ju(41976),
      Ou = null;

    function Yu(uu) {
      const Eu = uu._device,
        ju = Ou ??= new WeakMap;
      let su = ju.get(Eu);
      return su || (su = Eu.createBindGroupLayout({
        label: "vY",
        entries: [{
          binding: 0,
          visibility: bu.h.VERTEX | bu.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: bu.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), ju.set(Eu, su)), su
    }

    function hu(uu, Eu, ju) {
      const su = uu._device,
        Uu = cu(uu, Eu.byteLength, ju);
      try {
        su.queue.writeBuffer(Uu, 0, Eu.buffer, Eu.byteOffset, Eu.byteLength)
      } catch (Zu) {
        throw Uu.destroy(), Zu
      }
      return Uu
    }
    var Du = ju(41993),
      gu = new Xu.j(1),
      Mu = new Xu.d(gu.buffer);

    function eu(uu) {
      let Eu = 0;
      for (const ju of uu) Eu += ju._lightVersion ?? 0;
      return Eu
    }

    function Gu(uu, Eu) {
      uu.fill(0);
      let ju = 0;
      for (const su of Eu) {
        if (ju >= Du.c) break;
        su._writeLightUbo && (su._writeLightUbo(uu, 4 + 16 * ju), ju++)
      }
      gu[0] = ju, uu[0] = Mu[0]
    }

    function pu(uu, Eu) {
      let ju = Eu._lightGpuState;
      const su = 16 + 16 * Du.c * 4;
      if (ju && ju._byteSize === su) return ju;
      const Uu = !ju;
      ju?._buffer.destroy();
      const Zu = new Xu.d(su / 4);
      return Gu(Zu, Eu.lights), uu._applyLightFoOffset?.(Zu, Eu), ju = {
        _buffer: hu(uu, Zu),
        _scratch: Zu,
        YF: eu(Eu.lights) + (uu._lightFoVersion?.(Eu) ?? 0),
        _listVersion: Eu._lightListVersion ?? 0,
        _lightCount: Eu.lights.length,
        _byteSize: su
      }, Eu._lightGpuState = ju, Uu && Eu._disposables.push((() => {
        Eu._lightGpuState?._buffer.destroy(), Eu._lightGpuState = void 0
      })), ju
    }

    function wu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Uu = Eu;
      if (0 === su && 16 === Uu.length) return void uu.set(Uu, ju);
      const Zu = su,
        Xu = ju;
      uu[Xu + 0] = Uu[Zu + 0], uu[Xu + 1] = Uu[Zu + 1], uu[Xu + 2] = Uu[Zu + 2], uu[Xu + 3] = Uu[Zu + 3], uu[Xu + 4] = Uu[Zu + 4], uu[Xu + 5] = Uu[Zu + 5], uu[Xu + 6] = Uu[Zu + 6], uu[Xu + 7] = Uu[Zu + 7], uu[Xu + 8] = Uu[Zu + 8], uu[Xu + 9] = Uu[Zu + 9], uu[Xu + 10] = Uu[Zu + 10], uu[Xu + 11] = Uu[Zu + 11], uu[Xu + 12] = Uu[Zu + 12], uu[Xu + 13] = Uu[Zu + 13], uu[Xu + 14] = Uu[Zu + 14], uu[Xu + 15] = Uu[Zu + 15]
    }

    function Ju(uu, Eu, ju, su, Uu) {
      uu.fill(0);
      const Zu = function(uu, Eu) {
          const ju = fu(uu);
          if (uu._vpVer === ju && uu._vpAspect === Eu) return uu._vpCache;
          const su = uu._vpCache;
          return function(uu, Eu, ju, su, Uu, Zu) {
            const Xu = ju[su],
              lu = ju[su + 1],
              qu = ju[su + 2],
              fu = ju[su + 3],
              Cu = ju[su + 4],
              bu = ju[su + 5],
              cu = ju[su + 6],
              Nu = ju[su + 7],
              Ou = ju[su + 8],
              Yu = ju[su + 9],
              hu = ju[su + 10],
              Du = ju[su + 11],
              gu = ju[su + 12],
              Mu = ju[su + 13],
              eu = ju[su + 14],
              Gu = ju[su + 15];
            let pu = Uu[Zu],
              wu = Uu[Zu + 1],
              Ju = Uu[Zu + 2],
              du = Uu[Zu + 3];
            uu[Eu] = Xu * pu + Cu * wu + Ou * Ju + gu * du, uu[Eu + 1] = lu * pu + bu * wu + Yu * Ju + Mu * du, uu[Eu + 2] = qu * pu + cu * wu + hu * Ju + eu * du, uu[Eu + 3] = fu * pu + Nu * wu + Du * Ju + Gu * du, pu = Uu[Zu + 4], wu = Uu[Zu + 5], Ju = Uu[Zu + 6], du = Uu[Zu + 7], uu[Eu + 4] = Xu * pu + Cu * wu + Ou * Ju + gu * du, uu[Eu + 5] = lu * pu + bu * wu + Yu * Ju + Mu * du, uu[Eu + 6] = qu * pu + cu * wu + hu * Ju + eu * du, uu[Eu + 7] = fu * pu + Nu * wu + Du * Ju + Gu * du, pu = Uu[Zu + 8], wu = Uu[Zu + 9], Ju = Uu[Zu + 10], du = Uu[Zu + 11], uu[Eu + 8] = Xu * pu + Cu * wu + Ou * Ju + gu * du, uu[Eu + 9] = lu * pu + bu * wu + Yu * Ju + Mu * du, uu[Eu + 10] = qu * pu + cu * wu + hu * Ju + eu * du, uu[Eu + 11] = fu * pu + Nu * wu + Du * Ju + Gu * du, pu = Uu[Zu + 12], wu = Uu[Zu + 13], Ju = Uu[Zu + 14], du = Uu[Zu + 15], uu[Eu + 12] = Xu * pu + Cu * wu + Ou * Ju + gu * du, uu[Eu + 13] = lu * pu + bu * wu + Yu * Ju + Mu * du, uu[Eu + 14] = qu * pu + cu * wu + hu * Ju + eu * du, uu[Eu + 15] = fu * pu + Nu * wu + Du * Ju + Gu * du
          }(su, 0, Cu(uu, Eu), 0, lu(uu), 0), uu._vpVer = ju, uu._vpAspect = Eu, su
        }(su, Uu),
        Xu = lu(su),
        qu = su.worldMatrix;
      wu(uu, Zu, 0), wu(uu, Xu, 16), Eu.useFloatingOrigin ? (uu[32] = 0, uu[33] = 0, uu[34] = 0) : (uu[32] = qu[12], uu[33] = qu[13], uu[34] = qu[14]), uu[87] = Eu.canvas.width;
      const bu = ju.imageProcessing;
      uu[76] = bu.exposure, uu[77] = bu.contrast, uu[78] = ju._envTextures?.lodGenerationScale ?? .8, uu[79] = +bu.toneMappingEnabled, uu[37] = Eu.canvas.height
    }

    function du(uu, Eu) {
      return {
        _renderables: uu,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: Eu
      }
    }

    function au(uu, Eu, ju) {
      uu.clr ??= !0;
      const Uu = uu.rt._descriptor,
        Zu = uu.depth?._descriptor,
        qu = {
          _colorFormat: Uu.format,
          _depthStencilFormat: Zu?.dFormat ?? Uu.dFormat,
          _depthCompare: Uu.depthCompare ?? Zu?.depthCompare,
          _sampleCount: Uu.samples
        },
        Cu = {
          loadOp: "clear",
          storeOp: "store"
        },
        bu = {
          ...du([], -1),
          name: uu.name,
          _config: uu,
          _ownsTargets: !uu.sharedRt,
          engine: Eu,
          vY: ju,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [Cu]
          },
          _colorAttachment: Cu,
          _sceneUBO: cu(Eu, 368),
          _suData: new Xu.d(92),
          _sceneUboCacheKey: [],
          _targetSignature: qu,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (bu._disposed) throw new Error("RenderTask has been disposed.");
            bu._recordExplicit ? bu._recordExplicit(bu, !0) : ku(bu, !1 !== uu.autoMirror ? ju._renderables.slice() : bu._renderables, !0)
          },
          execute: () => function(uu, Eu, ju) {
            if (!1 === uu.enabled) return 0;
            const su = uu.vY;
            ! function(uu, Eu, ju) {
              const su = uu.vY;
              !1 !== uu._config.autoMirror && uu._lastVersion !== su._renderableVersion && ku(uu, su._renderables.slice());
              vu(uu, Eu);
              const Uu = uu._updateContext,
                Zu = uu._config.cam ?? su.camera;
              ju._colorFormat && (uu._config._skipClusteredLights || su._clusteredLightUpdater?.(Zu, Uu.targetWidth, Uu.targetHeight), function(uu, Eu) {
                const ju = pu(uu, Eu),
                  su = eu(Eu.lights) + (uu._lightFoVersion?.(Eu) ?? 0),
                  Uu = Eu._lightListVersion ?? 0;
                su === ju.YF && Uu === ju._listVersion && Eu.lights.length === ju._lightCount || (ju.YF = su, ju._listVersion = Uu, ju._lightCount = Eu.lights.length, Gu(ju._scratch, Eu.lights), uu._applyLightFoOffset?.(ju._scratch, Eu), uu._device.queue.writeBuffer(ju._buffer, 0, ju._scratch)), ju._buffer
              }(Eu, su));
              (function(uu, Eu, ju, su) {
                if (!su) return;
                const Uu = su.viewport,
                  Zu = uu._config.rt,
                  Xu = (uu._config.cs ? Eu.canvas.width / Eu.canvas.height : Zu._width / Zu._height) * (Uu ? Uu.width / Uu.height : 1),
                  lu = ju.fog,
                  qu = ju.imageProcessing,
                  Cu = fu(su),
                  bu = ju._envTextures,
                  cu = uu._sceneUboCacheKey;
                if (cu[0] === su && cu[1] === lu && cu[2] === Cu && cu[3] === Xu && cu[4] === qu.exposure && cu[5] === qu.contrast && cu[6] === bu) return;
                cu[0] = su, cu[1] = lu, cu[2] = Cu, cu[3] = Xu, cu[4] = qu.exposure, cu[5] = qu.contrast, cu[6] = bu;
                const Nu = uu._suData;
                Ju(Nu, Eu, ju, su, Xu);
                const Ou = ju._sceneUboContributors;
                if (Ou)
                  for (const fu of Ou) fu(Nu, ju);
                Eu._device.queue.writeBuffer(uu._sceneUBO, 0, Nu)
              })(uu, Eu, su, Zu), Uu.fR = Zu, uu._batchState?._reset(), Ku(uu._opaqueBindings, Uu), Ku(uu._directBindings, Uu), Ku(uu._transparentBindings, Uu), uu._batchState?._flush(Eu),
                function(uu, Eu) {
                  const ju = uu._transparentBindings;
                  if (ju.length <= 1 || !Eu) return;
                  const su = lu(Eu);
                  for (const Uu of ju) {
                    const uu = Uu.renderable._worldCenter;
                    Uu._sortDistance = uu ? uu[0] * su[2] + uu[1] * su[6] + uu[2] * su[10] + su[14] : 0
                  }
                  ju.sort(Pu)
                }(uu, Zu)
            }(uu, Eu, ju);
            const Uu = uu._colorAttachment,
              Zu = uu._config;
            Zu.rt._colorView && (Zu.rt === su.surface.scRT && (Uu.view = Zu.rt._colorView), Uu.resolveTarget = Zu.rst?._colorView ?? void 0, Uu.clearValue = Zu.clrColor ?? su.clearColor, Uu.loadOp = Zu.clr ? "clear" : "load");
            if (uu._executeWithTransmission) return uu._executeWithTransmission(ju._sampleCount);
            const Xu = Eu._currentEncoder.beginRenderPass(uu._renderPassDescriptor),
              qu = mu(uu, Xu);
            return Xu.end(), qu
          }(bu, Eu, qu),
          dispose() {
            if (bu._disposed) return;
            bu._disposed = !0;
            const Eu = bu._pendingMeshes;
            Eu && (Eu.length = 0);
            for (const uu of bu._renderables) bu._retireRenderable?.(bu.engine, uu);
            bu._passes.length = bu._opaqueBindings.length = bu._directBindings.length = 0, bu._transparentBindings.length = bu._renderables.length = bu._ob.length = 0, bu._ownsTargets && ((0, su.f)(uu.rt), (0, su.f)(uu.rst)), uu.depth?._eager || (0, su.f)(uu.depth);
            const ju = bu._sceneUBO;
            (0, Nu.d)(bu.engine, (() => ju.destroy())), bu._batchState?._release(bu.engine), bu._batchState = void 0
          }
        };
      return bu
    }

    function Pu(uu, Eu) {
      return Eu._sortDistance - uu._sortDistance || uu.renderable.order - Eu.renderable.order
    }

    function ou(uu, Eu) {
      return uu.renderable.order - Eu.renderable.order
    }

    function ku(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu._renderables,
        ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Uu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        Zu = arguments.length > 4 ? arguments[4] : void 0;
      const Xu = uu._config,
        lu = Xu.rt,
        qu = uu._batchState,
        fu = du(Eu, uu.vY._renderableVersion);
      if (ju) {
        const Eu = (Eu, ju) => {
          Eu && (ju || uu._ownsTargets || Eu._eager) && (0, su.d)(Eu, uu.engine)
        };
        Eu(lu), lu._descriptor.samples > 1 && Eu(Xu.rst), Eu(Xu.depth, !0)
      }
      const {
        _opaqueBindings: Cu,
        _directBindings: bu,
        _transparentBindings: cu
      } = fu;
      try {
        for (const ju of Eu) {
          const Eu = ju.bind(uu.engine, uu._targetSignature);
          fu._batchState = uu._targetSignature._collectBatches?.(fu._batchState, Eu), ju.isTransparent || ju._transmissive ? cu.push(Eu) : ju._direct ? bu.push(Eu) : Cu.push(Eu)
        }
        Cu.sort(ou), bu.sort(ou), ju && vu(uu, uu.engine, !1)
      } catch (Nu) {
        throw fu._batchState?._release(void 0, Zu ?? [qu]), Nu
      }
      return ju && (! function(uu, Eu) {
        const ju = uu._config,
          su = uu._colorAttachment;
        su.view = Eu._colorView, uu._renderPassDescriptor.colorAttachments = Eu._colorView ? [su] : [];
        const Uu = ju.depth ?? Eu,
          Zu = Uu._depthView;
        let Xu;
        if (Zu) {
          const uu = Uu._descriptor,
            Eu = (ju.depth ? Uu._eager : !1 === ju.depthClear) ? "load" : "clear";
          Xu = {
            view: Zu,
            depthClearValue: uu.depthClearValue ?? 0,
            depthLoadOp: Eu,
            depthStoreOp: "store"
          }, uu.dFormat?.includes("stencil") && (Xu.stencilClearValue = 0, Xu.stencilLoadOp = Eu, Xu.stencilStoreOp = "store")
        }
        uu._renderPassDescriptor.depthStencilAttachment = Xu
      }(uu, lu), uu._updateContext.targetWidth = lu._width, uu._updateContext.targetHeight = lu._height), Uu && (Object.assign(uu, fu), qu?._release(uu.engine, [fu._batchState])), fu
    }

    function mu(uu, Eu) {
      const ju = uu.engine,
        su = uu._config,
        Zu = su.rt,
        Xu = uu.vY,
        lu = uu._opaqueBindings,
        qu = uu._ob,
        fu = uu._sceneBG;
      if (function(uu, Eu, ju, su) {
          const Uu = Eu?.viewport;
          if (!Uu) return;
          const Zu = Math.floor(Uu.x * ju),
            Xu = Math.floor((1 - Uu.y - Uu.height) * su),
            lu = Math.ceil((Uu.x + Uu.width) * ju) - Zu,
            qu = Math.ceil((1 - Uu.y) * su) - Xu;
          uu.setViewport(Zu, Xu, lu, qu, 0, 1), uu.setScissorRect(Zu, Xu, lu, qu)
        }(Eu, su.cam ?? Xu.camera, Zu._width, Zu._height), Eu.setBindGroup(0, fu), uu._lastVis !== Uu.d || !qu.length) {
        const Eu = Zu._descriptor,
          su = ju._device.createRenderBundleEncoder({
            colorFormats: Eu.format ? [Eu.format] : [],
            depthStencilFormat: uu._targetSignature._depthStencilFormat,
            sampleCount: Eu.samples
          });
        su.setBindGroup(0, fu), Vu(su, lu, ju), qu[0] = su.finish(), uu._lastVis = Uu.d
      }
      let Cu = lu.length;
      return Eu.executeBundles(qu), Eu.setBindGroup(0, fu), Cu += Vu(Eu, uu._directBindings, ju), Cu += Vu(Eu, uu._transparentBindings, ju), Cu
    }

    function vu(uu, Eu) {
      let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const su = pu(Eu, uu.vY)._buffer;
      if (su === uu._lightsUBO) return;
      const Uu = Eu._device.createBindGroup({
        layout: Yu(Eu),
        entries: [{
          binding: 0,
          resource: {
            buffer: uu._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: su
          }
        }]
      });
      uu._lightsUBO = su, uu._sceneBG = Uu, ju && (uu._ob = [])
    }

    function Ku(uu, Eu) {
      for (const ju of uu) ju.update?.(Eu)
    }

    function Vu(uu, Eu, ju) {
      let su = null,
        Uu = 0;
      for (const Zu of Eu) {
        const Eu = Zu.renderable.mesh;
        Eu && !1 === Eu.visible || (Zu.pipeline !== su && (uu.setPipeline(Zu.pipeline), su = Zu.pipeline), Uu += Zu.draw(uu, ju))
      }
      return Uu
    }

    function ru(uu) {
      const Eu = uu._materialSwapQueue;
      if (!Eu[0] || uu._runtimeBuilds?.w) return;
      let su, Uu, Zu;
      const Xu = uu._renderables;
      for (const ju of Eu) {
        const Eu = ju.material;
        if (!Eu) continue;
        const lu = ju._runtimeThinBuild;
        if (lu) {
          Uu = lu(uu, ju, Uu);
          continue
        }
        const qu = uu._groups.get(Eu._buildGroup),
          fu = qu?.r;
        if (!fu) {
          (Zu ??= []).push(ju);
          continue
        }
        if (qu._w?.(ju)) {
          (Zu ??= []).push([ju, Eu]);
          continue
        }
        const Cu = uu._meshDisposables.get(ju);
        Cu && (uu._meshDisposables.delete(ju), (0, Nu.d)(uu.surface.engine, (() => Cu.forEach((uu => uu())))));
        const bu = qu.o;
        let cu;
        for (let uu = Xu.length; uu--;) Xu[uu].mesh === ju && (cu = Xu.splice(uu, 1)[0]);
        Eu._csmGen = -~Eu._csmGen;
        const Ou = fu(uu, ju);
        if (bu) {
          const uu = bu.indexOf(cu);
          uu < 0 ? bu.push(Ou) : bu[uu] = Ou
        }
        su = Xu.push(Ou)
      }
      if (su && (Xu.sort(((uu, Eu) => uu.order - Eu.order)), uu._renderableVersion++, uu._materialEpoch++), Eu.length = 0, !Zu) return Uu;
      const lu = Zu;
      return ju.e(367).then((() => ju(61601))).then((Eu => {
        let {
          C: ju
        } = Eu;
        return ju(uu, lu, Uu)
      }), (Eu => {
        const ju = uu._runtimeBuilds;
        ju ? ju._x(Eu) : console.error(Eu)
      }))
    }
    var Qu = null;

    function iu(uu, Eu) {
      const ju = uu.engine,
        Uu = {
          _kind: "vY",
          surface: uu,
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
            ju.useFloatingOrigin && Uu.camera && !Uu.camera._useFloatingOrigin && (Uu.camera._useFloatingOrigin = !0, Uu.camera._viewVer = -1, Uu.camera._vpVer = -1);
            const uu = Uu.fixedDeltaMs > 0 ? Uu.fixedDeltaMs : ju._currentDelta,
              Eu = ju._currentEncoder;
            let su = 0;
            for (const ju of Uu._beforeRender) ju(uu);
            Uu._materialSwapQueue.length && ru(Uu);
            for (const Zu of Uu._prePasses) su += Zu.execute(Eu, ju);
            for (const Zu of Uu._uniformUpdaters) Zu.update(ju);
            Uu._drawCallsPre = su
          },
          _record: () => Uu._frameGraph.execute(),
          _resize() {
            Uu._frameGraph.build()
          }
        },
        Xu = function() {
          const uu = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let Eu = 0; Eu < uu._tasks.length; Eu++) Zu(uu, uu._tasks[Eu]);
              for (const Eu of uu._tasks)
                for (const uu of Eu._passes) uu._initialize()
            },
            execute() {
              let Eu = 0;
              for (const ju of uu._tasks)
                if (!1 !== ju.executionEnabled)
                  if (ju.execute) Eu += ju.execute();
                  else
                    for (const uu of ju._passes) Eu += uu._execute();
              return Eu
            },
            dispose() {
              for (const Eu of uu._tasks) Eu.dispose();
              uu._tasks.length = 0, uu._currentProcessedTask = null
            }
          };
          return uu
        }();
      if (Uu._frameGraph = Xu, !1 !== Eu?.defaultRenderTask) {
        const Eu = uu.msaaSamples > 1,
          Zu = Eu ? (0, su.b)({
            lbl: "scene-color",
            format: uu.format,
            dFormat: "depth24plus-stencil8",
            samples: uu.msaaSamples,
            size: uu
          }) : uu.scRT,
          lu = Eu ? void 0 : (0, su.b)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: uu
          });
        ! function(uu, Eu) {
          uu._tasks.push(Eu)
        }(Xu, au({
          name: "vY",
          rt: Zu,
          rst: Eu ? uu.scRT : void 0,
          depth: lu
        }, ju, Uu))
      }
      return Uu._disposables.push((() => Xu.dispose())), Uu
    }
    async function Wu(uu) {
      const Eu = uu;
      for (Eu._built || (Eu._materialSwapQueue.length = 0); Eu._deferredBuilders.length;) {
        const uu = Eu._deferredBuilders.splice(0);
        await Promise.all(uu.map((uu => uu())))
      }
      await ru(Eu), Qu?.get(Eu)?.() || (Eu._runtimeBuilds?._e(), Eu._renderableVersion++, Eu._built = !0), await (Eu._rebuildHook?.(Eu))
    }
    var Su = null;
    async function Iu(uu) {
      const Eu = uu,
        su = Eu.surface;
      (0, Uu.h)(su, Eu) || (await Wu(uu), Eu._renderables.sort(Fu), await Promise.all(Eu._frameGraph._tasks.map((uu => uu._preload?.()))), Su && await Su(Eu), Eu._frameGraph.build(), su._renderingContexts[0] && (await ju.e(365).then((() => ju(61592)))).configureSwapchainOverlayScene(su, Eu), Qu?.get(Eu)?.() || (0, Uu.i)(su, Eu))
    }
    var Fu = (uu, Eu) => uu.order - Eu.order
  },
  41951: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu,
      e: () => Cu
    });
    var su = ju(41909),
      Uu = ju(41912),
      Zu = ju(41916),
      Xu = ju(41919),
      lu = ju(41921),
      qu = ju(41930);

    function fu(uu, Eu, ju) {
      let lu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (Eu < 1 || ju < 1) && (0, su.d)(676, Eu, ju);
      const fu = uu._device,
        Cu = lu.mipMaps ?? !1,
        bu = lu.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        cu = Cu ? (0, qu.b)(Eu, ju) : 1,
        Nu = fu.createTexture({
          size: {
            width: Eu,
            height: ju
          },
          format: bu,
          mipLevelCount: cu,
          usage: Uu.k.TEXTURE_BINDING | Uu.k.COPY_DST | Uu.k.RENDER_ATTACHMENT
        }),
        Ou = {
          addressModeU: lu.addressModeU ?? "clamp-to-edge",
          addressModeV: lu.addressModeV ?? "clamp-to-edge",
          minFilter: lu.minFilter ?? "linear",
          magFilter: lu.magFilter ?? "linear",
          mipmapFilter: Cu ? "linear" : "nearest"
        },
        Yu = (0, Xu.b)(uu, Ou),
        hu = {
          texture: Nu,
          view: Nu.createView(),
          sampler: Yu,
          width: Eu,
          height: ju
        };
      return (0, Zu.e)(hu), uu._dlr && uu._dlr.t(hu, {
        kind: "dynamic",
        width: Eu,
        height: ju,
        format: bu,
        levels: cu,
        samplerDesc: Ou,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), hu
    }

    function Cu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Uu = su.invertY ?? !0,
        Zu = su.premultiplyAlpha ?? !1;
      uu._device.queue.copyExternalImageToTexture({
        source: ju,
        flipY: Uu
      }, {
        texture: Eu.texture,
        premultipliedAlpha: Zu
      }, [Eu.width, Eu.height]);
      const Xu = Eu._recoverySource;
      Xu && "dynamic" === Xu.kind && (Xu.source = ju, Xu.flipY = Uu, Xu.premultipliedAlpha = Zu), Eu.texture.mipLevelCount > 1 && (0, lu.generateMipmaps)(uu, Eu.texture)
    }
  },
  41943: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => qu
    });
    var su = ju(41909),
      Uu = ju(41912),
      Zu = ju(41916),
      Xu = ju(41919),
      lu = ju(41930);
    async function qu(uu, Eu) {
      let qu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [fu, Cu] = function(uu) {
        const Eu = uu,
          ju = [
            [Eu.displayWidth, Eu.displayHeight],
            [Eu.videoWidth, Eu.videoHeight],
            [Eu.naturalWidth, Eu.naturalHeight],
            [Eu.width, Eu.height]
          ];
        for (const [su, Uu] of ju)
          if (void 0 !== su && void 0 !== Uu && Number.isInteger(su) && Number.isInteger(Uu) && su > 0 && Uu > 0) return [su, Uu];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(Eu), [bu, cu] = function(uu, Eu, ju) {
        if (void 0 === ju) return [uu, Eu];
        if (!Number.isInteger(ju) || ju < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${ju})`);
        if (Math.max(uu, Eu) <= ju) return [uu, Eu];
        const su = ju / Math.max(uu, Eu);
        return uu >= Eu ? [ju, Math.max(1, Math.round(Eu * su))] : [Math.max(1, Math.round(uu * su)), ju]
      }(fu, Cu, qu.maxDimension), Nu = qu.mipMaps ?? !0, Ou = qu.premultiplyAlpha ?? !1;
      let Yu = Eu,
        hu = null;
      const Du = {
        texture: null
      };
      try {
        bu === fu && cu === Cu || (hu = await createImageBitmap(Eu, {
          resizeWidth: bu,
          resizeHeight: cu,
          resizeQuality: "high",
          premultiplyAlpha: Ou ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), Yu = hu);
        const gu = uu._device,
          Mu = qu.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          eu = Nu ? (0, lu.b)(bu, cu) : 1,
          Gu = eu > 1 ? (await Promise.resolve().then((() => ju(41921)))).generateMipmaps : null,
          pu = {
            addressModeU: qu.addressModeU ?? "repeat",
            addressModeV: qu.addressModeV ?? "repeat",
            minFilter: qu.minFilter ?? "linear",
            magFilter: qu.magFilter ?? "linear",
            mipmapFilter: Nu ? "linear" : "nearest"
          };
        pu.maxAnisotropy = "linear" === pu.minFilter && "linear" === pu.magFilter && "linear" === pu.mipmapFilter ? 4 : 1;
        const wu = qu.invertY ?? !0,
          Ju = async Eu => {
            let ju;
            gu.pushErrorScope("validation"), gu.pushErrorScope("out-of-memory");
            let Zu = null;
            try {
              const ju = Du.texture = gu.createTexture({
                size: {
                  width: bu,
                  height: cu
                },
                format: Mu,
                mipLevelCount: eu,
                usage: Uu.k.TEXTURE_BINDING | Uu.k.COPY_DST | Uu.k.RENDER_ATTACHMENT
              });
              gu.queue.copyExternalImageToTexture({
                source: Eu,
                flipY: wu
              }, {
                texture: ju,
                premultipliedAlpha: Ou
              }, {
                width: bu,
                height: cu
              }), Gu && Gu(uu, ju), Zu = (0, Xu.b)(uu, pu)
            } catch (Nu) {
              ju = Nu
            }
            const [lu, qu] = await Promise.all([gu.popErrorScope(), gu.popErrorScope()]);
            if (ju) throw ju;
            const fu = qu ?? lu;
            if (fu) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${fu.message}`, {
              cause: fu
            });
            const Cu = Du.texture;
            return Cu && Zu || (0, su.d)(677), {
              texture: Cu,
              view: Cu.createView(),
              sampler: Zu,
              width: bu,
              height: cu
            }
          }, du = await (uu._dlr?.x(Yu, bu, cu, Mu, eu, pu, wu, Ou, Ju)) ?? await Ju(Yu);
        return (0, Zu.e)(du), du
      } catch (gu) {
        throw Du.texture?.destroy(), gu
      } finally {
        hu?.close()
      }
    }
  },
  41921: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      generateMipmaps: () => Nu,
      recordMipmaps: () => Ou
    });
    var su = ju(41912),
      Uu = ju(41919),
      Zu = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var Xu = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      lu = null,
      qu = null,
      fu = null,
      Cu = null,
      bu = null;

    function cu(uu) {
      const Eu = uu._device;
      Eu !== bu && (lu?.clear(), lu = null, qu = null, fu = null, Cu = null, bu = null, bu = Eu), qu ??= Eu.createShaderModule({
        code: Xu
      }), fu ??= function(uu) {
        return (0, Uu.b)(uu, Zu)
      }(uu), Cu ??= Eu.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: su.h.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: su.h.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function Nu(uu, Eu, ju) {
      const su = uu._device,
        Uu = su.createCommandEncoder();
      Ou(uu, Eu, Uu, ju), su.queue.submit([Uu.finish()])
    }

    function Ou(uu, Eu, ju, su) {
      if (Eu.mipLevelCount <= 1) return;
      const Uu = uu._device,
        Zu = function(uu, Eu) {
          const ju = uu._device;
          cu(uu), lu ??= new Map;
          let su = lu.get(Eu);
          return su || (su = ju.createRenderPipeline({
            layout: ju.createPipelineLayout({
              bindGroupLayouts: [Cu]
            }),
            vertex: {
              module: qu,
              entryPoint: "vs"
            },
            fragment: {
              module: qu,
              entryPoint: "fs",
              targets: [{
                format: Eu
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), lu.set(Eu, su)), su
        }(uu, Eu.format),
        Xu = null != su ? {
          dimension: "2d",
          baseArrayLayer: su,
          arrayLayerCount: 1
        } : {};
      for (let lu = 1; lu < Eu.mipLevelCount; lu++) {
        const uu = Eu.createView({
            baseMipLevel: lu - 1,
            mipLevelCount: 1,
            ...Xu
          }),
          su = Eu.createView({
            baseMipLevel: lu,
            mipLevelCount: 1,
            ...Xu
          }),
          qu = Uu.createBindGroup({
            layout: Cu,
            entries: [{
              binding: 0,
              resource: uu
            }, {
              binding: 1,
              resource: fu
            }]
          }),
          bu = ju.beginRenderPass({
            colorAttachments: [{
              view: su,
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
        bu.setPipeline(Zu), bu.setBindGroup(0, qu), bu.draw(3), bu.end()
      }
    }
  },
  41930: (uu, Eu, ju) => {
    function su(uu, Eu) {
      return Math.floor(Math.log2(Math.max(uu, Eu))) + 1
    }
    ju.d(Eu, {
      b: () => su
    })
  },
  41906: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => fu,
      d: () => Cu
    });
    var su = ju(41909),
      Uu = ju(41912),
      Zu = ju(41916),
      Xu = ju(41919),
      lu = ju(41921),
      qu = ju(41930);

    function fu(uu, Eu, ju, lu) {
      let fu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Eu < 1 || ju < 1 || lu < 1) && (0, su.d)(722, Eu, ju, lu);
      const Cu = uu._device,
        bu = fu.mipMaps ?? !0,
        cu = fu.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Nu = Cu.createTexture({
          size: {
            width: Eu,
            height: ju,
            depthOrArrayLayers: lu
          },
          dimension: "2d",
          format: cu,
          mipLevelCount: bu ? (0, qu.b)(Eu, ju) : 1,
          usage: Uu.k.TEXTURE_BINDING | Uu.k.COPY_DST | Uu.k.RENDER_ATTACHMENT
        }),
        Ou = (0, Xu.b)(uu, {
          addressModeU: fu.addressModeU ?? "repeat",
          addressModeV: fu.addressModeV ?? "repeat",
          minFilter: fu.minFilter ?? "linear",
          magFilter: fu.magFilter ?? "linear",
          mipmapFilter: bu ? "linear" : "nearest"
        }),
        Yu = {
          texture: Nu,
          view: Nu.createView({
            dimension: "2d-array"
          }),
          sampler: Ou,
          width: Eu,
          height: ju,
          layers: lu
        };
      return (0, Zu.e)(Yu), Yu
    }

    function Cu(uu, Eu, ju, Uu) {
      let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (ju < 0 || ju >= Eu.layers || (0 | ju) !== ju) && (0, su.d)(723, Eu.layers, ju);
      const Xu = Zu.invertY ?? !0,
        qu = Zu.premultiplyAlpha ?? !1;
      uu._device.queue.copyExternalImageToTexture({
        source: Uu,
        flipY: Xu
      }, {
        texture: Eu.texture,
        origin: [0, 0, ju],
        premultipliedAlpha: qu
      }, [Eu.width, Eu.height, 1]), Eu.texture.mipLevelCount > 1 && (0, lu.generateMipmaps)(uu, Eu.texture, ju)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);