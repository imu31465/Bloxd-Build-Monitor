export const id = 295;
export const ids = [295];
export const modules = {
  40816: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Nz,
      d: () => Hz,
      f: () => bz,
      j: () => wz,
      l: () => Pz,
      n: () => Bz
    });
    var Fz = sz(40773);
    var Wz = "Babylon Lite v1.32.0",
      Xz = sz(40820);

    function Oz(zz) {
      return "clientWidth" in zz
    }
    var oz = 1;

    function vz(zz, tz, sz) {
      const vz = tz.getContext("webgpu");
      vz || (0, Fz.b)(54), Oz(tz) && tz.setAttribute("data-engine", Wz);
      const Uz = sz?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        Kz = sz?.srgb ? (uz = Uz).endsWith("-srgb") ? uz : `${uz}-srgb` : Uz;
      var uz;
      const Nz = sz?.alphaMode ?? "opaque";
      vz.configure({
        device: zz._device,
        format: Uz,
        alphaMode: Nz,
        viewFormats: [Kz]
      });
      const bz = 1 === sz?.msaaSamples ? 1 : 4,
        wz = (0, Xz.c)({
          lbl: "swapchain",
          format: Kz,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return wz._eager = !0, {
        engine: zz,
        canvas: tz,
        format: Kz,
        msaaSamples: bz,
        scRT: wz,
        maxDevicePixelRatio: sz?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: oz++,
        _context: vz,
        _configureFormat: Uz,
        _alphaMode: Nz,
        _renderingContexts: []
      }
    }

    function Uz(zz) {
      const tz = zz._context.getCurrentTexture(),
        sz = zz.scRT;
      sz._colorTexture = tz, sz._colorView = tz.createView({
        format: zz.format
      }), sz._width = tz.width, sz._height = tz.height
    }

    function Kz(zz) {
      const tz = zz.canvas;
      if (!Oz(tz)) return;
      const sz = zz._w ?? tz.clientWidth,
        Fz = zz._h ?? tz.clientHeight;
      if (!(sz > 0 && Fz > 0)) return;
      const Wz = Math.min(globalThis.devicePixelRatio || 1, zz.maxDevicePixelRatio);
      uz(zz, sz * Wz | 0, Fz * Wz | 0)
    }

    function uz(zz, tz, sz) {
      const Fz = zz.canvas,
        Wz = 0 | tz,
        Xz = 0 | sz;
      if (Wz > 0 && Xz > 0 && (Wz !== Fz.width || Xz !== Fz.height)) {
        Fz.width = Wz, Fz.height = Xz, zz.scRT._width = Wz, zz.scRT._height = Xz;
        for (const tz of zz._renderingContexts) tz._resize?.()
      }
    }
    var Nz = 0;

    function bz(zz, tz) {
      return -1 !== zz._renderingContexts.indexOf(tz)
    }

    function wz(zz, tz) {
      return -1 === zz._renderingContexts.indexOf(tz) && (zz._renderingContexts.push(tz), !0)
    }
    var Dz = null;
    var gz = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function Hz(zz, tz) {
      const Xz = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...Dz ? Dz() : {}
      });
      Xz || (0, Fz.b)(47);
      const Oz = Dz?.deviceFeatures?.(Xz, tz) ?? function(zz) {
          return gz.filter((tz => zz.features.has(tz)))
        }(Xz),
        oz = await Xz.requestDevice({
          requiredFeatures: Oz,
          requiredLimits: tz?.requiredLimits
        });
      console.log(`${Wz} - WebGPU engine`);
      const uz = !!tz?.useHighPrecisionMatrix,
        Nz = !!tz?.useFloatingOrigin;
      if (Nz && !uz && (0, Fz.b)(48), uz) {
        const {
          allocateF64Mat4: zz
        } = await sz.e(349).then((() => sz(60399)));
        0
      }
      let bz, wz, Hz, Bz;
      if (Nz) {
        const [{
          wrapRenderableForFO: zz,
          lightFoVersion: tz,
          applyLightFoOffset: Fz
        }, {
          makePackMeshWorld: Wz
        }] = await Promise.all([sz.e(350).then((() => sz(60401))), sz.e(351).then((() => sz(60407)))]);
        bz = zz, wz = Wz, Hz = tz, Bz = Fz
      }
      const Pz = {
          _device: oz
        },
        rz = [Pz];
      return Object.assign(Pz, {
        engine: Pz,
        surfaces: rz,
        _surfaces: rz,
        _device: oz,
        _options: tz,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: uz,
        useFloatingOrigin: Nz,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: bz,
        _makePackMeshWorld: wz,
        _lightFoVersion: Hz,
        _applyLightFoOffset: Bz
      }, vz(Pz, zz, tz)), Kz(Pz), Uz(Pz), Pz
    }

    function Bz(zz, tz, sz) {
      uz(zz, tz, sz)
    }

    function Pz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zz.surfaces;
      if (sz !== zz.surfaces)
        for (let Wz = sz.length; Wz--;) sz[Wz].engine !== zz && (0, Fz.b)(49);
      rz(zz, tz, sz)
    }

    function rz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zz._surfaces,
        Fz = 0;
      for (let Xz = sz.length; Xz--;) Fz += sz[Xz]._renderingContexts.length;
      if (!Fz) return zz.drawCallCount = 0, zz._flushGpuRetirements?.(zz);
      const Wz = zz._device.createCommandEncoder({
        label: "frame"
      });
      zz._currentEncoder = Wz, zz._currentDelta = tz;
      try {
        zz._gpuTimerBegin?.(Wz), Fz = 0;
        for (let zz = 0; zz < sz.length; zz++) {
          const tz = sz[zz];
          tz._capturePreFrame?.(tz), Uz(tz);
          const Wz = tz._renderingContexts;
          for (let zz = 0; zz < Wz.length; zz++) {
            const tz = Wz[zz];
            tz._update(), Fz += tz._drawCallsPre + tz._record()
          }
        }
        const tz = zz._currentEncoder;
        for (let zz = 0; zz < sz.length; zz++) {
          const Fz = sz[zz];
          Fz._captureService?.(Fz, tz)
        }
        zz._gpuTimerEnd?.(tz), zz._cbs[0] = tz.finish(), zz._device.queue.submit(zz._cbs), zz._flushGpuRetirements?.(zz), zz.drawCallCount = Fz, zz._gpuTimerResolve?.()
      } finally {
        zz._currentEncoder = void 0
      }
    }
  },
  40777: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz,
      g: () => Xz,
      k: () => Fz
    });
    var Fz = globalThis.GPUTextureUsage,
      Wz = globalThis.GPUBufferUsage,
      Xz = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  40840: (zz, tz, sz) => {
    function Fz(zz) {
      Wz(zz.splice(0))
    }

    function Wz(zz) {
      for (const sz of zz) try {
        sz()
      } catch (tz) {
        console.error("GPU resource retirement failed.", tz)
      }
    }

    function Xz(zz, tz) {
      zz._flushGpuRetirements ??= Oz, (zz._retirements ??= []).push(tz)
    }

    function Oz(zz) {
      const tz = zz._retirements;
      if (!tz) return;
      zz._retirements = null;
      const sz = zz._retiring ??= new Set;
      sz.add(tz), queueMicrotask((() => {
        zz._device.queue.onSubmittedWorkDone().then((() => {
          sz.delete(tz), Fz(tz)
        })).catch((() => {}))
      }))
    }
    sz.d(tz, {
      c: () => Xz
    })
  },
  40820: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      d: () => Oz,
      e: () => oz
    });
    var Fz = sz(40777);

    function Wz(zz) {
      const tz = zz.size;
      return "canvas" in tz ? tz.canvas : tz
    }

    function Xz(zz) {
      return {
        _descriptor: zz,
        _resolveSize: Wz,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function Oz(zz, tz) {
      if (zz._eager) return void zz._syncEager?.(tz);
      oz(zz);
      const sz = zz._descriptor,
        {
          width: Xz,
          height: Oz
        } = (zz._resolveSize ?? Wz)(sz);
      zz._width = Xz, zz._height = Oz;
      const vz = tz._device;
      sz.format && (zz._colorTexture = vz.createTexture({
        label: sz.lbl,
        size: {
          width: Xz,
          height: Oz
        },
        format: sz.format,
        sampleCount: sz.samples,
        usage: Fz.k.RENDER_ATTACHMENT | Fz.k.TEXTURE_BINDING | Fz.k.COPY_SRC | Fz.k.COPY_DST
      }), zz._colorView = zz._colorTexture.createView()), sz.dFormat && (zz._depthTexture = vz.createTexture({
        label: sz.lbl,
        size: {
          width: Xz,
          height: Oz
        },
        format: sz.dFormat,
        sampleCount: sz.samples,
        usage: Fz.k.RENDER_ATTACHMENT | Fz.k.TEXTURE_BINDING
      }), zz._depthView = zz._depthTexture.createView())
    }

    function oz(zz) {
      if (!zz || zz._eager && !zz._disposeAttachments) return;
      const tz = zz._colorTexture,
        sz = zz._depthTexture;
      if (zz._colorTexture = zz._depthTexture = null, zz._colorView = zz._depthView = null, zz._width = zz._height = 0, zz._disposeAttachments) zz._disposeAttachments(tz, sz);
      else try {
        tz?.destroy()
      } finally {
        !1 !== zz._ownsDepthTexture && sz?.destroy()
      }
    }
  },
  40832: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      e: () => Wz,
      f: () => Xz
    });
    var Fz = Float32Array,
      Wz = Float64Array,
      Xz = Uint32Array
  },
  40849: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    var Fz = 16
  },
  40773: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz
    });
    var Fz = null;

    function Wz(zz) {
      for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Wz = 1; Wz < tz; Wz++) sz[Wz - 1] = arguments[Wz];
      const Xz = new Error(Fz?.(zz, sz) ?? `#${zz}`);
      throw Xz.lite = sz, Xz
    }
  },
  40803: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz
    });
    var Fz = sz(40789);

    function Wz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const sz = tz.compare,
        Wz = tz.lodMinClamp ?? 0,
        Xz = tz.lodMaxClamp ?? 32,
        Oz = void 0 !== sz || 0 !== Wz || 32 !== Xz ? `${sz??""}:${Wz}:${Xz}` : "";
      return (0, Fz.c)(zz, tz, Oz)
    }
  },
  40780: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = null;

    function Wz(zz) {
      const tz = Fz ??= new WeakMap;
      tz.set(zz, (tz.get(zz) ?? 0) + 1)
    }

    function Xz(zz) {
      Wz(zz.texture)
    }
  },
  40789: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz
    });
    var Fz = null,
      Wz = "nearest",
      Xz = "clamp-to-edge",
      Oz = {
        minFilter: Wz,
        magFilter: Wz,
        mipmapFilter: Wz,
        addressModeU: Xz,
        addressModeV: Xz,
        addressModeW: Xz,
        maxAnisotropy: 1
      };

    function oz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Wz = zz._device,
        Xz = Fz ??= new WeakMap;
      let oz = Xz.get(Wz);
      oz || Xz.set(Wz, oz = new Map);
      let vz = sz;
      for (const Fz in Oz) {
        const zz = Fz;
        vz += `:${tz[zz]??Oz[zz]}`
      }
      let Uz = oz.get(vz);
      return Uz || oz.set(vz, Uz = Wz.createSampler(tz)), Uz
    }
  },
  40827: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => dz,
      f: () => kz
    });
    var Fz = sz(40820),
      Wz = sz(40816);

    function Xz(zz, tz) {
      tz._passes.length = 0, zz._currentProcessedTask = tz;
      try {
        tz.record()
      } finally {
        zz._currentProcessedTask = null
      }
    }
    var Oz = sz(40832);

    function oz(zz) {
      const tz = zz.worldMatrixVersion;
      if (zz._viewVer === tz) return zz._viewCache;
      const sz = zz._viewCache,
        Fz = zz.worldMatrix,
        Wz = zz._useFloatingOrigin,
        Xz = Wz ? 0 : Fz[12],
        Oz = Wz ? 0 : Fz[13],
        oz = Wz ? 0 : Fz[14];
      return sz[0] = Fz[0], sz[1] = Fz[4], sz[2] = Fz[8], sz[3] = 0, sz[4] = Fz[1], sz[5] = Fz[5], sz[6] = Fz[9], sz[7] = 0, sz[8] = Fz[2], sz[9] = Fz[6], sz[10] = Fz[10], sz[11] = 0, sz[12] = -(Fz[0] * Xz + Fz[1] * Oz + Fz[2] * oz), sz[13] = -(Fz[4] * Xz + Fz[5] * Oz + Fz[6] * oz), sz[14] = -(Fz[8] * Xz + Fz[9] * Oz + Fz[10] * oz), sz[15] = 1, zz._viewVer = tz, sz
    }
    var vz = null;

    function Uz(zz) {
      return zz._projFov === zz.fov && zz._projNear === zz.nearPlane && zz._projFar === zz.farPlane || (zz._projFov = zz.fov, zz._projNear = zz.nearPlane, zz._projFar = zz.farPlane, zz._projRev = (zz._projRev ?? 0) + 1), zz.worldMatrixVersion + (zz._projRev ?? 0)
    }

    function Kz(zz, tz) {
      const sz = Uz(zz);
      if (zz._projVer === sz && zz._projAspect === tz) return zz._projCache;
      const Fz = zz._projCache;
      return null !== vz && zz.ortho ? vz(zz, tz, Fz) : function(zz, tz, sz, Fz, Wz) {
        const Xz = 1 / Math.tan(.5 * tz),
          Oz = Wz - Fz;
        zz[0] = Xz / sz, zz[5] = Xz, zz[10] = -Fz / Oz, zz[11] = 1, zz[14] = Wz * Fz / Oz
      }(Fz, zz.fov, tz, zz.nearPlane, zz.farPlane), zz._projVer = sz, zz._projAspect = tz, Fz
    }
    var uz = sz(40777);

    function Nz(zz, tz, sz) {
      return zz._device.createBuffer({
        label: sz,
        size: (Fz = tz, Wz = 16, Math.ceil(Fz / Wz) * Wz),
        usage: uz.d.UNIFORM | uz.d.COPY_DST
      });
      var Fz, Wz
    }
    var bz = sz(40840),
      wz = null;

    function Dz(zz) {
      const tz = zz._device,
        sz = wz ??= new WeakMap;
      let Fz = sz.get(tz);
      return Fz || (Fz = tz.createBindGroupLayout({
        label: "Kg",
        entries: [{
          binding: 0,
          visibility: uz.g.VERTEX | uz.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: uz.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), sz.set(tz, Fz)), Fz
    }

    function gz(zz, tz, sz) {
      const Fz = zz._device,
        Wz = Nz(zz, tz.byteLength, sz);
      try {
        Fz.queue.writeBuffer(Wz, 0, tz.buffer, tz.byteOffset, tz.byteLength)
      } catch (Xz) {
        throw Wz.destroy(), Xz
      }
      return Wz
    }
    var Hz = sz(40849),
      Bz = new Oz.f(1),
      Pz = new Oz.c(Bz.buffer);

    function rz(zz) {
      let tz = 0;
      for (const sz of zz) tz += sz._lightVersion ?? 0;
      return tz
    }

    function Yz(zz, tz) {
      zz.fill(0);
      let sz = 0;
      for (const Fz of tz) {
        if (sz >= Hz.e) break;
        Fz._writeLightUbo && (Fz._writeLightUbo(zz, 4 + 16 * sz), sz++)
      }
      Bz[0] = sz, zz[0] = Pz[0]
    }

    function xz(zz, tz) {
      let sz = tz._lightGpuState;
      const Fz = 16 + 16 * Hz.e * 4;
      if (sz && sz._byteSize === Fz) return sz;
      const Wz = !sz;
      sz?._buffer.destroy();
      const Xz = new Oz.c(Fz / 4);
      return Yz(Xz, tz.lights), zz._applyLightFoOffset?.(Xz, tz), sz = {
        _buffer: gz(zz, Xz),
        _scratch: Xz,
        iG: rz(tz.lights) + (zz._lightFoVersion?.(tz) ?? 0),
        _listVersion: tz._lightListVersion ?? 0,
        _lightCount: tz.lights.length,
        _byteSize: Fz
      }, tz._lightGpuState = sz, Wz && tz._disposables.push((() => {
        tz._lightGpuState?._buffer.destroy(), tz._lightGpuState = void 0
      })), sz
    }

    function mz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Wz = tz;
      if (0 === Fz && 16 === Wz.length) return void zz.set(Wz, sz);
      const Xz = Fz,
        Oz = sz;
      zz[Oz + 0] = Wz[Xz + 0], zz[Oz + 1] = Wz[Xz + 1], zz[Oz + 2] = Wz[Xz + 2], zz[Oz + 3] = Wz[Xz + 3], zz[Oz + 4] = Wz[Xz + 4], zz[Oz + 5] = Wz[Xz + 5], zz[Oz + 6] = Wz[Xz + 6], zz[Oz + 7] = Wz[Xz + 7], zz[Oz + 8] = Wz[Xz + 8], zz[Oz + 9] = Wz[Xz + 9], zz[Oz + 10] = Wz[Xz + 10], zz[Oz + 11] = Wz[Xz + 11], zz[Oz + 12] = Wz[Xz + 12], zz[Oz + 13] = Wz[Xz + 13], zz[Oz + 14] = Wz[Xz + 14], zz[Oz + 15] = Wz[Xz + 15]
    }

    function Jz(zz, tz, sz, Fz, Wz) {
      zz.fill(0);
      const Xz = function(zz, tz) {
          const sz = Uz(zz);
          if (zz._vpVer === sz && zz._vpAspect === tz) return zz._vpCache;
          const Fz = zz._vpCache;
          return function(zz, tz, sz, Fz, Wz, Xz) {
            const Oz = sz[Fz],
              oz = sz[Fz + 1],
              vz = sz[Fz + 2],
              Uz = sz[Fz + 3],
              Kz = sz[Fz + 4],
              uz = sz[Fz + 5],
              Nz = sz[Fz + 6],
              bz = sz[Fz + 7],
              wz = sz[Fz + 8],
              Dz = sz[Fz + 9],
              gz = sz[Fz + 10],
              Hz = sz[Fz + 11],
              Bz = sz[Fz + 12],
              Pz = sz[Fz + 13],
              rz = sz[Fz + 14],
              Yz = sz[Fz + 15];
            let xz = Wz[Xz],
              mz = Wz[Xz + 1],
              Jz = Wz[Xz + 2],
              Iz = Wz[Xz + 3];
            zz[tz] = Oz * xz + Kz * mz + wz * Jz + Bz * Iz, zz[tz + 1] = oz * xz + uz * mz + Dz * Jz + Pz * Iz, zz[tz + 2] = vz * xz + Nz * mz + gz * Jz + rz * Iz, zz[tz + 3] = Uz * xz + bz * mz + Hz * Jz + Yz * Iz, xz = Wz[Xz + 4], mz = Wz[Xz + 5], Jz = Wz[Xz + 6], Iz = Wz[Xz + 7], zz[tz + 4] = Oz * xz + Kz * mz + wz * Jz + Bz * Iz, zz[tz + 5] = oz * xz + uz * mz + Dz * Jz + Pz * Iz, zz[tz + 6] = vz * xz + Nz * mz + gz * Jz + rz * Iz, zz[tz + 7] = Uz * xz + bz * mz + Hz * Jz + Yz * Iz, xz = Wz[Xz + 8], mz = Wz[Xz + 9], Jz = Wz[Xz + 10], Iz = Wz[Xz + 11], zz[tz + 8] = Oz * xz + Kz * mz + wz * Jz + Bz * Iz, zz[tz + 9] = oz * xz + uz * mz + Dz * Jz + Pz * Iz, zz[tz + 10] = vz * xz + Nz * mz + gz * Jz + rz * Iz, zz[tz + 11] = Uz * xz + bz * mz + Hz * Jz + Yz * Iz, xz = Wz[Xz + 12], mz = Wz[Xz + 13], Jz = Wz[Xz + 14], Iz = Wz[Xz + 15], zz[tz + 12] = Oz * xz + Kz * mz + wz * Jz + Bz * Iz, zz[tz + 13] = oz * xz + uz * mz + Dz * Jz + Pz * Iz, zz[tz + 14] = vz * xz + Nz * mz + gz * Jz + rz * Iz, zz[tz + 15] = Uz * xz + bz * mz + Hz * Jz + Yz * Iz
          }(Fz, 0, Kz(zz, tz), 0, oz(zz), 0), zz._vpVer = sz, zz._vpAspect = tz, Fz
        }(Fz, Wz),
        Oz = oz(Fz),
        vz = Fz.worldMatrix;
      mz(zz, Xz, 0), mz(zz, Oz, 16), tz.useFloatingOrigin ? (zz[32] = 0, zz[33] = 0, zz[34] = 0) : (zz[32] = vz[12], zz[33] = vz[13], zz[34] = vz[14]), zz[87] = tz.canvas.width;
      const uz = sz.imageProcessing;
      zz[76] = uz.exposure, zz[77] = uz.contrast, zz[78] = sz._envTextures?.lodGenerationScale ?? .8, zz[79] = +uz.toneMappingEnabled, zz[37] = tz.canvas.height
    }

    function Iz(zz, tz) {
      return {
        _renderables: zz,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: tz
      }
    }

    function Cz(zz, tz, sz) {
      zz.clr ??= !0;
      const Wz = zz.rt._descriptor,
        Xz = zz.depth?._descriptor,
        vz = {
          _colorFormat: Wz.format,
          _depthStencilFormat: Xz?.dFormat ?? Wz.dFormat,
          _depthCompare: Wz.depthCompare ?? Xz?.depthCompare,
          _sampleCount: Wz.samples
        },
        Kz = {
          loadOp: "clear",
          storeOp: "store"
        },
        uz = {
          ...Iz([], -1),
          name: zz.name,
          _config: zz,
          _ownsTargets: !zz.sharedRt,
          engine: tz,
          Kg: sz,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [Kz]
          },
          _colorAttachment: Kz,
          _sceneUBO: Nz(tz, 368),
          _suData: new Oz.c(92),
          _sceneUboCacheKey: [],
          _targetSignature: vz,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (uz._disposed) throw new Error("RenderTask has been disposed.");
            uz._recordExplicit ? uz._recordExplicit(uz, !0) : Gz(uz, !1 !== zz.autoMirror ? sz._renderables.slice() : uz._renderables, !0)
          },
          execute: () => function(zz, tz, sz) {
            if (!1 === zz.enabled) return 0;
            const Fz = zz.Kg;
            ! function(zz, tz, sz) {
              const Fz = zz.Kg;
              !1 !== zz._config.autoMirror && zz._lastVersion !== Fz._renderableVersion && Gz(zz, Fz._renderables.slice());
              cz(zz, tz);
              const Wz = zz._updateContext,
                Xz = zz._config.cam ?? Fz.camera;
              sz._colorFormat && (zz._config._skipClusteredLights || Fz._clusteredLightUpdater?.(Xz, Wz.targetWidth, Wz.targetHeight), function(zz, tz) {
                const sz = xz(zz, tz),
                  Fz = rz(tz.lights) + (zz._lightFoVersion?.(tz) ?? 0),
                  Wz = tz._lightListVersion ?? 0;
                Fz === sz.iG && Wz === sz._listVersion && tz.lights.length === sz._lightCount || (sz.iG = Fz, sz._listVersion = Wz, sz._lightCount = tz.lights.length, Yz(sz._scratch, tz.lights), zz._applyLightFoOffset?.(sz._scratch, tz), zz._device.queue.writeBuffer(sz._buffer, 0, sz._scratch)), sz._buffer
              }(tz, Fz));
              (function(zz, tz, sz, Fz) {
                if (!Fz) return;
                const Wz = Fz.viewport,
                  Xz = zz._config.rt,
                  Oz = (zz._config.cs ? tz.canvas.width / tz.canvas.height : Xz._width / Xz._height) * (Wz ? Wz.width / Wz.height : 1),
                  oz = sz.fog,
                  vz = sz.imageProcessing,
                  Kz = Uz(Fz),
                  uz = sz._envTextures,
                  Nz = zz._sceneUboCacheKey;
                if (Nz[0] === Fz && Nz[1] === oz && Nz[2] === Kz && Nz[3] === Oz && Nz[4] === vz.exposure && Nz[5] === vz.contrast && Nz[6] === uz) return;
                Nz[0] = Fz, Nz[1] = oz, Nz[2] = Kz, Nz[3] = Oz, Nz[4] = vz.exposure, Nz[5] = vz.contrast, Nz[6] = uz;
                const bz = zz._suData;
                Jz(bz, tz, sz, Fz, Oz);
                const wz = sz._sceneUboContributors;
                if (wz)
                  for (const Uz of wz) Uz(bz, sz);
                tz._device.queue.writeBuffer(zz._sceneUBO, 0, bz)
              })(zz, tz, Fz, Xz), Wz.oV = Xz, zz._batchState?._reset(), jz(zz._opaqueBindings, Wz), jz(zz._directBindings, Wz), jz(zz._transparentBindings, Wz), zz._batchState?._flush(tz),
                function(zz, tz) {
                  const sz = zz._transparentBindings;
                  if (sz.length <= 1 || !tz) return;
                  const Fz = oz(tz);
                  for (const Wz of sz) {
                    const zz = Wz.renderable._worldCenter;
                    Wz._sortDistance = zz ? zz[0] * Fz[2] + zz[1] * Fz[6] + zz[2] * Fz[10] + Fz[14] : 0
                  }
                  sz.sort(ez)
                }(zz, Xz)
            }(zz, tz, sz);
            const Wz = zz._colorAttachment,
              Xz = zz._config;
            Xz.rt._colorView && (Xz.rt === Fz.surface.scRT && (Wz.view = Xz.rt._colorView), Wz.resolveTarget = Xz.rst?._colorView ?? void 0, Wz.clearValue = Xz.clrColor ?? Fz.clearColor, Wz.loadOp = Xz.clr ? "clear" : "load");
            if (zz._executeWithTransmission) return zz._executeWithTransmission(sz._sampleCount);
            const Oz = tz._currentEncoder.beginRenderPass(zz._renderPassDescriptor),
              vz = Tz(zz, Oz);
            return Oz.end(), vz
          }(uz, tz, vz),
          dispose() {
            if (uz._disposed) return;
            uz._disposed = !0;
            const tz = uz._pendingMeshes;
            tz && (tz.length = 0);
            for (const zz of uz._renderables) uz._retireRenderable?.(uz.engine, zz);
            uz._passes.length = uz._opaqueBindings.length = uz._directBindings.length = 0, uz._transparentBindings.length = uz._renderables.length = uz._ob.length = 0, uz._ownsTargets && ((0, Fz.e)(zz.rt), (0, Fz.e)(zz.rst)), zz.depth?._eager || (0, Fz.e)(zz.depth);
            const sz = uz._sceneUBO;
            (0, bz.c)(uz.engine, (() => sz.destroy())), uz._batchState?._release(uz.engine), uz._batchState = void 0
          }
        };
      return uz
    }

    function ez(zz, tz) {
      return tz._sortDistance - zz._sortDistance || zz.renderable.order - tz.renderable.order
    }

    function Zz(zz, tz) {
      return zz.renderable.order - tz.renderable.order
    }

    function Gz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz._renderables,
        sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Wz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        Xz = arguments.length > 4 ? arguments[4] : void 0;
      const Oz = zz._config,
        oz = Oz.rt,
        vz = zz._batchState,
        Uz = Iz(tz, zz.Kg._renderableVersion);
      if (sz) {
        const tz = (tz, sz) => {
          tz && (sz || zz._ownsTargets || tz._eager) && (0, Fz.d)(tz, zz.engine)
        };
        tz(oz), oz._descriptor.samples > 1 && tz(Oz.rst), tz(Oz.depth, !0)
      }
      const {
        _opaqueBindings: Kz,
        _directBindings: uz,
        _transparentBindings: Nz
      } = Uz;
      try {
        for (const sz of tz) {
          const tz = sz.bind(zz.engine, zz._targetSignature);
          Uz._batchState = zz._targetSignature._collectBatches?.(Uz._batchState, tz), sz.isTransparent || sz._transmissive ? Nz.push(tz) : sz._direct ? uz.push(tz) : Kz.push(tz)
        }
        Kz.sort(Zz), uz.sort(Zz), sz && cz(zz, zz.engine, !1)
      } catch (bz) {
        throw Uz._batchState?._release(void 0, Xz ?? [vz]), bz
      }
      return sz && (! function(zz, tz) {
        const sz = zz._config,
          Fz = zz._colorAttachment;
        Fz.view = tz._colorView, zz._renderPassDescriptor.colorAttachments = tz._colorView ? [Fz] : [];
        const Wz = sz.depth ?? tz,
          Xz = Wz._depthView;
        let Oz;
        if (Xz) {
          const zz = Wz._descriptor,
            tz = (sz.depth ? Wz._eager : !1 === sz.depthClear) ? "load" : "clear";
          Oz = {
            view: Xz,
            depthClearValue: zz.depthClearValue ?? 0,
            depthLoadOp: tz,
            depthStoreOp: "store"
          }, zz.dFormat?.includes("stencil") && (Oz.stencilClearValue = 0, Oz.stencilLoadOp = tz, Oz.stencilStoreOp = "store")
        }
        zz._renderPassDescriptor.depthStencilAttachment = Oz
      }(zz, oz), zz._updateContext.targetWidth = oz._width, zz._updateContext.targetHeight = oz._height), Wz && (Object.assign(zz, Uz), vz?._release(zz.engine, [Uz._batchState])), Uz
    }

    function Tz(zz, tz) {
      const sz = zz.engine,
        Fz = zz._config,
        Xz = Fz.rt,
        Oz = zz.Kg,
        oz = zz._opaqueBindings,
        vz = zz._ob,
        Uz = zz._sceneBG;
      if (function(zz, tz, sz, Fz) {
          const Wz = tz?.viewport;
          if (!Wz) return;
          const Xz = Math.floor(Wz.x * sz),
            Oz = Math.floor((1 - Wz.y - Wz.height) * Fz),
            oz = Math.ceil((Wz.x + Wz.width) * sz) - Xz,
            vz = Math.ceil((1 - Wz.y) * Fz) - Oz;
          zz.setViewport(Xz, Oz, oz, vz, 0, 1), zz.setScissorRect(Xz, Oz, oz, vz)
        }(tz, Fz.cam ?? Oz.camera, Xz._width, Xz._height), tz.setBindGroup(0, Uz), zz._lastVis !== Wz.b || !vz.length) {
        const tz = Xz._descriptor,
          Fz = sz._device.createRenderBundleEncoder({
            colorFormats: tz.format ? [tz.format] : [],
            depthStencilFormat: zz._targetSignature._depthStencilFormat,
            sampleCount: tz.samples
          });
        Fz.setBindGroup(0, Uz), Az(Fz, oz, sz), vz[0] = Fz.finish(), zz._lastVis = Wz.b
      }
      let Kz = oz.length;
      return tz.executeBundles(vz), tz.setBindGroup(0, Uz), Kz += Az(tz, zz._directBindings, sz), Kz += Az(tz, zz._transparentBindings, sz), Kz
    }

    function cz(zz, tz) {
      let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Fz = xz(tz, zz.Kg)._buffer;
      if (Fz === zz._lightsUBO) return;
      const Wz = tz._device.createBindGroup({
        layout: Dz(tz),
        entries: [{
          binding: 0,
          resource: {
            buffer: zz._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: Fz
          }
        }]
      });
      zz._lightsUBO = Fz, zz._sceneBG = Wz, sz && (zz._ob = [])
    }

    function jz(zz, tz) {
      for (const sz of zz) sz.update?.(tz)
    }

    function Az(zz, tz, sz) {
      let Fz = null,
        Wz = 0;
      for (const Xz of tz) {
        const tz = Xz.renderable.mesh;
        tz && !1 === tz.visible || (Xz.pipeline !== Fz && (zz.setPipeline(Xz.pipeline), Fz = Xz.pipeline), Wz += Xz.draw(zz, sz))
      }
      return Wz
    }

    function yz(zz) {
      const tz = zz._materialSwapQueue;
      if (!tz[0] || zz._runtimeBuilds?.w) return;
      let Fz, Wz, Xz;
      const Oz = zz._renderables;
      for (const sz of tz) {
        const tz = sz.material;
        if (!tz) continue;
        const oz = sz._runtimeThinBuild;
        if (oz) {
          Wz = oz(zz, sz, Wz);
          continue
        }
        const vz = zz._groups.get(tz._buildGroup),
          Uz = vz?.r;
        if (!Uz) {
          (Xz ??= []).push(sz);
          continue
        }
        if (vz._w?.(sz)) {
          (Xz ??= []).push([sz, tz]);
          continue
        }
        const Kz = zz._meshDisposables.get(sz);
        Kz && (zz._meshDisposables.delete(sz), (0, bz.c)(zz.surface.engine, (() => Kz.forEach((zz => zz())))));
        const uz = vz.o;
        let Nz;
        for (let zz = Oz.length; zz--;) Oz[zz].mesh === sz && (Nz = Oz.splice(zz, 1)[0]);
        tz._csmGen = -~tz._csmGen;
        const wz = Uz(zz, sz);
        if (uz) {
          const zz = uz.indexOf(Nz);
          zz < 0 ? uz.push(wz) : uz[zz] = wz
        }
        Fz = Oz.push(wz)
      }
      if (Fz && (Oz.sort(((zz, tz) => zz.order - tz.order)), zz._renderableVersion++, zz._materialEpoch++), tz.length = 0, !Xz) return Wz;
      const oz = Xz;
      return sz.e(355).then((() => sz(60430))).then((tz => {
        let {
          C: sz
        } = tz;
        return sz(zz, oz, Wz)
      }), (tz => {
        const sz = zz._runtimeBuilds;
        sz ? sz._x(tz) : console.error(tz)
      }))
    }
    var Mz = null;

    function dz(zz, tz) {
      const sz = zz.engine,
        Wz = {
          _kind: "Kg",
          surface: zz,
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
            sz.useFloatingOrigin && Wz.camera && !Wz.camera._useFloatingOrigin && (Wz.camera._useFloatingOrigin = !0, Wz.camera._viewVer = -1, Wz.camera._vpVer = -1);
            const zz = Wz.fixedDeltaMs > 0 ? Wz.fixedDeltaMs : sz._currentDelta,
              tz = sz._currentEncoder;
            let Fz = 0;
            for (const sz of Wz._beforeRender) sz(zz);
            Wz._materialSwapQueue.length && yz(Wz);
            for (const Xz of Wz._prePasses) Fz += Xz.execute(tz, sz);
            for (const Xz of Wz._uniformUpdaters) Xz.update(sz);
            Wz._drawCallsPre = Fz
          },
          _record: () => Wz._frameGraph.execute(),
          _resize() {
            Wz._frameGraph.build()
          }
        },
        Oz = function() {
          const zz = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let tz = 0; tz < zz._tasks.length; tz++) Xz(zz, zz._tasks[tz]);
              for (const tz of zz._tasks)
                for (const zz of tz._passes) zz._initialize()
            },
            execute() {
              let tz = 0;
              for (const sz of zz._tasks)
                if (!1 !== sz.executionEnabled)
                  if (sz.execute) tz += sz.execute();
                  else
                    for (const zz of sz._passes) tz += zz._execute();
              return tz
            },
            dispose() {
              for (const tz of zz._tasks) tz.dispose();
              zz._tasks.length = 0, zz._currentProcessedTask = null
            }
          };
          return zz
        }();
      if (Wz._frameGraph = Oz, !1 !== tz?.defaultRenderTask) {
        const tz = zz.msaaSamples > 1,
          Xz = tz ? (0, Fz.c)({
            lbl: "scene-color",
            format: zz.format,
            dFormat: "depth24plus-stencil8",
            samples: zz.msaaSamples,
            size: zz
          }) : zz.scRT,
          oz = tz ? void 0 : (0, Fz.c)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: zz
          });
        ! function(zz, tz) {
          zz._tasks.push(tz)
        }(Oz, Cz({
          name: "Kg",
          rt: Xz,
          rst: tz ? zz.scRT : void 0,
          depth: oz
        }, sz, Wz))
      }
      return Wz._disposables.push((() => Oz.dispose())), Wz
    }
    async function hz(zz) {
      const tz = zz;
      for (tz._built || (tz._materialSwapQueue.length = 0); tz._deferredBuilders.length;) {
        const zz = tz._deferredBuilders.splice(0);
        await Promise.all(zz.map((zz => zz())))
      }
      await yz(tz), Mz?.get(tz)?.() || (tz._runtimeBuilds?._e(), tz._renderableVersion++, tz._built = !0), await (tz._rebuildHook?.(tz))
    }
    var Qz = null;
    async function kz(zz) {
      const tz = zz,
        Fz = tz.surface;
      (0, Wz.f)(Fz, tz) || (await hz(zz), tz._renderables.sort(iz), await Promise.all(tz._frameGraph._tasks.map((zz => zz._preload?.()))), Qz && await Qz(tz), tz._frameGraph.build(), Fz._renderingContexts[0] && (await sz.e(353).then((() => sz(60418)))).configureSwapchainOverlayScene(Fz, tz), Mz?.get(tz)?.() || (0, Wz.j)(Fz, tz))
    }
    var iz = (zz, tz) => zz.order - tz.order
  },
  40811: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Uz,
      d: () => Kz
    });
    var Fz = sz(40773),
      Wz = sz(40777),
      Xz = sz(40780),
      Oz = sz(40789),
      oz = sz(40795),
      vz = sz(40800);

    function Uz(zz, tz, sz) {
      let oz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (tz < 1 || sz < 1) && (0, Fz.b)(676, tz, sz);
      const Uz = zz._device,
        Kz = oz.mipMaps ?? !1,
        uz = oz.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Nz = Kz ? (0, vz.b)(tz, sz) : 1,
        bz = Uz.createTexture({
          size: {
            width: tz,
            height: sz
          },
          format: uz,
          mipLevelCount: Nz,
          usage: Wz.k.TEXTURE_BINDING | Wz.k.COPY_DST | Wz.k.RENDER_ATTACHMENT
        }),
        wz = {
          addressModeU: oz.addressModeU ?? "clamp-to-edge",
          addressModeV: oz.addressModeV ?? "clamp-to-edge",
          minFilter: oz.minFilter ?? "linear",
          magFilter: oz.magFilter ?? "linear",
          mipmapFilter: Kz ? "linear" : "nearest"
        },
        Dz = (0, Oz.c)(zz, wz),
        gz = {
          texture: bz,
          view: bz.createView(),
          sampler: Dz,
          width: tz,
          height: sz
        };
      return (0, Xz.c)(gz), zz._dlr && zz._dlr.t(gz, {
        kind: "dynamic",
        width: tz,
        height: sz,
        format: uz,
        levels: Nz,
        samplerDesc: wz,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), gz
    }

    function Kz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Wz = Fz.invertY ?? !0,
        Xz = Fz.premultiplyAlpha ?? !1;
      zz._device.queue.copyExternalImageToTexture({
        source: sz,
        flipY: Wz
      }, {
        texture: tz.texture,
        premultipliedAlpha: Xz
      }, [tz.width, tz.height]);
      const Oz = tz._recoverySource;
      Oz && "dynamic" === Oz.kind && (Oz.source = sz, Oz.flipY = Wz, Oz.premultipliedAlpha = Xz), tz.texture.mipLevelCount > 1 && (0, oz.generateMipmaps)(zz, tz.texture)
    }
  },
  40808: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => vz
    });
    var Fz = sz(40773),
      Wz = sz(40777),
      Xz = sz(40780),
      Oz = sz(40789),
      oz = sz(40800);
    async function vz(zz, tz) {
      let vz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [Uz, Kz] = function(zz) {
        const tz = zz,
          sz = [
            [tz.displayWidth, tz.displayHeight],
            [tz.videoWidth, tz.videoHeight],
            [tz.naturalWidth, tz.naturalHeight],
            [tz.width, tz.height]
          ];
        for (const [Fz, Wz] of sz)
          if (void 0 !== Fz && void 0 !== Wz && Number.isInteger(Fz) && Number.isInteger(Wz) && Fz > 0 && Wz > 0) return [Fz, Wz];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(tz), [uz, Nz] = function(zz, tz, sz) {
        if (void 0 === sz) return [zz, tz];
        if (!Number.isInteger(sz) || sz < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${sz})`);
        if (Math.max(zz, tz) <= sz) return [zz, tz];
        const Fz = sz / Math.max(zz, tz);
        return zz >= tz ? [sz, Math.max(1, Math.round(tz * Fz))] : [Math.max(1, Math.round(zz * Fz)), sz]
      }(Uz, Kz, vz.maxDimension), bz = vz.mipMaps ?? !0, wz = vz.premultiplyAlpha ?? !1;
      let Dz = tz,
        gz = null;
      const Hz = {
        texture: null
      };
      try {
        uz === Uz && Nz === Kz || (gz = await createImageBitmap(tz, {
          resizeWidth: uz,
          resizeHeight: Nz,
          resizeQuality: "high",
          premultiplyAlpha: wz ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), Dz = gz);
        const Bz = zz._device,
          Pz = vz.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          rz = bz ? (0, oz.b)(uz, Nz) : 1,
          Yz = rz > 1 ? (await Promise.resolve().then((() => sz(40795)))).generateMipmaps : null,
          xz = {
            addressModeU: vz.addressModeU ?? "repeat",
            addressModeV: vz.addressModeV ?? "repeat",
            minFilter: vz.minFilter ?? "linear",
            magFilter: vz.magFilter ?? "linear",
            mipmapFilter: bz ? "linear" : "nearest"
          };
        xz.maxAnisotropy = "linear" === xz.minFilter && "linear" === xz.magFilter && "linear" === xz.mipmapFilter ? 4 : 1;
        const mz = vz.invertY ?? !0,
          Jz = async tz => {
            let sz;
            Bz.pushErrorScope("validation"), Bz.pushErrorScope("out-of-memory");
            let Xz = null;
            try {
              const sz = Hz.texture = Bz.createTexture({
                size: {
                  width: uz,
                  height: Nz
                },
                format: Pz,
                mipLevelCount: rz,
                usage: Wz.k.TEXTURE_BINDING | Wz.k.COPY_DST | Wz.k.RENDER_ATTACHMENT
              });
              Bz.queue.copyExternalImageToTexture({
                source: tz,
                flipY: mz
              }, {
                texture: sz,
                premultipliedAlpha: wz
              }, {
                width: uz,
                height: Nz
              }), Yz && Yz(zz, sz), Xz = (0, Oz.c)(zz, xz)
            } catch (bz) {
              sz = bz
            }
            const [oz, vz] = await Promise.all([Bz.popErrorScope(), Bz.popErrorScope()]);
            if (sz) throw sz;
            const Uz = vz ?? oz;
            if (Uz) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${Uz.message}`, {
              cause: Uz
            });
            const Kz = Hz.texture;
            return Kz && Xz || (0, Fz.b)(677), {
              texture: Kz,
              view: Kz.createView(),
              sampler: Xz,
              width: uz,
              height: Nz
            }
          }, Iz = await (zz._dlr?.x(Dz, uz, Nz, Pz, rz, xz, mz, wz, Jz)) ?? await Jz(Dz);
        return (0, Xz.c)(Iz), Iz
      } catch (Bz) {
        throw Hz.texture?.destroy(), Bz
      } finally {
        gz?.close()
      }
    }
  },
  40795: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      generateMipmaps: () => bz,
      recordMipmaps: () => wz
    });
    var Fz = sz(40777),
      Wz = sz(40789),
      Xz = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var Oz = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      oz = null,
      vz = null,
      Uz = null,
      Kz = null,
      uz = null;

    function Nz(zz) {
      const tz = zz._device;
      tz !== uz && (oz?.clear(), oz = null, vz = null, Uz = null, Kz = null, uz = null, uz = tz), vz ??= tz.createShaderModule({
        code: Oz
      }), Uz ??= function(zz) {
        return (0, Wz.c)(zz, Xz)
      }(zz), Kz ??= tz.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: Fz.g.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: Fz.g.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function bz(zz, tz, sz) {
      const Fz = zz._device,
        Wz = Fz.createCommandEncoder();
      wz(zz, tz, Wz, sz), Fz.queue.submit([Wz.finish()])
    }

    function wz(zz, tz, sz, Fz) {
      if (tz.mipLevelCount <= 1) return;
      const Wz = zz._device,
        Xz = function(zz, tz) {
          const sz = zz._device;
          Nz(zz), oz ??= new Map;
          let Fz = oz.get(tz);
          return Fz || (Fz = sz.createRenderPipeline({
            layout: sz.createPipelineLayout({
              bindGroupLayouts: [Kz]
            }),
            vertex: {
              module: vz,
              entryPoint: "vs"
            },
            fragment: {
              module: vz,
              entryPoint: "fs",
              targets: [{
                format: tz
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), oz.set(tz, Fz)), Fz
        }(zz, tz.format),
        Oz = null != Fz ? {
          dimension: "2d",
          baseArrayLayer: Fz,
          arrayLayerCount: 1
        } : {};
      for (let oz = 1; oz < tz.mipLevelCount; oz++) {
        const zz = tz.createView({
            baseMipLevel: oz - 1,
            mipLevelCount: 1,
            ...Oz
          }),
          Fz = tz.createView({
            baseMipLevel: oz,
            mipLevelCount: 1,
            ...Oz
          }),
          vz = Wz.createBindGroup({
            layout: Kz,
            entries: [{
              binding: 0,
              resource: zz
            }, {
              binding: 1,
              resource: Uz
            }]
          }),
          uz = sz.beginRenderPass({
            colorAttachments: [{
              view: Fz,
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
        uz.setPipeline(Xz), uz.setBindGroup(0, vz), uz.draw(3), uz.end()
      }
    }
  },
  40800: (zz, tz, sz) => {
    function Fz(zz, tz) {
      return Math.floor(Math.log2(Math.max(zz, tz))) + 1
    }
    sz.d(tz, {
      b: () => Fz
    })
  },
  40765: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Uz,
      g: () => Kz
    });
    var Fz = sz(40773),
      Wz = sz(40777),
      Xz = sz(40780),
      Oz = sz(40789),
      oz = sz(40795),
      vz = sz(40800);

    function Uz(zz, tz, sz, oz) {
      let Uz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (tz < 1 || sz < 1 || oz < 1) && (0, Fz.b)(722, tz, sz, oz);
      const Kz = zz._device,
        uz = Uz.mipMaps ?? !0,
        Nz = Uz.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        bz = Kz.createTexture({
          size: {
            width: tz,
            height: sz,
            depthOrArrayLayers: oz
          },
          dimension: "2d",
          format: Nz,
          mipLevelCount: uz ? (0, vz.b)(tz, sz) : 1,
          usage: Wz.k.TEXTURE_BINDING | Wz.k.COPY_DST | Wz.k.RENDER_ATTACHMENT
        }),
        wz = (0, Oz.c)(zz, {
          addressModeU: Uz.addressModeU ?? "repeat",
          addressModeV: Uz.addressModeV ?? "repeat",
          minFilter: Uz.minFilter ?? "linear",
          magFilter: Uz.magFilter ?? "linear",
          mipmapFilter: uz ? "linear" : "nearest"
        }),
        Dz = {
          texture: bz,
          view: bz.createView({
            dimension: "2d-array"
          }),
          sampler: wz,
          width: tz,
          height: sz,
          layers: oz
        };
      return (0, Xz.c)(Dz), Dz
    }

    function Kz(zz, tz, sz, Wz) {
      let Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (sz < 0 || sz >= tz.layers || (0 | sz) !== sz) && (0, Fz.b)(723, tz.layers, sz);
      const Oz = Xz.invertY ?? !0,
        vz = Xz.premultiplyAlpha ?? !1;
      zz._device.queue.copyExternalImageToTexture({
        source: Wz,
        flipY: Oz
      }, {
        texture: tz.texture,
        origin: [0, 0, sz],
        premultipliedAlpha: vz
      }, [tz.width, tz.height, 1]), tz.texture.mipLevelCount > 1 && (0, oz.generateMipmaps)(zz, tz.texture, sz)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);