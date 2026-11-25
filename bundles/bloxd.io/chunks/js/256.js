export const id = 256;
export const ids = [256];
export const modules = {
  40343: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      f: () => wt,
      j: () => Ht,
      m: () => jt
    });
    var Ot = Vt(40125),
      qt = Vt(38899),
      Dt = Vt(40270),
      mt = Vt(40177);
    class dt {
      get bC() {
        return this._isDisposed
      }
      constructor(tt, et, Vt) {
        let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Dt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          jt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Ht = arguments.length > 7 ? arguments[7] : void 0,
          Xt = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, mt.e)(), tt && tt.vI ? this._engine = tt.vI().Jf() : this._engine = tt, this._updatable = Vt, this._instanced = dt, this._divisor = Ht || 1, this._label = Xt, et instanceof Ot.b ? (this._data = null, this._buffer = et) : (this._data = et, this._buffer = null), this.byteStride = jt ? qt : qt * Float32Array.BYTES_PER_ELEMENT, Dt || this.create()
      }
      createVertexBuffer(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          mt = arguments.length > 6 ? arguments[6] : void 0;
        const dt = Dt ? et : et * Float32Array.BYTES_PER_ELEMENT,
          Ht = Ot ? Dt ? Ot : Ot * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new jt(this._engine, this, tt, this._updatable, !0, Ht, void 0 === qt ? this._instanced : qt, dt, Vt, void 0, void 0, !0, this._divisor || mt)
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
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !tt && this._buffer || (tt = tt || this._data, tt && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, tt), this._data = tt) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(tt, this._label), this._data = tt) : this._buffer = this._engine.createVertexBuffer(tt, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.uQ > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.uQ, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.uQ, void 0, this._label));
          qt.d.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(tt) {
        this.create(tt)
      }
      updateDirectly(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, tt, Ot ? et : et * Float32Array.BYTES_PER_ELEMENT, Vt ? Vt * this.byteStride : void 0), this._data = 0 === et && void 0 === Vt ? tt : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class jt {
      get bC() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(tt) {
        const et = 0 != tt;
        this._instanceDivisor = tt, et !== this._instanced && (this._instanced = et, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const tt = this.getData();
        return tt ? Array.isArray(tt) ? tt.length / (this.byteStride / 4) - this.byteOffset / 4 : (tt.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(tt, et, Vt, Ot, qt, mt, Qt, lt, Et, ft) {
        let wt, yt = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Nt = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          Mt = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          bt = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = tt, "object" === typeof Ot && null !== Ot ? (wt = Ot.updatable ?? !1, qt = Ot.postponeInternalCreation, mt = Ot.stride, Qt = Ot.instanced, lt = Ot.offset, Et = Ot.size, ft = Ot.type, yt = Ot.normalized ?? !1, Nt = Ot.useBytes ?? !1, Mt = Ot.divisor ?? 1, bt = Ot.takeBufferOwnership ?? !1, this._label = Ot.label) : wt = !!Ot, et instanceof dt ? (this._buffer = et, this._ownsBuffer = bt) : (this._buffer = new dt(tt, et, wt, mt, qt, Qt, Nt, Mt, this._label), this._ownsBuffer = !0), this.uniqueId = jt._Counter++, this._kind = Vt, void 0 === ft) {
          const tt = this.getData();
          this.type = tt ? Xt(tt) : jt.FLOAT
        } else this.type = ft;
        const Jt = (0, Dt.v)(this.type);
        Nt ? (this._size = Et || (mt ? mt / Jt : Ht(Vt)), this.byteStride = mt || this._buffer.byteStride || this._size * Jt, this.byteOffset = lt || 0) : (this._size = Et || mt || Ht(Vt), this.byteStride = mt ? mt * Jt : this._buffer.byteStride || this._size * Jt, this.byteOffset = (lt || 0) * Jt), this.normalized = yt, this._instanced = void 0 !== Qt && Qt, this._instanceDivisor = Qt ? Mt : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(tt) {
        switch (tt) {
          case jt.BYTE:
            return 0;
          case jt.UNSIGNED_BYTE:
            return 1;
          case jt.SHORT:
            return 2;
          case jt.UNSIGNED_SHORT:
            return 3;
          case jt.INT:
            return 4;
          case jt.UNSIGNED_INT:
            return 5;
          case jt.FLOAT:
            return 6;
          case jt.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${tt}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (jt._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(tt, et) {
        const Vt = this.getData();
        return Vt ? (0, Dt.s)(Vt, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, tt, et) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, Dt.v)(this.type)
      }
      oVt() {
        return this.byteOffset / (0, Dt.v)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Dt.v)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(tt) {
        this._buffer.create(tt), this._alignBuffer()
      }
      update(tt) {
        this._buffer.update(tt), this._alignBuffer()
      }
      updateDirectly(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(tt, et, void 0, Vt), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(tt, et) {
        (0, Dt.l)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, tt, this.normalized, ((tt, Vt) => {
          for (let Ot = 0; Ot < this._size; Ot++) et(tt[Ot], Vt + Ot)
        }))
      }
      _alignBuffer() {}
    }

    function Ht(tt) {
      switch (tt) {
        case jt.UVKind:
        case jt.UV2Kind:
        case jt.UV3Kind:
        case jt.UV4Kind:
        case jt.UV5Kind:
        case jt.UV6Kind:
          return 2;
        case jt.NormalKind:
        case jt.PositionKind:
          return 3;
        case jt.ColorKind:
        case jt.ColorInstanceKind:
        case jt.MatricesIndicesKind:
        case jt.MatricesIndicesExtraKind:
        case jt.MatricesWeightsKind:
        case jt.MatricesWeightsExtraKind:
        case jt.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + tt + "'")
      }
    }

    function Xt(tt) {
      return tt instanceof Int8Array ? jt.BYTE : tt instanceof Uint8Array ? jt.UNSIGNED_BYTE : tt instanceof Int16Array ? jt.SHORT : tt instanceof Uint16Array ? jt.UNSIGNED_SHORT : tt instanceof Int32Array ? jt.INT : tt instanceof Uint32Array ? jt.UNSIGNED_INT : jt.FLOAT
    }

    function Qt(tt) {
      return (0, Dt.v)(tt)
    }

    function lt(tt, et, Vt, Ot, qt, mt, dt, jt) {
      (0, Dt.l)(tt, et, Vt, Ot, qt, mt, dt, ((tt, et) => {
        for (let Vt = 0; Vt < Ot; Vt++) jt(tt[Vt], et + Vt)
      }))
    }

    function Et(tt, et, Vt, Ot, qt, mt, dt, jt) {
      return (0, Dt.s)(tt, et, Vt, Ot, qt, mt, dt, jt)
    }
    jt._Counter = 0, jt.BYTE = 5120, jt.UNSIGNED_BYTE = 5121, jt.SHORT = 5122, jt.UNSIGNED_SHORT = 5123, jt.INT = 5124, jt.UNSIGNED_INT = 5125, jt.FLOAT = 5126, jt.HALF_FLOAT = 5131, jt.PositionKind = "position", jt.NormalKind = "normal", jt.TangentKind = "tangent", jt.UVKind = "uv", jt.UV2Kind = "uv2", jt.UV3Kind = "uv3", jt.UV4Kind = "uv4", jt.UV5Kind = "uv5", jt.UV6Kind = "uv6", jt.ColorKind = "color", jt.ColorInstanceKind = "instanceColor", jt.MatricesIndicesKind = "matricesIndices", jt.MatricesWeightsKind = "matricesWeights", jt.MatricesIndicesExtraKind = "matricesIndicesExtra", jt.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let ft = !1;

    function wt() {
      ft || (ft = !0, jt.DeduceStride = Ht, jt.GetDataType = Xt, jt.GetTypeByteLength = Qt, jt.ForEach = lt, jt.GetFloatData = Et)
    }
  },
  40125: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.uQ = 0, this.is32Bits = !1, this.uniqueId = Ot._Counter++
      }
    }
    Ot._Counter = 0
  },
  40340: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt
    });
    var Ot = Vt(37336),
      qt = Vt(40343);
    class Dt {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || et && !this.pickedMesh.isVerticesDataPresent(qt.m.NormalKind)) return null;
        let Vt, Dt = this.pickedMesh.zOt();
        0 === Dt?.length && (Dt = null);
        const mt = Ot.k.uf[0],
          dt = Ot.k.uf[1],
          jt = Ot.k.uf[2];
        if (et) {
          const tt = this.pickedMesh.getVerticesData(qt.m.NormalKind);
          let et = Dt ? Ot.n.FromArrayToRef(tt, 3 * Dt[3 * this.faceId], mt) : mt.W9(tt[3 * this.faceId * 3], tt[3 * this.faceId * 3 + 1], tt[3 * this.faceId * 3 + 2]),
            Ht = Dt ? Ot.n.FromArrayToRef(tt, 3 * Dt[3 * this.faceId + 1], dt) : dt.W9(tt[3 * (3 * this.faceId + 1)], tt[3 * (3 * this.faceId + 1) + 1], tt[3 * (3 * this.faceId + 1) + 2]),
            Xt = Dt ? Ot.n.FromArrayToRef(tt, 3 * Dt[3 * this.faceId + 2], jt) : jt.W9(tt[3 * (3 * this.faceId + 2)], tt[3 * (3 * this.faceId + 2) + 1], tt[3 * (3 * this.faceId + 2) + 2]);
          et = et.scale(this.bu), Ht = Ht.scale(this.bv), Xt = Xt.scale(1 - this.bu - this.bv), Vt = new Ot.n(et.x + Ht.x + Xt.x, et.y + Ht.y + Xt.y, et.z + Ht.z + Xt.z)
        } else {
          const tt = this.pickedMesh.getVerticesData(qt.m.PositionKind),
            et = Dt ? Ot.n.FromArrayToRef(tt, 3 * Dt[3 * this.faceId], mt) : mt.W9(tt[3 * this.faceId * 3], tt[3 * this.faceId * 3 + 1], tt[3 * this.faceId * 3 + 2]),
            Ht = Dt ? Ot.n.FromArrayToRef(tt, 3 * Dt[3 * this.faceId + 1], dt) : dt.W9(tt[3 * (3 * this.faceId + 1)], tt[3 * (3 * this.faceId + 1) + 1], tt[3 * (3 * this.faceId + 1) + 2]),
            Xt = Dt ? Ot.n.FromArrayToRef(tt, 3 * Dt[3 * this.faceId + 2], jt) : jt.W9(tt[3 * (3 * this.faceId + 2)], tt[3 * (3 * this.faceId + 2) + 1], tt[3 * (3 * this.faceId + 2) + 2]),
            Qt = et.subtract(Ht),
            lt = Xt.subtract(Ht);
          Vt = Ot.n.Cross(Qt, lt)
        }
        const Ht = (tt, et) => {
          if (-1 !== this.thinInstanceIndex) {
            const Vt = tt._thinInstanceDataStorage.matrixData,
              qt = this.thinInstanceIndex << 4;
            if (Vt && Vt.length > qt) {
              const tt = Ot.k.Matrix[0];
              Ot.c.FromArrayToRef(Vt, qt, tt), Ot.n.TransformNormalToRef(et, tt, et)
            }
          }
          let Vt = tt.getWorldMatrix();
          tt.nonUniformScaling && (Ot.k.Matrix[0].rK(Vt), Vt = Ot.k.Matrix[0], Vt.setTranslationFromFloats(0, 0, 0), Vt.invert(), Vt.transposeToRef(Ot.k.Matrix[1]), Vt = Ot.k.Matrix[1]), Ot.n.TransformNormalToRef(et, Vt, et)
        };
        if (tt && Ht(this.pickedMesh, Vt), this.ray) {
          const et = Ot.k.uf[0].rK(Vt);
          tt || Ht(this.pickedMesh, et), Ot.n.Dot(et, this.ray.direction) > 0 && Vt.negateInPlace()
        }
        return Vt.normalize(), Vt
      }
      getTextureCoordinates() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qt.m.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(tt)) return null;
        const et = this.pickedMesh.zOt();
        if (!et) return null;
        const Vt = this.pickedMesh.getVerticesData(tt);
        if (!Vt) return null;
        let Dt = Ot.m.FromArray(Vt, 2 * et[3 * this.faceId]),
          mt = Ot.m.FromArray(Vt, 2 * et[3 * this.faceId + 1]),
          dt = Ot.m.FromArray(Vt, 2 * et[3 * this.faceId + 2]);
        return Dt = Dt.scale(this.bu), mt = mt.scale(this.bv), dt = dt.scale(1 - this.bu - this.bv), new Ot.m(Dt.x + mt.x + dt.x, Dt.y + mt.y + dt.y)
      }
    }
  },
  40177: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt
    });
    var Ot = Vt(40048);
    let qt = !1;

    function Dt() {
      qt || (qt = !0, Ot.ThinEngine.prototype.updateDynamicIndexBuffer = function(tt, et) {
        let Vt;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(tt), Vt = tt.is32Bits ? et instanceof Uint32Array ? et : new Uint32Array(et) : et instanceof Uint16Array ? et : new Uint16Array(et), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Vt, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, Ot.ThinEngine.prototype.updateDynamicVertexBuffer = function(tt, et, Vt, Ot) {
        this.bindArrayBuffer(tt), void 0 === Vt && (Vt = 0);
        const qt = et.byteLength || et.length;
        void 0 === Ot || Ot >= qt && 0 === Vt ? et instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Vt, new Float32Array(et)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Vt, et) : et instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Vt, new Float32Array(et).subarray(0, Ot / 4)) : (et = ArrayBuffer.isView(et) ? new Uint8Array(et.buffer, et.byteOffset, Ot) : new Uint8Array(et, 0, Ot), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Vt, et)), this._resetVertexBufferBinding()
      })
    }
  },
  40140: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot
    });
    class Ot {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          et = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = et, !tt && (tt = et.createTexture(), !tt)) throw new Error("Unable to create webGL texture");
        this.set(tt)
      }
      setUsage() {}
      set(tt) {
        this._webGLTexture = tt
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(tt) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(tt)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const tt of this._MSAARenderBuffers) this._context.deleteRenderbuffer(tt);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[tt] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  40092: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Mt
    });
    var Ot = Vt(37367),
      qt = Vt(40052),
      Dt = Vt(37359),
      mt = Vt(38899),
      dt = Vt(37353),
      jt = Vt(40098);
    class Ht {
      constructor() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, tt && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(tt) {
        this._zOffset !== tt && (this._zOffset = tt, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(tt) {
        this._zOffsetUnits !== tt && (this._zOffsetUnits = tt, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(tt) {
        this._cullFace !== tt && (this._cullFace = tt, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(tt) {
        this._cull !== tt && (this._cull = tt, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(tt) {
        this._depthFunc !== tt && (this._depthFunc = tt, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(tt) {
        this._depthMask !== tt && (this._depthMask = tt, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(tt) {
        this._depthTest !== tt && (this._depthTest = tt, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(tt) {
        this._frontFace !== tt && (this._frontFace = tt, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(tt) {
        this.isDirty && (this._isCullDirty && (this.cull ? tt.enable(tt.CULL_FACE) : tt.disable(tt.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (tt.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (tt.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? tt.enable(tt.DEPTH_TEST) : tt.disable(tt.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (tt.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (tt.enable(tt.POLYGON_OFFSET_FILL), tt.polygonOffset(this.zOffset, this.zOffsetUnits)) : tt.disable(tt.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (tt.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class Xt {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(tt) {
        this._func !== tt && (this._func = tt, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(tt) {
        this._backFunc !== tt && (this._backFunc = tt, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(tt) {
        this._funcRef !== tt && (this._funcRef = tt, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(tt) {
        this._funcMask !== tt && (this._funcMask = tt, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(tt) {
        this._opStencilFail !== tt && (this._opStencilFail = tt, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(tt) {
        this._opDepthFail !== tt && (this._opDepthFail = tt, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(tt) {
        this._opStencilDepthPass !== tt && (this._opStencilDepthPass = tt, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(tt) {
        this._backOpStencilFail !== tt && (this._backOpStencilFail = tt, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(tt) {
        this._backOpDepthFail !== tt && (this._backOpDepthFail = tt, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(tt) {
        this._backOpStencilDepthPass !== tt && (this._backOpStencilDepthPass = tt, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(tt) {
        this._mask !== tt && (this._mask = tt, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(tt) {
        this._enabled !== tt && (this._enabled = tt, this._isStencilTestDirty = !0)
      }
      constructor() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, tt && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(tt) {
        if (!tt) return;
        const et = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = et ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = et ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = et ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = et ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = et ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = et ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = et ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = et ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = et ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = et ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = et ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = et ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? tt.enable(tt.STENCIL_TEST) : tt.disable(tt.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (tt.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (tt.stencilFuncSeparate(tt.FRONT, this.func, this.funcRef, this.funcMask), tt.stencilFuncSeparate(tt.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (tt.stencilOpSeparate(tt.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), tt.stencilOpSeparate(tt.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class Qt {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = Qt.ALWAYS, this.opStencilFail = Qt.KEEP, this.opDepthFail = Qt.KEEP, this.opStencilDepthPass = Qt.REPLACE, this.backFunc = Qt.ALWAYS, this.backOpStencilFail = Qt.KEEP, this.backOpDepthFail = Qt.KEEP, this.backOpStencilDepthPass = Qt.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(tt) {
        this.func = tt
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(tt) {
        this.backFunc = tt
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(tt) {
        this.funcRef = tt
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(tt) {
        this.funcMask = tt
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(tt) {
        this.opStencilFail = tt
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(tt) {
        this.opDepthFail = tt
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(tt) {
        this.opStencilDepthPass = tt
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(tt) {
        this.backOpStencilFail = tt
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(tt) {
        this.backOpDepthFail = tt
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(tt) {
        this.backOpStencilDepthPass = tt
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(tt) {
        this.mask = tt
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(tt) {
        this.enabled = tt
      }
    }
    Qt.ALWAYS = 519, Qt.KEEP = 7680, Qt.REPLACE = 7681;
    var lt = Vt(40105),
      Et = Vt(40080),
      ft = Vt(40037),
      wt = Vt(40068),
      yt = Vt(40076);

    function Nt(tt, et) {
      if (et) {
        const {
          requestAnimationFrame: Vt
        } = et;
        if ("function" === typeof Vt) return Vt(tt)
      }
      if ((0, wt.j)()) {
        const {
          requestAnimationFrame: Vt
        } = et || window;
        if ("function" === typeof Vt) return Vt(tt)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(tt);
      return setTimeout(tt, 16)
    }
    class Mt {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(tt) {
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
      get LOt() {
        return this._useReverseDepthBuffer
      }
      set LOt(tt) {
        tt !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = tt, this._depthCullingState.depthFunc = tt ? 518 : 515)
      }
      setColorWrite(tt) {
        tt !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = tt)
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
      _getGlobalDefines(tt) {
        if (tt) return this.isNDCHalfZRange ? tt.IS_NDC_HALF_ZRANGE = "" : delete tt.IS_NDC_HALF_ZRANGE, this.LOt ? tt.USE_REVERSE_DEPTHBUFFER = "" : delete tt.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? tt.USE_EXACT_SRGB_CONVERSIONS = "" : delete tt.USE_EXACT_SRGB_CONVERSIONS);
        {
          let tt = "";
          return this.isNDCHalfZRange && (tt += "#define IS_NDC_HALF_ZRANGE"), this.LOt && (tt && (tt += "\n"), tt += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (tt && (tt += "\n"), tt += "#define USE_EXACT_SRGB_CONVERSIONS"), tt
        }
      }
      _rebuildInternalTextures() {
        const tt = this._internalTexturesCache.slice();
        for (const et of tt) et._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const tt = this._renderTargetWrapperCache.slice();
        for (const et of tt) et.textures?.some((tt => 15 === tt.source)) || et._rebuild()
      }
      _rebuildEffects() {
        for (const tt in this._compiledEffects) {
          const et = this._compiledEffects[tt];
          et._pipelineContext = null, et._prepareEffect()
        }
        qt.b.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        mt.d.Warn(this.name + " context successfully restored."), this.bf.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(tt) {
        setTimeout((() => {
          this._clearEmptyResources();
          const et = this._depthCullingState.depthTest,
            Vt = this._depthCullingState.depthFunc,
            Ot = this._depthCullingState.depthMask,
            qt = this._stencilState.stencilTest;
          tt(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = et, this._depthCullingState.depthFunc = Vt, this._depthCullingState.depthMask = Ot, this._stencilState.stencilTest = qt, this._flagContextRestored()
        }), 0)
      }
      get bC() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(tt) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(tt) {}
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
          const tt = new Uint8Array(4),
            et = [tt, tt, tt, tt, tt, tt];
          this._emptyCubeTexture = this.createRawCubeTexture(et, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(tt) {
        this._framebufferDimensionsObject = tt
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(tt) {
        if (!tt) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const et = this._activeRenderLoops.indexOf(tt);
        et >= 0 && (this._activeRenderLoops.splice(et, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: tt
            } = this.customAnimationFrameRequester;
            tt && tt(this.customAnimationFrameRequester.Kf), delete this.customAnimationFrameRequester.Kf
          }
        } else if (0 !== this._frameHandler) {
          const tt = this._frameHandler;
          if (this._frameHandler = 0, (0, wt.j)()) {
            const {
              cancelAnimationFrame: et
            } = this.getHostWindow() || window;
            if ("function" === typeof et) return et(tt)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(tt);
          return clearTimeout(tt)
        }
      }
      QJ() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      yJ() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(tt) {
        this._maxFPS = tt, void 0 !== tt && (this._minFrameTime = tt <= 0 ? Number.MAX_VALUE : 1e3 / tt)
      }
      _isOverFrameTime(tt) {
        if (!tt || void 0 === this._maxFPS) return !1;
        const et = tt - this._lastFrameTime;
        return this._lastFrameTime = tt, this._renderAccumulator += et, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(tt) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(tt)) {
          let tt = !0;
          (this.bC || !this.renderEvenInBackground && this._windowIsBackground) && (tt = !1), tt && (this.QJ(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.yJ())
        }
      }
      _renderLoop(tt) {
        this._processFrame(tt), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let tt = 0; tt < this._activeRenderLoops.length; tt++) {
          (0, this._activeRenderLoops[tt])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(tt, et) {
        return Nt(tt, et)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Kf = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.Kf) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(tt) {
        -1 === this._activeRenderLoops.indexOf(tt) && (this._activeRenderLoops.push(tt), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(tt) {
        this._depthCullingState.depthTest = tt
      }
      setZOffset(tt) {
        this._depthCullingState.zOffset = this.LOt ? -tt : tt
      }
      getZOffset() {
        const tt = this._depthCullingState.zOffset;
        return this.LOt ? -tt : tt
      }
      setZOffsetUnits(tt) {
        this._depthCullingState.zOffsetUnits = this.LOt ? -tt : tt
      }
      getZOffsetUnits() {
        const tt = this._depthCullingState.zOffsetUnits;
        return this.LOt ? -tt : tt
      }
      getHostWindow() {
        return (0, wt.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(tt) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const tt of this.scenes) tt._rebuildTextures();
        for (const tt of this._virtualScenes) tt._rebuildTextures()
      }
      _releaseRenderTargetWrapper(tt) {
        const et = this._renderTargetWrapperCache.indexOf(tt); - 1 !== et && this._renderTargetWrapperCache.splice(et, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(tt, et, Vt) {
        const Ot = et || this.getRenderWidth(),
          qt = Vt || this.getRenderHeight(),
          Dt = tt.x || 0,
          mt = tt.y || 0;
        this._cachedViewport = tt, this._viewport(Dt * Ot, mt * qt, Ot * tt.width, qt * tt.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(tt) {
        return new Path2D(tt)
      }
      get description() {
        let tt = this.name + this.version;
        return this._caps.parallelShaderCompile && (tt += " - Parallel shader compilation"), tt
      }
      _createTextureBase(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          jt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Ht = arguments.length > 7 ? arguments[7] : void 0,
          Xt = arguments.length > 8 ? arguments[8] : void 0,
          Qt = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          lt = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Et = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          wt = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          yt = arguments.length > 13 ? arguments[13] : void 0,
          Nt = arguments.length > 14 ? arguments[14] : void 0,
          bt = arguments.length > 15 ? arguments[15] : void 0;
        const Jt = "data:" === (tt = tt || "").substring(0, 5),
          Ct = "blob:" === tt.substring(0, 5),
          ut = Jt && -1 !== tt.indexOf(";base64,"),
          Kt = lt || new ft.d(this, 1);
        Kt !== lt && (Kt.label = tt.substring(0, 60));
        const ht = tt;
        !this._transformTextureUrl || ut || lt || Qt || (tt = this._transformTextureUrl(tt)), ht !== tt && (Kt._originalUrl = ht);
        const vt = tt.lastIndexOf(".");
        let Wt = wt || (vt > -1 ? tt.substring(vt).toLowerCase() : "");
        Wt.indexOf("?") > -1 && (Wt = Wt.split("?")[0]);
        const St = Mt.GetCompatibleTextureLoader(Wt, yt);
        Ot && Ot.addPendingData(Kt), Kt.url = tt, Kt.generateMipMaps = !et, Kt.samplingMode = qt, Kt.invertY = Vt, Kt._useSRGBBuffer = this._getUseSRGBBuffer(!!bt, et), this._doNotHandleContextLost || (Kt._buffer = Qt);
        let ct = null;
        dt && !lt && (ct = Kt.onLoadedObservable.add(dt)), lt || this._internalTexturesCache.push(Kt);
        const Rt = (Vt, lt) => {
          Ot && Ot.removePendingData(Kt), tt === ht ? (ct && Kt.onLoadedObservable.remove(ct), Dt.d.UseFallbackTexture && tt !== Dt.d.FallbackTexture && this._createTextureBase(Dt.d.FallbackTexture, et, Kt.invertY, Ot, qt, null, jt, Ht, Xt, Qt, Kt), Vt = (Vt || "Unknown error") + (Dt.d.UseFallbackTexture ? " - Fallback texture was used" : ""), Kt.onErrorObservable.notifyObservers({
            message: Vt,
            exception: lt
          }), jt && jt(Vt, lt)) : (mt.d.Warn(`Failed to load ${tt}, falling back to ${ht}`), this._createTextureBase(ht, et, Kt.invertY, Ot, qt, dt, jt, Ht, Xt, Qt, Kt, Et, wt, yt, Nt, bt))
        };
        if (St) {
          const et = async tt => {
            (await St).loadData(tt, Kt, ((tt, et, Vt, Dt, mt, dt) => {
              dt ? Rt("TextureLoader failed to load data") : Ht(Kt, Wt, Ot, {
                width: tt,
                height: et
              }, Kt.invertY, !Vt, Dt, (() => (mt(), !1)), qt)
            }), Nt)
          };
          if (Qt) {
            const tt = async tt => {
              try {
                await et(tt)
              } catch (Vt) {
                Rt("Failed to parse texture data", Vt)
              }
            };
            Qt instanceof ArrayBuffer ? tt(new Uint8Array(Qt)) : ArrayBuffer.isView(Qt) ? tt(Qt) : jt && jt("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(tt, (async tt => {
            try {
              await et(new Uint8Array(tt))
            } catch (Vt) {
              Rt("Failed to parse texture data", Vt)
            }
          }), void 0, Ot ? Ot.offlineProvider : void 0, !0, ((tt, et) => {
            Rt("Unable to load " + (tt && tt.responseURL, et))
          }))
        } else {
          const Vt = tt => {
            Ct && !this._doNotHandleContextLost && (Kt._buffer = tt), Ht(Kt, Wt, Ot, tt, Kt.invertY, et, !1, Xt, qt)
          };
          !Jt || ut ? Qt && ("string" === typeof Qt.decoding || Qt.close) ? Vt(Qt) : Mt._FileToolsLoadImage(tt || "", Vt, Rt, Ot ? Ot.offlineProvider : null, yt, Kt.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof Qt || Qt instanceof ArrayBuffer || ArrayBuffer.isView(Qt) || Qt instanceof Blob ? Mt._FileToolsLoadImage(Qt, Vt, Rt, Ot ? Ot.offlineProvider : null, yt, Kt.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : Qt && Vt(Qt)
        }
        return Kt
      }
      _rebuildBuffers() {
        for (const tt of this._uniformBuffers) tt._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, wt.d)() ? document : null
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
        for (const tt in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, tt) && (this._boundTexturesCache[tt] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(tt) {
        this._name = tt
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
      setHardwareScalingLevel(tt) {
        this._hardwareScalingLevel = tt, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(tt) {
        this._doNotHandleContextLost = tt
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(tt, et, Vt) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new Ht, this._stencilStateComposer = new Xt, this._stencilState = new Qt, this._alphaState = new lt.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Ot.c, this.onCanvasFocusObservable = new Ot.c, this.onNewSceneAddedObservable = new Ot.c, this.onResizeObservable = new Ot.c, this.onCanvasPointerOutObservable = new Ot.c, this.onEffectErrorObservable = new Ot.c, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new Ot.c, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = tt => this._renderLoop(tt), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new Ot.c, this.onAfterShaderCompilationObservable = new Ot.c, this.onBeginFrameObservable = new Ot.c, this.onEndFrameObservable = new Ot.c, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new Ot.c, this.bf = new Ot.c, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.ZI = new Ot.c, this.onReleaseEffectsObservable = new Ot.c, Dt.d.Instances.push(this), this.startTime = jt.b.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, dt.b.SetMatrixPrecision(!!et.useLargeWorldRendering || !!et.useHighPrecisionMatrix), (0, wt.h)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), et.antialias = tt ?? et.antialias, et.deterministicLockstep = et.deterministicLockstep ?? !1, et.lockstepMaxSteps = et.lockstepMaxSteps ?? 4, et.timeStep = et.timeStep ?? 1 / 60, et.stencil = et.stencil ?? !0, this._audioContext = et.audioEngineOptions?.audioContext ?? null, this._audioDestination = et.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = et.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!et.doNotHandleContextLost, this._isStencilEnable = !!et.stencil, this.useExactSrgbConversions = et.useExactSrgbConversions ?? !1, this.canvasTabIndex = et.canvasTabIndex ?? this.canvasTabIndex;
        const qt = (0, wt.j)() && window.devicePixelRatio || 1,
          mt = et.limitDeviceRatio || qt;
        Vt = Vt || et.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = Vt, this._hardwareScalingLevel = Vt ? 1 / Math.min(mt, qt) : 1, this._lastDevicePixelRatio = qt, this._creationOptions = et
      }
      resize() {
        let tt, et, Vt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const tt = (0, wt.j)() && window.devicePixelRatio || 1,
            et = this._lastDevicePixelRatio / tt;
          this._lastDevicePixelRatio = tt, this._hardwareScalingLevel *= et
        }
        if ((0, wt.j)() && (0, wt.d)())
          if (this._renderingCanvas) {
            const Vt = this._renderingCanvas.getBoundingClientRect?.();
            tt = this._renderingCanvas.clientWidth || Vt?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, et = this._renderingCanvas.clientHeight || Vt?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else tt = window.innerWidth, et = window.innerHeight;
        else tt = this._renderingCanvas ? this._renderingCanvas.width : 100, et = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(tt / this._hardwareScalingLevel, et / this._hardwareScalingLevel, Vt)
      }
      setSize(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (tt |= 0, et |= 0, !Vt && this._renderingCanvas.width === tt && this._renderingCanvas.height === et) return !1;
        if (this._renderingCanvas.width = tt, this._renderingCanvas.height = et, this.scenes) {
          for (let tt = 0; tt < this.scenes.length; tt++) {
            const et = this.scenes[tt];
            for (let tt = 0; tt < et.cameras.length; tt++) {
              et.cameras[tt]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt) {
        throw (0, Et.e)("engine.rawTexture")
      }
      createRawCubeTexture(tt, et, Vt, Ot, qt, Dt, mt, dt) {
        throw (0, Et.e)("engine.rawTexture")
      }
      createRawTexture3D(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt) {
        throw (0, Et.e)("engine.rawTexture")
      }
      createRawTexture2DArray(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt) {
        throw (0, Et.e)("engine.rawTexture")
      }
      _sharedInit(tt) {
        this._renderingCanvas = tt
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const tt = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== tt.indexOf("Mobile") || -1 !== tt.indexOf("Mac") && (0, wt.d)() && "ontouchend" in document
        }, this._checkForMobile(), (0, wt.j)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(tt) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(tt, !1)
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
      _createImageBitmapFromSource(tt, et) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(tt, et) {
        return createImageBitmap(tt, et)
      }
      resizeImageBitmap(tt, et, Vt) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(tt) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(tt, et) {
        if ("undefined" === typeof document) return new OffscreenCanvas(tt, et);
        const Vt = document.createElement("canvas");
        return Vt.width = tt, Vt.height = et, Vt
      }
      createCanvas(tt, et) {
        return Mt._CreateCanvas(tt, et)
      }
      static _FileToolsLoadImage(tt, et, Vt, Ot, qt, Dt, mt) {
        if (!yt.c.loadImage) throw (0, Et.e)("FileTools");
        return yt.c.loadImage(tt, et, Vt, Ot, qt, Dt, mt)
      }
      _loadFile(tt, et, Vt, Ot, qt, Dt) {
        const mt = (0, yt.j)(tt, et, Vt, Ot, qt, Dt);
        return this._activeRequests.push(mt), mt.onCompleteObservable.add((() => {
          const tt = this._activeRequests.indexOf(mt); - 1 !== tt && this._activeRequests.splice(tt, 1)
        })), mt
      }
      static _FileToolsLoadFile(tt, et, Vt, Ot, qt, Dt) {
        if (yt.c.loadFile) return yt.c.loadFile(tt, et, Vt, Ot, qt, Dt);
        throw (0, Et.e)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), qt.b.ResetCache();
        for (const et of this._activeRequests) et.abort();
        this._boundRenderFunction = null, this.ZI.notifyObservers(this), this.ZI.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, wt.j)() && window.removeEventListener("resize", this._checkForMobile);
        const tt = Dt.d.Instances.indexOf(this);
        tt >= 0 && Dt.d.Instances.splice(tt, 1), Dt.d.Instances.length || (Dt.d.OnEnginesDisposedObservable.notifyObservers(this), Dt.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(tt) {
        throw (0, Et.e)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(tt, et) {
        for (let Vt = 0; Vt < Dt.d.Instances.length; Vt++) {
          const Ot = Dt.d.Instances[Vt];
          for (let Vt = 0; Vt < Ot.scenes.length; Vt++) Ot.scenes[Vt].markAllMaterialsAsDirty(tt, et)
        }
      }
      static GetCompatibleTextureLoader(tt, et) {
        return null
      }
    }
    Mt._RenderPassIdCounter = 0, Mt._RescalePostProcessFactory = null, Mt.CollisionsEpsilon = .001, Mt.QueueNewFrame = Nt
  },
  40061: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ot.ShadersRepository : Ot.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ot.ShadersStore : Ot.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ot.IncludesShadersStore : Ot.IncludesShadersStoreWGSL
      }
    }
    Ot.ShadersRepository = "src/Shaders/", Ot.ShadersStore = {}, Ot.IncludesShadersStore = {}, Ot.ShadersRepositoryWGSL = "src/ShadersWGSL/", Ot.ShadersStoreWGSL = {}, Ot.IncludesShadersStoreWGSL = {}
  },
  40072: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => lt,
      e: () => bt,
      h: () => ft,
      l: () => Et,
      o: () => wt,
      q: () => Mt,
      t: () => Qt,
      u: () => Ht,
      y: () => Xt,
      z: () => jt,
      D: () => dt
    });
    class Ot {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(tt) {
        tt && this.program && tt(this.program)
      }
      setEngine(tt) {
        this.engine = tt
      }
      _fillEffectInformation(tt, et, Vt, Ot, qt, Dt, mt, dt) {
        const jt = this.engine;
        if (jt.supportsUniformBuffers)
          for (const Xt in et) tt.bindUniformBlock(Xt, et[Xt]);
        let Ht;
        for (this.engine.getUniforms(this, Vt).forEach(((tt, et) => {
            Ot[Vt[et]] = tt
          })), this._uniforms = Ot, Ht = 0; Ht < qt.length; Ht++) {
          null == tt.getUniform(qt[Ht]) && (qt.splice(Ht, 1), Ht--)
        }
        qt.forEach(((tt, et) => {
          Dt[tt] = et
        }));
        for (const Xt of jt.getAttributes(this, mt)) dt.push(Xt)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(tt, et) {
        const Vt = this._valueCache[tt],
          Ot = et.updateFlag;
        if (void 0 !== Vt && Vt === Ot) return !1;
        const qt = et.GOt();
        let Dt = this._matrixValueCache[tt];
        if (void 0 !== Vt && null !== Vt && void 0 !== Dt) {
          let et = !0;
          for (let tt = 15; tt >= 0; tt--)
            if (Dt[tt] !== qt[tt]) {
              et = !1;
              break
            } if (et) return this._valueCache[tt] = Ot, !1
        }
        return void 0 === Dt && (Dt = this._matrixValueCache[tt] = new Float32Array(16)), Dt.set(qt), this._valueCache[tt] = Ot, !0
      }
      _cacheFloat2(tt, et, Vt) {
        let Ot = this._valueCache[tt];
        if (!Ot || 2 !== Ot.length) return Ot = [et, Vt], this._valueCache[tt] = Ot, !0;
        let qt = !1;
        return Ot[0] !== et && (Ot[0] = et, qt = !0), Ot[1] !== Vt && (Ot[1] = Vt, qt = !0), qt
      }
      _cacheFloat3(tt, et, Vt, Ot) {
        let qt = this._valueCache[tt];
        if (!qt || 3 !== qt.length) return qt = [et, Vt, Ot], this._valueCache[tt] = qt, !0;
        let Dt = !1;
        return qt[0] !== et && (qt[0] = et, Dt = !0), qt[1] !== Vt && (qt[1] = Vt, Dt = !0), qt[2] !== Ot && (qt[2] = Ot, Dt = !0), Dt
      }
      _cacheFloat4(tt, et, Vt, Ot, qt) {
        let Dt = this._valueCache[tt];
        if (!Dt || 4 !== Dt.length) return Dt = [et, Vt, Ot, qt], this._valueCache[tt] = Dt, !0;
        let mt = !1;
        return Dt[0] !== et && (Dt[0] = et, mt = !0), Dt[1] !== Vt && (Dt[1] = Vt, mt = !0), Dt[2] !== Ot && (Dt[2] = Ot, mt = !0), Dt[3] !== qt && (Dt[3] = qt, mt = !0), mt
      }
      setInt(tt, et) {
        const Vt = this._valueCache[tt];
        void 0 !== Vt && Vt === et || this.engine.setInt(this._uniforms[tt], et) && (this._valueCache[tt] = et)
      }
      setInt2(tt, et, Vt) {
        this._cacheFloat2(tt, et, Vt) && (this.engine.setInt2(this._uniforms[tt], et, Vt) || (this._valueCache[tt] = null))
      }
      setInt3(tt, et, Vt, Ot) {
        this._cacheFloat3(tt, et, Vt, Ot) && (this.engine.setInt3(this._uniforms[tt], et, Vt, Ot) || (this._valueCache[tt] = null))
      }
      setInt4(tt, et, Vt, Ot, qt) {
        this._cacheFloat4(tt, et, Vt, Ot, qt) && (this.engine.setInt4(this._uniforms[tt], et, Vt, Ot, qt) || (this._valueCache[tt] = null))
      }
      setIntArray(tt, et) {
        this._valueCache[tt] = null, this.engine.setIntArray(this._uniforms[tt], et)
      }
      setIntArray2(tt, et) {
        this._valueCache[tt] = null, this.engine.setIntArray2(this._uniforms[tt], et)
      }
      setIntArray3(tt, et) {
        this._valueCache[tt] = null, this.engine.setIntArray3(this._uniforms[tt], et)
      }
      setIntArray4(tt, et) {
        this._valueCache[tt] = null, this.engine.setIntArray4(this._uniforms[tt], et)
      }
      setUInt(tt, et) {
        const Vt = this._valueCache[tt];
        void 0 !== Vt && Vt === et || this.engine.setUInt(this._uniforms[tt], et) && (this._valueCache[tt] = et)
      }
      setUInt2(tt, et, Vt) {
        this._cacheFloat2(tt, et, Vt) && (this.engine.setUInt2(this._uniforms[tt], et, Vt) || (this._valueCache[tt] = null))
      }
      setUInt3(tt, et, Vt, Ot) {
        this._cacheFloat3(tt, et, Vt, Ot) && (this.engine.setUInt3(this._uniforms[tt], et, Vt, Ot) || (this._valueCache[tt] = null))
      }
      setUInt4(tt, et, Vt, Ot, qt) {
        this._cacheFloat4(tt, et, Vt, Ot, qt) && (this.engine.setUInt4(this._uniforms[tt], et, Vt, Ot, qt) || (this._valueCache[tt] = null))
      }
      setUIntArray(tt, et) {
        this._valueCache[tt] = null, this.engine.setUIntArray(this._uniforms[tt], et)
      }
      setUIntArray2(tt, et) {
        this._valueCache[tt] = null, this.engine.setUIntArray2(this._uniforms[tt], et)
      }
      setUIntArray3(tt, et) {
        this._valueCache[tt] = null, this.engine.setUIntArray3(this._uniforms[tt], et)
      }
      setUIntArray4(tt, et) {
        this._valueCache[tt] = null, this.engine.setUIntArray4(this._uniforms[tt], et)
      }
      setArray(tt, et) {
        this._valueCache[tt] = null, this.engine.setArray(this._uniforms[tt], et)
      }
      setArray2(tt, et) {
        this._valueCache[tt] = null, this.engine.setArray2(this._uniforms[tt], et)
      }
      setArray3(tt, et) {
        this._valueCache[tt] = null, this.engine.setArray3(this._uniforms[tt], et)
      }
      setArray4(tt, et) {
        this._valueCache[tt] = null, this.engine.setArray4(this._uniforms[tt], et)
      }
      setMatrices(tt, et) {
        et && (this._valueCache[tt] = null, this.engine.setMatrices(this._uniforms[tt], et))
      }
      setMatrix(tt, et) {
        this._cacheMatrix(tt, et) && (this.engine.setMatrices(this._uniforms[tt], et.GOt()) || (this._valueCache[tt] = null))
      }
      setMatrix3x3(tt, et) {
        this._valueCache[tt] = null, this.engine.setMatrix3x3(this._uniforms[tt], et)
      }
      setMatrix2x2(tt, et) {
        this._valueCache[tt] = null, this.engine.setMatrix2x2(this._uniforms[tt], et)
      }
      setFloat(tt, et) {
        const Vt = this._valueCache[tt];
        void 0 !== Vt && Vt === et || this.engine.setFloat(this._uniforms[tt], et) && (this._valueCache[tt] = et)
      }
      setVector2(tt, et) {
        this._cacheFloat2(tt, et.x, et.y) && (this.engine.setFloat2(this._uniforms[tt], et.x, et.y) || (this._valueCache[tt] = null))
      }
      setFloat2(tt, et, Vt) {
        this._cacheFloat2(tt, et, Vt) && (this.engine.setFloat2(this._uniforms[tt], et, Vt) || (this._valueCache[tt] = null))
      }
      setVector3(tt, et) {
        this._cacheFloat3(tt, et.x, et.y, et.z) && (this.engine.setFloat3(this._uniforms[tt], et.x, et.y, et.z) || (this._valueCache[tt] = null))
      }
      setFloat3(tt, et, Vt, Ot) {
        this._cacheFloat3(tt, et, Vt, Ot) && (this.engine.setFloat3(this._uniforms[tt], et, Vt, Ot) || (this._valueCache[tt] = null))
      }
      setVector4(tt, et) {
        this._cacheFloat4(tt, et.x, et.y, et.z, et.w) && (this.engine.setFloat4(this._uniforms[tt], et.x, et.y, et.z, et.w) || (this._valueCache[tt] = null))
      }
      setQuaternion(tt, et) {
        this._cacheFloat4(tt, et.x, et.y, et.z, et.w) && (this.engine.setFloat4(this._uniforms[tt], et.x, et.y, et.z, et.w) || (this._valueCache[tt] = null))
      }
      setFloat4(tt, et, Vt, Ot, qt) {
        this._cacheFloat4(tt, et, Vt, Ot, qt) && (this.engine.setFloat4(this._uniforms[tt], et, Vt, Ot, qt) || (this._valueCache[tt] = null))
      }
      setColor3(tt, et) {
        this._cacheFloat3(tt, et.r, et.g, et.b) && (this.engine.setFloat3(this._uniforms[tt], et.r, et.g, et.b) || (this._valueCache[tt] = null))
      }
      setColor4(tt, et, Vt) {
        this._cacheFloat4(tt, et.r, et.g, et.b, Vt) && (this.engine.setFloat4(this._uniforms[tt], et.r, et.g, et.b, Vt) || (this._valueCache[tt] = null))
      }
      setDirectColor4(tt, et) {
        this._cacheFloat4(tt, et.r, et.g, et.b, et.a) && (this.engine.setFloat4(this._uniforms[tt], et.r, et.g, et.b, et.a) || (this._valueCache[tt] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var qt = Vt(40076);
    const Dt = new WeakMap,
      mt = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function dt(tt) {
      let et = Dt.get(tt);
      if (!et) {
        if (!tt) return mt;
        et = {
          _webGLVersion: tt.TEXTURE_BINDING_3D ? 2 : 1,
          _context: tt,
          parallelShaderCompile: tt.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, Dt.set(tt, et)
      }
      return et
    }

    function jt(tt) {
      Dt.delete(tt)
    }

    function Ht(tt, et, Vt, Ot, qt, Dt) {
      const mt = dt(Ot);
      Dt || (Dt = mt._createShaderProgramInjection ?? lt);
      return Dt(tt, Nt(et, "vertex", Ot, mt._contextWasLost), Nt(Vt, "fragment", Ot, mt._contextWasLost), Ot, qt, mt.validateShaderPrograms)
    }

    function Xt(tt, et, Vt, Ot, qt) {
      let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        mt = arguments.length > 6 ? arguments[6] : void 0;
      const jt = dt(qt);
      mt || (mt = jt._createShaderProgramInjection ?? lt);
      const Ht = jt._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return mt(tt, yt(et, "vertex", Ot, Ht, qt, jt._contextWasLost), yt(Vt, "fragment", Ot, Ht, qt, jt._contextWasLost), qt, Dt, jt.validateShaderPrograms)
    }

    function Qt(tt, et) {
      const Vt = new Ot,
        qt = dt(tt);
      return qt.parallelShaderCompile && !qt.disableParallelShaderCompile && (Vt.isParallelCompiled = !0), Vt.context = qt._context, Vt
    }

    function lt(tt, et, Vt, Ot) {
      let qt = arguments.length > 5 ? arguments[5] : void 0;
      const Dt = Ot.createProgram();
      if (tt.program = Dt, !Dt) throw new Error("Unable to create program");
      return Ot.attachShader(Dt, et), Ot.attachShader(Dt, Vt), Ot.linkProgram(Dt), tt.context = Ot, tt.vertexShader = et, tt.fragmentShader = Vt, tt.isParallelCompiled || ft(tt, Ot, qt), Dt
    }

    function Et(tt, et, Vt) {
      const Ot = tt;
      if (Ot._isDisposed) return !1;
      const qt = dt(et);
      return !!(qt && qt.parallelShaderCompile && qt.parallelShaderCompile.COMPLETION_STATUS_KHR && Ot.program && et.getProgramParameter(Ot.program, qt.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (ft(Ot, et, Vt), !0)
    }

    function ft(tt, et, Vt) {
      const Ot = tt.context,
        qt = tt.vertexShader,
        Dt = tt.fragmentShader,
        mt = tt.program;
      if (!Ot.getProgramParameter(mt, Ot.LINK_STATUS)) {
        if (!et.getShaderParameter(qt, et.COMPILE_STATUS)) {
          const Vt = et.getShaderInfoLog(qt);
          if (Vt) throw tt.vertexCompilationError = Vt, new Error("VERTEX SHADER " + Vt)
        }
        if (!et.getShaderParameter(Dt, et.COMPILE_STATUS)) {
          const Vt = et.getShaderInfoLog(Dt);
          if (Vt) throw tt.fragmentCompilationError = Vt, new Error("FRAGMENT SHADER " + Vt)
        }
        const Vt = Ot.getProgramInfoLog(mt);
        if (Vt) throw tt.programLinkError = Vt, new Error(Vt)
      }
      if (Vt) {
        Ot.validateProgram(mt);
        if (!Ot.getProgramParameter(mt, Ot.VALIDATE_STATUS)) {
          const et = Ot.getProgramInfoLog(mt);
          if (et) throw tt.programValidationError = et, new Error(et)
        }
      }
      Ot.deleteShader(qt), Ot.deleteShader(Dt), tt.vertexShader = void 0, tt.fragmentShader = void 0, tt.onCompiled && (tt.onCompiled(), tt.onCompiled = void 0)
    }

    function wt(tt, et, Vt, Ot, qt, Dt, mt, jt, Qt) {
      let lt = arguments.length > 10 ? arguments[10] : void 0,
        Et = arguments.length > 11 ? arguments[11] : void 0,
        ft = arguments.length > 12 ? arguments[12] : void 0;
      const wt = dt(tt.context);
      Et || (Et = wt.createRawShaderProgramInjection ?? Ht), ft || (ft = wt.createShaderProgramInjection ?? Xt);
      const yt = tt;
      yt.program = Ot ? Et(yt, et, Vt, yt.context, Qt) : ft(yt, et, Vt, jt, yt.context, Qt), yt.program.__SPECTOR_rebuildProgram = mt, lt()
    }

    function yt(tt, et, Vt, Ot, Dt, mt) {
      return Nt((0, qt.f)(tt, Vt, Ot), et, Dt, mt)
    }

    function Nt(tt, et, Vt, Ot) {
      const qt = Vt.createShader("vertex" === et ? Vt.VERTEX_SHADER : Vt.FRAGMENT_SHADER);
      if (!qt) {
        let tt, qt = Vt.NO_ERROR;
        for (;
          (tt = Vt.getError()) !== Vt.NO_ERROR;) qt = tt;
        throw new Error(`Something went wrong while creating a gl ${et} shader object. gl error=${qt}, gl isContextLost=${Vt.isContextLost()}, _contextWasLost=${Ot}`)
      }
      return Vt.shaderSource(qt, tt), Vt.compileShader(qt), qt
    }

    function Mt(tt, et) {
      et.useProgram(tt)
    }

    function bt(tt, et) {
      const Vt = tt;
      if (!Vt.isParallelCompiled) return void et(tt);
      const Ot = Vt.onCompiled;
      Vt.onCompiled = () => {
        Ot?.(), et(tt)
      }
    }
  },
  40048: (tt, et, Vt) => {
    Vt.d(et, {
      ThinEngine: () => Ct
    });
    var Ot = Vt(40052),
      qt = Vt(40072),
      Dt = Vt(40092),
      mt = Vt(40112),
      dt = Vt(38899),
      jt = Vt(40068);
    class Ht {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(tt, et, Vt, Ot, qt) {
        if (qt.drawBuffersExtensionDisabled) {
          const et = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          tt = tt.replace(et, "")
        }
        return tt
      }
    }
    const Xt = /(flat\s)?\s*varying\s*.*/;
    class Qt {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(tt) {
        return tt.replace("attribute", "in")
      }
      varyingCheck(tt, et) {
        return Xt.test(tt)
      }
      varyingProcessor(tt, et) {
        return tt.replace("varying", et ? "in" : "out")
      }
      postProcessor(tt, et, Vt) {
        const Ot = -1 !== tt.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (tt = (tt = tt.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), Vt) {
          const Vt = -1 !== tt.search(/layout *\(location *= *0\) *out/g),
            qt = -1 !== et.indexOf("#define DUAL_SOURCE_BLENDING"),
            Dt = qt ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          qt && (tt = "#extension GL_EXT_blend_func_extended : require\n" + tt), tt = (tt = (tt = (tt = (tt = (tt = (tt = tt.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (Ot || Vt ? "" : Dt) + "void main(")
        } else {
          et.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (tt = "invariant gl_Position;\n" + tt);
          if (-1 !== et.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + tt
        }
        return tt
      }
    }
    var lt = Vt(40119),
      Et = Vt(40131),
      ft = Vt(40140),
      wt = Vt(40037),
      yt = Vt(40076),
      Nt = Vt(40063),
      Mt = Vt(40148),
      bt = Vt(40105);
    class Jt {}
    class Ct extends Dt.d {
      get name() {
        return this._name
      }
      set name(tt) {
        this._name = tt
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return Ot.b.ShadersRepository
      }
      static set ShadersRepository(tt) {
        Ot.b.ShadersRepository = tt
      }
      get supportsUniformBuffers() {
        return this.Vw > 1 && !this.disableUniformBuffers
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
      constructor(tt, et, Vt, Ot) {
        if (Vt = Vt || {}, super(et ?? Vt.antialias, Vt, Ot), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !tt) return;
        let Dt;
        if (tt.getContext) {
          if (Dt = tt, void 0 === Vt.preserveDrawingBuffer && (Vt.preserveDrawingBuffer = !1), void 0 === Vt.xrCompatible && (Vt.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const tt = navigator.userAgent;
            for (const et of Ct.ExceptionList) {
              const Ot = et.key,
                qt = et.targets;
              if (new RegExp(Ot).test(tt)) {
                if (et.capture && et.captureConstraint) {
                  const Vt = et.capture,
                    Ot = et.captureConstraint,
                    qt = new RegExp(Vt).exec(tt);
                  if (qt && qt.length > 0) {
                    if (parseInt(qt[qt.length - 1]) >= Ot) continue
                  }
                }
                for (const tt of qt) switch (tt) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    Vt.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, qt.z)(this._gl)
            } : (this._onContextLost = tt => {
              tt.preventDefault(), this._contextWasLost = !0, (0, qt.z)(this._gl), dt.d.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, Dt.addEventListener("webglcontextrestored", this._onContextRestored, !1), Vt.powerPreference = Vt.powerPreference || "high-performance"), Dt.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (Vt.xrCompatible = !1), !Vt.disableWebGL2Support) try {
            this._gl = Dt.getContext("webgl2", Vt) || Dt.getContext("experimental-webgl2", Vt), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (Xt) {}
          if (!this._gl) {
            if (!Dt) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = Dt.getContext("webgl", Vt) || Dt.getContext("experimental-webgl", Vt)
            } catch (Xt) {
              throw new Error("WebGL not supported", {
                cause: Xt
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = tt, Dt = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const et = this._gl.getContextAttributes();
          et && (Vt.stencil = et.stencil)
        }
        this._sharedInit(Dt), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== Vt.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = Vt.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let qt = 0; qt < this._caps.maxVertexAttribs; qt++) this._currentBufferPointers[qt] = new Jt;
        this._shaderProcessor = this.Vw > 1 ? new Qt : new Ht;
        const mt = `Babylon.js v${Ct.Version}`;
        dt.d.Log(mt + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", mt);
        const jt = (0, qt.D)(this._gl);
        jt.validateShaderPrograms = this.validateShaderPrograms, jt.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(tt) {
        return null
      }
      areAllEffectsReady() {
        for (const tt in this._compiledEffects) {
          if (!this._compiledEffects[tt].isReady()) return !1
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
        const tt = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != tt && (this._glRenderer = this._gl.getParameter(tt.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(tt.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const et = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!et, this._alphaState = new bt.c(this._caps.blendParametersPerTarget), et && (this._gl.blendEquationSeparateIndexed = et.blendEquationSeparateiOES.bind(et), this._gl.blendEquationIndexed = et.blendEquationiOES.bind(et), this._gl.blendFuncSeparateIndexed = et.blendFuncSeparateiOES.bind(et), this._gl.blendFuncIndexed = et.blendFunciOES.bind(et), this._gl.colorMaskIndexed = et.colorMaskiOES.bind(et), this._gl.disableIndexed = et.disableiOES.bind(et), this._gl.enableIndexed = et.enableiOES.bind(et)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const tt = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== tt) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = tt.drawBuffersWEBGL.bind(tt), this._caps.maxDrawBuffers = this._gl.getParameter(tt.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let et = 0; et < 16; et++) this._gl["COLOR_ATTACHMENT" + et + "_WEBGL"] = tt["COLOR_ATTACHMENT" + et + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const tt = this._gl.getExtension("WEBGL_depth_texture");
          null != tt && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = tt.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const tt = this._gl.getExtension("OES_vertex_array_object");
          null != tt && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = tt.createVertexArrayOES.bind(tt), this._gl.bindVertexArray = tt.bindVertexArrayOES.bind(tt), this._gl.deleteVertexArray = tt.deleteVertexArrayOES.bind(tt))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const tt = this._gl.getExtension("ANGLE_instanced_arrays");
          null != tt ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = tt.drawArraysInstancedANGLE.bind(tt), this._gl.drawElementsInstanced = tt.drawElementsInstancedANGLE.bind(tt), this._gl.vertexAttribDivisor = tt.vertexAttribDivisorANGLE.bind(tt)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const tt = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            et = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (tt && et && (this._caps.highPrecisionShaderSupported = 0 !== tt.precision && 0 !== et.precision, this._caps.shaderFloatPrecision = Math.min(tt.precision, et.precision)), !this._shouldUseHighPrecisionShader) {
            const tt = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              et = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            tt && et && (this._caps.shaderFloatPrecision = Math.min(tt.precision, et.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const tt = this._gl.getExtension("EXT_blend_minmax");
          null != tt && (this._caps.blendMinMax = !0, this._gl.MAX = tt.MAX_EXT, this._gl.MIN = tt.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const tt = this._gl.getExtension("EXT_sRGB");
            null != tt && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: tt.SRGB_EXT,
              SRGB8: tt.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: tt.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const tt = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== tt && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && tt)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let Vt = 0; Vt < this._maxSimultaneousTextures; Vt++) this._nextFreeTextureSlots.push(Vt);
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
      get Vw() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const tt = this._workingCanvas.getContext("2d");
        tt && (this._workingContext = tt)
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
        const tt = this.getGlInfo();
        return tt && tt.renderer ? tt.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Dt = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = Dt;
        let mt = 0;
        if (et && tt) {
          let et = !0;
          if (this._currentRenderTarget) {
            const Vt = this._currentRenderTarget.texture?.format;
            if (void 0 !== Vt && (0, Mt.e)(Vt)) {
              const Vt = this._currentRenderTarget.texture?.type;
              void 0 !== Vt && (0, Mt.h)(Vt) ? (Ct._TempClearColorUint32[0] = 255 * tt.r, Ct._TempClearColorUint32[1] = 255 * tt.g, Ct._TempClearColorUint32[2] = 255 * tt.b, Ct._TempClearColorUint32[3] = 255 * tt.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Ct._TempClearColorUint32), et = !1) : (Ct._TempClearColorInt32[0] = 255 * tt.r, Ct._TempClearColorInt32[1] = 255 * tt.g, Ct._TempClearColorInt32[2] = 255 * tt.b, Ct._TempClearColorInt32[3] = 255 * tt.a, this._gl.clearBufferiv(this._gl.COLOR, 0, Ct._TempClearColorInt32), et = !1)
            }
          }
          et && (this._gl.clearColor(tt.r, tt.g, tt.b, void 0 !== tt.a ? tt.a : 1), mt |= this._gl.COLOR_BUFFER_BIT)
        }
        Vt && (this.LOt ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), mt |= this._gl.DEPTH_BUFFER_BIT), Ot && (this._gl.clearStencil(qt), mt |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(mt)
      }
      _clearColorAttachment(tt, et, Vt, Ot) {
        if ((0, Mt.e)(Vt)) {
          const Vt = (0, Mt.h)(Ot),
            qt = Vt ? Ct._TempClearColorUint32 : Ct._TempClearColorInt32;
          return qt[0] = et.r, qt[1] = et.g, qt[2] = et.b, qt[3] = et.a, void(Vt ? this._gl.clearBufferuiv(this._gl.COLOR, tt, qt) : this._gl.clearBufferiv(this._gl.COLOR, tt, qt))
        }
        Ct._TempClearColorFloat32[0] = et.r, Ct._TempClearColorFloat32[1] = et.g, Ct._TempClearColorFloat32[2] = et.b, Ct._TempClearColorFloat32[3] = et.a, this._gl.clearBufferfv(this._gl.COLOR, tt, Ct._TempClearColorFloat32)
      }
      _viewport(tt, et, Vt, Ot) {
        tt === this._viewportCached.x && et === this._viewportCached.y && Vt === this._viewportCached.z && Ot === this._viewportCached.w || (this._viewportCached.x = tt, this._viewportCached.y = et, this._viewportCached.z = Vt, this._viewportCached.w = Ot, this._gl.viewport(tt, et, Vt, Ot))
      }
      yJ() {
        super.yJ(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0,
          qt = arguments.length > 4 ? arguments[4] : void 0,
          Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const jt = tt;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = tt, this._integerMRTAttachmentsMask = !tt.isMulti && tt.texture && (0, Mt.e)(tt.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(jt._framebuffer);
        const Ht = this._gl;
        tt.isMulti || (tt.is2DArray || tt.is3D ? (Ht.framebufferTextureLayer(Ht.FRAMEBUFFER, Ht.COLOR_ATTACHMENT0, tt.texture._hardwareTexture?.underlyingResource, Dt, mt), jt._currentLOD = Dt) : tt.isCube ? Ht.framebufferTexture2D(Ht.FRAMEBUFFER, Ht.COLOR_ATTACHMENT0, Ht.TEXTURE_CUBE_MAP_POSITIVE_X + et, tt.texture._hardwareTexture?.underlyingResource, Dt) : jt._currentLOD !== Dt && (Ht.framebufferTexture2D(Ht.FRAMEBUFFER, Ht.COLOR_ATTACHMENT0, Ht.TEXTURE_2D, tt.texture._hardwareTexture?.underlyingResource, Dt), jt._currentLOD = Dt));
        const Xt = tt._depthStencilTexture;
        if (Xt) {
          tt.is3D && (tt.texture.width === Xt.width && tt.texture.height === Xt.height && tt.texture.depth === Xt.depth || dt.d.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const Vt = tt._depthStencilTextureWithStencil ? Ht.DEPTH_STENCIL_ATTACHMENT : Ht.DEPTH_ATTACHMENT;
          tt.is2DArray || tt.is3D ? Ht.framebufferTextureLayer(Ht.FRAMEBUFFER, Vt, Xt._hardwareTexture?.underlyingResource, Dt, mt) : tt.isCube ? Ht.framebufferTexture2D(Ht.FRAMEBUFFER, Vt, Ht.TEXTURE_CUBE_MAP_POSITIVE_X + et, Xt._hardwareTexture?.underlyingResource, Dt) : Ht.framebufferTexture2D(Ht.FRAMEBUFFER, Vt, Ht.TEXTURE_2D, Xt._hardwareTexture?.underlyingResource, Dt)
        }
        jt._MSAAFramebuffer && this._bindUnboundFramebuffer(jt._MSAAFramebuffer), this._cachedViewport && !qt ? this.setViewport(this._cachedViewport, Vt, Ot) : (Vt || (Vt = tt.width, Dt && (Vt /= Math.pow(2, Dt))), Ot || (Ot = tt.height, Dt && (Ot /= Math.pow(2, Dt))), this._viewport(0, 0, Vt, Ot)), this.wipeCaches()
      }
      setStateCullFaceType(tt, et) {
        const Vt = this.cullBackFaces ?? tt ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== Vt || et) && (this._depthCullingState.cullFace = Vt)
      }
      setState(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qt = arguments.length > 4 ? arguments[4] : void 0,
          Dt = arguments.length > 5 ? arguments[5] : void 0,
          mt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== tt || Vt) && (this._depthCullingState.cull = tt), this.setStateCullFaceType(qt, Vt), this.setZOffset(et), this.setZOffsetUnits(mt);
        const dt = Ot ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== dt || Vt) && (this._depthCullingState.frontFace = dt), this._stencilStateComposer.stencilMaterial = Dt
      }
      _resolveAndGenerateMipMapsFramebuffer(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        tt.disableAutomaticMSAAResolve || (tt.isMulti ? this.resolveMultiFramebuffer(tt) : this.resolveFramebuffer(tt)), et || (tt.isMulti ? this.generateMipMapsMultiFramebuffer(tt) : this.generateMipMapsFramebuffer(tt))
      }
      _bindUnboundFramebuffer(tt) {
        this._currentFramebuffer !== tt && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, tt), this._currentFramebuffer = tt)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(tt) {
        const et = this._getTextureTarget(tt);
        this._bindTextureDirectly(et, tt, !0), this._gl.generateMipmap(et), this._bindTextureDirectly(et, null)
      }
      unBindFramebuffer(tt, et, Vt) {
        const Ot = tt;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(tt, et), Vt && (Ot._MSAAFramebuffer && this._bindUnboundFramebuffer(Ot._framebuffer), Vt()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(tt) {
        tt.isMulti || !tt.texture?.generateMipMaps || tt.isCube || this.generateMipmaps(tt.texture)
      }
      resolveFramebuffer(tt) {
        const et = tt,
          Vt = this._gl;
        if (!et._MSAAFramebuffer || et.isMulti) return;
        let Ot = et.resolveMSAAColors ? Vt.COLOR_BUFFER_BIT : 0;
        Ot |= et._generateDepthBuffer && et.resolveMSAADepth ? Vt.DEPTH_BUFFER_BIT : 0, Ot |= et._generateStencilBuffer && et.resolveMSAAStencil ? Vt.STENCIL_BUFFER_BIT : 0, Vt.bindFramebuffer(Vt.READ_FRAMEBUFFER, et._MSAAFramebuffer), Vt.bindFramebuffer(Vt.DRAW_FRAMEBUFFER, et._framebuffer), Vt.blitFramebuffer(0, 0, tt.width, tt.height, 0, 0, tt.width, tt.height, Ot, Vt.NEAREST)
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
      createVertexBuffer(tt, et, Vt) {
        return this._createVertexBuffer(tt, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(tt, et) {
        const Vt = this._gl.createBuffer();
        if (!Vt) throw new Error("Unable to create vertex buffer");
        const Ot = new lt.e(Vt);
        return this.bindArrayBuffer(Ot), "number" !== typeof tt ? tt instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(tt), et), Ot.uQ = 4 * tt.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, tt, et), Ot.uQ = tt.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(tt), et), Ot.uQ = tt), this._resetVertexBufferBinding(), Ot.references = 1, Ot
      }
      createDynamicVertexBuffer(tt, et) {
        return this._createVertexBuffer(tt, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(tt, et, Vt) {
        const Ot = this._gl.createBuffer(),
          qt = new lt.e(Ot);
        if (!Ot) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(qt);
        const Dt = this._normalizeIndexData(tt);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Dt, et ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), qt.references = 1, qt.is32Bits = 4 === Dt.BYTES_PER_ELEMENT, qt
      }
      _normalizeIndexData(tt) {
        if (2 === tt.BYTES_PER_ELEMENT) return tt;
        if (this._caps.uintIndices) {
          if (tt instanceof Uint32Array) return tt;
          for (let et = 0; et < tt.length; et++)
            if (tt[et] >= 65535) return new Uint32Array(tt);
          return new Uint16Array(tt)
        }
        return new Uint16Array(tt)
      }
      bindArrayBuffer(tt) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(tt, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(tt, et, Vt) {
        const Ot = tt.program,
          qt = this._gl.getUniformBlockIndex(Ot, et);
        this._gl.uniformBlockBinding(Ot, qt, Vt)
      }
      bindIndexBuffer(tt) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(tt, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(tt, et) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[et] !== tt) && (this._gl.bindBuffer(et, tt ? tt.underlyingResource : null), this._currentBoundBuffer[et] = tt)
      }
      updateArrayBuffer(tt) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, tt)
      }
      _vertexAttribPointer(tt, et, Vt, Ot, qt, Dt, mt) {
        const dt = this._currentBufferPointers[et];
        if (!dt) return;
        let jt = !1;
        dt.active ? (dt.buffer !== tt && (dt.buffer = tt, jt = !0), dt.size !== Vt && (dt.size = Vt, jt = !0), dt.type !== Ot && (dt.type = Ot, jt = !0), dt.normalized !== qt && (dt.normalized = qt, jt = !0), dt.stride !== Dt && (dt.stride = Dt, jt = !0), dt.offset !== mt && (dt.offset = mt, jt = !0)) : (jt = !0, dt.active = !0, dt.index = et, dt.size = Vt, dt.type = Ot, dt.normalized = qt, dt.stride = Dt, dt.offset = mt, dt.buffer = tt), (jt || this._vaoRecordInProgress) && (this.bindArrayBuffer(tt), Ot === this._gl.UNSIGNED_INT || Ot === this._gl.INT ? this._gl.vertexAttribIPointer(et, Vt, Ot, Dt, mt) : this._gl.vertexAttribPointer(et, Vt, Ot, qt, Dt, mt))
      }
      _bindIndexBufferWithCache(tt) {
        null != tt && this._cachedIndexBuffer !== tt && (this._cachedIndexBuffer = tt, this.bindIndexBuffer(tt), this._uintIndicesCurrentlySet = tt.is32Bits)
      }
      _bindVertexBuffersAttributes(tt, et, Vt) {
        const Ot = et.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let qt = 0; qt < Ot.length; qt++) {
          const Dt = et.getAttributeLocation(qt);
          if (Dt >= 0) {
            const et = Ot[qt];
            let mt = null;
            if (Vt && (mt = Vt[et]), mt || (mt = tt[et]), !mt) continue;
            this._gl.enableVertexAttribArray(Dt), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[Dt] = !0);
            const dt = mt.getBuffer();
            dt && (this._vertexAttribPointer(dt, Dt, mt.getSize(), mt.type, mt.normalized, mt.byteStride, mt.byteOffset), mt.getIsInstanced() && (this._gl.vertexAttribDivisor(Dt, mt.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(Dt), this._currentInstanceBuffers.push(dt))))
          }
        }
      }
      recordVertexArrayObject(tt, et, Vt, Ot) {
        const qt = this._gl.createVertexArray();
        if (!qt) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(qt), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(tt, Vt, Ot), this.bindIndexBuffer(et), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), qt
      }
      bindVertexArrayObject(tt, et) {
        this._cachedVertexArrayObject !== tt && (this._cachedVertexArrayObject = tt, this._gl.bindVertexArray(tt), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != et && et.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(tt, et, Vt, Ot, qt) {
        if (this._cachedVertexBuffers !== tt || this._cachedEffectForVertexBuffers !== qt) {
          this._cachedVertexBuffers = tt, this._cachedEffectForVertexBuffers = qt;
          const et = qt.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let Dt = 0;
          for (let mt = 0; mt < et; mt++)
            if (mt < Vt.length) {
              const et = qt.getAttributeLocation(mt);
              et >= 0 && (this._gl.enableVertexAttribArray(et), this._vertexAttribArraysEnabled[et] = !0, this._vertexAttribPointer(tt, et, Vt[mt], this._gl.FLOAT, !1, Ot, Dt)), Dt += 4 * Vt[mt]
            }
        }
        this._bindIndexBufferWithCache(et)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(tt, et, Vt, Ot) {
        this._cachedVertexBuffers === tt && this._cachedEffectForVertexBuffers === Vt || (this._cachedVertexBuffers = tt, this._cachedEffectForVertexBuffers = Vt, this._bindVertexBuffersAttributes(tt, Vt, Ot)), this._bindIndexBufferWithCache(et)
      }
      unbindInstanceAttributes() {
        let tt;
        for (let et = 0, Vt = this._currentInstanceLocations.length; et < Vt; et++) {
          const Vt = this._currentInstanceBuffers[et];
          tt != Vt && Vt.references && (tt = Vt, this.bindArrayBuffer(Vt));
          const Ot = this._currentInstanceLocations[et];
          this._gl.vertexAttribDivisor(Ot, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(tt) {
        this._gl.deleteVertexArray(tt)
      }
      _releaseBuffer(tt) {
        return tt.references--, 0 === tt.references && (this._deleteBuffer(tt), !0)
      }
      _deleteBuffer(tt) {
        this._gl.deleteBuffer(tt.underlyingResource)
      }
      updateAndBindInstancesBuffer(tt, et, Vt) {
        if (this.bindArrayBuffer(tt), et && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, et), void 0 !== Vt[0].index) this.bindInstancesBuffer(tt, Vt, !0);
        else
          for (let Ot = 0; Ot < 4; Ot++) {
            const et = Vt[Ot];
            this._vertexAttribArraysEnabled[et] || (this._gl.enableVertexAttribArray(et), this._vertexAttribArraysEnabled[et] = !0), this._vertexAttribPointer(tt, et, 4, this._gl.FLOAT, !1, 64, 16 * Ot), this._gl.vertexAttribDivisor(et, 1), this._currentInstanceLocations.push(et), this._currentInstanceBuffers.push(tt)
          }
      }
      bindInstancesBuffer(tt, et) {
        let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(tt);
        let Ot = 0;
        if (Vt)
          for (let qt = 0; qt < et.length; qt++) {
            Ot += 4 * et[qt].attributeSize
          }
        for (let qt = 0; qt < et.length; qt++) {
          const Vt = et[qt];
          void 0 === Vt.index && (Vt.index = this._currentEffect.getAttributeLocationByName(Vt.attributeName)), Vt.index < 0 || (this._vertexAttribArraysEnabled[Vt.index] || (this._gl.enableVertexAttribArray(Vt.index), this._vertexAttribArraysEnabled[Vt.index] = !0), this._vertexAttribPointer(tt, Vt.index, Vt.attributeSize, Vt.attributeType || this._gl.FLOAT, Vt.normalized || !1, Ot, Vt.offset), this._gl.vertexAttribDivisor(Vt.index, void 0 === Vt.divisor ? 1 : Vt.divisor), this._currentInstanceLocations.push(Vt.index), this._currentInstanceBuffers.push(tt))
        }
      }
      disableInstanceAttributeByName(tt) {
        if (!this._currentEffect) return;
        const et = this._currentEffect.getAttributeLocationByName(tt);
        this.disableInstanceAttribute(et)
      }
      disableInstanceAttribute(tt) {
        let et, Vt = !1;
        for (; - 1 !== (et = this._currentInstanceLocations.indexOf(tt));) this._currentInstanceLocations.splice(et, 1), this._currentInstanceBuffers.splice(et, 1), Vt = !0;
        Vt && (this._gl.vertexAttribDivisor(tt, 0), this.disableAttributeByIndex(tt))
      }
      disableAttributeByIndex(tt) {
        this._gl.disableVertexAttribArray(tt), this._vertexAttribArraysEnabled[tt] = !1, this._currentBufferPointers[tt].active = !1
      }
      draw(tt, et, Vt, Ot) {
        this.drawElementsType(tt ? 0 : 1, et, Vt, Ot)
      }
      drawPointClouds(tt, et, Vt) {
        this.drawArraysType(2, tt, et, Vt)
      }
      drawUnIndexed(tt, et, Vt, Ot) {
        this.drawArraysType(tt ? 0 : 1, et, Vt, Ot)
      }
      drawElementsType(tt, et, Vt, Ot) {
        this.applyStates(), this._reportDrawCall();
        const qt = this._drawMode(tt),
          Dt = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          mt = this._uintIndicesCurrentlySet ? 4 : 2;
        Ot ? this._gl.drawElementsInstanced(qt, Vt, Dt, et * mt, Ot) : this._gl.drawElements(qt, Vt, Dt, et * mt)
      }
      drawArraysType(tt, et, Vt, Ot) {
        this.applyStates(), this._reportDrawCall();
        const qt = this._drawMode(tt);
        Ot ? this._gl.drawArraysInstanced(qt, et, Vt, Ot) : this._gl.drawArrays(qt, et, Vt)
      }
      _drawMode(tt) {
        switch (tt) {
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
      _releaseEffect(tt) {
        this._compiledEffects[tt._key] && delete this._compiledEffects[tt._key];
        const et = tt.getPipelineContext();
        et && this._deletePipelineContext(et)
      }
      _deletePipelineContext(tt) {
        const et = tt;
        et && et.program && (et.program.__SPECTOR_rebuildProgram = null, (0, Nt.h)(et), this._gl && (this._currentProgram === et.program && this._setProgram(null), this._gl.deleteProgram(et.program)))
      }
      _getGlobalDefines(tt) {
        return (0, yt.i)(tt, this.isNDCHalfZRange, this.LOt, this.useExactSrgbConversions)
      }
      createEffect(tt, et, Vt, Dt, mt, dt, jt, Ht, Xt) {
        let Qt = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          lt = arguments.length > 10 ? arguments[10] : void 0;
        const Et = "string" === typeof tt ? tt : tt.vertexToken || tt.vertexSource || tt.vertexElement || tt.vertex,
          ft = "string" === typeof tt ? tt : tt.fragmentToken || tt.fragmentSource || tt.fragmentElement || tt.fragment,
          wt = this._getGlobalDefines(),
          yt = void 0 !== et.attributes;
        let Nt = mt ?? et.defines ?? "";
        wt && (Nt += wt);
        const Mt = Et + "+" + ft + "@" + Nt;
        if (this._compiledEffects[Mt]) {
          const tt = this._compiledEffects[Mt];
          return jt && tt.isReady() && jt(tt), tt._refCount++, tt
        }
        this._gl && (0, qt.D)(this._gl);
        const bt = new Ot.b(tt, et, yt ? this : Vt, Dt, this, mt, dt, jt, Ht, Xt, Mt, et.shaderLanguage ?? Qt, et.extraInitializationsAsync ?? lt);
        return this._compiledEffects[Mt] = bt, bt
      }
      _getShaderSource(tt) {
        return this._gl.getShaderSource(tt)
      }
      createRawShaderProgram(tt, et, Vt, Ot) {
        let Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const mt = (0, qt.D)(this._gl);
        return mt._contextWasLost = this._contextWasLost, mt.validateShaderPrograms = this.validateShaderPrograms, (0, qt.u)(tt, et, Vt, Ot || this._gl, Dt)
      }
      createShaderProgram(tt, et, Vt, Ot, Dt) {
        let mt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const dt = (0, qt.D)(this._gl);
        return dt._contextWasLost = this._contextWasLost, dt.validateShaderPrograms = this.validateShaderPrograms, (0, qt.y)(tt, et, Vt, Ot, Dt || this._gl, mt)
      }
      inlineShaderCode(tt) {
        return tt
      }
      createPipelineContext(tt) {
        if (this._gl) {
          (0, qt.D)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const et = (0, qt.t)(this._gl, tt);
        return et.engine = this, et
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(tt) {
        return (0, qt.h)(tt, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(tt, et, Vt, Ot, Dt, mt, dt, jt, Ht, Xt, Qt) {
        const lt = (0, qt.D)(this._gl);
        return lt._contextWasLost = this._contextWasLost, lt.validateShaderPrograms = this.validateShaderPrograms, lt._createShaderProgramInjection = this._createShaderProgram.bind(this), lt.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), lt.createShaderProgramInjection = this.createShaderProgram.bind(this), lt.loadFileInjection = this._loadFile.bind(this), (0, qt.o)(tt, et, Vt, Ot, Dt, mt, dt, jt, Ht, Xt, Qt)
      }
      _createShaderProgram(tt, et, Vt, Ot) {
        let Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, qt.d)(tt, et, Vt, Ot, Dt)
      }
      _isRenderingStateCompiled(tt) {
        return !this._isDisposed && (0, qt.l)(tt, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(tt, et) {
        (0, qt.e)(tt, et)
      }
      getUniforms(tt, et) {
        const Vt = new Array,
          Ot = tt;
        for (let qt = 0; qt < et.length; qt++) Vt.push(this._gl.getUniformLocation(Ot.program, et[qt]));
        return Vt
      }
      getAttributes(tt, et) {
        const Vt = [],
          Ot = tt;
        for (let Dt = 0; Dt < et.length; Dt++) try {
          Vt.push(this._gl.getAttribLocation(Ot.program, et[Dt]))
        } catch (qt) {
          Vt.push(-1)
        }
        return Vt
      }
      enableEffect(tt) {
        (tt = null !== tt && (0, mt.c)(tt) ? tt.effect : tt) && tt !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(tt), this._currentEffect = tt, tt.onBind && tt.onBind(tt), tt._onBindObservable && tt._onBindObservable.notifyObservers(tt))
      }
      setInt(tt, et) {
        return !!tt && (this._gl.uniform1i(tt, et), !0)
      }
      setInt2(tt, et, Vt) {
        return !!tt && (this._gl.uniform2i(tt, et, Vt), !0)
      }
      setInt3(tt, et, Vt, Ot) {
        return !!tt && (this._gl.uniform3i(tt, et, Vt, Ot), !0)
      }
      setInt4(tt, et, Vt, Ot, qt) {
        return !!tt && (this._gl.uniform4i(tt, et, Vt, Ot, qt), !0)
      }
      setIntArray(tt, et) {
        return !!tt && (this._gl.uniform1iv(tt, et), !0)
      }
      setIntArray2(tt, et) {
        return !(!tt || et.length % 2 !== 0) && (this._gl.uniform2iv(tt, et), !0)
      }
      setIntArray3(tt, et) {
        return !(!tt || et.length % 3 !== 0) && (this._gl.uniform3iv(tt, et), !0)
      }
      setIntArray4(tt, et) {
        return !(!tt || et.length % 4 !== 0) && (this._gl.uniform4iv(tt, et), !0)
      }
      setUInt(tt, et) {
        return !!tt && (this._gl.uniform1ui(tt, et), !0)
      }
      setUInt2(tt, et, Vt) {
        return !!tt && (this._gl.uniform2ui(tt, et, Vt), !0)
      }
      setUInt3(tt, et, Vt, Ot) {
        return !!tt && (this._gl.uniform3ui(tt, et, Vt, Ot), !0)
      }
      setUInt4(tt, et, Vt, Ot, qt) {
        return !!tt && (this._gl.uniform4ui(tt, et, Vt, Ot, qt), !0)
      }
      setUIntArray(tt, et) {
        return !!tt && (this._gl.uniform1uiv(tt, et), !0)
      }
      setUIntArray2(tt, et) {
        return !(!tt || et.length % 2 !== 0) && (this._gl.uniform2uiv(tt, et), !0)
      }
      setUIntArray3(tt, et) {
        return !(!tt || et.length % 3 !== 0) && (this._gl.uniform3uiv(tt, et), !0)
      }
      setUIntArray4(tt, et) {
        return !(!tt || et.length % 4 !== 0) && (this._gl.uniform4uiv(tt, et), !0)
      }
      setArray(tt, et) {
        return !!tt && (!(et.length < 1) && (this._gl.uniform1fv(tt, et), !0))
      }
      setArray2(tt, et) {
        return !(!tt || et.length % 2 !== 0) && (this._gl.uniform2fv(tt, et), !0)
      }
      setArray3(tt, et) {
        return !(!tt || et.length % 3 !== 0) && (this._gl.uniform3fv(tt, et), !0)
      }
      setArray4(tt, et) {
        return !(!tt || et.length % 4 !== 0) && (this._gl.uniform4fv(tt, et), !0)
      }
      setMatrices(tt, et) {
        return !!tt && (this._gl.uniformMatrix4fv(tt, !1, et), !0)
      }
      setMatrix3x3(tt, et) {
        return !!tt && (this._gl.uniformMatrix3fv(tt, !1, et), !0)
      }
      setMatrix2x2(tt, et) {
        return !!tt && (this._gl.uniformMatrix2fv(tt, !1, et), !0)
      }
      setFloat(tt, et) {
        return !!tt && (this._gl.uniform1f(tt, et), !0)
      }
      setFloat2(tt, et, Vt) {
        return !!tt && (this._gl.uniform2f(tt, et, Vt), !0)
      }
      setFloat3(tt, et, Vt, Ot) {
        return !!tt && (this._gl.uniform3f(tt, et, Vt, Ot), !0)
      }
      setFloat4(tt, et, Vt, Ot, qt) {
        return !!tt && (this._gl.uniform4f(tt, et, Vt, Ot, qt), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const tt = this._colorWrite;
          this._gl.colorMask(tt, tt, tt, tt)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(tt) {
        this.preventCacheWipeBetweenFrames && !tt || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), tt && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(tt, et) {
        const Vt = this._gl;
        let Ot = Vt.NEAREST,
          qt = Vt.NEAREST,
          Dt = !1;
        switch (tt) {
          case 11:
            Ot = Vt.LINEAR, qt = et ? Vt.LINEAR_MIPMAP_NEAREST : Vt.LINEAR;
            break;
          case 3:
            Ot = Vt.LINEAR, Dt = !0, qt = et ? Vt.LINEAR_MIPMAP_LINEAR : Vt.LINEAR;
            break;
          case 8:
            Dt = !0, Ot = Vt.NEAREST, qt = et ? Vt.NEAREST_MIPMAP_LINEAR : Vt.NEAREST;
            break;
          case 4:
            Ot = Vt.NEAREST, qt = et ? Vt.NEAREST_MIPMAP_NEAREST : Vt.NEAREST;
            break;
          case 5:
            Ot = Vt.NEAREST, qt = et ? Vt.LINEAR_MIPMAP_NEAREST : Vt.LINEAR;
            break;
          case 6:
            Dt = !0, Ot = Vt.NEAREST, qt = et ? Vt.LINEAR_MIPMAP_LINEAR : Vt.LINEAR;
            break;
          case 7:
            Ot = Vt.NEAREST, qt = Vt.LINEAR;
            break;
          case 1:
            Ot = Vt.NEAREST, qt = Vt.NEAREST;
            break;
          case 9:
            Ot = Vt.LINEAR, qt = et ? Vt.NEAREST_MIPMAP_NEAREST : Vt.NEAREST;
            break;
          case 10:
            Dt = !0, Ot = Vt.LINEAR, qt = et ? Vt.NEAREST_MIPMAP_LINEAR : Vt.NEAREST;
            break;
          case 2:
            Ot = Vt.LINEAR, qt = Vt.LINEAR;
            break;
          case 12:
            Ot = Vt.LINEAR, qt = Vt.NEAREST
        }
        return {
          min: qt,
          mag: Ot,
          hasMipMaps: Dt
        }
      }
      _createTexture() {
        const tt = this._gl.createTexture();
        if (!tt) throw new Error("Unable to create texture");
        return tt
      }
      _createHardwareTexture() {
        return new ft.d(this._createTexture(), this._gl)
      }
      _createInternalTexture(tt, et) {
        let Vt, Ot, qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Dt = !1,
          mt = 0,
          jt = 3,
          Ht = 5,
          Xt = !1,
          Qt = 1,
          lt = !1,
          Et = 0,
          ft = !1;
        void 0 !== et && "object" === typeof et ? (Vt = !!et.generateMipMaps, Dt = !!et.createMipMaps, mt = void 0 === et.type ? 0 : et.type, jt = void 0 === et.samplingMode ? 3 : et.samplingMode, Ht = void 0 === et.format ? 5 : et.format, Xt = void 0 !== et.useSRGBBuffer && et.useSRGBBuffer, Qt = et.samples ?? 1, Ot = et.label, lt = !!et.createMSAATexture, Et = et.comparisonFunction || 0, ft = !!et.isCube) : Vt = !!et, Xt && (Xt = this._caps.supportSRGBBuffers && (this.Vw > 1 || this.isWebGPU)), (1 !== mt || this._caps.textureFloatLinearFiltering) && (2 !== mt || this._caps.textureHalfFloatLinearFiltering) || (jt = 1), 1 !== mt || this._caps.textureFloat || (mt = 0, dt.d.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const yt = (0, Mt.d)(Ht),
          Nt = (0, Mt.b)(Ht),
          bt = this._gl,
          Jt = new wt.d(this, qt),
          Ct = tt.width || tt,
          ut = tt.height || tt,
          Kt = tt.depth || 0,
          ht = tt.layers || 0,
          vt = this._getSamplingParameters(jt, (Vt || Dt) && !yt),
          Wt = 0 !== ht ? bt.TEXTURE_2D_ARRAY : 0 !== Kt ? bt.TEXTURE_3D : ft ? bt.TEXTURE_CUBE_MAP : bt.TEXTURE_2D,
          St = yt ? this._getInternalFormatFromDepthTextureFormat(Ht, !0, Nt) : this._getRGBABufferInternalSizedFormat(mt, Ht, Xt),
          ct = yt ? Nt ? bt.DEPTH_STENCIL : bt.DEPTH_COMPONENT : this._getInternalFormat(Ht),
          Rt = yt ? this._getWebGLTextureTypeFromDepthTextureFormat(Ht) : this._getWebGLTextureType(mt);
        if (this._bindTextureDirectly(Wt, Jt), 0 !== ht) Jt.is2DArray = !0, bt.texImage3D(Wt, 0, St, Ct, ut, ht, 0, ct, Rt, null);
        else if (0 !== Kt) Jt.is3D = !0, bt.texImage3D(Wt, 0, St, Ct, ut, Kt, 0, ct, Rt, null);
        else if (ft) {
          Jt.isCube = !0;
          for (let tt = 0; tt < 6; tt++) bt.texImage2D(bt.TEXTURE_CUBE_MAP_POSITIVE_X + tt, 0, St, Ct, ut, 0, ct, Rt, null)
        } else bt.texImage2D(Wt, 0, St, Ct, ut, 0, ct, Rt, null);
        if (bt.texParameteri(Wt, bt.TEXTURE_MAG_FILTER, vt.mag), bt.texParameteri(Wt, bt.TEXTURE_MIN_FILTER, vt.min), bt.texParameteri(Wt, bt.TEXTURE_WRAP_S, bt.CLAMP_TO_EDGE), bt.texParameteri(Wt, bt.TEXTURE_WRAP_T, bt.CLAMP_TO_EDGE), yt && this.Vw > 1 && (0 === Et ? (bt.texParameteri(Wt, bt.TEXTURE_COMPARE_FUNC, 515), bt.texParameteri(Wt, bt.TEXTURE_COMPARE_MODE, bt.NONE)) : (bt.texParameteri(Wt, bt.TEXTURE_COMPARE_FUNC, Et), bt.texParameteri(Wt, bt.TEXTURE_COMPARE_MODE, bt.COMPARE_REF_TO_TEXTURE))), (Vt || Dt) && this._gl.generateMipmap(Wt), this._bindTextureDirectly(Wt, null), Jt._useSRGBBuffer = Xt, Jt.baseWidth = Ct, Jt.baseHeight = ut, Jt.width = Ct, Jt.height = ut, Jt.depth = ht || Kt, Jt.isReady = !0, Jt.samples = Qt, Jt.generateMipMaps = Vt, Jt.samplingMode = jt, Jt.type = mt, Jt.format = Ht, Jt.label = Ot, Jt.comparisonFunction = Et, this._internalTexturesCache.push(Jt), lt) {
          let tt;
          if (tt = (0, Mt.d)(Jt.format) ? this._setupFramebufferDepthAttachments((0, Mt.b)(Jt.format), 19 !== Jt.format, Jt.width, Jt.height, Qt, Jt.format, !0) : this._createRenderBuffer(Jt.width, Jt.height, Qt, -1, this._getRGBABufferInternalSizedFormat(Jt.type, Jt.format, Jt._useSRGBBuffer), -1), !tt) throw new Error("Unable to create render buffer");
          Jt._autoMSAAManagement = !0;
          let et = Jt._hardwareTexture;
          et || (et = Jt._hardwareTexture = this._createHardwareTexture()), et.addMSAARenderBuffer(tt)
        }
        return Jt
      }
      _getUseSRGBBuffer(tt, et) {
        return tt && this._caps.supportSRGBBuffers && (this.Vw > 1 || et)
      }
      createTexture(tt, et, Vt, Ot) {
        var qt = this;
        let Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          mt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          dt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          jt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Ht = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Xt = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Qt = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          lt = arguments.length > 11 ? arguments[11] : void 0,
          Et = arguments.length > 12 ? arguments[12] : void 0,
          ft = arguments.length > 13 ? arguments[13] : void 0,
          yt = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(tt, et, Vt, Ot, Dt, mt, dt, (function() {
          for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
          return qt._prepareWebGLTexture(...et, Xt)
        }), ((tt, et, Vt, qt, Dt, mt) => {
          const dt = this._gl,
            jt = Vt.width === tt && Vt.height === et;
          Dt._creationFlags = ft ?? 0;
          const Ht = this._getTexImageParametersForCreateTexture(Dt.format, Dt._useSRGBBuffer);
          if (jt) return dt.texImage2D(dt.TEXTURE_2D, 0, Ht.internalFormat, Ht.format, Ht.type, Vt), !1;
          const Xt = this._caps.maxTextureSize;
          if (Vt.width > Xt || Vt.height > Xt || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = tt, this._workingCanvas.height = et, this._workingContext.drawImage(Vt, 0, 0, Vt.width, Vt.height, 0, 0, tt, et), dt.texImage2D(dt.TEXTURE_2D, 0, Ht.internalFormat, Ht.format, Ht.type, this._workingCanvas), Dt.width = tt, Dt.height = et, !1);
          {
            const tt = new wt.d(this, 2);
            this._bindTextureDirectly(dt.TEXTURE_2D, tt, !0), dt.texImage2D(dt.TEXTURE_2D, 0, Ht.internalFormat, Ht.format, Ht.type, Vt), this._rescaleTexture(tt, Dt, Ot, Ht.format, (() => {
              this._releaseTexture(tt), this._bindTextureDirectly(dt.TEXTURE_2D, Dt, !0), mt()
            }))
          }
          return !0
        }), jt, Ht, Xt, Qt, lt, Et, yt)
      }
      _getTexImageParametersForCreateTexture(tt, et) {
        let Vt, Ot;
        return 1 === this.Vw ? (Vt = this._getInternalFormat(tt, et), Ot = Vt) : (Vt = this._getInternalFormat(tt, !1), Ot = this._getRGBABufferInternalSizedFormat(0, tt, et)), {
          internalFormat: Ot,
          format: Vt,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(tt, et, Vt, Ot, qt) {}
      _unpackFlipY(tt) {
        this._unpackFlipYCached !== tt && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, tt ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = tt))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(tt) {
        return tt.isCube ? this._gl.TEXTURE_CUBE_MAP : tt.is3D ? this._gl.TEXTURE_3D : tt.is2DArray || tt.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ot = this._getTextureTarget(et),
          qt = this._getSamplingParameters(tt, et.useMipMaps || Vt);
        this._setTextureParameterInteger(Ot, this._gl.TEXTURE_MAG_FILTER, qt.mag, et), this._setTextureParameterInteger(Ot, this._gl.TEXTURE_MIN_FILTER, qt.min), Vt && qt.hasMipMaps && (et.generateMipMaps = !0, this._gl.generateMipmap(Ot)), this._bindTextureDirectly(Ot, null), et.samplingMode = tt
      }
      updateTextureDimensions(tt, et, Vt) {}
      updateTextureWrappingMode(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const qt = this._getTextureTarget(tt);
        null !== et && (this._setTextureParameterInteger(qt, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(et), tt), tt._cachedWrapU = et), null !== Vt && (this._setTextureParameterInteger(qt, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Vt), tt), tt._cachedWrapV = Vt), (tt.is2DArray || tt.is3D) && null !== Ot && (this._setTextureParameterInteger(qt, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Ot), tt), tt._cachedWrapR = Ot), this._bindTextureDirectly(qt, null)
      }
      _uploadCompressedDataToTextureDirectly(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const dt = this._gl;
        let jt = dt.TEXTURE_2D;
        if (tt.isCube && (jt = dt.TEXTURE_CUBE_MAP_POSITIVE_X + Dt), tt._useSRGBBuffer) switch (et) {
          case 37492:
          case 36196:
            this._caps.etc2 ? et = dt.COMPRESSED_SRGB8_ETC2 : tt._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? et = dt.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : tt._useSRGBBuffer = !1;
            break;
          case 36492:
            et = dt.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            et = dt.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            et = dt.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            et = dt.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            et = dt.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            et = dt.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            et = dt.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            et = dt.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            et = dt.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            et = dt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            et = dt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            et = dt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            et = dt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            et = dt.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            et = dt.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? et = dt.COMPRESSED_SRGB_S3TC_DXT1_EXT : tt._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? et = dt.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : tt._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? et = dt.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : tt._useSRGBBuffer = !1;
            break;
          default:
            tt._useSRGBBuffer = !1
        }
        if (tt.generateMipMaps) {
          const Dt = tt._hardwareTexture;
          Dt.memoryAllocated || (dt.texStorage2D(tt.isCube ? dt.TEXTURE_CUBE_MAP : dt.TEXTURE_2D, Math.floor(Math.log2(Math.max(Vt, Ot))) + 1, et, tt.width, tt.height), Dt.memoryAllocated = !0), this._gl.compressedTexSubImage2D(jt, mt, 0, 0, Vt, Ot, et, qt)
        } else this._gl.compressedTexImage2D(jt, mt, et, Vt, Ot, 0, qt)
      }
      _uploadDataToTextureDirectly(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qt = arguments.length > 4 ? arguments[4] : void 0,
          Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const mt = this._gl,
          dt = this._getWebGLTextureType(tt.type),
          jt = this._getInternalFormat(tt.format),
          Ht = void 0 === qt ? this._getRGBABufferInternalSizedFormat(tt.type, tt.format, tt._useSRGBBuffer) : this._getInternalFormat(qt, tt._useSRGBBuffer);
        this._unpackFlipY(tt.invertY);
        let Xt = mt.TEXTURE_2D;
        tt.isCube && (Xt = mt.TEXTURE_CUBE_MAP_POSITIVE_X + Vt);
        const Qt = Math.round(Math.log(tt.width) * Math.LOG2E),
          lt = Math.round(Math.log(tt.height) * Math.LOG2E),
          Et = Dt ? tt.width : Math.pow(2, Math.max(Qt - Ot, 0)),
          ft = Dt ? tt.height : Math.pow(2, Math.max(lt - Ot, 0));
        mt.texImage2D(Xt, Ot, Ht, Et, ft, 0, jt, dt, et)
      }
      updateTextureData(tt, et, Vt, Ot, qt, Dt) {
        let mt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          dt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          jt = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Ht = this._gl,
          Xt = this._getWebGLTextureType(tt.type),
          Qt = this._getInternalFormat(tt.format);
        this._unpackFlipY(tt.invertY);
        let lt = Ht.TEXTURE_2D,
          Et = Ht.TEXTURE_2D;
        tt.isCube && (Et = Ht.TEXTURE_CUBE_MAP_POSITIVE_X + mt, lt = Ht.TEXTURE_CUBE_MAP), this._bindTextureDirectly(lt, tt, !0), Ht.texSubImage2D(Et, dt, Vt, Ot, qt, Dt, Qt, Xt, et), jt && this._gl.generateMipmap(Et), this._bindTextureDirectly(lt, null)
      }
      _uploadArrayBufferViewToTexture(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const qt = this._gl,
          Dt = tt.isCube ? qt.TEXTURE_CUBE_MAP : qt.TEXTURE_2D;
        this._bindTextureDirectly(Dt, tt, !0), this._uploadDataToTextureDirectly(tt, et, Vt, Ot), this._bindTextureDirectly(Dt, null, !0)
      }
      _prepareWebGLTextureContinuation(tt, et, Vt, Ot, qt) {
        const Dt = this._gl;
        if (!Dt) return;
        const mt = this._getSamplingParameters(qt, !Vt);
        Dt.texParameteri(Dt.TEXTURE_2D, Dt.TEXTURE_MAG_FILTER, mt.mag), Dt.texParameteri(Dt.TEXTURE_2D, Dt.TEXTURE_MIN_FILTER, mt.min), Vt || Ot || Dt.generateMipmap(Dt.TEXTURE_2D), this._bindTextureDirectly(Dt.TEXTURE_2D, null), et && et.removePendingData(tt), tt.onLoadedObservable.notifyObservers(tt), tt.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht) {
        const Xt = this.getCaps().maxTextureSize,
          Qt = Math.min(Xt, this.needPOTTextures ? (0, Et.g)(Ot.width, Xt) : Ot.width),
          lt = Math.min(Xt, this.needPOTTextures ? (0, Et.g)(Ot.height, Xt) : Ot.height),
          ft = this._gl;
        ft && (tt._hardwareTexture ? (this._bindTextureDirectly(ft.TEXTURE_2D, tt, !0), this._unpackFlipY(void 0 === qt || !!qt), tt.baseWidth = Ot.width, tt.baseHeight = Ot.height, tt.width = Qt, tt.height = lt, tt.isReady = !0, tt.type = -1 !== tt.type ? tt.type : 0, tt.format = -1 !== tt.format ? tt.format : Ht ?? (".jpg" !== et || tt._useSRGBBuffer ? 5 : 4), dt(Qt, lt, Ot, et, tt, (() => {
          this._prepareWebGLTextureContinuation(tt, Vt, Dt, mt, jt)
        })) || this._prepareWebGLTextureContinuation(tt, Vt, Dt, mt, jt)) : Vt && Vt.removePendingData(tt))
      }
      _getInternalFormatFromDepthTextureFormat(tt, et, Vt) {
        const Ot = this._gl;
        if (!et) return Ot.STENCIL_INDEX8;
        let qt = Vt ? Ot.DEPTH_STENCIL : Ot.DEPTH_COMPONENT;
        return this.Vw > 1 ? 15 === tt ? qt = Ot.DEPTH_COMPONENT16 : 16 === tt ? qt = Ot.DEPTH_COMPONENT24 : 17 === tt || 13 === tt ? qt = Vt ? Ot.DEPTH24_STENCIL8 : Ot.DEPTH_COMPONENT24 : 14 === tt ? qt = Ot.DEPTH_COMPONENT32F : 18 === tt && (qt = Vt ? Ot.DEPTH32F_STENCIL8 : Ot.DEPTH_COMPONENT32F) : qt = Ot.DEPTH_COMPONENT16, qt
      }
      _getWebGLTextureTypeFromDepthTextureFormat(tt) {
        const et = this._gl;
        let Vt = et.UNSIGNED_INT;
        return 15 === tt ? Vt = et.UNSIGNED_SHORT : 17 === tt || 13 === tt ? Vt = et.UNSIGNED_INT_24_8 : 14 === tt ? Vt = et.FLOAT : 18 === tt ? Vt = et.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === tt && (Vt = et.UNSIGNED_BYTE), Vt
      }
      _setupFramebufferDepthAttachments(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Dt = arguments.length > 5 ? arguments[5] : void 0,
          mt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const dt = this._gl;
        Dt = Dt ?? (tt ? 13 : 14);
        const jt = this._getInternalFormatFromDepthTextureFormat(Dt, et, tt);
        return tt && et ? this._createRenderBuffer(Vt, Ot, qt, dt.DEPTH_STENCIL, jt, mt ? -1 : dt.DEPTH_STENCIL_ATTACHMENT) : et ? this._createRenderBuffer(Vt, Ot, qt, jt, jt, mt ? -1 : dt.DEPTH_ATTACHMENT) : tt ? this._createRenderBuffer(Vt, Ot, qt, jt, jt, mt ? -1 : dt.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(tt, et, Vt, Ot, qt, Dt) {
        let mt = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const dt = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(dt, tt, et, Vt, Ot, qt, Dt, mt)
      }
      _updateRenderBuffer(tt, et, Vt, Ot, qt, Dt, mt) {
        let dt = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const jt = this._gl;
        return jt.bindRenderbuffer(jt.RENDERBUFFER, tt), Ot > 1 && jt.renderbufferStorageMultisample ? jt.renderbufferStorageMultisample(jt.RENDERBUFFER, Ot, Dt, et, Vt) : jt.renderbufferStorage(jt.RENDERBUFFER, qt, et, Vt), -1 !== mt && jt.framebufferRenderbuffer(jt.FRAMEBUFFER, mt, jt.RENDERBUFFER, tt), dt && jt.bindRenderbuffer(jt.RENDERBUFFER, null), tt
      }
      _releaseTexture(tt) {
        this._deleteTexture(tt._hardwareTexture), this.unbindAllTextures();
        const et = this._internalTexturesCache.indexOf(tt); - 1 !== et && this._internalTexturesCache.splice(et, 1), tt._lodTextureHigh && tt._lodTextureHigh.dispose(), tt._lodTextureMid && tt._lodTextureMid.dispose(), tt._lodTextureLow && tt._lodTextureLow.dispose(), tt._irradianceTexture && tt._irradianceTexture.dispose()
      }
      _deleteTexture(tt) {
        tt?.release()
      }
      _setProgram(tt) {
        this._currentProgram !== tt && ((0, qt.q)(tt, this._gl), this._currentProgram = tt)
      }
      bindSamplers(tt) {
        const et = tt.getPipelineContext();
        this._setProgram(et.program);
        const Vt = tt.getSamplers();
        for (let Ot = 0; Ot < Vt.length; Ot++) {
          const et = tt.getUniform(Vt[Ot]);
          et && (this._boundUniforms[Ot] = et)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qt = !1;
        const Dt = et && et._associatedChannel > -1;
        Vt && Dt && (this._activeChannel = et._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== et || Ot) {
          if (this._activateCurrentTexture(), et && et.isMultiview) throw dt.d.Error(["_bindTextureDirectly called with a multiview texture!", tt, et]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(tt, et?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = et, et && (et._associatedChannel = this._activeChannel)
        } else Vt && (qt = !0, this._activateCurrentTexture());
        return Dt && !Vt && this._bindSamplerUniformToChannel(et._associatedChannel, this._activeChannel), qt
      }
      _bindTexture(tt, et, Vt) {
        if (void 0 === tt) return;
        et && (et._associatedChannel = tt), this._activeChannel = tt;
        const Ot = et ? this._getTextureTarget(et) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(Ot, et)
      }
      unbindAllTextures() {
        for (let tt = 0; tt < this._maxSimultaneousTextures; tt++) this._activeChannel = tt, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Vw > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(tt, et, Vt, Ot) {
        void 0 !== tt && (et && (this._boundUniforms[tt] = et), this._setTexture(tt, Vt))
      }
      _bindSamplerUniformToChannel(tt, et) {
        const Vt = this._boundUniforms[tt];
        Vt && Vt._currentState !== et && (this._gl.uniform1i(Vt, et), Vt._currentState = et)
      }
      _getTextureWrapMode(tt) {
        switch (tt) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(tt, et) {
        let Vt, Ot = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          qt = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!et) return null != this._boundTexturesCache[tt] && (this._activeChannel = tt, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Vw > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (et.video) {
          this._activeChannel = tt;
          const Vt = et.getInternalTexture();
          Vt && (Vt._associatedChannel = tt), et.update()
        } else if (4 === et.delayLoadState) return et.delayLoad(), !1;
        Vt = qt ? et.depthStencilTexture : et.isReady() ? et.getInternalTexture() : et.isCube ? this.emptyCubeTexture : et.is3D ? this.emptyTexture3D : et.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !Ot && Vt && (Vt._associatedChannel = tt);
        let Dt = !0;
        this._boundTexturesCache[tt] === Vt && (Ot || this._bindSamplerUniformToChannel(Vt._associatedChannel, tt), Dt = !1), this._activeChannel = tt;
        const mt = this._getTextureTarget(Vt);
        if (Dt && this._bindTextureDirectly(mt, Vt, Ot), Vt && !Vt.isMultiview) {
          if (Vt.isCube && Vt._cachedCoordinatesMode !== et.coordinatesMode) {
            Vt._cachedCoordinatesMode = et.coordinatesMode;
            const tt = 3 !== et.coordinatesMode && 5 !== et.coordinatesMode ? 1 : 0;
            et.wrapU = tt, et.wrapV = tt
          }
          Vt._cachedWrapU !== et.wrapU && (Vt._cachedWrapU = et.wrapU, this._setTextureParameterInteger(mt, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(et.wrapU), Vt)), Vt._cachedWrapV !== et.wrapV && (Vt._cachedWrapV = et.wrapV, this._setTextureParameterInteger(mt, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(et.wrapV), Vt)), Vt.is3D && Vt._cachedWrapR !== et.wrapR && (Vt._cachedWrapR = et.wrapR, this._setTextureParameterInteger(mt, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(et.wrapR), Vt)), this._setAnisotropicLevel(mt, Vt, et.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(tt, et, Vt, Ot) {
        if (void 0 !== tt && et) {
          this._textureUnits && this._textureUnits.length === Vt.length || (this._textureUnits = new Int32Array(Vt.length));
          for (let et = 0; et < Vt.length; et++) {
            const Ot = Vt[et].getInternalTexture();
            Ot ? (this._textureUnits[et] = tt + et, Ot._associatedChannel = tt + et) : this._textureUnits[et] = -1
          }
          this._gl.uniform1iv(et, this._textureUnits);
          for (let tt = 0; tt < Vt.length; tt++) this._setTexture(this._textureUnits[tt], Vt[tt], !0)
        }
      }
      _setAnisotropicLevel(tt, et, Vt) {
        const Ot = this._caps.textureAnisotropicFilterExtension;
        11 !== et.samplingMode && 3 !== et.samplingMode && 2 !== et.samplingMode && (Vt = 1), Ot && et._cachedAnisotropicFilteringLevel !== Vt && (this._setTextureParameterFloat(tt, Ot.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(Vt, this._caps.maxAnisotropy), et), et._cachedAnisotropicFilteringLevel = Vt)
      }
      _setTextureParameterFloat(tt, et, Vt, Ot) {
        this._bindTextureDirectly(tt, Ot, !0, !0), this._gl.texParameterf(tt, et, Vt)
      }
      _setTextureParameterInteger(tt, et, Vt, Ot) {
        Ot && this._bindTextureDirectly(tt, Ot, !0, !0), this._gl.texParameteri(tt, et, Vt)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let tt = 0; tt < this._caps.maxVertexAttribs; tt++) this.disableAttributeByIndex(tt)
        } else
          for (let tt = 0, et = this._vertexAttribArraysEnabled.length; tt < et; tt++) tt >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[tt] || this.disableAttributeByIndex(tt)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, jt.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, qt.z)(this._gl)
      }
      attachContextLostEvent(tt) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", tt, !1)
      }
      attachContextRestoredEvent(tt) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", tt, !1)
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
      _canRenderToFramebuffer(tt) {
        const et = this._gl;
        for (; et.getError() !== et.NO_ERROR;);
        let Vt = !0;
        const Ot = et.createTexture();
        et.bindTexture(et.TEXTURE_2D, Ot), et.texImage2D(et.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(tt), 1, 1, 0, et.RGBA, this._getWebGLTextureType(tt), null), et.texParameteri(et.TEXTURE_2D, et.TEXTURE_MIN_FILTER, et.NEAREST), et.texParameteri(et.TEXTURE_2D, et.TEXTURE_MAG_FILTER, et.NEAREST);
        const qt = et.createFramebuffer();
        et.bindFramebuffer(et.FRAMEBUFFER, qt), et.framebufferTexture2D(et.FRAMEBUFFER, et.COLOR_ATTACHMENT0, et.TEXTURE_2D, Ot, 0);
        const Dt = et.checkFramebufferStatus(et.FRAMEBUFFER);
        if (Vt = Vt && Dt === et.FRAMEBUFFER_COMPLETE, Vt = Vt && et.getError() === et.NO_ERROR, Vt && (et.clear(et.COLOR_BUFFER_BIT), Vt = Vt && et.getError() === et.NO_ERROR), Vt) {
          et.bindFramebuffer(et.FRAMEBUFFER, null);
          const tt = et.RGBA,
            Ot = et.UNSIGNED_BYTE,
            qt = new Uint8Array(4);
          et.readPixels(0, 0, 1, 1, tt, Ot, qt), Vt = Vt && et.getError() === et.NO_ERROR
        }
        for (et.deleteTexture(Ot), et.deleteFramebuffer(qt), et.bindFramebuffer(et.FRAMEBUFFER, null); !Vt && et.getError() !== et.NO_ERROR;);
        return Vt
      }
      _getWebGLTextureType(tt) {
        if (1 === this._webGLVersion) {
          switch (tt) {
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
        switch (tt) {
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
      _getInternalFormat(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = et ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (tt) {
          case 0:
            Vt = this._gl.ALPHA;
            break;
          case 1:
            Vt = this._gl.LUMINANCE;
            break;
          case 2:
            Vt = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            Vt = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            Vt = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            Vt = et ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            Vt = et ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (tt) {
          case 8:
            Vt = this._gl.RED_INTEGER;
            break;
          case 9:
            Vt = this._gl.RG_INTEGER;
            break;
          case 10:
            Vt = this._gl.RGB_INTEGER;
            break;
          case 11:
            Vt = this._gl.RGBA_INTEGER
        }
        return Vt
      }
      _getRGBABufferInternalSizedFormat(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== et) switch (et) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return Vt ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (tt) {
          case 3:
            switch (et) {
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
            switch (et) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return Vt ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return Vt ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (et) {
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
            switch (et) {
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
            switch (et) {
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
            switch (et) {
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
            switch (et) {
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
            switch (et) {
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
            switch (et) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return Vt ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(tt, et, Vt, Ot) {
        let qt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Dt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const jt = qt ? 4 : 3,
          Ht = qt ? this._gl.RGBA : this._gl.RGB,
          Xt = Vt * Ot * jt;
        if (mt) {
          if (mt.length < Xt) return dt.d.Error(`Data buffer is too small to store the read pixels (${mt.length} should be more than ${Xt})`), Promise.resolve(mt)
        } else mt = new Uint8Array(Xt);
        return Dt && this.flushFramebuffer(), this._gl.readPixels(tt, et, Vt, Ot, Ht, this._gl.UNSIGNED_BYTE, mt), Promise.resolve(mt)
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
          const tt = Dt.d._CreateCanvas(1, 1),
            et = tt.getContext("webgl") || tt.getContext("experimental-webgl");
          this._IsSupported = null != et && !!globalThis.WebGLRenderingContext
        } catch (tt) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const tt = Dt.d._CreateCanvas(1, 1),
            et = tt.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || tt.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !et
        } catch (tt) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    Ct._TempClearColorUint32 = new Uint32Array(4), Ct._TempClearColorInt32 = new Int32Array(4), Ct._TempClearColorFloat32 = new Float32Array(4), Ct.ExceptionList = [{
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
    }], Ct._ConcatenateShader = yt.f, Ct._IsSupported = null, Ct._HasMajorPerformanceCaveat = null
  },
  40386: (tt, et, Vt) => {
    var Ot;
    Vt.d(et, {
        e: () => qt
      }),
      function(tt) {
        tt[tt.PointerMove = 0] = "PointerMove", tt[tt.PointerDown = 1] = "PointerDown", tt[tt.PointerUp = 2] = "PointerUp"
      }(Ot || (Ot = {}));
    class qt {}
    qt.DOM_DELTA_PIXEL = 0, qt.DOM_DELTA_LINE = 1, qt.DOM_DELTA_PAGE = 2
  },
  40379: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot,
      g: () => Dt,
      h: () => qt
    });
    class Ot {}
    Ot.KEYDOWN = 1, Ot.KEYUP = 2;
    class qt {
      constructor(tt, et) {
        this.type = tt, this.event = et
      }
    }
    class Dt extends qt {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(tt) {
        this.skipOnKeyboardObservable = tt
      }
      constructor(tt, et) {
        super(tt, et), this.type = tt, this.event = et, this.skipOnKeyboardObservable = !1
      }
    }
  },
  40373: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      e: () => mt,
      f: () => dt
    });
    var Ot = Vt(37336);
    class qt {}
    qt.POINTERDOWN = 1, qt.POINTERUP = 2, qt.POINTERMOVE = 4, qt.POINTERWHEEL = 8, qt.POINTERPICK = 16, qt.POINTERTAP = 32, qt.POINTERDOUBLETAP = 64;
    class Dt {
      constructor(tt, et) {
        this.type = tt, this.event = et
      }
    }
    class mt extends Dt {
      constructor(tt, et, Vt, qt) {
        super(tt, et), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Ot.m(Vt, qt)
      }
    }
    class dt extends Dt {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(tt, et), this._pickInfo = Vt, this._inputManager = Ot
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  40395: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot
    });
    class Ot {
      static CompareLightsPriority(tt, et) {
        return tt.shadowEnabled !== et.shadowEnabled ? (et.shadowEnabled ? 1 : 0) - (tt.shadowEnabled ? 1 : 0) : et.renderPriority - tt.renderPriority
      }
    }
    Ot.FALLOFF_DEFAULT = 0, Ot.FALLOFF_PHYSICAL = 1, Ot.FALLOFF_GLTF = 2, Ot.FALLOFF_STANDARD = 3, Ot.LIGHTMAP_DEFAULT = 0, Ot.LIGHTMAP_SPECULAR = 1, Ot.LIGHTMAP_SHADOWSONLY = 2, Ot.INTENSITYMODE_AUTOMATIC = 0, Ot.INTENSITYMODE_LUMINOUSPOWER = 1, Ot.INTENSITYMODE_LUMINOUSINTENSITY = 2, Ot.INTENSITYMODE_ILLUMINANCE = 3, Ot.INTENSITYMODE_LUMINANCE = 4, Ot.LIGHTTYPEID_POINTLIGHT = 0, Ot.LIGHTTYPEID_DIRECTIONALLIGHT = 1, Ot.LIGHTTYPEID_SPOTLIGHT = 2, Ot.LIGHTTYPEID_HEMISPHERICLIGHT = 3, Ot.LIGHTTYPEID_RECT_AREALIGHT = 4, Ot.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  40037: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt
    });
    var Ot, qt = Vt(37367),
      Dt = Vt(40045);
    ! function(tt) {
      tt[tt.Unknown = 0] = "Unknown", tt[tt.Url = 1] = "Url", tt[tt.Temp = 2] = "Temp", tt[tt.Raw = 3] = "Raw", tt[tt.Dynamic = 4] = "Dynamic", tt[tt.RenderTarget = 5] = "RenderTarget", tt[tt.MultiRenderTarget = 6] = "MultiRenderTarget", tt[tt.Cube = 7] = "Cube", tt[tt.CubeRaw = 8] = "CubeRaw", tt[tt.CubePrefiltered = 9] = "CubePrefiltered", tt[tt.Raw3D = 10] = "Raw3D", tt[tt.Raw2DArray = 11] = "Raw2DArray", tt[tt.DepthStencil = 12] = "DepthStencil", tt[tt.CubeRawRGBD = 13] = "CubeRawRGBD", tt[tt.Depth = 14] = "Depth", tt[tt.External = 15] = "External"
    }(Ot || (Ot = {}));
    class mt extends Dt.c {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(tt) {
        this._useMipMaps = tt
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(tt) {
        this._uniqueId = tt
      }
      Jf() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new qt.c, this.onErrorObservable = new qt.c, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = tt, this._source = et, this._uniqueId = mt._Counter++, Vt || (this._hardwareTexture = tt._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, tt, et, Vt), this.width = tt, this.height = et, this.depth = Vt, this.baseWidth = tt, this.baseHeight = et, this.baseDepth = Vt, this._size = tt * et * Vt
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const tt = this.onRebuildCallback(this),
            et = et => {
              et._swapAndDie(this, !1), this.isReady = tt.isReady
            };
          return void(tt.isAsync ? tt.proxy.then(et) : et(tt.proxy))
        }
        let tt;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(tt = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (tt => {
              tt._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (tt = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), tt._swapAndDie(this, !1), this._bufferViewArray)
              for (let tt = 0; tt < this._bufferViewArray.length; tt++) {
                const et = this._bufferViewArray[tt];
                et && this._engine.updateRawTexture(this, et, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, tt)
              }
            this.isReady = !0;
            break;
          case 10:
            tt = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), tt._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (tt = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), tt._swapAndDie(this, !1), this._bufferViewArray)
              for (let tt = 0; tt < this._bufferViewArray.length; tt++) {
                const et = this._bufferViewArray[tt];
                et && this._engine.updateRawTexture2DArray(this, et, this.format, this.invertY, this._compression, this.type, tt)
              }
            this.isReady = !0;
            break;
          case 4:
            tt = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), tt._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(tt = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              tt._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            tt = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), tt._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return tt = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (tt => {
              tt && tt._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(tt._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(tt._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), tt._hardwareTexture = this._hardwareTexture, tt._setUniqueId(mt._Counter++), et && (tt._isRGBD = this._isRGBD), this._lodTextureHigh && (tt._lodTextureHigh && tt._lodTextureHigh.dispose(), tt._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (tt._lodTextureMid && tt._lodTextureMid.dispose(), tt._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (tt._lodTextureLow && tt._lodTextureLow.dispose(), tt._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (tt._irradianceTexture && tt._irradianceTexture.dispose(), tt._irradianceTexture = this._irradianceTexture);
        const Vt = this._engine.getLoadedTexturesCache();
        let Ot = Vt.indexOf(this); - 1 !== Ot && Vt.splice(Ot, 1), Ot = Vt.indexOf(tt), -1 === Ot && Vt.push(tt)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    mt._Counter = 0
  },
  40148: (tt, et, Vt) => {
    function Ot(tt) {
      return 13 === tt || 14 === tt || 15 === tt || 16 === tt || 17 === tt || 18 === tt || 19 === tt
    }

    function qt(tt) {
      return 8 === tt || 9 === tt || 10 === tt || 11 === tt
    }

    function Dt(tt) {
      return 0 === tt || 5 === tt || 7 === tt || 11 === tt
    }

    function mt(tt) {
      return 13 === tt || 17 === tt || 18 === tt || 19 === tt
    }
    Vt.d(et, {
      b: () => mt,
      d: () => Ot,
      e: () => qt,
      h: () => Dt
    })
  },
  40045: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot
    });
    class Ot {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(tt) {
        this._cachedWrapU = tt
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(tt) {
        this._cachedWrapV = tt
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(tt) {
        this._cachedWrapR = tt
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(tt) {
        this._cachedAnisotropicFilteringLevel = tt
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(tt) {
        this._comparisonFunction = tt
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(tt) {
        this._useMipMaps = tt
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = tt, this._cachedWrapV = et, this._cachedWrapR = Vt, this._cachedAnisotropicFilteringLevel = Ot, this.samplingMode = qt, this._comparisonFunction = Dt, this
      }
      compareSampler(tt) {
        return this._cachedWrapU === tt._cachedWrapU && this._cachedWrapV === tt._cachedWrapV && this._cachedWrapR === tt._cachedWrapR && this._cachedAnisotropicFilteringLevel === tt._cachedAnisotropicFilteringLevel && this.samplingMode === tt.samplingMode && this._comparisonFunction === tt._comparisonFunction && this._useMipMaps === tt._useMipMaps
      }
    }
  },
  40321: (tt, et, Vt) => {
    function Ot(tt) {
      tt.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    Vt.d(et, {
      d: () => Ot
    })
  },
  40112: (tt, et, Vt) => {
    function Ot(tt) {
      return void 0 === tt.getPipelineContext
    }
    Vt.d(et, {
      c: () => Ot
    })
  },
  40512: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt
    });
    var Ot = Vt(40085);
    class qt {
      static GetEffect(tt) {
        return void 0 === tt.getPipelineContext ? tt.effect : tt
      }
      constructor(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = tt.createDrawContext(), et && (this.materialContext = tt.createMaterialContext())
      }
      setEffect(tt, et) {
        let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        Vt || this.effect === tt || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = tt, void 0 !== et && (this.defines = et), Vt && this.drawContext?.reset()
      }
      dispose() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const et = this.effect;
          tt ? et.dispose() : Ot.c.SetImmediate((() => {
            et.Jf().onEndFrameObservable.addOnce((() => {
              et.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  40063: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Qt,
      c: () => Et,
      g: () => Ht,
      h: () => Xt
    });
    var Ot = Vt(40068),
      qt = Vt(40072),
      Dt = Vt(40061),
      mt = Vt(38899),
      dt = Vt(40082),
      jt = Vt(40076);

    function Ht(tt, et) {
      return (0, qt.D)(et).cachedPipelines[tt]
    }

    function Xt(tt) {
      const et = tt._name,
        Vt = tt.context;
      if (et && Vt) {
        const tt = (0, qt.D)(Vt),
          Ot = tt.cachedPipelines[et];
        Ot?.dispose(), delete tt.cachedPipelines[et]
      }
    }

    function Qt(tt, et, Vt, qt, Dt, mt, jt) {
      let Ht, Xt;
      const Qt = (0, Ot.j)() ? mt?.getHostDocument() : null;
      Ht = "string" === typeof et ? et : "string" === typeof et.vertexSource ? "source:" + et.vertexSource : "string" === typeof et.vertexElement ? Qt?.getElementById(et.vertexElement) || et.vertexElement : et.vertex || et, Xt = "string" === typeof et ? et : "string" === typeof et.fragmentSource ? "source:" + et.fragmentSource : "string" === typeof et.fragmentElement ? Qt?.getElementById(et.fragmentElement) || et.fragmentElement : et.fragment || et;
      const Et = [void 0, void 0],
        ft = () => {
          if (Et[0] && Et[1]) {
            const [Ot, Ht] = Et;
            (0, dt.g)(tt), (0, dt.j)(Ot, tt, ((Ot, Xt) => {
              jt && (jt._vertexSourceCodeBeforeMigration = Xt), Vt && (Ot = Vt("vertex", Ot)), tt.isFragment = !0, (0, dt.j)(Ht, tt, ((mt, Ht) => {
                jt && (jt._fragmentSourceCodeBeforeMigration = Ht), Vt && (mt = Vt("fragment", mt));
                const Xt = (0, dt.c)(Ot, mt, tt);
                tt = null;
                const Qt = function(tt, et, Vt, Ot) {
                  if (Vt) {
                    return {
                      vertexSourceCode: (1 === Ot ? "//" : "") + "#define SHADER_NAME vertex:" + (Vt.vertexElement || Vt.vertex || Vt.spectorName || Vt) + "\n" + tt,
                      fragmentSourceCode: (1 === Ot ? "//" : "") + "#define SHADER_NAME fragment:" + (Vt.fragmentElement || Vt.fragment || Vt.spectorName || Vt) + "\n" + et
                    }
                  }
                  return {
                    vertexSourceCode: tt,
                    fragmentSourceCode: et
                  }
                }(Xt.vertexCode, Xt.fragmentCode, et, Dt);
                qt?.(Qt.vertexSourceCode, Qt.fragmentSourceCode)
              }), mt)
            }), mt)
          }
        };
      lt(Ht, "Vertex", "", (tt => {
        jt && (jt._rawVertexSourceCode = tt), Et[0] = tt, ft()
      }), Dt), lt(Xt, "Fragment", "Pixel", (tt => {
        jt && (jt._rawFragmentSourceCode = tt), Et[1] = tt, ft()
      }), Dt)
    }

    function lt(tt, et, Vt, qt, mt, dt) {
      if ("undefined" !== typeof HTMLElement && tt instanceof HTMLElement) {
        return void qt((0, Ot.c)(tt))
      }
      if ("source:" === tt.substring(0, 7)) return void qt(tt.substring(7));
      if ("base64:" === tt.substring(0, 7)) {
        return void qt(window.atob(tt.substring(7)))
      }
      const Ht = Dt.b.GetShadersStore(mt);
      if (Ht[tt + et + "Shader"]) return void qt(Ht[tt + et + "Shader"]);
      if (Vt && Ht[tt + Vt + "Shader"]) return void qt(Ht[tt + Vt + "Shader"]);
      let Xt;
      if (Xt = "." === tt[0] || "/" === tt[0] || tt.indexOf("http") > -1 ? tt : Dt.b.GetShadersRepository(mt) + tt, !(dt = dt || jt.j)) throw new Error("loadFileInjection is not defined");
      dt(Xt + "." + et.toLowerCase() + ".fx", qt)
    }
    const Et = (tt, et, Vt, Ot) => {
      try {
        const Dt = tt.context ? (0, qt.D)(tt.context) : null;
        Dt && (Dt.disableParallelShaderCompile = tt.disableParallelCompilation);
        const mt = tt.existingPipelineContext || et(tt.shaderProcessingContext);
        return mt._name = tt.name, tt.name && Dt && (Dt.cachedPipelines[tt.name] = mt), Vt(mt, tt.vertex, tt.fragment, !!tt.createAsRaw, "", "", tt.rebuildRebind, tt.defines, tt.transformFeedbackVaryings, "", (() => {
          Ot(mt, (() => {
            tt.onRenderingStateCompiled?.(mt)
          }))
        })), mt
      } catch (Dt) {
        throw mt.d.Error("Error compiling effect"), Dt
      }
    }
  },
  40052: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt
    });
    var Ot = Vt(37367),
      qt = Vt(38899),
      Dt = Vt(40061),
      mt = Vt(40063),
      dt = Vt(40085);
    class jt {
      static get ShadersRepository() {
        return Dt.b.ShadersRepository
      }
      static set ShadersRepository(tt) {
        Dt.b.ShadersRepository = tt
      }
      get bC() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new Ot.c), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(tt, et, Vt) {
        let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Dt = arguments.length > 4 ? arguments[4] : void 0,
          dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ht = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Xt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Qt = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          lt = arguments.length > 9 ? arguments[9] : void 0,
          Et = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          ft = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          wt = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Ot.c, this.onErrorObservable = new Ot.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = tt, this._key = Et;
        const yt = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let Nt;
        if (et.attributes) {
          const tt = et;
          if (this._engine = Vt, this._attributesNames = tt.attributes, this._uniformsNames = tt.uniformsNames.concat(tt.samplers), this._samplerList = tt.samplers.slice(), this.defines = tt.defines, this.onError = tt.onError, this.onCompiled = tt.onCompiled, this._fallbacks = tt.fallbacks, this._indexParameters = tt.indexParameters, this._transformFeedbackVaryings = tt.transformFeedbackVaryings || null, this._multiTarget = !!tt.multiTarget, this._shaderLanguage = tt.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!tt.disableParallelShaderCompilation, tt.uniformBuffersNames) {
            this._uniformBuffersNamesList = tt.uniformBuffersNames.slice();
            for (let et = 0; et < tt.uniformBuffersNames.length; et++) this._uniformBuffersNames[tt.uniformBuffersNames[et]] = et
          }
          this._processFinalCode = tt.processFinalCode ?? null, this._processCodeAfterIncludes = tt.processCodeAfterIncludes ?? void 0, wt = tt.extraInitializationsAsync, Nt = tt.existingPipelineContext
        } else this._engine = Dt, this.defines = null == dt ? "" : dt, this._uniformsNames = Vt.concat(qt), this._samplerList = qt ? qt.slice() : [], this._attributesNames = et, this._uniformBuffersNamesList = [], this._shaderLanguage = ft, this.onError = Qt, this.onCompiled = Xt, this._indexParameters = lt, this._fallbacks = Ht;
        "WEBGL2" === this._engine.shaderPlatformName && (Nt = (0, mt.g)(yt, this._engine._gl) ?? Nt), this._attributeLocationByName = {}, this.uniqueId = jt._UniqueIdSeed++, Nt ? (this._pipelineContext = Nt, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, wt).catch((tt => {
          const et = tt?.message ?? String(tt),
            Vt = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${et}`);
          tt && "string" === typeof tt.stack && (Vt.stack = `${Vt.message}\nCaused by: ${tt.stack}`), this._processCompilationErrors(Vt)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.bC || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        Ot && await Ot(), this._processingContext = Vt || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const qt = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: tt ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: Dt.b.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: Dt.b.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          LOt: this._engine.LOt,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, mt.b)(qt, this.name, this._processFinalCode, ((tt, Vt) => {
          this._vertexSourceCode = tt, this._fragmentSourceCode = Vt, this._prepareEffect(et)
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
        return !!this._engine.bC || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      Jf() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(tt) {
        return this._attributes[tt]
      }
      getAttributeLocationByName(tt) {
        return this._attributeLocationByName[tt]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(tt) {
        return this._uniformsNames.indexOf(tt)
      }
      getUniform(tt) {
        return this._uniforms[tt]
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
        return await new Promise((tt => {
          this.executeWhenCompiled(tt)
        }))
      }
      executeWhenCompiled(tt) {
        this.isReady() ? tt(this) : (this.onCompileObservable.add((et => {
          tt(et)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(tt) {
        (0, dt.g)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (et => {
          this._processCompilationErrors(et, tt)
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
            LOt: this._engine.LOt,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(tt, et, Vt, Ot) {
        this._isReady = !1, this._vertexSourceCodeOverride = tt, this._fragmentSourceCodeOverride = et, this.onError = (tt, et) => {
          Ot && Ot(et)
        }, this.onCompiled = () => {
          const tt = this.Jf().scenes;
          if (tt)
            for (let et = 0; et < tt.length; et++) tt[et].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(Vt)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(tt) {
        if (this._pipelineContext = tt, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let et = 0; et < this._attributesNames.length; et++) {
            const tt = this._attributesNames[et];
            this._attributeLocationByName[tt] = this._attributes[et]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), jt.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const et = this._pipelineContext;
        this._isReady = !1;
        try {
          const Vt = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            Ot = Vt ? null : this.defines,
            qt = Vt ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            Dt = Vt ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            dt = this._engine;
          this._pipelineContext = (0, mt.c)({
            existingPipelineContext: tt ? et : null,
            vertex: qt,
            fragment: Dt,
            context: "WEBGL2" === dt.shaderPlatformName || "WEBGL1" === dt.shaderPlatformName ? dt._gl : void 0,
            rebuildRebind: (tt, et, Vt, Ot) => this._rebuildProgram(tt, et, Vt, Ot),
            defines: Ot,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: Vt,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: Vt => {
              et && !tt && this._engine._deletePipelineContext(et), Vt && this._onRenderingStateCompiled(Vt)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(et)
        } catch (Vt) {
          this._processCompilationErrors(Vt, et)
        }
      }
      _getShaderCodeAndErrorLine(tt, et, Vt) {
        const Ot = Vt ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let qt = null;
        if (et && tt) {
          const Dt = et.match(Ot);
          if (Dt && 2 === Dt.length) {
            const et = parseInt(Dt[1]),
              Ot = tt.split("\n", -1);
            Ot.length >= et && (qt = `Offending line [${et}] in ${Vt?"fragment":"vertex"} code: ${Ot[et-1]}`)
          }
        }
        return [tt, qt]
      }
      _processCompilationErrors(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof tt?.stack ? tt.stack : tt?.message ?? String(tt);
        const Vt = this._attributesNames,
          Ot = this._fallbacks;
        if (qt.d.Error("Unable to compile effect:"), qt.d.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), qt.d.Error(`Attributes: ${Vt.join(" ")}`), qt.d.Error("Defines:\n" + this.defines), jt.LogShaderCodeOnCompilationError) {
          let tt, et = null,
            Vt = null;
          this._pipelineContext?._getVertexShaderCode() && ([tt, et] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), tt && (qt.d.Error("Vertex code:"), qt.d.Error(tt))), this._pipelineContext?._getFragmentShaderCode() && ([tt, Vt] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), tt && (qt.d.Error("Fragment code:"), qt.d.Error(tt))), et && qt.d.Error(et), Vt && qt.d.Error(Vt)
        }
        qt.d.Error("Error: " + this._compilationError);
        const Dt = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        et && (this._pipelineContext = et, this._isReady = !0, Dt()), Ot ? (this._pipelineContext = null, Ot.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, qt.d.Error("Trying next fallback."), this.defines = Ot.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, Dt(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, et || Dt())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(tt, et) {
        this._engine._bindTexture(this._samplers[tt], et, tt)
      }
      setTexture(tt, et) {
        this._engine.setTexture(this._samplers[tt], this._uniforms[tt], et, tt)
      }
      setTextureArray(tt, et) {
        const Vt = tt + "Ex";
        if (-1 === this._samplerList.indexOf(Vt + "0")) {
          const Ot = this._samplerList.indexOf(tt);
          for (let tt = 1; tt < et.length; tt++) {
            const et = Vt + (tt - 1).toString();
            this._samplerList.splice(Ot + tt, 0, et)
          }
          let qt = 0;
          for (const tt of this._samplerList) this._samplers[tt] = qt, qt += 1
        }
        this._engine.setTextureArray(this._samplers[tt], this._uniforms[tt], et, tt)
      }
      bindUniformBuffer(tt, et) {
        const Vt = this._uniformBuffersNames[et];
        void 0 === Vt || jt._BaseCache[Vt] === tt && this._engine._features.useUBOBindingCache || (jt._BaseCache[Vt] = tt, this._engine.bindUniformBufferBase(tt, Vt, et))
      }
      bindUniformBlock(tt, et) {
        this._engine.bindUniformBlock(this._pipelineContext, tt, et)
      }
      setInt(tt, et) {
        return this._pipelineContext.setInt(tt, et), this
      }
      setInt2(tt, et, Vt) {
        return this._pipelineContext.setInt2(tt, et, Vt), this
      }
      setInt3(tt, et, Vt, Ot) {
        return this._pipelineContext.setInt3(tt, et, Vt, Ot), this
      }
      setInt4(tt, et, Vt, Ot, qt) {
        return this._pipelineContext.setInt4(tt, et, Vt, Ot, qt), this
      }
      setIntArray(tt, et) {
        return this._pipelineContext.setIntArray(tt, et), this
      }
      setIntArray2(tt, et) {
        return this._pipelineContext.setIntArray2(tt, et), this
      }
      setIntArray3(tt, et) {
        return this._pipelineContext.setIntArray3(tt, et), this
      }
      setIntArray4(tt, et) {
        return this._pipelineContext.setIntArray4(tt, et), this
      }
      setUInt(tt, et) {
        return this._pipelineContext.setUInt(tt, et), this
      }
      setUInt2(tt, et, Vt) {
        return this._pipelineContext.setUInt2(tt, et, Vt), this
      }
      setUInt3(tt, et, Vt, Ot) {
        return this._pipelineContext.setUInt3(tt, et, Vt, Ot), this
      }
      setUInt4(tt, et, Vt, Ot, qt) {
        return this._pipelineContext.setUInt4(tt, et, Vt, Ot, qt), this
      }
      setUIntArray(tt, et) {
        return this._pipelineContext.setUIntArray(tt, et), this
      }
      setUIntArray2(tt, et) {
        return this._pipelineContext.setUIntArray2(tt, et), this
      }
      setUIntArray3(tt, et) {
        return this._pipelineContext.setUIntArray3(tt, et), this
      }
      setUIntArray4(tt, et) {
        return this._pipelineContext.setUIntArray4(tt, et), this
      }
      setFloatArray(tt, et) {
        return this._pipelineContext.setArray(tt, et), this
      }
      setFloatArray2(tt, et) {
        return this._pipelineContext.setArray2(tt, et), this
      }
      setFloatArray3(tt, et) {
        return this._pipelineContext.setArray3(tt, et), this
      }
      setFloatArray4(tt, et) {
        return this._pipelineContext.setArray4(tt, et), this
      }
      setArray(tt, et) {
        return this._pipelineContext.setArray(tt, et), this
      }
      setArray2(tt, et) {
        return this._pipelineContext.setArray2(tt, et), this
      }
      setArray3(tt, et) {
        return this._pipelineContext.setArray3(tt, et), this
      }
      setArray4(tt, et) {
        return this._pipelineContext.setArray4(tt, et), this
      }
      setMatrices(tt, et) {
        return this._pipelineContext.setMatrices(tt, et), this
      }
      setMatrix(tt, et) {
        return this._pipelineContext.setMatrix(tt, et), this
      }
      setMatrix3x3(tt, et) {
        return this._pipelineContext.setMatrix3x3(tt, et), this
      }
      setMatrix2x2(tt, et) {
        return this._pipelineContext.setMatrix2x2(tt, et), this
      }
      setFloat(tt, et) {
        return this._pipelineContext.setFloat(tt, et), this
      }
      setBool(tt, et) {
        return this._pipelineContext.setInt(tt, et ? 1 : 0), this
      }
      setVector2(tt, et) {
        return this._pipelineContext.setVector2(tt, et), this
      }
      setFloat2(tt, et, Vt) {
        return this._pipelineContext.setFloat2(tt, et, Vt), this
      }
      setVector3(tt, et) {
        return this._pipelineContext.setVector3(tt, et), this
      }
      setFloat3(tt, et, Vt, Ot) {
        return this._pipelineContext.setFloat3(tt, et, Vt, Ot), this
      }
      setVector4(tt, et) {
        return this._pipelineContext.setVector4(tt, et), this
      }
      setQuaternion(tt, et) {
        return this._pipelineContext.setQuaternion(tt, et), this
      }
      setFloat4(tt, et, Vt, Ot, qt) {
        return this._pipelineContext.setFloat4(tt, et, Vt, Ot, qt), this
      }
      setColor3(tt, et) {
        return this._pipelineContext.setColor3(tt, et), this
      }
      setColor4(tt, et, Vt) {
        return this._pipelineContext.setColor4(tt, et, Vt), this
      }
      setDirectColor4(tt, et) {
        return this._pipelineContext.setDirectColor4(tt, et), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (jt.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, mt.h)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        et && (Dt.b.GetShadersStore(Ot)[`${tt}PixelShader`] = et), Vt && (Dt.b.GetShadersStore(Ot)[`${tt}VertexShader`] = Vt)
      }
      static ResetCache() {
        jt._BaseCache = {}
      }
    }
    jt.LogShaderCodeOnCompilationError = !0, jt.PersistentMode = !1, jt.AutomaticallyClearCodeCache = !1, jt._UniqueIdSeed = 0, jt._BaseCache = {}, jt.ShadersStore = Dt.b.ShadersStore, jt.IncludesShadersStore = Dt.b.IncludesShadersStore
  },
  40354: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Xt,
      c: () => Kt,
      d: () => ut
    });
    var Ot = Vt(40052),
      qt = Vt(37336),
      Dt = Vt(37381),
      mt = Vt(40337);
    const dt = new qt.c,
      jt = new qt.c,
      Ht = new qt.c,
      Xt = {
        vI: () => {},
        eyeAtCamera: !0
      };

    function Qt(tt, et, Vt) {
      const Ot = Vt.GOt(),
        qt = et.GOt();
      for (let Dt = 0; Dt < 16; Dt++) Ot[Dt] = qt[Dt];
      return Ot[12] -= tt.x, Ot[13] -= tt.y, Ot[14] -= tt.z, Vt.markAsUpdated(), Vt
    }

    function lt(tt, et, Vt) {
      return (0, Dt.i)(et, jt), Qt(tt, jt, Ht), (0, Dt.i)(Ht, Vt), Vt
    }

    function Et(tt, et, Vt) {
      if (!Xt.eyeAtCamera) return lt(tt, et, Vt);
      const Ot = Vt.GOt(),
        qt = et.GOt();
      for (let Dt = 0; Dt < 16; Dt++) Ot[Dt] = qt[Dt];
      return Ot[12] = 0, Ot[13] = 0, Ot[14] = 0, Vt.markAsUpdated(), Vt
    }

    function ft(tt, et, Vt, Ot) {
      return (0, Dt.t)(Et(tt, et, Ot), Vt, Ot), Ot
    }

    function wt(tt, et, Vt, Ot) {
      return (0, Dt.i)(Vt, jt), (0, Dt.t)(et, jt, Ht), Qt(tt, Ht, jt), Et(tt, Vt, Ht), (0, Dt.t)(jt, Ht, Ot), Ot
    }

    function yt(tt, et, Vt, Ot, qt, mt) {
      return (0, Dt.i)(Vt, jt), (0, Dt.t)(et, jt, Ht), Qt(tt, Ht, jt), ft(tt, Ot, qt, Ht), (0, Dt.t)(jt, Ht, mt), mt
    }

    function Nt(tt, et) {
      const Vt = Xt.vI();
      if (!Vt || dt === et) return et;
      dt.updateFlag = et.updateFlag;
      const Ot = Vt.floatingOriginOffset;
      switch (tt) {
        case "world":
          return Qt(Ot, et, dt);
        case "view":
          return Et(Ot, et, dt);
        case "worldView":
          return wt(Ot, et, Vt.getViewMatrix(), dt);
        case "viewProjection":
          return ft(Ot, Vt.getViewMatrix(), Vt.getProjectionMatrix(), dt);
        case "worldViewProjection":
          return yt(Ot, et, Vt.getTransformMatrix(), Vt.getViewMatrix(), Vt.getProjectionMatrix(), dt);
        default:
          if (tt.startsWith("u_")) {
            const qt = tt.toLowerCase();
            if (qt.startsWith("u_worldviewprojection")) return yt(Ot, et, Vt.getTransformMatrix(), Vt.getViewMatrix(), Vt.getProjectionMatrix(), dt);
            if (qt.startsWith("u_viewprojection")) return ft(Ot, Vt.getViewMatrix(), Vt.getProjectionMatrix(), dt);
            if (qt.startsWith("u_worldview")) return wt(Ot, et, Vt.getViewMatrix(), dt);
            if (qt.startsWith("u_world")) return Qt(Ot, et, dt);
            if (qt.startsWith("u_view")) return Et(Ot, et, dt)
          }
          return et
      }
    }
    const Mt = mt.c,
      bt = Ot.b,
      Jt = Mt.prototype._updateMatrixForUniform,
      Ct = Ot.b.prototype.setMatrix;

    function ut() {
      Ot.b.prototype.setMatrix = Ct, bt._setMatrixOverride = void 0, Mt.prototype._updateMatrixForUniform = Jt, Mt.prototype._updateMatrixForUniformOverride = void 0
    }

    function Kt() {
      bt.prototype._setMatrixOverride = Ct, bt.prototype.setMatrix = function(tt, et) {
        return this._setMatrixOverride(tt, Nt(tt, et)), this
      }, Mt.prototype._updateMatrixForUniformOverride = Jt, Mt.prototype._updateMatrixForUniform = function(tt, et) {
        this._updateMatrixForUniformOverride(tt, Nt(tt, et))
      }
    }
  },
  40329: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt,
      d: () => qt
    });
    var Ot = Vt(40321);

    function qt(tt, et) {
      et.WHITEBALANCE && tt.push("whiteBalanceMatrix"), et.EXPOSURE && tt.push("exposureLinear"), et.CONTRAST && tt.push("contrast"), et.COLORGRADING && tt.push("colorTransformSettings"), (et.VIGNETTE || et.DITHER) && tt.push("vInverseScreenSize"), et.VIGNETTE && (tt.push("vignetteSettings1"), tt.push("vignetteSettings2")), et.COLORCURVES && (0, Ot.d)(tt), et.DITHER && tt.push("ditherIntensity")
    }

    function Dt(tt, et) {
      et.COLORGRADING && tt.push("txColorTransform")
    }
  },
  40313: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => ct,
      c: () => Pt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(37367),
      mt = Vt(37513),
      dt = Vt(37372),
      jt = Vt(37336);
    const Ht = [
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
      Xt = 1e6 / Ht[Ht.length - 1][0],
      Qt = 150;

    function lt(tt, et) {
      const Vt = Number.isNaN(tt) ? Xt : Math.max(tt, Xt),
        Ot = (0, dt.Clamp)(1e6 / Vt, Ht[0][0], Ht[Ht.length - 1][0]);
      let qt = 0,
        Dt = Ht.length - 1;
      for (; Dt - qt > 1;) {
        const tt = qt + Dt >> 1;
        Ht[tt][0] <= Ot ? qt = tt : Dt = tt
      }
      const mt = qt,
        [lt, Et, ft, wt] = Ht[mt],
        [yt, Nt, Mt, bt] = Ht[mt + 1],
        Jt = (Ot - lt) / (yt - lt),
        Ct = jt.m.Lerp(new jt.m(Et, ft), new jt.m(Nt, Mt), Jt),
        ut = jt.m.Normalize(new jt.m(1, wt)),
        Kt = jt.m.Normalize(new jt.m(1, bt)),
        ht = jt.m.Normalize(jt.m.Lerp(ut, Kt, Jt)),
        vt = (0, dt.Clamp)(et, -150, Qt);
      Ct.qqt(ht.scale(vt / 3e3));
      const Wt = 2 * Ct.x - 8 * Ct.y + 4,
        St = 3 * Ct.x / Wt,
        ct = 2 * Ct.y / Wt;
      return new jt.n(St / ct, 1, (1 - St - ct) / ct)
    }
    const Et = jt.c.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      ft = jt.c.Invert(Et);

    function wt(tt, et) {
      const Vt = et > 0 ? tt / et : 10;
      return (0, dt.Clamp)(Vt, .1, 10)
    }

    function yt(tt, et) {
      const Vt = jt.n.TransformNormal(tt, Et),
        Ot = jt.n.TransformNormal(et, Et),
        qt = jt.c.FromArray([wt(Ot.x, Vt.x), 0, 0, 0, 0, wt(Ot.y, Vt.y), 0, 0, 0, 0, wt(Ot.z, Vt.z), 0, 0, 0, 0, 1]);
      return Et.multiply(qt).multiply(ft)
    }
    const Nt = new jt.n(.95047, 1, 1.08883),
      Mt = jt.c.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(yt(Nt, lt(6500, 0))),
      bt = jt.c.Invert(Mt),
      Jt = jt.n.TransformNormal(new jt.n(1, 1, 1), Mt);
    var Ct = Vt(40230),
      ut = Vt(40321);
    let Kt = (() => {
      var tt;
      let et, Vt, Dt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt = [],
        Nt = [],
        Mt = [],
        bt = [],
        Jt = [],
        Kt = [],
        ht = [],
        vt = [],
        Wt = [],
        St = [],
        ct = [],
        Rt = [],
        It = [],
        Pt = [],
        Zt = [],
        Lt = [],
        Ft = [],
        kt = [],
        Gt = [],
        zt = [],
        ot = [],
        rt = [],
        Ut = [],
        At = [];
      return tt = class {
        constructor() {
          this._dirty = !0, this._tempColor = new mt.c(0, 0, 0, 0), this._globalCurve = new mt.c(0, 0, 0, 0), this._highlightsCurve = new mt.c(0, 0, 0, 0), this._midtonesCurve = new mt.c(0, 0, 0, 0), this._shadowsCurve = new mt.c(0, 0, 0, 0), this._positiveCurve = new mt.c(0, 0, 0, 0), this._negativeCurve = new mt.c(0, 0, 0, 0), this._globalHue = (0, Ot.m)(this, yt, 30), this._globalDensity = ((0, Ot.m)(this, Nt), (0, Ot.m)(this, Mt, 0)), this._globalSaturation = ((0, Ot.m)(this, bt), (0, Ot.m)(this, Jt, 0)), this._globalExposure = ((0, Ot.m)(this, Kt), (0, Ot.m)(this, ht, 0)), this._highlightsHue = ((0, Ot.m)(this, vt), (0, Ot.m)(this, Wt, 30)), this._highlightsDensity = ((0, Ot.m)(this, St), (0, Ot.m)(this, ct, 0)), this._highlightsSaturation = ((0, Ot.m)(this, Rt), (0, Ot.m)(this, It, 0)), this._highlightsExposure = ((0, Ot.m)(this, Pt), (0, Ot.m)(this, Zt, 0)), this._midtonesHue = ((0, Ot.m)(this, Lt), (0, Ot.m)(this, Ft, 30)), this._midtonesDensity = ((0, Ot.m)(this, kt), (0, Ot.m)(this, Gt, 0)), this._midtonesSaturation = ((0, Ot.m)(this, zt), (0, Ot.m)(this, ot, 0)), this._midtonesExposure = ((0, Ot.m)(this, rt), (0, Ot.m)(this, Ut, 0)), this._shadowsHue = ((0, Ot.m)(this, At), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(tt) {
          this._globalHue = tt, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(tt) {
          this._globalDensity = tt, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(tt) {
          this._globalSaturation = tt, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(tt) {
          this._globalExposure = tt, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(tt) {
          this._highlightsHue = tt, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(tt) {
          this._highlightsDensity = tt, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(tt) {
          this._highlightsSaturation = tt, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(tt) {
          this._highlightsExposure = tt, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(tt) {
          this._midtonesHue = tt, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(tt) {
          this._midtonesDensity = tt, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(tt) {
          this._midtonesSaturation = tt, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(tt) {
          this._midtonesExposure = tt, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(tt) {
          this._shadowsHue = tt, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(tt) {
          this._shadowsDensity = tt, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(tt) {
          this._shadowsSaturation = tt, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(tt) {
          this._shadowsExposure = tt, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(et, Vt, Ot, qt, Dt) {
          null != et && (et = tt._Clamp(et, 0, 360), Vt = tt._Clamp(Vt, -100, 100), Ot = tt._Clamp(Ot, -100, 100), qt = tt._Clamp(qt, -100, 100), Vt = tt._ApplyColorGradingSliderNonlinear(Vt), Vt *= .5, qt = tt._ApplyColorGradingSliderNonlinear(qt), Vt < 0 && (Vt *= -1, et = (et + 180) % 360), tt._FromHSBToRef(et, Vt, 50 + .25 * qt, Dt), Dt.scaleToRef(2, Dt), Dt.a = 1 + .01 * Ot)
        }
        static _ApplyColorGradingSliderNonlinear(tt) {
          tt /= 100;
          let et = Math.abs(tt);
          return et = Math.pow(et, 2), tt < 0 && (et *= -1), et *= 100, et
        }
        static _FromHSBToRef(et, Vt, Ot, qt) {
          let Dt = tt._Clamp(et, 0, 360);
          const mt = tt._Clamp(Vt / 100, 0, 1),
            dt = tt._Clamp(Ot / 100, 0, 1);
          if (0 === mt) qt.r = dt, qt.g = dt, qt.b = dt;
          else {
            Dt /= 60;
            const tt = Math.floor(Dt),
              et = Dt - tt,
              Vt = dt * (1 - mt),
              Ot = dt * (1 - mt * et),
              jt = dt * (1 - mt * (1 - et));
            switch (tt) {
              case 0:
                qt.r = dt, qt.g = jt, qt.b = Vt;
                break;
              case 1:
                qt.r = Ot, qt.g = dt, qt.b = Vt;
                break;
              case 2:
                qt.r = Vt, qt.g = dt, qt.b = jt;
                break;
              case 3:
                qt.r = Vt, qt.g = Ot, qt.b = dt;
                break;
              case 4:
                qt.r = jt, qt.g = Vt, qt.b = dt;
                break;
              default:
                qt.r = dt, qt.g = Vt, qt.b = Ot
            }
          }
          qt.a = 1
        }
        static _Clamp(tt, et, Vt) {
          return Math.min(Math.max(tt, et), Vt)
        }
        clone() {
          return Ct.d.Clone((() => new tt), this)
        }
        serialize() {
          return Ct.d.Serialize(this)
        }
        _bind(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), tt && (tt.setFloat4(et, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), tt.setFloat4(Vt, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), tt.setFloat4(Ot, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const mt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], dt = [(0, qt.P)()], jt = [(0, qt.P)()], Ht = [(0, qt.P)()], Xt = [(0, qt.P)()], Qt = [(0, qt.P)()], lt = [(0, qt.P)()], Et = [(0, qt.P)()], ft = [(0, qt.P)()], wt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: tt => "_globalHue" in tt,
            get: tt => tt._globalHue,
            set: (tt, et) => {
              tt._globalHue = et
            }
          },
          metadata: mt
        }, yt, Nt), (0, Ot.l)(null, null, Vt, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: tt => "_globalDensity" in tt,
            get: tt => tt._globalDensity,
            set: (tt, et) => {
              tt._globalDensity = et
            }
          },
          metadata: mt
        }, Mt, bt), (0, Ot.l)(null, null, Dt, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: tt => "_globalSaturation" in tt,
            get: tt => tt._globalSaturation,
            set: (tt, et) => {
              tt._globalSaturation = et
            }
          },
          metadata: mt
        }, Jt, Kt), (0, Ot.l)(null, null, dt, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: tt => "_globalExposure" in tt,
            get: tt => tt._globalExposure,
            set: (tt, et) => {
              tt._globalExposure = et
            }
          },
          metadata: mt
        }, ht, vt), (0, Ot.l)(null, null, jt, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: tt => "_highlightsHue" in tt,
            get: tt => tt._highlightsHue,
            set: (tt, et) => {
              tt._highlightsHue = et
            }
          },
          metadata: mt
        }, Wt, St), (0, Ot.l)(null, null, Ht, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: tt => "_highlightsDensity" in tt,
            get: tt => tt._highlightsDensity,
            set: (tt, et) => {
              tt._highlightsDensity = et
            }
          },
          metadata: mt
        }, ct, Rt), (0, Ot.l)(null, null, Xt, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: tt => "_highlightsSaturation" in tt,
            get: tt => tt._highlightsSaturation,
            set: (tt, et) => {
              tt._highlightsSaturation = et
            }
          },
          metadata: mt
        }, It, Pt), (0, Ot.l)(null, null, Qt, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: tt => "_highlightsExposure" in tt,
            get: tt => tt._highlightsExposure,
            set: (tt, et) => {
              tt._highlightsExposure = et
            }
          },
          metadata: mt
        }, Zt, Lt), (0, Ot.l)(null, null, lt, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: tt => "_midtonesHue" in tt,
            get: tt => tt._midtonesHue,
            set: (tt, et) => {
              tt._midtonesHue = et
            }
          },
          metadata: mt
        }, Ft, kt), (0, Ot.l)(null, null, Et, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: tt => "_midtonesDensity" in tt,
            get: tt => tt._midtonesDensity,
            set: (tt, et) => {
              tt._midtonesDensity = et
            }
          },
          metadata: mt
        }, Gt, zt), (0, Ot.l)(null, null, ft, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: tt => "_midtonesSaturation" in tt,
            get: tt => tt._midtonesSaturation,
            set: (tt, et) => {
              tt._midtonesSaturation = et
            }
          },
          metadata: mt
        }, ot, rt), (0, Ot.l)(null, null, wt, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: tt => "_midtonesExposure" in tt,
            get: tt => tt._midtonesExposure,
            set: (tt, et) => {
              tt._midtonesExposure = et
            }
          },
          metadata: mt
        }, Ut, At), mt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mt
        })
      })(), tt.PrepareUniforms = ut.d, tt
    })();

    function ht(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      tt._bind(et, Vt, Ot, qt)
    }
    var vt = Vt(40131),
      Wt = Vt(40329),
      St = Vt(37390);
    let ct = (() => {
        var tt;
        let et, Vt, Ht, Et, ft, wt, Nt, ut, St, ct, Rt, It, Pt, Zt, Lt, Ft, kt, Gt, zt, ot, rt, Ut, At, it, Yt, Bt, pt, xt, Tt = [],
          gt = [],
          st = [],
          nt = [],
          te = [],
          ee = [],
          Ve = [],
          Oe = [],
          qe = [],
          De = [],
          me = [],
          de = [],
          je = [],
          He = [],
          Xe = [],
          Qe = [],
          le = [],
          Ee = [],
          fe = [],
          we = [],
          ye = [],
          Ne = [],
          ae = [],
          Me = [],
          be = [],
          Je = [],
          Ce = [],
          ue = [],
          Ke = [],
          he = [],
          ve = [],
          We = [],
          Se = [],
          ce = [],
          Re = [],
          Ie = [],
          Pe = [],
          Ze = [],
          Le = [],
          Fe = [],
          ke = [],
          Ge = [],
          ze = [],
          oe = [],
          re = [],
          Ue = [],
          Ae = [],
          ie = [],
          Ye = [],
          Be = [],
          pe = [],
          xe = [],
          Te = [],
          ge = [],
          se = [],
          ne = [];
        return tt = class {
          constructor() {
            this.colorCurves = (0, Ot.m)(this, Tt, new Kt), this._colorCurvesEnabled = ((0, Ot.m)(this, gt), (0, Ot.m)(this, st, !1)), this._colorGradingTexture = ((0, Ot.m)(this, nt), (0, Ot.m)(this, te, void 0)), this._colorGradingEnabled = ((0, Ot.m)(this, ee), (0, Ot.m)(this, Ve, !1)), this._colorGradingWithGreenDepth = ((0, Ot.m)(this, Oe), (0, Ot.m)(this, qe, !0)), this._colorGradingBGR = ((0, Ot.m)(this, De), (0, Ot.m)(this, me, !0)), this._exposure = ((0, Ot.m)(this, de), (0, Ot.m)(this, je, 1)), this._toneMappingEnabled = ((0, Ot.m)(this, He), (0, Ot.m)(this, Xe, !1)), this._toneMappingType = ((0, Ot.m)(this, Qe), (0, Ot.m)(this, le, tt.TONEMAPPING_STANDARD)), this._contrast = ((0, Ot.m)(this, Ee), (0, Ot.m)(this, fe, 1)), this._whiteBalanceEnabled = ((0, Ot.m)(this, we), (0, Ot.m)(this, ye, !1)), this._temperature = ((0, Ot.m)(this, Ne), (0, Ot.m)(this, ae, 6500)), this._tint = ((0, Ot.m)(this, Me), (0, Ot.m)(this, be, 0)), this._whiteBalanceMatrix = ((0, Ot.m)(this, Je), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, Ot.m)(this, Ce, 0), this.vignetteCenterX = ((0, Ot.m)(this, ue), (0, Ot.m)(this, Ke, 0)), this.vignetteCenterY = ((0, Ot.m)(this, he), (0, Ot.m)(this, ve, 0)), this.vignetteWeight = ((0, Ot.m)(this, We), (0, Ot.m)(this, Se, 1.5)), this.vignetteColor = ((0, Ot.m)(this, ce), (0, Ot.m)(this, Re, new mt.c(0, 0, 0, 0))), this.vignetteCameraFov = ((0, Ot.m)(this, Ie), (0, Ot.m)(this, Pe, .5)), this._vignetteBlendMode = ((0, Ot.m)(this, Ze), (0, Ot.m)(this, Le, tt.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, Ot.m)(this, Fe), (0, Ot.m)(this, ke, !1)), this._ditheringEnabled = ((0, Ot.m)(this, Ge), (0, Ot.m)(this, ze, !1)), this._ditheringIntensity = ((0, Ot.m)(this, oe), (0, Ot.m)(this, re, 1 / 255)), this._skipFinalColorClamp = ((0, Ot.m)(this, Ue), (0, Ot.m)(this, Ae, !1)), this._applyByPostProcess = ((0, Ot.m)(this, ie), (0, Ot.m)(this, Ye, !1)), this._isEnabled = ((0, Ot.m)(this, Be), (0, Ot.m)(this, pe, !0)), this.outputTextureWidth = ((0, Ot.m)(this, xe), (0, Ot.m)(this, Te, 0)), this.outputTextureHeight = ((0, Ot.m)(this, ge), (0, Ot.m)(this, se, 0)), this.onUpdateParameters = ((0, Ot.m)(this, ne), new Dt.c)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(tt) {
            this._colorCurvesEnabled !== tt && (this._colorCurvesEnabled = tt, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(tt) {
            this._colorGradingTexture !== tt && (this._colorGradingTexture = tt, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(tt) {
            this._colorGradingEnabled !== tt && (this._colorGradingEnabled = tt, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(tt) {
            this._colorGradingWithGreenDepth !== tt && (this._colorGradingWithGreenDepth = tt, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(tt) {
            this._colorGradingBGR !== tt && (this._colorGradingBGR = tt, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(tt) {
            this._exposure !== tt && (this._exposure = tt, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(tt) {
            this._toneMappingEnabled !== tt && (this._toneMappingEnabled = tt, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(tt) {
            this._toneMappingType !== tt && (this._toneMappingType = tt, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(tt) {
            this._contrast !== tt && (this._contrast = tt, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(tt) {
            this._whiteBalanceEnabled !== tt && (this._whiteBalanceEnabled = tt, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(tt) {
            tt = Number.isNaN(tt) ? Xt : Math.max(tt, Xt), this._temperature !== tt && (this._temperature = tt, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(tt) {
            tt = (0, dt.Clamp)(tt, -150, Qt), this._tint !== tt && (this._tint = tt, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(tt, et) {
              const Vt = yt(lt(tt, et), Jt),
                Ot = Mt.multiply(Vt).multiply(bt);
              return jt.c.GetAsMatrix3x3(Ot)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(tt) {
            this.vignetteCenterY = tt
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(tt) {
            this.vignetteCenterX = tt
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(tt) {
            this._vignetteBlendMode !== tt && (this._vignetteBlendMode = tt, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(tt) {
            this._vignetteEnabled !== tt && (this._vignetteEnabled = tt, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(tt) {
            this._ditheringEnabled !== tt && (this._ditheringEnabled = tt, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(tt) {
            this._ditheringIntensity !== tt && (this._ditheringIntensity = tt, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(tt) {
            this._skipFinalColorClamp !== tt && (this._skipFinalColorClamp = tt, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(tt) {
            this._applyByPostProcess !== tt && (this._applyByPostProcess = tt, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(tt) {
            this._isEnabled !== tt && (this._isEnabled = tt, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(et) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return et.WHITEBALANCE = !1, et.VIGNETTE = !1, et.TONEMAPPING = 0, et.CONTRAST = !1, et.EXPOSURE = !1, et.COLORCURVES = !1, et.COLORGRADING = !1, et.COLORGRADING3D = !1, et.DITHER = !1, et.IMAGEPROCESSING = !1, et.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(et.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (et.WHITEBALANCE = this._whiteBalanceEnabled, et.VIGNETTE = this.vignetteEnabled, et.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === tt._VIGNETTEMODE_MULTIPLY, et.VIGNETTEBLENDMODEOPAQUE = !et.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case tt.TONEMAPPING_KHR_PBR_NEUTRAL:
                et.TONEMAPPING = 3;
                break;
              case tt.TONEMAPPING_ACES:
                et.TONEMAPPING = 2;
                break;
              default:
                et.TONEMAPPING = 1
            } else et.TONEMAPPING = 0;
            et.CONTRAST = 1 !== this.contrast, et.EXPOSURE = 1 !== this.exposure, et.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, et.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, et.COLORGRADING ? et.COLORGRADING3D = this.colorGradingTexture.is3D : et.COLORGRADING3D = !1, et.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, et.SAMPLER3DBGRMAP = this.colorGradingBGR, et.DITHER = this._ditheringEnabled, et.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, et.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, et.IMAGEPROCESSING = et.WHITEBALANCE || et.VIGNETTE || !!et.TONEMAPPING || et.CONTRAST || et.EXPOSURE || et.COLORCURVES || et.COLORGRADING || et.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(tt, et) {
            if (this._whiteBalanceEnabled && tt.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && ht(this.colorCurves, tt), this._vignetteEnabled || this._ditheringEnabled) {
              const Vt = 1 / (this.outputTextureWidth || tt.Jf().getRenderWidth()),
                Ot = 1 / (this.outputTextureHeight || tt.Jf().getRenderHeight());
              if (tt.setFloat2("vInverseScreenSize", Vt, Ot), this._ditheringEnabled && tt.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const qt = null != et ? et : Ot / Vt;
                let Dt = Math.tan(.5 * this.vignetteCameraFov),
                  mt = Dt * qt;
                const dt = Math.sqrt(mt * Dt);
                mt = (0, vt.l)(mt, dt, this.vignetteStretch), Dt = (0, vt.l)(Dt, dt, this.vignetteStretch), tt.setFloat4("vignetteSettings1", mt, Dt, -mt * this.vignetteCenterX, -Dt * this.vignetteCenterY);
                const jt = -2 * this.vignetteWeight;
                tt.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, jt)
              }
            }
            if (tt.setFloat("exposureLinear", this.exposure), tt.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              tt.setTexture("txColorTransform", this.colorGradingTexture);
              const et = this.colorGradingTexture.getSize().height;
              tt.setFloat4("colorTransformSettings", (et - 1) / et, .5 / et, et, this.colorGradingTexture.level)
            }
          }
          clone() {
            return Ct.d.Clone((() => new tt), this)
          }
          serialize() {
            return Ct.d.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          et = [(0, qt.p)()], Vt = [(0, qt.P)()], Ht = [(0, qt.E)("colorGradingTexture")], Et = [(0, qt.P)()], ft = [(0, qt.P)()], wt = [(0, qt.P)()], Nt = [(0, qt.P)()], ut = [(0, qt.P)()], St = [(0, qt.P)()], ct = [(0, qt.P)()], Rt = [(0, qt.P)()], It = [(0, qt.P)()], Pt = [(0, qt.P)()], Zt = [(0, qt.P)()], Lt = [(0, qt.P)()], Ft = [(0, qt.P)()], kt = [(0, qt.P)()], Gt = [(0, qt.x)()], zt = [(0, qt.P)()], ot = [(0, qt.P)()], rt = [(0, qt.P)()], Ut = [(0, qt.P)()], At = [(0, qt.P)()], it = [(0, qt.P)()], Yt = [(0, qt.P)()], Bt = [(0, qt.P)()], pt = [(0, qt.P)()], xt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: tt => "colorCurves" in tt,
              get: tt => tt.colorCurves,
              set: (tt, et) => {
                tt.colorCurves = et
              }
            },
            metadata: Dt
          }, Tt, gt), (0, Ot.l)(null, null, Vt, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: tt => "_colorCurvesEnabled" in tt,
              get: tt => tt._colorCurvesEnabled,
              set: (tt, et) => {
                tt._colorCurvesEnabled = et
              }
            },
            metadata: Dt
          }, st, nt), (0, Ot.l)(null, null, Ht, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "_colorGradingTexture" in tt,
              get: tt => tt._colorGradingTexture,
              set: (tt, et) => {
                tt._colorGradingTexture = et
              }
            },
            metadata: Dt
          }, te, ee), (0, Ot.l)(null, null, Et, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: tt => "_colorGradingEnabled" in tt,
              get: tt => tt._colorGradingEnabled,
              set: (tt, et) => {
                tt._colorGradingEnabled = et
              }
            },
            metadata: Dt
          }, Ve, Oe), (0, Ot.l)(null, null, ft, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: tt => "_colorGradingWithGreenDepth" in tt,
              get: tt => tt._colorGradingWithGreenDepth,
              set: (tt, et) => {
                tt._colorGradingWithGreenDepth = et
              }
            },
            metadata: Dt
          }, qe, De), (0, Ot.l)(null, null, wt, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: tt => "_colorGradingBGR" in tt,
              get: tt => tt._colorGradingBGR,
              set: (tt, et) => {
                tt._colorGradingBGR = et
              }
            },
            metadata: Dt
          }, me, de), (0, Ot.l)(null, null, Nt, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: tt => "_exposure" in tt,
              get: tt => tt._exposure,
              set: (tt, et) => {
                tt._exposure = et
              }
            },
            metadata: Dt
          }, je, He), (0, Ot.l)(null, null, ut, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: tt => "_toneMappingEnabled" in tt,
              get: tt => tt._toneMappingEnabled,
              set: (tt, et) => {
                tt._toneMappingEnabled = et
              }
            },
            metadata: Dt
          }, Xe, Qe), (0, Ot.l)(null, null, St, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: tt => "_toneMappingType" in tt,
              get: tt => tt._toneMappingType,
              set: (tt, et) => {
                tt._toneMappingType = et
              }
            },
            metadata: Dt
          }, le, Ee), (0, Ot.l)(null, null, ct, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: tt => "_contrast" in tt,
              get: tt => tt._contrast,
              set: (tt, et) => {
                tt._contrast = et
              }
            },
            metadata: Dt
          }, fe, we), (0, Ot.l)(null, null, Rt, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: tt => "_whiteBalanceEnabled" in tt,
              get: tt => tt._whiteBalanceEnabled,
              set: (tt, et) => {
                tt._whiteBalanceEnabled = et
              }
            },
            metadata: Dt
          }, ye, Ne), (0, Ot.l)(null, null, It, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: tt => "_temperature" in tt,
              get: tt => tt._temperature,
              set: (tt, et) => {
                tt._temperature = et
              }
            },
            metadata: Dt
          }, ae, Me), (0, Ot.l)(null, null, Pt, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: tt => "_tint" in tt,
              get: tt => tt._tint,
              set: (tt, et) => {
                tt._tint = et
              }
            },
            metadata: Dt
          }, be, Je), (0, Ot.l)(null, null, Zt, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: tt => "vignetteStretch" in tt,
              get: tt => tt.vignetteStretch,
              set: (tt, et) => {
                tt.vignetteStretch = et
              }
            },
            metadata: Dt
          }, Ce, ue), (0, Ot.l)(null, null, Lt, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: tt => "vignetteCenterX" in tt,
              get: tt => tt.vignetteCenterX,
              set: (tt, et) => {
                tt.vignetteCenterX = et
              }
            },
            metadata: Dt
          }, Ke, he), (0, Ot.l)(null, null, Ft, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: tt => "vignetteCenterY" in tt,
              get: tt => tt.vignetteCenterY,
              set: (tt, et) => {
                tt.vignetteCenterY = et
              }
            },
            metadata: Dt
          }, ve, We), (0, Ot.l)(null, null, kt, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: tt => "vignetteWeight" in tt,
              get: tt => tt.vignetteWeight,
              set: (tt, et) => {
                tt.vignetteWeight = et
              }
            },
            metadata: Dt
          }, Se, ce), (0, Ot.l)(null, null, Gt, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "vignetteColor" in tt,
              get: tt => tt.vignetteColor,
              set: (tt, et) => {
                tt.vignetteColor = et
              }
            },
            metadata: Dt
          }, Re, Ie), (0, Ot.l)(null, null, zt, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: tt => "vignetteCameraFov" in tt,
              get: tt => tt.vignetteCameraFov,
              set: (tt, et) => {
                tt.vignetteCameraFov = et
              }
            },
            metadata: Dt
          }, Pe, Ze), (0, Ot.l)(null, null, ot, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: tt => "_vignetteBlendMode" in tt,
              get: tt => tt._vignetteBlendMode,
              set: (tt, et) => {
                tt._vignetteBlendMode = et
              }
            },
            metadata: Dt
          }, Le, Fe), (0, Ot.l)(null, null, rt, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: tt => "_vignetteEnabled" in tt,
              get: tt => tt._vignetteEnabled,
              set: (tt, et) => {
                tt._vignetteEnabled = et
              }
            },
            metadata: Dt
          }, ke, Ge), (0, Ot.l)(null, null, Ut, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: tt => "_ditheringEnabled" in tt,
              get: tt => tt._ditheringEnabled,
              set: (tt, et) => {
                tt._ditheringEnabled = et
              }
            },
            metadata: Dt
          }, ze, oe), (0, Ot.l)(null, null, At, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: tt => "_ditheringIntensity" in tt,
              get: tt => tt._ditheringIntensity,
              set: (tt, et) => {
                tt._ditheringIntensity = et
              }
            },
            metadata: Dt
          }, re, Ue), (0, Ot.l)(null, null, it, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: tt => "_skipFinalColorClamp" in tt,
              get: tt => tt._skipFinalColorClamp,
              set: (tt, et) => {
                tt._skipFinalColorClamp = et
              }
            },
            metadata: Dt
          }, Ae, ie), (0, Ot.l)(null, null, Yt, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: tt => "_applyByPostProcess" in tt,
              get: tt => tt._applyByPostProcess,
              set: (tt, et) => {
                tt._applyByPostProcess = et
              }
            },
            metadata: Dt
          }, Ye, Be), (0, Ot.l)(null, null, Bt, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: tt => "_isEnabled" in tt,
              get: tt => tt._isEnabled,
              set: (tt, et) => {
                tt._isEnabled = et
              }
            },
            metadata: Dt
          }, pe, xe), (0, Ot.l)(null, null, pt, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: tt => "outputTextureWidth" in tt,
              get: tt => tt.outputTextureWidth,
              set: (tt, et) => {
                tt.outputTextureWidth = et
              }
            },
            metadata: Dt
          }, Te, ge), (0, Ot.l)(null, null, xt, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: tt => "outputTextureHeight" in tt,
              get: tt => tt.outputTextureHeight,
              set: (tt, et) => {
                tt.outputTextureHeight = et
              }
            },
            metadata: Dt
          }, se, ne), Dt && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Dt
          })
        })(), tt.TONEMAPPING_STANDARD = 0, tt.TONEMAPPING_ACES = 1, tt.TONEMAPPING_KHR_PBR_NEUTRAL = 2, tt.PrepareUniforms = Wt.d, tt.PrepareSamplers = Wt.b, tt._VIGNETTEMODE_MULTIPLY = 0, tt._VIGNETTEMODE_OPAQUE = 1, tt
      })(),
      Rt = !1;

    function It(tt) {
      const et = Ct.d.Parse((() => new ct), tt, null, null);
      return void 0 !== tt.vignetteCentreX && (et.vignetteCenterX = tt.vignetteCentreX), void 0 !== tt.vignetteCentreY && (et.vignetteCenterY = tt.vignetteCentreY), et
    }

    function Pt() {
      Rt || (Rt = !0, ct.Parse = It, Ct.d._ImageProcessingConfigurationParser = It, (0, St.i)("BABYLON.ImageProcessingConfiguration", ct))
    }
  },
  40337: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt
    });
    var Ot = Vt(38899),
      qt = Vt(40300);
    class Dt {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 ? arguments[3] : void 0,
          qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Dt = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = tt, this._noUBO = !tt.supportsUniformBuffers || qt, this._dynamic = Vt, this._name = Ot ?? "no-name", this._data = et || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === Dt && this._engine._features.trackUbosInFrame || !0 === Dt) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.x_ = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.x_ = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(tt) {
        let et;
        if (et = tt <= 2 ? tt : 4, this._uniformLocationPointer % et !== 0) {
          const tt = this._uniformLocationPointer;
          this._uniformLocationPointer += et - this._uniformLocationPointer % et;
          const Vt = this._uniformLocationPointer - tt;
          for (let et = 0; et < Vt; et++) this._data.push(0)
        }
      }
      addUniform(tt, et) {
        let Vt, Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (Ot > 0 && "number" === typeof et && (this._uniformArraySizes[tt] = {
            strideSize: et,
            arraySize: Ot
          }), void 0 === this._uniformLocations[tt] && (this._uniformNames.push(tt), !this._noUBO)) {
          if (Ot > 0) {
            if (et instanceof Array) throw "addUniform should not be use with Array in UBO: " + tt;
            if (this._fillAlignment(4), 16 == et) et *= Ot;
            else {
              et = et * Ot + (4 - et) * Ot
            }
            Vt = [];
            for (let tt = 0; tt < et; tt++) Vt.push(0)
          } else {
            if (et instanceof Array) Vt = et, et = Vt.length;
            else {
              Vt = [];
              for (let tt = 0; tt < et; tt++) Vt.push(0)
            }
            this._fillAlignment(et)
          }
          this._uniformSizes[tt] = et, this._uniformLocations[tt] = this._uniformLocationPointer, this._uniformLocationPointer += et;
          for (let tt = 0; tt < et; tt++) this._data.push(Vt[tt]);
          this._needSync = !0
        }
      }
      addMatrix(tt, et) {
        this.addUniform(tt, Array.prototype.slice.call(et.GOt()))
      }
      addFloat2(tt, et, Vt) {
        const Ot = [et, Vt];
        this.addUniform(tt, Ot)
      }
      addFloat3(tt, et, Vt, Ot) {
        const qt = [et, Vt, Ot];
        this.addUniform(tt, qt)
      }
      addColor3(tt, et) {
        const Vt = [et.r, et.g, et.b];
        this.addUniform(tt, Vt)
      }
      addColor4(tt, et, Vt) {
        const Ot = [et.r, et.g, et.b, Vt];
        this.addUniform(tt, Ot)
      }
      addVector3(tt, et) {
        const Vt = [et.x, et.y, et.z];
        this.addUniform(tt, Vt)
      }
      addMatrix3x3(tt) {
        this.addUniform(tt, 12)
      }
      addMatrix2x2(tt) {
        this.addUniform(tt, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const tt = [];
        let et = 0;
        for (const Vt in this._uniformLocations)
          if (tt.push(Vt), 10 === ++et) break;
        return tt.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const tt of this._ownerListsBySlot.values()) this._removeOwnerBacklink(tt);
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
      set name(tt) {
        this._name = tt
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(tt, et) {
        for (let Vt = 0; Vt < tt.length; ++Vt)
          if (tt[Vt] !== et[Vt]) return !1;
        return !0
      }
      _copyBuffer(tt, et) {
        for (let Vt = 0; Vt < tt.length; ++Vt) et[Vt] = tt[Vt]
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
      _updateOwnerKeyed(tt) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let et = this._slotByOwner.get(tt);
        if (void 0 === et && (et = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(tt, et), this._ownerCount++, tt._uniformBuffersWithOwnedSlot || (tt._uniformBuffersWithOwnedSlot = []), tt._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(et, tt._uniformBuffersWithOwnedSlot)), this._slotGeneration[et] === this._dataGeneration) return this._bufferIndex = et, this._buffer = this._buffers[et][0], this.bindUniformBuffer(), this._slotFrameId[et] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const Vt = this._buffers[et][1];
        this._slotFrameId[et] === this._currentFrameId && Vt && !this._buffersEqual(this._bufferData, Vt) && (et = this._takeFreeSlot(!1)), this._bufferIndex = et, this._buffer = this._buffers[et][0], this.bindUniformBuffer();
        const Ot = this._buffers[et][1];
        Ot && this._buffersEqual(this._bufferData, Ot) || (Ot && this._copyBuffer(this._bufferData, Ot), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[et] = this._currentFrameId, this._slotGeneration[et] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(tt) {
        for (let Vt = 0; Vt < this._freeSlots.length; ++Vt) {
          const et = this._freeSlots[Vt];
          if (this._slotFrameId[et] !== this._currentFrameId) return tt && (this._freeSlots[Vt] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), et
        }
        this._rebuild();
        const et = this._buffers.length - 1;
        return tt || this._freeSlots.push(et), et
      }
      _releaseOwnerSlot(tt) {
        const et = this._slotByOwner?.get(tt);
        if (void 0 === et) return;
        this._slotByOwner.delete(tt);
        const Vt = this._ownerListsBySlot.get(et);
        Vt && (this._removeOwnerBacklink(Vt), this._ownerListsBySlot.delete(et)), this._ownerCount--, this._freeSlots.push(et)
      }
      _removeOwnerBacklink(tt) {
        const et = tt.indexOf(this); - 1 !== et && (tt[et] = tt[tt.length - 1], tt.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(tt, et, Vt) {
        this._checkNewFrame();
        let qt = this._uniformLocations[tt];
        if (void 0 === qt) {
          if (this._buffer) return void Ot.d.Error("Cannot add an uniform after UBO has been created. uniformName=" + tt);
          this.addUniform(tt, Vt), qt = this._uniformLocations[tt]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let tt = 0; tt < Vt; tt++) this._bufferData[qt + tt] = et[tt];
          this._dataGeneration++
        } else {
          let tt = !1;
          for (let Ot = 0; Ot < Vt; Ot++)(16 === Vt && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[qt + Ot] !== Math.fround(et[Ot])) && (tt = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[qt + Ot] = et[Ot]);
          this._needSync = this._needSync || tt, tt && this._dataGeneration++
        }
      }
      updateUniformArray(tt, et, Vt) {
        this._checkNewFrame();
        const Dt = this._uniformLocations[tt];
        if (void 0 === Dt) return void Ot.d.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const mt = this._uniformArraySizes[tt];
        if (this._dynamic) {
          for (let tt = 0; tt < Vt; tt++) this._bufferData[Dt + tt] = et[tt];
          this._dataGeneration++
        } else {
          let tt = !1,
            Ot = 0,
            dt = 0;
          for (let jt = 0; jt < Vt; jt++)
            if (this._bufferData[Dt + 4 * dt + Ot] !== qt.l.FloatRound(et[jt]) && (tt = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Dt + 4 * dt + Ot] = et[jt]), Ot++, Ot === mt.strideSize) {
              for (; Ot < 4; Ot++) this._bufferData[Dt + 4 * dt + Ot] = 0;
              Ot = 0, dt++
            } this._needSync = this._needSync || tt, tt && this._dataGeneration++
        }
      }
      _cacheMatrix(tt, et) {
        this._checkNewFrame();
        const Vt = this._valueCache[tt],
          Ot = et.updateFlag;
        return (void 0 === Vt || Vt !== Ot) && (this._valueCache[tt] = Ot, !0)
      }
      _updateMatrix3x3ForUniform(tt, et) {
        for (let Vt = 0; Vt < 3; Vt++) Dt._TempBuffer[4 * Vt] = et[3 * Vt], Dt._TempBuffer[4 * Vt + 1] = et[3 * Vt + 1], Dt._TempBuffer[4 * Vt + 2] = et[3 * Vt + 2], Dt._TempBuffer[4 * Vt + 3] = 0;
        this.updateUniform(tt, Dt._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(tt, et) {
        this._currentEffect.setMatrix3x3(tt, et)
      }
      _updateMatrix2x2ForEffect(tt, et) {
        this._currentEffect.setMatrix2x2(tt, et)
      }
      _updateMatrix2x2ForUniform(tt, et) {
        for (let Vt = 0; Vt < 2; Vt++) Dt._TempBuffer[4 * Vt] = et[2 * Vt], Dt._TempBuffer[4 * Vt + 1] = et[2 * Vt + 1], Dt._TempBuffer[4 * Vt + 2] = 0, Dt._TempBuffer[4 * Vt + 3] = 0;
        this.updateUniform(tt, Dt._TempBuffer, 8)
      }
      _updateFloatForEffect(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(tt + Vt, et)
      }
      _updateFloatForUniform(tt, et) {
        Dt._TempBuffer[0] = et, this.updateUniform(tt, Dt._TempBuffer, 1)
      }
      _updateFloat2ForEffect(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(tt + Ot, et, Vt)
      }
      _updateFloat2ForUniform(tt, et, Vt) {
        Dt._TempBuffer[0] = et, Dt._TempBuffer[1] = Vt, this.updateUniform(tt, Dt._TempBuffer, 2)
      }
      _updateFloat3ForEffect(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(tt + qt, et, Vt, Ot)
      }
      _updateFloat3ForUniform(tt, et, Vt, Ot) {
        Dt._TempBuffer[0] = et, Dt._TempBuffer[1] = Vt, Dt._TempBuffer[2] = Ot, this.updateUniform(tt, Dt._TempBuffer, 3)
      }
      _updateFloat4ForEffect(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(tt + Dt, et, Vt, Ot, qt)
      }
      _updateFloat4ForUniform(tt, et, Vt, Ot, qt) {
        Dt._TempBuffer[0] = et, Dt._TempBuffer[1] = Vt, Dt._TempBuffer[2] = Ot, Dt._TempBuffer[3] = qt, this.updateUniform(tt, Dt._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[tt]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(tt + Vt, et);
            break;
          case 3:
            this._currentEffect.setFloatArray3(tt + Vt, et);
            break;
          case 4:
            this._currentEffect.setFloatArray4(tt + Vt, et);
            break;
          default:
            this._currentEffect.setFloatArray(tt + Vt, et)
        }
      }
      _updateFloatArrayForUniform(tt, et) {
        this.updateUniformArray(tt, et, et.length)
      }
      _updateArrayForEffect(tt, et) {
        this._currentEffect.setArray(tt, et)
      }
      _updateArrayForUniform(tt, et) {
        this.updateUniformArray(tt, et, et.length)
      }
      _updateIntArrayForEffect(tt, et) {
        this._currentEffect.setIntArray(tt, et)
      }
      _updateIntArrayForUniform(tt, et) {
        Dt._TempBufferInt32View.set(et), this.updateUniformArray(tt, Dt._TempBuffer, et.length)
      }
      _updateUIntArrayForEffect(tt, et) {
        this._currentEffect.setUIntArray(tt, et)
      }
      _updateUIntArrayForUniform(tt, et) {
        Dt._TempBufferUInt32View.set(et), this.updateUniformArray(tt, Dt._TempBuffer, et.length)
      }
      _updateMatrixForEffect(tt, et) {
        this._currentEffect.setMatrix(tt, et)
      }
      _updateMatrixForUniform(tt, et) {
        this._cacheMatrix(tt, et) && this.updateUniform(tt, et.GOt(), 16)
      }
      _updateMatricesForEffect(tt, et) {
        this._currentEffect.setMatrices(tt, et)
      }
      _updateMatricesForUniform(tt, et) {
        this.updateUniform(tt, et, et.length)
      }
      _updateVector3ForEffect(tt, et) {
        this._currentEffect.setVector3(tt, et)
      }
      _updateVector3ForUniform(tt, et) {
        Dt._TempBuffer[0] = et.x, Dt._TempBuffer[1] = et.y, Dt._TempBuffer[2] = et.z, this.updateUniform(tt, Dt._TempBuffer, 3)
      }
      _updateVector4ForEffect(tt, et) {
        this._currentEffect.setVector4(tt, et)
      }
      _updateVector4ForUniform(tt, et) {
        Dt._TempBuffer[0] = et.x, Dt._TempBuffer[1] = et.y, Dt._TempBuffer[2] = et.z, Dt._TempBuffer[3] = et.w, this.updateUniform(tt, Dt._TempBuffer, 4)
      }
      _updateColor3ForEffect(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(tt + Vt, et)
      }
      _updateColor3ForUniform(tt, et) {
        Dt._TempBuffer[0] = et.r, Dt._TempBuffer[1] = et.g, Dt._TempBuffer[2] = et.b, this.updateUniform(tt, Dt._TempBuffer, 3)
      }
      _updateColor4ForEffect(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(tt + Ot, et, Vt)
      }
      _updateDirectColor4ForEffect(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(tt + Vt, et)
      }
      _updateColor4ForUniform(tt, et, Vt) {
        Dt._TempBuffer[0] = et.r, Dt._TempBuffer[1] = et.g, Dt._TempBuffer[2] = et.b, Dt._TempBuffer[3] = Vt, this.updateUniform(tt, Dt._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(tt, et) {
        Dt._TempBuffer[0] = et.r, Dt._TempBuffer[1] = et.g, Dt._TempBuffer[2] = et.b, Dt._TempBuffer[3] = et.a, this.updateUniform(tt, Dt._TempBuffer, 4)
      }
      _updateIntForEffect(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(tt + Vt, et)
      }
      _updateIntForUniform(tt, et) {
        Dt._TempBufferInt32View[0] = et, this.updateUniform(tt, Dt._TempBuffer, 1)
      }
      _updateInt2ForEffect(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(tt + Ot, et, Vt)
      }
      _updateInt2ForUniform(tt, et, Vt) {
        Dt._TempBufferInt32View[0] = et, Dt._TempBufferInt32View[1] = Vt, this.updateUniform(tt, Dt._TempBuffer, 2)
      }
      _updateInt3ForEffect(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(tt + qt, et, Vt, Ot)
      }
      _updateInt3ForUniform(tt, et, Vt, Ot) {
        Dt._TempBufferInt32View[0] = et, Dt._TempBufferInt32View[1] = Vt, Dt._TempBufferInt32View[2] = Ot, this.updateUniform(tt, Dt._TempBuffer, 3)
      }
      _updateInt4ForEffect(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(tt + Dt, et, Vt, Ot, qt)
      }
      _updateInt4ForUniform(tt, et, Vt, Ot, qt) {
        Dt._TempBufferInt32View[0] = et, Dt._TempBufferInt32View[1] = Vt, Dt._TempBufferInt32View[2] = Ot, Dt._TempBufferInt32View[3] = qt, this.updateUniform(tt, Dt._TempBuffer, 4)
      }
      _updateUIntForEffect(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(tt + Vt, et)
      }
      _updateUIntForUniform(tt, et) {
        Dt._TempBufferUInt32View[0] = et, this.updateUniform(tt, Dt._TempBuffer, 1)
      }
      _updateUInt2ForEffect(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(tt + Ot, et, Vt)
      }
      _updateUInt2ForUniform(tt, et, Vt) {
        Dt._TempBufferUInt32View[0] = et, Dt._TempBufferUInt32View[1] = Vt, this.updateUniform(tt, Dt._TempBuffer, 2)
      }
      _updateUInt3ForEffect(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(tt + qt, et, Vt, Ot)
      }
      _updateUInt3ForUniform(tt, et, Vt, Ot) {
        Dt._TempBufferUInt32View[0] = et, Dt._TempBufferUInt32View[1] = Vt, Dt._TempBufferUInt32View[2] = Ot, this.updateUniform(tt, Dt._TempBuffer, 3)
      }
      _updateUInt4ForEffect(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(tt + Dt, et, Vt, Ot, qt)
      }
      _updateUInt4ForUniform(tt, et, Vt, Ot, qt) {
        Dt._TempBufferUInt32View[0] = et, Dt._TempBufferUInt32View[1] = Vt, Dt._TempBufferUInt32View[2] = Ot, Dt._TempBufferUInt32View[3] = qt, this.updateUniform(tt, Dt._TempBuffer, 4)
      }
      setTexture(tt, et) {
        this._currentEffect.setTexture(tt, et)
      }
      setTextureArray(tt, et) {
        this._currentEffect.setTextureArray(tt, et)
      }
      bindTexture(tt, et) {
        this._currentEffect._bindTexture(tt, et)
      }
      updateUniformDirectly(tt, et) {
        this.updateUniform(tt, et, et.length), this.update()
      }
      bindToEffect(tt, et) {
        this._currentEffect = tt, this._currentEffectName = et
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(tt) {
        if (!this._buffers) return this._buffer === tt;
        for (let et = 0; et < this._buffers.length; ++et) {
          if (this._buffers[et][0] === tt) return this._bufferIndex = et, this._buffer = tt, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[et][1] && (this._bufferData.set(this._buffers[et][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(tt) {
        return void 0 !== this._uniformLocations[tt]
      }
      dispose() {
        if (this._noUBO) return;
        const tt = this._engine._uniformBuffers,
          et = tt.indexOf(this);
        if (-1 !== et && (tt[et] = tt[tt.length - 1], tt.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let tt = 0; tt < this._buffers.length; ++tt) {
            const et = this._buffers[tt][0];
            this._engine._releaseBuffer(et)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    Dt._MAX_UNIFORM_SIZE = 256, Dt._TempBuffer = new Float32Array(Dt._MAX_UNIFORM_SIZE), Dt._TempBufferInt32View = new Int32Array(Dt._TempBuffer.buffer), Dt._TempBufferUInt32View = new Uint32Array(Dt._TempBuffer.buffer)
  },
  40119: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    var Ot = Vt(40125);
    class qt extends Ot.b {
      constructor(tt) {
        super(), this._buffer = tt
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  40215: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => jt,
      e: () => Ht
    });
    const Ot = "__bjs_serializable__",
      qt = new WeakMap;

    function Dt(tt, et) {
      return Object.prototype.hasOwnProperty.call(tt, et)
    }
    const mt = function() {
      let tt = Symbol.metadata;
      return tt || (tt = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: tt
      })), tt
    }();

    function dt(tt) {
      return "function" === typeof tt ? tt : tt?.constructor
    }

    function jt(tt) {
      if (!tt) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(mt)}) polyfill must run before decorated classes are evaluated.`);
      return Dt(tt, Ot) || (tt[Ot] = {}), tt[Ot]
    }

    function Ht(tt) {
      const et = dt(tt),
        Vt = et ? et[mt] : void 0;
      if (!Vt) return {};
      const jt = qt.get(Vt);
      if (jt) return jt;
      const Ht = {},
        Xt = [];
      let Qt = Vt;
      for (; Qt;) Xt.push(Qt), Qt = Object.getPrototypeOf(Qt);
      for (const qt of Xt)
        if (Dt(qt, Ot)) {
          const tt = qt[Ot];
          for (const et in tt) Ht[et] = tt[et]
        } return qt.set(Vt, Ht), Ht
    }
  },
  40213: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => lt,
      C: () => wt,
      E: () => dt,
      I: () => Xt,
      M: () => Qt,
      P: () => mt,
      e: () => bt,
      i: () => Dt,
      l: () => Mt,
      p: () => Et,
      t: () => jt,
      x: () => ft,
      y: () => Ht,
      z: () => yt
    });
    var Ot = Vt(40215);

    function qt(tt, et) {
      return (Vt, qt) => {
        if (!qt.metadata) return;
        const Dt = String(qt.name),
          mt = (0, Ot.c)(qt.metadata);
        mt[Dt] || (mt[Dt] = {
          type: tt,
          sourceName: et
        })
      }
    }

    function Dt(tt) {
      return function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (Vt, Ot) => {
          const qt = et || "_" + String(Ot.name);
          return {
            init(tt) {
              return void 0 === tt && qt in this || (this[qt] = tt), tt
            },
            get() {
              return this[qt]
            },
            set(et) {
              "function" === typeof this[qt]?.equals && this[qt].equals(et) || this[qt] !== et && (this[qt] = et, this[tt]())
            }
          }
        }
      }(tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function mt(tt) {
      return qt(0, tt)
    }

    function dt(tt) {
      return qt(1, tt)
    }

    function jt(tt) {
      return qt(2, tt)
    }

    function Ht(tt) {
      return qt(3, tt)
    }

    function Xt(tt) {
      return qt(4, tt)
    }

    function Qt(tt) {
      return qt(5, tt)
    }

    function lt(tt) {
      return qt(6, tt)
    }

    function Et(tt) {
      return qt(7, tt)
    }

    function ft(tt) {
      return qt(8, tt)
    }

    function wt(tt) {
      return qt(10, tt)
    }

    function yt(tt) {
      return qt(12, tt)
    }

    function Nt(tt, et, Vt) {
      const Ot = String(et.name);
      let qt = null;
      const Dt = function() {
        if (null === qt) {
          qt = tt, "undefined" !== typeof _native && _native[Ot] && (qt = Vt(_native[Ot], tt));
          const mt = this && (et.static ? this : Object.getPrototypeOf(this));
          mt?.[Ot] === Dt && (mt[Ot] = qt)
        }
        for (var mt = arguments.length, dt = new Array(mt), jt = 0; jt < mt; jt++) dt[jt] = arguments[jt];
        return qt.apply(this, dt)
      };
      return Dt
    }

    function Mt(tt, et) {
      return Nt(tt, et, (tt => tt))
    }

    function bt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (Vt, Ot) => {
        const qt = et || "_" + String(Ot.name);
        return {
          get() {
            return this[qt]?.value
          },
          set(et) {
            "function" === typeof this[qt]?.value?.equals && this[qt].value.equals(et) || this[qt].value !== et && (this[qt].value = et, this[tt]())
          }
        }
      }
    }
    Mt.filter = function(tt) {
      return (et, Vt) => Nt(et, Vt, ((et, Vt) => function() {
        for (var Ot = arguments.length, qt = new Array(Ot), Dt = 0; Dt < Ot; Dt++) qt[Dt] = arguments[Dt];
        return tt(...qt) ? et(...qt) : Vt.apply(this, qt)
      }))
    }
  },
  40230: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ht
    });
    var Ot = Vt(40080),
      qt = Vt(40239),
      Dt = Vt(37513),
      mt = Vt(37336),
      dt = Vt(40215);
    const jt = function(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Dt = tt();
      qt.d && qt.d.HasTags(et) && qt.d.AddTagsTo(Dt, qt.d.GetTags(et, !0));
      const mt = (0, dt.e)(Dt),
        jt = {};
      for (const qt in mt) {
        const tt = mt[qt],
          dt = et[qt],
          Xt = tt.type;
        if (void 0 !== dt && null !== dt && ("uniqueId" !== qt || Ht.AllowLoadingUniqueId)) switch (Xt) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof dt.slice ? Dt[qt] = dt.slice() : Dt[qt] = dt;
            break;
          case 1:
            Ot.cloneTexturesOnlyOnce && jt[dt.uniqueId] ? Dt[qt] = jt[dt.uniqueId] : (Dt[qt] = Vt || dt.isRenderTarget ? dt : dt.clone(), jt[dt.uniqueId] = Dt[qt]);
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
            Dt[qt] = Vt ? dt : dt.clone()
        }
      }
      return Dt
    };
    class Ht {
      static AppendSerializedAnimations(tt, et) {
        if (tt.animations) {
          et.animations = [];
          for (let Vt = 0; Vt < tt.animations.length; Vt++) {
            const Ot = tt.animations[Vt];
            et.animations.push(Ot.serialize())
          }
        }
      }
      static Serialize(tt, et) {
        et || (et = {}), qt.d && (et.tags = qt.d.GetTags(tt));
        const Vt = (0, dt.e)(tt);
        for (const Ot in Vt) {
          const qt = Vt[Ot],
            Dt = qt.sourceName || Ot,
            mt = qt.type,
            dt = tt[Ot];
          if (void 0 !== dt && null !== dt && ("uniqueId" !== Ot || Ht.AllowLoadingUniqueId)) switch (mt) {
            case 0:
              Array.isArray(dt) ? et[Dt] = dt.slice() : et[Dt] = dt;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              et[Dt] = dt.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              et[Dt] = dt.GOt();
              break;
            case 6:
            case 11:
              et[Dt] = dt.id
          }
        }
        return et
      }
      static ParseProperties(tt, et, Vt, Ot) {
        Ot || (Ot = "");
        const qt = (0, dt.e)(et);
        for (const dt in qt) {
          const jt = qt[dt],
            Xt = tt[jt.sourceName || dt],
            Qt = jt.type;
          if (void 0 !== Xt && null !== Xt && ("uniqueId" !== dt || Ht.AllowLoadingUniqueId)) {
            const tt = et;
            switch (Qt) {
              case 0:
                tt[dt] = Xt;
                break;
              case 1:
                Vt && (tt[dt] = Ht._TextureParser(Xt, Vt, Ot));
                break;
              case 2:
                tt[dt] = Dt.b.FromArray(Xt);
                break;
              case 3:
                tt[dt] = Ht._FresnelParametersParser(Xt);
                break;
              case 4:
                tt[dt] = mt.m.FromArray(Xt);
                break;
              case 5:
                tt[dt] = mt.n.FromArray(Xt);
                break;
              case 6:
                Vt && (tt[dt] = Vt.getLastMeshById(Xt));
                break;
              case 7:
                tt[dt] = Ht._ColorCurvesParser(Xt);
                break;
              case 8:
                tt[dt] = Dt.c.FromArray(Xt);
                break;
              case 9:
                tt[dt] = Ht._ImageProcessingConfigurationParser(Xt);
                break;
              case 10:
                tt[dt] = mt.e.FromArray(Xt);
                break;
              case 11:
                Vt && (tt[dt] = Vt.getCameraById(Xt));
                break;
              case 12:
                tt[dt] = mt.c.FromArray(Xt);
                break;
              case 13:
                tt[dt] = mt.r.FromArray(Xt)
            }
          }
        }
      }
      static Parse(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Dt = tt();
        return qt.d && qt.d.AddTagsTo(Dt, et.tags), Ht.ParseProperties(et, Dt, Vt, Ot), Dt
      }
      static Clone(tt, et) {
        return jt(tt, et, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(tt, et) {
        return jt(tt, et, !0)
      }
    }
    Ht.AllowLoadingUniqueId = !1, Ht._ImageProcessingConfigurationParser = tt => {
      throw (0, Ot.e)("ImageProcessingConfiguration")
    }, Ht._FresnelParametersParser = tt => {
      throw (0, Ot.e)("FresnelParameters")
    }, Ht._ColorCurvesParser = tt => {
      throw (0, Ot.e)("ColorCurves")
    }, Ht._TextureParser = (tt, et, Vt) => {
      throw (0, Ot.e)("Texture")
    }
  },
  40155: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    var Ot = Vt(40098);
    class qt {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = qt.Enabled, this._lastSecValueCount++
      }
      addCount(tt, et) {
        qt.Enabled && (this._current += tt, this._hasCurrentValue = !0, et && this._fetchResult())
      }
      beginMonitoring() {
        qt.Enabled && (this._startMonitoringTime = Ot.b.Now)
      }
      endMonitoring() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!qt.Enabled) return;
        tt && this.fetchNewFrame();
        const et = Ot.b.Now;
        this._current = et - this._startMonitoringTime, this._hasCurrentValue = !0, tt && this._fetchResult()
      }
      yJ() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const tt = Ot.b.Now;
        tt - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = tt, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    qt.Enabled = !0
  },
  40311: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt,
      g: () => Ot
    });
    class Ot {
      constructor(tt) {
        this.length = 0, this.data = new Array(tt), this._id = Ot._GlobalId++
      }
      push(tt) {
        this.data[this.length++] = tt, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(tt) {
        for (let et = 0; et < this.length; et++) tt(this.data[et])
      }
      sort(tt) {
        this.data.sort(tt)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(tt) {
        if (0 !== tt.length) {
          this.length + tt.length > this.data.length && (this.data.length = 2 * (this.length + tt.length));
          for (let et = 0; et < tt.length; et++) this.data[this.length++] = (tt.data || tt)[et]
        }
      }
      indexOf(tt) {
        const et = this.data.indexOf(tt);
        return et >= this.length ? -1 : et
      }
      contains(tt) {
        return -1 !== this.indexOf(tt)
      }
    }
    Ot._GlobalId = 0;
    class qt extends Ot {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(tt) {
        super.push(tt), tt.__smartArrayFlags || (tt.__smartArrayFlags = {}), tt.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(tt) {
        return (!tt.__smartArrayFlags || tt.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(tt), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(tt) {
        if (0 !== tt.length) {
          this.length + tt.length > this.data.length && (this.data.length = 2 * (this.length + tt.length));
          for (let et = 0; et < tt.length; et++) {
            const Vt = (tt.data || tt)[et];
            this.pushNoDuplicate(Vt)
          }
        }
      }
    }
  },
  40239: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt
    });
    class Ot {
      static Eval(tt, et) {
        return "true" === (tt = tt.match(/\([^()]*\)/g) ? tt.replace(/\([^()]*\)/g, (tt => (tt = tt.slice(1, tt.length - 1), Ot._HandleParenthesisContent(tt, et)))) : Ot._HandleParenthesisContent(tt, et)) || "false" !== tt && Ot.Eval(tt, et)
      }
      static _HandleParenthesisContent(tt, et) {
        let Vt;
        et = et || (tt => "true" === tt);
        const qt = tt.split("||");
        for (const Dt in qt)
          if (Object.prototype.hasOwnProperty.call(qt, Dt)) {
            let tt = Ot._SimplifyNegation(qt[Dt].trim());
            const mt = tt.split("&&");
            if (mt.length > 1)
              for (let qt = 0; qt < mt.length; ++qt) {
                const Dt = Ot._SimplifyNegation(mt[qt].trim());
                if (Vt = "true" !== Dt && "false" !== Dt ? "!" === Dt[0] ? !et(Dt.substring(1)) : et(Dt) : "true" === Dt, !Vt) {
                  tt = "false";
                  break
                }
              }
            if (Vt || "true" === tt) {
              Vt = !0;
              break
            }
            Vt = "true" !== tt && "false" !== tt ? "!" === tt[0] ? !et(tt.substring(1)) : et(tt) : "true" === tt
          } return Vt ? "true" : "false"
      }
      static _SimplifyNegation(tt) {
        return "!true" === (tt = (tt = tt.replace(/^[\s!]+/, (tt => (tt = tt.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? tt = "false" : "!false" === tt && (tt = "true"), tt
      }
    }
    class qt {
      static EnableFor(tt) {
        tt._tags = tt._tags || {}, tt.hasTags = () => qt.HasTags(tt), tt.addTags = et => qt.AddTagsTo(tt, et), tt.removeTags = et => qt.RemoveTagsFrom(tt, et), tt.matchesTagsQuery = et => qt.MatchesQuery(tt, et)
      }
      static DisableFor(tt) {
        delete tt._tags, delete tt.hasTags, delete tt.addTags, delete tt.removeTags, delete tt.matchesTagsQuery
      }
      static HasTags(tt) {
        if (!tt._tags) return !1;
        const et = tt._tags;
        for (const Vt in et)
          if (Object.prototype.hasOwnProperty.call(et, Vt)) return !0;
        return !1
      }
      static GetTags(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!tt._tags) return null;
        if (et) {
          const et = [];
          for (const Vt in tt._tags) Object.prototype.hasOwnProperty.call(tt._tags, Vt) && !0 === tt._tags[Vt] && et.push(Vt);
          return et.join(" ")
        }
        return tt._tags
      }
      static AddTagsTo(tt, et) {
        if (!et) return;
        if ("string" !== typeof et) return;
        const Vt = et.split(" ");
        for (const Ot of Vt) qt._AddTagTo(tt, Ot)
      }
      static _AddTagTo(tt, et) {
        "" !== (et = et.trim()) && "true" !== et && "false" !== et && (et.match(/[\s]/) || et.match(/^([!]|([|]|[&]){2})/) || (qt.EnableFor(tt), tt._tags[et] = !0))
      }
      static RemoveTagsFrom(tt, et) {
        if (!qt.HasTags(tt)) return;
        const Vt = et.split(" ");
        for (const Ot in Vt) qt._RemoveTagFrom(tt, Vt[Ot])
      }
      static _RemoveTagFrom(tt, et) {
        delete tt._tags[et]
      }
      static MatchesQuery(tt, et) {
        return void 0 === et || ("" === et ? qt.HasTags(tt) : Ot.Eval(et, (et => qt.HasTags(tt) && tt._tags[et])))
      }
    }
  },
  40348: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt
    });
    var Ot = Vt(40343),
      qt = Vt(37367);
    class Dt {
      constructor(tt) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new qt.c, this._scene = tt
      }
      _prepareBuffers() {
        if (this._vertexBuffers[Ot.m.PositionKind]) return;
        const tt = [];
        tt.push(1, 1), tt.push(-1, 1), tt.push(-1, -1), tt.push(1, -1), this._vertexBuffers[Ot.m.PositionKind] = new Ot.m(this._scene.Jf(), tt, Ot.m.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const tt = [];
        tt.push(0), tt.push(1), tt.push(2), tt.push(0), tt.push(2), tt.push(3), this._indexBuffer = this._scene.Jf().createIndexBuffer(tt)
      }
      _getActivePostProcesses(tt) {
        const et = this._activePostProcesses;
        et.length = 0;
        for (let Vt = 0; Vt < tt.length; Vt++) {
          const Ot = tt[Vt];
          Ot && et.push(Ot)
        }
        return et
      }
      _rebuild() {
        const tt = this._vertexBuffers[Ot.m.PositionKind];
        tt && (tt._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Vt = this._scene.activeCamera;
        return !!Vt && (et = et || this._getActivePostProcesses(Vt._postProcesses), !(!et || 0 === et.length || !this._scene.postProcessesEnabled) && (et[0].activate(Vt, tt, null !== et && void 0 !== et), !0))
      }
      directRender(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          mt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : tt.length;
        const dt = this._scene.Jf();
        for (let jt = 0; jt < mt; jt++) {
          jt < tt.length - 1 ? tt[jt + 1].activate(this._scene.activeCamera || this._scene, et?.texture) : (et ? dt.bindFramebuffer(et, Ot, void 0, void 0, Vt, qt) : Dt || dt.restoreDefaultFramebuffer(), dt._debugInsertMarker?.(`post process ${tt[jt].name} output`));
          const mt = tt[jt],
            Ht = mt.apply();
          Ht && (mt.onBeforeRenderObservable.notifyObservers(Ht), this._prepareBuffers(), dt.bindBuffers(this._vertexBuffers, this._indexBuffer, Ht), dt.drawElementsType(0, 0, 6), mt.onAfterRenderObservable.notifyObservers(Ht))
        }
        dt.setDepthBuffer(!0), dt.setDepthWrite(!0)
      }
      _finalizeFrame(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Dt = this._scene.activeCamera;
        if (!Dt) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (Ot = Ot || this._getActivePostProcesses(Dt._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const mt = this._scene.Jf();
        for (let dt = 0, jt = Ot.length; dt < jt; dt++) {
          const Ht = Ot[dt];
          if (dt < jt - 1 ? Ht._outputTexture = Ot[dt + 1].activate(Dt, et?.texture) : (et ? (mt.bindFramebuffer(et, Vt, void 0, void 0, qt), Ht._outputTexture = et) : (mt.restoreDefaultFramebuffer(), Ht._outputTexture = null), mt._debugInsertMarker?.(`post process ${Ot[dt].name} output`)), tt) break;
          const Xt = Ht.apply();
          Xt && (Ht.onBeforeRenderObservable.notifyObservers(Xt), this._prepareBuffers(), mt.bindBuffers(this._vertexBuffers, this._indexBuffer, Xt), mt.drawElementsType(0, 0, 6), Ht.onAfterRenderObservable.notifyObservers(Xt))
        }
        mt.setDepthBuffer(!0), mt.setDepthWrite(!0), mt.setAlphaMode(0)
      }
      dispose() {
        const tt = this._vertexBuffers[Ot.m.PositionKind];
        tt && (tt.dispose(), this._vertexBuffers[Ot.m.PositionKind] = null), this._indexBuffer && (this._scene.Jf()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  40359: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ht
    });
    var Ot = Vt(40311),
      qt = Vt(37336);
    const Dt = [],
      mt = [];
    let dt = !1;

    function jt(tt, et) {
      for (; tt.length < et;) tt.push(void 0)
    }
    class Ht {
      set opaqueSortCompareFn(tt) {
        this._opaqueSortCompareFn = tt || Ht.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(tt) {
        this._alphaTestSortCompareFn = tt || Ht.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(tt) {
        this._transparentSortCompareFn = tt || Ht.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = tt, this._opaqueSubMeshes = new Ot.g(256), this._transparentSubMeshes = new Ot.g(256), this._alphaTestSubMeshes = new Ot.g(256), this._depthOnlySubMeshes = new Ot.g(256), this._particleSystems = new Ot.g(256), this._spriteManagers = new Ot.g(256), this._empty = !0, this._edgesRenderers = new Ot.d(16), this.disableDepthPrePass = !1, this._scene = et, this.opaqueSortCompareFn = Vt, this.alphaTestSortCompareFn = qt, this.transparentSortCompareFn = Dt
      }
      render(tt, et, Vt, Ot) {
        let qt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Dt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mt = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          dt = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          jt = arguments.length > 8 ? arguments[8] : void 0;
        if (tt) return void tt(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const Ht = this._scene.Jf();
        qt && 0 !== this._depthOnlySubMeshes.length && (Ht.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), Ht.setColorWrite(!0)), Dt && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), mt && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const Xt = Ht.getStencilBuffer();
        if (Ht.setStencilBuffer(!1), et && this._renderSprites(), Vt && this._renderParticles(Ot), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), dt && (jt || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (Ht.setStencilBuffer(Xt), jt) jt(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const tt = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            tt.length && this._renderTransparent(tt)
          } else this._renderTransparent(this._transparentSubMeshes);
          Ht.setAlphaMode(0)
        }
        if (Ht.setStencilBuffer(!1), Dt && this._edgesRenderers.length) {
          for (let tt = 0; tt < this._edgesRenderers.length; tt++) this._edgesRenderers.data[tt].render();
          Ht.setAlphaMode(0)
        }
        Ht.setStencilBuffer(Xt)
      }
      _renderOpaqueSorted(tt) {
        Ht._RenderSorted(tt, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(tt) {
        Ht._RenderSorted(tt, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(tt) {
        Ht._RenderSorted(tt, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(tt, et, Vt, Ot, Dt) {
        let Xt, Qt = 0;
        const lt = Vt ? Vt.globalPosition : Ht._ZeroVector;
        if (Ot && et !== Ht.PainterSortCompare)
          for (; Qt < tt.length; Qt++) Xt = tt.data[Qt], Xt._alphaIndex = Xt.getMesh().alphaIndex, Xt._distanceToCamera = qt.n.Distance(Xt.fL().jqt.centerWorld, lt);
        const Et = tt.length;
        let ft = tt.data;
        const wt = Et !== ft.length && !dt;
        if (wt) {
          for (dt = !0, jt(mt, Et), Qt = 0; Qt < Et; Qt++) mt[Qt] = ft[Qt];
          ft = mt
        } else Et !== ft.length && (ft = ft.slice(0, Et));
        try {
          et && Ht._StableSort(ft, Et, et), Ht._DrawSorted(ft, Et, Ot, Dt)
        } finally {
          wt && (mt.fill(void 0, 0, Et), dt = !1)
        }
      }
      static _DrawSorted(tt, et, Vt, Ot) {
        let qt;
        const Dt = tt[0].getMesh().vI();
        for (let mt = 0; mt < et; mt++) {
          if (qt = tt[mt], Dt._activeMeshesFrozenButKeepClipping && !qt.isInFrustum(Dt._frustumPlanes)) continue;
          let et = !1;
          if (Vt) {
            const tt = qt.vf();
            if (tt && tt.needDepthPrePass && !Ot) {
              et = !0;
              const Vt = tt.vI().Jf();
              Vt.setColorWrite(!1), Vt.setAlphaMode(0), qt.render(!1), Vt.setColorWrite(!0)
            }
          }
          const dt = qt._renderingMesh;
          !et && dt._renderRunFollower(qt, Vt) || qt.render(Vt)
        }
      }
      static _StableSort(tt, et, Vt) {
        for (let Ot = 0; Ot < et; Ot += 16) {
          const qt = Math.min(Ot + 16, et);
          for (let et = Ot + 1; et < qt; et++) {
            const qt = tt[et];
            let Dt = Ot,
              mt = et;
            for (; Dt < mt;) {
              const et = Dt + mt >>> 1;
              Vt(qt, tt[et]) < 0 ? mt = et : Dt = et + 1
            }
            for (let Vt = et; Vt > Dt; Vt--) tt[Vt] = tt[Vt - 1];
            tt[Dt] = qt
          }
        }
        if (!(et <= 16)) {
          jt(Dt, et);
          try {
            let Ot = tt,
              qt = Dt;
            for (let tt = 16; tt < et; tt *= 2) {
              for (let mt = 0; mt < et; mt += 2 * tt) {
                const Dt = Math.min(mt + tt, et),
                  dt = Math.min(mt + 2 * tt, et);
                let jt = mt,
                  Ht = Dt,
                  Xt = mt;
                if (Dt < dt && Vt(Ot[Dt], Ot[Dt - 1]) < 0)
                  for (; jt < Dt && Ht < dt;) qt[Xt++] = Vt(Ot[Ht], Ot[jt]) < 0 ? Ot[Ht++] : Ot[jt++];
                for (; jt < Dt;) qt[Xt++] = Ot[jt++];
                for (; Ht < dt;) qt[Xt++] = Ot[Ht++]
              }
              const Dt = qt;
              qt = Ot, Ot = Dt
            }
            if (Ot !== tt)
              for (let Vt = 0; Vt < et; Vt++) tt[Vt] = Ot[Vt]
          } finally {
            Dt.fill(void 0, 0, et)
          }
        }
      }
      static defaultTransparentSortCompare(tt, et) {
        return tt._alphaIndex > et._alphaIndex ? 1 : tt._alphaIndex < et._alphaIndex ? -1 : Ht.backToFrontSortCompare(tt, et)
      }
      static backToFrontSortCompare(tt, et) {
        return tt._distanceToCamera < et._distanceToCamera ? 1 : tt._distanceToCamera > et._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(tt, et) {
        return tt._distanceToCamera < et._distanceToCamera ? -1 : tt._distanceToCamera > et._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(tt, et) {
        const Vt = tt.getMesh(),
          Ot = et.getMesh();
        return Vt.material && Ot.material ? Vt.material.uniqueId - Ot.material.uniqueId : Vt.uniqueId - Ot.uniqueId
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
      dispatch(tt, et, Vt) {
        void 0 === et && (et = tt.getMesh()), void 0 === Vt && (Vt = tt.vf()), null !== Vt && void 0 !== Vt && (Vt.needAlphaBlendingForMesh(et) ? this._transparentSubMeshes.push(tt) : Vt.needAlphaTestingForMesh(et) ? (Vt.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(tt), this._alphaTestSubMeshes.push(tt)) : (Vt.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(tt), this._opaqueSubMeshes.push(tt)), et._renderingGroup = this, et._edgesRenderer && et.isEnabled() && et.isVisible && et._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(et._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(tt) {
        this._spriteManagers.push(tt), this._empty = !1
      }
      dispatchParticles(tt) {
        this._particleSystems.push(tt), this._empty = !1
      }
      _renderParticles(tt) {
        if (0 === this._particleSystems.length) return;
        const et = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let Vt = 0; Vt < this._particleSystems.length; Vt++) {
          const Ot = this._particleSystems.data[Vt];
          if (0 === (et && et.layerMask & Ot.layerMask)) continue;
          const qt = Ot.emitter;
          qt.position && tt && -1 === tt.indexOf(qt) || this._scene._activeParticles.addCount(Ot.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const tt = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let et = 0; et < this._spriteManagers.length; et++) {
          const Vt = this._spriteManagers.data[et];
          0 !== (tt && tt.layerMask & Vt.layerMask) && Vt.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    Ht._ZeroVector = qt.n.Zero()
  },
  40357: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt
    });
    var Ot = Vt(40359);
    class qt {}
    class Dt {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(tt) {
        this._disableDepthPrePass = tt;
        for (const et of this._renderingGroups) et.disableDepthPrePass = tt
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(tt) {
        tt !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = tt, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const tt of this._scene.meshes)
          if (tt.vJ)
            for (const et of tt.vJ) et._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const tt of this._scene.spriteManagers) tt._wasDispatched = !1;
        for (const tt of this._scene.PJ) tt._wasDispatched = !1
      }
      constructor(tt) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new qt, this._maintainStateBetweenFrames = !1, this._scene = tt;
        for (let et = Dt.MIN_RENDERINGGROUPS; et < Dt.MAX_RENDERINGGROUPS; et++) this._autoClearDepthStencil[et] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(tt) {
        const et = tt || 0;
        return this._prepareRenderingGroup(et), this._renderingGroups[et]
      }
      _clearDepthStencilBuffer() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.Jf().clear(null, !1, tt, et), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(tt, et, Vt, Ot) {
        let qt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          mt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          dt = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          jt = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Ht = arguments.length > 8 ? arguments[8] : void 0,
          Xt = arguments.length > 9 ? arguments[9] : void 0;
        const Qt = this._renderingGroupInfo;
        Qt.Fw = this._scene, Qt.camera = this._scene.activeCamera, Qt.renderingManager = this;
        const lt = Xt ?? this._scene.spriteManagers;
        if (lt && Ot)
          for (let Dt = 0; Dt < lt.length; Dt++) {
            const tt = lt[Dt];
            this.dispatchSprites(tt)
          }
        for (let Et = Dt.MIN_RENDERINGGROUPS; Et < Dt.MAX_RENDERINGGROUPS; Et++) {
          this._depthStencilBufferAlreadyCleaned = Et === Dt.MIN_RENDERINGGROUPS;
          const Xt = this._renderingGroups[Et];
          if (!Xt || Xt._empty) continue;
          const lt = 1 << Et;
          if (Qt.renderingGroupId = Et, this._scene.onBeforeRenderingGroupObservable.notifyObservers(Qt, lt), Dt.AUTOCLEAR) {
            const tt = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(Et) : this._autoClearDepthStencil[Et];
            tt && tt.autoClear && this._clearDepthStencilBuffer(tt.depth, tt.stencil)
          }
          for (let tt = 0, et = this._scene._beforeRenderingGroupDrawStage; tt < et.length; tt++) {
            et[tt].action(Et)
          }
          Xt.render(tt, Ot, Vt, et, qt, mt, dt, jt, Ht);
          for (let tt = 0, et = this._scene._afterRenderingGroupDrawStage; tt < et.length; tt++) {
            et[tt].action(Et)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(Qt, lt)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let tt = Dt.MIN_RENDERINGGROUPS; tt < Dt.MAX_RENDERINGGROUPS; tt++) {
            const et = this._renderingGroups[tt];
            et && et.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let tt = Dt.MIN_RENDERINGGROUPS; tt < Dt.MAX_RENDERINGGROUPS; tt++) {
            const et = this._renderingGroups[tt];
            et && et.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let tt = Dt.MIN_RENDERINGGROUPS; tt < Dt.MAX_RENDERINGGROUPS; tt++) {
          const et = this._renderingGroups[tt];
          et && et.dispose()
        }
      }
      _prepareRenderingGroup(tt) {
        void 0 === this._renderingGroups[tt] && (this._renderingGroups[tt] = new Ot.d(tt, this._scene, this._customOpaqueSortCompareFn[tt], this._customAlphaTestSortCompareFn[tt], this._customTransparentSortCompareFn[tt]), this._renderingGroups[tt].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(tt) {
        this.maintainStateBetweenFrames && tt._wasDispatched || (tt._wasDispatched = !0, this.getRenderingGroup(tt.renderingGroupId).dispatchSprites(tt))
      }
      dispatchParticles(tt) {
        this.maintainStateBetweenFrames && tt._wasDispatched || (tt._wasDispatched = !0, this.getRenderingGroup(tt.renderingGroupId).dispatchParticles(tt))
      }
      dispatch(tt, et, Vt) {
        void 0 === et && (et = tt.getMesh()), this.maintainStateBetweenFrames && tt._wasDispatched || (tt._wasDispatched = !0, this.getRenderingGroup(et.renderingGroupId).dispatch(tt, et, Vt))
      }
      setRenderingOrder(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[tt] = et, this._customAlphaTestSortCompareFn[tt] = Vt, this._customTransparentSortCompareFn[tt] = Ot, this._renderingGroups[tt]) {
          const et = this._renderingGroups[tt];
          et.opaqueSortCompareFn = this._customOpaqueSortCompareFn[tt], et.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[tt], et.transparentSortCompareFn = this._customTransparentSortCompareFn[tt]
        }
      }
      setRenderingAutoClearDepthStencil(tt, et) {
        let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[tt] = {
          autoClear: et,
          depth: Vt,
          stencil: Ot
        }
      }
      getAutoClearDepthStencilSetup(tt) {
        return this._autoClearDepthStencil[tt]
      }
    }
    Dt.MAX_RENDERINGGROUPS = 4, Dt.MIN_RENDERINGGROUPS = 0, Dt.AUTOCLEAR = !0
  },
  40105: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot
    });
    class Ot {
      constructor(tt) {
        this._supportBlendParametersPerTarget = tt, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(tt) {
        this.setAlphaBlend(tt)
      }
      setAlphaBlend(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[et] !== tt && (tt ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[et] = tt, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(tt, et, Vt, Ot) {
        this._blendConstants[0] === tt && this._blendConstants[1] === et && this._blendConstants[2] === Vt && this._blendConstants[3] === Ot || (this._blendConstants[0] = tt, this._blendConstants[1] = et, this._blendConstants[2] = Vt, this._blendConstants[3] = Ot, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(tt, et, Vt, Ot) {
        const qt = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[qt + 0] === tt && this._blendFunctionParameters[qt + 1] === et && this._blendFunctionParameters[qt + 2] === Vt && this._blendFunctionParameters[qt + 3] === Ot || (this._blendFunctionParameters[qt + 0] = tt, this._blendFunctionParameters[qt + 1] = et, this._blendFunctionParameters[qt + 2] = Vt, this._blendFunctionParameters[qt + 3] = Ot, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(tt, et) {
        const Vt = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[Vt + 0] === tt && this._blendEquationParameters[Vt + 1] === et || (this._blendEquationParameters[Vt + 0] = tt, this._blendEquationParameters[Vt + 1] = et, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== et && (this._numTargets = et, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== Vt && (this._blendDisabledTargetsMask = Vt, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (tt.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === et || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (et > 1 && 0 !== Vt && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & Vt) ? tt.enable(tt.BLEND) : tt.disable(tt.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (tt.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (tt.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const Ot = tt;
        if (this._isAlphaBlendDirty) {
          for (let qt = 0; qt < et; qt++) {
            const et = qt < this._numTargetEnabled ? qt : 0;
            this._alphaBlend[et] && 0 === (Vt & 1 << qt) ? Ot.enableIndexed(tt.BLEND, qt) : Ot.disableIndexed(tt.BLEND, qt)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let tt = 0; tt < et; tt++) {
            const et = tt < this._numTargetEnabled ? 4 * tt : 0;
            Ot.blendFuncSeparateIndexed(tt, this._blendFunctionParameters[et + 0], this._blendFunctionParameters[et + 1], this._blendFunctionParameters[et + 2], this._blendFunctionParameters[et + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let tt = 0; tt < et; tt++) {
            const et = tt < this._numTargetEnabled ? 2 * tt : 0;
            Ot.blendEquationSeparateIndexed(tt, this._blendEquationParameters[et + 0], this._blendEquationParameters[et + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(tt, et) {
        let Vt = 32774;
        switch (tt) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, et);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, et);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, et);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, et);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, et);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, et);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, et);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, et);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, et);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, et);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, et);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, et);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, et);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, et);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, et);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, et);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, et), Vt = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, et), Vt = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, et);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, et)
        }
        this.setAlphaEquationParameters(Vt, Vt, et)
      }
    }
  },
  40389: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {}
    Ot._IsPickingAvailable = !1
  },
  40296: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jV,
      d: () => mV
    });
    var Ot = Vt(40300),
      qt = Vt(40085),
      Dt = Vt(40098),
      mt = Vt(37367),
      dt = Vt(40311);
    class jt {
      constructor() {
        this._count = 0, this._data = {}
      }
      rK(tt) {
        this.clear(), tt.forEach(((tt, et) => this.add(tt, et)))
      }
      get(tt) {
        const et = this._data[tt];
        if (void 0 !== et) return et
      }
      getOrAddWithFactory(tt, et) {
        let Vt = this.get(tt);
        return void 0 !== Vt || (Vt = et(tt), Vt && this.add(tt, Vt)), Vt
      }
      getOrAdd(tt, et) {
        const Vt = this.get(tt);
        return void 0 !== Vt ? Vt : (this.add(tt, et), et)
      }
      contains(tt) {
        return void 0 !== this._data[tt]
      }
      add(tt, et) {
        return void 0 === this._data[tt] && (this._data[tt] = et, ++this._count, !0)
      }
      set(tt, et) {
        return void 0 !== this._data[tt] && (this._data[tt] = et, !0)
      }
      getAndRemove(tt) {
        const et = this.get(tt);
        return void 0 !== et ? (delete this._data[tt], --this._count, et) : null
      }
      remove(tt) {
        return !!this.contains(tt) && (delete this._data[tt], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(tt) {
        for (const et in this._data) {
          tt(et, this._data[et])
        }
      }
      first(tt) {
        for (const et in this._data) {
          const Vt = tt(et, this._data[et]);
          if (Vt) return Vt
        }
        return null
      }
    }
    var Ht = Vt(40239),
      Xt = Vt(37336),
      Qt = Vt(40313),
      lt = Vt(40337),
      Et = Vt(40340);
    class ft {
      constructor(tt, et, Vt, Ot, qt, Dt) {
        this.source = tt, this.pointerX = et, this.pointerY = Vt, this.meshUnderPointer = Ot, this.sourceEvent = qt, this.additionalData = Dt
      }
      static CreateNew(tt, et, Vt) {
        const Ot = tt.vI();
        return new ft(tt, Ot.pointerX, Ot.pointerY, Ot.meshUnderPointer || tt, et, Vt)
      }
      static CreateNewFromSprite(tt, et, Vt, Ot) {
        return new ft(tt, et.pointerX, et.pointerY, et.meshUnderPointer, Vt, Ot)
      }
      static CreateNewFromScene(tt, et) {
        return new ft(null, tt.pointerX, tt.pointerY, tt.meshUnderPointer, et)
      }
      static CreateNewFromPrimitive(tt, et, Vt, Ot) {
        return new ft(tt, et.x, et.y, null, Vt, Ot)
      }
    }
    var wt = Vt(40348),
      yt = Vt(40354),
      Nt = Vt(40357),
      Mt = Vt(40366),
      bt = Vt(40068),
      Jt = Vt(37359),
      Ct = Vt(40080),
      ut = Vt(40373);
    class Kt {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const tt in Kt.Triggers)
          if (Object.prototype.hasOwnProperty.call(Kt.Triggers, tt)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const tt in Kt.Triggers)
          if (Object.prototype.hasOwnProperty.call(Kt.Triggers, tt)) {
            const et = parseInt(tt);
            if (et >= 1 && et <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(tt) {
        for (const et in Kt.Triggers)
          if (Object.prototype.hasOwnProperty.call(Kt.Triggers, et)) {
            if (parseInt(et) === tt) return !0
          } return !1
      }
    }
    Kt.Triggers = {};
    var ht, vt, Wt, St, ct, Rt, It, Pt = Vt(40379);
    ! function(tt) {
      tt[tt.Generic = 0] = "Generic", tt[tt.Keyboard = 1] = "Keyboard", tt[tt.Mouse = 2] = "Mouse", tt[tt.Touch = 3] = "Touch", tt[tt.DualShock = 4] = "DualShock", tt[tt.Xbox = 5] = "Xbox", tt[tt.Switch = 6] = "Switch", tt[tt.DualSense = 7] = "DualSense"
    }(ht || (ht = {})),
    function(tt) {
      tt[tt.Horizontal = 0] = "Horizontal", tt[tt.Vertical = 1] = "Vertical", tt[tt.LeftClick = 2] = "LeftClick", tt[tt.MiddleClick = 3] = "MiddleClick", tt[tt.RightClick = 4] = "RightClick", tt[tt.BrowserBack = 5] = "BrowserBack", tt[tt.BrowserForward = 6] = "BrowserForward", tt[tt.MouseWheelX = 7] = "MouseWheelX", tt[tt.MouseWheelY = 8] = "MouseWheelY", tt[tt.MouseWheelZ = 9] = "MouseWheelZ", tt[tt.Move = 12] = "Move"
    }(vt || (vt = {})),
    function(tt) {
      tt[tt.Horizontal = 0] = "Horizontal", tt[tt.Vertical = 1] = "Vertical", tt[tt.LeftClick = 2] = "LeftClick", tt[tt.MiddleClick = 3] = "MiddleClick", tt[tt.RightClick = 4] = "RightClick", tt[tt.BrowserBack = 5] = "BrowserBack", tt[tt.BrowserForward = 6] = "BrowserForward", tt[tt.MouseWheelX = 7] = "MouseWheelX", tt[tt.MouseWheelY = 8] = "MouseWheelY", tt[tt.MouseWheelZ = 9] = "MouseWheelZ", tt[tt.DeltaHorizontal = 10] = "DeltaHorizontal", tt[tt.DeltaVertical = 11] = "DeltaVertical"
    }(Wt || (Wt = {})),
    function(tt) {
      tt[tt.Cross = 0] = "Cross", tt[tt.Circle = 1] = "Circle", tt[tt.Square = 2] = "Square", tt[tt.Triangle = 3] = "Triangle", tt[tt.L1 = 4] = "L1", tt[tt.R1 = 5] = "R1", tt[tt.L2 = 6] = "L2", tt[tt.R2 = 7] = "R2", tt[tt.Share = 8] = "Share", tt[tt.Options = 9] = "Options", tt[tt.L3 = 10] = "L3", tt[tt.R3 = 11] = "R3", tt[tt.DPadUp = 12] = "DPadUp", tt[tt.DPadDown = 13] = "DPadDown", tt[tt.DPadLeft = 14] = "DPadLeft", tt[tt.DPadRight = 15] = "DPadRight", tt[tt.Home = 16] = "Home", tt[tt.TouchPad = 17] = "TouchPad", tt[tt.LStickXAxis = 18] = "LStickXAxis", tt[tt.LStickYAxis = 19] = "LStickYAxis", tt[tt.RStickXAxis = 20] = "RStickXAxis", tt[tt.RStickYAxis = 21] = "RStickYAxis"
    }(St || (St = {})),
    function(tt) {
      tt[tt.Cross = 0] = "Cross", tt[tt.Circle = 1] = "Circle", tt[tt.Square = 2] = "Square", tt[tt.Triangle = 3] = "Triangle", tt[tt.L1 = 4] = "L1", tt[tt.R1 = 5] = "R1", tt[tt.L2 = 6] = "L2", tt[tt.R2 = 7] = "R2", tt[tt.Create = 8] = "Create", tt[tt.Options = 9] = "Options", tt[tt.L3 = 10] = "L3", tt[tt.R3 = 11] = "R3", tt[tt.DPadUp = 12] = "DPadUp", tt[tt.DPadDown = 13] = "DPadDown", tt[tt.DPadLeft = 14] = "DPadLeft", tt[tt.DPadRight = 15] = "DPadRight", tt[tt.Home = 16] = "Home", tt[tt.TouchPad = 17] = "TouchPad", tt[tt.LStickXAxis = 18] = "LStickXAxis", tt[tt.LStickYAxis = 19] = "LStickYAxis", tt[tt.RStickXAxis = 20] = "RStickXAxis", tt[tt.RStickYAxis = 21] = "RStickYAxis"
    }(ct || (ct = {})),
    function(tt) {
      tt[tt.A = 0] = "A", tt[tt.B = 1] = "B", tt[tt.X = 2] = "X", tt[tt.Y = 3] = "Y", tt[tt.LB = 4] = "LB", tt[tt.RB = 5] = "RB", tt[tt.LT = 6] = "LT", tt[tt.RT = 7] = "RT", tt[tt.Back = 8] = "Back", tt[tt.Start = 9] = "Start", tt[tt.LS = 10] = "LS", tt[tt.RS = 11] = "RS", tt[tt.DPadUp = 12] = "DPadUp", tt[tt.DPadDown = 13] = "DPadDown", tt[tt.DPadLeft = 14] = "DPadLeft", tt[tt.DPadRight = 15] = "DPadRight", tt[tt.Home = 16] = "Home", tt[tt.LStickXAxis = 17] = "LStickXAxis", tt[tt.LStickYAxis = 18] = "LStickYAxis", tt[tt.RStickXAxis = 19] = "RStickXAxis", tt[tt.RStickYAxis = 20] = "RStickYAxis"
    }(Rt || (Rt = {})),
    function(tt) {
      tt[tt.B = 0] = "B", tt[tt.A = 1] = "A", tt[tt.Y = 2] = "Y", tt[tt.X = 3] = "X", tt[tt.L = 4] = "L", tt[tt.R = 5] = "R", tt[tt.ZL = 6] = "ZL", tt[tt.ZR = 7] = "ZR", tt[tt.Minus = 8] = "Minus", tt[tt.Plus = 9] = "Plus", tt[tt.LS = 10] = "LS", tt[tt.RS = 11] = "RS", tt[tt.DPadUp = 12] = "DPadUp", tt[tt.DPadDown = 13] = "DPadDown", tt[tt.DPadLeft = 14] = "DPadLeft", tt[tt.DPadRight = 15] = "DPadRight", tt[tt.Home = 16] = "Home", tt[tt.Capture = 17] = "Capture", tt[tt.LStickXAxis = 18] = "LStickXAxis", tt[tt.LStickYAxis = 19] = "LStickYAxis", tt[tt.RStickXAxis = 20] = "RStickXAxis", tt[tt.RStickYAxis = 21] = "RStickYAxis"
    }(It || (It = {}));
    var Zt = Vt(40386);
    class Lt {
      static CreateDeviceEvent(tt, et, Vt, Ot, qt, Dt, mt) {
        switch (tt) {
          case ht.Keyboard:
            return this._CreateKeyboardEvent(Vt, Ot, qt, Dt);
          case ht.Mouse:
            if (Vt === vt.MouseWheelX || Vt === vt.MouseWheelY || Vt === vt.MouseWheelZ) return this._CreateWheelEvent(tt, et, Vt, Ot, qt, Dt);
          case ht.Touch:
            return this._CreatePointerEvent(tt, et, Vt, Ot, qt, Dt, mt);
          default:
            throw `Unable to generate event for device ${ht[tt]}`
        }
      }
      static _CreatePointerEvent(tt, et, Vt, Ot, qt, Dt, mt) {
        const dt = this._CreateMouseEvent(tt, et, Vt, Ot, qt, Dt);
        tt === ht.Mouse ? (dt.deviceType = ht.Mouse, dt.pointerId = 1, dt.pointerType = "mouse") : (dt.deviceType = ht.Touch, dt.pointerId = mt ?? et, dt.pointerType = "touch");
        let jt = 0;
        return jt += qt.pollInput(tt, et, vt.LeftClick), jt += 2 * qt.pollInput(tt, et, vt.RightClick), jt += 4 * qt.pollInput(tt, et, vt.MiddleClick), dt.buttons = jt, Vt === vt.Move ? dt.type = "pointermove" : Vt >= vt.LeftClick && Vt <= vt.RightClick && (dt.type = 1 === Ot ? "pointerdown" : "pointerup", dt.button = Vt - 2), dt
      }
      static _CreateWheelEvent(tt, et, Vt, Ot, qt, Dt) {
        const mt = this._CreateMouseEvent(tt, et, Vt, Ot, qt, Dt);
        switch (mt.pointerId = 1, mt.type = "wheel", mt.deltaMode = Zt.e.DOM_DELTA_PIXEL, mt.deltaX = 0, mt.deltaY = 0, mt.deltaZ = 0, Vt) {
          case vt.MouseWheelX:
            mt.deltaX = Ot;
            break;
          case vt.MouseWheelY:
            mt.deltaY = Ot;
            break;
          case vt.MouseWheelZ:
            mt.deltaZ = Ot
        }
        return mt
      }
      static _CreateMouseEvent(tt, et, Vt, Ot, qt, Dt) {
        const mt = this._CreateEvent(Dt),
          dt = qt.pollInput(tt, et, vt.Horizontal),
          jt = qt.pollInput(tt, et, vt.Vertical);
        return Dt ? (mt.movementX = 0, mt.movementY = 0, mt.offsetX = mt.movementX - Dt.getBoundingClientRect().x, mt.offsetY = mt.movementY - Dt.getBoundingClientRect().y) : (mt.movementX = qt.pollInput(tt, et, 10), mt.movementY = qt.pollInput(tt, et, 11), mt.offsetX = 0, mt.offsetY = 0), this._CheckNonCharacterKeys(mt, qt), mt.clientX = dt, mt.clientY = jt, mt.x = dt, mt.y = jt, mt.deviceType = tt, mt.deviceSlot = et, mt.inputIndex = Vt, mt
      }
      static _CreateKeyboardEvent(tt, et, Vt, Ot) {
        const qt = this._CreateEvent(Ot);
        return this._CheckNonCharacterKeys(qt, Vt), qt.deviceType = ht.Keyboard, qt.deviceSlot = 0, qt.inputIndex = tt, qt.type = 1 === et ? "keydown" : "keyup", qt.key = String.fromCharCode(tt), qt.keyCode = tt, qt
      }
      static _CheckNonCharacterKeys(tt, et) {
        const Vt = et.isDeviceAvailable(ht.Keyboard),
          Ot = Vt && 1 === et.pollInput(ht.Keyboard, 0, 18),
          qt = Vt && 1 === et.pollInput(ht.Keyboard, 0, 17),
          Dt = Vt && (1 === et.pollInput(ht.Keyboard, 0, 91) || 1 === et.pollInput(ht.Keyboard, 0, 92) || 1 === et.pollInput(ht.Keyboard, 0, 93)),
          mt = Vt && 1 === et.pollInput(ht.Keyboard, 0, 16);
        tt.altKey = Ot, tt.ctrlKey = qt, tt.metaKey = Dt, tt.shiftKey = mt
      }
      static _CreateEvent(tt) {
        const et = {
          preventDefault: () => {}
        };
        return et.target = tt, et
      }
    }
    class Ft {
      constructor(tt, et, Vt) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(tt, et, ((tt, et, Ot, qt) => {
          const Dt = Lt.CreateDeviceEvent(tt, et, Ot, qt, this);
          Vt(tt, et, Dt)
        })) : this._createDummyNativeInput()
      }
      pollInput(tt, et, Vt) {
        return this._nativeInput.pollInput(tt, et, Vt)
      }
      isDeviceAvailable(tt) {
        return tt === ht.Mouse || tt === ht.Touch
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
    const kt = Object.keys(vt).length / 2;
    class Gt {
      constructor(tt, et, Vt, qt) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Ot.l.IsSafari(), this._usingMacOs = (0, bt.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = tt => {}, this._keyboardUpEvent = tt => {}, this._keyboardBlurEvent = tt => {}, this._pointerMoveEvent = tt => {}, this._pointerDownEvent = tt => {}, this._pointerUpEvent = tt => {}, this._pointerCancelEvent = tt => {}, this._pointerCancelTouch = tt => {}, this._pointerLeaveEvent = tt => {}, this._pointerWheelEvent = tt => {}, this._pointerBlurEvent = tt => {}, this._pointerMacOsChromeOutEvent = tt => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, bt.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, bt.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = tt => {}, this._gamepadDisconnectedEvent = tt => {}, this._eventPrefix = Ot.l.GetPointerPrefix(tt), this._engine = tt, this._onDeviceConnected = et, this._onDeviceDisconnected = Vt, this._onInputChanged = qt, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(tt, et, Vt) {
        const qt = this._inputs[tt][et];
        if (!qt) throw `Unable to find device ${ht[tt]}`;
        tt >= ht.DualShock && tt <= ht.DualSense && this._updateDevice(tt, et, Vt);
        const Dt = qt[Vt];
        if (void 0 === Dt) throw `Unable to find input ${Vt} for device ${ht[tt]} in slot ${et}`;
        return Vt === vt.Move && Ot.l.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), Dt
      }
      isDeviceAvailable(tt) {
        return void 0 !== this._inputs[tt]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const tt = this?._engine.getInputElement();
        if (tt && (!this._eventsAttached || this._elementToAttachTo !== tt)) {
          if (this._disableEvents(), this._inputs)
            for (const tt of this._inputs)
              if (tt)
                for (const et in tt) {
                  const Vt = tt[+et];
                  if (Vt)
                    for (let tt = 0; tt < Vt.length; tt++) Vt[tt] = 0
                }
          this._elementToAttachTo = tt, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const tt = navigator.getGamepads();
          for (const et of tt) et && this._addGamePad(et)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(ht.Mouse, 0, 0, 0)
      }
      _addGamePad(tt) {
        const et = this._getGamepadDeviceType(tt.id),
          Vt = tt.index;
        this._gamepads = this._gamepads || new Array(tt.index + 1), this._registerDevice(et, Vt, tt.buttons.length + tt.axes.length), this._gamepads[Vt] = et
      }
      _addPointerDevice(tt, et, Vt, Ot) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(tt, et, kt);
        const qt = this._inputs[tt][et];
        qt[0] = Vt, qt[1] = Ot
      }
      _registerDevice(tt, et, Vt) {
        if (void 0 === et) throw `Unable to register device ${ht[tt]} to undefined slot.`;
        if (this._inputs[tt] || (this._inputs[tt] = {}), !this._inputs[tt][et]) {
          const Ot = new Array(Vt);
          Ot.fill(0), this._inputs[tt][et] = Ot, this._onDeviceConnected(tt, et)
        }
      }
      _unregisterDevice(tt, et) {
        this._inputs[tt][et] && (delete this._inputs[tt][et], this._onDeviceDisconnected(tt, et))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = tt => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(ht.Keyboard, 0, 255));
          const et = this._inputs[ht.Keyboard][0];
          if (et) {
            et[tt.keyCode] = 1;
            const Vt = tt;
            Vt.inputIndex = tt.keyCode, this._usingMacOs && tt.metaKey && "Meta" !== tt.key && (this._metaKeys.includes(tt.keyCode) || this._metaKeys.push(tt.keyCode)), this._onInputChanged(ht.Keyboard, 0, Vt)
          }
        }, this._keyboardUpEvent = tt => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(ht.Keyboard, 0, 255));
          const et = this._inputs[ht.Keyboard][0];
          if (et) {
            et[tt.keyCode] = 0;
            const Vt = tt;
            if (Vt.inputIndex = tt.keyCode, this._usingMacOs && "Meta" === tt.key && this._metaKeys.length > 0) {
              for (const tt of this._metaKeys) {
                const Vt = Lt.CreateDeviceEvent(ht.Keyboard, 0, tt, 0, this, this._elementToAttachTo);
                et[tt] = 0, this._onInputChanged(ht.Keyboard, 0, Vt)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(ht.Keyboard, 0, Vt)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const tt = this._inputs[ht.Keyboard][0];
            for (let et = 0; et < tt.length; et++)
              if (0 !== tt[et]) {
                tt[et] = 0;
                const Vt = Lt.CreateDeviceEvent(ht.Keyboard, 0, et, 0, this, this._elementToAttachTo);
                this._onInputChanged(ht.Keyboard, 0, Vt)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, bt.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let Ot = 0; Ot < this._maxTouchPoints; Ot++) this._activeTouchIds[Ot] = -1;
        this._pointerMoveEvent = tt => {
          const et = this._getPointerType(tt);
          let Vt = et === ht.Mouse ? 0 : this._activeTouchIds.indexOf(tt.pointerId);
          if (et === ht.Touch && -1 === Vt) {
            if (0 === tt.buttons) return;
            const qt = this._activeTouchIds.indexOf(-1);
            if (!(qt >= 0)) return void Ot.l.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Vt = qt, this._activeTouchIds[qt] = tt.pointerId, this._onDeviceConnected(et, Vt)
          }
          this._inputs[et] || (this._inputs[et] = {}), this._inputs[et][Vt] || this._addPointerDevice(et, Vt, tt.clientX, tt.clientY);
          const qt = this._inputs[et][Vt];
          if (qt) {
            const Ot = tt;
            Ot.inputIndex = vt.Move, qt[vt.Horizontal] = tt.clientX, qt[vt.Vertical] = tt.clientY, et === ht.Touch && 0 === qt[vt.LeftClick] && (qt[vt.LeftClick] = 1), void 0 === tt.pointerId && (tt.pointerId = this._mouseId), this._onInputChanged(et, Vt, Ot), this._usingSafari || -1 === tt.button || (Ot.inputIndex = tt.button + 2, qt[tt.button + 2] = qt[tt.button + 2] ? 0 : 1, this._onInputChanged(et, Vt, Ot))
          }
        }, this._pointerDownEvent = tt => {
          const et = this._getPointerType(tt);
          let Vt = et === ht.Mouse ? 0 : tt.pointerId;
          if (et === ht.Touch) {
            let et = this._activeTouchIds.indexOf(tt.pointerId);
            if (-1 === et && (et = this._activeTouchIds.indexOf(-1)), !(et >= 0)) return void Ot.l.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Vt = et, this._activeTouchIds[et] = tt.pointerId
          }
          this._inputs[et] || (this._inputs[et] = {}), this._inputs[et][Vt] ? et === ht.Touch && this._onDeviceConnected(et, Vt) : this._addPointerDevice(et, Vt, tt.clientX, tt.clientY);
          const qt = this._inputs[et][Vt];
          if (qt) {
            const Ot = qt[vt.Horizontal],
              mt = qt[vt.Vertical];
            if (et === ht.Mouse) {
              if (void 0 === tt.pointerId && (tt.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (Dt) {}
            } else if (tt.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(tt.pointerId)
            } catch (Dt) {}
            qt[vt.Horizontal] = tt.clientX, qt[vt.Vertical] = tt.clientY, qt[tt.button + 2] = 1;
            const dt = tt;
            dt.inputIndex = tt.button + 2, this._onInputChanged(et, Vt, dt), Ot === tt.clientX && mt === tt.clientY || (dt.inputIndex = vt.Move, this._onInputChanged(et, Vt, dt))
          }
        }, this._pointerUpEvent = tt => {
          const et = this._getPointerType(tt),
            Vt = et === ht.Mouse ? 0 : this._activeTouchIds.indexOf(tt.pointerId);
          if (et === ht.Touch) {
            if (-1 === Vt) return;
            this._activeTouchIds[Vt] = -1
          }
          const Ot = this._inputs[et]?.[Vt];
          let qt = tt.button,
            Dt = Ot && 0 !== Ot[qt + 2];
          if (!Dt && this._isUsingFirefox && this._usingMacOs && Ot && (qt = 2 === qt ? 0 : 2, Dt = 0 !== Ot[qt + 2]), Dt) {
            const Dt = Ot[vt.Horizontal],
              mt = Ot[vt.Vertical];
            Ot[vt.Horizontal] = tt.clientX, Ot[vt.Vertical] = tt.clientY, Ot[qt + 2] = 0;
            const dt = tt;
            void 0 === tt.pointerId && (tt.pointerId = this._mouseId), Dt === tt.clientX && mt === tt.clientY || (dt.inputIndex = vt.Move, this._onInputChanged(et, Vt, dt)), dt.inputIndex = qt + 2, et === ht.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : tt.pointerId && this._elementToAttachTo.hasPointerCapture?.(tt.pointerId) && this._elementToAttachTo.releasePointerCapture(tt.pointerId), this._onInputChanged(et, Vt, dt), et === ht.Touch && this._onDeviceDisconnected(et, Vt)
          }
        }, this._pointerCancelTouch = tt => {
          const et = this._activeTouchIds.indexOf(tt);
          if (-1 === et) return;
          this._elementToAttachTo.hasPointerCapture?.(tt) && this._elementToAttachTo.releasePointerCapture(tt), this._inputs[ht.Touch][et][vt.LeftClick] = 0;
          const Vt = Lt.CreateDeviceEvent(ht.Touch, et, vt.LeftClick, 0, this, this._elementToAttachTo, tt);
          this._onInputChanged(ht.Touch, et, Vt), this._activeTouchIds[et] = -1, this._onDeviceDisconnected(ht.Touch, et)
        }, this._pointerCancelEvent = tt => {
          if ("mouse" === tt.pointerType) {
            const tt = this._inputs[ht.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let et = vt.LeftClick; et <= vt.BrowserForward; et++)
              if (1 === tt[et]) {
                tt[et] = 0;
                const Vt = Lt.CreateDeviceEvent(ht.Mouse, 0, et, 0, this, this._elementToAttachTo);
                this._onInputChanged(ht.Mouse, 0, Vt)
              }
          } else this._pointerCancelTouch(tt.pointerId)
        }, this._pointerLeaveEvent = tt => {
          "pen" === tt.pointerType && this._pointerCancelTouch(tt.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let tt = !1;
        const et = function() {};
        try {
          const Vt = Object.defineProperty({}, "passive", {
            get: function() {
              tt = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", et, Vt), this._elementToAttachTo.removeEventListener("test", et, Vt)
        } catch (Vt) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(ht.Mouse)) {
            const tt = this._inputs[ht.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let et = vt.LeftClick; et <= vt.BrowserForward; et++)
              if (1 === tt[et]) {
                tt[et] = 0;
                const Vt = Lt.CreateDeviceEvent(ht.Mouse, 0, et, 0, this, this._elementToAttachTo);
                this._onInputChanged(ht.Mouse, 0, Vt)
              }
          }
          if (this.isDeviceAvailable(ht.Touch)) {
            const tt = this._inputs[ht.Touch];
            for (let et = 0; et < this._activeTouchIds.length; et++) {
              const Vt = this._activeTouchIds[et];
              if (this._elementToAttachTo.hasPointerCapture?.(Vt) && this._elementToAttachTo.releasePointerCapture(Vt), -1 !== Vt && 1 === tt[et]?.[vt.LeftClick]) {
                tt[et][vt.LeftClick] = 0;
                const Ot = Lt.CreateDeviceEvent(ht.Touch, et, vt.LeftClick, 0, this, this._elementToAttachTo, Vt);
                this._onInputChanged(ht.Touch, et, Ot), this._activeTouchIds[et] = -1, this._onDeviceDisconnected(ht.Touch, et)
              }
            }
          }
        }, this._pointerWheelEvent = tt => {
          const et = ht.Mouse;
          this._inputs[et] || (this._inputs[et] = []), this._inputs[et][0] || (this._pointerActive = !0, this._registerDevice(et, 0, kt));
          const Vt = this._inputs[et][0];
          if (Vt) {
            Vt[vt.MouseWheelX] = tt.deltaX || 0, Vt[vt.MouseWheelY] = tt.deltaY || tt.wheelDelta || 0, Vt[vt.MouseWheelZ] = tt.deltaZ || 0;
            const Ot = tt;
            void 0 === tt.pointerId && (tt.pointerId = this._mouseId), 0 !== Vt[vt.MouseWheelX] && (Ot.inputIndex = vt.MouseWheelX, this._onInputChanged(et, 0, Ot)), 0 !== Vt[vt.MouseWheelY] && (Ot.inputIndex = vt.MouseWheelY, this._onInputChanged(et, 0, Ot)), 0 !== Vt[vt.MouseWheelZ] && (Ot.inputIndex = vt.MouseWheelZ, this._onInputChanged(et, 0, Ot))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = tt => {
          tt.buttons > 1 && this._pointerCancelEvent(tt)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!tt && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(ht.Mouse)) {
            const tt = this._inputs[ht.Mouse][0];
            tt[vt.MouseWheelX] = 0, tt[vt.MouseWheelY] = 0, tt[vt.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = tt => {
          this._addGamePad(tt.gamepad)
        }, this._gamepadDisconnectedEvent = tt => {
          if (this._gamepads) {
            const et = this._getGamepadDeviceType(tt.gamepad.id),
              Vt = tt.gamepad.index;
            this._unregisterDevice(et, Vt), delete this._gamepads[Vt]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(tt, et, Vt) {
        const Ot = navigator.getGamepads()[et];
        if (Ot && tt === this._gamepads[et]) {
          const qt = this._inputs[tt][et];
          Vt >= Ot.buttons.length ? qt[Vt] = Ot.axes[Vt - Ot.buttons.length].valueOf() : qt[Vt] = Ot.buttons[Vt].value
        }
      }
      _getGamepadDeviceType(tt) {
        return -1 !== tt.indexOf("054c") ? -1 !== tt.indexOf("0ce6") ? ht.DualSense : ht.DualShock : -1 !== tt.indexOf("Xbox One") || -1 !== tt.search("Xbox 360") || -1 !== tt.search("xinput") || -1 !== tt.indexOf("045e") && -1 === tt.indexOf("Surface Dock") ? ht.Xbox : -1 !== tt.indexOf("057e") ? ht.Switch : ht.Generic
      }
      _getPointerType(tt) {
        let et = ht.Mouse;
        return ("touch" === tt.pointerType || "pen" === tt.pointerType || tt.touches) && (et = ht.Touch), et
      }
    }
    class zt {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = et, this.deviceSlot = Vt, this.onInputChangedObservable = new mt.c, this._deviceInputSystem = tt
      }
      getInput(tt) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, tt)
      }
    }
    class ot {
      constructor(tt) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = tt => {
          for (let et = 0; et < this._devices.length; et++) {
            const Vt = this._devices[et];
            for (const Ot in Vt) {
              const Vt = +Ot;
              tt._addDevice(new zt(this._deviceInputSystem, et, Vt))
            }
          }
          this._registeredManagers.push(tt)
        }, this.unregisterManager = tt => {
          const et = this._registeredManagers.indexOf(tt);
          et > -1 && this._registeredManagers.splice(et, 1)
        };
        const et = Object.keys(ht).length / 2;
        this._devices = new Array(et);
        const Vt = (tt, et) => {
            this._devices[tt] || (this._devices[tt] = new Array), this._devices[tt][et] || (this._devices[tt][et] = et);
            for (const Vt of this._registeredManagers) {
              const Ot = new zt(this._deviceInputSystem, tt, et);
              Vt._addDevice(Ot)
            }
          },
          Ot = (tt, et) => {
            this._devices[tt]?.[et] && delete this._devices[tt][et];
            for (const Vt of this._registeredManagers) Vt._removeDevice(tt, et)
          },
          qt = (tt, et, Vt) => {
            if (Vt)
              for (const Ot of this._registeredManagers) Ot._onInputChanged(tt, et, Vt)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new Ft(Vt, Ot, qt) : this._deviceInputSystem = new Gt(tt, Vt, Ot, qt)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class rt {
      getDeviceSource(tt, et) {
        if (void 0 === et) {
          if (void 0 === this._firstDevice[tt]) return null;
          et = this._firstDevice[tt]
        }
        return this._devices[tt] && void 0 !== this._devices[tt][et] ? this._devices[tt][et] : null
      }
      getDeviceSources(tt) {
        return this._devices[tt] ? this._devices[tt].filter((tt => !!tt)) : []
      }
      constructor(tt) {
        const et = Object.keys(ht).length / 2;
        this._devices = new Array(et), this._firstDevice = new Array(et), this._engine = tt, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new ot(tt)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new mt.c((tt => {
          for (const et of this._devices)
            if (et)
              for (const Vt of et) Vt && this.onDeviceConnectedObservable.notifyObserver(tt, Vt)
        })), this.onDeviceDisconnectedObservable = new mt.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = tt.ZI.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.ZI.remove(this._onDisposeObserver)
      }
      _addDevice(tt) {
        this._devices[tt.deviceType] || (this._devices[tt.deviceType] = []), this._devices[tt.deviceType][tt.deviceSlot] || (this._devices[tt.deviceType][tt.deviceSlot] = tt, this._updateFirstDevices(tt.deviceType)), this.onDeviceConnectedObservable.notifyObservers(tt)
      }
      _removeDevice(tt, et) {
        const Vt = this._devices[tt]?.[et];
        this.onDeviceDisconnectedObservable.notifyObservers(Vt), this._devices[tt]?.[et] && delete this._devices[tt][et], this._updateFirstDevices(tt)
      }
      _onInputChanged(tt, et, Vt) {
        this._devices[tt]?.[et]?.onInputChangedObservable.notifyObservers(Vt)
      }
      _updateFirstDevices(tt) {
        switch (tt) {
          case ht.Keyboard:
          case ht.Mouse:
            this._firstDevice[tt] = 0;
            break;
          case ht.Touch:
          case ht.DualSense:
          case ht.DualShock:
          case ht.Xbox:
          case ht.Switch:
          case ht.Generic: {
            delete this._firstDevice[tt];
            const et = this._devices[tt];
            if (et)
              for (let Vt = 0; Vt < et.length; Vt++)
                if (et[Vt]) {
                  this._firstDevice[tt] = Vt;
                  break
                } break
          }
        }
      }
    }
    var Ut = Vt(40389);
    class At {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get YX() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(tt) {
        this._singleClick = tt
      }
      set YX(tt) {
        this._doubleClick = tt
      }
      set hasSwiped(tt) {
        this._hasSwiped = tt
      }
      set ignore(tt) {
        this._ignore = tt
      }
    }
    class it {
      constructor(tt) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new Xt.m(0, 0), this._previousStartingPointerPosition = new Xt.m(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = tt || Jt.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(tt) {
        return this._meshUnderPointerId[tt] || null
      }
      get unTranslatedPointer() {
        return new Xt.m(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(tt) {
        this._pointerX = tt
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(tt) {
        this._pointerY = tt
      }
      _updatePointerPosition(tt) {
        const et = this._scene.Jf().getInputElementClientRect();
        et && (this._pointerX = tt.clientX - et.left, this._pointerY = tt.clientY - et.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(tt, et) {
        const Vt = this._scene,
          Ot = Vt.Jf(),
          qt = Ot.getInputElement();
        qt && (qt.tabIndex = Ot.canvasTabIndex, Vt.doNotHandleCursors || (qt.style.cursor = Vt.defaultCursor)), this._setCursorAndPointerOverMesh(tt, et, Vt);
        for (const dt of Vt._pointerMoveStage) {
          tt = tt || this._pickMove(et);
          const Vt = !!tt?.pickedMesh;
          tt = dt.action(this._unTranslatedPointerX, this._unTranslatedPointerY, tt, Vt, qt)
        }
        const Dt = et.inputIndex >= vt.MouseWheelX && et.inputIndex <= vt.MouseWheelZ ? ut.c.POINTERWHEEL : ut.c.POINTERMOVE;
        let mt;
        Vt.onPointerMove && (tt = tt || this._pickMove(et), Vt.onPointerMove(et, tt, Dt)), tt ? (mt = new ut.f(Dt, et, tt), this._setRayOnPointerInfo(tt, et)) : (mt = new ut.f(Dt, et, null, this), this._movePointerInfo = mt), Vt.onPointerObservable.hasObservers() && Vt.onPointerObservable.notifyObservers(mt, Dt)
      }
      _setRayOnPointerInfo(tt, et) {
        const Vt = this._scene;
        tt && Ut.b._IsPickingAvailable && (tt.ray || (tt.ray = Vt.createPickingRay(et.offsetX, et.offsetY, Xt.c.Identity(), Vt.activeCamera)))
      }
      _addCameraPointerObserver(tt, et) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(tt, et)
      }
      _removeCameraPointerObserver(tt) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(tt)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(tt, et, Vt) {
        const Ot = this._scene,
          qt = new ut.e(Vt, et, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return tt && (qt.originalPickingInfo = tt, qt.ray = tt.ray, "xr-near" === et.pointerType && tt.originMesh && (qt.nearInteractionPickingInfo = tt)), Ot.onPrePointerObservable.notifyObservers(qt, Vt), !!qt.skipOnPointerObservable
      }
      _pickMove(tt) {
        const et = this._scene,
          Vt = et.il(this._unTranslatedPointerX, this._unTranslatedPointerY, et.pointerMovePredicate, et.pointerMoveFastCheck, et.cameraToUseForPointers, et.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(Vt, tt, et), Vt
      }
      _updateMeshUnderPointer() {
        const tt = this._scene;
        if (!tt.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || tt.skipPointerMovePicking || !tt.cameraToUseForPointers && !tt.activeCamera) return;
        this._ensurePointerMovePredicate();
        const et = this._pointerX,
          Vt = this._pointerY,
          Ot = this._unTranslatedPointerX,
          qt = this._unTranslatedPointerY;
        for (const Dt of this._latestPointerMoveEvents.values()) this._pointerX = Dt.pointerX, this._pointerY = Dt.pointerY, this._unTranslatedPointerX = Dt.unTranslatedPointerX, this._unTranslatedPointerY = Dt.unTranslatedPointerY, this._pickMove(Dt.event);
        this._pointerX = et, this._pointerY = Vt, this._unTranslatedPointerX = Ot, this._unTranslatedPointerY = qt
      }
      _ensurePointerMovePredicate() {
        const tt = this._scene;
        tt.pointerMovePredicate || (tt.pointerMovePredicate = et => (et._isPointerMovePickable ?? et.Gw) && et.isVisible && et.isReady() && et.isEnabled() && (et.enablePointerMoveEvents || tt.constantlyUpdateMeshUnderPointer || null !== et._getActionManagerForTrigger()) && (!tt.cameraToUseForPointers || 0 !== (tt.cameraToUseForPointers.layerMask & et.layerMask)))
      }
      _setCursorAndPointerOverMesh(tt, et, Vt) {
        const Ot = Vt.Jf().getInputElement();
        if (tt?.pickedMesh) {
          if (this.setPointerOverMesh(tt.pickedMesh, et.pointerId, tt, et), !Vt.doNotHandleCursors && Ot && this._pointerOverMesh) {
            const tt = this._pointerOverMesh._getActionManagerForTrigger();
            tt && tt.hasPointerTriggers && (Ot.style.cursor = tt.hoverCursor || Vt.hoverCursor)
          }
        } else this.setPointerOverMesh(null, et.pointerId, tt, et)
      }
      simulatePointerMove(tt, et) {
        const Vt = new PointerEvent("pointermove", et);
        Vt.inputIndex = vt.Move, this._checkPrePointerObservable(tt, Vt, ut.c.POINTERMOVE) || this._processPointerMove(tt, Vt)
      }
      simulatePointerDown(tt, et) {
        const Vt = new PointerEvent("pointerdown", et);
        Vt.inputIndex = Vt.button + 2, this._checkPrePointerObservable(tt, Vt, ut.c.POINTERDOWN) || this._processPointerDown(tt, Vt)
      }
      _processPointerDown(tt, et) {
        const Vt = this._scene;
        if (tt?.pickedMesh) {
          this._pickedDownMesh = tt.pickedMesh;
          const Ot = tt.pickedMesh._getActionManagerForTrigger();
          if (Ot) {
            if (Ot.hasPickTriggers) switch (Ot.processTrigger(5, new ft(tt.pickedMesh, Vt.pointerX, Vt.pointerY, tt.pickedMesh, et, tt)), et.button) {
              case 0:
                Ot.processTrigger(2, new ft(tt.pickedMesh, Vt.pointerX, Vt.pointerY, tt.pickedMesh, et, tt));
                break;
              case 1:
                Ot.processTrigger(4, new ft(tt.pickedMesh, Vt.pointerX, Vt.pointerY, tt.pickedMesh, et, tt));
                break;
              case 2:
                Ot.processTrigger(3, new ft(tt.pickedMesh, Vt.pointerX, Vt.pointerY, tt.pickedMesh, et, tt))
            }
            Ot.hasSpecificTrigger(8) && window.setTimeout((() => {
              const tt = Vt.il(this._unTranslatedPointerX, this._unTranslatedPointerY, (tt => tt.Gw && tt.isVisible && tt.isReady() && tt.actionManager && tt.actionManager.hasSpecificTrigger(8) && tt === this._pickedDownMesh), !1, Vt.cameraToUseForPointers);
              tt?.pickedMesh && Ot && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > it.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, Ot.processTrigger(8, ft.CreateNew(tt.pickedMesh, et)))
            }), it.LongPressDelay)
          }
        } else
          for (const Dt of Vt._pointerDownStage) tt = Dt.action(this._unTranslatedPointerX, this._unTranslatedPointerY, tt, et, !1);
        let Ot;
        const qt = ut.c.POINTERDOWN;
        tt ? (Vt.onPointerDown && Vt.onPointerDown(et, tt, qt), Ot = new ut.f(qt, et, tt), this._setRayOnPointerInfo(tt, et)) : Ot = new ut.f(qt, et, null, this), Vt.onPointerObservable.hasObservers() && Vt.onPointerObservable.notifyObservers(Ot, qt)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(tt, et, Vt) {
        const Ot = new PointerEvent("pointerup", et);
        Ot.inputIndex = vt.Move;
        const qt = new At;
        Vt ? qt.YX = !0 : qt.singleClick = !0, this._checkPrePointerObservable(tt, Ot, ut.c.POINTERUP) || this._processPointerUp(tt, Ot, qt)
      }
      _processPointerUp(tt, et, Vt) {
        const Ot = this._scene;
        if (tt?.pickedMesh) {
          if (this._pickedUpMesh = tt.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (Ot.onPointerPick && Ot.onPointerPick(et, tt), Vt.singleClick && !Vt.ignore && Ot.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const Vt = ut.c.POINTERPICK,
              qt = new ut.f(Vt, et, tt);
            this._setRayOnPointerInfo(tt, et), Ot.onPointerObservable.notifyObservers(qt, Vt)
          }
          const qt = tt.pickedMesh._getActionManagerForTrigger();
          if (qt && !Vt.ignore) {
            qt.processTrigger(7, ft.CreateNew(tt.pickedMesh, et, tt)), !Vt.hasSwiped && Vt.singleClick && qt.processTrigger(1, ft.CreateNew(tt.pickedMesh, et, tt));
            const Ot = tt.pickedMesh._getActionManagerForTrigger(6);
            Vt.YX && Ot && Ot.processTrigger(6, ft.CreateNew(tt.pickedMesh, et, tt))
          }
        } else if (!Vt.ignore)
          for (const qt of Ot._pointerUpStage) tt = qt.action(this._unTranslatedPointerX, this._unTranslatedPointerY, tt, et, Vt.YX);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const tt = this._pickedDownMesh._getActionManagerForTrigger(16);
          tt && tt.processTrigger(16, ft.CreateNew(this._pickedDownMesh, et))
        }
        if (!Vt.ignore) {
          const qt = new ut.f(ut.c.POINTERUP, et, tt);
          if (this._setRayOnPointerInfo(tt, et), Ot.onPointerObservable.notifyObservers(qt, ut.c.POINTERUP), Ot.onPointerUp && Ot.onPointerUp(et, tt, ut.c.POINTERUP), !Vt.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let qt = 0;
            if (Vt.singleClick ? qt = ut.c.POINTERTAP : Vt.YX && (qt = ut.c.POINTERDOUBLETAP), qt) {
              const Vt = new ut.f(qt, et, tt);
              Ot.onPointerObservable.hasObservers() && Ot.onPointerObservable.hasSpecificMask(qt) && Ot.onPointerObservable.notifyObservers(Vt, qt)
            }
          }
        }
      }
      isPointerCaptured() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[tt]
      }
      attachControl() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const qt = this._scene,
          Dt = qt.Jf();
        Ot || (Ot = Dt.getInputElement()), this._alreadyAttached && this.detachControl(), Ot && (this._alreadyAttachedTo = Ot), this._deviceSourceManager = new rt(Dt), this._initActionManager = tt => {
          if (!this._meshPickProceed) {
            const et = qt.skipPointerUpPicking || 0 === qt._registeredActions && !this._checkForPicking() && !qt.onPointerUp ? null : qt.il(this._unTranslatedPointerX, this._unTranslatedPointerY, qt.pointerUpPredicate, qt.pointerUpFastCheck, qt.cameraToUseForPointers, qt.pointerUpTrianglePredicate);
            this._currentPickResult = et, et && (tt = et.hit && et.pickedMesh ? et.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return tt
        }, this._delayedSimpleClick = (tt, et, Vt) => {
          if ((Date.now() - this._previousStartingPointerTime > it.DoubleClickDelay && !this._doubleClickOccured || tt !== this._previousButtonPressed) && (this._doubleClickOccured = !1, et.singleClick = !0, et.ignore = !1, this._delayedClicks[tt])) {
            const et = this._delayedClicks[tt].evt,
              Vt = ut.c.POINTERTAP,
              Ot = new ut.f(Vt, et, this._currentPickResult);
            qt.onPointerObservable.hasObservers() && qt.onPointerObservable.hasSpecificMask(Vt) && qt.onPointerObservable.notifyObservers(Ot, Vt), this._delayedClicks[tt] = null
          }
        }, this._initClickEvent = (tt, et, Vt, Ot) => {
          const qt = new At;
          this._currentPickResult = null;
          let Dt = null,
            mt = tt.hasSpecificMask(ut.c.POINTERPICK) || et.hasSpecificMask(ut.c.POINTERPICK) || tt.hasSpecificMask(ut.c.POINTERTAP) || et.hasSpecificMask(ut.c.POINTERTAP) || tt.hasSpecificMask(ut.c.POINTERDOUBLETAP) || et.hasSpecificMask(ut.c.POINTERDOUBLETAP);
          !mt && Kt && (Dt = this._initActionManager(Dt, qt), Dt && (mt = Dt.hasPickTriggers));
          let dt = !1;
          if (mt = mt && !this._isMultiTouchGesture, mt) {
            const mt = Vt.button;
            if (qt.hasSwiped = this._isPointerSwiping(), !qt.hasSwiped) {
              let jt = !it.ExclusiveDoubleClickMode;
              if (jt || (jt = !tt.hasSpecificMask(ut.c.POINTERDOUBLETAP) && !et.hasSpecificMask(ut.c.POINTERDOUBLETAP), jt && !Kt.HasSpecificTrigger(6) && (Dt = this._initActionManager(Dt, qt), Dt && (jt = !Dt.hasSpecificTrigger(6)))), jt)(Date.now() - this._previousStartingPointerTime > it.DoubleClickDelay || mt !== this._previousButtonPressed) && (qt.singleClick = !0, Ot(qt, this._currentPickResult), dt = !0);
              else {
                const tt = {
                  evt: Vt,
                  clickInfo: qt,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, mt, qt, Ot), it.DoubleClickDelay)
                };
                this._delayedClicks[mt] = tt
              }
              let Ht = tt.hasSpecificMask(ut.c.POINTERDOUBLETAP) || et.hasSpecificMask(ut.c.POINTERDOUBLETAP);
              !Ht && Kt.HasSpecificTrigger(6) && (Dt = this._initActionManager(Dt, qt), Dt && (Ht = Dt.hasSpecificTrigger(6))), Ht && (mt === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < it.DoubleClickDelay && !this._doubleClickOccured ? (qt.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = mt, it.ExclusiveDoubleClickMode ? (this._delayedClicks[mt] && (clearTimeout(this._delayedClicks[mt]?.timeoutId), this._delayedClicks[mt] = null), Ot(qt, this._previousPickResult)) : Ot(qt, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, qt.YX = !0, qt.ignore = !1, it.ExclusiveDoubleClickMode && this._delayedClicks[mt] && (clearTimeout(this._delayedClicks[mt]?.timeoutId), this._delayedClicks[mt] = null), Ot(qt, this._currentPickResult)), dt = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = mt))
            }
          }
          dt || Ot(qt, this._currentPickResult)
        }, this._onPointerMove = tt => {
          if (this._updatePointerPosition(tt), this._latestPointerMoveEvents.set(tt.pointerId, {
              event: tt,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > it.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > it.DragMovementThreshold), Dt.isPointerLock && Dt._verifyPointerLock(), this._checkPrePointerObservable(null, tt, tt.inputIndex >= vt.MouseWheelX && tt.inputIndex <= vt.MouseWheelZ ? ut.c.POINTERWHEEL : ut.c.POINTERMOVE)) return;
          if (!qt.cameraToUseForPointers && !qt.activeCamera) return;
          if (qt.skipPointerMovePicking) return void this._processPointerMove(new Et.b, tt);
          this._ensurePointerMovePredicate();
          const et = qt._registeredActions > 0 || qt.constantlyUpdateMeshUnderPointer ? this._pickMove(tt) : null;
          this._processPointerMove(et, tt)
        }, this._onPointerDown = tt => {
          const et = this._activePointerIds.indexOf(-1);
          if (-1 === et ? this._activePointerIds.push(tt.pointerId) : this._activePointerIds[et] = tt.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, it.ExclusiveDoubleClickMode)
            for (let Ot = 0; Ot < this._delayedClicks.length; Ot++)
              if (this._delayedClicks[Ot])
                if (tt.button === Ot) clearTimeout(this._delayedClicks[Ot]?.timeoutId);
                else {
                  const tt = this._delayedClicks[Ot].clickInfo;
                  this._doubleClickOccured = !1, tt.singleClick = !0, tt.ignore = !1;
                  const et = this._delayedClicks[Ot].evt,
                    Vt = ut.c.POINTERTAP,
                    Dt = new ut.f(Vt, et, this._currentPickResult);
                  qt.onPointerObservable.hasObservers() && qt.onPointerObservable.hasSpecificMask(Vt) && qt.onPointerObservable.notifyObservers(Dt, Vt), this._delayedClicks[Ot] = null
                } if (this._updatePointerPosition(tt), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = tt.button), qt.preventDefaultOnPointerDown && Ot && (tt.preventDefault(), Ot.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, tt, ut.c.POINTERDOWN)) return;
          if (!qt.cameraToUseForPointers && !qt.activeCamera) return;
          let Vt;
          this._pointerCaptures[tt.pointerId] = !0, qt.pointerDownPredicate || (qt.pointerDownPredicate = tt => tt.Gw && tt.isVisible && tt.isReady() && tt.isEnabled() && (!qt.cameraToUseForPointers || 0 !== (qt.cameraToUseForPointers.layerMask & tt.layerMask))), this._pickedDownMesh = null, Vt = qt.skipPointerDownPicking || 0 === qt._registeredActions && !this._checkForPicking() && !qt.onPointerDown ? new Et.b : qt.il(this._unTranslatedPointerX, this._unTranslatedPointerY, qt.pointerDownPredicate, qt.pointerDownFastCheck, qt.cameraToUseForPointers, qt.pointerDownTrianglePredicate), this._processPointerDown(Vt, tt)
        }, this._onPointerUp = tt => {
          const et = this._activePointerIds.indexOf(tt.pointerId); - 1 !== et && (this._activePointerIds[et] = -1, this._activePointerIdsCount--, "touch" === tt.pointerType && this._latestPointerMoveEvents.delete(tt.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(tt), qt.preventDefaultOnPointerUp && Ot && (tt.preventDefault(), Ot.focus()), this._initClickEvent(qt.onPrePointerObservable, qt.onPointerObservable, tt, ((et, Vt) => {
            if (qt.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !et.ignore)) {
              if (this._checkPrePointerObservable(null, tt, ut.c.POINTERUP)) return this._swipeButtonPressed === tt.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === tt.buttons && (this._pointerCaptures[tt.pointerId] = !1));
              et.hasSwiped || (et.singleClick && qt.onPrePointerObservable.hasSpecificMask(ut.c.POINTERTAP) && this._checkPrePointerObservable(null, tt, ut.c.POINTERTAP) && (this._skipPointerTap = !0), et.YX && qt.onPrePointerObservable.hasSpecificMask(ut.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, tt, ut.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[tt.pointerId] ? (0 === tt.buttons && (this._pointerCaptures[tt.pointerId] = !1), (qt.cameraToUseForPointers || qt.activeCamera) && (qt.pointerUpPredicate || (qt.pointerUpPredicate = tt => tt.Gw && tt.isVisible && tt.isReady() && tt.isEnabled() && (!qt.cameraToUseForPointers || 0 !== (qt.cameraToUseForPointers.layerMask & tt.layerMask))), !this._meshPickProceed && (Kt && Kt.HasTriggers || this._checkForPicking() || qt.onPointerUp) && this._initActionManager(null, et), Vt || (Vt = this._currentPickResult), this._processPointerUp(Vt, tt, et), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === tt.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === tt.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = tt => {
          const et = Pt.c.KEYDOWN;
          if (qt.onPreKeyboardObservable.hasObservers()) {
            const Vt = new Pt.g(et, tt);
            if (qt.onPreKeyboardObservable.notifyObservers(Vt, et), Vt.skipOnKeyboardObservable) return
          }
          if (qt.onKeyboardObservable.hasObservers()) {
            const Vt = new Pt.h(et, tt);
            qt.onKeyboardObservable.notifyObservers(Vt, et)
          }
          qt.actionManager && qt.actionManager.processTrigger(14, ft.CreateNewFromScene(qt, tt))
        }, this._onKeyUp = tt => {
          const et = Pt.c.KEYUP;
          if (qt.onPreKeyboardObservable.hasObservers()) {
            const Vt = new Pt.g(et, tt);
            if (qt.onPreKeyboardObservable.notifyObservers(Vt, et), Vt.skipOnKeyboardObservable) return
          }
          if (qt.onKeyboardObservable.hasObservers()) {
            const Vt = new Pt.h(et, tt);
            qt.onKeyboardObservable.notifyObservers(Vt, et)
          }
          qt.actionManager && qt.actionManager.processTrigger(15, ft.CreateNewFromScene(qt, tt))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((Ot => {
          Ot.deviceType === ht.Mouse ? Ot.onInputChangedObservable.add((qt => {
            this._originMouseEvent = qt, qt.inputIndex === vt.LeftClick || qt.inputIndex === vt.MiddleClick || qt.inputIndex === vt.RightClick || qt.inputIndex === vt.BrowserBack || qt.inputIndex === vt.BrowserForward ? et && 1 === Ot.getInput(qt.inputIndex) ? this._onPointerDown(qt) : tt && 0 === Ot.getInput(qt.inputIndex) && this._onPointerUp(qt) : Vt && (qt.inputIndex === vt.Move ? this._onPointerMove(qt) : qt.inputIndex !== vt.MouseWheelX && qt.inputIndex !== vt.MouseWheelY && qt.inputIndex !== vt.MouseWheelZ || this._onPointerMove(qt))
          })) : Ot.deviceType === ht.Touch ? Ot.onInputChangedObservable.add((qt => {
            qt.inputIndex === vt.LeftClick && (et && 1 === Ot.getInput(qt.inputIndex) ? (this._onPointerDown(qt), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : tt && 0 === Ot.getInput(qt.inputIndex) && (this._onPointerUp(qt), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), Vt && qt.inputIndex === vt.Move && this._onPointerMove(qt)
          })) : Ot.deviceType === ht.Keyboard && Ot.onInputChangedObservable.add((tt => {
            "keydown" === tt.type ? this._onKeyDown(tt) : "keyup" === tt.type && this._onKeyUp(tt)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[et] === tt && (!tt || !tt._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const qt = this._meshUnderPointerId[et];
        let Dt;
        qt && (Dt = qt._getActionManagerForTrigger(10), Dt && Dt.processTrigger(10, new ft(qt, this._pointerX, this._pointerY, tt, Ot, {
          pointerId: et
        }))), tt ? (this._meshUnderPointerId[et] = tt, this._pointerOverMesh = tt, Dt = tt._getActionManagerForTrigger(9), Dt && Dt.processTrigger(9, new ft(tt, this._pointerX, this._pointerY, tt, Ot, {
          pointerId: et,
          pickResult: Vt
        }))) : (delete this._meshUnderPointerId[et], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: tt,
          pointerId: et
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(tt) {
        this._pointerOverMesh === tt && (this._pointerOverMesh = null), this._pickedDownMesh === tt && (this._pickedDownMesh = null), this._pickedUpMesh === tt && (this._pickedUpMesh = null);
        for (const et in this._meshUnderPointerId) this._meshUnderPointerId[et] === tt && delete this._meshUnderPointerId[et]
      }
    }
    it.DragMovementThreshold = 10, it.LongPressDelay = 500, it.DoubleClickDelay = 300, it.ExclusiveDoubleClickMode = !1;
    var Yt = Vt(40155),
      Bt = Vt(37513),
      pt = Vt(38009);
    class xt {
      static get UniqueId() {
        const tt = this._UniqueIdCounter;
        return this._UniqueIdCounter++, tt
      }
    }
    xt._UniqueIdCounter = 1;
    var Tt = Vt(40249),
      gt = Vt(40395),
      st = Vt(37350);
    class nt {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var te, ee, Ve, Oe, qe, De, me, de, je, He, Xe, Qe, le, Ee, fe, we, ye, Ne, ae, Me, be, Je, Ce, ue, Ke, he, ve, We, Se, ce, Re, Ie, Pe, Ze, Le, Fe, ke, Ge, ze, oe, re, Ue, Ae, ie, Ye, Be, pe, xe, Te, ge, se, ne, tV, eV = Vt(38899),
      VV = Vt(37390);
    const OV = new Xt.r,
      qV = new Xt.r;
    var DV;
    ! function(tt) {
      tt[tt.BackwardCompatible = 0] = "BackwardCompatible", tt[tt.Intermediate = 1] = "Intermediate", tt[tt.Aggressive = 2] = "Aggressive"
    }(DV || (DV = {}));
    class mV {
      static DefaultMaterialFactory(tt) {
        throw (0, Ct.e)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, Ct.e)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(tt) {
        tt !== this._clearColor && (this._clearColor = tt, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(tt) {
        if (tt !== this._performancePriority) {
          switch (this._performancePriority = tt, tt) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(tt)
        }
      }
      set forceWireframe(tt) {
        this._forceWireframe !== tt && (this._forceWireframe = tt, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(tt) {
        this._skipFrustumClipping !== tt && (this._skipFrustumClipping = tt)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(tt) {
        this._forcePointsCloud !== tt && (this._forcePointsCloud = tt, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(tt) {
        this._environmentTexture !== tt && (this._environmentTexture = tt, this.onEnvironmentTextureChangedObservable.notifyObservers(tt), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let tt = [];
        tt = tt.concat(this.meshes), tt = tt.concat(this.lights), tt = tt.concat(this.cameras), tt = tt.concat(this.transformNodes);
        for (const et of this.skeletons) tt = tt.concat(et.bones);
        return tt
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(tt) {
        this._animationPropertiesOverride = tt
      }
      set onDispose(tt) {
        this._onDisposeObserver && this.ZI.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZI.add(tt)
      }
      set beforeRender(tt) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), tt && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(tt))
      }
      set afterRender(tt) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), tt && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(tt))
      }
      set beforeCameraRender(tt) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(tt)
      }
      set afterCameraRender(tt) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(tt)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(tt) {
        this._pointerPickingConfiguration.pointerDownPredicate = tt
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(tt) {
        this._pointerPickingConfiguration.pointerUpPredicate = tt
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(tt) {
        this._pointerPickingConfiguration.pointerMovePredicate = tt
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(tt) {
        this._pointerPickingConfiguration.pointerDownFastCheck = tt
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(tt) {
        this._pointerPickingConfiguration.pointerUpFastCheck = tt
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(tt) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = tt
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(tt) {
        this._pointerPickingConfiguration.skipPointerMovePicking = tt
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(tt) {
        this._pointerPickingConfiguration.skipPointerDownPicking = tt
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(tt) {
        this._pointerPickingConfiguration.skipPointerUpPicking = tt
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return it.DragMovementThreshold
      }
      static set DragMovementThreshold(tt) {
        it.DragMovementThreshold = tt
      }
      static get LongPressDelay() {
        return it.LongPressDelay
      }
      static set LongPressDelay(tt) {
        it.LongPressDelay = tt
      }
      static get DoubleClickDelay() {
        return it.DoubleClickDelay
      }
      static set DoubleClickDelay(tt) {
        it.DoubleClickDelay = tt
      }
      static get ExclusiveDoubleClickMode() {
        return it.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(tt) {
        it.ExclusiveDoubleClickMode = tt
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? Xt.n.ZeroReadOnly
      }
      bindEyePosition(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ot = this._eyePosition,
          qt = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          Dt = this.floatingOriginOffset,
          mt = OV.set(Ot.x, Ot.y, Ot.z, qt ? -1 : 1),
          dt = mt.subtractFromFloatsToRef(Dt.x, Dt.y, Dt.z, 0, qV);
        return tt && (Vt ? tt.setFloat3(et, dt.x, dt.y, dt.z) : tt.setVector4(et, dt)), mt
      }
      finalizeSceneUbo() {
        const tt = this.getSceneUniformBuffer(),
          et = this.bindEyePosition(null),
          Vt = this.floatingOriginOffset;
        return tt.updateFloat4("vEyePosition", et.x - Vt.x, et.y - Vt.y, et.z - Vt.z, et.w), tt.update(), tt
      }
      set useRightHandedSystem(tt) {
        this._useRightHandedSystem !== tt && (this._useRightHandedSystem = tt, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(tt) {
        this._currentStepId = tt
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(tt) {
        this._fogEnabled !== tt && (this._fogEnabled = tt, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(tt) {
        this._fogMode !== tt && (this._fogMode = tt, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(tt) {
        this._shadowsEnabled !== tt && (this._shadowsEnabled = tt, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(tt) {
        this._lightsEnabled !== tt && (this._lightsEnabled = tt, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(tt) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), tt && (this._unObserveActiveCameras = (0, st.e)(tt, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = tt
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(tt) {
        tt !== this._activeCamera && (this._activeCamera = tt, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return mV.DefaultMaterialFactory !== mV._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = mV.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(tt) {
        this._defaultMaterial = tt
      }
      set texturesEnabled(tt) {
        this._texturesEnabled !== tt && (this._texturesEnabled = tt, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(tt) {
        if (this._frameGraph) return this._frameGraph = tt, void(tt || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = tt, tt && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(tt) {
        this._skeletonsEnabled !== tt && (this._skeletonsEnabled = tt, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = mV.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const tt of this._transientComponents) tt.register();
          this._transientComponents.length = 0
        }
      }
      KOt(tt) {
        this._components.push(tt), this._transientComponents.push(tt);
        const et = tt;
        et.addFromContainer && et.serialize && this._serializableComponents.push(et)
      }
      _getComponent(tt) {
        for (const et of this._components)
          if (et.name === tt) return et;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(tt, et) {
        this._inputManager = new it(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new Bt.c(.2, .2, .3, 1), this.onClearColorChangedObservable = new mt.c, this.ambientColor = new Bt.b(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new mt.c, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.PJ = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.ZI = new mt.c, this._onDisposeObserver = null, this.onBeforeRenderObservable = new mt.c, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new mt.c, this.onAfterRenderCameraObservable = new mt.c, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new mt.c, this.onAfterAnimationsObservable = new mt.c, this.onBeforeDrawPhaseObservable = new mt.c, this.onAfterDrawPhaseObservable = new mt.c, this.onReadyObservable = new mt.c, this.onBeforeCameraRenderObservable = new mt.c, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new mt.c, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new mt.c, this.onAfterActiveMeshesEvaluationObservable = new mt.c, this.onBeforeParticlesRenderingObservable = new mt.c, this.onAfterParticlesRenderingObservable = new mt.c, this.onDataLoadedObservable = new mt.c, this.onNewCameraAddedObservable = new mt.c, this.onCameraRemovedObservable = new mt.c, this.onNewLightAddedObservable = new mt.c, this.onLightRemovedObservable = new mt.c, this.onNewGeometryAddedObservable = new mt.c, this.onGeometryRemovedObservable = new mt.c, this.onNewTransformNodeAddedObservable = new mt.c, this.onTransformNodeRemovedObservable = new mt.c, this.onNewMeshAddedObservable = new mt.c, this.onMeshRemovedObservable = new mt.c, this.onNewSkeletonAddedObservable = new mt.c, this.onSkeletonRemovedObservable = new mt.c, this.onNewParticleSystemAddedObservable = new mt.c, this.onParticleSystemRemovedObservable = new mt.c, this.onNewAnimationGroupAddedObservable = new mt.c, this.onAnimationGroupRemovedObservable = new mt.c, this.onNewMaterialAddedObservable = new mt.c, this.onNewMultiMaterialAddedObservable = new mt.c, this.onMaterialRemovedObservable = new mt.c, this.onMultiMaterialRemovedObservable = new mt.c, this.onNewTextureAddedObservable = new mt.c, this.onTextureRemovedObservable = new mt.c, this.onNewFrameGraphAddedObservable = new mt.c, this.onFrameGraphRemovedObservable = new mt.c, this.onNewObjectRendererAddedObservable = new mt.c, this.onObjectRendererRemovedObservable = new mt.c, this.onNewPostProcessAddedObservable = new mt.c, this.onPostProcessRemovedObservable = new mt.c, this.onNewEffectLayerAddedObservable = new mt.c, this.onEffectLayerRemovedObservable = new mt.c, this.onBeforeRenderTargetsRenderObservable = new mt.c, this.onAfterRenderTargetsRenderObservable = new mt.c, this.onBeforeStepObservable = new mt.c, this.onAfterStepObservable = new mt.c, this.onActiveCameraChanged = new mt.c, this.onActiveCamerasChanged = new mt.c, this.onBeforeRenderingGroupObservable = new mt.c, this.onAfterRenderingGroupObservable = new mt.c, this.onMeshImportedObservable = new mt.c, this.onAnimationFileImportedObservable = new mt.c, this.onEnvironmentTextureChangedObservable = new mt.c, this.onMeshUnderPointerUpdatedObservable = new mt.c, this._registeredForLateAnimationBindings = new dt.d(256), this._pointerPickingConfiguration = new nt, this.onPrePointerObservable = new mt.c, this.onPointerObservable = new mt.c, this.onPreKeyboardObservable = new mt.c, this.onKeyboardObservable = new mt.c, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = mV.FOGMODE_NONE, this.fogColor = new Bt.b(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.zk = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new Xt.n(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new dt.d(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new Yt.e, this._activeIndices = new Yt.e, this._activeParticles = new Yt.e, this._activeBones = new Yt.e, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new dt.g(256), this._processedMaterials = new dt.g(256), this._renderTargets = new dt.d(256), this._materialsRenderTargets = new dt.d(256), this._activeParticleSystems = new dt.g(256), this._activeSkeletons = new dt.d(32), this._softwareSkinnedMeshes = new dt.d(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = Xt.c.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = Mt.f.Create(), this._beforeClearStage = Mt.f.Create(), this._beforeRenderTargetClearStage = Mt.f.Create(), this._gatherRenderTargetsStage = Mt.f.Create(), this._gatherActiveCameraRenderTargetsStage = Mt.f.Create(), this._isReadyForMeshStage = Mt.f.Create(), this._beforeEvaluateActiveMeshStage = Mt.f.Create(), this._evaluateSubMeshStage = Mt.f.Create(), this._preActiveMeshStage = Mt.f.Create(), this._cameraDrawRenderTargetStage = Mt.f.Create(), this._beforeCameraDrawStage = Mt.f.Create(), this._beforeRenderTargetDrawStage = Mt.f.Create(), this._beforeRenderingGroupDrawStage = Mt.f.Create(), this._beforeRenderingMeshStage = Mt.f.Create(), this._afterRenderingMeshStage = Mt.f.Create(), this._afterRenderingGroupDrawStage = Mt.f.Create(), this._afterCameraDrawStage = Mt.f.Create(), this._afterCameraPostProcessStage = Mt.f.Create(), this._afterRenderTargetDrawStage = Mt.f.Create(), this._afterRenderTargetPostProcessStage = Mt.f.Create(), this._afterRenderStage = Mt.f.Create(), this._pointerMoveStage = Mt.f.Create(), this._pointerDownStage = Mt.f.Create(), this._pointerUpStage = Mt.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new mt.c, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const Vt = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...et
        };
        this.defaultCameraLayerMask = Vt.defaultCameraLayerMask, this.defaultRenderableLayerMask = Vt.defaultRenderableLayerMask, tt = this._engine = tt || Jt.d.LastCreatedEngine, Vt.virtual ? tt._virtualScenes.push(this) : (Jt.d._LastCreatedScene = this, tt.scenes.push(this)), (tt.getCreationOptions().useLargeWorldRendering || et?.useFloatingOrigin) && ((0, yt.c)(), this._floatingOriginScene = this, yt.b.vI = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new Nt.b(this), wt.b && (this.postProcessManager = new wt.b(this)), (0, bt.j)() && this.attachControl(), this._createUbo(), Qt.b && (this._imageProcessingConfiguration = new Qt.b), this.setDefaultCandidateProviders(), Vt.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = Vt.useMaterialMeshMap, this.useClonedMeshMap = Vt.useClonedMeshMap, et && et.virtual || tt.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(tt) {
        return this._defaultSubMeshCandidates.data = tt.vJ, this._defaultSubMeshCandidates.length = tt.vJ.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = tt => this._getDefaultSubMeshCandidates(tt), this.getIntersectingSubMeshCandidates = (tt, et) => this._getDefaultSubMeshCandidates(tt), this.getCollidingSubMeshCandidates = (tt, et) => this._getDefaultSubMeshCandidates(tt)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(tt) {
        this._inputManager.pointerX = tt
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(tt) {
        this._inputManager.pointerY = tt
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
      isCachedMaterialInvalid(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== et || this._cachedMaterial !== tt || this._cachedVisibility !== Vt
      }
      Jf() {
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
      simulatePointerMove(tt, et) {
        return this._inputManager.simulatePointerMove(tt, et), this
      }
      simulatePointerDown(tt, et) {
        return this._inputManager.simulatePointerDown(tt, et), this
      }
      simulatePointerUp(tt, et, Vt) {
        return this._inputManager.simulatePointerUp(tt, et, Vt), this
      }
      isPointerCaptured() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(tt)
      }
      attachControl() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(tt, et, Vt)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let tt, et = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const Vt = this.Jf(),
          Ot = Vt.currentRenderPassId;
        Vt.currentRenderPassId = this.activeCamera?.renderPassId ?? Ot;
        let qt = !0;
        for (this._pendingData.length > 0 && (qt = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && qt && (qt = this.depthPeelingRenderer.isReady()), et && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), tt = 0; tt < this.meshes.length; tt++) {
          const Ot = this.meshes[tt];
          if (!Ot.vJ || 0 === Ot.vJ.length) continue;
          if (!Ot.isReady(!0)) {
            qt = !1;
            continue
          }
          const Dt = Ot.hasThinInstances || "InstancedMesh" === Ot.getClassName() || "InstancedLinesMesh" === Ot.getClassName() || Vt.getCaps().instancedArrays && Ot.instances.length > 0;
          for (let tt = 0, et = this._isReadyForMeshStage; tt < et.length; tt++) {
            et[tt].action(Ot, Dt) || (qt = !1)
          }
          if (!et) continue;
          const mt = Ot.material || this.defaultMaterial;
          if (mt)
            if (mt._storeEffectOnSubMeshes)
              for (const tt of Ot.vJ) {
                const et = tt.vf();
                et && et.hasRenderTargetTextures && null != et.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(et) && (this._processedMaterials.push(et), this._materialsRenderTargets.concatWithNoDuplicate(et.getRenderTargetTextures()))
              } else mt.hasRenderTargetTextures && null != mt.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(mt) && (this._processedMaterials.push(mt), this._materialsRenderTargets.concatWithNoDuplicate(mt.getRenderTargetTextures()))
        }
        if (et) {
          for (tt = 0; tt < this._materialsRenderTargets.length; ++tt) {
            this._materialsRenderTargets.data[tt].isReadyForRendering() || (qt = !1)
          }
          for (tt = 0; tt < this.customRenderTargets.length; ++tt) {
            this.customRenderTargets[tt].isReadyForRendering() || (qt = !1)
          }
        }
        for (tt = 0; tt < this.geometries.length; tt++) {
          2 === this.geometries[tt].delayLoadState && (qt = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const Dt of this.activeCameras) Dt.isReady(!0) || (qt = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (qt = !1));
        for (const Dt of this.PJ) Dt.isReady() || (qt = !1);
        if (this.proceduralTexturesEnabled)
          for (const Dt of this.proceduralTextures) Dt.isReady() || (qt = !1);
        if (this.layers)
          for (const Dt of this.layers) Dt.isReady() || (qt = !1);
        if (this.effectLayers)
          for (const Dt of this.effectLayers) Dt.isLayerReady() || (qt = !1);
        for (const Dt of this._isReadyChecks) Dt.isReady() || (qt = !1);
        return Vt.areAllEffectsReady() || (qt = !1), Vt.currentRenderPassId = Ot, qt
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(tt) {
        this.onBeforeRenderObservable.add(tt)
      }
      unregisterBeforeRender(tt) {
        this.onBeforeRenderObservable.removeCallback(tt)
      }
      registerAfterRender(tt) {
        this.onAfterRenderObservable.add(tt)
      }
      unregisterAfterRender(tt) {
        this.onAfterRenderObservable.removeCallback(tt)
      }
      _executeOnceBeforeRender(tt) {
        const et = () => {
          tt(), setTimeout((() => {
            this.unregisterBeforeRender(et)
          }))
        };
        this.registerBeforeRender(et)
      }
      executeOnceBeforeRender(tt, et) {
        void 0 !== et ? setTimeout((() => {
          this._executeOnceBeforeRender(tt)
        }), et) : this._executeOnceBeforeRender(tt)
      }
      addPendingData(tt) {
        this._pendingData.push(tt)
      }
      removePendingData(tt) {
        const et = this.isLoading,
          Vt = this._pendingData.indexOf(tt); - 1 !== Vt && this._pendingData.splice(Vt, 1), et && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(tt) {
        -1 === this._isReadyChecks.indexOf(tt) && this._isReadyChecks.push(tt)
      }
      removeIsReadyCheck(tt) {
        const et = this._isReadyChecks.indexOf(tt); - 1 !== et && this._isReadyChecks.splice(et, 1)
      }
      executeWhenReady(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(tt), null === this._executeWhenReadyTimeoutId && this._checkIsReady(et)
      }
      async whenReadyAsync() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((et => {
          this.executeWhenReady((() => {
            et()
          }), tt)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = Dt.b.Now;
        else if (this.onReadyTimeoutDuration > 0 && Dt.b.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(tt)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(tt)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = Dt.b.Now
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
      setTransformMatrix(tt, et, Vt, Ot) {
        this._multiviewSceneUboIsActive = !!(Vt && Ot && this._multiviewSceneUbo), this._viewUpdateFlag === tt.updateFlag && this._projectionUpdateFlag === et.updateFlag || (this._viewUpdateFlag = tt.updateFlag, this._projectionUpdateFlag = et.updateFlag, this._viewMatrix = tt, this._projectionMatrix = et, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new Xt.c), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? pt.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = pt.e.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(Vt, Ot) : this._sceneUbo.useUbo && (this._sceneUbo.x_("viewProjection", this._transformMatrix), this._sceneUbo.x_("view", this._viewMatrix), this._sceneUbo.x_("projection", this._projectionMatrix), this._sceneUbo.x_("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(tt, et) {
        const Vt = "boolean" === typeof et ? et : et?.trackUBOsInFrame,
          Ot = new lt.c(this._engine, void 0, !1, tt ?? "Fw", void 0, Vt);
        return Ot.addUniform("viewProjection", 16), Ot.addUniform("view", 16), Ot.addUniform("projection", 16), Ot.addUniform("vEyePosition", 4), Ot.addUniform("inverseProjection", 16), Ot
      }
      setSceneUniformBuffer(tt) {
        this._sceneUbo = tt, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : Xt.n.ZeroReadOnly
      }
      getUniqueId() {
        return xt.UniqueId
      }
      oOt(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(tt), tt._resyncLightSources(), tt.parent || tt._addToSceneRootNodes(), qt.c.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(tt)
          })), et)) {
          const et = tt.getChildMeshes();
          for (const tt of et) this.oOt(tt)
        }
      }
      wZ(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Vt = this.meshes.indexOf(tt);
        if (-1 !== Vt && (this.meshes.splice(Vt, 1), tt.parent || tt._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(tt), this.onMeshRemovedObservable.notifyObservers(tt), et) {
          const et = tt.getChildMeshes();
          for (const tt of et) this.wZ(tt)
        }
        return Vt
      }
      addTransformNode(tt) {
        this._blockEntityCollection || tt.vI() === this && -1 !== tt._indexInSceneTransformNodesArray || (tt._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(tt), tt.parent || tt._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(tt))
      }
      removeTransformNode(tt) {
        const et = tt._indexInSceneTransformNodesArray;
        if (-1 !== et) {
          if (et !== this.transformNodes.length - 1) {
            const tt = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[et] = tt, tt._indexInSceneTransformNodesArray = et
          }
          tt._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), tt.parent || tt._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(tt), et
      }
      removeSkeleton(tt) {
        const et = this.skeletons.indexOf(tt);
        return -1 !== et && (this.skeletons.splice(et, 1), this.onSkeletonRemovedObservable.notifyObservers(tt), this._executeActiveContainerCleanup(this._activeSkeletons)), et
      }
      removeMorphTargetManager(tt) {
        const et = this.morphTargetManagers.indexOf(tt);
        return -1 !== et && this.morphTargetManagers.splice(et, 1), et
      }
      removeLight(tt) {
        const et = this.lights.indexOf(tt);
        if (-1 !== et) {
          for (const et of this.meshes) et._removeLightSource(tt, !1);
          this.lights.splice(et, 1), this.sortLightsByPriority(), tt.parent || tt._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(tt)
        }
        return et
      }
      removeCamera(tt) {
        const et = this.cameras.indexOf(tt);
        if (-1 !== et && (this.cameras.splice(et, 1), tt.parent || tt._removeFromSceneRootNodes()), this.activeCameras) {
          const et = this.activeCameras.indexOf(tt); - 1 !== et && this.activeCameras.splice(et, 1)
        }
        return this.activeCamera === tt && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(tt), et
      }
      removeParticleSystem(tt) {
        const et = this.PJ.indexOf(tt);
        return -1 !== et && (this.PJ.splice(et, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(tt), et
      }
      removeAnimation(tt) {
        const et = this.animations.indexOf(tt);
        return -1 !== et && this.animations.splice(et, 1), et
      }
      stopAnimation(tt, et, Vt) {}
      removeAnimationGroup(tt) {
        const et = this.animationGroups.indexOf(tt);
        return -1 !== et && this.animationGroups.splice(et, 1), this.onAnimationGroupRemovedObservable.notifyObservers(tt), et
      }
      removeMultiMaterial(tt) {
        const et = this.multiMaterials.indexOf(tt);
        return -1 !== et && this.multiMaterials.splice(et, 1), this.onMultiMaterialRemovedObservable.notifyObservers(tt), et
      }
      removeMaterial(tt) {
        const et = tt._indexInSceneMaterialArray;
        if (-1 !== et && et < this.materials.length) {
          if (et !== this.materials.length - 1) {
            const tt = this.materials[this.materials.length - 1];
            this.materials[et] = tt, tt._indexInSceneMaterialArray = et
          }
          tt._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(tt), et
      }
      removeActionManager(tt) {
        const et = this.actionManagers.indexOf(tt);
        return -1 !== et && this.actionManagers.splice(et, 1), et
      }
      removeTexture(tt) {
        const et = this.textures.indexOf(tt);
        return -1 !== et && this.textures.splice(et, 1), this.onTextureRemovedObservable.notifyObservers(tt), et
      }
      removeFrameGraph(tt) {
        const et = this.frameGraphs.indexOf(tt);
        return -1 !== et && this.frameGraphs.splice(et, 1), this.onFrameGraphRemovedObservable.notifyObservers(tt), et
      }
      removeObjectRenderer(tt) {
        const et = this.objectRenderers.indexOf(tt);
        return -1 !== et && this.objectRenderers.splice(et, 1), this.onObjectRendererRemovedObservable.notifyObservers(tt), et
      }
      removePostProcess(tt) {
        const et = this.postProcesses.indexOf(tt);
        return -1 !== et && this.postProcesses.splice(et, 1), this.onPostProcessRemovedObservable.notifyObservers(tt), et
      }
      removeEffectLayer(tt) {
        const et = this.effectLayers.indexOf(tt);
        return -1 !== et && this.effectLayers.splice(et, 1), this.onEffectLayerRemovedObservable.notifyObservers(tt), et
      }
      addLight(tt) {
        if (!this._blockEntityCollection) {
          this.lights.push(tt), this.sortLightsByPriority(), tt.parent || tt._addToSceneRootNodes();
          for (const et of this.meshes) - 1 === et.lightSources.indexOf(tt) && (et.lightSources.push(tt), et._resyncLightSources());
          qt.c.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(tt)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(gt.d.CompareLightsPriority)
      }
      addCamera(tt) {
        this._blockEntityCollection || (this.cameras.push(tt), qt.c.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(tt)
        })), tt.parent || tt._addToSceneRootNodes())
      }
      addSkeleton(tt) {
        this._blockEntityCollection || (this.skeletons.push(tt), qt.c.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(tt)
        })))
      }
      addParticleSystem(tt) {
        this._blockEntityCollection || (this.PJ.push(tt), qt.c.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(tt)
        })))
      }
      addAnimation(tt) {
        this._blockEntityCollection || this.animations.push(tt)
      }
      addAnimationGroup(tt) {
        this._blockEntityCollection || (this.animationGroups.push(tt), qt.c.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(tt)
        })))
      }
      addMultiMaterial(tt) {
        this._blockEntityCollection || (this.multiMaterials.push(tt), qt.c.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(tt)
        })))
      }
      addMaterial(tt) {
        this._blockEntityCollection || tt.vI() === this && -1 !== tt._indexInSceneMaterialArray || (tt._indexInSceneMaterialArray = this.materials.length, this.materials.push(tt), qt.c.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(tt)
        })))
      }
      addMorphTargetManager(tt) {
        this._blockEntityCollection || this.morphTargetManagers.push(tt)
      }
      addGeometry(tt) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[tt.uniqueId] = this.geometries.length), this.geometries.push(tt))
      }
      addActionManager(tt) {
        this.actionManagers.push(tt)
      }
      addTexture(tt) {
        this._blockEntityCollection || (this.textures.push(tt), this.onNewTextureAddedObservable.notifyObservers(tt))
      }
      addFrameGraph(tt) {
        this.frameGraphs.push(tt), qt.c.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(tt)
        }))
      }
      addObjectRenderer(tt) {
        this.objectRenderers.push(tt), qt.c.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(tt)
        }))
      }
      addPostProcess(tt) {
        this._blockEntityCollection || (this.postProcesses.push(tt), qt.c.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(tt)
        })))
      }
      addEffectLayer(tt) {
        this._blockEntityCollection || (this.effectLayers.push(tt), qt.c.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(tt)
        })))
      }
      switchActiveCamera(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = tt, et && tt.attachControl())
      }
      setActiveCameraById(tt) {
        const et = this.getCameraById(tt);
        return et ? (this.activeCamera = et, et) : null
      }
      setActiveCameraByName(tt) {
        const et = this.getCameraByName(tt);
        return et ? (this.activeCamera = et, et) : null
      }
      getAnimationGroupByName(tt) {
        for (let et = 0; et < this.animationGroups.length; et++)
          if (this.animationGroups[et].name === tt) return this.animationGroups[et];
        return null
      }
      _getMaterial(tt, et) {
        for (let Vt = 0; Vt < this.materials.length; Vt++) {
          const tt = this.materials[Vt];
          if (et(tt)) return tt
        }
        if (tt)
          for (let Vt = 0; Vt < this.multiMaterials.length; Vt++) {
            const tt = this.multiMaterials[Vt];
            if (et(tt)) return tt
          }
        return null
      }
      getMaterialByUniqueID(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(tt, et)
      }
      getMaterialByUniqueId(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(et, (et => et.uniqueId === tt))
      }
      getMaterialById(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(et, (et => et.id === tt))
      }
      getMaterialByName(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(et, (et => et.name === tt))
      }
      getLastMaterialById(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let Vt = this.materials.length - 1; Vt >= 0; Vt--)
          if (this.materials[Vt].id === tt) return this.materials[Vt];
        if (et)
          for (let Vt = this.multiMaterials.length - 1; Vt >= 0; Vt--)
            if (this.multiMaterials[Vt].id === tt) return this.multiMaterials[Vt];
        return null
      }
      getTextureByUniqueId(tt) {
        for (let et = 0; et < this.textures.length; et++)
          if (this.textures[et].uniqueId === tt) return this.textures[et];
        return null
      }
      getTextureByName(tt) {
        for (let et = 0; et < this.textures.length; et++)
          if (this.textures[et].name === tt) return this.textures[et];
        return null
      }
      getCameraById(tt) {
        for (let et = 0; et < this.cameras.length; et++)
          if (this.cameras[et].id === tt) return this.cameras[et];
        return null
      }
      getCameraByUniqueId(tt) {
        for (let et = 0; et < this.cameras.length; et++)
          if (this.cameras[et].uniqueId === tt) return this.cameras[et];
        return null
      }
      getCameraByName(tt) {
        for (let et = 0; et < this.cameras.length; et++)
          if (this.cameras[et].name === tt) return this.cameras[et];
        return null
      }
      getBoneById(tt) {
        for (let et = 0; et < this.skeletons.length; et++) {
          const Vt = this.skeletons[et];
          for (let et = 0; et < Vt.bones.length; et++)
            if (Vt.bones[et].id === tt) return Vt.bones[et]
        }
        return null
      }
      getBoneByName(tt) {
        for (let et = 0; et < this.skeletons.length; et++) {
          const Vt = this.skeletons[et];
          for (let et = 0; et < Vt.bones.length; et++)
            if (Vt.bones[et].name === tt) return Vt.bones[et]
        }
        return null
      }
      getLightByName(tt) {
        for (let et = 0; et < this.lights.length; et++)
          if (this.lights[et].name === tt) return this.lights[et];
        return null
      }
      getLightById(tt) {
        for (let et = 0; et < this.lights.length; et++)
          if (this.lights[et].id === tt) return this.lights[et];
        return null
      }
      getLightByUniqueId(tt) {
        for (let et = 0; et < this.lights.length; et++)
          if (this.lights[et].uniqueId === tt) return this.lights[et];
        return null
      }
      getParticleSystemById(tt) {
        for (let et = 0; et < this.PJ.length; et++)
          if (this.PJ[et].id === tt) return this.PJ[et];
        return null
      }
      getGeometryById(tt) {
        for (let et = 0; et < this.geometries.length; et++)
          if (this.geometries[et].id === tt) return this.geometries[et];
        return null
      }
      _getGeometryByUniqueId(tt) {
        if (this._geometriesByUniqueId) {
          const et = this._geometriesByUniqueId[tt];
          if (void 0 !== et) return this.geometries[et]
        } else
          for (let et = 0; et < this.geometries.length; et++)
            if (this.geometries[et].uniqueId === tt) return this.geometries[et];
        return null
      }
      getFrameGraphByName(tt) {
        for (let et = 0; et < this.frameGraphs.length; et++)
          if (this.frameGraphs[et].name === tt) return this.frameGraphs[et];
        return null
      }
      pushGeometry(tt, et) {
        return !(!et && this._getGeometryByUniqueId(tt.uniqueId)) && (this.addGeometry(tt), qt.c.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(tt)
        })), !0)
      }
      removeGeometry(tt) {
        let et;
        if (this._geometriesByUniqueId) {
          if (et = this._geometriesByUniqueId[tt.uniqueId], void 0 === et) return !1
        } else if (et = this.geometries.indexOf(tt), et < 0) return !1;
        if (et !== this.geometries.length - 1) {
          const tt = this.geometries[this.geometries.length - 1];
          tt && (this.geometries[et] = tt, this._geometriesByUniqueId && (this._geometriesByUniqueId[tt.uniqueId] = et))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[tt.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(tt), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(tt) {
        for (let et = 0; et < this.meshes.length; et++)
          if (this.meshes[et].id === tt) return this.meshes[et];
        return null
      }
      getMeshesById(tt) {
        return this.meshes.filter((function(et) {
          return et.id === tt
        }))
      }
      getTransformNodeById(tt) {
        for (let et = 0; et < this.transformNodes.length; et++)
          if (this.transformNodes[et].id === tt) return this.transformNodes[et];
        return null
      }
      getTransformNodeByUniqueId(tt) {
        for (let et = 0; et < this.transformNodes.length; et++)
          if (this.transformNodes[et].uniqueId === tt) return this.transformNodes[et];
        return null
      }
      getTransformNodesById(tt) {
        return this.transformNodes.filter((function(et) {
          return et.id === tt
        }))
      }
      getMeshByUniqueId(tt) {
        for (let et = 0; et < this.meshes.length; et++)
          if (this.meshes[et].uniqueId === tt) return this.meshes[et];
        return null
      }
      getLastMeshById(tt) {
        for (let et = this.meshes.length - 1; et >= 0; et--)
          if (this.meshes[et].id === tt) return this.meshes[et];
        return null
      }
      getLastTransformNodeById(tt) {
        for (let et = this.transformNodes.length - 1; et >= 0; et--)
          if (this.transformNodes[et].id === tt) return this.transformNodes[et];
        return null
      }
      getLastEntryById(tt) {
        let et;
        for (et = this.meshes.length - 1; et >= 0; et--)
          if (this.meshes[et].id === tt) return this.meshes[et];
        for (et = this.transformNodes.length - 1; et >= 0; et--)
          if (this.transformNodes[et].id === tt) return this.transformNodes[et];
        for (et = this.cameras.length - 1; et >= 0; et--)
          if (this.cameras[et].id === tt) return this.cameras[et];
        for (et = this.lights.length - 1; et >= 0; et--)
          if (this.lights[et].id === tt) return this.lights[et];
        for (et = this.skeletons.length - 1; et >= 0; et--) {
          const Vt = this.skeletons[et];
          for (let et = Vt.bones.length - 1; et >= 0; et--)
            if (Vt.bones[et].id === tt) return Vt.bones[et]
        }
        return null
      }
      getNodeById(tt) {
        const et = this.getMeshById(tt);
        if (et) return et;
        const Vt = this.getTransformNodeById(tt);
        if (Vt) return Vt;
        const Ot = this.getLightById(tt);
        if (Ot) return Ot;
        const qt = this.getCameraById(tt);
        if (qt) return qt;
        const Dt = this.getBoneById(tt);
        return Dt || null
      }
      getNodeByName(tt) {
        const et = this.getMeshByName(tt);
        if (et) return et;
        const Vt = this.getTransformNodeByName(tt);
        if (Vt) return Vt;
        const Ot = this.getLightByName(tt);
        if (Ot) return Ot;
        const qt = this.getCameraByName(tt);
        if (qt) return qt;
        const Dt = this.getBoneByName(tt);
        return Dt || null
      }
      getMeshByName(tt) {
        for (let et = 0; et < this.meshes.length; et++)
          if (this.meshes[et].name === tt) return this.meshes[et];
        return null
      }
      getTransformNodeByName(tt) {
        for (let et = 0; et < this.transformNodes.length; et++)
          if (this.transformNodes[et].name === tt) return this.transformNodes[et];
        return null
      }
      getLastSkeletonById(tt) {
        for (let et = this.skeletons.length - 1; et >= 0; et--)
          if (this.skeletons[et].id === tt) return this.skeletons[et];
        return null
      }
      getSkeletonByUniqueId(tt) {
        for (let et = 0; et < this.skeletons.length; et++)
          if (this.skeletons[et].uniqueId === tt) return this.skeletons[et];
        return null
      }
      getSkeletonById(tt) {
        for (let et = 0; et < this.skeletons.length; et++)
          if (this.skeletons[et].id === tt) return this.skeletons[et];
        return null
      }
      getSkeletonByName(tt) {
        for (let et = 0; et < this.skeletons.length; et++)
          if (this.skeletons[et].name === tt) return this.skeletons[et];
        return null
      }
      getMorphTargetManagerById(tt) {
        for (let et = 0; et < this.morphTargetManagers.length; et++)
          if (this.morphTargetManagers[et].uniqueId === tt) return this.morphTargetManagers[et];
        return null
      }
      getMorphTargetById(tt) {
        for (let et = 0; et < this.morphTargetManagers.length; ++et) {
          const Vt = this.morphTargetManagers[et];
          for (let et = 0; et < Vt.numTargets; ++et) {
            const Ot = Vt.getTarget(et);
            if (Ot.id === tt) return Ot
          }
        }
        return null
      }
      getMorphTargetByName(tt) {
        for (let et = 0; et < this.morphTargetManagers.length; ++et) {
          const Vt = this.morphTargetManagers[et];
          for (let et = 0; et < Vt.numTargets; ++et) {
            const Ot = Vt.getTarget(et);
            if (Ot.name === tt) return Ot
          }
        }
        return null
      }
      getPostProcessByName(tt) {
        for (let et = 0; et < this.postProcesses.length; ++et) {
          const Vt = this.postProcesses[et];
          if (Vt.name === tt) return Vt
        }
        return null
      }
      isActiveMesh(tt) {
        return -1 !== this._activeMeshes.indexOf(tt)
      }
      get uid() {
        return this._uid || (this._uid = Ot.l.RandomId()), this._uid
      }
      addExternalData(tt, et) {
        return this._externalData || (this._externalData = new jt), this._externalData.add(tt, et)
      }
      getExternalData(tt) {
        return this._externalData ? this._externalData.get(tt) : null
      }
      getOrAddExternalDataWithFactory(tt, et) {
        return this._externalData || (this._externalData = new jt), this._externalData.getOrAddWithFactory(tt, et)
      }
      removeExternalData(tt) {
        return this._externalData.remove(tt)
      }
      _evaluateSubMesh(tt, et, Vt, Ot) {
        if (Ot || tt.isInFrustum(this._frustumPlanes)) {
          for (let Ot = 0, qt = this._evaluateSubMeshStage; Ot < qt.length; Ot++) {
            qt[Ot].action(et, tt)
          }
          const Vt = tt.vf();
          null !== Vt && void 0 !== Vt && (Vt.hasRenderTargetTextures && null != Vt.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Vt) && (this._processedMaterials.push(Vt), this._materialsRenderTargets.concatWithNoDuplicate(Vt.getRenderTargetTextures())), this._renderingManager.dispatch(tt, et, Vt))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(tt) {
        this._preventFreeActiveMeshesAndRenderingGroups !== tt && (tt && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = tt)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let tt = 0; tt < this.activeCameras.length; tt++) {
            const et = this.activeCameras[tt];
            et && et._activeMeshes && et._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let tt = 0; tt < this.textures.length; tt++) {
            const et = this.textures[tt];
            et && et.renderList && et.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          Dt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const mt = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const tt of mt) tt.objectRenderer._freezeActiveMeshes(Ot);
          return this._freezeActiveMeshesCancel = (0, qt.g)((() => {
            let tt = !0,
              et = !0;
            for (const Vt of mt) tt && (tt = Vt.objectRenderer._isFrozen), et && (et = null !== Vt.objectRenderer._freezeActiveMeshesCancel);
            if (tt) return !0;
            if (!et) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Dt, this._skipEvaluateActiveMeshesCompletely = tt, et?.()
          }), ((tt, et) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), et) {
              const et = "Scene: Timeout while waiting for meshes to be frozen.";
              Vt ? Vt(et) : (eV.d.Error(et), tt && eV.d.Error(tt))
            } else {
              const et = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              Vt ? Vt(et) : (eV.d.Error(et), tt && (eV.d.Error(tt), tt.stack && eV.d.Error(tt.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Dt, this._skipEvaluateActiveMeshesCompletely = tt, Ot)
              for (let tt = 0; tt < this._activeMeshes.length; tt++) this._activeMeshes.data[tt]._freeze();
            et && et()
          } else Vt && Vt("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let tt = 0; tt < this.meshes.length; tt++) {
          const et = this.meshes[tt];
          et._internalAbstractMeshDataInfo && (et._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const tt = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const et of tt) et.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let tt = 0; tt < this._activeMeshes.length; tt++) this._activeMeshes.data[tt]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(tt) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => tt.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const tt = this._activeMeshes.length;
            for (let et = 0; et < tt; et++) {
              this._activeMeshes.data[et].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const tt = this._activeParticleSystems.length;
            for (let et = 0; et < tt; et++) this._activeParticleSystems.data[et].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let qt = 0, Dt = this._beforeEvaluateActiveMeshStage; qt < Dt.length; qt++) {
          Dt[qt].action()
        }
        const tt = this.getActiveMeshCandidates(),
          et = tt.length,
          Vt = Yt.e.Enabled,
          Ot = this.customLODSelector;
        for (let qt = 0; qt < et; qt++) {
          const et = tt.data[qt],
            Dt = !Ot && !et.pI && !et._internalMeshDataInfo?._LODLevels.length;
          let mt, dt;
          if ((Dt || (mt = et._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), mt ? mt[1] = -1 : (mt = [et, -1], et._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, mt))), !et.isBlocked) && (Vt && this._totalVertices.addCount(et.getTotalVertices(), !1), et.isReady() && et.isEnabled() && !et.cj.hasAZeroComponent)) {
            if (et.computeWorldMatrix(), et.actionManager && et.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(et), Dt) dt = et;
            else if (dt = Ot ? Ot(et, this.activeCamera) : et.getLOD(this.activeCamera), mt[0] = dt, mt[1] = this._frameId, void 0 === dt || null === dt) continue;
            if (dt !== et && 0 !== dt.billboardMode && dt.computeWorldMatrix(), et._preActivate(), et.isVisible && et.visibility > 0 && 0 !== (et.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || et.Cf || et.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(et), this.activeCamera._activeMeshes.push(et), dt !== et && dt._activate(this._renderId, !1);
              for (let tt = 0, Vt = this._preActiveMeshStage; tt < Vt.length; tt++) {
                Vt[tt].action(et)
              }
              et._activate(this._renderId, !1) && (et.pI ? et._internalAbstractMeshDataInfo._actAsRegularMesh && (dt = et) : dt._internalAbstractMeshDataInfo._onlyForInstances = !1, dt._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(et, dt)), et._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let tt = 0; tt < this.PJ.length; tt++) {
            const et = this.PJ[tt];
            if (!et.isStarted() || !et.emitter) continue;
            const Vt = et.emitter;
            Vt.position && !Vt.isEnabled() || (this._activeParticleSystems.push(et), et.animate(), this._renderingManager.dispatchParticles(et))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(tt) {
        this._skeletonsEnabled && tt.skeleton && (this._activeSkeletons.pushNoDuplicate(tt.skeleton) && (tt.skeleton.prepare(), this._activeBones.addCount(tt.skeleton.bones.length, !1)), tt.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(tt) && this.frameGraph && tt.applySkeleton(tt.skeleton))
      }
      _activeMesh(tt, et) {
        this._prepareSkeleton(et);
        let Vt = tt.cqt || tt.pI || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || et.Cf;
        if (et && et.vJ && et.vJ.length > 0) {
          const Ot = this.getActiveSubMeshCandidates(et),
            qt = Ot.length;
          Vt = Vt || 1 === qt;
          for (let Dt = 0; Dt < qt; Dt++) {
            const qt = Ot.data[Dt];
            this._evaluateSubMesh(qt, et, tt, Vt)
          }
        }
      }
      updateTransformMatrix(tt) {
        const et = this.activeCamera;
        if (et)
          if (et._renderingMultiview) {
            const Vt = et._rigCameras[0],
              Ot = et._rigCameras[1];
            this.setTransformMatrix(Vt.getViewMatrix(), Vt.getProjectionMatrix(tt), Ot.getViewMatrix(), Ot.getProjectionMatrix(tt))
          } else this.setTransformMatrix(et.getViewMatrix(), et.getProjectionMatrix(tt))
      }
      _bindFrameBuffer(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (tt && tt._multiviewTexture ? tt._multiviewTexture._bindFrameBuffer() : tt && tt.outputRenderTarget ? tt.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), et && this._clearFrameBuffer(tt)
      }
      _clearFrameBuffer(tt) {
        if (tt && tt._multiviewTexture);
        else if (tt && tt.outputRenderTarget && !tt._renderingMultiview) {
          const et = tt.outputRenderTarget;
          et.onClearObservable.hasObservers() ? et.onClearObservable.notifyObservers(this._engine) : et.skipInitialClear || tt.isRightCamera || (this.autoClear && this._engine.clear(et.clearColor || this._clearColor, !et._cleared, !0, !0), et._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(tt, et) {
        let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (tt && tt._skipRendering) return;
        const qt = this._engine;
        if (this._activeCamera = tt, !this.activeCamera) throw new Error("Active camera not set");
        if (qt.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && Vt) {
          let et = !0;
          tt._renderingMultiview && tt.outputRenderTarget && (et = tt.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, tt.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), tt._renderingMultiview && tt.outputRenderTarget && (tt.outputRenderTarget.skipInitialClear = et)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = tt.outputRenderTarget?.renderPassId ?? tt.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let Ot = 0; Ot < this._softwareSkinnedMeshes.length; Ot++) {
          const tt = this._softwareSkinnedMeshes.data[Ot];
          tt.applySkeleton(tt.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), tt.customRenderTargets && tt.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(tt.customRenderTargets), et && et.customRenderTargets && et.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(et.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let Ot = 0, dt = this._gatherActiveCameraRenderTargetsStage; Ot < dt.length; Ot++) {
          dt[Ot].action(this._renderTargets)
        }
        let Dt = !1;
        if (this.renderTargetsEnabled) {
          let tt;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            Ot.l.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const et = this.getBoundingBoxRenderer?.();
            for (let Vt = 0; Vt < this._renderTargets.length; Vt++) {
              const Ot = this._renderTargets.data[Vt];
              if (Ot._shouldRender()) {
                this._renderId++;
                const Vt = Ot.activeCamera && Ot.activeCamera !== this.activeCamera;
                et && !tt && (tt = et.renderList.length > 0 ? et.renderList.data.slice() : [], tt.length = et.renderList.length), Ot.render(Vt, this.dumpNextRenderTargets), Dt = !0
              }
            }
            et && tt && (et.renderList.data = tt, et.renderList.length = tt.length), Ot.l.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const et = this.getBoundingBoxRenderer?.();
            et && !tt && (tt = et.renderList.length > 0 ? et.renderList.data.slice() : [], tt.length = et.renderList.length);
            for (let tt = 0, Vt = this._cameraDrawRenderTargetStage; tt < Vt.length; tt++) {
              Dt = Vt[tt].action(this.activeCamera) || Dt
            }
            et && tt && (et.renderList.data = tt, et.renderList.length = tt.length)
          }
          this._intermediateRendering = !1
        }
        Dt && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || tt._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let Ot = 0, dt = this._beforeCameraDrawStage; Ot < dt.length; Ot++) {
          dt[Ot].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const mt = qt.snapshotRendering && 1 === qt.snapshotRenderingMode;
        mt && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !mt), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let Ot = 0, dt = this._afterCameraDrawStage; Ot < dt.length; Ot++) {
          dt[Ot].action(this.activeCamera)
        }
        if (this.postProcessManager && !tt._multiviewTexture) {
          const et = tt.outputRenderTarget ? tt.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(tt.isIntermediate, et)
        }
        for (let Ot = 0, dt = this._afterCameraPostProcessStage; Ot < dt.length; Ot++) {
          dt[Ot].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === tt.cameraRigMode || tt._renderingMultiview) return tt._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(tt, void 0, et), void this.onAfterRenderCameraObservable.notifyObservers(tt);
        if (tt._useMultiviewToSingleView) this._renderMultiviewToSingleView(tt);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(tt);
          for (let et = 0; et < tt._rigCameras.length; et++) this._renderForCamera(tt._rigCameras[et], tt)
        }
        this._activeCamera = tt, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(tt)
      }
      _checkIntersections() {
        for (let tt = 0; tt < this._meshesForIntersections.length; tt++) {
          const et = this._meshesForIntersections.data[tt];
          if (et.actionManager)
            for (let tt = 0; et.actionManager && tt < et.actionManager.actions.length; tt++) {
              const Vt = et.actionManager.actions[tt];
              if (12 === Vt.trigger || 13 === Vt.trigger) {
                const tt = Vt.getTriggerParameter(),
                  Ot = tt.mesh ? tt.mesh : tt,
                  qt = Ot.uqt(et, tt.usePreciseIntersection),
                  Dt = et._intersectionsInProgress.indexOf(Ot);
                qt && -1 === Dt ? 12 === Vt.trigger ? (Vt._executeCurrent(ft.CreateNew(et, void 0, Ot)), et._intersectionsInProgress.push(Ot)) : 13 === Vt.trigger && et._intersectionsInProgress.push(Ot) : !qt && Dt > -1 && (13 === Vt.trigger && Vt._executeCurrent(ft.CreateNew(et, void 0, Ot)), et.actionManager.hasSpecificTrigger(13, (tt => {
                  const et = tt.mesh ? tt.mesh : tt;
                  return Ot === et
                })) && 13 !== Vt.trigger || et._intersectionsInProgress.splice(Dt, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(tt) {}
      _animate(tt) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let tt = Math.max(mV.MinDeltaTime, Math.min(this._engine.getDeltaTime(), mV.MaxDeltaTime)) + this._timeAccumulator;
          const et = this._engine.getTimeStep(),
            Vt = 1e3 / et / 1e3;
          let Ot = 0;
          const qt = this._engine.getLockstepMaxSteps();
          let Dt = Math.floor(tt / et);
          for (Dt = Math.min(Dt, qt); tt > 0 && Ot < Dt;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = et * Vt, this._animate(et), this.onAfterAnimationsObservable.notifyObservers(this), this.zk && this._advancePhysicsEngineStep(et), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, Ot++, tt -= et;
          this._timeAccumulator = tt < 0 ? 0 : tt
        } else {
          const tt = this.useConstantAnimationDeltaTime ? 16 : Math.max(mV.MinDeltaTime, Math.min(this._engine.getDeltaTime(), mV.MaxDeltaTime));
          this._animationRatio = .06 * tt, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.zk && this._advancePhysicsEngineStep(tt)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(tt) {
        if (tt?.outputRenderTarget && !tt?.isRigCamera && (tt.outputRenderTarget._cleared = !1), tt?.rigCameras?.length)
          for (let et = 0; et < tt.rigCameras.length; ++et) {
            const Vt = tt.rigCameras[et].outputRenderTarget;
            Vt && (Vt._cleared = !1)
          }
      }
      resetDrawCache(tt) {
        if (this.meshes)
          for (const et of this.meshes) et.resetDrawCache(tt)
      }
      _renderWithFrameGraph() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          et = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, tt)
          for (const Vt of this.cameras)
            if (Vt.update(), 0 !== Vt.cameraRigMode)
              for (let tt = 0; tt < Vt._rigCameras.length; tt++) Vt._rigCameras[tt].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(et)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(tt) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const et = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Ot.l.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let tt = 0; tt < this._renderTargets.length; tt++) {
            const Vt = this._renderTargets.data[tt],
              Ot = Vt.activeCamera || et;
            this._renderRenderTarget(Vt, Ot, !0, this.dumpNextRenderTargets)
          }
          Ot.l.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let Vt = 0, Ot = this._beforeClearStage; Vt < Ot.length; Vt++) {
          Ot[Vt].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const et = this.getActiveMeshCandidates(),
            Vt = et.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let tt = 0; tt < Vt; tt++) {
                const Vt = et.data[tt];
                Vt._internalAbstractMeshDataInfo._wasActiveLastFrame && Vt.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const tt = this._activeParticleSystems.length;
              for (let et = 0; et < tt; et++) this._activeParticleSystems.data[et].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let Ot = 0; Ot < Vt; Ot++) {
              const Vt = et.data[Ot];
              Vt._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, Vt.isBlocked || (this._totalVertices.addCount(Vt.getTotalVertices(), !1), Vt.isReady() && Vt.isEnabled() && !Vt.cj.hasAZeroComponent && (Vt.computeWorldMatrix(tt), Vt.actionManager && Vt.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Vt)))
            }
            if (this.particlesEnabled)
              for (let tt = 0; tt < this.PJ.length; tt++) {
                const et = this.PJ[tt];
                if (!et.isStarted() || !et.emitter) continue;
                const Vt = et.emitter;
                Vt.position && !Vt.isEnabled() || (this._activeParticleSystems.push(et), et.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, tt._shouldRender()) {
          if (this._renderId++, this.activeCamera = et, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), tt.render(Vt, Ot)
        }
        this._intermediateRendering = !1
      }
      render() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.bC) return;
        const Vt = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(tt, et)
        } finally {
          this._renderingMeshEvaluationDepth = Vt
        }
      }
      _renderFrame(tt, et) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), yt.b.vI = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const Vt of this.activeCameras) this._checkCameraRenderTarget(Vt);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), et || this.animate();
        for (let Vt = 0, Ot = this._beforeCameraUpdateStage; Vt < Ot.length; Vt++) {
          Ot[Vt].action()
        }
        if (tt)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Vt = 0; Vt < this.activeCameras.length; Vt++) {
              const tt = this.activeCameras[Vt];
              if (tt.update(), 0 !== tt.cameraRigMode)
                for (let et = 0; et < tt._rigCameras.length; et++) tt._rigCameras[et].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let Vt = 0; Vt < this.activeCamera._rigCameras.length; Vt++) this.activeCamera._rigCameras[Vt].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(tt, et);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const tt = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            Ot.l.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let et = 0; et < this.customRenderTargets.length; et++) {
              const Vt = this.customRenderTargets[et],
                Ot = Vt.activeCamera || this.activeCamera;
              this._renderRenderTarget(Vt, Ot, tt !== Ot, this.dumpNextRenderTargets)
            }
            Ot.l.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = tt?.renderPassId ?? 0, this.activeCamera = tt, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let et = 0, Vt = this._beforeClearStage; et < Vt.length; et++) {
            Vt[et].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let et = 0, Vt = this._gatherRenderTargetsStage; et < Vt.length; et++) {
            Vt[et].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let et = 0; et < this.activeCameras.length; et++) this._processSubCameras(this.activeCameras[et], et > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let Vt = 0, Ot = this._afterRenderStage; Vt < Ot.length; Vt++) {
          Ot[Vt].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let tt = 0; tt < this._toBeDisposed.length; tt++) {
            const et = this._toBeDisposed[tt];
            et && et.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let tt = 0; tt < this.materials.length; tt++) this.materials[tt].freeze()
      }
      unfreezeMaterials() {
        for (let tt = 0; tt < this.materials.length; tt++) this.materials[tt].unfreeze()
      }
      dispose() {
        if (this.bC) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, Ct.b)(this.stopAllAnimations)) {
          for (const tt of this._activeAnimatables) tt.onAnimationEndObservable.clear(), tt.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const tt = this._activeRequests.slice();
        for (const Dt of tt) Dt.abort();
        this._activeRequests.length = 0;
        try {
          this.ZI.notifyObservers(this)
        } catch (qt) {
          eV.d.Error("An error occurred while calling onDisposeObservable!", qt)
        }
        this.detachControl();
        const et = this._engine.getInputElement?.();
        if (et)
          for (let Dt = 0; Dt < this.cameras.length; Dt++) this.cameras[Dt].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (tt => tt.dispose(!0))), this._disposeList(this.transformNodes, (tt => tt.dispose(!0)));
        const Vt = this.cameras;
        this._disposeList(Vt), this._disposeList(this.PJ), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let Ot = this._engine.scenes.indexOf(this);
        if (Ot > -1 && this._engine.scenes.splice(Ot, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, yt.d)(), Jt.d._LastCreatedScene === this) {
          Jt.d._LastCreatedScene = null;
          let tt = Jt.d.Instances.length - 1;
          for (; tt >= 0;) {
            const et = Jt.d.Instances[tt];
            if (et.scenes.length > 0) {
              Jt.d._LastCreatedScene = et.scenes[this._engine.scenes.length - 1];
              break
            }
            tt--
          }
        }
        Ot = this._engine._virtualScenes.indexOf(this), Ot > -1 && this._engine._virtualScenes.splice(Ot, 1), this._engine.wipeCaches(!0), this.ZI.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(tt, et) {
        const Vt = tt.slice(0);
        et = et ?? (tt => tt.dispose());
        for (const Ot of Vt) et(Ot);
        tt.length = 0
      }
      get bC() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let tt = 0; tt < this.meshes.length; tt++) {
          const et = this.meshes[tt].geometry;
          et && et.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const tt of this.textures) {
          tt._buffer && (tt._buffer = null)
        }
      }
      getWorldExtends(tt) {
        const et = new Xt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Vt = new Xt.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        tt = tt || (() => !0);
        const Ot = this.meshes.filter(tt);
        for (const qt of Ot) {
          if (qt.computeWorldMatrix(!0), !qt.vJ || 0 === qt.vJ.length || qt.infiniteDistance) continue;
          const tt = qt.fL(),
            Ot = tt.boundingBox.minimumWorld,
            Dt = tt.boundingBox.maximumWorld;
          Xt.n.CheckExtends(Ot, et, Vt), Xt.n.CheckExtends(Dt, et, Vt)
        }
        return et.x === Number.MAX_VALUE ? {
          min: Xt.n.Zero(),
          max: Xt.n.Zero()
        } : {
          min: et,
          max: Vt
        }
      }
      createPickingRay(tt, et, Vt, Ot) {
        throw (0, Ct.e)("Ray")
      }
      createPickingRayToRef(tt, et, Vt, Ot, qt) {
        throw (0, Ct.e)("Ray")
      }
      createPickingRayInCameraSpace(tt, et, Vt) {
        throw (0, Ct.e)("Ray")
      }
      createPickingRayInCameraSpaceToRef(tt, et, Vt, Ot) {
        throw (0, Ct.e)("Ray")
      }
      il(tt, et, Vt, Ot, qt, Dt) {
        const mt = (0, Ct.e)("Ray", !0);
        return mt && eV.d.Warn(mt), new Et.b
      }
      pickWithBoundingInfo(tt, et, Vt, Ot, qt) {
        const Dt = (0, Ct.e)("Ray", !0);
        return Dt && eV.d.Warn(Dt), new Et.b
      }
      pickWithRay(tt, et, Vt, Ot) {
        throw (0, Ct.e)("Ray")
      }
      multiPick(tt, et, Vt, Ot, qt) {
        throw (0, Ct.e)("Ray")
      }
      multiPickWithRay(tt, et, Vt) {
        throw (0, Ct.e)("Ray")
      }
      setPointerOverMesh(tt, et, Vt) {
        this._inputManager.setPointerOverMesh(tt, et, Vt)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const tt of this.geometries) tt._rebuild();
        for (const tt of this.meshes) tt._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const tt of this._components) tt.rebuild();
        for (const tt of this.PJ) tt.rebuild();
        if (this.spriteManagers)
          for (const tt of this.spriteManagers) tt.rebuild()
      }
      _rebuildTextures() {
        for (const tt of this.textures) tt._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(tt, et, Vt) {
        if (void 0 === et) return tt;
        const Ot = [];
        for (const qt in tt) {
          const Dt = tt[qt];
          Ht.d && Ht.d.MatchesQuery(Dt, et) && (!Vt || Vt(Dt)) && Ot.push(Dt)
        }
        return Ot
      }
      getMeshesByTags(tt, et) {
        return this._getByTags(this.meshes, tt, et)
      }
      getCamerasByTags(tt, et) {
        return this._getByTags(this.cameras, tt, et)
      }
      getLightsByTags(tt, et) {
        return this._getByTags(this.lights, tt, et)
      }
      getMaterialByTags(tt, et) {
        return this._getByTags(this.materials, tt, et).concat(this._getByTags(this.multiMaterials, tt, et))
      }
      getTransformNodesByTags(tt, et) {
        return this._getByTags(this.transformNodes, tt, et)
      }
      setRenderingOrder(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(tt, et, Vt, Ot)
      }
      setRenderingAutoClearDepthStencil(tt, et) {
        let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(tt, et, Vt, Ot)
      }
      getAutoClearDepthStencilSetup(tt) {
        return this._renderingManager.getAutoClearDepthStencilSetup(tt)
      }
      _forceBlockMaterialDirtyMechanism(tt) {
        this._blockMaterialDirtyMechanism = tt
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(tt) {
        this._blockMaterialDirtyMechanism !== tt && (this._blockMaterialDirtyMechanism = tt, tt || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(tt, et) {
        if (!this._blockMaterialDirtyMechanism)
          for (const Vt of this.materials) et && !et(Vt) || Vt.fVt(tt)
      }
      _loadFile(tt, et, Vt, Ot, qt, Dt, mt) {
        const dt = (0, Tt.o)(tt, et, Vt, Ot ? this.offlineProvider : void 0, qt, Dt, mt);
        return this._activeRequests.push(dt), dt.onCompleteObservable.add((tt => {
          this._activeRequests.splice(this._activeRequests.indexOf(tt), 1)
        })), dt
      }
      async _loadFileAsync(tt, et, Vt, Ot, qt) {
        return await new Promise(((Dt, mt) => {
          this._loadFile(tt, (tt => {
            Dt(tt)
          }), et, Vt, Ot, ((tt, et) => {
            mt(et)
          }), qt)
        }))
      }
      async _loadDelayedFileAsync(tt, et, Vt) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const Ot = `${tt}|${et?"binary":"string"}`;
        let qt = this._delayedFileRequests.get(Ot);
        if (!qt) {
          qt = et ? this._loadFileAsync(tt, void 0, Vt, !0) : this._loadFileAsync(tt, void 0, Vt, !1);
          const Dt = qt;
          (async () => {
            try {
              await Dt
            } catch {}
            this._delayedFileRequests?.delete(Ot)
          })(), this._delayedFileRequests.set(Ot, qt)
        }
        return await qt
      }
      _requestFile(tt, et, Vt, Ot, qt, Dt, mt) {
        const dt = (0, Tt.y)(tt, et, Vt, Ot ? this.offlineProvider : void 0, qt, Dt, mt);
        return this._activeRequests.push(dt), dt.onCompleteObservable.add((tt => {
          this._activeRequests.splice(this._activeRequests.indexOf(tt), 1)
        })), dt
      }
      async _requestFileAsync(tt, et, Vt, Ot, qt) {
        return await new Promise(((Dt, mt) => {
          this._requestFile(tt, (tt => {
            Dt(tt)
          }), et, Vt, Ot, (tt => {
            mt(tt)
          }), qt)
        }))
      }
      _readFile(tt, et, Vt, Ot, qt) {
        const Dt = (0, Tt.r)(tt, et, Vt, Ot, qt);
        return this._activeRequests.push(Dt), Dt.onCompleteObservable.add((tt => {
          this._activeRequests.splice(this._activeRequests.indexOf(tt), 1)
        })), Dt
      }
      async _readFileAsync(tt, et, Vt) {
        return await new Promise(((Ot, qt) => {
          this._readFile(tt, (tt => {
            Ot(tt)
          }), et, Vt, (tt => {
            qt(tt)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, Ct.e)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(tt) {
        return this.setActiveCameraById(tt)
      }
      getMaterialByID(tt) {
        return this.getMaterialById(tt)
      }
      getLastMaterialByID(tt) {
        return this.getLastMaterialById(tt)
      }
      getTextureByUniqueID(tt) {
        return this.getTextureByUniqueId(tt)
      }
      getCameraByID(tt) {
        return this.getCameraById(tt)
      }
      getCameraByUniqueID(tt) {
        return this.getCameraByUniqueId(tt)
      }
      getBoneByID(tt) {
        return this.getBoneById(tt)
      }
      getLightByID(tt) {
        return this.getLightById(tt)
      }
      getLightByUniqueID(tt) {
        return this.getLightByUniqueId(tt)
      }
      getParticleSystemByID(tt) {
        return this.getParticleSystemById(tt)
      }
      getGeometryByID(tt) {
        return this.getGeometryById(tt)
      }
      getMeshByID(tt) {
        return this.getMeshById(tt)
      }
      getMeshByUniqueID(tt) {
        return this.getMeshByUniqueId(tt)
      }
      getLastMeshByID(tt) {
        return this.getLastMeshById(tt)
      }
      getMeshesByID(tt) {
        return this.getMeshesById(tt)
      }
      getTransformNodeByID(tt) {
        return this.getTransformNodeById(tt)
      }
      getTransformNodeByUniqueID(tt) {
        return this.getTransformNodeByUniqueId(tt)
      }
      getTransformNodesByID(tt) {
        return this.getTransformNodesById(tt)
      }
      getNodeByID(tt) {
        return this.getNodeById(tt)
      }
      getLastEntryByID(tt) {
        return this.getLastEntryById(tt)
      }
      getLastSkeletonByID(tt) {
        return this.getLastSkeletonById(tt)
      }
    }
    mV.FOGMODE_NONE = 0, mV.FOGMODE_EXP = 1, mV.FOGMODE_EXP2 = 2, mV.FOGMODE_LINEAR = 3, mV.MinDeltaTime = 1, mV.MaxDeltaTime = 1e3, mV._OriginalDefaultMaterialFactory = mV.DefaultMaterialFactory;
    let dV = !1;

    function jV() {
      dV || (dV = !0, (0, VV.i)("BABYLON.Scene", mV))
    }(te = mV.prototype).sortActiveAnimatables ?? (te.sortActiveAnimatables = (0, Ct.d)("Scene", "sortActiveAnimatables")), (ee = mV.prototype).beginWeightedAnimation ?? (ee.beginWeightedAnimation = (0, Ct.d)("Scene", "beginWeightedAnimation")), (Ve = mV.prototype).beginAnimation ?? (Ve.beginAnimation = (0, Ct.d)("Scene", "beginAnimation")), (Oe = mV.prototype).beginHierarchyAnimation ?? (Oe.beginHierarchyAnimation = (0, Ct.d)("Scene", "beginHierarchyAnimation")), (qe = mV.prototype).beginDirectAnimation ?? (qe.beginDirectAnimation = (0, Ct.d)("Scene", "beginDirectAnimation")), (De = mV.prototype).beginDirectHierarchyAnimation ?? (De.beginDirectHierarchyAnimation = (0, Ct.d)("Scene", "beginDirectHierarchyAnimation")), (me = mV.prototype).getAnimatableByTarget ?? (me.getAnimatableByTarget = (0, Ct.d)("Scene", "getAnimatableByTarget")), (de = mV.prototype).getAllAnimatablesByTarget ?? (de.getAllAnimatablesByTarget = (0, Ct.d)("Scene", "getAllAnimatablesByTarget")), (je = mV.prototype).stopAllAnimations ?? (je.stopAllAnimations = (0, Ct.d)("Scene", "stopAllAnimations")), (He = mV.prototype).getSoundByName ?? (He.getSoundByName = (0, Ct.d)("Scene", "getSoundByName")), (Xe = mV.prototype).createOrUpdateSelectionOctree ?? (Xe.createOrUpdateSelectionOctree = (0, Ct.d)("Scene", "createOrUpdateSelectionOctree")), (Qe = mV.prototype).createDefaultLight ?? (Qe.createDefaultLight = (0, Ct.d)("Scene", "createDefaultLight")), (le = mV.prototype).createDefaultCamera ?? (le.createDefaultCamera = (0, Ct.d)("Scene", "createDefaultCamera")), (Ee = mV.prototype).createDefaultCameraOrLight ?? (Ee.createDefaultCameraOrLight = (0, Ct.d)("Scene", "createDefaultCameraOrLight")), (fe = mV.prototype).createDefaultSkybox ?? (fe.createDefaultSkybox = (0, Ct.d)("Scene", "createDefaultSkybox")), (we = mV.prototype).createDefaultEnvironment ?? (we.createDefaultEnvironment = (0, Ct.d)("Scene", "createDefaultEnvironment")), (ye = mV.prototype).createDefaultVRExperience ?? (ye.createDefaultVRExperience = (0, Ct.d)("Scene", "createDefaultVRExperience")), (Ne = mV.prototype).createDefaultXRExperienceAsync ?? (Ne.createDefaultXRExperienceAsync = (0, Ct.d)("Scene", "createDefaultXRExperienceAsync")), (ae = mV.prototype).getGlowLayerByName ?? (ae.getGlowLayerByName = (0, Ct.d)("Scene", "getGlowLayerByName")), (Me = mV.prototype).getHighlightLayerByName ?? (Me.getHighlightLayerByName = (0, Ct.d)("Scene", "getHighlightLayerByName")), (be = mV.prototype).getSelectionOutlineLayerByName ?? (be.getSelectionOutlineLayerByName = (0, Ct.d)("Scene", "getSelectionOutlineLayerByName")), (Je = mV.prototype).removeLensFlareSystem ?? (Je.removeLensFlareSystem = (0, Ct.d)("Scene", "removeLensFlareSystem")), (Ce = mV.prototype).addLensFlareSystem ?? (Ce.addLensFlareSystem = (0, Ct.d)("Scene", "addLensFlareSystem")), (ue = mV.prototype).getLensFlareSystemByName ?? (ue.getLensFlareSystemByName = (0, Ct.d)("Scene", "getLensFlareSystemByName")), (Ke = mV.prototype).getLensFlareSystemByID ?? (Ke.getLensFlareSystemByID = (0, Ct.d)("Scene", "getLensFlareSystemByID")), (he = mV.prototype).getLensFlareSystemById ?? (he.getLensFlareSystemById = (0, Ct.d)("Scene", "getLensFlareSystemById")), (ve = mV.prototype).getPhysicsEngine ?? (ve.getPhysicsEngine = (0, Ct.d)("Scene", "getPhysicsEngine")), (We = mV.prototype).enablePhysics ?? (We.enablePhysics = (0, Ct.d)("Scene", "enablePhysics")), (Se = mV.prototype).disablePhysicsEngine ?? (Se.disablePhysicsEngine = (0, Ct.d)("Scene", "disablePhysicsEngine")), (ce = mV.prototype).isPhysicsEnabled ?? (ce.isPhysicsEnabled = (0, Ct.d)("Scene", "isPhysicsEnabled")), (Re = mV.prototype).deleteCompoundImpostor ?? (Re.deleteCompoundImpostor = (0, Ct.d)("Scene", "deleteCompoundImpostor")), (Ie = mV.prototype).removeReflectionProbe ?? (Ie.removeReflectionProbe = (0, Ct.d)("Scene", "removeReflectionProbe")), (Pe = mV.prototype).addReflectionProbe ?? (Pe.addReflectionProbe = (0, Ct.d)("Scene", "addReflectionProbe")), (Ze = mV.prototype).getBoundingBoxRenderer ?? (Ze.getBoundingBoxRenderer = (0, Ct.d)("Scene", "getBoundingBoxRenderer")), (Le = mV.prototype).enableDepthRenderer ?? (Le.enableDepthRenderer = (0, Ct.d)("Scene", "enableDepthRenderer")), (Fe = mV.prototype).disableDepthRenderer ?? (Fe.disableDepthRenderer = (0, Ct.d)("Scene", "disableDepthRenderer")), (ke = mV.prototype).enableFluidRenderer ?? (ke.enableFluidRenderer = (0, Ct.d)("Scene", "enableFluidRenderer")), (Ge = mV.prototype).disableFluidRenderer ?? (Ge.disableFluidRenderer = (0, Ct.d)("Scene", "disableFluidRenderer")), (ze = mV.prototype).enableGeometryBufferRenderer ?? (ze.enableGeometryBufferRenderer = (0, Ct.d)("Scene", "enableGeometryBufferRenderer")), (oe = mV.prototype).disableGeometryBufferRenderer ?? (oe.disableGeometryBufferRenderer = (0, Ct.d)("Scene", "disableGeometryBufferRenderer")), (re = mV.prototype).enableIblCdfGenerator ?? (re.enableIblCdfGenerator = (0, Ct.d)("Scene", "enableIblCdfGenerator")), (Ue = mV.prototype).disableIblCdfGenerator ?? (Ue.disableIblCdfGenerator = (0, Ct.d)("Scene", "disableIblCdfGenerator")), (Ae = mV.prototype).getOutlineRenderer ?? (Ae.getOutlineRenderer = (0, Ct.d)("Scene", "getOutlineRenderer")), (ie = mV.prototype).enablePrePassRenderer ?? (ie.enablePrePassRenderer = (0, Ct.d)("Scene", "enablePrePassRenderer")), (Ye = mV.prototype).disablePrePassRenderer ?? (Ye.disablePrePassRenderer = (0, Ct.d)("Scene", "disablePrePassRenderer")), (Be = mV.prototype).enableSubSurfaceForPrePass ?? (Be.enableSubSurfaceForPrePass = (0, Ct.d)("Scene", "enableSubSurfaceForPrePass")), (pe = mV.prototype).disableSubSurfaceForPrePass ?? (pe.disableSubSurfaceForPrePass = (0, Ct.d)("Scene", "disableSubSurfaceForPrePass")), (xe = mV.prototype).pickSprite ?? (xe.pickSprite = (0, Ct.d)("Scene", "pickSprite")), (Te = mV.prototype).pickSpriteWithRay ?? (Te.pickSpriteWithRay = (0, Ct.d)("Scene", "pickSpriteWithRay")), (ge = mV.prototype).multiPickSprite ?? (ge.multiPickSprite = (0, Ct.d)("Scene", "multiPickSprite")), (se = mV.prototype).multiPickSpriteWithRay ?? (se.multiPickSpriteWithRay = (0, Ct.d)("Scene", "multiPickSpriteWithRay")), (ne = mV.prototype).setPointerOverSprite ?? (ne.setPointerOverSprite = (0, Ct.d)("Scene", "setPointerOverSprite")), (tV = mV.prototype).getPointerOverSprite ?? (tV.getPointerOverSprite = (0, Ct.d)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(mV.prototype, "mainSoundTrack") || Object.defineProperty(mV.prototype, "mainSoundTrack", (0, Ct.c)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(mV.prototype, "soundTracks") || Object.defineProperty(mV.prototype, "soundTracks", (0, Ct.c)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(mV.prototype, "audioEnabled") || Object.defineProperty(mV.prototype, "audioEnabled", (0, Ct.c)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(mV.prototype, "headphone") || Object.defineProperty(mV.prototype, "headphone", (0, Ct.c)("Scene", "headphone")), Object.getOwnPropertyDescriptor(mV.prototype, "audioListenerPositionProvider") || Object.defineProperty(mV.prototype, "audioListenerPositionProvider", (0, Ct.c)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(mV.prototype, "audioListenerRotationProvider") || Object.defineProperty(mV.prototype, "audioListenerRotationProvider", (0, Ct.c)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(mV.prototype, "audioPositioningRefreshRate") || Object.defineProperty(mV.prototype, "audioPositioningRefreshRate", (0, Ct.c)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(mV.prototype, "selectionOctree") || Object.defineProperty(mV.prototype, "selectionOctree", (0, Ct.c)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(mV.prototype, "debugLayer") || Object.defineProperty(mV.prototype, "debugLayer", (0, Ct.c)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(mV.prototype, "gamepadManager") || Object.defineProperty(mV.prototype, "gamepadManager", (0, Ct.c)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(mV.prototype, "simplificationQueue") || Object.defineProperty(mV.prototype, "simplificationQueue", (0, Ct.c)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(mV.prototype, "onBeforePhysicsObservable") || Object.defineProperty(mV.prototype, "onBeforePhysicsObservable", (0, Ct.c)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(mV.prototype, "onAfterPhysicsObservable") || Object.defineProperty(mV.prototype, "onAfterPhysicsObservable", (0, Ct.c)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(mV.prototype, "reflectionProbes") || Object.defineProperty(mV.prototype, "reflectionProbes", (0, Ct.c)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(mV.prototype, "forceShowBoundingBoxes") || Object.defineProperty(mV.prototype, "forceShowBoundingBoxes", (0, Ct.c)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(mV.prototype, "depthPeelingRenderer") || Object.defineProperty(mV.prototype, "depthPeelingRenderer", (0, Ct.c)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(mV.prototype, "useOrderIndependentTransparency") || Object.defineProperty(mV.prototype, "useOrderIndependentTransparency", (0, Ct.c)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(mV.prototype, "fluidRenderer") || Object.defineProperty(mV.prototype, "fluidRenderer", (0, Ct.c)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(mV.prototype, "geometryBufferRenderer") || Object.defineProperty(mV.prototype, "geometryBufferRenderer", (0, Ct.c)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(mV.prototype, "iblCdfGenerator") || Object.defineProperty(mV.prototype, "iblCdfGenerator", (0, Ct.c)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(mV.prototype, "prePassRenderer") || Object.defineProperty(mV.prototype, "prePassRenderer", (0, Ct.c)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(mV.prototype, "subSurfaceConfiguration") || Object.defineProperty(mV.prototype, "subSurfaceConfiguration", (0, Ct.c)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(mV.prototype, "spriteManagers") || Object.defineProperty(mV.prototype, "spriteManagers", (0, Ct.c)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(mV.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(mV.prototype, "onBeforeSpritesRenderingObservable", (0, Ct.c)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(mV.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(mV.prototype, "onAfterSpritesRenderingObservable", (0, Ct.c)("Scene", "onAfterSpritesRenderingObservable"))
  },
  40366: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot,
      f: () => qt
    });
    class Ot {}
    Ot.NAME_EFFECTLAYER = "EffectLayer", Ot.NAME_LAYER = "Layer", Ot.NAME_LENSFLARESYSTEM = "LensFlareSystem", Ot.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Ot.NAME_PARTICLESYSTEM = "ParticleSystem", Ot.NAME_GAMEPAD = "Gamepad", Ot.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", Ot.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", Ot.NAME_PREPASSRENDERER = "PrePassRenderer", Ot.NAME_DEPTHRENDERER = "DepthRenderer", Ot.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", Ot.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", Ot.NAME_SPRITE = "Sprite", Ot.NAME_SUBSURFACE = "SubSurface", Ot.NAME_OUTLINERENDERER = "Outline", Ot.NAME_PROCEDURALTEXTURE = "ProceduralTexture", Ot.NAME_SHADOWGENERATOR = "ShadowGenerator", Ot.NAME_OCTREE = "xOt", Ot.NAME_PHYSICSENGINE = "PhysicsEngine", Ot.NAME_AUDIO = "Audio", Ot.NAME_FLUIDRENDERER = "FluidRenderer", Ot.NAME_IBLCDFGENERATOR = "iblCDFGenerator", Ot.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", Ot.STEP_ISREADYFORMESH_EFFECTLAYER = 0, Ot.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, Ot.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, Ot.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, Ot.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, Ot.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, Ot.STEP_BEFORECAMERADRAW_PREPASS = 0, Ot.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, Ot.STEP_BEFORECAMERADRAW_LAYER = 2, Ot.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, Ot.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, Ot.STEP_BEFORERENDERINGMESH_PREPASS = 0, Ot.STEP_BEFORERENDERINGMESH_OUTLINE = 1, Ot.STEP_AFTERRENDERINGMESH_PREPASS = 0, Ot.STEP_AFTERRENDERINGMESH_OUTLINE = 1, Ot.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, Ot.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, Ot.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, Ot.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, Ot.STEP_BEFORECLEAR_PREPASS = 1, Ot.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, Ot.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, Ot.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, Ot.STEP_AFTERCAMERADRAW_PREPASS = 0, Ot.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, Ot.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, Ot.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, Ot.STEP_AFTERCAMERADRAW_LAYER = 4, Ot.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, Ot.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, Ot.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, Ot.STEP_AFTERRENDER_AUDIO = 0, Ot.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, Ot.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, Ot.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, Ot.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, Ot.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, Ot.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, Ot.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, Ot.STEP_POINTERMOVE_SPRITE = 0, Ot.STEP_POINTERDOWN_SPRITE = 0, Ot.STEP_POINTERUP_SPRITE = 0;
    class qt extends Array {
      constructor(tt) {
        super(...tt)
      }
      static Create() {
        return Object.create(qt.prototype)
      }
      registerStep(tt, et, Vt) {
        let Ot, qt = 0;
        for (; qt < this.length; qt++) {
          if (Ot = this[qt].index, tt < Ot) break
        }
        this.splice(qt, 0, {
          index: tt,
          component: et,
          action: Vt.bind(et)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  40211: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      i: () => dt,
      l: () => Ot,
      m: () => qt,
      q: () => Dt
    });

    function Ot(tt, et, Vt, Ot, qt, Dt) {
      function mt(tt) {
        if (void 0 !== tt && "function" !== typeof tt) throw new TypeError("Function expected");
        return tt
      }
      for (var dt, jt = Ot.kind, Ht = "getter" === jt ? "get" : "setter" === jt ? "set" : "value", Xt = !et && tt ? Ot.static ? tt : tt.prototype : null, Qt = et || (Xt ? Object.getOwnPropertyDescriptor(Xt, Ot.name) : {}), lt = !1, Et = Vt.length - 1; Et >= 0; Et--) {
        var ft = {};
        for (var wt in Ot) ft[wt] = "access" === wt ? {} : Ot[wt];
        for (var wt in Ot.access) ft.access[wt] = Ot.access[wt];
        ft.addInitializer = function(tt) {
          if (lt) throw new TypeError("Cannot add initializers after decoration has completed");
          Dt.push(mt(tt || null))
        };
        var yt = (0, Vt[Et])("accessor" === jt ? {
          get: Qt.get,
          set: Qt.set
        } : Qt[Ht], ft);
        if ("accessor" === jt) {
          if (void 0 === yt) continue;
          if (null === yt || "object" !== typeof yt) throw new TypeError("Object expected");
          (dt = mt(yt.get)) && (Qt.get = dt), (dt = mt(yt.set)) && (Qt.set = dt), (dt = mt(yt.init)) && qt.unshift(dt)
        } else(dt = mt(yt)) && ("field" === jt ? qt.unshift(dt) : Qt[Ht] = dt)
      }
      Xt && Object.defineProperty(Xt, Ot.name, Qt), lt = !0
    }

    function qt(tt, et, Vt) {
      for (var Ot = arguments.length > 2, qt = 0; qt < et.length; qt++) Vt = Ot ? et[qt].call(tt, Vt) : et[qt].call(tt);
      return Ot ? Vt : void 0
    }

    function Dt(tt, et, Vt) {
      return "symbol" === typeof et && (et = et.description ? "[".concat(et.description, "]") : ""), Object.defineProperty(tt, "name", {
        configurable: !0,
        value: Vt ? "".concat(Vt, " ", et) : et
      })
    }
    Object.create;
    Object.create;

    function mt(tt, et, Vt, Ot) {
      if ("a" === Vt && !Ot) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof et ? tt !== et || !Ot : !et.has(tt)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Vt ? Ot : "a" === Vt ? Ot.call(tt) : Ot ? Ot.value : et.get(tt)
    }

    function dt(tt, et, Vt, Ot, qt) {
      if ("m" === Ot) throw new TypeError("Private method is not writable");
      if ("a" === Ot && !qt) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof et ? tt !== et || !qt : !et.has(tt)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Ot ? qt.call(tt, Vt) : qt ? qt.value = Vt : et.set(tt, Vt), Vt
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);