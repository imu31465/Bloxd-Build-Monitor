export const id = 613;
export const ids = [613];
export const modules = {
  44900: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me
    });
    var ye = He(44888),
      be = He(44904);

    function Me(ee) {
      (0, be.b)(ee), (0, ye.u)(ee);
      const ie = ee._surfaces;
      for (const He of ie) He._renderingContexts.length = 0, He._ro?.disconnect(), He._context.unconfigure();
      ie.length = 0;
      try {
        ee._disposeManagedResources?.(), ee._disposeStorageBuffers?.()
      } finally {
        ee._device.destroy()
      }
    }
  },
  44888: (ee, ie, He) => {
    He.d(ie, {
      b: () => ke,
      f: () => Xe,
      i: () => qe,
      k: () => fe,
      o: () => Ee,
      r: () => ze,
      u: () => Be
    });
    var ye = He(44844);
    var be = "Babylon Lite v1.32.0",
      Me = He(44891);

    function Ke(ee) {
      return "clientWidth" in ee
    }
    var Ue = 1;

    function Fe(ee, ie, He) {
      const Fe = ie.getContext("webgpu");
      Fe || (0, ye.b)(54), Ke(ie) && ie.setAttribute("data-engine", be);
      const Je = He?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        oe = He?.srgb ? (Re = Je).endsWith("-srgb") ? Re : `${Re}-srgb` : Je;
      var Re;
      const ke = He?.alphaMode ?? "opaque";
      Fe.configure({
        device: ee._device,
        format: Je,
        alphaMode: ke,
        viewFormats: [oe]
      });
      const qe = 1 === He?.msaaSamples ? 1 : 4,
        fe = (0, Me.c)({
          lbl: "swapchain",
          format: oe,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return fe._eager = !0, {
        engine: ee,
        canvas: ie,
        format: oe,
        msaaSamples: qe,
        scRT: fe,
        maxDevicePixelRatio: He?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: Ue++,
        _context: Fe,
        _configureFormat: Je,
        _alphaMode: ke,
        _renderingContexts: []
      }
    }

    function Je(ee) {
      const ie = ee._context.getCurrentTexture(),
        He = ee.scRT;
      He._colorTexture = ie, He._colorView = ie.createView({
        format: ee.format
      }), He._width = ie.width, He._height = ie.height
    }

    function oe(ee) {
      const ie = ee.canvas;
      if (!Ke(ie)) return;
      const He = ee._w ?? ie.clientWidth,
        ye = ee._h ?? ie.clientHeight;
      if (!(He > 0 && ye > 0)) return;
      const be = Math.min(globalThis.devicePixelRatio || 1, ee.maxDevicePixelRatio);
      Re(ee, He * be | 0, ye * be | 0)
    }

    function Re(ee, ie, He) {
      const ye = ee.canvas,
        be = 0 | ie,
        Me = 0 | He;
      if (be > 0 && Me > 0 && (be !== ye.width || Me !== ye.height)) {
        ye.width = be, ye.height = Me, ee.scRT._width = be, ee.scRT._height = Me;
        for (const ie of ee._renderingContexts) ie._resize?.()
      }
    }
    var ke = 0;

    function qe(ee, ie) {
      return -1 !== ee._renderingContexts.indexOf(ie)
    }

    function fe(ee, ie) {
      return -1 === ee._renderingContexts.indexOf(ie) && (ee._renderingContexts.push(ie), !0)
    }
    var Te = null;
    var pe = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function Xe(ee, ie) {
      const Me = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...Te ? Te() : {}
      });
      Me || (0, ye.b)(47);
      const Ke = Te?.deviceFeatures?.(Me, ie) ?? function(ee) {
          return pe.filter((ie => ee.features.has(ie)))
        }(Me),
        Ue = await Me.requestDevice({
          requiredFeatures: Ke,
          requiredLimits: ie?.requiredLimits
        });
      console.log(`${be} - WebGPU engine`);
      const Re = !!ie?.useHighPrecisionMatrix,
        ke = !!ie?.useFloatingOrigin;
      if (ke && !Re && (0, ye.b)(48), Re) {
        const {
          allocateF64Mat4: ee
        } = await He.e(665).then((() => He(63892)));
        0
      }
      let qe, fe, Xe, ze;
      if (ke) {
        const [{
          wrapRenderableForFO: ee,
          lightFoVersion: ie,
          applyLightFoOffset: ye
        }, {
          makePackMeshWorld: be
        }] = await Promise.all([He.e(666).then((() => He(63895))), He.e(667).then((() => He(63902)))]);
        qe = ee, fe = be, Xe = ie, ze = ye
      }
      const Be = {
          _device: Ue
        },
        Ee = [Be];
      return Object.assign(Be, {
        engine: Be,
        surfaces: Ee,
        _surfaces: Ee,
        _device: Ue,
        _options: ie,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: Re,
        useFloatingOrigin: ke,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: qe,
        _makePackMeshWorld: fe,
        _lightFoVersion: Xe,
        _applyLightFoOffset: ze
      }, Fe(Be, ee, ie)), oe(Be), Je(Be), Be
    }

    function ze(ee, ie, He) {
      Re(ee, ie, He)
    }

    function Be(ee) {
      ee._animFrameId && cancelAnimationFrame(ee._animFrameId), ee._animFrameId = 0, ee._renderFn = null, ee._flushGpuRetirements?.(ee)
    }

    function Ee(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee.surfaces;
      if (He !== ee.surfaces)
        for (let be = He.length; be--;) He[be].engine !== ee && (0, ye.b)(49);
      ge(ee, ie, He)
    }

    function ge(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee._surfaces,
        ye = 0;
      for (let Me = He.length; Me--;) ye += He[Me]._renderingContexts.length;
      if (!ye) return ee.drawCallCount = 0, ee._flushGpuRetirements?.(ee);
      const be = ee._device.createCommandEncoder({
        label: "frame"
      });
      ee._currentEncoder = be, ee._currentDelta = ie;
      try {
        ee._gpuTimerBegin?.(be), ye = 0;
        for (let ee = 0; ee < He.length; ee++) {
          const ie = He[ee];
          ie._capturePreFrame?.(ie), Je(ie);
          const be = ie._renderingContexts;
          for (let ee = 0; ee < be.length; ee++) {
            const ie = be[ee];
            ie._update(), ye += ie._drawCallsPre + ie._record()
          }
        }
        const ie = ee._currentEncoder;
        for (let ee = 0; ee < He.length; ee++) {
          const ye = He[ee];
          ye._captureService?.(ye, ie)
        }
        ee._gpuTimerEnd?.(ie), ee._cbs[0] = ie.finish(), ee._device.queue.submit(ee._cbs), ee._flushGpuRetirements?.(ee), ee.drawCallCount = ye, ee._gpuTimerResolve?.()
      } finally {
        ee._currentEncoder = void 0
      }
    }
  },
  44851: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      f: () => Me,
      i: () => ye
    });
    var ye = globalThis.GPUTextureUsage,
      be = globalThis.GPUBufferUsage,
      Me = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  44904: (ee, ie, He) => {
    function ye(ee) {
      be(ee.splice(0))
    }

    function be(ee) {
      for (const He of ee) try {
        He()
      } catch (ie) {
        console.error("GPU resource retirement failed.", ie)
      }
    }

    function Me(ee, ie) {
      ee._flushGpuRetirements ??= Ke, (ee._retirements ??= []).push(ie)
    }

    function Ke(ee) {
      const ie = ee._retirements;
      if (!ie) return;
      ee._retirements = null;
      const He = ee._retiring ??= new Set;
      He.add(ie), queueMicrotask((() => {
        ee._device.queue.onSubmittedWorkDone().then((() => {
          He.delete(ie), ye(ie)
        })).catch((() => {}))
      }))
    }

    function Ue(ee) {
      const ie = ee._retirements,
        He = ee._retiring;
      ee._retirements = null, ee._retiring = null, ie && ye(ie), He?.forEach(ye)
    }
    He.d(ie, {
      b: () => Ue,
      c: () => Me
    })
  },
  44891: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      g: () => Ke,
      i: () => Ue
    });
    var ye = He(44851);

    function be(ee) {
      const ie = ee.size;
      return "canvas" in ie ? ie.canvas : ie
    }

    function Me(ee) {
      return {
        _descriptor: ee,
        _resolveSize: be,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function Ke(ee, ie) {
      if (ee._eager) return void ee._syncEager?.(ie);
      Ue(ee);
      const He = ee._descriptor,
        {
          width: Me,
          height: Ke
        } = (ee._resolveSize ?? be)(He);
      ee._width = Me, ee._height = Ke;
      const Fe = ie._device;
      He.format && (ee._colorTexture = Fe.createTexture({
        label: He.lbl,
        size: {
          width: Me,
          height: Ke
        },
        format: He.format,
        sampleCount: He.samples,
        usage: ye.i.RENDER_ATTACHMENT | ye.i.TEXTURE_BINDING | ye.i.COPY_SRC | ye.i.COPY_DST
      }), ee._colorView = ee._colorTexture.createView()), He.dFormat && (ee._depthTexture = Fe.createTexture({
        label: He.lbl,
        size: {
          width: Me,
          height: Ke
        },
        format: He.dFormat,
        sampleCount: He.samples,
        usage: ye.i.RENDER_ATTACHMENT | ye.i.TEXTURE_BINDING
      }), ee._depthView = ee._depthTexture.createView())
    }

    function Ue(ee) {
      if (!ee || ee._eager && !ee._disposeAttachments) return;
      const ie = ee._colorTexture,
        He = ee._depthTexture;
      if (ee._colorTexture = ee._depthTexture = null, ee._colorView = ee._depthView = null, ee._width = ee._height = 0, ee._disposeAttachments) ee._disposeAttachments(ie, He);
      else try {
        ie?.destroy()
      } finally {
        !1 !== ee._ownsDepthTexture && He?.destroy()
      }
    }
  },
  44918: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      f: () => be,
      i: () => Me
    });
    var ye = Float32Array,
      be = Float64Array,
      Me = Uint32Array
  },
  44924: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye
    });
    var ye = 16
  },
  44844: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    var ye = null;

    function be(ee) {
      for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), be = 1; be < ie; be++) He[be - 1] = arguments[be];
      const Me = new Error(ye?.(ee, He) ?? `#${ee}`);
      throw Me.lite = He, Me
    }
  },
  44873: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    var ye = He(44858);

    function be(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const He = ie.compare,
        be = ie.lodMinClamp ?? 0,
        Me = ie.lodMaxClamp ?? 32,
        Ke = void 0 !== He || 0 !== be || 32 !== Me ? `${He??""}:${be}:${Me}` : "";
      return (0, ye.d)(ee, ie, Ke)
    }
  },
  44856: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me
    });
    var ye = null;

    function be(ee) {
      const ie = ye ??= new WeakMap;
      ie.set(ee, (ie.get(ee) ?? 0) + 1)
    }

    function Me(ee) {
      be(ee.texture)
    }
  },
  44858: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue
    });
    var ye = null,
      be = "nearest",
      Me = "clamp-to-edge",
      Ke = {
        minFilter: be,
        magFilter: be,
        mipmapFilter: be,
        addressModeU: Me,
        addressModeV: Me,
        addressModeW: Me,
        maxAnisotropy: 1
      };

    function Ue(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const be = ee._device,
        Me = ye ??= new WeakMap;
      let Ue = Me.get(be);
      Ue || Me.set(be, Ue = new Map);
      let Fe = He;
      for (const ye in Ke) {
        const ee = ye;
        Fe += `:${ie[ee]??Ke[ee]}`
      }
      let Je = Ue.get(Fe);
      return Je || Ue.set(Fe, Je = be.createSampler(ie)), Je
    }
  },
  44909: (ee, ie, He) => {
    He.d(ie, {
      b: () => Le,
      d: () => ue
    });
    var ye = He(44891),
      be = He(44888);

    function Me(ee, ie) {
      ie._passes.length = 0, ee._currentProcessedTask = ie;
      try {
        ie.record()
      } finally {
        ee._currentProcessedTask = null
      }
    }
    var Ke = He(44918);

    function Ue(ee) {
      const ie = ee.worldMatrixVersion;
      if (ee._viewVer === ie) return ee._viewCache;
      const He = ee._viewCache,
        ye = ee.worldMatrix,
        be = ee._useFloatingOrigin,
        Me = be ? 0 : ye[12],
        Ke = be ? 0 : ye[13],
        Ue = be ? 0 : ye[14];
      return He[0] = ye[0], He[1] = ye[4], He[2] = ye[8], He[3] = 0, He[4] = ye[1], He[5] = ye[5], He[6] = ye[9], He[7] = 0, He[8] = ye[2], He[9] = ye[6], He[10] = ye[10], He[11] = 0, He[12] = -(ye[0] * Me + ye[1] * Ke + ye[2] * Ue), He[13] = -(ye[4] * Me + ye[5] * Ke + ye[6] * Ue), He[14] = -(ye[8] * Me + ye[9] * Ke + ye[10] * Ue), He[15] = 1, ee._viewVer = ie, He
    }
    var Fe = null;

    function Je(ee) {
      return ee._projFov === ee.fov && ee._projNear === ee.nearPlane && ee._projFar === ee.farPlane || (ee._projFov = ee.fov, ee._projNear = ee.nearPlane, ee._projFar = ee.farPlane, ee._projRev = (ee._projRev ?? 0) + 1), ee.worldMatrixVersion + (ee._projRev ?? 0)
    }

    function oe(ee, ie) {
      const He = Je(ee);
      if (ee._projVer === He && ee._projAspect === ie) return ee._projCache;
      const ye = ee._projCache;
      return null !== Fe && ee.ortho ? Fe(ee, ie, ye) : function(ee, ie, He, ye, be) {
        const Me = 1 / Math.tan(.5 * ie),
          Ke = be - ye;
        ee[0] = Me / He, ee[5] = Me, ee[10] = -ye / Ke, ee[11] = 1, ee[14] = be * ye / Ke
      }(ye, ee.fov, ie, ee.nearPlane, ee.farPlane), ee._projVer = He, ee._projAspect = ie, ye
    }
    var Re = He(44851);

    function ke(ee, ie, He) {
      return ee._device.createBuffer({
        label: He,
        size: (ye = ie, be = 16, Math.ceil(ye / be) * be),
        usage: Re.e.UNIFORM | Re.e.COPY_DST
      });
      var ye, be
    }
    var qe = He(44904),
      fe = null;

    function Te(ee) {
      const ie = ee._device,
        He = fe ??= new WeakMap;
      let ye = He.get(ie);
      return ye || (ye = ie.createBindGroupLayout({
        label: "yp",
        entries: [{
          binding: 0,
          visibility: Re.f.VERTEX | Re.f.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: Re.f.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), He.set(ie, ye)), ye
    }

    function pe(ee, ie, He) {
      const ye = ee._device,
        be = ke(ee, ie.byteLength, He);
      try {
        ye.queue.writeBuffer(be, 0, ie.buffer, ie.byteOffset, ie.byteLength)
      } catch (Me) {
        throw be.destroy(), Me
      }
      return be
    }
    var Xe = He(44924),
      ze = new Ke.i(1),
      Be = new Ke.d(ze.buffer);

    function Ee(ee) {
      let ie = 0;
      for (const He of ee) ie += He._lightVersion ?? 0;
      return ie
    }

    function ge(ee, ie) {
      ee.fill(0);
      let He = 0;
      for (const ye of ie) {
        if (He >= Xe.b) break;
        ye._writeLightUbo && (ye._writeLightUbo(ee, 4 + 16 * He), He++)
      }
      ze[0] = He, ee[0] = Be[0]
    }

    function Oe(ee, ie) {
      let He = ie._lightGpuState;
      const ye = 16 + 16 * Xe.b * 4;
      if (He && He._byteSize === ye) return He;
      const be = !He;
      He?._buffer.destroy();
      const Me = new Ke.d(ye / 4);
      return ge(Me, ie.lights), ee._applyLightFoOffset?.(Me, ie), He = {
        _buffer: pe(ee, Me),
        _scratch: Me,
        iN: Ee(ie.lights) + (ee._lightFoVersion?.(ie) ?? 0),
        _listVersion: ie._lightListVersion ?? 0,
        _lightCount: ie.lights.length,
        _byteSize: ye
      }, ie._lightGpuState = He, be && ie._disposables.push((() => {
        ie._lightGpuState?._buffer.destroy(), ie._lightGpuState = void 0
      })), He
    }

    function de(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const be = ie;
      if (0 === ye && 16 === be.length) return void ee.set(be, He);
      const Me = ye,
        Ke = He;
      ee[Ke + 0] = be[Me + 0], ee[Ke + 1] = be[Me + 1], ee[Ke + 2] = be[Me + 2], ee[Ke + 3] = be[Me + 3], ee[Ke + 4] = be[Me + 4], ee[Ke + 5] = be[Me + 5], ee[Ke + 6] = be[Me + 6], ee[Ke + 7] = be[Me + 7], ee[Ke + 8] = be[Me + 8], ee[Ke + 9] = be[Me + 9], ee[Ke + 10] = be[Me + 10], ee[Ke + 11] = be[Me + 11], ee[Ke + 12] = be[Me + 12], ee[Ke + 13] = be[Me + 13], ee[Ke + 14] = be[Me + 14], ee[Ke + 15] = be[Me + 15]
    }

    function We(ee, ie, He, ye, be) {
      ee.fill(0);
      const Me = function(ee, ie) {
          const He = Je(ee);
          if (ee._vpVer === He && ee._vpAspect === ie) return ee._vpCache;
          const ye = ee._vpCache;
          return function(ee, ie, He, ye, be, Me) {
            const Ke = He[ye],
              Ue = He[ye + 1],
              Fe = He[ye + 2],
              Je = He[ye + 3],
              oe = He[ye + 4],
              Re = He[ye + 5],
              ke = He[ye + 6],
              qe = He[ye + 7],
              fe = He[ye + 8],
              Te = He[ye + 9],
              pe = He[ye + 10],
              Xe = He[ye + 11],
              ze = He[ye + 12],
              Be = He[ye + 13],
              Ee = He[ye + 14],
              ge = He[ye + 15];
            let Oe = be[Me],
              de = be[Me + 1],
              We = be[Me + 2],
              te = be[Me + 3];
            ee[ie] = Ke * Oe + oe * de + fe * We + ze * te, ee[ie + 1] = Ue * Oe + Re * de + Te * We + Be * te, ee[ie + 2] = Fe * Oe + ke * de + pe * We + Ee * te, ee[ie + 3] = Je * Oe + qe * de + Xe * We + ge * te, Oe = be[Me + 4], de = be[Me + 5], We = be[Me + 6], te = be[Me + 7], ee[ie + 4] = Ke * Oe + oe * de + fe * We + ze * te, ee[ie + 5] = Ue * Oe + Re * de + Te * We + Be * te, ee[ie + 6] = Fe * Oe + ke * de + pe * We + Ee * te, ee[ie + 7] = Je * Oe + qe * de + Xe * We + ge * te, Oe = be[Me + 8], de = be[Me + 9], We = be[Me + 10], te = be[Me + 11], ee[ie + 8] = Ke * Oe + oe * de + fe * We + ze * te, ee[ie + 9] = Ue * Oe + Re * de + Te * We + Be * te, ee[ie + 10] = Fe * Oe + ke * de + pe * We + Ee * te, ee[ie + 11] = Je * Oe + qe * de + Xe * We + ge * te, Oe = be[Me + 12], de = be[Me + 13], We = be[Me + 14], te = be[Me + 15], ee[ie + 12] = Ke * Oe + oe * de + fe * We + ze * te, ee[ie + 13] = Ue * Oe + Re * de + Te * We + Be * te, ee[ie + 14] = Fe * Oe + ke * de + pe * We + Ee * te, ee[ie + 15] = Je * Oe + qe * de + Xe * We + ge * te
          }(ye, 0, oe(ee, ie), 0, Ue(ee), 0), ee._vpVer = He, ee._vpAspect = ie, ye
        }(ye, be),
        Ke = Ue(ye),
        Fe = ye.worldMatrix;
      de(ee, Me, 0), de(ee, Ke, 16), ie.useFloatingOrigin ? (ee[32] = 0, ee[33] = 0, ee[34] = 0) : (ee[32] = Fe[12], ee[33] = Fe[13], ee[34] = Fe[14]), ee[87] = ie.canvas.width;
      const Re = He.imageProcessing;
      ee[76] = Re.exposure, ee[77] = Re.contrast, ee[78] = He._envTextures?.lodGenerationScale ?? .8, ee[79] = +Re.toneMappingEnabled, ee[37] = ie.canvas.height
    }

    function te(ee, ie) {
      return {
        _renderables: ee,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: ie
      }
    }

    function Ze(ee, ie, He) {
      ee.clr ??= !0;
      const be = ee.rt._descriptor,
        Me = ee.depth?._descriptor,
        Fe = {
          _colorFormat: be.format,
          _depthStencilFormat: Me?.dFormat ?? be.dFormat,
          _depthCompare: be.depthCompare ?? Me?.depthCompare,
          _sampleCount: be.samples
        },
        oe = {
          loadOp: "clear",
          storeOp: "store"
        },
        Re = {
          ...te([], -1),
          name: ee.name,
          _config: ee,
          _ownsTargets: !ee.sharedRt,
          engine: ie,
          yp: He,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [oe]
          },
          _colorAttachment: oe,
          _sceneUBO: ke(ie, 368),
          _suData: new Ke.d(92),
          _sceneUboCacheKey: [],
          _targetSignature: Fe,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (Re._disposed) throw new Error("RenderTask has been disposed.");
            Re._recordExplicit ? Re._recordExplicit(Re, !0) : Pe(Re, !1 !== ee.autoMirror ? He._renderables.slice() : Re._renderables, !0)
          },
          execute: () => function(ee, ie, He) {
            if (!1 === ee.enabled) return 0;
            const ye = ee.yp;
            ! function(ee, ie, He) {
              const ye = ee.yp;
              !1 !== ee._config.autoMirror && ee._lastVersion !== ye._renderableVersion && Pe(ee, ye._renderables.slice());
              Ye(ee, ie);
              const be = ee._updateContext,
                Me = ee._config.cam ?? ye.camera;
              He._colorFormat && (ee._config._skipClusteredLights || ye._clusteredLightUpdater?.(Me, be.targetWidth, be.targetHeight), function(ee, ie) {
                const He = Oe(ee, ie),
                  ye = Ee(ie.lights) + (ee._lightFoVersion?.(ie) ?? 0),
                  be = ie._lightListVersion ?? 0;
                ye === He.iN && be === He._listVersion && ie.lights.length === He._lightCount || (He.iN = ye, He._listVersion = be, He._lightCount = ie.lights.length, ge(He._scratch, ie.lights), ee._applyLightFoOffset?.(He._scratch, ie), ee._device.queue.writeBuffer(He._buffer, 0, He._scratch)), He._buffer
              }(ie, ye));
              (function(ee, ie, He, ye) {
                if (!ye) return;
                const be = ye.viewport,
                  Me = ee._config.rt,
                  Ke = (ee._config.cs ? ie.canvas.width / ie.canvas.height : Me._width / Me._height) * (be ? be.width / be.height : 1),
                  Ue = He.fog,
                  Fe = He.imageProcessing,
                  oe = Je(ye),
                  Re = He._envTextures,
                  ke = ee._sceneUboCacheKey;
                if (ke[0] === ye && ke[1] === Ue && ke[2] === oe && ke[3] === Ke && ke[4] === Fe.exposure && ke[5] === Fe.contrast && ke[6] === Re) return;
                ke[0] = ye, ke[1] = Ue, ke[2] = oe, ke[3] = Ke, ke[4] = Fe.exposure, ke[5] = Fe.contrast, ke[6] = Re;
                const qe = ee._suData;
                We(qe, ie, He, ye, Ke);
                const fe = He._sceneUboContributors;
                if (fe)
                  for (const Je of fe) Je(qe, He);
                ie._device.queue.writeBuffer(ee._sceneUBO, 0, qe)
              })(ee, ie, ye, Me), be.U1 = Me, ee._batchState?._reset(), Ve(ee._opaqueBindings, be), Ve(ee._directBindings, be), Ve(ee._transparentBindings, be), ee._batchState?._flush(ie),
                function(ee, ie) {
                  const He = ee._transparentBindings;
                  if (He.length <= 1 || !ie) return;
                  const ye = Ue(ie);
                  for (const be of He) {
                    const ee = be.renderable._worldCenter;
                    be._sortDistance = ee ? ee[0] * ye[2] + ee[1] * ye[6] + ee[2] * ye[10] + ye[14] : 0
                  }
                  He.sort(we)
                }(ee, Me)
            }(ee, ie, He);
            const be = ee._colorAttachment,
              Me = ee._config;
            Me.rt._colorView && (Me.rt === ye.surface.scRT && (be.view = Me.rt._colorView), be.resolveTarget = Me.rst?._colorView ?? void 0, be.clearValue = Me.clrColor ?? ye.clearColor, be.loadOp = Me.clr ? "clear" : "load");
            if (ee._executeWithTransmission) return ee._executeWithTransmission(He._sampleCount);
            const Ke = ie._currentEncoder.beginRenderPass(ee._renderPassDescriptor),
              Fe = Ae(ee, Ke);
            return Ke.end(), Fe
          }(Re, ie, Fe),
          dispose() {
            if (Re._disposed) return;
            Re._disposed = !0;
            const ie = Re._pendingMeshes;
            ie && (ie.length = 0);
            for (const ee of Re._renderables) Re._retireRenderable?.(Re.engine, ee);
            Re._passes.length = Re._opaqueBindings.length = Re._directBindings.length = 0, Re._transparentBindings.length = Re._renderables.length = Re._ob.length = 0, Re._ownsTargets && ((0, ye.i)(ee.rt), (0, ye.i)(ee.rst)), ee.depth?._eager || (0, ye.i)(ee.depth);
            const He = Re._sceneUBO;
            (0, qe.c)(Re.engine, (() => He.destroy())), Re._batchState?._release(Re.engine), Re._batchState = void 0
          }
        };
      return Re
    }

    function we(ee, ie) {
      return ie._sortDistance - ee._sortDistance || ee.renderable.order - ie.renderable.order
    }

    function De(ee, ie) {
      return ee.renderable.order - ie.renderable.order
    }

    function Pe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee._renderables,
        He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        be = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        Me = arguments.length > 4 ? arguments[4] : void 0;
      const Ke = ee._config,
        Ue = Ke.rt,
        Fe = ee._batchState,
        Je = te(ie, ee.yp._renderableVersion);
      if (He) {
        const ie = (ie, He) => {
          ie && (He || ee._ownsTargets || ie._eager) && (0, ye.g)(ie, ee.engine)
        };
        ie(Ue), Ue._descriptor.samples > 1 && ie(Ke.rst), ie(Ke.depth, !0)
      }
      const {
        _opaqueBindings: oe,
        _directBindings: Re,
        _transparentBindings: ke
      } = Je;
      try {
        for (const He of ie) {
          const ie = He.bind(ee.engine, ee._targetSignature);
          Je._batchState = ee._targetSignature._collectBatches?.(Je._batchState, ie), He.isTransparent || He._transmissive ? ke.push(ie) : He._direct ? Re.push(ie) : oe.push(ie)
        }
        oe.sort(De), Re.sort(De), He && Ye(ee, ee.engine, !1)
      } catch (qe) {
        throw Je._batchState?._release(void 0, Me ?? [Fe]), qe
      }
      return He && (! function(ee, ie) {
        const He = ee._config,
          ye = ee._colorAttachment;
        ye.view = ie._colorView, ee._renderPassDescriptor.colorAttachments = ie._colorView ? [ye] : [];
        const be = He.depth ?? ie,
          Me = be._depthView;
        let Ke;
        if (Me) {
          const ee = be._descriptor,
            ie = (He.depth ? be._eager : !1 === He.depthClear) ? "load" : "clear";
          Ke = {
            view: Me,
            depthClearValue: ee.depthClearValue ?? 0,
            depthLoadOp: ie,
            depthStoreOp: "store"
          }, ee.dFormat?.includes("stencil") && (Ke.stencilClearValue = 0, Ke.stencilLoadOp = ie, Ke.stencilStoreOp = "store")
        }
        ee._renderPassDescriptor.depthStencilAttachment = Ke
      }(ee, Ue), ee._updateContext.targetWidth = Ue._width, ee._updateContext.targetHeight = Ue._height), be && (Object.assign(ee, Je), Fe?._release(ee.engine, [Je._batchState])), Je
    }

    function Ae(ee, ie) {
      const He = ee.engine,
        ye = ee._config,
        Me = ye.rt,
        Ke = ee.yp,
        Ue = ee._opaqueBindings,
        Fe = ee._ob,
        Je = ee._sceneBG;
      if (function(ee, ie, He, ye) {
          const be = ie?.viewport;
          if (!be) return;
          const Me = Math.floor(be.x * He),
            Ke = Math.floor((1 - be.y - be.height) * ye),
            Ue = Math.ceil((be.x + be.width) * He) - Me,
            Fe = Math.ceil((1 - be.y) * ye) - Ke;
          ee.setViewport(Me, Ke, Ue, Fe, 0, 1), ee.setScissorRect(Me, Ke, Ue, Fe)
        }(ie, ye.cam ?? Ke.camera, Me._width, Me._height), ie.setBindGroup(0, Je), ee._lastVis !== be.b || !Fe.length) {
        const ie = Me._descriptor,
          ye = He._device.createRenderBundleEncoder({
            colorFormats: ie.format ? [ie.format] : [],
            depthStencilFormat: ee._targetSignature._depthStencilFormat,
            sampleCount: ie.samples
          });
        ye.setBindGroup(0, Je), ae(ye, Ue, He), Fe[0] = ye.finish(), ee._lastVis = be.b
      }
      let oe = Ue.length;
      return ie.executeBundles(Fe), ie.setBindGroup(0, Je), oe += ae(ie, ee._directBindings, He), oe += ae(ie, ee._transparentBindings, He), oe
    }

    function Ye(ee, ie) {
      let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const ye = Oe(ie, ee.yp)._buffer;
      if (ye === ee._lightsUBO) return;
      const be = ie._device.createBindGroup({
        layout: Te(ie),
        entries: [{
          binding: 0,
          resource: {
            buffer: ee._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: ye
          }
        }]
      });
      ee._lightsUBO = ye, ee._sceneBG = be, He && (ee._ob = [])
    }

    function Ve(ee, ie) {
      for (const He of ee) He.update?.(ie)
    }

    function ae(ee, ie, He) {
      let ye = null,
        be = 0;
      for (const Me of ie) {
        const ie = Me.renderable.mesh;
        ie && !1 === ie.visible || (Me.pipeline !== ye && (ee.setPipeline(Me.pipeline), ye = Me.pipeline), be += Me.draw(ee, He))
      }
      return be
    }

    function ce(ee) {
      const ie = ee._materialSwapQueue;
      if (!ie[0] || ee._runtimeBuilds?.w) return;
      let ye, be, Me;
      const Ke = ee._renderables;
      for (const He of ie) {
        const ie = He.material;
        if (!ie) continue;
        const Ue = He._runtimeThinBuild;
        if (Ue) {
          be = Ue(ee, He, be);
          continue
        }
        const Fe = ee._groups.get(ie._buildGroup),
          Je = Fe?.r;
        if (!Je) {
          (Me ??= []).push(He);
          continue
        }
        if (Fe._w?.(He)) {
          (Me ??= []).push([He, ie]);
          continue
        }
        const oe = ee._meshDisposables.get(He);
        oe && (ee._meshDisposables.delete(He), (0, qe.c)(ee.surface.engine, (() => oe.forEach((ee => ee())))));
        const Re = Fe.o;
        let ke;
        for (let ee = Ke.length; ee--;) Ke[ee].mesh === He && (ke = Ke.splice(ee, 1)[0]);
        ie._csmGen = -~ie._csmGen;
        const fe = Je(ee, He);
        if (Re) {
          const ee = Re.indexOf(ke);
          ee < 0 ? Re.push(fe) : Re[ee] = fe
        }
        ye = Ke.push(fe)
      }
      if (ye && (Ke.sort(((ee, ie) => ee.order - ie.order)), ee._renderableVersion++, ee._materialEpoch++), ie.length = 0, !Me) return be;
      const Ue = Me;
      return He.e(671).then((() => He(63923))).then((ie => {
        let {
          C: He
        } = ie;
        return He(ee, Ue, be)
      }), (ie => {
        const He = ee._runtimeBuilds;
        He ? He._x(ie) : console.error(ie)
      }))
    }
    var xe = null;

    function Le(ee, ie) {
      const He = ee.engine,
        be = {
          _kind: "yp",
          surface: ee,
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
            He.useFloatingOrigin && be.camera && !be.camera._useFloatingOrigin && (be.camera._useFloatingOrigin = !0, be.camera._viewVer = -1, be.camera._vpVer = -1);
            const ee = be.fixedDeltaMs > 0 ? be.fixedDeltaMs : He._currentDelta,
              ie = He._currentEncoder;
            let ye = 0;
            for (const He of be._beforeRender) He(ee);
            be._materialSwapQueue.length && ce(be);
            for (const Me of be._prePasses) ye += Me.execute(ie, He);
            for (const Me of be._uniformUpdaters) Me.update(He);
            be._drawCallsPre = ye
          },
          _record: () => be._frameGraph.execute(),
          _resize() {
            be._frameGraph.build()
          }
        },
        Ke = function() {
          const ee = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let ie = 0; ie < ee._tasks.length; ie++) Me(ee, ee._tasks[ie]);
              for (const ie of ee._tasks)
                for (const ee of ie._passes) ee._initialize()
            },
            execute() {
              let ie = 0;
              for (const He of ee._tasks)
                if (!1 !== He.executionEnabled)
                  if (He.execute) ie += He.execute();
                  else
                    for (const ee of He._passes) ie += ee._execute();
              return ie
            },
            dispose() {
              for (const ie of ee._tasks) ie.dispose();
              ee._tasks.length = 0, ee._currentProcessedTask = null
            }
          };
          return ee
        }();
      if (be._frameGraph = Ke, !1 !== ie?.defaultRenderTask) {
        const ie = ee.msaaSamples > 1,
          Me = ie ? (0, ye.c)({
            lbl: "scene-color",
            format: ee.format,
            dFormat: "depth24plus-stencil8",
            samples: ee.msaaSamples,
            size: ee
          }) : ee.scRT,
          Ue = ie ? void 0 : (0, ye.c)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: ee
          });
        ! function(ee, ie) {
          ee._tasks.push(ie)
        }(Ke, Ze({
          name: "yp",
          rt: Me,
          rst: ie ? ee.scRT : void 0,
          depth: Ue
        }, He, be))
      }
      return be._disposables.push((() => Ke.dispose())), be
    }
    async function Ce(ee) {
      const ie = ee;
      for (ie._built || (ie._materialSwapQueue.length = 0); ie._deferredBuilders.length;) {
        const ee = ie._deferredBuilders.splice(0);
        await Promise.all(ee.map((ee => ee())))
      }
      await ce(ie), xe?.get(ie)?.() || (ie._runtimeBuilds?._e(), ie._renderableVersion++, ie._built = !0), await (ie._rebuildHook?.(ie))
    }
    var ve = null;
    async function ue(ee) {
      const ie = ee,
        ye = ie.surface;
      (0, be.i)(ye, ie) || (await Ce(ee), ie._renderables.sort(me), await Promise.all(ie._frameGraph._tasks.map((ee => ee._preload?.()))), ve && await ve(ie), ie._frameGraph.build(), ye._renderingContexts[0] && (await He.e(669).then((() => He(63910)))).configureSwapchainOverlayScene(ye, ie), xe?.get(ie)?.() || (0, be.k)(ye, ie))
    }
    var me = (ee, ie) => ee.order - ie.order
  },
  44882: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je,
      d: () => oe
    });
    var ye = He(44844),
      be = He(44851),
      Me = He(44856),
      Ke = He(44858),
      Ue = He(44862),
      Fe = He(44870);

    function Je(ee, ie, He) {
      let Ue = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (ie < 1 || He < 1) && (0, ye.b)(676, ie, He);
      const Je = ee._device,
        oe = Ue.mipMaps ?? !1,
        Re = Ue.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        ke = oe ? (0, Fe.e)(ie, He) : 1,
        qe = Je.createTexture({
          size: {
            width: ie,
            height: He
          },
          format: Re,
          mipLevelCount: ke,
          usage: be.i.TEXTURE_BINDING | be.i.COPY_DST | be.i.RENDER_ATTACHMENT
        }),
        fe = {
          addressModeU: Ue.addressModeU ?? "clamp-to-edge",
          addressModeV: Ue.addressModeV ?? "clamp-to-edge",
          minFilter: Ue.minFilter ?? "linear",
          magFilter: Ue.magFilter ?? "linear",
          mipmapFilter: oe ? "linear" : "nearest"
        },
        Te = (0, Ke.d)(ee, fe),
        pe = {
          texture: qe,
          view: qe.createView(),
          sampler: Te,
          width: ie,
          height: He
        };
      return (0, Me.c)(pe), ee._dlr && ee._dlr.t(pe, {
        kind: "dynamic",
        width: ie,
        height: He,
        format: Re,
        levels: ke,
        samplerDesc: fe,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), pe
    }

    function oe(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const be = ye.invertY ?? !0,
        Me = ye.premultiplyAlpha ?? !1;
      ee._device.queue.copyExternalImageToTexture({
        source: He,
        flipY: be
      }, {
        texture: ie.texture,
        premultipliedAlpha: Me
      }, [ie.width, ie.height]);
      const Ke = ie._recoverySource;
      Ke && "dynamic" === Ke.kind && (Ke.source = He, Ke.flipY = be, Ke.premultipliedAlpha = Me), ie.texture.mipLevelCount > 1 && (0, Ue.generateMipmaps)(ee, ie.texture)
    }
  },
  44880: (ee, ie, He) => {
    He.d(ie, {
      b: () => Fe
    });
    var ye = He(44844),
      be = He(44851),
      Me = He(44856),
      Ke = He(44858),
      Ue = He(44870);
    async function Fe(ee, ie) {
      let Fe = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [Je, oe] = function(ee) {
        const ie = ee,
          He = [
            [ie.displayWidth, ie.displayHeight],
            [ie.videoWidth, ie.videoHeight],
            [ie.naturalWidth, ie.naturalHeight],
            [ie.width, ie.height]
          ];
        for (const [ye, be] of He)
          if (void 0 !== ye && void 0 !== be && Number.isInteger(ye) && Number.isInteger(be) && ye > 0 && be > 0) return [ye, be];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(ie), [Re, ke] = function(ee, ie, He) {
        if (void 0 === He) return [ee, ie];
        if (!Number.isInteger(He) || He < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${He})`);
        if (Math.max(ee, ie) <= He) return [ee, ie];
        const ye = He / Math.max(ee, ie);
        return ee >= ie ? [He, Math.max(1, Math.round(ie * ye))] : [Math.max(1, Math.round(ee * ye)), He]
      }(Je, oe, Fe.maxDimension), qe = Fe.mipMaps ?? !0, fe = Fe.premultiplyAlpha ?? !1;
      let Te = ie,
        pe = null;
      const Xe = {
        texture: null
      };
      try {
        Re === Je && ke === oe || (pe = await createImageBitmap(ie, {
          resizeWidth: Re,
          resizeHeight: ke,
          resizeQuality: "high",
          premultiplyAlpha: fe ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), Te = pe);
        const ze = ee._device,
          Be = Fe.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          Ee = qe ? (0, Ue.e)(Re, ke) : 1,
          ge = Ee > 1 ? (await Promise.resolve().then((() => He(44862)))).generateMipmaps : null,
          Oe = {
            addressModeU: Fe.addressModeU ?? "repeat",
            addressModeV: Fe.addressModeV ?? "repeat",
            minFilter: Fe.minFilter ?? "linear",
            magFilter: Fe.magFilter ?? "linear",
            mipmapFilter: qe ? "linear" : "nearest"
          };
        Oe.maxAnisotropy = "linear" === Oe.minFilter && "linear" === Oe.magFilter && "linear" === Oe.mipmapFilter ? 4 : 1;
        const de = Fe.invertY ?? !0,
          We = async ie => {
            let He;
            ze.pushErrorScope("validation"), ze.pushErrorScope("out-of-memory");
            let Me = null;
            try {
              const He = Xe.texture = ze.createTexture({
                size: {
                  width: Re,
                  height: ke
                },
                format: Be,
                mipLevelCount: Ee,
                usage: be.i.TEXTURE_BINDING | be.i.COPY_DST | be.i.RENDER_ATTACHMENT
              });
              ze.queue.copyExternalImageToTexture({
                source: ie,
                flipY: de
              }, {
                texture: He,
                premultipliedAlpha: fe
              }, {
                width: Re,
                height: ke
              }), ge && ge(ee, He), Me = (0, Ke.d)(ee, Oe)
            } catch (qe) {
              He = qe
            }
            const [Ue, Fe] = await Promise.all([ze.popErrorScope(), ze.popErrorScope()]);
            if (He) throw He;
            const Je = Fe ?? Ue;
            if (Je) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${Je.message}`, {
              cause: Je
            });
            const oe = Xe.texture;
            return oe && Me || (0, ye.b)(677), {
              texture: oe,
              view: oe.createView(),
              sampler: Me,
              width: Re,
              height: ke
            }
          }, te = await (ee._dlr?.x(Te, Re, ke, Be, Ee, Oe, de, fe, We)) ?? await We(Te);
        return (0, Me.c)(te), te
      } catch (ze) {
        throw Xe.texture?.destroy(), ze
      } finally {
        pe?.close()
      }
    }
  },
  44862: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      generateMipmaps: () => qe,
      recordMipmaps: () => fe
    });
    var ye = He(44851),
      be = He(44858),
      Me = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var Ke = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      Ue = null,
      Fe = null,
      Je = null,
      oe = null,
      Re = null;

    function ke(ee) {
      const ie = ee._device;
      ie !== Re && (Ue?.clear(), Ue = null, Fe = null, Je = null, oe = null, Re = null, Re = ie), Fe ??= ie.createShaderModule({
        code: Ke
      }), Je ??= function(ee) {
        return (0, be.d)(ee, Me)
      }(ee), oe ??= ie.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: ye.f.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: ye.f.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function qe(ee, ie, He) {
      const ye = ee._device,
        be = ye.createCommandEncoder();
      fe(ee, ie, be, He), ye.queue.submit([be.finish()])
    }

    function fe(ee, ie, He, ye) {
      if (ie.mipLevelCount <= 1) return;
      const be = ee._device,
        Me = function(ee, ie) {
          const He = ee._device;
          ke(ee), Ue ??= new Map;
          let ye = Ue.get(ie);
          return ye || (ye = He.createRenderPipeline({
            layout: He.createPipelineLayout({
              bindGroupLayouts: [oe]
            }),
            vertex: {
              module: Fe,
              entryPoint: "vs"
            },
            fragment: {
              module: Fe,
              entryPoint: "fs",
              targets: [{
                format: ie
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), Ue.set(ie, ye)), ye
        }(ee, ie.format),
        Ke = null != ye ? {
          dimension: "2d",
          baseArrayLayer: ye,
          arrayLayerCount: 1
        } : {};
      for (let Ue = 1; Ue < ie.mipLevelCount; Ue++) {
        const ee = ie.createView({
            baseMipLevel: Ue - 1,
            mipLevelCount: 1,
            ...Ke
          }),
          ye = ie.createView({
            baseMipLevel: Ue,
            mipLevelCount: 1,
            ...Ke
          }),
          Fe = be.createBindGroup({
            layout: oe,
            entries: [{
              binding: 0,
              resource: ee
            }, {
              binding: 1,
              resource: Je
            }]
          }),
          Re = He.beginRenderPass({
            colorAttachments: [{
              view: ye,
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
        Re.setPipeline(Me), Re.setBindGroup(0, Fe), Re.draw(3), Re.end()
      }
    }
  },
  44870: (ee, ie, He) => {
    function ye(ee, ie) {
      return Math.floor(Math.log2(Math.max(ee, ie))) + 1
    }
    He.d(ie, {
      e: () => ye
    })
  },
  44842: (ee, ie, He) => {
    He.d(ie, {
      d: () => Je,
      g: () => oe
    });
    var ye = He(44844),
      be = He(44851),
      Me = He(44856),
      Ke = He(44858),
      Ue = He(44862),
      Fe = He(44870);

    function Je(ee, ie, He, Ue) {
      let Je = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (ie < 1 || He < 1 || Ue < 1) && (0, ye.b)(722, ie, He, Ue);
      const oe = ee._device,
        Re = Je.mipMaps ?? !0,
        ke = Je.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        qe = oe.createTexture({
          size: {
            width: ie,
            height: He,
            depthOrArrayLayers: Ue
          },
          dimension: "2d",
          format: ke,
          mipLevelCount: Re ? (0, Fe.e)(ie, He) : 1,
          usage: be.i.TEXTURE_BINDING | be.i.COPY_DST | be.i.RENDER_ATTACHMENT
        }),
        fe = (0, Ke.d)(ee, {
          addressModeU: Je.addressModeU ?? "repeat",
          addressModeV: Je.addressModeV ?? "repeat",
          minFilter: Je.minFilter ?? "linear",
          magFilter: Je.magFilter ?? "linear",
          mipmapFilter: Re ? "linear" : "nearest"
        }),
        Te = {
          texture: qe,
          view: qe.createView({
            dimension: "2d-array"
          }),
          sampler: fe,
          width: ie,
          height: He,
          layers: Ue
        };
      return (0, Me.c)(Te), Te
    }

    function oe(ee, ie, He, be) {
      let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (He < 0 || He >= ie.layers || (0 | He) !== He) && (0, ye.b)(723, ie.layers, He);
      const Ke = Me.invertY ?? !0,
        Fe = Me.premultiplyAlpha ?? !1;
      ee._device.queue.copyExternalImageToTexture({
        source: be,
        flipY: Ke
      }, {
        texture: ie.texture,
        origin: [0, 0, He],
        premultipliedAlpha: Fe
      }, [ie.width, ie.height, 1]), ie.texture.mipLevelCount > 1 && (0, Ue.generateMipmaps)(ee, ie.texture, He)
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);