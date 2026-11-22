export const id = 303;
export const ids = [303];
export const modules = {
  41291: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => xk,
      d: () => lk,
      f: () => nk,
      h: () => Uk,
      k: () => yk,
      o: () => pk
    });
    var Dk = ik(41223);
    var fk = "Babylon Lite v1.32.0",
      Sk = ik(41297);

    function bk(kk) {
      return "clientWidth" in kk
    }
    var rk = 1;

    function Pk(kk, ek, ik) {
      const Pk = ek.getContext("webgpu");
      Pk || (0, Dk.c)(54), bk(ek) && ek.setAttribute("data-engine", fk);
      const mk = ik?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        Mk = ik?.srgb ? (Kk = mk).endsWith("-srgb") ? Kk : `${Kk}-srgb` : mk;
      var Kk;
      const xk = ik?.alphaMode ?? "opaque";
      Pk.configure({
        device: kk._device,
        format: mk,
        alphaMode: xk,
        viewFormats: [Mk]
      });
      const nk = 1 === ik?.msaaSamples ? 1 : 4,
        Uk = (0, Sk.e)({
          lbl: "swapchain",
          format: Mk,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return Uk._eager = !0, {
        engine: kk,
        canvas: ek,
        format: Mk,
        msaaSamples: nk,
        scRT: Uk,
        maxDevicePixelRatio: ik?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: rk++,
        _context: Pk,
        _configureFormat: mk,
        _alphaMode: xk,
        _renderingContexts: []
      }
    }

    function mk(kk) {
      const ek = kk._context.getCurrentTexture(),
        ik = kk.scRT;
      ik._colorTexture = ek, ik._colorView = ek.createView({
        format: kk.format
      }), ik._width = ek.width, ik._height = ek.height
    }

    function Mk(kk) {
      const ek = kk.canvas;
      if (!bk(ek)) return;
      const ik = kk._w ?? ek.clientWidth,
        Dk = kk._h ?? ek.clientHeight;
      if (!(ik > 0 && Dk > 0)) return;
      const fk = Math.min(globalThis.devicePixelRatio || 1, kk.maxDevicePixelRatio);
      Kk(kk, ik * fk | 0, Dk * fk | 0)
    }

    function Kk(kk, ek, ik) {
      const Dk = kk.canvas,
        fk = 0 | ek,
        Sk = 0 | ik;
      if (fk > 0 && Sk > 0 && (fk !== Dk.width || Sk !== Dk.height)) {
        Dk.width = fk, Dk.height = Sk, kk.scRT._width = fk, kk.scRT._height = Sk;
        for (const ek of kk._renderingContexts) ek._resize?.()
      }
    }
    var xk = 0;

    function nk(kk, ek) {
      return -1 !== kk._renderingContexts.indexOf(ek)
    }

    function Uk(kk, ek) {
      return -1 === kk._renderingContexts.indexOf(ek) && (kk._renderingContexts.push(ek), !0)
    }
    var Hk = null;
    var wk = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function lk(kk, ek) {
      const Sk = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...Hk ? Hk() : {}
      });
      Sk || (0, Dk.c)(47);
      const bk = Hk?.deviceFeatures?.(Sk, ek) ?? function(kk) {
          return wk.filter((ek => kk.features.has(ek)))
        }(Sk),
        rk = await Sk.requestDevice({
          requiredFeatures: bk,
          requiredLimits: ek?.requiredLimits
        });
      console.log(`${fk} - WebGPU engine`);
      const Kk = !!ek?.useHighPrecisionMatrix,
        xk = !!ek?.useFloatingOrigin;
      if (xk && !Kk && (0, Dk.c)(48), Kk) {
        const {
          allocateF64Mat4: kk
        } = await ik.e(356).then((() => ik(60748)));
        0
      }
      let nk, Uk, lk, pk;
      if (xk) {
        const [{
          wrapRenderableForFO: kk,
          lightFoVersion: ek,
          applyLightFoOffset: Dk
        }, {
          makePackMeshWorld: fk
        }] = await Promise.all([ik.e(357).then((() => ik(60752))), ik.e(358).then((() => ik(60760)))]);
        nk = kk, Uk = fk, lk = ek, pk = Dk
      }
      const yk = {
          _device: rk
        },
        Yk = [yk];
      return Object.assign(yk, {
        engine: yk,
        surfaces: Yk,
        _surfaces: Yk,
        _device: rk,
        _options: ek,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: Kk,
        useFloatingOrigin: xk,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: nk,
        _makePackMeshWorld: Uk,
        _lightFoVersion: lk,
        _applyLightFoOffset: pk
      }, Pk(yk, kk, ek)), Mk(yk), mk(yk), yk
    }

    function pk(kk, ek, ik) {
      Kk(kk, ek, ik)
    }

    function yk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk.surfaces;
      if (ik !== kk.surfaces)
        for (let fk = ik.length; fk--;) ik[fk].engine !== kk && (0, Dk.c)(49);
      Yk(kk, ek, ik)
    }

    function Yk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk._surfaces,
        Dk = 0;
      for (let Sk = ik.length; Sk--;) Dk += ik[Sk]._renderingContexts.length;
      if (!Dk) return kk.drawCallCount = 0, kk._flushGpuRetirements?.(kk);
      const fk = kk._device.createCommandEncoder({
        label: "frame"
      });
      kk._currentEncoder = fk, kk._currentDelta = ek;
      try {
        kk._gpuTimerBegin?.(fk), Dk = 0;
        for (let kk = 0; kk < ik.length; kk++) {
          const ek = ik[kk];
          ek._capturePreFrame?.(ek), mk(ek);
          const fk = ek._renderingContexts;
          for (let kk = 0; kk < fk.length; kk++) {
            const ek = fk[kk];
            ek._update(), Dk += ek._drawCallsPre + ek._record()
          }
        }
        const ek = kk._currentEncoder;
        for (let kk = 0; kk < ik.length; kk++) {
          const Dk = ik[kk];
          Dk._captureService?.(Dk, ek)
        }
        kk._gpuTimerEnd?.(ek), kk._cbs[0] = ek.finish(), kk._device.queue.submit(kk._cbs), kk._flushGpuRetirements?.(kk), kk.drawCallCount = Dk, kk._gpuTimerResolve?.()
      } finally {
        kk._currentEncoder = void 0
      }
    }
  },
  41232: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk,
      d: () => Sk,
      h: () => Dk
    });
    var Dk = globalThis.GPUTextureUsage,
      fk = globalThis.GPUBufferUsage,
      Sk = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41307: (kk, ek, ik) => {
    function Dk(kk) {
      fk(kk.splice(0))
    }

    function fk(kk) {
      for (const ik of kk) try {
        ik()
      } catch (ek) {
        console.error("GPU resource retirement failed.", ek)
      }
    }

    function Sk(kk, ek) {
      kk._flushGpuRetirements ??= bk, (kk._retirements ??= []).push(ek)
    }

    function bk(kk) {
      const ek = kk._retirements;
      if (!ek) return;
      kk._retirements = null;
      const ik = kk._retiring ??= new Set;
      ik.add(ek), queueMicrotask((() => {
        kk._device.queue.onSubmittedWorkDone().then((() => {
          ik.delete(ek), Dk(ek)
        })).catch((() => {}))
      }))
    }
    ik.d(ek, {
      e: () => Sk
    })
  },
  41297: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk,
      g: () => bk,
      k: () => rk
    });
    var Dk = ik(41232);

    function fk(kk) {
      const ek = kk.size;
      return "canvas" in ek ? ek.canvas : ek
    }

    function Sk(kk) {
      return {
        _descriptor: kk,
        _resolveSize: fk,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function bk(kk, ek) {
      if (kk._eager) return void kk._syncEager?.(ek);
      rk(kk);
      const ik = kk._descriptor,
        {
          width: Sk,
          height: bk
        } = (kk._resolveSize ?? fk)(ik);
      kk._width = Sk, kk._height = bk;
      const Pk = ek._device;
      ik.format && (kk._colorTexture = Pk.createTexture({
        label: ik.lbl,
        size: {
          width: Sk,
          height: bk
        },
        format: ik.format,
        sampleCount: ik.samples,
        usage: Dk.h.RENDER_ATTACHMENT | Dk.h.TEXTURE_BINDING | Dk.h.COPY_SRC | Dk.h.COPY_DST
      }), kk._colorView = kk._colorTexture.createView()), ik.dFormat && (kk._depthTexture = Pk.createTexture({
        label: ik.lbl,
        size: {
          width: Sk,
          height: bk
        },
        format: ik.dFormat,
        sampleCount: ik.samples,
        usage: Dk.h.RENDER_ATTACHMENT | Dk.h.TEXTURE_BINDING
      }), kk._depthView = kk._depthTexture.createView())
    }

    function rk(kk) {
      if (!kk || kk._eager && !kk._disposeAttachments) return;
      const ek = kk._colorTexture,
        ik = kk._depthTexture;
      if (kk._colorTexture = kk._depthTexture = null, kk._colorView = kk._depthView = null, kk._width = kk._height = 0, kk._disposeAttachments) kk._disposeAttachments(ek, ik);
      else try {
        ek?.destroy()
      } finally {
        !1 !== kk._ownsDepthTexture && ik?.destroy()
      }
    }
  },
  41305: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk,
      h: () => fk,
      j: () => Sk
    });
    var Dk = Float32Array,
      fk = Float64Array,
      Sk = Uint32Array
  },
  41309: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    var Dk = 16
  },
  41223: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk
    });
    var Dk = null;

    function fk(kk) {
      for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), fk = 1; fk < ek; fk++) ik[fk - 1] = arguments[fk];
      const Sk = new Error(Dk?.(kk, ik) ?? `#${kk}`);
      throw Sk.lite = ik, Sk
    }
  },
  41266: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk
    });
    var Dk = ik(41245);

    function fk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ik = ek.compare,
        fk = ek.lodMinClamp ?? 0,
        Sk = ek.lodMaxClamp ?? 32,
        bk = void 0 !== ik || 0 !== fk || 32 !== Sk ? `${ik??""}:${fk}:${Sk}` : "";
      return (0, Dk.c)(kk, ek, bk)
    }
  },
  41238: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk
    });
    var Dk = null;

    function fk(kk) {
      const ek = Dk ??= new WeakMap;
      ek.set(kk, (ek.get(kk) ?? 0) + 1)
    }

    function Sk(kk) {
      fk(kk.texture)
    }
  },
  41245: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk
    });
    var Dk = null,
      fk = "nearest",
      Sk = "clamp-to-edge",
      bk = {
        minFilter: fk,
        magFilter: fk,
        mipmapFilter: fk,
        addressModeU: Sk,
        addressModeV: Sk,
        addressModeW: Sk,
        maxAnisotropy: 1
      };

    function rk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const fk = kk._device,
        Sk = Dk ??= new WeakMap;
      let rk = Sk.get(fk);
      rk || Sk.set(fk, rk = new Map);
      let Pk = ik;
      for (const Dk in bk) {
        const kk = Dk;
        Pk += `:${ek[kk]??bk[kk]}`
      }
      let mk = rk.get(Pk);
      return mk || rk.set(Pk, mk = fk.createSampler(ek)), mk
    }
  },
  41302: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => hk,
      e: () => tk
    });
    var Dk = ik(41297),
      fk = ik(41291);

    function Sk(kk, ek) {
      ek._passes.length = 0, kk._currentProcessedTask = ek;
      try {
        ek.record()
      } finally {
        kk._currentProcessedTask = null
      }
    }
    var bk = ik(41305);

    function rk(kk) {
      const ek = kk.worldMatrixVersion;
      if (kk._viewVer === ek) return kk._viewCache;
      const ik = kk._viewCache,
        Dk = kk.worldMatrix,
        fk = kk._useFloatingOrigin,
        Sk = fk ? 0 : Dk[12],
        bk = fk ? 0 : Dk[13],
        rk = fk ? 0 : Dk[14];
      return ik[0] = Dk[0], ik[1] = Dk[4], ik[2] = Dk[8], ik[3] = 0, ik[4] = Dk[1], ik[5] = Dk[5], ik[6] = Dk[9], ik[7] = 0, ik[8] = Dk[2], ik[9] = Dk[6], ik[10] = Dk[10], ik[11] = 0, ik[12] = -(Dk[0] * Sk + Dk[1] * bk + Dk[2] * rk), ik[13] = -(Dk[4] * Sk + Dk[5] * bk + Dk[6] * rk), ik[14] = -(Dk[8] * Sk + Dk[9] * bk + Dk[10] * rk), ik[15] = 1, kk._viewVer = ek, ik
    }
    var Pk = null;

    function mk(kk) {
      return kk._projFov === kk.fov && kk._projNear === kk.nearPlane && kk._projFar === kk.farPlane || (kk._projFov = kk.fov, kk._projNear = kk.nearPlane, kk._projFar = kk.farPlane, kk._projRev = (kk._projRev ?? 0) + 1), kk.worldMatrixVersion + (kk._projRev ?? 0)
    }

    function Mk(kk, ek) {
      const ik = mk(kk);
      if (kk._projVer === ik && kk._projAspect === ek) return kk._projCache;
      const Dk = kk._projCache;
      return null !== Pk && kk.ortho ? Pk(kk, ek, Dk) : function(kk, ek, ik, Dk, fk) {
        const Sk = 1 / Math.tan(.5 * ek),
          bk = fk - Dk;
        kk[0] = Sk / ik, kk[5] = Sk, kk[10] = -Dk / bk, kk[11] = 1, kk[14] = fk * Dk / bk
      }(Dk, kk.fov, ek, kk.nearPlane, kk.farPlane), kk._projVer = ik, kk._projAspect = ek, Dk
    }
    var Kk = ik(41232);

    function xk(kk, ek, ik) {
      return kk._device.createBuffer({
        label: ik,
        size: (Dk = ek, fk = 16, Math.ceil(Dk / fk) * fk),
        usage: Kk.b.UNIFORM | Kk.b.COPY_DST
      });
      var Dk, fk
    }
    var nk = ik(41307),
      Uk = null;

    function Hk(kk) {
      const ek = kk._device,
        ik = Uk ??= new WeakMap;
      let Dk = ik.get(ek);
      return Dk || (Dk = ek.createBindGroupLayout({
        label: "bw",
        entries: [{
          binding: 0,
          visibility: Kk.d.VERTEX | Kk.d.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: Kk.d.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), ik.set(ek, Dk)), Dk
    }

    function wk(kk, ek, ik) {
      const Dk = kk._device,
        fk = xk(kk, ek.byteLength, ik);
      try {
        Dk.queue.writeBuffer(fk, 0, ek.buffer, ek.byteOffset, ek.byteLength)
      } catch (Sk) {
        throw fk.destroy(), Sk
      }
      return fk
    }
    var lk = ik(41309),
      pk = new bk.j(1),
      yk = new bk.e(pk.buffer);

    function Yk(kk) {
      let ek = 0;
      for (const ik of kk) ek += ik._lightVersion ?? 0;
      return ek
    }

    function Lk(kk, ek) {
      kk.fill(0);
      let ik = 0;
      for (const Dk of ek) {
        if (ik >= lk.b) break;
        Dk._writeLightUbo && (Dk._writeLightUbo(kk, 4 + 16 * ik), ik++)
      }
      pk[0] = ik, kk[0] = yk[0]
    }

    function Ck(kk, ek) {
      let ik = ek._lightGpuState;
      const Dk = 16 + 16 * lk.b * 4;
      if (ik && ik._byteSize === Dk) return ik;
      const fk = !ik;
      ik?._buffer.destroy();
      const Sk = new bk.e(Dk / 4);
      return Lk(Sk, ek.lights), kk._applyLightFoOffset?.(Sk, ek), ik = {
        _buffer: wk(kk, Sk),
        _scratch: Sk,
        iW: Yk(ek.lights) + (kk._lightFoVersion?.(ek) ?? 0),
        _listVersion: ek._lightListVersion ?? 0,
        _lightCount: ek.lights.length,
        _byteSize: Dk
      }, ek._lightGpuState = ik, fk && ek._disposables.push((() => {
        ek._lightGpuState?._buffer.destroy(), ek._lightGpuState = void 0
      })), ik
    }

    function Ak(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const fk = ek;
      if (0 === Dk && 16 === fk.length) return void kk.set(fk, ik);
      const Sk = Dk,
        bk = ik;
      kk[bk + 0] = fk[Sk + 0], kk[bk + 1] = fk[Sk + 1], kk[bk + 2] = fk[Sk + 2], kk[bk + 3] = fk[Sk + 3], kk[bk + 4] = fk[Sk + 4], kk[bk + 5] = fk[Sk + 5], kk[bk + 6] = fk[Sk + 6], kk[bk + 7] = fk[Sk + 7], kk[bk + 8] = fk[Sk + 8], kk[bk + 9] = fk[Sk + 9], kk[bk + 10] = fk[Sk + 10], kk[bk + 11] = fk[Sk + 11], kk[bk + 12] = fk[Sk + 12], kk[bk + 13] = fk[Sk + 13], kk[bk + 14] = fk[Sk + 14], kk[bk + 15] = fk[Sk + 15]
    }

    function jk(kk, ek, ik, Dk, fk) {
      kk.fill(0);
      const Sk = function(kk, ek) {
          const ik = mk(kk);
          if (kk._vpVer === ik && kk._vpAspect === ek) return kk._vpCache;
          const Dk = kk._vpCache;
          return function(kk, ek, ik, Dk, fk, Sk) {
            const bk = ik[Dk],
              rk = ik[Dk + 1],
              Pk = ik[Dk + 2],
              mk = ik[Dk + 3],
              Mk = ik[Dk + 4],
              Kk = ik[Dk + 5],
              xk = ik[Dk + 6],
              nk = ik[Dk + 7],
              Uk = ik[Dk + 8],
              Hk = ik[Dk + 9],
              wk = ik[Dk + 10],
              lk = ik[Dk + 11],
              pk = ik[Dk + 12],
              yk = ik[Dk + 13],
              Yk = ik[Dk + 14],
              Lk = ik[Dk + 15];
            let Ck = fk[Sk],
              Ak = fk[Sk + 1],
              jk = fk[Sk + 2],
              sk = fk[Sk + 3];
            kk[ek] = bk * Ck + Mk * Ak + Uk * jk + pk * sk, kk[ek + 1] = rk * Ck + Kk * Ak + Hk * jk + yk * sk, kk[ek + 2] = Pk * Ck + xk * Ak + wk * jk + Yk * sk, kk[ek + 3] = mk * Ck + nk * Ak + lk * jk + Lk * sk, Ck = fk[Sk + 4], Ak = fk[Sk + 5], jk = fk[Sk + 6], sk = fk[Sk + 7], kk[ek + 4] = bk * Ck + Mk * Ak + Uk * jk + pk * sk, kk[ek + 5] = rk * Ck + Kk * Ak + Hk * jk + yk * sk, kk[ek + 6] = Pk * Ck + xk * Ak + wk * jk + Yk * sk, kk[ek + 7] = mk * Ck + nk * Ak + lk * jk + Lk * sk, Ck = fk[Sk + 8], Ak = fk[Sk + 9], jk = fk[Sk + 10], sk = fk[Sk + 11], kk[ek + 8] = bk * Ck + Mk * Ak + Uk * jk + pk * sk, kk[ek + 9] = rk * Ck + Kk * Ak + Hk * jk + yk * sk, kk[ek + 10] = Pk * Ck + xk * Ak + wk * jk + Yk * sk, kk[ek + 11] = mk * Ck + nk * Ak + lk * jk + Lk * sk, Ck = fk[Sk + 12], Ak = fk[Sk + 13], jk = fk[Sk + 14], sk = fk[Sk + 15], kk[ek + 12] = bk * Ck + Mk * Ak + Uk * jk + pk * sk, kk[ek + 13] = rk * Ck + Kk * Ak + Hk * jk + yk * sk, kk[ek + 14] = Pk * Ck + xk * Ak + wk * jk + Yk * sk, kk[ek + 15] = mk * Ck + nk * Ak + lk * jk + Lk * sk
          }(Dk, 0, Mk(kk, ek), 0, rk(kk), 0), kk._vpVer = ik, kk._vpAspect = ek, Dk
        }(Dk, fk),
        bk = rk(Dk),
        Pk = Dk.worldMatrix;
      Ak(kk, Sk, 0), Ak(kk, bk, 16), ek.useFloatingOrigin ? (kk[32] = 0, kk[33] = 0, kk[34] = 0) : (kk[32] = Pk[12], kk[33] = Pk[13], kk[34] = Pk[14]), kk[87] = ek.canvas.width;
      const Kk = ik.imageProcessing;
      kk[76] = Kk.exposure, kk[77] = Kk.contrast, kk[78] = ik._envTextures?.lodGenerationScale ?? .8, kk[79] = +Kk.toneMappingEnabled, kk[37] = ek.canvas.height
    }

    function sk(kk, ek) {
      return {
        _renderables: kk,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: ek
      }
    }

    function dk(kk, ek, ik) {
      kk.clr ??= !0;
      const fk = kk.rt._descriptor,
        Sk = kk.depth?._descriptor,
        Pk = {
          _colorFormat: fk.format,
          _depthStencilFormat: Sk?.dFormat ?? fk.dFormat,
          _depthCompare: fk.depthCompare ?? Sk?.depthCompare,
          _sampleCount: fk.samples
        },
        Mk = {
          loadOp: "clear",
          storeOp: "store"
        },
        Kk = {
          ...sk([], -1),
          name: kk.name,
          _config: kk,
          _ownsTargets: !kk.sharedRt,
          engine: ek,
          bw: ik,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [Mk]
          },
          _colorAttachment: Mk,
          _sceneUBO: xk(ek, 368),
          _suData: new bk.e(92),
          _sceneUboCacheKey: [],
          _targetSignature: Pk,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (Kk._disposed) throw new Error("RenderTask has been disposed.");
            Kk._recordExplicit ? Kk._recordExplicit(Kk, !0) : uk(Kk, !1 !== kk.autoMirror ? ik._renderables.slice() : Kk._renderables, !0)
          },
          execute: () => function(kk, ek, ik) {
            if (!1 === kk.enabled) return 0;
            const Dk = kk.bw;
            ! function(kk, ek, ik) {
              const Dk = kk.bw;
              !1 !== kk._config.autoMirror && kk._lastVersion !== Dk._renderableVersion && uk(kk, Dk._renderables.slice());
              Ik(kk, ek);
              const fk = kk._updateContext,
                Sk = kk._config.cam ?? Dk.camera;
              ik._colorFormat && (kk._config._skipClusteredLights || Dk._clusteredLightUpdater?.(Sk, fk.targetWidth, fk.targetHeight), function(kk, ek) {
                const ik = Ck(kk, ek),
                  Dk = Yk(ek.lights) + (kk._lightFoVersion?.(ek) ?? 0),
                  fk = ek._lightListVersion ?? 0;
                Dk === ik.iW && fk === ik._listVersion && ek.lights.length === ik._lightCount || (ik.iW = Dk, ik._listVersion = fk, ik._lightCount = ek.lights.length, Lk(ik._scratch, ek.lights), kk._applyLightFoOffset?.(ik._scratch, ek), kk._device.queue.writeBuffer(ik._buffer, 0, ik._scratch)), ik._buffer
              }(ek, Dk));
              (function(kk, ek, ik, Dk) {
                if (!Dk) return;
                const fk = Dk.viewport,
                  Sk = kk._config.rt,
                  bk = (kk._config.cs ? ek.canvas.width / ek.canvas.height : Sk._width / Sk._height) * (fk ? fk.width / fk.height : 1),
                  rk = ik.fog,
                  Pk = ik.imageProcessing,
                  Mk = mk(Dk),
                  Kk = ik._envTextures,
                  xk = kk._sceneUboCacheKey;
                if (xk[0] === Dk && xk[1] === rk && xk[2] === Mk && xk[3] === bk && xk[4] === Pk.exposure && xk[5] === Pk.contrast && xk[6] === Kk) return;
                xk[0] = Dk, xk[1] = rk, xk[2] = Mk, xk[3] = bk, xk[4] = Pk.exposure, xk[5] = Pk.contrast, xk[6] = Kk;
                const nk = kk._suData;
                jk(nk, ek, ik, Dk, bk);
                const Uk = ik._sceneUboContributors;
                if (Uk)
                  for (const mk of Uk) mk(nk, ik);
                ek._device.queue.writeBuffer(kk._sceneUBO, 0, nk)
              })(kk, ek, Dk, Sk), fk.bR = Sk, kk._batchState?._reset(), zk(kk._opaqueBindings, fk), zk(kk._directBindings, fk), zk(kk._transparentBindings, fk), kk._batchState?._flush(ek),
                function(kk, ek) {
                  const ik = kk._transparentBindings;
                  if (ik.length <= 1 || !ek) return;
                  const Dk = rk(ek);
                  for (const fk of ik) {
                    const kk = fk.renderable._worldCenter;
                    fk._sortDistance = kk ? kk[0] * Dk[2] + kk[1] * Dk[6] + kk[2] * Dk[10] + Dk[14] : 0
                  }
                  ik.sort(Vk)
                }(kk, Sk)
            }(kk, ek, ik);
            const fk = kk._colorAttachment,
              Sk = kk._config;
            Sk.rt._colorView && (Sk.rt === Dk.surface.scRT && (fk.view = Sk.rt._colorView), fk.resolveTarget = Sk.rst?._colorView ?? void 0, fk.clearValue = Sk.clrColor ?? Dk.clearColor, fk.loadOp = Sk.clr ? "clear" : "load");
            if (kk._executeWithTransmission) return kk._executeWithTransmission(ik._sampleCount);
            const bk = ek._currentEncoder.beginRenderPass(kk._renderPassDescriptor),
              Pk = qk(kk, bk);
            return bk.end(), Pk
          }(Kk, ek, Pk),
          dispose() {
            if (Kk._disposed) return;
            Kk._disposed = !0;
            const ek = Kk._pendingMeshes;
            ek && (ek.length = 0);
            for (const kk of Kk._renderables) Kk._retireRenderable?.(Kk.engine, kk);
            Kk._passes.length = Kk._opaqueBindings.length = Kk._directBindings.length = 0, Kk._transparentBindings.length = Kk._renderables.length = Kk._ob.length = 0, Kk._ownsTargets && ((0, Dk.k)(kk.rt), (0, Dk.k)(kk.rst)), kk.depth?._eager || (0, Dk.k)(kk.depth);
            const ik = Kk._sceneUBO;
            (0, nk.e)(Kk.engine, (() => ik.destroy())), Kk._batchState?._release(Kk.engine), Kk._batchState = void 0
          }
        };
      return Kk
    }

    function Vk(kk, ek) {
      return ek._sortDistance - kk._sortDistance || kk.renderable.order - ek.renderable.order
    }

    function Fk(kk, ek) {
      return kk.renderable.order - ek.renderable.order
    }

    function uk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk._renderables,
        ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        fk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        Sk = arguments.length > 4 ? arguments[4] : void 0;
      const bk = kk._config,
        rk = bk.rt,
        Pk = kk._batchState,
        mk = sk(ek, kk.bw._renderableVersion);
      if (ik) {
        const ek = (ek, ik) => {
          ek && (ik || kk._ownsTargets || ek._eager) && (0, Dk.g)(ek, kk.engine)
        };
        ek(rk), rk._descriptor.samples > 1 && ek(bk.rst), ek(bk.depth, !0)
      }
      const {
        _opaqueBindings: Mk,
        _directBindings: Kk,
        _transparentBindings: xk
      } = mk;
      try {
        for (const ik of ek) {
          const ek = ik.bind(kk.engine, kk._targetSignature);
          mk._batchState = kk._targetSignature._collectBatches?.(mk._batchState, ek), ik.isTransparent || ik._transmissive ? xk.push(ek) : ik._direct ? Kk.push(ek) : Mk.push(ek)
        }
        Mk.sort(Fk), Kk.sort(Fk), ik && Ik(kk, kk.engine, !1)
      } catch (nk) {
        throw mk._batchState?._release(void 0, Sk ?? [Pk]), nk
      }
      return ik && (! function(kk, ek) {
        const ik = kk._config,
          Dk = kk._colorAttachment;
        Dk.view = ek._colorView, kk._renderPassDescriptor.colorAttachments = ek._colorView ? [Dk] : [];
        const fk = ik.depth ?? ek,
          Sk = fk._depthView;
        let bk;
        if (Sk) {
          const kk = fk._descriptor,
            ek = (ik.depth ? fk._eager : !1 === ik.depthClear) ? "load" : "clear";
          bk = {
            view: Sk,
            depthClearValue: kk.depthClearValue ?? 0,
            depthLoadOp: ek,
            depthStoreOp: "store"
          }, kk.dFormat?.includes("stencil") && (bk.stencilClearValue = 0, bk.stencilLoadOp = ek, bk.stencilStoreOp = "store")
        }
        kk._renderPassDescriptor.depthStencilAttachment = bk
      }(kk, rk), kk._updateContext.targetWidth = rk._width, kk._updateContext.targetHeight = rk._height), fk && (Object.assign(kk, mk), Pk?._release(kk.engine, [mk._batchState])), mk
    }

    function qk(kk, ek) {
      const ik = kk.engine,
        Dk = kk._config,
        Sk = Dk.rt,
        bk = kk.bw,
        rk = kk._opaqueBindings,
        Pk = kk._ob,
        mk = kk._sceneBG;
      if (function(kk, ek, ik, Dk) {
          const fk = ek?.viewport;
          if (!fk) return;
          const Sk = Math.floor(fk.x * ik),
            bk = Math.floor((1 - fk.y - fk.height) * Dk),
            rk = Math.ceil((fk.x + fk.width) * ik) - Sk,
            Pk = Math.ceil((1 - fk.y) * Dk) - bk;
          kk.setViewport(Sk, bk, rk, Pk, 0, 1), kk.setScissorRect(Sk, bk, rk, Pk)
        }(ek, Dk.cam ?? bk.camera, Sk._width, Sk._height), ek.setBindGroup(0, mk), kk._lastVis !== fk.b || !Pk.length) {
        const ek = Sk._descriptor,
          Dk = ik._device.createRenderBundleEncoder({
            colorFormats: ek.format ? [ek.format] : [],
            depthStencilFormat: kk._targetSignature._depthStencilFormat,
            sampleCount: ek.samples
          });
        Dk.setBindGroup(0, mk), Qk(Dk, rk, ik), Pk[0] = Dk.finish(), kk._lastVis = fk.b
      }
      let Mk = rk.length;
      return ek.executeBundles(Pk), ek.setBindGroup(0, mk), Mk += Qk(ek, kk._directBindings, ik), Mk += Qk(ek, kk._transparentBindings, ik), Mk
    }

    function Ik(kk, ek) {
      let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Dk = Ck(ek, kk.bw)._buffer;
      if (Dk === kk._lightsUBO) return;
      const fk = ek._device.createBindGroup({
        layout: Hk(ek),
        entries: [{
          binding: 0,
          resource: {
            buffer: kk._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: Dk
          }
        }]
      });
      kk._lightsUBO = Dk, kk._sceneBG = fk, ik && (kk._ob = [])
    }

    function zk(kk, ek) {
      for (const ik of kk) ik.update?.(ek)
    }

    function Qk(kk, ek, ik) {
      let Dk = null,
        fk = 0;
      for (const Sk of ek) {
        const ek = Sk.renderable.mesh;
        ek && !1 === ek.visible || (Sk.pipeline !== Dk && (kk.setPipeline(Sk.pipeline), Dk = Sk.pipeline), fk += Sk.draw(kk, ik))
      }
      return fk
    }

    function vk(kk) {
      const ek = kk._materialSwapQueue;
      if (!ek[0] || kk._runtimeBuilds?.w) return;
      let Dk, fk, Sk;
      const bk = kk._renderables;
      for (const ik of ek) {
        const ek = ik.material;
        if (!ek) continue;
        const rk = ik._runtimeThinBuild;
        if (rk) {
          fk = rk(kk, ik, fk);
          continue
        }
        const Pk = kk._groups.get(ek._buildGroup),
          mk = Pk?.r;
        if (!mk) {
          (Sk ??= []).push(ik);
          continue
        }
        if (Pk._w?.(ik)) {
          (Sk ??= []).push([ik, ek]);
          continue
        }
        const Mk = kk._meshDisposables.get(ik);
        Mk && (kk._meshDisposables.delete(ik), (0, nk.e)(kk.surface.engine, (() => Mk.forEach((kk => kk())))));
        const Kk = Pk.o;
        let xk;
        for (let kk = bk.length; kk--;) bk[kk].mesh === ik && (xk = bk.splice(kk, 1)[0]);
        ek._csmGen = -~ek._csmGen;
        const Uk = mk(kk, ik);
        if (Kk) {
          const kk = Kk.indexOf(xk);
          kk < 0 ? Kk.push(Uk) : Kk[kk] = Uk
        }
        Dk = bk.push(Uk)
      }
      if (Dk && (bk.sort(((kk, ek) => kk.order - ek.order)), kk._renderableVersion++, kk._materialEpoch++), ek.length = 0, !Sk) return fk;
      const rk = Sk;
      return ik.e(362).then((() => ik(60780))).then((ek => {
        let {
          C: ik
        } = ek;
        return ik(kk, rk, fk)
      }), (ek => {
        const ik = kk._runtimeBuilds;
        ik ? ik._x(ek) : console.error(ek)
      }))
    }
    var Ek = null;

    function hk(kk, ek) {
      const ik = kk.engine,
        fk = {
          _kind: "bw",
          surface: kk,
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
            ik.useFloatingOrigin && fk.camera && !fk.camera._useFloatingOrigin && (fk.camera._useFloatingOrigin = !0, fk.camera._viewVer = -1, fk.camera._vpVer = -1);
            const kk = fk.fixedDeltaMs > 0 ? fk.fixedDeltaMs : ik._currentDelta,
              ek = ik._currentEncoder;
            let Dk = 0;
            for (const ik of fk._beforeRender) ik(kk);
            fk._materialSwapQueue.length && vk(fk);
            for (const Sk of fk._prePasses) Dk += Sk.execute(ek, ik);
            for (const Sk of fk._uniformUpdaters) Sk.update(ik);
            fk._drawCallsPre = Dk
          },
          _record: () => fk._frameGraph.execute(),
          _resize() {
            fk._frameGraph.build()
          }
        },
        bk = function() {
          const kk = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let ek = 0; ek < kk._tasks.length; ek++) Sk(kk, kk._tasks[ek]);
              for (const ek of kk._tasks)
                for (const kk of ek._passes) kk._initialize()
            },
            execute() {
              let ek = 0;
              for (const ik of kk._tasks)
                if (!1 !== ik.executionEnabled)
                  if (ik.execute) ek += ik.execute();
                  else
                    for (const kk of ik._passes) ek += kk._execute();
              return ek
            },
            dispose() {
              for (const ek of kk._tasks) ek.dispose();
              kk._tasks.length = 0, kk._currentProcessedTask = null
            }
          };
          return kk
        }();
      if (fk._frameGraph = bk, !1 !== ek?.defaultRenderTask) {
        const ek = kk.msaaSamples > 1,
          Sk = ek ? (0, Dk.e)({
            lbl: "scene-color",
            format: kk.format,
            dFormat: "depth24plus-stencil8",
            samples: kk.msaaSamples,
            size: kk
          }) : kk.scRT,
          rk = ek ? void 0 : (0, Dk.e)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: kk
          });
        ! function(kk, ek) {
          kk._tasks.push(ek)
        }(bk, dk({
          name: "bw",
          rt: Sk,
          rst: ek ? kk.scRT : void 0,
          depth: rk
        }, ik, fk))
      }
      return fk._disposables.push((() => bk.dispose())), fk
    }
    async function ak(kk) {
      const ek = kk;
      for (ek._built || (ek._materialSwapQueue.length = 0); ek._deferredBuilders.length;) {
        const kk = ek._deferredBuilders.splice(0);
        await Promise.all(kk.map((kk => kk())))
      }
      await vk(ek), Ek?.get(ek)?.() || (ek._runtimeBuilds?._e(), ek._renderableVersion++, ek._built = !0), await (ek._rebuildHook?.(ek))
    }
    var Wk = null;
    async function tk(kk) {
      const ek = kk,
        Dk = ek.surface;
      (0, fk.f)(Dk, ek) || (await ak(kk), ek._renderables.sort(Xk), await Promise.all(ek._frameGraph._tasks.map((kk => kk._preload?.()))), Wk && await Wk(ek), ek._frameGraph.build(), Dk._renderingContexts[0] && (await ik.e(360).then((() => ik(60772)))).configureSwapchainOverlayScene(Dk, ek), Ek?.get(ek)?.() || (0, fk.h)(Dk, ek))
    }
    var Xk = (kk, ek) => kk.order - ek.order
  },
  41284: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => mk,
      g: () => Mk
    });
    var Dk = ik(41223),
      fk = ik(41232),
      Sk = ik(41238),
      bk = ik(41245),
      rk = ik(41251),
      Pk = ik(41258);

    function mk(kk, ek, ik) {
      let rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (ek < 1 || ik < 1) && (0, Dk.c)(676, ek, ik);
      const mk = kk._device,
        Mk = rk.mipMaps ?? !1,
        Kk = rk.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        xk = Mk ? (0, Pk.e)(ek, ik) : 1,
        nk = mk.createTexture({
          size: {
            width: ek,
            height: ik
          },
          format: Kk,
          mipLevelCount: xk,
          usage: fk.h.TEXTURE_BINDING | fk.h.COPY_DST | fk.h.RENDER_ATTACHMENT
        }),
        Uk = {
          addressModeU: rk.addressModeU ?? "clamp-to-edge",
          addressModeV: rk.addressModeV ?? "clamp-to-edge",
          minFilter: rk.minFilter ?? "linear",
          magFilter: rk.magFilter ?? "linear",
          mipmapFilter: Mk ? "linear" : "nearest"
        },
        Hk = (0, bk.c)(kk, Uk),
        wk = {
          texture: nk,
          view: nk.createView(),
          sampler: Hk,
          width: ek,
          height: ik
        };
      return (0, Sk.d)(wk), kk._dlr && kk._dlr.t(wk, {
        kind: "dynamic",
        width: ek,
        height: ik,
        format: Kk,
        levels: xk,
        samplerDesc: Uk,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), wk
    }

    function Mk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const fk = Dk.invertY ?? !0,
        Sk = Dk.premultiplyAlpha ?? !1;
      kk._device.queue.copyExternalImageToTexture({
        source: ik,
        flipY: fk
      }, {
        texture: ek.texture,
        premultipliedAlpha: Sk
      }, [ek.width, ek.height]);
      const bk = ek._recoverySource;
      bk && "dynamic" === bk.kind && (bk.source = ik, bk.flipY = fk, bk.premultipliedAlpha = Sk), ek.texture.mipLevelCount > 1 && (0, rk.generateMipmaps)(kk, ek.texture)
    }
  },
  41275: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Pk
    });
    var Dk = ik(41223),
      fk = ik(41232),
      Sk = ik(41238),
      bk = ik(41245),
      rk = ik(41258);
    async function Pk(kk, ek) {
      let Pk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [mk, Mk] = function(kk) {
        const ek = kk,
          ik = [
            [ek.displayWidth, ek.displayHeight],
            [ek.videoWidth, ek.videoHeight],
            [ek.naturalWidth, ek.naturalHeight],
            [ek.width, ek.height]
          ];
        for (const [Dk, fk] of ik)
          if (void 0 !== Dk && void 0 !== fk && Number.isInteger(Dk) && Number.isInteger(fk) && Dk > 0 && fk > 0) return [Dk, fk];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(ek), [Kk, xk] = function(kk, ek, ik) {
        if (void 0 === ik) return [kk, ek];
        if (!Number.isInteger(ik) || ik < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${ik})`);
        if (Math.max(kk, ek) <= ik) return [kk, ek];
        const Dk = ik / Math.max(kk, ek);
        return kk >= ek ? [ik, Math.max(1, Math.round(ek * Dk))] : [Math.max(1, Math.round(kk * Dk)), ik]
      }(mk, Mk, Pk.maxDimension), nk = Pk.mipMaps ?? !0, Uk = Pk.premultiplyAlpha ?? !1;
      let Hk = ek,
        wk = null;
      const lk = {
        texture: null
      };
      try {
        Kk === mk && xk === Mk || (wk = await createImageBitmap(ek, {
          resizeWidth: Kk,
          resizeHeight: xk,
          resizeQuality: "high",
          premultiplyAlpha: Uk ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), Hk = wk);
        const pk = kk._device,
          yk = Pk.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          Yk = nk ? (0, rk.e)(Kk, xk) : 1,
          Lk = Yk > 1 ? (await Promise.resolve().then((() => ik(41251)))).generateMipmaps : null,
          Ck = {
            addressModeU: Pk.addressModeU ?? "repeat",
            addressModeV: Pk.addressModeV ?? "repeat",
            minFilter: Pk.minFilter ?? "linear",
            magFilter: Pk.magFilter ?? "linear",
            mipmapFilter: nk ? "linear" : "nearest"
          };
        Ck.maxAnisotropy = "linear" === Ck.minFilter && "linear" === Ck.magFilter && "linear" === Ck.mipmapFilter ? 4 : 1;
        const Ak = Pk.invertY ?? !0,
          jk = async ek => {
            let ik;
            pk.pushErrorScope("validation"), pk.pushErrorScope("out-of-memory");
            let Sk = null;
            try {
              const ik = lk.texture = pk.createTexture({
                size: {
                  width: Kk,
                  height: xk
                },
                format: yk,
                mipLevelCount: Yk,
                usage: fk.h.TEXTURE_BINDING | fk.h.COPY_DST | fk.h.RENDER_ATTACHMENT
              });
              pk.queue.copyExternalImageToTexture({
                source: ek,
                flipY: Ak
              }, {
                texture: ik,
                premultipliedAlpha: Uk
              }, {
                width: Kk,
                height: xk
              }), Lk && Lk(kk, ik), Sk = (0, bk.c)(kk, Ck)
            } catch (nk) {
              ik = nk
            }
            const [rk, Pk] = await Promise.all([pk.popErrorScope(), pk.popErrorScope()]);
            if (ik) throw ik;
            const mk = Pk ?? rk;
            if (mk) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${mk.message}`, {
              cause: mk
            });
            const Mk = lk.texture;
            return Mk && Sk || (0, Dk.c)(677), {
              texture: Mk,
              view: Mk.createView(),
              sampler: Sk,
              width: Kk,
              height: xk
            }
          }, sk = await (kk._dlr?.x(Hk, Kk, xk, yk, Yk, Ck, Ak, Uk, jk)) ?? await jk(Hk);
        return (0, Sk.d)(sk), sk
      } catch (pk) {
        throw lk.texture?.destroy(), pk
      } finally {
        wk?.close()
      }
    }
  },
  41251: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      generateMipmaps: () => nk,
      recordMipmaps: () => Uk
    });
    var Dk = ik(41232),
      fk = ik(41245),
      Sk = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var bk = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      rk = null,
      Pk = null,
      mk = null,
      Mk = null,
      Kk = null;

    function xk(kk) {
      const ek = kk._device;
      ek !== Kk && (rk?.clear(), rk = null, Pk = null, mk = null, Mk = null, Kk = null, Kk = ek), Pk ??= ek.createShaderModule({
        code: bk
      }), mk ??= function(kk) {
        return (0, fk.c)(kk, Sk)
      }(kk), Mk ??= ek.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: Dk.d.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: Dk.d.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function nk(kk, ek, ik) {
      const Dk = kk._device,
        fk = Dk.createCommandEncoder();
      Uk(kk, ek, fk, ik), Dk.queue.submit([fk.finish()])
    }

    function Uk(kk, ek, ik, Dk) {
      if (ek.mipLevelCount <= 1) return;
      const fk = kk._device,
        Sk = function(kk, ek) {
          const ik = kk._device;
          xk(kk), rk ??= new Map;
          let Dk = rk.get(ek);
          return Dk || (Dk = ik.createRenderPipeline({
            layout: ik.createPipelineLayout({
              bindGroupLayouts: [Mk]
            }),
            vertex: {
              module: Pk,
              entryPoint: "vs"
            },
            fragment: {
              module: Pk,
              entryPoint: "fs",
              targets: [{
                format: ek
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), rk.set(ek, Dk)), Dk
        }(kk, ek.format),
        bk = null != Dk ? {
          dimension: "2d",
          baseArrayLayer: Dk,
          arrayLayerCount: 1
        } : {};
      for (let rk = 1; rk < ek.mipLevelCount; rk++) {
        const kk = ek.createView({
            baseMipLevel: rk - 1,
            mipLevelCount: 1,
            ...bk
          }),
          Dk = ek.createView({
            baseMipLevel: rk,
            mipLevelCount: 1,
            ...bk
          }),
          Pk = fk.createBindGroup({
            layout: Mk,
            entries: [{
              binding: 0,
              resource: kk
            }, {
              binding: 1,
              resource: mk
            }]
          }),
          Kk = ik.beginRenderPass({
            colorAttachments: [{
              view: Dk,
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
        Kk.setPipeline(Sk), Kk.setBindGroup(0, Pk), Kk.draw(3), Kk.end()
      }
    }
  },
  41258: (kk, ek, ik) => {
    function Dk(kk, ek) {
      return Math.floor(Math.log2(Math.max(kk, ek))) + 1
    }
    ik.d(ek, {
      e: () => Dk
    })
  },
  41215: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => mk,
      d: () => Mk
    });
    var Dk = ik(41223),
      fk = ik(41232),
      Sk = ik(41238),
      bk = ik(41245),
      rk = ik(41251),
      Pk = ik(41258);

    function mk(kk, ek, ik, rk) {
      let mk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (ek < 1 || ik < 1 || rk < 1) && (0, Dk.c)(722, ek, ik, rk);
      const Mk = kk._device,
        Kk = mk.mipMaps ?? !0,
        xk = mk.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        nk = Mk.createTexture({
          size: {
            width: ek,
            height: ik,
            depthOrArrayLayers: rk
          },
          dimension: "2d",
          format: xk,
          mipLevelCount: Kk ? (0, Pk.e)(ek, ik) : 1,
          usage: fk.h.TEXTURE_BINDING | fk.h.COPY_DST | fk.h.RENDER_ATTACHMENT
        }),
        Uk = (0, bk.c)(kk, {
          addressModeU: mk.addressModeU ?? "repeat",
          addressModeV: mk.addressModeV ?? "repeat",
          minFilter: mk.minFilter ?? "linear",
          magFilter: mk.magFilter ?? "linear",
          mipmapFilter: Kk ? "linear" : "nearest"
        }),
        Hk = {
          texture: nk,
          view: nk.createView({
            dimension: "2d-array"
          }),
          sampler: Uk,
          width: ek,
          height: ik,
          layers: rk
        };
      return (0, Sk.d)(Hk), Hk
    }

    function Mk(kk, ek, ik, fk) {
      let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (ik < 0 || ik >= ek.layers || (0 | ik) !== ik) && (0, Dk.c)(723, ek.layers, ik);
      const bk = Sk.invertY ?? !0,
        Pk = Sk.premultiplyAlpha ?? !1;
      kk._device.queue.copyExternalImageToTexture({
        source: fk,
        flipY: bk
      }, {
        texture: ek.texture,
        origin: [0, 0, ik],
        premultipliedAlpha: Pk
      }, [ek.width, ek.height, 1]), ek.texture.mipLevelCount > 1 && (0, rk.generateMipmaps)(kk, ek.texture, ik)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);