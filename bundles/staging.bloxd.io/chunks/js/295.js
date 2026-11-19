export const id = 295;
export const ids = [295];
export const modules = {
  40924: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => dz,
      c: () => wz,
      d: () => Fz,
      g: () => Zz,
      k: () => fz,
      m: () => Xz
    });
    var Ez = bz(40874);
    var nz = "Babylon Lite v1.32.0",
      iz = bz(40928);

    function lz(zz) {
      return "clientWidth" in zz
    }
    var Mz = 1;

    function tz(zz, uz, bz) {
      const tz = uz.getContext("webgpu");
      tz || (0, Ez.c)(54), lz(uz) && uz.setAttribute("data-engine", nz);
      const Hz = bz?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        Oz = bz?.srgb ? (pz = Hz).endsWith("-srgb") ? pz : `${pz}-srgb` : Hz;
      var pz;
      const dz = bz?.alphaMode ?? "opaque";
      tz.configure({
        device: zz._device,
        format: Hz,
        alphaMode: dz,
        viewFormats: [Oz]
      });
      const Fz = 1 === bz?.msaaSamples ? 1 : 4,
        Zz = (0, iz.d)({
          lbl: "swapchain",
          format: Oz,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return Zz._eager = !0, {
        engine: zz,
        canvas: uz,
        format: Oz,
        msaaSamples: Fz,
        scRT: Zz,
        maxDevicePixelRatio: bz?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: Mz++,
        _context: tz,
        _configureFormat: Hz,
        _alphaMode: dz,
        _renderingContexts: []
      }
    }

    function Hz(zz) {
      const uz = zz._context.getCurrentTexture(),
        bz = zz.scRT;
      bz._colorTexture = uz, bz._colorView = uz.createView({
        format: zz.format
      }), bz._width = uz.width, bz._height = uz.height
    }

    function Oz(zz) {
      const uz = zz.canvas;
      if (!lz(uz)) return;
      const bz = zz._w ?? uz.clientWidth,
        Ez = zz._h ?? uz.clientHeight;
      if (!(bz > 0 && Ez > 0)) return;
      const nz = Math.min(globalThis.devicePixelRatio || 1, zz.maxDevicePixelRatio);
      pz(zz, bz * nz | 0, Ez * nz | 0)
    }

    function pz(zz, uz, bz) {
      const Ez = zz.canvas,
        nz = 0 | uz,
        iz = 0 | bz;
      if (nz > 0 && iz > 0 && (nz !== Ez.width || iz !== Ez.height)) {
        Ez.width = nz, Ez.height = iz, zz.scRT._width = nz, zz.scRT._height = iz;
        for (const uz of zz._renderingContexts) uz._resize?.()
      }
    }
    var dz = 0;

    function Fz(zz, uz) {
      return -1 !== zz._renderingContexts.indexOf(uz)
    }

    function Zz(zz, uz) {
      return -1 === zz._renderingContexts.indexOf(uz) && (zz._renderingContexts.push(uz), !0)
    }
    var Rz = null;
    var Kz = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function wz(zz, uz) {
      const iz = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...Rz ? Rz() : {}
      });
      iz || (0, Ez.c)(47);
      const lz = Rz?.deviceFeatures?.(iz, uz) ?? function(zz) {
          return Kz.filter((uz => zz.features.has(uz)))
        }(iz),
        Mz = await iz.requestDevice({
          requiredFeatures: lz,
          requiredLimits: uz?.requiredLimits
        });
      console.log(`${nz} - WebGPU engine`);
      const pz = !!uz?.useHighPrecisionMatrix,
        dz = !!uz?.useFloatingOrigin;
      if (dz && !pz && (0, Ez.c)(48), pz) {
        const {
          allocateF64Mat4: zz
        } = await bz.e(349).then((() => bz(60391)));
        0
      }
      let Fz, Zz, wz, Xz;
      if (dz) {
        const [{
          wrapRenderableForFO: zz,
          lightFoVersion: uz,
          applyLightFoOffset: Ez
        }, {
          makePackMeshWorld: nz
        }] = await Promise.all([bz.e(350).then((() => bz(60400))), bz.e(351).then((() => bz(60409)))]);
        Fz = zz, Zz = nz, wz = uz, Xz = Ez
      }
      const fz = {
          _device: Mz
        },
        sz = [fz];
      return Object.assign(fz, {
        engine: fz,
        surfaces: sz,
        _surfaces: sz,
        _device: Mz,
        _options: uz,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: pz,
        useFloatingOrigin: dz,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: Fz,
        _makePackMeshWorld: Zz,
        _lightFoVersion: wz,
        _applyLightFoOffset: Xz
      }, tz(fz, zz, uz)), Oz(fz), Hz(fz), fz
    }

    function Xz(zz, uz, bz) {
      pz(zz, uz, bz)
    }

    function fz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zz.surfaces;
      if (bz !== zz.surfaces)
        for (let nz = bz.length; nz--;) bz[nz].engine !== zz && (0, Ez.c)(49);
      sz(zz, uz, bz)
    }

    function sz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zz._surfaces,
        Ez = 0;
      for (let iz = bz.length; iz--;) Ez += bz[iz]._renderingContexts.length;
      if (!Ez) return zz.drawCallCount = 0, zz._flushGpuRetirements?.(zz);
      const nz = zz._device.createCommandEncoder({
        label: "frame"
      });
      zz._currentEncoder = nz, zz._currentDelta = uz;
      try {
        zz._gpuTimerBegin?.(nz), Ez = 0;
        for (let zz = 0; zz < bz.length; zz++) {
          const uz = bz[zz];
          uz._capturePreFrame?.(uz), Hz(uz);
          const nz = uz._renderingContexts;
          for (let zz = 0; zz < nz.length; zz++) {
            const uz = nz[zz];
            uz._update(), Ez += uz._drawCallsPre + uz._record()
          }
        }
        const uz = zz._currentEncoder;
        for (let zz = 0; zz < bz.length; zz++) {
          const Ez = bz[zz];
          Ez._captureService?.(Ez, uz)
        }
        zz._gpuTimerEnd?.(uz), zz._cbs[0] = uz.finish(), zz._device.queue.submit(zz._cbs), zz._flushGpuRetirements?.(zz), zz.drawCallCount = Ez, zz._gpuTimerResolve?.()
      } finally {
        zz._currentEncoder = void 0
      }
    }
  },
  40878: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      g: () => iz,
      k: () => Ez
    });
    var Ez = globalThis.GPUTextureUsage,
      nz = globalThis.GPUBufferUsage,
      iz = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  40944: (zz, uz, bz) => {
    function Ez(zz) {
      nz(zz.splice(0))
    }

    function nz(zz) {
      for (const bz of zz) try {
        bz()
      } catch (uz) {
        console.error("GPU resource retirement failed.", uz)
      }
    }

    function iz(zz, uz) {
      zz._flushGpuRetirements ??= lz, (zz._retirements ??= []).push(uz)
    }

    function lz(zz) {
      const uz = zz._retirements;
      if (!uz) return;
      zz._retirements = null;
      const bz = zz._retiring ??= new Set;
      bz.add(uz), queueMicrotask((() => {
        zz._device.queue.onSubmittedWorkDone().then((() => {
          bz.delete(uz), Ez(uz)
        })).catch((() => {}))
      }))
    }
    bz.d(uz, {
      c: () => iz
    })
  },
  40928: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz,
      e: () => lz,
      g: () => Mz
    });
    var Ez = bz(40878);

    function nz(zz) {
      const uz = zz.size;
      return "canvas" in uz ? uz.canvas : uz
    }

    function iz(zz) {
      return {
        _descriptor: zz,
        _resolveSize: nz,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function lz(zz, uz) {
      if (zz._eager) return void zz._syncEager?.(uz);
      Mz(zz);
      const bz = zz._descriptor,
        {
          width: iz,
          height: lz
        } = (zz._resolveSize ?? nz)(bz);
      zz._width = iz, zz._height = lz;
      const tz = uz._device;
      bz.format && (zz._colorTexture = tz.createTexture({
        label: bz.lbl,
        size: {
          width: iz,
          height: lz
        },
        format: bz.format,
        sampleCount: bz.samples,
        usage: Ez.k.RENDER_ATTACHMENT | Ez.k.TEXTURE_BINDING | Ez.k.COPY_SRC | Ez.k.COPY_DST
      }), zz._colorView = zz._colorTexture.createView()), bz.dFormat && (zz._depthTexture = tz.createTexture({
        label: bz.lbl,
        size: {
          width: iz,
          height: lz
        },
        format: bz.dFormat,
        sampleCount: bz.samples,
        usage: Ez.k.RENDER_ATTACHMENT | Ez.k.TEXTURE_BINDING
      }), zz._depthView = zz._depthTexture.createView())
    }

    function Mz(zz) {
      if (!zz || zz._eager && !zz._disposeAttachments) return;
      const uz = zz._colorTexture,
        bz = zz._depthTexture;
      if (zz._colorTexture = zz._depthTexture = null, zz._colorView = zz._depthView = null, zz._width = zz._height = 0, zz._disposeAttachments) zz._disposeAttachments(uz, bz);
      else try {
        uz?.destroy()
      } finally {
        !1 !== zz._ownsDepthTexture && bz?.destroy()
      }
    }
  },
  40939: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      e: () => nz,
      f: () => iz
    });
    var Ez = Float32Array,
      nz = Float64Array,
      iz = Uint32Array
  },
  40946: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez
    });
    var Ez = 16
  },
  40874: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz
    });
    var Ez = null;

    function nz(zz) {
      for (var uz = arguments.length, bz = new Array(uz > 1 ? uz - 1 : 0), nz = 1; nz < uz; nz++) bz[nz - 1] = arguments[nz];
      const iz = new Error(Ez?.(zz, bz) ?? `#${zz}`);
      throw iz.lite = bz, iz
    }
  },
  40906: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz
    });
    var Ez = bz(40890);

    function nz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const bz = uz.compare,
        nz = uz.lodMinClamp ?? 0,
        iz = uz.lodMaxClamp ?? 32,
        lz = void 0 !== bz || 0 !== nz || 32 !== iz ? `${bz??""}:${nz}:${iz}` : "";
      return (0, Ez.c)(zz, uz, lz)
    }
  },
  40886: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = null;

    function nz(zz) {
      const uz = Ez ??= new WeakMap;
      uz.set(zz, (uz.get(zz) ?? 0) + 1)
    }

    function iz(zz) {
      nz(zz.texture)
    }
  },
  40890: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Mz
    });
    var Ez = null,
      nz = "nearest",
      iz = "clamp-to-edge",
      lz = {
        minFilter: nz,
        magFilter: nz,
        mipmapFilter: nz,
        addressModeU: iz,
        addressModeV: iz,
        addressModeW: iz,
        maxAnisotropy: 1
      };

    function Mz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const nz = zz._device,
        iz = Ez ??= new WeakMap;
      let Mz = iz.get(nz);
      Mz || iz.set(nz, Mz = new Map);
      let tz = bz;
      for (const Ez in lz) {
        const zz = Ez;
        tz += `:${uz[zz]??lz[zz]}`
      }
      let Hz = Mz.get(tz);
      return Hz || Mz.set(tz, Hz = nz.createSampler(uz)), Hz
    }
  },
  40936: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => hz,
      f: () => gz
    });
    var Ez = bz(40928),
      nz = bz(40924);

    function iz(zz, uz) {
      uz._passes.length = 0, zz._currentProcessedTask = uz;
      try {
        uz.record()
      } finally {
        zz._currentProcessedTask = null
      }
    }
    var lz = bz(40939);

    function Mz(zz) {
      const uz = zz.worldMatrixVersion;
      if (zz._viewVer === uz) return zz._viewCache;
      const bz = zz._viewCache,
        Ez = zz.worldMatrix,
        nz = zz._useFloatingOrigin,
        iz = nz ? 0 : Ez[12],
        lz = nz ? 0 : Ez[13],
        Mz = nz ? 0 : Ez[14];
      return bz[0] = Ez[0], bz[1] = Ez[4], bz[2] = Ez[8], bz[3] = 0, bz[4] = Ez[1], bz[5] = Ez[5], bz[6] = Ez[9], bz[7] = 0, bz[8] = Ez[2], bz[9] = Ez[6], bz[10] = Ez[10], bz[11] = 0, bz[12] = -(Ez[0] * iz + Ez[1] * lz + Ez[2] * Mz), bz[13] = -(Ez[4] * iz + Ez[5] * lz + Ez[6] * Mz), bz[14] = -(Ez[8] * iz + Ez[9] * lz + Ez[10] * Mz), bz[15] = 1, zz._viewVer = uz, bz
    }
    var tz = null;

    function Hz(zz) {
      return zz._projFov === zz.fov && zz._projNear === zz.nearPlane && zz._projFar === zz.farPlane || (zz._projFov = zz.fov, zz._projNear = zz.nearPlane, zz._projFar = zz.farPlane, zz._projRev = (zz._projRev ?? 0) + 1), zz.worldMatrixVersion + (zz._projRev ?? 0)
    }

    function Oz(zz, uz) {
      const bz = Hz(zz);
      if (zz._projVer === bz && zz._projAspect === uz) return zz._projCache;
      const Ez = zz._projCache;
      return null !== tz && zz.ortho ? tz(zz, uz, Ez) : function(zz, uz, bz, Ez, nz) {
        const iz = 1 / Math.tan(.5 * uz),
          lz = nz - Ez;
        zz[0] = iz / bz, zz[5] = iz, zz[10] = -Ez / lz, zz[11] = 1, zz[14] = nz * Ez / lz
      }(Ez, zz.fov, uz, zz.nearPlane, zz.farPlane), zz._projVer = bz, zz._projAspect = uz, Ez
    }
    var pz = bz(40878);

    function dz(zz, uz, bz) {
      return zz._device.createBuffer({
        label: bz,
        size: (Ez = uz, nz = 16, Math.ceil(Ez / nz) * nz),
        usage: pz.d.UNIFORM | pz.d.COPY_DST
      });
      var Ez, nz
    }
    var Fz = bz(40944),
      Zz = null;

    function Rz(zz) {
      const uz = zz._device,
        bz = Zz ??= new WeakMap;
      let Ez = bz.get(uz);
      return Ez || (Ez = uz.createBindGroupLayout({
        label: "tK",
        entries: [{
          binding: 0,
          visibility: pz.g.VERTEX | pz.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: pz.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), bz.set(uz, Ez)), Ez
    }

    function Kz(zz, uz, bz) {
      const Ez = zz._device,
        nz = dz(zz, uz.byteLength, bz);
      try {
        Ez.queue.writeBuffer(nz, 0, uz.buffer, uz.byteOffset, uz.byteLength)
      } catch (iz) {
        throw nz.destroy(), iz
      }
      return nz
    }
    var wz = bz(40946),
      Xz = new lz.f(1),
      fz = new lz.b(Xz.buffer);

    function sz(zz) {
      let uz = 0;
      for (const bz of zz) uz += bz._lightVersion ?? 0;
      return uz
    }

    function rz(zz, uz) {
      zz.fill(0);
      let bz = 0;
      for (const Ez of uz) {
        if (bz >= wz.b) break;
        Ez._writeLightUbo && (Ez._writeLightUbo(zz, 4 + 16 * bz), bz++)
      }
      Xz[0] = bz, zz[0] = fz[0]
    }

    function oz(zz, uz) {
      let bz = uz._lightGpuState;
      const Ez = 16 + 16 * wz.b * 4;
      if (bz && bz._byteSize === Ez) return bz;
      const nz = !bz;
      bz?._buffer.destroy();
      const iz = new lz.b(Ez / 4);
      return rz(iz, uz.lights), zz._applyLightFoOffset?.(iz, uz), bz = {
        _buffer: Kz(zz, iz),
        _scratch: iz,
        hV: sz(uz.lights) + (zz._lightFoVersion?.(uz) ?? 0),
        _listVersion: uz._lightListVersion ?? 0,
        _lightCount: uz.lights.length,
        _byteSize: Ez
      }, uz._lightGpuState = bz, nz && uz._disposables.push((() => {
        uz._lightGpuState?._buffer.destroy(), uz._lightGpuState = void 0
      })), bz
    }

    function Nz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const nz = uz;
      if (0 === Ez && 16 === nz.length) return void zz.set(nz, bz);
      const iz = Ez,
        lz = bz;
      zz[lz + 0] = nz[iz + 0], zz[lz + 1] = nz[iz + 1], zz[lz + 2] = nz[iz + 2], zz[lz + 3] = nz[iz + 3], zz[lz + 4] = nz[iz + 4], zz[lz + 5] = nz[iz + 5], zz[lz + 6] = nz[iz + 6], zz[lz + 7] = nz[iz + 7], zz[lz + 8] = nz[iz + 8], zz[lz + 9] = nz[iz + 9], zz[lz + 10] = nz[iz + 10], zz[lz + 11] = nz[iz + 11], zz[lz + 12] = nz[iz + 12], zz[lz + 13] = nz[iz + 13], zz[lz + 14] = nz[iz + 14], zz[lz + 15] = nz[iz + 15]
    }

    function vz(zz, uz, bz, Ez, nz) {
      zz.fill(0);
      const iz = function(zz, uz) {
          const bz = Hz(zz);
          if (zz._vpVer === bz && zz._vpAspect === uz) return zz._vpCache;
          const Ez = zz._vpCache;
          return function(zz, uz, bz, Ez, nz, iz) {
            const lz = bz[Ez],
              Mz = bz[Ez + 1],
              tz = bz[Ez + 2],
              Hz = bz[Ez + 3],
              Oz = bz[Ez + 4],
              pz = bz[Ez + 5],
              dz = bz[Ez + 6],
              Fz = bz[Ez + 7],
              Zz = bz[Ez + 8],
              Rz = bz[Ez + 9],
              Kz = bz[Ez + 10],
              wz = bz[Ez + 11],
              Xz = bz[Ez + 12],
              fz = bz[Ez + 13],
              sz = bz[Ez + 14],
              rz = bz[Ez + 15];
            let oz = nz[iz],
              Nz = nz[iz + 1],
              vz = nz[iz + 2],
              xz = nz[iz + 3];
            zz[uz] = lz * oz + Oz * Nz + Zz * vz + Xz * xz, zz[uz + 1] = Mz * oz + pz * Nz + Rz * vz + fz * xz, zz[uz + 2] = tz * oz + dz * Nz + Kz * vz + sz * xz, zz[uz + 3] = Hz * oz + Fz * Nz + wz * vz + rz * xz, oz = nz[iz + 4], Nz = nz[iz + 5], vz = nz[iz + 6], xz = nz[iz + 7], zz[uz + 4] = lz * oz + Oz * Nz + Zz * vz + Xz * xz, zz[uz + 5] = Mz * oz + pz * Nz + Rz * vz + fz * xz, zz[uz + 6] = tz * oz + dz * Nz + Kz * vz + sz * xz, zz[uz + 7] = Hz * oz + Fz * Nz + wz * vz + rz * xz, oz = nz[iz + 8], Nz = nz[iz + 9], vz = nz[iz + 10], xz = nz[iz + 11], zz[uz + 8] = lz * oz + Oz * Nz + Zz * vz + Xz * xz, zz[uz + 9] = Mz * oz + pz * Nz + Rz * vz + fz * xz, zz[uz + 10] = tz * oz + dz * Nz + Kz * vz + sz * xz, zz[uz + 11] = Hz * oz + Fz * Nz + wz * vz + rz * xz, oz = nz[iz + 12], Nz = nz[iz + 13], vz = nz[iz + 14], xz = nz[iz + 15], zz[uz + 12] = lz * oz + Oz * Nz + Zz * vz + Xz * xz, zz[uz + 13] = Mz * oz + pz * Nz + Rz * vz + fz * xz, zz[uz + 14] = tz * oz + dz * Nz + Kz * vz + sz * xz, zz[uz + 15] = Hz * oz + Fz * Nz + wz * vz + rz * xz
          }(Ez, 0, Oz(zz, uz), 0, Mz(zz), 0), zz._vpVer = bz, zz._vpAspect = uz, Ez
        }(Ez, nz),
        lz = Mz(Ez),
        tz = Ez.worldMatrix;
      Nz(zz, iz, 0), Nz(zz, lz, 16), uz.useFloatingOrigin ? (zz[32] = 0, zz[33] = 0, zz[34] = 0) : (zz[32] = tz[12], zz[33] = tz[13], zz[34] = tz[14]), zz[87] = uz.canvas.width;
      const pz = bz.imageProcessing;
      zz[76] = pz.exposure, zz[77] = pz.contrast, zz[78] = bz._envTextures?.lodGenerationScale ?? .8, zz[79] = +pz.toneMappingEnabled, zz[37] = uz.canvas.height
    }

    function xz(zz, uz) {
      return {
        _renderables: zz,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: uz
      }
    }

    function Jz(zz, uz, bz) {
      zz.clr ??= !0;
      const nz = zz.rt._descriptor,
        iz = zz.depth?._descriptor,
        tz = {
          _colorFormat: nz.format,
          _depthStencilFormat: iz?.dFormat ?? nz.dFormat,
          _depthCompare: nz.depthCompare ?? iz?.depthCompare,
          _sampleCount: nz.samples
        },
        Oz = {
          loadOp: "clear",
          storeOp: "store"
        },
        pz = {
          ...xz([], -1),
          name: zz.name,
          _config: zz,
          _ownsTargets: !zz.sharedRt,
          engine: uz,
          tK: bz,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [Oz]
          },
          _colorAttachment: Oz,
          _sceneUBO: dz(uz, 368),
          _suData: new lz.b(92),
          _sceneUboCacheKey: [],
          _targetSignature: tz,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (pz._disposed) throw new Error("RenderTask has been disposed.");
            pz._recordExplicit ? pz._recordExplicit(pz, !0) : Lz(pz, !1 !== zz.autoMirror ? bz._renderables.slice() : pz._renderables, !0)
          },
          execute: () => function(zz, uz, bz) {
            if (!1 === zz.enabled) return 0;
            const Ez = zz.tK;
            ! function(zz, uz, bz) {
              const Ez = zz.tK;
              !1 !== zz._config.autoMirror && zz._lastVersion !== Ez._renderableVersion && Lz(zz, Ez._renderables.slice());
              Gz(zz, uz);
              const nz = zz._updateContext,
                iz = zz._config.cam ?? Ez.camera;
              bz._colorFormat && (zz._config._skipClusteredLights || Ez._clusteredLightUpdater?.(iz, nz.targetWidth, nz.targetHeight), function(zz, uz) {
                const bz = oz(zz, uz),
                  Ez = sz(uz.lights) + (zz._lightFoVersion?.(uz) ?? 0),
                  nz = uz._lightListVersion ?? 0;
                Ez === bz.hV && nz === bz._listVersion && uz.lights.length === bz._lightCount || (bz.hV = Ez, bz._listVersion = nz, bz._lightCount = uz.lights.length, rz(bz._scratch, uz.lights), zz._applyLightFoOffset?.(bz._scratch, uz), zz._device.queue.writeBuffer(bz._buffer, 0, bz._scratch)), bz._buffer
              }(uz, Ez));
              (function(zz, uz, bz, Ez) {
                if (!Ez) return;
                const nz = Ez.viewport,
                  iz = zz._config.rt,
                  lz = (zz._config.cs ? uz.canvas.width / uz.canvas.height : iz._width / iz._height) * (nz ? nz.width / nz.height : 1),
                  Mz = bz.fog,
                  tz = bz.imageProcessing,
                  Oz = Hz(Ez),
                  pz = bz._envTextures,
                  dz = zz._sceneUboCacheKey;
                if (dz[0] === Ez && dz[1] === Mz && dz[2] === Oz && dz[3] === lz && dz[4] === tz.exposure && dz[5] === tz.contrast && dz[6] === pz) return;
                dz[0] = Ez, dz[1] = Mz, dz[2] = Oz, dz[3] = lz, dz[4] = tz.exposure, dz[5] = tz.contrast, dz[6] = pz;
                const Fz = zz._suData;
                vz(Fz, uz, bz, Ez, lz);
                const Zz = bz._sceneUboContributors;
                if (Zz)
                  for (const Hz of Zz) Hz(Fz, bz);
                uz._device.queue.writeBuffer(zz._sceneUBO, 0, Fz)
              })(zz, uz, Ez, iz), nz.HI = iz, zz._batchState?._reset(), az(zz._opaqueBindings, nz), az(zz._directBindings, nz), az(zz._transparentBindings, nz), zz._batchState?._flush(uz),
                function(zz, uz) {
                  const bz = zz._transparentBindings;
                  if (bz.length <= 1 || !uz) return;
                  const Ez = Mz(uz);
                  for (const nz of bz) {
                    const zz = nz.renderable._worldCenter;
                    nz._sortDistance = zz ? zz[0] * Ez[2] + zz[1] * Ez[6] + zz[2] * Ez[10] + Ez[14] : 0
                  }
                  bz.sort(Az)
                }(zz, iz)
            }(zz, uz, bz);
            const nz = zz._colorAttachment,
              iz = zz._config;
            iz.rt._colorView && (iz.rt === Ez.surface.scRT && (nz.view = iz.rt._colorView), nz.resolveTarget = iz.rst?._colorView ?? void 0, nz.clearValue = iz.clrColor ?? Ez.clearColor, nz.loadOp = iz.clr ? "clear" : "load");
            if (zz._executeWithTransmission) return zz._executeWithTransmission(bz._sampleCount);
            const lz = uz._currentEncoder.beginRenderPass(zz._renderPassDescriptor),
              tz = Pz(zz, lz);
            return lz.end(), tz
          }(pz, uz, tz),
          dispose() {
            if (pz._disposed) return;
            pz._disposed = !0;
            const uz = pz._pendingMeshes;
            uz && (uz.length = 0);
            for (const zz of pz._renderables) pz._retireRenderable?.(pz.engine, zz);
            pz._passes.length = pz._opaqueBindings.length = pz._directBindings.length = 0, pz._transparentBindings.length = pz._renderables.length = pz._ob.length = 0, pz._ownsTargets && ((0, Ez.g)(zz.rt), (0, Ez.g)(zz.rst)), zz.depth?._eager || (0, Ez.g)(zz.depth);
            const bz = pz._sceneUBO;
            (0, Fz.c)(pz.engine, (() => bz.destroy())), pz._batchState?._release(pz.engine), pz._batchState = void 0
          }
        };
      return pz
    }

    function Az(zz, uz) {
      return uz._sortDistance - zz._sortDistance || zz.renderable.order - uz.renderable.order
    }

    function Tz(zz, uz) {
      return zz.renderable.order - uz.renderable.order
    }

    function Lz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz._renderables,
        bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        nz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        iz = arguments.length > 4 ? arguments[4] : void 0;
      const lz = zz._config,
        Mz = lz.rt,
        tz = zz._batchState,
        Hz = xz(uz, zz.tK._renderableVersion);
      if (bz) {
        const uz = (uz, bz) => {
          uz && (bz || zz._ownsTargets || uz._eager) && (0, Ez.e)(uz, zz.engine)
        };
        uz(Mz), Mz._descriptor.samples > 1 && uz(lz.rst), uz(lz.depth, !0)
      }
      const {
        _opaqueBindings: Oz,
        _directBindings: pz,
        _transparentBindings: dz
      } = Hz;
      try {
        for (const bz of uz) {
          const uz = bz.bind(zz.engine, zz._targetSignature);
          Hz._batchState = zz._targetSignature._collectBatches?.(Hz._batchState, uz), bz.isTransparent || bz._transmissive ? dz.push(uz) : bz._direct ? pz.push(uz) : Oz.push(uz)
        }
        Oz.sort(Tz), pz.sort(Tz), bz && Gz(zz, zz.engine, !1)
      } catch (Fz) {
        throw Hz._batchState?._release(void 0, iz ?? [tz]), Fz
      }
      return bz && (! function(zz, uz) {
        const bz = zz._config,
          Ez = zz._colorAttachment;
        Ez.view = uz._colorView, zz._renderPassDescriptor.colorAttachments = uz._colorView ? [Ez] : [];
        const nz = bz.depth ?? uz,
          iz = nz._depthView;
        let lz;
        if (iz) {
          const zz = nz._descriptor,
            uz = (bz.depth ? nz._eager : !1 === bz.depthClear) ? "load" : "clear";
          lz = {
            view: iz,
            depthClearValue: zz.depthClearValue ?? 0,
            depthLoadOp: uz,
            depthStoreOp: "store"
          }, zz.dFormat?.includes("stencil") && (lz.stencilClearValue = 0, lz.stencilLoadOp = uz, lz.stencilStoreOp = "store")
        }
        zz._renderPassDescriptor.depthStencilAttachment = lz
      }(zz, Mz), zz._updateContext.targetWidth = Mz._width, zz._updateContext.targetHeight = Mz._height), nz && (Object.assign(zz, Hz), tz?._release(zz.engine, [Hz._batchState])), Hz
    }

    function Pz(zz, uz) {
      const bz = zz.engine,
        Ez = zz._config,
        iz = Ez.rt,
        lz = zz.tK,
        Mz = zz._opaqueBindings,
        tz = zz._ob,
        Hz = zz._sceneBG;
      if (function(zz, uz, bz, Ez) {
          const nz = uz?.viewport;
          if (!nz) return;
          const iz = Math.floor(nz.x * bz),
            lz = Math.floor((1 - nz.y - nz.height) * Ez),
            Mz = Math.ceil((nz.x + nz.width) * bz) - iz,
            tz = Math.ceil((1 - nz.y) * Ez) - lz;
          zz.setViewport(iz, lz, Mz, tz, 0, 1), zz.setScissorRect(iz, lz, Mz, tz)
        }(uz, Ez.cam ?? lz.camera, iz._width, iz._height), uz.setBindGroup(0, Hz), zz._lastVis !== nz.b || !tz.length) {
        const uz = iz._descriptor,
          Ez = bz._device.createRenderBundleEncoder({
            colorFormats: uz.format ? [uz.format] : [],
            depthStencilFormat: zz._targetSignature._depthStencilFormat,
            sampleCount: uz.samples
          });
        Ez.setBindGroup(0, Hz), Vz(Ez, Mz, bz), tz[0] = Ez.finish(), zz._lastVis = nz.b
      }
      let Oz = Mz.length;
      return uz.executeBundles(tz), uz.setBindGroup(0, Hz), Oz += Vz(uz, zz._directBindings, bz), Oz += Vz(uz, zz._transparentBindings, bz), Oz
    }

    function Gz(zz, uz) {
      let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Ez = oz(uz, zz.tK)._buffer;
      if (Ez === zz._lightsUBO) return;
      const nz = uz._device.createBindGroup({
        layout: Rz(uz),
        entries: [{
          binding: 0,
          resource: {
            buffer: zz._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: Ez
          }
        }]
      });
      zz._lightsUBO = Ez, zz._sceneBG = nz, bz && (zz._ob = [])
    }

    function az(zz, uz) {
      for (const bz of zz) bz.update?.(uz)
    }

    function Vz(zz, uz, bz) {
      let Ez = null,
        nz = 0;
      for (const iz of uz) {
        const uz = iz.renderable.mesh;
        uz && !1 === uz.visible || (iz.pipeline !== Ez && (zz.setPipeline(iz.pipeline), Ez = iz.pipeline), nz += iz.draw(zz, bz))
      }
      return nz
    }

    function mz(zz) {
      const uz = zz._materialSwapQueue;
      if (!uz[0] || zz._runtimeBuilds?.w) return;
      let Ez, nz, iz;
      const lz = zz._renderables;
      for (const bz of uz) {
        const uz = bz.material;
        if (!uz) continue;
        const Mz = bz._runtimeThinBuild;
        if (Mz) {
          nz = Mz(zz, bz, nz);
          continue
        }
        const tz = zz._groups.get(uz._buildGroup),
          Hz = tz?.r;
        if (!Hz) {
          (iz ??= []).push(bz);
          continue
        }
        if (tz._w?.(bz)) {
          (iz ??= []).push([bz, uz]);
          continue
        }
        const Oz = zz._meshDisposables.get(bz);
        Oz && (zz._meshDisposables.delete(bz), (0, Fz.c)(zz.surface.engine, (() => Oz.forEach((zz => zz())))));
        const pz = tz.o;
        let dz;
        for (let zz = lz.length; zz--;) lz[zz].mesh === bz && (dz = lz.splice(zz, 1)[0]);
        uz._csmGen = -~uz._csmGen;
        const Zz = Hz(zz, bz);
        if (pz) {
          const zz = pz.indexOf(dz);
          zz < 0 ? pz.push(Zz) : pz[zz] = Zz
        }
        Ez = lz.push(Zz)
      }
      if (Ez && (lz.sort(((zz, uz) => zz.order - uz.order)), zz._renderableVersion++, zz._materialEpoch++), uz.length = 0, !iz) return nz;
      const Mz = iz;
      return bz.e(355).then((() => bz(60425))).then((uz => {
        let {
          C: bz
        } = uz;
        return bz(zz, Mz, nz)
      }), (uz => {
        const bz = zz._runtimeBuilds;
        bz ? bz._x(uz) : console.error(uz)
      }))
    }
    var qz = null;

    function hz(zz, uz) {
      const bz = zz.engine,
        nz = {
          _kind: "tK",
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
            bz.useFloatingOrigin && nz.camera && !nz.camera._useFloatingOrigin && (nz.camera._useFloatingOrigin = !0, nz.camera._viewVer = -1, nz.camera._vpVer = -1);
            const zz = nz.fixedDeltaMs > 0 ? nz.fixedDeltaMs : bz._currentDelta,
              uz = bz._currentEncoder;
            let Ez = 0;
            for (const bz of nz._beforeRender) bz(zz);
            nz._materialSwapQueue.length && mz(nz);
            for (const iz of nz._prePasses) Ez += iz.execute(uz, bz);
            for (const iz of nz._uniformUpdaters) iz.update(bz);
            nz._drawCallsPre = Ez
          },
          _record: () => nz._frameGraph.execute(),
          _resize() {
            nz._frameGraph.build()
          }
        },
        lz = function() {
          const zz = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let uz = 0; uz < zz._tasks.length; uz++) iz(zz, zz._tasks[uz]);
              for (const uz of zz._tasks)
                for (const zz of uz._passes) zz._initialize()
            },
            execute() {
              let uz = 0;
              for (const bz of zz._tasks)
                if (!1 !== bz.executionEnabled)
                  if (bz.execute) uz += bz.execute();
                  else
                    for (const zz of bz._passes) uz += zz._execute();
              return uz
            },
            dispose() {
              for (const uz of zz._tasks) uz.dispose();
              zz._tasks.length = 0, zz._currentProcessedTask = null
            }
          };
          return zz
        }();
      if (nz._frameGraph = lz, !1 !== uz?.defaultRenderTask) {
        const uz = zz.msaaSamples > 1,
          iz = uz ? (0, Ez.d)({
            lbl: "scene-color",
            format: zz.format,
            dFormat: "depth24plus-stencil8",
            samples: zz.msaaSamples,
            size: zz
          }) : zz.scRT,
          Mz = uz ? void 0 : (0, Ez.d)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: zz
          });
        ! function(zz, uz) {
          zz._tasks.push(uz)
        }(lz, Jz({
          name: "tK",
          rt: iz,
          rst: uz ? zz.scRT : void 0,
          depth: Mz
        }, bz, nz))
      }
      return nz._disposables.push((() => lz.dispose())), nz
    }
    async function Uz(zz) {
      const uz = zz;
      for (uz._built || (uz._materialSwapQueue.length = 0); uz._deferredBuilders.length;) {
        const zz = uz._deferredBuilders.splice(0);
        await Promise.all(zz.map((zz => zz())))
      }
      await mz(uz), qz?.get(uz)?.() || (uz._runtimeBuilds?._e(), uz._renderableVersion++, uz._built = !0), await (uz._rebuildHook?.(uz))
    }
    var cz = null;
    async function gz(zz) {
      const uz = zz,
        Ez = uz.surface;
      (0, nz.d)(Ez, uz) || (await Uz(zz), uz._renderables.sort(Sz), await Promise.all(uz._frameGraph._tasks.map((zz => zz._preload?.()))), cz && await cz(uz), uz._frameGraph.build(), Ez._renderingContexts[0] && (await bz.e(353).then((() => bz(60420)))).configureSwapchainOverlayScene(Ez, uz), qz?.get(uz)?.() || (0, nz.g)(Ez, uz))
    }
    var Sz = (zz, uz) => zz.order - uz.order
  },
  40915: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Hz,
      d: () => Oz
    });
    var Ez = bz(40874),
      nz = bz(40878),
      iz = bz(40886),
      lz = bz(40890),
      Mz = bz(40893),
      tz = bz(40898);

    function Hz(zz, uz, bz) {
      let Mz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (uz < 1 || bz < 1) && (0, Ez.c)(676, uz, bz);
      const Hz = zz._device,
        Oz = Mz.mipMaps ?? !1,
        pz = Mz.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        dz = Oz ? (0, tz.d)(uz, bz) : 1,
        Fz = Hz.createTexture({
          size: {
            width: uz,
            height: bz
          },
          format: pz,
          mipLevelCount: dz,
          usage: nz.k.TEXTURE_BINDING | nz.k.COPY_DST | nz.k.RENDER_ATTACHMENT
        }),
        Zz = {
          addressModeU: Mz.addressModeU ?? "clamp-to-edge",
          addressModeV: Mz.addressModeV ?? "clamp-to-edge",
          minFilter: Mz.minFilter ?? "linear",
          magFilter: Mz.magFilter ?? "linear",
          mipmapFilter: Oz ? "linear" : "nearest"
        },
        Rz = (0, lz.c)(zz, Zz),
        Kz = {
          texture: Fz,
          view: Fz.createView(),
          sampler: Rz,
          width: uz,
          height: bz
        };
      return (0, iz.d)(Kz), zz._dlr && zz._dlr.t(Kz, {
        kind: "dynamic",
        width: uz,
        height: bz,
        format: pz,
        levels: dz,
        samplerDesc: Zz,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), Kz
    }

    function Oz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const nz = Ez.invertY ?? !0,
        iz = Ez.premultiplyAlpha ?? !1;
      zz._device.queue.copyExternalImageToTexture({
        source: bz,
        flipY: nz
      }, {
        texture: uz.texture,
        premultipliedAlpha: iz
      }, [uz.width, uz.height]);
      const lz = uz._recoverySource;
      lz && "dynamic" === lz.kind && (lz.source = bz, lz.flipY = nz, lz.premultipliedAlpha = iz), uz.texture.mipLevelCount > 1 && (0, Mz.generateMipmaps)(zz, uz.texture)
    }
  },
  40911: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => tz
    });
    var Ez = bz(40874),
      nz = bz(40878),
      iz = bz(40886),
      lz = bz(40890),
      Mz = bz(40898);
    async function tz(zz, uz) {
      let tz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [Hz, Oz] = function(zz) {
        const uz = zz,
          bz = [
            [uz.displayWidth, uz.displayHeight],
            [uz.videoWidth, uz.videoHeight],
            [uz.naturalWidth, uz.naturalHeight],
            [uz.width, uz.height]
          ];
        for (const [Ez, nz] of bz)
          if (void 0 !== Ez && void 0 !== nz && Number.isInteger(Ez) && Number.isInteger(nz) && Ez > 0 && nz > 0) return [Ez, nz];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(uz), [pz, dz] = function(zz, uz, bz) {
        if (void 0 === bz) return [zz, uz];
        if (!Number.isInteger(bz) || bz < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${bz})`);
        if (Math.max(zz, uz) <= bz) return [zz, uz];
        const Ez = bz / Math.max(zz, uz);
        return zz >= uz ? [bz, Math.max(1, Math.round(uz * Ez))] : [Math.max(1, Math.round(zz * Ez)), bz]
      }(Hz, Oz, tz.maxDimension), Fz = tz.mipMaps ?? !0, Zz = tz.premultiplyAlpha ?? !1;
      let Rz = uz,
        Kz = null;
      const wz = {
        texture: null
      };
      try {
        pz === Hz && dz === Oz || (Kz = await createImageBitmap(uz, {
          resizeWidth: pz,
          resizeHeight: dz,
          resizeQuality: "high",
          premultiplyAlpha: Zz ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), Rz = Kz);
        const Xz = zz._device,
          fz = tz.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          sz = Fz ? (0, Mz.d)(pz, dz) : 1,
          rz = sz > 1 ? (await Promise.resolve().then((() => bz(40893)))).generateMipmaps : null,
          oz = {
            addressModeU: tz.addressModeU ?? "repeat",
            addressModeV: tz.addressModeV ?? "repeat",
            minFilter: tz.minFilter ?? "linear",
            magFilter: tz.magFilter ?? "linear",
            mipmapFilter: Fz ? "linear" : "nearest"
          };
        oz.maxAnisotropy = "linear" === oz.minFilter && "linear" === oz.magFilter && "linear" === oz.mipmapFilter ? 4 : 1;
        const Nz = tz.invertY ?? !0,
          vz = async uz => {
            let bz;
            Xz.pushErrorScope("validation"), Xz.pushErrorScope("out-of-memory");
            let iz = null;
            try {
              const bz = wz.texture = Xz.createTexture({
                size: {
                  width: pz,
                  height: dz
                },
                format: fz,
                mipLevelCount: sz,
                usage: nz.k.TEXTURE_BINDING | nz.k.COPY_DST | nz.k.RENDER_ATTACHMENT
              });
              Xz.queue.copyExternalImageToTexture({
                source: uz,
                flipY: Nz
              }, {
                texture: bz,
                premultipliedAlpha: Zz
              }, {
                width: pz,
                height: dz
              }), rz && rz(zz, bz), iz = (0, lz.c)(zz, oz)
            } catch (Fz) {
              bz = Fz
            }
            const [Mz, tz] = await Promise.all([Xz.popErrorScope(), Xz.popErrorScope()]);
            if (bz) throw bz;
            const Hz = tz ?? Mz;
            if (Hz) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${Hz.message}`, {
              cause: Hz
            });
            const Oz = wz.texture;
            return Oz && iz || (0, Ez.c)(677), {
              texture: Oz,
              view: Oz.createView(),
              sampler: iz,
              width: pz,
              height: dz
            }
          }, xz = await (zz._dlr?.x(Rz, pz, dz, fz, sz, oz, Nz, Zz, vz)) ?? await vz(Rz);
        return (0, iz.d)(xz), xz
      } catch (Xz) {
        throw wz.texture?.destroy(), Xz
      } finally {
        Kz?.close()
      }
    }
  },
  40893: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      generateMipmaps: () => Fz,
      recordMipmaps: () => Zz
    });
    var Ez = bz(40878),
      nz = bz(40890),
      iz = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var lz = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      Mz = null,
      tz = null,
      Hz = null,
      Oz = null,
      pz = null;

    function dz(zz) {
      const uz = zz._device;
      uz !== pz && (Mz?.clear(), Mz = null, tz = null, Hz = null, Oz = null, pz = null, pz = uz), tz ??= uz.createShaderModule({
        code: lz
      }), Hz ??= function(zz) {
        return (0, nz.c)(zz, iz)
      }(zz), Oz ??= uz.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: Ez.g.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: Ez.g.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function Fz(zz, uz, bz) {
      const Ez = zz._device,
        nz = Ez.createCommandEncoder();
      Zz(zz, uz, nz, bz), Ez.queue.submit([nz.finish()])
    }

    function Zz(zz, uz, bz, Ez) {
      if (uz.mipLevelCount <= 1) return;
      const nz = zz._device,
        iz = function(zz, uz) {
          const bz = zz._device;
          dz(zz), Mz ??= new Map;
          let Ez = Mz.get(uz);
          return Ez || (Ez = bz.createRenderPipeline({
            layout: bz.createPipelineLayout({
              bindGroupLayouts: [Oz]
            }),
            vertex: {
              module: tz,
              entryPoint: "vs"
            },
            fragment: {
              module: tz,
              entryPoint: "fs",
              targets: [{
                format: uz
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), Mz.set(uz, Ez)), Ez
        }(zz, uz.format),
        lz = null != Ez ? {
          dimension: "2d",
          baseArrayLayer: Ez,
          arrayLayerCount: 1
        } : {};
      for (let Mz = 1; Mz < uz.mipLevelCount; Mz++) {
        const zz = uz.createView({
            baseMipLevel: Mz - 1,
            mipLevelCount: 1,
            ...lz
          }),
          Ez = uz.createView({
            baseMipLevel: Mz,
            mipLevelCount: 1,
            ...lz
          }),
          tz = nz.createBindGroup({
            layout: Oz,
            entries: [{
              binding: 0,
              resource: zz
            }, {
              binding: 1,
              resource: Hz
            }]
          }),
          pz = bz.beginRenderPass({
            colorAttachments: [{
              view: Ez,
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
        pz.setPipeline(iz), pz.setBindGroup(0, tz), pz.draw(3), pz.end()
      }
    }
  },
  40898: (zz, uz, bz) => {
    function Ez(zz, uz) {
      return Math.floor(Math.log2(Math.max(zz, uz))) + 1
    }
    bz.d(uz, {
      d: () => Ez
    })
  },
  40866: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Hz,
      f: () => Oz
    });
    var Ez = bz(40874),
      nz = bz(40878),
      iz = bz(40886),
      lz = bz(40890),
      Mz = bz(40893),
      tz = bz(40898);

    function Hz(zz, uz, bz, Mz) {
      let Hz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (uz < 1 || bz < 1 || Mz < 1) && (0, Ez.c)(722, uz, bz, Mz);
      const Oz = zz._device,
        pz = Hz.mipMaps ?? !0,
        dz = Hz.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Fz = Oz.createTexture({
          size: {
            width: uz,
            height: bz,
            depthOrArrayLayers: Mz
          },
          dimension: "2d",
          format: dz,
          mipLevelCount: pz ? (0, tz.d)(uz, bz) : 1,
          usage: nz.k.TEXTURE_BINDING | nz.k.COPY_DST | nz.k.RENDER_ATTACHMENT
        }),
        Zz = (0, lz.c)(zz, {
          addressModeU: Hz.addressModeU ?? "repeat",
          addressModeV: Hz.addressModeV ?? "repeat",
          minFilter: Hz.minFilter ?? "linear",
          magFilter: Hz.magFilter ?? "linear",
          mipmapFilter: pz ? "linear" : "nearest"
        }),
        Rz = {
          texture: Fz,
          view: Fz.createView({
            dimension: "2d-array"
          }),
          sampler: Zz,
          width: uz,
          height: bz,
          layers: Mz
        };
      return (0, iz.d)(Rz), Rz
    }

    function Oz(zz, uz, bz, nz) {
      let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (bz < 0 || bz >= uz.layers || (0 | bz) !== bz) && (0, Ez.c)(723, uz.layers, bz);
      const lz = iz.invertY ?? !0,
        tz = iz.premultiplyAlpha ?? !1;
      zz._device.queue.copyExternalImageToTexture({
        source: nz,
        flipY: lz
      }, {
        texture: uz.texture,
        origin: [0, 0, bz],
        premultipliedAlpha: tz
      }, [uz.width, uz.height, 1]), uz.texture.mipLevelCount > 1 && (0, Mz.generateMipmaps)(zz, uz.texture, bz)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);