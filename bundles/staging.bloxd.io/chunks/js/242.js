export const id = 242;
export const ids = [242];
export const modules = {
  39244: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      f: () => Rb,
      j: () => eb,
      m: () => Bb
    });
    var Ab = Ub(39030),
      Mb = Ub(37989),
      Tb = Ub(39167),
      Eb = Ub(39069);
    class Yb {
      get Jab() {
        return this._isDisposed
      }
      constructor(bb, ab, Ub) {
        let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Tb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Yb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Bb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          eb = arguments.length > 7 ? arguments[7] : void 0,
          vb = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Eb.b)(), bb && bb.oN ? this._engine = bb.oN().vj() : this._engine = bb, this._updatable = Ub, this._instanced = Yb, this._divisor = eb || 1, this._label = vb, ab instanceof Ab.b ? (this._data = null, this._buffer = ab) : (this._data = ab, this._buffer = null), this.byteStride = Bb ? Mb : Mb * Float32Array.BYTES_PER_ELEMENT, Tb || this.create()
      }
      createVertexBuffer(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Eb = arguments.length > 6 ? arguments[6] : void 0;
        const Yb = Tb ? ab : ab * Float32Array.BYTES_PER_ELEMENT,
          eb = Ab ? Tb ? Ab : Ab * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new Bb(this._engine, this, bb, this._updatable, !0, eb, void 0 === Mb ? this._instanced : Mb, Yb, Ub, void 0, void 0, !0, this._divisor || Eb)
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
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !bb && this._buffer || (bb = bb || this._data, bb && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, bb), this._data = bb) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(bb, this._label), this._data = bb) : this._buffer = this._engine.createVertexBuffer(bb, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.PL > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.PL, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.PL, void 0, this._label));
          Mb.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(bb) {
        this.create(bb)
      }
      updateDirectly(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, bb, Ab ? ab : ab * Float32Array.BYTES_PER_ELEMENT, Ub ? Ub * this.byteStride : void 0), this._data = 0 === ab && void 0 === Ub ? bb : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class Bb {
      get Jab() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(bb) {
        const ab = 0 != bb;
        this._instanceDivisor = bb, ab !== this._instanced && (this._instanced = ab, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const bb = this.getData();
        return bb ? Array.isArray(bb) ? bb.length / (this.byteStride / 4) - this.byteOffset / 4 : (bb.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(bb, ab, Ub, Ab, Mb, Eb, Lb, Pb, Xb, jb) {
        let Rb, kb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          yb = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          Zb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          Db = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = bb, "object" === typeof Ab && null !== Ab ? (Rb = Ab.updatable ?? !1, Mb = Ab.postponeInternalCreation, Eb = Ab.stride, Lb = Ab.instanced, Pb = Ab.offset, Xb = Ab.size, jb = Ab.type, kb = Ab.normalized ?? !1, yb = Ab.useBytes ?? !1, Zb = Ab.divisor ?? 1, Db = Ab.takeBufferOwnership ?? !1, this._label = Ab.label) : Rb = !!Ab, ab instanceof Yb ? (this._buffer = ab, this._ownsBuffer = Db) : (this._buffer = new Yb(bb, ab, Rb, Eb, Mb, Lb, yb, Zb, this._label), this._ownsBuffer = !0), this.uniqueId = Bb._Counter++, this._kind = Ub, void 0 === jb) {
          const bb = this.getData();
          this.type = bb ? vb(bb) : Bb.FLOAT
        } else this.type = jb;
        const zb = (0, Tb.n)(this.type);
        yb ? (this._size = Xb || (Eb ? Eb / zb : eb(Ub)), this.byteStride = Eb || this._buffer.byteStride || this._size * zb, this.byteOffset = Pb || 0) : (this._size = Xb || Eb || eb(Ub), this.byteStride = Eb ? Eb * zb : this._buffer.byteStride || this._size * zb, this.byteOffset = (Pb || 0) * zb), this.normalized = kb, this._instanced = void 0 !== Lb && Lb, this._instanceDivisor = Lb ? Zb : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(bb) {
        switch (bb) {
          case Bb.BYTE:
            return 0;
          case Bb.UNSIGNED_BYTE:
            return 1;
          case Bb.SHORT:
            return 2;
          case Bb.UNSIGNED_SHORT:
            return 3;
          case Bb.INT:
            return 4;
          case Bb.UNSIGNED_INT:
            return 5;
          case Bb.FLOAT:
            return 6;
          case Bb.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${bb}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (Bb._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(bb, ab) {
        const Ub = this.getData();
        return Ub ? (0, Tb.l)(Ub, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, bb, ab) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, Tb.n)(this.type)
      }
      qab() {
        return this.byteOffset / (0, Tb.n)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Tb.n)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(bb) {
        this._buffer.create(bb), this._alignBuffer()
      }
      update(bb) {
        this._buffer.update(bb), this._alignBuffer()
      }
      updateDirectly(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(bb, ab, void 0, Ub), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(bb, ab) {
        (0, Tb.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, bb, this.normalized, ((bb, Ub) => {
          for (let Ab = 0; Ab < this._size; Ab++) ab(bb[Ab], Ub + Ab)
        }))
      }
      _alignBuffer() {}
    }

    function eb(bb) {
      switch (bb) {
        case Bb.UVKind:
        case Bb.UV2Kind:
        case Bb.UV3Kind:
        case Bb.UV4Kind:
        case Bb.UV5Kind:
        case Bb.UV6Kind:
          return 2;
        case Bb.NormalKind:
        case Bb.PositionKind:
          return 3;
        case Bb.ColorKind:
        case Bb.ColorInstanceKind:
        case Bb.MatricesIndicesKind:
        case Bb.MatricesIndicesExtraKind:
        case Bb.MatricesWeightsKind:
        case Bb.MatricesWeightsExtraKind:
        case Bb.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + bb + "'")
      }
    }

    function vb(bb) {
      return bb instanceof Int8Array ? Bb.BYTE : bb instanceof Uint8Array ? Bb.UNSIGNED_BYTE : bb instanceof Int16Array ? Bb.SHORT : bb instanceof Uint16Array ? Bb.UNSIGNED_SHORT : bb instanceof Int32Array ? Bb.INT : bb instanceof Uint32Array ? Bb.UNSIGNED_INT : Bb.FLOAT
    }

    function Lb(bb) {
      return (0, Tb.n)(bb)
    }

    function Pb(bb, ab, Ub, Ab, Mb, Eb, Yb, Bb) {
      (0, Tb.h)(bb, ab, Ub, Ab, Mb, Eb, Yb, ((bb, ab) => {
        for (let Ub = 0; Ub < Ab; Ub++) Bb(bb[Ub], ab + Ub)
      }))
    }

    function Xb(bb, ab, Ub, Ab, Mb, Eb, Yb, Bb) {
      return (0, Tb.l)(bb, ab, Ub, Ab, Mb, Eb, Yb, Bb)
    }
    Bb._Counter = 0, Bb.BYTE = 5120, Bb.UNSIGNED_BYTE = 5121, Bb.SHORT = 5122, Bb.UNSIGNED_SHORT = 5123, Bb.INT = 5124, Bb.UNSIGNED_INT = 5125, Bb.FLOAT = 5126, Bb.HALF_FLOAT = 5131, Bb.PositionKind = "position", Bb.NormalKind = "normal", Bb.TangentKind = "tangent", Bb.UVKind = "uv", Bb.UV2Kind = "uv2", Bb.UV3Kind = "uv3", Bb.UV4Kind = "uv4", Bb.UV5Kind = "uv5", Bb.UV6Kind = "uv6", Bb.ColorKind = "color", Bb.ColorInstanceKind = "instanceColor", Bb.MatricesIndicesKind = "matricesIndices", Bb.MatricesWeightsKind = "matricesWeights", Bb.MatricesIndicesExtraKind = "matricesIndicesExtra", Bb.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let jb = !1;

    function Rb() {
      jb || (jb = !0, Bb.DeduceStride = eb, Bb.GetDataType = vb, Bb.GetTypeByteLength = Lb, Bb.ForEach = Pb, Bb.GetFloatData = Xb)
    }
  },
  39030: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    class Ab {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.PL = 0, this.is32Bits = !1, this.uniqueId = Ab._Counter++
      }
    }
    Ab._Counter = 0
  },
  39240: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb
    });
    var Ab = Ub(36401),
      Mb = Ub(39244);
    class Tb {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || ab && !this.pickedMesh.isVerticesDataPresent(Mb.m.NormalKind)) return null;
        let Ub, Tb = this.pickedMesh.uUb();
        0 === Tb?.length && (Tb = null);
        const Eb = Ab.j.Pj[0],
          Yb = Ab.j.Pj[1],
          Bb = Ab.j.Pj[2];
        if (ab) {
          const bb = this.pickedMesh.getVerticesData(Mb.m.NormalKind);
          let ab = Tb ? Ab.m.FromArrayToRef(bb, 3 * Tb[3 * this.faceId], Eb) : Eb.K9(bb[3 * this.faceId * 3], bb[3 * this.faceId * 3 + 1], bb[3 * this.faceId * 3 + 2]),
            eb = Tb ? Ab.m.FromArrayToRef(bb, 3 * Tb[3 * this.faceId + 1], Yb) : Yb.K9(bb[3 * (3 * this.faceId + 1)], bb[3 * (3 * this.faceId + 1) + 1], bb[3 * (3 * this.faceId + 1) + 2]),
            vb = Tb ? Ab.m.FromArrayToRef(bb, 3 * Tb[3 * this.faceId + 2], Bb) : Bb.K9(bb[3 * (3 * this.faceId + 2)], bb[3 * (3 * this.faceId + 2) + 1], bb[3 * (3 * this.faceId + 2) + 2]);
          ab = ab.scale(this.bu), eb = eb.scale(this.bv), vb = vb.scale(1 - this.bu - this.bv), Ub = new Ab.m(ab.x + eb.x + vb.x, ab.y + eb.y + vb.y, ab.z + eb.z + vb.z)
        } else {
          const bb = this.pickedMesh.getVerticesData(Mb.m.PositionKind),
            ab = Tb ? Ab.m.FromArrayToRef(bb, 3 * Tb[3 * this.faceId], Eb) : Eb.K9(bb[3 * this.faceId * 3], bb[3 * this.faceId * 3 + 1], bb[3 * this.faceId * 3 + 2]),
            eb = Tb ? Ab.m.FromArrayToRef(bb, 3 * Tb[3 * this.faceId + 1], Yb) : Yb.K9(bb[3 * (3 * this.faceId + 1)], bb[3 * (3 * this.faceId + 1) + 1], bb[3 * (3 * this.faceId + 1) + 2]),
            vb = Tb ? Ab.m.FromArrayToRef(bb, 3 * Tb[3 * this.faceId + 2], Bb) : Bb.K9(bb[3 * (3 * this.faceId + 2)], bb[3 * (3 * this.faceId + 2) + 1], bb[3 * (3 * this.faceId + 2) + 2]),
            Lb = ab.subtract(eb),
            Pb = vb.subtract(eb);
          Ub = Ab.m.Cross(Lb, Pb)
        }
        const eb = (bb, ab) => {
          if (-1 !== this.thinInstanceIndex) {
            const Ub = bb._thinInstanceDataStorage.matrixData,
              Mb = this.thinInstanceIndex << 4;
            if (Ub && Ub.length > Mb) {
              const bb = Ab.j.Matrix[0];
              Ab.b.FromArrayToRef(Ub, Mb, bb), Ab.m.TransformNormalToRef(ab, bb, ab)
            }
          }
          let Ub = bb.getWorldMatrix();
          bb.nonUniformScaling && (Ab.j.Matrix[0].EUb(Ub), Ub = Ab.j.Matrix[0], Ub.setTranslationFromFloats(0, 0, 0), Ub.invert(), Ub.transposeToRef(Ab.j.Matrix[1]), Ub = Ab.j.Matrix[1]), Ab.m.TransformNormalToRef(ab, Ub, ab)
        };
        if (bb && eb(this.pickedMesh, Ub), this.ray) {
          const ab = Ab.j.Pj[0].EUb(Ub);
          bb || eb(this.pickedMesh, ab), Ab.m.Dot(ab, this.ray.direction) > 0 && Ub.negateInPlace()
        }
        return Ub.normalize(), Ub
      }
      getTextureCoordinates() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mb.m.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(bb)) return null;
        const ab = this.pickedMesh.uUb();
        if (!ab) return null;
        const Ub = this.pickedMesh.getVerticesData(bb);
        if (!Ub) return null;
        let Tb = Ab.l.FromArray(Ub, 2 * ab[3 * this.faceId]),
          Eb = Ab.l.FromArray(Ub, 2 * ab[3 * this.faceId + 1]),
          Yb = Ab.l.FromArray(Ub, 2 * ab[3 * this.faceId + 2]);
        return Tb = Tb.scale(this.bu), Eb = Eb.scale(this.bv), Yb = Yb.scale(1 - this.bu - this.bv), new Ab.l(Tb.x + Eb.x + Yb.x, Tb.y + Eb.y + Yb.y)
      }
    }
  },
  39069: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(38933);
    let Mb = !1;

    function Tb() {
      Mb || (Mb = !0, Ab.ThinEngine.prototype.updateDynamicIndexBuffer = function(bb, ab) {
        let Ub;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(bb), Ub = bb.is32Bits ? ab instanceof Uint32Array ? ab : new Uint32Array(ab) : ab instanceof Uint16Array ? ab : new Uint16Array(ab), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Ub, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, Ab.ThinEngine.prototype.updateDynamicVertexBuffer = function(bb, ab, Ub, Ab) {
        this.bindArrayBuffer(bb), void 0 === Ub && (Ub = 0);
        const Mb = ab.byteLength || ab.length;
        void 0 === Ab || Ab >= Mb && 0 === Ub ? ab instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Ub, new Float32Array(ab)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Ub, ab) : ab instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Ub, new Float32Array(ab).subarray(0, Ab / 4)) : (ab = ArrayBuffer.isView(ab) ? new Uint8Array(ab.buffer, ab.byteOffset, Ab) : new Uint8Array(ab, 0, Ab), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Ub, ab)), this._resetVertexBufferBinding()
      })
    }
  },
  39042: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    class Ab {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ab = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = ab, !bb && (bb = ab.createTexture(), !bb)) throw new Error("Unable to create webGL texture");
        this.set(bb)
      }
      setUsage() {}
      set(bb) {
        this._webGLTexture = bb
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(bb) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(bb)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const bb of this._MSAARenderBuffers) this._context.deleteRenderbuffer(bb);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[bb] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39002: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Zb
    });
    var Ab = Ub(36431),
      Mb = Ub(38939),
      Tb = Ub(36425),
      Eb = Ub(37989),
      Yb = Ub(36418),
      Bb = Ub(39010);
    class eb {
      constructor() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, bb && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(bb) {
        this._zOffset !== bb && (this._zOffset = bb, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(bb) {
        this._zOffsetUnits !== bb && (this._zOffsetUnits = bb, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(bb) {
        this._cullFace !== bb && (this._cullFace = bb, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(bb) {
        this._cull !== bb && (this._cull = bb, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(bb) {
        this._depthFunc !== bb && (this._depthFunc = bb, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(bb) {
        this._depthMask !== bb && (this._depthMask = bb, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(bb) {
        this._depthTest !== bb && (this._depthTest = bb, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(bb) {
        this._frontFace !== bb && (this._frontFace = bb, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(bb) {
        this.isDirty && (this._isCullDirty && (this.cull ? bb.enable(bb.CULL_FACE) : bb.disable(bb.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (bb.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (bb.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? bb.enable(bb.DEPTH_TEST) : bb.disable(bb.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (bb.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (bb.enable(bb.POLYGON_OFFSET_FILL), bb.polygonOffset(this.zOffset, this.zOffsetUnits)) : bb.disable(bb.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (bb.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class vb {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(bb) {
        this._func !== bb && (this._func = bb, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(bb) {
        this._backFunc !== bb && (this._backFunc = bb, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(bb) {
        this._funcRef !== bb && (this._funcRef = bb, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(bb) {
        this._funcMask !== bb && (this._funcMask = bb, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(bb) {
        this._opStencilFail !== bb && (this._opStencilFail = bb, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(bb) {
        this._opDepthFail !== bb && (this._opDepthFail = bb, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(bb) {
        this._opStencilDepthPass !== bb && (this._opStencilDepthPass = bb, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(bb) {
        this._backOpStencilFail !== bb && (this._backOpStencilFail = bb, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(bb) {
        this._backOpDepthFail !== bb && (this._backOpDepthFail = bb, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(bb) {
        this._backOpStencilDepthPass !== bb && (this._backOpStencilDepthPass = bb, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(bb) {
        this._mask !== bb && (this._mask = bb, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(bb) {
        this._enabled !== bb && (this._enabled = bb, this._isStencilTestDirty = !0)
      }
      constructor() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, bb && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(bb) {
        if (!bb) return;
        const ab = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = ab ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = ab ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = ab ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = ab ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = ab ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = ab ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = ab ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = ab ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = ab ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = ab ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = ab ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = ab ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? bb.enable(bb.STENCIL_TEST) : bb.disable(bb.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (bb.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (bb.stencilFuncSeparate(bb.FRONT, this.func, this.funcRef, this.funcMask), bb.stencilFuncSeparate(bb.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (bb.stencilOpSeparate(bb.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), bb.stencilOpSeparate(bb.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class Lb {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = Lb.ALWAYS, this.opStencilFail = Lb.KEEP, this.opDepthFail = Lb.KEEP, this.opStencilDepthPass = Lb.REPLACE, this.backFunc = Lb.ALWAYS, this.backOpStencilFail = Lb.KEEP, this.backOpDepthFail = Lb.KEEP, this.backOpStencilDepthPass = Lb.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(bb) {
        this.func = bb
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(bb) {
        this.backFunc = bb
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(bb) {
        this.funcRef = bb
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(bb) {
        this.funcMask = bb
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(bb) {
        this.opStencilFail = bb
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(bb) {
        this.opDepthFail = bb
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(bb) {
        this.opStencilDepthPass = bb
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(bb) {
        this.backOpStencilFail = bb
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(bb) {
        this.backOpDepthFail = bb
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(bb) {
        this.backOpStencilDepthPass = bb
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(bb) {
        this.mask = bb
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(bb) {
        this.enabled = bb
      }
    }
    Lb.ALWAYS = 519, Lb.KEEP = 7680, Lb.REPLACE = 7681;
    var Pb = Ub(39013),
      Xb = Ub(38982),
      jb = Ub(38915),
      Rb = Ub(38955),
      kb = Ub(38973);

    function yb(bb, ab) {
      if (ab) {
        const {
          requestAnimationFrame: Ub
        } = ab;
        if ("function" === typeof Ub) return Ub(bb)
      }
      if ((0, Rb.k)()) {
        const {
          requestAnimationFrame: Ub
        } = ab || window;
        if ("function" === typeof Ub) return Ub(bb)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(bb);
      return setTimeout(bb, 16)
    }
    class Zb {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(bb) {
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
      get hUb() {
        return this._useReverseDepthBuffer
      }
      set hUb(bb) {
        bb !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = bb, this._depthCullingState.depthFunc = bb ? 518 : 515)
      }
      setColorWrite(bb) {
        bb !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = bb)
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
      _getGlobalDefines(bb) {
        if (bb) return this.isNDCHalfZRange ? bb.IS_NDC_HALF_ZRANGE = "" : delete bb.IS_NDC_HALF_ZRANGE, this.hUb ? bb.USE_REVERSE_DEPTHBUFFER = "" : delete bb.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? bb.USE_EXACT_SRGB_CONVERSIONS = "" : delete bb.USE_EXACT_SRGB_CONVERSIONS);
        {
          let bb = "";
          return this.isNDCHalfZRange && (bb += "#define IS_NDC_HALF_ZRANGE"), this.hUb && (bb && (bb += "\n"), bb += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (bb && (bb += "\n"), bb += "#define USE_EXACT_SRGB_CONVERSIONS"), bb
        }
      }
      _rebuildInternalTextures() {
        const bb = this._internalTexturesCache.slice();
        for (const ab of bb) ab._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const bb = this._renderTargetWrapperCache.slice();
        for (const ab of bb) ab.textures?.some((bb => 15 === bb.source)) || ab._rebuild()
      }
      _rebuildEffects() {
        for (const bb in this._compiledEffects) {
          const ab = this._compiledEffects[bb];
          ab._pipelineContext = null, ab._prepareEffect()
        }
        Mb.d.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        Eb.e.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(bb) {
        setTimeout((() => {
          this._clearEmptyResources();
          const ab = this._depthCullingState.depthTest,
            Ub = this._depthCullingState.depthFunc,
            Ab = this._depthCullingState.depthMask,
            Mb = this._stencilState.stencilTest;
          bb(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = ab, this._depthCullingState.depthFunc = Ub, this._depthCullingState.depthMask = Ab, this._stencilState.stencilTest = Mb, this._flagContextRestored()
        }), 0)
      }
      get Jab() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(bb) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(bb) {}
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
          const bb = new Uint8Array(4),
            ab = [bb, bb, bb, bb, bb, bb];
          this._emptyCubeTexture = this.createRawCubeTexture(ab, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(bb) {
        this._framebufferDimensionsObject = bb
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(bb) {
        if (!bb) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const ab = this._activeRenderLoops.indexOf(bb);
        ab >= 0 && (this._activeRenderLoops.splice(ab, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: bb
            } = this.customAnimationFrameRequester;
            bb && bb(this.customAnimationFrameRequester.Xj), delete this.customAnimationFrameRequester.Xj
          }
        } else if (0 !== this._frameHandler) {
          const bb = this._frameHandler;
          if (this._frameHandler = 0, (0, Rb.k)()) {
            const {
              cancelAnimationFrame: ab
            } = this.getHostWindow() || window;
            if ("function" === typeof ab) return ab(bb)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(bb);
          return clearTimeout(bb)
        }
      }
      eD() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      PD() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(bb) {
        this._maxFPS = bb, void 0 !== bb && (this._minFrameTime = bb <= 0 ? Number.MAX_VALUE : 1e3 / bb)
      }
      _isOverFrameTime(bb) {
        if (!bb || void 0 === this._maxFPS) return !1;
        const ab = bb - this._lastFrameTime;
        return this._lastFrameTime = bb, this._renderAccumulator += ab, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(bb) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(bb)) {
          let bb = !0;
          (this.Jab || !this.renderEvenInBackground && this._windowIsBackground) && (bb = !1), bb && (this.eD(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.PD())
        }
      }
      _renderLoop(bb) {
        this._processFrame(bb), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let bb = 0; bb < this._activeRenderLoops.length; bb++) {
          (0, this._activeRenderLoops[bb])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(bb, ab) {
        return yb(bb, ab)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Xj = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.Xj) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(bb) {
        -1 === this._activeRenderLoops.indexOf(bb) && (this._activeRenderLoops.push(bb), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(bb) {
        this._depthCullingState.depthTest = bb
      }
      setZOffset(bb) {
        this._depthCullingState.zOffset = this.hUb ? -bb : bb
      }
      getZOffset() {
        const bb = this._depthCullingState.zOffset;
        return this.hUb ? -bb : bb
      }
      setZOffsetUnits(bb) {
        this._depthCullingState.zOffsetUnits = this.hUb ? -bb : bb
      }
      getZOffsetUnits() {
        const bb = this._depthCullingState.zOffsetUnits;
        return this.hUb ? -bb : bb
      }
      getHostWindow() {
        return (0, Rb.k)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(bb) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const bb of this.scenes) bb._rebuildTextures();
        for (const bb of this._virtualScenes) bb._rebuildTextures()
      }
      _releaseRenderTargetWrapper(bb) {
        const ab = this._renderTargetWrapperCache.indexOf(bb); - 1 !== ab && this._renderTargetWrapperCache.splice(ab, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(bb, ab, Ub) {
        const Ab = ab || this.getRenderWidth(),
          Mb = Ub || this.getRenderHeight(),
          Tb = bb.x || 0,
          Eb = bb.y || 0;
        this._cachedViewport = bb, this._viewport(Tb * Ab, Eb * Mb, Ab * bb.width, Mb * bb.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(bb) {
        return new Path2D(bb)
      }
      get description() {
        let bb = this.name + this.version;
        return this._caps.parallelShaderCompile && (bb += " - Parallel shader compilation"), bb
      }
      _createTextureBase(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Yb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Bb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          eb = arguments.length > 7 ? arguments[7] : void 0,
          vb = arguments.length > 8 ? arguments[8] : void 0,
          Lb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Pb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Xb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          Rb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          kb = arguments.length > 13 ? arguments[13] : void 0,
          yb = arguments.length > 14 ? arguments[14] : void 0,
          Db = arguments.length > 15 ? arguments[15] : void 0;
        const zb = "data:" === (bb = bb || "").substring(0, 5),
          xb = "blob:" === bb.substring(0, 5),
          ib = zb && -1 !== bb.indexOf(";base64,"),
          fb = Pb || new jb.b(this, 1);
        fb !== Pb && (fb.label = bb.substring(0, 60));
        const mb = bb;
        !this._transformTextureUrl || ib || Pb || Lb || (bb = this._transformTextureUrl(bb)), mb !== bb && (fb._originalUrl = mb);
        const pb = bb.lastIndexOf(".");
        let Nb = Rb || (pb > -1 ? bb.substring(pb).toLowerCase() : "");
        Nb.indexOf("?") > -1 && (Nb = Nb.split("?")[0]);
        const Wb = Zb.GetCompatibleTextureLoader(Nb, kb);
        Ab && Ab.addPendingData(fb), fb.url = bb, fb.generateMipMaps = !ab, fb.samplingMode = Mb, fb.invertY = Ub, fb._useSRGBBuffer = this._getUseSRGBBuffer(!!Db, ab), this._doNotHandleContextLost || (fb._buffer = Lb);
        let Hb = null;
        Yb && !Pb && (Hb = fb.onLoadedObservable.add(Yb)), Pb || this._internalTexturesCache.push(fb);
        const Ib = (Ub, Pb) => {
          Ab && Ab.removePendingData(fb), bb === mb ? (Hb && fb.onLoadedObservable.remove(Hb), Tb.d.UseFallbackTexture && bb !== Tb.d.FallbackTexture && this._createTextureBase(Tb.d.FallbackTexture, ab, fb.invertY, Ab, Mb, null, Bb, eb, vb, Lb, fb), Ub = (Ub || "Unknown error") + (Tb.d.UseFallbackTexture ? " - Fallback texture was used" : ""), fb.onErrorObservable.notifyObservers({
            message: Ub,
            exception: Pb
          }), Bb && Bb(Ub, Pb)) : (Eb.e.Warn(`Failed to load ${bb}, falling back to ${mb}`), this._createTextureBase(mb, ab, fb.invertY, Ab, Mb, Yb, Bb, eb, vb, Lb, fb, Xb, Rb, kb, yb, Db))
        };
        if (Wb) {
          const ab = async bb => {
            (await Wb).loadData(bb, fb, ((bb, ab, Ub, Tb, Eb, Yb) => {
              Yb ? Ib("TextureLoader failed to load data") : eb(fb, Nb, Ab, {
                width: bb,
                height: ab
              }, fb.invertY, !Ub, Tb, (() => (Eb(), !1)), Mb)
            }), yb)
          };
          if (Lb) {
            const bb = async bb => {
              try {
                await ab(bb)
              } catch (Ub) {
                Ib("Failed to parse texture data", Ub)
              }
            };
            Lb instanceof ArrayBuffer ? bb(new Uint8Array(Lb)) : ArrayBuffer.isView(Lb) ? bb(Lb) : Bb && Bb("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(bb, (async bb => {
            try {
              await ab(new Uint8Array(bb))
            } catch (Ub) {
              Ib("Failed to parse texture data", Ub)
            }
          }), void 0, Ab ? Ab.offlineProvider : void 0, !0, ((bb, ab) => {
            Ib("Unable to load " + (bb && bb.responseURL, ab))
          }))
        } else {
          const Ub = bb => {
            xb && !this._doNotHandleContextLost && (fb._buffer = bb), eb(fb, Nb, Ab, bb, fb.invertY, ab, !1, vb, Mb)
          };
          !zb || ib ? Lb && ("string" === typeof Lb.decoding || Lb.close) ? Ub(Lb) : Zb._FileToolsLoadImage(bb || "", Ub, Ib, Ab ? Ab.offlineProvider : null, kb, fb.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof Lb || Lb instanceof ArrayBuffer || ArrayBuffer.isView(Lb) || Lb instanceof Blob ? Zb._FileToolsLoadImage(Lb, Ub, Ib, Ab ? Ab.offlineProvider : null, kb, fb.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : Lb && Ub(Lb)
        }
        return fb
      }
      _rebuildBuffers() {
        for (const bb of this._uniformBuffers) bb._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Rb.d)() ? document : null
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
        for (const bb in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, bb) && (this._boundTexturesCache[bb] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(bb) {
        this._name = bb
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
      setHardwareScalingLevel(bb) {
        this._hardwareScalingLevel = bb, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(bb) {
        this._doNotHandleContextLost = bb
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(bb, ab, Ub) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new eb, this._stencilStateComposer = new vb, this._stencilState = new Lb, this._alphaState = new Pb.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Ab.b, this.onCanvasFocusObservable = new Ab.b, this.onNewSceneAddedObservable = new Ab.b, this.onResizeObservable = new Ab.b, this.onCanvasPointerOutObservable = new Ab.b, this.onEffectErrorObservable = new Ab.b, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new Ab.b, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = bb => this._renderLoop(bb), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new Ab.b, this.onAfterShaderCompilationObservable = new Ab.b, this.onBeginFrameObservable = new Ab.b, this.onEndFrameObservable = new Ab.b, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new Ab.b, this.onContextRestoredObservable = new Ab.b, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.UW = new Ab.b, this.onReleaseEffectsObservable = new Ab.b, Tb.d.Instances.push(this), this.startTime = Bb.e.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, Yb.b.SetMatrixPrecision(!!ab.useLargeWorldRendering || !!ab.useHighPrecisionMatrix), (0, Rb.g)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), ab.antialias = bb ?? ab.antialias, ab.deterministicLockstep = ab.deterministicLockstep ?? !1, ab.lockstepMaxSteps = ab.lockstepMaxSteps ?? 4, ab.timeStep = ab.timeStep ?? 1 / 60, ab.stencil = ab.stencil ?? !0, this._audioContext = ab.audioEngineOptions?.audioContext ?? null, this._audioDestination = ab.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = ab.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!ab.doNotHandleContextLost, this._isStencilEnable = !!ab.stencil, this.useExactSrgbConversions = ab.useExactSrgbConversions ?? !1, this.canvasTabIndex = ab.canvasTabIndex ?? this.canvasTabIndex;
        const Mb = (0, Rb.k)() && window.devicePixelRatio || 1,
          Eb = ab.limitDeviceRatio || Mb;
        Ub = Ub || ab.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = Ub, this._hardwareScalingLevel = Ub ? 1 / Math.min(Eb, Mb) : 1, this._lastDevicePixelRatio = Mb, this._creationOptions = ab
      }
      resize() {
        let bb, ab, Ub = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const bb = (0, Rb.k)() && window.devicePixelRatio || 1,
            ab = this._lastDevicePixelRatio / bb;
          this._lastDevicePixelRatio = bb, this._hardwareScalingLevel *= ab
        }
        if ((0, Rb.k)() && (0, Rb.d)())
          if (this._renderingCanvas) {
            const Ub = this._renderingCanvas.getBoundingClientRect?.();
            bb = this._renderingCanvas.clientWidth || Ub?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, ab = this._renderingCanvas.clientHeight || Ub?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else bb = window.innerWidth, ab = window.innerHeight;
        else bb = this._renderingCanvas ? this._renderingCanvas.width : 100, ab = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(bb / this._hardwareScalingLevel, ab / this._hardwareScalingLevel, Ub)
      }
      setSize(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (bb |= 0, ab |= 0, !Ub && this._renderingCanvas.width === bb && this._renderingCanvas.height === ab) return !1;
        if (this._renderingCanvas.width = bb, this._renderingCanvas.height = ab, this.scenes) {
          for (let bb = 0; bb < this.scenes.length; bb++) {
            const ab = this.scenes[bb];
            for (let bb = 0; bb < ab.cameras.length; bb++) {
              ab.cameras[bb]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb) {
        throw (0, Xb.l)("engine.rawTexture")
      }
      createRawCubeTexture(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
        throw (0, Xb.l)("engine.rawTexture")
      }
      createRawTexture3D(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb) {
        throw (0, Xb.l)("engine.rawTexture")
      }
      createRawTexture2DArray(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb) {
        throw (0, Xb.l)("engine.rawTexture")
      }
      _sharedInit(bb) {
        this._renderingCanvas = bb
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const bb = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== bb.indexOf("Mobile") || -1 !== bb.indexOf("Mac") && (0, Rb.d)() && "ontouchend" in document
        }, this._checkForMobile(), (0, Rb.k)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(bb) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(bb, !1)
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
      _createImageBitmapFromSource(bb, ab) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(bb, ab) {
        return createImageBitmap(bb, ab)
      }
      resizeImageBitmap(bb, ab, Ub) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(bb) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(bb, ab) {
        if ("undefined" === typeof document) return new OffscreenCanvas(bb, ab);
        const Ub = document.createElement("canvas");
        return Ub.width = bb, Ub.height = ab, Ub
      }
      createCanvas(bb, ab) {
        return Zb._CreateCanvas(bb, ab)
      }
      static _FileToolsLoadImage(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        if (!kb.c.loadImage) throw (0, Xb.l)("FileTools");
        return kb.c.loadImage(bb, ab, Ub, Ab, Mb, Tb, Eb)
      }
      _loadFile(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = (0, kb.i)(bb, ab, Ub, Ab, Mb, Tb);
        return this._activeRequests.push(Eb), Eb.onCompleteObservable.add((() => {
          const bb = this._activeRequests.indexOf(Eb); - 1 !== bb && this._activeRequests.splice(bb, 1)
        })), Eb
      }
      static _FileToolsLoadFile(bb, ab, Ub, Ab, Mb, Tb) {
        if (kb.c.loadFile) return kb.c.loadFile(bb, ab, Ub, Ab, Mb, Tb);
        throw (0, Xb.l)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), Mb.d.ResetCache();
        for (const ab of this._activeRequests) ab.abort();
        this._boundRenderFunction = null, this.UW.notifyObservers(this), this.UW.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, Rb.k)() && window.removeEventListener("resize", this._checkForMobile);
        const bb = Tb.d.Instances.indexOf(this);
        bb >= 0 && Tb.d.Instances.splice(bb, 1), Tb.d.Instances.length || (Tb.d.OnEnginesDisposedObservable.notifyObservers(this), Tb.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(bb) {
        throw (0, Xb.l)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(bb, ab) {
        for (let Ub = 0; Ub < Tb.d.Instances.length; Ub++) {
          const Ab = Tb.d.Instances[Ub];
          for (let Ub = 0; Ub < Ab.scenes.length; Ub++) Ab.scenes[Ub].markAllMaterialsAsDirty(bb, ab)
        }
      }
      static GetCompatibleTextureLoader(bb, ab) {
        return null
      }
    }
    Zb._RenderPassIdCounter = 0, Zb._RescalePostProcessFactory = null, Zb.CollisionsEpsilon = .001, Zb.QueueNewFrame = yb
  },
  38943: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    class Ab {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ab.ShadersRepository : Ab.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ab.ShadersStore : Ab.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Ab.IncludesShadersStore : Ab.IncludesShadersStoreWGSL
      }
    }
    Ab.ShadersRepository = "src/Shaders/", Ab.ShadersStore = {}, Ab.IncludesShadersStore = {}, Ab.ShadersRepositoryWGSL = "src/ShadersWGSL/", Ab.ShadersStoreWGSL = {}, Ab.IncludesShadersStoreWGSL = {}
  },
  38964: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Pb,
      i: () => Db,
      l: () => jb,
      n: () => Xb,
      q: () => Rb,
      s: () => Zb,
      t: () => Lb,
      v: () => eb,
      x: () => vb,
      A: () => Bb,
      C: () => Yb
    });
    class Ab {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(bb) {
        bb && this.program && bb(this.program)
      }
      setEngine(bb) {
        this.engine = bb
      }
      _fillEffectInformation(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
        const Bb = this.engine;
        if (Bb.supportsUniformBuffers)
          for (const vb in ab) bb.bindUniformBlock(vb, ab[vb]);
        let eb;
        for (this.engine.getUniforms(this, Ub).forEach(((bb, ab) => {
            Ab[Ub[ab]] = bb
          })), this._uniforms = Ab, eb = 0; eb < Mb.length; eb++) {
          null == bb.getUniform(Mb[eb]) && (Mb.splice(eb, 1), eb--)
        }
        Mb.forEach(((bb, ab) => {
          Tb[bb] = ab
        }));
        for (const vb of Bb.getAttributes(this, Eb)) Yb.push(vb)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(bb, ab) {
        const Ub = this._valueCache[bb],
          Ab = ab.updateFlag;
        if (void 0 !== Ub && Ub === Ab) return !1;
        const Mb = ab.qUb();
        let Tb = this._matrixValueCache[bb];
        if (void 0 !== Ub && null !== Ub && void 0 !== Tb) {
          let ab = !0;
          for (let bb = 15; bb >= 0; bb--)
            if (Tb[bb] !== Mb[bb]) {
              ab = !1;
              break
            } if (ab) return this._valueCache[bb] = Ab, !1
        }
        return void 0 === Tb && (Tb = this._matrixValueCache[bb] = new Float32Array(16)), Tb.set(Mb), this._valueCache[bb] = Ab, !0
      }
      _cacheFloat2(bb, ab, Ub) {
        let Ab = this._valueCache[bb];
        if (!Ab || 2 !== Ab.length) return Ab = [ab, Ub], this._valueCache[bb] = Ab, !0;
        let Mb = !1;
        return Ab[0] !== ab && (Ab[0] = ab, Mb = !0), Ab[1] !== Ub && (Ab[1] = Ub, Mb = !0), Mb
      }
      _cacheFloat3(bb, ab, Ub, Ab) {
        let Mb = this._valueCache[bb];
        if (!Mb || 3 !== Mb.length) return Mb = [ab, Ub, Ab], this._valueCache[bb] = Mb, !0;
        let Tb = !1;
        return Mb[0] !== ab && (Mb[0] = ab, Tb = !0), Mb[1] !== Ub && (Mb[1] = Ub, Tb = !0), Mb[2] !== Ab && (Mb[2] = Ab, Tb = !0), Tb
      }
      _cacheFloat4(bb, ab, Ub, Ab, Mb) {
        let Tb = this._valueCache[bb];
        if (!Tb || 4 !== Tb.length) return Tb = [ab, Ub, Ab, Mb], this._valueCache[bb] = Tb, !0;
        let Eb = !1;
        return Tb[0] !== ab && (Tb[0] = ab, Eb = !0), Tb[1] !== Ub && (Tb[1] = Ub, Eb = !0), Tb[2] !== Ab && (Tb[2] = Ab, Eb = !0), Tb[3] !== Mb && (Tb[3] = Mb, Eb = !0), Eb
      }
      setInt(bb, ab) {
        const Ub = this._valueCache[bb];
        void 0 !== Ub && Ub === ab || this.engine.setInt(this._uniforms[bb], ab) && (this._valueCache[bb] = ab)
      }
      setInt2(bb, ab, Ub) {
        this._cacheFloat2(bb, ab, Ub) && (this.engine.setInt2(this._uniforms[bb], ab, Ub) || (this._valueCache[bb] = null))
      }
      setInt3(bb, ab, Ub, Ab) {
        this._cacheFloat3(bb, ab, Ub, Ab) && (this.engine.setInt3(this._uniforms[bb], ab, Ub, Ab) || (this._valueCache[bb] = null))
      }
      setInt4(bb, ab, Ub, Ab, Mb) {
        this._cacheFloat4(bb, ab, Ub, Ab, Mb) && (this.engine.setInt4(this._uniforms[bb], ab, Ub, Ab, Mb) || (this._valueCache[bb] = null))
      }
      setIntArray(bb, ab) {
        this._valueCache[bb] = null, this.engine.setIntArray(this._uniforms[bb], ab)
      }
      setIntArray2(bb, ab) {
        this._valueCache[bb] = null, this.engine.setIntArray2(this._uniforms[bb], ab)
      }
      setIntArray3(bb, ab) {
        this._valueCache[bb] = null, this.engine.setIntArray3(this._uniforms[bb], ab)
      }
      setIntArray4(bb, ab) {
        this._valueCache[bb] = null, this.engine.setIntArray4(this._uniforms[bb], ab)
      }
      setUInt(bb, ab) {
        const Ub = this._valueCache[bb];
        void 0 !== Ub && Ub === ab || this.engine.setUInt(this._uniforms[bb], ab) && (this._valueCache[bb] = ab)
      }
      setUInt2(bb, ab, Ub) {
        this._cacheFloat2(bb, ab, Ub) && (this.engine.setUInt2(this._uniforms[bb], ab, Ub) || (this._valueCache[bb] = null))
      }
      setUInt3(bb, ab, Ub, Ab) {
        this._cacheFloat3(bb, ab, Ub, Ab) && (this.engine.setUInt3(this._uniforms[bb], ab, Ub, Ab) || (this._valueCache[bb] = null))
      }
      setUInt4(bb, ab, Ub, Ab, Mb) {
        this._cacheFloat4(bb, ab, Ub, Ab, Mb) && (this.engine.setUInt4(this._uniforms[bb], ab, Ub, Ab, Mb) || (this._valueCache[bb] = null))
      }
      setUIntArray(bb, ab) {
        this._valueCache[bb] = null, this.engine.setUIntArray(this._uniforms[bb], ab)
      }
      setUIntArray2(bb, ab) {
        this._valueCache[bb] = null, this.engine.setUIntArray2(this._uniforms[bb], ab)
      }
      setUIntArray3(bb, ab) {
        this._valueCache[bb] = null, this.engine.setUIntArray3(this._uniforms[bb], ab)
      }
      setUIntArray4(bb, ab) {
        this._valueCache[bb] = null, this.engine.setUIntArray4(this._uniforms[bb], ab)
      }
      setArray(bb, ab) {
        this._valueCache[bb] = null, this.engine.setArray(this._uniforms[bb], ab)
      }
      setArray2(bb, ab) {
        this._valueCache[bb] = null, this.engine.setArray2(this._uniforms[bb], ab)
      }
      setArray3(bb, ab) {
        this._valueCache[bb] = null, this.engine.setArray3(this._uniforms[bb], ab)
      }
      setArray4(bb, ab) {
        this._valueCache[bb] = null, this.engine.setArray4(this._uniforms[bb], ab)
      }
      setMatrices(bb, ab) {
        ab && (this._valueCache[bb] = null, this.engine.setMatrices(this._uniforms[bb], ab))
      }
      setMatrix(bb, ab) {
        this._cacheMatrix(bb, ab) && (this.engine.setMatrices(this._uniforms[bb], ab.qUb()) || (this._valueCache[bb] = null))
      }
      setMatrix3x3(bb, ab) {
        this._valueCache[bb] = null, this.engine.setMatrix3x3(this._uniforms[bb], ab)
      }
      setMatrix2x2(bb, ab) {
        this._valueCache[bb] = null, this.engine.setMatrix2x2(this._uniforms[bb], ab)
      }
      setFloat(bb, ab) {
        const Ub = this._valueCache[bb];
        void 0 !== Ub && Ub === ab || this.engine.setFloat(this._uniforms[bb], ab) && (this._valueCache[bb] = ab)
      }
      setVector2(bb, ab) {
        this._cacheFloat2(bb, ab.x, ab.y) && (this.engine.setFloat2(this._uniforms[bb], ab.x, ab.y) || (this._valueCache[bb] = null))
      }
      setFloat2(bb, ab, Ub) {
        this._cacheFloat2(bb, ab, Ub) && (this.engine.setFloat2(this._uniforms[bb], ab, Ub) || (this._valueCache[bb] = null))
      }
      setVector3(bb, ab) {
        this._cacheFloat3(bb, ab.x, ab.y, ab.z) && (this.engine.setFloat3(this._uniforms[bb], ab.x, ab.y, ab.z) || (this._valueCache[bb] = null))
      }
      setFloat3(bb, ab, Ub, Ab) {
        this._cacheFloat3(bb, ab, Ub, Ab) && (this.engine.setFloat3(this._uniforms[bb], ab, Ub, Ab) || (this._valueCache[bb] = null))
      }
      setVector4(bb, ab) {
        this._cacheFloat4(bb, ab.x, ab.y, ab.z, ab.w) && (this.engine.setFloat4(this._uniforms[bb], ab.x, ab.y, ab.z, ab.w) || (this._valueCache[bb] = null))
      }
      setQuaternion(bb, ab) {
        this._cacheFloat4(bb, ab.x, ab.y, ab.z, ab.w) && (this.engine.setFloat4(this._uniforms[bb], ab.x, ab.y, ab.z, ab.w) || (this._valueCache[bb] = null))
      }
      setFloat4(bb, ab, Ub, Ab, Mb) {
        this._cacheFloat4(bb, ab, Ub, Ab, Mb) && (this.engine.setFloat4(this._uniforms[bb], ab, Ub, Ab, Mb) || (this._valueCache[bb] = null))
      }
      setColor3(bb, ab) {
        this._cacheFloat3(bb, ab.r, ab.g, ab.b) && (this.engine.setFloat3(this._uniforms[bb], ab.r, ab.g, ab.b) || (this._valueCache[bb] = null))
      }
      setColor4(bb, ab, Ub) {
        this._cacheFloat4(bb, ab.r, ab.g, ab.b, Ub) && (this.engine.setFloat4(this._uniforms[bb], ab.r, ab.g, ab.b, Ub) || (this._valueCache[bb] = null))
      }
      setDirectColor4(bb, ab) {
        this._cacheFloat4(bb, ab.r, ab.g, ab.b, ab.a) && (this.engine.setFloat4(this._uniforms[bb], ab.r, ab.g, ab.b, ab.a) || (this._valueCache[bb] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var Mb = Ub(38973);
    const Tb = new WeakMap,
      Eb = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function Yb(bb) {
      let ab = Tb.get(bb);
      if (!ab) {
        if (!bb) return Eb;
        ab = {
          _webGLVersion: bb.TEXTURE_BINDING_3D ? 2 : 1,
          _context: bb,
          parallelShaderCompile: bb.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, Tb.set(bb, ab)
      }
      return ab
    }

    function Bb(bb) {
      Tb.delete(bb)
    }

    function eb(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = Yb(Ab);
      Tb || (Tb = Eb._createShaderProgramInjection ?? Pb);
      return Tb(bb, yb(ab, "vertex", Ab, Eb._contextWasLost), yb(Ub, "fragment", Ab, Eb._contextWasLost), Ab, Mb, Eb.validateShaderPrograms)
    }

    function vb(bb, ab, Ub, Ab, Mb) {
      let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Eb = arguments.length > 6 ? arguments[6] : void 0;
      const Bb = Yb(Mb);
      Eb || (Eb = Bb._createShaderProgramInjection ?? Pb);
      const eb = Bb._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return Eb(bb, kb(ab, "vertex", Ab, eb, Mb, Bb._contextWasLost), kb(Ub, "fragment", Ab, eb, Mb, Bb._contextWasLost), Mb, Tb, Bb.validateShaderPrograms)
    }

    function Lb(bb, ab) {
      const Ub = new Ab,
        Mb = Yb(bb);
      return Mb.parallelShaderCompile && !Mb.disableParallelShaderCompile && (Ub.isParallelCompiled = !0), Ub.context = Mb._context, Ub
    }

    function Pb(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 5 ? arguments[5] : void 0;
      const Tb = Ab.createProgram();
      if (bb.program = Tb, !Tb) throw new Error("Unable to create program");
      return Ab.attachShader(Tb, ab), Ab.attachShader(Tb, Ub), Ab.linkProgram(Tb), bb.context = Ab, bb.vertexShader = ab, bb.fragmentShader = Ub, bb.isParallelCompiled || jb(bb, Ab, Mb), Tb
    }

    function Xb(bb, ab, Ub) {
      const Ab = bb;
      if (Ab._isDisposed) return !1;
      const Mb = Yb(ab);
      return !!(Mb && Mb.parallelShaderCompile && Mb.parallelShaderCompile.COMPLETION_STATUS_KHR && Ab.program && ab.getProgramParameter(Ab.program, Mb.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (jb(Ab, ab, Ub), !0)
    }

    function jb(bb, ab, Ub) {
      const Ab = bb.context,
        Mb = bb.vertexShader,
        Tb = bb.fragmentShader,
        Eb = bb.program;
      if (!Ab.getProgramParameter(Eb, Ab.LINK_STATUS)) {
        if (!ab.getShaderParameter(Mb, ab.COMPILE_STATUS)) {
          const Ub = ab.getShaderInfoLog(Mb);
          if (Ub) throw bb.vertexCompilationError = Ub, new Error("VERTEX SHADER " + Ub)
        }
        if (!ab.getShaderParameter(Tb, ab.COMPILE_STATUS)) {
          const Ub = ab.getShaderInfoLog(Tb);
          if (Ub) throw bb.fragmentCompilationError = Ub, new Error("FRAGMENT SHADER " + Ub)
        }
        const Ub = Ab.getProgramInfoLog(Eb);
        if (Ub) throw bb.programLinkError = Ub, new Error(Ub)
      }
      if (Ub) {
        Ab.validateProgram(Eb);
        if (!Ab.getProgramParameter(Eb, Ab.VALIDATE_STATUS)) {
          const ab = Ab.getProgramInfoLog(Eb);
          if (ab) throw bb.programValidationError = ab, new Error(ab)
        }
      }
      Ab.deleteShader(Mb), Ab.deleteShader(Tb), bb.vertexShader = void 0, bb.fragmentShader = void 0, bb.onCompiled && (bb.onCompiled(), bb.onCompiled = void 0)
    }

    function Rb(bb, ab, Ub, Ab, Mb, Tb, Eb, Bb, Lb) {
      let Pb = arguments.length > 10 ? arguments[10] : void 0,
        Xb = arguments.length > 11 ? arguments[11] : void 0,
        jb = arguments.length > 12 ? arguments[12] : void 0;
      const Rb = Yb(bb.context);
      Xb || (Xb = Rb.createRawShaderProgramInjection ?? eb), jb || (jb = Rb.createShaderProgramInjection ?? vb);
      const kb = bb;
      kb.program = Ab ? Xb(kb, ab, Ub, kb.context, Lb) : jb(kb, ab, Ub, Bb, kb.context, Lb), kb.program.__SPECTOR_rebuildProgram = Eb, Pb()
    }

    function kb(bb, ab, Ub, Ab, Tb, Eb) {
      return yb((0, Mb.e)(bb, Ub, Ab), ab, Tb, Eb)
    }

    function yb(bb, ab, Ub, Ab) {
      const Mb = Ub.createShader("vertex" === ab ? Ub.VERTEX_SHADER : Ub.FRAGMENT_SHADER);
      if (!Mb) {
        let bb, Mb = Ub.NO_ERROR;
        for (;
          (bb = Ub.getError()) !== Ub.NO_ERROR;) Mb = bb;
        throw new Error(`Something went wrong while creating a gl ${ab} shader object. gl error=${Mb}, gl isContextLost=${Ub.isContextLost()}, _contextWasLost=${Ab}`)
      }
      return Ub.shaderSource(Mb, bb), Ub.compileShader(Mb), Mb
    }

    function Zb(bb, ab) {
      ab.useProgram(bb)
    }

    function Db(bb, ab) {
      const Ub = bb;
      if (!Ub.isParallelCompiled) return void ab(bb);
      const Ab = Ub.onCompiled;
      Ub.onCompiled = () => {
        Ab?.(), ab(bb)
      }
    }
  },
  38933: (bb, ab, Ub) => {
    Ub.d(ab, {
      ThinEngine: () => xb
    });
    var Ab = Ub(38939),
      Mb = Ub(38964),
      Tb = Ub(39002),
      Eb = Ub(39021),
      Yb = Ub(37989),
      Bb = Ub(38955);
    class eb {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(bb, ab, Ub, Ab, Mb) {
        if (Mb.drawBuffersExtensionDisabled) {
          const ab = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          bb = bb.replace(ab, "")
        }
        return bb
      }
    }
    const vb = /(flat\s)?\s*varying\s*.*/;
    class Lb {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(bb) {
        return bb.replace("attribute", "in")
      }
      varyingCheck(bb, ab) {
        return vb.test(bb)
      }
      varyingProcessor(bb, ab) {
        return bb.replace("varying", ab ? "in" : "out")
      }
      postProcessor(bb, ab, Ub) {
        const Ab = -1 !== bb.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (bb = (bb = bb.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), Ub) {
          const Ub = -1 !== bb.search(/layout *\(location *= *0\) *out/g),
            Mb = -1 !== ab.indexOf("#define DUAL_SOURCE_BLENDING"),
            Tb = Mb ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          Mb && (bb = "#extension GL_EXT_blend_func_extended : require\n" + bb), bb = (bb = (bb = (bb = (bb = (bb = (bb = bb.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (Ab || Ub ? "" : Tb) + "void main(")
        } else {
          ab.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (bb = "invariant gl_Position;\n" + bb);
          if (-1 !== ab.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + bb
        }
        return bb
      }
    }
    var Pb = Ub(39027),
      Xb = Ub(39033),
      jb = Ub(39042),
      Rb = Ub(38915),
      kb = Ub(38973),
      yb = Ub(38951),
      Zb = Ub(39044),
      Db = Ub(39013);
    class zb {}
    class xb extends Tb.d {
      get name() {
        return this._name
      }
      set name(bb) {
        this._name = bb
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return Ab.d.ShadersRepository
      }
      static set ShadersRepository(bb) {
        Ab.d.ShadersRepository = bb
      }
      get supportsUniformBuffers() {
        return this.oj > 1 && !this.disableUniformBuffers
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
      constructor(bb, ab, Ub, Ab) {
        if (Ub = Ub || {}, super(ab ?? Ub.antialias, Ub, Ab), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !bb) return;
        let Tb;
        if (bb.getContext) {
          if (Tb = bb, void 0 === Ub.preserveDrawingBuffer && (Ub.preserveDrawingBuffer = !1), void 0 === Ub.xrCompatible && (Ub.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const bb = navigator.userAgent;
            for (const ab of xb.ExceptionList) {
              const Ab = ab.key,
                Mb = ab.targets;
              if (new RegExp(Ab).test(bb)) {
                if (ab.capture && ab.captureConstraint) {
                  const Ub = ab.capture,
                    Ab = ab.captureConstraint,
                    Mb = new RegExp(Ub).exec(bb);
                  if (Mb && Mb.length > 0) {
                    if (parseInt(Mb[Mb.length - 1]) >= Ab) continue
                  }
                }
                for (const bb of Mb) switch (bb) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    Ub.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, Mb.A)(this._gl)
            } : (this._onContextLost = bb => {
              bb.preventDefault(), this._contextWasLost = !0, (0, Mb.A)(this._gl), Yb.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, Tb.addEventListener("webglcontextrestored", this._onContextRestored, !1), Ub.powerPreference = Ub.powerPreference || "high-performance"), Tb.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (Ub.xrCompatible = !1), !Ub.disableWebGL2Support) try {
            this._gl = Tb.getContext("webgl2", Ub) || Tb.getContext("experimental-webgl2", Ub), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (vb) {}
          if (!this._gl) {
            if (!Tb) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = Tb.getContext("webgl", Ub) || Tb.getContext("experimental-webgl", Ub)
            } catch (vb) {
              throw new Error("WebGL not supported", {
                cause: vb
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = bb, Tb = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const ab = this._gl.getContextAttributes();
          ab && (Ub.stencil = ab.stencil)
        }
        this._sharedInit(Tb), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== Ub.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = Ub.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let Mb = 0; Mb < this._caps.maxVertexAttribs; Mb++) this._currentBufferPointers[Mb] = new zb;
        this._shaderProcessor = this.oj > 1 ? new Lb : new eb;
        const Eb = `Babylon.js v${xb.Version}`;
        Yb.e.Log(Eb + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Eb);
        const Bb = (0, Mb.C)(this._gl);
        Bb.validateShaderPrograms = this.validateShaderPrograms, Bb.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(bb) {
        return null
      }
      areAllEffectsReady() {
        for (const bb in this._compiledEffects) {
          if (!this._compiledEffects[bb].isReady()) return !1
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
        const bb = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != bb && (this._glRenderer = this._gl.getParameter(bb.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(bb.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const ab = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!ab, this._alphaState = new Db.c(this._caps.blendParametersPerTarget), ab && (this._gl.blendEquationSeparateIndexed = ab.blendEquationSeparateiOES.bind(ab), this._gl.blendEquationIndexed = ab.blendEquationiOES.bind(ab), this._gl.blendFuncSeparateIndexed = ab.blendFuncSeparateiOES.bind(ab), this._gl.blendFuncIndexed = ab.blendFunciOES.bind(ab), this._gl.colorMaskIndexed = ab.colorMaskiOES.bind(ab), this._gl.disableIndexed = ab.disableiOES.bind(ab), this._gl.enableIndexed = ab.enableiOES.bind(ab)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const bb = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== bb) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = bb.drawBuffersWEBGL.bind(bb), this._caps.maxDrawBuffers = this._gl.getParameter(bb.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let ab = 0; ab < 16; ab++) this._gl["COLOR_ATTACHMENT" + ab + "_WEBGL"] = bb["COLOR_ATTACHMENT" + ab + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const bb = this._gl.getExtension("WEBGL_depth_texture");
          null != bb && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = bb.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const bb = this._gl.getExtension("OES_vertex_array_object");
          null != bb && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = bb.createVertexArrayOES.bind(bb), this._gl.bindVertexArray = bb.bindVertexArrayOES.bind(bb), this._gl.deleteVertexArray = bb.deleteVertexArrayOES.bind(bb))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const bb = this._gl.getExtension("ANGLE_instanced_arrays");
          null != bb ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = bb.drawArraysInstancedANGLE.bind(bb), this._gl.drawElementsInstanced = bb.drawElementsInstancedANGLE.bind(bb), this._gl.vertexAttribDivisor = bb.vertexAttribDivisorANGLE.bind(bb)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const bb = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            ab = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (bb && ab && (this._caps.highPrecisionShaderSupported = 0 !== bb.precision && 0 !== ab.precision, this._caps.shaderFloatPrecision = Math.min(bb.precision, ab.precision)), !this._shouldUseHighPrecisionShader) {
            const bb = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              ab = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            bb && ab && (this._caps.shaderFloatPrecision = Math.min(bb.precision, ab.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const bb = this._gl.getExtension("EXT_blend_minmax");
          null != bb && (this._caps.blendMinMax = !0, this._gl.MAX = bb.MAX_EXT, this._gl.MIN = bb.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const bb = this._gl.getExtension("EXT_sRGB");
            null != bb && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: bb.SRGB_EXT,
              SRGB8: bb.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: bb.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const bb = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== bb && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && bb)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let Ub = 0; Ub < this._maxSimultaneousTextures; Ub++) this._nextFreeTextureSlots.push(Ub);
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
      get oj() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const bb = this._workingCanvas.getContext("2d");
        bb && (this._workingContext = bb)
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
        const bb = this.getGlInfo();
        return bb && bb.renderer ? bb.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Tb = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = Tb;
        let Eb = 0;
        if (ab && bb) {
          let ab = !0;
          if (this._currentRenderTarget) {
            const Ub = this._currentRenderTarget.texture?.format;
            if (void 0 !== Ub && (0, Zb.h)(Ub)) {
              const Ub = this._currentRenderTarget.texture?.type;
              void 0 !== Ub && (0, Zb.j)(Ub) ? (xb._TempClearColorUint32[0] = 255 * bb.r, xb._TempClearColorUint32[1] = 255 * bb.g, xb._TempClearColorUint32[2] = 255 * bb.b, xb._TempClearColorUint32[3] = 255 * bb.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, xb._TempClearColorUint32), ab = !1) : (xb._TempClearColorInt32[0] = 255 * bb.r, xb._TempClearColorInt32[1] = 255 * bb.g, xb._TempClearColorInt32[2] = 255 * bb.b, xb._TempClearColorInt32[3] = 255 * bb.a, this._gl.clearBufferiv(this._gl.COLOR, 0, xb._TempClearColorInt32), ab = !1)
            }
          }
          ab && (this._gl.clearColor(bb.r, bb.g, bb.b, void 0 !== bb.a ? bb.a : 1), Eb |= this._gl.COLOR_BUFFER_BIT)
        }
        Ub && (this.hUb ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Eb |= this._gl.DEPTH_BUFFER_BIT), Ab && (this._gl.clearStencil(Mb), Eb |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Eb)
      }
      _clearColorAttachment(bb, ab, Ub, Ab) {
        if ((0, Zb.h)(Ub)) {
          const Ub = (0, Zb.j)(Ab),
            Mb = Ub ? xb._TempClearColorUint32 : xb._TempClearColorInt32;
          return Mb[0] = ab.r, Mb[1] = ab.g, Mb[2] = ab.b, Mb[3] = ab.a, void(Ub ? this._gl.clearBufferuiv(this._gl.COLOR, bb, Mb) : this._gl.clearBufferiv(this._gl.COLOR, bb, Mb))
        }
        xb._TempClearColorFloat32[0] = ab.r, xb._TempClearColorFloat32[1] = ab.g, xb._TempClearColorFloat32[2] = ab.b, xb._TempClearColorFloat32[3] = ab.a, this._gl.clearBufferfv(this._gl.COLOR, bb, xb._TempClearColorFloat32)
      }
      _viewport(bb, ab, Ub, Ab) {
        bb === this._viewportCached.x && ab === this._viewportCached.y && Ub === this._viewportCached.z && Ab === this._viewportCached.w || (this._viewportCached.x = bb, this._viewportCached.y = ab, this._viewportCached.z = Ub, this._viewportCached.w = Ab, this._gl.viewport(bb, ab, Ub, Ab))
      }
      PD() {
        super.PD(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0,
          Mb = arguments.length > 4 ? arguments[4] : void 0,
          Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Bb = bb;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = bb, this._integerMRTAttachmentsMask = !bb.isMulti && bb.texture && (0, Zb.h)(bb.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(Bb._framebuffer);
        const eb = this._gl;
        bb.isMulti || (bb.is2DArray || bb.is3D ? (eb.framebufferTextureLayer(eb.FRAMEBUFFER, eb.COLOR_ATTACHMENT0, bb.texture._hardwareTexture?.underlyingResource, Tb, Eb), Bb._currentLOD = Tb) : bb.isCube ? eb.framebufferTexture2D(eb.FRAMEBUFFER, eb.COLOR_ATTACHMENT0, eb.TEXTURE_CUBE_MAP_POSITIVE_X + ab, bb.texture._hardwareTexture?.underlyingResource, Tb) : Bb._currentLOD !== Tb && (eb.framebufferTexture2D(eb.FRAMEBUFFER, eb.COLOR_ATTACHMENT0, eb.TEXTURE_2D, bb.texture._hardwareTexture?.underlyingResource, Tb), Bb._currentLOD = Tb));
        const vb = bb._depthStencilTexture;
        if (vb) {
          bb.is3D && (bb.texture.width === vb.width && bb.texture.height === vb.height && bb.texture.depth === vb.depth || Yb.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const Ub = bb._depthStencilTextureWithStencil ? eb.DEPTH_STENCIL_ATTACHMENT : eb.DEPTH_ATTACHMENT;
          bb.is2DArray || bb.is3D ? eb.framebufferTextureLayer(eb.FRAMEBUFFER, Ub, vb._hardwareTexture?.underlyingResource, Tb, Eb) : bb.isCube ? eb.framebufferTexture2D(eb.FRAMEBUFFER, Ub, eb.TEXTURE_CUBE_MAP_POSITIVE_X + ab, vb._hardwareTexture?.underlyingResource, Tb) : eb.framebufferTexture2D(eb.FRAMEBUFFER, Ub, eb.TEXTURE_2D, vb._hardwareTexture?.underlyingResource, Tb)
        }
        Bb._MSAAFramebuffer && this._bindUnboundFramebuffer(Bb._MSAAFramebuffer), this._cachedViewport && !Mb ? this.setViewport(this._cachedViewport, Ub, Ab) : (Ub || (Ub = bb.width, Tb && (Ub /= Math.pow(2, Tb))), Ab || (Ab = bb.height, Tb && (Ab /= Math.pow(2, Tb))), this._viewport(0, 0, Ub, Ab)), this.wipeCaches()
      }
      setStateCullFaceType(bb, ab) {
        const Ub = this.cullBackFaces ?? bb ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== Ub || ab) && (this._depthCullingState.cullFace = Ub)
      }
      setState(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Mb = arguments.length > 4 ? arguments[4] : void 0,
          Tb = arguments.length > 5 ? arguments[5] : void 0,
          Eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== bb || Ub) && (this._depthCullingState.cull = bb), this.setStateCullFaceType(Mb, Ub), this.setZOffset(ab), this.setZOffsetUnits(Eb);
        const Yb = Ab ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== Yb || Ub) && (this._depthCullingState.frontFace = Yb), this._stencilStateComposer.stencilMaterial = Tb
      }
      _resolveAndGenerateMipMapsFramebuffer(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        bb.disableAutomaticMSAAResolve || (bb.isMulti ? this.resolveMultiFramebuffer(bb) : this.resolveFramebuffer(bb)), ab || (bb.isMulti ? this.generateMipMapsMultiFramebuffer(bb) : this.generateMipMapsFramebuffer(bb))
      }
      _bindUnboundFramebuffer(bb) {
        this._currentFramebuffer !== bb && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, bb), this._currentFramebuffer = bb)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(bb) {
        const ab = this._getTextureTarget(bb);
        this._bindTextureDirectly(ab, bb, !0), this._gl.generateMipmap(ab), this._bindTextureDirectly(ab, null)
      }
      unBindFramebuffer(bb, ab, Ub) {
        const Ab = bb;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(bb, ab), Ub && (Ab._MSAAFramebuffer && this._bindUnboundFramebuffer(Ab._framebuffer), Ub()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(bb) {
        bb.isMulti || !bb.texture?.generateMipMaps || bb.isCube || this.generateMipmaps(bb.texture)
      }
      resolveFramebuffer(bb) {
        const ab = bb,
          Ub = this._gl;
        if (!ab._MSAAFramebuffer || ab.isMulti) return;
        let Ab = ab.resolveMSAAColors ? Ub.COLOR_BUFFER_BIT : 0;
        Ab |= ab._generateDepthBuffer && ab.resolveMSAADepth ? Ub.DEPTH_BUFFER_BIT : 0, Ab |= ab._generateStencilBuffer && ab.resolveMSAAStencil ? Ub.STENCIL_BUFFER_BIT : 0, Ub.bindFramebuffer(Ub.READ_FRAMEBUFFER, ab._MSAAFramebuffer), Ub.bindFramebuffer(Ub.DRAW_FRAMEBUFFER, ab._framebuffer), Ub.blitFramebuffer(0, 0, bb.width, bb.height, 0, 0, bb.width, bb.height, Ab, Ub.NEAREST)
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
      createVertexBuffer(bb, ab, Ub) {
        return this._createVertexBuffer(bb, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(bb, ab) {
        const Ub = this._gl.createBuffer();
        if (!Ub) throw new Error("Unable to create vertex buffer");
        const Ab = new Pb.e(Ub);
        return this.bindArrayBuffer(Ab), "number" !== typeof bb ? bb instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(bb), ab), Ab.PL = 4 * bb.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, bb, ab), Ab.PL = bb.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(bb), ab), Ab.PL = bb), this._resetVertexBufferBinding(), Ab.references = 1, Ab
      }
      createDynamicVertexBuffer(bb, ab) {
        return this._createVertexBuffer(bb, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(bb, ab, Ub) {
        const Ab = this._gl.createBuffer(),
          Mb = new Pb.e(Ab);
        if (!Ab) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(Mb);
        const Tb = this._normalizeIndexData(bb);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Tb, ab ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), Mb.references = 1, Mb.is32Bits = 4 === Tb.BYTES_PER_ELEMENT, Mb
      }
      _normalizeIndexData(bb) {
        if (2 === bb.BYTES_PER_ELEMENT) return bb;
        if (this._caps.uintIndices) {
          if (bb instanceof Uint32Array) return bb;
          for (let ab = 0; ab < bb.length; ab++)
            if (bb[ab] >= 65535) return new Uint32Array(bb);
          return new Uint16Array(bb)
        }
        return new Uint16Array(bb)
      }
      bindArrayBuffer(bb) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(bb, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(bb, ab, Ub) {
        const Ab = bb.program,
          Mb = this._gl.getUniformBlockIndex(Ab, ab);
        this._gl.uniformBlockBinding(Ab, Mb, Ub)
      }
      bindIndexBuffer(bb) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(bb, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(bb, ab) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[ab] !== bb) && (this._gl.bindBuffer(ab, bb ? bb.underlyingResource : null), this._currentBoundBuffer[ab] = bb)
      }
      updateArrayBuffer(bb) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, bb)
      }
      _vertexAttribPointer(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        const Yb = this._currentBufferPointers[ab];
        if (!Yb) return;
        let Bb = !1;
        Yb.active ? (Yb.buffer !== bb && (Yb.buffer = bb, Bb = !0), Yb.size !== Ub && (Yb.size = Ub, Bb = !0), Yb.type !== Ab && (Yb.type = Ab, Bb = !0), Yb.normalized !== Mb && (Yb.normalized = Mb, Bb = !0), Yb.stride !== Tb && (Yb.stride = Tb, Bb = !0), Yb.offset !== Eb && (Yb.offset = Eb, Bb = !0)) : (Bb = !0, Yb.active = !0, Yb.index = ab, Yb.size = Ub, Yb.type = Ab, Yb.normalized = Mb, Yb.stride = Tb, Yb.offset = Eb, Yb.buffer = bb), (Bb || this._vaoRecordInProgress) && (this.bindArrayBuffer(bb), Ab === this._gl.UNSIGNED_INT || Ab === this._gl.INT ? this._gl.vertexAttribIPointer(ab, Ub, Ab, Tb, Eb) : this._gl.vertexAttribPointer(ab, Ub, Ab, Mb, Tb, Eb))
      }
      _bindIndexBufferWithCache(bb) {
        null != bb && this._cachedIndexBuffer !== bb && (this._cachedIndexBuffer = bb, this.bindIndexBuffer(bb), this._uintIndicesCurrentlySet = bb.is32Bits)
      }
      _bindVertexBuffersAttributes(bb, ab, Ub) {
        const Ab = ab.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let Mb = 0; Mb < Ab.length; Mb++) {
          const Tb = ab.getAttributeLocation(Mb);
          if (Tb >= 0) {
            const ab = Ab[Mb];
            let Eb = null;
            if (Ub && (Eb = Ub[ab]), Eb || (Eb = bb[ab]), !Eb) continue;
            this._gl.enableVertexAttribArray(Tb), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[Tb] = !0);
            const Yb = Eb.getBuffer();
            Yb && (this._vertexAttribPointer(Yb, Tb, Eb.getSize(), Eb.type, Eb.normalized, Eb.byteStride, Eb.byteOffset), Eb.getIsInstanced() && (this._gl.vertexAttribDivisor(Tb, Eb.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(Tb), this._currentInstanceBuffers.push(Yb))))
          }
        }
      }
      recordVertexArrayObject(bb, ab, Ub, Ab) {
        const Mb = this._gl.createVertexArray();
        if (!Mb) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(Mb), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(bb, Ub, Ab), this.bindIndexBuffer(ab), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), Mb
      }
      bindVertexArrayObject(bb, ab) {
        this._cachedVertexArrayObject !== bb && (this._cachedVertexArrayObject = bb, this._gl.bindVertexArray(bb), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != ab && ab.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(bb, ab, Ub, Ab, Mb) {
        if (this._cachedVertexBuffers !== bb || this._cachedEffectForVertexBuffers !== Mb) {
          this._cachedVertexBuffers = bb, this._cachedEffectForVertexBuffers = Mb;
          const ab = Mb.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let Tb = 0;
          for (let Eb = 0; Eb < ab; Eb++)
            if (Eb < Ub.length) {
              const ab = Mb.getAttributeLocation(Eb);
              ab >= 0 && (this._gl.enableVertexAttribArray(ab), this._vertexAttribArraysEnabled[ab] = !0, this._vertexAttribPointer(bb, ab, Ub[Eb], this._gl.FLOAT, !1, Ab, Tb)), Tb += 4 * Ub[Eb]
            }
        }
        this._bindIndexBufferWithCache(ab)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(bb, ab, Ub, Ab) {
        this._cachedVertexBuffers === bb && this._cachedEffectForVertexBuffers === Ub || (this._cachedVertexBuffers = bb, this._cachedEffectForVertexBuffers = Ub, this._bindVertexBuffersAttributes(bb, Ub, Ab)), this._bindIndexBufferWithCache(ab)
      }
      unbindInstanceAttributes() {
        let bb;
        for (let ab = 0, Ub = this._currentInstanceLocations.length; ab < Ub; ab++) {
          const Ub = this._currentInstanceBuffers[ab];
          bb != Ub && Ub.references && (bb = Ub, this.bindArrayBuffer(Ub));
          const Ab = this._currentInstanceLocations[ab];
          this._gl.vertexAttribDivisor(Ab, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(bb) {
        this._gl.deleteVertexArray(bb)
      }
      _releaseBuffer(bb) {
        return bb.references--, 0 === bb.references && (this._deleteBuffer(bb), !0)
      }
      _deleteBuffer(bb) {
        this._gl.deleteBuffer(bb.underlyingResource)
      }
      updateAndBindInstancesBuffer(bb, ab, Ub) {
        if (this.bindArrayBuffer(bb), ab && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, ab), void 0 !== Ub[0].index) this.bindInstancesBuffer(bb, Ub, !0);
        else
          for (let Ab = 0; Ab < 4; Ab++) {
            const ab = Ub[Ab];
            this._vertexAttribArraysEnabled[ab] || (this._gl.enableVertexAttribArray(ab), this._vertexAttribArraysEnabled[ab] = !0), this._vertexAttribPointer(bb, ab, 4, this._gl.FLOAT, !1, 64, 16 * Ab), this._gl.vertexAttribDivisor(ab, 1), this._currentInstanceLocations.push(ab), this._currentInstanceBuffers.push(bb)
          }
      }
      bindInstancesBuffer(bb, ab) {
        let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(bb);
        let Ab = 0;
        if (Ub)
          for (let Mb = 0; Mb < ab.length; Mb++) {
            Ab += 4 * ab[Mb].attributeSize
          }
        for (let Mb = 0; Mb < ab.length; Mb++) {
          const Ub = ab[Mb];
          void 0 === Ub.index && (Ub.index = this._currentEffect.getAttributeLocationByName(Ub.attributeName)), Ub.index < 0 || (this._vertexAttribArraysEnabled[Ub.index] || (this._gl.enableVertexAttribArray(Ub.index), this._vertexAttribArraysEnabled[Ub.index] = !0), this._vertexAttribPointer(bb, Ub.index, Ub.attributeSize, Ub.attributeType || this._gl.FLOAT, Ub.normalized || !1, Ab, Ub.offset), this._gl.vertexAttribDivisor(Ub.index, void 0 === Ub.divisor ? 1 : Ub.divisor), this._currentInstanceLocations.push(Ub.index), this._currentInstanceBuffers.push(bb))
        }
      }
      disableInstanceAttributeByName(bb) {
        if (!this._currentEffect) return;
        const ab = this._currentEffect.getAttributeLocationByName(bb);
        this.disableInstanceAttribute(ab)
      }
      disableInstanceAttribute(bb) {
        let ab, Ub = !1;
        for (; - 1 !== (ab = this._currentInstanceLocations.indexOf(bb));) this._currentInstanceLocations.splice(ab, 1), this._currentInstanceBuffers.splice(ab, 1), Ub = !0;
        Ub && (this._gl.vertexAttribDivisor(bb, 0), this.disableAttributeByIndex(bb))
      }
      disableAttributeByIndex(bb) {
        this._gl.disableVertexAttribArray(bb), this._vertexAttribArraysEnabled[bb] = !1, this._currentBufferPointers[bb].active = !1
      }
      draw(bb, ab, Ub, Ab) {
        this.drawElementsType(bb ? 0 : 1, ab, Ub, Ab)
      }
      drawPointClouds(bb, ab, Ub) {
        this.drawArraysType(2, bb, ab, Ub)
      }
      drawUnIndexed(bb, ab, Ub, Ab) {
        this.drawArraysType(bb ? 0 : 1, ab, Ub, Ab)
      }
      drawElementsType(bb, ab, Ub, Ab) {
        this.applyStates(), this._reportDrawCall();
        const Mb = this._drawMode(bb),
          Tb = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          Eb = this._uintIndicesCurrentlySet ? 4 : 2;
        Ab ? this._gl.drawElementsInstanced(Mb, Ub, Tb, ab * Eb, Ab) : this._gl.drawElements(Mb, Ub, Tb, ab * Eb)
      }
      drawArraysType(bb, ab, Ub, Ab) {
        this.applyStates(), this._reportDrawCall();
        const Mb = this._drawMode(bb);
        Ab ? this._gl.drawArraysInstanced(Mb, ab, Ub, Ab) : this._gl.drawArrays(Mb, ab, Ub)
      }
      _drawMode(bb) {
        switch (bb) {
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
      _releaseEffect(bb) {
        this._compiledEffects[bb._key] && delete this._compiledEffects[bb._key];
        const ab = bb.getPipelineContext();
        ab && this._deletePipelineContext(ab)
      }
      _deletePipelineContext(bb) {
        const ab = bb;
        ab && ab.program && (ab.program.__SPECTOR_rebuildProgram = null, (0, yb.j)(ab), this._gl && (this._currentProgram === ab.program && this._setProgram(null), this._gl.deleteProgram(ab.program)))
      }
      _getGlobalDefines(bb) {
        return (0, kb.g)(bb, this.isNDCHalfZRange, this.hUb, this.useExactSrgbConversions)
      }
      createEffect(bb, ab, Ub, Tb, Eb, Yb, Bb, eb, vb) {
        let Lb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Pb = arguments.length > 10 ? arguments[10] : void 0;
        const Xb = "string" === typeof bb ? bb : bb.vertexToken || bb.vertexSource || bb.vertexElement || bb.vertex,
          jb = "string" === typeof bb ? bb : bb.fragmentToken || bb.fragmentSource || bb.fragmentElement || bb.fragment,
          Rb = this._getGlobalDefines(),
          kb = void 0 !== ab.attributes;
        let yb = Eb ?? ab.defines ?? "";
        Rb && (yb += Rb);
        const Zb = Xb + "+" + jb + "@" + yb;
        if (this._compiledEffects[Zb]) {
          const bb = this._compiledEffects[Zb];
          return Bb && bb.isReady() && Bb(bb), bb._refCount++, bb
        }
        this._gl && (0, Mb.C)(this._gl);
        const Db = new Ab.d(bb, ab, kb ? this : Ub, Tb, this, Eb, Yb, Bb, eb, vb, Zb, ab.shaderLanguage ?? Lb, ab.extraInitializationsAsync ?? Pb);
        return this._compiledEffects[Zb] = Db, Db
      }
      _getShaderSource(bb) {
        return this._gl.getShaderSource(bb)
      }
      createRawShaderProgram(bb, ab, Ub, Ab) {
        let Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Eb = (0, Mb.C)(this._gl);
        return Eb._contextWasLost = this._contextWasLost, Eb.validateShaderPrograms = this.validateShaderPrograms, (0, Mb.v)(bb, ab, Ub, Ab || this._gl, Tb)
      }
      createShaderProgram(bb, ab, Ub, Ab, Tb) {
        let Eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const Yb = (0, Mb.C)(this._gl);
        return Yb._contextWasLost = this._contextWasLost, Yb.validateShaderPrograms = this.validateShaderPrograms, (0, Mb.x)(bb, ab, Ub, Ab, Tb || this._gl, Eb)
      }
      inlineShaderCode(bb) {
        return bb
      }
      createPipelineContext(bb) {
        if (this._gl) {
          (0, Mb.C)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const ab = (0, Mb.t)(this._gl, bb);
        return ab.engine = this, ab
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(bb) {
        return (0, Mb.l)(bb, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(bb, ab, Ub, Ab, Tb, Eb, Yb, Bb, eb, vb, Lb) {
        const Pb = (0, Mb.C)(this._gl);
        return Pb._contextWasLost = this._contextWasLost, Pb.validateShaderPrograms = this.validateShaderPrograms, Pb._createShaderProgramInjection = this._createShaderProgram.bind(this), Pb.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Pb.createShaderProgramInjection = this.createShaderProgram.bind(this), Pb.loadFileInjection = this._loadFile.bind(this), (0, Mb.q)(bb, ab, Ub, Ab, Tb, Eb, Yb, Bb, eb, vb, Lb)
      }
      _createShaderProgram(bb, ab, Ub, Ab) {
        let Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, Mb.e)(bb, ab, Ub, Ab, Tb)
      }
      _isRenderingStateCompiled(bb) {
        return !this._isDisposed && (0, Mb.n)(bb, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(bb, ab) {
        (0, Mb.i)(bb, ab)
      }
      getUniforms(bb, ab) {
        const Ub = new Array,
          Ab = bb;
        for (let Mb = 0; Mb < ab.length; Mb++) Ub.push(this._gl.getUniformLocation(Ab.program, ab[Mb]));
        return Ub
      }
      getAttributes(bb, ab) {
        const Ub = [],
          Ab = bb;
        for (let Tb = 0; Tb < ab.length; Tb++) try {
          Ub.push(this._gl.getAttribLocation(Ab.program, ab[Tb]))
        } catch (Mb) {
          Ub.push(-1)
        }
        return Ub
      }
      enableEffect(bb) {
        (bb = null !== bb && (0, Eb.c)(bb) ? bb.effect : bb) && bb !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(bb), this._currentEffect = bb, bb.onBind && bb.onBind(bb), bb._onBindObservable && bb._onBindObservable.notifyObservers(bb))
      }
      setInt(bb, ab) {
        return !!bb && (this._gl.uniform1i(bb, ab), !0)
      }
      setInt2(bb, ab, Ub) {
        return !!bb && (this._gl.uniform2i(bb, ab, Ub), !0)
      }
      setInt3(bb, ab, Ub, Ab) {
        return !!bb && (this._gl.uniform3i(bb, ab, Ub, Ab), !0)
      }
      setInt4(bb, ab, Ub, Ab, Mb) {
        return !!bb && (this._gl.uniform4i(bb, ab, Ub, Ab, Mb), !0)
      }
      setIntArray(bb, ab) {
        return !!bb && (this._gl.uniform1iv(bb, ab), !0)
      }
      setIntArray2(bb, ab) {
        return !(!bb || ab.length % 2 !== 0) && (this._gl.uniform2iv(bb, ab), !0)
      }
      setIntArray3(bb, ab) {
        return !(!bb || ab.length % 3 !== 0) && (this._gl.uniform3iv(bb, ab), !0)
      }
      setIntArray4(bb, ab) {
        return !(!bb || ab.length % 4 !== 0) && (this._gl.uniform4iv(bb, ab), !0)
      }
      setUInt(bb, ab) {
        return !!bb && (this._gl.uniform1ui(bb, ab), !0)
      }
      setUInt2(bb, ab, Ub) {
        return !!bb && (this._gl.uniform2ui(bb, ab, Ub), !0)
      }
      setUInt3(bb, ab, Ub, Ab) {
        return !!bb && (this._gl.uniform3ui(bb, ab, Ub, Ab), !0)
      }
      setUInt4(bb, ab, Ub, Ab, Mb) {
        return !!bb && (this._gl.uniform4ui(bb, ab, Ub, Ab, Mb), !0)
      }
      setUIntArray(bb, ab) {
        return !!bb && (this._gl.uniform1uiv(bb, ab), !0)
      }
      setUIntArray2(bb, ab) {
        return !(!bb || ab.length % 2 !== 0) && (this._gl.uniform2uiv(bb, ab), !0)
      }
      setUIntArray3(bb, ab) {
        return !(!bb || ab.length % 3 !== 0) && (this._gl.uniform3uiv(bb, ab), !0)
      }
      setUIntArray4(bb, ab) {
        return !(!bb || ab.length % 4 !== 0) && (this._gl.uniform4uiv(bb, ab), !0)
      }
      setArray(bb, ab) {
        return !!bb && (!(ab.length < 1) && (this._gl.uniform1fv(bb, ab), !0))
      }
      setArray2(bb, ab) {
        return !(!bb || ab.length % 2 !== 0) && (this._gl.uniform2fv(bb, ab), !0)
      }
      setArray3(bb, ab) {
        return !(!bb || ab.length % 3 !== 0) && (this._gl.uniform3fv(bb, ab), !0)
      }
      setArray4(bb, ab) {
        return !(!bb || ab.length % 4 !== 0) && (this._gl.uniform4fv(bb, ab), !0)
      }
      setMatrices(bb, ab) {
        return !!bb && (this._gl.uniformMatrix4fv(bb, !1, ab), !0)
      }
      setMatrix3x3(bb, ab) {
        return !!bb && (this._gl.uniformMatrix3fv(bb, !1, ab), !0)
      }
      setMatrix2x2(bb, ab) {
        return !!bb && (this._gl.uniformMatrix2fv(bb, !1, ab), !0)
      }
      setFloat(bb, ab) {
        return !!bb && (this._gl.uniform1f(bb, ab), !0)
      }
      setFloat2(bb, ab, Ub) {
        return !!bb && (this._gl.uniform2f(bb, ab, Ub), !0)
      }
      setFloat3(bb, ab, Ub, Ab) {
        return !!bb && (this._gl.uniform3f(bb, ab, Ub, Ab), !0)
      }
      setFloat4(bb, ab, Ub, Ab, Mb) {
        return !!bb && (this._gl.uniform4f(bb, ab, Ub, Ab, Mb), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const bb = this._colorWrite;
          this._gl.colorMask(bb, bb, bb, bb)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(bb) {
        this.preventCacheWipeBetweenFrames && !bb || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), bb && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(bb, ab) {
        const Ub = this._gl;
        let Ab = Ub.NEAREST,
          Mb = Ub.NEAREST,
          Tb = !1;
        switch (bb) {
          case 11:
            Ab = Ub.LINEAR, Mb = ab ? Ub.LINEAR_MIPMAP_NEAREST : Ub.LINEAR;
            break;
          case 3:
            Ab = Ub.LINEAR, Tb = !0, Mb = ab ? Ub.LINEAR_MIPMAP_LINEAR : Ub.LINEAR;
            break;
          case 8:
            Tb = !0, Ab = Ub.NEAREST, Mb = ab ? Ub.NEAREST_MIPMAP_LINEAR : Ub.NEAREST;
            break;
          case 4:
            Ab = Ub.NEAREST, Mb = ab ? Ub.NEAREST_MIPMAP_NEAREST : Ub.NEAREST;
            break;
          case 5:
            Ab = Ub.NEAREST, Mb = ab ? Ub.LINEAR_MIPMAP_NEAREST : Ub.LINEAR;
            break;
          case 6:
            Tb = !0, Ab = Ub.NEAREST, Mb = ab ? Ub.LINEAR_MIPMAP_LINEAR : Ub.LINEAR;
            break;
          case 7:
            Ab = Ub.NEAREST, Mb = Ub.LINEAR;
            break;
          case 1:
            Ab = Ub.NEAREST, Mb = Ub.NEAREST;
            break;
          case 9:
            Ab = Ub.LINEAR, Mb = ab ? Ub.NEAREST_MIPMAP_NEAREST : Ub.NEAREST;
            break;
          case 10:
            Tb = !0, Ab = Ub.LINEAR, Mb = ab ? Ub.NEAREST_MIPMAP_LINEAR : Ub.NEAREST;
            break;
          case 2:
            Ab = Ub.LINEAR, Mb = Ub.LINEAR;
            break;
          case 12:
            Ab = Ub.LINEAR, Mb = Ub.NEAREST
        }
        return {
          min: Mb,
          mag: Ab,
          hasMipMaps: Tb
        }
      }
      _createTexture() {
        const bb = this._gl.createTexture();
        if (!bb) throw new Error("Unable to create texture");
        return bb
      }
      _createHardwareTexture() {
        return new jb.b(this._createTexture(), this._gl)
      }
      _createInternalTexture(bb, ab) {
        let Ub, Ab, Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Tb = !1,
          Eb = 0,
          Bb = 3,
          eb = 5,
          vb = !1,
          Lb = 1,
          Pb = !1,
          Xb = 0,
          jb = !1;
        void 0 !== ab && "object" === typeof ab ? (Ub = !!ab.generateMipMaps, Tb = !!ab.createMipMaps, Eb = void 0 === ab.type ? 0 : ab.type, Bb = void 0 === ab.samplingMode ? 3 : ab.samplingMode, eb = void 0 === ab.format ? 5 : ab.format, vb = void 0 !== ab.useSRGBBuffer && ab.useSRGBBuffer, Lb = ab.samples ?? 1, Ab = ab.label, Pb = !!ab.createMSAATexture, Xb = ab.comparisonFunction || 0, jb = !!ab.isCube) : Ub = !!ab, vb && (vb = this._caps.supportSRGBBuffers && (this.oj > 1 || this.isWebGPU)), (1 !== Eb || this._caps.textureFloatLinearFiltering) && (2 !== Eb || this._caps.textureHalfFloatLinearFiltering) || (Bb = 1), 1 !== Eb || this._caps.textureFloat || (Eb = 0, Yb.e.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const kb = (0, Zb.d)(eb),
          yb = (0, Zb.c)(eb),
          Db = this._gl,
          zb = new Rb.b(this, Mb),
          xb = bb.width || bb,
          ib = bb.height || bb,
          fb = bb.depth || 0,
          mb = bb.layers || 0,
          pb = this._getSamplingParameters(Bb, (Ub || Tb) && !kb),
          Nb = 0 !== mb ? Db.TEXTURE_2D_ARRAY : 0 !== fb ? Db.TEXTURE_3D : jb ? Db.TEXTURE_CUBE_MAP : Db.TEXTURE_2D,
          Wb = kb ? this._getInternalFormatFromDepthTextureFormat(eb, !0, yb) : this._getRGBABufferInternalSizedFormat(Eb, eb, vb),
          Hb = kb ? yb ? Db.DEPTH_STENCIL : Db.DEPTH_COMPONENT : this._getInternalFormat(eb),
          Ib = kb ? this._getWebGLTextureTypeFromDepthTextureFormat(eb) : this._getWebGLTextureType(Eb);
        if (this._bindTextureDirectly(Nb, zb), 0 !== mb) zb.is2DArray = !0, Db.texImage3D(Nb, 0, Wb, xb, ib, mb, 0, Hb, Ib, null);
        else if (0 !== fb) zb.is3D = !0, Db.texImage3D(Nb, 0, Wb, xb, ib, fb, 0, Hb, Ib, null);
        else if (jb) {
          zb.isCube = !0;
          for (let bb = 0; bb < 6; bb++) Db.texImage2D(Db.TEXTURE_CUBE_MAP_POSITIVE_X + bb, 0, Wb, xb, ib, 0, Hb, Ib, null)
        } else Db.texImage2D(Nb, 0, Wb, xb, ib, 0, Hb, Ib, null);
        if (Db.texParameteri(Nb, Db.TEXTURE_MAG_FILTER, pb.mag), Db.texParameteri(Nb, Db.TEXTURE_MIN_FILTER, pb.min), Db.texParameteri(Nb, Db.TEXTURE_WRAP_S, Db.CLAMP_TO_EDGE), Db.texParameteri(Nb, Db.TEXTURE_WRAP_T, Db.CLAMP_TO_EDGE), kb && this.oj > 1 && (0 === Xb ? (Db.texParameteri(Nb, Db.TEXTURE_COMPARE_FUNC, 515), Db.texParameteri(Nb, Db.TEXTURE_COMPARE_MODE, Db.NONE)) : (Db.texParameteri(Nb, Db.TEXTURE_COMPARE_FUNC, Xb), Db.texParameteri(Nb, Db.TEXTURE_COMPARE_MODE, Db.COMPARE_REF_TO_TEXTURE))), (Ub || Tb) && this._gl.generateMipmap(Nb), this._bindTextureDirectly(Nb, null), zb._useSRGBBuffer = vb, zb.baseWidth = xb, zb.baseHeight = ib, zb.width = xb, zb.height = ib, zb.depth = mb || fb, zb.isReady = !0, zb.samples = Lb, zb.generateMipMaps = Ub, zb.samplingMode = Bb, zb.type = Eb, zb.format = eb, zb.label = Ab, zb.comparisonFunction = Xb, this._internalTexturesCache.push(zb), Pb) {
          let bb;
          if (bb = (0, Zb.d)(zb.format) ? this._setupFramebufferDepthAttachments((0, Zb.c)(zb.format), 19 !== zb.format, zb.width, zb.height, Lb, zb.format, !0) : this._createRenderBuffer(zb.width, zb.height, Lb, -1, this._getRGBABufferInternalSizedFormat(zb.type, zb.format, zb._useSRGBBuffer), -1), !bb) throw new Error("Unable to create render buffer");
          zb._autoMSAAManagement = !0;
          let ab = zb._hardwareTexture;
          ab || (ab = zb._hardwareTexture = this._createHardwareTexture()), ab.addMSAARenderBuffer(bb)
        }
        return zb
      }
      _getUseSRGBBuffer(bb, ab) {
        return bb && this._caps.supportSRGBBuffers && (this.oj > 1 || ab)
      }
      createTexture(bb, ab, Ub, Ab) {
        var Mb = this;
        let Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Yb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Bb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          eb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          vb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Lb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Pb = arguments.length > 11 ? arguments[11] : void 0,
          Xb = arguments.length > 12 ? arguments[12] : void 0,
          jb = arguments.length > 13 ? arguments[13] : void 0,
          kb = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(bb, ab, Ub, Ab, Tb, Eb, Yb, (function() {
          for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
          return Mb._prepareWebGLTexture(...ab, vb)
        }), ((bb, ab, Ub, Mb, Tb, Eb) => {
          const Yb = this._gl,
            Bb = Ub.width === bb && Ub.height === ab;
          Tb._creationFlags = jb ?? 0;
          const eb = this._getTexImageParametersForCreateTexture(Tb.format, Tb._useSRGBBuffer);
          if (Bb) return Yb.texImage2D(Yb.TEXTURE_2D, 0, eb.internalFormat, eb.format, eb.type, Ub), !1;
          const vb = this._caps.maxTextureSize;
          if (Ub.width > vb || Ub.height > vb || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = bb, this._workingCanvas.height = ab, this._workingContext.drawImage(Ub, 0, 0, Ub.width, Ub.height, 0, 0, bb, ab), Yb.texImage2D(Yb.TEXTURE_2D, 0, eb.internalFormat, eb.format, eb.type, this._workingCanvas), Tb.width = bb, Tb.height = ab, !1);
          {
            const bb = new Rb.b(this, 2);
            this._bindTextureDirectly(Yb.TEXTURE_2D, bb, !0), Yb.texImage2D(Yb.TEXTURE_2D, 0, eb.internalFormat, eb.format, eb.type, Ub), this._rescaleTexture(bb, Tb, Ab, eb.format, (() => {
              this._releaseTexture(bb), this._bindTextureDirectly(Yb.TEXTURE_2D, Tb, !0), Eb()
            }))
          }
          return !0
        }), Bb, eb, vb, Lb, Pb, Xb, kb)
      }
      _getTexImageParametersForCreateTexture(bb, ab) {
        let Ub, Ab;
        return 1 === this.oj ? (Ub = this._getInternalFormat(bb, ab), Ab = Ub) : (Ub = this._getInternalFormat(bb, !1), Ab = this._getRGBABufferInternalSizedFormat(0, bb, ab)), {
          internalFormat: Ab,
          format: Ub,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(bb, ab, Ub, Ab, Mb) {}
      _unpackFlipY(bb) {
        this._unpackFlipYCached !== bb && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, bb ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = bb))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(bb) {
        return bb.isCube ? this._gl.TEXTURE_CUBE_MAP : bb.is3D ? this._gl.TEXTURE_3D : bb.is2DArray || bb.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ab = this._getTextureTarget(ab),
          Mb = this._getSamplingParameters(bb, ab.useMipMaps || Ub);
        this._setTextureParameterInteger(Ab, this._gl.TEXTURE_MAG_FILTER, Mb.mag, ab), this._setTextureParameterInteger(Ab, this._gl.TEXTURE_MIN_FILTER, Mb.min), Ub && Mb.hasMipMaps && (ab.generateMipMaps = !0, this._gl.generateMipmap(Ab)), this._bindTextureDirectly(Ab, null), ab.samplingMode = bb
      }
      updateTextureDimensions(bb, ab, Ub) {}
      updateTextureWrappingMode(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Mb = this._getTextureTarget(bb);
        null !== ab && (this._setTextureParameterInteger(Mb, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(ab), bb), bb._cachedWrapU = ab), null !== Ub && (this._setTextureParameterInteger(Mb, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Ub), bb), bb._cachedWrapV = Ub), (bb.is2DArray || bb.is3D) && null !== Ab && (this._setTextureParameterInteger(Mb, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Ab), bb), bb._cachedWrapR = Ab), this._bindTextureDirectly(Mb, null)
      }
      _uploadCompressedDataToTextureDirectly(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Yb = this._gl;
        let Bb = Yb.TEXTURE_2D;
        if (bb.isCube && (Bb = Yb.TEXTURE_CUBE_MAP_POSITIVE_X + Tb), bb._useSRGBBuffer) switch (ab) {
          case 37492:
          case 36196:
            this._caps.etc2 ? ab = Yb.COMPRESSED_SRGB8_ETC2 : bb._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? ab = Yb.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : bb._useSRGBBuffer = !1;
            break;
          case 36492:
            ab = Yb.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            ab = Yb.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            ab = Yb.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            ab = Yb.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            ab = Yb.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            ab = Yb.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            ab = Yb.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            ab = Yb.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            ab = Yb.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            ab = Yb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            ab = Yb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            ab = Yb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            ab = Yb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            ab = Yb.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            ab = Yb.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? ab = Yb.COMPRESSED_SRGB_S3TC_DXT1_EXT : bb._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? ab = Yb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : bb._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? ab = Yb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : bb._useSRGBBuffer = !1;
            break;
          default:
            bb._useSRGBBuffer = !1
        }
        if (bb.generateMipMaps) {
          const Tb = bb._hardwareTexture;
          Tb.memoryAllocated || (Yb.texStorage2D(bb.isCube ? Yb.TEXTURE_CUBE_MAP : Yb.TEXTURE_2D, Math.floor(Math.log2(Math.max(Ub, Ab))) + 1, ab, bb.width, bb.height), Tb.memoryAllocated = !0), this._gl.compressedTexSubImage2D(Bb, Eb, 0, 0, Ub, Ab, ab, Mb)
        } else this._gl.compressedTexImage2D(Bb, Eb, ab, Ub, Ab, 0, Mb)
      }
      _uploadDataToTextureDirectly(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Mb = arguments.length > 4 ? arguments[4] : void 0,
          Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Eb = this._gl,
          Yb = this._getWebGLTextureType(bb.type),
          Bb = this._getInternalFormat(bb.format),
          eb = void 0 === Mb ? this._getRGBABufferInternalSizedFormat(bb.type, bb.format, bb._useSRGBBuffer) : this._getInternalFormat(Mb, bb._useSRGBBuffer);
        this._unpackFlipY(bb.invertY);
        let vb = Eb.TEXTURE_2D;
        bb.isCube && (vb = Eb.TEXTURE_CUBE_MAP_POSITIVE_X + Ub);
        const Lb = Math.round(Math.log(bb.width) * Math.LOG2E),
          Pb = Math.round(Math.log(bb.height) * Math.LOG2E),
          Xb = Tb ? bb.width : Math.pow(2, Math.max(Lb - Ab, 0)),
          jb = Tb ? bb.height : Math.pow(2, Math.max(Pb - Ab, 0));
        Eb.texImage2D(vb, Ab, eb, Xb, jb, 0, Bb, Yb, ab)
      }
      updateTextureData(bb, ab, Ub, Ab, Mb, Tb) {
        let Eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Bb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const eb = this._gl,
          vb = this._getWebGLTextureType(bb.type),
          Lb = this._getInternalFormat(bb.format);
        this._unpackFlipY(bb.invertY);
        let Pb = eb.TEXTURE_2D,
          Xb = eb.TEXTURE_2D;
        bb.isCube && (Xb = eb.TEXTURE_CUBE_MAP_POSITIVE_X + Eb, Pb = eb.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Pb, bb, !0), eb.texSubImage2D(Xb, Yb, Ub, Ab, Mb, Tb, Lb, vb, ab), Bb && this._gl.generateMipmap(Xb), this._bindTextureDirectly(Pb, null)
      }
      _uploadArrayBufferViewToTexture(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Mb = this._gl,
          Tb = bb.isCube ? Mb.TEXTURE_CUBE_MAP : Mb.TEXTURE_2D;
        this._bindTextureDirectly(Tb, bb, !0), this._uploadDataToTextureDirectly(bb, ab, Ub, Ab), this._bindTextureDirectly(Tb, null, !0)
      }
      _prepareWebGLTextureContinuation(bb, ab, Ub, Ab, Mb) {
        const Tb = this._gl;
        if (!Tb) return;
        const Eb = this._getSamplingParameters(Mb, !Ub);
        Tb.texParameteri(Tb.TEXTURE_2D, Tb.TEXTURE_MAG_FILTER, Eb.mag), Tb.texParameteri(Tb.TEXTURE_2D, Tb.TEXTURE_MIN_FILTER, Eb.min), Ub || Ab || Tb.generateMipmap(Tb.TEXTURE_2D), this._bindTextureDirectly(Tb.TEXTURE_2D, null), ab && ab.removePendingData(bb), bb.onLoadedObservable.notifyObservers(bb), bb.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb) {
        const vb = this.getCaps().maxTextureSize,
          Lb = Math.min(vb, this.needPOTTextures ? (0, Xb.e)(Ab.width, vb) : Ab.width),
          Pb = Math.min(vb, this.needPOTTextures ? (0, Xb.e)(Ab.height, vb) : Ab.height),
          jb = this._gl;
        jb && (bb._hardwareTexture ? (this._bindTextureDirectly(jb.TEXTURE_2D, bb, !0), this._unpackFlipY(void 0 === Mb || !!Mb), bb.baseWidth = Ab.width, bb.baseHeight = Ab.height, bb.width = Lb, bb.height = Pb, bb.isReady = !0, bb.type = -1 !== bb.type ? bb.type : 0, bb.format = -1 !== bb.format ? bb.format : eb ?? (".jpg" !== ab || bb._useSRGBBuffer ? 5 : 4), Yb(Lb, Pb, Ab, ab, bb, (() => {
          this._prepareWebGLTextureContinuation(bb, Ub, Tb, Eb, Bb)
        })) || this._prepareWebGLTextureContinuation(bb, Ub, Tb, Eb, Bb)) : Ub && Ub.removePendingData(bb))
      }
      _getInternalFormatFromDepthTextureFormat(bb, ab, Ub) {
        const Ab = this._gl;
        if (!ab) return Ab.STENCIL_INDEX8;
        let Mb = Ub ? Ab.DEPTH_STENCIL : Ab.DEPTH_COMPONENT;
        return this.oj > 1 ? 15 === bb ? Mb = Ab.DEPTH_COMPONENT16 : 16 === bb ? Mb = Ab.DEPTH_COMPONENT24 : 17 === bb || 13 === bb ? Mb = Ub ? Ab.DEPTH24_STENCIL8 : Ab.DEPTH_COMPONENT24 : 14 === bb ? Mb = Ab.DEPTH_COMPONENT32F : 18 === bb && (Mb = Ub ? Ab.DEPTH32F_STENCIL8 : Ab.DEPTH_COMPONENT32F) : Mb = Ab.DEPTH_COMPONENT16, Mb
      }
      _getWebGLTextureTypeFromDepthTextureFormat(bb) {
        const ab = this._gl;
        let Ub = ab.UNSIGNED_INT;
        return 15 === bb ? Ub = ab.UNSIGNED_SHORT : 17 === bb || 13 === bb ? Ub = ab.UNSIGNED_INT_24_8 : 14 === bb ? Ub = ab.FLOAT : 18 === bb ? Ub = ab.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === bb && (Ub = ab.UNSIGNED_BYTE), Ub
      }
      _setupFramebufferDepthAttachments(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Tb = arguments.length > 5 ? arguments[5] : void 0,
          Eb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Yb = this._gl;
        Tb = Tb ?? (bb ? 13 : 14);
        const Bb = this._getInternalFormatFromDepthTextureFormat(Tb, ab, bb);
        return bb && ab ? this._createRenderBuffer(Ub, Ab, Mb, Yb.DEPTH_STENCIL, Bb, Eb ? -1 : Yb.DEPTH_STENCIL_ATTACHMENT) : ab ? this._createRenderBuffer(Ub, Ab, Mb, Bb, Bb, Eb ? -1 : Yb.DEPTH_ATTACHMENT) : bb ? this._createRenderBuffer(Ub, Ab, Mb, Bb, Bb, Eb ? -1 : Yb.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(bb, ab, Ub, Ab, Mb, Tb) {
        let Eb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const Yb = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(Yb, bb, ab, Ub, Ab, Mb, Tb, Eb)
      }
      _updateRenderBuffer(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        let Yb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Bb = this._gl;
        return Bb.bindRenderbuffer(Bb.RENDERBUFFER, bb), Ab > 1 && Bb.renderbufferStorageMultisample ? Bb.renderbufferStorageMultisample(Bb.RENDERBUFFER, Ab, Tb, ab, Ub) : Bb.renderbufferStorage(Bb.RENDERBUFFER, Mb, ab, Ub), -1 !== Eb && Bb.framebufferRenderbuffer(Bb.FRAMEBUFFER, Eb, Bb.RENDERBUFFER, bb), Yb && Bb.bindRenderbuffer(Bb.RENDERBUFFER, null), bb
      }
      _releaseTexture(bb) {
        this._deleteTexture(bb._hardwareTexture), this.unbindAllTextures();
        const ab = this._internalTexturesCache.indexOf(bb); - 1 !== ab && this._internalTexturesCache.splice(ab, 1), bb._lodTextureHigh && bb._lodTextureHigh.dispose(), bb._lodTextureMid && bb._lodTextureMid.dispose(), bb._lodTextureLow && bb._lodTextureLow.dispose(), bb._irradianceTexture && bb._irradianceTexture.dispose()
      }
      _deleteTexture(bb) {
        bb?.release()
      }
      _setProgram(bb) {
        this._currentProgram !== bb && ((0, Mb.s)(bb, this._gl), this._currentProgram = bb)
      }
      bindSamplers(bb) {
        const ab = bb.getPipelineContext();
        this._setProgram(ab.program);
        const Ub = bb.getSamplers();
        for (let Ab = 0; Ab < Ub.length; Ab++) {
          const ab = bb.getUniform(Ub[Ab]);
          ab && (this._boundUniforms[Ab] = ab)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Mb = !1;
        const Tb = ab && ab._associatedChannel > -1;
        Ub && Tb && (this._activeChannel = ab._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== ab || Ab) {
          if (this._activateCurrentTexture(), ab && ab.isMultiview) throw Yb.e.Error(["_bindTextureDirectly called with a multiview texture!", bb, ab]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(bb, ab?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = ab, ab && (ab._associatedChannel = this._activeChannel)
        } else Ub && (Mb = !0, this._activateCurrentTexture());
        return Tb && !Ub && this._bindSamplerUniformToChannel(ab._associatedChannel, this._activeChannel), Mb
      }
      _bindTexture(bb, ab, Ub) {
        if (void 0 === bb) return;
        ab && (ab._associatedChannel = bb), this._activeChannel = bb;
        const Ab = ab ? this._getTextureTarget(ab) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(Ab, ab)
      }
      unbindAllTextures() {
        for (let bb = 0; bb < this._maxSimultaneousTextures; bb++) this._activeChannel = bb, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.oj > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(bb, ab, Ub, Ab) {
        void 0 !== bb && (ab && (this._boundUniforms[bb] = ab), this._setTexture(bb, Ub))
      }
      _bindSamplerUniformToChannel(bb, ab) {
        const Ub = this._boundUniforms[bb];
        Ub && Ub._currentState !== ab && (this._gl.uniform1i(Ub, ab), Ub._currentState = ab)
      }
      _getTextureWrapMode(bb) {
        switch (bb) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(bb, ab) {
        let Ub, Ab = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Mb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!ab) return null != this._boundTexturesCache[bb] && (this._activeChannel = bb, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.oj > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (ab.video) {
          this._activeChannel = bb;
          const Ub = ab.getInternalTexture();
          Ub && (Ub._associatedChannel = bb), ab.update()
        } else if (4 === ab.delayLoadState) return ab.delayLoad(), !1;
        Ub = Mb ? ab.depthStencilTexture : ab.isReady() ? ab.getInternalTexture() : ab.isCube ? this.emptyCubeTexture : ab.is3D ? this.emptyTexture3D : ab.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !Ab && Ub && (Ub._associatedChannel = bb);
        let Tb = !0;
        this._boundTexturesCache[bb] === Ub && (Ab || this._bindSamplerUniformToChannel(Ub._associatedChannel, bb), Tb = !1), this._activeChannel = bb;
        const Eb = this._getTextureTarget(Ub);
        if (Tb && this._bindTextureDirectly(Eb, Ub, Ab), Ub && !Ub.isMultiview) {
          if (Ub.isCube && Ub._cachedCoordinatesMode !== ab.coordinatesMode) {
            Ub._cachedCoordinatesMode = ab.coordinatesMode;
            const bb = 3 !== ab.coordinatesMode && 5 !== ab.coordinatesMode ? 1 : 0;
            ab.wrapU = bb, ab.wrapV = bb
          }
          Ub._cachedWrapU !== ab.wrapU && (Ub._cachedWrapU = ab.wrapU, this._setTextureParameterInteger(Eb, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(ab.wrapU), Ub)), Ub._cachedWrapV !== ab.wrapV && (Ub._cachedWrapV = ab.wrapV, this._setTextureParameterInteger(Eb, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(ab.wrapV), Ub)), Ub.is3D && Ub._cachedWrapR !== ab.wrapR && (Ub._cachedWrapR = ab.wrapR, this._setTextureParameterInteger(Eb, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(ab.wrapR), Ub)), this._setAnisotropicLevel(Eb, Ub, ab.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(bb, ab, Ub, Ab) {
        if (void 0 !== bb && ab) {
          this._textureUnits && this._textureUnits.length === Ub.length || (this._textureUnits = new Int32Array(Ub.length));
          for (let ab = 0; ab < Ub.length; ab++) {
            const Ab = Ub[ab].getInternalTexture();
            Ab ? (this._textureUnits[ab] = bb + ab, Ab._associatedChannel = bb + ab) : this._textureUnits[ab] = -1
          }
          this._gl.uniform1iv(ab, this._textureUnits);
          for (let bb = 0; bb < Ub.length; bb++) this._setTexture(this._textureUnits[bb], Ub[bb], !0)
        }
      }
      _setAnisotropicLevel(bb, ab, Ub) {
        const Ab = this._caps.textureAnisotropicFilterExtension;
        11 !== ab.samplingMode && 3 !== ab.samplingMode && 2 !== ab.samplingMode && (Ub = 1), Ab && ab._cachedAnisotropicFilteringLevel !== Ub && (this._setTextureParameterFloat(bb, Ab.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(Ub, this._caps.maxAnisotropy), ab), ab._cachedAnisotropicFilteringLevel = Ub)
      }
      _setTextureParameterFloat(bb, ab, Ub, Ab) {
        this._bindTextureDirectly(bb, Ab, !0, !0), this._gl.texParameterf(bb, ab, Ub)
      }
      _setTextureParameterInteger(bb, ab, Ub, Ab) {
        Ab && this._bindTextureDirectly(bb, Ab, !0, !0), this._gl.texParameteri(bb, ab, Ub)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let bb = 0; bb < this._caps.maxVertexAttribs; bb++) this.disableAttributeByIndex(bb)
        } else
          for (let bb = 0, ab = this._vertexAttribArraysEnabled.length; bb < ab; bb++) bb >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[bb] || this.disableAttributeByIndex(bb)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, Bb.k)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, Mb.A)(this._gl)
      }
      attachContextLostEvent(bb) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", bb, !1)
      }
      attachContextRestoredEvent(bb) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", bb, !1)
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
      _canRenderToFramebuffer(bb) {
        const ab = this._gl;
        for (; ab.getError() !== ab.NO_ERROR;);
        let Ub = !0;
        const Ab = ab.createTexture();
        ab.bindTexture(ab.TEXTURE_2D, Ab), ab.texImage2D(ab.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(bb), 1, 1, 0, ab.RGBA, this._getWebGLTextureType(bb), null), ab.texParameteri(ab.TEXTURE_2D, ab.TEXTURE_MIN_FILTER, ab.NEAREST), ab.texParameteri(ab.TEXTURE_2D, ab.TEXTURE_MAG_FILTER, ab.NEAREST);
        const Mb = ab.createFramebuffer();
        ab.bindFramebuffer(ab.FRAMEBUFFER, Mb), ab.framebufferTexture2D(ab.FRAMEBUFFER, ab.COLOR_ATTACHMENT0, ab.TEXTURE_2D, Ab, 0);
        const Tb = ab.checkFramebufferStatus(ab.FRAMEBUFFER);
        if (Ub = Ub && Tb === ab.FRAMEBUFFER_COMPLETE, Ub = Ub && ab.getError() === ab.NO_ERROR, Ub && (ab.clear(ab.COLOR_BUFFER_BIT), Ub = Ub && ab.getError() === ab.NO_ERROR), Ub) {
          ab.bindFramebuffer(ab.FRAMEBUFFER, null);
          const bb = ab.RGBA,
            Ab = ab.UNSIGNED_BYTE,
            Mb = new Uint8Array(4);
          ab.readPixels(0, 0, 1, 1, bb, Ab, Mb), Ub = Ub && ab.getError() === ab.NO_ERROR
        }
        for (ab.deleteTexture(Ab), ab.deleteFramebuffer(Mb), ab.bindFramebuffer(ab.FRAMEBUFFER, null); !Ub && ab.getError() !== ab.NO_ERROR;);
        return Ub
      }
      _getWebGLTextureType(bb) {
        if (1 === this._webGLVersion) {
          switch (bb) {
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
        switch (bb) {
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
      _getInternalFormat(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = ab ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (bb) {
          case 0:
            Ub = this._gl.ALPHA;
            break;
          case 1:
            Ub = this._gl.LUMINANCE;
            break;
          case 2:
            Ub = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            Ub = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            Ub = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            Ub = ab ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            Ub = ab ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (bb) {
          case 8:
            Ub = this._gl.RED_INTEGER;
            break;
          case 9:
            Ub = this._gl.RG_INTEGER;
            break;
          case 10:
            Ub = this._gl.RGB_INTEGER;
            break;
          case 11:
            Ub = this._gl.RGBA_INTEGER
        }
        return Ub
      }
      _getRGBABufferInternalSizedFormat(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== ab) switch (ab) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return Ub ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (bb) {
          case 3:
            switch (ab) {
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
            switch (ab) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return Ub ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return Ub ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (ab) {
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
            switch (ab) {
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
            switch (ab) {
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
            switch (ab) {
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
            switch (ab) {
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
            switch (ab) {
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
            switch (ab) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return Ub ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(bb, ab, Ub, Ab) {
        let Mb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Bb = Mb ? 4 : 3,
          eb = Mb ? this._gl.RGBA : this._gl.RGB,
          vb = Ub * Ab * Bb;
        if (Eb) {
          if (Eb.length < vb) return Yb.e.Error(`Data buffer is too small to store the read pixels (${Eb.length} should be more than ${vb})`), Promise.resolve(Eb)
        } else Eb = new Uint8Array(vb);
        return Tb && this.flushFramebuffer(), this._gl.readPixels(bb, ab, Ub, Ab, eb, this._gl.UNSIGNED_BYTE, Eb), Promise.resolve(Eb)
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
          const bb = Tb.d._CreateCanvas(1, 1),
            ab = bb.getContext("webgl") || bb.getContext("experimental-webgl");
          this._IsSupported = null != ab && !!globalThis.WebGLRenderingContext
        } catch (bb) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const bb = Tb.d._CreateCanvas(1, 1),
            ab = bb.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || bb.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !ab
        } catch (bb) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    xb._TempClearColorUint32 = new Uint32Array(4), xb._TempClearColorInt32 = new Int32Array(4), xb._TempClearColorFloat32 = new Float32Array(4), xb.ExceptionList = [{
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
    }], xb._ConcatenateShader = kb.e, xb._IsSupported = null, xb._HasMajorPerformanceCaveat = null
  },
  39280: (bb, ab, Ub) => {
    var Ab;
    Ub.d(ab, {
        e: () => Mb
      }),
      function(bb) {
        bb[bb.PointerMove = 0] = "PointerMove", bb[bb.PointerDown = 1] = "PointerDown", bb[bb.PointerUp = 2] = "PointerUp"
      }(Ab || (Ab = {}));
    class Mb {}
    Mb.DOM_DELTA_PIXEL = 0, Mb.DOM_DELTA_LINE = 1, Mb.DOM_DELTA_PAGE = 2
  },
  39275: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      f: () => Tb,
      j: () => Mb
    });
    class Ab {}
    Ab.KEYDOWN = 1, Ab.KEYUP = 2;
    class Mb {
      constructor(bb, ab) {
        this.type = bb, this.event = ab
      }
    }
    class Tb extends Mb {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(bb) {
        this.skipOnKeyboardObservable = bb
      }
      constructor(bb, ab) {
        super(bb, ab), this.type = bb, this.event = ab, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39269: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      g: () => Eb,
      k: () => Yb
    });
    var Ab = Ub(36401);
    class Mb {}
    Mb.POINTERDOWN = 1, Mb.POINTERUP = 2, Mb.POINTERMOVE = 4, Mb.POINTERWHEEL = 8, Mb.POINTERPICK = 16, Mb.POINTERTAP = 32, Mb.POINTERDOUBLETAP = 64;
    class Tb {
      constructor(bb, ab) {
        this.type = bb, this.event = ab
      }
    }
    class Eb extends Tb {
      constructor(bb, ab, Ub, Mb) {
        super(bb, ab), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Ab.l(Ub, Mb)
      }
    }
    class Yb extends Tb {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(bb, ab), this._pickInfo = Ub, this._inputManager = Ab
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  39294: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    class Ab {
      static CompareLightsPriority(bb, ab) {
        return bb.shadowEnabled !== ab.shadowEnabled ? (ab.shadowEnabled ? 1 : 0) - (bb.shadowEnabled ? 1 : 0) : ab.renderPriority - bb.renderPriority
      }
    }
    Ab.FALLOFF_DEFAULT = 0, Ab.FALLOFF_PHYSICAL = 1, Ab.FALLOFF_GLTF = 2, Ab.FALLOFF_STANDARD = 3, Ab.LIGHTMAP_DEFAULT = 0, Ab.LIGHTMAP_SPECULAR = 1, Ab.LIGHTMAP_SHADOWSONLY = 2, Ab.INTENSITYMODE_AUTOMATIC = 0, Ab.INTENSITYMODE_LUMINOUSPOWER = 1, Ab.INTENSITYMODE_LUMINOUSINTENSITY = 2, Ab.INTENSITYMODE_ILLUMINANCE = 3, Ab.INTENSITYMODE_LUMINANCE = 4, Ab.LIGHTTYPEID_POINTLIGHT = 0, Ab.LIGHTTYPEID_DIRECTIONALLIGHT = 1, Ab.LIGHTTYPEID_SPOTLIGHT = 2, Ab.LIGHTTYPEID_HEMISPHERICLIGHT = 3, Ab.LIGHTTYPEID_RECT_AREALIGHT = 4, Ab.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  38915: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    var Ab, Mb = Ub(36431),
      Tb = Ub(38924);
    ! function(bb) {
      bb[bb.Unknown = 0] = "Unknown", bb[bb.Url = 1] = "Url", bb[bb.Temp = 2] = "Temp", bb[bb.Raw = 3] = "Raw", bb[bb.Dynamic = 4] = "Dynamic", bb[bb.RenderTarget = 5] = "RenderTarget", bb[bb.MultiRenderTarget = 6] = "MultiRenderTarget", bb[bb.Cube = 7] = "Cube", bb[bb.CubeRaw = 8] = "CubeRaw", bb[bb.CubePrefiltered = 9] = "CubePrefiltered", bb[bb.Raw3D = 10] = "Raw3D", bb[bb.Raw2DArray = 11] = "Raw2DArray", bb[bb.DepthStencil = 12] = "DepthStencil", bb[bb.CubeRawRGBD = 13] = "CubeRawRGBD", bb[bb.Depth = 14] = "Depth", bb[bb.External = 15] = "External"
    }(Ab || (Ab = {}));
    class Eb extends Tb.b {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(bb) {
        this._useMipMaps = bb
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(bb) {
        this._uniqueId = bb
      }
      vj() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new Mb.b, this.onErrorObservable = new Mb.b, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = bb, this._source = ab, this._uniqueId = Eb._Counter++, Ub || (this._hardwareTexture = bb._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, bb, ab, Ub), this.width = bb, this.height = ab, this.depth = Ub, this.baseWidth = bb, this.baseHeight = ab, this.baseDepth = Ub, this._size = bb * ab * Ub
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const bb = this.onRebuildCallback(this),
            ab = ab => {
              ab._swapAndDie(this, !1), this.isReady = bb.isReady
            };
          return void(bb.isAsync ? bb.proxy.then(ab) : ab(bb.proxy))
        }
        let bb;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(bb = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (bb => {
              bb._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (bb = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), bb._swapAndDie(this, !1), this._bufferViewArray)
              for (let bb = 0; bb < this._bufferViewArray.length; bb++) {
                const ab = this._bufferViewArray[bb];
                ab && this._engine.updateRawTexture(this, ab, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, bb)
              }
            this.isReady = !0;
            break;
          case 10:
            bb = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), bb._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (bb = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), bb._swapAndDie(this, !1), this._bufferViewArray)
              for (let bb = 0; bb < this._bufferViewArray.length; bb++) {
                const ab = this._bufferViewArray[bb];
                ab && this._engine.updateRawTexture2DArray(this, ab, this.format, this.invertY, this._compression, this.type, bb)
              }
            this.isReady = !0;
            break;
          case 4:
            bb = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), bb._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(bb = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              bb._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            bb = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), bb._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return bb = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (bb => {
              bb && bb._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(bb._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(bb._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), bb._hardwareTexture = this._hardwareTexture, bb._setUniqueId(Eb._Counter++), ab && (bb._isRGBD = this._isRGBD), this._lodTextureHigh && (bb._lodTextureHigh && bb._lodTextureHigh.dispose(), bb._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (bb._lodTextureMid && bb._lodTextureMid.dispose(), bb._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (bb._lodTextureLow && bb._lodTextureLow.dispose(), bb._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (bb._irradianceTexture && bb._irradianceTexture.dispose(), bb._irradianceTexture = this._irradianceTexture);
        const Ub = this._engine.getLoadedTexturesCache();
        let Ab = Ub.indexOf(this); - 1 !== Ab && Ub.splice(Ab, 1), Ab = Ub.indexOf(bb), -1 === Ab && Ub.push(bb)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    Eb._Counter = 0
  },
  39044: (bb, ab, Ub) => {
    function Ab(bb) {
      return 13 === bb || 14 === bb || 15 === bb || 16 === bb || 17 === bb || 18 === bb || 19 === bb
    }

    function Mb(bb) {
      return 8 === bb || 9 === bb || 10 === bb || 11 === bb
    }

    function Tb(bb) {
      return 0 === bb || 5 === bb || 7 === bb || 11 === bb
    }

    function Eb(bb) {
      return 13 === bb || 17 === bb || 18 === bb || 19 === bb
    }
    Ub.d(ab, {
      c: () => Eb,
      d: () => Ab,
      h: () => Mb,
      j: () => Tb
    })
  },
  38924: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    class Ab {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(bb) {
        this._cachedWrapU = bb
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(bb) {
        this._cachedWrapV = bb
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(bb) {
        this._cachedWrapR = bb
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(bb) {
        this._cachedAnisotropicFilteringLevel = bb
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(bb) {
        this._comparisonFunction = bb
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(bb) {
        this._useMipMaps = bb
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = bb, this._cachedWrapV = ab, this._cachedWrapR = Ub, this._cachedAnisotropicFilteringLevel = Ab, this.samplingMode = Mb, this._comparisonFunction = Tb, this
      }
      compareSampler(bb) {
        return this._cachedWrapU === bb._cachedWrapU && this._cachedWrapV === bb._cachedWrapV && this._cachedWrapR === bb._cachedWrapR && this._cachedAnisotropicFilteringLevel === bb._cachedAnisotropicFilteringLevel && this.samplingMode === bb.samplingMode && this._comparisonFunction === bb._comparisonFunction && this._useMipMaps === bb._useMipMaps
      }
    }
  },
  39218: (bb, ab, Ub) => {
    function Ab(bb) {
      bb.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    Ub.d(ab, {
      d: () => Ab
    })
  },
  39021: (bb, ab, Ub) => {
    function Ab(bb) {
      return void 0 === bb.getPipelineContext
    }
    Ub.d(ab, {
      c: () => Ab
    })
  },
  39425: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb
    });
    var Ab = Ub(38993);
    class Mb {
      static GetEffect(bb) {
        return void 0 === bb.getPipelineContext ? bb.effect : bb
      }
      constructor(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = bb.createDrawContext(), ab && (this.materialContext = bb.createMaterialContext())
      }
      setEffect(bb, ab) {
        let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        Ub || this.effect === bb || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = bb, void 0 !== ab && (this.defines = ab), Ub && this.drawContext?.reset()
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const ab = this.effect;
          bb ? ab.dispose() : Ab.c.SetImmediate((() => {
            ab.vj().onEndFrameObservable.addOnce((() => {
              ab.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  38951: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Lb,
      e: () => Xb,
      h: () => eb,
      j: () => vb
    });
    var Ab = Ub(38955),
      Mb = Ub(38964),
      Tb = Ub(38943),
      Eb = Ub(37989),
      Yb = Ub(38985),
      Bb = Ub(38973);

    function eb(bb, ab) {
      return (0, Mb.C)(ab).cachedPipelines[bb]
    }

    function vb(bb) {
      const ab = bb._name,
        Ub = bb.context;
      if (ab && Ub) {
        const bb = (0, Mb.C)(Ub),
          Ab = bb.cachedPipelines[ab];
        Ab?.dispose(), delete bb.cachedPipelines[ab]
      }
    }

    function Lb(bb, ab, Ub, Mb, Tb, Eb, Bb) {
      let eb, vb;
      const Lb = (0, Ab.k)() ? Eb?.getHostDocument() : null;
      eb = "string" === typeof ab ? ab : "string" === typeof ab.vertexSource ? "source:" + ab.vertexSource : "string" === typeof ab.vertexElement ? Lb?.getElementById(ab.vertexElement) || ab.vertexElement : ab.vertex || ab, vb = "string" === typeof ab ? ab : "string" === typeof ab.fragmentSource ? "source:" + ab.fragmentSource : "string" === typeof ab.fragmentElement ? Lb?.getElementById(ab.fragmentElement) || ab.fragmentElement : ab.fragment || ab;
      const Xb = [void 0, void 0],
        jb = () => {
          if (Xb[0] && Xb[1]) {
            const [Ab, eb] = Xb;
            (0, Yb.d)(bb), (0, Yb.h)(Ab, bb, ((Ab, vb) => {
              Bb && (Bb._vertexSourceCodeBeforeMigration = vb), Ub && (Ab = Ub("vertex", Ab)), bb.isFragment = !0, (0, Yb.h)(eb, bb, ((Eb, eb) => {
                Bb && (Bb._fragmentSourceCodeBeforeMigration = eb), Ub && (Eb = Ub("fragment", Eb));
                const vb = (0, Yb.b)(Ab, Eb, bb);
                bb = null;
                const Lb = function(bb, ab, Ub, Ab) {
                  if (Ub) {
                    return {
                      vertexSourceCode: (1 === Ab ? "//" : "") + "#define SHADER_NAME vertex:" + (Ub.vertexElement || Ub.vertex || Ub.spectorName || Ub) + "\n" + bb,
                      fragmentSourceCode: (1 === Ab ? "//" : "") + "#define SHADER_NAME fragment:" + (Ub.fragmentElement || Ub.fragment || Ub.spectorName || Ub) + "\n" + ab
                    }
                  }
                  return {
                    vertexSourceCode: bb,
                    fragmentSourceCode: ab
                  }
                }(vb.vertexCode, vb.fragmentCode, ab, Tb);
                Mb?.(Lb.vertexSourceCode, Lb.fragmentSourceCode)
              }), Eb)
            }), Eb)
          }
        };
      Pb(eb, "Vertex", "", (bb => {
        Bb && (Bb._rawVertexSourceCode = bb), Xb[0] = bb, jb()
      }), Tb), Pb(vb, "Fragment", "Pixel", (bb => {
        Bb && (Bb._rawFragmentSourceCode = bb), Xb[1] = bb, jb()
      }), Tb)
    }

    function Pb(bb, ab, Ub, Mb, Eb, Yb) {
      if ("undefined" !== typeof HTMLElement && bb instanceof HTMLElement) {
        return void Mb((0, Ab.b)(bb))
      }
      if ("source:" === bb.substring(0, 7)) return void Mb(bb.substring(7));
      if ("base64:" === bb.substring(0, 7)) {
        return void Mb(window.atob(bb.substring(7)))
      }
      const eb = Tb.d.GetShadersStore(Eb);
      if (eb[bb + ab + "Shader"]) return void Mb(eb[bb + ab + "Shader"]);
      if (Ub && eb[bb + Ub + "Shader"]) return void Mb(eb[bb + Ub + "Shader"]);
      let vb;
      if (vb = "." === bb[0] || "/" === bb[0] || bb.indexOf("http") > -1 ? bb : Tb.d.GetShadersRepository(Eb) + bb, !(Yb = Yb || Bb.i)) throw new Error("loadFileInjection is not defined");
      Yb(vb + "." + ab.toLowerCase() + ".fx", Mb)
    }
    const Xb = (bb, ab, Ub, Ab) => {
      try {
        const Tb = bb.context ? (0, Mb.C)(bb.context) : null;
        Tb && (Tb.disableParallelShaderCompile = bb.disableParallelCompilation);
        const Eb = bb.existingPipelineContext || ab(bb.shaderProcessingContext);
        return Eb._name = bb.name, bb.name && Tb && (Tb.cachedPipelines[bb.name] = Eb), Ub(Eb, bb.vertex, bb.fragment, !!bb.createAsRaw, "", "", bb.rebuildRebind, bb.defines, bb.transformFeedbackVaryings, "", (() => {
          Ab(Eb, (() => {
            bb.onRenderingStateCompiled?.(Eb)
          }))
        })), Eb
      } catch (Tb) {
        throw Eb.e.Error("Error compiling effect"), Tb
      }
    }
  },
  38939: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Bb
    });
    var Ab = Ub(36431),
      Mb = Ub(37989),
      Tb = Ub(38943),
      Eb = Ub(38951),
      Yb = Ub(38993);
    class Bb {
      static get ShadersRepository() {
        return Tb.d.ShadersRepository
      }
      static set ShadersRepository(bb) {
        Tb.d.ShadersRepository = bb
      }
      get Jab() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new Ab.b), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(bb, ab, Ub) {
        let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Tb = arguments.length > 4 ? arguments[4] : void 0,
          Yb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          vb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Lb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Pb = arguments.length > 9 ? arguments[9] : void 0,
          Xb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          jb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          Rb = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Ab.b, this.onErrorObservable = new Ab.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = bb, this._key = Xb;
        const kb = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let yb;
        if (ab.attributes) {
          const bb = ab;
          if (this._engine = Ub, this._attributesNames = bb.attributes, this._uniformsNames = bb.uniformsNames.concat(bb.samplers), this._samplerList = bb.samplers.slice(), this.defines = bb.defines, this.onError = bb.onError, this.onCompiled = bb.onCompiled, this._fallbacks = bb.fallbacks, this._indexParameters = bb.indexParameters, this._transformFeedbackVaryings = bb.transformFeedbackVaryings || null, this._multiTarget = !!bb.multiTarget, this._shaderLanguage = bb.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!bb.disableParallelShaderCompilation, bb.uniformBuffersNames) {
            this._uniformBuffersNamesList = bb.uniformBuffersNames.slice();
            for (let ab = 0; ab < bb.uniformBuffersNames.length; ab++) this._uniformBuffersNames[bb.uniformBuffersNames[ab]] = ab
          }
          this._processFinalCode = bb.processFinalCode ?? null, this._processCodeAfterIncludes = bb.processCodeAfterIncludes ?? void 0, Rb = bb.extraInitializationsAsync, yb = bb.existingPipelineContext
        } else this._engine = Tb, this.defines = null == Yb ? "" : Yb, this._uniformsNames = Ub.concat(Mb), this._samplerList = Mb ? Mb.slice() : [], this._attributesNames = ab, this._uniformBuffersNamesList = [], this._shaderLanguage = jb, this.onError = Lb, this.onCompiled = vb, this._indexParameters = Pb, this._fallbacks = eb;
        "WEBGL2" === this._engine.shaderPlatformName && (yb = (0, Eb.h)(kb, this._engine._gl) ?? yb), this._attributeLocationByName = {}, this.uniqueId = Bb._UniqueIdSeed++, yb ? (this._pipelineContext = yb, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, Rb).catch((bb => {
          const ab = bb?.message ?? String(bb),
            Ub = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${ab}`);
          bb && "string" === typeof bb.stack && (Ub.stack = `${Ub.message}\nCaused by: ${bb.stack}`), this._processCompilationErrors(Ub)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.Jab || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        Ab && await Ab(), this._processingContext = Ub || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const Mb = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: bb ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: Tb.d.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: Tb.d.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          hUb: this._engine.hUb,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, Eb.b)(Mb, this.name, this._processFinalCode, ((bb, Ub) => {
          this._vertexSourceCode = bb, this._fragmentSourceCode = Ub, this._prepareEffect(ab)
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
        return !!this._engine.Jab || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      vj() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(bb) {
        return this._attributes[bb]
      }
      getAttributeLocationByName(bb) {
        return this._attributeLocationByName[bb]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(bb) {
        return this._uniformsNames.indexOf(bb)
      }
      getUniform(bb) {
        return this._uniforms[bb]
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
        return await new Promise((bb => {
          this.executeWhenCompiled(bb)
        }))
      }
      executeWhenCompiled(bb) {
        this.isReady() ? bb(this) : (this.onCompileObservable.add((ab => {
          bb(ab)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(bb) {
        (0, Yb.f)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (ab => {
          this._processCompilationErrors(ab, bb)
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
            hUb: this._engine.hUb,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(bb, ab, Ub, Ab) {
        this._isReady = !1, this._vertexSourceCodeOverride = bb, this._fragmentSourceCodeOverride = ab, this.onError = (bb, ab) => {
          Ab && Ab(ab)
        }, this.onCompiled = () => {
          const bb = this.vj().scenes;
          if (bb)
            for (let ab = 0; ab < bb.length; ab++) bb[ab].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(Ub)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(bb) {
        if (this._pipelineContext = bb, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let ab = 0; ab < this._attributesNames.length; ab++) {
            const bb = this._attributesNames[ab];
            this._attributeLocationByName[bb] = this._attributes[ab]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), Bb.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ab = this._pipelineContext;
        this._isReady = !1;
        try {
          const Ub = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            Ab = Ub ? null : this.defines,
            Mb = Ub ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            Tb = Ub ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            Yb = this._engine;
          this._pipelineContext = (0, Eb.e)({
            existingPipelineContext: bb ? ab : null,
            vertex: Mb,
            fragment: Tb,
            context: "WEBGL2" === Yb.shaderPlatformName || "WEBGL1" === Yb.shaderPlatformName ? Yb._gl : void 0,
            rebuildRebind: (bb, ab, Ub, Ab) => this._rebuildProgram(bb, ab, Ub, Ab),
            defines: Ab,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: Ub,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: Ub => {
              ab && !bb && this._engine._deletePipelineContext(ab), Ub && this._onRenderingStateCompiled(Ub)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(ab)
        } catch (Ub) {
          this._processCompilationErrors(Ub, ab)
        }
      }
      _getShaderCodeAndErrorLine(bb, ab, Ub) {
        const Ab = Ub ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let Mb = null;
        if (ab && bb) {
          const Tb = ab.match(Ab);
          if (Tb && 2 === Tb.length) {
            const ab = parseInt(Tb[1]),
              Ab = bb.split("\n", -1);
            Ab.length >= ab && (Mb = `Offending line [${ab}] in ${Ub?"fragment":"vertex"} code: ${Ab[ab-1]}`)
          }
        }
        return [bb, Mb]
      }
      _processCompilationErrors(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof bb?.stack ? bb.stack : bb?.message ?? String(bb);
        const Ub = this._attributesNames,
          Ab = this._fallbacks;
        if (Mb.e.Error("Unable to compile effect:"), Mb.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Mb.e.Error(`Attributes: ${Ub.join(" ")}`), Mb.e.Error("Defines:\n" + this.defines), Bb.LogShaderCodeOnCompilationError) {
          let bb, ab = null,
            Ub = null;
          this._pipelineContext?._getVertexShaderCode() && ([bb, ab] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), bb && (Mb.e.Error("Vertex code:"), Mb.e.Error(bb))), this._pipelineContext?._getFragmentShaderCode() && ([bb, Ub] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), bb && (Mb.e.Error("Fragment code:"), Mb.e.Error(bb))), ab && Mb.e.Error(ab), Ub && Mb.e.Error(Ub)
        }
        Mb.e.Error("Error: " + this._compilationError);
        const Tb = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        ab && (this._pipelineContext = ab, this._isReady = !0, Tb()), Ab ? (this._pipelineContext = null, Ab.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Mb.e.Error("Trying next fallback."), this.defines = Ab.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, Tb(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, ab || Tb())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(bb, ab) {
        this._engine._bindTexture(this._samplers[bb], ab, bb)
      }
      setTexture(bb, ab) {
        this._engine.setTexture(this._samplers[bb], this._uniforms[bb], ab, bb)
      }
      setTextureArray(bb, ab) {
        const Ub = bb + "Ex";
        if (-1 === this._samplerList.indexOf(Ub + "0")) {
          const Ab = this._samplerList.indexOf(bb);
          for (let bb = 1; bb < ab.length; bb++) {
            const ab = Ub + (bb - 1).toString();
            this._samplerList.splice(Ab + bb, 0, ab)
          }
          let Mb = 0;
          for (const bb of this._samplerList) this._samplers[bb] = Mb, Mb += 1
        }
        this._engine.setTextureArray(this._samplers[bb], this._uniforms[bb], ab, bb)
      }
      bindUniformBuffer(bb, ab) {
        const Ub = this._uniformBuffersNames[ab];
        void 0 === Ub || Bb._BaseCache[Ub] === bb && this._engine._features.useUBOBindingCache || (Bb._BaseCache[Ub] = bb, this._engine.bindUniformBufferBase(bb, Ub, ab))
      }
      bindUniformBlock(bb, ab) {
        this._engine.bindUniformBlock(this._pipelineContext, bb, ab)
      }
      setInt(bb, ab) {
        return this._pipelineContext.setInt(bb, ab), this
      }
      setInt2(bb, ab, Ub) {
        return this._pipelineContext.setInt2(bb, ab, Ub), this
      }
      setInt3(bb, ab, Ub, Ab) {
        return this._pipelineContext.setInt3(bb, ab, Ub, Ab), this
      }
      setInt4(bb, ab, Ub, Ab, Mb) {
        return this._pipelineContext.setInt4(bb, ab, Ub, Ab, Mb), this
      }
      setIntArray(bb, ab) {
        return this._pipelineContext.setIntArray(bb, ab), this
      }
      setIntArray2(bb, ab) {
        return this._pipelineContext.setIntArray2(bb, ab), this
      }
      setIntArray3(bb, ab) {
        return this._pipelineContext.setIntArray3(bb, ab), this
      }
      setIntArray4(bb, ab) {
        return this._pipelineContext.setIntArray4(bb, ab), this
      }
      setUInt(bb, ab) {
        return this._pipelineContext.setUInt(bb, ab), this
      }
      setUInt2(bb, ab, Ub) {
        return this._pipelineContext.setUInt2(bb, ab, Ub), this
      }
      setUInt3(bb, ab, Ub, Ab) {
        return this._pipelineContext.setUInt3(bb, ab, Ub, Ab), this
      }
      setUInt4(bb, ab, Ub, Ab, Mb) {
        return this._pipelineContext.setUInt4(bb, ab, Ub, Ab, Mb), this
      }
      setUIntArray(bb, ab) {
        return this._pipelineContext.setUIntArray(bb, ab), this
      }
      setUIntArray2(bb, ab) {
        return this._pipelineContext.setUIntArray2(bb, ab), this
      }
      setUIntArray3(bb, ab) {
        return this._pipelineContext.setUIntArray3(bb, ab), this
      }
      setUIntArray4(bb, ab) {
        return this._pipelineContext.setUIntArray4(bb, ab), this
      }
      setFloatArray(bb, ab) {
        return this._pipelineContext.setArray(bb, ab), this
      }
      setFloatArray2(bb, ab) {
        return this._pipelineContext.setArray2(bb, ab), this
      }
      setFloatArray3(bb, ab) {
        return this._pipelineContext.setArray3(bb, ab), this
      }
      setFloatArray4(bb, ab) {
        return this._pipelineContext.setArray4(bb, ab), this
      }
      setArray(bb, ab) {
        return this._pipelineContext.setArray(bb, ab), this
      }
      setArray2(bb, ab) {
        return this._pipelineContext.setArray2(bb, ab), this
      }
      setArray3(bb, ab) {
        return this._pipelineContext.setArray3(bb, ab), this
      }
      setArray4(bb, ab) {
        return this._pipelineContext.setArray4(bb, ab), this
      }
      setMatrices(bb, ab) {
        return this._pipelineContext.setMatrices(bb, ab), this
      }
      setMatrix(bb, ab) {
        return this._pipelineContext.setMatrix(bb, ab), this
      }
      setMatrix3x3(bb, ab) {
        return this._pipelineContext.setMatrix3x3(bb, ab), this
      }
      setMatrix2x2(bb, ab) {
        return this._pipelineContext.setMatrix2x2(bb, ab), this
      }
      setFloat(bb, ab) {
        return this._pipelineContext.setFloat(bb, ab), this
      }
      setBool(bb, ab) {
        return this._pipelineContext.setInt(bb, ab ? 1 : 0), this
      }
      setVector2(bb, ab) {
        return this._pipelineContext.setVector2(bb, ab), this
      }
      setFloat2(bb, ab, Ub) {
        return this._pipelineContext.setFloat2(bb, ab, Ub), this
      }
      setVector3(bb, ab) {
        return this._pipelineContext.setVector3(bb, ab), this
      }
      setFloat3(bb, ab, Ub, Ab) {
        return this._pipelineContext.setFloat3(bb, ab, Ub, Ab), this
      }
      setVector4(bb, ab) {
        return this._pipelineContext.setVector4(bb, ab), this
      }
      setQuaternion(bb, ab) {
        return this._pipelineContext.setQuaternion(bb, ab), this
      }
      setFloat4(bb, ab, Ub, Ab, Mb) {
        return this._pipelineContext.setFloat4(bb, ab, Ub, Ab, Mb), this
      }
      setColor3(bb, ab) {
        return this._pipelineContext.setColor3(bb, ab), this
      }
      setColor4(bb, ab, Ub) {
        return this._pipelineContext.setColor4(bb, ab, Ub), this
      }
      setDirectColor4(bb, ab) {
        return this._pipelineContext.setDirectColor4(bb, ab), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (Bb.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, Eb.j)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        ab && (Tb.d.GetShadersStore(Ab)[`${bb}PixelShader`] = ab), Ub && (Tb.d.GetShadersStore(Ab)[`${bb}VertexShader`] = Ub)
      }
      static ResetCache() {
        Bb._BaseCache = {}
      }
    }
    Bb.LogShaderCodeOnCompilationError = !0, Bb.PersistentMode = !1, Bb.AutomaticallyClearCodeCache = !1, Bb._UniqueIdSeed = 0, Bb._BaseCache = {}, Bb.ShadersStore = Tb.d.ShadersStore, Bb.IncludesShadersStore = Tb.d.IncludesShadersStore
  },
  39250: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => vb,
      f: () => fb,
      j: () => ib
    });
    var Ab = Ub(38939),
      Mb = Ub(36401),
      Tb = Ub(36438),
      Eb = Ub(39231);
    const Yb = new Mb.b,
      Bb = new Mb.b,
      eb = new Mb.b,
      vb = {
        oN: () => {},
        eyeAtCamera: !0
      };

    function Lb(bb, ab, Ub) {
      const Ab = Ub.qUb(),
        Mb = ab.qUb();
      for (let Tb = 0; Tb < 16; Tb++) Ab[Tb] = Mb[Tb];
      return Ab[12] -= bb.x, Ab[13] -= bb.y, Ab[14] -= bb.z, Ub.markAsUpdated(), Ub
    }

    function Pb(bb, ab, Ub) {
      return (0, Tb.h)(ab, Bb), Lb(bb, Bb, eb), (0, Tb.h)(eb, Ub), Ub
    }

    function Xb(bb, ab, Ub) {
      if (!vb.eyeAtCamera) return Pb(bb, ab, Ub);
      const Ab = Ub.qUb(),
        Mb = ab.qUb();
      for (let Tb = 0; Tb < 16; Tb++) Ab[Tb] = Mb[Tb];
      return Ab[12] = 0, Ab[13] = 0, Ab[14] = 0, Ub.markAsUpdated(), Ub
    }

    function jb(bb, ab, Ub, Ab) {
      return (0, Tb.n)(Xb(bb, ab, Ab), Ub, Ab), Ab
    }

    function Rb(bb, ab, Ub, Ab) {
      return (0, Tb.h)(Ub, Bb), (0, Tb.n)(ab, Bb, eb), Lb(bb, eb, Bb), Xb(bb, Ub, eb), (0, Tb.n)(Bb, eb, Ab), Ab
    }

    function kb(bb, ab, Ub, Ab, Mb, Eb) {
      return (0, Tb.h)(Ub, Bb), (0, Tb.n)(ab, Bb, eb), Lb(bb, eb, Bb), jb(bb, Ab, Mb, eb), (0, Tb.n)(Bb, eb, Eb), Eb
    }

    function yb(bb, ab) {
      const Ub = vb.oN();
      if (!Ub || Yb === ab) return ab;
      Yb.updateFlag = ab.updateFlag;
      const Ab = Ub.floatingOriginOffset;
      switch (bb) {
        case "world":
          return Lb(Ab, ab, Yb);
        case "view":
          return Xb(Ab, ab, Yb);
        case "worldView":
          return Rb(Ab, ab, Ub.getViewMatrix(), Yb);
        case "viewProjection":
          return jb(Ab, Ub.getViewMatrix(), Ub.getProjectionMatrix(), Yb);
        case "worldViewProjection":
          return kb(Ab, ab, Ub.getTransformMatrix(), Ub.getViewMatrix(), Ub.getProjectionMatrix(), Yb);
        default:
          if (bb.startsWith("u_")) {
            const Mb = bb.toLowerCase();
            if (Mb.startsWith("u_worldviewprojection")) return kb(Ab, ab, Ub.getTransformMatrix(), Ub.getViewMatrix(), Ub.getProjectionMatrix(), Yb);
            if (Mb.startsWith("u_viewprojection")) return jb(Ab, Ub.getViewMatrix(), Ub.getProjectionMatrix(), Yb);
            if (Mb.startsWith("u_worldview")) return Rb(Ab, ab, Ub.getViewMatrix(), Yb);
            if (Mb.startsWith("u_world")) return Lb(Ab, ab, Yb);
            if (Mb.startsWith("u_view")) return Xb(Ab, ab, Yb)
          }
          return ab
      }
    }
    const Zb = Eb.b,
      Db = Ab.d,
      zb = Zb.prototype._updateMatrixForUniform,
      xb = Ab.d.prototype.setMatrix;

    function ib() {
      Ab.d.prototype.setMatrix = xb, Db._setMatrixOverride = void 0, Zb.prototype._updateMatrixForUniform = zb, Zb.prototype._updateMatrixForUniformOverride = void 0
    }

    function fb() {
      Db.prototype._setMatrixOverride = xb, Db.prototype.setMatrix = function(bb, ab) {
        return this._setMatrixOverride(bb, yb(bb, ab)), this
      }, Zb.prototype._updateMatrixForUniformOverride = zb, Zb.prototype._updateMatrixForUniform = function(bb, ab) {
        this._updateMatrixForUniformOverride(bb, yb(bb, ab))
      }
    }
  },
  39227: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb,
      f: () => Mb
    });
    var Ab = Ub(39218);

    function Mb(bb, ab) {
      ab.WHITEBALANCE && bb.push("whiteBalanceMatrix"), ab.EXPOSURE && bb.push("exposureLinear"), ab.CONTRAST && bb.push("contrast"), ab.COLORGRADING && bb.push("colorTransformSettings"), (ab.VIGNETTE || ab.DITHER) && bb.push("vInverseScreenSize"), ab.VIGNETTE && (bb.push("vignetteSettings1"), bb.push("vignetteSettings2")), ab.COLORCURVES && (0, Ab.d)(bb), ab.DITHER && bb.push("ditherIntensity")
    }

    function Tb(bb, ab) {
      ab.COLORGRADING && bb.push("txColorTransform")
    }
  },
  39209: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Hb,
      h: () => Fb
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(36431),
      Eb = Ub(36593),
      Yb = Ub(36436),
      Bb = Ub(36401);
    const eb = [
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
      vb = 1e6 / eb[eb.length - 1][0],
      Lb = 150;

    function Pb(bb, ab) {
      const Ub = Number.isNaN(bb) ? vb : Math.max(bb, vb),
        Ab = (0, Yb.Clamp)(1e6 / Ub, eb[0][0], eb[eb.length - 1][0]);
      let Mb = 0,
        Tb = eb.length - 1;
      for (; Tb - Mb > 1;) {
        const bb = Mb + Tb >> 1;
        eb[bb][0] <= Ab ? Mb = bb : Tb = bb
      }
      const Eb = Mb,
        [Pb, Xb, jb, Rb] = eb[Eb],
        [kb, yb, Zb, Db] = eb[Eb + 1],
        zb = (Ab - Pb) / (kb - Pb),
        xb = Bb.l.Lerp(new Bb.l(Xb, jb), new Bb.l(yb, Zb), zb),
        ib = Bb.l.Normalize(new Bb.l(1, Rb)),
        fb = Bb.l.Normalize(new Bb.l(1, Db)),
        mb = Bb.l.Normalize(Bb.l.Lerp(ib, fb, zb)),
        pb = (0, Yb.Clamp)(ab, -150, Lb);
      xb.MAb(mb.scale(pb / 3e3));
      const Nb = 2 * xb.x - 8 * xb.y + 4,
        Wb = 3 * xb.x / Nb,
        Hb = 2 * xb.y / Nb;
      return new Bb.m(Wb / Hb, 1, (1 - Wb - Hb) / Hb)
    }
    const Xb = Bb.b.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      jb = Bb.b.Invert(Xb);

    function Rb(bb, ab) {
      const Ub = ab > 0 ? bb / ab : 10;
      return (0, Yb.Clamp)(Ub, .1, 10)
    }

    function kb(bb, ab) {
      const Ub = Bb.m.TransformNormal(bb, Xb),
        Ab = Bb.m.TransformNormal(ab, Xb),
        Mb = Bb.b.FromArray([Rb(Ab.x, Ub.x), 0, 0, 0, 0, Rb(Ab.y, Ub.y), 0, 0, 0, 0, Rb(Ab.z, Ub.z), 0, 0, 0, 0, 1]);
      return Xb.multiply(Mb).multiply(jb)
    }
    const yb = new Bb.m(.95047, 1, 1.08883),
      Zb = Bb.b.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(kb(yb, Pb(6500, 0))),
      Db = Bb.b.Invert(Zb),
      zb = Bb.m.TransformNormal(new Bb.m(1, 1, 1), Zb);
    var xb = Ub(39124),
      ib = Ub(39218);
    let fb = (() => {
      var bb;
      let ab, Ub, Tb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb = [],
        yb = [],
        Zb = [],
        Db = [],
        zb = [],
        fb = [],
        mb = [],
        pb = [],
        Nb = [],
        Wb = [],
        Hb = [],
        Ib = [],
        db = [],
        Fb = [],
        hb = [],
        Gb = [],
        Qb = [],
        qb = [],
        ub = [],
        rb = [],
        Kb = [],
        ob = [],
        lb = [],
        tb = [];
      return bb = class {
        constructor() {
          this._dirty = !0, this._tempColor = new Eb.g(0, 0, 0, 0), this._globalCurve = new Eb.g(0, 0, 0, 0), this._highlightsCurve = new Eb.g(0, 0, 0, 0), this._midtonesCurve = new Eb.g(0, 0, 0, 0), this._shadowsCurve = new Eb.g(0, 0, 0, 0), this._positiveCurve = new Eb.g(0, 0, 0, 0), this._negativeCurve = new Eb.g(0, 0, 0, 0), this._globalHue = (0, Ab.k)(this, kb, 30), this._globalDensity = ((0, Ab.k)(this, yb), (0, Ab.k)(this, Zb, 0)), this._globalSaturation = ((0, Ab.k)(this, Db), (0, Ab.k)(this, zb, 0)), this._globalExposure = ((0, Ab.k)(this, fb), (0, Ab.k)(this, mb, 0)), this._highlightsHue = ((0, Ab.k)(this, pb), (0, Ab.k)(this, Nb, 30)), this._highlightsDensity = ((0, Ab.k)(this, Wb), (0, Ab.k)(this, Hb, 0)), this._highlightsSaturation = ((0, Ab.k)(this, Ib), (0, Ab.k)(this, db, 0)), this._highlightsExposure = ((0, Ab.k)(this, Fb), (0, Ab.k)(this, hb, 0)), this._midtonesHue = ((0, Ab.k)(this, Gb), (0, Ab.k)(this, Qb, 30)), this._midtonesDensity = ((0, Ab.k)(this, qb), (0, Ab.k)(this, ub, 0)), this._midtonesSaturation = ((0, Ab.k)(this, rb), (0, Ab.k)(this, Kb, 0)), this._midtonesExposure = ((0, Ab.k)(this, ob), (0, Ab.k)(this, lb, 0)), this._shadowsHue = ((0, Ab.k)(this, tb), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(bb) {
          this._globalHue = bb, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(bb) {
          this._globalDensity = bb, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(bb) {
          this._globalSaturation = bb, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(bb) {
          this._globalExposure = bb, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(bb) {
          this._highlightsHue = bb, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(bb) {
          this._highlightsDensity = bb, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(bb) {
          this._highlightsSaturation = bb, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(bb) {
          this._highlightsExposure = bb, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(bb) {
          this._midtonesHue = bb, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(bb) {
          this._midtonesDensity = bb, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(bb) {
          this._midtonesSaturation = bb, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(bb) {
          this._midtonesExposure = bb, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(bb) {
          this._shadowsHue = bb, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(bb) {
          this._shadowsDensity = bb, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(bb) {
          this._shadowsSaturation = bb, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(bb) {
          this._shadowsExposure = bb, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(ab, Ub, Ab, Mb, Tb) {
          null != ab && (ab = bb._Clamp(ab, 0, 360), Ub = bb._Clamp(Ub, -100, 100), Ab = bb._Clamp(Ab, -100, 100), Mb = bb._Clamp(Mb, -100, 100), Ub = bb._ApplyColorGradingSliderNonlinear(Ub), Ub *= .5, Mb = bb._ApplyColorGradingSliderNonlinear(Mb), Ub < 0 && (Ub *= -1, ab = (ab + 180) % 360), bb._FromHSBToRef(ab, Ub, 50 + .25 * Mb, Tb), Tb.scaleToRef(2, Tb), Tb.a = 1 + .01 * Ab)
        }
        static _ApplyColorGradingSliderNonlinear(bb) {
          bb /= 100;
          let ab = Math.abs(bb);
          return ab = Math.pow(ab, 2), bb < 0 && (ab *= -1), ab *= 100, ab
        }
        static _FromHSBToRef(ab, Ub, Ab, Mb) {
          let Tb = bb._Clamp(ab, 0, 360);
          const Eb = bb._Clamp(Ub / 100, 0, 1),
            Yb = bb._Clamp(Ab / 100, 0, 1);
          if (0 === Eb) Mb.r = Yb, Mb.g = Yb, Mb.b = Yb;
          else {
            Tb /= 60;
            const bb = Math.floor(Tb),
              ab = Tb - bb,
              Ub = Yb * (1 - Eb),
              Ab = Yb * (1 - Eb * ab),
              Bb = Yb * (1 - Eb * (1 - ab));
            switch (bb) {
              case 0:
                Mb.r = Yb, Mb.g = Bb, Mb.b = Ub;
                break;
              case 1:
                Mb.r = Ab, Mb.g = Yb, Mb.b = Ub;
                break;
              case 2:
                Mb.r = Ub, Mb.g = Yb, Mb.b = Bb;
                break;
              case 3:
                Mb.r = Ub, Mb.g = Ab, Mb.b = Yb;
                break;
              case 4:
                Mb.r = Bb, Mb.g = Ub, Mb.b = Yb;
                break;
              default:
                Mb.r = Yb, Mb.g = Ub, Mb.b = Ab
            }
          }
          Mb.a = 1
        }
        static _Clamp(bb, ab, Ub) {
          return Math.min(Math.max(bb, ab), Ub)
        }
        clone() {
          return xb.b.Clone((() => new bb), this)
        }
        serialize() {
          return xb.b.Serialize(this)
        }
        _bind(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), bb && (bb.setFloat4(ab, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), bb.setFloat4(Ub, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), bb.setFloat4(Ab, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const Eb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], Tb = [(0, Mb.K)()], Yb = [(0, Mb.K)()], Bb = [(0, Mb.K)()], eb = [(0, Mb.K)()], vb = [(0, Mb.K)()], Lb = [(0, Mb.K)()], Pb = [(0, Mb.K)()], Xb = [(0, Mb.K)()], jb = [(0, Mb.K)()], Rb = [(0, Mb.K)()], (0, Ab.h)(null, null, ab, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalHue" in bb,
            get: bb => bb._globalHue,
            set: (bb, ab) => {
              bb._globalHue = ab
            }
          },
          metadata: Eb
        }, kb, yb), (0, Ab.h)(null, null, Ub, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalDensity" in bb,
            get: bb => bb._globalDensity,
            set: (bb, ab) => {
              bb._globalDensity = ab
            }
          },
          metadata: Eb
        }, Zb, Db), (0, Ab.h)(null, null, Tb, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalSaturation" in bb,
            get: bb => bb._globalSaturation,
            set: (bb, ab) => {
              bb._globalSaturation = ab
            }
          },
          metadata: Eb
        }, zb, fb), (0, Ab.h)(null, null, Yb, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalExposure" in bb,
            get: bb => bb._globalExposure,
            set: (bb, ab) => {
              bb._globalExposure = ab
            }
          },
          metadata: Eb
        }, mb, pb), (0, Ab.h)(null, null, Bb, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsHue" in bb,
            get: bb => bb._highlightsHue,
            set: (bb, ab) => {
              bb._highlightsHue = ab
            }
          },
          metadata: Eb
        }, Nb, Wb), (0, Ab.h)(null, null, eb, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsDensity" in bb,
            get: bb => bb._highlightsDensity,
            set: (bb, ab) => {
              bb._highlightsDensity = ab
            }
          },
          metadata: Eb
        }, Hb, Ib), (0, Ab.h)(null, null, vb, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsSaturation" in bb,
            get: bb => bb._highlightsSaturation,
            set: (bb, ab) => {
              bb._highlightsSaturation = ab
            }
          },
          metadata: Eb
        }, db, Fb), (0, Ab.h)(null, null, Lb, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsExposure" in bb,
            get: bb => bb._highlightsExposure,
            set: (bb, ab) => {
              bb._highlightsExposure = ab
            }
          },
          metadata: Eb
        }, hb, Gb), (0, Ab.h)(null, null, Pb, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesHue" in bb,
            get: bb => bb._midtonesHue,
            set: (bb, ab) => {
              bb._midtonesHue = ab
            }
          },
          metadata: Eb
        }, Qb, qb), (0, Ab.h)(null, null, Xb, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesDensity" in bb,
            get: bb => bb._midtonesDensity,
            set: (bb, ab) => {
              bb._midtonesDensity = ab
            }
          },
          metadata: Eb
        }, ub, rb), (0, Ab.h)(null, null, jb, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesSaturation" in bb,
            get: bb => bb._midtonesSaturation,
            set: (bb, ab) => {
              bb._midtonesSaturation = ab
            }
          },
          metadata: Eb
        }, Kb, ob), (0, Ab.h)(null, null, Rb, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesExposure" in bb,
            get: bb => bb._midtonesExposure,
            set: (bb, ab) => {
              bb._midtonesExposure = ab
            }
          },
          metadata: Eb
        }, lb, tb), Eb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eb
        })
      })(), bb.PrepareUniforms = ib.d, bb
    })();

    function mb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      bb._bind(ab, Ub, Ab, Mb)
    }
    var pb = Ub(39033),
      Nb = Ub(39227),
      Wb = Ub(36447);
    let Hb = (() => {
        var bb;
        let ab, Ub, eb, Xb, jb, Rb, yb, ib, Wb, Hb, Ib, db, Fb, hb, Gb, Qb, qb, ub, rb, Kb, ob, lb, tb, wb, sb, gb, Cb, Vb, Ob = [],
          cb = [],
          Jb = [],
          nb = [],
          Sb = [],
          ba = [],
          aa = [],
          Ua = [],
          Aa = [],
          Ma = [],
          Ta = [],
          Ea = [],
          Ya = [],
          Ba = [],
          ea = [],
          va = [],
          La = [],
          Pa = [],
          Xa = [],
          ja = [],
          Ra = [],
          ka = [],
          ya = [],
          Za = [],
          Da = [],
          za = [],
          xa = [],
          ia = [],
          fa = [],
          ma = [],
          pa = [],
          Na = [],
          Wa = [],
          Ha = [],
          Ia = [],
          da = [],
          Fa = [],
          ha = [],
          Ga = [],
          Qa = [],
          qa = [],
          ua = [],
          ra = [],
          Ka = [],
          oa = [],
          la = [],
          ta = [],
          wa = [],
          sa = [],
          ga = [],
          Ca = [],
          Va = [],
          Oa = [],
          ca = [],
          Ja = [],
          na = [];
        return bb = class {
          constructor() {
            this.colorCurves = (0, Ab.k)(this, Ob, new fb), this._colorCurvesEnabled = ((0, Ab.k)(this, cb), (0, Ab.k)(this, Jb, !1)), this._colorGradingTexture = ((0, Ab.k)(this, nb), (0, Ab.k)(this, Sb, void 0)), this._colorGradingEnabled = ((0, Ab.k)(this, ba), (0, Ab.k)(this, aa, !1)), this._colorGradingWithGreenDepth = ((0, Ab.k)(this, Ua), (0, Ab.k)(this, Aa, !0)), this._colorGradingBGR = ((0, Ab.k)(this, Ma), (0, Ab.k)(this, Ta, !0)), this._exposure = ((0, Ab.k)(this, Ea), (0, Ab.k)(this, Ya, 1)), this._toneMappingEnabled = ((0, Ab.k)(this, Ba), (0, Ab.k)(this, ea, !1)), this._toneMappingType = ((0, Ab.k)(this, va), (0, Ab.k)(this, La, bb.TONEMAPPING_STANDARD)), this._contrast = ((0, Ab.k)(this, Pa), (0, Ab.k)(this, Xa, 1)), this._whiteBalanceEnabled = ((0, Ab.k)(this, ja), (0, Ab.k)(this, Ra, !1)), this._temperature = ((0, Ab.k)(this, ka), (0, Ab.k)(this, ya, 6500)), this._tint = ((0, Ab.k)(this, Za), (0, Ab.k)(this, Da, 0)), this._whiteBalanceMatrix = ((0, Ab.k)(this, za), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, Ab.k)(this, xa, 0), this.vignetteCenterX = ((0, Ab.k)(this, ia), (0, Ab.k)(this, fa, 0)), this.vignetteCenterY = ((0, Ab.k)(this, ma), (0, Ab.k)(this, pa, 0)), this.vignetteWeight = ((0, Ab.k)(this, Na), (0, Ab.k)(this, Wa, 1.5)), this.vignetteColor = ((0, Ab.k)(this, Ha), (0, Ab.k)(this, Ia, new Eb.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, Ab.k)(this, da), (0, Ab.k)(this, Fa, .5)), this._vignetteBlendMode = ((0, Ab.k)(this, ha), (0, Ab.k)(this, Ga, bb.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, Ab.k)(this, Qa), (0, Ab.k)(this, qa, !1)), this._ditheringEnabled = ((0, Ab.k)(this, ua), (0, Ab.k)(this, ra, !1)), this._ditheringIntensity = ((0, Ab.k)(this, Ka), (0, Ab.k)(this, oa, 1 / 255)), this._skipFinalColorClamp = ((0, Ab.k)(this, la), (0, Ab.k)(this, ta, !1)), this._applyByPostProcess = ((0, Ab.k)(this, wa), (0, Ab.k)(this, sa, !1)), this._isEnabled = ((0, Ab.k)(this, ga), (0, Ab.k)(this, Ca, !0)), this.outputTextureWidth = ((0, Ab.k)(this, Va), (0, Ab.k)(this, Oa, 0)), this.outputTextureHeight = ((0, Ab.k)(this, ca), (0, Ab.k)(this, Ja, 0)), this.onUpdateParameters = ((0, Ab.k)(this, na), new Tb.b)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(bb) {
            this._colorCurvesEnabled !== bb && (this._colorCurvesEnabled = bb, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(bb) {
            this._colorGradingTexture !== bb && (this._colorGradingTexture = bb, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(bb) {
            this._colorGradingEnabled !== bb && (this._colorGradingEnabled = bb, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(bb) {
            this._colorGradingWithGreenDepth !== bb && (this._colorGradingWithGreenDepth = bb, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(bb) {
            this._colorGradingBGR !== bb && (this._colorGradingBGR = bb, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(bb) {
            this._exposure !== bb && (this._exposure = bb, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(bb) {
            this._toneMappingEnabled !== bb && (this._toneMappingEnabled = bb, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(bb) {
            this._toneMappingType !== bb && (this._toneMappingType = bb, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(bb) {
            this._contrast !== bb && (this._contrast = bb, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(bb) {
            this._whiteBalanceEnabled !== bb && (this._whiteBalanceEnabled = bb, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(bb) {
            bb = Number.isNaN(bb) ? vb : Math.max(bb, vb), this._temperature !== bb && (this._temperature = bb, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(bb) {
            bb = (0, Yb.Clamp)(bb, -150, Lb), this._tint !== bb && (this._tint = bb, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(bb, ab) {
              const Ub = kb(Pb(bb, ab), zb),
                Ab = Zb.multiply(Ub).multiply(Db);
              return Bb.b.GetAsMatrix3x3(Ab)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(bb) {
            this.vignetteCenterY = bb
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(bb) {
            this.vignetteCenterX = bb
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(bb) {
            this._vignetteBlendMode !== bb && (this._vignetteBlendMode = bb, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(bb) {
            this._vignetteEnabled !== bb && (this._vignetteEnabled = bb, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(bb) {
            this._ditheringEnabled !== bb && (this._ditheringEnabled = bb, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(bb) {
            this._ditheringIntensity !== bb && (this._ditheringIntensity = bb, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(bb) {
            this._skipFinalColorClamp !== bb && (this._skipFinalColorClamp = bb, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(bb) {
            this._applyByPostProcess !== bb && (this._applyByPostProcess = bb, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(bb) {
            this._isEnabled !== bb && (this._isEnabled = bb, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(ab) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return ab.WHITEBALANCE = !1, ab.VIGNETTE = !1, ab.TONEMAPPING = 0, ab.CONTRAST = !1, ab.EXPOSURE = !1, ab.COLORCURVES = !1, ab.COLORGRADING = !1, ab.COLORGRADING3D = !1, ab.DITHER = !1, ab.IMAGEPROCESSING = !1, ab.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(ab.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (ab.WHITEBALANCE = this._whiteBalanceEnabled, ab.VIGNETTE = this.vignetteEnabled, ab.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === bb._VIGNETTEMODE_MULTIPLY, ab.VIGNETTEBLENDMODEOPAQUE = !ab.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case bb.TONEMAPPING_KHR_PBR_NEUTRAL:
                ab.TONEMAPPING = 3;
                break;
              case bb.TONEMAPPING_ACES:
                ab.TONEMAPPING = 2;
                break;
              default:
                ab.TONEMAPPING = 1
            } else ab.TONEMAPPING = 0;
            ab.CONTRAST = 1 !== this.contrast, ab.EXPOSURE = 1 !== this.exposure, ab.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, ab.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, ab.COLORGRADING ? ab.COLORGRADING3D = this.colorGradingTexture.is3D : ab.COLORGRADING3D = !1, ab.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, ab.SAMPLER3DBGRMAP = this.colorGradingBGR, ab.DITHER = this._ditheringEnabled, ab.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, ab.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, ab.IMAGEPROCESSING = ab.WHITEBALANCE || ab.VIGNETTE || !!ab.TONEMAPPING || ab.CONTRAST || ab.EXPOSURE || ab.COLORCURVES || ab.COLORGRADING || ab.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(bb, ab) {
            if (this._whiteBalanceEnabled && bb.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && mb(this.colorCurves, bb), this._vignetteEnabled || this._ditheringEnabled) {
              const Ub = 1 / (this.outputTextureWidth || bb.vj().getRenderWidth()),
                Ab = 1 / (this.outputTextureHeight || bb.vj().getRenderHeight());
              if (bb.setFloat2("vInverseScreenSize", Ub, Ab), this._ditheringEnabled && bb.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const Mb = null != ab ? ab : Ab / Ub;
                let Tb = Math.tan(.5 * this.vignetteCameraFov),
                  Eb = Tb * Mb;
                const Yb = Math.sqrt(Eb * Tb);
                Eb = (0, pb.j)(Eb, Yb, this.vignetteStretch), Tb = (0, pb.j)(Tb, Yb, this.vignetteStretch), bb.setFloat4("vignetteSettings1", Eb, Tb, -Eb * this.vignetteCenterX, -Tb * this.vignetteCenterY);
                const Bb = -2 * this.vignetteWeight;
                bb.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, Bb)
              }
            }
            if (bb.setFloat("exposureLinear", this.exposure), bb.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              bb.setTexture("txColorTransform", this.colorGradingTexture);
              const ab = this.colorGradingTexture.getSize().height;
              bb.setFloat4("colorTransformSettings", (ab - 1) / ab, .5 / ab, ab, this.colorGradingTexture.level)
            }
          }
          clone() {
            return xb.b.Clone((() => new bb), this)
          }
          serialize() {
            return xb.b.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ab = [(0, Mb.j)()], Ub = [(0, Mb.K)()], eb = [(0, Mb.D)("colorGradingTexture")], Xb = [(0, Mb.K)()], jb = [(0, Mb.K)()], Rb = [(0, Mb.K)()], yb = [(0, Mb.K)()], ib = [(0, Mb.K)()], Wb = [(0, Mb.K)()], Hb = [(0, Mb.K)()], Ib = [(0, Mb.K)()], db = [(0, Mb.K)()], Fb = [(0, Mb.K)()], hb = [(0, Mb.K)()], Gb = [(0, Mb.K)()], Qb = [(0, Mb.K)()], qb = [(0, Mb.K)()], ub = [(0, Mb.n)()], rb = [(0, Mb.K)()], Kb = [(0, Mb.K)()], ob = [(0, Mb.K)()], lb = [(0, Mb.K)()], tb = [(0, Mb.K)()], wb = [(0, Mb.K)()], sb = [(0, Mb.K)()], gb = [(0, Mb.K)()], Cb = [(0, Mb.K)()], Vb = [(0, Mb.K)()], (0, Ab.h)(null, null, ab, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: bb => "colorCurves" in bb,
              get: bb => bb.colorCurves,
              set: (bb, ab) => {
                bb.colorCurves = ab
              }
            },
            metadata: Tb
          }, Ob, cb), (0, Ab.h)(null, null, Ub, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorCurvesEnabled" in bb,
              get: bb => bb._colorCurvesEnabled,
              set: (bb, ab) => {
                bb._colorCurvesEnabled = ab
              }
            },
            metadata: Tb
          }, Jb, nb), (0, Ab.h)(null, null, eb, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingTexture" in bb,
              get: bb => bb._colorGradingTexture,
              set: (bb, ab) => {
                bb._colorGradingTexture = ab
              }
            },
            metadata: Tb
          }, Sb, ba), (0, Ab.h)(null, null, Xb, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingEnabled" in bb,
              get: bb => bb._colorGradingEnabled,
              set: (bb, ab) => {
                bb._colorGradingEnabled = ab
              }
            },
            metadata: Tb
          }, aa, Ua), (0, Ab.h)(null, null, jb, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingWithGreenDepth" in bb,
              get: bb => bb._colorGradingWithGreenDepth,
              set: (bb, ab) => {
                bb._colorGradingWithGreenDepth = ab
              }
            },
            metadata: Tb
          }, Aa, Ma), (0, Ab.h)(null, null, Rb, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingBGR" in bb,
              get: bb => bb._colorGradingBGR,
              set: (bb, ab) => {
                bb._colorGradingBGR = ab
              }
            },
            metadata: Tb
          }, Ta, Ea), (0, Ab.h)(null, null, yb, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: bb => "_exposure" in bb,
              get: bb => bb._exposure,
              set: (bb, ab) => {
                bb._exposure = ab
              }
            },
            metadata: Tb
          }, Ya, Ba), (0, Ab.h)(null, null, ib, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_toneMappingEnabled" in bb,
              get: bb => bb._toneMappingEnabled,
              set: (bb, ab) => {
                bb._toneMappingEnabled = ab
              }
            },
            metadata: Tb
          }, ea, va), (0, Ab.h)(null, null, Wb, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: bb => "_toneMappingType" in bb,
              get: bb => bb._toneMappingType,
              set: (bb, ab) => {
                bb._toneMappingType = ab
              }
            },
            metadata: Tb
          }, La, Pa), (0, Ab.h)(null, null, Hb, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: bb => "_contrast" in bb,
              get: bb => bb._contrast,
              set: (bb, ab) => {
                bb._contrast = ab
              }
            },
            metadata: Tb
          }, Xa, ja), (0, Ab.h)(null, null, Ib, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_whiteBalanceEnabled" in bb,
              get: bb => bb._whiteBalanceEnabled,
              set: (bb, ab) => {
                bb._whiteBalanceEnabled = ab
              }
            },
            metadata: Tb
          }, Ra, ka), (0, Ab.h)(null, null, db, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: bb => "_temperature" in bb,
              get: bb => bb._temperature,
              set: (bb, ab) => {
                bb._temperature = ab
              }
            },
            metadata: Tb
          }, ya, Za), (0, Ab.h)(null, null, Fb, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: bb => "_tint" in bb,
              get: bb => bb._tint,
              set: (bb, ab) => {
                bb._tint = ab
              }
            },
            metadata: Tb
          }, Da, za), (0, Ab.h)(null, null, hb, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteStretch" in bb,
              get: bb => bb.vignetteStretch,
              set: (bb, ab) => {
                bb.vignetteStretch = ab
              }
            },
            metadata: Tb
          }, xa, ia), (0, Ab.h)(null, null, Gb, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteCenterX" in bb,
              get: bb => bb.vignetteCenterX,
              set: (bb, ab) => {
                bb.vignetteCenterX = ab
              }
            },
            metadata: Tb
          }, fa, ma), (0, Ab.h)(null, null, Qb, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteCenterY" in bb,
              get: bb => bb.vignetteCenterY,
              set: (bb, ab) => {
                bb.vignetteCenterY = ab
              }
            },
            metadata: Tb
          }, pa, Na), (0, Ab.h)(null, null, qb, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteWeight" in bb,
              get: bb => bb.vignetteWeight,
              set: (bb, ab) => {
                bb.vignetteWeight = ab
              }
            },
            metadata: Tb
          }, Wa, Ha), (0, Ab.h)(null, null, ub, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteColor" in bb,
              get: bb => bb.vignetteColor,
              set: (bb, ab) => {
                bb.vignetteColor = ab
              }
            },
            metadata: Tb
          }, Ia, da), (0, Ab.h)(null, null, rb, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteCameraFov" in bb,
              get: bb => bb.vignetteCameraFov,
              set: (bb, ab) => {
                bb.vignetteCameraFov = ab
              }
            },
            metadata: Tb
          }, Fa, ha), (0, Ab.h)(null, null, Kb, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "_vignetteBlendMode" in bb,
              get: bb => bb._vignetteBlendMode,
              set: (bb, ab) => {
                bb._vignetteBlendMode = ab
              }
            },
            metadata: Tb
          }, Ga, Qa), (0, Ab.h)(null, null, ob, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_vignetteEnabled" in bb,
              get: bb => bb._vignetteEnabled,
              set: (bb, ab) => {
                bb._vignetteEnabled = ab
              }
            },
            metadata: Tb
          }, qa, ua), (0, Ab.h)(null, null, lb, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_ditheringEnabled" in bb,
              get: bb => bb._ditheringEnabled,
              set: (bb, ab) => {
                bb._ditheringEnabled = ab
              }
            },
            metadata: Tb
          }, ra, Ka), (0, Ab.h)(null, null, tb, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: bb => "_ditheringIntensity" in bb,
              get: bb => bb._ditheringIntensity,
              set: (bb, ab) => {
                bb._ditheringIntensity = ab
              }
            },
            metadata: Tb
          }, oa, la), (0, Ab.h)(null, null, wb, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: bb => "_skipFinalColorClamp" in bb,
              get: bb => bb._skipFinalColorClamp,
              set: (bb, ab) => {
                bb._skipFinalColorClamp = ab
              }
            },
            metadata: Tb
          }, ta, wa), (0, Ab.h)(null, null, sb, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: bb => "_applyByPostProcess" in bb,
              get: bb => bb._applyByPostProcess,
              set: (bb, ab) => {
                bb._applyByPostProcess = ab
              }
            },
            metadata: Tb
          }, sa, ga), (0, Ab.h)(null, null, gb, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_isEnabled" in bb,
              get: bb => bb._isEnabled,
              set: (bb, ab) => {
                bb._isEnabled = ab
              }
            },
            metadata: Tb
          }, Ca, Va), (0, Ab.h)(null, null, Cb, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: bb => "outputTextureWidth" in bb,
              get: bb => bb.outputTextureWidth,
              set: (bb, ab) => {
                bb.outputTextureWidth = ab
              }
            },
            metadata: Tb
          }, Oa, ca), (0, Ab.h)(null, null, Vb, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "outputTextureHeight" in bb,
              get: bb => bb.outputTextureHeight,
              set: (bb, ab) => {
                bb.outputTextureHeight = ab
              }
            },
            metadata: Tb
          }, Ja, na), Tb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tb
          })
        })(), bb.TONEMAPPING_STANDARD = 0, bb.TONEMAPPING_ACES = 1, bb.TONEMAPPING_KHR_PBR_NEUTRAL = 2, bb.PrepareUniforms = Nb.f, bb.PrepareSamplers = Nb.b, bb._VIGNETTEMODE_MULTIPLY = 0, bb._VIGNETTEMODE_OPAQUE = 1, bb
      })(),
      Ib = !1;

    function db(bb) {
      const ab = xb.b.Parse((() => new Hb), bb, null, null);
      return void 0 !== bb.vignetteCentreX && (ab.vignetteCenterX = bb.vignetteCentreX), void 0 !== bb.vignetteCentreY && (ab.vignetteCenterY = bb.vignetteCentreY), ab
    }

    function Fb() {
      Ib || (Ib = !0, Hb.Parse = db, xb.b._ImageProcessingConfigurationParser = db, (0, Wb.f)("BABYLON.ImageProcessingConfiguration", Hb))
    }
  },
  39231: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(37989),
      Mb = Ub(39195);
    class Tb {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 ? arguments[3] : void 0,
          Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Tb = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = bb, this._noUBO = !bb.supportsUniformBuffers || Mb, this._dynamic = Ub, this._name = Ab ?? "no-name", this._data = ab || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === Tb && this._engine._features.trackUbosInFrame || !0 === Tb) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.i5 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.i5 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(bb) {
        let ab;
        if (ab = bb <= 2 ? bb : 4, this._uniformLocationPointer % ab !== 0) {
          const bb = this._uniformLocationPointer;
          this._uniformLocationPointer += ab - this._uniformLocationPointer % ab;
          const Ub = this._uniformLocationPointer - bb;
          for (let ab = 0; ab < Ub; ab++) this._data.push(0)
        }
      }
      addUniform(bb, ab) {
        let Ub, Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (Ab > 0 && "number" === typeof ab && (this._uniformArraySizes[bb] = {
            strideSize: ab,
            arraySize: Ab
          }), void 0 === this._uniformLocations[bb] && (this._uniformNames.push(bb), !this._noUBO)) {
          if (Ab > 0) {
            if (ab instanceof Array) throw "addUniform should not be use with Array in UBO: " + bb;
            if (this._fillAlignment(4), 16 == ab) ab *= Ab;
            else {
              ab = ab * Ab + (4 - ab) * Ab
            }
            Ub = [];
            for (let bb = 0; bb < ab; bb++) Ub.push(0)
          } else {
            if (ab instanceof Array) Ub = ab, ab = Ub.length;
            else {
              Ub = [];
              for (let bb = 0; bb < ab; bb++) Ub.push(0)
            }
            this._fillAlignment(ab)
          }
          this._uniformSizes[bb] = ab, this._uniformLocations[bb] = this._uniformLocationPointer, this._uniformLocationPointer += ab;
          for (let bb = 0; bb < ab; bb++) this._data.push(Ub[bb]);
          this._needSync = !0
        }
      }
      addMatrix(bb, ab) {
        this.addUniform(bb, Array.prototype.slice.call(ab.qUb()))
      }
      addFloat2(bb, ab, Ub) {
        const Ab = [ab, Ub];
        this.addUniform(bb, Ab)
      }
      addFloat3(bb, ab, Ub, Ab) {
        const Mb = [ab, Ub, Ab];
        this.addUniform(bb, Mb)
      }
      addColor3(bb, ab) {
        const Ub = [ab.r, ab.g, ab.b];
        this.addUniform(bb, Ub)
      }
      addColor4(bb, ab, Ub) {
        const Ab = [ab.r, ab.g, ab.b, Ub];
        this.addUniform(bb, Ab)
      }
      addVector3(bb, ab) {
        const Ub = [ab.x, ab.y, ab.z];
        this.addUniform(bb, Ub)
      }
      addMatrix3x3(bb) {
        this.addUniform(bb, 12)
      }
      addMatrix2x2(bb) {
        this.addUniform(bb, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const bb = [];
        let ab = 0;
        for (const Ub in this._uniformLocations)
          if (bb.push(Ub), 10 === ++ab) break;
        return bb.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const bb of this._ownerListsBySlot.values()) this._removeOwnerBacklink(bb);
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
      set name(bb) {
        this._name = bb
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(bb, ab) {
        for (let Ub = 0; Ub < bb.length; ++Ub)
          if (bb[Ub] !== ab[Ub]) return !1;
        return !0
      }
      _copyBuffer(bb, ab) {
        for (let Ub = 0; Ub < bb.length; ++Ub) ab[Ub] = bb[Ub]
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
      _updateOwnerKeyed(bb) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let ab = this._slotByOwner.get(bb);
        if (void 0 === ab && (ab = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(bb, ab), this._ownerCount++, bb._uniformBuffersWithOwnedSlot || (bb._uniformBuffersWithOwnedSlot = []), bb._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(ab, bb._uniformBuffersWithOwnedSlot)), this._slotGeneration[ab] === this._dataGeneration) return this._bufferIndex = ab, this._buffer = this._buffers[ab][0], this.bindUniformBuffer(), this._slotFrameId[ab] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const Ub = this._buffers[ab][1];
        this._slotFrameId[ab] === this._currentFrameId && Ub && !this._buffersEqual(this._bufferData, Ub) && (ab = this._takeFreeSlot(!1)), this._bufferIndex = ab, this._buffer = this._buffers[ab][0], this.bindUniformBuffer();
        const Ab = this._buffers[ab][1];
        Ab && this._buffersEqual(this._bufferData, Ab) || (Ab && this._copyBuffer(this._bufferData, Ab), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[ab] = this._currentFrameId, this._slotGeneration[ab] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(bb) {
        for (let Ub = 0; Ub < this._freeSlots.length; ++Ub) {
          const ab = this._freeSlots[Ub];
          if (this._slotFrameId[ab] !== this._currentFrameId) return bb && (this._freeSlots[Ub] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), ab
        }
        this._rebuild();
        const ab = this._buffers.length - 1;
        return bb || this._freeSlots.push(ab), ab
      }
      _releaseOwnerSlot(bb) {
        const ab = this._slotByOwner?.get(bb);
        if (void 0 === ab) return;
        this._slotByOwner.delete(bb);
        const Ub = this._ownerListsBySlot.get(ab);
        Ub && (this._removeOwnerBacklink(Ub), this._ownerListsBySlot.delete(ab)), this._ownerCount--, this._freeSlots.push(ab)
      }
      _removeOwnerBacklink(bb) {
        const ab = bb.indexOf(this); - 1 !== ab && (bb[ab] = bb[bb.length - 1], bb.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(bb, ab, Ub) {
        this._checkNewFrame();
        let Mb = this._uniformLocations[bb];
        if (void 0 === Mb) {
          if (this._buffer) return void Ab.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + bb);
          this.addUniform(bb, Ub), Mb = this._uniformLocations[bb]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let bb = 0; bb < Ub; bb++) this._bufferData[Mb + bb] = ab[bb];
          this._dataGeneration++
        } else {
          let bb = !1;
          for (let Ab = 0; Ab < Ub; Ab++)(16 === Ub && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[Mb + Ab] !== Math.fround(ab[Ab])) && (bb = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Mb + Ab] = ab[Ab]);
          this._needSync = this._needSync || bb, bb && this._dataGeneration++
        }
      }
      updateUniformArray(bb, ab, Ub) {
        this._checkNewFrame();
        const Tb = this._uniformLocations[bb];
        if (void 0 === Tb) return void Ab.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const Eb = this._uniformArraySizes[bb];
        if (this._dynamic) {
          for (let bb = 0; bb < Ub; bb++) this._bufferData[Tb + bb] = ab[bb];
          this._dataGeneration++
        } else {
          let bb = !1,
            Ab = 0,
            Yb = 0;
          for (let Bb = 0; Bb < Ub; Bb++)
            if (this._bufferData[Tb + 4 * Yb + Ab] !== Mb.h.FloatRound(ab[Bb]) && (bb = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Tb + 4 * Yb + Ab] = ab[Bb]), Ab++, Ab === Eb.strideSize) {
              for (; Ab < 4; Ab++) this._bufferData[Tb + 4 * Yb + Ab] = 0;
              Ab = 0, Yb++
            } this._needSync = this._needSync || bb, bb && this._dataGeneration++
        }
      }
      _cacheMatrix(bb, ab) {
        this._checkNewFrame();
        const Ub = this._valueCache[bb],
          Ab = ab.updateFlag;
        return (void 0 === Ub || Ub !== Ab) && (this._valueCache[bb] = Ab, !0)
      }
      _updateMatrix3x3ForUniform(bb, ab) {
        for (let Ub = 0; Ub < 3; Ub++) Tb._TempBuffer[4 * Ub] = ab[3 * Ub], Tb._TempBuffer[4 * Ub + 1] = ab[3 * Ub + 1], Tb._TempBuffer[4 * Ub + 2] = ab[3 * Ub + 2], Tb._TempBuffer[4 * Ub + 3] = 0;
        this.updateUniform(bb, Tb._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(bb, ab) {
        this._currentEffect.setMatrix3x3(bb, ab)
      }
      _updateMatrix2x2ForEffect(bb, ab) {
        this._currentEffect.setMatrix2x2(bb, ab)
      }
      _updateMatrix2x2ForUniform(bb, ab) {
        for (let Ub = 0; Ub < 2; Ub++) Tb._TempBuffer[4 * Ub] = ab[2 * Ub], Tb._TempBuffer[4 * Ub + 1] = ab[2 * Ub + 1], Tb._TempBuffer[4 * Ub + 2] = 0, Tb._TempBuffer[4 * Ub + 3] = 0;
        this.updateUniform(bb, Tb._TempBuffer, 8)
      }
      _updateFloatForEffect(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(bb + Ub, ab)
      }
      _updateFloatForUniform(bb, ab) {
        Tb._TempBuffer[0] = ab, this.updateUniform(bb, Tb._TempBuffer, 1)
      }
      _updateFloat2ForEffect(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(bb + Ab, ab, Ub)
      }
      _updateFloat2ForUniform(bb, ab, Ub) {
        Tb._TempBuffer[0] = ab, Tb._TempBuffer[1] = Ub, this.updateUniform(bb, Tb._TempBuffer, 2)
      }
      _updateFloat3ForEffect(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(bb + Mb, ab, Ub, Ab)
      }
      _updateFloat3ForUniform(bb, ab, Ub, Ab) {
        Tb._TempBuffer[0] = ab, Tb._TempBuffer[1] = Ub, Tb._TempBuffer[2] = Ab, this.updateUniform(bb, Tb._TempBuffer, 3)
      }
      _updateFloat4ForEffect(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(bb + Tb, ab, Ub, Ab, Mb)
      }
      _updateFloat4ForUniform(bb, ab, Ub, Ab, Mb) {
        Tb._TempBuffer[0] = ab, Tb._TempBuffer[1] = Ub, Tb._TempBuffer[2] = Ab, Tb._TempBuffer[3] = Mb, this.updateUniform(bb, Tb._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[bb]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(bb + Ub, ab);
            break;
          case 3:
            this._currentEffect.setFloatArray3(bb + Ub, ab);
            break;
          case 4:
            this._currentEffect.setFloatArray4(bb + Ub, ab);
            break;
          default:
            this._currentEffect.setFloatArray(bb + Ub, ab)
        }
      }
      _updateFloatArrayForUniform(bb, ab) {
        this.updateUniformArray(bb, ab, ab.length)
      }
      _updateArrayForEffect(bb, ab) {
        this._currentEffect.setArray(bb, ab)
      }
      _updateArrayForUniform(bb, ab) {
        this.updateUniformArray(bb, ab, ab.length)
      }
      _updateIntArrayForEffect(bb, ab) {
        this._currentEffect.setIntArray(bb, ab)
      }
      _updateIntArrayForUniform(bb, ab) {
        Tb._TempBufferInt32View.set(ab), this.updateUniformArray(bb, Tb._TempBuffer, ab.length)
      }
      _updateUIntArrayForEffect(bb, ab) {
        this._currentEffect.setUIntArray(bb, ab)
      }
      _updateUIntArrayForUniform(bb, ab) {
        Tb._TempBufferUInt32View.set(ab), this.updateUniformArray(bb, Tb._TempBuffer, ab.length)
      }
      _updateMatrixForEffect(bb, ab) {
        this._currentEffect.setMatrix(bb, ab)
      }
      _updateMatrixForUniform(bb, ab) {
        this._cacheMatrix(bb, ab) && this.updateUniform(bb, ab.qUb(), 16)
      }
      _updateMatricesForEffect(bb, ab) {
        this._currentEffect.setMatrices(bb, ab)
      }
      _updateMatricesForUniform(bb, ab) {
        this.updateUniform(bb, ab, ab.length)
      }
      _updateVector3ForEffect(bb, ab) {
        this._currentEffect.setVector3(bb, ab)
      }
      _updateVector3ForUniform(bb, ab) {
        Tb._TempBuffer[0] = ab.x, Tb._TempBuffer[1] = ab.y, Tb._TempBuffer[2] = ab.z, this.updateUniform(bb, Tb._TempBuffer, 3)
      }
      _updateVector4ForEffect(bb, ab) {
        this._currentEffect.setVector4(bb, ab)
      }
      _updateVector4ForUniform(bb, ab) {
        Tb._TempBuffer[0] = ab.x, Tb._TempBuffer[1] = ab.y, Tb._TempBuffer[2] = ab.z, Tb._TempBuffer[3] = ab.w, this.updateUniform(bb, Tb._TempBuffer, 4)
      }
      _updateColor3ForEffect(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(bb + Ub, ab)
      }
      _updateColor3ForUniform(bb, ab) {
        Tb._TempBuffer[0] = ab.r, Tb._TempBuffer[1] = ab.g, Tb._TempBuffer[2] = ab.b, this.updateUniform(bb, Tb._TempBuffer, 3)
      }
      _updateColor4ForEffect(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(bb + Ab, ab, Ub)
      }
      _updateDirectColor4ForEffect(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(bb + Ub, ab)
      }
      _updateColor4ForUniform(bb, ab, Ub) {
        Tb._TempBuffer[0] = ab.r, Tb._TempBuffer[1] = ab.g, Tb._TempBuffer[2] = ab.b, Tb._TempBuffer[3] = Ub, this.updateUniform(bb, Tb._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(bb, ab) {
        Tb._TempBuffer[0] = ab.r, Tb._TempBuffer[1] = ab.g, Tb._TempBuffer[2] = ab.b, Tb._TempBuffer[3] = ab.a, this.updateUniform(bb, Tb._TempBuffer, 4)
      }
      _updateIntForEffect(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(bb + Ub, ab)
      }
      _updateIntForUniform(bb, ab) {
        Tb._TempBufferInt32View[0] = ab, this.updateUniform(bb, Tb._TempBuffer, 1)
      }
      _updateInt2ForEffect(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(bb + Ab, ab, Ub)
      }
      _updateInt2ForUniform(bb, ab, Ub) {
        Tb._TempBufferInt32View[0] = ab, Tb._TempBufferInt32View[1] = Ub, this.updateUniform(bb, Tb._TempBuffer, 2)
      }
      _updateInt3ForEffect(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(bb + Mb, ab, Ub, Ab)
      }
      _updateInt3ForUniform(bb, ab, Ub, Ab) {
        Tb._TempBufferInt32View[0] = ab, Tb._TempBufferInt32View[1] = Ub, Tb._TempBufferInt32View[2] = Ab, this.updateUniform(bb, Tb._TempBuffer, 3)
      }
      _updateInt4ForEffect(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(bb + Tb, ab, Ub, Ab, Mb)
      }
      _updateInt4ForUniform(bb, ab, Ub, Ab, Mb) {
        Tb._TempBufferInt32View[0] = ab, Tb._TempBufferInt32View[1] = Ub, Tb._TempBufferInt32View[2] = Ab, Tb._TempBufferInt32View[3] = Mb, this.updateUniform(bb, Tb._TempBuffer, 4)
      }
      _updateUIntForEffect(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(bb + Ub, ab)
      }
      _updateUIntForUniform(bb, ab) {
        Tb._TempBufferUInt32View[0] = ab, this.updateUniform(bb, Tb._TempBuffer, 1)
      }
      _updateUInt2ForEffect(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(bb + Ab, ab, Ub)
      }
      _updateUInt2ForUniform(bb, ab, Ub) {
        Tb._TempBufferUInt32View[0] = ab, Tb._TempBufferUInt32View[1] = Ub, this.updateUniform(bb, Tb._TempBuffer, 2)
      }
      _updateUInt3ForEffect(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(bb + Mb, ab, Ub, Ab)
      }
      _updateUInt3ForUniform(bb, ab, Ub, Ab) {
        Tb._TempBufferUInt32View[0] = ab, Tb._TempBufferUInt32View[1] = Ub, Tb._TempBufferUInt32View[2] = Ab, this.updateUniform(bb, Tb._TempBuffer, 3)
      }
      _updateUInt4ForEffect(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(bb + Tb, ab, Ub, Ab, Mb)
      }
      _updateUInt4ForUniform(bb, ab, Ub, Ab, Mb) {
        Tb._TempBufferUInt32View[0] = ab, Tb._TempBufferUInt32View[1] = Ub, Tb._TempBufferUInt32View[2] = Ab, Tb._TempBufferUInt32View[3] = Mb, this.updateUniform(bb, Tb._TempBuffer, 4)
      }
      setTexture(bb, ab) {
        this._currentEffect.setTexture(bb, ab)
      }
      setTextureArray(bb, ab) {
        this._currentEffect.setTextureArray(bb, ab)
      }
      bindTexture(bb, ab) {
        this._currentEffect._bindTexture(bb, ab)
      }
      updateUniformDirectly(bb, ab) {
        this.updateUniform(bb, ab, ab.length), this.update()
      }
      bindToEffect(bb, ab) {
        this._currentEffect = bb, this._currentEffectName = ab
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(bb) {
        if (!this._buffers) return this._buffer === bb;
        for (let ab = 0; ab < this._buffers.length; ++ab) {
          if (this._buffers[ab][0] === bb) return this._bufferIndex = ab, this._buffer = bb, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[ab][1] && (this._bufferData.set(this._buffers[ab][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(bb) {
        return void 0 !== this._uniformLocations[bb]
      }
      dispose() {
        if (this._noUBO) return;
        const bb = this._engine._uniformBuffers,
          ab = bb.indexOf(this);
        if (-1 !== ab && (bb[ab] = bb[bb.length - 1], bb.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let bb = 0; bb < this._buffers.length; ++bb) {
            const ab = this._buffers[bb][0];
            this._engine._releaseBuffer(ab)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    Tb._MAX_UNIFORM_SIZE = 256, Tb._TempBuffer = new Float32Array(Tb._MAX_UNIFORM_SIZE), Tb._TempBufferInt32View = new Int32Array(Tb._TempBuffer.buffer), Tb._TempBufferUInt32View = new Uint32Array(Tb._TempBuffer.buffer)
  },
  39027: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb
    });
    var Ab = Ub(39030);
    class Mb extends Ab.b {
      constructor(bb) {
        super(), this._buffer = bb
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39118: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Bb,
      h: () => eb
    });
    const Ab = "__bjs_serializable__",
      Mb = new WeakMap;

    function Tb(bb, ab) {
      return Object.prototype.hasOwnProperty.call(bb, ab)
    }
    const Eb = function() {
      let bb = Symbol.metadata;
      return bb || (bb = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: bb
      })), bb
    }();

    function Yb(bb) {
      return "function" === typeof bb ? bb : bb?.constructor
    }

    function Bb(bb) {
      if (!bb) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(Eb)}) polyfill must run before decorated classes are evaluated.`);
      return Tb(bb, Ab) || (bb[Ab] = {}), bb[Ab]
    }

    function eb(bb) {
      const ab = Yb(bb),
        Ub = ab ? ab[Eb] : void 0;
      if (!Ub) return {};
      const Bb = Mb.get(Ub);
      if (Bb) return Bb;
      const eb = {},
        vb = [];
      let Lb = Ub;
      for (; Lb;) vb.push(Lb), Lb = Object.getPrototypeOf(Lb);
      for (const Mb of vb)
        if (Tb(Mb, Ab)) {
          const bb = Mb[Ab];
          for (const ab in bb) eb[ab] = bb[ab]
        } return Mb.set(Ub, eb), eb
    }
  },
  39110: (bb, ab, Ub) => {
    Ub.d(ab, {
      A: () => Rb,
      D: () => Yb,
      F: () => vb,
      I: () => Lb,
      K: () => Eb,
      d: () => Db,
      e: () => Tb,
      f: () => Zb,
      j: () => Xb,
      k: () => Bb,
      n: () => jb,
      q: () => eb,
      t: () => kb,
      x: () => Pb
    });
    var Ab = Ub(39118);

    function Mb(bb, ab) {
      return (Ub, Mb) => {
        if (!Mb.metadata) return;
        const Tb = String(Mb.name),
          Eb = (0, Ab.d)(Mb.metadata);
        Eb[Tb] || (Eb[Tb] = {
          type: bb,
          sourceName: ab
        })
      }
    }

    function Tb(bb) {
      return function(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (Ub, Ab) => {
          const Mb = ab || "_" + String(Ab.name);
          return {
            init(bb) {
              return void 0 === bb && Mb in this || (this[Mb] = bb), bb
            },
            get() {
              return this[Mb]
            },
            set(ab) {
              "function" === typeof this[Mb]?.equals && this[Mb].equals(ab) || this[Mb] !== ab && (this[Mb] = ab, this[bb]())
            }
          }
        }
      }(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function Eb(bb) {
      return Mb(0, bb)
    }

    function Yb(bb) {
      return Mb(1, bb)
    }

    function Bb(bb) {
      return Mb(2, bb)
    }

    function eb(bb) {
      return Mb(3, bb)
    }

    function vb(bb) {
      return Mb(4, bb)
    }

    function Lb(bb) {
      return Mb(5, bb)
    }

    function Pb(bb) {
      return Mb(6, bb)
    }

    function Xb(bb) {
      return Mb(7, bb)
    }

    function jb(bb) {
      return Mb(8, bb)
    }

    function Rb(bb) {
      return Mb(10, bb)
    }

    function kb(bb) {
      return Mb(12, bb)
    }

    function yb(bb, ab, Ub) {
      const Ab = String(ab.name);
      let Mb = null;
      const Tb = function() {
        if (null === Mb) {
          Mb = bb, "undefined" !== typeof _native && _native[Ab] && (Mb = Ub(_native[Ab], bb));
          const Eb = this && (ab.static ? this : Object.getPrototypeOf(this));
          Eb?.[Ab] === Tb && (Eb[Ab] = Mb)
        }
        for (var Eb = arguments.length, Yb = new Array(Eb), Bb = 0; Bb < Eb; Bb++) Yb[Bb] = arguments[Bb];
        return Mb.apply(this, Yb)
      };
      return Tb
    }

    function Zb(bb, ab) {
      return yb(bb, ab, (bb => bb))
    }

    function Db(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (Ub, Ab) => {
        const Mb = ab || "_" + String(Ab.name);
        return {
          get() {
            return this[Mb]?.value
          },
          set(ab) {
            "function" === typeof this[Mb]?.value?.equals && this[Mb].value.equals(ab) || this[Mb].value !== ab && (this[Mb].value = ab, this[bb]())
          }
        }
      }
    }
    Zb.filter = function(bb) {
      return (ab, Ub) => yb(ab, Ub, ((ab, Ub) => function() {
        for (var Ab = arguments.length, Mb = new Array(Ab), Tb = 0; Tb < Ab; Tb++) Mb[Tb] = arguments[Tb];
        return bb(...Mb) ? ab(...Mb) : Ub.apply(this, Mb)
      }))
    }
  },
  39124: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => eb
    });
    var Ab = Ub(38982),
      Mb = Ub(39130),
      Tb = Ub(36593),
      Eb = Ub(36401),
      Yb = Ub(39118);
    const Bb = function(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Tb = bb();
      Mb.b && Mb.b.HasTags(ab) && Mb.b.AddTagsTo(Tb, Mb.b.GetTags(ab, !0));
      const Eb = (0, Yb.h)(Tb),
        Bb = {};
      for (const Mb in Eb) {
        const bb = Eb[Mb],
          Yb = ab[Mb],
          vb = bb.type;
        if (void 0 !== Yb && null !== Yb && ("uniqueId" !== Mb || eb.AllowLoadingUniqueId)) switch (vb) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof Yb.slice ? Tb[Mb] = Yb.slice() : Tb[Mb] = Yb;
            break;
          case 1:
            Ab.cloneTexturesOnlyOnce && Bb[Yb.uniqueId] ? Tb[Mb] = Bb[Yb.uniqueId] : (Tb[Mb] = Ub || Yb.isRenderTarget ? Yb : Yb.clone(), Bb[Yb.uniqueId] = Tb[Mb]);
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
            Tb[Mb] = Ub ? Yb : Yb.clone()
        }
      }
      return Tb
    };
    class eb {
      static AppendSerializedAnimations(bb, ab) {
        if (bb.animations) {
          ab.animations = [];
          for (let Ub = 0; Ub < bb.animations.length; Ub++) {
            const Ab = bb.animations[Ub];
            ab.animations.push(Ab.serialize())
          }
        }
      }
      static Serialize(bb, ab) {
        ab || (ab = {}), Mb.b && (ab.tags = Mb.b.GetTags(bb));
        const Ub = (0, Yb.h)(bb);
        for (const Ab in Ub) {
          const Mb = Ub[Ab],
            Tb = Mb.sourceName || Ab,
            Eb = Mb.type,
            Yb = bb[Ab];
          if (void 0 !== Yb && null !== Yb && ("uniqueId" !== Ab || eb.AllowLoadingUniqueId)) switch (Eb) {
            case 0:
              Array.isArray(Yb) ? ab[Tb] = Yb.slice() : ab[Tb] = Yb;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              ab[Tb] = Yb.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              ab[Tb] = Yb.qUb();
              break;
            case 6:
            case 11:
              ab[Tb] = Yb.id
          }
        }
        return ab
      }
      static ParseProperties(bb, ab, Ub, Ab) {
        Ab || (Ab = "");
        const Mb = (0, Yb.h)(ab);
        for (const Yb in Mb) {
          const Bb = Mb[Yb],
            vb = bb[Bb.sourceName || Yb],
            Lb = Bb.type;
          if (void 0 !== vb && null !== vb && ("uniqueId" !== Yb || eb.AllowLoadingUniqueId)) {
            const bb = ab;
            switch (Lb) {
              case 0:
                bb[Yb] = vb;
                break;
              case 1:
                Ub && (bb[Yb] = eb._TextureParser(vb, Ub, Ab));
                break;
              case 2:
                bb[Yb] = Tb.c.FromArray(vb);
                break;
              case 3:
                bb[Yb] = eb._FresnelParametersParser(vb);
                break;
              case 4:
                bb[Yb] = Eb.l.FromArray(vb);
                break;
              case 5:
                bb[Yb] = Eb.m.FromArray(vb);
                break;
              case 6:
                Ub && (bb[Yb] = Ub.getLastMeshById(vb));
                break;
              case 7:
                bb[Yb] = eb._ColorCurvesParser(vb);
                break;
              case 8:
                bb[Yb] = Tb.g.FromArray(vb);
                break;
              case 9:
                bb[Yb] = eb._ImageProcessingConfigurationParser(vb);
                break;
              case 10:
                bb[Yb] = Eb.e.FromArray(vb);
                break;
              case 11:
                Ub && (bb[Yb] = Ub.getCameraById(vb));
                break;
              case 12:
                bb[Yb] = Eb.b.FromArray(vb);
                break;
              case 13:
                bb[Yb] = Eb.o.FromArray(vb)
            }
          }
        }
      }
      static Parse(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Tb = bb();
        return Mb.b && Mb.b.AddTagsTo(Tb, ab.tags), eb.ParseProperties(ab, Tb, Ub, Ab), Tb
      }
      static Clone(bb, ab) {
        return Bb(bb, ab, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(bb, ab) {
        return Bb(bb, ab, !0)
      }
    }
    eb.AllowLoadingUniqueId = !1, eb._ImageProcessingConfigurationParser = bb => {
      throw (0, Ab.l)("ImageProcessingConfiguration")
    }, eb._FresnelParametersParser = bb => {
      throw (0, Ab.l)("FresnelParameters")
    }, eb._ColorCurvesParser = bb => {
      throw (0, Ab.l)("ColorCurves")
    }, eb._TextureParser = (bb, ab, Ub) => {
      throw (0, Ab.l)("Texture")
    }
  },
  39051: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb
    });
    var Ab = Ub(39010);
    class Mb {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = Mb.Enabled, this._lastSecValueCount++
      }
      addCount(bb, ab) {
        Mb.Enabled && (this._current += bb, this._hasCurrentValue = !0, ab && this._fetchResult())
      }
      beginMonitoring() {
        Mb.Enabled && (this._startMonitoringTime = Ab.e.Now)
      }
      endMonitoring() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!Mb.Enabled) return;
        bb && this.fetchNewFrame();
        const ab = Ab.e.Now;
        this._current = ab - this._startMonitoringTime, this._hasCurrentValue = !0, bb && this._fetchResult()
      }
      PD() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const bb = Ab.e.Now;
        bb - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = bb, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    Mb.Enabled = !0
  },
  39205: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      h: () => Ab
    });
    class Ab {
      constructor(bb) {
        this.length = 0, this.data = new Array(bb), this._id = Ab._GlobalId++
      }
      push(bb) {
        this.data[this.length++] = bb, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(bb) {
        for (let ab = 0; ab < this.length; ab++) bb(this.data[ab])
      }
      sort(bb) {
        this.data.sort(bb)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(bb) {
        if (0 !== bb.length) {
          this.length + bb.length > this.data.length && (this.data.length = 2 * (this.length + bb.length));
          for (let ab = 0; ab < bb.length; ab++) this.data[this.length++] = (bb.data || bb)[ab]
        }
      }
      indexOf(bb) {
        const ab = this.data.indexOf(bb);
        return ab >= this.length ? -1 : ab
      }
      contains(bb) {
        return -1 !== this.indexOf(bb)
      }
    }
    Ab._GlobalId = 0;
    class Mb extends Ab {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(bb) {
        super.push(bb), bb.__smartArrayFlags || (bb.__smartArrayFlags = {}), bb.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(bb) {
        return (!bb.__smartArrayFlags || bb.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(bb), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(bb) {
        if (0 !== bb.length) {
          this.length + bb.length > this.data.length && (this.data.length = 2 * (this.length + bb.length));
          for (let ab = 0; ab < bb.length; ab++) {
            const Ub = (bb.data || bb)[ab];
            this.pushNoDuplicate(Ub)
          }
        }
      }
    }
  },
  39130: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb
    });
    class Ab {
      static Eval(bb, ab) {
        return "true" === (bb = bb.match(/\([^()]*\)/g) ? bb.replace(/\([^()]*\)/g, (bb => (bb = bb.slice(1, bb.length - 1), Ab._HandleParenthesisContent(bb, ab)))) : Ab._HandleParenthesisContent(bb, ab)) || "false" !== bb && Ab.Eval(bb, ab)
      }
      static _HandleParenthesisContent(bb, ab) {
        let Ub;
        ab = ab || (bb => "true" === bb);
        const Mb = bb.split("||");
        for (const Tb in Mb)
          if (Object.prototype.hasOwnProperty.call(Mb, Tb)) {
            let bb = Ab._SimplifyNegation(Mb[Tb].trim());
            const Eb = bb.split("&&");
            if (Eb.length > 1)
              for (let Mb = 0; Mb < Eb.length; ++Mb) {
                const Tb = Ab._SimplifyNegation(Eb[Mb].trim());
                if (Ub = "true" !== Tb && "false" !== Tb ? "!" === Tb[0] ? !ab(Tb.substring(1)) : ab(Tb) : "true" === Tb, !Ub) {
                  bb = "false";
                  break
                }
              }
            if (Ub || "true" === bb) {
              Ub = !0;
              break
            }
            Ub = "true" !== bb && "false" !== bb ? "!" === bb[0] ? !ab(bb.substring(1)) : ab(bb) : "true" === bb
          } return Ub ? "true" : "false"
      }
      static _SimplifyNegation(bb) {
        return "!true" === (bb = (bb = bb.replace(/^[\s!]+/, (bb => (bb = bb.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? bb = "false" : "!false" === bb && (bb = "true"), bb
      }
    }
    class Mb {
      static EnableFor(bb) {
        bb._tags = bb._tags || {}, bb.hasTags = () => Mb.HasTags(bb), bb.addTags = ab => Mb.AddTagsTo(bb, ab), bb.removeTags = ab => Mb.RemoveTagsFrom(bb, ab), bb.matchesTagsQuery = ab => Mb.MatchesQuery(bb, ab)
      }
      static DisableFor(bb) {
        delete bb._tags, delete bb.hasTags, delete bb.addTags, delete bb.removeTags, delete bb.matchesTagsQuery
      }
      static HasTags(bb) {
        if (!bb._tags) return !1;
        const ab = bb._tags;
        for (const Ub in ab)
          if (Object.prototype.hasOwnProperty.call(ab, Ub)) return !0;
        return !1
      }
      static GetTags(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!bb._tags) return null;
        if (ab) {
          const ab = [];
          for (const Ub in bb._tags) Object.prototype.hasOwnProperty.call(bb._tags, Ub) && !0 === bb._tags[Ub] && ab.push(Ub);
          return ab.join(" ")
        }
        return bb._tags
      }
      static AddTagsTo(bb, ab) {
        if (!ab) return;
        if ("string" !== typeof ab) return;
        const Ub = ab.split(" ");
        for (const Ab of Ub) Mb._AddTagTo(bb, Ab)
      }
      static _AddTagTo(bb, ab) {
        "" !== (ab = ab.trim()) && "true" !== ab && "false" !== ab && (ab.match(/[\s]/) || ab.match(/^([!]|([|]|[&]){2})/) || (Mb.EnableFor(bb), bb._tags[ab] = !0))
      }
      static RemoveTagsFrom(bb, ab) {
        if (!Mb.HasTags(bb)) return;
        const Ub = ab.split(" ");
        for (const Ab in Ub) Mb._RemoveTagFrom(bb, Ub[Ab])
      }
      static _RemoveTagFrom(bb, ab) {
        delete bb._tags[ab]
      }
      static MatchesQuery(bb, ab) {
        return void 0 === ab || ("" === ab ? Mb.HasTags(bb) : Ab.Eval(ab, (ab => Mb.HasTags(bb) && bb._tags[ab])))
      }
    }
  },
  39247: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb
    });
    var Ab = Ub(39244),
      Mb = Ub(36431);
    class Tb {
      constructor(bb) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new Mb.b, this._scene = bb
      }
      _prepareBuffers() {
        if (this._vertexBuffers[Ab.m.PositionKind]) return;
        const bb = [];
        bb.push(1, 1), bb.push(-1, 1), bb.push(-1, -1), bb.push(1, -1), this._vertexBuffers[Ab.m.PositionKind] = new Ab.m(this._scene.vj(), bb, Ab.m.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const bb = [];
        bb.push(0), bb.push(1), bb.push(2), bb.push(0), bb.push(2), bb.push(3), this._indexBuffer = this._scene.vj().createIndexBuffer(bb)
      }
      _getActivePostProcesses(bb) {
        const ab = this._activePostProcesses;
        ab.length = 0;
        for (let Ub = 0; Ub < bb.length; Ub++) {
          const Ab = bb[Ub];
          Ab && ab.push(Ab)
        }
        return ab
      }
      _rebuild() {
        const bb = this._vertexBuffers[Ab.m.PositionKind];
        bb && (bb._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Ub = this._scene.activeCamera;
        return !!Ub && (ab = ab || this._getActivePostProcesses(Ub._postProcesses), !(!ab || 0 === ab.length || !this._scene.postProcessesEnabled) && (ab[0].activate(Ub, bb, null !== ab && void 0 !== ab), !0))
      }
      directRender(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : bb.length;
        const Yb = this._scene.vj();
        for (let Bb = 0; Bb < Eb; Bb++) {
          Bb < bb.length - 1 ? bb[Bb + 1].activate(this._scene.activeCamera || this._scene, ab?.texture) : (ab ? Yb.bindFramebuffer(ab, Ab, void 0, void 0, Ub, Mb) : Tb || Yb.restoreDefaultFramebuffer(), Yb._debugInsertMarker?.(`post process ${bb[Bb].name} output`));
          const Eb = bb[Bb],
            eb = Eb.apply();
          eb && (Eb.onBeforeRenderObservable.notifyObservers(eb), this._prepareBuffers(), Yb.bindBuffers(this._vertexBuffers, this._indexBuffer, eb), Yb.drawElementsType(0, 0, 6), Eb.onAfterRenderObservable.notifyObservers(eb))
        }
        Yb.setDepthBuffer(!0), Yb.setDepthWrite(!0)
      }
      _finalizeFrame(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Tb = this._scene.activeCamera;
        if (!Tb) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (Ab = Ab || this._getActivePostProcesses(Tb._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const Eb = this._scene.vj();
        for (let Yb = 0, Bb = Ab.length; Yb < Bb; Yb++) {
          const eb = Ab[Yb];
          if (Yb < Bb - 1 ? eb._outputTexture = Ab[Yb + 1].activate(Tb, ab?.texture) : (ab ? (Eb.bindFramebuffer(ab, Ub, void 0, void 0, Mb), eb._outputTexture = ab) : (Eb.restoreDefaultFramebuffer(), eb._outputTexture = null), Eb._debugInsertMarker?.(`post process ${Ab[Yb].name} output`)), bb) break;
          const vb = eb.apply();
          vb && (eb.onBeforeRenderObservable.notifyObservers(vb), this._prepareBuffers(), Eb.bindBuffers(this._vertexBuffers, this._indexBuffer, vb), Eb.drawElementsType(0, 0, 6), eb.onAfterRenderObservable.notifyObservers(vb))
        }
        Eb.setDepthBuffer(!0), Eb.setDepthWrite(!0), Eb.setAlphaMode(0)
      }
      dispose() {
        const bb = this._vertexBuffers[Ab.m.PositionKind];
        bb && (bb.dispose(), this._vertexBuffers[Ab.m.PositionKind] = null), this._indexBuffer && (this._scene.vj()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39259: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(39205),
      Mb = Ub(36401);
    class Tb {
      set opaqueSortCompareFn(bb) {
        this._opaqueSortCompareFn = bb || Tb.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(bb) {
        this._alphaTestSortCompareFn = bb || Tb.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(bb) {
        this._transparentSortCompareFn = bb || Tb.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = bb, this._opaqueSubMeshes = new Ab.h(256), this._transparentSubMeshes = new Ab.h(256), this._alphaTestSubMeshes = new Ab.h(256), this._depthOnlySubMeshes = new Ab.h(256), this._particleSystems = new Ab.h(256), this._spriteManagers = new Ab.h(256), this._empty = !0, this._edgesRenderers = new Ab.e(16), this.disableDepthPrePass = !1, this._scene = ab, this.opaqueSortCompareFn = Ub, this.alphaTestSortCompareFn = Mb, this.transparentSortCompareFn = Tb
      }
      render(bb, ab, Ub, Ab) {
        let Mb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Eb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Yb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Bb = arguments.length > 8 ? arguments[8] : void 0;
        if (bb) return void bb(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const eb = this._scene.vj();
        Mb && 0 !== this._depthOnlySubMeshes.length && (eb.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), eb.setColorWrite(!0)), Tb && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), Eb && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const vb = eb.getStencilBuffer();
        if (eb.setStencilBuffer(!1), ab && this._renderSprites(), Ub && this._renderParticles(Ab), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), Yb && (Bb || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (eb.setStencilBuffer(vb), Bb) Bb(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const bb = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            bb.length && this._renderTransparent(bb)
          } else this._renderTransparent(this._transparentSubMeshes);
          eb.setAlphaMode(0)
        }
        if (eb.setStencilBuffer(!1), Tb && this._edgesRenderers.length) {
          for (let bb = 0; bb < this._edgesRenderers.length; bb++) this._edgesRenderers.data[bb].render();
          eb.setAlphaMode(0)
        }
        eb.setStencilBuffer(vb)
      }
      _renderOpaqueSorted(bb) {
        Tb._RenderSorted(bb, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(bb) {
        Tb._RenderSorted(bb, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(bb) {
        Tb._RenderSorted(bb, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(bb, ab, Ub, Ab, Eb) {
        let Yb, Bb = 0;
        const eb = Ub ? Ub.globalPosition : Tb._ZeroVector;
        if (Ab && ab !== Tb.PainterSortCompare)
          for (; Bb < bb.length; Bb++) Yb = bb.data[Bb], Yb._alphaIndex = Yb.getMesh().alphaIndex, Yb._distanceToCamera = Mb.m.Distance(Yb.DH().BAb.centerWorld, eb);
        const vb = bb.length === bb.data.length ? bb.data : bb.data.slice(0, bb.length);
        ab && vb.sort(ab);
        const Lb = vb[0].getMesh().oN();
        for (Bb = 0; Bb < vb.length; Bb++) {
          if (Yb = vb[Bb], Lb._activeMeshesFrozenButKeepClipping && !Yb.isInFrustum(Lb._frustumPlanes)) continue;
          let bb = !1;
          if (Ab) {
            const ab = Yb.Rj();
            if (ab && ab.needDepthPrePass && !Eb) {
              bb = !0;
              const Ub = ab.oN().vj();
              Ub.setColorWrite(!1), Ub.setAlphaMode(0), Yb.render(!1), Ub.setColorWrite(!0)
            }
          }
          const ab = Yb._renderingMesh;
          !bb && ab._renderRunFollower(Yb, Ab) || Yb.render(Ab)
        }
      }
      static defaultTransparentSortCompare(bb, ab) {
        return bb._alphaIndex > ab._alphaIndex ? 1 : bb._alphaIndex < ab._alphaIndex ? -1 : Tb.backToFrontSortCompare(bb, ab)
      }
      static backToFrontSortCompare(bb, ab) {
        return bb._distanceToCamera < ab._distanceToCamera ? 1 : bb._distanceToCamera > ab._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(bb, ab) {
        return bb._distanceToCamera < ab._distanceToCamera ? -1 : bb._distanceToCamera > ab._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(bb, ab) {
        const Ub = bb.getMesh(),
          Ab = ab.getMesh();
        return Ub.material && Ab.material ? Ub.material.uniqueId - Ab.material.uniqueId : Ub.uniqueId - Ab.uniqueId
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
      dispatch(bb, ab, Ub) {
        void 0 === ab && (ab = bb.getMesh()), void 0 === Ub && (Ub = bb.Rj()), null !== Ub && void 0 !== Ub && (Ub.needAlphaBlendingForMesh(ab) ? this._transparentSubMeshes.push(bb) : Ub.needAlphaTestingForMesh(ab) ? (Ub.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(bb), this._alphaTestSubMeshes.push(bb)) : (Ub.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(bb), this._opaqueSubMeshes.push(bb)), ab._renderingGroup = this, ab._edgesRenderer && ab.isEnabled() && ab.isVisible && ab._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(ab._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(bb) {
        this._spriteManagers.push(bb), this._empty = !1
      }
      dispatchParticles(bb) {
        this._particleSystems.push(bb), this._empty = !1
      }
      _renderParticles(bb) {
        if (0 === this._particleSystems.length) return;
        const ab = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let Ub = 0; Ub < this._particleSystems.length; Ub++) {
          const Ab = this._particleSystems.data[Ub];
          if (0 === (ab && ab.layerMask & Ab.layerMask)) continue;
          const Mb = Ab.emitter;
          Mb.position && bb && -1 === bb.indexOf(Mb) || this._scene._activeParticles.addCount(Ab.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const bb = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let ab = 0; ab < this._spriteManagers.length; ab++) {
          const Ub = this._spriteManagers.data[ab];
          0 !== (bb && bb.layerMask & Ub.layerMask) && Ub.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    Tb._ZeroVector = Mb.m.Zero()
  },
  39256: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(39259);
    class Mb {}
    class Tb {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(bb) {
        this._disableDepthPrePass = bb;
        for (const ab of this._renderingGroups) ab.disableDepthPrePass = bb
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(bb) {
        bb !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = bb, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const bb of this._scene.meshes)
          if (bb.mD)
            for (const ab of bb.mD) ab._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const bb of this._scene.spriteManagers) bb._wasDispatched = !1;
        for (const bb of this._scene.pD) bb._wasDispatched = !1
      }
      constructor(bb) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new Mb, this._maintainStateBetweenFrames = !1, this._scene = bb;
        for (let ab = Tb.MIN_RENDERINGGROUPS; ab < Tb.MAX_RENDERINGGROUPS; ab++) this._autoClearDepthStencil[ab] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(bb) {
        const ab = bb || 0;
        return this._prepareRenderingGroup(ab), this._renderingGroups[ab]
      }
      _clearDepthStencilBuffer() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.vj().clear(null, !1, bb, ab), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(bb, ab, Ub, Ab) {
        let Mb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Eb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Yb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Bb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          eb = arguments.length > 8 ? arguments[8] : void 0,
          vb = arguments.length > 9 ? arguments[9] : void 0;
        const Lb = this._renderingGroupInfo;
        Lb.ZR = this._scene, Lb.camera = this._scene.activeCamera, Lb.renderingManager = this;
        const Pb = vb ?? this._scene.spriteManagers;
        if (Pb && Ab)
          for (let Tb = 0; Tb < Pb.length; Tb++) {
            const bb = Pb[Tb];
            this.dispatchSprites(bb)
          }
        for (let Xb = Tb.MIN_RENDERINGGROUPS; Xb < Tb.MAX_RENDERINGGROUPS; Xb++) {
          this._depthStencilBufferAlreadyCleaned = Xb === Tb.MIN_RENDERINGGROUPS;
          const vb = this._renderingGroups[Xb];
          if (!vb || vb._empty) continue;
          const Pb = 1 << Xb;
          if (Lb.renderingGroupId = Xb, this._scene.onBeforeRenderingGroupObservable.notifyObservers(Lb, Pb), Tb.AUTOCLEAR) {
            const bb = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(Xb) : this._autoClearDepthStencil[Xb];
            bb && bb.autoClear && this._clearDepthStencilBuffer(bb.depth, bb.stencil)
          }
          for (let bb = 0, ab = this._scene._beforeRenderingGroupDrawStage; bb < ab.length; bb++) {
            ab[bb].action(Xb)
          }
          vb.render(bb, Ab, Ub, ab, Mb, Eb, Yb, Bb, eb);
          for (let bb = 0, ab = this._scene._afterRenderingGroupDrawStage; bb < ab.length; bb++) {
            ab[bb].action(Xb)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(Lb, Pb)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let bb = Tb.MIN_RENDERINGGROUPS; bb < Tb.MAX_RENDERINGGROUPS; bb++) {
            const ab = this._renderingGroups[bb];
            ab && ab.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let bb = Tb.MIN_RENDERINGGROUPS; bb < Tb.MAX_RENDERINGGROUPS; bb++) {
            const ab = this._renderingGroups[bb];
            ab && ab.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let bb = Tb.MIN_RENDERINGGROUPS; bb < Tb.MAX_RENDERINGGROUPS; bb++) {
          const ab = this._renderingGroups[bb];
          ab && ab.dispose()
        }
      }
      _prepareRenderingGroup(bb) {
        void 0 === this._renderingGroups[bb] && (this._renderingGroups[bb] = new Ab.b(bb, this._scene, this._customOpaqueSortCompareFn[bb], this._customAlphaTestSortCompareFn[bb], this._customTransparentSortCompareFn[bb]), this._renderingGroups[bb].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(bb) {
        this.maintainStateBetweenFrames && bb._wasDispatched || (bb._wasDispatched = !0, this.getRenderingGroup(bb.renderingGroupId).dispatchSprites(bb))
      }
      dispatchParticles(bb) {
        this.maintainStateBetweenFrames && bb._wasDispatched || (bb._wasDispatched = !0, this.getRenderingGroup(bb.renderingGroupId).dispatchParticles(bb))
      }
      dispatch(bb, ab, Ub) {
        void 0 === ab && (ab = bb.getMesh()), this.maintainStateBetweenFrames && bb._wasDispatched || (bb._wasDispatched = !0, this.getRenderingGroup(ab.renderingGroupId).dispatch(bb, ab, Ub))
      }
      setRenderingOrder(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[bb] = ab, this._customAlphaTestSortCompareFn[bb] = Ub, this._customTransparentSortCompareFn[bb] = Ab, this._renderingGroups[bb]) {
          const ab = this._renderingGroups[bb];
          ab.opaqueSortCompareFn = this._customOpaqueSortCompareFn[bb], ab.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[bb], ab.transparentSortCompareFn = this._customTransparentSortCompareFn[bb]
        }
      }
      setRenderingAutoClearDepthStencil(bb, ab) {
        let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[bb] = {
          autoClear: ab,
          depth: Ub,
          stencil: Ab
        }
      }
      getAutoClearDepthStencilSetup(bb) {
        return this._autoClearDepthStencil[bb]
      }
    }
    Tb.MAX_RENDERINGGROUPS = 4, Tb.MIN_RENDERINGGROUPS = 0, Tb.AUTOCLEAR = !0
  },
  39013: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Ab
    });
    class Ab {
      constructor(bb) {
        this._supportBlendParametersPerTarget = bb, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(bb) {
        this.setAlphaBlend(bb)
      }
      setAlphaBlend(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[ab] !== bb && (bb ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[ab] = bb, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(bb, ab, Ub, Ab) {
        this._blendConstants[0] === bb && this._blendConstants[1] === ab && this._blendConstants[2] === Ub && this._blendConstants[3] === Ab || (this._blendConstants[0] = bb, this._blendConstants[1] = ab, this._blendConstants[2] = Ub, this._blendConstants[3] = Ab, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(bb, ab, Ub, Ab) {
        const Mb = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[Mb + 0] === bb && this._blendFunctionParameters[Mb + 1] === ab && this._blendFunctionParameters[Mb + 2] === Ub && this._blendFunctionParameters[Mb + 3] === Ab || (this._blendFunctionParameters[Mb + 0] = bb, this._blendFunctionParameters[Mb + 1] = ab, this._blendFunctionParameters[Mb + 2] = Ub, this._blendFunctionParameters[Mb + 3] = Ab, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(bb, ab) {
        const Ub = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[Ub + 0] === bb && this._blendEquationParameters[Ub + 1] === ab || (this._blendEquationParameters[Ub + 0] = bb, this._blendEquationParameters[Ub + 1] = ab, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== ab && (this._numTargets = ab, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== Ub && (this._blendDisabledTargetsMask = Ub, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (bb.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === ab || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (ab > 1 && 0 !== Ub && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & Ub) ? bb.enable(bb.BLEND) : bb.disable(bb.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (bb.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (bb.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const Ab = bb;
        if (this._isAlphaBlendDirty) {
          for (let Mb = 0; Mb < ab; Mb++) {
            const ab = Mb < this._numTargetEnabled ? Mb : 0;
            this._alphaBlend[ab] && 0 === (Ub & 1 << Mb) ? Ab.enableIndexed(bb.BLEND, Mb) : Ab.disableIndexed(bb.BLEND, Mb)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let bb = 0; bb < ab; bb++) {
            const ab = bb < this._numTargetEnabled ? 4 * bb : 0;
            Ab.blendFuncSeparateIndexed(bb, this._blendFunctionParameters[ab + 0], this._blendFunctionParameters[ab + 1], this._blendFunctionParameters[ab + 2], this._blendFunctionParameters[ab + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let bb = 0; bb < ab; bb++) {
            const ab = bb < this._numTargetEnabled ? 2 * bb : 0;
            Ab.blendEquationSeparateIndexed(bb, this._blendEquationParameters[ab + 0], this._blendEquationParameters[ab + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(bb, ab) {
        let Ub = 32774;
        switch (bb) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, ab);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, ab);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, ab);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, ab);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, ab);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, ab);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, ab);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, ab);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, ab);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, ab);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, ab);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, ab);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, ab);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, ab);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, ab);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, ab);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, ab), Ub = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, ab), Ub = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, ab);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, ab)
        }
        this.setAlphaEquationParameters(Ub, Ub, ab)
      }
    }
  },
  39285: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    class Ab {}
    Ab._IsPickingAvailable = !1
  },
  39188: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => YU,
      e: () => TU
    });
    var Ab = Ub(39195),
      Mb = Ub(38993),
      Tb = Ub(39010),
      Eb = Ub(36431),
      Yb = Ub(39205);
    class Bb {
      constructor() {
        this._count = 0, this._data = {}
      }
      EUb(bb) {
        this.clear(), bb.forEach(((bb, ab) => this.add(bb, ab)))
      }
      get(bb) {
        const ab = this._data[bb];
        if (void 0 !== ab) return ab
      }
      getOrAddWithFactory(bb, ab) {
        let Ub = this.get(bb);
        return void 0 !== Ub || (Ub = ab(bb), Ub && this.add(bb, Ub)), Ub
      }
      getOrAdd(bb, ab) {
        const Ub = this.get(bb);
        return void 0 !== Ub ? Ub : (this.add(bb, ab), ab)
      }
      contains(bb) {
        return void 0 !== this._data[bb]
      }
      add(bb, ab) {
        return void 0 === this._data[bb] && (this._data[bb] = ab, ++this._count, !0)
      }
      set(bb, ab) {
        return void 0 !== this._data[bb] && (this._data[bb] = ab, !0)
      }
      getAndRemove(bb) {
        const ab = this.get(bb);
        return void 0 !== ab ? (delete this._data[bb], --this._count, ab) : null
      }
      remove(bb) {
        return !!this.contains(bb) && (delete this._data[bb], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(bb) {
        for (const ab in this._data) {
          bb(ab, this._data[ab])
        }
      }
      first(bb) {
        for (const ab in this._data) {
          const Ub = bb(ab, this._data[ab]);
          if (Ub) return Ub
        }
        return null
      }
    }
    var eb = Ub(39130),
      vb = Ub(36401),
      Lb = Ub(39209),
      Pb = Ub(39231),
      Xb = Ub(39240);
    class jb {
      constructor(bb, ab, Ub, Ab, Mb, Tb) {
        this.source = bb, this.pointerX = ab, this.pointerY = Ub, this.meshUnderPointer = Ab, this.sourceEvent = Mb, this.additionalData = Tb
      }
      static CreateNew(bb, ab, Ub) {
        const Ab = bb.oN();
        return new jb(bb, Ab.pointerX, Ab.pointerY, Ab.meshUnderPointer || bb, ab, Ub)
      }
      static CreateNewFromSprite(bb, ab, Ub, Ab) {
        return new jb(bb, ab.pointerX, ab.pointerY, ab.meshUnderPointer, Ub, Ab)
      }
      static CreateNewFromScene(bb, ab) {
        return new jb(null, bb.pointerX, bb.pointerY, bb.meshUnderPointer, ab)
      }
      static CreateNewFromPrimitive(bb, ab, Ub, Ab) {
        return new jb(bb, ab.x, ab.y, null, Ub, Ab)
      }
    }
    var Rb = Ub(39247),
      kb = Ub(39250),
      yb = Ub(39256),
      Zb = Ub(39263),
      Db = Ub(38955),
      zb = Ub(36425),
      xb = Ub(38982),
      ib = Ub(39269);
    class fb {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const bb in fb.Triggers)
          if (Object.prototype.hasOwnProperty.call(fb.Triggers, bb)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const bb in fb.Triggers)
          if (Object.prototype.hasOwnProperty.call(fb.Triggers, bb)) {
            const ab = parseInt(bb);
            if (ab >= 1 && ab <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(bb) {
        for (const ab in fb.Triggers)
          if (Object.prototype.hasOwnProperty.call(fb.Triggers, ab)) {
            if (parseInt(ab) === bb) return !0
          } return !1
      }
    }
    fb.Triggers = {};
    var mb, pb, Nb, Wb, Hb, Ib, db, Fb = Ub(39275);
    ! function(bb) {
      bb[bb.Generic = 0] = "Generic", bb[bb.Keyboard = 1] = "Keyboard", bb[bb.Mouse = 2] = "Mouse", bb[bb.Touch = 3] = "Touch", bb[bb.DualShock = 4] = "DualShock", bb[bb.Xbox = 5] = "Xbox", bb[bb.Switch = 6] = "Switch", bb[bb.DualSense = 7] = "DualSense"
    }(mb || (mb = {})),
    function(bb) {
      bb[bb.Horizontal = 0] = "Horizontal", bb[bb.Vertical = 1] = "Vertical", bb[bb.LeftClick = 2] = "LeftClick", bb[bb.MiddleClick = 3] = "MiddleClick", bb[bb.RightClick = 4] = "RightClick", bb[bb.BrowserBack = 5] = "BrowserBack", bb[bb.BrowserForward = 6] = "BrowserForward", bb[bb.MouseWheelX = 7] = "MouseWheelX", bb[bb.MouseWheelY = 8] = "MouseWheelY", bb[bb.MouseWheelZ = 9] = "MouseWheelZ", bb[bb.Move = 12] = "Move"
    }(pb || (pb = {})),
    function(bb) {
      bb[bb.Horizontal = 0] = "Horizontal", bb[bb.Vertical = 1] = "Vertical", bb[bb.LeftClick = 2] = "LeftClick", bb[bb.MiddleClick = 3] = "MiddleClick", bb[bb.RightClick = 4] = "RightClick", bb[bb.BrowserBack = 5] = "BrowserBack", bb[bb.BrowserForward = 6] = "BrowserForward", bb[bb.MouseWheelX = 7] = "MouseWheelX", bb[bb.MouseWheelY = 8] = "MouseWheelY", bb[bb.MouseWheelZ = 9] = "MouseWheelZ", bb[bb.DeltaHorizontal = 10] = "DeltaHorizontal", bb[bb.DeltaVertical = 11] = "DeltaVertical"
    }(Nb || (Nb = {})),
    function(bb) {
      bb[bb.Cross = 0] = "Cross", bb[bb.Circle = 1] = "Circle", bb[bb.Square = 2] = "Square", bb[bb.Triangle = 3] = "Triangle", bb[bb.L1 = 4] = "L1", bb[bb.R1 = 5] = "R1", bb[bb.L2 = 6] = "L2", bb[bb.R2 = 7] = "R2", bb[bb.Share = 8] = "Share", bb[bb.Options = 9] = "Options", bb[bb.L3 = 10] = "L3", bb[bb.R3 = 11] = "R3", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.TouchPad = 17] = "TouchPad", bb[bb.LStickXAxis = 18] = "LStickXAxis", bb[bb.LStickYAxis = 19] = "LStickYAxis", bb[bb.RStickXAxis = 20] = "RStickXAxis", bb[bb.RStickYAxis = 21] = "RStickYAxis"
    }(Wb || (Wb = {})),
    function(bb) {
      bb[bb.Cross = 0] = "Cross", bb[bb.Circle = 1] = "Circle", bb[bb.Square = 2] = "Square", bb[bb.Triangle = 3] = "Triangle", bb[bb.L1 = 4] = "L1", bb[bb.R1 = 5] = "R1", bb[bb.L2 = 6] = "L2", bb[bb.R2 = 7] = "R2", bb[bb.Create = 8] = "Create", bb[bb.Options = 9] = "Options", bb[bb.L3 = 10] = "L3", bb[bb.R3 = 11] = "R3", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.TouchPad = 17] = "TouchPad", bb[bb.LStickXAxis = 18] = "LStickXAxis", bb[bb.LStickYAxis = 19] = "LStickYAxis", bb[bb.RStickXAxis = 20] = "RStickXAxis", bb[bb.RStickYAxis = 21] = "RStickYAxis"
    }(Hb || (Hb = {})),
    function(bb) {
      bb[bb.A = 0] = "A", bb[bb.B = 1] = "B", bb[bb.X = 2] = "X", bb[bb.Y = 3] = "Y", bb[bb.LB = 4] = "LB", bb[bb.RB = 5] = "RB", bb[bb.LT = 6] = "LT", bb[bb.RT = 7] = "RT", bb[bb.Back = 8] = "Back", bb[bb.Start = 9] = "Start", bb[bb.LS = 10] = "LS", bb[bb.RS = 11] = "RS", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.LStickXAxis = 17] = "LStickXAxis", bb[bb.LStickYAxis = 18] = "LStickYAxis", bb[bb.RStickXAxis = 19] = "RStickXAxis", bb[bb.RStickYAxis = 20] = "RStickYAxis"
    }(Ib || (Ib = {})),
    function(bb) {
      bb[bb.B = 0] = "B", bb[bb.A = 1] = "A", bb[bb.Y = 2] = "Y", bb[bb.X = 3] = "X", bb[bb.L = 4] = "L", bb[bb.R = 5] = "R", bb[bb.ZL = 6] = "ZL", bb[bb.ZR = 7] = "ZR", bb[bb.Minus = 8] = "Minus", bb[bb.Plus = 9] = "Plus", bb[bb.LS = 10] = "LS", bb[bb.RS = 11] = "RS", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.Capture = 17] = "Capture", bb[bb.LStickXAxis = 18] = "LStickXAxis", bb[bb.LStickYAxis = 19] = "LStickYAxis", bb[bb.RStickXAxis = 20] = "RStickXAxis", bb[bb.RStickYAxis = 21] = "RStickYAxis"
    }(db || (db = {}));
    var hb = Ub(39280);
    class Gb {
      static CreateDeviceEvent(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        switch (bb) {
          case mb.Keyboard:
            return this._CreateKeyboardEvent(Ub, Ab, Mb, Tb);
          case mb.Mouse:
            if (Ub === pb.MouseWheelX || Ub === pb.MouseWheelY || Ub === pb.MouseWheelZ) return this._CreateWheelEvent(bb, ab, Ub, Ab, Mb, Tb);
          case mb.Touch:
            return this._CreatePointerEvent(bb, ab, Ub, Ab, Mb, Tb, Eb);
          default:
            throw `Unable to generate event for device ${mb[bb]}`
        }
      }
      static _CreatePointerEvent(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        const Yb = this._CreateMouseEvent(bb, ab, Ub, Ab, Mb, Tb);
        bb === mb.Mouse ? (Yb.deviceType = mb.Mouse, Yb.pointerId = 1, Yb.pointerType = "mouse") : (Yb.deviceType = mb.Touch, Yb.pointerId = Eb ?? ab, Yb.pointerType = "touch");
        let Bb = 0;
        return Bb += Mb.pollInput(bb, ab, pb.LeftClick), Bb += 2 * Mb.pollInput(bb, ab, pb.RightClick), Bb += 4 * Mb.pollInput(bb, ab, pb.MiddleClick), Yb.buttons = Bb, Ub === pb.Move ? Yb.type = "pointermove" : Ub >= pb.LeftClick && Ub <= pb.RightClick && (Yb.type = 1 === Ab ? "pointerdown" : "pointerup", Yb.button = Ub - 2), Yb
      }
      static _CreateWheelEvent(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = this._CreateMouseEvent(bb, ab, Ub, Ab, Mb, Tb);
        switch (Eb.pointerId = 1, Eb.type = "wheel", Eb.deltaMode = hb.e.DOM_DELTA_PIXEL, Eb.deltaX = 0, Eb.deltaY = 0, Eb.deltaZ = 0, Ub) {
          case pb.MouseWheelX:
            Eb.deltaX = Ab;
            break;
          case pb.MouseWheelY:
            Eb.deltaY = Ab;
            break;
          case pb.MouseWheelZ:
            Eb.deltaZ = Ab
        }
        return Eb
      }
      static _CreateMouseEvent(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = this._CreateEvent(Tb),
          Yb = Mb.pollInput(bb, ab, pb.Horizontal),
          Bb = Mb.pollInput(bb, ab, pb.Vertical);
        return Tb ? (Eb.movementX = 0, Eb.movementY = 0, Eb.offsetX = Eb.movementX - Tb.getBoundingClientRect().x, Eb.offsetY = Eb.movementY - Tb.getBoundingClientRect().y) : (Eb.movementX = Mb.pollInput(bb, ab, 10), Eb.movementY = Mb.pollInput(bb, ab, 11), Eb.offsetX = 0, Eb.offsetY = 0), this._CheckNonCharacterKeys(Eb, Mb), Eb.clientX = Yb, Eb.clientY = Bb, Eb.x = Yb, Eb.y = Bb, Eb.deviceType = bb, Eb.deviceSlot = ab, Eb.inputIndex = Ub, Eb
      }
      static _CreateKeyboardEvent(bb, ab, Ub, Ab) {
        const Mb = this._CreateEvent(Ab);
        return this._CheckNonCharacterKeys(Mb, Ub), Mb.deviceType = mb.Keyboard, Mb.deviceSlot = 0, Mb.inputIndex = bb, Mb.type = 1 === ab ? "keydown" : "keyup", Mb.key = String.fromCharCode(bb), Mb.keyCode = bb, Mb
      }
      static _CheckNonCharacterKeys(bb, ab) {
        const Ub = ab.isDeviceAvailable(mb.Keyboard),
          Ab = Ub && 1 === ab.pollInput(mb.Keyboard, 0, 18),
          Mb = Ub && 1 === ab.pollInput(mb.Keyboard, 0, 17),
          Tb = Ub && (1 === ab.pollInput(mb.Keyboard, 0, 91) || 1 === ab.pollInput(mb.Keyboard, 0, 92) || 1 === ab.pollInput(mb.Keyboard, 0, 93)),
          Eb = Ub && 1 === ab.pollInput(mb.Keyboard, 0, 16);
        bb.altKey = Ab, bb.ctrlKey = Mb, bb.metaKey = Tb, bb.shiftKey = Eb
      }
      static _CreateEvent(bb) {
        const ab = {
          preventDefault: () => {}
        };
        return ab.target = bb, ab
      }
    }
    class Qb {
      constructor(bb, ab, Ub) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(bb, ab, ((bb, ab, Ab, Mb) => {
          const Tb = Gb.CreateDeviceEvent(bb, ab, Ab, Mb, this);
          Ub(bb, ab, Tb)
        })) : this._createDummyNativeInput()
      }
      pollInput(bb, ab, Ub) {
        return this._nativeInput.pollInput(bb, ab, Ub)
      }
      isDeviceAvailable(bb) {
        return bb === mb.Mouse || bb === mb.Touch
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
    const qb = Object.keys(pb).length / 2;
    class ub {
      constructor(bb, ab, Ub, Mb) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Ab.h.IsSafari(), this._usingMacOs = (0, Db.g)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = bb => {}, this._keyboardUpEvent = bb => {}, this._keyboardBlurEvent = bb => {}, this._pointerMoveEvent = bb => {}, this._pointerDownEvent = bb => {}, this._pointerUpEvent = bb => {}, this._pointerCancelEvent = bb => {}, this._pointerCancelTouch = bb => {}, this._pointerLeaveEvent = bb => {}, this._pointerWheelEvent = bb => {}, this._pointerBlurEvent = bb => {}, this._pointerMacOsChromeOutEvent = bb => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, Db.g)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, Db.g)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = bb => {}, this._gamepadDisconnectedEvent = bb => {}, this._eventPrefix = Ab.h.GetPointerPrefix(bb), this._engine = bb, this._onDeviceConnected = ab, this._onDeviceDisconnected = Ub, this._onInputChanged = Mb, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(bb, ab, Ub) {
        const Mb = this._inputs[bb][ab];
        if (!Mb) throw `Unable to find device ${mb[bb]}`;
        bb >= mb.DualShock && bb <= mb.DualSense && this._updateDevice(bb, ab, Ub);
        const Tb = Mb[Ub];
        if (void 0 === Tb) throw `Unable to find input ${Ub} for device ${mb[bb]} in slot ${ab}`;
        return Ub === pb.Move && Ab.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), Tb
      }
      isDeviceAvailable(bb) {
        return void 0 !== this._inputs[bb]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const bb = this?._engine.getInputElement();
        if (bb && (!this._eventsAttached || this._elementToAttachTo !== bb)) {
          if (this._disableEvents(), this._inputs)
            for (const bb of this._inputs)
              if (bb)
                for (const ab in bb) {
                  const Ub = bb[+ab];
                  if (Ub)
                    for (let bb = 0; bb < Ub.length; bb++) Ub[bb] = 0
                }
          this._elementToAttachTo = bb, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const bb = navigator.getGamepads();
          for (const ab of bb) ab && this._addGamePad(ab)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(mb.Mouse, 0, 0, 0)
      }
      _addGamePad(bb) {
        const ab = this._getGamepadDeviceType(bb.id),
          Ub = bb.index;
        this._gamepads = this._gamepads || new Array(bb.index + 1), this._registerDevice(ab, Ub, bb.buttons.length + bb.axes.length), this._gamepads[Ub] = ab
      }
      _addPointerDevice(bb, ab, Ub, Ab) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(bb, ab, qb);
        const Mb = this._inputs[bb][ab];
        Mb[0] = Ub, Mb[1] = Ab
      }
      _registerDevice(bb, ab, Ub) {
        if (void 0 === ab) throw `Unable to register device ${mb[bb]} to undefined slot.`;
        if (this._inputs[bb] || (this._inputs[bb] = {}), !this._inputs[bb][ab]) {
          const Ab = new Array(Ub);
          Ab.fill(0), this._inputs[bb][ab] = Ab, this._onDeviceConnected(bb, ab)
        }
      }
      _unregisterDevice(bb, ab) {
        this._inputs[bb][ab] && (delete this._inputs[bb][ab], this._onDeviceDisconnected(bb, ab))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = bb => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(mb.Keyboard, 0, 255));
          const ab = this._inputs[mb.Keyboard][0];
          if (ab) {
            ab[bb.keyCode] = 1;
            const Ub = bb;
            Ub.inputIndex = bb.keyCode, this._usingMacOs && bb.metaKey && "Meta" !== bb.key && (this._metaKeys.includes(bb.keyCode) || this._metaKeys.push(bb.keyCode)), this._onInputChanged(mb.Keyboard, 0, Ub)
          }
        }, this._keyboardUpEvent = bb => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(mb.Keyboard, 0, 255));
          const ab = this._inputs[mb.Keyboard][0];
          if (ab) {
            ab[bb.keyCode] = 0;
            const Ub = bb;
            if (Ub.inputIndex = bb.keyCode, this._usingMacOs && "Meta" === bb.key && this._metaKeys.length > 0) {
              for (const bb of this._metaKeys) {
                const Ub = Gb.CreateDeviceEvent(mb.Keyboard, 0, bb, 0, this, this._elementToAttachTo);
                ab[bb] = 0, this._onInputChanged(mb.Keyboard, 0, Ub)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(mb.Keyboard, 0, Ub)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const bb = this._inputs[mb.Keyboard][0];
            for (let ab = 0; ab < bb.length; ab++)
              if (0 !== bb[ab]) {
                bb[ab] = 0;
                const Ub = Gb.CreateDeviceEvent(mb.Keyboard, 0, ab, 0, this, this._elementToAttachTo);
                this._onInputChanged(mb.Keyboard, 0, Ub)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, Db.g)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let Ab = 0; Ab < this._maxTouchPoints; Ab++) this._activeTouchIds[Ab] = -1;
        this._pointerMoveEvent = bb => {
          const ab = this._getPointerType(bb);
          let Ub = ab === mb.Mouse ? 0 : this._activeTouchIds.indexOf(bb.pointerId);
          if (ab === mb.Touch && -1 === Ub) {
            if (0 === bb.buttons) return;
            const Mb = this._activeTouchIds.indexOf(-1);
            if (!(Mb >= 0)) return void Ab.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Ub = Mb, this._activeTouchIds[Mb] = bb.pointerId, this._onDeviceConnected(ab, Ub)
          }
          this._inputs[ab] || (this._inputs[ab] = {}), this._inputs[ab][Ub] || this._addPointerDevice(ab, Ub, bb.clientX, bb.clientY);
          const Mb = this._inputs[ab][Ub];
          if (Mb) {
            const Ab = bb;
            Ab.inputIndex = pb.Move, Mb[pb.Horizontal] = bb.clientX, Mb[pb.Vertical] = bb.clientY, ab === mb.Touch && 0 === Mb[pb.LeftClick] && (Mb[pb.LeftClick] = 1), void 0 === bb.pointerId && (bb.pointerId = this._mouseId), this._onInputChanged(ab, Ub, Ab), this._usingSafari || -1 === bb.button || (Ab.inputIndex = bb.button + 2, Mb[bb.button + 2] = Mb[bb.button + 2] ? 0 : 1, this._onInputChanged(ab, Ub, Ab))
          }
        }, this._pointerDownEvent = bb => {
          const ab = this._getPointerType(bb);
          let Ub = ab === mb.Mouse ? 0 : bb.pointerId;
          if (ab === mb.Touch) {
            let ab = this._activeTouchIds.indexOf(bb.pointerId);
            if (-1 === ab && (ab = this._activeTouchIds.indexOf(-1)), !(ab >= 0)) return void Ab.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Ub = ab, this._activeTouchIds[ab] = bb.pointerId
          }
          this._inputs[ab] || (this._inputs[ab] = {}), this._inputs[ab][Ub] ? ab === mb.Touch && this._onDeviceConnected(ab, Ub) : this._addPointerDevice(ab, Ub, bb.clientX, bb.clientY);
          const Mb = this._inputs[ab][Ub];
          if (Mb) {
            const Ab = Mb[pb.Horizontal],
              Eb = Mb[pb.Vertical];
            if (ab === mb.Mouse) {
              if (void 0 === bb.pointerId && (bb.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (Tb) {}
            } else if (bb.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(bb.pointerId)
            } catch (Tb) {}
            Mb[pb.Horizontal] = bb.clientX, Mb[pb.Vertical] = bb.clientY, Mb[bb.button + 2] = 1;
            const Yb = bb;
            Yb.inputIndex = bb.button + 2, this._onInputChanged(ab, Ub, Yb), Ab === bb.clientX && Eb === bb.clientY || (Yb.inputIndex = pb.Move, this._onInputChanged(ab, Ub, Yb))
          }
        }, this._pointerUpEvent = bb => {
          const ab = this._getPointerType(bb),
            Ub = ab === mb.Mouse ? 0 : this._activeTouchIds.indexOf(bb.pointerId);
          if (ab === mb.Touch) {
            if (-1 === Ub) return;
            this._activeTouchIds[Ub] = -1
          }
          const Ab = this._inputs[ab]?.[Ub];
          let Mb = bb.button,
            Tb = Ab && 0 !== Ab[Mb + 2];
          if (!Tb && this._isUsingFirefox && this._usingMacOs && Ab && (Mb = 2 === Mb ? 0 : 2, Tb = 0 !== Ab[Mb + 2]), Tb) {
            const Tb = Ab[pb.Horizontal],
              Eb = Ab[pb.Vertical];
            Ab[pb.Horizontal] = bb.clientX, Ab[pb.Vertical] = bb.clientY, Ab[Mb + 2] = 0;
            const Yb = bb;
            void 0 === bb.pointerId && (bb.pointerId = this._mouseId), Tb === bb.clientX && Eb === bb.clientY || (Yb.inputIndex = pb.Move, this._onInputChanged(ab, Ub, Yb)), Yb.inputIndex = Mb + 2, ab === mb.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : bb.pointerId && this._elementToAttachTo.hasPointerCapture?.(bb.pointerId) && this._elementToAttachTo.releasePointerCapture(bb.pointerId), this._onInputChanged(ab, Ub, Yb), ab === mb.Touch && this._onDeviceDisconnected(ab, Ub)
          }
        }, this._pointerCancelTouch = bb => {
          const ab = this._activeTouchIds.indexOf(bb);
          if (-1 === ab) return;
          this._elementToAttachTo.hasPointerCapture?.(bb) && this._elementToAttachTo.releasePointerCapture(bb), this._inputs[mb.Touch][ab][pb.LeftClick] = 0;
          const Ub = Gb.CreateDeviceEvent(mb.Touch, ab, pb.LeftClick, 0, this, this._elementToAttachTo, bb);
          this._onInputChanged(mb.Touch, ab, Ub), this._activeTouchIds[ab] = -1, this._onDeviceDisconnected(mb.Touch, ab)
        }, this._pointerCancelEvent = bb => {
          if ("mouse" === bb.pointerType) {
            const bb = this._inputs[mb.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let ab = pb.LeftClick; ab <= pb.BrowserForward; ab++)
              if (1 === bb[ab]) {
                bb[ab] = 0;
                const Ub = Gb.CreateDeviceEvent(mb.Mouse, 0, ab, 0, this, this._elementToAttachTo);
                this._onInputChanged(mb.Mouse, 0, Ub)
              }
          } else this._pointerCancelTouch(bb.pointerId)
        }, this._pointerLeaveEvent = bb => {
          "pen" === bb.pointerType && this._pointerCancelTouch(bb.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let bb = !1;
        const ab = function() {};
        try {
          const Ub = Object.defineProperty({}, "passive", {
            get: function() {
              bb = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", ab, Ub), this._elementToAttachTo.removeEventListener("test", ab, Ub)
        } catch (Ub) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(mb.Mouse)) {
            const bb = this._inputs[mb.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let ab = pb.LeftClick; ab <= pb.BrowserForward; ab++)
              if (1 === bb[ab]) {
                bb[ab] = 0;
                const Ub = Gb.CreateDeviceEvent(mb.Mouse, 0, ab, 0, this, this._elementToAttachTo);
                this._onInputChanged(mb.Mouse, 0, Ub)
              }
          }
          if (this.isDeviceAvailable(mb.Touch)) {
            const bb = this._inputs[mb.Touch];
            for (let ab = 0; ab < this._activeTouchIds.length; ab++) {
              const Ub = this._activeTouchIds[ab];
              if (this._elementToAttachTo.hasPointerCapture?.(Ub) && this._elementToAttachTo.releasePointerCapture(Ub), -1 !== Ub && 1 === bb[ab]?.[pb.LeftClick]) {
                bb[ab][pb.LeftClick] = 0;
                const Ab = Gb.CreateDeviceEvent(mb.Touch, ab, pb.LeftClick, 0, this, this._elementToAttachTo, Ub);
                this._onInputChanged(mb.Touch, ab, Ab), this._activeTouchIds[ab] = -1, this._onDeviceDisconnected(mb.Touch, ab)
              }
            }
          }
        }, this._pointerWheelEvent = bb => {
          const ab = mb.Mouse;
          this._inputs[ab] || (this._inputs[ab] = []), this._inputs[ab][0] || (this._pointerActive = !0, this._registerDevice(ab, 0, qb));
          const Ub = this._inputs[ab][0];
          if (Ub) {
            Ub[pb.MouseWheelX] = bb.deltaX || 0, Ub[pb.MouseWheelY] = bb.deltaY || bb.wheelDelta || 0, Ub[pb.MouseWheelZ] = bb.deltaZ || 0;
            const Ab = bb;
            void 0 === bb.pointerId && (bb.pointerId = this._mouseId), 0 !== Ub[pb.MouseWheelX] && (Ab.inputIndex = pb.MouseWheelX, this._onInputChanged(ab, 0, Ab)), 0 !== Ub[pb.MouseWheelY] && (Ab.inputIndex = pb.MouseWheelY, this._onInputChanged(ab, 0, Ab)), 0 !== Ub[pb.MouseWheelZ] && (Ab.inputIndex = pb.MouseWheelZ, this._onInputChanged(ab, 0, Ab))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = bb => {
          bb.buttons > 1 && this._pointerCancelEvent(bb)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!bb && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(mb.Mouse)) {
            const bb = this._inputs[mb.Mouse][0];
            bb[pb.MouseWheelX] = 0, bb[pb.MouseWheelY] = 0, bb[pb.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = bb => {
          this._addGamePad(bb.gamepad)
        }, this._gamepadDisconnectedEvent = bb => {
          if (this._gamepads) {
            const ab = this._getGamepadDeviceType(bb.gamepad.id),
              Ub = bb.gamepad.index;
            this._unregisterDevice(ab, Ub), delete this._gamepads[Ub]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(bb, ab, Ub) {
        const Ab = navigator.getGamepads()[ab];
        if (Ab && bb === this._gamepads[ab]) {
          const Mb = this._inputs[bb][ab];
          Ub >= Ab.buttons.length ? Mb[Ub] = Ab.axes[Ub - Ab.buttons.length].valueOf() : Mb[Ub] = Ab.buttons[Ub].value
        }
      }
      _getGamepadDeviceType(bb) {
        return -1 !== bb.indexOf("054c") ? -1 !== bb.indexOf("0ce6") ? mb.DualSense : mb.DualShock : -1 !== bb.indexOf("Xbox One") || -1 !== bb.search("Xbox 360") || -1 !== bb.search("xinput") || -1 !== bb.indexOf("045e") && -1 === bb.indexOf("Surface Dock") ? mb.Xbox : -1 !== bb.indexOf("057e") ? mb.Switch : mb.Generic
      }
      _getPointerType(bb) {
        let ab = mb.Mouse;
        return ("touch" === bb.pointerType || "pen" === bb.pointerType || bb.touches) && (ab = mb.Touch), ab
      }
    }
    class rb {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = ab, this.deviceSlot = Ub, this.onInputChangedObservable = new Eb.b, this._deviceInputSystem = bb
      }
      getInput(bb) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, bb)
      }
    }
    class Kb {
      constructor(bb) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = bb => {
          for (let ab = 0; ab < this._devices.length; ab++) {
            const Ub = this._devices[ab];
            for (const Ab in Ub) {
              const Ub = +Ab;
              bb._addDevice(new rb(this._deviceInputSystem, ab, Ub))
            }
          }
          this._registeredManagers.push(bb)
        }, this.unregisterManager = bb => {
          const ab = this._registeredManagers.indexOf(bb);
          ab > -1 && this._registeredManagers.splice(ab, 1)
        };
        const ab = Object.keys(mb).length / 2;
        this._devices = new Array(ab);
        const Ub = (bb, ab) => {
            this._devices[bb] || (this._devices[bb] = new Array), this._devices[bb][ab] || (this._devices[bb][ab] = ab);
            for (const Ub of this._registeredManagers) {
              const Ab = new rb(this._deviceInputSystem, bb, ab);
              Ub._addDevice(Ab)
            }
          },
          Ab = (bb, ab) => {
            this._devices[bb]?.[ab] && delete this._devices[bb][ab];
            for (const Ub of this._registeredManagers) Ub._removeDevice(bb, ab)
          },
          Mb = (bb, ab, Ub) => {
            if (Ub)
              for (const Ab of this._registeredManagers) Ab._onInputChanged(bb, ab, Ub)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new Qb(Ub, Ab, Mb) : this._deviceInputSystem = new ub(bb, Ub, Ab, Mb)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class ob {
      getDeviceSource(bb, ab) {
        if (void 0 === ab) {
          if (void 0 === this._firstDevice[bb]) return null;
          ab = this._firstDevice[bb]
        }
        return this._devices[bb] && void 0 !== this._devices[bb][ab] ? this._devices[bb][ab] : null
      }
      getDeviceSources(bb) {
        return this._devices[bb] ? this._devices[bb].filter((bb => !!bb)) : []
      }
      constructor(bb) {
        const ab = Object.keys(mb).length / 2;
        this._devices = new Array(ab), this._firstDevice = new Array(ab), this._engine = bb, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new Kb(bb)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new Eb.b((bb => {
          for (const ab of this._devices)
            if (ab)
              for (const Ub of ab) Ub && this.onDeviceConnectedObservable.notifyObserver(bb, Ub)
        })), this.onDeviceDisconnectedObservable = new Eb.b, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = bb.UW.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.UW.remove(this._onDisposeObserver)
      }
      _addDevice(bb) {
        this._devices[bb.deviceType] || (this._devices[bb.deviceType] = []), this._devices[bb.deviceType][bb.deviceSlot] || (this._devices[bb.deviceType][bb.deviceSlot] = bb, this._updateFirstDevices(bb.deviceType)), this.onDeviceConnectedObservable.notifyObservers(bb)
      }
      _removeDevice(bb, ab) {
        const Ub = this._devices[bb]?.[ab];
        this.onDeviceDisconnectedObservable.notifyObservers(Ub), this._devices[bb]?.[ab] && delete this._devices[bb][ab], this._updateFirstDevices(bb)
      }
      _onInputChanged(bb, ab, Ub) {
        this._devices[bb]?.[ab]?.onInputChangedObservable.notifyObservers(Ub)
      }
      _updateFirstDevices(bb) {
        switch (bb) {
          case mb.Keyboard:
          case mb.Mouse:
            this._firstDevice[bb] = 0;
            break;
          case mb.Touch:
          case mb.DualSense:
          case mb.DualShock:
          case mb.Xbox:
          case mb.Switch:
          case mb.Generic: {
            delete this._firstDevice[bb];
            const ab = this._devices[bb];
            if (ab)
              for (let Ub = 0; Ub < ab.length; Ub++)
                if (ab[Ub]) {
                  this._firstDevice[bb] = Ub;
                  break
                } break
          }
        }
      }
    }
    var lb = Ub(39285);
    class tb {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get Pv() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(bb) {
        this._singleClick = bb
      }
      set Pv(bb) {
        this._doubleClick = bb
      }
      set hasSwiped(bb) {
        this._hasSwiped = bb
      }
      set ignore(bb) {
        this._ignore = bb
      }
    }
    class wb {
      constructor(bb) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new vb.l(0, 0), this._previousStartingPointerPosition = new vb.l(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = bb || zb.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(bb) {
        return this._meshUnderPointerId[bb] || null
      }
      get unTranslatedPointer() {
        return new vb.l(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(bb) {
        this._pointerX = bb
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(bb) {
        this._pointerY = bb
      }
      _updatePointerPosition(bb) {
        const ab = this._scene.vj().getInputElementClientRect();
        ab && (this._pointerX = bb.clientX - ab.left, this._pointerY = bb.clientY - ab.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(bb, ab) {
        const Ub = this._scene,
          Ab = Ub.vj(),
          Mb = Ab.getInputElement();
        Mb && (Mb.tabIndex = Ab.canvasTabIndex, Ub.doNotHandleCursors || (Mb.style.cursor = Ub.defaultCursor)), this._setCursorAndPointerOverMesh(bb, ab, Ub);
        for (const Yb of Ub._pointerMoveStage) {
          bb = bb || this._pickMove(ab);
          const Ub = !!bb?.pickedMesh;
          bb = Yb.action(this._unTranslatedPointerX, this._unTranslatedPointerY, bb, Ub, Mb)
        }
        const Tb = ab.inputIndex >= pb.MouseWheelX && ab.inputIndex <= pb.MouseWheelZ ? ib.c.POINTERWHEEL : ib.c.POINTERMOVE;
        let Eb;
        Ub.onPointerMove && (bb = bb || this._pickMove(ab), Ub.onPointerMove(ab, bb, Tb)), bb ? (Eb = new ib.k(Tb, ab, bb), this._setRayOnPointerInfo(bb, ab)) : (Eb = new ib.k(Tb, ab, null, this), this._movePointerInfo = Eb), Ub.onPointerObservable.hasObservers() && Ub.onPointerObservable.notifyObservers(Eb, Tb)
      }
      _setRayOnPointerInfo(bb, ab) {
        const Ub = this._scene;
        bb && lb.b._IsPickingAvailable && (bb.ray || (bb.ray = Ub.createPickingRay(ab.offsetX, ab.offsetY, vb.b.Identity(), Ub.activeCamera)))
      }
      _addCameraPointerObserver(bb, ab) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(bb, ab)
      }
      _removeCameraPointerObserver(bb) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(bb)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(bb, ab, Ub) {
        const Ab = this._scene,
          Mb = new ib.g(Ub, ab, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return bb && (Mb.originalPickingInfo = bb, Mb.ray = bb.ray, "xr-near" === ab.pointerType && bb.originMesh && (Mb.nearInteractionPickingInfo = bb)), Ab.onPrePointerObservable.notifyObservers(Mb, Ub), !!Mb.skipOnPointerObservable
      }
      _pickMove(bb) {
        const ab = this._scene,
          Ub = ab.GP(this._unTranslatedPointerX, this._unTranslatedPointerY, ab.pointerMovePredicate, ab.pointerMoveFastCheck, ab.cameraToUseForPointers, ab.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(Ub, bb, ab), Ub
      }
      _updateMeshUnderPointer() {
        const bb = this._scene;
        if (!bb.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || bb.skipPointerMovePicking || !bb.cameraToUseForPointers && !bb.activeCamera) return;
        this._ensurePointerMovePredicate();
        const ab = this._pointerX,
          Ub = this._pointerY,
          Ab = this._unTranslatedPointerX,
          Mb = this._unTranslatedPointerY;
        for (const Tb of this._latestPointerMoveEvents.values()) this._pointerX = Tb.pointerX, this._pointerY = Tb.pointerY, this._unTranslatedPointerX = Tb.unTranslatedPointerX, this._unTranslatedPointerY = Tb.unTranslatedPointerY, this._pickMove(Tb.event);
        this._pointerX = ab, this._pointerY = Ub, this._unTranslatedPointerX = Ab, this._unTranslatedPointerY = Mb
      }
      _ensurePointerMovePredicate() {
        const bb = this._scene;
        bb.pointerMovePredicate || (bb.pointerMovePredicate = ab => (ab._isPointerMovePickable ?? ab.zR) && ab.isVisible && ab.isReady() && ab.isEnabled() && (ab.enablePointerMoveEvents || bb.constantlyUpdateMeshUnderPointer || null !== ab._getActionManagerForTrigger()) && (!bb.cameraToUseForPointers || 0 !== (bb.cameraToUseForPointers.layerMask & ab.layerMask)))
      }
      _setCursorAndPointerOverMesh(bb, ab, Ub) {
        const Ab = Ub.vj().getInputElement();
        if (bb?.pickedMesh) {
          if (this.setPointerOverMesh(bb.pickedMesh, ab.pointerId, bb, ab), !Ub.doNotHandleCursors && Ab && this._pointerOverMesh) {
            const bb = this._pointerOverMesh._getActionManagerForTrigger();
            bb && bb.hasPointerTriggers && (Ab.style.cursor = bb.hoverCursor || Ub.hoverCursor)
          }
        } else this.setPointerOverMesh(null, ab.pointerId, bb, ab)
      }
      simulatePointerMove(bb, ab) {
        const Ub = new PointerEvent("pointermove", ab);
        Ub.inputIndex = pb.Move, this._checkPrePointerObservable(bb, Ub, ib.c.POINTERMOVE) || this._processPointerMove(bb, Ub)
      }
      simulatePointerDown(bb, ab) {
        const Ub = new PointerEvent("pointerdown", ab);
        Ub.inputIndex = Ub.button + 2, this._checkPrePointerObservable(bb, Ub, ib.c.POINTERDOWN) || this._processPointerDown(bb, Ub)
      }
      _processPointerDown(bb, ab) {
        const Ub = this._scene;
        if (bb?.pickedMesh) {
          this._pickedDownMesh = bb.pickedMesh;
          const Ab = bb.pickedMesh._getActionManagerForTrigger();
          if (Ab) {
            if (Ab.hasPickTriggers) switch (Ab.processTrigger(5, new jb(bb.pickedMesh, Ub.pointerX, Ub.pointerY, bb.pickedMesh, ab, bb)), ab.button) {
              case 0:
                Ab.processTrigger(2, new jb(bb.pickedMesh, Ub.pointerX, Ub.pointerY, bb.pickedMesh, ab, bb));
                break;
              case 1:
                Ab.processTrigger(4, new jb(bb.pickedMesh, Ub.pointerX, Ub.pointerY, bb.pickedMesh, ab, bb));
                break;
              case 2:
                Ab.processTrigger(3, new jb(bb.pickedMesh, Ub.pointerX, Ub.pointerY, bb.pickedMesh, ab, bb))
            }
            Ab.hasSpecificTrigger(8) && window.setTimeout((() => {
              const bb = Ub.GP(this._unTranslatedPointerX, this._unTranslatedPointerY, (bb => bb.zR && bb.isVisible && bb.isReady() && bb.actionManager && bb.actionManager.hasSpecificTrigger(8) && bb === this._pickedDownMesh), !1, Ub.cameraToUseForPointers);
              bb?.pickedMesh && Ab && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > wb.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, Ab.processTrigger(8, jb.CreateNew(bb.pickedMesh, ab)))
            }), wb.LongPressDelay)
          }
        } else
          for (const Tb of Ub._pointerDownStage) bb = Tb.action(this._unTranslatedPointerX, this._unTranslatedPointerY, bb, ab, !1);
        let Ab;
        const Mb = ib.c.POINTERDOWN;
        bb ? (Ub.onPointerDown && Ub.onPointerDown(ab, bb, Mb), Ab = new ib.k(Mb, ab, bb), this._setRayOnPointerInfo(bb, ab)) : Ab = new ib.k(Mb, ab, null, this), Ub.onPointerObservable.hasObservers() && Ub.onPointerObservable.notifyObservers(Ab, Mb)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(bb, ab, Ub) {
        const Ab = new PointerEvent("pointerup", ab);
        Ab.inputIndex = pb.Move;
        const Mb = new tb;
        Ub ? Mb.Pv = !0 : Mb.singleClick = !0, this._checkPrePointerObservable(bb, Ab, ib.c.POINTERUP) || this._processPointerUp(bb, Ab, Mb)
      }
      _processPointerUp(bb, ab, Ub) {
        const Ab = this._scene;
        if (bb?.pickedMesh) {
          if (this._pickedUpMesh = bb.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (Ab.onPointerPick && Ab.onPointerPick(ab, bb), Ub.singleClick && !Ub.ignore && Ab.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const Ub = ib.c.POINTERPICK,
              Mb = new ib.k(Ub, ab, bb);
            this._setRayOnPointerInfo(bb, ab), Ab.onPointerObservable.notifyObservers(Mb, Ub)
          }
          const Mb = bb.pickedMesh._getActionManagerForTrigger();
          if (Mb && !Ub.ignore) {
            Mb.processTrigger(7, jb.CreateNew(bb.pickedMesh, ab, bb)), !Ub.hasSwiped && Ub.singleClick && Mb.processTrigger(1, jb.CreateNew(bb.pickedMesh, ab, bb));
            const Ab = bb.pickedMesh._getActionManagerForTrigger(6);
            Ub.Pv && Ab && Ab.processTrigger(6, jb.CreateNew(bb.pickedMesh, ab, bb))
          }
        } else if (!Ub.ignore)
          for (const Mb of Ab._pointerUpStage) bb = Mb.action(this._unTranslatedPointerX, this._unTranslatedPointerY, bb, ab, Ub.Pv);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const bb = this._pickedDownMesh._getActionManagerForTrigger(16);
          bb && bb.processTrigger(16, jb.CreateNew(this._pickedDownMesh, ab))
        }
        if (!Ub.ignore) {
          const Mb = new ib.k(ib.c.POINTERUP, ab, bb);
          if (this._setRayOnPointerInfo(bb, ab), Ab.onPointerObservable.notifyObservers(Mb, ib.c.POINTERUP), Ab.onPointerUp && Ab.onPointerUp(ab, bb, ib.c.POINTERUP), !Ub.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let Mb = 0;
            if (Ub.singleClick ? Mb = ib.c.POINTERTAP : Ub.Pv && (Mb = ib.c.POINTERDOUBLETAP), Mb) {
              const Ub = new ib.k(Mb, ab, bb);
              Ab.onPointerObservable.hasObservers() && Ab.onPointerObservable.hasSpecificMask(Mb) && Ab.onPointerObservable.notifyObservers(Ub, Mb)
            }
          }
        }
      }
      isPointerCaptured() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[bb]
      }
      attachControl() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Mb = this._scene,
          Tb = Mb.vj();
        Ab || (Ab = Tb.getInputElement()), this._alreadyAttached && this.detachControl(), Ab && (this._alreadyAttachedTo = Ab), this._deviceSourceManager = new ob(Tb), this._initActionManager = bb => {
          if (!this._meshPickProceed) {
            const ab = Mb.skipPointerUpPicking || 0 === Mb._registeredActions && !this._checkForPicking() && !Mb.onPointerUp ? null : Mb.GP(this._unTranslatedPointerX, this._unTranslatedPointerY, Mb.pointerUpPredicate, Mb.pointerUpFastCheck, Mb.cameraToUseForPointers, Mb.pointerUpTrianglePredicate);
            this._currentPickResult = ab, ab && (bb = ab.hit && ab.pickedMesh ? ab.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return bb
        }, this._delayedSimpleClick = (bb, ab, Ub) => {
          if ((Date.now() - this._previousStartingPointerTime > wb.DoubleClickDelay && !this._doubleClickOccured || bb !== this._previousButtonPressed) && (this._doubleClickOccured = !1, ab.singleClick = !0, ab.ignore = !1, this._delayedClicks[bb])) {
            const ab = this._delayedClicks[bb].evt,
              Ub = ib.c.POINTERTAP,
              Ab = new ib.k(Ub, ab, this._currentPickResult);
            Mb.onPointerObservable.hasObservers() && Mb.onPointerObservable.hasSpecificMask(Ub) && Mb.onPointerObservable.notifyObservers(Ab, Ub), this._delayedClicks[bb] = null
          }
        }, this._initClickEvent = (bb, ab, Ub, Ab) => {
          const Mb = new tb;
          this._currentPickResult = null;
          let Tb = null,
            Eb = bb.hasSpecificMask(ib.c.POINTERPICK) || ab.hasSpecificMask(ib.c.POINTERPICK) || bb.hasSpecificMask(ib.c.POINTERTAP) || ab.hasSpecificMask(ib.c.POINTERTAP) || bb.hasSpecificMask(ib.c.POINTERDOUBLETAP) || ab.hasSpecificMask(ib.c.POINTERDOUBLETAP);
          !Eb && fb && (Tb = this._initActionManager(Tb, Mb), Tb && (Eb = Tb.hasPickTriggers));
          let Yb = !1;
          if (Eb = Eb && !this._isMultiTouchGesture, Eb) {
            const Eb = Ub.button;
            if (Mb.hasSwiped = this._isPointerSwiping(), !Mb.hasSwiped) {
              let Bb = !wb.ExclusiveDoubleClickMode;
              if (Bb || (Bb = !bb.hasSpecificMask(ib.c.POINTERDOUBLETAP) && !ab.hasSpecificMask(ib.c.POINTERDOUBLETAP), Bb && !fb.HasSpecificTrigger(6) && (Tb = this._initActionManager(Tb, Mb), Tb && (Bb = !Tb.hasSpecificTrigger(6)))), Bb)(Date.now() - this._previousStartingPointerTime > wb.DoubleClickDelay || Eb !== this._previousButtonPressed) && (Mb.singleClick = !0, Ab(Mb, this._currentPickResult), Yb = !0);
              else {
                const bb = {
                  evt: Ub,
                  clickInfo: Mb,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, Eb, Mb, Ab), wb.DoubleClickDelay)
                };
                this._delayedClicks[Eb] = bb
              }
              let eb = bb.hasSpecificMask(ib.c.POINTERDOUBLETAP) || ab.hasSpecificMask(ib.c.POINTERDOUBLETAP);
              !eb && fb.HasSpecificTrigger(6) && (Tb = this._initActionManager(Tb, Mb), Tb && (eb = Tb.hasSpecificTrigger(6))), eb && (Eb === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < wb.DoubleClickDelay && !this._doubleClickOccured ? (Mb.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Eb, wb.ExclusiveDoubleClickMode ? (this._delayedClicks[Eb] && (clearTimeout(this._delayedClicks[Eb]?.timeoutId), this._delayedClicks[Eb] = null), Ab(Mb, this._previousPickResult)) : Ab(Mb, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, Mb.Pv = !0, Mb.ignore = !1, wb.ExclusiveDoubleClickMode && this._delayedClicks[Eb] && (clearTimeout(this._delayedClicks[Eb]?.timeoutId), this._delayedClicks[Eb] = null), Ab(Mb, this._currentPickResult)), Yb = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Eb))
            }
          }
          Yb || Ab(Mb, this._currentPickResult)
        }, this._onPointerMove = bb => {
          if (this._updatePointerPosition(bb), this._latestPointerMoveEvents.set(bb.pointerId, {
              event: bb,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > wb.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > wb.DragMovementThreshold), Tb.isPointerLock && Tb._verifyPointerLock(), this._checkPrePointerObservable(null, bb, bb.inputIndex >= pb.MouseWheelX && bb.inputIndex <= pb.MouseWheelZ ? ib.c.POINTERWHEEL : ib.c.POINTERMOVE)) return;
          if (!Mb.cameraToUseForPointers && !Mb.activeCamera) return;
          if (Mb.skipPointerMovePicking) return void this._processPointerMove(new Xb.e, bb);
          this._ensurePointerMovePredicate();
          const ab = Mb._registeredActions > 0 || Mb.constantlyUpdateMeshUnderPointer ? this._pickMove(bb) : null;
          this._processPointerMove(ab, bb)
        }, this._onPointerDown = bb => {
          const ab = this._activePointerIds.indexOf(-1);
          if (-1 === ab ? this._activePointerIds.push(bb.pointerId) : this._activePointerIds[ab] = bb.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, wb.ExclusiveDoubleClickMode)
            for (let Ab = 0; Ab < this._delayedClicks.length; Ab++)
              if (this._delayedClicks[Ab])
                if (bb.button === Ab) clearTimeout(this._delayedClicks[Ab]?.timeoutId);
                else {
                  const bb = this._delayedClicks[Ab].clickInfo;
                  this._doubleClickOccured = !1, bb.singleClick = !0, bb.ignore = !1;
                  const ab = this._delayedClicks[Ab].evt,
                    Ub = ib.c.POINTERTAP,
                    Tb = new ib.k(Ub, ab, this._currentPickResult);
                  Mb.onPointerObservable.hasObservers() && Mb.onPointerObservable.hasSpecificMask(Ub) && Mb.onPointerObservable.notifyObservers(Tb, Ub), this._delayedClicks[Ab] = null
                } if (this._updatePointerPosition(bb), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = bb.button), Mb.preventDefaultOnPointerDown && Ab && (bb.preventDefault(), Ab.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, bb, ib.c.POINTERDOWN)) return;
          if (!Mb.cameraToUseForPointers && !Mb.activeCamera) return;
          let Ub;
          this._pointerCaptures[bb.pointerId] = !0, Mb.pointerDownPredicate || (Mb.pointerDownPredicate = bb => bb.zR && bb.isVisible && bb.isReady() && bb.isEnabled() && (!Mb.cameraToUseForPointers || 0 !== (Mb.cameraToUseForPointers.layerMask & bb.layerMask))), this._pickedDownMesh = null, Ub = Mb.skipPointerDownPicking || 0 === Mb._registeredActions && !this._checkForPicking() && !Mb.onPointerDown ? new Xb.e : Mb.GP(this._unTranslatedPointerX, this._unTranslatedPointerY, Mb.pointerDownPredicate, Mb.pointerDownFastCheck, Mb.cameraToUseForPointers, Mb.pointerDownTrianglePredicate), this._processPointerDown(Ub, bb)
        }, this._onPointerUp = bb => {
          const ab = this._activePointerIds.indexOf(bb.pointerId); - 1 !== ab && (this._activePointerIds[ab] = -1, this._activePointerIdsCount--, "touch" === bb.pointerType && this._latestPointerMoveEvents.delete(bb.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(bb), Mb.preventDefaultOnPointerUp && Ab && (bb.preventDefault(), Ab.focus()), this._initClickEvent(Mb.onPrePointerObservable, Mb.onPointerObservable, bb, ((ab, Ub) => {
            if (Mb.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !ab.ignore)) {
              if (this._checkPrePointerObservable(null, bb, ib.c.POINTERUP)) return this._swipeButtonPressed === bb.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === bb.buttons && (this._pointerCaptures[bb.pointerId] = !1));
              ab.hasSwiped || (ab.singleClick && Mb.onPrePointerObservable.hasSpecificMask(ib.c.POINTERTAP) && this._checkPrePointerObservable(null, bb, ib.c.POINTERTAP) && (this._skipPointerTap = !0), ab.Pv && Mb.onPrePointerObservable.hasSpecificMask(ib.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, bb, ib.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[bb.pointerId] ? (0 === bb.buttons && (this._pointerCaptures[bb.pointerId] = !1), (Mb.cameraToUseForPointers || Mb.activeCamera) && (Mb.pointerUpPredicate || (Mb.pointerUpPredicate = bb => bb.zR && bb.isVisible && bb.isReady() && bb.isEnabled() && (!Mb.cameraToUseForPointers || 0 !== (Mb.cameraToUseForPointers.layerMask & bb.layerMask))), !this._meshPickProceed && (fb && fb.HasTriggers || this._checkForPicking() || Mb.onPointerUp) && this._initActionManager(null, ab), Ub || (Ub = this._currentPickResult), this._processPointerUp(Ub, bb, ab), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === bb.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === bb.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = bb => {
          const ab = Fb.b.KEYDOWN;
          if (Mb.onPreKeyboardObservable.hasObservers()) {
            const Ub = new Fb.f(ab, bb);
            if (Mb.onPreKeyboardObservable.notifyObservers(Ub, ab), Ub.skipOnKeyboardObservable) return
          }
          if (Mb.onKeyboardObservable.hasObservers()) {
            const Ub = new Fb.j(ab, bb);
            Mb.onKeyboardObservable.notifyObservers(Ub, ab)
          }
          Mb.actionManager && Mb.actionManager.processTrigger(14, jb.CreateNewFromScene(Mb, bb))
        }, this._onKeyUp = bb => {
          const ab = Fb.b.KEYUP;
          if (Mb.onPreKeyboardObservable.hasObservers()) {
            const Ub = new Fb.f(ab, bb);
            if (Mb.onPreKeyboardObservable.notifyObservers(Ub, ab), Ub.skipOnKeyboardObservable) return
          }
          if (Mb.onKeyboardObservable.hasObservers()) {
            const Ub = new Fb.j(ab, bb);
            Mb.onKeyboardObservable.notifyObservers(Ub, ab)
          }
          Mb.actionManager && Mb.actionManager.processTrigger(15, jb.CreateNewFromScene(Mb, bb))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((Ab => {
          Ab.deviceType === mb.Mouse ? Ab.onInputChangedObservable.add((Mb => {
            this._originMouseEvent = Mb, Mb.inputIndex === pb.LeftClick || Mb.inputIndex === pb.MiddleClick || Mb.inputIndex === pb.RightClick || Mb.inputIndex === pb.BrowserBack || Mb.inputIndex === pb.BrowserForward ? ab && 1 === Ab.getInput(Mb.inputIndex) ? this._onPointerDown(Mb) : bb && 0 === Ab.getInput(Mb.inputIndex) && this._onPointerUp(Mb) : Ub && (Mb.inputIndex === pb.Move ? this._onPointerMove(Mb) : Mb.inputIndex !== pb.MouseWheelX && Mb.inputIndex !== pb.MouseWheelY && Mb.inputIndex !== pb.MouseWheelZ || this._onPointerMove(Mb))
          })) : Ab.deviceType === mb.Touch ? Ab.onInputChangedObservable.add((Mb => {
            Mb.inputIndex === pb.LeftClick && (ab && 1 === Ab.getInput(Mb.inputIndex) ? (this._onPointerDown(Mb), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : bb && 0 === Ab.getInput(Mb.inputIndex) && (this._onPointerUp(Mb), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), Ub && Mb.inputIndex === pb.Move && this._onPointerMove(Mb)
          })) : Ab.deviceType === mb.Keyboard && Ab.onInputChangedObservable.add((bb => {
            "keydown" === bb.type ? this._onKeyDown(bb) : "keyup" === bb.type && this._onKeyUp(bb)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[ab] === bb && (!bb || !bb._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const Mb = this._meshUnderPointerId[ab];
        let Tb;
        Mb && (Tb = Mb._getActionManagerForTrigger(10), Tb && Tb.processTrigger(10, new jb(Mb, this._pointerX, this._pointerY, bb, Ab, {
          pointerId: ab
        }))), bb ? (this._meshUnderPointerId[ab] = bb, this._pointerOverMesh = bb, Tb = bb._getActionManagerForTrigger(9), Tb && Tb.processTrigger(9, new jb(bb, this._pointerX, this._pointerY, bb, Ab, {
          pointerId: ab,
          pickResult: Ub
        }))) : (delete this._meshUnderPointerId[ab], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: bb,
          pointerId: ab
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(bb) {
        this._pointerOverMesh === bb && (this._pointerOverMesh = null), this._pickedDownMesh === bb && (this._pickedDownMesh = null), this._pickedUpMesh === bb && (this._pickedUpMesh = null);
        for (const ab in this._meshUnderPointerId) this._meshUnderPointerId[ab] === bb && delete this._meshUnderPointerId[ab]
      }
    }
    wb.DragMovementThreshold = 10, wb.LongPressDelay = 500, wb.DoubleClickDelay = 300, wb.ExclusiveDoubleClickMode = !1;
    var sb = Ub(39051),
      gb = Ub(36593),
      Cb = Ub(37113);
    class Vb {
      static get UniqueId() {
        const bb = this._UniqueIdCounter;
        return this._UniqueIdCounter++, bb
      }
    }
    Vb._UniqueIdCounter = 1;
    var Ob = Ub(39146),
      cb = Ub(39294),
      Jb = Ub(36410);
    class nb {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var Sb, ba, aa, Ua, Aa, Ma, Ta, Ea, Ya, Ba, ea, va, La, Pa, Xa, ja, Ra, ka, ya, Za, Da, za, xa, ia, fa, ma, pa, Na, Wa, Ha, Ia, da, Fa, ha, Ga, Qa, qa, ua, ra, Ka, oa, la, ta, wa, sa, ga, Ca, Va, Oa, ca, Ja, na, Sa, bU = Ub(37989),
      aU = Ub(36447);
    const UU = new vb.o,
      AU = new vb.o;
    var MU;
    ! function(bb) {
      bb[bb.BackwardCompatible = 0] = "BackwardCompatible", bb[bb.Intermediate = 1] = "Intermediate", bb[bb.Aggressive = 2] = "Aggressive"
    }(MU || (MU = {}));
    class TU {
      static DefaultMaterialFactory(bb) {
        throw (0, xb.l)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, xb.l)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(bb) {
        bb !== this._clearColor && (this._clearColor = bb, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(bb) {
        if (bb !== this._performancePriority) {
          switch (this._performancePriority = bb, bb) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(bb)
        }
      }
      set forceWireframe(bb) {
        this._forceWireframe !== bb && (this._forceWireframe = bb, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(bb) {
        this._skipFrustumClipping !== bb && (this._skipFrustumClipping = bb)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(bb) {
        this._forcePointsCloud !== bb && (this._forcePointsCloud = bb, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(bb) {
        this._environmentTexture !== bb && (this._environmentTexture = bb, this.onEnvironmentTextureChangedObservable.notifyObservers(bb), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let bb = [];
        bb = bb.concat(this.meshes), bb = bb.concat(this.lights), bb = bb.concat(this.cameras), bb = bb.concat(this.transformNodes);
        for (const ab of this.skeletons) bb = bb.concat(ab.bones);
        return bb
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(bb) {
        this._animationPropertiesOverride = bb
      }
      set onDispose(bb) {
        this._onDisposeObserver && this.UW.remove(this._onDisposeObserver), this._onDisposeObserver = this.UW.add(bb)
      }
      set beforeRender(bb) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), bb && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(bb))
      }
      set afterRender(bb) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), bb && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(bb))
      }
      set beforeCameraRender(bb) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(bb)
      }
      set afterCameraRender(bb) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(bb)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(bb) {
        this._pointerPickingConfiguration.pointerDownPredicate = bb
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(bb) {
        this._pointerPickingConfiguration.pointerUpPredicate = bb
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(bb) {
        this._pointerPickingConfiguration.pointerMovePredicate = bb
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(bb) {
        this._pointerPickingConfiguration.pointerDownFastCheck = bb
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(bb) {
        this._pointerPickingConfiguration.pointerUpFastCheck = bb
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(bb) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = bb
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(bb) {
        this._pointerPickingConfiguration.skipPointerMovePicking = bb
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(bb) {
        this._pointerPickingConfiguration.skipPointerDownPicking = bb
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(bb) {
        this._pointerPickingConfiguration.skipPointerUpPicking = bb
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return wb.DragMovementThreshold
      }
      static set DragMovementThreshold(bb) {
        wb.DragMovementThreshold = bb
      }
      static get LongPressDelay() {
        return wb.LongPressDelay
      }
      static set LongPressDelay(bb) {
        wb.LongPressDelay = bb
      }
      static get DoubleClickDelay() {
        return wb.DoubleClickDelay
      }
      static set DoubleClickDelay(bb) {
        wb.DoubleClickDelay = bb
      }
      static get ExclusiveDoubleClickMode() {
        return wb.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(bb) {
        wb.ExclusiveDoubleClickMode = bb
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? vb.m.ZeroReadOnly
      }
      bindEyePosition(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ab = this._eyePosition,
          Mb = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          Tb = this.floatingOriginOffset,
          Eb = UU.set(Ab.x, Ab.y, Ab.z, Mb ? -1 : 1),
          Yb = Eb.subtractFromFloatsToRef(Tb.x, Tb.y, Tb.z, 0, AU);
        return bb && (Ub ? bb.setFloat3(ab, Yb.x, Yb.y, Yb.z) : bb.setVector4(ab, Yb)), Eb
      }
      finalizeSceneUbo() {
        const bb = this.getSceneUniformBuffer(),
          ab = this.bindEyePosition(null),
          Ub = this.floatingOriginOffset;
        return bb.updateFloat4("vEyePosition", ab.x - Ub.x, ab.y - Ub.y, ab.z - Ub.z, ab.w), bb.update(), bb
      }
      set useRightHandedSystem(bb) {
        this._useRightHandedSystem !== bb && (this._useRightHandedSystem = bb, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(bb) {
        this._currentStepId = bb
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(bb) {
        this._fogEnabled !== bb && (this._fogEnabled = bb, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(bb) {
        this._fogMode !== bb && (this._fogMode = bb, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(bb) {
        this._shadowsEnabled !== bb && (this._shadowsEnabled = bb, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(bb) {
        this._lightsEnabled !== bb && (this._lightsEnabled = bb, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(bb) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), bb && (this._unObserveActiveCameras = (0, Jb.i)(bb, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = bb
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(bb) {
        bb !== this._activeCamera && (this._activeCamera = bb, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return TU.DefaultMaterialFactory !== TU._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = TU.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(bb) {
        this._defaultMaterial = bb
      }
      set texturesEnabled(bb) {
        this._texturesEnabled !== bb && (this._texturesEnabled = bb, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(bb) {
        if (this._frameGraph) return this._frameGraph = bb, void(bb || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = bb, bb && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(bb) {
        this._skeletonsEnabled !== bb && (this._skeletonsEnabled = bb, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = TU.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const bb of this._transientComponents) bb.register();
          this._transientComponents.length = 0
        }
      }
      iUb(bb) {
        this._components.push(bb), this._transientComponents.push(bb);
        const ab = bb;
        ab.addFromContainer && ab.serialize && this._serializableComponents.push(ab)
      }
      _getComponent(bb) {
        for (const ab of this._components)
          if (ab.name === bb) return ab;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(bb, ab) {
        this._inputManager = new wb(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new gb.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new Eb.b, this.ambientColor = new gb.c(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new Eb.b, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.pD = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.UW = new Eb.b, this._onDisposeObserver = null, this.onBeforeRenderObservable = new Eb.b, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new Eb.b, this.onAfterRenderCameraObservable = new Eb.b, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new Eb.b, this.onAfterAnimationsObservable = new Eb.b, this.onBeforeDrawPhaseObservable = new Eb.b, this.onAfterDrawPhaseObservable = new Eb.b, this.onReadyObservable = new Eb.b, this.onBeforeCameraRenderObservable = new Eb.b, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new Eb.b, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new Eb.b, this.onAfterActiveMeshesEvaluationObservable = new Eb.b, this.onBeforeParticlesRenderingObservable = new Eb.b, this.onAfterParticlesRenderingObservable = new Eb.b, this.onDataLoadedObservable = new Eb.b, this.onNewCameraAddedObservable = new Eb.b, this.onCameraRemovedObservable = new Eb.b, this.onNewLightAddedObservable = new Eb.b, this.onLightRemovedObservable = new Eb.b, this.onNewGeometryAddedObservable = new Eb.b, this.onGeometryRemovedObservable = new Eb.b, this.onNewTransformNodeAddedObservable = new Eb.b, this.onTransformNodeRemovedObservable = new Eb.b, this.onNewMeshAddedObservable = new Eb.b, this.onMeshRemovedObservable = new Eb.b, this.onNewSkeletonAddedObservable = new Eb.b, this.onSkeletonRemovedObservable = new Eb.b, this.onNewParticleSystemAddedObservable = new Eb.b, this.onParticleSystemRemovedObservable = new Eb.b, this.onNewAnimationGroupAddedObservable = new Eb.b, this.onAnimationGroupRemovedObservable = new Eb.b, this.onNewMaterialAddedObservable = new Eb.b, this.onNewMultiMaterialAddedObservable = new Eb.b, this.onMaterialRemovedObservable = new Eb.b, this.onMultiMaterialRemovedObservable = new Eb.b, this.onNewTextureAddedObservable = new Eb.b, this.onTextureRemovedObservable = new Eb.b, this.onNewFrameGraphAddedObservable = new Eb.b, this.onFrameGraphRemovedObservable = new Eb.b, this.onNewObjectRendererAddedObservable = new Eb.b, this.onObjectRendererRemovedObservable = new Eb.b, this.onNewPostProcessAddedObservable = new Eb.b, this.onPostProcessRemovedObservable = new Eb.b, this.onNewEffectLayerAddedObservable = new Eb.b, this.onEffectLayerRemovedObservable = new Eb.b, this.onBeforeRenderTargetsRenderObservable = new Eb.b, this.onAfterRenderTargetsRenderObservable = new Eb.b, this.onBeforeStepObservable = new Eb.b, this.onAfterStepObservable = new Eb.b, this.onActiveCameraChanged = new Eb.b, this.onActiveCamerasChanged = new Eb.b, this.onBeforeRenderingGroupObservable = new Eb.b, this.onAfterRenderingGroupObservable = new Eb.b, this.onMeshImportedObservable = new Eb.b, this.onAnimationFileImportedObservable = new Eb.b, this.onEnvironmentTextureChangedObservable = new Eb.b, this.onMeshUnderPointerUpdatedObservable = new Eb.b, this._registeredForLateAnimationBindings = new Yb.e(256), this._pointerPickingConfiguration = new nb, this.onPrePointerObservable = new Eb.b, this.onPointerObservable = new Eb.b, this.onPreKeyboardObservable = new Eb.b, this.onKeyboardObservable = new Eb.b, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = TU.FOGMODE_NONE, this.fogColor = new gb.c(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.ZF = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new vb.m(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new Yb.e(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new sb.e, this._activeIndices = new sb.e, this._activeParticles = new sb.e, this._activeBones = new sb.e, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new Yb.h(256), this._processedMaterials = new Yb.h(256), this._renderTargets = new Yb.e(256), this._materialsRenderTargets = new Yb.e(256), this._activeParticleSystems = new Yb.h(256), this._activeSkeletons = new Yb.e(32), this._softwareSkinnedMeshes = new Yb.e(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = vb.b.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = Zb.f.Create(), this._beforeClearStage = Zb.f.Create(), this._beforeRenderTargetClearStage = Zb.f.Create(), this._gatherRenderTargetsStage = Zb.f.Create(), this._gatherActiveCameraRenderTargetsStage = Zb.f.Create(), this._isReadyForMeshStage = Zb.f.Create(), this._beforeEvaluateActiveMeshStage = Zb.f.Create(), this._evaluateSubMeshStage = Zb.f.Create(), this._preActiveMeshStage = Zb.f.Create(), this._cameraDrawRenderTargetStage = Zb.f.Create(), this._beforeCameraDrawStage = Zb.f.Create(), this._beforeRenderTargetDrawStage = Zb.f.Create(), this._beforeRenderingGroupDrawStage = Zb.f.Create(), this._beforeRenderingMeshStage = Zb.f.Create(), this._afterRenderingMeshStage = Zb.f.Create(), this._afterRenderingGroupDrawStage = Zb.f.Create(), this._afterCameraDrawStage = Zb.f.Create(), this._afterCameraPostProcessStage = Zb.f.Create(), this._afterRenderTargetDrawStage = Zb.f.Create(), this._afterRenderTargetPostProcessStage = Zb.f.Create(), this._afterRenderStage = Zb.f.Create(), this._pointerMoveStage = Zb.f.Create(), this._pointerDownStage = Zb.f.Create(), this._pointerUpStage = Zb.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new Eb.b, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const Ub = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...ab
        };
        this.defaultCameraLayerMask = Ub.defaultCameraLayerMask, this.defaultRenderableLayerMask = Ub.defaultRenderableLayerMask, bb = this._engine = bb || zb.d.LastCreatedEngine, Ub.virtual ? bb._virtualScenes.push(this) : (zb.d._LastCreatedScene = this, bb.scenes.push(this)), (bb.getCreationOptions().useLargeWorldRendering || ab?.useFloatingOrigin) && ((0, kb.f)(), this._floatingOriginScene = this, kb.d.oN = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new yb.b(this), Rb.c && (this.postProcessManager = new Rb.c(this)), (0, Db.k)() && this.attachControl(), this._createUbo(), Lb.d && (this._imageProcessingConfiguration = new Lb.d), this.setDefaultCandidateProviders(), Ub.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = Ub.useMaterialMeshMap, this.useClonedMeshMap = Ub.useClonedMeshMap, ab && ab.virtual || bb.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(bb) {
        return this._defaultSubMeshCandidates.data = bb.mD, this._defaultSubMeshCandidates.length = bb.mD.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = bb => this._getDefaultSubMeshCandidates(bb), this.getIntersectingSubMeshCandidates = (bb, ab) => this._getDefaultSubMeshCandidates(bb), this.getCollidingSubMeshCandidates = (bb, ab) => this._getDefaultSubMeshCandidates(bb)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(bb) {
        this._inputManager.pointerX = bb
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(bb) {
        this._inputManager.pointerY = bb
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
      isCachedMaterialInvalid(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== ab || this._cachedMaterial !== bb || this._cachedVisibility !== Ub
      }
      vj() {
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
      simulatePointerMove(bb, ab) {
        return this._inputManager.simulatePointerMove(bb, ab), this
      }
      simulatePointerDown(bb, ab) {
        return this._inputManager.simulatePointerDown(bb, ab), this
      }
      simulatePointerUp(bb, ab, Ub) {
        return this._inputManager.simulatePointerUp(bb, ab, Ub), this
      }
      isPointerCaptured() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(bb)
      }
      attachControl() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(bb, ab, Ub)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let bb, ab = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const Ub = this.vj(),
          Ab = Ub.currentRenderPassId;
        Ub.currentRenderPassId = this.activeCamera?.renderPassId ?? Ab;
        let Mb = !0;
        for (this._pendingData.length > 0 && (Mb = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && Mb && (Mb = this.depthPeelingRenderer.isReady()), ab && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), bb = 0; bb < this.meshes.length; bb++) {
          const Ab = this.meshes[bb];
          if (!Ab.mD || 0 === Ab.mD.length) continue;
          if (!Ab.isReady(!0)) {
            Mb = !1;
            continue
          }
          const Tb = Ab.hasThinInstances || "InstancedMesh" === Ab.getClassName() || "InstancedLinesMesh" === Ab.getClassName() || Ub.getCaps().instancedArrays && Ab.instances.length > 0;
          for (let bb = 0, ab = this._isReadyForMeshStage; bb < ab.length; bb++) {
            ab[bb].action(Ab, Tb) || (Mb = !1)
          }
          if (!ab) continue;
          const Eb = Ab.material || this.defaultMaterial;
          if (Eb)
            if (Eb._storeEffectOnSubMeshes)
              for (const bb of Ab.mD) {
                const ab = bb.Rj();
                ab && ab.hasRenderTargetTextures && null != ab.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(ab) && (this._processedMaterials.push(ab), this._materialsRenderTargets.concatWithNoDuplicate(ab.getRenderTargetTextures()))
              } else Eb.hasRenderTargetTextures && null != Eb.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Eb) && (this._processedMaterials.push(Eb), this._materialsRenderTargets.concatWithNoDuplicate(Eb.getRenderTargetTextures()))
        }
        if (ab) {
          for (bb = 0; bb < this._materialsRenderTargets.length; ++bb) {
            this._materialsRenderTargets.data[bb].isReadyForRendering() || (Mb = !1)
          }
          for (bb = 0; bb < this.customRenderTargets.length; ++bb) {
            this.customRenderTargets[bb].isReadyForRendering() || (Mb = !1)
          }
        }
        for (bb = 0; bb < this.geometries.length; bb++) {
          2 === this.geometries[bb].delayLoadState && (Mb = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const Tb of this.activeCameras) Tb.isReady(!0) || (Mb = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (Mb = !1));
        for (const Tb of this.pD) Tb.isReady() || (Mb = !1);
        if (this.proceduralTexturesEnabled)
          for (const Tb of this.proceduralTextures) Tb.isReady() || (Mb = !1);
        if (this.layers)
          for (const Tb of this.layers) Tb.isReady() || (Mb = !1);
        if (this.effectLayers)
          for (const Tb of this.effectLayers) Tb.isLayerReady() || (Mb = !1);
        for (const Tb of this._isReadyChecks) Tb.isReady() || (Mb = !1);
        return Ub.areAllEffectsReady() || (Mb = !1), Ub.currentRenderPassId = Ab, Mb
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(bb) {
        this.onBeforeRenderObservable.add(bb)
      }
      unregisterBeforeRender(bb) {
        this.onBeforeRenderObservable.removeCallback(bb)
      }
      registerAfterRender(bb) {
        this.onAfterRenderObservable.add(bb)
      }
      unregisterAfterRender(bb) {
        this.onAfterRenderObservable.removeCallback(bb)
      }
      _executeOnceBeforeRender(bb) {
        const ab = () => {
          bb(), setTimeout((() => {
            this.unregisterBeforeRender(ab)
          }))
        };
        this.registerBeforeRender(ab)
      }
      executeOnceBeforeRender(bb, ab) {
        void 0 !== ab ? setTimeout((() => {
          this._executeOnceBeforeRender(bb)
        }), ab) : this._executeOnceBeforeRender(bb)
      }
      addPendingData(bb) {
        this._pendingData.push(bb)
      }
      removePendingData(bb) {
        const ab = this.isLoading,
          Ub = this._pendingData.indexOf(bb); - 1 !== Ub && this._pendingData.splice(Ub, 1), ab && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(bb) {
        -1 === this._isReadyChecks.indexOf(bb) && this._isReadyChecks.push(bb)
      }
      removeIsReadyCheck(bb) {
        const ab = this._isReadyChecks.indexOf(bb); - 1 !== ab && this._isReadyChecks.splice(ab, 1)
      }
      executeWhenReady(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(bb), null === this._executeWhenReadyTimeoutId && this._checkIsReady(ab)
      }
      async whenReadyAsync() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((ab => {
          this.executeWhenReady((() => {
            ab()
          }), bb)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = Tb.e.Now;
        else if (this.onReadyTimeoutDuration > 0 && Tb.e.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(bb)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(bb)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = Tb.e.Now
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
      setTransformMatrix(bb, ab, Ub, Ab) {
        this._multiviewSceneUboIsActive = !!(Ub && Ab && this._multiviewSceneUbo), this._viewUpdateFlag === bb.updateFlag && this._projectionUpdateFlag === ab.updateFlag || (this._viewUpdateFlag = bb.updateFlag, this._projectionUpdateFlag = ab.updateFlag, this._viewMatrix = bb, this._projectionMatrix = ab, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new vb.b), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? Cb.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Cb.d.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(Ub, Ab) : this._sceneUbo.useUbo && (this._sceneUbo.i5("viewProjection", this._transformMatrix), this._sceneUbo.i5("view", this._viewMatrix), this._sceneUbo.i5("projection", this._projectionMatrix), this._sceneUbo.i5("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(bb, ab) {
        const Ub = "boolean" === typeof ab ? ab : ab?.trackUBOsInFrame,
          Ab = new Pb.b(this._engine, void 0, !1, bb ?? "ZR", void 0, Ub);
        return Ab.addUniform("viewProjection", 16), Ab.addUniform("view", 16), Ab.addUniform("projection", 16), Ab.addUniform("vEyePosition", 4), Ab.addUniform("inverseProjection", 16), Ab
      }
      setSceneUniformBuffer(bb) {
        this._sceneUbo = bb, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : vb.m.ZeroReadOnly
      }
      getUniqueId() {
        return Vb.UniqueId
      }
      rUb(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(bb), bb._resyncLightSources(), bb.parent || bb._addToSceneRootNodes(), Mb.c.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(bb)
          })), ab)) {
          const ab = bb.getChildMeshes();
          for (const bb of ab) this.rUb(bb)
        }
      }
      iW(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ub = this.meshes.indexOf(bb);
        if (-1 !== Ub && (this.meshes.splice(Ub, 1), bb.parent || bb._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(bb), this.onMeshRemovedObservable.notifyObservers(bb), ab) {
          const ab = bb.getChildMeshes();
          for (const bb of ab) this.iW(bb)
        }
        return Ub
      }
      addTransformNode(bb) {
        this._blockEntityCollection || bb.oN() === this && -1 !== bb._indexInSceneTransformNodesArray || (bb._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(bb), bb.parent || bb._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(bb))
      }
      removeTransformNode(bb) {
        const ab = bb._indexInSceneTransformNodesArray;
        if (-1 !== ab) {
          if (ab !== this.transformNodes.length - 1) {
            const bb = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[ab] = bb, bb._indexInSceneTransformNodesArray = ab
          }
          bb._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), bb.parent || bb._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(bb), ab
      }
      removeSkeleton(bb) {
        const ab = this.skeletons.indexOf(bb);
        return -1 !== ab && (this.skeletons.splice(ab, 1), this.onSkeletonRemovedObservable.notifyObservers(bb), this._executeActiveContainerCleanup(this._activeSkeletons)), ab
      }
      removeMorphTargetManager(bb) {
        const ab = this.morphTargetManagers.indexOf(bb);
        return -1 !== ab && this.morphTargetManagers.splice(ab, 1), ab
      }
      removeLight(bb) {
        const ab = this.lights.indexOf(bb);
        if (-1 !== ab) {
          for (const ab of this.meshes) ab._removeLightSource(bb, !1);
          this.lights.splice(ab, 1), this.sortLightsByPriority(), bb.parent || bb._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(bb)
        }
        return ab
      }
      removeCamera(bb) {
        const ab = this.cameras.indexOf(bb);
        if (-1 !== ab && (this.cameras.splice(ab, 1), bb.parent || bb._removeFromSceneRootNodes()), this.activeCameras) {
          const ab = this.activeCameras.indexOf(bb); - 1 !== ab && this.activeCameras.splice(ab, 1)
        }
        return this.activeCamera === bb && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(bb), ab
      }
      removeParticleSystem(bb) {
        const ab = this.pD.indexOf(bb);
        return -1 !== ab && (this.pD.splice(ab, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(bb), ab
      }
      removeAnimation(bb) {
        const ab = this.animations.indexOf(bb);
        return -1 !== ab && this.animations.splice(ab, 1), ab
      }
      stopAnimation(bb, ab, Ub) {}
      removeAnimationGroup(bb) {
        const ab = this.animationGroups.indexOf(bb);
        return -1 !== ab && this.animationGroups.splice(ab, 1), this.onAnimationGroupRemovedObservable.notifyObservers(bb), ab
      }
      removeMultiMaterial(bb) {
        const ab = this.multiMaterials.indexOf(bb);
        return -1 !== ab && this.multiMaterials.splice(ab, 1), this.onMultiMaterialRemovedObservable.notifyObservers(bb), ab
      }
      removeMaterial(bb) {
        const ab = bb._indexInSceneMaterialArray;
        if (-1 !== ab && ab < this.materials.length) {
          if (ab !== this.materials.length - 1) {
            const bb = this.materials[this.materials.length - 1];
            this.materials[ab] = bb, bb._indexInSceneMaterialArray = ab
          }
          bb._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(bb), ab
      }
      removeActionManager(bb) {
        const ab = this.actionManagers.indexOf(bb);
        return -1 !== ab && this.actionManagers.splice(ab, 1), ab
      }
      removeTexture(bb) {
        const ab = this.textures.indexOf(bb);
        return -1 !== ab && this.textures.splice(ab, 1), this.onTextureRemovedObservable.notifyObservers(bb), ab
      }
      removeFrameGraph(bb) {
        const ab = this.frameGraphs.indexOf(bb);
        return -1 !== ab && this.frameGraphs.splice(ab, 1), this.onFrameGraphRemovedObservable.notifyObservers(bb), ab
      }
      removeObjectRenderer(bb) {
        const ab = this.objectRenderers.indexOf(bb);
        return -1 !== ab && this.objectRenderers.splice(ab, 1), this.onObjectRendererRemovedObservable.notifyObservers(bb), ab
      }
      removePostProcess(bb) {
        const ab = this.postProcesses.indexOf(bb);
        return -1 !== ab && this.postProcesses.splice(ab, 1), this.onPostProcessRemovedObservable.notifyObservers(bb), ab
      }
      removeEffectLayer(bb) {
        const ab = this.effectLayers.indexOf(bb);
        return -1 !== ab && this.effectLayers.splice(ab, 1), this.onEffectLayerRemovedObservable.notifyObservers(bb), ab
      }
      addLight(bb) {
        if (!this._blockEntityCollection) {
          this.lights.push(bb), this.sortLightsByPriority(), bb.parent || bb._addToSceneRootNodes();
          for (const ab of this.meshes) - 1 === ab.lightSources.indexOf(bb) && (ab.lightSources.push(bb), ab._resyncLightSources());
          Mb.c.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(bb)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(cb.d.CompareLightsPriority)
      }
      addCamera(bb) {
        this._blockEntityCollection || (this.cameras.push(bb), Mb.c.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(bb)
        })), bb.parent || bb._addToSceneRootNodes())
      }
      addSkeleton(bb) {
        this._blockEntityCollection || (this.skeletons.push(bb), Mb.c.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(bb)
        })))
      }
      addParticleSystem(bb) {
        this._blockEntityCollection || (this.pD.push(bb), Mb.c.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(bb)
        })))
      }
      addAnimation(bb) {
        this._blockEntityCollection || this.animations.push(bb)
      }
      addAnimationGroup(bb) {
        this._blockEntityCollection || (this.animationGroups.push(bb), Mb.c.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(bb)
        })))
      }
      addMultiMaterial(bb) {
        this._blockEntityCollection || (this.multiMaterials.push(bb), Mb.c.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(bb)
        })))
      }
      addMaterial(bb) {
        this._blockEntityCollection || bb.oN() === this && -1 !== bb._indexInSceneMaterialArray || (bb._indexInSceneMaterialArray = this.materials.length, this.materials.push(bb), Mb.c.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(bb)
        })))
      }
      addMorphTargetManager(bb) {
        this._blockEntityCollection || this.morphTargetManagers.push(bb)
      }
      addGeometry(bb) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[bb.uniqueId] = this.geometries.length), this.geometries.push(bb))
      }
      addActionManager(bb) {
        this.actionManagers.push(bb)
      }
      addTexture(bb) {
        this._blockEntityCollection || (this.textures.push(bb), this.onNewTextureAddedObservable.notifyObservers(bb))
      }
      addFrameGraph(bb) {
        this.frameGraphs.push(bb), Mb.c.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(bb)
        }))
      }
      addObjectRenderer(bb) {
        this.objectRenderers.push(bb), Mb.c.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(bb)
        }))
      }
      addPostProcess(bb) {
        this._blockEntityCollection || (this.postProcesses.push(bb), Mb.c.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(bb)
        })))
      }
      addEffectLayer(bb) {
        this._blockEntityCollection || (this.effectLayers.push(bb), Mb.c.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(bb)
        })))
      }
      switchActiveCamera(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = bb, ab && bb.attachControl())
      }
      setActiveCameraById(bb) {
        const ab = this.getCameraById(bb);
        return ab ? (this.activeCamera = ab, ab) : null
      }
      setActiveCameraByName(bb) {
        const ab = this.getCameraByName(bb);
        return ab ? (this.activeCamera = ab, ab) : null
      }
      getAnimationGroupByName(bb) {
        for (let ab = 0; ab < this.animationGroups.length; ab++)
          if (this.animationGroups[ab].name === bb) return this.animationGroups[ab];
        return null
      }
      _getMaterial(bb, ab) {
        for (let Ub = 0; Ub < this.materials.length; Ub++) {
          const bb = this.materials[Ub];
          if (ab(bb)) return bb
        }
        if (bb)
          for (let Ub = 0; Ub < this.multiMaterials.length; Ub++) {
            const bb = this.multiMaterials[Ub];
            if (ab(bb)) return bb
          }
        return null
      }
      getMaterialByUniqueID(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(bb, ab)
      }
      getMaterialByUniqueId(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(ab, (ab => ab.uniqueId === bb))
      }
      getMaterialById(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(ab, (ab => ab.id === bb))
      }
      getMaterialByName(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(ab, (ab => ab.name === bb))
      }
      getLastMaterialById(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let Ub = this.materials.length - 1; Ub >= 0; Ub--)
          if (this.materials[Ub].id === bb) return this.materials[Ub];
        if (ab)
          for (let Ub = this.multiMaterials.length - 1; Ub >= 0; Ub--)
            if (this.multiMaterials[Ub].id === bb) return this.multiMaterials[Ub];
        return null
      }
      getTextureByUniqueId(bb) {
        for (let ab = 0; ab < this.textures.length; ab++)
          if (this.textures[ab].uniqueId === bb) return this.textures[ab];
        return null
      }
      getTextureByName(bb) {
        for (let ab = 0; ab < this.textures.length; ab++)
          if (this.textures[ab].name === bb) return this.textures[ab];
        return null
      }
      getCameraById(bb) {
        for (let ab = 0; ab < this.cameras.length; ab++)
          if (this.cameras[ab].id === bb) return this.cameras[ab];
        return null
      }
      getCameraByUniqueId(bb) {
        for (let ab = 0; ab < this.cameras.length; ab++)
          if (this.cameras[ab].uniqueId === bb) return this.cameras[ab];
        return null
      }
      getCameraByName(bb) {
        for (let ab = 0; ab < this.cameras.length; ab++)
          if (this.cameras[ab].name === bb) return this.cameras[ab];
        return null
      }
      getBoneById(bb) {
        for (let ab = 0; ab < this.skeletons.length; ab++) {
          const Ub = this.skeletons[ab];
          for (let ab = 0; ab < Ub.bones.length; ab++)
            if (Ub.bones[ab].id === bb) return Ub.bones[ab]
        }
        return null
      }
      getBoneByName(bb) {
        for (let ab = 0; ab < this.skeletons.length; ab++) {
          const Ub = this.skeletons[ab];
          for (let ab = 0; ab < Ub.bones.length; ab++)
            if (Ub.bones[ab].name === bb) return Ub.bones[ab]
        }
        return null
      }
      getLightByName(bb) {
        for (let ab = 0; ab < this.lights.length; ab++)
          if (this.lights[ab].name === bb) return this.lights[ab];
        return null
      }
      getLightById(bb) {
        for (let ab = 0; ab < this.lights.length; ab++)
          if (this.lights[ab].id === bb) return this.lights[ab];
        return null
      }
      getLightByUniqueId(bb) {
        for (let ab = 0; ab < this.lights.length; ab++)
          if (this.lights[ab].uniqueId === bb) return this.lights[ab];
        return null
      }
      getParticleSystemById(bb) {
        for (let ab = 0; ab < this.pD.length; ab++)
          if (this.pD[ab].id === bb) return this.pD[ab];
        return null
      }
      getGeometryById(bb) {
        for (let ab = 0; ab < this.geometries.length; ab++)
          if (this.geometries[ab].id === bb) return this.geometries[ab];
        return null
      }
      _getGeometryByUniqueId(bb) {
        if (this._geometriesByUniqueId) {
          const ab = this._geometriesByUniqueId[bb];
          if (void 0 !== ab) return this.geometries[ab]
        } else
          for (let ab = 0; ab < this.geometries.length; ab++)
            if (this.geometries[ab].uniqueId === bb) return this.geometries[ab];
        return null
      }
      getFrameGraphByName(bb) {
        for (let ab = 0; ab < this.frameGraphs.length; ab++)
          if (this.frameGraphs[ab].name === bb) return this.frameGraphs[ab];
        return null
      }
      pushGeometry(bb, ab) {
        return !(!ab && this._getGeometryByUniqueId(bb.uniqueId)) && (this.addGeometry(bb), Mb.c.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(bb)
        })), !0)
      }
      removeGeometry(bb) {
        let ab;
        if (this._geometriesByUniqueId) {
          if (ab = this._geometriesByUniqueId[bb.uniqueId], void 0 === ab) return !1
        } else if (ab = this.geometries.indexOf(bb), ab < 0) return !1;
        if (ab !== this.geometries.length - 1) {
          const bb = this.geometries[this.geometries.length - 1];
          bb && (this.geometries[ab] = bb, this._geometriesByUniqueId && (this._geometriesByUniqueId[bb.uniqueId] = ab))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[bb.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(bb), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(bb) {
        for (let ab = 0; ab < this.meshes.length; ab++)
          if (this.meshes[ab].id === bb) return this.meshes[ab];
        return null
      }
      getMeshesById(bb) {
        return this.meshes.filter((function(ab) {
          return ab.id === bb
        }))
      }
      getTransformNodeById(bb) {
        for (let ab = 0; ab < this.transformNodes.length; ab++)
          if (this.transformNodes[ab].id === bb) return this.transformNodes[ab];
        return null
      }
      getTransformNodeByUniqueId(bb) {
        for (let ab = 0; ab < this.transformNodes.length; ab++)
          if (this.transformNodes[ab].uniqueId === bb) return this.transformNodes[ab];
        return null
      }
      getTransformNodesById(bb) {
        return this.transformNodes.filter((function(ab) {
          return ab.id === bb
        }))
      }
      getMeshByUniqueId(bb) {
        for (let ab = 0; ab < this.meshes.length; ab++)
          if (this.meshes[ab].uniqueId === bb) return this.meshes[ab];
        return null
      }
      getLastMeshById(bb) {
        for (let ab = this.meshes.length - 1; ab >= 0; ab--)
          if (this.meshes[ab].id === bb) return this.meshes[ab];
        return null
      }
      getLastTransformNodeById(bb) {
        for (let ab = this.transformNodes.length - 1; ab >= 0; ab--)
          if (this.transformNodes[ab].id === bb) return this.transformNodes[ab];
        return null
      }
      getLastEntryById(bb) {
        let ab;
        for (ab = this.meshes.length - 1; ab >= 0; ab--)
          if (this.meshes[ab].id === bb) return this.meshes[ab];
        for (ab = this.transformNodes.length - 1; ab >= 0; ab--)
          if (this.transformNodes[ab].id === bb) return this.transformNodes[ab];
        for (ab = this.cameras.length - 1; ab >= 0; ab--)
          if (this.cameras[ab].id === bb) return this.cameras[ab];
        for (ab = this.lights.length - 1; ab >= 0; ab--)
          if (this.lights[ab].id === bb) return this.lights[ab];
        for (ab = this.skeletons.length - 1; ab >= 0; ab--) {
          const Ub = this.skeletons[ab];
          for (let ab = Ub.bones.length - 1; ab >= 0; ab--)
            if (Ub.bones[ab].id === bb) return Ub.bones[ab]
        }
        return null
      }
      getNodeById(bb) {
        const ab = this.getMeshById(bb);
        if (ab) return ab;
        const Ub = this.getTransformNodeById(bb);
        if (Ub) return Ub;
        const Ab = this.getLightById(bb);
        if (Ab) return Ab;
        const Mb = this.getCameraById(bb);
        if (Mb) return Mb;
        const Tb = this.getBoneById(bb);
        return Tb || null
      }
      getNodeByName(bb) {
        const ab = this.getMeshByName(bb);
        if (ab) return ab;
        const Ub = this.getTransformNodeByName(bb);
        if (Ub) return Ub;
        const Ab = this.getLightByName(bb);
        if (Ab) return Ab;
        const Mb = this.getCameraByName(bb);
        if (Mb) return Mb;
        const Tb = this.getBoneByName(bb);
        return Tb || null
      }
      getMeshByName(bb) {
        for (let ab = 0; ab < this.meshes.length; ab++)
          if (this.meshes[ab].name === bb) return this.meshes[ab];
        return null
      }
      getTransformNodeByName(bb) {
        for (let ab = 0; ab < this.transformNodes.length; ab++)
          if (this.transformNodes[ab].name === bb) return this.transformNodes[ab];
        return null
      }
      getLastSkeletonById(bb) {
        for (let ab = this.skeletons.length - 1; ab >= 0; ab--)
          if (this.skeletons[ab].id === bb) return this.skeletons[ab];
        return null
      }
      getSkeletonByUniqueId(bb) {
        for (let ab = 0; ab < this.skeletons.length; ab++)
          if (this.skeletons[ab].uniqueId === bb) return this.skeletons[ab];
        return null
      }
      getSkeletonById(bb) {
        for (let ab = 0; ab < this.skeletons.length; ab++)
          if (this.skeletons[ab].id === bb) return this.skeletons[ab];
        return null
      }
      getSkeletonByName(bb) {
        for (let ab = 0; ab < this.skeletons.length; ab++)
          if (this.skeletons[ab].name === bb) return this.skeletons[ab];
        return null
      }
      getMorphTargetManagerById(bb) {
        for (let ab = 0; ab < this.morphTargetManagers.length; ab++)
          if (this.morphTargetManagers[ab].uniqueId === bb) return this.morphTargetManagers[ab];
        return null
      }
      getMorphTargetById(bb) {
        for (let ab = 0; ab < this.morphTargetManagers.length; ++ab) {
          const Ub = this.morphTargetManagers[ab];
          for (let ab = 0; ab < Ub.numTargets; ++ab) {
            const Ab = Ub.getTarget(ab);
            if (Ab.id === bb) return Ab
          }
        }
        return null
      }
      getMorphTargetByName(bb) {
        for (let ab = 0; ab < this.morphTargetManagers.length; ++ab) {
          const Ub = this.morphTargetManagers[ab];
          for (let ab = 0; ab < Ub.numTargets; ++ab) {
            const Ab = Ub.getTarget(ab);
            if (Ab.name === bb) return Ab
          }
        }
        return null
      }
      getPostProcessByName(bb) {
        for (let ab = 0; ab < this.postProcesses.length; ++ab) {
          const Ub = this.postProcesses[ab];
          if (Ub.name === bb) return Ub
        }
        return null
      }
      isActiveMesh(bb) {
        return -1 !== this._activeMeshes.indexOf(bb)
      }
      get uid() {
        return this._uid || (this._uid = Ab.h.RandomId()), this._uid
      }
      addExternalData(bb, ab) {
        return this._externalData || (this._externalData = new Bb), this._externalData.add(bb, ab)
      }
      getExternalData(bb) {
        return this._externalData ? this._externalData.get(bb) : null
      }
      getOrAddExternalDataWithFactory(bb, ab) {
        return this._externalData || (this._externalData = new Bb), this._externalData.getOrAddWithFactory(bb, ab)
      }
      removeExternalData(bb) {
        return this._externalData.remove(bb)
      }
      _evaluateSubMesh(bb, ab, Ub, Ab) {
        if (Ab || bb.isInFrustum(this._frustumPlanes)) {
          for (let Ab = 0, Mb = this._evaluateSubMeshStage; Ab < Mb.length; Ab++) {
            Mb[Ab].action(ab, bb)
          }
          const Ub = bb.Rj();
          null !== Ub && void 0 !== Ub && (Ub.hasRenderTargetTextures && null != Ub.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Ub) && (this._processedMaterials.push(Ub), this._materialsRenderTargets.concatWithNoDuplicate(Ub.getRenderTargetTextures())), this._renderingManager.dispatch(bb, ab, Ub))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(bb) {
        this._preventFreeActiveMeshesAndRenderingGroups !== bb && (bb && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = bb)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let bb = 0; bb < this.activeCameras.length; bb++) {
            const ab = this.activeCameras[bb];
            ab && ab._activeMeshes && ab._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let bb = 0; bb < this.textures.length; bb++) {
            const ab = this.textures[bb];
            ab && ab.renderList && ab.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          Tb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const Eb = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const bb of Eb) bb.objectRenderer._freezeActiveMeshes(Ab);
          return this._freezeActiveMeshesCancel = (0, Mb.f)((() => {
            let bb = !0,
              ab = !0;
            for (const Ub of Eb) bb && (bb = Ub.objectRenderer._isFrozen), ab && (ab = null !== Ub.objectRenderer._freezeActiveMeshesCancel);
            if (bb) return !0;
            if (!ab) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Tb, this._skipEvaluateActiveMeshesCompletely = bb, ab?.()
          }), ((bb, ab) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), ab) {
              const ab = "Scene: Timeout while waiting for meshes to be frozen.";
              Ub ? Ub(ab) : (bU.e.Error(ab), bb && bU.e.Error(bb))
            } else {
              const ab = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              Ub ? Ub(ab) : (bU.e.Error(ab), bb && (bU.e.Error(bb), bb.stack && bU.e.Error(bb.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Tb, this._skipEvaluateActiveMeshesCompletely = bb, Ab)
              for (let bb = 0; bb < this._activeMeshes.length; bb++) this._activeMeshes.data[bb]._freeze();
            ab && ab()
          } else Ub && Ub("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let bb = 0; bb < this.meshes.length; bb++) {
          const ab = this.meshes[bb];
          ab._internalAbstractMeshDataInfo && (ab._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const bb = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const ab of bb) ab.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let bb = 0; bb < this._activeMeshes.length; bb++) this._activeMeshes.data[bb]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(bb) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => bb.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const bb = this._activeMeshes.length;
            for (let ab = 0; ab < bb; ab++) {
              this._activeMeshes.data[ab].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const bb = this._activeParticleSystems.length;
            for (let ab = 0; ab < bb; ab++) this._activeParticleSystems.data[ab].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let Mb = 0, Tb = this._beforeEvaluateActiveMeshStage; Mb < Tb.length; Mb++) {
          Tb[Mb].action()
        }
        const bb = this.getActiveMeshCandidates(),
          ab = bb.length,
          Ub = sb.e.Enabled,
          Ab = this.customLODSelector;
        for (let Mb = 0; Mb < ab; Mb++) {
          const ab = bb.data[Mb],
            Tb = !Ab && !ab.EW && !ab._internalMeshDataInfo?._LODLevels.length;
          let Eb, Yb;
          if ((Tb || (Eb = ab._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), Eb ? Eb[1] = -1 : (Eb = [ab, -1], ab._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, Eb))), !ab.isBlocked) && (Ub && this._totalVertices.addCount(ab.getTotalVertices(), !1), ab.isReady() && ab.isEnabled() && !ab.nY.hasAZeroComponent)) {
            if (ab.computeWorldMatrix(), ab.actionManager && ab.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(ab), Tb) Yb = ab;
            else if (Yb = Ab ? Ab(ab, this.activeCamera) : ab.getLOD(this.activeCamera), Eb[0] = Yb, Eb[1] = this._frameId, void 0 === Yb || null === Yb) continue;
            if (Yb !== ab && 0 !== Yb.billboardMode && Yb.computeWorldMatrix(), ab._preActivate(), ab.isVisible && ab.visibility > 0 && 0 !== (ab.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || ab.Lj || ab.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(ab), this.activeCamera._activeMeshes.push(ab), Yb !== ab && Yb._activate(this._renderId, !1);
              for (let bb = 0, Ub = this._preActiveMeshStage; bb < Ub.length; bb++) {
                Ub[bb].action(ab)
              }
              ab._activate(this._renderId, !1) && (ab.EW ? ab._internalAbstractMeshDataInfo._actAsRegularMesh && (Yb = ab) : Yb._internalAbstractMeshDataInfo._onlyForInstances = !1, Yb._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(ab, Yb)), ab._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let bb = 0; bb < this.pD.length; bb++) {
            const ab = this.pD[bb];
            if (!ab.isStarted() || !ab.emitter) continue;
            const Ub = ab.emitter;
            Ub.position && !Ub.isEnabled() || (this._activeParticleSystems.push(ab), ab.animate(), this._renderingManager.dispatchParticles(ab))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(bb) {
        this._skeletonsEnabled && bb.skeleton && (this._activeSkeletons.pushNoDuplicate(bb.skeleton) && (bb.skeleton.prepare(), this._activeBones.addCount(bb.skeleton.bones.length, !1)), bb.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(bb) && this.frameGraph && bb.applySkeleton(bb.skeleton))
      }
      _activeMesh(bb, ab) {
        this._prepareSkeleton(ab);
        let Ub = bb.IAb || bb.EW || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || ab.Lj;
        if (ab && ab.mD && ab.mD.length > 0) {
          const Ab = this.getActiveSubMeshCandidates(ab),
            Mb = Ab.length;
          Ub = Ub || 1 === Mb;
          for (let Tb = 0; Tb < Mb; Tb++) {
            const Mb = Ab.data[Tb];
            this._evaluateSubMesh(Mb, ab, bb, Ub)
          }
        }
      }
      updateTransformMatrix(bb) {
        const ab = this.activeCamera;
        if (ab)
          if (ab._renderingMultiview) {
            const Ub = ab._rigCameras[0],
              Ab = ab._rigCameras[1];
            this.setTransformMatrix(Ub.getViewMatrix(), Ub.getProjectionMatrix(bb), Ab.getViewMatrix(), Ab.getProjectionMatrix(bb))
          } else this.setTransformMatrix(ab.getViewMatrix(), ab.getProjectionMatrix(bb))
      }
      _bindFrameBuffer(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (bb && bb._multiviewTexture ? bb._multiviewTexture._bindFrameBuffer() : bb && bb.outputRenderTarget ? bb.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), ab && this._clearFrameBuffer(bb)
      }
      _clearFrameBuffer(bb) {
        if (bb && bb._multiviewTexture);
        else if (bb && bb.outputRenderTarget && !bb._renderingMultiview) {
          const ab = bb.outputRenderTarget;
          ab.onClearObservable.hasObservers() ? ab.onClearObservable.notifyObservers(this._engine) : ab.skipInitialClear || bb.isRightCamera || (this.autoClear && this._engine.clear(ab.clearColor || this._clearColor, !ab._cleared, !0, !0), ab._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(bb, ab) {
        let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (bb && bb._skipRendering) return;
        const Mb = this._engine;
        if (this._activeCamera = bb, !this.activeCamera) throw new Error("Active camera not set");
        if (Mb.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && Ub) {
          let ab = !0;
          bb._renderingMultiview && bb.outputRenderTarget && (ab = bb.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, bb.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), bb._renderingMultiview && bb.outputRenderTarget && (bb.outputRenderTarget.skipInitialClear = ab)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = bb.outputRenderTarget?.renderPassId ?? bb.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let Ab = 0; Ab < this._softwareSkinnedMeshes.length; Ab++) {
          const bb = this._softwareSkinnedMeshes.data[Ab];
          bb.applySkeleton(bb.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), bb.customRenderTargets && bb.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(bb.customRenderTargets), ab && ab.customRenderTargets && ab.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(ab.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let Ab = 0, Yb = this._gatherActiveCameraRenderTargetsStage; Ab < Yb.length; Ab++) {
          Yb[Ab].action(this._renderTargets)
        }
        let Tb = !1;
        if (this.renderTargetsEnabled) {
          let bb;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            Ab.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const ab = this.getBoundingBoxRenderer?.();
            for (let Ub = 0; Ub < this._renderTargets.length; Ub++) {
              const Ab = this._renderTargets.data[Ub];
              if (Ab._shouldRender()) {
                this._renderId++;
                const Ub = Ab.activeCamera && Ab.activeCamera !== this.activeCamera;
                ab && !bb && (bb = ab.renderList.length > 0 ? ab.renderList.data.slice() : [], bb.length = ab.renderList.length), Ab.render(Ub, this.dumpNextRenderTargets), Tb = !0
              }
            }
            ab && bb && (ab.renderList.data = bb, ab.renderList.length = bb.length), Ab.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const ab = this.getBoundingBoxRenderer?.();
            ab && !bb && (bb = ab.renderList.length > 0 ? ab.renderList.data.slice() : [], bb.length = ab.renderList.length);
            for (let bb = 0, Ub = this._cameraDrawRenderTargetStage; bb < Ub.length; bb++) {
              Tb = Ub[bb].action(this.activeCamera) || Tb
            }
            ab && bb && (ab.renderList.data = bb, ab.renderList.length = bb.length)
          }
          this._intermediateRendering = !1
        }
        Tb && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || bb._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let Ab = 0, Yb = this._beforeCameraDrawStage; Ab < Yb.length; Ab++) {
          Yb[Ab].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const Eb = Mb.snapshotRendering && 1 === Mb.snapshotRenderingMode;
        Eb && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !Eb), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let Ab = 0, Yb = this._afterCameraDrawStage; Ab < Yb.length; Ab++) {
          Yb[Ab].action(this.activeCamera)
        }
        if (this.postProcessManager && !bb._multiviewTexture) {
          const ab = bb.outputRenderTarget ? bb.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(bb.isIntermediate, ab)
        }
        for (let Ab = 0, Yb = this._afterCameraPostProcessStage; Ab < Yb.length; Ab++) {
          Yb[Ab].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === bb.cameraRigMode || bb._renderingMultiview) return bb._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(bb, void 0, ab), void this.onAfterRenderCameraObservable.notifyObservers(bb);
        if (bb._useMultiviewToSingleView) this._renderMultiviewToSingleView(bb);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(bb);
          for (let ab = 0; ab < bb._rigCameras.length; ab++) this._renderForCamera(bb._rigCameras[ab], bb)
        }
        this._activeCamera = bb, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(bb)
      }
      _checkIntersections() {
        for (let bb = 0; bb < this._meshesForIntersections.length; bb++) {
          const ab = this._meshesForIntersections.data[bb];
          if (ab.actionManager)
            for (let bb = 0; ab.actionManager && bb < ab.actionManager.actions.length; bb++) {
              const Ub = ab.actionManager.actions[bb];
              if (12 === Ub.trigger || 13 === Ub.trigger) {
                const bb = Ub.getTriggerParameter(),
                  Ab = bb.mesh ? bb.mesh : bb,
                  Mb = Ab.fAb(ab, bb.usePreciseIntersection),
                  Tb = ab._intersectionsInProgress.indexOf(Ab);
                Mb && -1 === Tb ? 12 === Ub.trigger ? (Ub._executeCurrent(jb.CreateNew(ab, void 0, Ab)), ab._intersectionsInProgress.push(Ab)) : 13 === Ub.trigger && ab._intersectionsInProgress.push(Ab) : !Mb && Tb > -1 && (13 === Ub.trigger && Ub._executeCurrent(jb.CreateNew(ab, void 0, Ab)), ab.actionManager.hasSpecificTrigger(13, (bb => {
                  const ab = bb.mesh ? bb.mesh : bb;
                  return Ab === ab
                })) && 13 !== Ub.trigger || ab._intersectionsInProgress.splice(Tb, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(bb) {}
      _animate(bb) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let bb = Math.max(TU.MinDeltaTime, Math.min(this._engine.getDeltaTime(), TU.MaxDeltaTime)) + this._timeAccumulator;
          const ab = this._engine.getTimeStep(),
            Ub = 1e3 / ab / 1e3;
          let Ab = 0;
          const Mb = this._engine.getLockstepMaxSteps();
          let Tb = Math.floor(bb / ab);
          for (Tb = Math.min(Tb, Mb); bb > 0 && Ab < Tb;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = ab * Ub, this._animate(ab), this.onAfterAnimationsObservable.notifyObservers(this), this.ZF && this._advancePhysicsEngineStep(ab), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, Ab++, bb -= ab;
          this._timeAccumulator = bb < 0 ? 0 : bb
        } else {
          const bb = this.useConstantAnimationDeltaTime ? 16 : Math.max(TU.MinDeltaTime, Math.min(this._engine.getDeltaTime(), TU.MaxDeltaTime));
          this._animationRatio = .06 * bb, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.ZF && this._advancePhysicsEngineStep(bb)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(bb) {
        if (bb?.outputRenderTarget && !bb?.isRigCamera && (bb.outputRenderTarget._cleared = !1), bb?.rigCameras?.length)
          for (let ab = 0; ab < bb.rigCameras.length; ++ab) {
            const Ub = bb.rigCameras[ab].outputRenderTarget;
            Ub && (Ub._cleared = !1)
          }
      }
      resetDrawCache(bb) {
        if (this.meshes)
          for (const ab of this.meshes) ab.resetDrawCache(bb)
      }
      _renderWithFrameGraph() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ab = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, bb)
          for (const Ub of this.cameras)
            if (Ub.update(), 0 !== Ub.cameraRigMode)
              for (let bb = 0; bb < Ub._rigCameras.length; bb++) Ub._rigCameras[bb].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(ab)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(bb) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const ab = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Ab.h.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let bb = 0; bb < this._renderTargets.length; bb++) {
            const Ub = this._renderTargets.data[bb],
              Ab = Ub.activeCamera || ab;
            this._renderRenderTarget(Ub, Ab, !0, this.dumpNextRenderTargets)
          }
          Ab.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let Ub = 0, Ab = this._beforeClearStage; Ub < Ab.length; Ub++) {
          Ab[Ub].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const ab = this.getActiveMeshCandidates(),
            Ub = ab.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let bb = 0; bb < Ub; bb++) {
                const Ub = ab.data[bb];
                Ub._internalAbstractMeshDataInfo._wasActiveLastFrame && Ub.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const bb = this._activeParticleSystems.length;
              for (let ab = 0; ab < bb; ab++) this._activeParticleSystems.data[ab].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let Ab = 0; Ab < Ub; Ab++) {
              const Ub = ab.data[Ab];
              Ub._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, Ub.isBlocked || (this._totalVertices.addCount(Ub.getTotalVertices(), !1), Ub.isReady() && Ub.isEnabled() && !Ub.nY.hasAZeroComponent && (Ub.computeWorldMatrix(bb), Ub.actionManager && Ub.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Ub)))
            }
            if (this.particlesEnabled)
              for (let bb = 0; bb < this.pD.length; bb++) {
                const ab = this.pD[bb];
                if (!ab.isStarted() || !ab.emitter) continue;
                const Ub = ab.emitter;
                Ub.position && !Ub.isEnabled() || (this._activeParticleSystems.push(ab), ab.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, bb._shouldRender()) {
          if (this._renderId++, this.activeCamera = ab, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), bb.render(Ub, Ab)
        }
        this._intermediateRendering = !1
      }
      render() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Jab) return;
        const Ub = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(bb, ab)
        } finally {
          this._renderingMeshEvaluationDepth = Ub
        }
      }
      _renderFrame(bb, ab) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), kb.d.oN = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const Ub of this.activeCameras) this._checkCameraRenderTarget(Ub);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), ab || this.animate();
        for (let Ub = 0, Ab = this._beforeCameraUpdateStage; Ub < Ab.length; Ub++) {
          Ab[Ub].action()
        }
        if (bb)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Ub = 0; Ub < this.activeCameras.length; Ub++) {
              const bb = this.activeCameras[Ub];
              if (bb.update(), 0 !== bb.cameraRigMode)
                for (let ab = 0; ab < bb._rigCameras.length; ab++) bb._rigCameras[ab].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let Ub = 0; Ub < this.activeCamera._rigCameras.length; Ub++) this.activeCamera._rigCameras[Ub].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(bb, ab);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const bb = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            Ab.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let ab = 0; ab < this.customRenderTargets.length; ab++) {
              const Ub = this.customRenderTargets[ab],
                Ab = Ub.activeCamera || this.activeCamera;
              this._renderRenderTarget(Ub, Ab, bb !== Ab, this.dumpNextRenderTargets)
            }
            Ab.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = bb?.renderPassId ?? 0, this.activeCamera = bb, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let ab = 0, Ub = this._beforeClearStage; ab < Ub.length; ab++) {
            Ub[ab].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let ab = 0, Ub = this._gatherRenderTargetsStage; ab < Ub.length; ab++) {
            Ub[ab].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let ab = 0; ab < this.activeCameras.length; ab++) this._processSubCameras(this.activeCameras[ab], ab > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let Ub = 0, Ab = this._afterRenderStage; Ub < Ab.length; Ub++) {
          Ab[Ub].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let bb = 0; bb < this._toBeDisposed.length; bb++) {
            const ab = this._toBeDisposed[bb];
            ab && ab.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let bb = 0; bb < this.materials.length; bb++) this.materials[bb].freeze()
      }
      unfreezeMaterials() {
        for (let bb = 0; bb < this.materials.length; bb++) this.materials[bb].unfreeze()
      }
      dispose() {
        if (this.Jab) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, xb.c)(this.stopAllAnimations)) {
          for (const bb of this._activeAnimatables) bb.onAnimationEndObservable.clear(), bb.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const bb = this._activeRequests.slice();
        for (const Tb of bb) Tb.abort();
        this._activeRequests.length = 0;
        try {
          this.UW.notifyObservers(this)
        } catch (Mb) {
          bU.e.Error("An error occurred while calling onDisposeObservable!", Mb)
        }
        this.detachControl();
        const ab = this._engine.getInputElement?.();
        if (ab)
          for (let Tb = 0; Tb < this.cameras.length; Tb++) this.cameras[Tb].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (bb => bb.dispose(!0))), this._disposeList(this.transformNodes, (bb => bb.dispose(!0)));
        const Ub = this.cameras;
        this._disposeList(Ub), this._disposeList(this.pD), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let Ab = this._engine.scenes.indexOf(this);
        if (Ab > -1 && this._engine.scenes.splice(Ab, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, kb.j)(), zb.d._LastCreatedScene === this) {
          zb.d._LastCreatedScene = null;
          let bb = zb.d.Instances.length - 1;
          for (; bb >= 0;) {
            const ab = zb.d.Instances[bb];
            if (ab.scenes.length > 0) {
              zb.d._LastCreatedScene = ab.scenes[this._engine.scenes.length - 1];
              break
            }
            bb--
          }
        }
        Ab = this._engine._virtualScenes.indexOf(this), Ab > -1 && this._engine._virtualScenes.splice(Ab, 1), this._engine.wipeCaches(!0), this.UW.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(bb, ab) {
        const Ub = bb.slice(0);
        ab = ab ?? (bb => bb.dispose());
        for (const Ab of Ub) ab(Ab);
        bb.length = 0
      }
      get Jab() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let bb = 0; bb < this.meshes.length; bb++) {
          const ab = this.meshes[bb].geometry;
          ab && ab.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const bb of this.textures) {
          bb._buffer && (bb._buffer = null)
        }
      }
      getWorldExtends(bb) {
        const ab = new vb.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Ub = new vb.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        bb = bb || (() => !0);
        const Ab = this.meshes.filter(bb);
        for (const Mb of Ab) {
          if (Mb.computeWorldMatrix(!0), !Mb.mD || 0 === Mb.mD.length || Mb.infiniteDistance) continue;
          const bb = Mb.DH(),
            Ab = bb.boundingBox.minimumWorld,
            Tb = bb.boundingBox.maximumWorld;
          vb.m.CheckExtends(Ab, ab, Ub), vb.m.CheckExtends(Tb, ab, Ub)
        }
        return ab.x === Number.MAX_VALUE ? {
          min: vb.m.Zero(),
          max: vb.m.Zero()
        } : {
          min: ab,
          max: Ub
        }
      }
      createPickingRay(bb, ab, Ub, Ab) {
        throw (0, xb.l)("Ray")
      }
      createPickingRayToRef(bb, ab, Ub, Ab, Mb) {
        throw (0, xb.l)("Ray")
      }
      createPickingRayInCameraSpace(bb, ab, Ub) {
        throw (0, xb.l)("Ray")
      }
      createPickingRayInCameraSpaceToRef(bb, ab, Ub, Ab) {
        throw (0, xb.l)("Ray")
      }
      GP(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = (0, xb.l)("Ray", !0);
        return Eb && bU.e.Warn(Eb), new Xb.e
      }
      pickWithBoundingInfo(bb, ab, Ub, Ab, Mb) {
        const Tb = (0, xb.l)("Ray", !0);
        return Tb && bU.e.Warn(Tb), new Xb.e
      }
      pickWithRay(bb, ab, Ub, Ab) {
        throw (0, xb.l)("Ray")
      }
      multiPick(bb, ab, Ub, Ab, Mb) {
        throw (0, xb.l)("Ray")
      }
      multiPickWithRay(bb, ab, Ub) {
        throw (0, xb.l)("Ray")
      }
      setPointerOverMesh(bb, ab, Ub) {
        this._inputManager.setPointerOverMesh(bb, ab, Ub)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const bb of this.geometries) bb._rebuild();
        for (const bb of this.meshes) bb._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const bb of this._components) bb.rebuild();
        for (const bb of this.pD) bb.rebuild();
        if (this.spriteManagers)
          for (const bb of this.spriteManagers) bb.rebuild()
      }
      _rebuildTextures() {
        for (const bb of this.textures) bb._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(bb, ab, Ub) {
        if (void 0 === ab) return bb;
        const Ab = [];
        for (const Mb in bb) {
          const Tb = bb[Mb];
          eb.b && eb.b.MatchesQuery(Tb, ab) && (!Ub || Ub(Tb)) && Ab.push(Tb)
        }
        return Ab
      }
      getMeshesByTags(bb, ab) {
        return this._getByTags(this.meshes, bb, ab)
      }
      getCamerasByTags(bb, ab) {
        return this._getByTags(this.cameras, bb, ab)
      }
      getLightsByTags(bb, ab) {
        return this._getByTags(this.lights, bb, ab)
      }
      getMaterialByTags(bb, ab) {
        return this._getByTags(this.materials, bb, ab).concat(this._getByTags(this.multiMaterials, bb, ab))
      }
      getTransformNodesByTags(bb, ab) {
        return this._getByTags(this.transformNodes, bb, ab)
      }
      setRenderingOrder(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(bb, ab, Ub, Ab)
      }
      setRenderingAutoClearDepthStencil(bb, ab) {
        let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(bb, ab, Ub, Ab)
      }
      getAutoClearDepthStencilSetup(bb) {
        return this._renderingManager.getAutoClearDepthStencilSetup(bb)
      }
      _forceBlockMaterialDirtyMechanism(bb) {
        this._blockMaterialDirtyMechanism = bb
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(bb) {
        this._blockMaterialDirtyMechanism !== bb && (this._blockMaterialDirtyMechanism = bb, bb || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(bb, ab) {
        if (!this._blockMaterialDirtyMechanism)
          for (const Ub of this.materials) ab && !ab(Ub) || Ub.Aab(bb)
      }
      _loadFile(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        const Yb = (0, Ob.j)(bb, ab, Ub, Ab ? this.offlineProvider : void 0, Mb, Tb, Eb);
        return this._activeRequests.push(Yb), Yb.onCompleteObservable.add((bb => {
          this._activeRequests.splice(this._activeRequests.indexOf(bb), 1)
        })), Yb
      }
      async _loadFileAsync(bb, ab, Ub, Ab, Mb) {
        return await new Promise(((Tb, Eb) => {
          this._loadFile(bb, (bb => {
            Tb(bb)
          }), ab, Ub, Ab, ((bb, ab) => {
            Eb(ab)
          }), Mb)
        }))
      }
      async _loadDelayedFileAsync(bb, ab, Ub) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const Ab = `${bb}|${ab?"binary":"string"}`;
        let Mb = this._delayedFileRequests.get(Ab);
        if (!Mb) {
          Mb = ab ? this._loadFileAsync(bb, void 0, Ub, !0) : this._loadFileAsync(bb, void 0, Ub, !1);
          const Tb = Mb;
          (async () => {
            try {
              await Tb
            } catch {}
            this._delayedFileRequests?.delete(Ab)
          })(), this._delayedFileRequests.set(Ab, Mb)
        }
        return await Mb
      }
      _requestFile(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        const Yb = (0, Ob.s)(bb, ab, Ub, Ab ? this.offlineProvider : void 0, Mb, Tb, Eb);
        return this._activeRequests.push(Yb), Yb.onCompleteObservable.add((bb => {
          this._activeRequests.splice(this._activeRequests.indexOf(bb), 1)
        })), Yb
      }
      async _requestFileAsync(bb, ab, Ub, Ab, Mb) {
        return await new Promise(((Tb, Eb) => {
          this._requestFile(bb, (bb => {
            Tb(bb)
          }), ab, Ub, Ab, (bb => {
            Eb(bb)
          }), Mb)
        }))
      }
      _readFile(bb, ab, Ub, Ab, Mb) {
        const Tb = (0, Ob.n)(bb, ab, Ub, Ab, Mb);
        return this._activeRequests.push(Tb), Tb.onCompleteObservable.add((bb => {
          this._activeRequests.splice(this._activeRequests.indexOf(bb), 1)
        })), Tb
      }
      async _readFileAsync(bb, ab, Ub) {
        return await new Promise(((Ab, Mb) => {
          this._readFile(bb, (bb => {
            Ab(bb)
          }), ab, Ub, (bb => {
            Mb(bb)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, xb.l)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(bb) {
        return this.setActiveCameraById(bb)
      }
      getMaterialByID(bb) {
        return this.getMaterialById(bb)
      }
      getLastMaterialByID(bb) {
        return this.getLastMaterialById(bb)
      }
      getTextureByUniqueID(bb) {
        return this.getTextureByUniqueId(bb)
      }
      getCameraByID(bb) {
        return this.getCameraById(bb)
      }
      getCameraByUniqueID(bb) {
        return this.getCameraByUniqueId(bb)
      }
      getBoneByID(bb) {
        return this.getBoneById(bb)
      }
      getLightByID(bb) {
        return this.getLightById(bb)
      }
      getLightByUniqueID(bb) {
        return this.getLightByUniqueId(bb)
      }
      getParticleSystemByID(bb) {
        return this.getParticleSystemById(bb)
      }
      getGeometryByID(bb) {
        return this.getGeometryById(bb)
      }
      getMeshByID(bb) {
        return this.getMeshById(bb)
      }
      getMeshByUniqueID(bb) {
        return this.getMeshByUniqueId(bb)
      }
      getLastMeshByID(bb) {
        return this.getLastMeshById(bb)
      }
      getMeshesByID(bb) {
        return this.getMeshesById(bb)
      }
      getTransformNodeByID(bb) {
        return this.getTransformNodeById(bb)
      }
      getTransformNodeByUniqueID(bb) {
        return this.getTransformNodeByUniqueId(bb)
      }
      getTransformNodesByID(bb) {
        return this.getTransformNodesById(bb)
      }
      getNodeByID(bb) {
        return this.getNodeById(bb)
      }
      getLastEntryByID(bb) {
        return this.getLastEntryById(bb)
      }
      getLastSkeletonByID(bb) {
        return this.getLastSkeletonById(bb)
      }
    }
    TU.FOGMODE_NONE = 0, TU.FOGMODE_EXP = 1, TU.FOGMODE_EXP2 = 2, TU.FOGMODE_LINEAR = 3, TU.MinDeltaTime = 1, TU.MaxDeltaTime = 1e3, TU._OriginalDefaultMaterialFactory = TU.DefaultMaterialFactory;
    let EU = !1;

    function YU() {
      EU || (EU = !0, (0, aU.f)("BABYLON.Scene", TU))
    }(Sb = TU.prototype).sortActiveAnimatables ?? (Sb.sortActiveAnimatables = (0, xb.i)("Scene", "sortActiveAnimatables")), (ba = TU.prototype).beginWeightedAnimation ?? (ba.beginWeightedAnimation = (0, xb.i)("Scene", "beginWeightedAnimation")), (aa = TU.prototype).beginAnimation ?? (aa.beginAnimation = (0, xb.i)("Scene", "beginAnimation")), (Ua = TU.prototype).beginHierarchyAnimation ?? (Ua.beginHierarchyAnimation = (0, xb.i)("Scene", "beginHierarchyAnimation")), (Aa = TU.prototype).beginDirectAnimation ?? (Aa.beginDirectAnimation = (0, xb.i)("Scene", "beginDirectAnimation")), (Ma = TU.prototype).beginDirectHierarchyAnimation ?? (Ma.beginDirectHierarchyAnimation = (0, xb.i)("Scene", "beginDirectHierarchyAnimation")), (Ta = TU.prototype).getAnimatableByTarget ?? (Ta.getAnimatableByTarget = (0, xb.i)("Scene", "getAnimatableByTarget")), (Ea = TU.prototype).getAllAnimatablesByTarget ?? (Ea.getAllAnimatablesByTarget = (0, xb.i)("Scene", "getAllAnimatablesByTarget")), (Ya = TU.prototype).stopAllAnimations ?? (Ya.stopAllAnimations = (0, xb.i)("Scene", "stopAllAnimations")), (Ba = TU.prototype).getSoundByName ?? (Ba.getSoundByName = (0, xb.i)("Scene", "getSoundByName")), (ea = TU.prototype).createOrUpdateSelectionOctree ?? (ea.createOrUpdateSelectionOctree = (0, xb.i)("Scene", "createOrUpdateSelectionOctree")), (va = TU.prototype).createDefaultLight ?? (va.createDefaultLight = (0, xb.i)("Scene", "createDefaultLight")), (La = TU.prototype).createDefaultCamera ?? (La.createDefaultCamera = (0, xb.i)("Scene", "createDefaultCamera")), (Pa = TU.prototype).createDefaultCameraOrLight ?? (Pa.createDefaultCameraOrLight = (0, xb.i)("Scene", "createDefaultCameraOrLight")), (Xa = TU.prototype).createDefaultSkybox ?? (Xa.createDefaultSkybox = (0, xb.i)("Scene", "createDefaultSkybox")), (ja = TU.prototype).createDefaultEnvironment ?? (ja.createDefaultEnvironment = (0, xb.i)("Scene", "createDefaultEnvironment")), (Ra = TU.prototype).createDefaultVRExperience ?? (Ra.createDefaultVRExperience = (0, xb.i)("Scene", "createDefaultVRExperience")), (ka = TU.prototype).createDefaultXRExperienceAsync ?? (ka.createDefaultXRExperienceAsync = (0, xb.i)("Scene", "createDefaultXRExperienceAsync")), (ya = TU.prototype).getGlowLayerByName ?? (ya.getGlowLayerByName = (0, xb.i)("Scene", "getGlowLayerByName")), (Za = TU.prototype).getHighlightLayerByName ?? (Za.getHighlightLayerByName = (0, xb.i)("Scene", "getHighlightLayerByName")), (Da = TU.prototype).getSelectionOutlineLayerByName ?? (Da.getSelectionOutlineLayerByName = (0, xb.i)("Scene", "getSelectionOutlineLayerByName")), (za = TU.prototype).removeLensFlareSystem ?? (za.removeLensFlareSystem = (0, xb.i)("Scene", "removeLensFlareSystem")), (xa = TU.prototype).addLensFlareSystem ?? (xa.addLensFlareSystem = (0, xb.i)("Scene", "addLensFlareSystem")), (ia = TU.prototype).getLensFlareSystemByName ?? (ia.getLensFlareSystemByName = (0, xb.i)("Scene", "getLensFlareSystemByName")), (fa = TU.prototype).getLensFlareSystemByID ?? (fa.getLensFlareSystemByID = (0, xb.i)("Scene", "getLensFlareSystemByID")), (ma = TU.prototype).getLensFlareSystemById ?? (ma.getLensFlareSystemById = (0, xb.i)("Scene", "getLensFlareSystemById")), (pa = TU.prototype).getPhysicsEngine ?? (pa.getPhysicsEngine = (0, xb.i)("Scene", "getPhysicsEngine")), (Na = TU.prototype).enablePhysics ?? (Na.enablePhysics = (0, xb.i)("Scene", "enablePhysics")), (Wa = TU.prototype).disablePhysicsEngine ?? (Wa.disablePhysicsEngine = (0, xb.i)("Scene", "disablePhysicsEngine")), (Ha = TU.prototype).isPhysicsEnabled ?? (Ha.isPhysicsEnabled = (0, xb.i)("Scene", "isPhysicsEnabled")), (Ia = TU.prototype).deleteCompoundImpostor ?? (Ia.deleteCompoundImpostor = (0, xb.i)("Scene", "deleteCompoundImpostor")), (da = TU.prototype).removeReflectionProbe ?? (da.removeReflectionProbe = (0, xb.i)("Scene", "removeReflectionProbe")), (Fa = TU.prototype).addReflectionProbe ?? (Fa.addReflectionProbe = (0, xb.i)("Scene", "addReflectionProbe")), (ha = TU.prototype).getBoundingBoxRenderer ?? (ha.getBoundingBoxRenderer = (0, xb.i)("Scene", "getBoundingBoxRenderer")), (Ga = TU.prototype).enableDepthRenderer ?? (Ga.enableDepthRenderer = (0, xb.i)("Scene", "enableDepthRenderer")), (Qa = TU.prototype).disableDepthRenderer ?? (Qa.disableDepthRenderer = (0, xb.i)("Scene", "disableDepthRenderer")), (qa = TU.prototype).enableFluidRenderer ?? (qa.enableFluidRenderer = (0, xb.i)("Scene", "enableFluidRenderer")), (ua = TU.prototype).disableFluidRenderer ?? (ua.disableFluidRenderer = (0, xb.i)("Scene", "disableFluidRenderer")), (ra = TU.prototype).enableGeometryBufferRenderer ?? (ra.enableGeometryBufferRenderer = (0, xb.i)("Scene", "enableGeometryBufferRenderer")), (Ka = TU.prototype).disableGeometryBufferRenderer ?? (Ka.disableGeometryBufferRenderer = (0, xb.i)("Scene", "disableGeometryBufferRenderer")), (oa = TU.prototype).enableIblCdfGenerator ?? (oa.enableIblCdfGenerator = (0, xb.i)("Scene", "enableIblCdfGenerator")), (la = TU.prototype).disableIblCdfGenerator ?? (la.disableIblCdfGenerator = (0, xb.i)("Scene", "disableIblCdfGenerator")), (ta = TU.prototype).getOutlineRenderer ?? (ta.getOutlineRenderer = (0, xb.i)("Scene", "getOutlineRenderer")), (wa = TU.prototype).enablePrePassRenderer ?? (wa.enablePrePassRenderer = (0, xb.i)("Scene", "enablePrePassRenderer")), (sa = TU.prototype).disablePrePassRenderer ?? (sa.disablePrePassRenderer = (0, xb.i)("Scene", "disablePrePassRenderer")), (ga = TU.prototype).enableSubSurfaceForPrePass ?? (ga.enableSubSurfaceForPrePass = (0, xb.i)("Scene", "enableSubSurfaceForPrePass")), (Ca = TU.prototype).disableSubSurfaceForPrePass ?? (Ca.disableSubSurfaceForPrePass = (0, xb.i)("Scene", "disableSubSurfaceForPrePass")), (Va = TU.prototype).pickSprite ?? (Va.pickSprite = (0, xb.i)("Scene", "pickSprite")), (Oa = TU.prototype).pickSpriteWithRay ?? (Oa.pickSpriteWithRay = (0, xb.i)("Scene", "pickSpriteWithRay")), (ca = TU.prototype).multiPickSprite ?? (ca.multiPickSprite = (0, xb.i)("Scene", "multiPickSprite")), (Ja = TU.prototype).multiPickSpriteWithRay ?? (Ja.multiPickSpriteWithRay = (0, xb.i)("Scene", "multiPickSpriteWithRay")), (na = TU.prototype).setPointerOverSprite ?? (na.setPointerOverSprite = (0, xb.i)("Scene", "setPointerOverSprite")), (Sa = TU.prototype).getPointerOverSprite ?? (Sa.getPointerOverSprite = (0, xb.i)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(TU.prototype, "mainSoundTrack") || Object.defineProperty(TU.prototype, "mainSoundTrack", (0, xb.g)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(TU.prototype, "soundTracks") || Object.defineProperty(TU.prototype, "soundTracks", (0, xb.g)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(TU.prototype, "audioEnabled") || Object.defineProperty(TU.prototype, "audioEnabled", (0, xb.g)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(TU.prototype, "headphone") || Object.defineProperty(TU.prototype, "headphone", (0, xb.g)("Scene", "headphone")), Object.getOwnPropertyDescriptor(TU.prototype, "audioListenerPositionProvider") || Object.defineProperty(TU.prototype, "audioListenerPositionProvider", (0, xb.g)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(TU.prototype, "audioListenerRotationProvider") || Object.defineProperty(TU.prototype, "audioListenerRotationProvider", (0, xb.g)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(TU.prototype, "audioPositioningRefreshRate") || Object.defineProperty(TU.prototype, "audioPositioningRefreshRate", (0, xb.g)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(TU.prototype, "selectionOctree") || Object.defineProperty(TU.prototype, "selectionOctree", (0, xb.g)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(TU.prototype, "debugLayer") || Object.defineProperty(TU.prototype, "debugLayer", (0, xb.g)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(TU.prototype, "gamepadManager") || Object.defineProperty(TU.prototype, "gamepadManager", (0, xb.g)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(TU.prototype, "simplificationQueue") || Object.defineProperty(TU.prototype, "simplificationQueue", (0, xb.g)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(TU.prototype, "onBeforePhysicsObservable") || Object.defineProperty(TU.prototype, "onBeforePhysicsObservable", (0, xb.g)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(TU.prototype, "onAfterPhysicsObservable") || Object.defineProperty(TU.prototype, "onAfterPhysicsObservable", (0, xb.g)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(TU.prototype, "reflectionProbes") || Object.defineProperty(TU.prototype, "reflectionProbes", (0, xb.g)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(TU.prototype, "forceShowBoundingBoxes") || Object.defineProperty(TU.prototype, "forceShowBoundingBoxes", (0, xb.g)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(TU.prototype, "depthPeelingRenderer") || Object.defineProperty(TU.prototype, "depthPeelingRenderer", (0, xb.g)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(TU.prototype, "useOrderIndependentTransparency") || Object.defineProperty(TU.prototype, "useOrderIndependentTransparency", (0, xb.g)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(TU.prototype, "fluidRenderer") || Object.defineProperty(TU.prototype, "fluidRenderer", (0, xb.g)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(TU.prototype, "geometryBufferRenderer") || Object.defineProperty(TU.prototype, "geometryBufferRenderer", (0, xb.g)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(TU.prototype, "iblCdfGenerator") || Object.defineProperty(TU.prototype, "iblCdfGenerator", (0, xb.g)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(TU.prototype, "prePassRenderer") || Object.defineProperty(TU.prototype, "prePassRenderer", (0, xb.g)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(TU.prototype, "subSurfaceConfiguration") || Object.defineProperty(TU.prototype, "subSurfaceConfiguration", (0, xb.g)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(TU.prototype, "spriteManagers") || Object.defineProperty(TU.prototype, "spriteManagers", (0, xb.g)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(TU.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(TU.prototype, "onBeforeSpritesRenderingObservable", (0, xb.g)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(TU.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(TU.prototype, "onAfterSpritesRenderingObservable", (0, xb.g)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39263: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      f: () => Mb
    });
    class Ab {}
    Ab.NAME_EFFECTLAYER = "EffectLayer", Ab.NAME_LAYER = "Layer", Ab.NAME_LENSFLARESYSTEM = "LensFlareSystem", Ab.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Ab.NAME_PARTICLESYSTEM = "ParticleSystem", Ab.NAME_GAMEPAD = "Gamepad", Ab.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", Ab.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", Ab.NAME_PREPASSRENDERER = "PrePassRenderer", Ab.NAME_DEPTHRENDERER = "DepthRenderer", Ab.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", Ab.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", Ab.NAME_SPRITE = "Sprite", Ab.NAME_SUBSURFACE = "SubSurface", Ab.NAME_OUTLINERENDERER = "Outline", Ab.NAME_PROCEDURALTEXTURE = "ProceduralTexture", Ab.NAME_SHADOWGENERATOR = "ShadowGenerator", Ab.NAME_OCTREE = "VUb", Ab.NAME_PHYSICSENGINE = "PhysicsEngine", Ab.NAME_AUDIO = "Audio", Ab.NAME_FLUIDRENDERER = "FluidRenderer", Ab.NAME_IBLCDFGENERATOR = "iblCDFGenerator", Ab.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", Ab.STEP_ISREADYFORMESH_EFFECTLAYER = 0, Ab.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, Ab.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, Ab.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, Ab.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, Ab.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, Ab.STEP_BEFORECAMERADRAW_PREPASS = 0, Ab.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, Ab.STEP_BEFORECAMERADRAW_LAYER = 2, Ab.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, Ab.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, Ab.STEP_BEFORERENDERINGMESH_PREPASS = 0, Ab.STEP_BEFORERENDERINGMESH_OUTLINE = 1, Ab.STEP_AFTERRENDERINGMESH_PREPASS = 0, Ab.STEP_AFTERRENDERINGMESH_OUTLINE = 1, Ab.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, Ab.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, Ab.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, Ab.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, Ab.STEP_BEFORECLEAR_PREPASS = 1, Ab.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, Ab.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, Ab.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, Ab.STEP_AFTERCAMERADRAW_PREPASS = 0, Ab.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, Ab.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, Ab.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, Ab.STEP_AFTERCAMERADRAW_LAYER = 4, Ab.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, Ab.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, Ab.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, Ab.STEP_AFTERRENDER_AUDIO = 0, Ab.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, Ab.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, Ab.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, Ab.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, Ab.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, Ab.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, Ab.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, Ab.STEP_POINTERMOVE_SPRITE = 0, Ab.STEP_POINTERDOWN_SPRITE = 0, Ab.STEP_POINTERUP_SPRITE = 0;
    class Mb extends Array {
      constructor(bb) {
        super(...bb)
      }
      static Create() {
        return Object.create(Mb.prototype)
      }
      registerStep(bb, ab, Ub) {
        let Ab, Mb = 0;
        for (; Mb < this.length; Mb++) {
          if (Ab = this[Mb].index, bb < Ab) break
        }
        this.splice(Mb, 0, {
          index: bb,
          component: ab,
          action: Ub.bind(ab)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39104: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb,
      e: () => Yb,
      h: () => Ab,
      k: () => Mb,
      o: () => Tb
    });

    function Ab(bb, ab, Ub, Ab, Mb, Tb) {
      function Eb(bb) {
        if (void 0 !== bb && "function" !== typeof bb) throw new TypeError("Function expected");
        return bb
      }
      for (var Yb, Bb = Ab.kind, eb = "getter" === Bb ? "get" : "setter" === Bb ? "set" : "value", vb = !ab && bb ? Ab.static ? bb : bb.prototype : null, Lb = ab || (vb ? Object.getOwnPropertyDescriptor(vb, Ab.name) : {}), Pb = !1, Xb = Ub.length - 1; Xb >= 0; Xb--) {
        var jb = {};
        for (var Rb in Ab) jb[Rb] = "access" === Rb ? {} : Ab[Rb];
        for (var Rb in Ab.access) jb.access[Rb] = Ab.access[Rb];
        jb.addInitializer = function(bb) {
          if (Pb) throw new TypeError("Cannot add initializers after decoration has completed");
          Tb.push(Eb(bb || null))
        };
        var kb = (0, Ub[Xb])("accessor" === Bb ? {
          get: Lb.get,
          set: Lb.set
        } : Lb[eb], jb);
        if ("accessor" === Bb) {
          if (void 0 === kb) continue;
          if (null === kb || "object" !== typeof kb) throw new TypeError("Object expected");
          (Yb = Eb(kb.get)) && (Lb.get = Yb), (Yb = Eb(kb.set)) && (Lb.set = Yb), (Yb = Eb(kb.init)) && Mb.unshift(Yb)
        } else(Yb = Eb(kb)) && ("field" === Bb ? Mb.unshift(Yb) : Lb[eb] = Yb)
      }
      vb && Object.defineProperty(vb, Ab.name, Lb), Pb = !0
    }

    function Mb(bb, ab, Ub) {
      for (var Ab = arguments.length > 2, Mb = 0; Mb < ab.length; Mb++) Ub = Ab ? ab[Mb].call(bb, Ub) : ab[Mb].call(bb);
      return Ab ? Ub : void 0
    }

    function Tb(bb, ab, Ub) {
      return "symbol" === typeof ab && (ab = ab.description ? "[".concat(ab.description, "]") : ""), Object.defineProperty(bb, "name", {
        configurable: !0,
        value: Ub ? "".concat(Ub, " ", ab) : ab
      })
    }
    Object.create;
    Object.create;

    function Eb(bb, ab, Ub, Ab) {
      if ("a" === Ub && !Ab) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof ab ? bb !== ab || !Ab : !ab.has(bb)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Ub ? Ab : "a" === Ub ? Ab.call(bb) : Ab ? Ab.value : ab.get(bb)
    }

    function Yb(bb, ab, Ub, Ab, Mb) {
      if ("m" === Ab) throw new TypeError("Private method is not writable");
      if ("a" === Ab && !Mb) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof ab ? bb !== ab || !Mb : !ab.has(bb)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Ab ? Mb.call(bb, Ub) : Mb ? Mb.value = Ub : ab.set(bb, Ub), Ub
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);