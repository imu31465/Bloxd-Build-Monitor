export const id = 288;
export const ids = [288];
export const modules = {
  42075: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      d: () => Hd,
      h: () => vd,
      j: () => hd
    });
    var Wd = md(41856),
      Fd = md(40262),
      Rd = md(41991),
      Xd = md(41897);
    class Kd {
      get yJ() {
        return this._isDisposed
      }
      constructor(dd, Od, md) {
        let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Rd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Kd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          hd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          vd = arguments.length > 7 ? arguments[7] : void 0,
          Qd = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Xd.c)(), dd && dd.zV ? this._engine = dd.zV().Iq() : this._engine = dd, this._updatable = md, this._instanced = Kd, this._divisor = vd || 1, this._label = Qd, Od instanceof Wd.c ? (this._data = null, this._buffer = Od) : (this._data = Od, this._buffer = null), this.byteStride = hd ? Fd : Fd * Float32Array.BYTES_PER_ELEMENT, Rd || this.create()
      }
      createVertexBuffer(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Xd = arguments.length > 6 ? arguments[6] : void 0;
        const Kd = Rd ? Od : Od * Float32Array.BYTES_PER_ELEMENT,
          vd = Wd ? Rd ? Wd : Wd * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new hd(this._engine, this, dd, this._updatable, !0, vd, void 0 === Fd ? this._instanced : Fd, Kd, md, void 0, void 0, !0, this._divisor || Xd)
      }
      isUpdatable() {
        return this._updatable
      }
      getData() {
        return this._data
      }
      getBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT
      }
      create() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !dd && this._buffer || (dd = dd || this._data, dd && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, dd), this._data = dd) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(dd, this._label), this._data = dd) : this._buffer = this._engine.createVertexBuffer(dd, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.Mt > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.Mt, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.Mt, void 0, this._label));
          Fd.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(dd) {
        this.create(dd)
      }
      updateDirectly(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, dd, Wd ? Od : Od * Float32Array.BYTES_PER_ELEMENT, md ? md * this.byteStride : void 0), this._data = 0 === Od && void 0 === md ? dd : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class hd {
      get yJ() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(dd) {
        const Od = 0 != dd;
        this._instanceDivisor = dd, Od !== this._instanced && (this._instanced = Od, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const dd = this.getData();
        return dd ? Array.isArray(dd) ? dd.length / (this.byteStride / 4) - this.byteOffset / 4 : (dd.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(dd, Od, md, Wd, Fd, Xd, td, od, Nd, qd) {
        let Hd, yd = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          bd = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          Td = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          pd = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = dd, "object" === typeof Wd && null !== Wd ? (Hd = Wd.updatable ?? !1, Fd = Wd.postponeInternalCreation, Xd = Wd.stride, td = Wd.instanced, od = Wd.offset, Nd = Wd.size, qd = Wd.type, yd = Wd.normalized ?? !1, bd = Wd.useBytes ?? !1, Td = Wd.divisor ?? 1, pd = Wd.takeBufferOwnership ?? !1, this._label = Wd.label) : Hd = !!Wd, Od instanceof Kd ? (this._buffer = Od, this._ownsBuffer = pd) : (this._buffer = new Kd(dd, Od, Hd, Xd, Fd, td, bd, Td, this._label), this._ownsBuffer = !0), this.uniqueId = hd._Counter++, this._kind = md, void 0 === qd) {
          const dd = this.getData();
          this.type = dd ? Qd(dd) : hd.FLOAT
        } else this.type = qd;
        const Yd = (0, Rd.p)(this.type);
        bd ? (this._size = Nd || (Xd ? Xd / Yd : vd(md)), this.byteStride = Xd || this._buffer.byteStride || this._size * Yd, this.byteOffset = od || 0) : (this._size = Nd || Xd || vd(md), this.byteStride = Xd ? Xd * Yd : this._buffer.byteStride || this._size * Yd, this.byteOffset = (od || 0) * Yd), this.normalized = yd, this._instanced = void 0 !== td && td, this._instanceDivisor = td ? Td : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(dd) {
        switch (dd) {
          case hd.BYTE:
            return 0;
          case hd.UNSIGNED_BYTE:
            return 1;
          case hd.SHORT:
            return 2;
          case hd.UNSIGNED_SHORT:
            return 3;
          case hd.INT:
            return 4;
          case hd.UNSIGNED_INT:
            return 5;
          case hd.FLOAT:
            return 6;
          case hd.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${dd}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (hd._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
      }
      _rebuild() {
        this._buffer?._rebuild()
      }
      getKind() {
        return this._kind
      }
      isUpdatable() {
        return this._buffer.isUpdatable()
      }
      getData() {
        return this._buffer.getData()
      }
      getFloatData(dd, Od) {
        const md = this.getData();
        return md ? (0, Rd.o)(md, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, dd, Od) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, Rd.p)(this.type)
      }
      uWd() {
        return this.byteOffset / (0, Rd.p)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Rd.p)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(dd) {
        this._buffer.create(dd), this._alignBuffer()
      }
      update(dd) {
        this._buffer.update(dd), this._alignBuffer()
      }
      updateDirectly(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(dd, Od, void 0, md), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(dd, Od) {
        (0, Rd.i)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, dd, this.normalized, ((dd, md) => {
          for (let Wd = 0; Wd < this._size; Wd++) Od(dd[Wd], md + Wd)
        }))
      }
      _alignBuffer() {}
    }

    function vd(dd) {
      switch (dd) {
        case hd.UVKind:
        case hd.UV2Kind:
        case hd.UV3Kind:
        case hd.UV4Kind:
        case hd.UV5Kind:
        case hd.UV6Kind:
          return 2;
        case hd.NormalKind:
        case hd.PositionKind:
          return 3;
        case hd.ColorKind:
        case hd.ColorInstanceKind:
        case hd.MatricesIndicesKind:
        case hd.MatricesIndicesExtraKind:
        case hd.MatricesWeightsKind:
        case hd.MatricesWeightsExtraKind:
        case hd.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + dd + "'")
      }
    }

    function Qd(dd) {
      return dd instanceof Int8Array ? hd.BYTE : dd instanceof Uint8Array ? hd.UNSIGNED_BYTE : dd instanceof Int16Array ? hd.SHORT : dd instanceof Uint16Array ? hd.UNSIGNED_SHORT : dd instanceof Int32Array ? hd.INT : dd instanceof Uint32Array ? hd.UNSIGNED_INT : hd.FLOAT
    }

    function td(dd) {
      return (0, Rd.p)(dd)
    }

    function od(dd, Od, md, Wd, Fd, Xd, Kd, hd) {
      (0, Rd.i)(dd, Od, md, Wd, Fd, Xd, Kd, ((dd, Od) => {
        for (let md = 0; md < Wd; md++) hd(dd[md], Od + md)
      }))
    }

    function Nd(dd, Od, md, Wd, Fd, Xd, Kd, hd) {
      return (0, Rd.o)(dd, Od, md, Wd, Fd, Xd, Kd, hd)
    }
    hd._Counter = 0, hd.BYTE = 5120, hd.UNSIGNED_BYTE = 5121, hd.SHORT = 5122, hd.UNSIGNED_SHORT = 5123, hd.INT = 5124, hd.UNSIGNED_INT = 5125, hd.FLOAT = 5126, hd.HALF_FLOAT = 5131, hd.PositionKind = "position", hd.NormalKind = "normal", hd.TangentKind = "tangent", hd.UVKind = "uv", hd.UV2Kind = "uv2", hd.UV3Kind = "uv3", hd.UV4Kind = "uv4", hd.UV5Kind = "uv5", hd.UV6Kind = "uv6", hd.ColorKind = "color", hd.ColorInstanceKind = "instanceColor", hd.MatricesIndicesKind = "matricesIndices", hd.MatricesWeightsKind = "matricesWeights", hd.MatricesIndicesExtraKind = "matricesIndicesExtra", hd.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let qd = !1;

    function Hd() {
      qd || (qd = !0, hd.DeduceStride = vd, hd.GetDataType = Qd, hd.GetTypeByteLength = td, hd.ForEach = od, hd.GetFloatData = Nd)
    }
  },
  41856: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd
    });
    class Wd {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.Mt = 0, this.is32Bits = !1, this.uniqueId = Wd._Counter++
      }
    }
    Wd._Counter = 0
  },
  42072: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd
    });
    var Wd = md(38636),
      Fd = md(42075);
    class Rd {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || Od && !this.pickedMesh.isVerticesDataPresent(Fd.j.NormalKind)) return null;
        let md, Rd = this.pickedMesh.jRd();
        0 === Rd?.length && (Rd = null);
        const Xd = Wd.h.Cq[0],
          Kd = Wd.h.Cq[1],
          hd = Wd.h.Cq[2];
        if (Od) {
          const dd = this.pickedMesh.getVerticesData(Fd.j.NormalKind);
          let Od = Rd ? Wd.j.FromArrayToRef(dd, 3 * Rd[3 * this.faceId], Xd) : Xd.KOd(dd[3 * this.faceId * 3], dd[3 * this.faceId * 3 + 1], dd[3 * this.faceId * 3 + 2]),
            vd = Rd ? Wd.j.FromArrayToRef(dd, 3 * Rd[3 * this.faceId + 1], Kd) : Kd.KOd(dd[3 * (3 * this.faceId + 1)], dd[3 * (3 * this.faceId + 1) + 1], dd[3 * (3 * this.faceId + 1) + 2]),
            Qd = Rd ? Wd.j.FromArrayToRef(dd, 3 * Rd[3 * this.faceId + 2], hd) : hd.KOd(dd[3 * (3 * this.faceId + 2)], dd[3 * (3 * this.faceId + 2) + 1], dd[3 * (3 * this.faceId + 2) + 2]);
          Od = Od.scale(this.bu), vd = vd.scale(this.bv), Qd = Qd.scale(1 - this.bu - this.bv), md = new Wd.j(Od.x + vd.x + Qd.x, Od.y + vd.y + Qd.y, Od.z + vd.z + Qd.z)
        } else {
          const dd = this.pickedMesh.getVerticesData(Fd.j.PositionKind),
            Od = Rd ? Wd.j.FromArrayToRef(dd, 3 * Rd[3 * this.faceId], Xd) : Xd.KOd(dd[3 * this.faceId * 3], dd[3 * this.faceId * 3 + 1], dd[3 * this.faceId * 3 + 2]),
            vd = Rd ? Wd.j.FromArrayToRef(dd, 3 * Rd[3 * this.faceId + 1], Kd) : Kd.KOd(dd[3 * (3 * this.faceId + 1)], dd[3 * (3 * this.faceId + 1) + 1], dd[3 * (3 * this.faceId + 1) + 2]),
            Qd = Rd ? Wd.j.FromArrayToRef(dd, 3 * Rd[3 * this.faceId + 2], hd) : hd.KOd(dd[3 * (3 * this.faceId + 2)], dd[3 * (3 * this.faceId + 2) + 1], dd[3 * (3 * this.faceId + 2) + 2]),
            td = Od.subtract(vd),
            od = Qd.subtract(vd);
          md = Wd.j.Cross(td, od)
        }
        const vd = (dd, Od) => {
          if (-1 !== this.thinInstanceIndex) {
            const md = dd._thinInstanceDataStorage.matrixData,
              Fd = this.thinInstanceIndex << 4;
            if (md && md.length > Fd) {
              const dd = Wd.h.Matrix[0];
              Wd.d.FromArrayToRef(md, Fd, dd), Wd.j.TransformNormalToRef(Od, dd, Od)
            }
          }
          let md = dd.getWorldMatrix();
          dd.nonUniformScaling && (Wd.h.Matrix[0].Bx(md), md = Wd.h.Matrix[0], md.setTranslationFromFloats(0, 0, 0), md.invert(), md.transposeToRef(Wd.h.Matrix[1]), md = Wd.h.Matrix[1]), Wd.j.TransformNormalToRef(Od, md, Od)
        };
        if (dd && vd(this.pickedMesh, md), this.ray) {
          const Od = Wd.h.Cq[0].Bx(md);
          dd || vd(this.pickedMesh, Od), Wd.j.Dot(Od, this.ray.direction) > 0 && md.negateInPlace()
        }
        return md.normalize(), md
      }
      getTextureCoordinates() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fd.j.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(dd)) return null;
        const Od = this.pickedMesh.jRd();
        if (!Od) return null;
        const md = this.pickedMesh.getVerticesData(dd);
        if (!md) return null;
        let Rd = Wd.i.FromArray(md, 2 * Od[3 * this.faceId]),
          Xd = Wd.i.FromArray(md, 2 * Od[3 * this.faceId + 1]),
          Kd = Wd.i.FromArray(md, 2 * Od[3 * this.faceId + 2]);
        return Rd = Rd.scale(this.bu), Xd = Xd.scale(this.bv), Kd = Kd.scale(1 - this.bu - this.bv), new Wd.i(Rd.x + Xd.x + Kd.x, Rd.y + Xd.y + Kd.y)
      }
    }
  },
  41897: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    var Wd = md(41777);
    let Fd = !1;

    function Rd() {
      Fd || (Fd = !0, Wd.ThinEngine.prototype.updateDynamicIndexBuffer = function(dd, Od) {
        let md;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(dd), md = dd.is32Bits ? Od instanceof Uint32Array ? Od : new Uint32Array(Od) : Od instanceof Uint16Array ? Od : new Uint16Array(Od), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, md, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, Wd.ThinEngine.prototype.updateDynamicVertexBuffer = function(dd, Od, md, Wd) {
        this.bindArrayBuffer(dd), void 0 === md && (md = 0);
        const Fd = Od.byteLength || Od.length;
        void 0 === Wd || Wd >= Fd && 0 === md ? Od instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, md, new Float32Array(Od)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, md, Od) : Od instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, md, new Float32Array(Od).subarray(0, Wd / 4)) : (Od = ArrayBuffer.isView(Od) ? new Uint8Array(Od.buffer, Od.byteOffset, Wd) : new Uint8Array(Od, 0, Wd), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, md, Od)), this._resetVertexBufferBinding()
      })
    }
  },
  41864: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd
    });
    class Wd {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Od = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = Od, !dd && (dd = Od.createTexture(), !dd)) throw new Error("Unable to create webGL texture");
        this.set(dd)
      }
      setUsage() {}
      set(dd) {
        this._webGLTexture = dd
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(dd) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(dd)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const dd of this._MSAARenderBuffers) this._context.deleteRenderbuffer(dd);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[dd] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  41838: (dd, Od, md) => {
    md.d(Od, {
      b: () => Td
    });
    var Wd = md(38660),
      Fd = md(41782),
      Rd = md(38651),
      Xd = md(40262),
      Kd = md(38649),
      hd = md(41841);
    class vd {
      constructor() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, dd && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(dd) {
        this._zOffset !== dd && (this._zOffset = dd, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(dd) {
        this._zOffsetUnits !== dd && (this._zOffsetUnits = dd, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(dd) {
        this._cullFace !== dd && (this._cullFace = dd, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(dd) {
        this._cull !== dd && (this._cull = dd, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(dd) {
        this._depthFunc !== dd && (this._depthFunc = dd, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(dd) {
        this._depthMask !== dd && (this._depthMask = dd, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(dd) {
        this._depthTest !== dd && (this._depthTest = dd, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(dd) {
        this._frontFace !== dd && (this._frontFace = dd, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(dd) {
        this.isDirty && (this._isCullDirty && (this.cull ? dd.enable(dd.CULL_FACE) : dd.disable(dd.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (dd.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (dd.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? dd.enable(dd.DEPTH_TEST) : dd.disable(dd.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (dd.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (dd.enable(dd.POLYGON_OFFSET_FILL), dd.polygonOffset(this.zOffset, this.zOffsetUnits)) : dd.disable(dd.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (dd.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class Qd {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(dd) {
        this._func !== dd && (this._func = dd, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(dd) {
        this._backFunc !== dd && (this._backFunc = dd, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(dd) {
        this._funcRef !== dd && (this._funcRef = dd, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(dd) {
        this._funcMask !== dd && (this._funcMask = dd, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(dd) {
        this._opStencilFail !== dd && (this._opStencilFail = dd, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(dd) {
        this._opDepthFail !== dd && (this._opDepthFail = dd, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(dd) {
        this._opStencilDepthPass !== dd && (this._opStencilDepthPass = dd, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(dd) {
        this._backOpStencilFail !== dd && (this._backOpStencilFail = dd, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(dd) {
        this._backOpDepthFail !== dd && (this._backOpDepthFail = dd, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(dd) {
        this._backOpStencilDepthPass !== dd && (this._backOpStencilDepthPass = dd, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(dd) {
        this._mask !== dd && (this._mask = dd, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(dd) {
        this._enabled !== dd && (this._enabled = dd, this._isStencilTestDirty = !0)
      }
      constructor() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, dd && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(dd) {
        if (!dd) return;
        const Od = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = Od ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = Od ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = Od ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = Od ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = Od ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = Od ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = Od ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = Od ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = Od ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = Od ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = Od ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = Od ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? dd.enable(dd.STENCIL_TEST) : dd.disable(dd.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (dd.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (dd.stencilFuncSeparate(dd.FRONT, this.func, this.funcRef, this.funcMask), dd.stencilFuncSeparate(dd.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (dd.stencilOpSeparate(dd.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), dd.stencilOpSeparate(dd.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class td {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = td.ALWAYS, this.opStencilFail = td.KEEP, this.opDepthFail = td.KEEP, this.opStencilDepthPass = td.REPLACE, this.backFunc = td.ALWAYS, this.backOpStencilFail = td.KEEP, this.backOpDepthFail = td.KEEP, this.backOpStencilDepthPass = td.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(dd) {
        this.func = dd
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(dd) {
        this.backFunc = dd
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(dd) {
        this.funcRef = dd
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(dd) {
        this.funcMask = dd
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(dd) {
        this.opStencilFail = dd
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(dd) {
        this.opDepthFail = dd
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(dd) {
        this.opStencilDepthPass = dd
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(dd) {
        this.backOpStencilFail = dd
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(dd) {
        this.backOpDepthFail = dd
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(dd) {
        this.backOpStencilDepthPass = dd
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(dd) {
        this.mask = dd
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(dd) {
        this.enabled = dd
      }
    }
    td.ALWAYS = 519, td.KEEP = 7680, td.REPLACE = 7681;
    var od = md(41844),
      Nd = md(41817),
      qd = md(41763),
      Hd = md(41799),
      yd = md(41810);

    function bd(dd, Od) {
      if (Od) {
        const {
          requestAnimationFrame: md
        } = Od;
        if ("function" === typeof md) return md(dd)
      }
      if ((0, Hd.h)()) {
        const {
          requestAnimationFrame: md
        } = Od || window;
        if ("function" === typeof md) return md(dd)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(dd);
      return setTimeout(dd, 16)
    }
    class Td {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(dd) {
        return this._shaderProcessor
      }
      _resetAlphaMode() {
        this._alphaMode.fill(-1), this._alphaEquation.fill(-1)
      }
      get shaderPlatformName() {
        return this._shaderPlatformName
      }
      _clearEmptyResources() {
        this._emptyTexture = null, this._emptyCubeTexture = null, this._emptyTexture3D = null, this._emptyTexture2DArray = null
      }
      get JFd() {
        return this._useReverseDepthBuffer
      }
      set JFd(dd) {
        dd !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = dd, this._depthCullingState.depthFunc = dd ? 518 : 515)
      }
      setColorWrite(dd) {
        dd !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = dd)
      }
      getColorWrite() {
        return this._colorWrite
      }
      get depthCullingState() {
        return this._depthCullingState
      }
      get alphaState() {
        return this._alphaState
      }
      get stencilState() {
        return this._stencilState
      }
      get stencilStateComposer() {
        return this._stencilStateComposer
      }
      _getGlobalDefines(dd) {
        if (dd) return this.isNDCHalfZRange ? dd.IS_NDC_HALF_ZRANGE = "" : delete dd.IS_NDC_HALF_ZRANGE, this.JFd ? dd.USE_REVERSE_DEPTHBUFFER = "" : delete dd.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? dd.USE_EXACT_SRGB_CONVERSIONS = "" : delete dd.USE_EXACT_SRGB_CONVERSIONS);
        {
          let dd = "";
          return this.isNDCHalfZRange && (dd += "#define IS_NDC_HALF_ZRANGE"), this.JFd && (dd && (dd += "\n"), dd += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (dd && (dd += "\n"), dd += "#define USE_EXACT_SRGB_CONVERSIONS"), dd
        }
      }
      _rebuildInternalTextures() {
        const dd = this._internalTexturesCache.slice();
        for (const Od of dd) Od._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const dd = this._renderTargetWrapperCache.slice();
        for (const Od of dd) Od.textures?.some((dd => 15 === dd.source)) || Od._rebuild()
      }
      _rebuildEffects() {
        for (const dd in this._compiledEffects) {
          const Od = this._compiledEffects[dd];
          Od._pipelineContext = null, Od._prepareEffect()
        }
        Fd.e.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        Xd.c.Warn(this.name + " context successfully restored."), this.eq.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(dd) {
        setTimeout((() => {
          this._clearEmptyResources();
          const Od = this._depthCullingState.depthTest,
            md = this._depthCullingState.depthFunc,
            Wd = this._depthCullingState.depthMask,
            Fd = this._stencilState.stencilTest;
          dd(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = Od, this._depthCullingState.depthFunc = md, this._depthCullingState.depthMask = Wd, this._stencilState.stencilTest = Fd, this._flagContextRestored()
        }), 0)
      }
      get yJ() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(dd) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(dd) {}
      getClassName() {
        return "AbstractEngine"
      }
      get emptyTexture() {
        return this._emptyTexture || (this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, 5, !1, !1, 1)), this._emptyTexture
      }
      get emptyTexture3D() {
        return this._emptyTexture3D || (this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture3D
      }
      get emptyTexture2DArray() {
        return this._emptyTexture2DArray || (this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture2DArray
      }
      get emptyCubeTexture() {
        if (!this._emptyCubeTexture) {
          const dd = new Uint8Array(4),
            Od = [dd, dd, dd, dd, dd, dd];
          this._emptyCubeTexture = this.createRawCubeTexture(Od, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(dd) {
        this._framebufferDimensionsObject = dd
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(dd) {
        if (!dd) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const Od = this._activeRenderLoops.indexOf(dd);
        Od >= 0 && (this._activeRenderLoops.splice(Od, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: dd
            } = this.customAnimationFrameRequester;
            dd && dd(this.customAnimationFrameRequester.Zq), delete this.customAnimationFrameRequester.Zq
          }
        } else if (0 !== this._frameHandler) {
          const dd = this._frameHandler;
          if (this._frameHandler = 0, (0, Hd.h)()) {
            const {
              cancelAnimationFrame: Od
            } = this.getHostWindow() || window;
            if ("function" === typeof Od) return Od(dd)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(dd);
          return clearTimeout(dd)
        }
      }
      pE() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      bt() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(dd) {
        this._maxFPS = dd, void 0 !== dd && (this._minFrameTime = dd <= 0 ? Number.MAX_VALUE : 1e3 / dd)
      }
      _isOverFrameTime(dd) {
        if (!dd || void 0 === this._maxFPS) return !1;
        const Od = dd - this._lastFrameTime;
        return this._lastFrameTime = dd, this._renderAccumulator += Od, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(dd) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(dd)) {
          let dd = !0;
          (this.yJ || !this.renderEvenInBackground && this._windowIsBackground) && (dd = !1), dd && (this.pE(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.bt())
        }
      }
      _renderLoop(dd) {
        this._processFrame(dd), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let dd = 0; dd < this._activeRenderLoops.length; dd++) {
          (0, this._activeRenderLoops[dd])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(dd, Od) {
        return bd(dd, Od)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Zq = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.Zq) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(dd) {
        -1 === this._activeRenderLoops.indexOf(dd) && (this._activeRenderLoops.push(dd), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(dd) {
        this._depthCullingState.depthTest = dd
      }
      setZOffset(dd) {
        this._depthCullingState.zOffset = this.JFd ? -dd : dd
      }
      getZOffset() {
        const dd = this._depthCullingState.zOffset;
        return this.JFd ? -dd : dd
      }
      setZOffsetUnits(dd) {
        this._depthCullingState.zOffsetUnits = this.JFd ? -dd : dd
      }
      getZOffsetUnits() {
        const dd = this._depthCullingState.zOffsetUnits;
        return this.JFd ? -dd : dd
      }
      getHostWindow() {
        return (0, Hd.h)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(dd) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const dd of this.scenes) dd._rebuildTextures();
        for (const dd of this._virtualScenes) dd._rebuildTextures()
      }
      _releaseRenderTargetWrapper(dd) {
        const Od = this._renderTargetWrapperCache.indexOf(dd); - 1 !== Od && this._renderTargetWrapperCache.splice(Od, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(dd, Od, md) {
        const Wd = Od || this.getRenderWidth(),
          Fd = md || this.getRenderHeight(),
          Rd = dd.x || 0,
          Xd = dd.y || 0;
        this._cachedViewport = dd, this._viewport(Rd * Wd, Xd * Fd, Wd * dd.width, Fd * dd.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(dd) {
        return new Path2D(dd)
      }
      get description() {
        let dd = this.name + this.version;
        return this._caps.parallelShaderCompile && (dd += " - Parallel shader compilation"), dd
      }
      _createTextureBase(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Kd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          hd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          vd = arguments.length > 7 ? arguments[7] : void 0,
          Qd = arguments.length > 8 ? arguments[8] : void 0,
          td = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          od = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Nd = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          Hd = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          yd = arguments.length > 13 ? arguments[13] : void 0,
          bd = arguments.length > 14 ? arguments[14] : void 0,
          pd = arguments.length > 15 ? arguments[15] : void 0;
        const Yd = "data:" === (dd = dd || "").substring(0, 5),
          gd = "blob:" === dd.substring(0, 5),
          wd = Yd && -1 !== dd.indexOf(";base64,"),
          Ed = od || new qd.c(this, 1);
        Ed !== od && (Ed.label = dd.substring(0, 60));
        const Jd = dd;
        !this._transformTextureUrl || wd || od || td || (dd = this._transformTextureUrl(dd)), Jd !== dd && (Ed._originalUrl = Jd);
        const Ud = dd.lastIndexOf(".");
        let xd = Hd || (Ud > -1 ? dd.substring(Ud).toLowerCase() : "");
        xd.indexOf("?") > -1 && (xd = xd.split("?")[0]);
        const Bd = Td.GetCompatibleTextureLoader(xd, yd);
        Wd && Wd.addPendingData(Ed), Ed.url = dd, Ed.generateMipMaps = !Od, Ed.samplingMode = Fd, Ed.invertY = md, Ed._useSRGBBuffer = this._getUseSRGBBuffer(!!pd, Od), this._doNotHandleContextLost || (Ed._buffer = td);
        let Sd = null;
        Kd && !od && (Sd = Ed.onLoadedObservable.add(Kd)), od || this._internalTexturesCache.push(Ed);
        const sd = (md, od) => {
          Wd && Wd.removePendingData(Ed), dd === Jd ? (Sd && Ed.onLoadedObservable.remove(Sd), Rd.e.UseFallbackTexture && dd !== Rd.e.FallbackTexture && this._createTextureBase(Rd.e.FallbackTexture, Od, Ed.invertY, Wd, Fd, null, hd, vd, Qd, td, Ed), md = (md || "Unknown error") + (Rd.e.UseFallbackTexture ? " - Fallback texture was used" : ""), Ed.onErrorObservable.notifyObservers({
            message: md,
            exception: od
          }), hd && hd(md, od)) : (Xd.c.Warn(`Failed to load ${dd}, falling back to ${Jd}`), this._createTextureBase(Jd, Od, Ed.invertY, Wd, Fd, Kd, hd, vd, Qd, td, Ed, Nd, Hd, yd, bd, pd))
        };
        if (Bd) {
          const Od = async dd => {
            (await Bd).loadData(dd, Ed, ((dd, Od, md, Rd, Xd, Kd) => {
              Kd ? sd("TextureLoader failed to load data") : vd(Ed, xd, Wd, {
                width: dd,
                height: Od
              }, Ed.invertY, !md, Rd, (() => (Xd(), !1)), Fd)
            }), bd)
          };
          if (td) {
            const dd = async dd => {
              try {
                await Od(dd)
              } catch (md) {
                sd("Failed to parse texture data", md)
              }
            };
            td instanceof ArrayBuffer ? dd(new Uint8Array(td)) : ArrayBuffer.isView(td) ? dd(td) : hd && hd("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(dd, (async dd => {
            try {
              await Od(new Uint8Array(dd))
            } catch (md) {
              sd("Failed to parse texture data", md)
            }
          }), void 0, Wd ? Wd.offlineProvider : void 0, !0, ((dd, Od) => {
            sd("Unable to load " + (dd && dd.responseURL, Od))
          }))
        } else {
          const md = dd => {
            gd && !this._doNotHandleContextLost && (Ed._buffer = dd), vd(Ed, xd, Wd, dd, Ed.invertY, Od, !1, Qd, Fd)
          };
          !Yd || wd ? td && ("string" === typeof td.decoding || td.close) ? md(td) : Td._FileToolsLoadImage(dd || "", md, sd, Wd ? Wd.offlineProvider : null, yd, Ed.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof td || td instanceof ArrayBuffer || ArrayBuffer.isView(td) || td instanceof Blob ? Td._FileToolsLoadImage(td, md, sd, Wd ? Wd.offlineProvider : null, yd, Ed.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : td && md(td)
        }
        return Ed
      }
      _rebuildBuffers() {
        for (const dd of this._uniformBuffers) dd._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Hd.d)() ? document : null
      }
      getLoadedTexturesCache() {
        return this._internalTexturesCache
      }
      clearInternalTexturesCache() {
        this._internalTexturesCache.length = 0
      }
      getCaps() {
        return this._caps
      }
      resetTextureCache() {
        for (const dd in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, dd) && (this._boundTexturesCache[dd] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(dd) {
        this._name = dd
      }
      static get NpmPackage() {
        return "babylonjs@9.28.0"
      }
      static get Version() {
        return "9.28.0"
      }
      getRenderingCanvas() {
        return this._renderingCanvas
      }
      getAudioContext() {
        return this._audioContext
      }
      getAudioDestination() {
        return this._audioDestination
      }
      setHardwareScalingLevel(dd) {
        this._hardwareScalingLevel = dd, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(dd) {
        this._doNotHandleContextLost = dd
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(dd, Od, md) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new vd, this._stencilStateComposer = new Qd, this._stencilState = new td, this._alphaState = new od.d(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Wd.c, this.onCanvasFocusObservable = new Wd.c, this.onNewSceneAddedObservable = new Wd.c, this.onResizeObservable = new Wd.c, this.onCanvasPointerOutObservable = new Wd.c, this.onEffectErrorObservable = new Wd.c, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new Wd.c, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = dd => this._renderLoop(dd), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new Wd.c, this.onAfterShaderCompilationObservable = new Wd.c, this.onBeginFrameObservable = new Wd.c, this.onEndFrameObservable = new Wd.c, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new Wd.c, this.eq = new Wd.c, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.cV = new Wd.c, this.onReleaseEffectsObservable = new Wd.c, Rd.e.Instances.push(this), this.startTime = hd.d.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, Kd.b.SetMatrixPrecision(!!Od.useLargeWorldRendering || !!Od.useHighPrecisionMatrix), (0, Hd.f)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), Od.antialias = dd ?? Od.antialias, Od.deterministicLockstep = Od.deterministicLockstep ?? !1, Od.lockstepMaxSteps = Od.lockstepMaxSteps ?? 4, Od.timeStep = Od.timeStep ?? 1 / 60, Od.stencil = Od.stencil ?? !0, this._audioContext = Od.audioEngineOptions?.audioContext ?? null, this._audioDestination = Od.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = Od.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!Od.doNotHandleContextLost, this._isStencilEnable = !!Od.stencil, this.useExactSrgbConversions = Od.useExactSrgbConversions ?? !1, this.canvasTabIndex = Od.canvasTabIndex ?? this.canvasTabIndex;
        const Fd = (0, Hd.h)() && window.devicePixelRatio || 1,
          Xd = Od.limitDeviceRatio || Fd;
        md = md || Od.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = md, this._hardwareScalingLevel = md ? 1 / Math.min(Xd, Fd) : 1, this._lastDevicePixelRatio = Fd, this._creationOptions = Od
      }
      resize() {
        let dd, Od, md = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const dd = (0, Hd.h)() && window.devicePixelRatio || 1,
            Od = this._lastDevicePixelRatio / dd;
          this._lastDevicePixelRatio = dd, this._hardwareScalingLevel *= Od
        }
        if ((0, Hd.h)() && (0, Hd.d)())
          if (this._renderingCanvas) {
            const md = this._renderingCanvas.getBoundingClientRect?.();
            dd = this._renderingCanvas.clientWidth || md?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, Od = this._renderingCanvas.clientHeight || md?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else dd = window.innerWidth, Od = window.innerHeight;
        else dd = this._renderingCanvas ? this._renderingCanvas.width : 100, Od = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(dd / this._hardwareScalingLevel, Od / this._hardwareScalingLevel, md)
      }
      setSize(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (dd |= 0, Od |= 0, !md && this._renderingCanvas.width === dd && this._renderingCanvas.height === Od) return !1;
        if (this._renderingCanvas.width = dd, this._renderingCanvas.height = Od, this.scenes) {
          for (let dd = 0; dd < this.scenes.length; dd++) {
            const Od = this.scenes[dd];
            for (let dd = 0; dd < Od.cameras.length; dd++) {
              Od.cameras[dd]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td) {
        throw (0, Nd.m)("engine.rawTexture")
      }
      createRawCubeTexture(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
        throw (0, Nd.m)("engine.rawTexture")
      }
      createRawTexture3D(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd) {
        throw (0, Nd.m)("engine.rawTexture")
      }
      createRawTexture2DArray(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td) {
        throw (0, Nd.m)("engine.rawTexture")
      }
      _sharedInit(dd) {
        this._renderingCanvas = dd
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const dd = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== dd.indexOf("Mobile") || -1 !== dd.indexOf("Mac") && (0, Hd.d)() && "ontouchend" in document
        }, this._checkForMobile(), (0, Hd.h)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(dd) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(dd, !1)
      }
      getFps() {
        return this._fps
      }
      getDeltaTime() {
        return this._deltaTime
      }
      isDeterministicLockStep() {
        return this._deterministicLockstep
      }
      getLockstepMaxSteps() {
        return this._lockstepMaxSteps
      }
      getTimeStep() {
        return 1e3 * this._timeStep
      }
      _createImageBitmapFromSource(dd, Od) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(dd, Od) {
        return createImageBitmap(dd, Od)
      }
      resizeImageBitmap(dd, Od, md) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(dd) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(dd, Od) {
        if ("undefined" === typeof document) return new OffscreenCanvas(dd, Od);
        const md = document.createElement("canvas");
        return md.width = dd, md.height = Od, md
      }
      createCanvas(dd, Od) {
        return Td._CreateCanvas(dd, Od)
      }
      static _FileToolsLoadImage(dd, Od, md, Wd, Fd, Rd, Xd) {
        if (!yd.c.loadImage) throw (0, Nd.m)("FileTools");
        return yd.c.loadImage(dd, Od, md, Wd, Fd, Rd, Xd)
      }
      _loadFile(dd, Od, md, Wd, Fd, Rd) {
        const Xd = (0, yd.i)(dd, Od, md, Wd, Fd, Rd);
        return this._activeRequests.push(Xd), Xd.onCompleteObservable.add((() => {
          const dd = this._activeRequests.indexOf(Xd); - 1 !== dd && this._activeRequests.splice(dd, 1)
        })), Xd
      }
      static _FileToolsLoadFile(dd, Od, md, Wd, Fd, Rd) {
        if (yd.c.loadFile) return yd.c.loadFile(dd, Od, md, Wd, Fd, Rd);
        throw (0, Nd.m)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), Fd.e.ResetCache();
        for (const Od of this._activeRequests) Od.abort();
        this._boundRenderFunction = null, this.cV.notifyObservers(this), this.cV.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, Hd.h)() && window.removeEventListener("resize", this._checkForMobile);
        const dd = Rd.e.Instances.indexOf(this);
        dd >= 0 && Rd.e.Instances.splice(dd, 1), Rd.e.Instances.length || (Rd.e.OnEnginesDisposedObservable.notifyObservers(this), Rd.e.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(dd) {
        throw (0, Nd.m)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(dd, Od) {
        for (let md = 0; md < Rd.e.Instances.length; md++) {
          const Wd = Rd.e.Instances[md];
          for (let md = 0; md < Wd.scenes.length; md++) Wd.scenes[md].markAllMaterialsAsDirty(dd, Od)
        }
      }
      static GetCompatibleTextureLoader(dd, Od) {
        return null
      }
    }
    Td._RenderPassIdCounter = 0, Td._RescalePostProcessFactory = null, Td.CollisionsEpsilon = .001, Td.QueueNewFrame = bd
  },
  41785: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    class Wd {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Wd.ShadersRepository : Wd.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Wd.ShadersStore : Wd.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Wd.IncludesShadersStore : Wd.IncludesShadersStoreWGSL
      }
    }
    Wd.ShadersRepository = "src/Shaders/", Wd.ShadersStore = {}, Wd.IncludesShadersStore = {}, Wd.ShadersRepositoryWGSL = "src/ShadersWGSL/", Wd.ShadersStoreWGSL = {}, Wd.IncludesShadersStoreWGSL = {}
  },
  41802: (dd, Od, md) => {
    md.d(Od, {
      e: () => od,
      f: () => pd,
      j: () => qd,
      l: () => Nd,
      m: () => Hd,
      p: () => Td,
      q: () => td,
      s: () => vd,
      w: () => Qd,
      z: () => hd,
      A: () => Kd
    });
    class Wd {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(dd) {
        dd && this.program && dd(this.program)
      }
      setEngine(dd) {
        this.engine = dd
      }
      _fillEffectInformation(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
        const hd = this.engine;
        if (hd.supportsUniformBuffers)
          for (const Qd in Od) dd.bindUniformBlock(Qd, Od[Qd]);
        let vd;
        for (this.engine.getUniforms(this, md).forEach(((dd, Od) => {
            Wd[md[Od]] = dd
          })), this._uniforms = Wd, vd = 0; vd < Fd.length; vd++) {
          null == dd.getUniform(Fd[vd]) && (Fd.splice(vd, 1), vd--)
        }
        Fd.forEach(((dd, Od) => {
          Rd[dd] = Od
        }));
        for (const Qd of hd.getAttributes(this, Xd)) Kd.push(Qd)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(dd, Od) {
        const md = this._valueCache[dd],
          Wd = Od.updateFlag;
        if (void 0 !== md && md === Wd) return !1;
        const Fd = Od.RRd();
        let Rd = this._matrixValueCache[dd];
        if (void 0 !== md && null !== md && void 0 !== Rd) {
          let Od = !0;
          for (let dd = 15; dd >= 0; dd--)
            if (Rd[dd] !== Fd[dd]) {
              Od = !1;
              break
            } if (Od) return this._valueCache[dd] = Wd, !1
        }
        return void 0 === Rd && (Rd = this._matrixValueCache[dd] = new Float32Array(16)), Rd.set(Fd), this._valueCache[dd] = Wd, !0
      }
      _cacheFloat2(dd, Od, md) {
        let Wd = this._valueCache[dd];
        if (!Wd || 2 !== Wd.length) return Wd = [Od, md], this._valueCache[dd] = Wd, !0;
        let Fd = !1;
        return Wd[0] !== Od && (Wd[0] = Od, Fd = !0), Wd[1] !== md && (Wd[1] = md, Fd = !0), Fd
      }
      _cacheFloat3(dd, Od, md, Wd) {
        let Fd = this._valueCache[dd];
        if (!Fd || 3 !== Fd.length) return Fd = [Od, md, Wd], this._valueCache[dd] = Fd, !0;
        let Rd = !1;
        return Fd[0] !== Od && (Fd[0] = Od, Rd = !0), Fd[1] !== md && (Fd[1] = md, Rd = !0), Fd[2] !== Wd && (Fd[2] = Wd, Rd = !0), Rd
      }
      _cacheFloat4(dd, Od, md, Wd, Fd) {
        let Rd = this._valueCache[dd];
        if (!Rd || 4 !== Rd.length) return Rd = [Od, md, Wd, Fd], this._valueCache[dd] = Rd, !0;
        let Xd = !1;
        return Rd[0] !== Od && (Rd[0] = Od, Xd = !0), Rd[1] !== md && (Rd[1] = md, Xd = !0), Rd[2] !== Wd && (Rd[2] = Wd, Xd = !0), Rd[3] !== Fd && (Rd[3] = Fd, Xd = !0), Xd
      }
      setInt(dd, Od) {
        const md = this._valueCache[dd];
        void 0 !== md && md === Od || this.engine.setInt(this._uniforms[dd], Od) && (this._valueCache[dd] = Od)
      }
      setInt2(dd, Od, md) {
        this._cacheFloat2(dd, Od, md) && (this.engine.setInt2(this._uniforms[dd], Od, md) || (this._valueCache[dd] = null))
      }
      setInt3(dd, Od, md, Wd) {
        this._cacheFloat3(dd, Od, md, Wd) && (this.engine.setInt3(this._uniforms[dd], Od, md, Wd) || (this._valueCache[dd] = null))
      }
      setInt4(dd, Od, md, Wd, Fd) {
        this._cacheFloat4(dd, Od, md, Wd, Fd) && (this.engine.setInt4(this._uniforms[dd], Od, md, Wd, Fd) || (this._valueCache[dd] = null))
      }
      setIntArray(dd, Od) {
        this._valueCache[dd] = null, this.engine.setIntArray(this._uniforms[dd], Od)
      }
      setIntArray2(dd, Od) {
        this._valueCache[dd] = null, this.engine.setIntArray2(this._uniforms[dd], Od)
      }
      setIntArray3(dd, Od) {
        this._valueCache[dd] = null, this.engine.setIntArray3(this._uniforms[dd], Od)
      }
      setIntArray4(dd, Od) {
        this._valueCache[dd] = null, this.engine.setIntArray4(this._uniforms[dd], Od)
      }
      setUInt(dd, Od) {
        const md = this._valueCache[dd];
        void 0 !== md && md === Od || this.engine.setUInt(this._uniforms[dd], Od) && (this._valueCache[dd] = Od)
      }
      setUInt2(dd, Od, md) {
        this._cacheFloat2(dd, Od, md) && (this.engine.setUInt2(this._uniforms[dd], Od, md) || (this._valueCache[dd] = null))
      }
      setUInt3(dd, Od, md, Wd) {
        this._cacheFloat3(dd, Od, md, Wd) && (this.engine.setUInt3(this._uniforms[dd], Od, md, Wd) || (this._valueCache[dd] = null))
      }
      setUInt4(dd, Od, md, Wd, Fd) {
        this._cacheFloat4(dd, Od, md, Wd, Fd) && (this.engine.setUInt4(this._uniforms[dd], Od, md, Wd, Fd) || (this._valueCache[dd] = null))
      }
      setUIntArray(dd, Od) {
        this._valueCache[dd] = null, this.engine.setUIntArray(this._uniforms[dd], Od)
      }
      setUIntArray2(dd, Od) {
        this._valueCache[dd] = null, this.engine.setUIntArray2(this._uniforms[dd], Od)
      }
      setUIntArray3(dd, Od) {
        this._valueCache[dd] = null, this.engine.setUIntArray3(this._uniforms[dd], Od)
      }
      setUIntArray4(dd, Od) {
        this._valueCache[dd] = null, this.engine.setUIntArray4(this._uniforms[dd], Od)
      }
      setArray(dd, Od) {
        this._valueCache[dd] = null, this.engine.setArray(this._uniforms[dd], Od)
      }
      setArray2(dd, Od) {
        this._valueCache[dd] = null, this.engine.setArray2(this._uniforms[dd], Od)
      }
      setArray3(dd, Od) {
        this._valueCache[dd] = null, this.engine.setArray3(this._uniforms[dd], Od)
      }
      setArray4(dd, Od) {
        this._valueCache[dd] = null, this.engine.setArray4(this._uniforms[dd], Od)
      }
      setMatrices(dd, Od) {
        Od && (this._valueCache[dd] = null, this.engine.setMatrices(this._uniforms[dd], Od))
      }
      setMatrix(dd, Od) {
        this._cacheMatrix(dd, Od) && (this.engine.setMatrices(this._uniforms[dd], Od.RRd()) || (this._valueCache[dd] = null))
      }
      setMatrix3x3(dd, Od) {
        this._valueCache[dd] = null, this.engine.setMatrix3x3(this._uniforms[dd], Od)
      }
      setMatrix2x2(dd, Od) {
        this._valueCache[dd] = null, this.engine.setMatrix2x2(this._uniforms[dd], Od)
      }
      setFloat(dd, Od) {
        const md = this._valueCache[dd];
        void 0 !== md && md === Od || this.engine.setFloat(this._uniforms[dd], Od) && (this._valueCache[dd] = Od)
      }
      setVector2(dd, Od) {
        this._cacheFloat2(dd, Od.x, Od.y) && (this.engine.setFloat2(this._uniforms[dd], Od.x, Od.y) || (this._valueCache[dd] = null))
      }
      setFloat2(dd, Od, md) {
        this._cacheFloat2(dd, Od, md) && (this.engine.setFloat2(this._uniforms[dd], Od, md) || (this._valueCache[dd] = null))
      }
      setVector3(dd, Od) {
        this._cacheFloat3(dd, Od.x, Od.y, Od.z) && (this.engine.setFloat3(this._uniforms[dd], Od.x, Od.y, Od.z) || (this._valueCache[dd] = null))
      }
      setFloat3(dd, Od, md, Wd) {
        this._cacheFloat3(dd, Od, md, Wd) && (this.engine.setFloat3(this._uniforms[dd], Od, md, Wd) || (this._valueCache[dd] = null))
      }
      setVector4(dd, Od) {
        this._cacheFloat4(dd, Od.x, Od.y, Od.z, Od.w) && (this.engine.setFloat4(this._uniforms[dd], Od.x, Od.y, Od.z, Od.w) || (this._valueCache[dd] = null))
      }
      setQuaternion(dd, Od) {
        this._cacheFloat4(dd, Od.x, Od.y, Od.z, Od.w) && (this.engine.setFloat4(this._uniforms[dd], Od.x, Od.y, Od.z, Od.w) || (this._valueCache[dd] = null))
      }
      setFloat4(dd, Od, md, Wd, Fd) {
        this._cacheFloat4(dd, Od, md, Wd, Fd) && (this.engine.setFloat4(this._uniforms[dd], Od, md, Wd, Fd) || (this._valueCache[dd] = null))
      }
      setColor3(dd, Od) {
        this._cacheFloat3(dd, Od.r, Od.g, Od.b) && (this.engine.setFloat3(this._uniforms[dd], Od.r, Od.g, Od.b) || (this._valueCache[dd] = null))
      }
      setColor4(dd, Od, md) {
        this._cacheFloat4(dd, Od.r, Od.g, Od.b, md) && (this.engine.setFloat4(this._uniforms[dd], Od.r, Od.g, Od.b, md) || (this._valueCache[dd] = null))
      }
      setDirectColor4(dd, Od) {
        this._cacheFloat4(dd, Od.r, Od.g, Od.b, Od.a) && (this.engine.setFloat4(this._uniforms[dd], Od.r, Od.g, Od.b, Od.a) || (this._valueCache[dd] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var Fd = md(41810);
    const Rd = new WeakMap,
      Xd = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function Kd(dd) {
      let Od = Rd.get(dd);
      if (!Od) {
        if (!dd) return Xd;
        Od = {
          _webGLVersion: dd.TEXTURE_BINDING_3D ? 2 : 1,
          _context: dd,
          parallelShaderCompile: dd.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, Rd.set(dd, Od)
      }
      return Od
    }

    function hd(dd) {
      Rd.delete(dd)
    }

    function vd(dd, Od, md, Wd, Fd, Rd) {
      const Xd = Kd(Wd);
      Rd || (Rd = Xd._createShaderProgramInjection ?? od);
      return Rd(dd, bd(Od, "vertex", Wd, Xd._contextWasLost), bd(md, "fragment", Wd, Xd._contextWasLost), Wd, Fd, Xd.validateShaderPrograms)
    }

    function Qd(dd, Od, md, Wd, Fd) {
      let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Xd = arguments.length > 6 ? arguments[6] : void 0;
      const hd = Kd(Fd);
      Xd || (Xd = hd._createShaderProgramInjection ?? od);
      const vd = hd._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return Xd(dd, yd(Od, "vertex", Wd, vd, Fd, hd._contextWasLost), yd(md, "fragment", Wd, vd, Fd, hd._contextWasLost), Fd, Rd, hd.validateShaderPrograms)
    }

    function td(dd, Od) {
      const md = new Wd,
        Fd = Kd(dd);
      return Fd.parallelShaderCompile && !Fd.disableParallelShaderCompile && (md.isParallelCompiled = !0), md.context = Fd._context, md
    }

    function od(dd, Od, md, Wd) {
      let Fd = arguments.length > 5 ? arguments[5] : void 0;
      const Rd = Wd.createProgram();
      if (dd.program = Rd, !Rd) throw new Error("Unable to create program");
      return Wd.attachShader(Rd, Od), Wd.attachShader(Rd, md), Wd.linkProgram(Rd), dd.context = Wd, dd.vertexShader = Od, dd.fragmentShader = md, dd.isParallelCompiled || qd(dd, Wd, Fd), Rd
    }

    function Nd(dd, Od, md) {
      const Wd = dd;
      if (Wd._isDisposed) return !1;
      const Fd = Kd(Od);
      return !!(Fd && Fd.parallelShaderCompile && Fd.parallelShaderCompile.COMPLETION_STATUS_KHR && Wd.program && Od.getProgramParameter(Wd.program, Fd.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (qd(Wd, Od, md), !0)
    }

    function qd(dd, Od, md) {
      const Wd = dd.context,
        Fd = dd.vertexShader,
        Rd = dd.fragmentShader,
        Xd = dd.program;
      if (!Wd.getProgramParameter(Xd, Wd.LINK_STATUS)) {
        if (!Od.getShaderParameter(Fd, Od.COMPILE_STATUS)) {
          const md = Od.getShaderInfoLog(Fd);
          if (md) throw dd.vertexCompilationError = md, new Error("VERTEX SHADER " + md)
        }
        if (!Od.getShaderParameter(Rd, Od.COMPILE_STATUS)) {
          const md = Od.getShaderInfoLog(Rd);
          if (md) throw dd.fragmentCompilationError = md, new Error("FRAGMENT SHADER " + md)
        }
        const md = Wd.getProgramInfoLog(Xd);
        if (md) throw dd.programLinkError = md, new Error(md)
      }
      if (md) {
        Wd.validateProgram(Xd);
        if (!Wd.getProgramParameter(Xd, Wd.VALIDATE_STATUS)) {
          const Od = Wd.getProgramInfoLog(Xd);
          if (Od) throw dd.programValidationError = Od, new Error(Od)
        }
      }
      Wd.deleteShader(Fd), Wd.deleteShader(Rd), dd.vertexShader = void 0, dd.fragmentShader = void 0, dd.onCompiled && (dd.onCompiled(), dd.onCompiled = void 0)
    }

    function Hd(dd, Od, md, Wd, Fd, Rd, Xd, hd, td) {
      let od = arguments.length > 10 ? arguments[10] : void 0,
        Nd = arguments.length > 11 ? arguments[11] : void 0,
        qd = arguments.length > 12 ? arguments[12] : void 0;
      const Hd = Kd(dd.context);
      Nd || (Nd = Hd.createRawShaderProgramInjection ?? vd), qd || (qd = Hd.createShaderProgramInjection ?? Qd);
      const yd = dd;
      yd.program = Wd ? Nd(yd, Od, md, yd.context, td) : qd(yd, Od, md, hd, yd.context, td), yd.program.__SPECTOR_rebuildProgram = Xd, od()
    }

    function yd(dd, Od, md, Wd, Rd, Xd) {
      return bd((0, Fd.e)(dd, md, Wd), Od, Rd, Xd)
    }

    function bd(dd, Od, md, Wd) {
      const Fd = md.createShader("vertex" === Od ? md.VERTEX_SHADER : md.FRAGMENT_SHADER);
      if (!Fd) {
        let dd, Fd = md.NO_ERROR;
        for (;
          (dd = md.getError()) !== md.NO_ERROR;) Fd = dd;
        throw new Error(`Something went wrong while creating a gl ${Od} shader object. gl error=${Fd}, gl isContextLost=${md.isContextLost()}, _contextWasLost=${Wd}`)
      }
      return md.shaderSource(Fd, dd), md.compileShader(Fd), Fd
    }

    function Td(dd, Od) {
      Od.useProgram(dd)
    }

    function pd(dd, Od) {
      const md = dd;
      if (!md.isParallelCompiled) return void Od(dd);
      const Wd = md.onCompiled;
      md.onCompiled = () => {
        Wd?.(), Od(dd)
      }
    }
  },
  41777: (dd, Od, md) => {
    md.d(Od, {
      ThinEngine: () => gd
    });
    var Wd = md(41782),
      Fd = md(41802),
      Rd = md(41838),
      Xd = md(41852),
      Kd = md(40262),
      hd = md(41799);
    class vd {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(dd, Od, md, Wd, Fd) {
        if (Fd.drawBuffersExtensionDisabled) {
          const Od = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          dd = dd.replace(Od, "")
        }
        return dd
      }
    }
    const Qd = /(flat\s)?\s*varying\s*.*/;
    class td {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(dd) {
        return dd.replace("attribute", "in")
      }
      varyingCheck(dd, Od) {
        return Qd.test(dd)
      }
      varyingProcessor(dd, Od) {
        return dd.replace("varying", Od ? "in" : "out")
      }
      postProcessor(dd, Od, md) {
        const Wd = -1 !== dd.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (dd = (dd = dd.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), md) {
          const md = -1 !== dd.search(/layout *\(location *= *0\) *out/g),
            Fd = -1 !== Od.indexOf("#define DUAL_SOURCE_BLENDING"),
            Rd = Fd ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          Fd && (dd = "#extension GL_EXT_blend_func_extended : require\n" + dd), dd = (dd = (dd = (dd = (dd = (dd = (dd = dd.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (Wd || md ? "" : Rd) + "void main(")
        } else {
          Od.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (dd = "invariant gl_Position;\n" + dd);
          if (-1 !== Od.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + dd
        }
        return dd
      }
    }
    var od = md(41854),
      Nd = md(41859),
      qd = md(41864),
      Hd = md(41763),
      yd = md(41810),
      bd = md(41791),
      Td = md(41869),
      pd = md(41844);
    class Yd {}
    class gd extends Rd.b {
      get name() {
        return this._name
      }
      set name(dd) {
        this._name = dd
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return Wd.e.ShadersRepository
      }
      static set ShadersRepository(dd) {
        Wd.e.ShadersRepository = dd
      }
      get supportsUniformBuffers() {
        return this.YH > 1 && !this.disableUniformBuffers
      }
      get needPOTTextures() {
        return this._webGLVersion < 2 || this.forcePOTTextures
      }
      get _supportsHardwareTextureRescaling() {
        return !1
      }
      snapshotRenderingReset() {
        this.snapshotRendering = !1
      }
      constructor(dd, Od, md, Wd) {
        if (md = md || {}, super(Od ?? md.antialias, md, Wd), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !dd) return;
        let Rd;
        if (dd.getContext) {
          if (Rd = dd, void 0 === md.preserveDrawingBuffer && (md.preserveDrawingBuffer = !1), void 0 === md.xrCompatible && (md.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const dd = navigator.userAgent;
            for (const Od of gd.ExceptionList) {
              const Wd = Od.key,
                Fd = Od.targets;
              if (new RegExp(Wd).test(dd)) {
                if (Od.capture && Od.captureConstraint) {
                  const md = Od.capture,
                    Wd = Od.captureConstraint,
                    Fd = new RegExp(md).exec(dd);
                  if (Fd && Fd.length > 0) {
                    if (parseInt(Fd[Fd.length - 1]) >= Wd) continue
                  }
                }
                for (const dd of Fd) switch (dd) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    md.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, Fd.z)(this._gl)
            } : (this._onContextLost = dd => {
              dd.preventDefault(), this._contextWasLost = !0, (0, Fd.z)(this._gl), Kd.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, Rd.addEventListener("webglcontextrestored", this._onContextRestored, !1), md.powerPreference = md.powerPreference || "high-performance"), Rd.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (md.xrCompatible = !1), !md.disableWebGL2Support) try {
            this._gl = Rd.getContext("webgl2", md) || Rd.getContext("experimental-webgl2", md), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (Qd) {}
          if (!this._gl) {
            if (!Rd) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = Rd.getContext("webgl", md) || Rd.getContext("experimental-webgl", md)
            } catch (Qd) {
              throw new Error("WebGL not supported", {
                cause: Qd
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = dd, Rd = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const Od = this._gl.getContextAttributes();
          Od && (md.stencil = Od.stencil)
        }
        this._sharedInit(Rd), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== md.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = md.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let Fd = 0; Fd < this._caps.maxVertexAttribs; Fd++) this._currentBufferPointers[Fd] = new Yd;
        this._shaderProcessor = this.YH > 1 ? new td : new vd;
        const Xd = `Babylon.js v${gd.Version}`;
        Kd.c.Log(Xd + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Xd);
        const hd = (0, Fd.A)(this._gl);
        hd.validateShaderPrograms = this.validateShaderPrograms, hd.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(dd) {
        return null
      }
      areAllEffectsReady() {
        for (const dd in this._compiledEffects) {
          if (!this._compiledEffects[dd].isReady()) return !1
        }
        return !0
      }
      _initGLContext() {
        this._caps = {
          maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
          maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
          maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
          maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
          maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
          maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
          maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
          maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
          maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
          shaderFloatPrecision: 0,
          parallelShaderCompile: this._gl.getExtension("KHR_parallel_shader_compile") || void 0,
          standardDerivatives: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_standard_derivatives"),
          maxAnisotropy: 1,
          astc: this._gl.getExtension("WEBGL_compressed_texture_astc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_astc"),
          bptc: this._gl.getExtension("EXT_texture_compression_bptc") || this._gl.getExtension("WEBKIT_EXT_texture_compression_bptc"),
          s3tc: this._gl.getExtension("WEBGL_compressed_texture_s3tc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
          s3tc_srgb: this._gl.getExtension("WEBGL_compressed_texture_s3tc_srgb") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc_srgb"),
          pvrtc: this._gl.getExtension("WEBGL_compressed_texture_pvrtc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          etc1: this._gl.getExtension("WEBGL_compressed_texture_etc1") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"),
          etc2: this._gl.getExtension("WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBGL_compressed_texture_es3_0"),
          textureAnisotropicFilterExtension: this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"),
          uintIndices: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_element_index_uint"),
          fragmentDepthSupported: this._webGLVersion > 1 || null !== this._gl.getExtension("EXT_frag_depth"),
          highPrecisionShaderSupported: !1,
          timerQuery: this._gl.getExtension("EXT_disjoint_timer_query_webgl2") || this._gl.getExtension("EXT_disjoint_timer_query"),
          supportOcclusionQuery: this._webGLVersion > 1,
          canUseTimestampForTimerQuery: !1,
          drawBuffersExtension: !1,
          maxMSAASamples: 1,
          colorBufferFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_float")),
          blendFloat: null !== this._gl.getExtension("EXT_float_blend"),
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          colorBufferHalfFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_half_float")),
          textureFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_float")),
          textureHalfFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_half_float")),
          textureHalfFloatRender: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloatLinearFiltering: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          textureLOD: !!(this._webGLVersion > 1 || this._gl.getExtension("EXT_shader_texture_lod")),
          texelFetch: 1 !== this._webGLVersion,
          blendMinMax: !1,
          multiview: this._gl.getExtension("OVR_multiview2"),
          oculusMultiview: this._gl.getExtension("OCULUS_multiview"),
          depthTextureExtension: !1,
          canUseGLInstanceID: this._webGLVersion > 1,
          canUseGLVertexID: this._webGLVersion > 1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: this._webGLVersion > 1,
          textureMaxLevel: this._webGLVersion > 1,
          texture2DArrayMaxLayerCount: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_ARRAY_TEXTURE_LAYERS) : 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !!this._gl.getExtension("EXT_texture_norm16"),
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, this._caps.supportFloatTexturesResolve = this._caps.colorBufferFloat, this._caps.rg11b10ufColorRenderable = this._caps.colorBufferFloat, this._glVersion = this._gl.getParameter(this._gl.VERSION);
        const dd = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != dd && (this._glRenderer = this._gl.getParameter(dd.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(dd.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const Od = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!Od, this._alphaState = new pd.d(this._caps.blendParametersPerTarget), Od && (this._gl.blendEquationSeparateIndexed = Od.blendEquationSeparateiOES.bind(Od), this._gl.blendEquationIndexed = Od.blendEquationiOES.bind(Od), this._gl.blendFuncSeparateIndexed = Od.blendFuncSeparateiOES.bind(Od), this._gl.blendFuncIndexed = Od.blendFunciOES.bind(Od), this._gl.colorMaskIndexed = Od.colorMaskiOES.bind(Od), this._gl.disableIndexed = Od.disableiOES.bind(Od), this._gl.enableIndexed = Od.enableiOES.bind(Od)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const dd = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== dd) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = dd.drawBuffersWEBGL.bind(dd), this._caps.maxDrawBuffers = this._gl.getParameter(dd.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let Od = 0; Od < 16; Od++) this._gl["COLOR_ATTACHMENT" + Od + "_WEBGL"] = dd["COLOR_ATTACHMENT" + Od + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const dd = this._gl.getExtension("WEBGL_depth_texture");
          null != dd && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = dd.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const dd = this._gl.getExtension("OES_vertex_array_object");
          null != dd && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = dd.createVertexArrayOES.bind(dd), this._gl.bindVertexArray = dd.bindVertexArrayOES.bind(dd), this._gl.deleteVertexArray = dd.deleteVertexArrayOES.bind(dd))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const dd = this._gl.getExtension("ANGLE_instanced_arrays");
          null != dd ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = dd.drawArraysInstancedANGLE.bind(dd), this._gl.drawElementsInstanced = dd.drawElementsInstancedANGLE.bind(dd), this._gl.vertexAttribDivisor = dd.vertexAttribDivisorANGLE.bind(dd)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const dd = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            Od = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (dd && Od && (this._caps.highPrecisionShaderSupported = 0 !== dd.precision && 0 !== Od.precision, this._caps.shaderFloatPrecision = Math.min(dd.precision, Od.precision)), !this._shouldUseHighPrecisionShader) {
            const dd = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              Od = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            dd && Od && (this._caps.shaderFloatPrecision = Math.min(dd.precision, Od.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const dd = this._gl.getExtension("EXT_blend_minmax");
          null != dd && (this._caps.blendMinMax = !0, this._gl.MAX = dd.MAX_EXT, this._gl.MIN = dd.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const dd = this._gl.getExtension("EXT_sRGB");
            null != dd && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: dd.SRGB_EXT,
              SRGB8: dd.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: dd.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const dd = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== dd && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && dd)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let md = 0; md < this._maxSimultaneousTextures; md++) this._nextFreeTextureSlots.push(md);
        "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
      }
      _initFeatures() {
        this._features = {
          forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
          supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
          supportDepthStencilTexture: 1 !== this._webGLVersion,
          supportShadowSamplers: 1 !== this._webGLVersion,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: 1 !== this._webGLVersion,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: 1 !== this._webGLVersion,
          basisNeedsPOT: 1 === this._webGLVersion,
          support3DTextures: 1 !== this._webGLVersion,
          needTypeSuffixInShaderConstants: 1 !== this._webGLVersion,
          supportMSAA: 1 !== this._webGLVersion,
          supportSSAO2: 1 !== this._webGLVersion,
          supportIBLShadows: 1 !== this._webGLVersion,
          supportExtendedTextureFormats: 1 !== this._webGLVersion,
          supportSwitchCaseInShader: 1 !== this._webGLVersion,
          supportSyncTextureRead: !0,
          needsInvertingBitmap: !0,
          useUBOBindingCache: !0,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !1,
          supportSpriteInstancing: !0,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        }
      }
      get YH() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const dd = this._workingCanvas.getContext("2d");
        dd && (this._workingContext = dd)
      }
      getInfo() {
        return this.getGlInfo()
      }
      getGlInfo() {
        return {
          vendor: this._glVendor,
          renderer: this._glRenderer,
          version: this._glVersion
        }
      }
      extractDriverInfo() {
        const dd = this.getGlInfo();
        return dd && dd.renderer ? dd.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Rd = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = Rd;
        let Xd = 0;
        if (Od && dd) {
          let Od = !0;
          if (this._currentRenderTarget) {
            const md = this._currentRenderTarget.texture?.format;
            if (void 0 !== md && (0, Td.i)(md)) {
              const md = this._currentRenderTarget.texture?.type;
              void 0 !== md && (0, Td.j)(md) ? (gd._TempClearColorUint32[0] = 255 * dd.r, gd._TempClearColorUint32[1] = 255 * dd.g, gd._TempClearColorUint32[2] = 255 * dd.b, gd._TempClearColorUint32[3] = 255 * dd.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, gd._TempClearColorUint32), Od = !1) : (gd._TempClearColorInt32[0] = 255 * dd.r, gd._TempClearColorInt32[1] = 255 * dd.g, gd._TempClearColorInt32[2] = 255 * dd.b, gd._TempClearColorInt32[3] = 255 * dd.a, this._gl.clearBufferiv(this._gl.COLOR, 0, gd._TempClearColorInt32), Od = !1)
            }
          }
          Od && (this._gl.clearColor(dd.r, dd.g, dd.b, void 0 !== dd.a ? dd.a : 1), Xd |= this._gl.COLOR_BUFFER_BIT)
        }
        md && (this.JFd ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Xd |= this._gl.DEPTH_BUFFER_BIT), Wd && (this._gl.clearStencil(Fd), Xd |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Xd)
      }
      _clearColorAttachment(dd, Od, md, Wd) {
        if ((0, Td.i)(md)) {
          const md = (0, Td.j)(Wd),
            Fd = md ? gd._TempClearColorUint32 : gd._TempClearColorInt32;
          return Fd[0] = Od.r, Fd[1] = Od.g, Fd[2] = Od.b, Fd[3] = Od.a, void(md ? this._gl.clearBufferuiv(this._gl.COLOR, dd, Fd) : this._gl.clearBufferiv(this._gl.COLOR, dd, Fd))
        }
        gd._TempClearColorFloat32[0] = Od.r, gd._TempClearColorFloat32[1] = Od.g, gd._TempClearColorFloat32[2] = Od.b, gd._TempClearColorFloat32[3] = Od.a, this._gl.clearBufferfv(this._gl.COLOR, dd, gd._TempClearColorFloat32)
      }
      _viewport(dd, Od, md, Wd) {
        dd === this._viewportCached.x && Od === this._viewportCached.y && md === this._viewportCached.z && Wd === this._viewportCached.w || (this._viewportCached.x = dd, this._viewportCached.y = Od, this._viewportCached.z = md, this._viewportCached.w = Wd, this._gl.viewport(dd, Od, md, Wd))
      }
      bt() {
        super.bt(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0,
          Fd = arguments.length > 4 ? arguments[4] : void 0,
          Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const hd = dd;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = dd, this._integerMRTAttachmentsMask = !dd.isMulti && dd.texture && (0, Td.i)(dd.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(hd._framebuffer);
        const vd = this._gl;
        dd.isMulti || (dd.is2DArray || dd.is3D ? (vd.framebufferTextureLayer(vd.FRAMEBUFFER, vd.COLOR_ATTACHMENT0, dd.texture._hardwareTexture?.underlyingResource, Rd, Xd), hd._currentLOD = Rd) : dd.isCube ? vd.framebufferTexture2D(vd.FRAMEBUFFER, vd.COLOR_ATTACHMENT0, vd.TEXTURE_CUBE_MAP_POSITIVE_X + Od, dd.texture._hardwareTexture?.underlyingResource, Rd) : hd._currentLOD !== Rd && (vd.framebufferTexture2D(vd.FRAMEBUFFER, vd.COLOR_ATTACHMENT0, vd.TEXTURE_2D, dd.texture._hardwareTexture?.underlyingResource, Rd), hd._currentLOD = Rd));
        const Qd = dd._depthStencilTexture;
        if (Qd) {
          dd.is3D && (dd.texture.width === Qd.width && dd.texture.height === Qd.height && dd.texture.depth === Qd.depth || Kd.c.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const md = dd._depthStencilTextureWithStencil ? vd.DEPTH_STENCIL_ATTACHMENT : vd.DEPTH_ATTACHMENT;
          dd.is2DArray || dd.is3D ? vd.framebufferTextureLayer(vd.FRAMEBUFFER, md, Qd._hardwareTexture?.underlyingResource, Rd, Xd) : dd.isCube ? vd.framebufferTexture2D(vd.FRAMEBUFFER, md, vd.TEXTURE_CUBE_MAP_POSITIVE_X + Od, Qd._hardwareTexture?.underlyingResource, Rd) : vd.framebufferTexture2D(vd.FRAMEBUFFER, md, vd.TEXTURE_2D, Qd._hardwareTexture?.underlyingResource, Rd)
        }
        hd._MSAAFramebuffer && this._bindUnboundFramebuffer(hd._MSAAFramebuffer), this._cachedViewport && !Fd ? this.setViewport(this._cachedViewport, md, Wd) : (md || (md = dd.width, Rd && (md /= Math.pow(2, Rd))), Wd || (Wd = dd.height, Rd && (Wd /= Math.pow(2, Rd))), this._viewport(0, 0, md, Wd)), this.wipeCaches()
      }
      setStateCullFaceType(dd, Od) {
        const md = this.cullBackFaces ?? dd ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== md || Od) && (this._depthCullingState.cullFace = md)
      }
      setState(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Fd = arguments.length > 4 ? arguments[4] : void 0,
          Rd = arguments.length > 5 ? arguments[5] : void 0,
          Xd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== dd || md) && (this._depthCullingState.cull = dd), this.setStateCullFaceType(Fd, md), this.setZOffset(Od), this.setZOffsetUnits(Xd);
        const Kd = Wd ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== Kd || md) && (this._depthCullingState.frontFace = Kd), this._stencilStateComposer.stencilMaterial = Rd
      }
      _resolveAndGenerateMipMapsFramebuffer(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        dd.disableAutomaticMSAAResolve || (dd.isMulti ? this.resolveMultiFramebuffer(dd) : this.resolveFramebuffer(dd)), Od || (dd.isMulti ? this.generateMipMapsMultiFramebuffer(dd) : this.generateMipMapsFramebuffer(dd))
      }
      _bindUnboundFramebuffer(dd) {
        this._currentFramebuffer !== dd && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, dd), this._currentFramebuffer = dd)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(dd) {
        const Od = this._getTextureTarget(dd);
        this._bindTextureDirectly(Od, dd, !0), this._gl.generateMipmap(Od), this._bindTextureDirectly(Od, null)
      }
      unBindFramebuffer(dd, Od, md) {
        const Wd = dd;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(dd, Od), md && (Wd._MSAAFramebuffer && this._bindUnboundFramebuffer(Wd._framebuffer), md()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(dd) {
        dd.isMulti || !dd.texture?.generateMipMaps || dd.isCube || this.generateMipmaps(dd.texture)
      }
      resolveFramebuffer(dd) {
        const Od = dd,
          md = this._gl;
        if (!Od._MSAAFramebuffer || Od.isMulti) return;
        let Wd = Od.resolveMSAAColors ? md.COLOR_BUFFER_BIT : 0;
        Wd |= Od._generateDepthBuffer && Od.resolveMSAADepth ? md.DEPTH_BUFFER_BIT : 0, Wd |= Od._generateStencilBuffer && Od.resolveMSAAStencil ? md.STENCIL_BUFFER_BIT : 0, md.bindFramebuffer(md.READ_FRAMEBUFFER, Od._MSAAFramebuffer), md.bindFramebuffer(md.DRAW_FRAMEBUFFER, Od._framebuffer), md.blitFramebuffer(0, 0, dd.width, dd.height, 0, 0, dd.width, dd.height, Wd, md.NEAREST)
      }
      flushFramebuffer() {
        this._gl.flush()
      }
      restoreDefaultFramebuffer() {
        this._currentRenderTarget ? this.unBindFramebuffer(this._currentRenderTarget) : this._bindUnboundFramebuffer(null), this._cachedViewport && this.setViewport(this._cachedViewport), this.wipeCaches()
      }
      _resetVertexBufferBinding() {
        this.bindArrayBuffer(null), this._cachedVertexBuffers = null
      }
      createVertexBuffer(dd, Od, md) {
        return this._createVertexBuffer(dd, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(dd, Od) {
        const md = this._gl.createBuffer();
        if (!md) throw new Error("Unable to create vertex buffer");
        const Wd = new od.d(md);
        return this.bindArrayBuffer(Wd), "number" !== typeof dd ? dd instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(dd), Od), Wd.Mt = 4 * dd.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, dd, Od), Wd.Mt = dd.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(dd), Od), Wd.Mt = dd), this._resetVertexBufferBinding(), Wd.references = 1, Wd
      }
      createDynamicVertexBuffer(dd, Od) {
        return this._createVertexBuffer(dd, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(dd, Od, md) {
        const Wd = this._gl.createBuffer(),
          Fd = new od.d(Wd);
        if (!Wd) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(Fd);
        const Rd = this._normalizeIndexData(dd);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Rd, Od ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), Fd.references = 1, Fd.is32Bits = 4 === Rd.BYTES_PER_ELEMENT, Fd
      }
      _normalizeIndexData(dd) {
        if (2 === dd.BYTES_PER_ELEMENT) return dd;
        if (this._caps.uintIndices) {
          if (dd instanceof Uint32Array) return dd;
          for (let Od = 0; Od < dd.length; Od++)
            if (dd[Od] >= 65535) return new Uint32Array(dd);
          return new Uint16Array(dd)
        }
        return new Uint16Array(dd)
      }
      bindArrayBuffer(dd) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(dd, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(dd, Od, md) {
        const Wd = dd.program,
          Fd = this._gl.getUniformBlockIndex(Wd, Od);
        this._gl.uniformBlockBinding(Wd, Fd, md)
      }
      bindIndexBuffer(dd) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(dd, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(dd, Od) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[Od] !== dd) && (this._gl.bindBuffer(Od, dd ? dd.underlyingResource : null), this._currentBoundBuffer[Od] = dd)
      }
      updateArrayBuffer(dd) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, dd)
      }
      _vertexAttribPointer(dd, Od, md, Wd, Fd, Rd, Xd) {
        const Kd = this._currentBufferPointers[Od];
        if (!Kd) return;
        let hd = !1;
        Kd.active ? (Kd.buffer !== dd && (Kd.buffer = dd, hd = !0), Kd.size !== md && (Kd.size = md, hd = !0), Kd.type !== Wd && (Kd.type = Wd, hd = !0), Kd.normalized !== Fd && (Kd.normalized = Fd, hd = !0), Kd.stride !== Rd && (Kd.stride = Rd, hd = !0), Kd.offset !== Xd && (Kd.offset = Xd, hd = !0)) : (hd = !0, Kd.active = !0, Kd.index = Od, Kd.size = md, Kd.type = Wd, Kd.normalized = Fd, Kd.stride = Rd, Kd.offset = Xd, Kd.buffer = dd), (hd || this._vaoRecordInProgress) && (this.bindArrayBuffer(dd), Wd === this._gl.UNSIGNED_INT || Wd === this._gl.INT ? this._gl.vertexAttribIPointer(Od, md, Wd, Rd, Xd) : this._gl.vertexAttribPointer(Od, md, Wd, Fd, Rd, Xd))
      }
      _bindIndexBufferWithCache(dd) {
        null != dd && this._cachedIndexBuffer !== dd && (this._cachedIndexBuffer = dd, this.bindIndexBuffer(dd), this._uintIndicesCurrentlySet = dd.is32Bits)
      }
      _bindVertexBuffersAttributes(dd, Od, md) {
        const Wd = Od.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let Fd = 0; Fd < Wd.length; Fd++) {
          const Rd = Od.getAttributeLocation(Fd);
          if (Rd >= 0) {
            const Od = Wd[Fd];
            let Xd = null;
            if (md && (Xd = md[Od]), Xd || (Xd = dd[Od]), !Xd) continue;
            this._gl.enableVertexAttribArray(Rd), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[Rd] = !0);
            const Kd = Xd.getBuffer();
            Kd && (this._vertexAttribPointer(Kd, Rd, Xd.getSize(), Xd.type, Xd.normalized, Xd.byteStride, Xd.byteOffset), Xd.getIsInstanced() && (this._gl.vertexAttribDivisor(Rd, Xd.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(Rd), this._currentInstanceBuffers.push(Kd))))
          }
        }
      }
      recordVertexArrayObject(dd, Od, md, Wd) {
        const Fd = this._gl.createVertexArray();
        if (!Fd) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(Fd), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(dd, md, Wd), this.bindIndexBuffer(Od), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), Fd
      }
      bindVertexArrayObject(dd, Od) {
        this._cachedVertexArrayObject !== dd && (this._cachedVertexArrayObject = dd, this._gl.bindVertexArray(dd), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != Od && Od.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(dd, Od, md, Wd, Fd) {
        if (this._cachedVertexBuffers !== dd || this._cachedEffectForVertexBuffers !== Fd) {
          this._cachedVertexBuffers = dd, this._cachedEffectForVertexBuffers = Fd;
          const Od = Fd.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let Rd = 0;
          for (let Xd = 0; Xd < Od; Xd++)
            if (Xd < md.length) {
              const Od = Fd.getAttributeLocation(Xd);
              Od >= 0 && (this._gl.enableVertexAttribArray(Od), this._vertexAttribArraysEnabled[Od] = !0, this._vertexAttribPointer(dd, Od, md[Xd], this._gl.FLOAT, !1, Wd, Rd)), Rd += 4 * md[Xd]
            }
        }
        this._bindIndexBufferWithCache(Od)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(dd, Od, md, Wd) {
        this._cachedVertexBuffers === dd && this._cachedEffectForVertexBuffers === md || (this._cachedVertexBuffers = dd, this._cachedEffectForVertexBuffers = md, this._bindVertexBuffersAttributes(dd, md, Wd)), this._bindIndexBufferWithCache(Od)
      }
      unbindInstanceAttributes() {
        let dd;
        for (let Od = 0, md = this._currentInstanceLocations.length; Od < md; Od++) {
          const md = this._currentInstanceBuffers[Od];
          dd != md && md.references && (dd = md, this.bindArrayBuffer(md));
          const Wd = this._currentInstanceLocations[Od];
          this._gl.vertexAttribDivisor(Wd, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(dd) {
        this._gl.deleteVertexArray(dd)
      }
      _releaseBuffer(dd) {
        return dd.references--, 0 === dd.references && (this._deleteBuffer(dd), !0)
      }
      _deleteBuffer(dd) {
        this._gl.deleteBuffer(dd.underlyingResource)
      }
      updateAndBindInstancesBuffer(dd, Od, md) {
        if (this.bindArrayBuffer(dd), Od && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, Od), void 0 !== md[0].index) this.bindInstancesBuffer(dd, md, !0);
        else
          for (let Wd = 0; Wd < 4; Wd++) {
            const Od = md[Wd];
            this._vertexAttribArraysEnabled[Od] || (this._gl.enableVertexAttribArray(Od), this._vertexAttribArraysEnabled[Od] = !0), this._vertexAttribPointer(dd, Od, 4, this._gl.FLOAT, !1, 64, 16 * Wd), this._gl.vertexAttribDivisor(Od, 1), this._currentInstanceLocations.push(Od), this._currentInstanceBuffers.push(dd)
          }
      }
      bindInstancesBuffer(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(dd);
        let Wd = 0;
        if (md)
          for (let Fd = 0; Fd < Od.length; Fd++) {
            Wd += 4 * Od[Fd].attributeSize
          }
        for (let Fd = 0; Fd < Od.length; Fd++) {
          const md = Od[Fd];
          void 0 === md.index && (md.index = this._currentEffect.getAttributeLocationByName(md.attributeName)), md.index < 0 || (this._vertexAttribArraysEnabled[md.index] || (this._gl.enableVertexAttribArray(md.index), this._vertexAttribArraysEnabled[md.index] = !0), this._vertexAttribPointer(dd, md.index, md.attributeSize, md.attributeType || this._gl.FLOAT, md.normalized || !1, Wd, md.offset), this._gl.vertexAttribDivisor(md.index, void 0 === md.divisor ? 1 : md.divisor), this._currentInstanceLocations.push(md.index), this._currentInstanceBuffers.push(dd))
        }
      }
      disableInstanceAttributeByName(dd) {
        if (!this._currentEffect) return;
        const Od = this._currentEffect.getAttributeLocationByName(dd);
        this.disableInstanceAttribute(Od)
      }
      disableInstanceAttribute(dd) {
        let Od, md = !1;
        for (; - 1 !== (Od = this._currentInstanceLocations.indexOf(dd));) this._currentInstanceLocations.splice(Od, 1), this._currentInstanceBuffers.splice(Od, 1), md = !0;
        md && (this._gl.vertexAttribDivisor(dd, 0), this.disableAttributeByIndex(dd))
      }
      disableAttributeByIndex(dd) {
        this._gl.disableVertexAttribArray(dd), this._vertexAttribArraysEnabled[dd] = !1, this._currentBufferPointers[dd].active = !1
      }
      draw(dd, Od, md, Wd) {
        this.drawElementsType(dd ? 0 : 1, Od, md, Wd)
      }
      drawPointClouds(dd, Od, md) {
        this.drawArraysType(2, dd, Od, md)
      }
      drawUnIndexed(dd, Od, md, Wd) {
        this.drawArraysType(dd ? 0 : 1, Od, md, Wd)
      }
      drawElementsType(dd, Od, md, Wd) {
        this.applyStates(), this._reportDrawCall();
        const Fd = this._drawMode(dd),
          Rd = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          Xd = this._uintIndicesCurrentlySet ? 4 : 2;
        Wd ? this._gl.drawElementsInstanced(Fd, md, Rd, Od * Xd, Wd) : this._gl.drawElements(Fd, md, Rd, Od * Xd)
      }
      drawArraysType(dd, Od, md, Wd) {
        this.applyStates(), this._reportDrawCall();
        const Fd = this._drawMode(dd);
        Wd ? this._gl.drawArraysInstanced(Fd, Od, md, Wd) : this._gl.drawArrays(Fd, Od, md)
      }
      _drawMode(dd) {
        switch (dd) {
          case 0:
          default:
            return this._gl.TRIANGLES;
          case 2:
          case 3:
            return this._gl.POINTS;
          case 1:
          case 4:
            return this._gl.LINES;
          case 5:
            return this._gl.LINE_LOOP;
          case 6:
            return this._gl.LINE_STRIP;
          case 7:
            return this._gl.TRIANGLE_STRIP;
          case 8:
            return this._gl.TRIANGLE_FAN
        }
      }
      _releaseEffect(dd) {
        this._compiledEffects[dd._key] && delete this._compiledEffects[dd._key];
        const Od = dd.getPipelineContext();
        Od && this._deletePipelineContext(Od)
      }
      _deletePipelineContext(dd) {
        const Od = dd;
        Od && Od.program && (Od.program.__SPECTOR_rebuildProgram = null, (0, bd.l)(Od), this._gl && (this._currentProgram === Od.program && this._setProgram(null), this._gl.deleteProgram(Od.program)))
      }
      _getGlobalDefines(dd) {
        return (0, yd.h)(dd, this.isNDCHalfZRange, this.JFd, this.useExactSrgbConversions)
      }
      createEffect(dd, Od, md, Rd, Xd, Kd, hd, vd, Qd) {
        let td = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          od = arguments.length > 10 ? arguments[10] : void 0;
        const Nd = "string" === typeof dd ? dd : dd.vertexToken || dd.vertexSource || dd.vertexElement || dd.vertex,
          qd = "string" === typeof dd ? dd : dd.fragmentToken || dd.fragmentSource || dd.fragmentElement || dd.fragment,
          Hd = this._getGlobalDefines(),
          yd = void 0 !== Od.attributes;
        let bd = Xd ?? Od.defines ?? "";
        Hd && (bd += Hd);
        const Td = Nd + "+" + qd + "@" + bd;
        if (this._compiledEffects[Td]) {
          const dd = this._compiledEffects[Td];
          return hd && dd.isReady() && hd(dd), dd._refCount++, dd
        }
        this._gl && (0, Fd.A)(this._gl);
        const pd = new Wd.e(dd, Od, yd ? this : md, Rd, this, Xd, Kd, hd, vd, Qd, Td, Od.shaderLanguage ?? td, Od.extraInitializationsAsync ?? od);
        return this._compiledEffects[Td] = pd, pd
      }
      _getShaderSource(dd) {
        return this._gl.getShaderSource(dd)
      }
      createRawShaderProgram(dd, Od, md, Wd) {
        let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Xd = (0, Fd.A)(this._gl);
        return Xd._contextWasLost = this._contextWasLost, Xd.validateShaderPrograms = this.validateShaderPrograms, (0, Fd.s)(dd, Od, md, Wd || this._gl, Rd)
      }
      createShaderProgram(dd, Od, md, Wd, Rd) {
        let Xd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const Kd = (0, Fd.A)(this._gl);
        return Kd._contextWasLost = this._contextWasLost, Kd.validateShaderPrograms = this.validateShaderPrograms, (0, Fd.w)(dd, Od, md, Wd, Rd || this._gl, Xd)
      }
      inlineShaderCode(dd) {
        return dd
      }
      createPipelineContext(dd) {
        if (this._gl) {
          (0, Fd.A)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const Od = (0, Fd.q)(this._gl, dd);
        return Od.engine = this, Od
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(dd) {
        return (0, Fd.j)(dd, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(dd, Od, md, Wd, Rd, Xd, Kd, hd, vd, Qd, td) {
        const od = (0, Fd.A)(this._gl);
        return od._contextWasLost = this._contextWasLost, od.validateShaderPrograms = this.validateShaderPrograms, od._createShaderProgramInjection = this._createShaderProgram.bind(this), od.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), od.createShaderProgramInjection = this.createShaderProgram.bind(this), od.loadFileInjection = this._loadFile.bind(this), (0, Fd.m)(dd, Od, md, Wd, Rd, Xd, Kd, hd, vd, Qd, td)
      }
      _createShaderProgram(dd, Od, md, Wd) {
        let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, Fd.e)(dd, Od, md, Wd, Rd)
      }
      _isRenderingStateCompiled(dd) {
        return !this._isDisposed && (0, Fd.l)(dd, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(dd, Od) {
        (0, Fd.f)(dd, Od)
      }
      getUniforms(dd, Od) {
        const md = new Array,
          Wd = dd;
        for (let Fd = 0; Fd < Od.length; Fd++) md.push(this._gl.getUniformLocation(Wd.program, Od[Fd]));
        return md
      }
      getAttributes(dd, Od) {
        const md = [],
          Wd = dd;
        for (let Rd = 0; Rd < Od.length; Rd++) try {
          md.push(this._gl.getAttribLocation(Wd.program, Od[Rd]))
        } catch (Fd) {
          md.push(-1)
        }
        return md
      }
      enableEffect(dd) {
        (dd = null !== dd && (0, Xd.c)(dd) ? dd.effect : dd) && dd !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(dd), this._currentEffect = dd, dd.onBind && dd.onBind(dd), dd._onBindObservable && dd._onBindObservable.notifyObservers(dd))
      }
      setInt(dd, Od) {
        return !!dd && (this._gl.uniform1i(dd, Od), !0)
      }
      setInt2(dd, Od, md) {
        return !!dd && (this._gl.uniform2i(dd, Od, md), !0)
      }
      setInt3(dd, Od, md, Wd) {
        return !!dd && (this._gl.uniform3i(dd, Od, md, Wd), !0)
      }
      setInt4(dd, Od, md, Wd, Fd) {
        return !!dd && (this._gl.uniform4i(dd, Od, md, Wd, Fd), !0)
      }
      setIntArray(dd, Od) {
        return !!dd && (this._gl.uniform1iv(dd, Od), !0)
      }
      setIntArray2(dd, Od) {
        return !(!dd || Od.length % 2 !== 0) && (this._gl.uniform2iv(dd, Od), !0)
      }
      setIntArray3(dd, Od) {
        return !(!dd || Od.length % 3 !== 0) && (this._gl.uniform3iv(dd, Od), !0)
      }
      setIntArray4(dd, Od) {
        return !(!dd || Od.length % 4 !== 0) && (this._gl.uniform4iv(dd, Od), !0)
      }
      setUInt(dd, Od) {
        return !!dd && (this._gl.uniform1ui(dd, Od), !0)
      }
      setUInt2(dd, Od, md) {
        return !!dd && (this._gl.uniform2ui(dd, Od, md), !0)
      }
      setUInt3(dd, Od, md, Wd) {
        return !!dd && (this._gl.uniform3ui(dd, Od, md, Wd), !0)
      }
      setUInt4(dd, Od, md, Wd, Fd) {
        return !!dd && (this._gl.uniform4ui(dd, Od, md, Wd, Fd), !0)
      }
      setUIntArray(dd, Od) {
        return !!dd && (this._gl.uniform1uiv(dd, Od), !0)
      }
      setUIntArray2(dd, Od) {
        return !(!dd || Od.length % 2 !== 0) && (this._gl.uniform2uiv(dd, Od), !0)
      }
      setUIntArray3(dd, Od) {
        return !(!dd || Od.length % 3 !== 0) && (this._gl.uniform3uiv(dd, Od), !0)
      }
      setUIntArray4(dd, Od) {
        return !(!dd || Od.length % 4 !== 0) && (this._gl.uniform4uiv(dd, Od), !0)
      }
      setArray(dd, Od) {
        return !!dd && (!(Od.length < 1) && (this._gl.uniform1fv(dd, Od), !0))
      }
      setArray2(dd, Od) {
        return !(!dd || Od.length % 2 !== 0) && (this._gl.uniform2fv(dd, Od), !0)
      }
      setArray3(dd, Od) {
        return !(!dd || Od.length % 3 !== 0) && (this._gl.uniform3fv(dd, Od), !0)
      }
      setArray4(dd, Od) {
        return !(!dd || Od.length % 4 !== 0) && (this._gl.uniform4fv(dd, Od), !0)
      }
      setMatrices(dd, Od) {
        return !!dd && (this._gl.uniformMatrix4fv(dd, !1, Od), !0)
      }
      setMatrix3x3(dd, Od) {
        return !!dd && (this._gl.uniformMatrix3fv(dd, !1, Od), !0)
      }
      setMatrix2x2(dd, Od) {
        return !!dd && (this._gl.uniformMatrix2fv(dd, !1, Od), !0)
      }
      setFloat(dd, Od) {
        return !!dd && (this._gl.uniform1f(dd, Od), !0)
      }
      setFloat2(dd, Od, md) {
        return !!dd && (this._gl.uniform2f(dd, Od, md), !0)
      }
      setFloat3(dd, Od, md, Wd) {
        return !!dd && (this._gl.uniform3f(dd, Od, md, Wd), !0)
      }
      setFloat4(dd, Od, md, Wd, Fd) {
        return !!dd && (this._gl.uniform4f(dd, Od, md, Wd, Fd), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const dd = this._colorWrite;
          this._gl.colorMask(dd, dd, dd, dd)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(dd) {
        this.preventCacheWipeBetweenFrames && !dd || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), dd && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(dd, Od) {
        const md = this._gl;
        let Wd = md.NEAREST,
          Fd = md.NEAREST,
          Rd = !1;
        switch (dd) {
          case 11:
            Wd = md.LINEAR, Fd = Od ? md.LINEAR_MIPMAP_NEAREST : md.LINEAR;
            break;
          case 3:
            Wd = md.LINEAR, Rd = !0, Fd = Od ? md.LINEAR_MIPMAP_LINEAR : md.LINEAR;
            break;
          case 8:
            Rd = !0, Wd = md.NEAREST, Fd = Od ? md.NEAREST_MIPMAP_LINEAR : md.NEAREST;
            break;
          case 4:
            Wd = md.NEAREST, Fd = Od ? md.NEAREST_MIPMAP_NEAREST : md.NEAREST;
            break;
          case 5:
            Wd = md.NEAREST, Fd = Od ? md.LINEAR_MIPMAP_NEAREST : md.LINEAR;
            break;
          case 6:
            Rd = !0, Wd = md.NEAREST, Fd = Od ? md.LINEAR_MIPMAP_LINEAR : md.LINEAR;
            break;
          case 7:
            Wd = md.NEAREST, Fd = md.LINEAR;
            break;
          case 1:
            Wd = md.NEAREST, Fd = md.NEAREST;
            break;
          case 9:
            Wd = md.LINEAR, Fd = Od ? md.NEAREST_MIPMAP_NEAREST : md.NEAREST;
            break;
          case 10:
            Rd = !0, Wd = md.LINEAR, Fd = Od ? md.NEAREST_MIPMAP_LINEAR : md.NEAREST;
            break;
          case 2:
            Wd = md.LINEAR, Fd = md.LINEAR;
            break;
          case 12:
            Wd = md.LINEAR, Fd = md.NEAREST
        }
        return {
          min: Fd,
          mag: Wd,
          hasMipMaps: Rd
        }
      }
      _createTexture() {
        const dd = this._gl.createTexture();
        if (!dd) throw new Error("Unable to create texture");
        return dd
      }
      _createHardwareTexture() {
        return new qd.d(this._createTexture(), this._gl)
      }
      _createInternalTexture(dd, Od) {
        let md, Wd, Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Rd = !1,
          Xd = 0,
          hd = 3,
          vd = 5,
          Qd = !1,
          td = 1,
          od = !1,
          Nd = 0,
          qd = !1;
        void 0 !== Od && "object" === typeof Od ? (md = !!Od.generateMipMaps, Rd = !!Od.createMipMaps, Xd = void 0 === Od.type ? 0 : Od.type, hd = void 0 === Od.samplingMode ? 3 : Od.samplingMode, vd = void 0 === Od.format ? 5 : Od.format, Qd = void 0 !== Od.useSRGBBuffer && Od.useSRGBBuffer, td = Od.samples ?? 1, Wd = Od.label, od = !!Od.createMSAATexture, Nd = Od.comparisonFunction || 0, qd = !!Od.isCube) : md = !!Od, Qd && (Qd = this._caps.supportSRGBBuffers && (this.YH > 1 || this.isWebGPU)), (1 !== Xd || this._caps.textureFloatLinearFiltering) && (2 !== Xd || this._caps.textureHalfFloatLinearFiltering) || (hd = 1), 1 !== Xd || this._caps.textureFloat || (Xd = 0, Kd.c.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const yd = (0, Td.g)(vd),
          bd = (0, Td.d)(vd),
          pd = this._gl,
          Yd = new Hd.c(this, Fd),
          gd = dd.width || dd,
          wd = dd.height || dd,
          Ed = dd.depth || 0,
          Jd = dd.layers || 0,
          Ud = this._getSamplingParameters(hd, (md || Rd) && !yd),
          xd = 0 !== Jd ? pd.TEXTURE_2D_ARRAY : 0 !== Ed ? pd.TEXTURE_3D : qd ? pd.TEXTURE_CUBE_MAP : pd.TEXTURE_2D,
          Bd = yd ? this._getInternalFormatFromDepthTextureFormat(vd, !0, bd) : this._getRGBABufferInternalSizedFormat(Xd, vd, Qd),
          Sd = yd ? bd ? pd.DEPTH_STENCIL : pd.DEPTH_COMPONENT : this._getInternalFormat(vd),
          sd = yd ? this._getWebGLTextureTypeFromDepthTextureFormat(vd) : this._getWebGLTextureType(Xd);
        if (this._bindTextureDirectly(xd, Yd), 0 !== Jd) Yd.is2DArray = !0, pd.texImage3D(xd, 0, Bd, gd, wd, Jd, 0, Sd, sd, null);
        else if (0 !== Ed) Yd.is3D = !0, pd.texImage3D(xd, 0, Bd, gd, wd, Ed, 0, Sd, sd, null);
        else if (qd) {
          Yd.isCube = !0;
          for (let dd = 0; dd < 6; dd++) pd.texImage2D(pd.TEXTURE_CUBE_MAP_POSITIVE_X + dd, 0, Bd, gd, wd, 0, Sd, sd, null)
        } else pd.texImage2D(xd, 0, Bd, gd, wd, 0, Sd, sd, null);
        if (pd.texParameteri(xd, pd.TEXTURE_MAG_FILTER, Ud.mag), pd.texParameteri(xd, pd.TEXTURE_MIN_FILTER, Ud.min), pd.texParameteri(xd, pd.TEXTURE_WRAP_S, pd.CLAMP_TO_EDGE), pd.texParameteri(xd, pd.TEXTURE_WRAP_T, pd.CLAMP_TO_EDGE), yd && this.YH > 1 && (0 === Nd ? (pd.texParameteri(xd, pd.TEXTURE_COMPARE_FUNC, 515), pd.texParameteri(xd, pd.TEXTURE_COMPARE_MODE, pd.NONE)) : (pd.texParameteri(xd, pd.TEXTURE_COMPARE_FUNC, Nd), pd.texParameteri(xd, pd.TEXTURE_COMPARE_MODE, pd.COMPARE_REF_TO_TEXTURE))), (md || Rd) && this._gl.generateMipmap(xd), this._bindTextureDirectly(xd, null), Yd._useSRGBBuffer = Qd, Yd.baseWidth = gd, Yd.baseHeight = wd, Yd.width = gd, Yd.height = wd, Yd.depth = Jd || Ed, Yd.isReady = !0, Yd.samples = td, Yd.generateMipMaps = md, Yd.samplingMode = hd, Yd.type = Xd, Yd.format = vd, Yd.label = Wd, Yd.comparisonFunction = Nd, this._internalTexturesCache.push(Yd), od) {
          let dd;
          if (dd = (0, Td.g)(Yd.format) ? this._setupFramebufferDepthAttachments((0, Td.d)(Yd.format), 19 !== Yd.format, Yd.width, Yd.height, td, Yd.format, !0) : this._createRenderBuffer(Yd.width, Yd.height, td, -1, this._getRGBABufferInternalSizedFormat(Yd.type, Yd.format, Yd._useSRGBBuffer), -1), !dd) throw new Error("Unable to create render buffer");
          Yd._autoMSAAManagement = !0;
          let Od = Yd._hardwareTexture;
          Od || (Od = Yd._hardwareTexture = this._createHardwareTexture()), Od.addMSAARenderBuffer(dd)
        }
        return Yd
      }
      _getUseSRGBBuffer(dd, Od) {
        return dd && this._caps.supportSRGBBuffers && (this.YH > 1 || Od)
      }
      createTexture(dd, Od, md, Wd) {
        var Fd = this;
        let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Xd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Kd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          hd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          vd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Qd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          td = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          od = arguments.length > 11 ? arguments[11] : void 0,
          Nd = arguments.length > 12 ? arguments[12] : void 0,
          qd = arguments.length > 13 ? arguments[13] : void 0,
          yd = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(dd, Od, md, Wd, Rd, Xd, Kd, (function() {
          for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
          return Fd._prepareWebGLTexture(...Od, Qd)
        }), ((dd, Od, md, Fd, Rd, Xd) => {
          const Kd = this._gl,
            hd = md.width === dd && md.height === Od;
          Rd._creationFlags = qd ?? 0;
          const vd = this._getTexImageParametersForCreateTexture(Rd.format, Rd._useSRGBBuffer);
          if (hd) return Kd.texImage2D(Kd.TEXTURE_2D, 0, vd.internalFormat, vd.format, vd.type, md), !1;
          const Qd = this._caps.maxTextureSize;
          if (md.width > Qd || md.height > Qd || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = dd, this._workingCanvas.height = Od, this._workingContext.drawImage(md, 0, 0, md.width, md.height, 0, 0, dd, Od), Kd.texImage2D(Kd.TEXTURE_2D, 0, vd.internalFormat, vd.format, vd.type, this._workingCanvas), Rd.width = dd, Rd.height = Od, !1);
          {
            const dd = new Hd.c(this, 2);
            this._bindTextureDirectly(Kd.TEXTURE_2D, dd, !0), Kd.texImage2D(Kd.TEXTURE_2D, 0, vd.internalFormat, vd.format, vd.type, md), this._rescaleTexture(dd, Rd, Wd, vd.format, (() => {
              this._releaseTexture(dd), this._bindTextureDirectly(Kd.TEXTURE_2D, Rd, !0), Xd()
            }))
          }
          return !0
        }), hd, vd, Qd, td, od, Nd, yd)
      }
      _getTexImageParametersForCreateTexture(dd, Od) {
        let md, Wd;
        return 1 === this.YH ? (md = this._getInternalFormat(dd, Od), Wd = md) : (md = this._getInternalFormat(dd, !1), Wd = this._getRGBABufferInternalSizedFormat(0, dd, Od)), {
          internalFormat: Wd,
          format: md,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(dd, Od, md, Wd, Fd) {}
      _unpackFlipY(dd) {
        this._unpackFlipYCached !== dd && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, dd ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = dd))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(dd) {
        return dd.isCube ? this._gl.TEXTURE_CUBE_MAP : dd.is3D ? this._gl.TEXTURE_3D : dd.is2DArray || dd.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Wd = this._getTextureTarget(Od),
          Fd = this._getSamplingParameters(dd, Od.useMipMaps || md);
        this._setTextureParameterInteger(Wd, this._gl.TEXTURE_MAG_FILTER, Fd.mag, Od), this._setTextureParameterInteger(Wd, this._gl.TEXTURE_MIN_FILTER, Fd.min), md && Fd.hasMipMaps && (Od.generateMipMaps = !0, this._gl.generateMipmap(Wd)), this._bindTextureDirectly(Wd, null), Od.samplingMode = dd
      }
      updateTextureDimensions(dd, Od, md) {}
      updateTextureWrappingMode(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Fd = this._getTextureTarget(dd);
        null !== Od && (this._setTextureParameterInteger(Fd, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Od), dd), dd._cachedWrapU = Od), null !== md && (this._setTextureParameterInteger(Fd, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(md), dd), dd._cachedWrapV = md), (dd.is2DArray || dd.is3D) && null !== Wd && (this._setTextureParameterInteger(Fd, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Wd), dd), dd._cachedWrapR = Wd), this._bindTextureDirectly(Fd, null)
      }
      _uploadCompressedDataToTextureDirectly(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Kd = this._gl;
        let hd = Kd.TEXTURE_2D;
        if (dd.isCube && (hd = Kd.TEXTURE_CUBE_MAP_POSITIVE_X + Rd), dd._useSRGBBuffer) switch (Od) {
          case 37492:
          case 36196:
            this._caps.etc2 ? Od = Kd.COMPRESSED_SRGB8_ETC2 : dd._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? Od = Kd.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : dd._useSRGBBuffer = !1;
            break;
          case 36492:
            Od = Kd.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            Od = Kd.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            Od = Kd.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            Od = Kd.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            Od = Kd.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            Od = Kd.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            Od = Kd.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            Od = Kd.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            Od = Kd.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            Od = Kd.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            Od = Kd.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            Od = Kd.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            Od = Kd.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            Od = Kd.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            Od = Kd.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? Od = Kd.COMPRESSED_SRGB_S3TC_DXT1_EXT : dd._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? Od = Kd.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : dd._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? Od = Kd.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : dd._useSRGBBuffer = !1;
            break;
          default:
            dd._useSRGBBuffer = !1
        }
        if (dd.generateMipMaps) {
          const Rd = dd._hardwareTexture;
          Rd.memoryAllocated || (Kd.texStorage2D(dd.isCube ? Kd.TEXTURE_CUBE_MAP : Kd.TEXTURE_2D, Math.floor(Math.log2(Math.max(md, Wd))) + 1, Od, dd.width, dd.height), Rd.memoryAllocated = !0), this._gl.compressedTexSubImage2D(hd, Xd, 0, 0, md, Wd, Od, Fd)
        } else this._gl.compressedTexImage2D(hd, Xd, Od, md, Wd, 0, Fd)
      }
      _uploadDataToTextureDirectly(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Fd = arguments.length > 4 ? arguments[4] : void 0,
          Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Xd = this._gl,
          Kd = this._getWebGLTextureType(dd.type),
          hd = this._getInternalFormat(dd.format),
          vd = void 0 === Fd ? this._getRGBABufferInternalSizedFormat(dd.type, dd.format, dd._useSRGBBuffer) : this._getInternalFormat(Fd, dd._useSRGBBuffer);
        this._unpackFlipY(dd.invertY);
        let Qd = Xd.TEXTURE_2D;
        dd.isCube && (Qd = Xd.TEXTURE_CUBE_MAP_POSITIVE_X + md);
        const td = Math.round(Math.log(dd.width) * Math.LOG2E),
          od = Math.round(Math.log(dd.height) * Math.LOG2E),
          Nd = Rd ? dd.width : Math.pow(2, Math.max(td - Wd, 0)),
          qd = Rd ? dd.height : Math.pow(2, Math.max(od - Wd, 0));
        Xd.texImage2D(Qd, Wd, vd, Nd, qd, 0, hd, Kd, Od)
      }
      updateTextureData(dd, Od, md, Wd, Fd, Rd) {
        let Xd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          hd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const vd = this._gl,
          Qd = this._getWebGLTextureType(dd.type),
          td = this._getInternalFormat(dd.format);
        this._unpackFlipY(dd.invertY);
        let od = vd.TEXTURE_2D,
          Nd = vd.TEXTURE_2D;
        dd.isCube && (Nd = vd.TEXTURE_CUBE_MAP_POSITIVE_X + Xd, od = vd.TEXTURE_CUBE_MAP), this._bindTextureDirectly(od, dd, !0), vd.texSubImage2D(Nd, Kd, md, Wd, Fd, Rd, td, Qd, Od), hd && this._gl.generateMipmap(Nd), this._bindTextureDirectly(od, null)
      }
      _uploadArrayBufferViewToTexture(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Fd = this._gl,
          Rd = dd.isCube ? Fd.TEXTURE_CUBE_MAP : Fd.TEXTURE_2D;
        this._bindTextureDirectly(Rd, dd, !0), this._uploadDataToTextureDirectly(dd, Od, md, Wd), this._bindTextureDirectly(Rd, null, !0)
      }
      _prepareWebGLTextureContinuation(dd, Od, md, Wd, Fd) {
        const Rd = this._gl;
        if (!Rd) return;
        const Xd = this._getSamplingParameters(Fd, !md);
        Rd.texParameteri(Rd.TEXTURE_2D, Rd.TEXTURE_MAG_FILTER, Xd.mag), Rd.texParameteri(Rd.TEXTURE_2D, Rd.TEXTURE_MIN_FILTER, Xd.min), md || Wd || Rd.generateMipmap(Rd.TEXTURE_2D), this._bindTextureDirectly(Rd.TEXTURE_2D, null), Od && Od.removePendingData(dd), dd.onLoadedObservable.notifyObservers(dd), dd.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd) {
        const Qd = this.getCaps().maxTextureSize,
          td = Math.min(Qd, this.needPOTTextures ? (0, Nd.f)(Wd.width, Qd) : Wd.width),
          od = Math.min(Qd, this.needPOTTextures ? (0, Nd.f)(Wd.height, Qd) : Wd.height),
          qd = this._gl;
        qd && (dd._hardwareTexture ? (this._bindTextureDirectly(qd.TEXTURE_2D, dd, !0), this._unpackFlipY(void 0 === Fd || !!Fd), dd.baseWidth = Wd.width, dd.baseHeight = Wd.height, dd.width = td, dd.height = od, dd.isReady = !0, dd.type = -1 !== dd.type ? dd.type : 0, dd.format = -1 !== dd.format ? dd.format : vd ?? (".jpg" !== Od || dd._useSRGBBuffer ? 5 : 4), Kd(td, od, Wd, Od, dd, (() => {
          this._prepareWebGLTextureContinuation(dd, md, Rd, Xd, hd)
        })) || this._prepareWebGLTextureContinuation(dd, md, Rd, Xd, hd)) : md && md.removePendingData(dd))
      }
      _getInternalFormatFromDepthTextureFormat(dd, Od, md) {
        const Wd = this._gl;
        if (!Od) return Wd.STENCIL_INDEX8;
        let Fd = md ? Wd.DEPTH_STENCIL : Wd.DEPTH_COMPONENT;
        return this.YH > 1 ? 15 === dd ? Fd = Wd.DEPTH_COMPONENT16 : 16 === dd ? Fd = Wd.DEPTH_COMPONENT24 : 17 === dd || 13 === dd ? Fd = md ? Wd.DEPTH24_STENCIL8 : Wd.DEPTH_COMPONENT24 : 14 === dd ? Fd = Wd.DEPTH_COMPONENT32F : 18 === dd && (Fd = md ? Wd.DEPTH32F_STENCIL8 : Wd.DEPTH_COMPONENT32F) : Fd = Wd.DEPTH_COMPONENT16, Fd
      }
      _getWebGLTextureTypeFromDepthTextureFormat(dd) {
        const Od = this._gl;
        let md = Od.UNSIGNED_INT;
        return 15 === dd ? md = Od.UNSIGNED_SHORT : 17 === dd || 13 === dd ? md = Od.UNSIGNED_INT_24_8 : 14 === dd ? md = Od.FLOAT : 18 === dd ? md = Od.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === dd && (md = Od.UNSIGNED_BYTE), md
      }
      _setupFramebufferDepthAttachments(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Rd = arguments.length > 5 ? arguments[5] : void 0,
          Xd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Kd = this._gl;
        Rd = Rd ?? (dd ? 13 : 14);
        const hd = this._getInternalFormatFromDepthTextureFormat(Rd, Od, dd);
        return dd && Od ? this._createRenderBuffer(md, Wd, Fd, Kd.DEPTH_STENCIL, hd, Xd ? -1 : Kd.DEPTH_STENCIL_ATTACHMENT) : Od ? this._createRenderBuffer(md, Wd, Fd, hd, hd, Xd ? -1 : Kd.DEPTH_ATTACHMENT) : dd ? this._createRenderBuffer(md, Wd, Fd, hd, hd, Xd ? -1 : Kd.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(dd, Od, md, Wd, Fd, Rd) {
        let Xd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const Kd = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(Kd, dd, Od, md, Wd, Fd, Rd, Xd)
      }
      _updateRenderBuffer(dd, Od, md, Wd, Fd, Rd, Xd) {
        let Kd = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const hd = this._gl;
        return hd.bindRenderbuffer(hd.RENDERBUFFER, dd), Wd > 1 && hd.renderbufferStorageMultisample ? hd.renderbufferStorageMultisample(hd.RENDERBUFFER, Wd, Rd, Od, md) : hd.renderbufferStorage(hd.RENDERBUFFER, Fd, Od, md), -1 !== Xd && hd.framebufferRenderbuffer(hd.FRAMEBUFFER, Xd, hd.RENDERBUFFER, dd), Kd && hd.bindRenderbuffer(hd.RENDERBUFFER, null), dd
      }
      _releaseTexture(dd) {
        this._deleteTexture(dd._hardwareTexture), this.unbindAllTextures();
        const Od = this._internalTexturesCache.indexOf(dd); - 1 !== Od && this._internalTexturesCache.splice(Od, 1), dd._lodTextureHigh && dd._lodTextureHigh.dispose(), dd._lodTextureMid && dd._lodTextureMid.dispose(), dd._lodTextureLow && dd._lodTextureLow.dispose(), dd._irradianceTexture && dd._irradianceTexture.dispose()
      }
      _deleteTexture(dd) {
        dd?.release()
      }
      _setProgram(dd) {
        this._currentProgram !== dd && ((0, Fd.p)(dd, this._gl), this._currentProgram = dd)
      }
      bindSamplers(dd) {
        const Od = dd.getPipelineContext();
        this._setProgram(Od.program);
        const md = dd.getSamplers();
        for (let Wd = 0; Wd < md.length; Wd++) {
          const Od = dd.getUniform(md[Wd]);
          Od && (this._boundUniforms[Wd] = Od)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Fd = !1;
        const Rd = Od && Od._associatedChannel > -1;
        md && Rd && (this._activeChannel = Od._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== Od || Wd) {
          if (this._activateCurrentTexture(), Od && Od.isMultiview) throw Kd.c.Error(["_bindTextureDirectly called with a multiview texture!", dd, Od]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(dd, Od?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = Od, Od && (Od._associatedChannel = this._activeChannel)
        } else md && (Fd = !0, this._activateCurrentTexture());
        return Rd && !md && this._bindSamplerUniformToChannel(Od._associatedChannel, this._activeChannel), Fd
      }
      _bindTexture(dd, Od, md) {
        if (void 0 === dd) return;
        Od && (Od._associatedChannel = dd), this._activeChannel = dd;
        const Wd = Od ? this._getTextureTarget(Od) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(Wd, Od)
      }
      unbindAllTextures() {
        for (let dd = 0; dd < this._maxSimultaneousTextures; dd++) this._activeChannel = dd, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.YH > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(dd, Od, md, Wd) {
        void 0 !== dd && (Od && (this._boundUniforms[dd] = Od), this._setTexture(dd, md))
      }
      _bindSamplerUniformToChannel(dd, Od) {
        const md = this._boundUniforms[dd];
        md && md._currentState !== Od && (this._gl.uniform1i(md, Od), md._currentState = Od)
      }
      _getTextureWrapMode(dd) {
        switch (dd) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(dd, Od) {
        let md, Wd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!Od) return null != this._boundTexturesCache[dd] && (this._activeChannel = dd, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.YH > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (Od.video) {
          this._activeChannel = dd;
          const md = Od.getInternalTexture();
          md && (md._associatedChannel = dd), Od.update()
        } else if (4 === Od.delayLoadState) return Od.delayLoad(), !1;
        md = Fd ? Od.depthStencilTexture : Od.isReady() ? Od.getInternalTexture() : Od.isCube ? this.emptyCubeTexture : Od.is3D ? this.emptyTexture3D : Od.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !Wd && md && (md._associatedChannel = dd);
        let Rd = !0;
        this._boundTexturesCache[dd] === md && (Wd || this._bindSamplerUniformToChannel(md._associatedChannel, dd), Rd = !1), this._activeChannel = dd;
        const Xd = this._getTextureTarget(md);
        if (Rd && this._bindTextureDirectly(Xd, md, Wd), md && !md.isMultiview) {
          if (md.isCube && md._cachedCoordinatesMode !== Od.coordinatesMode) {
            md._cachedCoordinatesMode = Od.coordinatesMode;
            const dd = 3 !== Od.coordinatesMode && 5 !== Od.coordinatesMode ? 1 : 0;
            Od.wrapU = dd, Od.wrapV = dd
          }
          md._cachedWrapU !== Od.wrapU && (md._cachedWrapU = Od.wrapU, this._setTextureParameterInteger(Xd, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Od.wrapU), md)), md._cachedWrapV !== Od.wrapV && (md._cachedWrapV = Od.wrapV, this._setTextureParameterInteger(Xd, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Od.wrapV), md)), md.is3D && md._cachedWrapR !== Od.wrapR && (md._cachedWrapR = Od.wrapR, this._setTextureParameterInteger(Xd, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Od.wrapR), md)), this._setAnisotropicLevel(Xd, md, Od.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(dd, Od, md, Wd) {
        if (void 0 !== dd && Od) {
          this._textureUnits && this._textureUnits.length === md.length || (this._textureUnits = new Int32Array(md.length));
          for (let Od = 0; Od < md.length; Od++) {
            const Wd = md[Od].getInternalTexture();
            Wd ? (this._textureUnits[Od] = dd + Od, Wd._associatedChannel = dd + Od) : this._textureUnits[Od] = -1
          }
          this._gl.uniform1iv(Od, this._textureUnits);
          for (let dd = 0; dd < md.length; dd++) this._setTexture(this._textureUnits[dd], md[dd], !0)
        }
      }
      _setAnisotropicLevel(dd, Od, md) {
        const Wd = this._caps.textureAnisotropicFilterExtension;
        11 !== Od.samplingMode && 3 !== Od.samplingMode && 2 !== Od.samplingMode && (md = 1), Wd && Od._cachedAnisotropicFilteringLevel !== md && (this._setTextureParameterFloat(dd, Wd.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(md, this._caps.maxAnisotropy), Od), Od._cachedAnisotropicFilteringLevel = md)
      }
      _setTextureParameterFloat(dd, Od, md, Wd) {
        this._bindTextureDirectly(dd, Wd, !0, !0), this._gl.texParameterf(dd, Od, md)
      }
      _setTextureParameterInteger(dd, Od, md, Wd) {
        Wd && this._bindTextureDirectly(dd, Wd, !0, !0), this._gl.texParameteri(dd, Od, md)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let dd = 0; dd < this._caps.maxVertexAttribs; dd++) this.disableAttributeByIndex(dd)
        } else
          for (let dd = 0, Od = this._vertexAttribArraysEnabled.length; dd < Od; dd++) dd >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[dd] || this.disableAttributeByIndex(dd)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, hd.h)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, Fd.z)(this._gl)
      }
      attachContextLostEvent(dd) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", dd, !1)
      }
      attachContextRestoredEvent(dd) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", dd, !1)
      }
      getError() {
        return this._gl.getError()
      }
      _canRenderToFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(1)
      }
      _canRenderToHalfFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(2)
      }
      _canRenderToFramebuffer(dd) {
        const Od = this._gl;
        for (; Od.getError() !== Od.NO_ERROR;);
        let md = !0;
        const Wd = Od.createTexture();
        Od.bindTexture(Od.TEXTURE_2D, Wd), Od.texImage2D(Od.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(dd), 1, 1, 0, Od.RGBA, this._getWebGLTextureType(dd), null), Od.texParameteri(Od.TEXTURE_2D, Od.TEXTURE_MIN_FILTER, Od.NEAREST), Od.texParameteri(Od.TEXTURE_2D, Od.TEXTURE_MAG_FILTER, Od.NEAREST);
        const Fd = Od.createFramebuffer();
        Od.bindFramebuffer(Od.FRAMEBUFFER, Fd), Od.framebufferTexture2D(Od.FRAMEBUFFER, Od.COLOR_ATTACHMENT0, Od.TEXTURE_2D, Wd, 0);
        const Rd = Od.checkFramebufferStatus(Od.FRAMEBUFFER);
        if (md = md && Rd === Od.FRAMEBUFFER_COMPLETE, md = md && Od.getError() === Od.NO_ERROR, md && (Od.clear(Od.COLOR_BUFFER_BIT), md = md && Od.getError() === Od.NO_ERROR), md) {
          Od.bindFramebuffer(Od.FRAMEBUFFER, null);
          const dd = Od.RGBA,
            Wd = Od.UNSIGNED_BYTE,
            Fd = new Uint8Array(4);
          Od.readPixels(0, 0, 1, 1, dd, Wd, Fd), md = md && Od.getError() === Od.NO_ERROR
        }
        for (Od.deleteTexture(Wd), Od.deleteFramebuffer(Fd), Od.bindFramebuffer(Od.FRAMEBUFFER, null); !md && Od.getError() !== Od.NO_ERROR;);
        return md
      }
      _getWebGLTextureType(dd) {
        if (1 === this._webGLVersion) {
          switch (dd) {
            case 1:
              return this._gl.FLOAT;
            case 2:
              return this._gl.HALF_FLOAT_OES;
            case 0:
              return this._gl.UNSIGNED_BYTE;
            case 8:
              return this._gl.UNSIGNED_SHORT_4_4_4_4;
            case 9:
              return this._gl.UNSIGNED_SHORT_5_5_5_1;
            case 10:
              return this._gl.UNSIGNED_SHORT_5_6_5
          }
          return this._gl.UNSIGNED_BYTE
        }
        switch (dd) {
          case 3:
            return this._gl.BYTE;
          case 0:
            return this._gl.UNSIGNED_BYTE;
          case 4:
            return this._gl.SHORT;
          case 5:
            return this._gl.UNSIGNED_SHORT;
          case 6:
            return this._gl.INT;
          case 7:
            return this._gl.UNSIGNED_INT;
          case 1:
            return this._gl.FLOAT;
          case 2:
            return this._gl.HALF_FLOAT;
          case 8:
            return this._gl.UNSIGNED_SHORT_4_4_4_4;
          case 9:
            return this._gl.UNSIGNED_SHORT_5_5_5_1;
          case 10:
            return this._gl.UNSIGNED_SHORT_5_6_5;
          case 11:
            return this._gl.UNSIGNED_INT_2_10_10_10_REV;
          case 12:
            return this._gl.UNSIGNED_INT_24_8;
          case 13:
            return this._gl.UNSIGNED_INT_10F_11F_11F_REV;
          case 14:
            return this._gl.UNSIGNED_INT_5_9_9_9_REV;
          case 15:
            return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV
        }
        return this._gl.UNSIGNED_BYTE
      }
      _getInternalFormat(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = Od ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (dd) {
          case 0:
            md = this._gl.ALPHA;
            break;
          case 1:
            md = this._gl.LUMINANCE;
            break;
          case 2:
            md = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            md = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            md = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            md = Od ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            md = Od ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (dd) {
          case 8:
            md = this._gl.RED_INTEGER;
            break;
          case 9:
            md = this._gl.RG_INTEGER;
            break;
          case 10:
            md = this._gl.RGB_INTEGER;
            break;
          case 11:
            md = this._gl.RGBA_INTEGER
        }
        return md
      }
      _getRGBABufferInternalSizedFormat(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== Od) switch (Od) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return md ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (dd) {
          case 3:
            switch (Od) {
              case 6:
                return this._gl.R8_SNORM;
              case 7:
                return this._gl.RG8_SNORM;
              case 4:
                return this._gl.RGB8_SNORM;
              case 8:
                return this._gl.R8I;
              case 9:
                return this._gl.RG8I;
              case 10:
                return this._gl.RGB8I;
              case 11:
                return this._gl.RGBA8I;
              default:
                return this._gl.RGBA8_SNORM
            }
          case 0:
            switch (Od) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return md ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return md ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
              case 8:
                return this._gl.R8UI;
              case 9:
                return this._gl.RG8UI;
              case 10:
                return this._gl.RGB8UI;
              case 11:
                return this._gl.RGBA8UI;
              case 0:
                return this._gl.ALPHA;
              case 1:
                return this._gl.LUMINANCE;
              case 2:
                return this._gl.LUMINANCE_ALPHA;
              default:
                return this._gl.RGBA8
            }
          case 4:
            switch (Od) {
              case 8:
                return this._gl.R16I;
              case 36760:
                return this._gl.R16_SNORM_EXT;
              case 36761:
                return this._gl.RG16_SNORM_EXT;
              case 36762:
                return this._gl.RGB16_SNORM_EXT;
              case 36763:
                return this._gl.RGBA16_SNORM_EXT;
              case 9:
                return this._gl.RG16I;
              case 10:
                return this._gl.RGB16I;
              default:
                return this._gl.RGBA16I
            }
          case 5:
            switch (Od) {
              case 8:
                return this._gl.R16UI;
              case 33322:
                return this._gl.R16_EXT;
              case 33324:
                return this._gl.RG16_EXT;
              case 32852:
                return this._gl.RGB16_EXT;
              case 32859:
                return this._gl.RGBA16_EXT;
              case 9:
                return this._gl.RG16UI;
              case 10:
                return this._gl.RGB16UI;
              default:
                return this._gl.RGBA16UI
            }
          case 6:
            switch (Od) {
              case 8:
                return this._gl.R32I;
              case 9:
                return this._gl.RG32I;
              case 10:
                return this._gl.RGB32I;
              default:
                return this._gl.RGBA32I
            }
          case 7:
            switch (Od) {
              case 8:
                return this._gl.R32UI;
              case 9:
                return this._gl.RG32UI;
              case 10:
                return this._gl.RGB32UI;
              default:
                return this._gl.RGBA32UI
            }
          case 1:
            switch (Od) {
              case 6:
                return this._gl.R32F;
              case 7:
                return this._gl.RG32F;
              case 4:
                return this._gl.RGB32F;
              default:
                return this._gl.RGBA32F
            }
          case 2:
            switch (Od) {
              case 6:
                return this._gl.R16F;
              case 7:
                return this._gl.RG16F;
              case 4:
                return this._gl.RGB16F;
              default:
                return this._gl.RGBA16F
            }
          case 10:
            return this._gl.RGB565;
          case 13:
            return this._gl.R11F_G11F_B10F;
          case 14:
            return this._gl.RGB9_E5;
          case 8:
            return this._gl.RGBA4;
          case 9:
            return this._gl.RGB5_A1;
          case 11:
            switch (Od) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return md ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(dd, Od, md, Wd) {
        let Fd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Rd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const hd = Fd ? 4 : 3,
          vd = Fd ? this._gl.RGBA : this._gl.RGB,
          Qd = md * Wd * hd;
        if (Xd) {
          if (Xd.length < Qd) return Kd.c.Error(`Data buffer is too small to store the read pixels (${Xd.length} should be more than ${Qd})`), Promise.resolve(Xd)
        } else Xd = new Uint8Array(Qd);
        return Rd && this.flushFramebuffer(), this._gl.readPixels(dd, Od, md, Wd, vd, this._gl.UNSIGNED_BYTE, Xd), Promise.resolve(Xd)
      }
      static get IsSupportedAsync() {
        return Promise.resolve(this.isSupported())
      }
      static get IsSupported() {
        return this.isSupported()
      }
      static isSupported() {
        if (null !== this._HasMajorPerformanceCaveat) return !this._HasMajorPerformanceCaveat;
        if (null === this._IsSupported) try {
          const dd = Rd.b._CreateCanvas(1, 1),
            Od = dd.getContext("webgl") || dd.getContext("experimental-webgl");
          this._IsSupported = null != Od && !!globalThis.WebGLRenderingContext
        } catch (dd) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const dd = Rd.b._CreateCanvas(1, 1),
            Od = dd.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || dd.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !Od
        } catch (dd) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    gd._TempClearColorUint32 = new Uint32Array(4), gd._TempClearColorInt32 = new Int32Array(4), gd._TempClearColorFloat32 = new Float32Array(4), gd.ExceptionList = [{
      key: "Chrome/63.0",
      capture: "63\\.0\\.3239\\.(\\d+)",
      captureConstraint: 108,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/58",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/59",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/72.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/73.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/74.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/71",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/72",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/12\\d\\..+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: ".*AppleWebKit.*(15.4).*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }, {
      key: ".*(15.4).*AppleWebKit.*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }], gd._ConcatenateShader = yd.e, gd._IsSupported = null, gd._HasMajorPerformanceCaveat = null
  },
  42111: (dd, Od, md) => {
    var Wd;
    md.d(Od, {
        c: () => Fd
      }),
      function(dd) {
        dd[dd.PointerMove = 0] = "PointerMove", dd[dd.PointerDown = 1] = "PointerDown", dd[dd.PointerUp = 2] = "PointerUp"
      }(Wd || (Wd = {}));
    class Fd {}
    Fd.DOM_DELTA_PIXEL = 0, Fd.DOM_DELTA_LINE = 1, Fd.DOM_DELTA_PAGE = 2
  },
  42105: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd,
      f: () => Rd,
      h: () => Fd
    });
    class Wd {}
    Wd.KEYDOWN = 1, Wd.KEYUP = 2;
    class Fd {
      constructor(dd, Od) {
        this.type = dd, this.event = Od
      }
    }
    class Rd extends Fd {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(dd) {
        this.skipOnKeyboardObservable = dd
      }
      constructor(dd, Od) {
        super(dd, Od), this.type = dd, this.event = Od, this.skipOnKeyboardObservable = !1
      }
    }
  },
  42099: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      f: () => Xd,
      i: () => Kd
    });
    var Wd = md(38636);
    class Fd {}
    Fd.POINTERDOWN = 1, Fd.POINTERUP = 2, Fd.POINTERMOVE = 4, Fd.POINTERWHEEL = 8, Fd.POINTERPICK = 16, Fd.POINTERTAP = 32, Fd.POINTERDOUBLETAP = 64;
    class Rd {
      constructor(dd, Od) {
        this.type = dd, this.event = Od
      }
    }
    class Xd extends Rd {
      constructor(dd, Od, md, Fd) {
        super(dd, Od), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Wd.i(md, Fd)
      }
    }
    class Kd extends Rd {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(dd, Od), this._pickInfo = md, this._inputManager = Wd
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  42118: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd
    });
    class Wd {
      static CompareLightsPriority(dd, Od) {
        return dd.shadowEnabled !== Od.shadowEnabled ? (Od.shadowEnabled ? 1 : 0) - (dd.shadowEnabled ? 1 : 0) : Od.renderPriority - dd.renderPriority
      }
    }
    Wd.FALLOFF_DEFAULT = 0, Wd.FALLOFF_PHYSICAL = 1, Wd.FALLOFF_GLTF = 2, Wd.FALLOFF_STANDARD = 3, Wd.LIGHTMAP_DEFAULT = 0, Wd.LIGHTMAP_SPECULAR = 1, Wd.LIGHTMAP_SHADOWSONLY = 2, Wd.INTENSITYMODE_AUTOMATIC = 0, Wd.INTENSITYMODE_LUMINOUSPOWER = 1, Wd.INTENSITYMODE_LUMINOUSINTENSITY = 2, Wd.INTENSITYMODE_ILLUMINANCE = 3, Wd.INTENSITYMODE_LUMINANCE = 4, Wd.LIGHTTYPEID_POINTLIGHT = 0, Wd.LIGHTTYPEID_DIRECTIONALLIGHT = 1, Wd.LIGHTTYPEID_SPOTLIGHT = 2, Wd.LIGHTTYPEID_HEMISPHERICLIGHT = 3, Wd.LIGHTTYPEID_RECT_AREALIGHT = 4, Wd.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  41763: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd, Fd = md(38660),
      Rd = md(41772);
    ! function(dd) {
      dd[dd.Unknown = 0] = "Unknown", dd[dd.Url = 1] = "Url", dd[dd.Temp = 2] = "Temp", dd[dd.Raw = 3] = "Raw", dd[dd.Dynamic = 4] = "Dynamic", dd[dd.RenderTarget = 5] = "RenderTarget", dd[dd.MultiRenderTarget = 6] = "MultiRenderTarget", dd[dd.Cube = 7] = "Cube", dd[dd.CubeRaw = 8] = "CubeRaw", dd[dd.CubePrefiltered = 9] = "CubePrefiltered", dd[dd.Raw3D = 10] = "Raw3D", dd[dd.Raw2DArray = 11] = "Raw2DArray", dd[dd.DepthStencil = 12] = "DepthStencil", dd[dd.CubeRawRGBD = 13] = "CubeRawRGBD", dd[dd.Depth = 14] = "Depth", dd[dd.External = 15] = "External"
    }(Wd || (Wd = {}));
    class Xd extends Rd.d {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(dd) {
        this._useMipMaps = dd
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(dd) {
        this._uniqueId = dd
      }
      Iq() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new Fd.c, this.onErrorObservable = new Fd.c, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = dd, this._source = Od, this._uniqueId = Xd._Counter++, md || (this._hardwareTexture = dd._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, dd, Od, md), this.width = dd, this.height = Od, this.depth = md, this.baseWidth = dd, this.baseHeight = Od, this.baseDepth = md, this._size = dd * Od * md
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const dd = this.onRebuildCallback(this),
            Od = Od => {
              Od._swapAndDie(this, !1), this.isReady = dd.isReady
            };
          return void(dd.isAsync ? dd.proxy.then(Od) : Od(dd.proxy))
        }
        let dd;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(dd = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (dd => {
              dd._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (dd = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), dd._swapAndDie(this, !1), this._bufferViewArray)
              for (let dd = 0; dd < this._bufferViewArray.length; dd++) {
                const Od = this._bufferViewArray[dd];
                Od && this._engine.updateRawTexture(this, Od, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, dd)
              }
            this.isReady = !0;
            break;
          case 10:
            dd = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), dd._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (dd = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), dd._swapAndDie(this, !1), this._bufferViewArray)
              for (let dd = 0; dd < this._bufferViewArray.length; dd++) {
                const Od = this._bufferViewArray[dd];
                Od && this._engine.updateRawTexture2DArray(this, Od, this.format, this.invertY, this._compression, this.type, dd)
              }
            this.isReady = !0;
            break;
          case 4:
            dd = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), dd._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(dd = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              dd._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            dd = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), dd._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return dd = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (dd => {
              dd && dd._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(dd._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(dd._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), dd._hardwareTexture = this._hardwareTexture, dd._setUniqueId(Xd._Counter++), Od && (dd._isRGBD = this._isRGBD), this._lodTextureHigh && (dd._lodTextureHigh && dd._lodTextureHigh.dispose(), dd._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (dd._lodTextureMid && dd._lodTextureMid.dispose(), dd._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (dd._lodTextureLow && dd._lodTextureLow.dispose(), dd._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (dd._irradianceTexture && dd._irradianceTexture.dispose(), dd._irradianceTexture = this._irradianceTexture);
        const md = this._engine.getLoadedTexturesCache();
        let Wd = md.indexOf(this); - 1 !== Wd && md.splice(Wd, 1), Wd = md.indexOf(dd), -1 === Wd && md.push(dd)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    Xd._Counter = 0
  },
  41869: (dd, Od, md) => {
    function Wd(dd) {
      return 13 === dd || 14 === dd || 15 === dd || 16 === dd || 17 === dd || 18 === dd || 19 === dd
    }

    function Fd(dd) {
      return 8 === dd || 9 === dd || 10 === dd || 11 === dd
    }

    function Rd(dd) {
      return 0 === dd || 5 === dd || 7 === dd || 11 === dd
    }

    function Xd(dd) {
      return 13 === dd || 17 === dd || 18 === dd || 19 === dd
    }
    md.d(Od, {
      d: () => Xd,
      g: () => Wd,
      i: () => Fd,
      j: () => Rd
    })
  },
  41772: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd
    });
    class Wd {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(dd) {
        this._cachedWrapU = dd
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(dd) {
        this._cachedWrapV = dd
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(dd) {
        this._cachedWrapR = dd
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(dd) {
        this._cachedAnisotropicFilteringLevel = dd
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(dd) {
        this._comparisonFunction = dd
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(dd) {
        this._useMipMaps = dd
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = dd, this._cachedWrapV = Od, this._cachedWrapR = md, this._cachedAnisotropicFilteringLevel = Wd, this.samplingMode = Fd, this._comparisonFunction = Rd, this
      }
      compareSampler(dd) {
        return this._cachedWrapU === dd._cachedWrapU && this._cachedWrapV === dd._cachedWrapV && this._cachedWrapR === dd._cachedWrapR && this._cachedAnisotropicFilteringLevel === dd._cachedAnisotropicFilteringLevel && this.samplingMode === dd.samplingMode && this._comparisonFunction === dd._comparisonFunction && this._useMipMaps === dd._useMipMaps
      }
    }
  },
  42052: (dd, Od, md) => {
    function Wd(dd) {
      dd.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    md.d(Od, {
      e: () => Wd
    })
  },
  41852: (dd, Od, md) => {
    function Wd(dd) {
      return void 0 === dd.getPipelineContext
    }
    md.d(Od, {
      c: () => Wd
    })
  },
  42240: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd
    });
    var Wd = md(41831);
    class Fd {
      static GetEffect(dd) {
        return void 0 === dd.getPipelineContext ? dd.effect : dd
      }
      constructor(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = dd.createDrawContext(), Od && (this.materialContext = dd.createMaterialContext())
      }
      setEffect(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        md || this.effect === dd || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = dd, void 0 !== Od && (this.defines = Od), md && this.drawContext?.reset()
      }
      dispose() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const Od = this.effect;
          dd ? Od.dispose() : Wd.c.SetImmediate((() => {
            Od.Iq().onEndFrameObservable.addOnce((() => {
              Od.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  41791: (dd, Od, md) => {
    md.d(Od, {
      e: () => td,
      h: () => Nd,
      k: () => vd,
      l: () => Qd
    });
    var Wd = md(41799),
      Fd = md(41802),
      Rd = md(41785),
      Xd = md(40262),
      Kd = md(41822),
      hd = md(41810);

    function vd(dd, Od) {
      return (0, Fd.A)(Od).cachedPipelines[dd]
    }

    function Qd(dd) {
      const Od = dd._name,
        md = dd.context;
      if (Od && md) {
        const dd = (0, Fd.A)(md),
          Wd = dd.cachedPipelines[Od];
        Wd?.dispose(), delete dd.cachedPipelines[Od]
      }
    }

    function td(dd, Od, md, Fd, Rd, Xd, hd) {
      let vd, Qd;
      const td = (0, Wd.h)() ? Xd?.getHostDocument() : null;
      vd = "string" === typeof Od ? Od : "string" === typeof Od.vertexSource ? "source:" + Od.vertexSource : "string" === typeof Od.vertexElement ? td?.getElementById(Od.vertexElement) || Od.vertexElement : Od.vertex || Od, Qd = "string" === typeof Od ? Od : "string" === typeof Od.fragmentSource ? "source:" + Od.fragmentSource : "string" === typeof Od.fragmentElement ? td?.getElementById(Od.fragmentElement) || Od.fragmentElement : Od.fragment || Od;
      const Nd = [void 0, void 0],
        qd = () => {
          if (Nd[0] && Nd[1]) {
            const [Wd, vd] = Nd;
            (0, Kd.h)(dd), (0, Kd.n)(Wd, dd, ((Wd, Qd) => {
              hd && (hd._vertexSourceCodeBeforeMigration = Qd), md && (Wd = md("vertex", Wd)), dd.isFragment = !0, (0, Kd.n)(vd, dd, ((Xd, vd) => {
                hd && (hd._fragmentSourceCodeBeforeMigration = vd), md && (Xd = md("fragment", Xd));
                const Qd = (0, Kd.d)(Wd, Xd, dd);
                dd = null;
                const td = function(dd, Od, md, Wd) {
                  if (md) {
                    return {
                      vertexSourceCode: (1 === Wd ? "//" : "") + "#define SHADER_NAME vertex:" + (md.vertexElement || md.vertex || md.spectorName || md) + "\n" + dd,
                      fragmentSourceCode: (1 === Wd ? "//" : "") + "#define SHADER_NAME fragment:" + (md.fragmentElement || md.fragment || md.spectorName || md) + "\n" + Od
                    }
                  }
                  return {
                    vertexSourceCode: dd,
                    fragmentSourceCode: Od
                  }
                }(Qd.vertexCode, Qd.fragmentCode, Od, Rd);
                Fd?.(td.vertexSourceCode, td.fragmentSourceCode)
              }), Xd)
            }), Xd)
          }
        };
      od(vd, "Vertex", "", (dd => {
        hd && (hd._rawVertexSourceCode = dd), Nd[0] = dd, qd()
      }), Rd), od(Qd, "Fragment", "Pixel", (dd => {
        hd && (hd._rawFragmentSourceCode = dd), Nd[1] = dd, qd()
      }), Rd)
    }

    function od(dd, Od, md, Fd, Xd, Kd) {
      if ("undefined" !== typeof HTMLElement && dd instanceof HTMLElement) {
        return void Fd((0, Wd.b)(dd))
      }
      if ("source:" === dd.substring(0, 7)) return void Fd(dd.substring(7));
      if ("base64:" === dd.substring(0, 7)) {
        return void Fd(window.atob(dd.substring(7)))
      }
      const vd = Rd.e.GetShadersStore(Xd);
      if (vd[dd + Od + "Shader"]) return void Fd(vd[dd + Od + "Shader"]);
      if (md && vd[dd + md + "Shader"]) return void Fd(vd[dd + md + "Shader"]);
      let Qd;
      if (Qd = "." === dd[0] || "/" === dd[0] || dd.indexOf("http") > -1 ? dd : Rd.e.GetShadersRepository(Xd) + dd, !(Kd = Kd || hd.i)) throw new Error("loadFileInjection is not defined");
      Kd(Qd + "." + Od.toLowerCase() + ".fx", Fd)
    }
    const Nd = (dd, Od, md, Wd) => {
      try {
        const Rd = dd.context ? (0, Fd.A)(dd.context) : null;
        Rd && (Rd.disableParallelShaderCompile = dd.disableParallelCompilation);
        const Xd = dd.existingPipelineContext || Od(dd.shaderProcessingContext);
        return Xd._name = dd.name, dd.name && Rd && (Rd.cachedPipelines[dd.name] = Xd), md(Xd, dd.vertex, dd.fragment, !!dd.createAsRaw, "", "", dd.rebuildRebind, dd.defines, dd.transformFeedbackVaryings, "", (() => {
          Wd(Xd, (() => {
            dd.onRenderingStateCompiled?.(Xd)
          }))
        })), Xd
      } catch (Rd) {
        throw Xd.c.Error("Error compiling effect"), Rd
      }
    }
  },
  41782: (dd, Od, md) => {
    md.d(Od, {
      e: () => hd
    });
    var Wd = md(38660),
      Fd = md(40262),
      Rd = md(41785),
      Xd = md(41791),
      Kd = md(41831);
    class hd {
      static get ShadersRepository() {
        return Rd.e.ShadersRepository
      }
      static set ShadersRepository(dd) {
        Rd.e.ShadersRepository = dd
      }
      get yJ() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new Wd.c), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(dd, Od, md) {
        let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Rd = arguments.length > 4 ? arguments[4] : void 0,
          Kd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          vd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Qd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          td = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          od = arguments.length > 9 ? arguments[9] : void 0,
          Nd = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          qd = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          Hd = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Wd.c, this.onErrorObservable = new Wd.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = dd, this._key = Nd;
        const yd = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let bd;
        if (Od.attributes) {
          const dd = Od;
          if (this._engine = md, this._attributesNames = dd.attributes, this._uniformsNames = dd.uniformsNames.concat(dd.samplers), this._samplerList = dd.samplers.slice(), this.defines = dd.defines, this.onError = dd.onError, this.onCompiled = dd.onCompiled, this._fallbacks = dd.fallbacks, this._indexParameters = dd.indexParameters, this._transformFeedbackVaryings = dd.transformFeedbackVaryings || null, this._multiTarget = !!dd.multiTarget, this._shaderLanguage = dd.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!dd.disableParallelShaderCompilation, dd.uniformBuffersNames) {
            this._uniformBuffersNamesList = dd.uniformBuffersNames.slice();
            for (let Od = 0; Od < dd.uniformBuffersNames.length; Od++) this._uniformBuffersNames[dd.uniformBuffersNames[Od]] = Od
          }
          this._processFinalCode = dd.processFinalCode ?? null, this._processCodeAfterIncludes = dd.processCodeAfterIncludes ?? void 0, Hd = dd.extraInitializationsAsync, bd = dd.existingPipelineContext
        } else this._engine = Rd, this.defines = null == Kd ? "" : Kd, this._uniformsNames = md.concat(Fd), this._samplerList = Fd ? Fd.slice() : [], this._attributesNames = Od, this._uniformBuffersNamesList = [], this._shaderLanguage = qd, this.onError = td, this.onCompiled = Qd, this._indexParameters = od, this._fallbacks = vd;
        "WEBGL2" === this._engine.shaderPlatformName && (bd = (0, Xd.k)(yd, this._engine._gl) ?? bd), this._attributeLocationByName = {}, this.uniqueId = hd._UniqueIdSeed++, bd ? (this._pipelineContext = bd, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, Hd).catch((dd => {
          const Od = dd?.message ?? String(dd),
            md = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${Od}`);
          dd && "string" === typeof dd.stack && (md.stack = `${md.message}\nCaused by: ${dd.stack}`), this._processCompilationErrors(md)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.yJ || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        Wd && await Wd(), this._processingContext = md || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const Fd = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: dd ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: Rd.e.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: Rd.e.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          JFd: this._engine.JFd,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, Xd.e)(Fd, this.name, this._processFinalCode, ((dd, md) => {
          this._vertexSourceCode = dd, this._fragmentSourceCode = md, this._prepareEffect(Od)
        }), this._shaderLanguage, this._engine, this)
      }
      get key() {
        return this._key
      }
      isReady() {
        try {
          return this._isReadyInternal()
        } catch {
          return !1
        }
      }
      _isReadyInternal() {
        return !!this._engine.yJ || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      Iq() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(dd) {
        return this._attributes[dd]
      }
      getAttributeLocationByName(dd) {
        return this._attributeLocationByName[dd]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(dd) {
        return this._uniformsNames.indexOf(dd)
      }
      getUniform(dd) {
        return this._uniforms[dd]
      }
      getSamplers() {
        return this._samplerList
      }
      getUniformNames() {
        return this._uniformsNames
      }
      getUniformBuffersNames() {
        return this._uniformBuffersNamesList
      }
      getIndexParameters() {
        return this._indexParameters
      }
      getCompilationError() {
        return this._compilationError
      }
      allFallbacksProcessed() {
        return this._allFallbacksProcessed
      }
      async whenCompiledAsync() {
        return await new Promise((dd => {
          this.executeWhenCompiled(dd)
        }))
      }
      executeWhenCompiled(dd) {
        this.isReady() ? dd(this) : (this.onCompileObservable.add((Od => {
          dd(Od)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(dd) {
        (0, Kd.g)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (Od => {
          this._processCompilationErrors(Od, dd)
        }), 16, 12e4, !0, ` - Effect: ${"string"===typeof this.name?this.name:this.key}`)
      }
      get vertexSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._vertexSourceCodeOverride : this._pipelineContext?._getVertexShaderCode() ?? this._vertexSourceCode
      }
      get fragmentSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._fragmentSourceCodeOverride : this._pipelineContext?._getFragmentShaderCode() ?? this._fragmentSourceCode
      }
      get vertexSourceCodeBeforeMigration() {
        return this._vertexSourceCodeBeforeMigration
      }
      get fragmentSourceCodeBeforeMigration() {
        return this._fragmentSourceCodeBeforeMigration
      }
      get rawVertexSourceCode() {
        return this._rawVertexSourceCode
      }
      get rawFragmentSourceCode() {
        return this._rawFragmentSourceCode
      }
      getPipelineGenerationOptions() {
        return {
          platformName: this._engine.shaderPlatformName,
          shaderLanguage: this._shaderLanguage,
          shaderNameOrContent: this.name,
          key: this._key,
          defines: this.defines.split("\n"),
          addGlobalDefines: !1,
          extendedProcessingOptions: {
            indexParameters: this._indexParameters,
            isNDCHalfZRange: this._engine.isNDCHalfZRange,
            JFd: this._engine.JFd,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(dd, Od, md, Wd) {
        this._isReady = !1, this._vertexSourceCodeOverride = dd, this._fragmentSourceCodeOverride = Od, this.onError = (dd, Od) => {
          Wd && Wd(Od)
        }, this.onCompiled = () => {
          const dd = this.Iq().scenes;
          if (dd)
            for (let Od = 0; Od < dd.length; Od++) dd[Od].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(md)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(dd) {
        if (this._pipelineContext = dd, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let Od = 0; Od < this._attributesNames.length; Od++) {
            const dd = this._attributesNames[Od];
            this._attributeLocationByName[dd] = this._attributes[Od]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), hd.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Od = this._pipelineContext;
        this._isReady = !1;
        try {
          const md = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            Wd = md ? null : this.defines,
            Fd = md ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            Rd = md ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            Kd = this._engine;
          this._pipelineContext = (0, Xd.h)({
            existingPipelineContext: dd ? Od : null,
            vertex: Fd,
            fragment: Rd,
            context: "WEBGL2" === Kd.shaderPlatformName || "WEBGL1" === Kd.shaderPlatformName ? Kd._gl : void 0,
            rebuildRebind: (dd, Od, md, Wd) => this._rebuildProgram(dd, Od, md, Wd),
            defines: Wd,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: md,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: md => {
              Od && !dd && this._engine._deletePipelineContext(Od), md && this._onRenderingStateCompiled(md)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(Od)
        } catch (md) {
          this._processCompilationErrors(md, Od)
        }
      }
      _getShaderCodeAndErrorLine(dd, Od, md) {
        const Wd = md ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let Fd = null;
        if (Od && dd) {
          const Rd = Od.match(Wd);
          if (Rd && 2 === Rd.length) {
            const Od = parseInt(Rd[1]),
              Wd = dd.split("\n", -1);
            Wd.length >= Od && (Fd = `Offending line [${Od}] in ${md?"fragment":"vertex"} code: ${Wd[Od-1]}`)
          }
        }
        return [dd, Fd]
      }
      _processCompilationErrors(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof dd?.stack ? dd.stack : dd?.message ?? String(dd);
        const md = this._attributesNames,
          Wd = this._fallbacks;
        if (Fd.c.Error("Unable to compile effect:"), Fd.c.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Fd.c.Error(`Attributes: ${md.join(" ")}`), Fd.c.Error("Defines:\n" + this.defines), hd.LogShaderCodeOnCompilationError) {
          let dd, Od = null,
            md = null;
          this._pipelineContext?._getVertexShaderCode() && ([dd, Od] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), dd && (Fd.c.Error("Vertex code:"), Fd.c.Error(dd))), this._pipelineContext?._getFragmentShaderCode() && ([dd, md] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), dd && (Fd.c.Error("Fragment code:"), Fd.c.Error(dd))), Od && Fd.c.Error(Od), md && Fd.c.Error(md)
        }
        Fd.c.Error("Error: " + this._compilationError);
        const Rd = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        Od && (this._pipelineContext = Od, this._isReady = !0, Rd()), Wd ? (this._pipelineContext = null, Wd.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Fd.c.Error("Trying next fallback."), this.defines = Wd.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, Rd(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, Od || Rd())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(dd, Od) {
        this._engine._bindTexture(this._samplers[dd], Od, dd)
      }
      setTexture(dd, Od) {
        this._engine.setTexture(this._samplers[dd], this._uniforms[dd], Od, dd)
      }
      setTextureArray(dd, Od) {
        const md = dd + "Ex";
        if (-1 === this._samplerList.indexOf(md + "0")) {
          const Wd = this._samplerList.indexOf(dd);
          for (let dd = 1; dd < Od.length; dd++) {
            const Od = md + (dd - 1).toString();
            this._samplerList.splice(Wd + dd, 0, Od)
          }
          let Fd = 0;
          for (const dd of this._samplerList) this._samplers[dd] = Fd, Fd += 1
        }
        this._engine.setTextureArray(this._samplers[dd], this._uniforms[dd], Od, dd)
      }
      bindUniformBuffer(dd, Od) {
        const md = this._uniformBuffersNames[Od];
        void 0 === md || hd._BaseCache[md] === dd && this._engine._features.useUBOBindingCache || (hd._BaseCache[md] = dd, this._engine.bindUniformBufferBase(dd, md, Od))
      }
      bindUniformBlock(dd, Od) {
        this._engine.bindUniformBlock(this._pipelineContext, dd, Od)
      }
      setInt(dd, Od) {
        return this._pipelineContext.setInt(dd, Od), this
      }
      setInt2(dd, Od, md) {
        return this._pipelineContext.setInt2(dd, Od, md), this
      }
      setInt3(dd, Od, md, Wd) {
        return this._pipelineContext.setInt3(dd, Od, md, Wd), this
      }
      setInt4(dd, Od, md, Wd, Fd) {
        return this._pipelineContext.setInt4(dd, Od, md, Wd, Fd), this
      }
      setIntArray(dd, Od) {
        return this._pipelineContext.setIntArray(dd, Od), this
      }
      setIntArray2(dd, Od) {
        return this._pipelineContext.setIntArray2(dd, Od), this
      }
      setIntArray3(dd, Od) {
        return this._pipelineContext.setIntArray3(dd, Od), this
      }
      setIntArray4(dd, Od) {
        return this._pipelineContext.setIntArray4(dd, Od), this
      }
      setUInt(dd, Od) {
        return this._pipelineContext.setUInt(dd, Od), this
      }
      setUInt2(dd, Od, md) {
        return this._pipelineContext.setUInt2(dd, Od, md), this
      }
      setUInt3(dd, Od, md, Wd) {
        return this._pipelineContext.setUInt3(dd, Od, md, Wd), this
      }
      setUInt4(dd, Od, md, Wd, Fd) {
        return this._pipelineContext.setUInt4(dd, Od, md, Wd, Fd), this
      }
      setUIntArray(dd, Od) {
        return this._pipelineContext.setUIntArray(dd, Od), this
      }
      setUIntArray2(dd, Od) {
        return this._pipelineContext.setUIntArray2(dd, Od), this
      }
      setUIntArray3(dd, Od) {
        return this._pipelineContext.setUIntArray3(dd, Od), this
      }
      setUIntArray4(dd, Od) {
        return this._pipelineContext.setUIntArray4(dd, Od), this
      }
      setFloatArray(dd, Od) {
        return this._pipelineContext.setArray(dd, Od), this
      }
      setFloatArray2(dd, Od) {
        return this._pipelineContext.setArray2(dd, Od), this
      }
      setFloatArray3(dd, Od) {
        return this._pipelineContext.setArray3(dd, Od), this
      }
      setFloatArray4(dd, Od) {
        return this._pipelineContext.setArray4(dd, Od), this
      }
      setArray(dd, Od) {
        return this._pipelineContext.setArray(dd, Od), this
      }
      setArray2(dd, Od) {
        return this._pipelineContext.setArray2(dd, Od), this
      }
      setArray3(dd, Od) {
        return this._pipelineContext.setArray3(dd, Od), this
      }
      setArray4(dd, Od) {
        return this._pipelineContext.setArray4(dd, Od), this
      }
      setMatrices(dd, Od) {
        return this._pipelineContext.setMatrices(dd, Od), this
      }
      setMatrix(dd, Od) {
        return this._pipelineContext.setMatrix(dd, Od), this
      }
      setMatrix3x3(dd, Od) {
        return this._pipelineContext.setMatrix3x3(dd, Od), this
      }
      setMatrix2x2(dd, Od) {
        return this._pipelineContext.setMatrix2x2(dd, Od), this
      }
      setFloat(dd, Od) {
        return this._pipelineContext.setFloat(dd, Od), this
      }
      setBool(dd, Od) {
        return this._pipelineContext.setInt(dd, Od ? 1 : 0), this
      }
      setVector2(dd, Od) {
        return this._pipelineContext.setVector2(dd, Od), this
      }
      setFloat2(dd, Od, md) {
        return this._pipelineContext.setFloat2(dd, Od, md), this
      }
      setVector3(dd, Od) {
        return this._pipelineContext.setVector3(dd, Od), this
      }
      setFloat3(dd, Od, md, Wd) {
        return this._pipelineContext.setFloat3(dd, Od, md, Wd), this
      }
      setVector4(dd, Od) {
        return this._pipelineContext.setVector4(dd, Od), this
      }
      setQuaternion(dd, Od) {
        return this._pipelineContext.setQuaternion(dd, Od), this
      }
      setFloat4(dd, Od, md, Wd, Fd) {
        return this._pipelineContext.setFloat4(dd, Od, md, Wd, Fd), this
      }
      setColor3(dd, Od) {
        return this._pipelineContext.setColor3(dd, Od), this
      }
      setColor4(dd, Od, md) {
        return this._pipelineContext.setColor4(dd, Od, md), this
      }
      setDirectColor4(dd, Od) {
        return this._pipelineContext.setDirectColor4(dd, Od), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (hd.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, Xd.l)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        Od && (Rd.e.GetShadersStore(Wd)[`${dd}PixelShader`] = Od), md && (Rd.e.GetShadersStore(Wd)[`${dd}VertexShader`] = md)
      }
      static ResetCache() {
        hd._BaseCache = {}
      }
    }
    hd.LogShaderCodeOnCompilationError = !0, hd.PersistentMode = !1, hd.AutomaticallyClearCodeCache = !1, hd._UniqueIdSeed = 0, hd._BaseCache = {}, hd.ShadersStore = Rd.e.ShadersStore, hd.IncludesShadersStore = Rd.e.IncludesShadersStore
  },
  42086: (dd, Od, md) => {
    md.d(Od, {
      d: () => Qd,
      f: () => Ed,
      j: () => wd
    });
    var Wd = md(41782),
      Fd = md(38636),
      Rd = md(38665),
      Xd = md(42065);
    const Kd = new Fd.d,
      hd = new Fd.d,
      vd = new Fd.d,
      Qd = {
        zV: () => {},
        eyeAtCamera: !0
      };

    function td(dd, Od, md) {
      const Wd = md.RRd(),
        Fd = Od.RRd();
      for (let Rd = 0; Rd < 16; Rd++) Wd[Rd] = Fd[Rd];
      return Wd[12] -= dd.x, Wd[13] -= dd.y, Wd[14] -= dd.z, md.markAsUpdated(), md
    }

    function od(dd, Od, md) {
      return (0, Rd.d)(Od, hd), td(dd, hd, vd), (0, Rd.d)(vd, md), md
    }

    function Nd(dd, Od, md) {
      if (!Qd.eyeAtCamera) return od(dd, Od, md);
      const Wd = md.RRd(),
        Fd = Od.RRd();
      for (let Rd = 0; Rd < 16; Rd++) Wd[Rd] = Fd[Rd];
      return Wd[12] = 0, Wd[13] = 0, Wd[14] = 0, md.markAsUpdated(), md
    }

    function qd(dd, Od, md, Wd) {
      return (0, Rd.j)(Nd(dd, Od, Wd), md, Wd), Wd
    }

    function Hd(dd, Od, md, Wd) {
      return (0, Rd.d)(md, hd), (0, Rd.j)(Od, hd, vd), td(dd, vd, hd), Nd(dd, md, vd), (0, Rd.j)(hd, vd, Wd), Wd
    }

    function yd(dd, Od, md, Wd, Fd, Xd) {
      return (0, Rd.d)(md, hd), (0, Rd.j)(Od, hd, vd), td(dd, vd, hd), qd(dd, Wd, Fd, vd), (0, Rd.j)(hd, vd, Xd), Xd
    }

    function bd(dd, Od) {
      const md = Qd.zV();
      if (!md || Kd === Od) return Od;
      Kd.updateFlag = Od.updateFlag;
      const Wd = md.floatingOriginOffset;
      switch (dd) {
        case "world":
          return td(Wd, Od, Kd);
        case "view":
          return Nd(Wd, Od, Kd);
        case "worldView":
          return Hd(Wd, Od, md.getViewMatrix(), Kd);
        case "viewProjection":
          return qd(Wd, md.getViewMatrix(), md.getProjectionMatrix(), Kd);
        case "worldViewProjection":
          return yd(Wd, Od, md.getTransformMatrix(), md.getViewMatrix(), md.getProjectionMatrix(), Kd);
        default:
          if (dd.startsWith("u_")) {
            const Fd = dd.toLowerCase();
            if (Fd.startsWith("u_worldviewprojection")) return yd(Wd, Od, md.getTransformMatrix(), md.getViewMatrix(), md.getProjectionMatrix(), Kd);
            if (Fd.startsWith("u_viewprojection")) return qd(Wd, md.getViewMatrix(), md.getProjectionMatrix(), Kd);
            if (Fd.startsWith("u_worldview")) return Hd(Wd, Od, md.getViewMatrix(), Kd);
            if (Fd.startsWith("u_world")) return td(Wd, Od, Kd);
            if (Fd.startsWith("u_view")) return Nd(Wd, Od, Kd)
          }
          return Od
      }
    }
    const Td = Xd.c,
      pd = Wd.e,
      Yd = Td.prototype._updateMatrixForUniform,
      gd = Wd.e.prototype.setMatrix;

    function wd() {
      Wd.e.prototype.setMatrix = gd, pd._setMatrixOverride = void 0, Td.prototype._updateMatrixForUniform = Yd, Td.prototype._updateMatrixForUniformOverride = void 0
    }

    function Ed() {
      pd.prototype._setMatrixOverride = gd, pd.prototype.setMatrix = function(dd, Od) {
        return this._setMatrixOverride(dd, bd(dd, Od)), this
      }, Td.prototype._updateMatrixForUniformOverride = Yd, Td.prototype._updateMatrixForUniform = function(dd, Od) {
        this._updateMatrixForUniformOverride(dd, bd(dd, Od))
      }
    }
  },
  42060: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      g: () => Fd
    });
    var Wd = md(42052);

    function Fd(dd, Od) {
      Od.WHITEBALANCE && dd.push("whiteBalanceMatrix"), Od.EXPOSURE && dd.push("exposureLinear"), Od.CONTRAST && dd.push("contrast"), Od.COLORGRADING && dd.push("colorTransformSettings"), (Od.VIGNETTE || Od.DITHER) && dd.push("vInverseScreenSize"), Od.VIGNETTE && (dd.push("vignetteSettings1"), dd.push("vignetteSettings2")), Od.COLORCURVES && (0, Wd.e)(dd), Od.DITHER && dd.push("ditherIntensity")
    }

    function Rd(dd, Od) {
      Od.COLORGRADING && dd.push("txColorTransform")
    }
  },
  42046: (dd, Od, md) => {
    md.d(Od, {
      b: () => Sd,
      f: () => Vd
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(38660),
      Xd = md(38741),
      Kd = md(38663),
      hd = md(38636);
    const vd = [
        [0, .18006, .26352, -.24341],
        [10, .18066, .26589, -.25479],
        [20, .18133, .26846, -.26876],
        [30, .18208, .27119, -.28539],
        [40, .18293, .27407, -.3047],
        [50, .18388, .27709, -.32675],
        [60, .18494, .28021, -.35156],
        [70, .18611, .28342, -.37915],
        [80, .1874, .28668, -.40955],
        [90, .1888, .28997, -.44278],
        [100, .19032, .29326, -.47888],
        [125, .19462, .30141, -.58204],
        [150, .19962, .30921, -.70471],
        [175, .20525, .31647, -.84901],
        [200, .21142, .32312, -1.0182],
        [225, .21807, .32909, -1.2168],
        [250, .22511, .33439, -1.4512],
        [275, .23247, .33904, -1.7298],
        [300, .2401, .34308, -2.0637],
        [325, .24792, .34655, -2.4681],
        [350, .25591, .34951, -2.9641],
        [375, .264, .352, -3.5814],
        [400, .27218, .35407, -4.3633],
        [425, .28039, .35577, -5.3762],
        [450, .28863, .35714, -6.7262],
        [475, .29685, .35823, -8.5955],
        [500, .30505, .35907, -11.324],
        [525, .3132, .35968, -15.628],
        [550, .32129, .36011, -23.325],
        [575, .32931, .36038, -40.77],
        [600, .33724, .36051, -116.45]
      ],
      Qd = 1e6 / vd[vd.length - 1][0],
      td = 150;

    function od(dd, Od) {
      const md = Number.isNaN(dd) ? Qd : Math.max(dd, Qd),
        Wd = (0, Kd.Clamp)(1e6 / md, vd[0][0], vd[vd.length - 1][0]);
      let Fd = 0,
        Rd = vd.length - 1;
      for (; Rd - Fd > 1;) {
        const dd = Fd + Rd >> 1;
        vd[dd][0] <= Wd ? Fd = dd : Rd = dd
      }
      const Xd = Fd,
        [od, Nd, qd, Hd] = vd[Xd],
        [yd, bd, Td, pd] = vd[Xd + 1],
        Yd = (Wd - od) / (yd - od),
        gd = hd.i.Lerp(new hd.i(Nd, qd), new hd.i(bd, Td), Yd),
        wd = hd.i.Normalize(new hd.i(1, Hd)),
        Ed = hd.i.Normalize(new hd.i(1, pd)),
        Jd = hd.i.Normalize(hd.i.Lerp(wd, Ed, Yd)),
        Ud = (0, Kd.Clamp)(Od, -150, td);
      gd.YRd(Jd.scale(Ud / 3e3));
      const xd = 2 * gd.x - 8 * gd.y + 4,
        Bd = 3 * gd.x / xd,
        Sd = 2 * gd.y / xd;
      return new hd.j(Bd / Sd, 1, (1 - Bd - Sd) / Sd)
    }
    const Nd = hd.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      qd = hd.d.Invert(Nd);

    function Hd(dd, Od) {
      const md = Od > 0 ? dd / Od : 10;
      return (0, Kd.Clamp)(md, .1, 10)
    }

    function yd(dd, Od) {
      const md = hd.j.TransformNormal(dd, Nd),
        Wd = hd.j.TransformNormal(Od, Nd),
        Fd = hd.d.FromArray([Hd(Wd.x, md.x), 0, 0, 0, 0, Hd(Wd.y, md.y), 0, 0, 0, 0, Hd(Wd.z, md.z), 0, 0, 0, 0, 1]);
      return Nd.multiply(Fd).multiply(qd)
    }
    const bd = new hd.j(.95047, 1, 1.08883),
      Td = hd.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(yd(bd, od(6500, 0))),
      pd = hd.d.Invert(Td),
      Yd = hd.j.TransformNormal(new hd.j(1, 1, 1), Td);
    var gd = md(41948),
      wd = md(42052);
    let Ed = (() => {
      var dd;
      let Od, md, Rd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd = [],
        bd = [],
        Td = [],
        pd = [],
        Yd = [],
        Ed = [],
        Jd = [],
        Ud = [],
        xd = [],
        Bd = [],
        Sd = [],
        sd = [],
        ud = [],
        Vd = [],
        Ad = [],
        rd = [],
        Gd = [],
        nd = [],
        Ld = [],
        Pd = [],
        zd = [],
        cd = [],
        jd = [],
        Dd = [];
      return dd = class {
        constructor() {
          this._dirty = !0, this._tempColor = new Xd.f(0, 0, 0, 0), this._globalCurve = new Xd.f(0, 0, 0, 0), this._highlightsCurve = new Xd.f(0, 0, 0, 0), this._midtonesCurve = new Xd.f(0, 0, 0, 0), this._shadowsCurve = new Xd.f(0, 0, 0, 0), this._positiveCurve = new Xd.f(0, 0, 0, 0), this._negativeCurve = new Xd.f(0, 0, 0, 0), this._globalHue = (0, Wd.k)(this, yd, 30), this._globalDensity = ((0, Wd.k)(this, bd), (0, Wd.k)(this, Td, 0)), this._globalSaturation = ((0, Wd.k)(this, pd), (0, Wd.k)(this, Yd, 0)), this._globalExposure = ((0, Wd.k)(this, Ed), (0, Wd.k)(this, Jd, 0)), this._highlightsHue = ((0, Wd.k)(this, Ud), (0, Wd.k)(this, xd, 30)), this._highlightsDensity = ((0, Wd.k)(this, Bd), (0, Wd.k)(this, Sd, 0)), this._highlightsSaturation = ((0, Wd.k)(this, sd), (0, Wd.k)(this, ud, 0)), this._highlightsExposure = ((0, Wd.k)(this, Vd), (0, Wd.k)(this, Ad, 0)), this._midtonesHue = ((0, Wd.k)(this, rd), (0, Wd.k)(this, Gd, 30)), this._midtonesDensity = ((0, Wd.k)(this, nd), (0, Wd.k)(this, Ld, 0)), this._midtonesSaturation = ((0, Wd.k)(this, Pd), (0, Wd.k)(this, zd, 0)), this._midtonesExposure = ((0, Wd.k)(this, cd), (0, Wd.k)(this, jd, 0)), this._shadowsHue = ((0, Wd.k)(this, Dd), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(dd) {
          this._globalHue = dd, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(dd) {
          this._globalDensity = dd, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(dd) {
          this._globalSaturation = dd, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(dd) {
          this._globalExposure = dd, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(dd) {
          this._highlightsHue = dd, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(dd) {
          this._highlightsDensity = dd, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(dd) {
          this._highlightsSaturation = dd, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(dd) {
          this._highlightsExposure = dd, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(dd) {
          this._midtonesHue = dd, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(dd) {
          this._midtonesDensity = dd, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(dd) {
          this._midtonesSaturation = dd, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(dd) {
          this._midtonesExposure = dd, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(dd) {
          this._shadowsHue = dd, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(dd) {
          this._shadowsDensity = dd, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(dd) {
          this._shadowsSaturation = dd, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(dd) {
          this._shadowsExposure = dd, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(Od, md, Wd, Fd, Rd) {
          null != Od && (Od = dd._Clamp(Od, 0, 360), md = dd._Clamp(md, -100, 100), Wd = dd._Clamp(Wd, -100, 100), Fd = dd._Clamp(Fd, -100, 100), md = dd._ApplyColorGradingSliderNonlinear(md), md *= .5, Fd = dd._ApplyColorGradingSliderNonlinear(Fd), md < 0 && (md *= -1, Od = (Od + 180) % 360), dd._FromHSBToRef(Od, md, 50 + .25 * Fd, Rd), Rd.scaleToRef(2, Rd), Rd.a = 1 + .01 * Wd)
        }
        static _ApplyColorGradingSliderNonlinear(dd) {
          dd /= 100;
          let Od = Math.abs(dd);
          return Od = Math.pow(Od, 2), dd < 0 && (Od *= -1), Od *= 100, Od
        }
        static _FromHSBToRef(Od, md, Wd, Fd) {
          let Rd = dd._Clamp(Od, 0, 360);
          const Xd = dd._Clamp(md / 100, 0, 1),
            Kd = dd._Clamp(Wd / 100, 0, 1);
          if (0 === Xd) Fd.r = Kd, Fd.g = Kd, Fd.b = Kd;
          else {
            Rd /= 60;
            const dd = Math.floor(Rd),
              Od = Rd - dd,
              md = Kd * (1 - Xd),
              Wd = Kd * (1 - Xd * Od),
              hd = Kd * (1 - Xd * (1 - Od));
            switch (dd) {
              case 0:
                Fd.r = Kd, Fd.g = hd, Fd.b = md;
                break;
              case 1:
                Fd.r = Wd, Fd.g = Kd, Fd.b = md;
                break;
              case 2:
                Fd.r = md, Fd.g = Kd, Fd.b = hd;
                break;
              case 3:
                Fd.r = md, Fd.g = Wd, Fd.b = Kd;
                break;
              case 4:
                Fd.r = hd, Fd.g = md, Fd.b = Kd;
                break;
              default:
                Fd.r = Kd, Fd.g = md, Fd.b = Wd
            }
          }
          Fd.a = 1
        }
        static _Clamp(dd, Od, md) {
          return Math.min(Math.max(dd, Od), md)
        }
        clone() {
          return gd.b.Clone((() => new dd), this)
        }
        serialize() {
          return gd.b.Serialize(this)
        }
        _bind(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), dd && (dd.setFloat4(Od, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), dd.setFloat4(md, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), dd.setFloat4(Wd, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const Xd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Od = [(0, Fd.E)()], md = [(0, Fd.E)()], Rd = [(0, Fd.E)()], Kd = [(0, Fd.E)()], hd = [(0, Fd.E)()], vd = [(0, Fd.E)()], Qd = [(0, Fd.E)()], td = [(0, Fd.E)()], od = [(0, Fd.E)()], Nd = [(0, Fd.E)()], qd = [(0, Fd.E)()], Hd = [(0, Fd.E)()], (0, Wd.h)(null, null, Od, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: dd => "_globalHue" in dd,
            get: dd => dd._globalHue,
            set: (dd, Od) => {
              dd._globalHue = Od
            }
          },
          metadata: Xd
        }, yd, bd), (0, Wd.h)(null, null, md, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "_globalDensity" in dd,
            get: dd => dd._globalDensity,
            set: (dd, Od) => {
              dd._globalDensity = Od
            }
          },
          metadata: Xd
        }, Td, pd), (0, Wd.h)(null, null, Rd, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: dd => "_globalSaturation" in dd,
            get: dd => dd._globalSaturation,
            set: (dd, Od) => {
              dd._globalSaturation = Od
            }
          },
          metadata: Xd
        }, Yd, Ed), (0, Wd.h)(null, null, Kd, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: dd => "_globalExposure" in dd,
            get: dd => dd._globalExposure,
            set: (dd, Od) => {
              dd._globalExposure = Od
            }
          },
          metadata: Xd
        }, Jd, Ud), (0, Wd.h)(null, null, hd, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: dd => "_highlightsHue" in dd,
            get: dd => dd._highlightsHue,
            set: (dd, Od) => {
              dd._highlightsHue = Od
            }
          },
          metadata: Xd
        }, xd, Bd), (0, Wd.h)(null, null, vd, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "_highlightsDensity" in dd,
            get: dd => dd._highlightsDensity,
            set: (dd, Od) => {
              dd._highlightsDensity = Od
            }
          },
          metadata: Xd
        }, Sd, sd), (0, Wd.h)(null, null, Qd, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: dd => "_highlightsSaturation" in dd,
            get: dd => dd._highlightsSaturation,
            set: (dd, Od) => {
              dd._highlightsSaturation = Od
            }
          },
          metadata: Xd
        }, ud, Vd), (0, Wd.h)(null, null, td, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: dd => "_highlightsExposure" in dd,
            get: dd => dd._highlightsExposure,
            set: (dd, Od) => {
              dd._highlightsExposure = Od
            }
          },
          metadata: Xd
        }, Ad, rd), (0, Wd.h)(null, null, od, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: dd => "_midtonesHue" in dd,
            get: dd => dd._midtonesHue,
            set: (dd, Od) => {
              dd._midtonesHue = Od
            }
          },
          metadata: Xd
        }, Gd, nd), (0, Wd.h)(null, null, Nd, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "_midtonesDensity" in dd,
            get: dd => dd._midtonesDensity,
            set: (dd, Od) => {
              dd._midtonesDensity = Od
            }
          },
          metadata: Xd
        }, Ld, Pd), (0, Wd.h)(null, null, qd, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: dd => "_midtonesSaturation" in dd,
            get: dd => dd._midtonesSaturation,
            set: (dd, Od) => {
              dd._midtonesSaturation = Od
            }
          },
          metadata: Xd
        }, zd, cd), (0, Wd.h)(null, null, Hd, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: dd => "_midtonesExposure" in dd,
            get: dd => dd._midtonesExposure,
            set: (dd, Od) => {
              dd._midtonesExposure = Od
            }
          },
          metadata: Xd
        }, jd, Dd), Xd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xd
        })
      })(), dd.PrepareUniforms = wd.e, dd
    })();

    function Jd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      dd._bind(Od, md, Wd, Fd)
    }
    var Ud = md(41859),
      xd = md(42060),
      Bd = md(38669);
    let Sd = (() => {
        var dd;
        let Od, md, vd, Nd, qd, Hd, bd, wd, Bd, Sd, sd, ud, Vd, Ad, rd, Gd, nd, Ld, Pd, zd, cd, jd, Dd, ed, Id, ld, Cd, Zd, kd = [],
          fd = [],
          Md = [],
          dO = [],
          OO = [],
          mO = [],
          WO = [],
          FO = [],
          RO = [],
          XO = [],
          KO = [],
          hO = [],
          vO = [],
          QO = [],
          tO = [],
          oO = [],
          NO = [],
          qO = [],
          HO = [],
          yO = [],
          bO = [],
          TO = [],
          pO = [],
          YO = [],
          gO = [],
          wO = [],
          aO = [],
          EO = [],
          JO = [],
          UO = [],
          xO = [],
          BO = [],
          SO = [],
          sO = [],
          uO = [],
          VO = [],
          iO = [],
          AO = [],
          rO = [],
          GO = [],
          nO = [],
          LO = [],
          PO = [],
          zO = [],
          cO = [],
          jO = [],
          DO = [],
          eO = [],
          IO = [],
          lO = [],
          CO = [],
          ZO = [],
          kO = [],
          fO = [],
          MO = [],
          dm = [];
        return dd = class {
          constructor() {
            this.colorCurves = (0, Wd.k)(this, kd, new Ed), this._colorCurvesEnabled = ((0, Wd.k)(this, fd), (0, Wd.k)(this, Md, !1)), this._colorGradingTexture = ((0, Wd.k)(this, dO), (0, Wd.k)(this, OO, void 0)), this._colorGradingEnabled = ((0, Wd.k)(this, mO), (0, Wd.k)(this, WO, !1)), this._colorGradingWithGreenDepth = ((0, Wd.k)(this, FO), (0, Wd.k)(this, RO, !0)), this._colorGradingBGR = ((0, Wd.k)(this, XO), (0, Wd.k)(this, KO, !0)), this._exposure = ((0, Wd.k)(this, hO), (0, Wd.k)(this, vO, 1)), this._toneMappingEnabled = ((0, Wd.k)(this, QO), (0, Wd.k)(this, tO, !1)), this._toneMappingType = ((0, Wd.k)(this, oO), (0, Wd.k)(this, NO, dd.TONEMAPPING_STANDARD)), this._contrast = ((0, Wd.k)(this, qO), (0, Wd.k)(this, HO, 1)), this._whiteBalanceEnabled = ((0, Wd.k)(this, yO), (0, Wd.k)(this, bO, !1)), this._temperature = ((0, Wd.k)(this, TO), (0, Wd.k)(this, pO, 6500)), this._tint = ((0, Wd.k)(this, YO), (0, Wd.k)(this, gO, 0)), this._whiteBalanceMatrix = ((0, Wd.k)(this, wO), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, Wd.k)(this, aO, 0), this.vignetteCenterX = ((0, Wd.k)(this, EO), (0, Wd.k)(this, JO, 0)), this.vignetteCenterY = ((0, Wd.k)(this, UO), (0, Wd.k)(this, xO, 0)), this.vignetteWeight = ((0, Wd.k)(this, BO), (0, Wd.k)(this, SO, 1.5)), this.vignetteColor = ((0, Wd.k)(this, sO), (0, Wd.k)(this, uO, new Xd.f(0, 0, 0, 0))), this.vignetteCameraFov = ((0, Wd.k)(this, VO), (0, Wd.k)(this, iO, .5)), this._vignetteBlendMode = ((0, Wd.k)(this, AO), (0, Wd.k)(this, rO, dd.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, Wd.k)(this, GO), (0, Wd.k)(this, nO, !1)), this._ditheringEnabled = ((0, Wd.k)(this, LO), (0, Wd.k)(this, PO, !1)), this._ditheringIntensity = ((0, Wd.k)(this, zO), (0, Wd.k)(this, cO, 1 / 255)), this._skipFinalColorClamp = ((0, Wd.k)(this, jO), (0, Wd.k)(this, DO, !1)), this._applyByPostProcess = ((0, Wd.k)(this, eO), (0, Wd.k)(this, IO, !1)), this._isEnabled = ((0, Wd.k)(this, lO), (0, Wd.k)(this, CO, !0)), this.outputTextureWidth = ((0, Wd.k)(this, ZO), (0, Wd.k)(this, kO, 0)), this.outputTextureHeight = ((0, Wd.k)(this, fO), (0, Wd.k)(this, MO, 0)), this.onUpdateParameters = ((0, Wd.k)(this, dm), new Rd.c)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(dd) {
            this._colorCurvesEnabled !== dd && (this._colorCurvesEnabled = dd, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(dd) {
            this._colorGradingTexture !== dd && (this._colorGradingTexture = dd, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(dd) {
            this._colorGradingEnabled !== dd && (this._colorGradingEnabled = dd, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(dd) {
            this._colorGradingWithGreenDepth !== dd && (this._colorGradingWithGreenDepth = dd, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(dd) {
            this._colorGradingBGR !== dd && (this._colorGradingBGR = dd, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(dd) {
            this._exposure !== dd && (this._exposure = dd, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(dd) {
            this._toneMappingEnabled !== dd && (this._toneMappingEnabled = dd, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(dd) {
            this._toneMappingType !== dd && (this._toneMappingType = dd, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(dd) {
            this._contrast !== dd && (this._contrast = dd, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(dd) {
            this._whiteBalanceEnabled !== dd && (this._whiteBalanceEnabled = dd, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(dd) {
            dd = Number.isNaN(dd) ? Qd : Math.max(dd, Qd), this._temperature !== dd && (this._temperature = dd, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(dd) {
            dd = (0, Kd.Clamp)(dd, -150, td), this._tint !== dd && (this._tint = dd, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(dd, Od) {
              const md = yd(od(dd, Od), Yd),
                Wd = Td.multiply(md).multiply(pd);
              return hd.d.GetAsMatrix3x3(Wd)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(dd) {
            this.vignetteCenterY = dd
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(dd) {
            this.vignetteCenterX = dd
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(dd) {
            this._vignetteBlendMode !== dd && (this._vignetteBlendMode = dd, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(dd) {
            this._vignetteEnabled !== dd && (this._vignetteEnabled = dd, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(dd) {
            this._ditheringEnabled !== dd && (this._ditheringEnabled = dd, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(dd) {
            this._ditheringIntensity !== dd && (this._ditheringIntensity = dd, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(dd) {
            this._skipFinalColorClamp !== dd && (this._skipFinalColorClamp = dd, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(dd) {
            this._applyByPostProcess !== dd && (this._applyByPostProcess = dd, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(dd) {
            this._isEnabled !== dd && (this._isEnabled = dd, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(Od) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return Od.WHITEBALANCE = !1, Od.VIGNETTE = !1, Od.TONEMAPPING = 0, Od.CONTRAST = !1, Od.EXPOSURE = !1, Od.COLORCURVES = !1, Od.COLORGRADING = !1, Od.COLORGRADING3D = !1, Od.DITHER = !1, Od.IMAGEPROCESSING = !1, Od.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(Od.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (Od.WHITEBALANCE = this._whiteBalanceEnabled, Od.VIGNETTE = this.vignetteEnabled, Od.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === dd._VIGNETTEMODE_MULTIPLY, Od.VIGNETTEBLENDMODEOPAQUE = !Od.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case dd.TONEMAPPING_KHR_PBR_NEUTRAL:
                Od.TONEMAPPING = 3;
                break;
              case dd.TONEMAPPING_ACES:
                Od.TONEMAPPING = 2;
                break;
              default:
                Od.TONEMAPPING = 1
            } else Od.TONEMAPPING = 0;
            Od.CONTRAST = 1 !== this.contrast, Od.EXPOSURE = 1 !== this.exposure, Od.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, Od.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, Od.COLORGRADING ? Od.COLORGRADING3D = this.colorGradingTexture.is3D : Od.COLORGRADING3D = !1, Od.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, Od.SAMPLER3DBGRMAP = this.colorGradingBGR, Od.DITHER = this._ditheringEnabled, Od.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, Od.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, Od.IMAGEPROCESSING = Od.WHITEBALANCE || Od.VIGNETTE || !!Od.TONEMAPPING || Od.CONTRAST || Od.EXPOSURE || Od.COLORCURVES || Od.COLORGRADING || Od.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(dd, Od) {
            if (this._whiteBalanceEnabled && dd.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && Jd(this.colorCurves, dd), this._vignetteEnabled || this._ditheringEnabled) {
              const md = 1 / (this.outputTextureWidth || dd.Iq().getRenderWidth()),
                Wd = 1 / (this.outputTextureHeight || dd.Iq().getRenderHeight());
              if (dd.setFloat2("vInverseScreenSize", md, Wd), this._ditheringEnabled && dd.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const Fd = null != Od ? Od : Wd / md;
                let Rd = Math.tan(.5 * this.vignetteCameraFov),
                  Xd = Rd * Fd;
                const Kd = Math.sqrt(Xd * Rd);
                Xd = (0, Ud.j)(Xd, Kd, this.vignetteStretch), Rd = (0, Ud.j)(Rd, Kd, this.vignetteStretch), dd.setFloat4("vignetteSettings1", Xd, Rd, -Xd * this.vignetteCenterX, -Rd * this.vignetteCenterY);
                const hd = -2 * this.vignetteWeight;
                dd.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, hd)
              }
            }
            if (dd.setFloat("exposureLinear", this.exposure), dd.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              dd.setTexture("txColorTransform", this.colorGradingTexture);
              const Od = this.colorGradingTexture.getSize().height;
              dd.setFloat4("colorTransformSettings", (Od - 1) / Od, .5 / Od, Od, this.colorGradingTexture.level)
            }
          }
          clone() {
            return gd.b.Clone((() => new dd), this)
          }
          serialize() {
            return gd.b.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Od = [(0, Fd.k)()], md = [(0, Fd.E)()], vd = [(0, Fd.x)("colorGradingTexture")], Nd = [(0, Fd.E)()], qd = [(0, Fd.E)()], Hd = [(0, Fd.E)()], bd = [(0, Fd.E)()], wd = [(0, Fd.E)()], Bd = [(0, Fd.E)()], Sd = [(0, Fd.E)()], sd = [(0, Fd.E)()], ud = [(0, Fd.E)()], Vd = [(0, Fd.E)()], Ad = [(0, Fd.E)()], rd = [(0, Fd.E)()], Gd = [(0, Fd.E)()], nd = [(0, Fd.E)()], Ld = [(0, Fd.n)()], Pd = [(0, Fd.E)()], zd = [(0, Fd.E)()], cd = [(0, Fd.E)()], jd = [(0, Fd.E)()], Dd = [(0, Fd.E)()], ed = [(0, Fd.E)()], Id = [(0, Fd.E)()], ld = [(0, Fd.E)()], Cd = [(0, Fd.E)()], Zd = [(0, Fd.E)()], (0, Wd.h)(null, null, Od, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: dd => "colorCurves" in dd,
              get: dd => dd.colorCurves,
              set: (dd, Od) => {
                dd.colorCurves = Od
              }
            },
            metadata: Rd
          }, kd, fd), (0, Wd.h)(null, null, md, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: dd => "_colorCurvesEnabled" in dd,
              get: dd => dd._colorCurvesEnabled,
              set: (dd, Od) => {
                dd._colorCurvesEnabled = Od
              }
            },
            metadata: Rd
          }, Md, dO), (0, Wd.h)(null, null, vd, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_colorGradingTexture" in dd,
              get: dd => dd._colorGradingTexture,
              set: (dd, Od) => {
                dd._colorGradingTexture = Od
              }
            },
            metadata: Rd
          }, OO, mO), (0, Wd.h)(null, null, Nd, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: dd => "_colorGradingEnabled" in dd,
              get: dd => dd._colorGradingEnabled,
              set: (dd, Od) => {
                dd._colorGradingEnabled = Od
              }
            },
            metadata: Rd
          }, WO, FO), (0, Wd.h)(null, null, qd, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: dd => "_colorGradingWithGreenDepth" in dd,
              get: dd => dd._colorGradingWithGreenDepth,
              set: (dd, Od) => {
                dd._colorGradingWithGreenDepth = Od
              }
            },
            metadata: Rd
          }, RO, XO), (0, Wd.h)(null, null, Hd, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: dd => "_colorGradingBGR" in dd,
              get: dd => dd._colorGradingBGR,
              set: (dd, Od) => {
                dd._colorGradingBGR = Od
              }
            },
            metadata: Rd
          }, KO, hO), (0, Wd.h)(null, null, bd, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: dd => "_exposure" in dd,
              get: dd => dd._exposure,
              set: (dd, Od) => {
                dd._exposure = Od
              }
            },
            metadata: Rd
          }, vO, QO), (0, Wd.h)(null, null, wd, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: dd => "_toneMappingEnabled" in dd,
              get: dd => dd._toneMappingEnabled,
              set: (dd, Od) => {
                dd._toneMappingEnabled = Od
              }
            },
            metadata: Rd
          }, tO, oO), (0, Wd.h)(null, null, Bd, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: dd => "_toneMappingType" in dd,
              get: dd => dd._toneMappingType,
              set: (dd, Od) => {
                dd._toneMappingType = Od
              }
            },
            metadata: Rd
          }, NO, qO), (0, Wd.h)(null, null, Sd, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: dd => "_contrast" in dd,
              get: dd => dd._contrast,
              set: (dd, Od) => {
                dd._contrast = Od
              }
            },
            metadata: Rd
          }, HO, yO), (0, Wd.h)(null, null, sd, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: dd => "_whiteBalanceEnabled" in dd,
              get: dd => dd._whiteBalanceEnabled,
              set: (dd, Od) => {
                dd._whiteBalanceEnabled = Od
              }
            },
            metadata: Rd
          }, bO, TO), (0, Wd.h)(null, null, ud, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: dd => "_temperature" in dd,
              get: dd => dd._temperature,
              set: (dd, Od) => {
                dd._temperature = Od
              }
            },
            metadata: Rd
          }, pO, YO), (0, Wd.h)(null, null, Vd, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: dd => "_tint" in dd,
              get: dd => dd._tint,
              set: (dd, Od) => {
                dd._tint = Od
              }
            },
            metadata: Rd
          }, gO, wO), (0, Wd.h)(null, null, Ad, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: dd => "vignetteStretch" in dd,
              get: dd => dd.vignetteStretch,
              set: (dd, Od) => {
                dd.vignetteStretch = Od
              }
            },
            metadata: Rd
          }, aO, EO), (0, Wd.h)(null, null, rd, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: dd => "vignetteCenterX" in dd,
              get: dd => dd.vignetteCenterX,
              set: (dd, Od) => {
                dd.vignetteCenterX = Od
              }
            },
            metadata: Rd
          }, JO, UO), (0, Wd.h)(null, null, Gd, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: dd => "vignetteCenterY" in dd,
              get: dd => dd.vignetteCenterY,
              set: (dd, Od) => {
                dd.vignetteCenterY = Od
              }
            },
            metadata: Rd
          }, xO, BO), (0, Wd.h)(null, null, nd, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "vignetteWeight" in dd,
              get: dd => dd.vignetteWeight,
              set: (dd, Od) => {
                dd.vignetteWeight = Od
              }
            },
            metadata: Rd
          }, SO, sO), (0, Wd.h)(null, null, Ld, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "vignetteColor" in dd,
              get: dd => dd.vignetteColor,
              set: (dd, Od) => {
                dd.vignetteColor = Od
              }
            },
            metadata: Rd
          }, uO, VO), (0, Wd.h)(null, null, Pd, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: dd => "vignetteCameraFov" in dd,
              get: dd => dd.vignetteCameraFov,
              set: (dd, Od) => {
                dd.vignetteCameraFov = Od
              }
            },
            metadata: Rd
          }, iO, AO), (0, Wd.h)(null, null, zd, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "_vignetteBlendMode" in dd,
              get: dd => dd._vignetteBlendMode,
              set: (dd, Od) => {
                dd._vignetteBlendMode = Od
              }
            },
            metadata: Rd
          }, rO, GO), (0, Wd.h)(null, null, cd, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: dd => "_vignetteEnabled" in dd,
              get: dd => dd._vignetteEnabled,
              set: (dd, Od) => {
                dd._vignetteEnabled = Od
              }
            },
            metadata: Rd
          }, nO, LO), (0, Wd.h)(null, null, jd, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: dd => "_ditheringEnabled" in dd,
              get: dd => dd._ditheringEnabled,
              set: (dd, Od) => {
                dd._ditheringEnabled = Od
              }
            },
            metadata: Rd
          }, PO, zO), (0, Wd.h)(null, null, Dd, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: dd => "_ditheringIntensity" in dd,
              get: dd => dd._ditheringIntensity,
              set: (dd, Od) => {
                dd._ditheringIntensity = Od
              }
            },
            metadata: Rd
          }, cO, jO), (0, Wd.h)(null, null, ed, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: dd => "_skipFinalColorClamp" in dd,
              get: dd => dd._skipFinalColorClamp,
              set: (dd, Od) => {
                dd._skipFinalColorClamp = Od
              }
            },
            metadata: Rd
          }, DO, eO), (0, Wd.h)(null, null, Id, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: dd => "_applyByPostProcess" in dd,
              get: dd => dd._applyByPostProcess,
              set: (dd, Od) => {
                dd._applyByPostProcess = Od
              }
            },
            metadata: Rd
          }, IO, lO), (0, Wd.h)(null, null, ld, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: dd => "_isEnabled" in dd,
              get: dd => dd._isEnabled,
              set: (dd, Od) => {
                dd._isEnabled = Od
              }
            },
            metadata: Rd
          }, CO, ZO), (0, Wd.h)(null, null, Cd, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: dd => "outputTextureWidth" in dd,
              get: dd => dd.outputTextureWidth,
              set: (dd, Od) => {
                dd.outputTextureWidth = Od
              }
            },
            metadata: Rd
          }, kO, fO), (0, Wd.h)(null, null, Zd, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "outputTextureHeight" in dd,
              get: dd => dd.outputTextureHeight,
              set: (dd, Od) => {
                dd.outputTextureHeight = Od
              }
            },
            metadata: Rd
          }, MO, dm), Rd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Rd
          })
        })(), dd.TONEMAPPING_STANDARD = 0, dd.TONEMAPPING_ACES = 1, dd.TONEMAPPING_KHR_PBR_NEUTRAL = 2, dd.PrepareUniforms = xd.g, dd.PrepareSamplers = xd.c, dd._VIGNETTEMODE_MULTIPLY = 0, dd._VIGNETTEMODE_OPAQUE = 1, dd
      })(),
      sd = !1;

    function ud(dd) {
      const Od = gd.b.Parse((() => new Sd), dd, null, null);
      return void 0 !== dd.vignetteCentreX && (Od.vignetteCenterX = dd.vignetteCentreX), void 0 !== dd.vignetteCentreY && (Od.vignetteCenterY = dd.vignetteCentreY), Od
    }

    function Vd() {
      sd || (sd = !0, Sd.Parse = ud, gd.b._ImageProcessingConfigurationParser = ud, (0, Bd.e)("BABYLON.ImageProcessingConfiguration", Sd))
    }
  },
  42065: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    var Wd = md(40262),
      Fd = md(42029);
    class Rd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 ? arguments[3] : void 0,
          Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Rd = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = dd, this._noUBO = !dd.supportsUniformBuffers || Fd, this._dynamic = md, this._name = Wd ?? "no-name", this._data = Od || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === Rd && this._engine._features.trackUbosInFrame || !0 === Rd) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.Idd = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.Idd = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
      }
      get useUbo() {
        return !this._noUBO
      }
      get isSync() {
        return !this._needSync
      }
      isDynamic() {
        return this._dynamic
      }
      getData() {
        return this._bufferData
      }
      getBuffer() {
        return this._buffer
      }
      getUniformNames() {
        return this._uniformNames
      }
      _fillAlignment(dd) {
        let Od;
        if (Od = dd <= 2 ? dd : 4, this._uniformLocationPointer % Od !== 0) {
          const dd = this._uniformLocationPointer;
          this._uniformLocationPointer += Od - this._uniformLocationPointer % Od;
          const md = this._uniformLocationPointer - dd;
          for (let Od = 0; Od < md; Od++) this._data.push(0)
        }
      }
      addUniform(dd, Od) {
        let md, Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (Wd > 0 && "number" === typeof Od && (this._uniformArraySizes[dd] = {
            strideSize: Od,
            arraySize: Wd
          }), void 0 === this._uniformLocations[dd] && (this._uniformNames.push(dd), !this._noUBO)) {
          if (Wd > 0) {
            if (Od instanceof Array) throw "addUniform should not be use with Array in UBO: " + dd;
            if (this._fillAlignment(4), 16 == Od) Od *= Wd;
            else {
              Od = Od * Wd + (4 - Od) * Wd
            }
            md = [];
            for (let dd = 0; dd < Od; dd++) md.push(0)
          } else {
            if (Od instanceof Array) md = Od, Od = md.length;
            else {
              md = [];
              for (let dd = 0; dd < Od; dd++) md.push(0)
            }
            this._fillAlignment(Od)
          }
          this._uniformSizes[dd] = Od, this._uniformLocations[dd] = this._uniformLocationPointer, this._uniformLocationPointer += Od;
          for (let dd = 0; dd < Od; dd++) this._data.push(md[dd]);
          this._needSync = !0
        }
      }
      addMatrix(dd, Od) {
        this.addUniform(dd, Array.prototype.slice.call(Od.RRd()))
      }
      addFloat2(dd, Od, md) {
        const Wd = [Od, md];
        this.addUniform(dd, Wd)
      }
      addFloat3(dd, Od, md, Wd) {
        const Fd = [Od, md, Wd];
        this.addUniform(dd, Fd)
      }
      addColor3(dd, Od) {
        const md = [Od.r, Od.g, Od.b];
        this.addUniform(dd, md)
      }
      addColor4(dd, Od, md) {
        const Wd = [Od.r, Od.g, Od.b, md];
        this.addUniform(dd, Wd)
      }
      addVector3(dd, Od) {
        const md = [Od.x, Od.y, Od.z];
        this.addUniform(dd, md)
      }
      addMatrix3x3(dd) {
        this.addUniform(dd, 12)
      }
      addMatrix2x2(dd) {
        this.addUniform(dd, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const dd = [];
        let Od = 0;
        for (const md in this._uniformLocations)
          if (dd.push(md), 10 === ++Od) break;
        return dd.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const dd of this._ownerListsBySlot.values()) this._removeOwnerBacklink(dd);
        this._ownerListsBySlot = new Map, this._slotByOwner = new WeakMap, this._slotFrameId = [], this._ownerCount = 0, this._freeSlots = [], this._slotGeneration = []
      }
      get _numBuffers() {
        return this._buffers.length
      }
      get _indexBuffer() {
        return this._bufferIndex
      }
      get name() {
        return this._name
      }
      set name(dd) {
        this._name = dd
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(dd, Od) {
        for (let md = 0; md < dd.length; ++md)
          if (dd[md] !== Od[md]) return !1;
        return !0
      }
      _copyBuffer(dd, Od) {
        for (let md = 0; md < dd.length; ++md) Od[md] = dd[md]
      }
      update() {
        if (!this._noUBO)
          if (this.bindUniformBuffer(), this._buffer)
            if (this._dynamic || this._needSync) {
              if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
                if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) return this._needSync = !1, void(this._createBufferOnWrite = this._trackUBOsInFrame);
                this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1])
              }
              this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData), this._needSync = !1, this._createBufferOnWrite = this._trackUBOsInFrame
            } else this._createBufferOnWrite = this._trackUBOsInFrame;
        else this.create()
      }
      _updateOwnerKeyed(dd) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let Od = this._slotByOwner.get(dd);
        if (void 0 === Od && (Od = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(dd, Od), this._ownerCount++, dd._uniformBuffersWithOwnedSlot || (dd._uniformBuffersWithOwnedSlot = []), dd._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(Od, dd._uniformBuffersWithOwnedSlot)), this._slotGeneration[Od] === this._dataGeneration) return this._bufferIndex = Od, this._buffer = this._buffers[Od][0], this.bindUniformBuffer(), this._slotFrameId[Od] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const md = this._buffers[Od][1];
        this._slotFrameId[Od] === this._currentFrameId && md && !this._buffersEqual(this._bufferData, md) && (Od = this._takeFreeSlot(!1)), this._bufferIndex = Od, this._buffer = this._buffers[Od][0], this.bindUniformBuffer();
        const Wd = this._buffers[Od][1];
        Wd && this._buffersEqual(this._bufferData, Wd) || (Wd && this._copyBuffer(this._bufferData, Wd), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[Od] = this._currentFrameId, this._slotGeneration[Od] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(dd) {
        for (let md = 0; md < this._freeSlots.length; ++md) {
          const Od = this._freeSlots[md];
          if (this._slotFrameId[Od] !== this._currentFrameId) return dd && (this._freeSlots[md] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), Od
        }
        this._rebuild();
        const Od = this._buffers.length - 1;
        return dd || this._freeSlots.push(Od), Od
      }
      _releaseOwnerSlot(dd) {
        const Od = this._slotByOwner?.get(dd);
        if (void 0 === Od) return;
        this._slotByOwner.delete(dd);
        const md = this._ownerListsBySlot.get(Od);
        md && (this._removeOwnerBacklink(md), this._ownerListsBySlot.delete(Od)), this._ownerCount--, this._freeSlots.push(Od)
      }
      _removeOwnerBacklink(dd) {
        const Od = dd.indexOf(this); - 1 !== Od && (dd[Od] = dd[dd.length - 1], dd.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(dd, Od, md) {
        this._checkNewFrame();
        let Fd = this._uniformLocations[dd];
        if (void 0 === Fd) {
          if (this._buffer) return void Wd.c.Error("Cannot add an uniform after UBO has been created. uniformName=" + dd);
          this.addUniform(dd, md), Fd = this._uniformLocations[dd]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let dd = 0; dd < md; dd++) this._bufferData[Fd + dd] = Od[dd];
          this._dataGeneration++
        } else {
          let dd = !1;
          for (let Wd = 0; Wd < md; Wd++)(16 === md && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[Fd + Wd] !== Math.fround(Od[Wd])) && (dd = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Fd + Wd] = Od[Wd]);
          this._needSync = this._needSync || dd, dd && this._dataGeneration++
        }
      }
      updateUniformArray(dd, Od, md) {
        this._checkNewFrame();
        const Rd = this._uniformLocations[dd];
        if (void 0 === Rd) return void Wd.c.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const Xd = this._uniformArraySizes[dd];
        if (this._dynamic) {
          for (let dd = 0; dd < md; dd++) this._bufferData[Rd + dd] = Od[dd];
          this._dataGeneration++
        } else {
          let dd = !1,
            Wd = 0,
            Kd = 0;
          for (let hd = 0; hd < md; hd++)
            if (this._bufferData[Rd + 4 * Kd + Wd] !== Fd.g.FloatRound(Od[hd]) && (dd = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Rd + 4 * Kd + Wd] = Od[hd]), Wd++, Wd === Xd.strideSize) {
              for (; Wd < 4; Wd++) this._bufferData[Rd + 4 * Kd + Wd] = 0;
              Wd = 0, Kd++
            } this._needSync = this._needSync || dd, dd && this._dataGeneration++
        }
      }
      _cacheMatrix(dd, Od) {
        this._checkNewFrame();
        const md = this._valueCache[dd],
          Wd = Od.updateFlag;
        return (void 0 === md || md !== Wd) && (this._valueCache[dd] = Wd, !0)
      }
      _updateMatrix3x3ForUniform(dd, Od) {
        for (let md = 0; md < 3; md++) Rd._TempBuffer[4 * md] = Od[3 * md], Rd._TempBuffer[4 * md + 1] = Od[3 * md + 1], Rd._TempBuffer[4 * md + 2] = Od[3 * md + 2], Rd._TempBuffer[4 * md + 3] = 0;
        this.updateUniform(dd, Rd._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(dd, Od) {
        this._currentEffect.setMatrix3x3(dd, Od)
      }
      _updateMatrix2x2ForEffect(dd, Od) {
        this._currentEffect.setMatrix2x2(dd, Od)
      }
      _updateMatrix2x2ForUniform(dd, Od) {
        for (let md = 0; md < 2; md++) Rd._TempBuffer[4 * md] = Od[2 * md], Rd._TempBuffer[4 * md + 1] = Od[2 * md + 1], Rd._TempBuffer[4 * md + 2] = 0, Rd._TempBuffer[4 * md + 3] = 0;
        this.updateUniform(dd, Rd._TempBuffer, 8)
      }
      _updateFloatForEffect(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(dd + md, Od)
      }
      _updateFloatForUniform(dd, Od) {
        Rd._TempBuffer[0] = Od, this.updateUniform(dd, Rd._TempBuffer, 1)
      }
      _updateFloat2ForEffect(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(dd + Wd, Od, md)
      }
      _updateFloat2ForUniform(dd, Od, md) {
        Rd._TempBuffer[0] = Od, Rd._TempBuffer[1] = md, this.updateUniform(dd, Rd._TempBuffer, 2)
      }
      _updateFloat3ForEffect(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(dd + Fd, Od, md, Wd)
      }
      _updateFloat3ForUniform(dd, Od, md, Wd) {
        Rd._TempBuffer[0] = Od, Rd._TempBuffer[1] = md, Rd._TempBuffer[2] = Wd, this.updateUniform(dd, Rd._TempBuffer, 3)
      }
      _updateFloat4ForEffect(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(dd + Rd, Od, md, Wd, Fd)
      }
      _updateFloat4ForUniform(dd, Od, md, Wd, Fd) {
        Rd._TempBuffer[0] = Od, Rd._TempBuffer[1] = md, Rd._TempBuffer[2] = Wd, Rd._TempBuffer[3] = Fd, this.updateUniform(dd, Rd._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[dd]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(dd + md, Od);
            break;
          case 3:
            this._currentEffect.setFloatArray3(dd + md, Od);
            break;
          case 4:
            this._currentEffect.setFloatArray4(dd + md, Od);
            break;
          default:
            this._currentEffect.setFloatArray(dd + md, Od)
        }
      }
      _updateFloatArrayForUniform(dd, Od) {
        this.updateUniformArray(dd, Od, Od.length)
      }
      _updateArrayForEffect(dd, Od) {
        this._currentEffect.setArray(dd, Od)
      }
      _updateArrayForUniform(dd, Od) {
        this.updateUniformArray(dd, Od, Od.length)
      }
      _updateIntArrayForEffect(dd, Od) {
        this._currentEffect.setIntArray(dd, Od)
      }
      _updateIntArrayForUniform(dd, Od) {
        Rd._TempBufferInt32View.set(Od), this.updateUniformArray(dd, Rd._TempBuffer, Od.length)
      }
      _updateUIntArrayForEffect(dd, Od) {
        this._currentEffect.setUIntArray(dd, Od)
      }
      _updateUIntArrayForUniform(dd, Od) {
        Rd._TempBufferUInt32View.set(Od), this.updateUniformArray(dd, Rd._TempBuffer, Od.length)
      }
      _updateMatrixForEffect(dd, Od) {
        this._currentEffect.setMatrix(dd, Od)
      }
      _updateMatrixForUniform(dd, Od) {
        this._cacheMatrix(dd, Od) && this.updateUniform(dd, Od.RRd(), 16)
      }
      _updateMatricesForEffect(dd, Od) {
        this._currentEffect.setMatrices(dd, Od)
      }
      _updateMatricesForUniform(dd, Od) {
        this.updateUniform(dd, Od, Od.length)
      }
      _updateVector3ForEffect(dd, Od) {
        this._currentEffect.setVector3(dd, Od)
      }
      _updateVector3ForUniform(dd, Od) {
        Rd._TempBuffer[0] = Od.x, Rd._TempBuffer[1] = Od.y, Rd._TempBuffer[2] = Od.z, this.updateUniform(dd, Rd._TempBuffer, 3)
      }
      _updateVector4ForEffect(dd, Od) {
        this._currentEffect.setVector4(dd, Od)
      }
      _updateVector4ForUniform(dd, Od) {
        Rd._TempBuffer[0] = Od.x, Rd._TempBuffer[1] = Od.y, Rd._TempBuffer[2] = Od.z, Rd._TempBuffer[3] = Od.w, this.updateUniform(dd, Rd._TempBuffer, 4)
      }
      _updateColor3ForEffect(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(dd + md, Od)
      }
      _updateColor3ForUniform(dd, Od) {
        Rd._TempBuffer[0] = Od.r, Rd._TempBuffer[1] = Od.g, Rd._TempBuffer[2] = Od.b, this.updateUniform(dd, Rd._TempBuffer, 3)
      }
      _updateColor4ForEffect(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(dd + Wd, Od, md)
      }
      _updateDirectColor4ForEffect(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(dd + md, Od)
      }
      _updateColor4ForUniform(dd, Od, md) {
        Rd._TempBuffer[0] = Od.r, Rd._TempBuffer[1] = Od.g, Rd._TempBuffer[2] = Od.b, Rd._TempBuffer[3] = md, this.updateUniform(dd, Rd._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(dd, Od) {
        Rd._TempBuffer[0] = Od.r, Rd._TempBuffer[1] = Od.g, Rd._TempBuffer[2] = Od.b, Rd._TempBuffer[3] = Od.a, this.updateUniform(dd, Rd._TempBuffer, 4)
      }
      _updateIntForEffect(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(dd + md, Od)
      }
      _updateIntForUniform(dd, Od) {
        Rd._TempBufferInt32View[0] = Od, this.updateUniform(dd, Rd._TempBuffer, 1)
      }
      _updateInt2ForEffect(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(dd + Wd, Od, md)
      }
      _updateInt2ForUniform(dd, Od, md) {
        Rd._TempBufferInt32View[0] = Od, Rd._TempBufferInt32View[1] = md, this.updateUniform(dd, Rd._TempBuffer, 2)
      }
      _updateInt3ForEffect(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(dd + Fd, Od, md, Wd)
      }
      _updateInt3ForUniform(dd, Od, md, Wd) {
        Rd._TempBufferInt32View[0] = Od, Rd._TempBufferInt32View[1] = md, Rd._TempBufferInt32View[2] = Wd, this.updateUniform(dd, Rd._TempBuffer, 3)
      }
      _updateInt4ForEffect(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(dd + Rd, Od, md, Wd, Fd)
      }
      _updateInt4ForUniform(dd, Od, md, Wd, Fd) {
        Rd._TempBufferInt32View[0] = Od, Rd._TempBufferInt32View[1] = md, Rd._TempBufferInt32View[2] = Wd, Rd._TempBufferInt32View[3] = Fd, this.updateUniform(dd, Rd._TempBuffer, 4)
      }
      _updateUIntForEffect(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(dd + md, Od)
      }
      _updateUIntForUniform(dd, Od) {
        Rd._TempBufferUInt32View[0] = Od, this.updateUniform(dd, Rd._TempBuffer, 1)
      }
      _updateUInt2ForEffect(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(dd + Wd, Od, md)
      }
      _updateUInt2ForUniform(dd, Od, md) {
        Rd._TempBufferUInt32View[0] = Od, Rd._TempBufferUInt32View[1] = md, this.updateUniform(dd, Rd._TempBuffer, 2)
      }
      _updateUInt3ForEffect(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(dd + Fd, Od, md, Wd)
      }
      _updateUInt3ForUniform(dd, Od, md, Wd) {
        Rd._TempBufferUInt32View[0] = Od, Rd._TempBufferUInt32View[1] = md, Rd._TempBufferUInt32View[2] = Wd, this.updateUniform(dd, Rd._TempBuffer, 3)
      }
      _updateUInt4ForEffect(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(dd + Rd, Od, md, Wd, Fd)
      }
      _updateUInt4ForUniform(dd, Od, md, Wd, Fd) {
        Rd._TempBufferUInt32View[0] = Od, Rd._TempBufferUInt32View[1] = md, Rd._TempBufferUInt32View[2] = Wd, Rd._TempBufferUInt32View[3] = Fd, this.updateUniform(dd, Rd._TempBuffer, 4)
      }
      setTexture(dd, Od) {
        this._currentEffect.setTexture(dd, Od)
      }
      setTextureArray(dd, Od) {
        this._currentEffect.setTextureArray(dd, Od)
      }
      bindTexture(dd, Od) {
        this._currentEffect._bindTexture(dd, Od)
      }
      updateUniformDirectly(dd, Od) {
        this.updateUniform(dd, Od, Od.length), this.update()
      }
      bindToEffect(dd, Od) {
        this._currentEffect = dd, this._currentEffectName = Od
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(dd) {
        if (!this._buffers) return this._buffer === dd;
        for (let Od = 0; Od < this._buffers.length; ++Od) {
          if (this._buffers[Od][0] === dd) return this._bufferIndex = Od, this._buffer = dd, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[Od][1] && (this._bufferData.set(this._buffers[Od][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(dd) {
        return void 0 !== this._uniformLocations[dd]
      }
      dispose() {
        if (this._noUBO) return;
        const dd = this._engine._uniformBuffers,
          Od = dd.indexOf(this);
        if (-1 !== Od && (dd[Od] = dd[dd.length - 1], dd.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let dd = 0; dd < this._buffers.length; ++dd) {
            const Od = this._buffers[dd][0];
            this._engine._releaseBuffer(Od)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    Rd._MAX_UNIFORM_SIZE = 256, Rd._TempBuffer = new Float32Array(Rd._MAX_UNIFORM_SIZE), Rd._TempBufferInt32View = new Int32Array(Rd._TempBuffer.buffer), Rd._TempBufferUInt32View = new Uint32Array(Rd._TempBuffer.buffer)
  },
  41854: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd
    });
    var Wd = md(41856);
    class Fd extends Wd.c {
      constructor(dd) {
        super(), this._buffer = dd
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  41935: (dd, Od, md) => {
    md.d(Od, {
      d: () => hd,
      f: () => vd
    });
    const Wd = "__bjs_serializable__",
      Fd = new WeakMap;

    function Rd(dd, Od) {
      return Object.prototype.hasOwnProperty.call(dd, Od)
    }
    const Xd = function() {
      let dd = Symbol.metadata;
      return dd || (dd = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: dd
      })), dd
    }();

    function Kd(dd) {
      return "function" === typeof dd ? dd : dd?.constructor
    }

    function hd(dd) {
      if (!dd) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(Xd)}) polyfill must run before decorated classes are evaluated.`);
      return Rd(dd, Wd) || (dd[Wd] = {}), dd[Wd]
    }

    function vd(dd) {
      const Od = Kd(dd),
        md = Od ? Od[Xd] : void 0;
      if (!md) return {};
      const hd = Fd.get(md);
      if (hd) return hd;
      const vd = {},
        Qd = [];
      let td = md;
      for (; td;) Qd.push(td), td = Object.getPrototypeOf(td);
      for (const Fd of Qd)
        if (Rd(Fd, Wd)) {
          const dd = Fd[Wd];
          for (const Od in dd) vd[Od] = dd[Od]
        } return Fd.set(md, vd), vd
    }
  },
  41931: (dd, Od, md) => {
    md.d(Od, {
      B: () => td,
      E: () => Xd,
      e: () => pd,
      g: () => Rd,
      j: () => Td,
      k: () => Nd,
      m: () => hd,
      n: () => qd,
      o: () => vd,
      q: () => yd,
      s: () => od,
      v: () => Hd,
      x: () => Kd,
      z: () => Qd
    });
    var Wd = md(41935);

    function Fd(dd, Od) {
      return (md, Fd) => {
        if (!Fd.metadata) return;
        const Rd = String(Fd.name),
          Xd = (0, Wd.d)(Fd.metadata);
        Xd[Rd] || (Xd[Rd] = {
          type: dd,
          sourceName: Od
        })
      }
    }

    function Rd(dd) {
      return function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (md, Wd) => {
          const Fd = Od || "_" + String(Wd.name);
          return {
            init(dd) {
              return void 0 === dd && Fd in this || (this[Fd] = dd), dd
            },
            get() {
              return this[Fd]
            },
            set(Od) {
              "function" === typeof this[Fd]?.equals && this[Fd].equals(Od) || this[Fd] !== Od && (this[Fd] = Od, this[dd]())
            }
          }
        }
      }(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function Xd(dd) {
      return Fd(0, dd)
    }

    function Kd(dd) {
      return Fd(1, dd)
    }

    function hd(dd) {
      return Fd(2, dd)
    }

    function vd(dd) {
      return Fd(3, dd)
    }

    function Qd(dd) {
      return Fd(4, dd)
    }

    function td(dd) {
      return Fd(5, dd)
    }

    function od(dd) {
      return Fd(6, dd)
    }

    function Nd(dd) {
      return Fd(7, dd)
    }

    function qd(dd) {
      return Fd(8, dd)
    }

    function Hd(dd) {
      return Fd(10, dd)
    }

    function yd(dd) {
      return Fd(12, dd)
    }

    function bd(dd, Od, md) {
      const Wd = String(Od.name);
      let Fd = null;
      const Rd = function() {
        if (null === Fd) {
          Fd = dd, "undefined" !== typeof _native && _native[Wd] && (Fd = md(_native[Wd], dd));
          const Xd = this && (Od.static ? this : Object.getPrototypeOf(this));
          Xd?.[Wd] === Rd && (Xd[Wd] = Fd)
        }
        for (var Xd = arguments.length, Kd = new Array(Xd), hd = 0; hd < Xd; hd++) Kd[hd] = arguments[hd];
        return Fd.apply(this, Kd)
      };
      return Rd
    }

    function Td(dd, Od) {
      return bd(dd, Od, (dd => dd))
    }

    function pd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (md, Wd) => {
        const Fd = Od || "_" + String(Wd.name);
        return {
          get() {
            return this[Fd]?.value
          },
          set(Od) {
            "function" === typeof this[Fd]?.value?.equals && this[Fd].value.equals(Od) || this[Fd].value !== Od && (this[Fd].value = Od, this[dd]())
          }
        }
      }
    }
    Td.filter = function(dd) {
      return (Od, md) => bd(Od, md, ((Od, md) => function() {
        for (var Wd = arguments.length, Fd = new Array(Wd), Rd = 0; Rd < Wd; Rd++) Fd[Rd] = arguments[Rd];
        return dd(...Fd) ? Od(...Fd) : md.apply(this, Fd)
      }))
    }
  },
  41948: (dd, Od, md) => {
    md.d(Od, {
      b: () => vd
    });
    var Wd = md(41817),
      Fd = md(41952),
      Rd = md(38741),
      Xd = md(38636),
      Kd = md(41935);
    const hd = function(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Rd = dd();
      Fd.c && Fd.c.HasTags(Od) && Fd.c.AddTagsTo(Rd, Fd.c.GetTags(Od, !0));
      const Xd = (0, Kd.f)(Rd),
        hd = {};
      for (const Fd in Xd) {
        const dd = Xd[Fd],
          Kd = Od[Fd],
          Qd = dd.type;
        if (void 0 !== Kd && null !== Kd && ("uniqueId" !== Fd || vd.AllowLoadingUniqueId)) switch (Qd) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof Kd.slice ? Rd[Fd] = Kd.slice() : Rd[Fd] = Kd;
            break;
          case 1:
            Wd.cloneTexturesOnlyOnce && hd[Kd.uniqueId] ? Rd[Fd] = hd[Kd.uniqueId] : (Rd[Fd] = md || Kd.isRenderTarget ? Kd : Kd.clone(), hd[Kd.uniqueId] = Rd[Fd]);
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
          case 13:
            Rd[Fd] = md ? Kd : Kd.clone()
        }
      }
      return Rd
    };
    class vd {
      static AppendSerializedAnimations(dd, Od) {
        if (dd.animations) {
          Od.animations = [];
          for (let md = 0; md < dd.animations.length; md++) {
            const Wd = dd.animations[md];
            Od.animations.push(Wd.serialize())
          }
        }
      }
      static Serialize(dd, Od) {
        Od || (Od = {}), Fd.c && (Od.tags = Fd.c.GetTags(dd));
        const md = (0, Kd.f)(dd);
        for (const Wd in md) {
          const Fd = md[Wd],
            Rd = Fd.sourceName || Wd,
            Xd = Fd.type,
            Kd = dd[Wd];
          if (void 0 !== Kd && null !== Kd && ("uniqueId" !== Wd || vd.AllowLoadingUniqueId)) switch (Xd) {
            case 0:
              Array.isArray(Kd) ? Od[Rd] = Kd.slice() : Od[Rd] = Kd;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              Od[Rd] = Kd.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              Od[Rd] = Kd.RRd();
              break;
            case 6:
            case 11:
              Od[Rd] = Kd.id
          }
        }
        return Od
      }
      static ParseProperties(dd, Od, md, Wd) {
        Wd || (Wd = "");
        const Fd = (0, Kd.f)(Od);
        for (const Kd in Fd) {
          const hd = Fd[Kd],
            Qd = dd[hd.sourceName || Kd],
            td = hd.type;
          if (void 0 !== Qd && null !== Qd && ("uniqueId" !== Kd || vd.AllowLoadingUniqueId)) {
            const dd = Od;
            switch (td) {
              case 0:
                dd[Kd] = Qd;
                break;
              case 1:
                md && (dd[Kd] = vd._TextureParser(Qd, md, Wd));
                break;
              case 2:
                dd[Kd] = Rd.d.FromArray(Qd);
                break;
              case 3:
                dd[Kd] = vd._FresnelParametersParser(Qd);
                break;
              case 4:
                dd[Kd] = Xd.i.FromArray(Qd);
                break;
              case 5:
                dd[Kd] = Xd.j.FromArray(Qd);
                break;
              case 6:
                md && (dd[Kd] = md.getLastMeshById(Qd));
                break;
              case 7:
                dd[Kd] = vd._ColorCurvesParser(Qd);
                break;
              case 8:
                dd[Kd] = Rd.f.FromArray(Qd);
                break;
              case 9:
                dd[Kd] = vd._ImageProcessingConfigurationParser(Qd);
                break;
              case 10:
                dd[Kd] = Xd.e.FromArray(Qd);
                break;
              case 11:
                md && (dd[Kd] = md.getCameraById(Qd));
                break;
              case 12:
                dd[Kd] = Xd.d.FromArray(Qd);
                break;
              case 13:
                dd[Kd] = Xd.k.FromArray(Qd)
            }
          }
        }
      }
      static Parse(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Rd = dd();
        return Fd.c && Fd.c.AddTagsTo(Rd, Od.tags), vd.ParseProperties(Od, Rd, md, Wd), Rd
      }
      static Clone(dd, Od) {
        return hd(dd, Od, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(dd, Od) {
        return hd(dd, Od, !0)
      }
    }
    vd.AllowLoadingUniqueId = !1, vd._ImageProcessingConfigurationParser = dd => {
      throw (0, Wd.m)("ImageProcessingConfiguration")
    }, vd._FresnelParametersParser = dd => {
      throw (0, Wd.m)("FresnelParameters")
    }, vd._ColorCurvesParser = dd => {
      throw (0, Wd.m)("ColorCurves")
    }, vd._TextureParser = (dd, Od, md) => {
      throw (0, Wd.m)("Texture")
    }
  },
  41878: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd
    });
    var Wd = md(41841);
    class Fd {
      get min() {
        return this._min
      }
      get max() {
        return this._max
      }
      get average() {
        return this._average
      }
      get lastSecAverage() {
        return this._lastSecAverage
      }
      get current() {
        return this._current
      }
      get total() {
        return this._totalAccumulated
      }
      get count() {
        return this._totalValueCount
      }
      constructor() {
        this._startMonitoringTime = 0, this._min = 0, this._max = 0, this._hasResult = !1, this._hasCurrentValue = !1, this._average = 0, this._lastSecAverage = 0, this._current = 0, this._totalValueCount = 0, this._totalAccumulated = 0, this._lastSecAccumulated = 0, this._lastSecTime = 0, this._lastSecValueCount = 0
      }
      fetchNewFrame() {
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = Fd.Enabled, this._lastSecValueCount++
      }
      addCount(dd, Od) {
        Fd.Enabled && (this._current += dd, this._hasCurrentValue = !0, Od && this._fetchResult())
      }
      beginMonitoring() {
        Fd.Enabled && (this._startMonitoringTime = Wd.d.Now)
      }
      endMonitoring() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!Fd.Enabled) return;
        dd && this.fetchNewFrame();
        const Od = Wd.d.Now;
        this._current = Od - this._startMonitoringTime, this._hasCurrentValue = !0, dd && this._fetchResult()
      }
      bt() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const dd = Wd.d.Now;
        dd - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = dd, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    Fd.Enabled = !0
  },
  42041: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd,
      e: () => Wd
    });
    class Wd {
      constructor(dd) {
        this.length = 0, this.data = new Array(dd), this._id = Wd._GlobalId++
      }
      push(dd) {
        this.data[this.length++] = dd, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(dd) {
        for (let Od = 0; Od < this.length; Od++) dd(this.data[Od])
      }
      sort(dd) {
        this.data.sort(dd)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(dd) {
        if (0 !== dd.length) {
          this.length + dd.length > this.data.length && (this.data.length = 2 * (this.length + dd.length));
          for (let Od = 0; Od < dd.length; Od++) this.data[this.length++] = (dd.data || dd)[Od]
        }
      }
      indexOf(dd) {
        const Od = this.data.indexOf(dd);
        return Od >= this.length ? -1 : Od
      }
      contains(dd) {
        return -1 !== this.indexOf(dd)
      }
    }
    Wd._GlobalId = 0;
    class Fd extends Wd {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(dd) {
        super.push(dd), dd.__smartArrayFlags || (dd.__smartArrayFlags = {}), dd.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(dd) {
        return (!dd.__smartArrayFlags || dd.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(dd), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(dd) {
        if (0 !== dd.length) {
          this.length + dd.length > this.data.length && (this.data.length = 2 * (this.length + dd.length));
          for (let Od = 0; Od < dd.length; Od++) {
            const md = (dd.data || dd)[Od];
            this.pushNoDuplicate(md)
          }
        }
      }
    }
  },
  41952: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd
    });
    class Wd {
      static Eval(dd, Od) {
        return "true" === (dd = dd.match(/\([^()]*\)/g) ? dd.replace(/\([^()]*\)/g, (dd => (dd = dd.slice(1, dd.length - 1), Wd._HandleParenthesisContent(dd, Od)))) : Wd._HandleParenthesisContent(dd, Od)) || "false" !== dd && Wd.Eval(dd, Od)
      }
      static _HandleParenthesisContent(dd, Od) {
        let md;
        Od = Od || (dd => "true" === dd);
        const Fd = dd.split("||");
        for (const Rd in Fd)
          if (Object.prototype.hasOwnProperty.call(Fd, Rd)) {
            let dd = Wd._SimplifyNegation(Fd[Rd].trim());
            const Xd = dd.split("&&");
            if (Xd.length > 1)
              for (let Fd = 0; Fd < Xd.length; ++Fd) {
                const Rd = Wd._SimplifyNegation(Xd[Fd].trim());
                if (md = "true" !== Rd && "false" !== Rd ? "!" === Rd[0] ? !Od(Rd.substring(1)) : Od(Rd) : "true" === Rd, !md) {
                  dd = "false";
                  break
                }
              }
            if (md || "true" === dd) {
              md = !0;
              break
            }
            md = "true" !== dd && "false" !== dd ? "!" === dd[0] ? !Od(dd.substring(1)) : Od(dd) : "true" === dd
          } return md ? "true" : "false"
      }
      static _SimplifyNegation(dd) {
        return "!true" === (dd = (dd = dd.replace(/^[\s!]+/, (dd => (dd = dd.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? dd = "false" : "!false" === dd && (dd = "true"), dd
      }
    }
    class Fd {
      static EnableFor(dd) {
        dd._tags = dd._tags || {}, dd.hasTags = () => Fd.HasTags(dd), dd.addTags = Od => Fd.AddTagsTo(dd, Od), dd.removeTags = Od => Fd.RemoveTagsFrom(dd, Od), dd.matchesTagsQuery = Od => Fd.MatchesQuery(dd, Od)
      }
      static DisableFor(dd) {
        delete dd._tags, delete dd.hasTags, delete dd.addTags, delete dd.removeTags, delete dd.matchesTagsQuery
      }
      static HasTags(dd) {
        if (!dd._tags) return !1;
        const Od = dd._tags;
        for (const md in Od)
          if (Object.prototype.hasOwnProperty.call(Od, md)) return !0;
        return !1
      }
      static GetTags(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!dd._tags) return null;
        if (Od) {
          const Od = [];
          for (const md in dd._tags) Object.prototype.hasOwnProperty.call(dd._tags, md) && !0 === dd._tags[md] && Od.push(md);
          return Od.join(" ")
        }
        return dd._tags
      }
      static AddTagsTo(dd, Od) {
        if (!Od) return;
        if ("string" !== typeof Od) return;
        const md = Od.split(" ");
        for (const Wd of md) Fd._AddTagTo(dd, Wd)
      }
      static _AddTagTo(dd, Od) {
        "" !== (Od = Od.trim()) && "true" !== Od && "false" !== Od && (Od.match(/[\s]/) || Od.match(/^([!]|([|]|[&]){2})/) || (Fd.EnableFor(dd), dd._tags[Od] = !0))
      }
      static RemoveTagsFrom(dd, Od) {
        if (!Fd.HasTags(dd)) return;
        const md = Od.split(" ");
        for (const Wd in md) Fd._RemoveTagFrom(dd, md[Wd])
      }
      static _RemoveTagFrom(dd, Od) {
        delete dd._tags[Od]
      }
      static MatchesQuery(dd, Od) {
        return void 0 === Od || ("" === Od ? Fd.HasTags(dd) : Wd.Eval(Od, (Od => Fd.HasTags(dd) && dd._tags[Od])))
      }
    }
  },
  42083: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(42075),
      Fd = md(38660);
    class Rd {
      constructor(dd) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new Fd.c, this._scene = dd
      }
      _prepareBuffers() {
        if (this._vertexBuffers[Wd.j.PositionKind]) return;
        const dd = [];
        dd.push(1, 1), dd.push(-1, 1), dd.push(-1, -1), dd.push(1, -1), this._vertexBuffers[Wd.j.PositionKind] = new Wd.j(this._scene.Iq(), dd, Wd.j.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const dd = [];
        dd.push(0), dd.push(1), dd.push(2), dd.push(0), dd.push(2), dd.push(3), this._indexBuffer = this._scene.Iq().createIndexBuffer(dd)
      }
      _getActivePostProcesses(dd) {
        const Od = this._activePostProcesses;
        Od.length = 0;
        for (let md = 0; md < dd.length; md++) {
          const Wd = dd[md];
          Wd && Od.push(Wd)
        }
        return Od
      }
      _rebuild() {
        const dd = this._vertexBuffers[Wd.j.PositionKind];
        dd && (dd._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const md = this._scene.activeCamera;
        return !!md && (Od = Od || this._getActivePostProcesses(md._postProcesses), !(!Od || 0 === Od.length || !this._scene.postProcessesEnabled) && (Od[0].activate(md, dd, null !== Od && void 0 !== Od), !0))
      }
      directRender(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Xd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : dd.length;
        const Kd = this._scene.Iq();
        for (let hd = 0; hd < Xd; hd++) {
          hd < dd.length - 1 ? dd[hd + 1].activate(this._scene.activeCamera || this._scene, Od?.texture) : (Od ? Kd.bindFramebuffer(Od, Wd, void 0, void 0, md, Fd) : Rd || Kd.restoreDefaultFramebuffer(), Kd._debugInsertMarker?.(`post process ${dd[hd].name} output`));
          const Xd = dd[hd],
            vd = Xd.apply();
          vd && (Xd.onBeforeRenderObservable.notifyObservers(vd), this._prepareBuffers(), Kd.bindBuffers(this._vertexBuffers, this._indexBuffer, vd), Kd.drawElementsType(0, 0, 6), Xd.onAfterRenderObservable.notifyObservers(vd))
        }
        Kd.setDepthBuffer(!0), Kd.setDepthWrite(!0)
      }
      _finalizeFrame(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Rd = this._scene.activeCamera;
        if (!Rd) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (Wd = Wd || this._getActivePostProcesses(Rd._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const Xd = this._scene.Iq();
        for (let Kd = 0, hd = Wd.length; Kd < hd; Kd++) {
          const vd = Wd[Kd];
          if (Kd < hd - 1 ? vd._outputTexture = Wd[Kd + 1].activate(Rd, Od?.texture) : (Od ? (Xd.bindFramebuffer(Od, md, void 0, void 0, Fd), vd._outputTexture = Od) : (Xd.restoreDefaultFramebuffer(), vd._outputTexture = null), Xd._debugInsertMarker?.(`post process ${Wd[Kd].name} output`)), dd) break;
          const Qd = vd.apply();
          Qd && (vd.onBeforeRenderObservable.notifyObservers(Qd), this._prepareBuffers(), Xd.bindBuffers(this._vertexBuffers, this._indexBuffer, Qd), Xd.drawElementsType(0, 0, 6), vd.onAfterRenderObservable.notifyObservers(Qd))
        }
        Xd.setDepthBuffer(!0), Xd.setDepthWrite(!0), Xd.setAlphaMode(0)
      }
      dispose() {
        const dd = this._vertexBuffers[Wd.j.PositionKind];
        dd && (dd.dispose(), this._vertexBuffers[Wd.j.PositionKind] = null), this._indexBuffer && (this._scene.Iq()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  42091: (dd, Od, md) => {
    md.d(Od, {
      e: () => vd
    });
    var Wd = md(42041),
      Fd = md(38636);
    const Rd = [],
      Xd = [];
    let Kd = !1;

    function hd(dd, Od) {
      for (; dd.length < Od;) dd.push(void 0)
    }
    class vd {
      set opaqueSortCompareFn(dd) {
        this._opaqueSortCompareFn = dd || vd.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(dd) {
        this._alphaTestSortCompareFn = dd || vd.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(dd) {
        this._transparentSortCompareFn = dd || vd.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = dd, this._opaqueSubMeshes = new Wd.e(256), this._transparentSubMeshes = new Wd.e(256), this._alphaTestSubMeshes = new Wd.e(256), this._depthOnlySubMeshes = new Wd.e(256), this._particleSystems = new Wd.e(256), this._spriteManagers = new Wd.e(256), this._empty = !0, this._edgesRenderers = new Wd.c(16), this.disableDepthPrePass = !1, this._scene = Od, this.opaqueSortCompareFn = md, this.alphaTestSortCompareFn = Fd, this.transparentSortCompareFn = Rd
      }
      render(dd, Od, md, Wd) {
        let Fd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Rd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Kd = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          hd = arguments.length > 8 ? arguments[8] : void 0;
        if (dd) return void dd(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const vd = this._scene.Iq();
        Fd && 0 !== this._depthOnlySubMeshes.length && (vd.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), vd.setColorWrite(!0)), Rd && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), Xd && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const Qd = vd.getStencilBuffer();
        if (vd.setStencilBuffer(!1), Od && this._renderSprites(), md && this._renderParticles(Wd), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), Kd && (hd || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (vd.setStencilBuffer(Qd), hd) hd(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const dd = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            dd.length && this._renderTransparent(dd)
          } else this._renderTransparent(this._transparentSubMeshes);
          vd.setAlphaMode(0)
        }
        if (vd.setStencilBuffer(!1), Rd && this._edgesRenderers.length) {
          for (let dd = 0; dd < this._edgesRenderers.length; dd++) this._edgesRenderers.data[dd].render();
          vd.setAlphaMode(0)
        }
        vd.setStencilBuffer(Qd)
      }
      _renderOpaqueSorted(dd) {
        vd._RenderSorted(dd, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(dd) {
        vd._RenderSorted(dd, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(dd) {
        vd._RenderSorted(dd, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(dd, Od, md, Wd, Rd) {
        let Qd, td = 0;
        const od = md ? md.globalPosition : vd._ZeroVector;
        if (Wd && Od !== vd.PainterSortCompare)
          for (; td < dd.length; td++) Qd = dd.data[td], Qd._alphaIndex = Qd.getMesh().alphaIndex, Qd._distanceToCamera = Fd.j.Distance(Qd.iG().ERd.centerWorld, od);
        const Nd = dd.length;
        let qd = dd.data;
        const Hd = Nd !== qd.length && !Kd;
        if (Hd) {
          for (Kd = !0, hd(Xd, Nd), td = 0; td < Nd; td++) Xd[td] = qd[td];
          qd = Xd
        } else Nd !== qd.length && (qd = qd.slice(0, Nd));
        try {
          Od && vd._StableSort(qd, Nd, Od), vd._DrawSorted(qd, Nd, Wd, Rd)
        } finally {
          Hd && (Xd.fill(void 0, 0, Nd), Kd = !1)
        }
      }
      static _DrawSorted(dd, Od, md, Wd) {
        let Fd;
        const Rd = dd[0].getMesh().zV();
        for (let Xd = 0; Xd < Od; Xd++) {
          if (Fd = dd[Xd], Rd._activeMeshesFrozenButKeepClipping && !Fd.isInFrustum(Rd._frustumPlanes)) continue;
          let Od = !1;
          if (md) {
            const dd = Fd.fq();
            if (dd && dd.needDepthPrePass && !Wd) {
              Od = !0;
              const md = dd.zV().Iq();
              md.setColorWrite(!1), md.setAlphaMode(0), Fd.render(!1), md.setColorWrite(!0)
            }
          }
          const Kd = Fd._renderingMesh;
          !Od && Kd._renderRunFollower(Fd, md) || Fd.render(md)
        }
      }
      static _StableSort(dd, Od, md) {
        for (let Wd = 0; Wd < Od; Wd += 16) {
          const Fd = Math.min(Wd + 16, Od);
          for (let Od = Wd + 1; Od < Fd; Od++) {
            const Fd = dd[Od];
            let Rd = Wd,
              Xd = Od;
            for (; Rd < Xd;) {
              const Od = Rd + Xd >>> 1;
              md(Fd, dd[Od]) < 0 ? Xd = Od : Rd = Od + 1
            }
            for (let md = Od; md > Rd; md--) dd[md] = dd[md - 1];
            dd[Rd] = Fd
          }
        }
        if (!(Od <= 16)) {
          hd(Rd, Od);
          try {
            let Wd = dd,
              Fd = Rd;
            for (let dd = 16; dd < Od; dd *= 2) {
              for (let Xd = 0; Xd < Od; Xd += 2 * dd) {
                const Rd = Math.min(Xd + dd, Od),
                  Kd = Math.min(Xd + 2 * dd, Od);
                let hd = Xd,
                  vd = Rd,
                  Qd = Xd;
                if (Rd < Kd && md(Wd[Rd], Wd[Rd - 1]) < 0)
                  for (; hd < Rd && vd < Kd;) Fd[Qd++] = md(Wd[vd], Wd[hd]) < 0 ? Wd[vd++] : Wd[hd++];
                for (; hd < Rd;) Fd[Qd++] = Wd[hd++];
                for (; vd < Kd;) Fd[Qd++] = Wd[vd++]
              }
              const Rd = Fd;
              Fd = Wd, Wd = Rd
            }
            if (Wd !== dd)
              for (let md = 0; md < Od; md++) dd[md] = Wd[md]
          } finally {
            Rd.fill(void 0, 0, Od)
          }
        }
      }
      static defaultTransparentSortCompare(dd, Od) {
        return dd._alphaIndex > Od._alphaIndex ? 1 : dd._alphaIndex < Od._alphaIndex ? -1 : vd.backToFrontSortCompare(dd, Od)
      }
      static backToFrontSortCompare(dd, Od) {
        return dd._distanceToCamera < Od._distanceToCamera ? 1 : dd._distanceToCamera > Od._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(dd, Od) {
        return dd._distanceToCamera < Od._distanceToCamera ? -1 : dd._distanceToCamera > Od._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(dd, Od) {
        const md = dd.getMesh(),
          Wd = Od.getMesh();
        return md.material && Wd.material ? md.material.uniqueId - Wd.material.uniqueId : md.uniqueId - Wd.uniqueId
      }
      prepare() {
        this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset(), this._depthOnlySubMeshes.reset(), this._particleSystems.reset(), this.prepareSprites(), this._edgesRenderers.reset(), this._empty = !0
      }
      prepareSprites() {
        this._spriteManagers.reset()
      }
      dispose() {
        this._opaqueSubMeshes.dispose(), this._transparentSubMeshes.dispose(), this._alphaTestSubMeshes.dispose(), this._depthOnlySubMeshes.dispose(), this._particleSystems.dispose(), this._spriteManagers.dispose(), this._edgesRenderers.dispose()
      }
      dispatch(dd, Od, md) {
        void 0 === Od && (Od = dd.getMesh()), void 0 === md && (md = dd.fq()), null !== md && void 0 !== md && (md.needAlphaBlendingForMesh(Od) ? this._transparentSubMeshes.push(dd) : md.needAlphaTestingForMesh(Od) ? (md.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(dd), this._alphaTestSubMeshes.push(dd)) : (md.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(dd), this._opaqueSubMeshes.push(dd)), Od._renderingGroup = this, Od._edgesRenderer && Od.isEnabled() && Od.isVisible && Od._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(Od._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(dd) {
        this._spriteManagers.push(dd), this._empty = !1
      }
      dispatchParticles(dd) {
        this._particleSystems.push(dd), this._empty = !1
      }
      _renderParticles(dd) {
        if (0 === this._particleSystems.length) return;
        const Od = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let md = 0; md < this._particleSystems.length; md++) {
          const Wd = this._particleSystems.data[md];
          if (0 === (Od && Od.layerMask & Wd.layerMask)) continue;
          const Fd = Wd.emitter;
          Fd.position && dd && -1 === dd.indexOf(Fd) || this._scene._activeParticles.addCount(Wd.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const dd = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let Od = 0; Od < this._spriteManagers.length; Od++) {
          const md = this._spriteManagers.data[Od];
          0 !== (dd && dd.layerMask & md.layerMask) && md.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    vd._ZeroVector = Fd.j.Zero()
  },
  42089: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    var Wd = md(42091);
    class Fd {}
    class Rd {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(dd) {
        this._disableDepthPrePass = dd;
        for (const Od of this._renderingGroups) Od.disableDepthPrePass = dd
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(dd) {
        dd !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = dd, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const dd of this._scene.meshes)
          if (dd.ZE)
            for (const Od of dd.ZE) Od._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const dd of this._scene.spriteManagers) dd._wasDispatched = !1;
        for (const dd of this._scene.kE) dd._wasDispatched = !1
      }
      constructor(dd) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new Fd, this._maintainStateBetweenFrames = !1, this._scene = dd;
        for (let Od = Rd.MIN_RENDERINGGROUPS; Od < Rd.MAX_RENDERINGGROUPS; Od++) this._autoClearDepthStencil[Od] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(dd) {
        const Od = dd || 0;
        return this._prepareRenderingGroup(Od), this._renderingGroups[Od]
      }
      _clearDepthStencilBuffer() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.Iq().clear(null, !1, dd, Od), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(dd, Od, md, Wd) {
        let Fd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Xd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Kd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          hd = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          vd = arguments.length > 8 ? arguments[8] : void 0,
          Qd = arguments.length > 9 ? arguments[9] : void 0;
        const td = this._renderingGroupInfo;
        td.MH = this._scene, td.camera = this._scene.activeCamera, td.renderingManager = this;
        const od = Qd ?? this._scene.spriteManagers;
        if (od && Wd)
          for (let Rd = 0; Rd < od.length; Rd++) {
            const dd = od[Rd];
            this.dispatchSprites(dd)
          }
        for (let Nd = Rd.MIN_RENDERINGGROUPS; Nd < Rd.MAX_RENDERINGGROUPS; Nd++) {
          this._depthStencilBufferAlreadyCleaned = Nd === Rd.MIN_RENDERINGGROUPS;
          const Qd = this._renderingGroups[Nd];
          if (!Qd || Qd._empty) continue;
          const od = 1 << Nd;
          if (td.renderingGroupId = Nd, this._scene.onBeforeRenderingGroupObservable.notifyObservers(td, od), Rd.AUTOCLEAR) {
            const dd = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(Nd) : this._autoClearDepthStencil[Nd];
            dd && dd.autoClear && this._clearDepthStencilBuffer(dd.depth, dd.stencil)
          }
          for (let dd = 0, Od = this._scene._beforeRenderingGroupDrawStage; dd < Od.length; dd++) {
            Od[dd].action(Nd)
          }
          Qd.render(dd, Wd, md, Od, Fd, Xd, Kd, hd, vd);
          for (let dd = 0, Od = this._scene._afterRenderingGroupDrawStage; dd < Od.length; dd++) {
            Od[dd].action(Nd)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(td, od)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let dd = Rd.MIN_RENDERINGGROUPS; dd < Rd.MAX_RENDERINGGROUPS; dd++) {
            const Od = this._renderingGroups[dd];
            Od && Od.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let dd = Rd.MIN_RENDERINGGROUPS; dd < Rd.MAX_RENDERINGGROUPS; dd++) {
            const Od = this._renderingGroups[dd];
            Od && Od.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let dd = Rd.MIN_RENDERINGGROUPS; dd < Rd.MAX_RENDERINGGROUPS; dd++) {
          const Od = this._renderingGroups[dd];
          Od && Od.dispose()
        }
      }
      _prepareRenderingGroup(dd) {
        void 0 === this._renderingGroups[dd] && (this._renderingGroups[dd] = new Wd.e(dd, this._scene, this._customOpaqueSortCompareFn[dd], this._customAlphaTestSortCompareFn[dd], this._customTransparentSortCompareFn[dd]), this._renderingGroups[dd].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(dd) {
        this.maintainStateBetweenFrames && dd._wasDispatched || (dd._wasDispatched = !0, this.getRenderingGroup(dd.renderingGroupId).dispatchSprites(dd))
      }
      dispatchParticles(dd) {
        this.maintainStateBetweenFrames && dd._wasDispatched || (dd._wasDispatched = !0, this.getRenderingGroup(dd.renderingGroupId).dispatchParticles(dd))
      }
      dispatch(dd, Od, md) {
        void 0 === Od && (Od = dd.getMesh()), this.maintainStateBetweenFrames && dd._wasDispatched || (dd._wasDispatched = !0, this.getRenderingGroup(Od.renderingGroupId).dispatch(dd, Od, md))
      }
      setRenderingOrder(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[dd] = Od, this._customAlphaTestSortCompareFn[dd] = md, this._customTransparentSortCompareFn[dd] = Wd, this._renderingGroups[dd]) {
          const Od = this._renderingGroups[dd];
          Od.opaqueSortCompareFn = this._customOpaqueSortCompareFn[dd], Od.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[dd], Od.transparentSortCompareFn = this._customTransparentSortCompareFn[dd]
        }
      }
      setRenderingAutoClearDepthStencil(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[dd] = {
          autoClear: Od,
          depth: md,
          stencil: Wd
        }
      }
      getAutoClearDepthStencilSetup(dd) {
        return this._autoClearDepthStencil[dd]
      }
    }
    Rd.MAX_RENDERINGGROUPS = 4, Rd.MIN_RENDERINGGROUPS = 0, Rd.AUTOCLEAR = !0
  },
  41844: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd
    });
    class Wd {
      constructor(dd) {
        this._supportBlendParametersPerTarget = dd, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(dd) {
        this.setAlphaBlend(dd)
      }
      setAlphaBlend(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[Od] !== dd && (dd ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[Od] = dd, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(dd, Od, md, Wd) {
        this._blendConstants[0] === dd && this._blendConstants[1] === Od && this._blendConstants[2] === md && this._blendConstants[3] === Wd || (this._blendConstants[0] = dd, this._blendConstants[1] = Od, this._blendConstants[2] = md, this._blendConstants[3] = Wd, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(dd, Od, md, Wd) {
        const Fd = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[Fd + 0] === dd && this._blendFunctionParameters[Fd + 1] === Od && this._blendFunctionParameters[Fd + 2] === md && this._blendFunctionParameters[Fd + 3] === Wd || (this._blendFunctionParameters[Fd + 0] = dd, this._blendFunctionParameters[Fd + 1] = Od, this._blendFunctionParameters[Fd + 2] = md, this._blendFunctionParameters[Fd + 3] = Wd, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(dd, Od) {
        const md = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[md + 0] === dd && this._blendEquationParameters[md + 1] === Od || (this._blendEquationParameters[md + 0] = dd, this._blendEquationParameters[md + 1] = Od, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== Od && (this._numTargets = Od, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== md && (this._blendDisabledTargetsMask = md, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (dd.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === Od || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (Od > 1 && 0 !== md && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & md) ? dd.enable(dd.BLEND) : dd.disable(dd.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (dd.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (dd.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const Wd = dd;
        if (this._isAlphaBlendDirty) {
          for (let Fd = 0; Fd < Od; Fd++) {
            const Od = Fd < this._numTargetEnabled ? Fd : 0;
            this._alphaBlend[Od] && 0 === (md & 1 << Fd) ? Wd.enableIndexed(dd.BLEND, Fd) : Wd.disableIndexed(dd.BLEND, Fd)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let dd = 0; dd < Od; dd++) {
            const Od = dd < this._numTargetEnabled ? 4 * dd : 0;
            Wd.blendFuncSeparateIndexed(dd, this._blendFunctionParameters[Od + 0], this._blendFunctionParameters[Od + 1], this._blendFunctionParameters[Od + 2], this._blendFunctionParameters[Od + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let dd = 0; dd < Od; dd++) {
            const Od = dd < this._numTargetEnabled ? 2 * dd : 0;
            Wd.blendEquationSeparateIndexed(dd, this._blendEquationParameters[Od + 0], this._blendEquationParameters[Od + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(dd, Od) {
        let md = 32774;
        switch (dd) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, Od);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, Od);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, Od);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, Od);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, Od);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, Od);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, Od);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, Od);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, Od);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, Od);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Od);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, Od);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, Od);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, Od);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, Od);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, Od);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Od), md = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Od), md = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, Od);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, Od)
        }
        this.setAlphaEquationParameters(md, md, Od)
      }
    }
  },
  42113: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd
    });
    class Wd {}
    Wd._IsPickingAvailable = !1
  },
  42020: (dd, Od, md) => {
    md.d(Od, {
      b: () => Qm,
      c: () => Km
    });
    var Wd = md(42029),
      Fd = md(41831),
      Rd = md(41841),
      Xd = md(38660),
      Kd = md(42041);
    class hd {
      constructor() {
        this._count = 0, this._data = {}
      }
      Bx(dd) {
        this.clear(), dd.forEach(((dd, Od) => this.add(dd, Od)))
      }
      get(dd) {
        const Od = this._data[dd];
        if (void 0 !== Od) return Od
      }
      getOrAddWithFactory(dd, Od) {
        let md = this.get(dd);
        return void 0 !== md || (md = Od(dd), md && this.add(dd, md)), md
      }
      getOrAdd(dd, Od) {
        const md = this.get(dd);
        return void 0 !== md ? md : (this.add(dd, Od), Od)
      }
      contains(dd) {
        return void 0 !== this._data[dd]
      }
      add(dd, Od) {
        return void 0 === this._data[dd] && (this._data[dd] = Od, ++this._count, !0)
      }
      set(dd, Od) {
        return void 0 !== this._data[dd] && (this._data[dd] = Od, !0)
      }
      getAndRemove(dd) {
        const Od = this.get(dd);
        return void 0 !== Od ? (delete this._data[dd], --this._count, Od) : null
      }
      remove(dd) {
        return !!this.contains(dd) && (delete this._data[dd], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(dd) {
        for (const Od in this._data) {
          dd(Od, this._data[Od])
        }
      }
      first(dd) {
        for (const Od in this._data) {
          const md = dd(Od, this._data[Od]);
          if (md) return md
        }
        return null
      }
    }
    var vd = md(41952),
      Qd = md(38636),
      td = md(42046),
      od = md(42065),
      Nd = md(42072);
    class qd {
      constructor(dd, Od, md, Wd, Fd, Rd) {
        this.source = dd, this.pointerX = Od, this.pointerY = md, this.meshUnderPointer = Wd, this.sourceEvent = Fd, this.additionalData = Rd
      }
      static CreateNew(dd, Od, md) {
        const Wd = dd.zV();
        return new qd(dd, Wd.pointerX, Wd.pointerY, Wd.meshUnderPointer || dd, Od, md)
      }
      static CreateNewFromSprite(dd, Od, md, Wd) {
        return new qd(dd, Od.pointerX, Od.pointerY, Od.meshUnderPointer, md, Wd)
      }
      static CreateNewFromScene(dd, Od) {
        return new qd(null, dd.pointerX, dd.pointerY, dd.meshUnderPointer, Od)
      }
      static CreateNewFromPrimitive(dd, Od, md, Wd) {
        return new qd(dd, Od.x, Od.y, null, md, Wd)
      }
    }
    var Hd = md(42083),
      yd = md(42086),
      bd = md(42089),
      Td = md(42095),
      pd = md(41799),
      Yd = md(38651),
      gd = md(41817),
      wd = md(42099);
    class Ed {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const dd in Ed.Triggers)
          if (Object.prototype.hasOwnProperty.call(Ed.Triggers, dd)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const dd in Ed.Triggers)
          if (Object.prototype.hasOwnProperty.call(Ed.Triggers, dd)) {
            const Od = parseInt(dd);
            if (Od >= 1 && Od <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(dd) {
        for (const Od in Ed.Triggers)
          if (Object.prototype.hasOwnProperty.call(Ed.Triggers, Od)) {
            if (parseInt(Od) === dd) return !0
          } return !1
      }
    }
    Ed.Triggers = {};
    var Jd, Ud, xd, Bd, Sd, sd, ud, Vd = md(42105);
    ! function(dd) {
      dd[dd.Generic = 0] = "Generic", dd[dd.Keyboard = 1] = "Keyboard", dd[dd.Mouse = 2] = "Mouse", dd[dd.Touch = 3] = "Touch", dd[dd.DualShock = 4] = "DualShock", dd[dd.Xbox = 5] = "Xbox", dd[dd.Switch = 6] = "Switch", dd[dd.DualSense = 7] = "DualSense"
    }(Jd || (Jd = {})),
    function(dd) {
      dd[dd.Horizontal = 0] = "Horizontal", dd[dd.Vertical = 1] = "Vertical", dd[dd.LeftClick = 2] = "LeftClick", dd[dd.MiddleClick = 3] = "MiddleClick", dd[dd.RightClick = 4] = "RightClick", dd[dd.BrowserBack = 5] = "BrowserBack", dd[dd.BrowserForward = 6] = "BrowserForward", dd[dd.MouseWheelX = 7] = "MouseWheelX", dd[dd.MouseWheelY = 8] = "MouseWheelY", dd[dd.MouseWheelZ = 9] = "MouseWheelZ", dd[dd.Move = 12] = "Move"
    }(Ud || (Ud = {})),
    function(dd) {
      dd[dd.Horizontal = 0] = "Horizontal", dd[dd.Vertical = 1] = "Vertical", dd[dd.LeftClick = 2] = "LeftClick", dd[dd.MiddleClick = 3] = "MiddleClick", dd[dd.RightClick = 4] = "RightClick", dd[dd.BrowserBack = 5] = "BrowserBack", dd[dd.BrowserForward = 6] = "BrowserForward", dd[dd.MouseWheelX = 7] = "MouseWheelX", dd[dd.MouseWheelY = 8] = "MouseWheelY", dd[dd.MouseWheelZ = 9] = "MouseWheelZ", dd[dd.DeltaHorizontal = 10] = "DeltaHorizontal", dd[dd.DeltaVertical = 11] = "DeltaVertical"
    }(xd || (xd = {})),
    function(dd) {
      dd[dd.Cross = 0] = "Cross", dd[dd.Circle = 1] = "Circle", dd[dd.Square = 2] = "Square", dd[dd.Triangle = 3] = "Triangle", dd[dd.L1 = 4] = "L1", dd[dd.R1 = 5] = "R1", dd[dd.L2 = 6] = "L2", dd[dd.R2 = 7] = "R2", dd[dd.Share = 8] = "Share", dd[dd.Options = 9] = "Options", dd[dd.L3 = 10] = "L3", dd[dd.R3 = 11] = "R3", dd[dd.DPadUp = 12] = "DPadUp", dd[dd.DPadDown = 13] = "DPadDown", dd[dd.DPadLeft = 14] = "DPadLeft", dd[dd.DPadRight = 15] = "DPadRight", dd[dd.Home = 16] = "Home", dd[dd.TouchPad = 17] = "TouchPad", dd[dd.LStickXAxis = 18] = "LStickXAxis", dd[dd.LStickYAxis = 19] = "LStickYAxis", dd[dd.RStickXAxis = 20] = "RStickXAxis", dd[dd.RStickYAxis = 21] = "RStickYAxis"
    }(Bd || (Bd = {})),
    function(dd) {
      dd[dd.Cross = 0] = "Cross", dd[dd.Circle = 1] = "Circle", dd[dd.Square = 2] = "Square", dd[dd.Triangle = 3] = "Triangle", dd[dd.L1 = 4] = "L1", dd[dd.R1 = 5] = "R1", dd[dd.L2 = 6] = "L2", dd[dd.R2 = 7] = "R2", dd[dd.Create = 8] = "Create", dd[dd.Options = 9] = "Options", dd[dd.L3 = 10] = "L3", dd[dd.R3 = 11] = "R3", dd[dd.DPadUp = 12] = "DPadUp", dd[dd.DPadDown = 13] = "DPadDown", dd[dd.DPadLeft = 14] = "DPadLeft", dd[dd.DPadRight = 15] = "DPadRight", dd[dd.Home = 16] = "Home", dd[dd.TouchPad = 17] = "TouchPad", dd[dd.LStickXAxis = 18] = "LStickXAxis", dd[dd.LStickYAxis = 19] = "LStickYAxis", dd[dd.RStickXAxis = 20] = "RStickXAxis", dd[dd.RStickYAxis = 21] = "RStickYAxis"
    }(Sd || (Sd = {})),
    function(dd) {
      dd[dd.A = 0] = "A", dd[dd.B = 1] = "B", dd[dd.X = 2] = "X", dd[dd.Y = 3] = "Y", dd[dd.LB = 4] = "LB", dd[dd.RB = 5] = "RB", dd[dd.LT = 6] = "LT", dd[dd.RT = 7] = "RT", dd[dd.Back = 8] = "Back", dd[dd.Start = 9] = "Start", dd[dd.LS = 10] = "LS", dd[dd.RS = 11] = "RS", dd[dd.DPadUp = 12] = "DPadUp", dd[dd.DPadDown = 13] = "DPadDown", dd[dd.DPadLeft = 14] = "DPadLeft", dd[dd.DPadRight = 15] = "DPadRight", dd[dd.Home = 16] = "Home", dd[dd.LStickXAxis = 17] = "LStickXAxis", dd[dd.LStickYAxis = 18] = "LStickYAxis", dd[dd.RStickXAxis = 19] = "RStickXAxis", dd[dd.RStickYAxis = 20] = "RStickYAxis"
    }(sd || (sd = {})),
    function(dd) {
      dd[dd.B = 0] = "B", dd[dd.A = 1] = "A", dd[dd.Y = 2] = "Y", dd[dd.X = 3] = "X", dd[dd.L = 4] = "L", dd[dd.R = 5] = "R", dd[dd.ZL = 6] = "ZL", dd[dd.ZR = 7] = "ZR", dd[dd.Minus = 8] = "Minus", dd[dd.Plus = 9] = "Plus", dd[dd.LS = 10] = "LS", dd[dd.RS = 11] = "RS", dd[dd.DPadUp = 12] = "DPadUp", dd[dd.DPadDown = 13] = "DPadDown", dd[dd.DPadLeft = 14] = "DPadLeft", dd[dd.DPadRight = 15] = "DPadRight", dd[dd.Home = 16] = "Home", dd[dd.Capture = 17] = "Capture", dd[dd.LStickXAxis = 18] = "LStickXAxis", dd[dd.LStickYAxis = 19] = "LStickYAxis", dd[dd.RStickXAxis = 20] = "RStickXAxis", dd[dd.RStickYAxis = 21] = "RStickYAxis"
    }(ud || (ud = {}));
    var Ad = md(42111);
    class rd {
      static CreateDeviceEvent(dd, Od, md, Wd, Fd, Rd, Xd) {
        switch (dd) {
          case Jd.Keyboard:
            return this._CreateKeyboardEvent(md, Wd, Fd, Rd);
          case Jd.Mouse:
            if (md === Ud.MouseWheelX || md === Ud.MouseWheelY || md === Ud.MouseWheelZ) return this._CreateWheelEvent(dd, Od, md, Wd, Fd, Rd);
          case Jd.Touch:
            return this._CreatePointerEvent(dd, Od, md, Wd, Fd, Rd, Xd);
          default:
            throw `Unable to generate event for device ${Jd[dd]}`
        }
      }
      static _CreatePointerEvent(dd, Od, md, Wd, Fd, Rd, Xd) {
        const Kd = this._CreateMouseEvent(dd, Od, md, Wd, Fd, Rd);
        dd === Jd.Mouse ? (Kd.deviceType = Jd.Mouse, Kd.pointerId = 1, Kd.pointerType = "mouse") : (Kd.deviceType = Jd.Touch, Kd.pointerId = Xd ?? Od, Kd.pointerType = "touch");
        let hd = 0;
        return hd += Fd.pollInput(dd, Od, Ud.LeftClick), hd += 2 * Fd.pollInput(dd, Od, Ud.RightClick), hd += 4 * Fd.pollInput(dd, Od, Ud.MiddleClick), Kd.buttons = hd, md === Ud.Move ? Kd.type = "pointermove" : md >= Ud.LeftClick && md <= Ud.RightClick && (Kd.type = 1 === Wd ? "pointerdown" : "pointerup", Kd.button = md - 2), Kd
      }
      static _CreateWheelEvent(dd, Od, md, Wd, Fd, Rd) {
        const Xd = this._CreateMouseEvent(dd, Od, md, Wd, Fd, Rd);
        switch (Xd.pointerId = 1, Xd.type = "wheel", Xd.deltaMode = Ad.c.DOM_DELTA_PIXEL, Xd.deltaX = 0, Xd.deltaY = 0, Xd.deltaZ = 0, md) {
          case Ud.MouseWheelX:
            Xd.deltaX = Wd;
            break;
          case Ud.MouseWheelY:
            Xd.deltaY = Wd;
            break;
          case Ud.MouseWheelZ:
            Xd.deltaZ = Wd
        }
        return Xd
      }
      static _CreateMouseEvent(dd, Od, md, Wd, Fd, Rd) {
        const Xd = this._CreateEvent(Rd),
          Kd = Fd.pollInput(dd, Od, Ud.Horizontal),
          hd = Fd.pollInput(dd, Od, Ud.Vertical);
        return Rd ? (Xd.movementX = 0, Xd.movementY = 0, Xd.offsetX = Xd.movementX - Rd.getBoundingClientRect().x, Xd.offsetY = Xd.movementY - Rd.getBoundingClientRect().y) : (Xd.movementX = Fd.pollInput(dd, Od, 10), Xd.movementY = Fd.pollInput(dd, Od, 11), Xd.offsetX = 0, Xd.offsetY = 0), this._CheckNonCharacterKeys(Xd, Fd), Xd.clientX = Kd, Xd.clientY = hd, Xd.x = Kd, Xd.y = hd, Xd.deviceType = dd, Xd.deviceSlot = Od, Xd.inputIndex = md, Xd
      }
      static _CreateKeyboardEvent(dd, Od, md, Wd) {
        const Fd = this._CreateEvent(Wd);
        return this._CheckNonCharacterKeys(Fd, md), Fd.deviceType = Jd.Keyboard, Fd.deviceSlot = 0, Fd.inputIndex = dd, Fd.type = 1 === Od ? "keydown" : "keyup", Fd.key = String.fromCharCode(dd), Fd.keyCode = dd, Fd
      }
      static _CheckNonCharacterKeys(dd, Od) {
        const md = Od.isDeviceAvailable(Jd.Keyboard),
          Wd = md && 1 === Od.pollInput(Jd.Keyboard, 0, 18),
          Fd = md && 1 === Od.pollInput(Jd.Keyboard, 0, 17),
          Rd = md && (1 === Od.pollInput(Jd.Keyboard, 0, 91) || 1 === Od.pollInput(Jd.Keyboard, 0, 92) || 1 === Od.pollInput(Jd.Keyboard, 0, 93)),
          Xd = md && 1 === Od.pollInput(Jd.Keyboard, 0, 16);
        dd.altKey = Wd, dd.ctrlKey = Fd, dd.metaKey = Rd, dd.shiftKey = Xd
      }
      static _CreateEvent(dd) {
        const Od = {
          preventDefault: () => {}
        };
        return Od.target = dd, Od
      }
    }
    class Gd {
      constructor(dd, Od, md) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(dd, Od, ((dd, Od, Wd, Fd) => {
          const Rd = rd.CreateDeviceEvent(dd, Od, Wd, Fd, this);
          md(dd, Od, Rd)
        })) : this._createDummyNativeInput()
      }
      pollInput(dd, Od, md) {
        return this._nativeInput.pollInput(dd, Od, md)
      }
      isDeviceAvailable(dd) {
        return dd === Jd.Mouse || dd === Jd.Touch
      }
      dispose() {
        this._nativeInput.dispose()
      }
      _createDummyNativeInput() {
        return {
          pollInput: () => 0,
          isDeviceAvailable: () => !1,
          dispose: () => {}
        }
      }
    }
    const nd = Object.keys(Ud).length / 2;
    class Ld {
      constructor(dd, Od, md, Fd) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Wd.g.IsSafari(), this._usingMacOs = (0, pd.f)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = dd => {}, this._keyboardUpEvent = dd => {}, this._keyboardBlurEvent = dd => {}, this._pointerMoveEvent = dd => {}, this._pointerDownEvent = dd => {}, this._pointerUpEvent = dd => {}, this._pointerCancelEvent = dd => {}, this._pointerCancelTouch = dd => {}, this._pointerLeaveEvent = dd => {}, this._pointerWheelEvent = dd => {}, this._pointerBlurEvent = dd => {}, this._pointerMacOsChromeOutEvent = dd => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, pd.f)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, pd.f)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = dd => {}, this._gamepadDisconnectedEvent = dd => {}, this._eventPrefix = Wd.g.GetPointerPrefix(dd), this._engine = dd, this._onDeviceConnected = Od, this._onDeviceDisconnected = md, this._onInputChanged = Fd, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(dd, Od, md) {
        const Fd = this._inputs[dd][Od];
        if (!Fd) throw `Unable to find device ${Jd[dd]}`;
        dd >= Jd.DualShock && dd <= Jd.DualSense && this._updateDevice(dd, Od, md);
        const Rd = Fd[md];
        if (void 0 === Rd) throw `Unable to find input ${md} for device ${Jd[dd]} in slot ${Od}`;
        return md === Ud.Move && Wd.g.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), Rd
      }
      isDeviceAvailable(dd) {
        return void 0 !== this._inputs[dd]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const dd = this?._engine.getInputElement();
        if (dd && (!this._eventsAttached || this._elementToAttachTo !== dd)) {
          if (this._disableEvents(), this._inputs)
            for (const dd of this._inputs)
              if (dd)
                for (const Od in dd) {
                  const md = dd[+Od];
                  if (md)
                    for (let dd = 0; dd < md.length; dd++) md[dd] = 0
                }
          this._elementToAttachTo = dd, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const dd = navigator.getGamepads();
          for (const Od of dd) Od && this._addGamePad(Od)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(Jd.Mouse, 0, 0, 0)
      }
      _addGamePad(dd) {
        const Od = this._getGamepadDeviceType(dd.id),
          md = dd.index;
        this._gamepads = this._gamepads || new Array(dd.index + 1), this._registerDevice(Od, md, dd.buttons.length + dd.axes.length), this._gamepads[md] = Od
      }
      _addPointerDevice(dd, Od, md, Wd) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(dd, Od, nd);
        const Fd = this._inputs[dd][Od];
        Fd[0] = md, Fd[1] = Wd
      }
      _registerDevice(dd, Od, md) {
        if (void 0 === Od) throw `Unable to register device ${Jd[dd]} to undefined slot.`;
        if (this._inputs[dd] || (this._inputs[dd] = {}), !this._inputs[dd][Od]) {
          const Wd = new Array(md);
          Wd.fill(0), this._inputs[dd][Od] = Wd, this._onDeviceConnected(dd, Od)
        }
      }
      _unregisterDevice(dd, Od) {
        this._inputs[dd][Od] && (delete this._inputs[dd][Od], this._onDeviceDisconnected(dd, Od))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = dd => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Jd.Keyboard, 0, 255));
          const Od = this._inputs[Jd.Keyboard][0];
          if (Od) {
            Od[dd.keyCode] = 1;
            const md = dd;
            md.inputIndex = dd.keyCode, this._usingMacOs && dd.metaKey && "Meta" !== dd.key && (this._metaKeys.includes(dd.keyCode) || this._metaKeys.push(dd.keyCode)), this._onInputChanged(Jd.Keyboard, 0, md)
          }
        }, this._keyboardUpEvent = dd => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Jd.Keyboard, 0, 255));
          const Od = this._inputs[Jd.Keyboard][0];
          if (Od) {
            Od[dd.keyCode] = 0;
            const md = dd;
            if (md.inputIndex = dd.keyCode, this._usingMacOs && "Meta" === dd.key && this._metaKeys.length > 0) {
              for (const dd of this._metaKeys) {
                const md = rd.CreateDeviceEvent(Jd.Keyboard, 0, dd, 0, this, this._elementToAttachTo);
                Od[dd] = 0, this._onInputChanged(Jd.Keyboard, 0, md)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(Jd.Keyboard, 0, md)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const dd = this._inputs[Jd.Keyboard][0];
            for (let Od = 0; Od < dd.length; Od++)
              if (0 !== dd[Od]) {
                dd[Od] = 0;
                const md = rd.CreateDeviceEvent(Jd.Keyboard, 0, Od, 0, this, this._elementToAttachTo);
                this._onInputChanged(Jd.Keyboard, 0, md)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, pd.f)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let Wd = 0; Wd < this._maxTouchPoints; Wd++) this._activeTouchIds[Wd] = -1;
        this._pointerMoveEvent = dd => {
          const Od = this._getPointerType(dd);
          let md = Od === Jd.Mouse ? 0 : this._activeTouchIds.indexOf(dd.pointerId);
          if (Od === Jd.Touch && -1 === md) {
            if (0 === dd.buttons) return;
            const Fd = this._activeTouchIds.indexOf(-1);
            if (!(Fd >= 0)) return void Wd.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            md = Fd, this._activeTouchIds[Fd] = dd.pointerId, this._onDeviceConnected(Od, md)
          }
          this._inputs[Od] || (this._inputs[Od] = {}), this._inputs[Od][md] || this._addPointerDevice(Od, md, dd.clientX, dd.clientY);
          const Fd = this._inputs[Od][md];
          if (Fd) {
            const Wd = dd;
            Wd.inputIndex = Ud.Move, Fd[Ud.Horizontal] = dd.clientX, Fd[Ud.Vertical] = dd.clientY, Od === Jd.Touch && 0 === Fd[Ud.LeftClick] && (Fd[Ud.LeftClick] = 1), void 0 === dd.pointerId && (dd.pointerId = this._mouseId), this._onInputChanged(Od, md, Wd), this._usingSafari || -1 === dd.button || (Wd.inputIndex = dd.button + 2, Fd[dd.button + 2] = Fd[dd.button + 2] ? 0 : 1, this._onInputChanged(Od, md, Wd))
          }
        }, this._pointerDownEvent = dd => {
          const Od = this._getPointerType(dd);
          let md = Od === Jd.Mouse ? 0 : dd.pointerId;
          if (Od === Jd.Touch) {
            let Od = this._activeTouchIds.indexOf(dd.pointerId);
            if (-1 === Od && (Od = this._activeTouchIds.indexOf(-1)), !(Od >= 0)) return void Wd.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            md = Od, this._activeTouchIds[Od] = dd.pointerId
          }
          this._inputs[Od] || (this._inputs[Od] = {}), this._inputs[Od][md] ? Od === Jd.Touch && this._onDeviceConnected(Od, md) : this._addPointerDevice(Od, md, dd.clientX, dd.clientY);
          const Fd = this._inputs[Od][md];
          if (Fd) {
            const Wd = Fd[Ud.Horizontal],
              Xd = Fd[Ud.Vertical];
            if (Od === Jd.Mouse) {
              if (void 0 === dd.pointerId && (dd.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (Rd) {}
            } else if (dd.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(dd.pointerId)
            } catch (Rd) {}
            Fd[Ud.Horizontal] = dd.clientX, Fd[Ud.Vertical] = dd.clientY, Fd[dd.button + 2] = 1;
            const Kd = dd;
            Kd.inputIndex = dd.button + 2, this._onInputChanged(Od, md, Kd), Wd === dd.clientX && Xd === dd.clientY || (Kd.inputIndex = Ud.Move, this._onInputChanged(Od, md, Kd))
          }
        }, this._pointerUpEvent = dd => {
          const Od = this._getPointerType(dd),
            md = Od === Jd.Mouse ? 0 : this._activeTouchIds.indexOf(dd.pointerId);
          if (Od === Jd.Touch) {
            if (-1 === md) return;
            this._activeTouchIds[md] = -1
          }
          const Wd = this._inputs[Od]?.[md];
          let Fd = dd.button,
            Rd = Wd && 0 !== Wd[Fd + 2];
          if (!Rd && this._isUsingFirefox && this._usingMacOs && Wd && (Fd = 2 === Fd ? 0 : 2, Rd = 0 !== Wd[Fd + 2]), Rd) {
            const Rd = Wd[Ud.Horizontal],
              Xd = Wd[Ud.Vertical];
            Wd[Ud.Horizontal] = dd.clientX, Wd[Ud.Vertical] = dd.clientY, Wd[Fd + 2] = 0;
            const Kd = dd;
            void 0 === dd.pointerId && (dd.pointerId = this._mouseId), Rd === dd.clientX && Xd === dd.clientY || (Kd.inputIndex = Ud.Move, this._onInputChanged(Od, md, Kd)), Kd.inputIndex = Fd + 2, Od === Jd.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : dd.pointerId && this._elementToAttachTo.hasPointerCapture?.(dd.pointerId) && this._elementToAttachTo.releasePointerCapture(dd.pointerId), this._onInputChanged(Od, md, Kd), Od === Jd.Touch && this._onDeviceDisconnected(Od, md)
          }
        }, this._pointerCancelTouch = dd => {
          const Od = this._activeTouchIds.indexOf(dd);
          if (-1 === Od) return;
          this._elementToAttachTo.hasPointerCapture?.(dd) && this._elementToAttachTo.releasePointerCapture(dd), this._inputs[Jd.Touch][Od][Ud.LeftClick] = 0;
          const md = rd.CreateDeviceEvent(Jd.Touch, Od, Ud.LeftClick, 0, this, this._elementToAttachTo, dd);
          this._onInputChanged(Jd.Touch, Od, md), this._activeTouchIds[Od] = -1, this._onDeviceDisconnected(Jd.Touch, Od)
        }, this._pointerCancelEvent = dd => {
          if ("mouse" === dd.pointerType) {
            const dd = this._inputs[Jd.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Od = Ud.LeftClick; Od <= Ud.BrowserForward; Od++)
              if (1 === dd[Od]) {
                dd[Od] = 0;
                const md = rd.CreateDeviceEvent(Jd.Mouse, 0, Od, 0, this, this._elementToAttachTo);
                this._onInputChanged(Jd.Mouse, 0, md)
              }
          } else this._pointerCancelTouch(dd.pointerId)
        }, this._pointerLeaveEvent = dd => {
          "pen" === dd.pointerType && this._pointerCancelTouch(dd.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let dd = !1;
        const Od = function() {};
        try {
          const md = Object.defineProperty({}, "passive", {
            get: function() {
              dd = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", Od, md), this._elementToAttachTo.removeEventListener("test", Od, md)
        } catch (md) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(Jd.Mouse)) {
            const dd = this._inputs[Jd.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Od = Ud.LeftClick; Od <= Ud.BrowserForward; Od++)
              if (1 === dd[Od]) {
                dd[Od] = 0;
                const md = rd.CreateDeviceEvent(Jd.Mouse, 0, Od, 0, this, this._elementToAttachTo);
                this._onInputChanged(Jd.Mouse, 0, md)
              }
          }
          if (this.isDeviceAvailable(Jd.Touch)) {
            const dd = this._inputs[Jd.Touch];
            for (let Od = 0; Od < this._activeTouchIds.length; Od++) {
              const md = this._activeTouchIds[Od];
              if (this._elementToAttachTo.hasPointerCapture?.(md) && this._elementToAttachTo.releasePointerCapture(md), -1 !== md && 1 === dd[Od]?.[Ud.LeftClick]) {
                dd[Od][Ud.LeftClick] = 0;
                const Wd = rd.CreateDeviceEvent(Jd.Touch, Od, Ud.LeftClick, 0, this, this._elementToAttachTo, md);
                this._onInputChanged(Jd.Touch, Od, Wd), this._activeTouchIds[Od] = -1, this._onDeviceDisconnected(Jd.Touch, Od)
              }
            }
          }
        }, this._pointerWheelEvent = dd => {
          const Od = Jd.Mouse;
          this._inputs[Od] || (this._inputs[Od] = []), this._inputs[Od][0] || (this._pointerActive = !0, this._registerDevice(Od, 0, nd));
          const md = this._inputs[Od][0];
          if (md) {
            md[Ud.MouseWheelX] = dd.deltaX || 0, md[Ud.MouseWheelY] = dd.deltaY || dd.wheelDelta || 0, md[Ud.MouseWheelZ] = dd.deltaZ || 0;
            const Wd = dd;
            void 0 === dd.pointerId && (dd.pointerId = this._mouseId), 0 !== md[Ud.MouseWheelX] && (Wd.inputIndex = Ud.MouseWheelX, this._onInputChanged(Od, 0, Wd)), 0 !== md[Ud.MouseWheelY] && (Wd.inputIndex = Ud.MouseWheelY, this._onInputChanged(Od, 0, Wd)), 0 !== md[Ud.MouseWheelZ] && (Wd.inputIndex = Ud.MouseWheelZ, this._onInputChanged(Od, 0, Wd))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = dd => {
          dd.buttons > 1 && this._pointerCancelEvent(dd)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!dd && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(Jd.Mouse)) {
            const dd = this._inputs[Jd.Mouse][0];
            dd[Ud.MouseWheelX] = 0, dd[Ud.MouseWheelY] = 0, dd[Ud.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = dd => {
          this._addGamePad(dd.gamepad)
        }, this._gamepadDisconnectedEvent = dd => {
          if (this._gamepads) {
            const Od = this._getGamepadDeviceType(dd.gamepad.id),
              md = dd.gamepad.index;
            this._unregisterDevice(Od, md), delete this._gamepads[md]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(dd, Od, md) {
        const Wd = navigator.getGamepads()[Od];
        if (Wd && dd === this._gamepads[Od]) {
          const Fd = this._inputs[dd][Od];
          md >= Wd.buttons.length ? Fd[md] = Wd.axes[md - Wd.buttons.length].valueOf() : Fd[md] = Wd.buttons[md].value
        }
      }
      _getGamepadDeviceType(dd) {
        return -1 !== dd.indexOf("054c") ? -1 !== dd.indexOf("0ce6") ? Jd.DualSense : Jd.DualShock : -1 !== dd.indexOf("Xbox One") || -1 !== dd.search("Xbox 360") || -1 !== dd.search("xinput") || -1 !== dd.indexOf("045e") && -1 === dd.indexOf("Surface Dock") ? Jd.Xbox : -1 !== dd.indexOf("057e") ? Jd.Switch : Jd.Generic
      }
      _getPointerType(dd) {
        let Od = Jd.Mouse;
        return ("touch" === dd.pointerType || "pen" === dd.pointerType || dd.touches) && (Od = Jd.Touch), Od
      }
    }
    class Pd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = Od, this.deviceSlot = md, this.onInputChangedObservable = new Xd.c, this._deviceInputSystem = dd
      }
      getInput(dd) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, dd)
      }
    }
    class zd {
      constructor(dd) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = dd => {
          for (let Od = 0; Od < this._devices.length; Od++) {
            const md = this._devices[Od];
            for (const Wd in md) {
              const md = +Wd;
              dd._addDevice(new Pd(this._deviceInputSystem, Od, md))
            }
          }
          this._registeredManagers.push(dd)
        }, this.unregisterManager = dd => {
          const Od = this._registeredManagers.indexOf(dd);
          Od > -1 && this._registeredManagers.splice(Od, 1)
        };
        const Od = Object.keys(Jd).length / 2;
        this._devices = new Array(Od);
        const md = (dd, Od) => {
            this._devices[dd] || (this._devices[dd] = new Array), this._devices[dd][Od] || (this._devices[dd][Od] = Od);
            for (const md of this._registeredManagers) {
              const Wd = new Pd(this._deviceInputSystem, dd, Od);
              md._addDevice(Wd)
            }
          },
          Wd = (dd, Od) => {
            this._devices[dd]?.[Od] && delete this._devices[dd][Od];
            for (const md of this._registeredManagers) md._removeDevice(dd, Od)
          },
          Fd = (dd, Od, md) => {
            if (md)
              for (const Wd of this._registeredManagers) Wd._onInputChanged(dd, Od, md)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new Gd(md, Wd, Fd) : this._deviceInputSystem = new Ld(dd, md, Wd, Fd)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class cd {
      getDeviceSource(dd, Od) {
        if (void 0 === Od) {
          if (void 0 === this._firstDevice[dd]) return null;
          Od = this._firstDevice[dd]
        }
        return this._devices[dd] && void 0 !== this._devices[dd][Od] ? this._devices[dd][Od] : null
      }
      getDeviceSources(dd) {
        return this._devices[dd] ? this._devices[dd].filter((dd => !!dd)) : []
      }
      constructor(dd) {
        const Od = Object.keys(Jd).length / 2;
        this._devices = new Array(Od), this._firstDevice = new Array(Od), this._engine = dd, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new zd(dd)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new Xd.c((dd => {
          for (const Od of this._devices)
            if (Od)
              for (const md of Od) md && this.onDeviceConnectedObservable.notifyObserver(dd, md)
        })), this.onDeviceDisconnectedObservable = new Xd.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = dd.cV.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.cV.remove(this._onDisposeObserver)
      }
      _addDevice(dd) {
        this._devices[dd.deviceType] || (this._devices[dd.deviceType] = []), this._devices[dd.deviceType][dd.deviceSlot] || (this._devices[dd.deviceType][dd.deviceSlot] = dd, this._updateFirstDevices(dd.deviceType)), this.onDeviceConnectedObservable.notifyObservers(dd)
      }
      _removeDevice(dd, Od) {
        const md = this._devices[dd]?.[Od];
        this.onDeviceDisconnectedObservable.notifyObservers(md), this._devices[dd]?.[Od] && delete this._devices[dd][Od], this._updateFirstDevices(dd)
      }
      _onInputChanged(dd, Od, md) {
        this._devices[dd]?.[Od]?.onInputChangedObservable.notifyObservers(md)
      }
      _updateFirstDevices(dd) {
        switch (dd) {
          case Jd.Keyboard:
          case Jd.Mouse:
            this._firstDevice[dd] = 0;
            break;
          case Jd.Touch:
          case Jd.DualSense:
          case Jd.DualShock:
          case Jd.Xbox:
          case Jd.Switch:
          case Jd.Generic: {
            delete this._firstDevice[dd];
            const Od = this._devices[dd];
            if (Od)
              for (let md = 0; md < Od.length; md++)
                if (Od[md]) {
                  this._firstDevice[dd] = md;
                  break
                } break
          }
        }
      }
    }
    var jd = md(42113);
    class Dd {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get CK() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(dd) {
        this._singleClick = dd
      }
      set CK(dd) {
        this._doubleClick = dd
      }
      set hasSwiped(dd) {
        this._hasSwiped = dd
      }
      set ignore(dd) {
        this._ignore = dd
      }
    }
    class ed {
      constructor(dd) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new Qd.i(0, 0), this._previousStartingPointerPosition = new Qd.i(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = dd || Yd.e.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(dd) {
        return this._meshUnderPointerId[dd] || null
      }
      get unTranslatedPointer() {
        return new Qd.i(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(dd) {
        this._pointerX = dd
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(dd) {
        this._pointerY = dd
      }
      _updatePointerPosition(dd) {
        const Od = this._scene.Iq().getInputElementClientRect();
        Od && (this._pointerX = dd.clientX - Od.left, this._pointerY = dd.clientY - Od.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(dd, Od) {
        const md = this._scene,
          Wd = md.Iq(),
          Fd = Wd.getInputElement();
        Fd && (Fd.tabIndex = Wd.canvasTabIndex, md.doNotHandleCursors || (Fd.style.cursor = md.defaultCursor)), this._setCursorAndPointerOverMesh(dd, Od, md);
        for (const Kd of md._pointerMoveStage) {
          dd = dd || this._pickMove(Od);
          const md = !!dd?.pickedMesh;
          dd = Kd.action(this._unTranslatedPointerX, this._unTranslatedPointerY, dd, md, Fd)
        }
        const Rd = Od.inputIndex >= Ud.MouseWheelX && Od.inputIndex <= Ud.MouseWheelZ ? wd.b.POINTERWHEEL : wd.b.POINTERMOVE;
        let Xd;
        md.onPointerMove && (dd = dd || this._pickMove(Od), md.onPointerMove(Od, dd, Rd)), dd ? (Xd = new wd.i(Rd, Od, dd), this._setRayOnPointerInfo(dd, Od)) : (Xd = new wd.i(Rd, Od, null, this), this._movePointerInfo = Xd), md.onPointerObservable.hasObservers() && md.onPointerObservable.notifyObservers(Xd, Rd)
      }
      _setRayOnPointerInfo(dd, Od) {
        const md = this._scene;
        dd && jd.c._IsPickingAvailable && (dd.ray || (dd.ray = md.createPickingRay(Od.offsetX, Od.offsetY, Qd.d.Identity(), md.activeCamera)))
      }
      _addCameraPointerObserver(dd, Od) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(dd, Od)
      }
      _removeCameraPointerObserver(dd) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(dd)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(dd, Od, md) {
        const Wd = this._scene,
          Fd = new wd.f(md, Od, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return dd && (Fd.originalPickingInfo = dd, Fd.ray = dd.ray, "xr-near" === Od.pointerType && dd.originMesh && (Fd.nearInteractionPickingInfo = dd)), Wd.onPrePointerObservable.notifyObservers(Fd, md), !!Fd.skipOnPointerObservable
      }
      _pickMove(dd) {
        const Od = this._scene,
          md = Od.xN(this._unTranslatedPointerX, this._unTranslatedPointerY, Od.pointerMovePredicate, Od.pointerMoveFastCheck, Od.cameraToUseForPointers, Od.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(md, dd, Od), md
      }
      _updateMeshUnderPointer() {
        const dd = this._scene;
        if (!dd.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || dd.skipPointerMovePicking || !dd.cameraToUseForPointers && !dd.activeCamera) return;
        this._ensurePointerMovePredicate();
        const Od = this._pointerX,
          md = this._pointerY,
          Wd = this._unTranslatedPointerX,
          Fd = this._unTranslatedPointerY;
        for (const Rd of this._latestPointerMoveEvents.values()) this._pointerX = Rd.pointerX, this._pointerY = Rd.pointerY, this._unTranslatedPointerX = Rd.unTranslatedPointerX, this._unTranslatedPointerY = Rd.unTranslatedPointerY, this._pickMove(Rd.event);
        this._pointerX = Od, this._pointerY = md, this._unTranslatedPointerX = Wd, this._unTranslatedPointerY = Fd
      }
      _ensurePointerMovePredicate() {
        const dd = this._scene;
        dd.pointerMovePredicate || (dd.pointerMovePredicate = Od => (Od._isPointerMovePickable ?? Od.my) && Od.isVisible && Od.isReady() && Od.isEnabled() && (Od.enablePointerMoveEvents || dd.constantlyUpdateMeshUnderPointer || null !== Od._getActionManagerForTrigger()) && (!dd.cameraToUseForPointers || 0 !== (dd.cameraToUseForPointers.layerMask & Od.layerMask)))
      }
      _setCursorAndPointerOverMesh(dd, Od, md) {
        const Wd = md.Iq().getInputElement();
        if (dd?.pickedMesh) {
          if (this.setPointerOverMesh(dd.pickedMesh, Od.pointerId, dd, Od), !md.doNotHandleCursors && Wd && this._pointerOverMesh) {
            const dd = this._pointerOverMesh._getActionManagerForTrigger();
            dd && dd.hasPointerTriggers && (Wd.style.cursor = dd.hoverCursor || md.hoverCursor)
          }
        } else this.setPointerOverMesh(null, Od.pointerId, dd, Od)
      }
      simulatePointerMove(dd, Od) {
        const md = new PointerEvent("pointermove", Od);
        md.inputIndex = Ud.Move, this._checkPrePointerObservable(dd, md, wd.b.POINTERMOVE) || this._processPointerMove(dd, md)
      }
      simulatePointerDown(dd, Od) {
        const md = new PointerEvent("pointerdown", Od);
        md.inputIndex = md.button + 2, this._checkPrePointerObservable(dd, md, wd.b.POINTERDOWN) || this._processPointerDown(dd, md)
      }
      _processPointerDown(dd, Od) {
        const md = this._scene;
        if (dd?.pickedMesh) {
          this._pickedDownMesh = dd.pickedMesh;
          const Wd = dd.pickedMesh._getActionManagerForTrigger();
          if (Wd) {
            if (Wd.hasPickTriggers) switch (Wd.processTrigger(5, new qd(dd.pickedMesh, md.pointerX, md.pointerY, dd.pickedMesh, Od, dd)), Od.button) {
              case 0:
                Wd.processTrigger(2, new qd(dd.pickedMesh, md.pointerX, md.pointerY, dd.pickedMesh, Od, dd));
                break;
              case 1:
                Wd.processTrigger(4, new qd(dd.pickedMesh, md.pointerX, md.pointerY, dd.pickedMesh, Od, dd));
                break;
              case 2:
                Wd.processTrigger(3, new qd(dd.pickedMesh, md.pointerX, md.pointerY, dd.pickedMesh, Od, dd))
            }
            Wd.hasSpecificTrigger(8) && window.setTimeout((() => {
              const dd = md.xN(this._unTranslatedPointerX, this._unTranslatedPointerY, (dd => dd.my && dd.isVisible && dd.isReady() && dd.actionManager && dd.actionManager.hasSpecificTrigger(8) && dd === this._pickedDownMesh), !1, md.cameraToUseForPointers);
              dd?.pickedMesh && Wd && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > ed.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, Wd.processTrigger(8, qd.CreateNew(dd.pickedMesh, Od)))
            }), ed.LongPressDelay)
          }
        } else
          for (const Rd of md._pointerDownStage) dd = Rd.action(this._unTranslatedPointerX, this._unTranslatedPointerY, dd, Od, !1);
        let Wd;
        const Fd = wd.b.POINTERDOWN;
        dd ? (md.onPointerDown && md.onPointerDown(Od, dd, Fd), Wd = new wd.i(Fd, Od, dd), this._setRayOnPointerInfo(dd, Od)) : Wd = new wd.i(Fd, Od, null, this), md.onPointerObservable.hasObservers() && md.onPointerObservable.notifyObservers(Wd, Fd)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(dd, Od, md) {
        const Wd = new PointerEvent("pointerup", Od);
        Wd.inputIndex = Ud.Move;
        const Fd = new Dd;
        md ? Fd.CK = !0 : Fd.singleClick = !0, this._checkPrePointerObservable(dd, Wd, wd.b.POINTERUP) || this._processPointerUp(dd, Wd, Fd)
      }
      _processPointerUp(dd, Od, md) {
        const Wd = this._scene;
        if (dd?.pickedMesh) {
          if (this._pickedUpMesh = dd.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (Wd.onPointerPick && Wd.onPointerPick(Od, dd), md.singleClick && !md.ignore && Wd.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const md = wd.b.POINTERPICK,
              Fd = new wd.i(md, Od, dd);
            this._setRayOnPointerInfo(dd, Od), Wd.onPointerObservable.notifyObservers(Fd, md)
          }
          const Fd = dd.pickedMesh._getActionManagerForTrigger();
          if (Fd && !md.ignore) {
            Fd.processTrigger(7, qd.CreateNew(dd.pickedMesh, Od, dd)), !md.hasSwiped && md.singleClick && Fd.processTrigger(1, qd.CreateNew(dd.pickedMesh, Od, dd));
            const Wd = dd.pickedMesh._getActionManagerForTrigger(6);
            md.CK && Wd && Wd.processTrigger(6, qd.CreateNew(dd.pickedMesh, Od, dd))
          }
        } else if (!md.ignore)
          for (const Fd of Wd._pointerUpStage) dd = Fd.action(this._unTranslatedPointerX, this._unTranslatedPointerY, dd, Od, md.CK);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const dd = this._pickedDownMesh._getActionManagerForTrigger(16);
          dd && dd.processTrigger(16, qd.CreateNew(this._pickedDownMesh, Od))
        }
        if (!md.ignore) {
          const Fd = new wd.i(wd.b.POINTERUP, Od, dd);
          if (this._setRayOnPointerInfo(dd, Od), Wd.onPointerObservable.notifyObservers(Fd, wd.b.POINTERUP), Wd.onPointerUp && Wd.onPointerUp(Od, dd, wd.b.POINTERUP), !md.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let Fd = 0;
            if (md.singleClick ? Fd = wd.b.POINTERTAP : md.CK && (Fd = wd.b.POINTERDOUBLETAP), Fd) {
              const md = new wd.i(Fd, Od, dd);
              Wd.onPointerObservable.hasObservers() && Wd.onPointerObservable.hasSpecificMask(Fd) && Wd.onPointerObservable.notifyObservers(md, Fd)
            }
          }
        }
      }
      isPointerCaptured() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[dd]
      }
      attachControl() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Fd = this._scene,
          Rd = Fd.Iq();
        Wd || (Wd = Rd.getInputElement()), this._alreadyAttached && this.detachControl(), Wd && (this._alreadyAttachedTo = Wd), this._deviceSourceManager = new cd(Rd), this._initActionManager = dd => {
          if (!this._meshPickProceed) {
            const Od = Fd.skipPointerUpPicking || 0 === Fd._registeredActions && !this._checkForPicking() && !Fd.onPointerUp ? null : Fd.xN(this._unTranslatedPointerX, this._unTranslatedPointerY, Fd.pointerUpPredicate, Fd.pointerUpFastCheck, Fd.cameraToUseForPointers, Fd.pointerUpTrianglePredicate);
            this._currentPickResult = Od, Od && (dd = Od.hit && Od.pickedMesh ? Od.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return dd
        }, this._delayedSimpleClick = (dd, Od, md) => {
          if ((Date.now() - this._previousStartingPointerTime > ed.DoubleClickDelay && !this._doubleClickOccured || dd !== this._previousButtonPressed) && (this._doubleClickOccured = !1, Od.singleClick = !0, Od.ignore = !1, this._delayedClicks[dd])) {
            const Od = this._delayedClicks[dd].evt,
              md = wd.b.POINTERTAP,
              Wd = new wd.i(md, Od, this._currentPickResult);
            Fd.onPointerObservable.hasObservers() && Fd.onPointerObservable.hasSpecificMask(md) && Fd.onPointerObservable.notifyObservers(Wd, md), this._delayedClicks[dd] = null
          }
        }, this._initClickEvent = (dd, Od, md, Wd) => {
          const Fd = new Dd;
          this._currentPickResult = null;
          let Rd = null,
            Xd = dd.hasSpecificMask(wd.b.POINTERPICK) || Od.hasSpecificMask(wd.b.POINTERPICK) || dd.hasSpecificMask(wd.b.POINTERTAP) || Od.hasSpecificMask(wd.b.POINTERTAP) || dd.hasSpecificMask(wd.b.POINTERDOUBLETAP) || Od.hasSpecificMask(wd.b.POINTERDOUBLETAP);
          !Xd && Ed && (Rd = this._initActionManager(Rd, Fd), Rd && (Xd = Rd.hasPickTriggers));
          let Kd = !1;
          if (Xd = Xd && !this._isMultiTouchGesture, Xd) {
            const Xd = md.button;
            if (Fd.hasSwiped = this._isPointerSwiping(), !Fd.hasSwiped) {
              let hd = !ed.ExclusiveDoubleClickMode;
              if (hd || (hd = !dd.hasSpecificMask(wd.b.POINTERDOUBLETAP) && !Od.hasSpecificMask(wd.b.POINTERDOUBLETAP), hd && !Ed.HasSpecificTrigger(6) && (Rd = this._initActionManager(Rd, Fd), Rd && (hd = !Rd.hasSpecificTrigger(6)))), hd)(Date.now() - this._previousStartingPointerTime > ed.DoubleClickDelay || Xd !== this._previousButtonPressed) && (Fd.singleClick = !0, Wd(Fd, this._currentPickResult), Kd = !0);
              else {
                const dd = {
                  evt: md,
                  clickInfo: Fd,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, Xd, Fd, Wd), ed.DoubleClickDelay)
                };
                this._delayedClicks[Xd] = dd
              }
              let vd = dd.hasSpecificMask(wd.b.POINTERDOUBLETAP) || Od.hasSpecificMask(wd.b.POINTERDOUBLETAP);
              !vd && Ed.HasSpecificTrigger(6) && (Rd = this._initActionManager(Rd, Fd), Rd && (vd = Rd.hasSpecificTrigger(6))), vd && (Xd === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < ed.DoubleClickDelay && !this._doubleClickOccured ? (Fd.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Xd, ed.ExclusiveDoubleClickMode ? (this._delayedClicks[Xd] && (clearTimeout(this._delayedClicks[Xd]?.timeoutId), this._delayedClicks[Xd] = null), Wd(Fd, this._previousPickResult)) : Wd(Fd, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, Fd.CK = !0, Fd.ignore = !1, ed.ExclusiveDoubleClickMode && this._delayedClicks[Xd] && (clearTimeout(this._delayedClicks[Xd]?.timeoutId), this._delayedClicks[Xd] = null), Wd(Fd, this._currentPickResult)), Kd = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Xd))
            }
          }
          Kd || Wd(Fd, this._currentPickResult)
        }, this._onPointerMove = dd => {
          if (this._updatePointerPosition(dd), this._latestPointerMoveEvents.set(dd.pointerId, {
              event: dd,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > ed.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > ed.DragMovementThreshold), Rd.isPointerLock && Rd._verifyPointerLock(), this._checkPrePointerObservable(null, dd, dd.inputIndex >= Ud.MouseWheelX && dd.inputIndex <= Ud.MouseWheelZ ? wd.b.POINTERWHEEL : wd.b.POINTERMOVE)) return;
          if (!Fd.cameraToUseForPointers && !Fd.activeCamera) return;
          if (Fd.skipPointerMovePicking) return void this._processPointerMove(new Nd.b, dd);
          this._ensurePointerMovePredicate();
          const Od = Fd._registeredActions > 0 || Fd.constantlyUpdateMeshUnderPointer ? this._pickMove(dd) : null;
          this._processPointerMove(Od, dd)
        }, this._onPointerDown = dd => {
          const Od = this._activePointerIds.indexOf(-1);
          if (-1 === Od ? this._activePointerIds.push(dd.pointerId) : this._activePointerIds[Od] = dd.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, ed.ExclusiveDoubleClickMode)
            for (let Wd = 0; Wd < this._delayedClicks.length; Wd++)
              if (this._delayedClicks[Wd])
                if (dd.button === Wd) clearTimeout(this._delayedClicks[Wd]?.timeoutId);
                else {
                  const dd = this._delayedClicks[Wd].clickInfo;
                  this._doubleClickOccured = !1, dd.singleClick = !0, dd.ignore = !1;
                  const Od = this._delayedClicks[Wd].evt,
                    md = wd.b.POINTERTAP,
                    Rd = new wd.i(md, Od, this._currentPickResult);
                  Fd.onPointerObservable.hasObservers() && Fd.onPointerObservable.hasSpecificMask(md) && Fd.onPointerObservable.notifyObservers(Rd, md), this._delayedClicks[Wd] = null
                } if (this._updatePointerPosition(dd), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = dd.button), Fd.preventDefaultOnPointerDown && Wd && (dd.preventDefault(), Wd.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, dd, wd.b.POINTERDOWN)) return;
          if (!Fd.cameraToUseForPointers && !Fd.activeCamera) return;
          let md;
          this._pointerCaptures[dd.pointerId] = !0, Fd.pointerDownPredicate || (Fd.pointerDownPredicate = dd => dd.my && dd.isVisible && dd.isReady() && dd.isEnabled() && (!Fd.cameraToUseForPointers || 0 !== (Fd.cameraToUseForPointers.layerMask & dd.layerMask))), this._pickedDownMesh = null, md = Fd.skipPointerDownPicking || 0 === Fd._registeredActions && !this._checkForPicking() && !Fd.onPointerDown ? new Nd.b : Fd.xN(this._unTranslatedPointerX, this._unTranslatedPointerY, Fd.pointerDownPredicate, Fd.pointerDownFastCheck, Fd.cameraToUseForPointers, Fd.pointerDownTrianglePredicate), this._processPointerDown(md, dd)
        }, this._onPointerUp = dd => {
          const Od = this._activePointerIds.indexOf(dd.pointerId); - 1 !== Od && (this._activePointerIds[Od] = -1, this._activePointerIdsCount--, "touch" === dd.pointerType && this._latestPointerMoveEvents.delete(dd.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(dd), Fd.preventDefaultOnPointerUp && Wd && (dd.preventDefault(), Wd.focus()), this._initClickEvent(Fd.onPrePointerObservable, Fd.onPointerObservable, dd, ((Od, md) => {
            if (Fd.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !Od.ignore)) {
              if (this._checkPrePointerObservable(null, dd, wd.b.POINTERUP)) return this._swipeButtonPressed === dd.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === dd.buttons && (this._pointerCaptures[dd.pointerId] = !1));
              Od.hasSwiped || (Od.singleClick && Fd.onPrePointerObservable.hasSpecificMask(wd.b.POINTERTAP) && this._checkPrePointerObservable(null, dd, wd.b.POINTERTAP) && (this._skipPointerTap = !0), Od.CK && Fd.onPrePointerObservable.hasSpecificMask(wd.b.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, dd, wd.b.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[dd.pointerId] ? (0 === dd.buttons && (this._pointerCaptures[dd.pointerId] = !1), (Fd.cameraToUseForPointers || Fd.activeCamera) && (Fd.pointerUpPredicate || (Fd.pointerUpPredicate = dd => dd.my && dd.isVisible && dd.isReady() && dd.isEnabled() && (!Fd.cameraToUseForPointers || 0 !== (Fd.cameraToUseForPointers.layerMask & dd.layerMask))), !this._meshPickProceed && (Ed && Ed.HasTriggers || this._checkForPicking() || Fd.onPointerUp) && this._initActionManager(null, Od), md || (md = this._currentPickResult), this._processPointerUp(md, dd, Od), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === dd.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === dd.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = dd => {
          const Od = Vd.e.KEYDOWN;
          if (Fd.onPreKeyboardObservable.hasObservers()) {
            const md = new Vd.f(Od, dd);
            if (Fd.onPreKeyboardObservable.notifyObservers(md, Od), md.skipOnKeyboardObservable) return
          }
          if (Fd.onKeyboardObservable.hasObservers()) {
            const md = new Vd.h(Od, dd);
            Fd.onKeyboardObservable.notifyObservers(md, Od)
          }
          Fd.actionManager && Fd.actionManager.processTrigger(14, qd.CreateNewFromScene(Fd, dd))
        }, this._onKeyUp = dd => {
          const Od = Vd.e.KEYUP;
          if (Fd.onPreKeyboardObservable.hasObservers()) {
            const md = new Vd.f(Od, dd);
            if (Fd.onPreKeyboardObservable.notifyObservers(md, Od), md.skipOnKeyboardObservable) return
          }
          if (Fd.onKeyboardObservable.hasObservers()) {
            const md = new Vd.h(Od, dd);
            Fd.onKeyboardObservable.notifyObservers(md, Od)
          }
          Fd.actionManager && Fd.actionManager.processTrigger(15, qd.CreateNewFromScene(Fd, dd))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((Wd => {
          Wd.deviceType === Jd.Mouse ? Wd.onInputChangedObservable.add((Fd => {
            this._originMouseEvent = Fd, Fd.inputIndex === Ud.LeftClick || Fd.inputIndex === Ud.MiddleClick || Fd.inputIndex === Ud.RightClick || Fd.inputIndex === Ud.BrowserBack || Fd.inputIndex === Ud.BrowserForward ? Od && 1 === Wd.getInput(Fd.inputIndex) ? this._onPointerDown(Fd) : dd && 0 === Wd.getInput(Fd.inputIndex) && this._onPointerUp(Fd) : md && (Fd.inputIndex === Ud.Move ? this._onPointerMove(Fd) : Fd.inputIndex !== Ud.MouseWheelX && Fd.inputIndex !== Ud.MouseWheelY && Fd.inputIndex !== Ud.MouseWheelZ || this._onPointerMove(Fd))
          })) : Wd.deviceType === Jd.Touch ? Wd.onInputChangedObservable.add((Fd => {
            Fd.inputIndex === Ud.LeftClick && (Od && 1 === Wd.getInput(Fd.inputIndex) ? (this._onPointerDown(Fd), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : dd && 0 === Wd.getInput(Fd.inputIndex) && (this._onPointerUp(Fd), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), md && Fd.inputIndex === Ud.Move && this._onPointerMove(Fd)
          })) : Wd.deviceType === Jd.Keyboard && Wd.onInputChangedObservable.add((dd => {
            "keydown" === dd.type ? this._onKeyDown(dd) : "keyup" === dd.type && this._onKeyUp(dd)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[Od] === dd && (!dd || !dd._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const Fd = this._meshUnderPointerId[Od];
        let Rd;
        Fd && (Rd = Fd._getActionManagerForTrigger(10), Rd && Rd.processTrigger(10, new qd(Fd, this._pointerX, this._pointerY, dd, Wd, {
          pointerId: Od
        }))), dd ? (this._meshUnderPointerId[Od] = dd, this._pointerOverMesh = dd, Rd = dd._getActionManagerForTrigger(9), Rd && Rd.processTrigger(9, new qd(dd, this._pointerX, this._pointerY, dd, Wd, {
          pointerId: Od,
          pickResult: md
        }))) : (delete this._meshUnderPointerId[Od], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: dd,
          pointerId: Od
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(dd) {
        this._pointerOverMesh === dd && (this._pointerOverMesh = null), this._pickedDownMesh === dd && (this._pickedDownMesh = null), this._pickedUpMesh === dd && (this._pickedUpMesh = null);
        for (const Od in this._meshUnderPointerId) this._meshUnderPointerId[Od] === dd && delete this._meshUnderPointerId[Od]
      }
    }
    ed.DragMovementThreshold = 10, ed.LongPressDelay = 500, ed.DoubleClickDelay = 300, ed.ExclusiveDoubleClickMode = !1;
    var Id = md(41878),
      ld = md(38741),
      Cd = md(39297);
    class Zd {
      static get UniqueId() {
        const dd = this._UniqueIdCounter;
        return this._UniqueIdCounter++, dd
      }
    }
    Zd._UniqueIdCounter = 1;
    var kd = md(41961),
      fd = md(42118),
      Md = md(38647);
    class dO {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var OO, mO, WO, FO, RO, XO, KO, hO, vO, QO, tO, oO, NO, qO, HO, yO, bO, TO, pO, YO, gO, wO, aO, EO, JO, UO, xO, BO, SO, sO, uO, VO, iO, AO, rO, GO, nO, LO, PO, zO, cO, jO, DO, eO, IO, lO, CO, ZO, kO, fO, MO, dm, Om, mm = md(40262),
      Wm = md(38669);
    const Fm = new Qd.k,
      Rm = new Qd.k;
    var Xm;
    ! function(dd) {
      dd[dd.BackwardCompatible = 0] = "BackwardCompatible", dd[dd.Intermediate = 1] = "Intermediate", dd[dd.Aggressive = 2] = "Aggressive"
    }(Xm || (Xm = {}));
    class Km {
      static DefaultMaterialFactory(dd) {
        throw (0, gd.m)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, gd.m)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(dd) {
        dd !== this._clearColor && (this._clearColor = dd, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(dd) {
        if (dd !== this._performancePriority) {
          switch (this._performancePriority = dd, dd) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(dd)
        }
      }
      set forceWireframe(dd) {
        this._forceWireframe !== dd && (this._forceWireframe = dd, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(dd) {
        this._skipFrustumClipping !== dd && (this._skipFrustumClipping = dd)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(dd) {
        this._forcePointsCloud !== dd && (this._forcePointsCloud = dd, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(dd) {
        this._environmentTexture !== dd && (this._environmentTexture = dd, this.onEnvironmentTextureChangedObservable.notifyObservers(dd), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let dd = [];
        dd = dd.concat(this.meshes), dd = dd.concat(this.lights), dd = dd.concat(this.cameras), dd = dd.concat(this.transformNodes);
        for (const Od of this.skeletons) dd = dd.concat(Od.bones);
        return dd
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(dd) {
        this._animationPropertiesOverride = dd
      }
      set onDispose(dd) {
        this._onDisposeObserver && this.cV.remove(this._onDisposeObserver), this._onDisposeObserver = this.cV.add(dd)
      }
      set beforeRender(dd) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), dd && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(dd))
      }
      set afterRender(dd) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), dd && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(dd))
      }
      set beforeCameraRender(dd) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(dd)
      }
      set afterCameraRender(dd) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(dd)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(dd) {
        this._pointerPickingConfiguration.pointerDownPredicate = dd
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(dd) {
        this._pointerPickingConfiguration.pointerUpPredicate = dd
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(dd) {
        this._pointerPickingConfiguration.pointerMovePredicate = dd
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(dd) {
        this._pointerPickingConfiguration.pointerDownFastCheck = dd
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(dd) {
        this._pointerPickingConfiguration.pointerUpFastCheck = dd
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(dd) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = dd
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(dd) {
        this._pointerPickingConfiguration.skipPointerMovePicking = dd
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(dd) {
        this._pointerPickingConfiguration.skipPointerDownPicking = dd
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(dd) {
        this._pointerPickingConfiguration.skipPointerUpPicking = dd
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return ed.DragMovementThreshold
      }
      static set DragMovementThreshold(dd) {
        ed.DragMovementThreshold = dd
      }
      static get LongPressDelay() {
        return ed.LongPressDelay
      }
      static set LongPressDelay(dd) {
        ed.LongPressDelay = dd
      }
      static get DoubleClickDelay() {
        return ed.DoubleClickDelay
      }
      static set DoubleClickDelay(dd) {
        ed.DoubleClickDelay = dd
      }
      static get ExclusiveDoubleClickMode() {
        return ed.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(dd) {
        ed.ExclusiveDoubleClickMode = dd
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? Qd.j.ZeroReadOnly
      }
      bindEyePosition(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Wd = this._eyePosition,
          Fd = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          Rd = this.floatingOriginOffset,
          Xd = Fm.set(Wd.x, Wd.y, Wd.z, Fd ? -1 : 1),
          Kd = Xd.subtractFromFloatsToRef(Rd.x, Rd.y, Rd.z, 0, Rm);
        return dd && (md ? dd.setFloat3(Od, Kd.x, Kd.y, Kd.z) : dd.setVector4(Od, Kd)), Xd
      }
      finalizeSceneUbo() {
        const dd = this.getSceneUniformBuffer(),
          Od = this.bindEyePosition(null),
          md = this.floatingOriginOffset;
        return dd.updateFloat4("vEyePosition", Od.x - md.x, Od.y - md.y, Od.z - md.z, Od.w), dd.update(), dd
      }
      set useRightHandedSystem(dd) {
        this._useRightHandedSystem !== dd && (this._useRightHandedSystem = dd, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(dd) {
        this._currentStepId = dd
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(dd) {
        this._fogEnabled !== dd && (this._fogEnabled = dd, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(dd) {
        this._fogMode !== dd && (this._fogMode = dd, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(dd) {
        this._shadowsEnabled !== dd && (this._shadowsEnabled = dd, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(dd) {
        this._lightsEnabled !== dd && (this._lightsEnabled = dd, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(dd) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), dd && (this._unObserveActiveCameras = (0, Md.i)(dd, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = dd
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(dd) {
        dd !== this._activeCamera && (this._activeCamera = dd, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return Km.DefaultMaterialFactory !== Km._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = Km.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(dd) {
        this._defaultMaterial = dd
      }
      set texturesEnabled(dd) {
        this._texturesEnabled !== dd && (this._texturesEnabled = dd, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(dd) {
        if (this._frameGraph) return this._frameGraph = dd, void(dd || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = dd, dd && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(dd) {
        this._skeletonsEnabled !== dd && (this._skeletonsEnabled = dd, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = Km.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const dd of this._transientComponents) dd.register();
          this._transientComponents.length = 0
        }
      }
      yFd(dd) {
        this._components.push(dd), this._transientComponents.push(dd);
        const Od = dd;
        Od.addFromContainer && Od.serialize && this._serializableComponents.push(Od)
      }
      _getComponent(dd) {
        for (const Od of this._components)
          if (Od.name === dd) return Od;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(dd, Od) {
        this._inputManager = new ed(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new ld.f(.2, .2, .3, 1), this.onClearColorChangedObservable = new Xd.c, this.ambientColor = new ld.d(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new Xd.c, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.kE = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.cV = new Xd.c, this._onDisposeObserver = null, this.onBeforeRenderObservable = new Xd.c, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new Xd.c, this.onAfterRenderCameraObservable = new Xd.c, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new Xd.c, this.onAfterAnimationsObservable = new Xd.c, this.onBeforeDrawPhaseObservable = new Xd.c, this.onAfterDrawPhaseObservable = new Xd.c, this.onReadyObservable = new Xd.c, this.onBeforeCameraRenderObservable = new Xd.c, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new Xd.c, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new Xd.c, this.onAfterActiveMeshesEvaluationObservable = new Xd.c, this.onBeforeParticlesRenderingObservable = new Xd.c, this.onAfterParticlesRenderingObservable = new Xd.c, this.onDataLoadedObservable = new Xd.c, this.onNewCameraAddedObservable = new Xd.c, this.onCameraRemovedObservable = new Xd.c, this.onNewLightAddedObservable = new Xd.c, this.onLightRemovedObservable = new Xd.c, this.onNewGeometryAddedObservable = new Xd.c, this.onGeometryRemovedObservable = new Xd.c, this.onNewTransformNodeAddedObservable = new Xd.c, this.onTransformNodeRemovedObservable = new Xd.c, this.onNewMeshAddedObservable = new Xd.c, this.onMeshRemovedObservable = new Xd.c, this.onNewSkeletonAddedObservable = new Xd.c, this.onSkeletonRemovedObservable = new Xd.c, this.onNewParticleSystemAddedObservable = new Xd.c, this.onParticleSystemRemovedObservable = new Xd.c, this.onNewAnimationGroupAddedObservable = new Xd.c, this.onAnimationGroupRemovedObservable = new Xd.c, this.onNewMaterialAddedObservable = new Xd.c, this.onNewMultiMaterialAddedObservable = new Xd.c, this.onMaterialRemovedObservable = new Xd.c, this.onMultiMaterialRemovedObservable = new Xd.c, this.onNewTextureAddedObservable = new Xd.c, this.onTextureRemovedObservable = new Xd.c, this.onNewFrameGraphAddedObservable = new Xd.c, this.onFrameGraphRemovedObservable = new Xd.c, this.onNewObjectRendererAddedObservable = new Xd.c, this.onObjectRendererRemovedObservable = new Xd.c, this.onNewPostProcessAddedObservable = new Xd.c, this.onPostProcessRemovedObservable = new Xd.c, this.onNewEffectLayerAddedObservable = new Xd.c, this.onEffectLayerRemovedObservable = new Xd.c, this.onBeforeRenderTargetsRenderObservable = new Xd.c, this.onAfterRenderTargetsRenderObservable = new Xd.c, this.onBeforeStepObservable = new Xd.c, this.onAfterStepObservable = new Xd.c, this.onActiveCameraChanged = new Xd.c, this.onActiveCamerasChanged = new Xd.c, this.onBeforeRenderingGroupObservable = new Xd.c, this.onAfterRenderingGroupObservable = new Xd.c, this.onMeshImportedObservable = new Xd.c, this.onAnimationFileImportedObservable = new Xd.c, this.onEnvironmentTextureChangedObservable = new Xd.c, this.onMeshUnderPointerUpdatedObservable = new Xd.c, this._registeredForLateAnimationBindings = new Kd.c(256), this._pointerPickingConfiguration = new dO, this.onPrePointerObservable = new Xd.c, this.onPointerObservable = new Xd.c, this.onPreKeyboardObservable = new Xd.c, this.onKeyboardObservable = new Xd.c, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = Km.FOGMODE_NONE, this.fogColor = new ld.d(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.jD = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new Qd.j(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new Kd.c(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new Id.b, this._activeIndices = new Id.b, this._activeParticles = new Id.b, this._activeBones = new Id.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new Kd.e(256), this._processedMaterials = new Kd.e(256), this._renderTargets = new Kd.c(256), this._materialsRenderTargets = new Kd.c(256), this._activeParticleSystems = new Kd.e(256), this._activeSkeletons = new Kd.c(32), this._softwareSkinnedMeshes = new Kd.c(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = Qd.d.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = Td.d.Create(), this._beforeClearStage = Td.d.Create(), this._beforeRenderTargetClearStage = Td.d.Create(), this._gatherRenderTargetsStage = Td.d.Create(), this._gatherActiveCameraRenderTargetsStage = Td.d.Create(), this._isReadyForMeshStage = Td.d.Create(), this._beforeEvaluateActiveMeshStage = Td.d.Create(), this._evaluateSubMeshStage = Td.d.Create(), this._preActiveMeshStage = Td.d.Create(), this._cameraDrawRenderTargetStage = Td.d.Create(), this._beforeCameraDrawStage = Td.d.Create(), this._beforeRenderTargetDrawStage = Td.d.Create(), this._beforeRenderingGroupDrawStage = Td.d.Create(), this._beforeRenderingMeshStage = Td.d.Create(), this._afterRenderingMeshStage = Td.d.Create(), this._afterRenderingGroupDrawStage = Td.d.Create(), this._afterCameraDrawStage = Td.d.Create(), this._afterCameraPostProcessStage = Td.d.Create(), this._afterRenderTargetDrawStage = Td.d.Create(), this._afterRenderTargetPostProcessStage = Td.d.Create(), this._afterRenderStage = Td.d.Create(), this._pointerMoveStage = Td.d.Create(), this._pointerDownStage = Td.d.Create(), this._pointerUpStage = Td.d.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new Xd.c, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const md = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...Od
        };
        this.defaultCameraLayerMask = md.defaultCameraLayerMask, this.defaultRenderableLayerMask = md.defaultRenderableLayerMask, dd = this._engine = dd || Yd.e.LastCreatedEngine, md.virtual ? dd._virtualScenes.push(this) : (Yd.e._LastCreatedScene = this, dd.scenes.push(this)), (dd.getCreationOptions().useLargeWorldRendering || Od?.useFloatingOrigin) && ((0, yd.f)(), this._floatingOriginScene = this, yd.d.zV = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new bd.c(this), Hd.d && (this.postProcessManager = new Hd.d(this)), (0, pd.h)() && this.attachControl(), this._createUbo(), td.b && (this._imageProcessingConfiguration = new td.b), this.setDefaultCandidateProviders(), md.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = md.useMaterialMeshMap, this.useClonedMeshMap = md.useClonedMeshMap, Od && Od.virtual || dd.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(dd) {
        return this._defaultSubMeshCandidates.data = dd.ZE, this._defaultSubMeshCandidates.length = dd.ZE.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = dd => this._getDefaultSubMeshCandidates(dd), this.getIntersectingSubMeshCandidates = (dd, Od) => this._getDefaultSubMeshCandidates(dd), this.getCollidingSubMeshCandidates = (dd, Od) => this._getDefaultSubMeshCandidates(dd)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(dd) {
        this._inputManager.pointerX = dd
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(dd) {
        this._inputManager.pointerY = dd
      }
      getCachedMaterial() {
        return this._cachedMaterial
      }
      getCachedEffect() {
        return this._cachedEffect
      }
      getCachedVisibility() {
        return this._cachedVisibility
      }
      isCachedMaterialInvalid(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== Od || this._cachedMaterial !== dd || this._cachedVisibility !== md
      }
      Iq() {
        return this._engine
      }
      getTotalVertices() {
        return this._totalVertices.current
      }
      get totalVerticesPerfCounter() {
        return this._totalVertices
      }
      getActiveIndices() {
        return this._activeIndices.current
      }
      get totalActiveIndicesPerfCounter() {
        return this._activeIndices
      }
      getActiveParticles() {
        return this._activeParticles.current
      }
      get activeParticlesPerfCounter() {
        return this._activeParticles
      }
      getActiveBones() {
        return this._activeBones.current
      }
      get activeBonesPerfCounter() {
        return this._activeBones
      }
      getActiveMeshes() {
        return this._activeMeshes
      }
      getAnimationRatio() {
        return void 0 !== this._animationRatio ? this._animationRatio : 1
      }
      getRenderId() {
        return this._renderId
      }
      getFrameId() {
        return this._frameId
      }
      incrementRenderId() {
        this._renderId++
      }
      _createUbo() {
        this.setSceneUniformBuffer(this.createSceneUniformBuffer())
      }
      simulatePointerMove(dd, Od) {
        return this._inputManager.simulatePointerMove(dd, Od), this
      }
      simulatePointerDown(dd, Od) {
        return this._inputManager.simulatePointerDown(dd, Od), this
      }
      simulatePointerUp(dd, Od, md) {
        return this._inputManager.simulatePointerUp(dd, Od, md), this
      }
      isPointerCaptured() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(dd)
      }
      attachControl() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(dd, Od, md)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let dd, Od = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const md = this.Iq(),
          Wd = md.currentRenderPassId;
        md.currentRenderPassId = this.activeCamera?.renderPassId ?? Wd;
        let Fd = !0;
        for (this._pendingData.length > 0 && (Fd = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && Fd && (Fd = this.depthPeelingRenderer.isReady()), Od && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), dd = 0; dd < this.meshes.length; dd++) {
          const Wd = this.meshes[dd];
          if (!Wd.ZE || 0 === Wd.ZE.length) continue;
          if (!Wd.isReady(!0)) {
            Fd = !1;
            continue
          }
          const Rd = Wd.hasThinInstances || "InstancedMesh" === Wd.getClassName() || "InstancedLinesMesh" === Wd.getClassName() || md.getCaps().instancedArrays && Wd.instances.length > 0;
          for (let dd = 0, Od = this._isReadyForMeshStage; dd < Od.length; dd++) {
            Od[dd].action(Wd, Rd) || (Fd = !1)
          }
          if (!Od) continue;
          const Xd = Wd.material || this.defaultMaterial;
          if (Xd)
            if (Xd._storeEffectOnSubMeshes)
              for (const dd of Wd.ZE) {
                const Od = dd.fq();
                Od && Od.hasRenderTargetTextures && null != Od.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Od) && (this._processedMaterials.push(Od), this._materialsRenderTargets.concatWithNoDuplicate(Od.getRenderTargetTextures()))
              } else Xd.hasRenderTargetTextures && null != Xd.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Xd) && (this._processedMaterials.push(Xd), this._materialsRenderTargets.concatWithNoDuplicate(Xd.getRenderTargetTextures()))
        }
        if (Od) {
          for (dd = 0; dd < this._materialsRenderTargets.length; ++dd) {
            this._materialsRenderTargets.data[dd].isReadyForRendering() || (Fd = !1)
          }
          for (dd = 0; dd < this.customRenderTargets.length; ++dd) {
            this.customRenderTargets[dd].isReadyForRendering() || (Fd = !1)
          }
        }
        for (dd = 0; dd < this.geometries.length; dd++) {
          2 === this.geometries[dd].delayLoadState && (Fd = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const Rd of this.activeCameras) Rd.isReady(!0) || (Fd = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (Fd = !1));
        for (const Rd of this.kE) Rd.isReady() || (Fd = !1);
        if (this.proceduralTexturesEnabled)
          for (const Rd of this.proceduralTextures) Rd.isReady() || (Fd = !1);
        if (this.layers)
          for (const Rd of this.layers) Rd.isReady() || (Fd = !1);
        if (this.effectLayers)
          for (const Rd of this.effectLayers) Rd.isLayerReady() || (Fd = !1);
        for (const Rd of this._isReadyChecks) Rd.isReady() || (Fd = !1);
        return md.areAllEffectsReady() || (Fd = !1), md.currentRenderPassId = Wd, Fd
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(dd) {
        this.onBeforeRenderObservable.add(dd)
      }
      unregisterBeforeRender(dd) {
        this.onBeforeRenderObservable.removeCallback(dd)
      }
      registerAfterRender(dd) {
        this.onAfterRenderObservable.add(dd)
      }
      unregisterAfterRender(dd) {
        this.onAfterRenderObservable.removeCallback(dd)
      }
      _executeOnceBeforeRender(dd) {
        const Od = () => {
          dd(), setTimeout((() => {
            this.unregisterBeforeRender(Od)
          }))
        };
        this.registerBeforeRender(Od)
      }
      executeOnceBeforeRender(dd, Od) {
        void 0 !== Od ? setTimeout((() => {
          this._executeOnceBeforeRender(dd)
        }), Od) : this._executeOnceBeforeRender(dd)
      }
      addPendingData(dd) {
        this._pendingData.push(dd)
      }
      removePendingData(dd) {
        const Od = this.isLoading,
          md = this._pendingData.indexOf(dd); - 1 !== md && this._pendingData.splice(md, 1), Od && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(dd) {
        -1 === this._isReadyChecks.indexOf(dd) && this._isReadyChecks.push(dd)
      }
      removeIsReadyCheck(dd) {
        const Od = this._isReadyChecks.indexOf(dd); - 1 !== Od && this._isReadyChecks.splice(Od, 1)
      }
      executeWhenReady(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(dd), null === this._executeWhenReadyTimeoutId && this._checkIsReady(Od)
      }
      async whenReadyAsync() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((Od => {
          this.executeWhenReady((() => {
            Od()
          }), dd)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = Rd.d.Now;
        else if (this.onReadyTimeoutDuration > 0 && Rd.d.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(dd)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(dd)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = Rd.d.Now
      }
      getViewMatrix() {
        return this._viewMatrix
      }
      getProjectionMatrix() {
        return this._projectionMatrix
      }
      getInverseProjectionMatrix() {
        return this._inverseProjectionMatrix
      }
      getTransformMatrix() {
        return this._transformMatrix
      }
      setTransformMatrix(dd, Od, md, Wd) {
        this._multiviewSceneUboIsActive = !!(md && Wd && this._multiviewSceneUbo), this._viewUpdateFlag === dd.updateFlag && this._projectionUpdateFlag === Od.updateFlag || (this._viewUpdateFlag = dd.updateFlag, this._projectionUpdateFlag = Od.updateFlag, this._viewMatrix = dd, this._projectionMatrix = Od, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new Qd.d), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? Cd.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Cd.e.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(md, Wd) : this._sceneUbo.useUbo && (this._sceneUbo.Idd("viewProjection", this._transformMatrix), this._sceneUbo.Idd("view", this._viewMatrix), this._sceneUbo.Idd("projection", this._projectionMatrix), this._sceneUbo.Idd("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(dd, Od) {
        const md = "boolean" === typeof Od ? Od : Od?.trackUBOsInFrame,
          Wd = new od.c(this._engine, void 0, !1, dd ?? "MH", void 0, md);
        return Wd.addUniform("viewProjection", 16), Wd.addUniform("view", 16), Wd.addUniform("projection", 16), Wd.addUniform("vEyePosition", 4), Wd.addUniform("inverseProjection", 16), Wd
      }
      setSceneUniformBuffer(dd) {
        this._sceneUbo = dd, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : Qd.j.ZeroReadOnly
      }
      getUniqueId() {
        return Zd.UniqueId
      }
      hRd(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(dd), dd._resyncLightSources(), dd.parent || dd._addToSceneRootNodes(), Fd.c.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(dd)
          })), Od)) {
          const Od = dd.getChildMeshes();
          for (const dd of Od) this.hRd(dd)
        }
      }
      WG(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const md = this.meshes.indexOf(dd);
        if (-1 !== md && (this.meshes.splice(md, 1), dd.parent || dd._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(dd), this.onMeshRemovedObservable.notifyObservers(dd), Od) {
          const Od = dd.getChildMeshes();
          for (const dd of Od) this.WG(dd)
        }
        return md
      }
      addTransformNode(dd) {
        this._blockEntityCollection || dd.zV() === this && -1 !== dd._indexInSceneTransformNodesArray || (dd._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(dd), dd.parent || dd._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(dd))
      }
      removeTransformNode(dd) {
        const Od = dd._indexInSceneTransformNodesArray;
        if (-1 !== Od) {
          if (Od !== this.transformNodes.length - 1) {
            const dd = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[Od] = dd, dd._indexInSceneTransformNodesArray = Od
          }
          dd._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), dd.parent || dd._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(dd), Od
      }
      removeSkeleton(dd) {
        const Od = this.skeletons.indexOf(dd);
        return -1 !== Od && (this.skeletons.splice(Od, 1), this.onSkeletonRemovedObservable.notifyObservers(dd), this._executeActiveContainerCleanup(this._activeSkeletons)), Od
      }
      removeMorphTargetManager(dd) {
        const Od = this.morphTargetManagers.indexOf(dd);
        return -1 !== Od && this.morphTargetManagers.splice(Od, 1), Od
      }
      removeLight(dd) {
        const Od = this.lights.indexOf(dd);
        if (-1 !== Od) {
          for (const Od of this.meshes) Od._removeLightSource(dd, !1);
          this.lights.splice(Od, 1), this.sortLightsByPriority(), dd.parent || dd._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(dd)
        }
        return Od
      }
      removeCamera(dd) {
        const Od = this.cameras.indexOf(dd);
        if (-1 !== Od && (this.cameras.splice(Od, 1), dd.parent || dd._removeFromSceneRootNodes()), this.activeCameras) {
          const Od = this.activeCameras.indexOf(dd); - 1 !== Od && this.activeCameras.splice(Od, 1)
        }
        return this.activeCamera === dd && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(dd), Od
      }
      removeParticleSystem(dd) {
        const Od = this.kE.indexOf(dd);
        return -1 !== Od && (this.kE.splice(Od, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(dd), Od
      }
      removeAnimation(dd) {
        const Od = this.animations.indexOf(dd);
        return -1 !== Od && this.animations.splice(Od, 1), Od
      }
      stopAnimation(dd, Od, md) {}
      removeAnimationGroup(dd) {
        const Od = this.animationGroups.indexOf(dd);
        return -1 !== Od && this.animationGroups.splice(Od, 1), this.onAnimationGroupRemovedObservable.notifyObservers(dd), Od
      }
      removeMultiMaterial(dd) {
        const Od = this.multiMaterials.indexOf(dd);
        return -1 !== Od && this.multiMaterials.splice(Od, 1), this.onMultiMaterialRemovedObservable.notifyObservers(dd), Od
      }
      removeMaterial(dd) {
        const Od = dd._indexInSceneMaterialArray;
        if (-1 !== Od && Od < this.materials.length) {
          if (Od !== this.materials.length - 1) {
            const dd = this.materials[this.materials.length - 1];
            this.materials[Od] = dd, dd._indexInSceneMaterialArray = Od
          }
          dd._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(dd), Od
      }
      removeActionManager(dd) {
        const Od = this.actionManagers.indexOf(dd);
        return -1 !== Od && this.actionManagers.splice(Od, 1), Od
      }
      removeTexture(dd) {
        const Od = this.textures.indexOf(dd);
        return -1 !== Od && this.textures.splice(Od, 1), this.onTextureRemovedObservable.notifyObservers(dd), Od
      }
      removeFrameGraph(dd) {
        const Od = this.frameGraphs.indexOf(dd);
        return -1 !== Od && this.frameGraphs.splice(Od, 1), this.onFrameGraphRemovedObservable.notifyObservers(dd), Od
      }
      removeObjectRenderer(dd) {
        const Od = this.objectRenderers.indexOf(dd);
        return -1 !== Od && this.objectRenderers.splice(Od, 1), this.onObjectRendererRemovedObservable.notifyObservers(dd), Od
      }
      removePostProcess(dd) {
        const Od = this.postProcesses.indexOf(dd);
        return -1 !== Od && this.postProcesses.splice(Od, 1), this.onPostProcessRemovedObservable.notifyObservers(dd), Od
      }
      removeEffectLayer(dd) {
        const Od = this.effectLayers.indexOf(dd);
        return -1 !== Od && this.effectLayers.splice(Od, 1), this.onEffectLayerRemovedObservable.notifyObservers(dd), Od
      }
      addLight(dd) {
        if (!this._blockEntityCollection) {
          this.lights.push(dd), this.sortLightsByPriority(), dd.parent || dd._addToSceneRootNodes();
          for (const Od of this.meshes) - 1 === Od.lightSources.indexOf(dd) && (Od.lightSources.push(dd), Od._resyncLightSources());
          Fd.c.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(dd)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(fd.c.CompareLightsPriority)
      }
      addCamera(dd) {
        this._blockEntityCollection || (this.cameras.push(dd), Fd.c.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(dd)
        })), dd.parent || dd._addToSceneRootNodes())
      }
      addSkeleton(dd) {
        this._blockEntityCollection || (this.skeletons.push(dd), Fd.c.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(dd)
        })))
      }
      addParticleSystem(dd) {
        this._blockEntityCollection || (this.kE.push(dd), Fd.c.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(dd)
        })))
      }
      addAnimation(dd) {
        this._blockEntityCollection || this.animations.push(dd)
      }
      addAnimationGroup(dd) {
        this._blockEntityCollection || (this.animationGroups.push(dd), Fd.c.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(dd)
        })))
      }
      addMultiMaterial(dd) {
        this._blockEntityCollection || (this.multiMaterials.push(dd), Fd.c.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(dd)
        })))
      }
      addMaterial(dd) {
        this._blockEntityCollection || dd.zV() === this && -1 !== dd._indexInSceneMaterialArray || (dd._indexInSceneMaterialArray = this.materials.length, this.materials.push(dd), Fd.c.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(dd)
        })))
      }
      addMorphTargetManager(dd) {
        this._blockEntityCollection || this.morphTargetManagers.push(dd)
      }
      addGeometry(dd) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[dd.uniqueId] = this.geometries.length), this.geometries.push(dd))
      }
      addActionManager(dd) {
        this.actionManagers.push(dd)
      }
      addTexture(dd) {
        this._blockEntityCollection || (this.textures.push(dd), this.onNewTextureAddedObservable.notifyObservers(dd))
      }
      addFrameGraph(dd) {
        this.frameGraphs.push(dd), Fd.c.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(dd)
        }))
      }
      addObjectRenderer(dd) {
        this.objectRenderers.push(dd), Fd.c.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(dd)
        }))
      }
      addPostProcess(dd) {
        this._blockEntityCollection || (this.postProcesses.push(dd), Fd.c.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(dd)
        })))
      }
      addEffectLayer(dd) {
        this._blockEntityCollection || (this.effectLayers.push(dd), Fd.c.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(dd)
        })))
      }
      switchActiveCamera(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = dd, Od && dd.attachControl())
      }
      setActiveCameraById(dd) {
        const Od = this.getCameraById(dd);
        return Od ? (this.activeCamera = Od, Od) : null
      }
      setActiveCameraByName(dd) {
        const Od = this.getCameraByName(dd);
        return Od ? (this.activeCamera = Od, Od) : null
      }
      getAnimationGroupByName(dd) {
        for (let Od = 0; Od < this.animationGroups.length; Od++)
          if (this.animationGroups[Od].name === dd) return this.animationGroups[Od];
        return null
      }
      _getMaterial(dd, Od) {
        for (let md = 0; md < this.materials.length; md++) {
          const dd = this.materials[md];
          if (Od(dd)) return dd
        }
        if (dd)
          for (let md = 0; md < this.multiMaterials.length; md++) {
            const dd = this.multiMaterials[md];
            if (Od(dd)) return dd
          }
        return null
      }
      getMaterialByUniqueID(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(dd, Od)
      }
      getMaterialByUniqueId(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Od, (Od => Od.uniqueId === dd))
      }
      getMaterialById(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Od, (Od => Od.id === dd))
      }
      getMaterialByName(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Od, (Od => Od.name === dd))
      }
      getLastMaterialById(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let md = this.materials.length - 1; md >= 0; md--)
          if (this.materials[md].id === dd) return this.materials[md];
        if (Od)
          for (let md = this.multiMaterials.length - 1; md >= 0; md--)
            if (this.multiMaterials[md].id === dd) return this.multiMaterials[md];
        return null
      }
      getTextureByUniqueId(dd) {
        for (let Od = 0; Od < this.textures.length; Od++)
          if (this.textures[Od].uniqueId === dd) return this.textures[Od];
        return null
      }
      getTextureByName(dd) {
        for (let Od = 0; Od < this.textures.length; Od++)
          if (this.textures[Od].name === dd) return this.textures[Od];
        return null
      }
      getCameraById(dd) {
        for (let Od = 0; Od < this.cameras.length; Od++)
          if (this.cameras[Od].id === dd) return this.cameras[Od];
        return null
      }
      getCameraByUniqueId(dd) {
        for (let Od = 0; Od < this.cameras.length; Od++)
          if (this.cameras[Od].uniqueId === dd) return this.cameras[Od];
        return null
      }
      getCameraByName(dd) {
        for (let Od = 0; Od < this.cameras.length; Od++)
          if (this.cameras[Od].name === dd) return this.cameras[Od];
        return null
      }
      getBoneById(dd) {
        for (let Od = 0; Od < this.skeletons.length; Od++) {
          const md = this.skeletons[Od];
          for (let Od = 0; Od < md.bones.length; Od++)
            if (md.bones[Od].id === dd) return md.bones[Od]
        }
        return null
      }
      getBoneByName(dd) {
        for (let Od = 0; Od < this.skeletons.length; Od++) {
          const md = this.skeletons[Od];
          for (let Od = 0; Od < md.bones.length; Od++)
            if (md.bones[Od].name === dd) return md.bones[Od]
        }
        return null
      }
      getLightByName(dd) {
        for (let Od = 0; Od < this.lights.length; Od++)
          if (this.lights[Od].name === dd) return this.lights[Od];
        return null
      }
      getLightById(dd) {
        for (let Od = 0; Od < this.lights.length; Od++)
          if (this.lights[Od].id === dd) return this.lights[Od];
        return null
      }
      getLightByUniqueId(dd) {
        for (let Od = 0; Od < this.lights.length; Od++)
          if (this.lights[Od].uniqueId === dd) return this.lights[Od];
        return null
      }
      getParticleSystemById(dd) {
        for (let Od = 0; Od < this.kE.length; Od++)
          if (this.kE[Od].id === dd) return this.kE[Od];
        return null
      }
      getGeometryById(dd) {
        for (let Od = 0; Od < this.geometries.length; Od++)
          if (this.geometries[Od].id === dd) return this.geometries[Od];
        return null
      }
      _getGeometryByUniqueId(dd) {
        if (this._geometriesByUniqueId) {
          const Od = this._geometriesByUniqueId[dd];
          if (void 0 !== Od) return this.geometries[Od]
        } else
          for (let Od = 0; Od < this.geometries.length; Od++)
            if (this.geometries[Od].uniqueId === dd) return this.geometries[Od];
        return null
      }
      getFrameGraphByName(dd) {
        for (let Od = 0; Od < this.frameGraphs.length; Od++)
          if (this.frameGraphs[Od].name === dd) return this.frameGraphs[Od];
        return null
      }
      pushGeometry(dd, Od) {
        return !(!Od && this._getGeometryByUniqueId(dd.uniqueId)) && (this.addGeometry(dd), Fd.c.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(dd)
        })), !0)
      }
      removeGeometry(dd) {
        let Od;
        if (this._geometriesByUniqueId) {
          if (Od = this._geometriesByUniqueId[dd.uniqueId], void 0 === Od) return !1
        } else if (Od = this.geometries.indexOf(dd), Od < 0) return !1;
        if (Od !== this.geometries.length - 1) {
          const dd = this.geometries[this.geometries.length - 1];
          dd && (this.geometries[Od] = dd, this._geometriesByUniqueId && (this._geometriesByUniqueId[dd.uniqueId] = Od))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[dd.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(dd), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(dd) {
        for (let Od = 0; Od < this.meshes.length; Od++)
          if (this.meshes[Od].id === dd) return this.meshes[Od];
        return null
      }
      getMeshesById(dd) {
        return this.meshes.filter((function(Od) {
          return Od.id === dd
        }))
      }
      getTransformNodeById(dd) {
        for (let Od = 0; Od < this.transformNodes.length; Od++)
          if (this.transformNodes[Od].id === dd) return this.transformNodes[Od];
        return null
      }
      getTransformNodeByUniqueId(dd) {
        for (let Od = 0; Od < this.transformNodes.length; Od++)
          if (this.transformNodes[Od].uniqueId === dd) return this.transformNodes[Od];
        return null
      }
      getTransformNodesById(dd) {
        return this.transformNodes.filter((function(Od) {
          return Od.id === dd
        }))
      }
      getMeshByUniqueId(dd) {
        for (let Od = 0; Od < this.meshes.length; Od++)
          if (this.meshes[Od].uniqueId === dd) return this.meshes[Od];
        return null
      }
      getLastMeshById(dd) {
        for (let Od = this.meshes.length - 1; Od >= 0; Od--)
          if (this.meshes[Od].id === dd) return this.meshes[Od];
        return null
      }
      getLastTransformNodeById(dd) {
        for (let Od = this.transformNodes.length - 1; Od >= 0; Od--)
          if (this.transformNodes[Od].id === dd) return this.transformNodes[Od];
        return null
      }
      getLastEntryById(dd) {
        let Od;
        for (Od = this.meshes.length - 1; Od >= 0; Od--)
          if (this.meshes[Od].id === dd) return this.meshes[Od];
        for (Od = this.transformNodes.length - 1; Od >= 0; Od--)
          if (this.transformNodes[Od].id === dd) return this.transformNodes[Od];
        for (Od = this.cameras.length - 1; Od >= 0; Od--)
          if (this.cameras[Od].id === dd) return this.cameras[Od];
        for (Od = this.lights.length - 1; Od >= 0; Od--)
          if (this.lights[Od].id === dd) return this.lights[Od];
        for (Od = this.skeletons.length - 1; Od >= 0; Od--) {
          const md = this.skeletons[Od];
          for (let Od = md.bones.length - 1; Od >= 0; Od--)
            if (md.bones[Od].id === dd) return md.bones[Od]
        }
        return null
      }
      getNodeById(dd) {
        const Od = this.getMeshById(dd);
        if (Od) return Od;
        const md = this.getTransformNodeById(dd);
        if (md) return md;
        const Wd = this.getLightById(dd);
        if (Wd) return Wd;
        const Fd = this.getCameraById(dd);
        if (Fd) return Fd;
        const Rd = this.getBoneById(dd);
        return Rd || null
      }
      getNodeByName(dd) {
        const Od = this.getMeshByName(dd);
        if (Od) return Od;
        const md = this.getTransformNodeByName(dd);
        if (md) return md;
        const Wd = this.getLightByName(dd);
        if (Wd) return Wd;
        const Fd = this.getCameraByName(dd);
        if (Fd) return Fd;
        const Rd = this.getBoneByName(dd);
        return Rd || null
      }
      getMeshByName(dd) {
        for (let Od = 0; Od < this.meshes.length; Od++)
          if (this.meshes[Od].name === dd) return this.meshes[Od];
        return null
      }
      getTransformNodeByName(dd) {
        for (let Od = 0; Od < this.transformNodes.length; Od++)
          if (this.transformNodes[Od].name === dd) return this.transformNodes[Od];
        return null
      }
      getLastSkeletonById(dd) {
        for (let Od = this.skeletons.length - 1; Od >= 0; Od--)
          if (this.skeletons[Od].id === dd) return this.skeletons[Od];
        return null
      }
      getSkeletonByUniqueId(dd) {
        for (let Od = 0; Od < this.skeletons.length; Od++)
          if (this.skeletons[Od].uniqueId === dd) return this.skeletons[Od];
        return null
      }
      getSkeletonById(dd) {
        for (let Od = 0; Od < this.skeletons.length; Od++)
          if (this.skeletons[Od].id === dd) return this.skeletons[Od];
        return null
      }
      getSkeletonByName(dd) {
        for (let Od = 0; Od < this.skeletons.length; Od++)
          if (this.skeletons[Od].name === dd) return this.skeletons[Od];
        return null
      }
      getMorphTargetManagerById(dd) {
        for (let Od = 0; Od < this.morphTargetManagers.length; Od++)
          if (this.morphTargetManagers[Od].uniqueId === dd) return this.morphTargetManagers[Od];
        return null
      }
      getMorphTargetById(dd) {
        for (let Od = 0; Od < this.morphTargetManagers.length; ++Od) {
          const md = this.morphTargetManagers[Od];
          for (let Od = 0; Od < md.numTargets; ++Od) {
            const Wd = md.getTarget(Od);
            if (Wd.id === dd) return Wd
          }
        }
        return null
      }
      getMorphTargetByName(dd) {
        for (let Od = 0; Od < this.morphTargetManagers.length; ++Od) {
          const md = this.morphTargetManagers[Od];
          for (let Od = 0; Od < md.numTargets; ++Od) {
            const Wd = md.getTarget(Od);
            if (Wd.name === dd) return Wd
          }
        }
        return null
      }
      getPostProcessByName(dd) {
        for (let Od = 0; Od < this.postProcesses.length; ++Od) {
          const md = this.postProcesses[Od];
          if (md.name === dd) return md
        }
        return null
      }
      isActiveMesh(dd) {
        return -1 !== this._activeMeshes.indexOf(dd)
      }
      get uid() {
        return this._uid || (this._uid = Wd.g.RandomId()), this._uid
      }
      addExternalData(dd, Od) {
        return this._externalData || (this._externalData = new hd), this._externalData.add(dd, Od)
      }
      getExternalData(dd) {
        return this._externalData ? this._externalData.get(dd) : null
      }
      getOrAddExternalDataWithFactory(dd, Od) {
        return this._externalData || (this._externalData = new hd), this._externalData.getOrAddWithFactory(dd, Od)
      }
      removeExternalData(dd) {
        return this._externalData.remove(dd)
      }
      _evaluateSubMesh(dd, Od, md, Wd) {
        if (Wd || dd.isInFrustum(this._frustumPlanes)) {
          for (let Wd = 0, Fd = this._evaluateSubMeshStage; Wd < Fd.length; Wd++) {
            Fd[Wd].action(Od, dd)
          }
          const md = dd.fq();
          null !== md && void 0 !== md && (md.hasRenderTargetTextures && null != md.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(md) && (this._processedMaterials.push(md), this._materialsRenderTargets.concatWithNoDuplicate(md.getRenderTargetTextures())), this._renderingManager.dispatch(dd, Od, md))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(dd) {
        this._preventFreeActiveMeshesAndRenderingGroups !== dd && (dd && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = dd)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let dd = 0; dd < this.activeCameras.length; dd++) {
            const Od = this.activeCameras[dd];
            Od && Od._activeMeshes && Od._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let dd = 0; dd < this.textures.length; dd++) {
            const Od = this.textures[dd];
            Od && Od.renderList && Od.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          Rd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const Xd = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const dd of Xd) dd.objectRenderer._freezeActiveMeshes(Wd);
          return this._freezeActiveMeshesCancel = (0, Fd.g)((() => {
            let dd = !0,
              Od = !0;
            for (const md of Xd) dd && (dd = md.objectRenderer._isFrozen), Od && (Od = null !== md.objectRenderer._freezeActiveMeshesCancel);
            if (dd) return !0;
            if (!Od) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Rd, this._skipEvaluateActiveMeshesCompletely = dd, Od?.()
          }), ((dd, Od) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), Od) {
              const Od = "Scene: Timeout while waiting for meshes to be frozen.";
              md ? md(Od) : (mm.c.Error(Od), dd && mm.c.Error(dd))
            } else {
              const Od = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              md ? md(Od) : (mm.c.Error(Od), dd && (mm.c.Error(dd), dd.stack && mm.c.Error(dd.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Rd, this._skipEvaluateActiveMeshesCompletely = dd, Wd)
              for (let dd = 0; dd < this._activeMeshes.length; dd++) this._activeMeshes.data[dd]._freeze();
            Od && Od()
          } else md && md("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let dd = 0; dd < this.meshes.length; dd++) {
          const Od = this.meshes[dd];
          Od._internalAbstractMeshDataInfo && (Od._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const dd = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const Od of dd) Od.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let dd = 0; dd < this._activeMeshes.length; dd++) this._activeMeshes.data[dd]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(dd) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => dd.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const dd = this._activeMeshes.length;
            for (let Od = 0; Od < dd; Od++) {
              this._activeMeshes.data[Od].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const dd = this._activeParticleSystems.length;
            for (let Od = 0; Od < dd; Od++) this._activeParticleSystems.data[Od].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let Fd = 0, Rd = this._beforeEvaluateActiveMeshStage; Fd < Rd.length; Fd++) {
          Rd[Fd].action()
        }
        const dd = this.getActiveMeshCandidates(),
          Od = dd.length,
          md = Id.b.Enabled,
          Wd = this.customLODSelector;
        for (let Fd = 0; Fd < Od; Fd++) {
          const Od = dd.data[Fd],
            Rd = !Wd && !Od.lV && !Od._internalMeshDataInfo?._LODLevels.length;
          let Xd, Kd;
          if ((Rd || (Xd = Od._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), Xd ? Xd[1] = -1 : (Xd = [Od, -1], Od._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, Xd))), !Od.isBlocked) && (md && this._totalVertices.addCount(Od.getTotalVertices(), !1), Od.isReady() && Od.isEnabled() && !Od.Tt.hasAZeroComponent)) {
            if (Od.computeWorldMatrix(), Od.actionManager && Od.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Od), Rd) Kd = Od;
            else if (Kd = Wd ? Wd(Od, this.activeCamera) : Od.getLOD(this.activeCamera), Xd[0] = Kd, Xd[1] = this._frameId, void 0 === Kd || null === Kd) continue;
            if (Kd !== Od && 0 !== Kd.billboardMode && Kd.computeWorldMatrix(), Od._preActivate(), Od.isVisible && Od.visibility > 0 && 0 !== (Od.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || Od.lq || Od.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(Od), this.activeCamera._activeMeshes.push(Od), Kd !== Od && Kd._activate(this._renderId, !1);
              for (let dd = 0, md = this._preActiveMeshStage; dd < md.length; dd++) {
                md[dd].action(Od)
              }
              Od._activate(this._renderId, !1) && (Od.lV ? Od._internalAbstractMeshDataInfo._actAsRegularMesh && (Kd = Od) : Kd._internalAbstractMeshDataInfo._onlyForInstances = !1, Kd._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(Od, Kd)), Od._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let dd = 0; dd < this.kE.length; dd++) {
            const Od = this.kE[dd];
            if (!Od.isStarted() || !Od.emitter) continue;
            const md = Od.emitter;
            md.position && !md.isEnabled() || (this._activeParticleSystems.push(Od), Od.animate(), this._renderingManager.dispatchParticles(Od))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(dd) {
        this._skeletonsEnabled && dd.skeleton && (this._activeSkeletons.pushNoDuplicate(dd.skeleton) && (dd.skeleton.prepare(), this._activeBones.addCount(dd.skeleton.bones.length, !1)), dd.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(dd) && this.frameGraph && dd.applySkeleton(dd.skeleton))
      }
      _activeMesh(dd, Od) {
        this._prepareSkeleton(Od);
        let md = dd.CRd || dd.lV || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || Od.lq;
        if (Od && Od.ZE && Od.ZE.length > 0) {
          const Wd = this.getActiveSubMeshCandidates(Od),
            Fd = Wd.length;
          md = md || 1 === Fd;
          for (let Rd = 0; Rd < Fd; Rd++) {
            const Fd = Wd.data[Rd];
            this._evaluateSubMesh(Fd, Od, dd, md)
          }
        }
      }
      updateTransformMatrix(dd) {
        const Od = this.activeCamera;
        if (Od)
          if (Od._renderingMultiview) {
            const md = Od._rigCameras[0],
              Wd = Od._rigCameras[1];
            this.setTransformMatrix(md.getViewMatrix(), md.getProjectionMatrix(dd), Wd.getViewMatrix(), Wd.getProjectionMatrix(dd))
          } else this.setTransformMatrix(Od.getViewMatrix(), Od.getProjectionMatrix(dd))
      }
      _bindFrameBuffer(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (dd && dd._multiviewTexture ? dd._multiviewTexture._bindFrameBuffer() : dd && dd.outputRenderTarget ? dd.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), Od && this._clearFrameBuffer(dd)
      }
      _clearFrameBuffer(dd) {
        if (dd && dd._multiviewTexture);
        else if (dd && dd.outputRenderTarget && !dd._renderingMultiview) {
          const Od = dd.outputRenderTarget;
          Od.onClearObservable.hasObservers() ? Od.onClearObservable.notifyObservers(this._engine) : Od.skipInitialClear || dd.isRightCamera || (this.autoClear && this._engine.clear(Od.clearColor || this._clearColor, !Od._cleared, !0, !0), Od._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (dd && dd._skipRendering) return;
        const Fd = this._engine;
        if (this._activeCamera = dd, !this.activeCamera) throw new Error("Active camera not set");
        if (Fd.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && md) {
          let Od = !0;
          dd._renderingMultiview && dd.outputRenderTarget && (Od = dd.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, dd.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), dd._renderingMultiview && dd.outputRenderTarget && (dd.outputRenderTarget.skipInitialClear = Od)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = dd.outputRenderTarget?.renderPassId ?? dd.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let Wd = 0; Wd < this._softwareSkinnedMeshes.length; Wd++) {
          const dd = this._softwareSkinnedMeshes.data[Wd];
          dd.applySkeleton(dd.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), dd.customRenderTargets && dd.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(dd.customRenderTargets), Od && Od.customRenderTargets && Od.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(Od.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let Wd = 0, Kd = this._gatherActiveCameraRenderTargetsStage; Wd < Kd.length; Wd++) {
          Kd[Wd].action(this._renderTargets)
        }
        let Rd = !1;
        if (this.renderTargetsEnabled) {
          let dd;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            Wd.g.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const Od = this.getBoundingBoxRenderer?.();
            for (let md = 0; md < this._renderTargets.length; md++) {
              const Wd = this._renderTargets.data[md];
              if (Wd._shouldRender()) {
                this._renderId++;
                const md = Wd.activeCamera && Wd.activeCamera !== this.activeCamera;
                Od && !dd && (dd = Od.renderList.length > 0 ? Od.renderList.data.slice() : [], dd.length = Od.renderList.length), Wd.render(md, this.dumpNextRenderTargets), Rd = !0
              }
            }
            Od && dd && (Od.renderList.data = dd, Od.renderList.length = dd.length), Wd.g.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const Od = this.getBoundingBoxRenderer?.();
            Od && !dd && (dd = Od.renderList.length > 0 ? Od.renderList.data.slice() : [], dd.length = Od.renderList.length);
            for (let dd = 0, md = this._cameraDrawRenderTargetStage; dd < md.length; dd++) {
              Rd = md[dd].action(this.activeCamera) || Rd
            }
            Od && dd && (Od.renderList.data = dd, Od.renderList.length = dd.length)
          }
          this._intermediateRendering = !1
        }
        Rd && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || dd._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let Wd = 0, Kd = this._beforeCameraDrawStage; Wd < Kd.length; Wd++) {
          Kd[Wd].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const Xd = Fd.snapshotRendering && 1 === Fd.snapshotRenderingMode;
        Xd && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !Xd), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let Wd = 0, Kd = this._afterCameraDrawStage; Wd < Kd.length; Wd++) {
          Kd[Wd].action(this.activeCamera)
        }
        if (this.postProcessManager && !dd._multiviewTexture) {
          const Od = dd.outputRenderTarget ? dd.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(dd.isIntermediate, Od)
        }
        for (let Wd = 0, Kd = this._afterCameraPostProcessStage; Wd < Kd.length; Wd++) {
          Kd[Wd].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === dd.cameraRigMode || dd._renderingMultiview) return dd._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(dd, void 0, Od), void this.onAfterRenderCameraObservable.notifyObservers(dd);
        if (dd._useMultiviewToSingleView) this._renderMultiviewToSingleView(dd);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(dd);
          for (let Od = 0; Od < dd._rigCameras.length; Od++) this._renderForCamera(dd._rigCameras[Od], dd)
        }
        this._activeCamera = dd, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(dd)
      }
      _checkIntersections() {
        for (let dd = 0; dd < this._meshesForIntersections.length; dd++) {
          const Od = this._meshesForIntersections.data[dd];
          if (Od.actionManager)
            for (let dd = 0; Od.actionManager && dd < Od.actionManager.actions.length; dd++) {
              const md = Od.actionManager.actions[dd];
              if (12 === md.trigger || 13 === md.trigger) {
                const dd = md.getTriggerParameter(),
                  Wd = dd.mesh ? dd.mesh : dd,
                  Fd = Wd.PRd(Od, dd.usePreciseIntersection),
                  Rd = Od._intersectionsInProgress.indexOf(Wd);
                Fd && -1 === Rd ? 12 === md.trigger ? (md._executeCurrent(qd.CreateNew(Od, void 0, Wd)), Od._intersectionsInProgress.push(Wd)) : 13 === md.trigger && Od._intersectionsInProgress.push(Wd) : !Fd && Rd > -1 && (13 === md.trigger && md._executeCurrent(qd.CreateNew(Od, void 0, Wd)), Od.actionManager.hasSpecificTrigger(13, (dd => {
                  const Od = dd.mesh ? dd.mesh : dd;
                  return Wd === Od
                })) && 13 !== md.trigger || Od._intersectionsInProgress.splice(Rd, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(dd) {}
      _animate(dd) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let dd = Math.max(Km.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Km.MaxDeltaTime)) + this._timeAccumulator;
          const Od = this._engine.getTimeStep(),
            md = 1e3 / Od / 1e3;
          let Wd = 0;
          const Fd = this._engine.getLockstepMaxSteps();
          let Rd = Math.floor(dd / Od);
          for (Rd = Math.min(Rd, Fd); dd > 0 && Wd < Rd;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = Od * md, this._animate(Od), this.onAfterAnimationsObservable.notifyObservers(this), this.jD && this._advancePhysicsEngineStep(Od), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, Wd++, dd -= Od;
          this._timeAccumulator = dd < 0 ? 0 : dd
        } else {
          const dd = this.useConstantAnimationDeltaTime ? 16 : Math.max(Km.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Km.MaxDeltaTime));
          this._animationRatio = .06 * dd, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.jD && this._advancePhysicsEngineStep(dd)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(dd) {
        if (dd?.outputRenderTarget && !dd?.isRigCamera && (dd.outputRenderTarget._cleared = !1), dd?.rigCameras?.length)
          for (let Od = 0; Od < dd.rigCameras.length; ++Od) {
            const md = dd.rigCameras[Od].outputRenderTarget;
            md && (md._cleared = !1)
          }
      }
      resetDrawCache(dd) {
        if (this.meshes)
          for (const Od of this.meshes) Od.resetDrawCache(dd)
      }
      _renderWithFrameGraph() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Od = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, dd)
          for (const md of this.cameras)
            if (md.update(), 0 !== md.cameraRigMode)
              for (let dd = 0; dd < md._rigCameras.length; dd++) md._rigCameras[dd].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(Od)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(dd) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const Od = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Wd.g.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let dd = 0; dd < this._renderTargets.length; dd++) {
            const md = this._renderTargets.data[dd],
              Wd = md.activeCamera || Od;
            this._renderRenderTarget(md, Wd, !0, this.dumpNextRenderTargets)
          }
          Wd.g.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let md = 0, Wd = this._beforeClearStage; md < Wd.length; md++) {
          Wd[md].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const Od = this.getActiveMeshCandidates(),
            md = Od.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let dd = 0; dd < md; dd++) {
                const md = Od.data[dd];
                md._internalAbstractMeshDataInfo._wasActiveLastFrame && md.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const dd = this._activeParticleSystems.length;
              for (let Od = 0; Od < dd; Od++) this._activeParticleSystems.data[Od].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let Wd = 0; Wd < md; Wd++) {
              const md = Od.data[Wd];
              md._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, md.isBlocked || (this._totalVertices.addCount(md.getTotalVertices(), !1), md.isReady() && md.isEnabled() && !md.Tt.hasAZeroComponent && (md.computeWorldMatrix(dd), md.actionManager && md.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(md)))
            }
            if (this.particlesEnabled)
              for (let dd = 0; dd < this.kE.length; dd++) {
                const Od = this.kE[dd];
                if (!Od.isStarted() || !Od.emitter) continue;
                const md = Od.emitter;
                md.position && !md.isEnabled() || (this._activeParticleSystems.push(Od), Od.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, dd._shouldRender()) {
          if (this._renderId++, this.activeCamera = Od, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), dd.render(md, Wd)
        }
        this._intermediateRendering = !1
      }
      render() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.yJ) return;
        const md = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(dd, Od)
        } finally {
          this._renderingMeshEvaluationDepth = md
        }
      }
      _renderFrame(dd, Od) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), yd.d.zV = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const md of this.activeCameras) this._checkCameraRenderTarget(md);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), Od || this.animate();
        for (let md = 0, Wd = this._beforeCameraUpdateStage; md < Wd.length; md++) {
          Wd[md].action()
        }
        if (dd)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let md = 0; md < this.activeCameras.length; md++) {
              const dd = this.activeCameras[md];
              if (dd.update(), 0 !== dd.cameraRigMode)
                for (let Od = 0; Od < dd._rigCameras.length; Od++) dd._rigCameras[Od].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let md = 0; md < this.activeCamera._rigCameras.length; md++) this.activeCamera._rigCameras[md].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(dd, Od);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const dd = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            Wd.g.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let Od = 0; Od < this.customRenderTargets.length; Od++) {
              const md = this.customRenderTargets[Od],
                Wd = md.activeCamera || this.activeCamera;
              this._renderRenderTarget(md, Wd, dd !== Wd, this.dumpNextRenderTargets)
            }
            Wd.g.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = dd?.renderPassId ?? 0, this.activeCamera = dd, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let Od = 0, md = this._beforeClearStage; Od < md.length; Od++) {
            md[Od].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let Od = 0, md = this._gatherRenderTargetsStage; Od < md.length; Od++) {
            md[Od].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Od = 0; Od < this.activeCameras.length; Od++) this._processSubCameras(this.activeCameras[Od], Od > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let md = 0, Wd = this._afterRenderStage; md < Wd.length; md++) {
          Wd[md].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let dd = 0; dd < this._toBeDisposed.length; dd++) {
            const Od = this._toBeDisposed[dd];
            Od && Od.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let dd = 0; dd < this.materials.length; dd++) this.materials[dd].freeze()
      }
      unfreezeMaterials() {
        for (let dd = 0; dd < this.materials.length; dd++) this.materials[dd].unfreeze()
      }
      dispose() {
        if (this.yJ) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, gd.e)(this.stopAllAnimations)) {
          for (const dd of this._activeAnimatables) dd.onAnimationEndObservable.clear(), dd.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const dd = this._activeRequests.slice();
        for (const Rd of dd) Rd.abort();
        this._activeRequests.length = 0;
        try {
          this.cV.notifyObservers(this)
        } catch (Fd) {
          mm.c.Error("An error occurred while calling onDisposeObservable!", Fd)
        }
        this.detachControl();
        const Od = this._engine.getInputElement?.();
        if (Od)
          for (let Rd = 0; Rd < this.cameras.length; Rd++) this.cameras[Rd].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (dd => dd.dispose(!0))), this._disposeList(this.transformNodes, (dd => dd.dispose(!0)));
        const md = this.cameras;
        this._disposeList(md), this._disposeList(this.kE), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let Wd = this._engine.scenes.indexOf(this);
        if (Wd > -1 && this._engine.scenes.splice(Wd, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, yd.j)(), Yd.e._LastCreatedScene === this) {
          Yd.e._LastCreatedScene = null;
          let dd = Yd.e.Instances.length - 1;
          for (; dd >= 0;) {
            const Od = Yd.e.Instances[dd];
            if (Od.scenes.length > 0) {
              Yd.e._LastCreatedScene = Od.scenes[this._engine.scenes.length - 1];
              break
            }
            dd--
          }
        }
        Wd = this._engine._virtualScenes.indexOf(this), Wd > -1 && this._engine._virtualScenes.splice(Wd, 1), this._engine.wipeCaches(!0), this.cV.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(dd, Od) {
        const md = dd.slice(0);
        Od = Od ?? (dd => dd.dispose());
        for (const Wd of md) Od(Wd);
        dd.length = 0
      }
      get yJ() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let dd = 0; dd < this.meshes.length; dd++) {
          const Od = this.meshes[dd].geometry;
          Od && Od.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const dd of this.textures) {
          dd._buffer && (dd._buffer = null)
        }
      }
      getWorldExtends(dd) {
        const Od = new Qd.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          md = new Qd.j(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        dd = dd || (() => !0);
        const Wd = this.meshes.filter(dd);
        for (const Fd of Wd) {
          if (Fd.computeWorldMatrix(!0), !Fd.ZE || 0 === Fd.ZE.length || Fd.infiniteDistance) continue;
          const dd = Fd.iG(),
            Wd = dd.boundingBox.minimumWorld,
            Rd = dd.boundingBox.maximumWorld;
          Qd.j.CheckExtends(Wd, Od, md), Qd.j.CheckExtends(Rd, Od, md)
        }
        return Od.x === Number.MAX_VALUE ? {
          min: Qd.j.Zero(),
          max: Qd.j.Zero()
        } : {
          min: Od,
          max: md
        }
      }
      createPickingRay(dd, Od, md, Wd) {
        throw (0, gd.m)("Ray")
      }
      createPickingRayToRef(dd, Od, md, Wd, Fd) {
        throw (0, gd.m)("Ray")
      }
      createPickingRayInCameraSpace(dd, Od, md) {
        throw (0, gd.m)("Ray")
      }
      createPickingRayInCameraSpaceToRef(dd, Od, md, Wd) {
        throw (0, gd.m)("Ray")
      }
      xN(dd, Od, md, Wd, Fd, Rd) {
        const Xd = (0, gd.m)("Ray", !0);
        return Xd && mm.c.Warn(Xd), new Nd.b
      }
      pickWithBoundingInfo(dd, Od, md, Wd, Fd) {
        const Rd = (0, gd.m)("Ray", !0);
        return Rd && mm.c.Warn(Rd), new Nd.b
      }
      pickWithRay(dd, Od, md, Wd) {
        throw (0, gd.m)("Ray")
      }
      multiPick(dd, Od, md, Wd, Fd) {
        throw (0, gd.m)("Ray")
      }
      multiPickWithRay(dd, Od, md) {
        throw (0, gd.m)("Ray")
      }
      setPointerOverMesh(dd, Od, md) {
        this._inputManager.setPointerOverMesh(dd, Od, md)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const dd of this.geometries) dd._rebuild();
        for (const dd of this.meshes) dd._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const dd of this._components) dd.rebuild();
        for (const dd of this.kE) dd.rebuild();
        if (this.spriteManagers)
          for (const dd of this.spriteManagers) dd.rebuild()
      }
      _rebuildTextures() {
        for (const dd of this.textures) dd._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(dd, Od, md) {
        if (void 0 === Od) return dd;
        const Wd = [];
        for (const Fd in dd) {
          const Rd = dd[Fd];
          vd.c && vd.c.MatchesQuery(Rd, Od) && (!md || md(Rd)) && Wd.push(Rd)
        }
        return Wd
      }
      getMeshesByTags(dd, Od) {
        return this._getByTags(this.meshes, dd, Od)
      }
      getCamerasByTags(dd, Od) {
        return this._getByTags(this.cameras, dd, Od)
      }
      getLightsByTags(dd, Od) {
        return this._getByTags(this.lights, dd, Od)
      }
      getMaterialByTags(dd, Od) {
        return this._getByTags(this.materials, dd, Od).concat(this._getByTags(this.multiMaterials, dd, Od))
      }
      getTransformNodesByTags(dd, Od) {
        return this._getByTags(this.transformNodes, dd, Od)
      }
      setRenderingOrder(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(dd, Od, md, Wd)
      }
      setRenderingAutoClearDepthStencil(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(dd, Od, md, Wd)
      }
      getAutoClearDepthStencilSetup(dd) {
        return this._renderingManager.getAutoClearDepthStencilSetup(dd)
      }
      _forceBlockMaterialDirtyMechanism(dd) {
        this._blockMaterialDirtyMechanism = dd
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(dd) {
        this._blockMaterialDirtyMechanism !== dd && (this._blockMaterialDirtyMechanism = dd, dd || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(dd, Od) {
        if (!this._blockMaterialDirtyMechanism)
          for (const md of this.materials) Od && !Od(md) || md.KWd(dd)
      }
      _loadFile(dd, Od, md, Wd, Fd, Rd, Xd) {
        const Kd = (0, kd.g)(dd, Od, md, Wd ? this.offlineProvider : void 0, Fd, Rd, Xd);
        return this._activeRequests.push(Kd), Kd.onCompleteObservable.add((dd => {
          this._activeRequests.splice(this._activeRequests.indexOf(dd), 1)
        })), Kd
      }
      async _loadFileAsync(dd, Od, md, Wd, Fd) {
        return await new Promise(((Rd, Xd) => {
          this._loadFile(dd, (dd => {
            Rd(dd)
          }), Od, md, Wd, ((dd, Od) => {
            Xd(Od)
          }), Fd)
        }))
      }
      async _loadDelayedFileAsync(dd, Od, md) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const Wd = `${dd}|${Od?"binary":"string"}`;
        let Fd = this._delayedFileRequests.get(Wd);
        if (!Fd) {
          Fd = Od ? this._loadFileAsync(dd, void 0, md, !0) : this._loadFileAsync(dd, void 0, md, !1);
          const Rd = Fd;
          (async () => {
            try {
              await Rd
            } catch {}
            this._delayedFileRequests?.delete(Wd)
          })(), this._delayedFileRequests.set(Wd, Fd)
        }
        return await Fd
      }
      _requestFile(dd, Od, md, Wd, Fd, Rd, Xd) {
        const Kd = (0, kd.m)(dd, Od, md, Wd ? this.offlineProvider : void 0, Fd, Rd, Xd);
        return this._activeRequests.push(Kd), Kd.onCompleteObservable.add((dd => {
          this._activeRequests.splice(this._activeRequests.indexOf(dd), 1)
        })), Kd
      }
      async _requestFileAsync(dd, Od, md, Wd, Fd) {
        return await new Promise(((Rd, Xd) => {
          this._requestFile(dd, (dd => {
            Rd(dd)
          }), Od, md, Wd, (dd => {
            Xd(dd)
          }), Fd)
        }))
      }
      _readFile(dd, Od, md, Wd, Fd) {
        const Rd = (0, kd.i)(dd, Od, md, Wd, Fd);
        return this._activeRequests.push(Rd), Rd.onCompleteObservable.add((dd => {
          this._activeRequests.splice(this._activeRequests.indexOf(dd), 1)
        })), Rd
      }
      async _readFileAsync(dd, Od, md) {
        return await new Promise(((Wd, Fd) => {
          this._readFile(dd, (dd => {
            Wd(dd)
          }), Od, md, (dd => {
            Fd(dd)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, gd.m)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(dd) {
        return this.setActiveCameraById(dd)
      }
      getMaterialByID(dd) {
        return this.getMaterialById(dd)
      }
      getLastMaterialByID(dd) {
        return this.getLastMaterialById(dd)
      }
      getTextureByUniqueID(dd) {
        return this.getTextureByUniqueId(dd)
      }
      getCameraByID(dd) {
        return this.getCameraById(dd)
      }
      getCameraByUniqueID(dd) {
        return this.getCameraByUniqueId(dd)
      }
      getBoneByID(dd) {
        return this.getBoneById(dd)
      }
      getLightByID(dd) {
        return this.getLightById(dd)
      }
      getLightByUniqueID(dd) {
        return this.getLightByUniqueId(dd)
      }
      getParticleSystemByID(dd) {
        return this.getParticleSystemById(dd)
      }
      getGeometryByID(dd) {
        return this.getGeometryById(dd)
      }
      getMeshByID(dd) {
        return this.getMeshById(dd)
      }
      getMeshByUniqueID(dd) {
        return this.getMeshByUniqueId(dd)
      }
      getLastMeshByID(dd) {
        return this.getLastMeshById(dd)
      }
      getMeshesByID(dd) {
        return this.getMeshesById(dd)
      }
      getTransformNodeByID(dd) {
        return this.getTransformNodeById(dd)
      }
      getTransformNodeByUniqueID(dd) {
        return this.getTransformNodeByUniqueId(dd)
      }
      getTransformNodesByID(dd) {
        return this.getTransformNodesById(dd)
      }
      getNodeByID(dd) {
        return this.getNodeById(dd)
      }
      getLastEntryByID(dd) {
        return this.getLastEntryById(dd)
      }
      getLastSkeletonByID(dd) {
        return this.getLastSkeletonById(dd)
      }
    }
    Km.FOGMODE_NONE = 0, Km.FOGMODE_EXP = 1, Km.FOGMODE_EXP2 = 2, Km.FOGMODE_LINEAR = 3, Km.MinDeltaTime = 1, Km.MaxDeltaTime = 1e3, Km._OriginalDefaultMaterialFactory = Km.DefaultMaterialFactory;
    let hm = !1;

    function Qm() {
      hm || (hm = !0, (0, Wm.e)("BABYLON.Scene", Km))
    }(OO = Km.prototype).sortActiveAnimatables ?? (OO.sortActiveAnimatables = (0, gd.i)("Scene", "sortActiveAnimatables")), (mO = Km.prototype).beginWeightedAnimation ?? (mO.beginWeightedAnimation = (0, gd.i)("Scene", "beginWeightedAnimation")), (WO = Km.prototype).beginAnimation ?? (WO.beginAnimation = (0, gd.i)("Scene", "beginAnimation")), (FO = Km.prototype).beginHierarchyAnimation ?? (FO.beginHierarchyAnimation = (0, gd.i)("Scene", "beginHierarchyAnimation")), (RO = Km.prototype).beginDirectAnimation ?? (RO.beginDirectAnimation = (0, gd.i)("Scene", "beginDirectAnimation")), (XO = Km.prototype).beginDirectHierarchyAnimation ?? (XO.beginDirectHierarchyAnimation = (0, gd.i)("Scene", "beginDirectHierarchyAnimation")), (KO = Km.prototype).getAnimatableByTarget ?? (KO.getAnimatableByTarget = (0, gd.i)("Scene", "getAnimatableByTarget")), (hO = Km.prototype).getAllAnimatablesByTarget ?? (hO.getAllAnimatablesByTarget = (0, gd.i)("Scene", "getAllAnimatablesByTarget")), (vO = Km.prototype).stopAllAnimations ?? (vO.stopAllAnimations = (0, gd.i)("Scene", "stopAllAnimations")), (QO = Km.prototype).getSoundByName ?? (QO.getSoundByName = (0, gd.i)("Scene", "getSoundByName")), (tO = Km.prototype).createOrUpdateSelectionOctree ?? (tO.createOrUpdateSelectionOctree = (0, gd.i)("Scene", "createOrUpdateSelectionOctree")), (oO = Km.prototype).createDefaultLight ?? (oO.createDefaultLight = (0, gd.i)("Scene", "createDefaultLight")), (NO = Km.prototype).createDefaultCamera ?? (NO.createDefaultCamera = (0, gd.i)("Scene", "createDefaultCamera")), (qO = Km.prototype).createDefaultCameraOrLight ?? (qO.createDefaultCameraOrLight = (0, gd.i)("Scene", "createDefaultCameraOrLight")), (HO = Km.prototype).createDefaultSkybox ?? (HO.createDefaultSkybox = (0, gd.i)("Scene", "createDefaultSkybox")), (yO = Km.prototype).createDefaultEnvironment ?? (yO.createDefaultEnvironment = (0, gd.i)("Scene", "createDefaultEnvironment")), (bO = Km.prototype).createDefaultVRExperience ?? (bO.createDefaultVRExperience = (0, gd.i)("Scene", "createDefaultVRExperience")), (TO = Km.prototype).createDefaultXRExperienceAsync ?? (TO.createDefaultXRExperienceAsync = (0, gd.i)("Scene", "createDefaultXRExperienceAsync")), (pO = Km.prototype).getGlowLayerByName ?? (pO.getGlowLayerByName = (0, gd.i)("Scene", "getGlowLayerByName")), (YO = Km.prototype).getHighlightLayerByName ?? (YO.getHighlightLayerByName = (0, gd.i)("Scene", "getHighlightLayerByName")), (gO = Km.prototype).getSelectionOutlineLayerByName ?? (gO.getSelectionOutlineLayerByName = (0, gd.i)("Scene", "getSelectionOutlineLayerByName")), (wO = Km.prototype).removeLensFlareSystem ?? (wO.removeLensFlareSystem = (0, gd.i)("Scene", "removeLensFlareSystem")), (aO = Km.prototype).addLensFlareSystem ?? (aO.addLensFlareSystem = (0, gd.i)("Scene", "addLensFlareSystem")), (EO = Km.prototype).getLensFlareSystemByName ?? (EO.getLensFlareSystemByName = (0, gd.i)("Scene", "getLensFlareSystemByName")), (JO = Km.prototype).getLensFlareSystemByID ?? (JO.getLensFlareSystemByID = (0, gd.i)("Scene", "getLensFlareSystemByID")), (UO = Km.prototype).getLensFlareSystemById ?? (UO.getLensFlareSystemById = (0, gd.i)("Scene", "getLensFlareSystemById")), (xO = Km.prototype).getPhysicsEngine ?? (xO.getPhysicsEngine = (0, gd.i)("Scene", "getPhysicsEngine")), (BO = Km.prototype).enablePhysics ?? (BO.enablePhysics = (0, gd.i)("Scene", "enablePhysics")), (SO = Km.prototype).disablePhysicsEngine ?? (SO.disablePhysicsEngine = (0, gd.i)("Scene", "disablePhysicsEngine")), (sO = Km.prototype).isPhysicsEnabled ?? (sO.isPhysicsEnabled = (0, gd.i)("Scene", "isPhysicsEnabled")), (uO = Km.prototype).deleteCompoundImpostor ?? (uO.deleteCompoundImpostor = (0, gd.i)("Scene", "deleteCompoundImpostor")), (VO = Km.prototype).removeReflectionProbe ?? (VO.removeReflectionProbe = (0, gd.i)("Scene", "removeReflectionProbe")), (iO = Km.prototype).addReflectionProbe ?? (iO.addReflectionProbe = (0, gd.i)("Scene", "addReflectionProbe")), (AO = Km.prototype).getBoundingBoxRenderer ?? (AO.getBoundingBoxRenderer = (0, gd.i)("Scene", "getBoundingBoxRenderer")), (rO = Km.prototype).enableDepthRenderer ?? (rO.enableDepthRenderer = (0, gd.i)("Scene", "enableDepthRenderer")), (GO = Km.prototype).disableDepthRenderer ?? (GO.disableDepthRenderer = (0, gd.i)("Scene", "disableDepthRenderer")), (nO = Km.prototype).enableFluidRenderer ?? (nO.enableFluidRenderer = (0, gd.i)("Scene", "enableFluidRenderer")), (LO = Km.prototype).disableFluidRenderer ?? (LO.disableFluidRenderer = (0, gd.i)("Scene", "disableFluidRenderer")), (PO = Km.prototype).enableGeometryBufferRenderer ?? (PO.enableGeometryBufferRenderer = (0, gd.i)("Scene", "enableGeometryBufferRenderer")), (zO = Km.prototype).disableGeometryBufferRenderer ?? (zO.disableGeometryBufferRenderer = (0, gd.i)("Scene", "disableGeometryBufferRenderer")), (cO = Km.prototype).enableIblCdfGenerator ?? (cO.enableIblCdfGenerator = (0, gd.i)("Scene", "enableIblCdfGenerator")), (jO = Km.prototype).disableIblCdfGenerator ?? (jO.disableIblCdfGenerator = (0, gd.i)("Scene", "disableIblCdfGenerator")), (DO = Km.prototype).getOutlineRenderer ?? (DO.getOutlineRenderer = (0, gd.i)("Scene", "getOutlineRenderer")), (eO = Km.prototype).enablePrePassRenderer ?? (eO.enablePrePassRenderer = (0, gd.i)("Scene", "enablePrePassRenderer")), (IO = Km.prototype).disablePrePassRenderer ?? (IO.disablePrePassRenderer = (0, gd.i)("Scene", "disablePrePassRenderer")), (lO = Km.prototype).enableSubSurfaceForPrePass ?? (lO.enableSubSurfaceForPrePass = (0, gd.i)("Scene", "enableSubSurfaceForPrePass")), (CO = Km.prototype).disableSubSurfaceForPrePass ?? (CO.disableSubSurfaceForPrePass = (0, gd.i)("Scene", "disableSubSurfaceForPrePass")), (ZO = Km.prototype).pickSprite ?? (ZO.pickSprite = (0, gd.i)("Scene", "pickSprite")), (kO = Km.prototype).pickSpriteWithRay ?? (kO.pickSpriteWithRay = (0, gd.i)("Scene", "pickSpriteWithRay")), (fO = Km.prototype).multiPickSprite ?? (fO.multiPickSprite = (0, gd.i)("Scene", "multiPickSprite")), (MO = Km.prototype).multiPickSpriteWithRay ?? (MO.multiPickSpriteWithRay = (0, gd.i)("Scene", "multiPickSpriteWithRay")), (dm = Km.prototype).setPointerOverSprite ?? (dm.setPointerOverSprite = (0, gd.i)("Scene", "setPointerOverSprite")), (Om = Km.prototype).getPointerOverSprite ?? (Om.getPointerOverSprite = (0, gd.i)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(Km.prototype, "mainSoundTrack") || Object.defineProperty(Km.prototype, "mainSoundTrack", (0, gd.g)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(Km.prototype, "soundTracks") || Object.defineProperty(Km.prototype, "soundTracks", (0, gd.g)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(Km.prototype, "audioEnabled") || Object.defineProperty(Km.prototype, "audioEnabled", (0, gd.g)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(Km.prototype, "headphone") || Object.defineProperty(Km.prototype, "headphone", (0, gd.g)("Scene", "headphone")), Object.getOwnPropertyDescriptor(Km.prototype, "audioListenerPositionProvider") || Object.defineProperty(Km.prototype, "audioListenerPositionProvider", (0, gd.g)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(Km.prototype, "audioListenerRotationProvider") || Object.defineProperty(Km.prototype, "audioListenerRotationProvider", (0, gd.g)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(Km.prototype, "audioPositioningRefreshRate") || Object.defineProperty(Km.prototype, "audioPositioningRefreshRate", (0, gd.g)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(Km.prototype, "selectionOctree") || Object.defineProperty(Km.prototype, "selectionOctree", (0, gd.g)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(Km.prototype, "debugLayer") || Object.defineProperty(Km.prototype, "debugLayer", (0, gd.g)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(Km.prototype, "gamepadManager") || Object.defineProperty(Km.prototype, "gamepadManager", (0, gd.g)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(Km.prototype, "simplificationQueue") || Object.defineProperty(Km.prototype, "simplificationQueue", (0, gd.g)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(Km.prototype, "onBeforePhysicsObservable") || Object.defineProperty(Km.prototype, "onBeforePhysicsObservable", (0, gd.g)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(Km.prototype, "onAfterPhysicsObservable") || Object.defineProperty(Km.prototype, "onAfterPhysicsObservable", (0, gd.g)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(Km.prototype, "reflectionProbes") || Object.defineProperty(Km.prototype, "reflectionProbes", (0, gd.g)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(Km.prototype, "forceShowBoundingBoxes") || Object.defineProperty(Km.prototype, "forceShowBoundingBoxes", (0, gd.g)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(Km.prototype, "depthPeelingRenderer") || Object.defineProperty(Km.prototype, "depthPeelingRenderer", (0, gd.g)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(Km.prototype, "useOrderIndependentTransparency") || Object.defineProperty(Km.prototype, "useOrderIndependentTransparency", (0, gd.g)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(Km.prototype, "fluidRenderer") || Object.defineProperty(Km.prototype, "fluidRenderer", (0, gd.g)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(Km.prototype, "geometryBufferRenderer") || Object.defineProperty(Km.prototype, "geometryBufferRenderer", (0, gd.g)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(Km.prototype, "iblCdfGenerator") || Object.defineProperty(Km.prototype, "iblCdfGenerator", (0, gd.g)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(Km.prototype, "prePassRenderer") || Object.defineProperty(Km.prototype, "prePassRenderer", (0, gd.g)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(Km.prototype, "subSurfaceConfiguration") || Object.defineProperty(Km.prototype, "subSurfaceConfiguration", (0, gd.g)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(Km.prototype, "spriteManagers") || Object.defineProperty(Km.prototype, "spriteManagers", (0, gd.g)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(Km.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(Km.prototype, "onBeforeSpritesRenderingObservable", (0, gd.g)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(Km.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(Km.prototype, "onAfterSpritesRenderingObservable", (0, gd.g)("Scene", "onAfterSpritesRenderingObservable"))
  },
  42095: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd,
      d: () => Fd
    });
    class Wd {}
    Wd.NAME_EFFECTLAYER = "EffectLayer", Wd.NAME_LAYER = "Layer", Wd.NAME_LENSFLARESYSTEM = "LensFlareSystem", Wd.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Wd.NAME_PARTICLESYSTEM = "ParticleSystem", Wd.NAME_GAMEPAD = "Gamepad", Wd.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", Wd.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", Wd.NAME_PREPASSRENDERER = "PrePassRenderer", Wd.NAME_DEPTHRENDERER = "DepthRenderer", Wd.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", Wd.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", Wd.NAME_SPRITE = "Sprite", Wd.NAME_SUBSURFACE = "SubSurface", Wd.NAME_OUTLINERENDERER = "Outline", Wd.NAME_PROCEDURALTEXTURE = "ProceduralTexture", Wd.NAME_SHADOWGENERATOR = "ShadowGenerator", Wd.NAME_OCTREE = "tRd", Wd.NAME_PHYSICSENGINE = "PhysicsEngine", Wd.NAME_AUDIO = "Audio", Wd.NAME_FLUIDRENDERER = "FluidRenderer", Wd.NAME_IBLCDFGENERATOR = "iblCDFGenerator", Wd.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", Wd.STEP_ISREADYFORMESH_EFFECTLAYER = 0, Wd.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, Wd.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, Wd.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, Wd.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, Wd.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, Wd.STEP_BEFORECAMERADRAW_PREPASS = 0, Wd.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, Wd.STEP_BEFORECAMERADRAW_LAYER = 2, Wd.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, Wd.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, Wd.STEP_BEFORERENDERINGMESH_PREPASS = 0, Wd.STEP_BEFORERENDERINGMESH_OUTLINE = 1, Wd.STEP_AFTERRENDERINGMESH_PREPASS = 0, Wd.STEP_AFTERRENDERINGMESH_OUTLINE = 1, Wd.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, Wd.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, Wd.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, Wd.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, Wd.STEP_BEFORECLEAR_PREPASS = 1, Wd.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, Wd.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, Wd.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, Wd.STEP_AFTERCAMERADRAW_PREPASS = 0, Wd.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, Wd.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, Wd.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, Wd.STEP_AFTERCAMERADRAW_LAYER = 4, Wd.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, Wd.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, Wd.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, Wd.STEP_AFTERRENDER_AUDIO = 0, Wd.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, Wd.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, Wd.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, Wd.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, Wd.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, Wd.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, Wd.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, Wd.STEP_POINTERMOVE_SPRITE = 0, Wd.STEP_POINTERDOWN_SPRITE = 0, Wd.STEP_POINTERUP_SPRITE = 0;
    class Fd extends Array {
      constructor(dd) {
        super(...dd)
      }
      static Create() {
        return Object.create(Fd.prototype)
      }
      registerStep(dd, Od, md) {
        let Wd, Fd = 0;
        for (; Fd < this.length; Fd++) {
          if (Wd = this[Fd].index, dd < Wd) break
        }
        this.splice(Fd, 0, {
          index: dd,
          component: Od,
          action: md.bind(Od)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  41922: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      e: () => Kd,
      h: () => Wd,
      k: () => Fd,
      n: () => Rd
    });

    function Wd(dd, Od, md, Wd, Fd, Rd) {
      function Xd(dd) {
        if (void 0 !== dd && "function" !== typeof dd) throw new TypeError("Function expected");
        return dd
      }
      for (var Kd, hd = Wd.kind, vd = "getter" === hd ? "get" : "setter" === hd ? "set" : "value", Qd = !Od && dd ? Wd.static ? dd : dd.prototype : null, td = Od || (Qd ? Object.getOwnPropertyDescriptor(Qd, Wd.name) : {}), od = !1, Nd = md.length - 1; Nd >= 0; Nd--) {
        var qd = {};
        for (var Hd in Wd) qd[Hd] = "access" === Hd ? {} : Wd[Hd];
        for (var Hd in Wd.access) qd.access[Hd] = Wd.access[Hd];
        qd.addInitializer = function(dd) {
          if (od) throw new TypeError("Cannot add initializers after decoration has completed");
          Rd.push(Xd(dd || null))
        };
        var yd = (0, md[Nd])("accessor" === hd ? {
          get: td.get,
          set: td.set
        } : td[vd], qd);
        if ("accessor" === hd) {
          if (void 0 === yd) continue;
          if (null === yd || "object" !== typeof yd) throw new TypeError("Object expected");
          (Kd = Xd(yd.get)) && (td.get = Kd), (Kd = Xd(yd.set)) && (td.set = Kd), (Kd = Xd(yd.init)) && Fd.unshift(Kd)
        } else(Kd = Xd(yd)) && ("field" === hd ? Fd.unshift(Kd) : td[vd] = Kd)
      }
      Qd && Object.defineProperty(Qd, Wd.name, td), od = !0
    }

    function Fd(dd, Od, md) {
      for (var Wd = arguments.length > 2, Fd = 0; Fd < Od.length; Fd++) md = Wd ? Od[Fd].call(dd, md) : Od[Fd].call(dd);
      return Wd ? md : void 0
    }

    function Rd(dd, Od, md) {
      return "symbol" === typeof Od && (Od = Od.description ? "[".concat(Od.description, "]") : ""), Object.defineProperty(dd, "name", {
        configurable: !0,
        value: md ? "".concat(md, " ", Od) : Od
      })
    }
    Object.create;
    Object.create;

    function Xd(dd, Od, md, Wd) {
      if ("a" === md && !Wd) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Od ? dd !== Od || !Wd : !Od.has(dd)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === md ? Wd : "a" === md ? Wd.call(dd) : Wd ? Wd.value : Od.get(dd)
    }

    function Kd(dd, Od, md, Wd, Fd) {
      if ("m" === Wd) throw new TypeError("Private method is not writable");
      if ("a" === Wd && !Fd) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Od ? dd !== Od || !Fd : !Od.has(dd)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Wd ? Fd.call(dd, md) : Fd ? Fd.value = md : Od.set(dd, md), md
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);