export const id = 283;
export const ids = [283];
export const modules = {
  40178: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => ey,
      h: () => ly,
      j: () => qb,
      k: () => sy,
      o: () => Cy,
      r: () => mb
    });
    var Uy = Wy(40121);
    var hy = "Babylon Lite v1.32.0",
      fy = Wy(40185);

    function Zy(yb) {
      return "clientWidth" in yb
    }
    var cb = 1;

    function Py(yb, bb, Wy) {
      const Py = bb.getContext("webgpu");
      Py || (0, Uy.d)(54), Zy(bb) && bb.setAttribute("data-engine", hy);
      const oy = Wy?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        By = Wy?.srgb ? (Ky = oy).endsWith("-srgb") ? Ky : `${Ky}-srgb` : oy;
      var Ky;
      const ey = Wy?.alphaMode ?? "opaque";
      Py.configure({
        device: yb._device,
        format: oy,
        alphaMode: ey,
        viewFormats: [By]
      });
      const qb = 1 === Wy?.msaaSamples ? 1 : 4,
        sy = (0, fy.b)({
          lbl: "swapchain",
          format: By,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return sy._eager = !0, {
        engine: yb,
        canvas: bb,
        format: By,
        msaaSamples: qb,
        scRT: sy,
        maxDevicePixelRatio: Wy?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: cb++,
        _context: Py,
        _configureFormat: oy,
        _alphaMode: ey,
        _renderingContexts: []
      }
    }

    function oy(yb) {
      const bb = yb._context.getCurrentTexture(),
        Wy = yb.scRT;
      Wy._colorTexture = bb, Wy._colorView = bb.createView({
        format: yb.format
      }), Wy._width = bb.width, Wy._height = bb.height
    }

    function By(yb) {
      const bb = yb.canvas;
      if (!Zy(bb)) return;
      const Wy = yb._w ?? bb.clientWidth,
        Uy = yb._h ?? bb.clientHeight;
      if (!(Wy > 0 && Uy > 0)) return;
      const hy = Math.min(globalThis.devicePixelRatio || 1, yb.maxDevicePixelRatio);
      Ky(yb, Wy * hy | 0, Uy * hy | 0)
    }

    function Ky(yb, bb, Wy) {
      const Uy = yb.canvas,
        hy = 0 | bb,
        fy = 0 | Wy;
      if (hy > 0 && fy > 0 && (hy !== Uy.width || fy !== Uy.height)) {
        Uy.width = hy, Uy.height = fy, yb.scRT._width = hy, yb.scRT._height = fy;
        for (const bb of yb._renderingContexts) bb._resize?.()
      }
    }
    var ey = 0;

    function qb(yb, bb) {
      return -1 !== yb._renderingContexts.indexOf(bb)
    }

    function sy(yb, bb) {
      return -1 === yb._renderingContexts.indexOf(bb) && (yb._renderingContexts.push(bb), !0)
    }
    var Sy = null;
    var Ey = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function ly(yb, bb) {
      const fy = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...Sy ? Sy() : {}
      });
      fy || (0, Uy.d)(47);
      const Zy = Sy?.deviceFeatures?.(fy, bb) ?? function(yb) {
          return Ey.filter((bb => yb.features.has(bb)))
        }(fy),
        cb = await fy.requestDevice({
          requiredFeatures: Zy,
          requiredLimits: bb?.requiredLimits
        });
      console.log(`${hy} - WebGPU engine`);
      const Ky = !!bb?.useHighPrecisionMatrix,
        ey = !!bb?.useFloatingOrigin;
      if (ey && !Ky && (0, Uy.d)(48), Ky) {
        const {
          allocateF64Mat4: yb
        } = await Wy.e(337).then((() => Wy(59779)));
        0
      }
      let qb, sy, ly, mb;
      if (ey) {
        const [{
          wrapRenderableForFO: yb,
          lightFoVersion: bb,
          applyLightFoOffset: Uy
        }, {
          makePackMeshWorld: hy
        }] = await Promise.all([Wy.e(338).then((() => Wy(59787))), Wy.e(339).then((() => Wy(59789)))]);
        qb = yb, sy = hy, ly = bb, mb = Uy
      }
      const Cy = {
          _device: cb
        },
        Ty = [Cy];
      return Object.assign(Cy, {
        engine: Cy,
        surfaces: Ty,
        _surfaces: Ty,
        _device: cb,
        _options: bb,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: Ky,
        useFloatingOrigin: ey,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: qb,
        _makePackMeshWorld: sy,
        _lightFoVersion: ly,
        _applyLightFoOffset: mb
      }, Py(Cy, yb, bb)), By(Cy), oy(Cy), Cy
    }

    function mb(yb, bb, Wy) {
      Ky(yb, bb, Wy)
    }

    function Cy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yb.surfaces;
      if (Wy !== yb.surfaces)
        for (let hy = Wy.length; hy--;) Wy[hy].engine !== yb && (0, Uy.d)(49);
      Ty(yb, bb, Wy)
    }

    function Ty(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yb._surfaces,
        Uy = 0;
      for (let fy = Wy.length; fy--;) Uy += Wy[fy]._renderingContexts.length;
      if (!Uy) return yb.drawCallCount = 0, yb._flushGpuRetirements?.(yb);
      const hy = yb._device.createCommandEncoder({
        label: "frame"
      });
      yb._currentEncoder = hy, yb._currentDelta = bb;
      try {
        yb._gpuTimerBegin?.(hy), Uy = 0;
        for (let yb = 0; yb < Wy.length; yb++) {
          const bb = Wy[yb];
          bb._capturePreFrame?.(bb), oy(bb);
          const hy = bb._renderingContexts;
          for (let yb = 0; yb < hy.length; yb++) {
            const bb = hy[yb];
            bb._update(), Uy += bb._drawCallsPre + bb._record()
          }
        }
        const bb = yb._currentEncoder;
        for (let yb = 0; yb < Wy.length; yb++) {
          const Uy = Wy[yb];
          Uy._captureService?.(Uy, bb)
        }
        yb._gpuTimerEnd?.(bb), yb._cbs[0] = bb.finish(), yb._device.queue.submit(yb._cbs), yb._flushGpuRetirements?.(yb), yb.drawCallCount = Uy, yb._gpuTimerResolve?.()
      } finally {
        yb._currentEncoder = void 0
      }
    }
  },
  40130: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy,
      g: () => fy,
      j: () => Uy
    });
    var Uy = globalThis.GPUTextureUsage,
      hy = globalThis.GPUBufferUsage,
      fy = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  40204: (yb, bb, Wy) => {
    function Uy(yb) {
      hy(yb.splice(0))
    }

    function hy(yb) {
      for (const Wy of yb) try {
        Wy()
      } catch (bb) {
        console.error("GPU resource retirement failed.", bb)
      }
    }

    function fy(yb, bb) {
      yb._flushGpuRetirements ??= Zy, (yb._retirements ??= []).push(bb)
    }

    function Zy(yb) {
      const bb = yb._retirements;
      if (!bb) return;
      yb._retirements = null;
      const Wy = yb._retiring ??= new Set;
      Wy.add(bb), queueMicrotask((() => {
        yb._device.queue.onSubmittedWorkDone().then((() => {
          Wy.delete(bb), Uy(bb)
        })).catch((() => {}))
      }))
    }
    Wy.d(bb, {
      b: () => fy
    })
  },
  40185: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy,
      c: () => Zy,
      e: () => cb
    });
    var Uy = Wy(40130);

    function hy(yb) {
      const bb = yb.size;
      return "canvas" in bb ? bb.canvas : bb
    }

    function fy(yb) {
      return {
        _descriptor: yb,
        _resolveSize: hy,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function Zy(yb, bb) {
      if (yb._eager) return void yb._syncEager?.(bb);
      cb(yb);
      const Wy = yb._descriptor,
        {
          width: fy,
          height: Zy
        } = (yb._resolveSize ?? hy)(Wy);
      yb._width = fy, yb._height = Zy;
      const Py = bb._device;
      Wy.format && (yb._colorTexture = Py.createTexture({
        label: Wy.lbl,
        size: {
          width: fy,
          height: Zy
        },
        format: Wy.format,
        sampleCount: Wy.samples,
        usage: Uy.j.RENDER_ATTACHMENT | Uy.j.TEXTURE_BINDING | Uy.j.COPY_SRC | Uy.j.COPY_DST
      }), yb._colorView = yb._colorTexture.createView()), Wy.dFormat && (yb._depthTexture = Py.createTexture({
        label: Wy.lbl,
        size: {
          width: fy,
          height: Zy
        },
        format: Wy.dFormat,
        sampleCount: Wy.samples,
        usage: Uy.j.RENDER_ATTACHMENT | Uy.j.TEXTURE_BINDING
      }), yb._depthView = yb._depthTexture.createView())
    }

    function cb(yb) {
      if (!yb || yb._eager && !yb._disposeAttachments) return;
      const bb = yb._colorTexture,
        Wy = yb._depthTexture;
      if (yb._colorTexture = yb._depthTexture = null, yb._colorView = yb._depthView = null, yb._width = yb._height = 0, yb._disposeAttachments) yb._disposeAttachments(bb, Wy);
      else try {
        bb?.destroy()
      } finally {
        !1 !== yb._ownsDepthTexture && Wy?.destroy()
      }
    }
  },
  40195: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy,
      e: () => hy,
      f: () => fy
    });
    var Uy = Float32Array,
      hy = Float64Array,
      fy = Uint32Array
  },
  40208: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    var Uy = 16
  },
  40121: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    var Uy = null;

    function hy(yb) {
      for (var bb = arguments.length, Wy = new Array(bb > 1 ? bb - 1 : 0), hy = 1; hy < bb; hy++) Wy[hy - 1] = arguments[hy];
      const fy = new Error(Uy?.(yb, Wy) ?? `#${yb}`);
      throw fy.lite = Wy, fy
    }
  },
  40160: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    var Uy = Wy(40143);

    function hy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Wy = bb.compare,
        hy = bb.lodMinClamp ?? 0,
        fy = bb.lodMaxClamp ?? 32,
        Zy = void 0 !== Wy || 0 !== hy || 32 !== fy ? `${Wy??""}:${hy}:${fy}` : "";
      return (0, Uy.d)(yb, bb, Zy)
    }
  },
  40137: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = null;

    function hy(yb) {
      const bb = Uy ??= new WeakMap;
      bb.set(yb, (bb.get(yb) ?? 0) + 1)
    }

    function fy(yb) {
      hy(yb.texture)
    }
  },
  40143: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb
    });
    var Uy = null,
      hy = "nearest",
      fy = "clamp-to-edge",
      Zy = {
        minFilter: hy,
        magFilter: hy,
        mipmapFilter: hy,
        addressModeU: fy,
        addressModeV: fy,
        addressModeW: fy,
        maxAnisotropy: 1
      };

    function cb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const hy = yb._device,
        fy = Uy ??= new WeakMap;
      let cb = fy.get(hy);
      cb || fy.set(hy, cb = new Map);
      let Py = Wy;
      for (const Uy in Zy) {
        const yb = Uy;
        Py += `:${bb[yb]??Zy[yb]}`
      }
      let oy = cb.get(Py);
      return oy || cb.set(Py, oy = hy.createSampler(bb)), oy
    }
  },
  40192: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => ab,
      e: () => Ly
    });
    var Uy = Wy(40185),
      hy = Wy(40178);

    function fy(yb, bb) {
      bb._passes.length = 0, yb._currentProcessedTask = bb;
      try {
        bb.record()
      } finally {
        yb._currentProcessedTask = null
      }
    }
    var Zy = Wy(40195);

    function cb(yb) {
      const bb = yb.worldMatrixVersion;
      if (yb._viewVer === bb) return yb._viewCache;
      const Wy = yb._viewCache,
        Uy = yb.worldMatrix,
        hy = yb._useFloatingOrigin,
        fy = hy ? 0 : Uy[12],
        Zy = hy ? 0 : Uy[13],
        cb = hy ? 0 : Uy[14];
      return Wy[0] = Uy[0], Wy[1] = Uy[4], Wy[2] = Uy[8], Wy[3] = 0, Wy[4] = Uy[1], Wy[5] = Uy[5], Wy[6] = Uy[9], Wy[7] = 0, Wy[8] = Uy[2], Wy[9] = Uy[6], Wy[10] = Uy[10], Wy[11] = 0, Wy[12] = -(Uy[0] * fy + Uy[1] * Zy + Uy[2] * cb), Wy[13] = -(Uy[4] * fy + Uy[5] * Zy + Uy[6] * cb), Wy[14] = -(Uy[8] * fy + Uy[9] * Zy + Uy[10] * cb), Wy[15] = 1, yb._viewVer = bb, Wy
    }
    var Py = null;

    function oy(yb) {
      return yb._projFov === yb.fov && yb._projNear === yb.nearPlane && yb._projFar === yb.farPlane || (yb._projFov = yb.fov, yb._projNear = yb.nearPlane, yb._projFar = yb.farPlane, yb._projRev = (yb._projRev ?? 0) + 1), yb.worldMatrixVersion + (yb._projRev ?? 0)
    }

    function By(yb, bb) {
      const Wy = oy(yb);
      if (yb._projVer === Wy && yb._projAspect === bb) return yb._projCache;
      const Uy = yb._projCache;
      return null !== Py && yb.ortho ? Py(yb, bb, Uy) : function(yb, bb, Wy, Uy, hy) {
        const fy = 1 / Math.tan(.5 * bb),
          Zy = hy - Uy;
        yb[0] = fy / Wy, yb[5] = fy, yb[10] = -Uy / Zy, yb[11] = 1, yb[14] = hy * Uy / Zy
      }(Uy, yb.fov, bb, yb.nearPlane, yb.farPlane), yb._projVer = Wy, yb._projAspect = bb, Uy
    }
    var Ky = Wy(40130);

    function ey(yb, bb, Wy) {
      return yb._device.createBuffer({
        label: Wy,
        size: (Uy = bb, hy = 16, Math.ceil(Uy / hy) * hy),
        usage: Ky.d.UNIFORM | Ky.d.COPY_DST
      });
      var Uy, hy
    }
    var qb = Wy(40204),
      sy = null;

    function Sy(yb) {
      const bb = yb._device,
        Wy = sy ??= new WeakMap;
      let Uy = Wy.get(bb);
      return Uy || (Uy = bb.createBindGroupLayout({
        label: "Pf",
        entries: [{
          binding: 0,
          visibility: Ky.g.VERTEX | Ky.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: Ky.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), Wy.set(bb, Uy)), Uy
    }

    function Ey(yb, bb, Wy) {
      const Uy = yb._device,
        hy = ey(yb, bb.byteLength, Wy);
      try {
        Uy.queue.writeBuffer(hy, 0, bb.buffer, bb.byteOffset, bb.byteLength)
      } catch (fy) {
        throw hy.destroy(), fy
      }
      return hy
    }
    var ly = Wy(40208),
      mb = new Zy.f(1),
      Cy = new Zy.b(mb.buffer);

    function Ty(yb) {
      let bb = 0;
      for (const Wy of yb) bb += Wy._lightVersion ?? 0;
      return bb
    }

    function Vy(yb, bb) {
      yb.fill(0);
      let Wy = 0;
      for (const Uy of bb) {
        if (Wy >= ly.b) break;
        Uy._writeLightUbo && (Uy._writeLightUbo(yb, 4 + 16 * Wy), Wy++)
      }
      mb[0] = Wy, yb[0] = Cy[0]
    }

    function Jy(yb, bb) {
      let Wy = bb._lightGpuState;
      const Uy = 16 + 16 * ly.b * 4;
      if (Wy && Wy._byteSize === Uy) return Wy;
      const hy = !Wy;
      Wy?._buffer.destroy();
      const fy = new Zy.b(Uy / 4);
      return Vy(fy, bb.lights), yb._applyLightFoOffset?.(fy, bb), Wy = {
        _buffer: Ey(yb, fy),
        _scratch: fy,
        xUy: Ty(bb.lights) + (yb._lightFoVersion?.(bb) ?? 0),
        _listVersion: bb._lightListVersion ?? 0,
        _lightCount: bb.lights.length,
        _byteSize: Uy
      }, bb._lightGpuState = Wy, hy && bb._disposables.push((() => {
        bb._lightGpuState?._buffer.destroy(), bb._lightGpuState = void 0
      })), Wy
    }

    function gb(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const hy = bb;
      if (0 === Uy && 16 === hy.length) return void yb.set(hy, Wy);
      const fy = Uy,
        Zy = Wy;
      yb[Zy + 0] = hy[fy + 0], yb[Zy + 1] = hy[fy + 1], yb[Zy + 2] = hy[fy + 2], yb[Zy + 3] = hy[fy + 3], yb[Zy + 4] = hy[fy + 4], yb[Zy + 5] = hy[fy + 5], yb[Zy + 6] = hy[fy + 6], yb[Zy + 7] = hy[fy + 7], yb[Zy + 8] = hy[fy + 8], yb[Zy + 9] = hy[fy + 9], yb[Zy + 10] = hy[fy + 10], yb[Zy + 11] = hy[fy + 11], yb[Zy + 12] = hy[fy + 12], yb[Zy + 13] = hy[fy + 13], yb[Zy + 14] = hy[fy + 14], yb[Zy + 15] = hy[fy + 15]
    }

    function Gy(yb, bb, Wy, Uy, hy) {
      yb.fill(0);
      const fy = function(yb, bb) {
          const Wy = oy(yb);
          if (yb._vpVer === Wy && yb._vpAspect === bb) return yb._vpCache;
          const Uy = yb._vpCache;
          return function(yb, bb, Wy, Uy, hy, fy) {
            const Zy = Wy[Uy],
              cb = Wy[Uy + 1],
              Py = Wy[Uy + 2],
              oy = Wy[Uy + 3],
              By = Wy[Uy + 4],
              Ky = Wy[Uy + 5],
              ey = Wy[Uy + 6],
              qb = Wy[Uy + 7],
              sy = Wy[Uy + 8],
              Sy = Wy[Uy + 9],
              Ey = Wy[Uy + 10],
              ly = Wy[Uy + 11],
              mb = Wy[Uy + 12],
              Cy = Wy[Uy + 13],
              Ty = Wy[Uy + 14],
              Vy = Wy[Uy + 15];
            let Jy = hy[fy],
              gb = hy[fy + 1],
              Gy = hy[fy + 2],
              Oy = hy[fy + 3];
            yb[bb] = Zy * Jy + By * gb + sy * Gy + mb * Oy, yb[bb + 1] = cb * Jy + Ky * gb + Sy * Gy + Cy * Oy, yb[bb + 2] = Py * Jy + ey * gb + Ey * Gy + Ty * Oy, yb[bb + 3] = oy * Jy + qb * gb + ly * Gy + Vy * Oy, Jy = hy[fy + 4], gb = hy[fy + 5], Gy = hy[fy + 6], Oy = hy[fy + 7], yb[bb + 4] = Zy * Jy + By * gb + sy * Gy + mb * Oy, yb[bb + 5] = cb * Jy + Ky * gb + Sy * Gy + Cy * Oy, yb[bb + 6] = Py * Jy + ey * gb + Ey * Gy + Ty * Oy, yb[bb + 7] = oy * Jy + qb * gb + ly * Gy + Vy * Oy, Jy = hy[fy + 8], gb = hy[fy + 9], Gy = hy[fy + 10], Oy = hy[fy + 11], yb[bb + 8] = Zy * Jy + By * gb + sy * Gy + mb * Oy, yb[bb + 9] = cb * Jy + Ky * gb + Sy * Gy + Cy * Oy, yb[bb + 10] = Py * Jy + ey * gb + Ey * Gy + Ty * Oy, yb[bb + 11] = oy * Jy + qb * gb + ly * Gy + Vy * Oy, Jy = hy[fy + 12], gb = hy[fy + 13], Gy = hy[fy + 14], Oy = hy[fy + 15], yb[bb + 12] = Zy * Jy + By * gb + sy * Gy + mb * Oy, yb[bb + 13] = cb * Jy + Ky * gb + Sy * Gy + Cy * Oy, yb[bb + 14] = Py * Jy + ey * gb + Ey * Gy + Ty * Oy, yb[bb + 15] = oy * Jy + qb * gb + ly * Gy + Vy * Oy
          }(Uy, 0, By(yb, bb), 0, cb(yb), 0), yb._vpVer = Wy, yb._vpAspect = bb, Uy
        }(Uy, hy),
        Zy = cb(Uy),
        Py = Uy.worldMatrix;
      gb(yb, fy, 0), gb(yb, Zy, 16), bb.useFloatingOrigin ? (yb[32] = 0, yb[33] = 0, yb[34] = 0) : (yb[32] = Py[12], yb[33] = Py[13], yb[34] = Py[14]), yb[87] = bb.canvas.width;
      const Ky = Wy.imageProcessing;
      yb[76] = Ky.exposure, yb[77] = Ky.contrast, yb[78] = Wy._envTextures?.lodGenerationScale ?? .8, yb[79] = +Ky.toneMappingEnabled, yb[37] = bb.canvas.height
    }

    function Oy(yb, bb) {
      return {
        _renderables: yb,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: bb
      }
    }

    function Ry(yb, bb, Wy) {
      yb.clr ??= !0;
      const hy = yb.rt._descriptor,
        fy = yb.depth?._descriptor,
        Py = {
          _colorFormat: hy.format,
          _depthStencilFormat: fy?.dFormat ?? hy.dFormat,
          _depthCompare: hy.depthCompare ?? fy?.depthCompare,
          _sampleCount: hy.samples
        },
        By = {
          loadOp: "clear",
          storeOp: "store"
        },
        Ky = {
          ...Oy([], -1),
          name: yb.name,
          _config: yb,
          _ownsTargets: !yb.sharedRt,
          engine: bb,
          Pf: Wy,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [By]
          },
          _colorAttachment: By,
          _sceneUBO: ey(bb, 368),
          _suData: new Zy.b(92),
          _sceneUboCacheKey: [],
          _targetSignature: Py,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (Ky._disposed) throw new Error("RenderTask has been disposed.");
            Ky._recordExplicit ? Ky._recordExplicit(Ky, !0) : My(Ky, !1 !== yb.autoMirror ? Wy._renderables.slice() : Ky._renderables, !0)
          },
          execute: () => function(yb, bb, Wy) {
            if (!1 === yb.enabled) return 0;
            const Uy = yb.Pf;
            ! function(yb, bb, Wy) {
              const Uy = yb.Pf;
              !1 !== yb._config.autoMirror && yb._lastVersion !== Uy._renderableVersion && My(yb, Uy._renderables.slice());
              Xy(yb, bb);
              const hy = yb._updateContext,
                fy = yb._config.cam ?? Uy.camera;
              Wy._colorFormat && (yb._config._skipClusteredLights || Uy._clusteredLightUpdater?.(fy, hy.targetWidth, hy.targetHeight), function(yb, bb) {
                const Wy = Jy(yb, bb),
                  Uy = Ty(bb.lights) + (yb._lightFoVersion?.(bb) ?? 0),
                  hy = bb._lightListVersion ?? 0;
                Uy === Wy.xUy && hy === Wy._listVersion && bb.lights.length === Wy._lightCount || (Wy.xUy = Uy, Wy._listVersion = hy, Wy._lightCount = bb.lights.length, Vy(Wy._scratch, bb.lights), yb._applyLightFoOffset?.(Wy._scratch, bb), yb._device.queue.writeBuffer(Wy._buffer, 0, Wy._scratch)), Wy._buffer
              }(bb, Uy));
              (function(yb, bb, Wy, Uy) {
                if (!Uy) return;
                const hy = Uy.viewport,
                  fy = yb._config.rt,
                  Zy = (yb._config.cs ? bb.canvas.width / bb.canvas.height : fy._width / fy._height) * (hy ? hy.width / hy.height : 1),
                  cb = Wy.fog,
                  Py = Wy.imageProcessing,
                  By = oy(Uy),
                  Ky = Wy._envTextures,
                  ey = yb._sceneUboCacheKey;
                if (ey[0] === Uy && ey[1] === cb && ey[2] === By && ey[3] === Zy && ey[4] === Py.exposure && ey[5] === Py.contrast && ey[6] === Ky) return;
                ey[0] = Uy, ey[1] = cb, ey[2] = By, ey[3] = Zy, ey[4] = Py.exposure, ey[5] = Py.contrast, ey[6] = Ky;
                const qb = yb._suData;
                Gy(qb, bb, Wy, Uy, Zy);
                const sy = Wy._sceneUboContributors;
                if (sy)
                  for (const oy of sy) oy(qb, Wy);
                bb._device.queue.writeBuffer(yb._sceneUBO, 0, qb)
              })(yb, bb, Uy, fy), hy.Qhy = fy, yb._batchState?._reset(), ny(yb._opaqueBindings, hy), ny(yb._directBindings, hy), ny(yb._transparentBindings, hy), yb._batchState?._flush(bb),
                function(yb, bb) {
                  const Wy = yb._transparentBindings;
                  if (Wy.length <= 1 || !bb) return;
                  const Uy = cb(bb);
                  for (const hy of Wy) {
                    const yb = hy.renderable._worldCenter;
                    hy._sortDistance = yb ? yb[0] * Uy[2] + yb[1] * Uy[6] + yb[2] * Uy[10] + Uy[14] : 0
                  }
                  Wy.sort(vb)
                }(yb, fy)
            }(yb, bb, Wy);
            const hy = yb._colorAttachment,
              fy = yb._config;
            fy.rt._colorView && (fy.rt === Uy.surface.scRT && (hy.view = fy.rt._colorView), hy.resolveTarget = fy.rst?._colorView ?? void 0, hy.clearValue = fy.clrColor ?? Uy.clearColor, hy.loadOp = fy.clr ? "clear" : "load");
            if (yb._executeWithTransmission) return yb._executeWithTransmission(Wy._sampleCount);
            const Zy = bb._currentEncoder.beginRenderPass(yb._renderPassDescriptor),
              Py = Yy(yb, Zy);
            return Zy.end(), Py
          }(Ky, bb, Py),
          dispose() {
            if (Ky._disposed) return;
            Ky._disposed = !0;
            const bb = Ky._pendingMeshes;
            bb && (bb.length = 0);
            for (const yb of Ky._renderables) Ky._retireRenderable?.(Ky.engine, yb);
            Ky._passes.length = Ky._opaqueBindings.length = Ky._directBindings.length = 0, Ky._transparentBindings.length = Ky._renderables.length = Ky._ob.length = 0, Ky._ownsTargets && ((0, Uy.e)(yb.rt), (0, Uy.e)(yb.rst)), yb.depth?._eager || (0, Uy.e)(yb.depth);
            const Wy = Ky._sceneUBO;
            (0, qb.b)(Ky.engine, (() => Wy.destroy())), Ky._batchState?._release(Ky.engine), Ky._batchState = void 0
          }
        };
      return Ky
    }

    function vb(yb, bb) {
      return bb._sortDistance - yb._sortDistance || yb.renderable.order - bb.renderable.order
    }

    function ib(yb, bb) {
      return yb.renderable.order - bb.renderable.order
    }

    function My(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb._renderables,
        Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        hy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        fy = arguments.length > 4 ? arguments[4] : void 0;
      const Zy = yb._config,
        cb = Zy.rt,
        Py = yb._batchState,
        oy = Oy(bb, yb.Pf._renderableVersion);
      if (Wy) {
        const bb = (bb, Wy) => {
          bb && (Wy || yb._ownsTargets || bb._eager) && (0, Uy.c)(bb, yb.engine)
        };
        bb(cb), cb._descriptor.samples > 1 && bb(Zy.rst), bb(Zy.depth, !0)
      }
      const {
        _opaqueBindings: By,
        _directBindings: Ky,
        _transparentBindings: ey
      } = oy;
      try {
        for (const Wy of bb) {
          const bb = Wy.bind(yb.engine, yb._targetSignature);
          oy._batchState = yb._targetSignature._collectBatches?.(oy._batchState, bb), Wy.isTransparent || Wy._transmissive ? ey.push(bb) : Wy._direct ? Ky.push(bb) : By.push(bb)
        }
        By.sort(ib), Ky.sort(ib), Wy && Xy(yb, yb.engine, !1)
      } catch (qb) {
        throw oy._batchState?._release(void 0, fy ?? [Py]), qb
      }
      return Wy && (! function(yb, bb) {
        const Wy = yb._config,
          Uy = yb._colorAttachment;
        Uy.view = bb._colorView, yb._renderPassDescriptor.colorAttachments = bb._colorView ? [Uy] : [];
        const hy = Wy.depth ?? bb,
          fy = hy._depthView;
        let Zy;
        if (fy) {
          const yb = hy._descriptor,
            bb = (Wy.depth ? hy._eager : !1 === Wy.depthClear) ? "load" : "clear";
          Zy = {
            view: fy,
            depthClearValue: yb.depthClearValue ?? 0,
            depthLoadOp: bb,
            depthStoreOp: "store"
          }, yb.dFormat?.includes("stencil") && (Zy.stencilClearValue = 0, Zy.stencilLoadOp = bb, Zy.stencilStoreOp = "store")
        }
        yb._renderPassDescriptor.depthStencilAttachment = Zy
      }(yb, cb), yb._updateContext.targetWidth = cb._width, yb._updateContext.targetHeight = cb._height), hy && (Object.assign(yb, oy), Py?._release(yb.engine, [oy._batchState])), oy
    }

    function Yy(yb, bb) {
      const Wy = yb.engine,
        Uy = yb._config,
        fy = Uy.rt,
        Zy = yb.Pf,
        cb = yb._opaqueBindings,
        Py = yb._ob,
        oy = yb._sceneBG;
      if (function(yb, bb, Wy, Uy) {
          const hy = bb?.viewport;
          if (!hy) return;
          const fy = Math.floor(hy.x * Wy),
            Zy = Math.floor((1 - hy.y - hy.height) * Uy),
            cb = Math.ceil((hy.x + hy.width) * Wy) - fy,
            Py = Math.ceil((1 - hy.y) * Uy) - Zy;
          yb.setViewport(fy, Zy, cb, Py, 0, 1), yb.setScissorRect(fy, Zy, cb, Py)
        }(bb, Uy.cam ?? Zy.camera, fy._width, fy._height), bb.setBindGroup(0, oy), yb._lastVis !== hy.e || !Py.length) {
        const bb = fy._descriptor,
          Uy = Wy._device.createRenderBundleEncoder({
            colorFormats: bb.format ? [bb.format] : [],
            depthStencilFormat: yb._targetSignature._depthStencilFormat,
            sampleCount: bb.samples
          });
        Uy.setBindGroup(0, oy), uy(Uy, cb, Wy), Py[0] = Uy.finish(), yb._lastVis = hy.e
      }
      let By = cb.length;
      return bb.executeBundles(Py), bb.setBindGroup(0, oy), By += uy(bb, yb._directBindings, Wy), By += uy(bb, yb._transparentBindings, Wy), By
    }

    function Xy(yb, bb) {
      let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Uy = Jy(bb, yb.Pf)._buffer;
      if (Uy === yb._lightsUBO) return;
      const hy = bb._device.createBindGroup({
        layout: Sy(bb),
        entries: [{
          binding: 0,
          resource: {
            buffer: yb._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: Uy
          }
        }]
      });
      yb._lightsUBO = Uy, yb._sceneBG = hy, Wy && (yb._ob = [])
    }

    function ny(yb, bb) {
      for (const Wy of yb) Wy.update?.(bb)
    }

    function uy(yb, bb, Wy) {
      let Uy = null,
        hy = 0;
      for (const fy of bb) {
        const bb = fy.renderable.mesh;
        bb && !1 === bb.visible || (fy.pipeline !== Uy && (yb.setPipeline(fy.pipeline), Uy = fy.pipeline), hy += fy.draw(yb, Wy))
      }
      return hy
    }

    function rb(yb) {
      const bb = yb._materialSwapQueue;
      if (!bb[0] || yb._runtimeBuilds?.w) return;
      let Uy, hy, fy;
      const Zy = yb._renderables;
      for (const Wy of bb) {
        const bb = Wy.material;
        if (!bb) continue;
        const cb = Wy._runtimeThinBuild;
        if (cb) {
          hy = cb(yb, Wy, hy);
          continue
        }
        const Py = yb._groups.get(bb._buildGroup),
          oy = Py?.r;
        if (!oy) {
          (fy ??= []).push(Wy);
          continue
        }
        if (Py._w?.(Wy)) {
          (fy ??= []).push([Wy, bb]);
          continue
        }
        const By = yb._meshDisposables.get(Wy);
        By && (yb._meshDisposables.delete(Wy), (0, qb.b)(yb.surface.engine, (() => By.forEach((yb => yb())))));
        const Ky = Py.o;
        let ey;
        for (let yb = Zy.length; yb--;) Zy[yb].mesh === Wy && (ey = Zy.splice(yb, 1)[0]);
        bb._csmGen = -~bb._csmGen;
        const sy = oy(yb, Wy);
        if (Ky) {
          const yb = Ky.indexOf(ey);
          yb < 0 ? Ky.push(sy) : Ky[yb] = sy
        }
        Uy = Zy.push(sy)
      }
      if (Uy && (Zy.sort(((yb, bb) => yb.order - bb.order)), yb._renderableVersion++, yb._materialEpoch++), bb.length = 0, !fy) return hy;
      const cb = fy;
      return Wy.e(343).then((() => Wy(59806))).then((bb => {
        let {
          C: Wy
        } = bb;
        return Wy(yb, cb, hy)
      }), (bb => {
        const Wy = yb._runtimeBuilds;
        Wy ? Wy._x(bb) : console.error(bb)
      }))
    }
    var Hy = null;

    function ab(yb, bb) {
      const Wy = yb.engine,
        hy = {
          _kind: "Pf",
          surface: yb,
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
            Wy.useFloatingOrigin && hy.camera && !hy.camera._useFloatingOrigin && (hy.camera._useFloatingOrigin = !0, hy.camera._viewVer = -1, hy.camera._vpVer = -1);
            const yb = hy.fixedDeltaMs > 0 ? hy.fixedDeltaMs : Wy._currentDelta,
              bb = Wy._currentEncoder;
            let Uy = 0;
            for (const Wy of hy._beforeRender) Wy(yb);
            hy._materialSwapQueue.length && rb(hy);
            for (const fy of hy._prePasses) Uy += fy.execute(bb, Wy);
            for (const fy of hy._uniformUpdaters) fy.update(Wy);
            hy._drawCallsPre = Uy
          },
          _record: () => hy._frameGraph.execute(),
          _resize() {
            hy._frameGraph.build()
          }
        },
        Zy = function() {
          const yb = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let bb = 0; bb < yb._tasks.length; bb++) fy(yb, yb._tasks[bb]);
              for (const bb of yb._tasks)
                for (const yb of bb._passes) yb._initialize()
            },
            execute() {
              let bb = 0;
              for (const Wy of yb._tasks)
                if (!1 !== Wy.executionEnabled)
                  if (Wy.execute) bb += Wy.execute();
                  else
                    for (const yb of Wy._passes) bb += yb._execute();
              return bb
            },
            dispose() {
              for (const bb of yb._tasks) bb.dispose();
              yb._tasks.length = 0, yb._currentProcessedTask = null
            }
          };
          return yb
        }();
      if (hy._frameGraph = Zy, !1 !== bb?.defaultRenderTask) {
        const bb = yb.msaaSamples > 1,
          fy = bb ? (0, Uy.b)({
            lbl: "scene-color",
            format: yb.format,
            dFormat: "depth24plus-stencil8",
            samples: yb.msaaSamples,
            size: yb
          }) : yb.scRT,
          cb = bb ? void 0 : (0, Uy.b)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: yb
          });
        ! function(yb, bb) {
          yb._tasks.push(bb)
        }(Zy, Ry({
          name: "Pf",
          rt: fy,
          rst: bb ? yb.scRT : void 0,
          depth: cb
        }, Wy, hy))
      }
      return hy._disposables.push((() => Zy.dispose())), hy
    }
    async function Fy(yb) {
      const bb = yb;
      for (bb._built || (bb._materialSwapQueue.length = 0); bb._deferredBuilders.length;) {
        const yb = bb._deferredBuilders.splice(0);
        await Promise.all(yb.map((yb => yb())))
      }
      await rb(bb), Hy?.get(bb)?.() || (bb._runtimeBuilds?._e(), bb._renderableVersion++, bb._built = !0), await (bb._rebuildHook?.(bb))
    }
    var py = null;
    async function Ly(yb) {
      const bb = yb,
        Uy = bb.surface;
      (0, hy.j)(Uy, bb) || (await Fy(yb), bb._renderables.sort(Qy), await Promise.all(bb._frameGraph._tasks.map((yb => yb._preload?.()))), py && await py(bb), bb._frameGraph.build(), Uy._renderingContexts[0] && (await Wy.e(341).then((() => Wy(59799)))).configureSwapchainOverlayScene(Uy, bb), Hy?.get(bb)?.() || (0, hy.k)(Uy, bb))
    }
    var Qy = (yb, bb) => yb.order - bb.order
  },
  40170: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => oy,
      d: () => By
    });
    var Uy = Wy(40121),
      hy = Wy(40130),
      fy = Wy(40137),
      Zy = Wy(40143),
      cb = Wy(40145),
      Py = Wy(40154);

    function oy(yb, bb, Wy) {
      let cb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (bb < 1 || Wy < 1) && (0, Uy.d)(676, bb, Wy);
      const oy = yb._device,
        By = cb.mipMaps ?? !1,
        Ky = cb.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        ey = By ? (0, Py.e)(bb, Wy) : 1,
        qb = oy.createTexture({
          size: {
            width: bb,
            height: Wy
          },
          format: Ky,
          mipLevelCount: ey,
          usage: hy.j.TEXTURE_BINDING | hy.j.COPY_DST | hy.j.RENDER_ATTACHMENT
        }),
        sy = {
          addressModeU: cb.addressModeU ?? "clamp-to-edge",
          addressModeV: cb.addressModeV ?? "clamp-to-edge",
          minFilter: cb.minFilter ?? "linear",
          magFilter: cb.magFilter ?? "linear",
          mipmapFilter: By ? "linear" : "nearest"
        },
        Sy = (0, Zy.d)(yb, sy),
        Ey = {
          texture: qb,
          view: qb.createView(),
          sampler: Sy,
          width: bb,
          height: Wy
        };
      return (0, fy.b)(Ey), yb._dlr && yb._dlr.t(Ey, {
        kind: "dynamic",
        width: bb,
        height: Wy,
        format: Ky,
        levels: ey,
        samplerDesc: sy,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), Ey
    }

    function By(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const hy = Uy.invertY ?? !0,
        fy = Uy.premultiplyAlpha ?? !1;
      yb._device.queue.copyExternalImageToTexture({
        source: Wy,
        flipY: hy
      }, {
        texture: bb.texture,
        premultipliedAlpha: fy
      }, [bb.width, bb.height]);
      const Zy = bb._recoverySource;
      Zy && "dynamic" === Zy.kind && (Zy.source = Wy, Zy.flipY = hy, Zy.premultipliedAlpha = fy), bb.texture.mipLevelCount > 1 && (0, cb.generateMipmaps)(yb, bb.texture)
    }
  },
  40166: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Py
    });
    var Uy = Wy(40121),
      hy = Wy(40130),
      fy = Wy(40137),
      Zy = Wy(40143),
      cb = Wy(40154);
    async function Py(yb, bb) {
      let Py = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [oy, By] = function(yb) {
        const bb = yb,
          Wy = [
            [bb.displayWidth, bb.displayHeight],
            [bb.videoWidth, bb.videoHeight],
            [bb.naturalWidth, bb.naturalHeight],
            [bb.width, bb.height]
          ];
        for (const [Uy, hy] of Wy)
          if (void 0 !== Uy && void 0 !== hy && Number.isInteger(Uy) && Number.isInteger(hy) && Uy > 0 && hy > 0) return [Uy, hy];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(bb), [Ky, ey] = function(yb, bb, Wy) {
        if (void 0 === Wy) return [yb, bb];
        if (!Number.isInteger(Wy) || Wy < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${Wy})`);
        if (Math.max(yb, bb) <= Wy) return [yb, bb];
        const Uy = Wy / Math.max(yb, bb);
        return yb >= bb ? [Wy, Math.max(1, Math.round(bb * Uy))] : [Math.max(1, Math.round(yb * Uy)), Wy]
      }(oy, By, Py.maxDimension), qb = Py.mipMaps ?? !0, sy = Py.premultiplyAlpha ?? !1;
      let Sy = bb,
        Ey = null;
      const ly = {
        texture: null
      };
      try {
        Ky === oy && ey === By || (Ey = await createImageBitmap(bb, {
          resizeWidth: Ky,
          resizeHeight: ey,
          resizeQuality: "high",
          premultiplyAlpha: sy ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), Sy = Ey);
        const mb = yb._device,
          Cy = Py.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          Ty = qb ? (0, cb.e)(Ky, ey) : 1,
          Vy = Ty > 1 ? (await Promise.resolve().then((() => Wy(40145)))).generateMipmaps : null,
          Jy = {
            addressModeU: Py.addressModeU ?? "repeat",
            addressModeV: Py.addressModeV ?? "repeat",
            minFilter: Py.minFilter ?? "linear",
            magFilter: Py.magFilter ?? "linear",
            mipmapFilter: qb ? "linear" : "nearest"
          };
        Jy.maxAnisotropy = "linear" === Jy.minFilter && "linear" === Jy.magFilter && "linear" === Jy.mipmapFilter ? 4 : 1;
        const gb = Py.invertY ?? !0,
          Gy = async bb => {
            let Wy;
            mb.pushErrorScope("validation"), mb.pushErrorScope("out-of-memory");
            let fy = null;
            try {
              const Wy = ly.texture = mb.createTexture({
                size: {
                  width: Ky,
                  height: ey
                },
                format: Cy,
                mipLevelCount: Ty,
                usage: hy.j.TEXTURE_BINDING | hy.j.COPY_DST | hy.j.RENDER_ATTACHMENT
              });
              mb.queue.copyExternalImageToTexture({
                source: bb,
                flipY: gb
              }, {
                texture: Wy,
                premultipliedAlpha: sy
              }, {
                width: Ky,
                height: ey
              }), Vy && Vy(yb, Wy), fy = (0, Zy.d)(yb, Jy)
            } catch (qb) {
              Wy = qb
            }
            const [cb, Py] = await Promise.all([mb.popErrorScope(), mb.popErrorScope()]);
            if (Wy) throw Wy;
            const oy = Py ?? cb;
            if (oy) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${oy.message}`, {
              cause: oy
            });
            const By = ly.texture;
            return By && fy || (0, Uy.d)(677), {
              texture: By,
              view: By.createView(),
              sampler: fy,
              width: Ky,
              height: ey
            }
          }, Oy = await (yb._dlr?.x(Sy, Ky, ey, Cy, Ty, Jy, gb, sy, Gy)) ?? await Gy(Sy);
        return (0, fy.b)(Oy), Oy
      } catch (mb) {
        throw ly.texture?.destroy(), mb
      } finally {
        Ey?.close()
      }
    }
  },
  40145: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      generateMipmaps: () => qb,
      recordMipmaps: () => sy
    });
    var Uy = Wy(40130),
      hy = Wy(40143),
      fy = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var Zy = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      cb = null,
      Py = null,
      oy = null,
      By = null,
      Ky = null;

    function ey(yb) {
      const bb = yb._device;
      bb !== Ky && (cb?.clear(), cb = null, Py = null, oy = null, By = null, Ky = null, Ky = bb), Py ??= bb.createShaderModule({
        code: Zy
      }), oy ??= function(yb) {
        return (0, hy.d)(yb, fy)
      }(yb), By ??= bb.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: Uy.g.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: Uy.g.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function qb(yb, bb, Wy) {
      const Uy = yb._device,
        hy = Uy.createCommandEncoder();
      sy(yb, bb, hy, Wy), Uy.queue.submit([hy.finish()])
    }

    function sy(yb, bb, Wy, Uy) {
      if (bb.mipLevelCount <= 1) return;
      const hy = yb._device,
        fy = function(yb, bb) {
          const Wy = yb._device;
          ey(yb), cb ??= new Map;
          let Uy = cb.get(bb);
          return Uy || (Uy = Wy.createRenderPipeline({
            layout: Wy.createPipelineLayout({
              bindGroupLayouts: [By]
            }),
            vertex: {
              module: Py,
              entryPoint: "vs"
            },
            fragment: {
              module: Py,
              entryPoint: "fs",
              targets: [{
                format: bb
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), cb.set(bb, Uy)), Uy
        }(yb, bb.format),
        Zy = null != Uy ? {
          dimension: "2d",
          baseArrayLayer: Uy,
          arrayLayerCount: 1
        } : {};
      for (let cb = 1; cb < bb.mipLevelCount; cb++) {
        const yb = bb.createView({
            baseMipLevel: cb - 1,
            mipLevelCount: 1,
            ...Zy
          }),
          Uy = bb.createView({
            baseMipLevel: cb,
            mipLevelCount: 1,
            ...Zy
          }),
          Py = hy.createBindGroup({
            layout: By,
            entries: [{
              binding: 0,
              resource: yb
            }, {
              binding: 1,
              resource: oy
            }]
          }),
          Ky = Wy.beginRenderPass({
            colorAttachments: [{
              view: Uy,
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
        Ky.setPipeline(fy), Ky.setBindGroup(0, Py), Ky.draw(3), Ky.end()
      }
    }
  },
  40154: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      return Math.floor(Math.log2(Math.max(yb, bb))) + 1
    }
    Wy.d(bb, {
      e: () => Uy
    })
  },
  40115: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => oy,
      e: () => By
    });
    var Uy = Wy(40121),
      hy = Wy(40130),
      fy = Wy(40137),
      Zy = Wy(40143),
      cb = Wy(40145),
      Py = Wy(40154);

    function oy(yb, bb, Wy, cb) {
      let oy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (bb < 1 || Wy < 1 || cb < 1) && (0, Uy.d)(722, bb, Wy, cb);
      const By = yb._device,
        Ky = oy.mipMaps ?? !0,
        ey = oy.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        qb = By.createTexture({
          size: {
            width: bb,
            height: Wy,
            depthOrArrayLayers: cb
          },
          dimension: "2d",
          format: ey,
          mipLevelCount: Ky ? (0, Py.e)(bb, Wy) : 1,
          usage: hy.j.TEXTURE_BINDING | hy.j.COPY_DST | hy.j.RENDER_ATTACHMENT
        }),
        sy = (0, Zy.d)(yb, {
          addressModeU: oy.addressModeU ?? "repeat",
          addressModeV: oy.addressModeV ?? "repeat",
          minFilter: oy.minFilter ?? "linear",
          magFilter: oy.magFilter ?? "linear",
          mipmapFilter: Ky ? "linear" : "nearest"
        }),
        Sy = {
          texture: qb,
          view: qb.createView({
            dimension: "2d-array"
          }),
          sampler: sy,
          width: bb,
          height: Wy,
          layers: cb
        };
      return (0, fy.b)(Sy), Sy
    }

    function By(yb, bb, Wy, hy) {
      let fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Wy < 0 || Wy >= bb.layers || (0 | Wy) !== Wy) && (0, Uy.d)(723, bb.layers, Wy);
      const Zy = fy.invertY ?? !0,
        Py = fy.premultiplyAlpha ?? !1;
      yb._device.queue.copyExternalImageToTexture({
        source: hy,
        flipY: Zy
      }, {
        texture: bb.texture,
        origin: [0, 0, Wy],
        premultipliedAlpha: Py
      }, [bb.width, bb.height, 1]), bb.texture.mipLevelCount > 1 && (0, cb.generateMipmaps)(yb, bb.texture, Wy)
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);