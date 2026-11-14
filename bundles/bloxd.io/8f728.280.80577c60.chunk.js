export const id = 280;
export const ids = [280];
export const modules = {
  39656: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Tc,
      g: () => Sc,
      h: () => fc,
      l: () => mB,
      n: () => zB,
      o: () => yB
    });
    var Vc = nc(39599);
    var Ic = "Babylon Lite v1.32.0",
      rB = nc(39664);

    function uc(cB) {
      return "clientWidth" in cB
    }
    var sc = 1;

    function Mc(cB, Bc, nc) {
      const Mc = Bc.getContext("webgpu");
      Mc || (0, Vc.d)(54), uc(Bc) && Bc.setAttribute("data-engine", Ic);
      const Pc = nc?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        qB = nc?.srgb ? (Oc = Pc).endsWith("-srgb") ? Oc : `${Oc}-srgb` : Pc;
      var Oc;
      const Tc = nc?.alphaMode ?? "opaque";
      Mc.configure({
        device: cB._device,
        format: Pc,
        alphaMode: Tc,
        viewFormats: [qB]
      });
      const fc = 1 === nc?.msaaSamples ? 1 : 4,
        mB = (0, rB.d)({
          lbl: "swapchain",
          format: qB,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return mB._eager = !0, {
        engine: cB,
        canvas: Bc,
        format: qB,
        msaaSamples: fc,
        scRT: mB,
        maxDevicePixelRatio: nc?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: sc++,
        _context: Mc,
        _configureFormat: Pc,
        _alphaMode: Tc,
        _renderingContexts: []
      }
    }

    function Pc(cB) {
      const Bc = cB._context.getCurrentTexture(),
        nc = cB.scRT;
      nc._colorTexture = Bc, nc._colorView = Bc.createView({
        format: cB.format
      }), nc._width = Bc.width, nc._height = Bc.height
    }

    function qB(cB) {
      const Bc = cB.canvas;
      if (!uc(Bc)) return;
      const nc = cB._w ?? Bc.clientWidth,
        Vc = cB._h ?? Bc.clientHeight;
      if (!(nc > 0 && Vc > 0)) return;
      const Ic = Math.min(globalThis.devicePixelRatio || 1, cB.maxDevicePixelRatio);
      Oc(cB, nc * Ic | 0, Vc * Ic | 0)
    }

    function Oc(cB, Bc, nc) {
      const Vc = cB.canvas,
        Ic = 0 | Bc,
        rB = 0 | nc;
      if (Ic > 0 && rB > 0 && (Ic !== Vc.width || rB !== Vc.height)) {
        Vc.width = Ic, Vc.height = rB, cB.scRT._width = Ic, cB.scRT._height = rB;
        for (const Bc of cB._renderingContexts) Bc._resize?.()
      }
    }
    var Tc = 0;

    function fc(cB, Bc) {
      return -1 !== cB._renderingContexts.indexOf(Bc)
    }

    function mB(cB, Bc) {
      return -1 === cB._renderingContexts.indexOf(Bc) && (cB._renderingContexts.push(Bc), !0)
    }
    var ec = null;
    var tB = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function Sc(cB, Bc) {
      const rB = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...ec ? ec() : {}
      });
      rB || (0, Vc.d)(47);
      const uc = ec?.deviceFeatures?.(rB, Bc) ?? function(cB) {
          return tB.filter((Bc => cB.features.has(Bc)))
        }(rB),
        sc = await rB.requestDevice({
          requiredFeatures: uc,
          requiredLimits: Bc?.requiredLimits
        });
      console.log(`${Ic} - WebGPU engine`);
      const Oc = !!Bc?.useHighPrecisionMatrix,
        Tc = !!Bc?.useFloatingOrigin;
      if (Tc && !Oc && (0, Vc.d)(48), Oc) {
        const {
          allocateF64Mat4: cB
        } = await nc.e(334).then((() => nc(59167)));
        0
      }
      let fc, mB, Sc, yB;
      if (Tc) {
        const [{
          wrapRenderableForFO: cB,
          lightFoVersion: Bc,
          applyLightFoOffset: Vc
        }, {
          makePackMeshWorld: Ic
        }] = await Promise.all([nc.e(335).then((() => nc(59172))), nc.e(336).then((() => nc(59180)))]);
        fc = cB, mB = Ic, Sc = Bc, yB = Vc
      }
      const zB = {
          _device: sc
        },
        pc = [zB];
      return Object.assign(zB, {
        engine: zB,
        surfaces: pc,
        _surfaces: pc,
        _device: sc,
        _options: Bc,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: Oc,
        useFloatingOrigin: Tc,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: fc,
        _makePackMeshWorld: mB,
        _lightFoVersion: Sc,
        _applyLightFoOffset: yB
      }, Mc(zB, cB, Bc)), qB(zB), Pc(zB), zB
    }

    function yB(cB, Bc, nc) {
      Oc(cB, Bc, nc)
    }

    function zB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cB.surfaces;
      if (nc !== cB.surfaces)
        for (let Ic = nc.length; Ic--;) nc[Ic].engine !== cB && (0, Vc.d)(49);
      pc(cB, Bc, nc)
    }

    function pc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cB._surfaces,
        Vc = 0;
      for (let rB = nc.length; rB--;) Vc += nc[rB]._renderingContexts.length;
      if (!Vc) return cB.drawCallCount = 0, cB._flushGpuRetirements?.(cB);
      const Ic = cB._device.createCommandEncoder({
        label: "frame"
      });
      cB._currentEncoder = Ic, cB._currentDelta = Bc;
      try {
        cB._gpuTimerBegin?.(Ic), Vc = 0;
        for (let cB = 0; cB < nc.length; cB++) {
          const Bc = nc[cB];
          Bc._capturePreFrame?.(Bc), Pc(Bc);
          const Ic = Bc._renderingContexts;
          for (let cB = 0; cB < Ic.length; cB++) {
            const Bc = Ic[cB];
            Bc._update(), Vc += Bc._drawCallsPre + Bc._record()
          }
        }
        const Bc = cB._currentEncoder;
        for (let cB = 0; cB < nc.length; cB++) {
          const Vc = nc[cB];
          Vc._captureService?.(Vc, Bc)
        }
        cB._gpuTimerEnd?.(Bc), cB._cbs[0] = Bc.finish(), cB._device.queue.submit(cB._cbs), cB._flushGpuRetirements?.(cB), cB.drawCallCount = Vc, cB._gpuTimerResolve?.()
      } finally {
        cB._currentEncoder = void 0
      }
    }
  },
  39607: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic,
      f: () => rB,
      i: () => Vc
    });
    var Vc = globalThis.GPUTextureUsage,
      Ic = globalThis.GPUBufferUsage,
      rB = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  39682: (cB, Bc, nc) => {
    function Vc(cB) {
      Ic(cB.splice(0))
    }

    function Ic(cB) {
      for (const nc of cB) try {
        nc()
      } catch (Bc) {
        console.error("GPU resource retirement failed.", Bc)
      }
    }

    function rB(cB, Bc) {
      cB._flushGpuRetirements ??= uc, (cB._retirements ??= []).push(Bc)
    }

    function uc(cB) {
      const Bc = cB._retirements;
      if (!Bc) return;
      cB._retirements = null;
      const nc = cB._retiring ??= new Set;
      nc.add(Bc), queueMicrotask((() => {
        cB._device.queue.onSubmittedWorkDone().then((() => {
          nc.delete(Bc), Vc(Bc)
        })).catch((() => {}))
      }))
    }
    nc.d(Bc, {
      d: () => rB
    })
  },
  39664: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      g: () => uc,
      k: () => sc
    });
    var Vc = nc(39607);

    function Ic(cB) {
      const Bc = cB.size;
      return "canvas" in Bc ? Bc.canvas : Bc
    }

    function rB(cB) {
      return {
        _descriptor: cB,
        _resolveSize: Ic,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function uc(cB, Bc) {
      if (cB._eager) return void cB._syncEager?.(Bc);
      sc(cB);
      const nc = cB._descriptor,
        {
          width: rB,
          height: uc
        } = (cB._resolveSize ?? Ic)(nc);
      cB._width = rB, cB._height = uc;
      const Mc = Bc._device;
      nc.format && (cB._colorTexture = Mc.createTexture({
        label: nc.lbl,
        size: {
          width: rB,
          height: uc
        },
        format: nc.format,
        sampleCount: nc.samples,
        usage: Vc.i.RENDER_ATTACHMENT | Vc.i.TEXTURE_BINDING | Vc.i.COPY_SRC | Vc.i.COPY_DST
      }), cB._colorView = cB._colorTexture.createView()), nc.dFormat && (cB._depthTexture = Mc.createTexture({
        label: nc.lbl,
        size: {
          width: rB,
          height: uc
        },
        format: nc.dFormat,
        sampleCount: nc.samples,
        usage: Vc.i.RENDER_ATTACHMENT | Vc.i.TEXTURE_BINDING
      }), cB._depthView = cB._depthTexture.createView())
    }

    function sc(cB) {
      if (!cB || cB._eager && !cB._disposeAttachments) return;
      const Bc = cB._colorTexture,
        nc = cB._depthTexture;
      if (cB._colorTexture = cB._depthTexture = null, cB._colorView = cB._depthView = null, cB._width = cB._height = 0, cB._disposeAttachments) cB._disposeAttachments(Bc, nc);
      else try {
        Bc?.destroy()
      } finally {
        !1 !== cB._ownsDepthTexture && nc?.destroy()
      }
    }
  },
  39678: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc,
      f: () => Ic,
      j: () => rB
    });
    var Vc = Float32Array,
      Ic = Float64Array,
      rB = Uint32Array
  },
  39686: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc
    });
    var Vc = 16
  },
  39599: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic
    });
    var Vc = null;

    function Ic(cB) {
      for (var Bc = arguments.length, nc = new Array(Bc > 1 ? Bc - 1 : 0), Ic = 1; Ic < Bc; Ic++) nc[Ic - 1] = arguments[Ic];
      const rB = new Error(Vc?.(cB, nc) ?? `#${cB}`);
      throw rB.lite = nc, rB
    }
  },
  39644: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic
    });
    var Vc = nc(39621);

    function Ic(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const nc = Bc.compare,
        Ic = Bc.lodMinClamp ?? 0,
        rB = Bc.lodMaxClamp ?? 32,
        uc = void 0 !== nc || 0 !== Ic || 32 !== rB ? `${nc??""}:${Ic}:${rB}` : "";
      return (0, Vc.c)(cB, Bc, uc)
    }
  },
  39613: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB
    });
    var Vc = null;

    function Ic(cB) {
      const Bc = Vc ??= new WeakMap;
      Bc.set(cB, (Bc.get(cB) ?? 0) + 1)
    }

    function rB(cB) {
      Ic(cB.texture)
    }
  },
  39621: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => sc
    });
    var Vc = null,
      Ic = "nearest",
      rB = "clamp-to-edge",
      uc = {
        minFilter: Ic,
        magFilter: Ic,
        mipmapFilter: Ic,
        addressModeU: rB,
        addressModeV: rB,
        addressModeW: rB,
        maxAnisotropy: 1
      };

    function sc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Ic = cB._device,
        rB = Vc ??= new WeakMap;
      let sc = rB.get(Ic);
      sc || rB.set(Ic, sc = new Map);
      let Mc = nc;
      for (const Vc in uc) {
        const cB = Vc;
        Mc += `:${Bc[cB]??uc[cB]}`
      }
      let Pc = sc.get(Mc);
      return Pc || sc.set(Mc, Pc = Ic.createSampler(Bc)), Pc
    }
  },
  39673: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => oc,
      f: () => kB
    });
    var Vc = nc(39664),
      Ic = nc(39656);

    function rB(cB, Bc) {
      Bc._passes.length = 0, cB._currentProcessedTask = Bc;
      try {
        Bc.record()
      } finally {
        cB._currentProcessedTask = null
      }
    }
    var uc = nc(39678);

    function sc(cB) {
      const Bc = cB.worldMatrixVersion;
      if (cB._viewVer === Bc) return cB._viewCache;
      const nc = cB._viewCache,
        Vc = cB.worldMatrix,
        Ic = cB._useFloatingOrigin,
        rB = Ic ? 0 : Vc[12],
        uc = Ic ? 0 : Vc[13],
        sc = Ic ? 0 : Vc[14];
      return nc[0] = Vc[0], nc[1] = Vc[4], nc[2] = Vc[8], nc[3] = 0, nc[4] = Vc[1], nc[5] = Vc[5], nc[6] = Vc[9], nc[7] = 0, nc[8] = Vc[2], nc[9] = Vc[6], nc[10] = Vc[10], nc[11] = 0, nc[12] = -(Vc[0] * rB + Vc[1] * uc + Vc[2] * sc), nc[13] = -(Vc[4] * rB + Vc[5] * uc + Vc[6] * sc), nc[14] = -(Vc[8] * rB + Vc[9] * uc + Vc[10] * sc), nc[15] = 1, cB._viewVer = Bc, nc
    }
    var Mc = null;

    function Pc(cB) {
      return cB._projFov === cB.fov && cB._projNear === cB.nearPlane && cB._projFar === cB.farPlane || (cB._projFov = cB.fov, cB._projNear = cB.nearPlane, cB._projFar = cB.farPlane, cB._projRev = (cB._projRev ?? 0) + 1), cB.worldMatrixVersion + (cB._projRev ?? 0)
    }

    function qB(cB, Bc) {
      const nc = Pc(cB);
      if (cB._projVer === nc && cB._projAspect === Bc) return cB._projCache;
      const Vc = cB._projCache;
      return null !== Mc && cB.ortho ? Mc(cB, Bc, Vc) : function(cB, Bc, nc, Vc, Ic) {
        const rB = 1 / Math.tan(.5 * Bc),
          uc = Ic - Vc;
        cB[0] = rB / nc, cB[5] = rB, cB[10] = -Vc / uc, cB[11] = 1, cB[14] = Ic * Vc / uc
      }(Vc, cB.fov, Bc, cB.nearPlane, cB.farPlane), cB._projVer = nc, cB._projAspect = Bc, Vc
    }
    var Oc = nc(39607);

    function Tc(cB, Bc, nc) {
      return cB._device.createBuffer({
        label: nc,
        size: (Vc = Bc, Ic = 16, Math.ceil(Vc / Ic) * Ic),
        usage: Oc.d.UNIFORM | Oc.d.COPY_DST
      });
      var Vc, Ic
    }
    var fc = nc(39682),
      mB = null;

    function ec(cB) {
      const Bc = cB._device,
        nc = mB ??= new WeakMap;
      let Vc = nc.get(Bc);
      return Vc || (Vc = Bc.createBindGroupLayout({
        label: "Ir",
        entries: [{
          binding: 0,
          visibility: Oc.f.VERTEX | Oc.f.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: Oc.f.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), nc.set(Bc, Vc)), Vc
    }

    function tB(cB, Bc, nc) {
      const Vc = cB._device,
        Ic = Tc(cB, Bc.byteLength, nc);
      try {
        Vc.queue.writeBuffer(Ic, 0, Bc.buffer, Bc.byteOffset, Bc.byteLength)
      } catch (rB) {
        throw Ic.destroy(), rB
      }
      return Ic
    }
    var Sc = nc(39686),
      yB = new uc.j(1),
      zB = new uc.d(yB.buffer);

    function pc(cB) {
      let Bc = 0;
      for (const nc of cB) Bc += nc._lightVersion ?? 0;
      return Bc
    }

    function hc(cB, Bc) {
      cB.fill(0);
      let nc = 0;
      for (const Vc of Bc) {
        if (nc >= Sc.b) break;
        Vc._writeLightUbo && (Vc._writeLightUbo(cB, 4 + 16 * nc), nc++)
      }
      yB[0] = nc, cB[0] = zB[0]
    }

    function aB(cB, Bc) {
      let nc = Bc._lightGpuState;
      const Vc = 16 + 16 * Sc.b * 4;
      if (nc && nc._byteSize === Vc) return nc;
      const Ic = !nc;
      nc?._buffer.destroy();
      const rB = new uc.d(Vc / 4);
      return hc(rB, Bc.lights), cB._applyLightFoOffset?.(rB, Bc), nc = {
        _buffer: tB(cB, rB),
        _scratch: rB,
        Rnc: pc(Bc.lights) + (cB._lightFoVersion?.(Bc) ?? 0),
        _listVersion: Bc._lightListVersion ?? 0,
        _lightCount: Bc.lights.length,
        _byteSize: Vc
      }, Bc._lightGpuState = nc, Ic && Bc._disposables.push((() => {
        Bc._lightGpuState?._buffer.destroy(), Bc._lightGpuState = void 0
      })), nc
    }

    function lc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Ic = Bc;
      if (0 === Vc && 16 === Ic.length) return void cB.set(Ic, nc);
      const rB = Vc,
        uc = nc;
      cB[uc + 0] = Ic[rB + 0], cB[uc + 1] = Ic[rB + 1], cB[uc + 2] = Ic[rB + 2], cB[uc + 3] = Ic[rB + 3], cB[uc + 4] = Ic[rB + 4], cB[uc + 5] = Ic[rB + 5], cB[uc + 6] = Ic[rB + 6], cB[uc + 7] = Ic[rB + 7], cB[uc + 8] = Ic[rB + 8], cB[uc + 9] = Ic[rB + 9], cB[uc + 10] = Ic[rB + 10], cB[uc + 11] = Ic[rB + 11], cB[uc + 12] = Ic[rB + 12], cB[uc + 13] = Ic[rB + 13], cB[uc + 14] = Ic[rB + 14], cB[uc + 15] = Ic[rB + 15]
    }

    function Yc(cB, Bc, nc, Vc, Ic) {
      cB.fill(0);
      const rB = function(cB, Bc) {
          const nc = Pc(cB);
          if (cB._vpVer === nc && cB._vpAspect === Bc) return cB._vpCache;
          const Vc = cB._vpCache;
          return function(cB, Bc, nc, Vc, Ic, rB) {
            const uc = nc[Vc],
              sc = nc[Vc + 1],
              Mc = nc[Vc + 2],
              Pc = nc[Vc + 3],
              qB = nc[Vc + 4],
              Oc = nc[Vc + 5],
              Tc = nc[Vc + 6],
              fc = nc[Vc + 7],
              mB = nc[Vc + 8],
              ec = nc[Vc + 9],
              tB = nc[Vc + 10],
              Sc = nc[Vc + 11],
              yB = nc[Vc + 12],
              zB = nc[Vc + 13],
              pc = nc[Vc + 14],
              hc = nc[Vc + 15];
            let aB = Ic[rB],
              lc = Ic[rB + 1],
              Yc = Ic[rB + 2],
              Lc = Ic[rB + 3];
            cB[Bc] = uc * aB + qB * lc + mB * Yc + yB * Lc, cB[Bc + 1] = sc * aB + Oc * lc + ec * Yc + zB * Lc, cB[Bc + 2] = Mc * aB + Tc * lc + tB * Yc + pc * Lc, cB[Bc + 3] = Pc * aB + fc * lc + Sc * Yc + hc * Lc, aB = Ic[rB + 4], lc = Ic[rB + 5], Yc = Ic[rB + 6], Lc = Ic[rB + 7], cB[Bc + 4] = uc * aB + qB * lc + mB * Yc + yB * Lc, cB[Bc + 5] = sc * aB + Oc * lc + ec * Yc + zB * Lc, cB[Bc + 6] = Mc * aB + Tc * lc + tB * Yc + pc * Lc, cB[Bc + 7] = Pc * aB + fc * lc + Sc * Yc + hc * Lc, aB = Ic[rB + 8], lc = Ic[rB + 9], Yc = Ic[rB + 10], Lc = Ic[rB + 11], cB[Bc + 8] = uc * aB + qB * lc + mB * Yc + yB * Lc, cB[Bc + 9] = sc * aB + Oc * lc + ec * Yc + zB * Lc, cB[Bc + 10] = Mc * aB + Tc * lc + tB * Yc + pc * Lc, cB[Bc + 11] = Pc * aB + fc * lc + Sc * Yc + hc * Lc, aB = Ic[rB + 12], lc = Ic[rB + 13], Yc = Ic[rB + 14], Lc = Ic[rB + 15], cB[Bc + 12] = uc * aB + qB * lc + mB * Yc + yB * Lc, cB[Bc + 13] = sc * aB + Oc * lc + ec * Yc + zB * Lc, cB[Bc + 14] = Mc * aB + Tc * lc + tB * Yc + pc * Lc, cB[Bc + 15] = Pc * aB + fc * lc + Sc * Yc + hc * Lc
          }(Vc, 0, qB(cB, Bc), 0, sc(cB), 0), cB._vpVer = nc, cB._vpAspect = Bc, Vc
        }(Vc, Ic),
        uc = sc(Vc),
        Mc = Vc.worldMatrix;
      lc(cB, rB, 0), lc(cB, uc, 16), Bc.useFloatingOrigin ? (cB[32] = 0, cB[33] = 0, cB[34] = 0) : (cB[32] = Mc[12], cB[33] = Mc[13], cB[34] = Mc[14]), cB[87] = Bc.canvas.width;
      const Oc = nc.imageProcessing;
      cB[76] = Oc.exposure, cB[77] = Oc.contrast, cB[78] = nc._envTextures?.lodGenerationScale ?? .8, cB[79] = +Oc.toneMappingEnabled, cB[37] = Bc.canvas.height
    }

    function Lc(cB, Bc) {
      return {
        _renderables: cB,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: Bc
      }
    }

    function gB(cB, Bc, nc) {
      cB.clr ??= !0;
      const Ic = cB.rt._descriptor,
        rB = cB.depth?._descriptor,
        Mc = {
          _colorFormat: Ic.format,
          _depthStencilFormat: rB?.dFormat ?? Ic.dFormat,
          _depthCompare: Ic.depthCompare ?? rB?.depthCompare,
          _sampleCount: Ic.samples
        },
        qB = {
          loadOp: "clear",
          storeOp: "store"
        },
        Oc = {
          ...Lc([], -1),
          name: cB.name,
          _config: cB,
          _ownsTargets: !cB.sharedRt,
          engine: Bc,
          Ir: nc,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [qB]
          },
          _colorAttachment: qB,
          _sceneUBO: Tc(Bc, 368),
          _suData: new uc.d(92),
          _sceneUboCacheKey: [],
          _targetSignature: Mc,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (Oc._disposed) throw new Error("RenderTask has been disposed.");
            Oc._recordExplicit ? Oc._recordExplicit(Oc, !0) : Zc(Oc, !1 !== cB.autoMirror ? nc._renderables.slice() : Oc._renderables, !0)
          },
          execute: () => function(cB, Bc, nc) {
            if (!1 === cB.enabled) return 0;
            const Vc = cB.Ir;
            ! function(cB, Bc, nc) {
              const Vc = cB.Ir;
              !1 !== cB._config.autoMirror && cB._lastVersion !== Vc._renderableVersion && Zc(cB, Vc._renderables.slice());
              Cc(cB, Bc);
              const Ic = cB._updateContext,
                rB = cB._config.cam ?? Vc.camera;
              nc._colorFormat && (cB._config._skipClusteredLights || Vc._clusteredLightUpdater?.(rB, Ic.targetWidth, Ic.targetHeight), function(cB, Bc) {
                const nc = aB(cB, Bc),
                  Vc = pc(Bc.lights) + (cB._lightFoVersion?.(Bc) ?? 0),
                  Ic = Bc._lightListVersion ?? 0;
                Vc === nc.Rnc && Ic === nc._listVersion && Bc.lights.length === nc._lightCount || (nc.Rnc = Vc, nc._listVersion = Ic, nc._lightCount = Bc.lights.length, hc(nc._scratch, Bc.lights), cB._applyLightFoOffset?.(nc._scratch, Bc), cB._device.queue.writeBuffer(nc._buffer, 0, nc._scratch)), nc._buffer
              }(Bc, Vc));
              (function(cB, Bc, nc, Vc) {
                if (!Vc) return;
                const Ic = Vc.viewport,
                  rB = cB._config.rt,
                  uc = (cB._config.cs ? Bc.canvas.width / Bc.canvas.height : rB._width / rB._height) * (Ic ? Ic.width / Ic.height : 1),
                  sc = nc.fog,
                  Mc = nc.imageProcessing,
                  qB = Pc(Vc),
                  Oc = nc._envTextures,
                  Tc = cB._sceneUboCacheKey;
                if (Tc[0] === Vc && Tc[1] === sc && Tc[2] === qB && Tc[3] === uc && Tc[4] === Mc.exposure && Tc[5] === Mc.contrast && Tc[6] === Oc) return;
                Tc[0] = Vc, Tc[1] = sc, Tc[2] = qB, Tc[3] = uc, Tc[4] = Mc.exposure, Tc[5] = Mc.contrast, Tc[6] = Oc;
                const fc = cB._suData;
                Yc(fc, Bc, nc, Vc, uc);
                const mB = nc._sceneUboContributors;
                if (mB)
                  for (const Pc of mB) Pc(fc, nc);
                Bc._device.queue.writeBuffer(cB._sceneUBO, 0, fc)
              })(cB, Bc, Vc, rB), Ic.YIc = rB, cB._batchState?._reset(), vB(cB._opaqueBindings, Ic), vB(cB._directBindings, Ic), vB(cB._transparentBindings, Ic), cB._batchState?._flush(Bc),
                function(cB, Bc) {
                  const nc = cB._transparentBindings;
                  if (nc.length <= 1 || !Bc) return;
                  const Vc = sc(Bc);
                  for (const Ic of nc) {
                    const cB = Ic.renderable._worldCenter;
                    Ic._sortDistance = cB ? cB[0] * Vc[2] + cB[1] * Vc[6] + cB[2] * Vc[10] + Vc[14] : 0
                  }
                  nc.sort(Uc)
                }(cB, rB)
            }(cB, Bc, nc);
            const Ic = cB._colorAttachment,
              rB = cB._config;
            rB.rt._colorView && (rB.rt === Vc.surface.scRT && (Ic.view = rB.rt._colorView), Ic.resolveTarget = rB.rst?._colorView ?? void 0, Ic.clearValue = rB.clrColor ?? Vc.clearColor, Ic.loadOp = rB.clr ? "clear" : "load");
            if (cB._executeWithTransmission) return cB._executeWithTransmission(nc._sampleCount);
            const uc = Bc._currentEncoder.beginRenderPass(cB._renderPassDescriptor),
              Mc = Qc(cB, uc);
            return uc.end(), Mc
          }(Oc, Bc, Mc),
          dispose() {
            if (Oc._disposed) return;
            Oc._disposed = !0;
            const Bc = Oc._pendingMeshes;
            Bc && (Bc.length = 0);
            for (const cB of Oc._renderables) Oc._retireRenderable?.(Oc.engine, cB);
            Oc._passes.length = Oc._opaqueBindings.length = Oc._directBindings.length = 0, Oc._transparentBindings.length = Oc._renderables.length = Oc._ob.length = 0, Oc._ownsTargets && ((0, Vc.k)(cB.rt), (0, Vc.k)(cB.rst)), cB.depth?._eager || (0, Vc.k)(cB.depth);
            const nc = Oc._sceneUBO;
            (0, fc.d)(Oc.engine, (() => nc.destroy())), Oc._batchState?._release(Oc.engine), Oc._batchState = void 0
          }
        };
      return Oc
    }

    function Uc(cB, Bc) {
      return Bc._sortDistance - cB._sortDistance || cB.renderable.order - Bc.renderable.order
    }

    function bB(cB, Bc) {
      return cB.renderable.order - Bc.renderable.order
    }

    function Zc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB._renderables,
        nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ic = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        rB = arguments.length > 4 ? arguments[4] : void 0;
      const uc = cB._config,
        sc = uc.rt,
        Mc = cB._batchState,
        Pc = Lc(Bc, cB.Ir._renderableVersion);
      if (nc) {
        const Bc = (Bc, nc) => {
          Bc && (nc || cB._ownsTargets || Bc._eager) && (0, Vc.g)(Bc, cB.engine)
        };
        Bc(sc), sc._descriptor.samples > 1 && Bc(uc.rst), Bc(uc.depth, !0)
      }
      const {
        _opaqueBindings: qB,
        _directBindings: Oc,
        _transparentBindings: Tc
      } = Pc;
      try {
        for (const nc of Bc) {
          const Bc = nc.bind(cB.engine, cB._targetSignature);
          Pc._batchState = cB._targetSignature._collectBatches?.(Pc._batchState, Bc), nc.isTransparent || nc._transmissive ? Tc.push(Bc) : nc._direct ? Oc.push(Bc) : qB.push(Bc)
        }
        qB.sort(bB), Oc.sort(bB), nc && Cc(cB, cB.engine, !1)
      } catch (fc) {
        throw Pc._batchState?._release(void 0, rB ?? [Mc]), fc
      }
      return nc && (! function(cB, Bc) {
        const nc = cB._config,
          Vc = cB._colorAttachment;
        Vc.view = Bc._colorView, cB._renderPassDescriptor.colorAttachments = Bc._colorView ? [Vc] : [];
        const Ic = nc.depth ?? Bc,
          rB = Ic._depthView;
        let uc;
        if (rB) {
          const cB = Ic._descriptor,
            Bc = (nc.depth ? Ic._eager : !1 === nc.depthClear) ? "load" : "clear";
          uc = {
            view: rB,
            depthClearValue: cB.depthClearValue ?? 0,
            depthLoadOp: Bc,
            depthStoreOp: "store"
          }, cB.dFormat?.includes("stencil") && (uc.stencilClearValue = 0, uc.stencilLoadOp = Bc, uc.stencilStoreOp = "store")
        }
        cB._renderPassDescriptor.depthStencilAttachment = uc
      }(cB, sc), cB._updateContext.targetWidth = sc._width, cB._updateContext.targetHeight = sc._height), Ic && (Object.assign(cB, Pc), Mc?._release(cB.engine, [Pc._batchState])), Pc
    }

    function Qc(cB, Bc) {
      const nc = cB.engine,
        Vc = cB._config,
        rB = Vc.rt,
        uc = cB.Ir,
        sc = cB._opaqueBindings,
        Mc = cB._ob,
        Pc = cB._sceneBG;
      if (function(cB, Bc, nc, Vc) {
          const Ic = Bc?.viewport;
          if (!Ic) return;
          const rB = Math.floor(Ic.x * nc),
            uc = Math.floor((1 - Ic.y - Ic.height) * Vc),
            sc = Math.ceil((Ic.x + Ic.width) * nc) - rB,
            Mc = Math.ceil((1 - Ic.y) * Vc) - uc;
          cB.setViewport(rB, uc, sc, Mc, 0, 1), cB.setScissorRect(rB, uc, sc, Mc)
        }(Bc, Vc.cam ?? uc.camera, rB._width, rB._height), Bc.setBindGroup(0, Pc), cB._lastVis !== Ic.d || !Mc.length) {
        const Bc = rB._descriptor,
          Vc = nc._device.createRenderBundleEncoder({
            colorFormats: Bc.format ? [Bc.format] : [],
            depthStencilFormat: cB._targetSignature._depthStencilFormat,
            sampleCount: Bc.samples
          });
        Vc.setBindGroup(0, Pc), Dc(Vc, sc, nc), Mc[0] = Vc.finish(), cB._lastVis = Ic.d
      }
      let qB = sc.length;
      return Bc.executeBundles(Mc), Bc.setBindGroup(0, Pc), qB += Dc(Bc, cB._directBindings, nc), qB += Dc(Bc, cB._transparentBindings, nc), qB
    }

    function Cc(cB, Bc) {
      let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Vc = aB(Bc, cB.Ir)._buffer;
      if (Vc === cB._lightsUBO) return;
      const Ic = Bc._device.createBindGroup({
        layout: ec(Bc),
        entries: [{
          binding: 0,
          resource: {
            buffer: cB._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: Vc
          }
        }]
      });
      cB._lightsUBO = Vc, cB._sceneBG = Ic, nc && (cB._ob = [])
    }

    function vB(cB, Bc) {
      for (const nc of cB) nc.update?.(Bc)
    }

    function Dc(cB, Bc, nc) {
      let Vc = null,
        Ic = 0;
      for (const rB of Bc) {
        const Bc = rB.renderable.mesh;
        Bc && !1 === Bc.visible || (rB.pipeline !== Vc && (cB.setPipeline(rB.pipeline), Vc = rB.pipeline), Ic += rB.draw(cB, nc))
      }
      return Ic
    }

    function Nc(cB) {
      const Bc = cB._materialSwapQueue;
      if (!Bc[0] || cB._runtimeBuilds?.w) return;
      let Vc, Ic, rB;
      const uc = cB._renderables;
      for (const nc of Bc) {
        const Bc = nc.material;
        if (!Bc) continue;
        const sc = nc._runtimeThinBuild;
        if (sc) {
          Ic = sc(cB, nc, Ic);
          continue
        }
        const Mc = cB._groups.get(Bc._buildGroup),
          Pc = Mc?.r;
        if (!Pc) {
          (rB ??= []).push(nc);
          continue
        }
        if (Mc._w?.(nc)) {
          (rB ??= []).push([nc, Bc]);
          continue
        }
        const qB = cB._meshDisposables.get(nc);
        qB && (cB._meshDisposables.delete(nc), (0, fc.d)(cB.surface.engine, (() => qB.forEach((cB => cB())))));
        const Oc = Mc.o;
        let Tc;
        for (let cB = uc.length; cB--;) uc[cB].mesh === nc && (Tc = uc.splice(cB, 1)[0]);
        Bc._csmGen = -~Bc._csmGen;
        const mB = Pc(cB, nc);
        if (Oc) {
          const cB = Oc.indexOf(Tc);
          cB < 0 ? Oc.push(mB) : Oc[cB] = mB
        }
        Vc = uc.push(mB)
      }
      if (Vc && (uc.sort(((cB, Bc) => cB.order - Bc.order)), cB._renderableVersion++, cB._materialEpoch++), Bc.length = 0, !rB) return Ic;
      const sc = rB;
      return nc.e(340).then((() => nc(59200))).then((Bc => {
        let {
          C: nc
        } = Bc;
        return nc(cB, sc, Ic)
      }), (Bc => {
        const nc = cB._runtimeBuilds;
        nc ? nc._x(Bc) : console.error(Bc)
      }))
    }
    var Ec = null;

    function oc(cB, Bc) {
      const nc = cB.engine,
        Ic = {
          _kind: "Ir",
          surface: cB,
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
            nc.useFloatingOrigin && Ic.camera && !Ic.camera._useFloatingOrigin && (Ic.camera._useFloatingOrigin = !0, Ic.camera._viewVer = -1, Ic.camera._vpVer = -1);
            const cB = Ic.fixedDeltaMs > 0 ? Ic.fixedDeltaMs : nc._currentDelta,
              Bc = nc._currentEncoder;
            let Vc = 0;
            for (const nc of Ic._beforeRender) nc(cB);
            Ic._materialSwapQueue.length && Nc(Ic);
            for (const rB of Ic._prePasses) Vc += rB.execute(Bc, nc);
            for (const rB of Ic._uniformUpdaters) rB.update(nc);
            Ic._drawCallsPre = Vc
          },
          _record: () => Ic._frameGraph.execute(),
          _resize() {
            Ic._frameGraph.build()
          }
        },
        uc = function() {
          const cB = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let Bc = 0; Bc < cB._tasks.length; Bc++) rB(cB, cB._tasks[Bc]);
              for (const Bc of cB._tasks)
                for (const cB of Bc._passes) cB._initialize()
            },
            execute() {
              let Bc = 0;
              for (const nc of cB._tasks)
                if (!1 !== nc.executionEnabled)
                  if (nc.execute) Bc += nc.execute();
                  else
                    for (const cB of nc._passes) Bc += cB._execute();
              return Bc
            },
            dispose() {
              for (const Bc of cB._tasks) Bc.dispose();
              cB._tasks.length = 0, cB._currentProcessedTask = null
            }
          };
          return cB
        }();
      if (Ic._frameGraph = uc, !1 !== Bc?.defaultRenderTask) {
        const Bc = cB.msaaSamples > 1,
          rB = Bc ? (0, Vc.d)({
            lbl: "scene-color",
            format: cB.format,
            dFormat: "depth24plus-stencil8",
            samples: cB.msaaSamples,
            size: cB
          }) : cB.scRT,
          sc = Bc ? void 0 : (0, Vc.d)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: cB
          });
        ! function(cB, Bc) {
          cB._tasks.push(Bc)
        }(uc, gB({
          name: "Ir",
          rt: rB,
          rst: Bc ? cB.scRT : void 0,
          depth: sc
        }, nc, Ic))
      }
      return Ic._disposables.push((() => uc.dispose())), Ic
    }
    async function Wc(cB) {
      const Bc = cB;
      for (Bc._built || (Bc._materialSwapQueue.length = 0); Bc._deferredBuilders.length;) {
        const cB = Bc._deferredBuilders.splice(0);
        await Promise.all(cB.map((cB => cB())))
      }
      await Nc(Bc), Ec?.get(Bc)?.() || (Bc._runtimeBuilds?._e(), Bc._renderableVersion++, Bc._built = !0), await (Bc._rebuildHook?.(Bc))
    }
    var wc = null;
    async function kB(cB) {
      const Bc = cB,
        Vc = Bc.surface;
      (0, Ic.h)(Vc, Bc) || (await Wc(cB), Bc._renderables.sort(Xc), await Promise.all(Bc._frameGraph._tasks.map((cB => cB._preload?.()))), wc && await wc(Bc), Bc._frameGraph.build(), Vc._renderingContexts[0] && (await nc.e(338).then((() => nc(59190)))).configureSwapchainOverlayScene(Vc, Bc), Ec?.get(Bc)?.() || (0, Ic.l)(Vc, Bc))
    }
    var Xc = (cB, Bc) => cB.order - Bc.order
  },
  39648: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Pc,
      h: () => qB
    });
    var Vc = nc(39599),
      Ic = nc(39607),
      rB = nc(39613),
      uc = nc(39621),
      sc = nc(39629),
      Mc = nc(39638);

    function Pc(cB, Bc, nc) {
      let sc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (Bc < 1 || nc < 1) && (0, Vc.d)(676, Bc, nc);
      const Pc = cB._device,
        qB = sc.mipMaps ?? !1,
        Oc = sc.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Tc = qB ? (0, Mc.d)(Bc, nc) : 1,
        fc = Pc.createTexture({
          size: {
            width: Bc,
            height: nc
          },
          format: Oc,
          mipLevelCount: Tc,
          usage: Ic.i.TEXTURE_BINDING | Ic.i.COPY_DST | Ic.i.RENDER_ATTACHMENT
        }),
        mB = {
          addressModeU: sc.addressModeU ?? "clamp-to-edge",
          addressModeV: sc.addressModeV ?? "clamp-to-edge",
          minFilter: sc.minFilter ?? "linear",
          magFilter: sc.magFilter ?? "linear",
          mipmapFilter: qB ? "linear" : "nearest"
        },
        ec = (0, uc.c)(cB, mB),
        tB = {
          texture: fc,
          view: fc.createView(),
          sampler: ec,
          width: Bc,
          height: nc
        };
      return (0, rB.c)(tB), cB._dlr && cB._dlr.t(tB, {
        kind: "dynamic",
        width: Bc,
        height: nc,
        format: Oc,
        levels: Tc,
        samplerDesc: mB,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), tB
    }

    function qB(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Ic = Vc.invertY ?? !0,
        rB = Vc.premultiplyAlpha ?? !1;
      cB._device.queue.copyExternalImageToTexture({
        source: nc,
        flipY: Ic
      }, {
        texture: Bc.texture,
        premultipliedAlpha: rB
      }, [Bc.width, Bc.height]);
      const uc = Bc._recoverySource;
      uc && "dynamic" === uc.kind && (uc.source = nc, uc.flipY = Ic, uc.premultipliedAlpha = rB), Bc.texture.mipLevelCount > 1 && (0, sc.generateMipmaps)(cB, Bc.texture)
    }
  },
  39646: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Mc
    });
    var Vc = nc(39599),
      Ic = nc(39607),
      rB = nc(39613),
      uc = nc(39621),
      sc = nc(39638);
    async function Mc(cB, Bc) {
      let Mc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [Pc, qB] = function(cB) {
        const Bc = cB,
          nc = [
            [Bc.displayWidth, Bc.displayHeight],
            [Bc.videoWidth, Bc.videoHeight],
            [Bc.naturalWidth, Bc.naturalHeight],
            [Bc.width, Bc.height]
          ];
        for (const [Vc, Ic] of nc)
          if (void 0 !== Vc && void 0 !== Ic && Number.isInteger(Vc) && Number.isInteger(Ic) && Vc > 0 && Ic > 0) return [Vc, Ic];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(Bc), [Oc, Tc] = function(cB, Bc, nc) {
        if (void 0 === nc) return [cB, Bc];
        if (!Number.isInteger(nc) || nc < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${nc})`);
        if (Math.max(cB, Bc) <= nc) return [cB, Bc];
        const Vc = nc / Math.max(cB, Bc);
        return cB >= Bc ? [nc, Math.max(1, Math.round(Bc * Vc))] : [Math.max(1, Math.round(cB * Vc)), nc]
      }(Pc, qB, Mc.maxDimension), fc = Mc.mipMaps ?? !0, mB = Mc.premultiplyAlpha ?? !1;
      let ec = Bc,
        tB = null;
      const Sc = {
        texture: null
      };
      try {
        Oc === Pc && Tc === qB || (tB = await createImageBitmap(Bc, {
          resizeWidth: Oc,
          resizeHeight: Tc,
          resizeQuality: "high",
          premultiplyAlpha: mB ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), ec = tB);
        const yB = cB._device,
          zB = Mc.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          pc = fc ? (0, sc.d)(Oc, Tc) : 1,
          hc = pc > 1 ? (await Promise.resolve().then((() => nc(39629)))).generateMipmaps : null,
          aB = {
            addressModeU: Mc.addressModeU ?? "repeat",
            addressModeV: Mc.addressModeV ?? "repeat",
            minFilter: Mc.minFilter ?? "linear",
            magFilter: Mc.magFilter ?? "linear",
            mipmapFilter: fc ? "linear" : "nearest"
          };
        aB.maxAnisotropy = "linear" === aB.minFilter && "linear" === aB.magFilter && "linear" === aB.mipmapFilter ? 4 : 1;
        const lc = Mc.invertY ?? !0,
          Yc = async Bc => {
            let nc;
            yB.pushErrorScope("validation"), yB.pushErrorScope("out-of-memory");
            let rB = null;
            try {
              const nc = Sc.texture = yB.createTexture({
                size: {
                  width: Oc,
                  height: Tc
                },
                format: zB,
                mipLevelCount: pc,
                usage: Ic.i.TEXTURE_BINDING | Ic.i.COPY_DST | Ic.i.RENDER_ATTACHMENT
              });
              yB.queue.copyExternalImageToTexture({
                source: Bc,
                flipY: lc
              }, {
                texture: nc,
                premultipliedAlpha: mB
              }, {
                width: Oc,
                height: Tc
              }), hc && hc(cB, nc), rB = (0, uc.c)(cB, aB)
            } catch (fc) {
              nc = fc
            }
            const [sc, Mc] = await Promise.all([yB.popErrorScope(), yB.popErrorScope()]);
            if (nc) throw nc;
            const Pc = Mc ?? sc;
            if (Pc) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${Pc.message}`, {
              cause: Pc
            });
            const qB = Sc.texture;
            return qB && rB || (0, Vc.d)(677), {
              texture: qB,
              view: qB.createView(),
              sampler: rB,
              width: Oc,
              height: Tc
            }
          }, Lc = await (cB._dlr?.x(ec, Oc, Tc, zB, pc, aB, lc, mB, Yc)) ?? await Yc(ec);
        return (0, rB.c)(Lc), Lc
      } catch (yB) {
        throw Sc.texture?.destroy(), yB
      } finally {
        tB?.close()
      }
    }
  },
  39629: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      generateMipmaps: () => fc,
      recordMipmaps: () => mB
    });
    var Vc = nc(39607),
      Ic = nc(39621),
      rB = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var uc = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      sc = null,
      Mc = null,
      Pc = null,
      qB = null,
      Oc = null;

    function Tc(cB) {
      const Bc = cB._device;
      Bc !== Oc && (sc?.clear(), sc = null, Mc = null, Pc = null, qB = null, Oc = null, Oc = Bc), Mc ??= Bc.createShaderModule({
        code: uc
      }), Pc ??= function(cB) {
        return (0, Ic.c)(cB, rB)
      }(cB), qB ??= Bc.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: Vc.f.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: Vc.f.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function fc(cB, Bc, nc) {
      const Vc = cB._device,
        Ic = Vc.createCommandEncoder();
      mB(cB, Bc, Ic, nc), Vc.queue.submit([Ic.finish()])
    }

    function mB(cB, Bc, nc, Vc) {
      if (Bc.mipLevelCount <= 1) return;
      const Ic = cB._device,
        rB = function(cB, Bc) {
          const nc = cB._device;
          Tc(cB), sc ??= new Map;
          let Vc = sc.get(Bc);
          return Vc || (Vc = nc.createRenderPipeline({
            layout: nc.createPipelineLayout({
              bindGroupLayouts: [qB]
            }),
            vertex: {
              module: Mc,
              entryPoint: "vs"
            },
            fragment: {
              module: Mc,
              entryPoint: "fs",
              targets: [{
                format: Bc
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), sc.set(Bc, Vc)), Vc
        }(cB, Bc.format),
        uc = null != Vc ? {
          dimension: "2d",
          baseArrayLayer: Vc,
          arrayLayerCount: 1
        } : {};
      for (let sc = 1; sc < Bc.mipLevelCount; sc++) {
        const cB = Bc.createView({
            baseMipLevel: sc - 1,
            mipLevelCount: 1,
            ...uc
          }),
          Vc = Bc.createView({
            baseMipLevel: sc,
            mipLevelCount: 1,
            ...uc
          }),
          Mc = Ic.createBindGroup({
            layout: qB,
            entries: [{
              binding: 0,
              resource: cB
            }, {
              binding: 1,
              resource: Pc
            }]
          }),
          Oc = nc.beginRenderPass({
            colorAttachments: [{
              view: Vc,
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
        Oc.setPipeline(rB), Oc.setBindGroup(0, Mc), Oc.draw(3), Oc.end()
      }
    }
  },
  39638: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      return Math.floor(Math.log2(Math.max(cB, Bc))) + 1
    }
    nc.d(Bc, {
      d: () => Vc
    })
  },
  39592: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Pc,
      e: () => qB
    });
    var Vc = nc(39599),
      Ic = nc(39607),
      rB = nc(39613),
      uc = nc(39621),
      sc = nc(39629),
      Mc = nc(39638);

    function Pc(cB, Bc, nc, sc) {
      let Pc = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Bc < 1 || nc < 1 || sc < 1) && (0, Vc.d)(722, Bc, nc, sc);
      const qB = cB._device,
        Oc = Pc.mipMaps ?? !0,
        Tc = Pc.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        fc = qB.createTexture({
          size: {
            width: Bc,
            height: nc,
            depthOrArrayLayers: sc
          },
          dimension: "2d",
          format: Tc,
          mipLevelCount: Oc ? (0, Mc.d)(Bc, nc) : 1,
          usage: Ic.i.TEXTURE_BINDING | Ic.i.COPY_DST | Ic.i.RENDER_ATTACHMENT
        }),
        mB = (0, uc.c)(cB, {
          addressModeU: Pc.addressModeU ?? "repeat",
          addressModeV: Pc.addressModeV ?? "repeat",
          minFilter: Pc.minFilter ?? "linear",
          magFilter: Pc.magFilter ?? "linear",
          mipmapFilter: Oc ? "linear" : "nearest"
        }),
        ec = {
          texture: fc,
          view: fc.createView({
            dimension: "2d-array"
          }),
          sampler: mB,
          width: Bc,
          height: nc,
          layers: sc
        };
      return (0, rB.c)(ec), ec
    }

    function qB(cB, Bc, nc, Ic) {
      let rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (nc < 0 || nc >= Bc.layers || (0 | nc) !== nc) && (0, Vc.d)(723, Bc.layers, nc);
      const uc = rB.invertY ?? !0,
        Mc = rB.premultiplyAlpha ?? !1;
      cB._device.queue.copyExternalImageToTexture({
        source: Ic,
        flipY: uc
      }, {
        texture: Bc.texture,
        origin: [0, 0, nc],
        premultipliedAlpha: Mc
      }, [Bc.width, Bc.height, 1]), Bc.texture.mipLevelCount > 1 && (0, sc.generateMipmaps)(cB, Bc.texture, nc)
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);