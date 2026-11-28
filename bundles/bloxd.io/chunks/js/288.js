export const id = 288;
export const ids = [288];
export const modules = {
  41816: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      e: () => Eb,
      h: () => Lb,
      i: () => lb
    });
    var eb = Mb(41603),
      Hb = Mb(39971),
      pb = Mb(41740),
      Vb = Mb(41649);
    class gb {
      get RD() {
        return this._isDisposed
      }
      constructor(bb, wb, Mb) {
        let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          lb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Lb = arguments.length > 7 ? arguments[7] : void 0,
          Ib = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Vb.c)(), bb && bb.RJ ? this._engine = bb.RJ().DC() : this._engine = bb, this._updatable = Mb, this._instanced = gb, this._divisor = Lb || 1, this._label = Ib, wb instanceof eb.c ? (this._data = null, this._buffer = wb) : (this._data = wb, this._buffer = null), this.byteStride = lb ? Hb : Hb * Float32Array.BYTES_PER_ELEMENT, pb || this.create()
      }
      createVertexBuffer(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Vb = arguments.length > 6 ? arguments[6] : void 0;
        const gb = pb ? wb : wb * Float32Array.BYTES_PER_ELEMENT,
          Lb = eb ? pb ? eb : eb * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new lb(this._engine, this, bb, this._updatable, !0, Lb, void 0 === Hb ? this._instanced : Hb, gb, Mb, void 0, void 0, !0, this._divisor || Vb)
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
          if (this._buffer.qO > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.qO, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.qO, void 0, this._label));
          Hb.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(bb) {
        this.create(bb)
      }
      updateDirectly(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, bb, eb ? wb : wb * Float32Array.BYTES_PER_ELEMENT, Mb ? Mb * this.byteStride : void 0), this._data = 0 === wb && void 0 === Mb ? bb : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class lb {
      get RD() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(bb) {
        const wb = 0 != bb;
        this._instanceDivisor = bb, wb !== this._instanced && (this._instanced = wb, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const bb = this.getData();
        return bb ? Array.isArray(bb) ? bb.length / (this.byteStride / 4) - this.byteOffset / 4 : (bb.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(bb, wb, Mb, eb, Hb, Vb, Ob, Ub, tb, Cb) {
        let Eb, Fb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Bb = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          sb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          mb = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = bb, "object" === typeof eb && null !== eb ? (Eb = eb.updatable ?? !1, Hb = eb.postponeInternalCreation, Vb = eb.stride, Ob = eb.instanced, Ub = eb.offset, tb = eb.size, Cb = eb.type, Fb = eb.normalized ?? !1, Bb = eb.useBytes ?? !1, sb = eb.divisor ?? 1, mb = eb.takeBufferOwnership ?? !1, this._label = eb.label) : Eb = !!eb, wb instanceof gb ? (this._buffer = wb, this._ownsBuffer = mb) : (this._buffer = new gb(bb, wb, Eb, Vb, Hb, Ob, Bb, sb, this._label), this._ownsBuffer = !0), this.uniqueId = lb._Counter++, this._kind = Mb, void 0 === Cb) {
          const bb = this.getData();
          this.type = bb ? Ib(bb) : lb.FLOAT
        } else this.type = Cb;
        const hb = (0, pb.r)(this.type);
        Bb ? (this._size = tb || (Vb ? Vb / hb : Lb(Mb)), this.byteStride = Vb || this._buffer.byteStride || this._size * hb, this.byteOffset = Ub || 0) : (this._size = tb || Vb || Lb(Mb), this.byteStride = Vb ? Vb * hb : this._buffer.byteStride || this._size * hb, this.byteOffset = (Ub || 0) * hb), this.normalized = Fb, this._instanced = void 0 !== Ob && Ob, this._instanceDivisor = Ob ? sb : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(bb) {
        switch (bb) {
          case lb.BYTE:
            return 0;
          case lb.UNSIGNED_BYTE:
            return 1;
          case lb.SHORT:
            return 2;
          case lb.UNSIGNED_SHORT:
            return 3;
          case lb.INT:
            return 4;
          case lb.UNSIGNED_INT:
            return 5;
          case lb.FLOAT:
            return 6;
          case lb.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${bb}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (lb._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(bb, wb) {
        const Mb = this.getData();
        return Mb ? (0, pb.q)(Mb, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, bb, wb) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, pb.r)(this.type)
      }
      Yeb() {
        return this.byteOffset / (0, pb.r)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, pb.r)(this.type) : this._size
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
      updateDirectly(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(bb, wb, void 0, Mb), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(bb, wb) {
        (0, pb.i)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, bb, this.normalized, ((bb, Mb) => {
          for (let eb = 0; eb < this._size; eb++) wb(bb[eb], Mb + eb)
        }))
      }
      _alignBuffer() {}
    }

    function Lb(bb) {
      switch (bb) {
        case lb.UVKind:
        case lb.UV2Kind:
        case lb.UV3Kind:
        case lb.UV4Kind:
        case lb.UV5Kind:
        case lb.UV6Kind:
          return 2;
        case lb.NormalKind:
        case lb.PositionKind:
          return 3;
        case lb.ColorKind:
        case lb.ColorInstanceKind:
        case lb.MatricesIndicesKind:
        case lb.MatricesIndicesExtraKind:
        case lb.MatricesWeightsKind:
        case lb.MatricesWeightsExtraKind:
        case lb.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + bb + "'")
      }
    }

    function Ib(bb) {
      return bb instanceof Int8Array ? lb.BYTE : bb instanceof Uint8Array ? lb.UNSIGNED_BYTE : bb instanceof Int16Array ? lb.SHORT : bb instanceof Uint16Array ? lb.UNSIGNED_SHORT : bb instanceof Int32Array ? lb.INT : bb instanceof Uint32Array ? lb.UNSIGNED_INT : lb.FLOAT
    }

    function Ob(bb) {
      return (0, pb.r)(bb)
    }

    function Ub(bb, wb, Mb, eb, Hb, Vb, gb, lb) {
      (0, pb.i)(bb, wb, Mb, eb, Hb, Vb, gb, ((bb, wb) => {
        for (let Mb = 0; Mb < eb; Mb++) lb(bb[Mb], wb + Mb)
      }))
    }

    function tb(bb, wb, Mb, eb, Hb, Vb, gb, lb) {
      return (0, pb.q)(bb, wb, Mb, eb, Hb, Vb, gb, lb)
    }
    lb._Counter = 0, lb.BYTE = 5120, lb.UNSIGNED_BYTE = 5121, lb.SHORT = 5122, lb.UNSIGNED_SHORT = 5123, lb.INT = 5124, lb.UNSIGNED_INT = 5125, lb.FLOAT = 5126, lb.HALF_FLOAT = 5131, lb.PositionKind = "position", lb.NormalKind = "normal", lb.TangentKind = "tangent", lb.UVKind = "uv", lb.UV2Kind = "uv2", lb.UV3Kind = "uv3", lb.UV4Kind = "uv4", lb.UV5Kind = "uv5", lb.UV6Kind = "uv6", lb.ColorKind = "color", lb.ColorInstanceKind = "instanceColor", lb.MatricesIndicesKind = "matricesIndices", lb.MatricesWeightsKind = "matricesWeights", lb.MatricesIndicesExtraKind = "matricesIndicesExtra", lb.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let Cb = !1;

    function Eb() {
      Cb || (Cb = !0, lb.DeduceStride = Lb, lb.GetDataType = Ib, lb.GetTypeByteLength = Ob, lb.ForEach = Ub, lb.GetFloatData = tb)
    }
  },
  41603: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb
    });
    class eb {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.qO = 0, this.is32Bits = !1, this.uniqueId = eb._Counter++
      }
    }
    eb._Counter = 0
  },
  41808: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(38285),
      Hb = Mb(41816);
    class pb {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || wb && !this.pickedMesh.isVerticesDataPresent(Hb.i.NormalKind)) return null;
        let Mb, pb = this.pickedMesh.ipb();
        0 === pb?.length && (pb = null);
        const Vb = eb.j.YC[0],
          gb = eb.j.YC[1],
          lb = eb.j.YC[2];
        if (wb) {
          const bb = this.pickedMesh.getVerticesData(Hb.i.NormalKind);
          let wb = pb ? eb.o.FromArrayToRef(bb, 3 * pb[3 * this.faceId], Vb) : Vb.twb(bb[3 * this.faceId * 3], bb[3 * this.faceId * 3 + 1], bb[3 * this.faceId * 3 + 2]),
            Lb = pb ? eb.o.FromArrayToRef(bb, 3 * pb[3 * this.faceId + 1], gb) : gb.twb(bb[3 * (3 * this.faceId + 1)], bb[3 * (3 * this.faceId + 1) + 1], bb[3 * (3 * this.faceId + 1) + 2]),
            Ib = pb ? eb.o.FromArrayToRef(bb, 3 * pb[3 * this.faceId + 2], lb) : lb.twb(bb[3 * (3 * this.faceId + 2)], bb[3 * (3 * this.faceId + 2) + 1], bb[3 * (3 * this.faceId + 2) + 2]);
          wb = wb.scale(this.bu), Lb = Lb.scale(this.bv), Ib = Ib.scale(1 - this.bu - this.bv), Mb = new eb.o(wb.x + Lb.x + Ib.x, wb.y + Lb.y + Ib.y, wb.z + Lb.z + Ib.z)
        } else {
          const bb = this.pickedMesh.getVerticesData(Hb.i.PositionKind),
            wb = pb ? eb.o.FromArrayToRef(bb, 3 * pb[3 * this.faceId], Vb) : Vb.twb(bb[3 * this.faceId * 3], bb[3 * this.faceId * 3 + 1], bb[3 * this.faceId * 3 + 2]),
            Lb = pb ? eb.o.FromArrayToRef(bb, 3 * pb[3 * this.faceId + 1], gb) : gb.twb(bb[3 * (3 * this.faceId + 1)], bb[3 * (3 * this.faceId + 1) + 1], bb[3 * (3 * this.faceId + 1) + 2]),
            Ib = pb ? eb.o.FromArrayToRef(bb, 3 * pb[3 * this.faceId + 2], lb) : lb.twb(bb[3 * (3 * this.faceId + 2)], bb[3 * (3 * this.faceId + 2) + 1], bb[3 * (3 * this.faceId + 2) + 2]),
            Ob = wb.subtract(Lb),
            Ub = Ib.subtract(Lb);
          Mb = eb.o.Cross(Ob, Ub)
        }
        const Lb = (bb, wb) => {
          if (-1 !== this.thinInstanceIndex) {
            const Mb = bb._thinInstanceDataStorage.matrixData,
              Hb = this.thinInstanceIndex << 4;
            if (Mb && Mb.length > Hb) {
              const bb = eb.j.Matrix[0];
              eb.b.FromArrayToRef(Mb, Hb, bb), eb.o.TransformNormalToRef(wb, bb, wb)
            }
          }
          let Mb = bb.getWorldMatrix();
          bb.nonUniformScaling && (eb.j.Matrix[0].eZ(Mb), Mb = eb.j.Matrix[0], Mb.setTranslationFromFloats(0, 0, 0), Mb.invert(), Mb.transposeToRef(eb.j.Matrix[1]), Mb = eb.j.Matrix[1]), eb.o.TransformNormalToRef(wb, Mb, wb)
        };
        if (bb && Lb(this.pickedMesh, Mb), this.ray) {
          const wb = eb.j.YC[0].eZ(Mb);
          bb || Lb(this.pickedMesh, wb), eb.o.Dot(wb, this.ray.direction) > 0 && Mb.negateInPlace()
        }
        return Mb.normalize(), Mb
      }
      getTextureCoordinates() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hb.i.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(bb)) return null;
        const wb = this.pickedMesh.ipb();
        if (!wb) return null;
        const Mb = this.pickedMesh.getVerticesData(bb);
        if (!Mb) return null;
        let pb = eb.m.FromArray(Mb, 2 * wb[3 * this.faceId]),
          Vb = eb.m.FromArray(Mb, 2 * wb[3 * this.faceId + 1]),
          gb = eb.m.FromArray(Mb, 2 * wb[3 * this.faceId + 2]);
        return pb = pb.scale(this.bu), Vb = Vb.scale(this.bv), gb = gb.scale(1 - this.bu - this.bv), new eb.m(pb.x + Vb.x + gb.x, pb.y + Vb.y + gb.y)
      }
    }
  },
  41649: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(41511);
    let Hb = !1;

    function pb() {
      Hb || (Hb = !0, eb.ThinEngine.prototype.updateDynamicIndexBuffer = function(bb, wb) {
        let Mb;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(bb), Mb = bb.is32Bits ? wb instanceof Uint32Array ? wb : new Uint32Array(wb) : wb instanceof Uint16Array ? wb : new Uint16Array(wb), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Mb, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, eb.ThinEngine.prototype.updateDynamicVertexBuffer = function(bb, wb, Mb, eb) {
        this.bindArrayBuffer(bb), void 0 === Mb && (Mb = 0);
        const Hb = wb.byteLength || wb.length;
        void 0 === eb || eb >= Hb && 0 === Mb ? wb instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Mb, new Float32Array(wb)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Mb, wb) : wb instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Mb, new Float32Array(wb).subarray(0, eb / 4)) : (wb = ArrayBuffer.isView(wb) ? new Uint8Array(wb.buffer, wb.byteOffset, eb) : new Uint8Array(wb, 0, eb), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Mb, wb)), this._resetVertexBufferBinding()
      })
    }
  },
  41618: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    class eb {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          wb = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = wb, !bb && (bb = wb.createTexture(), !bb)) throw new Error("Unable to create webGL texture");
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
  41572: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => sb
    });
    var eb = Mb(38318),
      Hb = Mb(41514),
      pb = Mb(38313),
      Vb = Mb(39971),
      gb = Mb(38308),
      lb = Mb(41581);
    class Lb {
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
    class Ib {
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
        const wb = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = wb ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = wb ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = wb ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = wb ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = wb ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = wb ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = wb ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = wb ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = wb ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = wb ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = wb ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = wb ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? bb.enable(bb.STENCIL_TEST) : bb.disable(bb.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (bb.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (bb.stencilFuncSeparate(bb.FRONT, this.func, this.funcRef, this.funcMask), bb.stencilFuncSeparate(bb.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (bb.stencilOpSeparate(bb.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), bb.stencilOpSeparate(bb.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class Ob {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = Ob.ALWAYS, this.opStencilFail = Ob.KEEP, this.opDepthFail = Ob.KEEP, this.opStencilDepthPass = Ob.REPLACE, this.backFunc = Ob.ALWAYS, this.backOpStencilFail = Ob.KEEP, this.backOpDepthFail = Ob.KEEP, this.backOpStencilDepthPass = Ob.REPLACE
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
    Ob.ALWAYS = 519, Ob.KEEP = 7680, Ob.REPLACE = 7681;
    var Ub = Mb(41590),
      tb = Mb(41554),
      Cb = Mb(41506),
      Eb = Mb(41535),
      Fb = Mb(41548);

    function Bb(bb, wb) {
      if (wb) {
        const {
          requestAnimationFrame: Mb
        } = wb;
        if ("function" === typeof Mb) return Mb(bb)
      }
      if ((0, Eb.j)()) {
        const {
          requestAnimationFrame: Mb
        } = wb || window;
        if ("function" === typeof Mb) return Mb(bb)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(bb);
      return setTimeout(bb, 16)
    }
    class sb {
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
      get rHb() {
        return this._useReverseDepthBuffer
      }
      set rHb(bb) {
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
        if (bb) return this.isNDCHalfZRange ? bb.IS_NDC_HALF_ZRANGE = "" : delete bb.IS_NDC_HALF_ZRANGE, this.rHb ? bb.USE_REVERSE_DEPTHBUFFER = "" : delete bb.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? bb.USE_EXACT_SRGB_CONVERSIONS = "" : delete bb.USE_EXACT_SRGB_CONVERSIONS);
        {
          let bb = "";
          return this.isNDCHalfZRange && (bb += "#define IS_NDC_HALF_ZRANGE"), this.rHb && (bb && (bb += "\n"), bb += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (bb && (bb += "\n"), bb += "#define USE_EXACT_SRGB_CONVERSIONS"), bb
        }
      }
      _rebuildInternalTextures() {
        const bb = this._internalTexturesCache.slice();
        for (const wb of bb) wb._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const bb = this._renderTargetWrapperCache.slice();
        for (const wb of bb) wb.textures?.some((bb => 15 === bb.source)) || wb._rebuild()
      }
      _rebuildEffects() {
        for (const bb in this._compiledEffects) {
          const wb = this._compiledEffects[bb];
          wb._pipelineContext = null, wb._prepareEffect()
        }
        Hb.b.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        Vb.b.Warn(this.name + " context successfully restored."), this.RC.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(bb) {
        setTimeout((() => {
          this._clearEmptyResources();
          const wb = this._depthCullingState.depthTest,
            Mb = this._depthCullingState.depthFunc,
            eb = this._depthCullingState.depthMask,
            Hb = this._stencilState.stencilTest;
          bb(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = wb, this._depthCullingState.depthFunc = Mb, this._depthCullingState.depthMask = eb, this._stencilState.stencilTest = Hb, this._flagContextRestored()
        }), 0)
      }
      get RD() {
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
            wb = [bb, bb, bb, bb, bb, bb];
          this._emptyCubeTexture = this.createRawCubeTexture(wb, 1, 5, 0, !1, !1, 1)
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
        const wb = this._activeRenderLoops.indexOf(bb);
        wb >= 0 && (this._activeRenderLoops.splice(wb, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: bb
            } = this.customAnimationFrameRequester;
            bb && bb(this.customAnimationFrameRequester.ZC), delete this.customAnimationFrameRequester.ZC
          }
        } else if (0 !== this._frameHandler) {
          const bb = this._frameHandler;
          if (this._frameHandler = 0, (0, Eb.j)()) {
            const {
              cancelAnimationFrame: wb
            } = this.getHostWindow() || window;
            if ("function" === typeof wb) return wb(bb)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(bb);
          return clearTimeout(bb)
        }
      }
      jR() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      tO() {
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
        const wb = bb - this._lastFrameTime;
        return this._lastFrameTime = bb, this._renderAccumulator += wb, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(bb) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(bb)) {
          let bb = !0;
          (this.RD || !this.renderEvenInBackground && this._windowIsBackground) && (bb = !1), bb && (this.jR(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.tO())
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
      _queueNewFrame(bb, wb) {
        return Bb(bb, wb)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.ZC = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.ZC) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
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
        this._depthCullingState.zOffset = this.rHb ? -bb : bb
      }
      getZOffset() {
        const bb = this._depthCullingState.zOffset;
        return this.rHb ? -bb : bb
      }
      setZOffsetUnits(bb) {
        this._depthCullingState.zOffsetUnits = this.rHb ? -bb : bb
      }
      getZOffsetUnits() {
        const bb = this._depthCullingState.zOffsetUnits;
        return this.rHb ? -bb : bb
      }
      getHostWindow() {
        return (0, Eb.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
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
        const wb = this._renderTargetWrapperCache.indexOf(bb); - 1 !== wb && this._renderTargetWrapperCache.splice(wb, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(bb, wb, Mb) {
        const eb = wb || this.getRenderWidth(),
          Hb = Mb || this.getRenderHeight(),
          pb = bb.x || 0,
          Vb = bb.y || 0;
        this._cachedViewport = bb, this._viewport(pb * eb, Vb * Hb, eb * bb.width, Hb * bb.height)
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
      _createTextureBase(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Lb = arguments.length > 7 ? arguments[7] : void 0,
          Ib = arguments.length > 8 ? arguments[8] : void 0,
          Ob = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Ub = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          tb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          Eb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          Fb = arguments.length > 13 ? arguments[13] : void 0,
          Bb = arguments.length > 14 ? arguments[14] : void 0,
          mb = arguments.length > 15 ? arguments[15] : void 0;
        const hb = "data:" === (bb = bb || "").substring(0, 5),
          zb = "blob:" === bb.substring(0, 5),
          Xb = hb && -1 !== bb.indexOf(";base64,"),
          xb = Ub || new Cb.e(this, 1);
        xb !== Ub && (xb.label = bb.substring(0, 60));
        const jb = bb;
        !this._transformTextureUrl || Xb || Ub || Ob || (bb = this._transformTextureUrl(bb)), jb !== bb && (xb._originalUrl = jb);
        const Kb = bb.lastIndexOf(".");
        let rb = Eb || (Kb > -1 ? bb.substring(Kb).toLowerCase() : "");
        rb.indexOf("?") > -1 && (rb = rb.split("?")[0]);
        const Rb = sb.GetCompatibleTextureLoader(rb, Fb);
        eb && eb.addPendingData(xb), xb.url = bb, xb.generateMipMaps = !wb, xb.samplingMode = Hb, xb.invertY = Mb, xb._useSRGBBuffer = this._getUseSRGBBuffer(!!mb, wb), this._doNotHandleContextLost || (xb._buffer = Ob);
        let Db = null;
        gb && !Ub && (Db = xb.onLoadedObservable.add(gb)), Ub || this._internalTexturesCache.push(xb);
        const cb = (Mb, Ub) => {
          eb && eb.removePendingData(xb), bb === jb ? (Db && xb.onLoadedObservable.remove(Db), pb.e.UseFallbackTexture && bb !== pb.e.FallbackTexture && this._createTextureBase(pb.e.FallbackTexture, wb, xb.invertY, eb, Hb, null, lb, Lb, Ib, Ob, xb), Mb = (Mb || "Unknown error") + (pb.e.UseFallbackTexture ? " - Fallback texture was used" : ""), xb.onErrorObservable.notifyObservers({
            message: Mb,
            exception: Ub
          }), lb && lb(Mb, Ub)) : (Vb.b.Warn(`Failed to load ${bb}, falling back to ${jb}`), this._createTextureBase(jb, wb, xb.invertY, eb, Hb, gb, lb, Lb, Ib, Ob, xb, tb, Eb, Fb, Bb, mb))
        };
        if (Rb) {
          const wb = async bb => {
            (await Rb).loadData(bb, xb, ((bb, wb, Mb, pb, Vb, gb) => {
              gb ? cb("TextureLoader failed to load data") : Lb(xb, rb, eb, {
                width: bb,
                height: wb
              }, xb.invertY, !Mb, pb, (() => (Vb(), !1)), Hb)
            }), Bb)
          };
          if (Ob) {
            const bb = async bb => {
              try {
                await wb(bb)
              } catch (Mb) {
                cb("Failed to parse texture data", Mb)
              }
            };
            Ob instanceof ArrayBuffer ? bb(new Uint8Array(Ob)) : ArrayBuffer.isView(Ob) ? bb(Ob) : lb && lb("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(bb, (async bb => {
            try {
              await wb(new Uint8Array(bb))
            } catch (Mb) {
              cb("Failed to parse texture data", Mb)
            }
          }), void 0, eb ? eb.offlineProvider : void 0, !0, ((bb, wb) => {
            cb("Unable to load " + (bb && bb.responseURL, wb))
          }))
        } else {
          const Mb = bb => {
            zb && !this._doNotHandleContextLost && (xb._buffer = bb), Lb(xb, rb, eb, bb, xb.invertY, wb, !1, Ib, Hb)
          };
          !hb || Xb ? Ob && ("string" === typeof Ob.decoding || Ob.close) ? Mb(Ob) : sb._FileToolsLoadImage(bb || "", Mb, cb, eb ? eb.offlineProvider : null, Fb, xb.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof Ob || Ob instanceof ArrayBuffer || ArrayBuffer.isView(Ob) || Ob instanceof Blob ? sb._FileToolsLoadImage(Ob, Mb, cb, eb ? eb.offlineProvider : null, Fb, xb.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : Ob && Mb(Ob)
        }
        return xb
      }
      _rebuildBuffers() {
        for (const bb of this._uniformBuffers) bb._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Eb.f)() ? document : null
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
      constructor(bb, wb, Mb) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new Lb, this._stencilStateComposer = new Ib, this._stencilState = new Ob, this._alphaState = new Ub.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new eb.b, this.onCanvasFocusObservable = new eb.b, this.onNewSceneAddedObservable = new eb.b, this.onResizeObservable = new eb.b, this.onCanvasPointerOutObservable = new eb.b, this.onEffectErrorObservable = new eb.b, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new eb.b, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = bb => this._renderLoop(bb), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new eb.b, this.onAfterShaderCompilationObservable = new eb.b, this.onBeginFrameObservable = new eb.b, this.onEndFrameObservable = new eb.b, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new eb.b, this.RC = new eb.b, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.vJ = new eb.b, this.onReleaseEffectsObservable = new eb.b, pb.e.Instances.push(this), this.startTime = lb.e.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, gb.c.SetMatrixPrecision(!!wb.useLargeWorldRendering || !!wb.useHighPrecisionMatrix), (0, Eb.g)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), wb.antialias = bb ?? wb.antialias, wb.deterministicLockstep = wb.deterministicLockstep ?? !1, wb.lockstepMaxSteps = wb.lockstepMaxSteps ?? 4, wb.timeStep = wb.timeStep ?? 1 / 60, wb.stencil = wb.stencil ?? !0, this._audioContext = wb.audioEngineOptions?.audioContext ?? null, this._audioDestination = wb.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = wb.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!wb.doNotHandleContextLost, this._isStencilEnable = !!wb.stencil, this.useExactSrgbConversions = wb.useExactSrgbConversions ?? !1, this.canvasTabIndex = wb.canvasTabIndex ?? this.canvasTabIndex;
        const Hb = (0, Eb.j)() && window.devicePixelRatio || 1,
          Vb = wb.limitDeviceRatio || Hb;
        Mb = Mb || wb.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = Mb, this._hardwareScalingLevel = Mb ? 1 / Math.min(Vb, Hb) : 1, this._lastDevicePixelRatio = Hb, this._creationOptions = wb
      }
      resize() {
        let bb, wb, Mb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const bb = (0, Eb.j)() && window.devicePixelRatio || 1,
            wb = this._lastDevicePixelRatio / bb;
          this._lastDevicePixelRatio = bb, this._hardwareScalingLevel *= wb
        }
        if ((0, Eb.j)() && (0, Eb.f)())
          if (this._renderingCanvas) {
            const Mb = this._renderingCanvas.getBoundingClientRect?.();
            bb = this._renderingCanvas.clientWidth || Mb?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, wb = this._renderingCanvas.clientHeight || Mb?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else bb = window.innerWidth, wb = window.innerHeight;
        else bb = this._renderingCanvas ? this._renderingCanvas.width : 100, wb = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(bb / this._hardwareScalingLevel, wb / this._hardwareScalingLevel, Mb)
      }
      setSize(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (bb |= 0, wb |= 0, !Mb && this._renderingCanvas.width === bb && this._renderingCanvas.height === wb) return !1;
        if (this._renderingCanvas.width = bb, this._renderingCanvas.height = wb, this.scenes) {
          for (let bb = 0; bb < this.scenes.length; bb++) {
            const wb = this.scenes[bb];
            for (let bb = 0; bb < wb.cameras.length; bb++) {
              wb.cameras[bb]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob) {
        throw (0, tb.k)("engine.rawTexture")
      }
      createRawCubeTexture(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
        throw (0, tb.k)("engine.rawTexture")
      }
      createRawTexture3D(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib) {
        throw (0, tb.k)("engine.rawTexture")
      }
      createRawTexture2DArray(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob) {
        throw (0, tb.k)("engine.rawTexture")
      }
      _sharedInit(bb) {
        this._renderingCanvas = bb
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const bb = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== bb.indexOf("Mobile") || -1 !== bb.indexOf("Mac") && (0, Eb.f)() && "ontouchend" in document
        }, this._checkForMobile(), (0, Eb.j)() && window.addEventListener("resize", this._checkForMobile))
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
      _createImageBitmapFromSource(bb, wb) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(bb, wb) {
        return createImageBitmap(bb, wb)
      }
      resizeImageBitmap(bb, wb, Mb) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(bb) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(bb, wb) {
        if ("undefined" === typeof document) return new OffscreenCanvas(bb, wb);
        const Mb = document.createElement("canvas");
        return Mb.width = bb, Mb.height = wb, Mb
      }
      createCanvas(bb, wb) {
        return sb._CreateCanvas(bb, wb)
      }
      static _FileToolsLoadImage(bb, wb, Mb, eb, Hb, pb, Vb) {
        if (!Fb.d.loadImage) throw (0, tb.k)("FileTools");
        return Fb.d.loadImage(bb, wb, Mb, eb, Hb, pb, Vb)
      }
      _loadFile(bb, wb, Mb, eb, Hb, pb) {
        const Vb = (0, Fb.l)(bb, wb, Mb, eb, Hb, pb);
        return this._activeRequests.push(Vb), Vb.onCompleteObservable.add((() => {
          const bb = this._activeRequests.indexOf(Vb); - 1 !== bb && this._activeRequests.splice(bb, 1)
        })), Vb
      }
      static _FileToolsLoadFile(bb, wb, Mb, eb, Hb, pb) {
        if (Fb.d.loadFile) return Fb.d.loadFile(bb, wb, Mb, eb, Hb, pb);
        throw (0, tb.k)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), Hb.b.ResetCache();
        for (const wb of this._activeRequests) wb.abort();
        this._boundRenderFunction = null, this.vJ.notifyObservers(this), this.vJ.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, Eb.j)() && window.removeEventListener("resize", this._checkForMobile);
        const bb = pb.e.Instances.indexOf(this);
        bb >= 0 && pb.e.Instances.splice(bb, 1), pb.e.Instances.length || (pb.e.OnEnginesDisposedObservable.notifyObservers(this), pb.e.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(bb) {
        throw (0, tb.k)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(bb, wb) {
        for (let Mb = 0; Mb < pb.e.Instances.length; Mb++) {
          const eb = pb.e.Instances[Mb];
          for (let Mb = 0; Mb < eb.scenes.length; Mb++) eb.scenes[Mb].markAllMaterialsAsDirty(bb, wb)
        }
      }
      static GetCompatibleTextureLoader(bb, wb) {
        return null
      }
    }
    sb._RenderPassIdCounter = 0, sb._RescalePostProcessFactory = null, sb.CollisionsEpsilon = .001, sb.QueueNewFrame = Bb
  },
  41518: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    class eb {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? eb.ShadersRepository : eb.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? eb.ShadersStore : eb.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? eb.IncludesShadersStore : eb.IncludesShadersStoreWGSL
      }
    }
    eb.ShadersRepository = "src/Shaders/", eb.ShadersStore = {}, eb.IncludesShadersStore = {}, eb.ShadersRepositoryWGSL = "src/ShadersWGSL/", eb.ShadersStoreWGSL = {}, eb.IncludesShadersStoreWGSL = {}
  },
  41539: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ub,
      e: () => mb,
      f: () => Cb,
      h: () => tb,
      j: () => Eb,
      m: () => sb,
      p: () => Ob,
      s: () => Lb,
      v: () => Ib,
      y: () => lb,
      C: () => gb
    });
    class eb {
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
      _fillEffectInformation(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
        const lb = this.engine;
        if (lb.supportsUniformBuffers)
          for (const Ib in wb) bb.bindUniformBlock(Ib, wb[Ib]);
        let Lb;
        for (this.engine.getUniforms(this, Mb).forEach(((bb, wb) => {
            eb[Mb[wb]] = bb
          })), this._uniforms = eb, Lb = 0; Lb < Hb.length; Lb++) {
          null == bb.getUniform(Hb[Lb]) && (Hb.splice(Lb, 1), Lb--)
        }
        Hb.forEach(((bb, wb) => {
          pb[bb] = wb
        }));
        for (const Ib of lb.getAttributes(this, Vb)) gb.push(Ib)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(bb, wb) {
        const Mb = this._valueCache[bb],
          eb = wb.updateFlag;
        if (void 0 !== Mb && Mb === eb) return !1;
        const Hb = wb.ppb();
        let pb = this._matrixValueCache[bb];
        if (void 0 !== Mb && null !== Mb && void 0 !== pb) {
          let wb = !0;
          for (let bb = 15; bb >= 0; bb--)
            if (pb[bb] !== Hb[bb]) {
              wb = !1;
              break
            } if (wb) return this._valueCache[bb] = eb, !1
        }
        return void 0 === pb && (pb = this._matrixValueCache[bb] = new Float32Array(16)), pb.set(Hb), this._valueCache[bb] = eb, !0
      }
      _cacheFloat2(bb, wb, Mb) {
        let eb = this._valueCache[bb];
        if (!eb || 2 !== eb.length) return eb = [wb, Mb], this._valueCache[bb] = eb, !0;
        let Hb = !1;
        return eb[0] !== wb && (eb[0] = wb, Hb = !0), eb[1] !== Mb && (eb[1] = Mb, Hb = !0), Hb
      }
      _cacheFloat3(bb, wb, Mb, eb) {
        let Hb = this._valueCache[bb];
        if (!Hb || 3 !== Hb.length) return Hb = [wb, Mb, eb], this._valueCache[bb] = Hb, !0;
        let pb = !1;
        return Hb[0] !== wb && (Hb[0] = wb, pb = !0), Hb[1] !== Mb && (Hb[1] = Mb, pb = !0), Hb[2] !== eb && (Hb[2] = eb, pb = !0), pb
      }
      _cacheFloat4(bb, wb, Mb, eb, Hb) {
        let pb = this._valueCache[bb];
        if (!pb || 4 !== pb.length) return pb = [wb, Mb, eb, Hb], this._valueCache[bb] = pb, !0;
        let Vb = !1;
        return pb[0] !== wb && (pb[0] = wb, Vb = !0), pb[1] !== Mb && (pb[1] = Mb, Vb = !0), pb[2] !== eb && (pb[2] = eb, Vb = !0), pb[3] !== Hb && (pb[3] = Hb, Vb = !0), Vb
      }
      setInt(bb, wb) {
        const Mb = this._valueCache[bb];
        void 0 !== Mb && Mb === wb || this.engine.setInt(this._uniforms[bb], wb) && (this._valueCache[bb] = wb)
      }
      setInt2(bb, wb, Mb) {
        this._cacheFloat2(bb, wb, Mb) && (this.engine.setInt2(this._uniforms[bb], wb, Mb) || (this._valueCache[bb] = null))
      }
      setInt3(bb, wb, Mb, eb) {
        this._cacheFloat3(bb, wb, Mb, eb) && (this.engine.setInt3(this._uniforms[bb], wb, Mb, eb) || (this._valueCache[bb] = null))
      }
      setInt4(bb, wb, Mb, eb, Hb) {
        this._cacheFloat4(bb, wb, Mb, eb, Hb) && (this.engine.setInt4(this._uniforms[bb], wb, Mb, eb, Hb) || (this._valueCache[bb] = null))
      }
      setIntArray(bb, wb) {
        this._valueCache[bb] = null, this.engine.setIntArray(this._uniforms[bb], wb)
      }
      setIntArray2(bb, wb) {
        this._valueCache[bb] = null, this.engine.setIntArray2(this._uniforms[bb], wb)
      }
      setIntArray3(bb, wb) {
        this._valueCache[bb] = null, this.engine.setIntArray3(this._uniforms[bb], wb)
      }
      setIntArray4(bb, wb) {
        this._valueCache[bb] = null, this.engine.setIntArray4(this._uniforms[bb], wb)
      }
      setUInt(bb, wb) {
        const Mb = this._valueCache[bb];
        void 0 !== Mb && Mb === wb || this.engine.setUInt(this._uniforms[bb], wb) && (this._valueCache[bb] = wb)
      }
      setUInt2(bb, wb, Mb) {
        this._cacheFloat2(bb, wb, Mb) && (this.engine.setUInt2(this._uniforms[bb], wb, Mb) || (this._valueCache[bb] = null))
      }
      setUInt3(bb, wb, Mb, eb) {
        this._cacheFloat3(bb, wb, Mb, eb) && (this.engine.setUInt3(this._uniforms[bb], wb, Mb, eb) || (this._valueCache[bb] = null))
      }
      setUInt4(bb, wb, Mb, eb, Hb) {
        this._cacheFloat4(bb, wb, Mb, eb, Hb) && (this.engine.setUInt4(this._uniforms[bb], wb, Mb, eb, Hb) || (this._valueCache[bb] = null))
      }
      setUIntArray(bb, wb) {
        this._valueCache[bb] = null, this.engine.setUIntArray(this._uniforms[bb], wb)
      }
      setUIntArray2(bb, wb) {
        this._valueCache[bb] = null, this.engine.setUIntArray2(this._uniforms[bb], wb)
      }
      setUIntArray3(bb, wb) {
        this._valueCache[bb] = null, this.engine.setUIntArray3(this._uniforms[bb], wb)
      }
      setUIntArray4(bb, wb) {
        this._valueCache[bb] = null, this.engine.setUIntArray4(this._uniforms[bb], wb)
      }
      setArray(bb, wb) {
        this._valueCache[bb] = null, this.engine.setArray(this._uniforms[bb], wb)
      }
      setArray2(bb, wb) {
        this._valueCache[bb] = null, this.engine.setArray2(this._uniforms[bb], wb)
      }
      setArray3(bb, wb) {
        this._valueCache[bb] = null, this.engine.setArray3(this._uniforms[bb], wb)
      }
      setArray4(bb, wb) {
        this._valueCache[bb] = null, this.engine.setArray4(this._uniforms[bb], wb)
      }
      setMatrices(bb, wb) {
        wb && (this._valueCache[bb] = null, this.engine.setMatrices(this._uniforms[bb], wb))
      }
      setMatrix(bb, wb) {
        this._cacheMatrix(bb, wb) && (this.engine.setMatrices(this._uniforms[bb], wb.ppb()) || (this._valueCache[bb] = null))
      }
      setMatrix3x3(bb, wb) {
        this._valueCache[bb] = null, this.engine.setMatrix3x3(this._uniforms[bb], wb)
      }
      setMatrix2x2(bb, wb) {
        this._valueCache[bb] = null, this.engine.setMatrix2x2(this._uniforms[bb], wb)
      }
      setFloat(bb, wb) {
        const Mb = this._valueCache[bb];
        void 0 !== Mb && Mb === wb || this.engine.setFloat(this._uniforms[bb], wb) && (this._valueCache[bb] = wb)
      }
      setVector2(bb, wb) {
        this._cacheFloat2(bb, wb.x, wb.y) && (this.engine.setFloat2(this._uniforms[bb], wb.x, wb.y) || (this._valueCache[bb] = null))
      }
      setFloat2(bb, wb, Mb) {
        this._cacheFloat2(bb, wb, Mb) && (this.engine.setFloat2(this._uniforms[bb], wb, Mb) || (this._valueCache[bb] = null))
      }
      setVector3(bb, wb) {
        this._cacheFloat3(bb, wb.x, wb.y, wb.z) && (this.engine.setFloat3(this._uniforms[bb], wb.x, wb.y, wb.z) || (this._valueCache[bb] = null))
      }
      setFloat3(bb, wb, Mb, eb) {
        this._cacheFloat3(bb, wb, Mb, eb) && (this.engine.setFloat3(this._uniforms[bb], wb, Mb, eb) || (this._valueCache[bb] = null))
      }
      setVector4(bb, wb) {
        this._cacheFloat4(bb, wb.x, wb.y, wb.z, wb.w) && (this.engine.setFloat4(this._uniforms[bb], wb.x, wb.y, wb.z, wb.w) || (this._valueCache[bb] = null))
      }
      setQuaternion(bb, wb) {
        this._cacheFloat4(bb, wb.x, wb.y, wb.z, wb.w) && (this.engine.setFloat4(this._uniforms[bb], wb.x, wb.y, wb.z, wb.w) || (this._valueCache[bb] = null))
      }
      setFloat4(bb, wb, Mb, eb, Hb) {
        this._cacheFloat4(bb, wb, Mb, eb, Hb) && (this.engine.setFloat4(this._uniforms[bb], wb, Mb, eb, Hb) || (this._valueCache[bb] = null))
      }
      setColor3(bb, wb) {
        this._cacheFloat3(bb, wb.r, wb.g, wb.b) && (this.engine.setFloat3(this._uniforms[bb], wb.r, wb.g, wb.b) || (this._valueCache[bb] = null))
      }
      setColor4(bb, wb, Mb) {
        this._cacheFloat4(bb, wb.r, wb.g, wb.b, Mb) && (this.engine.setFloat4(this._uniforms[bb], wb.r, wb.g, wb.b, Mb) || (this._valueCache[bb] = null))
      }
      setDirectColor4(bb, wb) {
        this._cacheFloat4(bb, wb.r, wb.g, wb.b, wb.a) && (this.engine.setFloat4(this._uniforms[bb], wb.r, wb.g, wb.b, wb.a) || (this._valueCache[bb] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var Hb = Mb(41548);
    const pb = new WeakMap,
      Vb = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function gb(bb) {
      let wb = pb.get(bb);
      if (!wb) {
        if (!bb) return Vb;
        wb = {
          _webGLVersion: bb.TEXTURE_BINDING_3D ? 2 : 1,
          _context: bb,
          parallelShaderCompile: bb.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, pb.set(bb, wb)
      }
      return wb
    }

    function lb(bb) {
      pb.delete(bb)
    }

    function Lb(bb, wb, Mb, eb, Hb, pb) {
      const Vb = gb(eb);
      pb || (pb = Vb._createShaderProgramInjection ?? Ub);
      return pb(bb, Bb(wb, "vertex", eb, Vb._contextWasLost), Bb(Mb, "fragment", eb, Vb._contextWasLost), eb, Hb, Vb.validateShaderPrograms)
    }

    function Ib(bb, wb, Mb, eb, Hb) {
      let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Vb = arguments.length > 6 ? arguments[6] : void 0;
      const lb = gb(Hb);
      Vb || (Vb = lb._createShaderProgramInjection ?? Ub);
      const Lb = lb._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return Vb(bb, Fb(wb, "vertex", eb, Lb, Hb, lb._contextWasLost), Fb(Mb, "fragment", eb, Lb, Hb, lb._contextWasLost), Hb, pb, lb.validateShaderPrograms)
    }

    function Ob(bb, wb) {
      const Mb = new eb,
        Hb = gb(bb);
      return Hb.parallelShaderCompile && !Hb.disableParallelShaderCompile && (Mb.isParallelCompiled = !0), Mb.context = Hb._context, Mb
    }

    function Ub(bb, wb, Mb, eb) {
      let Hb = arguments.length > 5 ? arguments[5] : void 0;
      const pb = eb.createProgram();
      if (bb.program = pb, !pb) throw new Error("Unable to create program");
      return eb.attachShader(pb, wb), eb.attachShader(pb, Mb), eb.linkProgram(pb), bb.context = eb, bb.vertexShader = wb, bb.fragmentShader = Mb, bb.isParallelCompiled || Cb(bb, eb, Hb), pb
    }

    function tb(bb, wb, Mb) {
      const eb = bb;
      if (eb._isDisposed) return !1;
      const Hb = gb(wb);
      return !!(Hb && Hb.parallelShaderCompile && Hb.parallelShaderCompile.COMPLETION_STATUS_KHR && eb.program && wb.getProgramParameter(eb.program, Hb.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (Cb(eb, wb, Mb), !0)
    }

    function Cb(bb, wb, Mb) {
      const eb = bb.context,
        Hb = bb.vertexShader,
        pb = bb.fragmentShader,
        Vb = bb.program;
      if (!eb.getProgramParameter(Vb, eb.LINK_STATUS)) {
        if (!wb.getShaderParameter(Hb, wb.COMPILE_STATUS)) {
          const Mb = wb.getShaderInfoLog(Hb);
          if (Mb) throw bb.vertexCompilationError = Mb, new Error("VERTEX SHADER " + Mb)
        }
        if (!wb.getShaderParameter(pb, wb.COMPILE_STATUS)) {
          const Mb = wb.getShaderInfoLog(pb);
          if (Mb) throw bb.fragmentCompilationError = Mb, new Error("FRAGMENT SHADER " + Mb)
        }
        const Mb = eb.getProgramInfoLog(Vb);
        if (Mb) throw bb.programLinkError = Mb, new Error(Mb)
      }
      if (Mb) {
        eb.validateProgram(Vb);
        if (!eb.getProgramParameter(Vb, eb.VALIDATE_STATUS)) {
          const wb = eb.getProgramInfoLog(Vb);
          if (wb) throw bb.programValidationError = wb, new Error(wb)
        }
      }
      eb.deleteShader(Hb), eb.deleteShader(pb), bb.vertexShader = void 0, bb.fragmentShader = void 0, bb.onCompiled && (bb.onCompiled(), bb.onCompiled = void 0)
    }

    function Eb(bb, wb, Mb, eb, Hb, pb, Vb, lb, Ob) {
      let Ub = arguments.length > 10 ? arguments[10] : void 0,
        tb = arguments.length > 11 ? arguments[11] : void 0,
        Cb = arguments.length > 12 ? arguments[12] : void 0;
      const Eb = gb(bb.context);
      tb || (tb = Eb.createRawShaderProgramInjection ?? Lb), Cb || (Cb = Eb.createShaderProgramInjection ?? Ib);
      const Fb = bb;
      Fb.program = eb ? tb(Fb, wb, Mb, Fb.context, Ob) : Cb(Fb, wb, Mb, lb, Fb.context, Ob), Fb.program.__SPECTOR_rebuildProgram = Vb, Ub()
    }

    function Fb(bb, wb, Mb, eb, pb, Vb) {
      return Bb((0, Hb.h)(bb, Mb, eb), wb, pb, Vb)
    }

    function Bb(bb, wb, Mb, eb) {
      const Hb = Mb.createShader("vertex" === wb ? Mb.VERTEX_SHADER : Mb.FRAGMENT_SHADER);
      if (!Hb) {
        let bb, Hb = Mb.NO_ERROR;
        for (;
          (bb = Mb.getError()) !== Mb.NO_ERROR;) Hb = bb;
        throw new Error(`Something went wrong while creating a gl ${wb} shader object. gl error=${Hb}, gl isContextLost=${Mb.isContextLost()}, _contextWasLost=${eb}`)
      }
      return Mb.shaderSource(Hb, bb), Mb.compileShader(Hb), Hb
    }

    function sb(bb, wb) {
      wb.useProgram(bb)
    }

    function mb(bb, wb) {
      const Mb = bb;
      if (!Mb.isParallelCompiled) return void wb(bb);
      const eb = Mb.onCompiled;
      Mb.onCompiled = () => {
        eb?.(), wb(bb)
      }
    }
  },
  41511: (bb, wb, Mb) => {
    Mb.d(wb, {
      ThinEngine: () => zb
    });
    var eb = Mb(41514),
      Hb = Mb(41539),
      pb = Mb(41572),
      Vb = Mb(41592),
      gb = Mb(39971),
      lb = Mb(41535);
    class Lb {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(bb, wb, Mb, eb, Hb) {
        if (Hb.drawBuffersExtensionDisabled) {
          const wb = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          bb = bb.replace(wb, "")
        }
        return bb
      }
    }
    const Ib = /(flat\s)?\s*varying\s*.*/;
    class Ob {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(bb) {
        return bb.replace("attribute", "in")
      }
      varyingCheck(bb, wb) {
        return Ib.test(bb)
      }
      varyingProcessor(bb, wb) {
        return bb.replace("varying", wb ? "in" : "out")
      }
      postProcessor(bb, wb, Mb) {
        const eb = -1 !== bb.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (bb = (bb = bb.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), Mb) {
          const Mb = -1 !== bb.search(/layout *\(location *= *0\) *out/g),
            Hb = -1 !== wb.indexOf("#define DUAL_SOURCE_BLENDING"),
            pb = Hb ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          Hb && (bb = "#extension GL_EXT_blend_func_extended : require\n" + bb), bb = (bb = (bb = (bb = (bb = (bb = (bb = bb.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (eb || Mb ? "" : pb) + "void main(")
        } else {
          wb.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (bb = "invariant gl_Position;\n" + bb);
          if (-1 !== wb.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + bb
        }
        return bb
      }
    }
    var Ub = Mb(41594),
      tb = Mb(41611),
      Cb = Mb(41618),
      Eb = Mb(41506),
      Fb = Mb(41548),
      Bb = Mb(41527),
      sb = Mb(41623),
      mb = Mb(41590);
    class hb {}
    class zb extends pb.d {
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
        return eb.b.ShadersRepository
      }
      static set ShadersRepository(bb) {
        eb.b.ShadersRepository = bb
      }
      get supportsUniformBuffers() {
        return this.HE > 1 && !this.disableUniformBuffers
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
      constructor(bb, wb, Mb, eb) {
        if (Mb = Mb || {}, super(wb ?? Mb.antialias, Mb, eb), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !bb) return;
        let pb;
        if (bb.getContext) {
          if (pb = bb, void 0 === Mb.preserveDrawingBuffer && (Mb.preserveDrawingBuffer = !1), void 0 === Mb.xrCompatible && (Mb.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const bb = navigator.userAgent;
            for (const wb of zb.ExceptionList) {
              const eb = wb.key,
                Hb = wb.targets;
              if (new RegExp(eb).test(bb)) {
                if (wb.capture && wb.captureConstraint) {
                  const Mb = wb.capture,
                    eb = wb.captureConstraint,
                    Hb = new RegExp(Mb).exec(bb);
                  if (Hb && Hb.length > 0) {
                    if (parseInt(Hb[Hb.length - 1]) >= eb) continue
                  }
                }
                for (const bb of Hb) switch (bb) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    Mb.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, Hb.y)(this._gl)
            } : (this._onContextLost = bb => {
              bb.preventDefault(), this._contextWasLost = !0, (0, Hb.y)(this._gl), gb.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, pb.addEventListener("webglcontextrestored", this._onContextRestored, !1), Mb.powerPreference = Mb.powerPreference || "high-performance"), pb.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (Mb.xrCompatible = !1), !Mb.disableWebGL2Support) try {
            this._gl = pb.getContext("webgl2", Mb) || pb.getContext("experimental-webgl2", Mb), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (Ib) {}
          if (!this._gl) {
            if (!pb) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = pb.getContext("webgl", Mb) || pb.getContext("experimental-webgl", Mb)
            } catch (Ib) {
              throw new Error("WebGL not supported", {
                cause: Ib
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = bb, pb = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const wb = this._gl.getContextAttributes();
          wb && (Mb.stencil = wb.stencil)
        }
        this._sharedInit(pb), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== Mb.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = Mb.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let Hb = 0; Hb < this._caps.maxVertexAttribs; Hb++) this._currentBufferPointers[Hb] = new hb;
        this._shaderProcessor = this.HE > 1 ? new Ob : new Lb;
        const Vb = `Babylon.js v${zb.Version}`;
        gb.b.Log(Vb + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Vb);
        const lb = (0, Hb.C)(this._gl);
        lb.validateShaderPrograms = this.validateShaderPrograms, lb.parallelShaderCompile = this._caps.parallelShaderCompile
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
        const wb = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!wb, this._alphaState = new mb.b(this._caps.blendParametersPerTarget), wb && (this._gl.blendEquationSeparateIndexed = wb.blendEquationSeparateiOES.bind(wb), this._gl.blendEquationIndexed = wb.blendEquationiOES.bind(wb), this._gl.blendFuncSeparateIndexed = wb.blendFuncSeparateiOES.bind(wb), this._gl.blendFuncIndexed = wb.blendFunciOES.bind(wb), this._gl.colorMaskIndexed = wb.colorMaskiOES.bind(wb), this._gl.disableIndexed = wb.disableiOES.bind(wb), this._gl.enableIndexed = wb.enableiOES.bind(wb)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const bb = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== bb) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = bb.drawBuffersWEBGL.bind(bb), this._caps.maxDrawBuffers = this._gl.getParameter(bb.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let wb = 0; wb < 16; wb++) this._gl["COLOR_ATTACHMENT" + wb + "_WEBGL"] = bb["COLOR_ATTACHMENT" + wb + "_WEBGL"]
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
            wb = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (bb && wb && (this._caps.highPrecisionShaderSupported = 0 !== bb.precision && 0 !== wb.precision, this._caps.shaderFloatPrecision = Math.min(bb.precision, wb.precision)), !this._shouldUseHighPrecisionShader) {
            const bb = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              wb = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            bb && wb && (this._caps.shaderFloatPrecision = Math.min(bb.precision, wb.precision))
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
        for (let Mb = 0; Mb < this._maxSimultaneousTextures; Mb++) this._nextFreeTextureSlots.push(Mb);
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
      get HE() {
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
      clear(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const pb = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = pb;
        let Vb = 0;
        if (wb && bb) {
          let wb = !0;
          if (this._currentRenderTarget) {
            const Mb = this._currentRenderTarget.texture?.format;
            if (void 0 !== Mb && (0, sb.g)(Mb)) {
              const Mb = this._currentRenderTarget.texture?.type;
              void 0 !== Mb && (0, sb.k)(Mb) ? (zb._TempClearColorUint32[0] = 255 * bb.r, zb._TempClearColorUint32[1] = 255 * bb.g, zb._TempClearColorUint32[2] = 255 * bb.b, zb._TempClearColorUint32[3] = 255 * bb.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, zb._TempClearColorUint32), wb = !1) : (zb._TempClearColorInt32[0] = 255 * bb.r, zb._TempClearColorInt32[1] = 255 * bb.g, zb._TempClearColorInt32[2] = 255 * bb.b, zb._TempClearColorInt32[3] = 255 * bb.a, this._gl.clearBufferiv(this._gl.COLOR, 0, zb._TempClearColorInt32), wb = !1)
            }
          }
          wb && (this._gl.clearColor(bb.r, bb.g, bb.b, void 0 !== bb.a ? bb.a : 1), Vb |= this._gl.COLOR_BUFFER_BIT)
        }
        Mb && (this.rHb ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Vb |= this._gl.DEPTH_BUFFER_BIT), eb && (this._gl.clearStencil(Hb), Vb |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Vb)
      }
      _clearColorAttachment(bb, wb, Mb, eb) {
        if ((0, sb.g)(Mb)) {
          const Mb = (0, sb.k)(eb),
            Hb = Mb ? zb._TempClearColorUint32 : zb._TempClearColorInt32;
          return Hb[0] = wb.r, Hb[1] = wb.g, Hb[2] = wb.b, Hb[3] = wb.a, void(Mb ? this._gl.clearBufferuiv(this._gl.COLOR, bb, Hb) : this._gl.clearBufferiv(this._gl.COLOR, bb, Hb))
        }
        zb._TempClearColorFloat32[0] = wb.r, zb._TempClearColorFloat32[1] = wb.g, zb._TempClearColorFloat32[2] = wb.b, zb._TempClearColorFloat32[3] = wb.a, this._gl.clearBufferfv(this._gl.COLOR, bb, zb._TempClearColorFloat32)
      }
      _viewport(bb, wb, Mb, eb) {
        bb === this._viewportCached.x && wb === this._viewportCached.y && Mb === this._viewportCached.z && eb === this._viewportCached.w || (this._viewportCached.x = bb, this._viewportCached.y = wb, this._viewportCached.z = Mb, this._viewportCached.w = eb, this._gl.viewport(bb, wb, Mb, eb))
      }
      tO() {
        super.tO(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = arguments.length > 3 ? arguments[3] : void 0,
          Hb = arguments.length > 4 ? arguments[4] : void 0,
          pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const lb = bb;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = bb, this._integerMRTAttachmentsMask = !bb.isMulti && bb.texture && (0, sb.g)(bb.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(lb._framebuffer);
        const Lb = this._gl;
        bb.isMulti || (bb.is2DArray || bb.is3D ? (Lb.framebufferTextureLayer(Lb.FRAMEBUFFER, Lb.COLOR_ATTACHMENT0, bb.texture._hardwareTexture?.underlyingResource, pb, Vb), lb._currentLOD = pb) : bb.isCube ? Lb.framebufferTexture2D(Lb.FRAMEBUFFER, Lb.COLOR_ATTACHMENT0, Lb.TEXTURE_CUBE_MAP_POSITIVE_X + wb, bb.texture._hardwareTexture?.underlyingResource, pb) : lb._currentLOD !== pb && (Lb.framebufferTexture2D(Lb.FRAMEBUFFER, Lb.COLOR_ATTACHMENT0, Lb.TEXTURE_2D, bb.texture._hardwareTexture?.underlyingResource, pb), lb._currentLOD = pb));
        const Ib = bb._depthStencilTexture;
        if (Ib) {
          bb.is3D && (bb.texture.width === Ib.width && bb.texture.height === Ib.height && bb.texture.depth === Ib.depth || gb.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const Mb = bb._depthStencilTextureWithStencil ? Lb.DEPTH_STENCIL_ATTACHMENT : Lb.DEPTH_ATTACHMENT;
          bb.is2DArray || bb.is3D ? Lb.framebufferTextureLayer(Lb.FRAMEBUFFER, Mb, Ib._hardwareTexture?.underlyingResource, pb, Vb) : bb.isCube ? Lb.framebufferTexture2D(Lb.FRAMEBUFFER, Mb, Lb.TEXTURE_CUBE_MAP_POSITIVE_X + wb, Ib._hardwareTexture?.underlyingResource, pb) : Lb.framebufferTexture2D(Lb.FRAMEBUFFER, Mb, Lb.TEXTURE_2D, Ib._hardwareTexture?.underlyingResource, pb)
        }
        lb._MSAAFramebuffer && this._bindUnboundFramebuffer(lb._MSAAFramebuffer), this._cachedViewport && !Hb ? this.setViewport(this._cachedViewport, Mb, eb) : (Mb || (Mb = bb.width, pb && (Mb /= Math.pow(2, pb))), eb || (eb = bb.height, pb && (eb /= Math.pow(2, pb))), this._viewport(0, 0, Mb, eb)), this.wipeCaches()
      }
      setStateCullFaceType(bb, wb) {
        const Mb = this.cullBackFaces ?? bb ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== Mb || wb) && (this._depthCullingState.cullFace = Mb)
      }
      setState(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Hb = arguments.length > 4 ? arguments[4] : void 0,
          pb = arguments.length > 5 ? arguments[5] : void 0,
          Vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== bb || Mb) && (this._depthCullingState.cull = bb), this.setStateCullFaceType(Hb, Mb), this.setZOffset(wb), this.setZOffsetUnits(Vb);
        const gb = eb ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== gb || Mb) && (this._depthCullingState.frontFace = gb), this._stencilStateComposer.stencilMaterial = pb
      }
      _resolveAndGenerateMipMapsFramebuffer(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        bb.disableAutomaticMSAAResolve || (bb.isMulti ? this.resolveMultiFramebuffer(bb) : this.resolveFramebuffer(bb)), wb || (bb.isMulti ? this.generateMipMapsMultiFramebuffer(bb) : this.generateMipMapsFramebuffer(bb))
      }
      _bindUnboundFramebuffer(bb) {
        this._currentFramebuffer !== bb && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, bb), this._currentFramebuffer = bb)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(bb) {
        const wb = this._getTextureTarget(bb);
        this._bindTextureDirectly(wb, bb, !0), this._gl.generateMipmap(wb), this._bindTextureDirectly(wb, null)
      }
      unBindFramebuffer(bb, wb, Mb) {
        const eb = bb;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(bb, wb), Mb && (eb._MSAAFramebuffer && this._bindUnboundFramebuffer(eb._framebuffer), Mb()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(bb) {
        bb.isMulti || !bb.texture?.generateMipMaps || bb.isCube || this.generateMipmaps(bb.texture)
      }
      resolveFramebuffer(bb) {
        const wb = bb,
          Mb = this._gl;
        if (!wb._MSAAFramebuffer || wb.isMulti) return;
        let eb = wb.resolveMSAAColors ? Mb.COLOR_BUFFER_BIT : 0;
        eb |= wb._generateDepthBuffer && wb.resolveMSAADepth ? Mb.DEPTH_BUFFER_BIT : 0, eb |= wb._generateStencilBuffer && wb.resolveMSAAStencil ? Mb.STENCIL_BUFFER_BIT : 0, Mb.bindFramebuffer(Mb.READ_FRAMEBUFFER, wb._MSAAFramebuffer), Mb.bindFramebuffer(Mb.DRAW_FRAMEBUFFER, wb._framebuffer), Mb.blitFramebuffer(0, 0, bb.width, bb.height, 0, 0, bb.width, bb.height, eb, Mb.NEAREST)
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
      createVertexBuffer(bb, wb, Mb) {
        return this._createVertexBuffer(bb, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(bb, wb) {
        const Mb = this._gl.createBuffer();
        if (!Mb) throw new Error("Unable to create vertex buffer");
        const eb = new Ub.e(Mb);
        return this.bindArrayBuffer(eb), "number" !== typeof bb ? bb instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(bb), wb), eb.qO = 4 * bb.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, bb, wb), eb.qO = bb.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(bb), wb), eb.qO = bb), this._resetVertexBufferBinding(), eb.references = 1, eb
      }
      createDynamicVertexBuffer(bb, wb) {
        return this._createVertexBuffer(bb, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(bb, wb, Mb) {
        const eb = this._gl.createBuffer(),
          Hb = new Ub.e(eb);
        if (!eb) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(Hb);
        const pb = this._normalizeIndexData(bb);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, pb, wb ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), Hb.references = 1, Hb.is32Bits = 4 === pb.BYTES_PER_ELEMENT, Hb
      }
      _normalizeIndexData(bb) {
        if (2 === bb.BYTES_PER_ELEMENT) return bb;
        if (this._caps.uintIndices) {
          if (bb instanceof Uint32Array) return bb;
          for (let wb = 0; wb < bb.length; wb++)
            if (bb[wb] >= 65535) return new Uint32Array(bb);
          return new Uint16Array(bb)
        }
        return new Uint16Array(bb)
      }
      bindArrayBuffer(bb) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(bb, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(bb, wb, Mb) {
        const eb = bb.program,
          Hb = this._gl.getUniformBlockIndex(eb, wb);
        this._gl.uniformBlockBinding(eb, Hb, Mb)
      }
      bindIndexBuffer(bb) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(bb, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(bb, wb) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[wb] !== bb) && (this._gl.bindBuffer(wb, bb ? bb.underlyingResource : null), this._currentBoundBuffer[wb] = bb)
      }
      updateArrayBuffer(bb) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, bb)
      }
      _vertexAttribPointer(bb, wb, Mb, eb, Hb, pb, Vb) {
        const gb = this._currentBufferPointers[wb];
        if (!gb) return;
        let lb = !1;
        gb.active ? (gb.buffer !== bb && (gb.buffer = bb, lb = !0), gb.size !== Mb && (gb.size = Mb, lb = !0), gb.type !== eb && (gb.type = eb, lb = !0), gb.normalized !== Hb && (gb.normalized = Hb, lb = !0), gb.stride !== pb && (gb.stride = pb, lb = !0), gb.offset !== Vb && (gb.offset = Vb, lb = !0)) : (lb = !0, gb.active = !0, gb.index = wb, gb.size = Mb, gb.type = eb, gb.normalized = Hb, gb.stride = pb, gb.offset = Vb, gb.buffer = bb), (lb || this._vaoRecordInProgress) && (this.bindArrayBuffer(bb), eb === this._gl.UNSIGNED_INT || eb === this._gl.INT ? this._gl.vertexAttribIPointer(wb, Mb, eb, pb, Vb) : this._gl.vertexAttribPointer(wb, Mb, eb, Hb, pb, Vb))
      }
      _bindIndexBufferWithCache(bb) {
        null != bb && this._cachedIndexBuffer !== bb && (this._cachedIndexBuffer = bb, this.bindIndexBuffer(bb), this._uintIndicesCurrentlySet = bb.is32Bits)
      }
      _bindVertexBuffersAttributes(bb, wb, Mb) {
        const eb = wb.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let Hb = 0; Hb < eb.length; Hb++) {
          const pb = wb.getAttributeLocation(Hb);
          if (pb >= 0) {
            const wb = eb[Hb];
            let Vb = null;
            if (Mb && (Vb = Mb[wb]), Vb || (Vb = bb[wb]), !Vb) continue;
            this._gl.enableVertexAttribArray(pb), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[pb] = !0);
            const gb = Vb.getBuffer();
            gb && (this._vertexAttribPointer(gb, pb, Vb.getSize(), Vb.type, Vb.normalized, Vb.byteStride, Vb.byteOffset), Vb.getIsInstanced() && (this._gl.vertexAttribDivisor(pb, Vb.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(pb), this._currentInstanceBuffers.push(gb))))
          }
        }
      }
      recordVertexArrayObject(bb, wb, Mb, eb) {
        const Hb = this._gl.createVertexArray();
        if (!Hb) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(Hb), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(bb, Mb, eb), this.bindIndexBuffer(wb), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), Hb
      }
      bindVertexArrayObject(bb, wb) {
        this._cachedVertexArrayObject !== bb && (this._cachedVertexArrayObject = bb, this._gl.bindVertexArray(bb), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != wb && wb.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(bb, wb, Mb, eb, Hb) {
        if (this._cachedVertexBuffers !== bb || this._cachedEffectForVertexBuffers !== Hb) {
          this._cachedVertexBuffers = bb, this._cachedEffectForVertexBuffers = Hb;
          const wb = Hb.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let pb = 0;
          for (let Vb = 0; Vb < wb; Vb++)
            if (Vb < Mb.length) {
              const wb = Hb.getAttributeLocation(Vb);
              wb >= 0 && (this._gl.enableVertexAttribArray(wb), this._vertexAttribArraysEnabled[wb] = !0, this._vertexAttribPointer(bb, wb, Mb[Vb], this._gl.FLOAT, !1, eb, pb)), pb += 4 * Mb[Vb]
            }
        }
        this._bindIndexBufferWithCache(wb)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(bb, wb, Mb, eb) {
        this._cachedVertexBuffers === bb && this._cachedEffectForVertexBuffers === Mb || (this._cachedVertexBuffers = bb, this._cachedEffectForVertexBuffers = Mb, this._bindVertexBuffersAttributes(bb, Mb, eb)), this._bindIndexBufferWithCache(wb)
      }
      unbindInstanceAttributes() {
        let bb;
        for (let wb = 0, Mb = this._currentInstanceLocations.length; wb < Mb; wb++) {
          const Mb = this._currentInstanceBuffers[wb];
          bb != Mb && Mb.references && (bb = Mb, this.bindArrayBuffer(Mb));
          const eb = this._currentInstanceLocations[wb];
          this._gl.vertexAttribDivisor(eb, 0)
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
      updateAndBindInstancesBuffer(bb, wb, Mb) {
        if (this.bindArrayBuffer(bb), wb && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, wb), void 0 !== Mb[0].index) this.bindInstancesBuffer(bb, Mb, !0);
        else
          for (let eb = 0; eb < 4; eb++) {
            const wb = Mb[eb];
            this._vertexAttribArraysEnabled[wb] || (this._gl.enableVertexAttribArray(wb), this._vertexAttribArraysEnabled[wb] = !0), this._vertexAttribPointer(bb, wb, 4, this._gl.FLOAT, !1, 64, 16 * eb), this._gl.vertexAttribDivisor(wb, 1), this._currentInstanceLocations.push(wb), this._currentInstanceBuffers.push(bb)
          }
      }
      bindInstancesBuffer(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(bb);
        let eb = 0;
        if (Mb)
          for (let Hb = 0; Hb < wb.length; Hb++) {
            eb += 4 * wb[Hb].attributeSize
          }
        for (let Hb = 0; Hb < wb.length; Hb++) {
          const Mb = wb[Hb];
          void 0 === Mb.index && (Mb.index = this._currentEffect.getAttributeLocationByName(Mb.attributeName)), Mb.index < 0 || (this._vertexAttribArraysEnabled[Mb.index] || (this._gl.enableVertexAttribArray(Mb.index), this._vertexAttribArraysEnabled[Mb.index] = !0), this._vertexAttribPointer(bb, Mb.index, Mb.attributeSize, Mb.attributeType || this._gl.FLOAT, Mb.normalized || !1, eb, Mb.offset), this._gl.vertexAttribDivisor(Mb.index, void 0 === Mb.divisor ? 1 : Mb.divisor), this._currentInstanceLocations.push(Mb.index), this._currentInstanceBuffers.push(bb))
        }
      }
      disableInstanceAttributeByName(bb) {
        if (!this._currentEffect) return;
        const wb = this._currentEffect.getAttributeLocationByName(bb);
        this.disableInstanceAttribute(wb)
      }
      disableInstanceAttribute(bb) {
        let wb, Mb = !1;
        for (; - 1 !== (wb = this._currentInstanceLocations.indexOf(bb));) this._currentInstanceLocations.splice(wb, 1), this._currentInstanceBuffers.splice(wb, 1), Mb = !0;
        Mb && (this._gl.vertexAttribDivisor(bb, 0), this.disableAttributeByIndex(bb))
      }
      disableAttributeByIndex(bb) {
        this._gl.disableVertexAttribArray(bb), this._vertexAttribArraysEnabled[bb] = !1, this._currentBufferPointers[bb].active = !1
      }
      draw(bb, wb, Mb, eb) {
        this.drawElementsType(bb ? 0 : 1, wb, Mb, eb)
      }
      drawPointClouds(bb, wb, Mb) {
        this.drawArraysType(2, bb, wb, Mb)
      }
      drawUnIndexed(bb, wb, Mb, eb) {
        this.drawArraysType(bb ? 0 : 1, wb, Mb, eb)
      }
      drawElementsType(bb, wb, Mb, eb) {
        this.applyStates(), this._reportDrawCall();
        const Hb = this._drawMode(bb),
          pb = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          Vb = this._uintIndicesCurrentlySet ? 4 : 2;
        eb ? this._gl.drawElementsInstanced(Hb, Mb, pb, wb * Vb, eb) : this._gl.drawElements(Hb, Mb, pb, wb * Vb)
      }
      drawArraysType(bb, wb, Mb, eb) {
        this.applyStates(), this._reportDrawCall();
        const Hb = this._drawMode(bb);
        eb ? this._gl.drawArraysInstanced(Hb, wb, Mb, eb) : this._gl.drawArrays(Hb, wb, Mb)
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
        const wb = bb.getPipelineContext();
        wb && this._deletePipelineContext(wb)
      }
      _deletePipelineContext(bb) {
        const wb = bb;
        wb && wb.program && (wb.program.__SPECTOR_rebuildProgram = null, (0, Bb.f)(wb), this._gl && (this._currentProgram === wb.program && this._setProgram(null), this._gl.deleteProgram(wb.program)))
      }
      _getGlobalDefines(bb) {
        return (0, Fb.j)(bb, this.isNDCHalfZRange, this.rHb, this.useExactSrgbConversions)
      }
      createEffect(bb, wb, Mb, pb, Vb, gb, lb, Lb, Ib) {
        let Ob = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Ub = arguments.length > 10 ? arguments[10] : void 0;
        const tb = "string" === typeof bb ? bb : bb.vertexToken || bb.vertexSource || bb.vertexElement || bb.vertex,
          Cb = "string" === typeof bb ? bb : bb.fragmentToken || bb.fragmentSource || bb.fragmentElement || bb.fragment,
          Eb = this._getGlobalDefines(),
          Fb = void 0 !== wb.attributes;
        let Bb = Vb ?? wb.defines ?? "";
        Eb && (Bb += Eb);
        const sb = tb + "+" + Cb + "@" + Bb;
        if (this._compiledEffects[sb]) {
          const bb = this._compiledEffects[sb];
          return lb && bb.isReady() && lb(bb), bb._refCount++, bb
        }
        this._gl && (0, Hb.C)(this._gl);
        const mb = new eb.b(bb, wb, Fb ? this : Mb, pb, this, Vb, gb, lb, Lb, Ib, sb, wb.shaderLanguage ?? Ob, wb.extraInitializationsAsync ?? Ub);
        return this._compiledEffects[sb] = mb, mb
      }
      _getShaderSource(bb) {
        return this._gl.getShaderSource(bb)
      }
      createRawShaderProgram(bb, wb, Mb, eb) {
        let pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Vb = (0, Hb.C)(this._gl);
        return Vb._contextWasLost = this._contextWasLost, Vb.validateShaderPrograms = this.validateShaderPrograms, (0, Hb.s)(bb, wb, Mb, eb || this._gl, pb)
      }
      createShaderProgram(bb, wb, Mb, eb, pb) {
        let Vb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const gb = (0, Hb.C)(this._gl);
        return gb._contextWasLost = this._contextWasLost, gb.validateShaderPrograms = this.validateShaderPrograms, (0, Hb.v)(bb, wb, Mb, eb, pb || this._gl, Vb)
      }
      inlineShaderCode(bb) {
        return bb
      }
      createPipelineContext(bb) {
        if (this._gl) {
          (0, Hb.C)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const wb = (0, Hb.p)(this._gl, bb);
        return wb.engine = this, wb
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(bb) {
        return (0, Hb.f)(bb, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(bb, wb, Mb, eb, pb, Vb, gb, lb, Lb, Ib, Ob) {
        const Ub = (0, Hb.C)(this._gl);
        return Ub._contextWasLost = this._contextWasLost, Ub.validateShaderPrograms = this.validateShaderPrograms, Ub._createShaderProgramInjection = this._createShaderProgram.bind(this), Ub.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Ub.createShaderProgramInjection = this.createShaderProgram.bind(this), Ub.loadFileInjection = this._loadFile.bind(this), (0, Hb.j)(bb, wb, Mb, eb, pb, Vb, gb, lb, Lb, Ib, Ob)
      }
      _createShaderProgram(bb, wb, Mb, eb) {
        let pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, Hb.c)(bb, wb, Mb, eb, pb)
      }
      _isRenderingStateCompiled(bb) {
        return !this._isDisposed && (0, Hb.h)(bb, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(bb, wb) {
        (0, Hb.e)(bb, wb)
      }
      getUniforms(bb, wb) {
        const Mb = new Array,
          eb = bb;
        for (let Hb = 0; Hb < wb.length; Hb++) Mb.push(this._gl.getUniformLocation(eb.program, wb[Hb]));
        return Mb
      }
      getAttributes(bb, wb) {
        const Mb = [],
          eb = bb;
        for (let pb = 0; pb < wb.length; pb++) try {
          Mb.push(this._gl.getAttribLocation(eb.program, wb[pb]))
        } catch (Hb) {
          Mb.push(-1)
        }
        return Mb
      }
      enableEffect(bb) {
        (bb = null !== bb && (0, Vb.d)(bb) ? bb.effect : bb) && bb !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(bb), this._currentEffect = bb, bb.onBind && bb.onBind(bb), bb._onBindObservable && bb._onBindObservable.notifyObservers(bb))
      }
      setInt(bb, wb) {
        return !!bb && (this._gl.uniform1i(bb, wb), !0)
      }
      setInt2(bb, wb, Mb) {
        return !!bb && (this._gl.uniform2i(bb, wb, Mb), !0)
      }
      setInt3(bb, wb, Mb, eb) {
        return !!bb && (this._gl.uniform3i(bb, wb, Mb, eb), !0)
      }
      setInt4(bb, wb, Mb, eb, Hb) {
        return !!bb && (this._gl.uniform4i(bb, wb, Mb, eb, Hb), !0)
      }
      setIntArray(bb, wb) {
        return !!bb && (this._gl.uniform1iv(bb, wb), !0)
      }
      setIntArray2(bb, wb) {
        return !(!bb || wb.length % 2 !== 0) && (this._gl.uniform2iv(bb, wb), !0)
      }
      setIntArray3(bb, wb) {
        return !(!bb || wb.length % 3 !== 0) && (this._gl.uniform3iv(bb, wb), !0)
      }
      setIntArray4(bb, wb) {
        return !(!bb || wb.length % 4 !== 0) && (this._gl.uniform4iv(bb, wb), !0)
      }
      setUInt(bb, wb) {
        return !!bb && (this._gl.uniform1ui(bb, wb), !0)
      }
      setUInt2(bb, wb, Mb) {
        return !!bb && (this._gl.uniform2ui(bb, wb, Mb), !0)
      }
      setUInt3(bb, wb, Mb, eb) {
        return !!bb && (this._gl.uniform3ui(bb, wb, Mb, eb), !0)
      }
      setUInt4(bb, wb, Mb, eb, Hb) {
        return !!bb && (this._gl.uniform4ui(bb, wb, Mb, eb, Hb), !0)
      }
      setUIntArray(bb, wb) {
        return !!bb && (this._gl.uniform1uiv(bb, wb), !0)
      }
      setUIntArray2(bb, wb) {
        return !(!bb || wb.length % 2 !== 0) && (this._gl.uniform2uiv(bb, wb), !0)
      }
      setUIntArray3(bb, wb) {
        return !(!bb || wb.length % 3 !== 0) && (this._gl.uniform3uiv(bb, wb), !0)
      }
      setUIntArray4(bb, wb) {
        return !(!bb || wb.length % 4 !== 0) && (this._gl.uniform4uiv(bb, wb), !0)
      }
      setArray(bb, wb) {
        return !!bb && (!(wb.length < 1) && (this._gl.uniform1fv(bb, wb), !0))
      }
      setArray2(bb, wb) {
        return !(!bb || wb.length % 2 !== 0) && (this._gl.uniform2fv(bb, wb), !0)
      }
      setArray3(bb, wb) {
        return !(!bb || wb.length % 3 !== 0) && (this._gl.uniform3fv(bb, wb), !0)
      }
      setArray4(bb, wb) {
        return !(!bb || wb.length % 4 !== 0) && (this._gl.uniform4fv(bb, wb), !0)
      }
      setMatrices(bb, wb) {
        return !!bb && (this._gl.uniformMatrix4fv(bb, !1, wb), !0)
      }
      setMatrix3x3(bb, wb) {
        return !!bb && (this._gl.uniformMatrix3fv(bb, !1, wb), !0)
      }
      setMatrix2x2(bb, wb) {
        return !!bb && (this._gl.uniformMatrix2fv(bb, !1, wb), !0)
      }
      setFloat(bb, wb) {
        return !!bb && (this._gl.uniform1f(bb, wb), !0)
      }
      setFloat2(bb, wb, Mb) {
        return !!bb && (this._gl.uniform2f(bb, wb, Mb), !0)
      }
      setFloat3(bb, wb, Mb, eb) {
        return !!bb && (this._gl.uniform3f(bb, wb, Mb, eb), !0)
      }
      setFloat4(bb, wb, Mb, eb, Hb) {
        return !!bb && (this._gl.uniform4f(bb, wb, Mb, eb, Hb), !0)
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
      _getSamplingParameters(bb, wb) {
        const Mb = this._gl;
        let eb = Mb.NEAREST,
          Hb = Mb.NEAREST,
          pb = !1;
        switch (bb) {
          case 11:
            eb = Mb.LINEAR, Hb = wb ? Mb.LINEAR_MIPMAP_NEAREST : Mb.LINEAR;
            break;
          case 3:
            eb = Mb.LINEAR, pb = !0, Hb = wb ? Mb.LINEAR_MIPMAP_LINEAR : Mb.LINEAR;
            break;
          case 8:
            pb = !0, eb = Mb.NEAREST, Hb = wb ? Mb.NEAREST_MIPMAP_LINEAR : Mb.NEAREST;
            break;
          case 4:
            eb = Mb.NEAREST, Hb = wb ? Mb.NEAREST_MIPMAP_NEAREST : Mb.NEAREST;
            break;
          case 5:
            eb = Mb.NEAREST, Hb = wb ? Mb.LINEAR_MIPMAP_NEAREST : Mb.LINEAR;
            break;
          case 6:
            pb = !0, eb = Mb.NEAREST, Hb = wb ? Mb.LINEAR_MIPMAP_LINEAR : Mb.LINEAR;
            break;
          case 7:
            eb = Mb.NEAREST, Hb = Mb.LINEAR;
            break;
          case 1:
            eb = Mb.NEAREST, Hb = Mb.NEAREST;
            break;
          case 9:
            eb = Mb.LINEAR, Hb = wb ? Mb.NEAREST_MIPMAP_NEAREST : Mb.NEAREST;
            break;
          case 10:
            pb = !0, eb = Mb.LINEAR, Hb = wb ? Mb.NEAREST_MIPMAP_LINEAR : Mb.NEAREST;
            break;
          case 2:
            eb = Mb.LINEAR, Hb = Mb.LINEAR;
            break;
          case 12:
            eb = Mb.LINEAR, Hb = Mb.NEAREST
        }
        return {
          min: Hb,
          mag: eb,
          hasMipMaps: pb
        }
      }
      _createTexture() {
        const bb = this._gl.createTexture();
        if (!bb) throw new Error("Unable to create texture");
        return bb
      }
      _createHardwareTexture() {
        return new Cb.e(this._createTexture(), this._gl)
      }
      _createInternalTexture(bb, wb) {
        let Mb, eb, Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pb = !1,
          Vb = 0,
          lb = 3,
          Lb = 5,
          Ib = !1,
          Ob = 1,
          Ub = !1,
          tb = 0,
          Cb = !1;
        void 0 !== wb && "object" === typeof wb ? (Mb = !!wb.generateMipMaps, pb = !!wb.createMipMaps, Vb = void 0 === wb.type ? 0 : wb.type, lb = void 0 === wb.samplingMode ? 3 : wb.samplingMode, Lb = void 0 === wb.format ? 5 : wb.format, Ib = void 0 !== wb.useSRGBBuffer && wb.useSRGBBuffer, Ob = wb.samples ?? 1, eb = wb.label, Ub = !!wb.createMSAATexture, tb = wb.comparisonFunction || 0, Cb = !!wb.isCube) : Mb = !!wb, Ib && (Ib = this._caps.supportSRGBBuffers && (this.HE > 1 || this.isWebGPU)), (1 !== Vb || this._caps.textureFloatLinearFiltering) && (2 !== Vb || this._caps.textureHalfFloatLinearFiltering) || (lb = 1), 1 !== Vb || this._caps.textureFloat || (Vb = 0, gb.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const Fb = (0, sb.e)(Lb),
          Bb = (0, sb.d)(Lb),
          mb = this._gl,
          hb = new Eb.e(this, Hb),
          zb = bb.width || bb,
          Xb = bb.height || bb,
          xb = bb.depth || 0,
          jb = bb.layers || 0,
          Kb = this._getSamplingParameters(lb, (Mb || pb) && !Fb),
          rb = 0 !== jb ? mb.TEXTURE_2D_ARRAY : 0 !== xb ? mb.TEXTURE_3D : Cb ? mb.TEXTURE_CUBE_MAP : mb.TEXTURE_2D,
          Rb = Fb ? this._getInternalFormatFromDepthTextureFormat(Lb, !0, Bb) : this._getRGBABufferInternalSizedFormat(Vb, Lb, Ib),
          Db = Fb ? Bb ? mb.DEPTH_STENCIL : mb.DEPTH_COMPONENT : this._getInternalFormat(Lb),
          cb = Fb ? this._getWebGLTextureTypeFromDepthTextureFormat(Lb) : this._getWebGLTextureType(Vb);
        if (this._bindTextureDirectly(rb, hb), 0 !== jb) hb.is2DArray = !0, mb.texImage3D(rb, 0, Rb, zb, Xb, jb, 0, Db, cb, null);
        else if (0 !== xb) hb.is3D = !0, mb.texImage3D(rb, 0, Rb, zb, Xb, xb, 0, Db, cb, null);
        else if (Cb) {
          hb.isCube = !0;
          for (let bb = 0; bb < 6; bb++) mb.texImage2D(mb.TEXTURE_CUBE_MAP_POSITIVE_X + bb, 0, Rb, zb, Xb, 0, Db, cb, null)
        } else mb.texImage2D(rb, 0, Rb, zb, Xb, 0, Db, cb, null);
        if (mb.texParameteri(rb, mb.TEXTURE_MAG_FILTER, Kb.mag), mb.texParameteri(rb, mb.TEXTURE_MIN_FILTER, Kb.min), mb.texParameteri(rb, mb.TEXTURE_WRAP_S, mb.CLAMP_TO_EDGE), mb.texParameteri(rb, mb.TEXTURE_WRAP_T, mb.CLAMP_TO_EDGE), Fb && this.HE > 1 && (0 === tb ? (mb.texParameteri(rb, mb.TEXTURE_COMPARE_FUNC, 515), mb.texParameteri(rb, mb.TEXTURE_COMPARE_MODE, mb.NONE)) : (mb.texParameteri(rb, mb.TEXTURE_COMPARE_FUNC, tb), mb.texParameteri(rb, mb.TEXTURE_COMPARE_MODE, mb.COMPARE_REF_TO_TEXTURE))), (Mb || pb) && this._gl.generateMipmap(rb), this._bindTextureDirectly(rb, null), hb._useSRGBBuffer = Ib, hb.baseWidth = zb, hb.baseHeight = Xb, hb.width = zb, hb.height = Xb, hb.depth = jb || xb, hb.isReady = !0, hb.samples = Ob, hb.generateMipMaps = Mb, hb.samplingMode = lb, hb.type = Vb, hb.format = Lb, hb.label = eb, hb.comparisonFunction = tb, this._internalTexturesCache.push(hb), Ub) {
          let bb;
          if (bb = (0, sb.e)(hb.format) ? this._setupFramebufferDepthAttachments((0, sb.d)(hb.format), 19 !== hb.format, hb.width, hb.height, Ob, hb.format, !0) : this._createRenderBuffer(hb.width, hb.height, Ob, -1, this._getRGBABufferInternalSizedFormat(hb.type, hb.format, hb._useSRGBBuffer), -1), !bb) throw new Error("Unable to create render buffer");
          hb._autoMSAAManagement = !0;
          let wb = hb._hardwareTexture;
          wb || (wb = hb._hardwareTexture = this._createHardwareTexture()), wb.addMSAARenderBuffer(bb)
        }
        return hb
      }
      _getUseSRGBBuffer(bb, wb) {
        return bb && this._caps.supportSRGBBuffers && (this.HE > 1 || wb)
      }
      createTexture(bb, wb, Mb, eb) {
        var Hb = this;
        let pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Vb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          gb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Lb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Ib = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Ob = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Ub = arguments.length > 11 ? arguments[11] : void 0,
          tb = arguments.length > 12 ? arguments[12] : void 0,
          Cb = arguments.length > 13 ? arguments[13] : void 0,
          Fb = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(bb, wb, Mb, eb, pb, Vb, gb, (function() {
          for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
          return Hb._prepareWebGLTexture(...wb, Ib)
        }), ((bb, wb, Mb, Hb, pb, Vb) => {
          const gb = this._gl,
            lb = Mb.width === bb && Mb.height === wb;
          pb._creationFlags = Cb ?? 0;
          const Lb = this._getTexImageParametersForCreateTexture(pb.format, pb._useSRGBBuffer);
          if (lb) return gb.texImage2D(gb.TEXTURE_2D, 0, Lb.internalFormat, Lb.format, Lb.type, Mb), !1;
          const Ib = this._caps.maxTextureSize;
          if (Mb.width > Ib || Mb.height > Ib || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = bb, this._workingCanvas.height = wb, this._workingContext.drawImage(Mb, 0, 0, Mb.width, Mb.height, 0, 0, bb, wb), gb.texImage2D(gb.TEXTURE_2D, 0, Lb.internalFormat, Lb.format, Lb.type, this._workingCanvas), pb.width = bb, pb.height = wb, !1);
          {
            const bb = new Eb.e(this, 2);
            this._bindTextureDirectly(gb.TEXTURE_2D, bb, !0), gb.texImage2D(gb.TEXTURE_2D, 0, Lb.internalFormat, Lb.format, Lb.type, Mb), this._rescaleTexture(bb, pb, eb, Lb.format, (() => {
              this._releaseTexture(bb), this._bindTextureDirectly(gb.TEXTURE_2D, pb, !0), Vb()
            }))
          }
          return !0
        }), lb, Lb, Ib, Ob, Ub, tb, Fb)
      }
      _getTexImageParametersForCreateTexture(bb, wb) {
        let Mb, eb;
        return 1 === this.HE ? (Mb = this._getInternalFormat(bb, wb), eb = Mb) : (Mb = this._getInternalFormat(bb, !1), eb = this._getRGBABufferInternalSizedFormat(0, bb, wb)), {
          internalFormat: eb,
          format: Mb,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(bb, wb, Mb, eb, Hb) {}
      _unpackFlipY(bb) {
        this._unpackFlipYCached !== bb && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, bb ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = bb))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(bb) {
        return bb.isCube ? this._gl.TEXTURE_CUBE_MAP : bb.is3D ? this._gl.TEXTURE_3D : bb.is2DArray || bb.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const eb = this._getTextureTarget(wb),
          Hb = this._getSamplingParameters(bb, wb.useMipMaps || Mb);
        this._setTextureParameterInteger(eb, this._gl.TEXTURE_MAG_FILTER, Hb.mag, wb), this._setTextureParameterInteger(eb, this._gl.TEXTURE_MIN_FILTER, Hb.min), Mb && Hb.hasMipMaps && (wb.generateMipMaps = !0, this._gl.generateMipmap(eb)), this._bindTextureDirectly(eb, null), wb.samplingMode = bb
      }
      updateTextureDimensions(bb, wb, Mb) {}
      updateTextureWrappingMode(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Hb = this._getTextureTarget(bb);
        null !== wb && (this._setTextureParameterInteger(Hb, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(wb), bb), bb._cachedWrapU = wb), null !== Mb && (this._setTextureParameterInteger(Hb, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Mb), bb), bb._cachedWrapV = Mb), (bb.is2DArray || bb.is3D) && null !== eb && (this._setTextureParameterInteger(Hb, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(eb), bb), bb._cachedWrapR = eb), this._bindTextureDirectly(Hb, null)
      }
      _uploadCompressedDataToTextureDirectly(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const gb = this._gl;
        let lb = gb.TEXTURE_2D;
        if (bb.isCube && (lb = gb.TEXTURE_CUBE_MAP_POSITIVE_X + pb), bb._useSRGBBuffer) switch (wb) {
          case 37492:
          case 36196:
            this._caps.etc2 ? wb = gb.COMPRESSED_SRGB8_ETC2 : bb._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? wb = gb.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : bb._useSRGBBuffer = !1;
            break;
          case 36492:
            wb = gb.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            wb = gb.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            wb = gb.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            wb = gb.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            wb = gb.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            wb = gb.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            wb = gb.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            wb = gb.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            wb = gb.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            wb = gb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            wb = gb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            wb = gb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            wb = gb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            wb = gb.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            wb = gb.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? wb = gb.COMPRESSED_SRGB_S3TC_DXT1_EXT : bb._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? wb = gb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : bb._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? wb = gb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : bb._useSRGBBuffer = !1;
            break;
          default:
            bb._useSRGBBuffer = !1
        }
        if (bb.generateMipMaps) {
          const pb = bb._hardwareTexture;
          pb.memoryAllocated || (gb.texStorage2D(bb.isCube ? gb.TEXTURE_CUBE_MAP : gb.TEXTURE_2D, Math.floor(Math.log2(Math.max(Mb, eb))) + 1, wb, bb.width, bb.height), pb.memoryAllocated = !0), this._gl.compressedTexSubImage2D(lb, Vb, 0, 0, Mb, eb, wb, Hb)
        } else this._gl.compressedTexImage2D(lb, Vb, wb, Mb, eb, 0, Hb)
      }
      _uploadDataToTextureDirectly(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Hb = arguments.length > 4 ? arguments[4] : void 0,
          pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Vb = this._gl,
          gb = this._getWebGLTextureType(bb.type),
          lb = this._getInternalFormat(bb.format),
          Lb = void 0 === Hb ? this._getRGBABufferInternalSizedFormat(bb.type, bb.format, bb._useSRGBBuffer) : this._getInternalFormat(Hb, bb._useSRGBBuffer);
        this._unpackFlipY(bb.invertY);
        let Ib = Vb.TEXTURE_2D;
        bb.isCube && (Ib = Vb.TEXTURE_CUBE_MAP_POSITIVE_X + Mb);
        const Ob = Math.round(Math.log(bb.width) * Math.LOG2E),
          Ub = Math.round(Math.log(bb.height) * Math.LOG2E),
          tb = pb ? bb.width : Math.pow(2, Math.max(Ob - eb, 0)),
          Cb = pb ? bb.height : Math.pow(2, Math.max(Ub - eb, 0));
        Vb.texImage2D(Ib, eb, Lb, tb, Cb, 0, lb, gb, wb)
      }
      updateTextureData(bb, wb, Mb, eb, Hb, pb) {
        let Vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          lb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Lb = this._gl,
          Ib = this._getWebGLTextureType(bb.type),
          Ob = this._getInternalFormat(bb.format);
        this._unpackFlipY(bb.invertY);
        let Ub = Lb.TEXTURE_2D,
          tb = Lb.TEXTURE_2D;
        bb.isCube && (tb = Lb.TEXTURE_CUBE_MAP_POSITIVE_X + Vb, Ub = Lb.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Ub, bb, !0), Lb.texSubImage2D(tb, gb, Mb, eb, Hb, pb, Ob, Ib, wb), lb && this._gl.generateMipmap(tb), this._bindTextureDirectly(Ub, null)
      }
      _uploadArrayBufferViewToTexture(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Hb = this._gl,
          pb = bb.isCube ? Hb.TEXTURE_CUBE_MAP : Hb.TEXTURE_2D;
        this._bindTextureDirectly(pb, bb, !0), this._uploadDataToTextureDirectly(bb, wb, Mb, eb), this._bindTextureDirectly(pb, null, !0)
      }
      _prepareWebGLTextureContinuation(bb, wb, Mb, eb, Hb) {
        const pb = this._gl;
        if (!pb) return;
        const Vb = this._getSamplingParameters(Hb, !Mb);
        pb.texParameteri(pb.TEXTURE_2D, pb.TEXTURE_MAG_FILTER, Vb.mag), pb.texParameteri(pb.TEXTURE_2D, pb.TEXTURE_MIN_FILTER, Vb.min), Mb || eb || pb.generateMipmap(pb.TEXTURE_2D), this._bindTextureDirectly(pb.TEXTURE_2D, null), wb && wb.removePendingData(bb), bb.onLoadedObservable.notifyObservers(bb), bb.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb) {
        const Ib = this.getCaps().maxTextureSize,
          Ob = Math.min(Ib, this.needPOTTextures ? (0, tb.e)(eb.width, Ib) : eb.width),
          Ub = Math.min(Ib, this.needPOTTextures ? (0, tb.e)(eb.height, Ib) : eb.height),
          Cb = this._gl;
        Cb && (bb._hardwareTexture ? (this._bindTextureDirectly(Cb.TEXTURE_2D, bb, !0), this._unpackFlipY(void 0 === Hb || !!Hb), bb.baseWidth = eb.width, bb.baseHeight = eb.height, bb.width = Ob, bb.height = Ub, bb.isReady = !0, bb.type = -1 !== bb.type ? bb.type : 0, bb.format = -1 !== bb.format ? bb.format : Lb ?? (".jpg" !== wb || bb._useSRGBBuffer ? 5 : 4), gb(Ob, Ub, eb, wb, bb, (() => {
          this._prepareWebGLTextureContinuation(bb, Mb, pb, Vb, lb)
        })) || this._prepareWebGLTextureContinuation(bb, Mb, pb, Vb, lb)) : Mb && Mb.removePendingData(bb))
      }
      _getInternalFormatFromDepthTextureFormat(bb, wb, Mb) {
        const eb = this._gl;
        if (!wb) return eb.STENCIL_INDEX8;
        let Hb = Mb ? eb.DEPTH_STENCIL : eb.DEPTH_COMPONENT;
        return this.HE > 1 ? 15 === bb ? Hb = eb.DEPTH_COMPONENT16 : 16 === bb ? Hb = eb.DEPTH_COMPONENT24 : 17 === bb || 13 === bb ? Hb = Mb ? eb.DEPTH24_STENCIL8 : eb.DEPTH_COMPONENT24 : 14 === bb ? Hb = eb.DEPTH_COMPONENT32F : 18 === bb && (Hb = Mb ? eb.DEPTH32F_STENCIL8 : eb.DEPTH_COMPONENT32F) : Hb = eb.DEPTH_COMPONENT16, Hb
      }
      _getWebGLTextureTypeFromDepthTextureFormat(bb) {
        const wb = this._gl;
        let Mb = wb.UNSIGNED_INT;
        return 15 === bb ? Mb = wb.UNSIGNED_SHORT : 17 === bb || 13 === bb ? Mb = wb.UNSIGNED_INT_24_8 : 14 === bb ? Mb = wb.FLOAT : 18 === bb ? Mb = wb.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === bb && (Mb = wb.UNSIGNED_BYTE), Mb
      }
      _setupFramebufferDepthAttachments(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          pb = arguments.length > 5 ? arguments[5] : void 0,
          Vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const gb = this._gl;
        pb = pb ?? (bb ? 13 : 14);
        const lb = this._getInternalFormatFromDepthTextureFormat(pb, wb, bb);
        return bb && wb ? this._createRenderBuffer(Mb, eb, Hb, gb.DEPTH_STENCIL, lb, Vb ? -1 : gb.DEPTH_STENCIL_ATTACHMENT) : wb ? this._createRenderBuffer(Mb, eb, Hb, lb, lb, Vb ? -1 : gb.DEPTH_ATTACHMENT) : bb ? this._createRenderBuffer(Mb, eb, Hb, lb, lb, Vb ? -1 : gb.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(bb, wb, Mb, eb, Hb, pb) {
        let Vb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const gb = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(gb, bb, wb, Mb, eb, Hb, pb, Vb)
      }
      _updateRenderBuffer(bb, wb, Mb, eb, Hb, pb, Vb) {
        let gb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const lb = this._gl;
        return lb.bindRenderbuffer(lb.RENDERBUFFER, bb), eb > 1 && lb.renderbufferStorageMultisample ? lb.renderbufferStorageMultisample(lb.RENDERBUFFER, eb, pb, wb, Mb) : lb.renderbufferStorage(lb.RENDERBUFFER, Hb, wb, Mb), -1 !== Vb && lb.framebufferRenderbuffer(lb.FRAMEBUFFER, Vb, lb.RENDERBUFFER, bb), gb && lb.bindRenderbuffer(lb.RENDERBUFFER, null), bb
      }
      _releaseTexture(bb) {
        this._deleteTexture(bb._hardwareTexture), this.unbindAllTextures();
        const wb = this._internalTexturesCache.indexOf(bb); - 1 !== wb && this._internalTexturesCache.splice(wb, 1), bb._lodTextureHigh && bb._lodTextureHigh.dispose(), bb._lodTextureMid && bb._lodTextureMid.dispose(), bb._lodTextureLow && bb._lodTextureLow.dispose(), bb._irradianceTexture && bb._irradianceTexture.dispose()
      }
      _deleteTexture(bb) {
        bb?.release()
      }
      _setProgram(bb) {
        this._currentProgram !== bb && ((0, Hb.m)(bb, this._gl), this._currentProgram = bb)
      }
      bindSamplers(bb) {
        const wb = bb.getPipelineContext();
        this._setProgram(wb.program);
        const Mb = bb.getSamplers();
        for (let eb = 0; eb < Mb.length; eb++) {
          const wb = bb.getUniform(Mb[eb]);
          wb && (this._boundUniforms[eb] = wb)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Hb = !1;
        const pb = wb && wb._associatedChannel > -1;
        Mb && pb && (this._activeChannel = wb._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== wb || eb) {
          if (this._activateCurrentTexture(), wb && wb.isMultiview) throw gb.b.Error(["_bindTextureDirectly called with a multiview texture!", bb, wb]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(bb, wb?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = wb, wb && (wb._associatedChannel = this._activeChannel)
        } else Mb && (Hb = !0, this._activateCurrentTexture());
        return pb && !Mb && this._bindSamplerUniformToChannel(wb._associatedChannel, this._activeChannel), Hb
      }
      _bindTexture(bb, wb, Mb) {
        if (void 0 === bb) return;
        wb && (wb._associatedChannel = bb), this._activeChannel = bb;
        const eb = wb ? this._getTextureTarget(wb) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(eb, wb)
      }
      unbindAllTextures() {
        for (let bb = 0; bb < this._maxSimultaneousTextures; bb++) this._activeChannel = bb, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.HE > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(bb, wb, Mb, eb) {
        void 0 !== bb && (wb && (this._boundUniforms[bb] = wb), this._setTexture(bb, Mb))
      }
      _bindSamplerUniformToChannel(bb, wb) {
        const Mb = this._boundUniforms[bb];
        Mb && Mb._currentState !== wb && (this._gl.uniform1i(Mb, wb), Mb._currentState = wb)
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
      _setTexture(bb, wb) {
        let Mb, eb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Hb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!wb) return null != this._boundTexturesCache[bb] && (this._activeChannel = bb, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.HE > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (wb.video) {
          this._activeChannel = bb;
          const Mb = wb.getInternalTexture();
          Mb && (Mb._associatedChannel = bb), wb.update()
        } else if (4 === wb.delayLoadState) return wb.delayLoad(), !1;
        Mb = Hb ? wb.depthStencilTexture : wb.isReady() ? wb.getInternalTexture() : wb.isCube ? this.emptyCubeTexture : wb.is3D ? this.emptyTexture3D : wb.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !eb && Mb && (Mb._associatedChannel = bb);
        let pb = !0;
        this._boundTexturesCache[bb] === Mb && (eb || this._bindSamplerUniformToChannel(Mb._associatedChannel, bb), pb = !1), this._activeChannel = bb;
        const Vb = this._getTextureTarget(Mb);
        if (pb && this._bindTextureDirectly(Vb, Mb, eb), Mb && !Mb.isMultiview) {
          if (Mb.isCube && Mb._cachedCoordinatesMode !== wb.coordinatesMode) {
            Mb._cachedCoordinatesMode = wb.coordinatesMode;
            const bb = 3 !== wb.coordinatesMode && 5 !== wb.coordinatesMode ? 1 : 0;
            wb.wrapU = bb, wb.wrapV = bb
          }
          Mb._cachedWrapU !== wb.wrapU && (Mb._cachedWrapU = wb.wrapU, this._setTextureParameterInteger(Vb, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(wb.wrapU), Mb)), Mb._cachedWrapV !== wb.wrapV && (Mb._cachedWrapV = wb.wrapV, this._setTextureParameterInteger(Vb, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(wb.wrapV), Mb)), Mb.is3D && Mb._cachedWrapR !== wb.wrapR && (Mb._cachedWrapR = wb.wrapR, this._setTextureParameterInteger(Vb, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(wb.wrapR), Mb)), this._setAnisotropicLevel(Vb, Mb, wb.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(bb, wb, Mb, eb) {
        if (void 0 !== bb && wb) {
          this._textureUnits && this._textureUnits.length === Mb.length || (this._textureUnits = new Int32Array(Mb.length));
          for (let wb = 0; wb < Mb.length; wb++) {
            const eb = Mb[wb].getInternalTexture();
            eb ? (this._textureUnits[wb] = bb + wb, eb._associatedChannel = bb + wb) : this._textureUnits[wb] = -1
          }
          this._gl.uniform1iv(wb, this._textureUnits);
          for (let bb = 0; bb < Mb.length; bb++) this._setTexture(this._textureUnits[bb], Mb[bb], !0)
        }
      }
      _setAnisotropicLevel(bb, wb, Mb) {
        const eb = this._caps.textureAnisotropicFilterExtension;
        11 !== wb.samplingMode && 3 !== wb.samplingMode && 2 !== wb.samplingMode && (Mb = 1), eb && wb._cachedAnisotropicFilteringLevel !== Mb && (this._setTextureParameterFloat(bb, eb.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(Mb, this._caps.maxAnisotropy), wb), wb._cachedAnisotropicFilteringLevel = Mb)
      }
      _setTextureParameterFloat(bb, wb, Mb, eb) {
        this._bindTextureDirectly(bb, eb, !0, !0), this._gl.texParameterf(bb, wb, Mb)
      }
      _setTextureParameterInteger(bb, wb, Mb, eb) {
        eb && this._bindTextureDirectly(bb, eb, !0, !0), this._gl.texParameteri(bb, wb, Mb)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let bb = 0; bb < this._caps.maxVertexAttribs; bb++) this.disableAttributeByIndex(bb)
        } else
          for (let bb = 0, wb = this._vertexAttribArraysEnabled.length; bb < wb; bb++) bb >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[bb] || this.disableAttributeByIndex(bb)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, lb.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, Hb.y)(this._gl)
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
        const wb = this._gl;
        for (; wb.getError() !== wb.NO_ERROR;);
        let Mb = !0;
        const eb = wb.createTexture();
        wb.bindTexture(wb.TEXTURE_2D, eb), wb.texImage2D(wb.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(bb), 1, 1, 0, wb.RGBA, this._getWebGLTextureType(bb), null), wb.texParameteri(wb.TEXTURE_2D, wb.TEXTURE_MIN_FILTER, wb.NEAREST), wb.texParameteri(wb.TEXTURE_2D, wb.TEXTURE_MAG_FILTER, wb.NEAREST);
        const Hb = wb.createFramebuffer();
        wb.bindFramebuffer(wb.FRAMEBUFFER, Hb), wb.framebufferTexture2D(wb.FRAMEBUFFER, wb.COLOR_ATTACHMENT0, wb.TEXTURE_2D, eb, 0);
        const pb = wb.checkFramebufferStatus(wb.FRAMEBUFFER);
        if (Mb = Mb && pb === wb.FRAMEBUFFER_COMPLETE, Mb = Mb && wb.getError() === wb.NO_ERROR, Mb && (wb.clear(wb.COLOR_BUFFER_BIT), Mb = Mb && wb.getError() === wb.NO_ERROR), Mb) {
          wb.bindFramebuffer(wb.FRAMEBUFFER, null);
          const bb = wb.RGBA,
            eb = wb.UNSIGNED_BYTE,
            Hb = new Uint8Array(4);
          wb.readPixels(0, 0, 1, 1, bb, eb, Hb), Mb = Mb && wb.getError() === wb.NO_ERROR
        }
        for (wb.deleteTexture(eb), wb.deleteFramebuffer(Hb), wb.bindFramebuffer(wb.FRAMEBUFFER, null); !Mb && wb.getError() !== wb.NO_ERROR;);
        return Mb
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
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = wb ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (bb) {
          case 0:
            Mb = this._gl.ALPHA;
            break;
          case 1:
            Mb = this._gl.LUMINANCE;
            break;
          case 2:
            Mb = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            Mb = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            Mb = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            Mb = wb ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            Mb = wb ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (bb) {
          case 8:
            Mb = this._gl.RED_INTEGER;
            break;
          case 9:
            Mb = this._gl.RG_INTEGER;
            break;
          case 10:
            Mb = this._gl.RGB_INTEGER;
            break;
          case 11:
            Mb = this._gl.RGBA_INTEGER
        }
        return Mb
      }
      _getRGBABufferInternalSizedFormat(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== wb) switch (wb) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return Mb ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (bb) {
          case 3:
            switch (wb) {
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
            switch (wb) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return Mb ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return Mb ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (wb) {
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
            switch (wb) {
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
            switch (wb) {
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
            switch (wb) {
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
            switch (wb) {
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
            switch (wb) {
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
            switch (wb) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return Mb ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(bb, wb, Mb, eb) {
        let Hb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          pb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const lb = Hb ? 4 : 3,
          Lb = Hb ? this._gl.RGBA : this._gl.RGB,
          Ib = Mb * eb * lb;
        if (Vb) {
          if (Vb.length < Ib) return gb.b.Error(`Data buffer is too small to store the read pixels (${Vb.length} should be more than ${Ib})`), Promise.resolve(Vb)
        } else Vb = new Uint8Array(Ib);
        return pb && this.flushFramebuffer(), this._gl.readPixels(bb, wb, Mb, eb, Lb, this._gl.UNSIGNED_BYTE, Vb), Promise.resolve(Vb)
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
          const bb = pb.d._CreateCanvas(1, 1),
            wb = bb.getContext("webgl") || bb.getContext("experimental-webgl");
          this._IsSupported = null != wb && !!globalThis.WebGLRenderingContext
        } catch (bb) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const bb = pb.d._CreateCanvas(1, 1),
            wb = bb.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || bb.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !wb
        } catch (bb) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    zb._TempClearColorUint32 = new Uint32Array(4), zb._TempClearColorInt32 = new Int32Array(4), zb._TempClearColorFloat32 = new Float32Array(4), zb.ExceptionList = [{
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
    }], zb._ConcatenateShader = Fb.h, zb._IsSupported = null, zb._HasMajorPerformanceCaveat = null
  },
  41852: (bb, wb, Mb) => {
    var eb;
    Mb.d(wb, {
        c: () => Hb
      }),
      function(bb) {
        bb[bb.PointerMove = 0] = "PointerMove", bb[bb.PointerDown = 1] = "PointerDown", bb[bb.PointerUp = 2] = "PointerUp"
      }(eb || (eb = {}));
    class Hb {}
    Hb.DOM_DELTA_PIXEL = 0, Hb.DOM_DELTA_LINE = 1, Hb.DOM_DELTA_PAGE = 2
  },
  41845: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb,
      h: () => pb,
      j: () => Hb
    });
    class eb {}
    eb.KEYDOWN = 1, eb.KEYUP = 2;
    class Hb {
      constructor(bb, wb) {
        this.type = bb, this.event = wb
      }
    }
    class pb extends Hb {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(bb) {
        this.skipOnKeyboardObservable = bb
      }
      constructor(bb, wb) {
        super(bb, wb), this.type = bb, this.event = wb, this.skipOnKeyboardObservable = !1
      }
    }
  },
  41843: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb,
      c: () => Vb,
      f: () => gb
    });
    var eb = Mb(38285);
    class Hb {}
    Hb.POINTERDOWN = 1, Hb.POINTERUP = 2, Hb.POINTERMOVE = 4, Hb.POINTERWHEEL = 8, Hb.POINTERPICK = 16, Hb.POINTERTAP = 32, Hb.POINTERDOUBLETAP = 64;
    class pb {
      constructor(bb, wb) {
        this.type = bb, this.event = wb
      }
    }
    class Vb extends pb {
      constructor(bb, wb, Mb, Hb) {
        super(bb, wb), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new eb.m(Mb, Hb)
      }
    }
    class gb extends pb {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(bb, wb), this._pickInfo = Mb, this._inputManager = eb
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  41858: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb
    });
    class eb {
      static CompareLightsPriority(bb, wb) {
        return bb.shadowEnabled !== wb.shadowEnabled ? (wb.shadowEnabled ? 1 : 0) - (bb.shadowEnabled ? 1 : 0) : wb.renderPriority - bb.renderPriority
      }
    }
    eb.FALLOFF_DEFAULT = 0, eb.FALLOFF_PHYSICAL = 1, eb.FALLOFF_GLTF = 2, eb.FALLOFF_STANDARD = 3, eb.LIGHTMAP_DEFAULT = 0, eb.LIGHTMAP_SPECULAR = 1, eb.LIGHTMAP_SHADOWSONLY = 2, eb.INTENSITYMODE_AUTOMATIC = 0, eb.INTENSITYMODE_LUMINOUSPOWER = 1, eb.INTENSITYMODE_LUMINOUSINTENSITY = 2, eb.INTENSITYMODE_ILLUMINANCE = 3, eb.INTENSITYMODE_LUMINANCE = 4, eb.LIGHTTYPEID_POINTLIGHT = 0, eb.LIGHTTYPEID_DIRECTIONALLIGHT = 1, eb.LIGHTTYPEID_SPOTLIGHT = 2, eb.LIGHTTYPEID_HEMISPHERICLIGHT = 3, eb.LIGHTTYPEID_RECT_AREALIGHT = 4, eb.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  41506: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb
    });
    var eb, Hb = Mb(38318),
      pb = Mb(41509);
    ! function(bb) {
      bb[bb.Unknown = 0] = "Unknown", bb[bb.Url = 1] = "Url", bb[bb.Temp = 2] = "Temp", bb[bb.Raw = 3] = "Raw", bb[bb.Dynamic = 4] = "Dynamic", bb[bb.RenderTarget = 5] = "RenderTarget", bb[bb.MultiRenderTarget = 6] = "MultiRenderTarget", bb[bb.Cube = 7] = "Cube", bb[bb.CubeRaw = 8] = "CubeRaw", bb[bb.CubePrefiltered = 9] = "CubePrefiltered", bb[bb.Raw3D = 10] = "Raw3D", bb[bb.Raw2DArray = 11] = "Raw2DArray", bb[bb.DepthStencil = 12] = "DepthStencil", bb[bb.CubeRawRGBD = 13] = "CubeRawRGBD", bb[bb.Depth = 14] = "Depth", bb[bb.External = 15] = "External"
    }(eb || (eb = {}));
    class Vb extends pb.d {
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
      DC() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new Hb.b, this.onErrorObservable = new Hb.b, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = bb, this._source = wb, this._uniqueId = Vb._Counter++, Mb || (this._hardwareTexture = bb._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, bb, wb, Mb), this.width = bb, this.height = wb, this.depth = Mb, this.baseWidth = bb, this.baseHeight = wb, this.baseDepth = Mb, this._size = bb * wb * Mb
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const bb = this.onRebuildCallback(this),
            wb = wb => {
              wb._swapAndDie(this, !1), this.isReady = bb.isReady
            };
          return void(bb.isAsync ? bb.proxy.then(wb) : wb(bb.proxy))
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
                const wb = this._bufferViewArray[bb];
                wb && this._engine.updateRawTexture(this, wb, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, bb)
              }
            this.isReady = !0;
            break;
          case 10:
            bb = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), bb._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (bb = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), bb._swapAndDie(this, !1), this._bufferViewArray)
              for (let bb = 0; bb < this._bufferViewArray.length; bb++) {
                const wb = this._bufferViewArray[bb];
                wb && this._engine.updateRawTexture2DArray(this, wb, this.format, this.invertY, this._compression, this.type, bb)
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
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(bb._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), bb._hardwareTexture = this._hardwareTexture, bb._setUniqueId(Vb._Counter++), wb && (bb._isRGBD = this._isRGBD), this._lodTextureHigh && (bb._lodTextureHigh && bb._lodTextureHigh.dispose(), bb._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (bb._lodTextureMid && bb._lodTextureMid.dispose(), bb._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (bb._lodTextureLow && bb._lodTextureLow.dispose(), bb._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (bb._irradianceTexture && bb._irradianceTexture.dispose(), bb._irradianceTexture = this._irradianceTexture);
        const Mb = this._engine.getLoadedTexturesCache();
        let eb = Mb.indexOf(this); - 1 !== eb && Mb.splice(eb, 1), eb = Mb.indexOf(bb), -1 === eb && Mb.push(bb)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    Vb._Counter = 0
  },
  41623: (bb, wb, Mb) => {
    function eb(bb) {
      return 13 === bb || 14 === bb || 15 === bb || 16 === bb || 17 === bb || 18 === bb || 19 === bb
    }

    function Hb(bb) {
      return 8 === bb || 9 === bb || 10 === bb || 11 === bb
    }

    function pb(bb) {
      return 0 === bb || 5 === bb || 7 === bb || 11 === bb
    }

    function Vb(bb) {
      return 13 === bb || 17 === bb || 18 === bb || 19 === bb
    }
    Mb.d(wb, {
      d: () => Vb,
      e: () => eb,
      g: () => Hb,
      k: () => pb
    })
  },
  41509: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb
    });
    class eb {
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
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = bb, this._cachedWrapV = wb, this._cachedWrapR = Mb, this._cachedAnisotropicFilteringLevel = eb, this.samplingMode = Hb, this._comparisonFunction = pb, this
      }
      compareSampler(bb) {
        return this._cachedWrapU === bb._cachedWrapU && this._cachedWrapV === bb._cachedWrapV && this._cachedWrapR === bb._cachedWrapR && this._cachedAnisotropicFilteringLevel === bb._cachedAnisotropicFilteringLevel && this.samplingMode === bb.samplingMode && this._comparisonFunction === bb._comparisonFunction && this._useMipMaps === bb._useMipMaps
      }
    }
  },
  41788: (bb, wb, Mb) => {
    function eb(bb) {
      bb.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    Mb.d(wb, {
      b: () => eb
    })
  },
  41592: (bb, wb, Mb) => {
    function eb(bb) {
      return void 0 === bb.getPipelineContext
    }
    Mb.d(wb, {
      d: () => eb
    })
  },
  41997: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    var eb = Mb(41565);
    class Hb {
      static GetEffect(bb) {
        return void 0 === bb.getPipelineContext ? bb.effect : bb
      }
      constructor(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = bb.createDrawContext(), wb && (this.materialContext = bb.createMaterialContext())
      }
      setEffect(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        Mb || this.effect === bb || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = bb, void 0 !== wb && (this.defines = wb), Mb && this.drawContext?.reset()
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const wb = this.effect;
          bb ? wb.dispose() : eb.d.SetImmediate((() => {
            wb.DC().onEndFrameObservable.addOnce((() => {
              wb.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  41527: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ob,
      c: () => tb,
      e: () => Lb,
      f: () => Ib
    });
    var eb = Mb(41535),
      Hb = Mb(41539),
      pb = Mb(41518),
      Vb = Mb(39971),
      gb = Mb(41562),
      lb = Mb(41548);

    function Lb(bb, wb) {
      return (0, Hb.C)(wb).cachedPipelines[bb]
    }

    function Ib(bb) {
      const wb = bb._name,
        Mb = bb.context;
      if (wb && Mb) {
        const bb = (0, Hb.C)(Mb),
          eb = bb.cachedPipelines[wb];
        eb?.dispose(), delete bb.cachedPipelines[wb]
      }
    }

    function Ob(bb, wb, Mb, Hb, pb, Vb, lb) {
      let Lb, Ib;
      const Ob = (0, eb.j)() ? Vb?.getHostDocument() : null;
      Lb = "string" === typeof wb ? wb : "string" === typeof wb.vertexSource ? "source:" + wb.vertexSource : "string" === typeof wb.vertexElement ? Ob?.getElementById(wb.vertexElement) || wb.vertexElement : wb.vertex || wb, Ib = "string" === typeof wb ? wb : "string" === typeof wb.fragmentSource ? "source:" + wb.fragmentSource : "string" === typeof wb.fragmentElement ? Ob?.getElementById(wb.fragmentElement) || wb.fragmentElement : wb.fragment || wb;
      const tb = [void 0, void 0],
        Cb = () => {
          if (tb[0] && tb[1]) {
            const [eb, Lb] = tb;
            (0, gb.g)(bb), (0, gb.l)(eb, bb, ((eb, Ib) => {
              lb && (lb._vertexSourceCodeBeforeMigration = Ib), Mb && (eb = Mb("vertex", eb)), bb.isFragment = !0, (0, gb.l)(Lb, bb, ((Vb, Lb) => {
                lb && (lb._fragmentSourceCodeBeforeMigration = Lb), Mb && (Vb = Mb("fragment", Vb));
                const Ib = (0, gb.c)(eb, Vb, bb);
                bb = null;
                const Ob = function(bb, wb, Mb, eb) {
                  if (Mb) {
                    return {
                      vertexSourceCode: (1 === eb ? "//" : "") + "#define SHADER_NAME vertex:" + (Mb.vertexElement || Mb.vertex || Mb.spectorName || Mb) + "\n" + bb,
                      fragmentSourceCode: (1 === eb ? "//" : "") + "#define SHADER_NAME fragment:" + (Mb.fragmentElement || Mb.fragment || Mb.spectorName || Mb) + "\n" + wb
                    }
                  }
                  return {
                    vertexSourceCode: bb,
                    fragmentSourceCode: wb
                  }
                }(Ib.vertexCode, Ib.fragmentCode, wb, pb);
                Hb?.(Ob.vertexSourceCode, Ob.fragmentSourceCode)
              }), Vb)
            }), Vb)
          }
        };
      Ub(Lb, "Vertex", "", (bb => {
        lb && (lb._rawVertexSourceCode = bb), tb[0] = bb, Cb()
      }), pb), Ub(Ib, "Fragment", "Pixel", (bb => {
        lb && (lb._rawFragmentSourceCode = bb), tb[1] = bb, Cb()
      }), pb)
    }

    function Ub(bb, wb, Mb, Hb, Vb, gb) {
      if ("undefined" !== typeof HTMLElement && bb instanceof HTMLElement) {
        return void Hb((0, eb.e)(bb))
      }
      if ("source:" === bb.substring(0, 7)) return void Hb(bb.substring(7));
      if ("base64:" === bb.substring(0, 7)) {
        return void Hb(window.atob(bb.substring(7)))
      }
      const Lb = pb.e.GetShadersStore(Vb);
      if (Lb[bb + wb + "Shader"]) return void Hb(Lb[bb + wb + "Shader"]);
      if (Mb && Lb[bb + Mb + "Shader"]) return void Hb(Lb[bb + Mb + "Shader"]);
      let Ib;
      if (Ib = "." === bb[0] || "/" === bb[0] || bb.indexOf("http") > -1 ? bb : pb.e.GetShadersRepository(Vb) + bb, !(gb = gb || lb.l)) throw new Error("loadFileInjection is not defined");
      gb(Ib + "." + wb.toLowerCase() + ".fx", Hb)
    }
    const tb = (bb, wb, Mb, eb) => {
      try {
        const pb = bb.context ? (0, Hb.C)(bb.context) : null;
        pb && (pb.disableParallelShaderCompile = bb.disableParallelCompilation);
        const Vb = bb.existingPipelineContext || wb(bb.shaderProcessingContext);
        return Vb._name = bb.name, bb.name && pb && (pb.cachedPipelines[bb.name] = Vb), Mb(Vb, bb.vertex, bb.fragment, !!bb.createAsRaw, "", "", bb.rebuildRebind, bb.defines, bb.transformFeedbackVaryings, "", (() => {
          eb(Vb, (() => {
            bb.onRenderingStateCompiled?.(Vb)
          }))
        })), Vb
      } catch (pb) {
        throw Vb.b.Error("Error compiling effect"), pb
      }
    }
  },
  41514: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => lb
    });
    var eb = Mb(38318),
      Hb = Mb(39971),
      pb = Mb(41518),
      Vb = Mb(41527),
      gb = Mb(41565);
    class lb {
      static get ShadersRepository() {
        return pb.e.ShadersRepository
      }
      static set ShadersRepository(bb) {
        pb.e.ShadersRepository = bb
      }
      get RD() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new eb.b), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(bb, wb, Mb) {
        let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          pb = arguments.length > 4 ? arguments[4] : void 0,
          gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Ib = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Ob = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Ub = arguments.length > 9 ? arguments[9] : void 0,
          tb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          Cb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          Eb = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new eb.b, this.onErrorObservable = new eb.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = bb, this._key = tb;
        const Fb = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let Bb;
        if (wb.attributes) {
          const bb = wb;
          if (this._engine = Mb, this._attributesNames = bb.attributes, this._uniformsNames = bb.uniformsNames.concat(bb.samplers), this._samplerList = bb.samplers.slice(), this.defines = bb.defines, this.onError = bb.onError, this.onCompiled = bb.onCompiled, this._fallbacks = bb.fallbacks, this._indexParameters = bb.indexParameters, this._transformFeedbackVaryings = bb.transformFeedbackVaryings || null, this._multiTarget = !!bb.multiTarget, this._shaderLanguage = bb.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!bb.disableParallelShaderCompilation, bb.uniformBuffersNames) {
            this._uniformBuffersNamesList = bb.uniformBuffersNames.slice();
            for (let wb = 0; wb < bb.uniformBuffersNames.length; wb++) this._uniformBuffersNames[bb.uniformBuffersNames[wb]] = wb
          }
          this._processFinalCode = bb.processFinalCode ?? null, this._processCodeAfterIncludes = bb.processCodeAfterIncludes ?? void 0, Eb = bb.extraInitializationsAsync, Bb = bb.existingPipelineContext
        } else this._engine = pb, this.defines = null == gb ? "" : gb, this._uniformsNames = Mb.concat(Hb), this._samplerList = Hb ? Hb.slice() : [], this._attributesNames = wb, this._uniformBuffersNamesList = [], this._shaderLanguage = Cb, this.onError = Ob, this.onCompiled = Ib, this._indexParameters = Ub, this._fallbacks = Lb;
        "WEBGL2" === this._engine.shaderPlatformName && (Bb = (0, Vb.e)(Fb, this._engine._gl) ?? Bb), this._attributeLocationByName = {}, this.uniqueId = lb._UniqueIdSeed++, Bb ? (this._pipelineContext = Bb, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, Eb).catch((bb => {
          const wb = bb?.message ?? String(bb),
            Mb = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${wb}`);
          bb && "string" === typeof bb.stack && (Mb.stack = `${Mb.message}\nCaused by: ${bb.stack}`), this._processCompilationErrors(Mb)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.RD || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          eb = arguments.length > 3 ? arguments[3] : void 0;
        eb && await eb(), this._processingContext = Mb || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const Hb = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: bb ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: pb.e.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: pb.e.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          rHb: this._engine.rHb,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, Vb.b)(Hb, this.name, this._processFinalCode, ((bb, Mb) => {
          this._vertexSourceCode = bb, this._fragmentSourceCode = Mb, this._prepareEffect(wb)
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
        return !!this._engine.RD || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      DC() {
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
        this.isReady() ? bb(this) : (this.onCompileObservable.add((wb => {
          bb(wb)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(bb) {
        (0, gb.e)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (wb => {
          this._processCompilationErrors(wb, bb)
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
            rHb: this._engine.rHb,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(bb, wb, Mb, eb) {
        this._isReady = !1, this._vertexSourceCodeOverride = bb, this._fragmentSourceCodeOverride = wb, this.onError = (bb, wb) => {
          eb && eb(wb)
        }, this.onCompiled = () => {
          const bb = this.DC().scenes;
          if (bb)
            for (let wb = 0; wb < bb.length; wb++) bb[wb].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(Mb)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(bb) {
        if (this._pipelineContext = bb, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let wb = 0; wb < this._attributesNames.length; wb++) {
            const bb = this._attributesNames[wb];
            this._attributeLocationByName[bb] = this._attributes[wb]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), lb.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const wb = this._pipelineContext;
        this._isReady = !1;
        try {
          const Mb = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            eb = Mb ? null : this.defines,
            Hb = Mb ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            pb = Mb ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            gb = this._engine;
          this._pipelineContext = (0, Vb.c)({
            existingPipelineContext: bb ? wb : null,
            vertex: Hb,
            fragment: pb,
            context: "WEBGL2" === gb.shaderPlatformName || "WEBGL1" === gb.shaderPlatformName ? gb._gl : void 0,
            rebuildRebind: (bb, wb, Mb, eb) => this._rebuildProgram(bb, wb, Mb, eb),
            defines: eb,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: Mb,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: Mb => {
              wb && !bb && this._engine._deletePipelineContext(wb), Mb && this._onRenderingStateCompiled(Mb)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(wb)
        } catch (Mb) {
          this._processCompilationErrors(Mb, wb)
        }
      }
      _getShaderCodeAndErrorLine(bb, wb, Mb) {
        const eb = Mb ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let Hb = null;
        if (wb && bb) {
          const pb = wb.match(eb);
          if (pb && 2 === pb.length) {
            const wb = parseInt(pb[1]),
              eb = bb.split("\n", -1);
            eb.length >= wb && (Hb = `Offending line [${wb}] in ${Mb?"fragment":"vertex"} code: ${eb[wb-1]}`)
          }
        }
        return [bb, Hb]
      }
      _processCompilationErrors(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof bb?.stack ? bb.stack : bb?.message ?? String(bb);
        const Mb = this._attributesNames,
          eb = this._fallbacks;
        if (Hb.b.Error("Unable to compile effect:"), Hb.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Hb.b.Error(`Attributes: ${Mb.join(" ")}`), Hb.b.Error("Defines:\n" + this.defines), lb.LogShaderCodeOnCompilationError) {
          let bb, wb = null,
            Mb = null;
          this._pipelineContext?._getVertexShaderCode() && ([bb, wb] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), bb && (Hb.b.Error("Vertex code:"), Hb.b.Error(bb))), this._pipelineContext?._getFragmentShaderCode() && ([bb, Mb] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), bb && (Hb.b.Error("Fragment code:"), Hb.b.Error(bb))), wb && Hb.b.Error(wb), Mb && Hb.b.Error(Mb)
        }
        Hb.b.Error("Error: " + this._compilationError);
        const pb = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        wb && (this._pipelineContext = wb, this._isReady = !0, pb()), eb ? (this._pipelineContext = null, eb.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Hb.b.Error("Trying next fallback."), this.defines = eb.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, pb(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, wb || pb())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(bb, wb) {
        this._engine._bindTexture(this._samplers[bb], wb, bb)
      }
      setTexture(bb, wb) {
        this._engine.setTexture(this._samplers[bb], this._uniforms[bb], wb, bb)
      }
      setTextureArray(bb, wb) {
        const Mb = bb + "Ex";
        if (-1 === this._samplerList.indexOf(Mb + "0")) {
          const eb = this._samplerList.indexOf(bb);
          for (let bb = 1; bb < wb.length; bb++) {
            const wb = Mb + (bb - 1).toString();
            this._samplerList.splice(eb + bb, 0, wb)
          }
          let Hb = 0;
          for (const bb of this._samplerList) this._samplers[bb] = Hb, Hb += 1
        }
        this._engine.setTextureArray(this._samplers[bb], this._uniforms[bb], wb, bb)
      }
      bindUniformBuffer(bb, wb) {
        const Mb = this._uniformBuffersNames[wb];
        void 0 === Mb || lb._BaseCache[Mb] === bb && this._engine._features.useUBOBindingCache || (lb._BaseCache[Mb] = bb, this._engine.bindUniformBufferBase(bb, Mb, wb))
      }
      bindUniformBlock(bb, wb) {
        this._engine.bindUniformBlock(this._pipelineContext, bb, wb)
      }
      setInt(bb, wb) {
        return this._pipelineContext.setInt(bb, wb), this
      }
      setInt2(bb, wb, Mb) {
        return this._pipelineContext.setInt2(bb, wb, Mb), this
      }
      setInt3(bb, wb, Mb, eb) {
        return this._pipelineContext.setInt3(bb, wb, Mb, eb), this
      }
      setInt4(bb, wb, Mb, eb, Hb) {
        return this._pipelineContext.setInt4(bb, wb, Mb, eb, Hb), this
      }
      setIntArray(bb, wb) {
        return this._pipelineContext.setIntArray(bb, wb), this
      }
      setIntArray2(bb, wb) {
        return this._pipelineContext.setIntArray2(bb, wb), this
      }
      setIntArray3(bb, wb) {
        return this._pipelineContext.setIntArray3(bb, wb), this
      }
      setIntArray4(bb, wb) {
        return this._pipelineContext.setIntArray4(bb, wb), this
      }
      setUInt(bb, wb) {
        return this._pipelineContext.setUInt(bb, wb), this
      }
      setUInt2(bb, wb, Mb) {
        return this._pipelineContext.setUInt2(bb, wb, Mb), this
      }
      setUInt3(bb, wb, Mb, eb) {
        return this._pipelineContext.setUInt3(bb, wb, Mb, eb), this
      }
      setUInt4(bb, wb, Mb, eb, Hb) {
        return this._pipelineContext.setUInt4(bb, wb, Mb, eb, Hb), this
      }
      setUIntArray(bb, wb) {
        return this._pipelineContext.setUIntArray(bb, wb), this
      }
      setUIntArray2(bb, wb) {
        return this._pipelineContext.setUIntArray2(bb, wb), this
      }
      setUIntArray3(bb, wb) {
        return this._pipelineContext.setUIntArray3(bb, wb), this
      }
      setUIntArray4(bb, wb) {
        return this._pipelineContext.setUIntArray4(bb, wb), this
      }
      setFloatArray(bb, wb) {
        return this._pipelineContext.setArray(bb, wb), this
      }
      setFloatArray2(bb, wb) {
        return this._pipelineContext.setArray2(bb, wb), this
      }
      setFloatArray3(bb, wb) {
        return this._pipelineContext.setArray3(bb, wb), this
      }
      setFloatArray4(bb, wb) {
        return this._pipelineContext.setArray4(bb, wb), this
      }
      setArray(bb, wb) {
        return this._pipelineContext.setArray(bb, wb), this
      }
      setArray2(bb, wb) {
        return this._pipelineContext.setArray2(bb, wb), this
      }
      setArray3(bb, wb) {
        return this._pipelineContext.setArray3(bb, wb), this
      }
      setArray4(bb, wb) {
        return this._pipelineContext.setArray4(bb, wb), this
      }
      setMatrices(bb, wb) {
        return this._pipelineContext.setMatrices(bb, wb), this
      }
      setMatrix(bb, wb) {
        return this._pipelineContext.setMatrix(bb, wb), this
      }
      setMatrix3x3(bb, wb) {
        return this._pipelineContext.setMatrix3x3(bb, wb), this
      }
      setMatrix2x2(bb, wb) {
        return this._pipelineContext.setMatrix2x2(bb, wb), this
      }
      setFloat(bb, wb) {
        return this._pipelineContext.setFloat(bb, wb), this
      }
      setBool(bb, wb) {
        return this._pipelineContext.setInt(bb, wb ? 1 : 0), this
      }
      setVector2(bb, wb) {
        return this._pipelineContext.setVector2(bb, wb), this
      }
      setFloat2(bb, wb, Mb) {
        return this._pipelineContext.setFloat2(bb, wb, Mb), this
      }
      setVector3(bb, wb) {
        return this._pipelineContext.setVector3(bb, wb), this
      }
      setFloat3(bb, wb, Mb, eb) {
        return this._pipelineContext.setFloat3(bb, wb, Mb, eb), this
      }
      setVector4(bb, wb) {
        return this._pipelineContext.setVector4(bb, wb), this
      }
      setQuaternion(bb, wb) {
        return this._pipelineContext.setQuaternion(bb, wb), this
      }
      setFloat4(bb, wb, Mb, eb, Hb) {
        return this._pipelineContext.setFloat4(bb, wb, Mb, eb, Hb), this
      }
      setColor3(bb, wb) {
        return this._pipelineContext.setColor3(bb, wb), this
      }
      setColor4(bb, wb, Mb) {
        return this._pipelineContext.setColor4(bb, wb, Mb), this
      }
      setDirectColor4(bb, wb) {
        return this._pipelineContext.setDirectColor4(bb, wb), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (lb.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, Vb.f)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        wb && (pb.e.GetShadersStore(eb)[`${bb}PixelShader`] = wb), Mb && (pb.e.GetShadersStore(eb)[`${bb}VertexShader`] = Mb)
      }
      static ResetCache() {
        lb._BaseCache = {}
      }
    }
    lb.LogShaderCodeOnCompilationError = !0, lb.PersistentMode = !1, lb.AutomaticallyClearCodeCache = !1, lb._UniqueIdSeed = 0, lb._BaseCache = {}, lb.ShadersStore = pb.e.ShadersStore, lb.IncludesShadersStore = pb.e.IncludesShadersStore
  },
  41825: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ib,
      d: () => xb,
      h: () => Xb
    });
    var eb = Mb(41514),
      Hb = Mb(38285),
      pb = Mb(38329),
      Vb = Mb(41806);
    const gb = new Hb.b,
      lb = new Hb.b,
      Lb = new Hb.b,
      Ib = {
        RJ: () => {},
        eyeAtCamera: !0
      };

    function Ob(bb, wb, Mb) {
      const eb = Mb.ppb(),
        Hb = wb.ppb();
      for (let pb = 0; pb < 16; pb++) eb[pb] = Hb[pb];
      return eb[12] -= bb.x, eb[13] -= bb.y, eb[14] -= bb.z, Mb.markAsUpdated(), Mb
    }

    function Ub(bb, wb, Mb) {
      return (0, pb.g)(wb, lb), Ob(bb, lb, Lb), (0, pb.g)(Lb, Mb), Mb
    }

    function tb(bb, wb, Mb) {
      if (!Ib.eyeAtCamera) return Ub(bb, wb, Mb);
      const eb = Mb.ppb(),
        Hb = wb.ppb();
      for (let pb = 0; pb < 16; pb++) eb[pb] = Hb[pb];
      return eb[12] = 0, eb[13] = 0, eb[14] = 0, Mb.markAsUpdated(), Mb
    }

    function Cb(bb, wb, Mb, eb) {
      return (0, pb.l)(tb(bb, wb, eb), Mb, eb), eb
    }

    function Eb(bb, wb, Mb, eb) {
      return (0, pb.g)(Mb, lb), (0, pb.l)(wb, lb, Lb), Ob(bb, Lb, lb), tb(bb, Mb, Lb), (0, pb.l)(lb, Lb, eb), eb
    }

    function Fb(bb, wb, Mb, eb, Hb, Vb) {
      return (0, pb.g)(Mb, lb), (0, pb.l)(wb, lb, Lb), Ob(bb, Lb, lb), Cb(bb, eb, Hb, Lb), (0, pb.l)(lb, Lb, Vb), Vb
    }

    function Bb(bb, wb) {
      const Mb = Ib.RJ();
      if (!Mb || gb === wb) return wb;
      gb.updateFlag = wb.updateFlag;
      const eb = Mb.floatingOriginOffset;
      switch (bb) {
        case "world":
          return Ob(eb, wb, gb);
        case "view":
          return tb(eb, wb, gb);
        case "worldView":
          return Eb(eb, wb, Mb.getViewMatrix(), gb);
        case "viewProjection":
          return Cb(eb, Mb.getViewMatrix(), Mb.getProjectionMatrix(), gb);
        case "worldViewProjection":
          return Fb(eb, wb, Mb.getTransformMatrix(), Mb.getViewMatrix(), Mb.getProjectionMatrix(), gb);
        default:
          if (bb.startsWith("u_")) {
            const Hb = bb.toLowerCase();
            if (Hb.startsWith("u_worldviewprojection")) return Fb(eb, wb, Mb.getTransformMatrix(), Mb.getViewMatrix(), Mb.getProjectionMatrix(), gb);
            if (Hb.startsWith("u_viewprojection")) return Cb(eb, Mb.getViewMatrix(), Mb.getProjectionMatrix(), gb);
            if (Hb.startsWith("u_worldview")) return Eb(eb, wb, Mb.getViewMatrix(), gb);
            if (Hb.startsWith("u_world")) return Ob(eb, wb, gb);
            if (Hb.startsWith("u_view")) return tb(eb, wb, gb)
          }
          return wb
      }
    }
    const sb = Vb.c,
      mb = eb.b,
      hb = sb.prototype._updateMatrixForUniform,
      zb = eb.b.prototype.setMatrix;

    function Xb() {
      eb.b.prototype.setMatrix = zb, mb._setMatrixOverride = void 0, sb.prototype._updateMatrixForUniform = hb, sb.prototype._updateMatrixForUniformOverride = void 0
    }

    function xb() {
      mb.prototype._setMatrixOverride = zb, mb.prototype.setMatrix = function(bb, wb) {
        return this._setMatrixOverride(bb, Bb(bb, wb)), this
      }, sb.prototype._updateMatrixForUniformOverride = hb, sb.prototype._updateMatrixForUniform = function(bb, wb) {
        this._updateMatrixForUniformOverride(bb, Bb(bb, wb))
      }
    }
  },
  41797: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      f: () => Hb
    });
    var eb = Mb(41788);

    function Hb(bb, wb) {
      wb.WHITEBALANCE && bb.push("whiteBalanceMatrix"), wb.EXPOSURE && bb.push("exposureLinear"), wb.CONTRAST && bb.push("contrast"), wb.COLORGRADING && bb.push("colorTransformSettings"), (wb.VIGNETTE || wb.DITHER) && bb.push("vInverseScreenSize"), wb.VIGNETTE && (bb.push("vignetteSettings1"), bb.push("vignetteSettings2")), wb.COLORCURVES && (0, eb.b)(bb), wb.DITHER && bb.push("ditherIntensity")
    }

    function pb(bb, wb) {
      wb.COLORGRADING && bb.push("txColorTransform")
    }
  },
  41786: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Db,
      h: () => Zb
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(38318),
      Vb = Mb(38406),
      gb = Mb(38322),
      lb = Mb(38285);
    const Lb = [
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
      Ib = 1e6 / Lb[Lb.length - 1][0],
      Ob = 150;

    function Ub(bb, wb) {
      const Mb = Number.isNaN(bb) ? Ib : Math.max(bb, Ib),
        eb = (0, gb.Clamp)(1e6 / Mb, Lb[0][0], Lb[Lb.length - 1][0]);
      let Hb = 0,
        pb = Lb.length - 1;
      for (; pb - Hb > 1;) {
        const bb = Hb + pb >> 1;
        Lb[bb][0] <= eb ? Hb = bb : pb = bb
      }
      const Vb = Hb,
        [Ub, tb, Cb, Eb] = Lb[Vb],
        [Fb, Bb, sb, mb] = Lb[Vb + 1],
        hb = (eb - Ub) / (Fb - Ub),
        zb = lb.m.Lerp(new lb.m(tb, Cb), new lb.m(Bb, sb), hb),
        Xb = lb.m.Normalize(new lb.m(1, Eb)),
        xb = lb.m.Normalize(new lb.m(1, mb)),
        jb = lb.m.Normalize(lb.m.Lerp(Xb, xb, hb)),
        Kb = (0, gb.Clamp)(wb, -150, Ob);
      zb.zpb(jb.scale(Kb / 3e3));
      const rb = 2 * zb.x - 8 * zb.y + 4,
        Rb = 3 * zb.x / rb,
        Db = 2 * zb.y / rb;
      return new lb.o(Rb / Db, 1, (1 - Rb - Db) / Db)
    }
    const tb = lb.b.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      Cb = lb.b.Invert(tb);

    function Eb(bb, wb) {
      const Mb = wb > 0 ? bb / wb : 10;
      return (0, gb.Clamp)(Mb, .1, 10)
    }

    function Fb(bb, wb) {
      const Mb = lb.o.TransformNormal(bb, tb),
        eb = lb.o.TransformNormal(wb, tb),
        Hb = lb.b.FromArray([Eb(eb.x, Mb.x), 0, 0, 0, 0, Eb(eb.y, Mb.y), 0, 0, 0, 0, Eb(eb.z, Mb.z), 0, 0, 0, 0, 1]);
      return tb.multiply(Hb).multiply(Cb)
    }
    const Bb = new lb.o(.95047, 1, 1.08883),
      sb = lb.b.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(Fb(Bb, Ub(6500, 0))),
      mb = lb.b.Invert(sb),
      hb = lb.o.TransformNormal(new lb.o(1, 1, 1), sb);
    var zb = Mb(41697),
      Xb = Mb(41788);
    let xb = (() => {
      var bb;
      let wb, Mb, pb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb = [],
        Bb = [],
        sb = [],
        mb = [],
        hb = [],
        xb = [],
        jb = [],
        Kb = [],
        rb = [],
        Rb = [],
        Db = [],
        cb = [],
        Yb = [],
        Zb = [],
        fb = [],
        Ab = [],
        Wb = [],
        Jb = [],
        Sb = [],
        Nb = [],
        vb = [],
        Qb = [],
        Gb = [],
        qb = [];
      return bb = class {
        constructor() {
          this._dirty = !0, this._tempColor = new Vb.f(0, 0, 0, 0), this._globalCurve = new Vb.f(0, 0, 0, 0), this._highlightsCurve = new Vb.f(0, 0, 0, 0), this._midtonesCurve = new Vb.f(0, 0, 0, 0), this._shadowsCurve = new Vb.f(0, 0, 0, 0), this._positiveCurve = new Vb.f(0, 0, 0, 0), this._negativeCurve = new Vb.f(0, 0, 0, 0), this._globalHue = (0, eb.m)(this, Fb, 30), this._globalDensity = ((0, eb.m)(this, Bb), (0, eb.m)(this, sb, 0)), this._globalSaturation = ((0, eb.m)(this, mb), (0, eb.m)(this, hb, 0)), this._globalExposure = ((0, eb.m)(this, xb), (0, eb.m)(this, jb, 0)), this._highlightsHue = ((0, eb.m)(this, Kb), (0, eb.m)(this, rb, 30)), this._highlightsDensity = ((0, eb.m)(this, Rb), (0, eb.m)(this, Db, 0)), this._highlightsSaturation = ((0, eb.m)(this, cb), (0, eb.m)(this, Yb, 0)), this._highlightsExposure = ((0, eb.m)(this, Zb), (0, eb.m)(this, fb, 0)), this._midtonesHue = ((0, eb.m)(this, Ab), (0, eb.m)(this, Wb, 30)), this._midtonesDensity = ((0, eb.m)(this, Jb), (0, eb.m)(this, Sb, 0)), this._midtonesSaturation = ((0, eb.m)(this, Nb), (0, eb.m)(this, vb, 0)), this._midtonesExposure = ((0, eb.m)(this, Qb), (0, eb.m)(this, Gb, 0)), this._shadowsHue = ((0, eb.m)(this, qb), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
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
        _getColorGradingDataToRef(wb, Mb, eb, Hb, pb) {
          null != wb && (wb = bb._Clamp(wb, 0, 360), Mb = bb._Clamp(Mb, -100, 100), eb = bb._Clamp(eb, -100, 100), Hb = bb._Clamp(Hb, -100, 100), Mb = bb._ApplyColorGradingSliderNonlinear(Mb), Mb *= .5, Hb = bb._ApplyColorGradingSliderNonlinear(Hb), Mb < 0 && (Mb *= -1, wb = (wb + 180) % 360), bb._FromHSBToRef(wb, Mb, 50 + .25 * Hb, pb), pb.scaleToRef(2, pb), pb.a = 1 + .01 * eb)
        }
        static _ApplyColorGradingSliderNonlinear(bb) {
          bb /= 100;
          let wb = Math.abs(bb);
          return wb = Math.pow(wb, 2), bb < 0 && (wb *= -1), wb *= 100, wb
        }
        static _FromHSBToRef(wb, Mb, eb, Hb) {
          let pb = bb._Clamp(wb, 0, 360);
          const Vb = bb._Clamp(Mb / 100, 0, 1),
            gb = bb._Clamp(eb / 100, 0, 1);
          if (0 === Vb) Hb.r = gb, Hb.g = gb, Hb.b = gb;
          else {
            pb /= 60;
            const bb = Math.floor(pb),
              wb = pb - bb,
              Mb = gb * (1 - Vb),
              eb = gb * (1 - Vb * wb),
              lb = gb * (1 - Vb * (1 - wb));
            switch (bb) {
              case 0:
                Hb.r = gb, Hb.g = lb, Hb.b = Mb;
                break;
              case 1:
                Hb.r = eb, Hb.g = gb, Hb.b = Mb;
                break;
              case 2:
                Hb.r = Mb, Hb.g = gb, Hb.b = lb;
                break;
              case 3:
                Hb.r = Mb, Hb.g = eb, Hb.b = gb;
                break;
              case 4:
                Hb.r = lb, Hb.g = Mb, Hb.b = gb;
                break;
              default:
                Hb.r = gb, Hb.g = Mb, Hb.b = eb
            }
          }
          Hb.a = 1
        }
        static _Clamp(bb, wb, Mb) {
          return Math.min(Math.max(bb, wb), Mb)
        }
        clone() {
          return zb.d.Clone((() => new bb), this)
        }
        serialize() {
          return zb.d.Serialize(this)
        }
        _bind(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), bb && (bb.setFloat4(wb, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), bb.setFloat4(Mb, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), bb.setFloat4(eb, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const Vb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], pb = [(0, Hb.E)()], gb = [(0, Hb.E)()], lb = [(0, Hb.E)()], Lb = [(0, Hb.E)()], Ib = [(0, Hb.E)()], Ob = [(0, Hb.E)()], Ub = [(0, Hb.E)()], tb = [(0, Hb.E)()], Cb = [(0, Hb.E)()], Eb = [(0, Hb.E)()], (0, eb.i)(null, null, wb, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalHue" in bb,
            get: bb => bb._globalHue,
            set: (bb, wb) => {
              bb._globalHue = wb
            }
          },
          metadata: Vb
        }, Fb, Bb), (0, eb.i)(null, null, Mb, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalDensity" in bb,
            get: bb => bb._globalDensity,
            set: (bb, wb) => {
              bb._globalDensity = wb
            }
          },
          metadata: Vb
        }, sb, mb), (0, eb.i)(null, null, pb, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalSaturation" in bb,
            get: bb => bb._globalSaturation,
            set: (bb, wb) => {
              bb._globalSaturation = wb
            }
          },
          metadata: Vb
        }, hb, xb), (0, eb.i)(null, null, gb, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalExposure" in bb,
            get: bb => bb._globalExposure,
            set: (bb, wb) => {
              bb._globalExposure = wb
            }
          },
          metadata: Vb
        }, jb, Kb), (0, eb.i)(null, null, lb, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsHue" in bb,
            get: bb => bb._highlightsHue,
            set: (bb, wb) => {
              bb._highlightsHue = wb
            }
          },
          metadata: Vb
        }, rb, Rb), (0, eb.i)(null, null, Lb, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsDensity" in bb,
            get: bb => bb._highlightsDensity,
            set: (bb, wb) => {
              bb._highlightsDensity = wb
            }
          },
          metadata: Vb
        }, Db, cb), (0, eb.i)(null, null, Ib, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsSaturation" in bb,
            get: bb => bb._highlightsSaturation,
            set: (bb, wb) => {
              bb._highlightsSaturation = wb
            }
          },
          metadata: Vb
        }, Yb, Zb), (0, eb.i)(null, null, Ob, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsExposure" in bb,
            get: bb => bb._highlightsExposure,
            set: (bb, wb) => {
              bb._highlightsExposure = wb
            }
          },
          metadata: Vb
        }, fb, Ab), (0, eb.i)(null, null, Ub, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesHue" in bb,
            get: bb => bb._midtonesHue,
            set: (bb, wb) => {
              bb._midtonesHue = wb
            }
          },
          metadata: Vb
        }, Wb, Jb), (0, eb.i)(null, null, tb, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesDensity" in bb,
            get: bb => bb._midtonesDensity,
            set: (bb, wb) => {
              bb._midtonesDensity = wb
            }
          },
          metadata: Vb
        }, Sb, Nb), (0, eb.i)(null, null, Cb, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesSaturation" in bb,
            get: bb => bb._midtonesSaturation,
            set: (bb, wb) => {
              bb._midtonesSaturation = wb
            }
          },
          metadata: Vb
        }, vb, Qb), (0, eb.i)(null, null, Eb, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesExposure" in bb,
            get: bb => bb._midtonesExposure,
            set: (bb, wb) => {
              bb._midtonesExposure = wb
            }
          },
          metadata: Vb
        }, Gb, qb), Vb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Vb
        })
      })(), bb.PrepareUniforms = Xb.b, bb
    })();

    function jb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      bb._bind(wb, Mb, eb, Hb)
    }
    var Kb = Mb(41611),
      rb = Mb(41797),
      Rb = Mb(38333);
    let Db = (() => {
        var bb;
        let wb, Mb, Lb, tb, Cb, Eb, Bb, Xb, Rb, Db, cb, Yb, Zb, fb, Ab, Wb, Jb, Sb, Nb, vb, Qb, Gb, qb, ab, ib, ub, db, Pb, nb = [],
          yb = [],
          ob = [],
          Tb = [],
          kb = [],
          bw = [],
          ww = [],
          Mw = [],
          ew = [],
          Hw = [],
          pw = [],
          Vw = [],
          gw = [],
          lw = [],
          Lw = [],
          Iw = [],
          Ow = [],
          Uw = [],
          tw = [],
          Cw = [],
          Ew = [],
          Fw = [],
          Bw = [],
          sw = [],
          mw = [],
          hw = [],
          zw = [],
          Xw = [],
          xw = [],
          jw = [],
          Kw = [],
          rw = [],
          Rw = [],
          Dw = [],
          Yw = [],
          Zw = [],
          fw = [],
          Aw = [],
          Ww = [],
          Jw = [],
          Sw = [],
          Nw = [],
          vw = [],
          Qw = [],
          Gw = [],
          qw = [],
          aw = [],
          iw = [],
          uw = [],
          dw = [],
          Pw = [],
          nw = [],
          yw = [],
          ow = [],
          Tw = [],
          kw = [];
        return bb = class {
          constructor() {
            this.colorCurves = (0, eb.m)(this, nb, new xb), this._colorCurvesEnabled = ((0, eb.m)(this, yb), (0, eb.m)(this, ob, !1)), this._colorGradingTexture = ((0, eb.m)(this, Tb), (0, eb.m)(this, kb, void 0)), this._colorGradingEnabled = ((0, eb.m)(this, bw), (0, eb.m)(this, ww, !1)), this._colorGradingWithGreenDepth = ((0, eb.m)(this, Mw), (0, eb.m)(this, ew, !0)), this._colorGradingBGR = ((0, eb.m)(this, Hw), (0, eb.m)(this, pw, !0)), this._exposure = ((0, eb.m)(this, Vw), (0, eb.m)(this, gw, 1)), this._toneMappingEnabled = ((0, eb.m)(this, lw), (0, eb.m)(this, Lw, !1)), this._toneMappingType = ((0, eb.m)(this, Iw), (0, eb.m)(this, Ow, bb.TONEMAPPING_STANDARD)), this._contrast = ((0, eb.m)(this, Uw), (0, eb.m)(this, tw, 1)), this._whiteBalanceEnabled = ((0, eb.m)(this, Cw), (0, eb.m)(this, Ew, !1)), this._temperature = ((0, eb.m)(this, Fw), (0, eb.m)(this, Bw, 6500)), this._tint = ((0, eb.m)(this, sw), (0, eb.m)(this, mw, 0)), this._whiteBalanceMatrix = ((0, eb.m)(this, hw), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, eb.m)(this, zw, 0), this.vignetteCenterX = ((0, eb.m)(this, Xw), (0, eb.m)(this, xw, 0)), this.vignetteCenterY = ((0, eb.m)(this, jw), (0, eb.m)(this, Kw, 0)), this.vignetteWeight = ((0, eb.m)(this, rw), (0, eb.m)(this, Rw, 1.5)), this.vignetteColor = ((0, eb.m)(this, Dw), (0, eb.m)(this, Yw, new Vb.f(0, 0, 0, 0))), this.vignetteCameraFov = ((0, eb.m)(this, Zw), (0, eb.m)(this, fw, .5)), this._vignetteBlendMode = ((0, eb.m)(this, Aw), (0, eb.m)(this, Ww, bb.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, eb.m)(this, Jw), (0, eb.m)(this, Sw, !1)), this._ditheringEnabled = ((0, eb.m)(this, Nw), (0, eb.m)(this, vw, !1)), this._ditheringIntensity = ((0, eb.m)(this, Qw), (0, eb.m)(this, Gw, 1 / 255)), this._skipFinalColorClamp = ((0, eb.m)(this, qw), (0, eb.m)(this, aw, !1)), this._applyByPostProcess = ((0, eb.m)(this, iw), (0, eb.m)(this, uw, !1)), this._isEnabled = ((0, eb.m)(this, dw), (0, eb.m)(this, Pw, !0)), this.outputTextureWidth = ((0, eb.m)(this, nw), (0, eb.m)(this, yw, 0)), this.outputTextureHeight = ((0, eb.m)(this, ow), (0, eb.m)(this, Tw, 0)), this.onUpdateParameters = ((0, eb.m)(this, kw), new pb.b)
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
            bb = Number.isNaN(bb) ? Ib : Math.max(bb, Ib), this._temperature !== bb && (this._temperature = bb, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(bb) {
            bb = (0, gb.Clamp)(bb, -150, Ob), this._tint !== bb && (this._tint = bb, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(bb, wb) {
              const Mb = Fb(Ub(bb, wb), hb),
                eb = sb.multiply(Mb).multiply(mb);
              return lb.b.GetAsMatrix3x3(eb)
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
          prepareDefines(wb) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return wb.WHITEBALANCE = !1, wb.VIGNETTE = !1, wb.TONEMAPPING = 0, wb.CONTRAST = !1, wb.EXPOSURE = !1, wb.COLORCURVES = !1, wb.COLORGRADING = !1, wb.COLORGRADING3D = !1, wb.DITHER = !1, wb.IMAGEPROCESSING = !1, wb.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(wb.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (wb.WHITEBALANCE = this._whiteBalanceEnabled, wb.VIGNETTE = this.vignetteEnabled, wb.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === bb._VIGNETTEMODE_MULTIPLY, wb.VIGNETTEBLENDMODEOPAQUE = !wb.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case bb.TONEMAPPING_KHR_PBR_NEUTRAL:
                wb.TONEMAPPING = 3;
                break;
              case bb.TONEMAPPING_ACES:
                wb.TONEMAPPING = 2;
                break;
              default:
                wb.TONEMAPPING = 1
            } else wb.TONEMAPPING = 0;
            wb.CONTRAST = 1 !== this.contrast, wb.EXPOSURE = 1 !== this.exposure, wb.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, wb.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, wb.COLORGRADING ? wb.COLORGRADING3D = this.colorGradingTexture.is3D : wb.COLORGRADING3D = !1, wb.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, wb.SAMPLER3DBGRMAP = this.colorGradingBGR, wb.DITHER = this._ditheringEnabled, wb.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, wb.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, wb.IMAGEPROCESSING = wb.WHITEBALANCE || wb.VIGNETTE || !!wb.TONEMAPPING || wb.CONTRAST || wb.EXPOSURE || wb.COLORCURVES || wb.COLORGRADING || wb.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(bb, wb) {
            if (this._whiteBalanceEnabled && bb.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && jb(this.colorCurves, bb), this._vignetteEnabled || this._ditheringEnabled) {
              const Mb = 1 / (this.outputTextureWidth || bb.DC().getRenderWidth()),
                eb = 1 / (this.outputTextureHeight || bb.DC().getRenderHeight());
              if (bb.setFloat2("vInverseScreenSize", Mb, eb), this._ditheringEnabled && bb.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const Hb = null != wb ? wb : eb / Mb;
                let pb = Math.tan(.5 * this.vignetteCameraFov),
                  Vb = pb * Hb;
                const gb = Math.sqrt(Vb * pb);
                Vb = (0, Kb.k)(Vb, gb, this.vignetteStretch), pb = (0, Kb.k)(pb, gb, this.vignetteStretch), bb.setFloat4("vignetteSettings1", Vb, pb, -Vb * this.vignetteCenterX, -pb * this.vignetteCenterY);
                const lb = -2 * this.vignetteWeight;
                bb.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, lb)
              }
            }
            if (bb.setFloat("exposureLinear", this.exposure), bb.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              bb.setTexture("txColorTransform", this.colorGradingTexture);
              const wb = this.colorGradingTexture.getSize().height;
              bb.setFloat4("colorTransformSettings", (wb - 1) / wb, .5 / wb, wb, this.colorGradingTexture.level)
            }
          }
          clone() {
            return zb.d.Clone((() => new bb), this)
          }
          serialize() {
            return zb.d.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wb = [(0, Hb.g)()], Mb = [(0, Hb.E)()], Lb = [(0, Hb.x)("colorGradingTexture")], tb = [(0, Hb.E)()], Cb = [(0, Hb.E)()], Eb = [(0, Hb.E)()], Bb = [(0, Hb.E)()], Xb = [(0, Hb.E)()], Rb = [(0, Hb.E)()], Db = [(0, Hb.E)()], cb = [(0, Hb.E)()], Yb = [(0, Hb.E)()], Zb = [(0, Hb.E)()], fb = [(0, Hb.E)()], Ab = [(0, Hb.E)()], Wb = [(0, Hb.E)()], Jb = [(0, Hb.E)()], Sb = [(0, Hb.l)()], Nb = [(0, Hb.E)()], vb = [(0, Hb.E)()], Qb = [(0, Hb.E)()], Gb = [(0, Hb.E)()], qb = [(0, Hb.E)()], ab = [(0, Hb.E)()], ib = [(0, Hb.E)()], ub = [(0, Hb.E)()], db = [(0, Hb.E)()], Pb = [(0, Hb.E)()], (0, eb.i)(null, null, wb, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: bb => "colorCurves" in bb,
              get: bb => bb.colorCurves,
              set: (bb, wb) => {
                bb.colorCurves = wb
              }
            },
            metadata: pb
          }, nb, yb), (0, eb.i)(null, null, Mb, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorCurvesEnabled" in bb,
              get: bb => bb._colorCurvesEnabled,
              set: (bb, wb) => {
                bb._colorCurvesEnabled = wb
              }
            },
            metadata: pb
          }, ob, Tb), (0, eb.i)(null, null, Lb, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingTexture" in bb,
              get: bb => bb._colorGradingTexture,
              set: (bb, wb) => {
                bb._colorGradingTexture = wb
              }
            },
            metadata: pb
          }, kb, bw), (0, eb.i)(null, null, tb, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingEnabled" in bb,
              get: bb => bb._colorGradingEnabled,
              set: (bb, wb) => {
                bb._colorGradingEnabled = wb
              }
            },
            metadata: pb
          }, ww, Mw), (0, eb.i)(null, null, Cb, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingWithGreenDepth" in bb,
              get: bb => bb._colorGradingWithGreenDepth,
              set: (bb, wb) => {
                bb._colorGradingWithGreenDepth = wb
              }
            },
            metadata: pb
          }, ew, Hw), (0, eb.i)(null, null, Eb, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingBGR" in bb,
              get: bb => bb._colorGradingBGR,
              set: (bb, wb) => {
                bb._colorGradingBGR = wb
              }
            },
            metadata: pb
          }, pw, Vw), (0, eb.i)(null, null, Bb, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: bb => "_exposure" in bb,
              get: bb => bb._exposure,
              set: (bb, wb) => {
                bb._exposure = wb
              }
            },
            metadata: pb
          }, gw, lw), (0, eb.i)(null, null, Xb, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_toneMappingEnabled" in bb,
              get: bb => bb._toneMappingEnabled,
              set: (bb, wb) => {
                bb._toneMappingEnabled = wb
              }
            },
            metadata: pb
          }, Lw, Iw), (0, eb.i)(null, null, Rb, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: bb => "_toneMappingType" in bb,
              get: bb => bb._toneMappingType,
              set: (bb, wb) => {
                bb._toneMappingType = wb
              }
            },
            metadata: pb
          }, Ow, Uw), (0, eb.i)(null, null, Db, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: bb => "_contrast" in bb,
              get: bb => bb._contrast,
              set: (bb, wb) => {
                bb._contrast = wb
              }
            },
            metadata: pb
          }, tw, Cw), (0, eb.i)(null, null, cb, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_whiteBalanceEnabled" in bb,
              get: bb => bb._whiteBalanceEnabled,
              set: (bb, wb) => {
                bb._whiteBalanceEnabled = wb
              }
            },
            metadata: pb
          }, Ew, Fw), (0, eb.i)(null, null, Yb, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: bb => "_temperature" in bb,
              get: bb => bb._temperature,
              set: (bb, wb) => {
                bb._temperature = wb
              }
            },
            metadata: pb
          }, Bw, sw), (0, eb.i)(null, null, Zb, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: bb => "_tint" in bb,
              get: bb => bb._tint,
              set: (bb, wb) => {
                bb._tint = wb
              }
            },
            metadata: pb
          }, mw, hw), (0, eb.i)(null, null, fb, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteStretch" in bb,
              get: bb => bb.vignetteStretch,
              set: (bb, wb) => {
                bb.vignetteStretch = wb
              }
            },
            metadata: pb
          }, zw, Xw), (0, eb.i)(null, null, Ab, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteCenterX" in bb,
              get: bb => bb.vignetteCenterX,
              set: (bb, wb) => {
                bb.vignetteCenterX = wb
              }
            },
            metadata: pb
          }, xw, jw), (0, eb.i)(null, null, Wb, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteCenterY" in bb,
              get: bb => bb.vignetteCenterY,
              set: (bb, wb) => {
                bb.vignetteCenterY = wb
              }
            },
            metadata: pb
          }, Kw, rw), (0, eb.i)(null, null, Jb, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteWeight" in bb,
              get: bb => bb.vignetteWeight,
              set: (bb, wb) => {
                bb.vignetteWeight = wb
              }
            },
            metadata: pb
          }, Rw, Dw), (0, eb.i)(null, null, Sb, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteColor" in bb,
              get: bb => bb.vignetteColor,
              set: (bb, wb) => {
                bb.vignetteColor = wb
              }
            },
            metadata: pb
          }, Yw, Zw), (0, eb.i)(null, null, Nb, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteCameraFov" in bb,
              get: bb => bb.vignetteCameraFov,
              set: (bb, wb) => {
                bb.vignetteCameraFov = wb
              }
            },
            metadata: pb
          }, fw, Aw), (0, eb.i)(null, null, vb, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "_vignetteBlendMode" in bb,
              get: bb => bb._vignetteBlendMode,
              set: (bb, wb) => {
                bb._vignetteBlendMode = wb
              }
            },
            metadata: pb
          }, Ww, Jw), (0, eb.i)(null, null, Qb, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_vignetteEnabled" in bb,
              get: bb => bb._vignetteEnabled,
              set: (bb, wb) => {
                bb._vignetteEnabled = wb
              }
            },
            metadata: pb
          }, Sw, Nw), (0, eb.i)(null, null, Gb, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_ditheringEnabled" in bb,
              get: bb => bb._ditheringEnabled,
              set: (bb, wb) => {
                bb._ditheringEnabled = wb
              }
            },
            metadata: pb
          }, vw, Qw), (0, eb.i)(null, null, qb, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: bb => "_ditheringIntensity" in bb,
              get: bb => bb._ditheringIntensity,
              set: (bb, wb) => {
                bb._ditheringIntensity = wb
              }
            },
            metadata: pb
          }, Gw, qw), (0, eb.i)(null, null, ab, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: bb => "_skipFinalColorClamp" in bb,
              get: bb => bb._skipFinalColorClamp,
              set: (bb, wb) => {
                bb._skipFinalColorClamp = wb
              }
            },
            metadata: pb
          }, aw, iw), (0, eb.i)(null, null, ib, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: bb => "_applyByPostProcess" in bb,
              get: bb => bb._applyByPostProcess,
              set: (bb, wb) => {
                bb._applyByPostProcess = wb
              }
            },
            metadata: pb
          }, uw, dw), (0, eb.i)(null, null, ub, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_isEnabled" in bb,
              get: bb => bb._isEnabled,
              set: (bb, wb) => {
                bb._isEnabled = wb
              }
            },
            metadata: pb
          }, Pw, nw), (0, eb.i)(null, null, db, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: bb => "outputTextureWidth" in bb,
              get: bb => bb.outputTextureWidth,
              set: (bb, wb) => {
                bb.outputTextureWidth = wb
              }
            },
            metadata: pb
          }, yw, ow), (0, eb.i)(null, null, Pb, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "outputTextureHeight" in bb,
              get: bb => bb.outputTextureHeight,
              set: (bb, wb) => {
                bb.outputTextureHeight = wb
              }
            },
            metadata: pb
          }, Tw, kw), pb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pb
          })
        })(), bb.TONEMAPPING_STANDARD = 0, bb.TONEMAPPING_ACES = 1, bb.TONEMAPPING_KHR_PBR_NEUTRAL = 2, bb.PrepareUniforms = rb.f, bb.PrepareSamplers = rb.b, bb._VIGNETTEMODE_MULTIPLY = 0, bb._VIGNETTEMODE_OPAQUE = 1, bb
      })(),
      cb = !1;

    function Yb(bb) {
      const wb = zb.d.Parse((() => new Db), bb, null, null);
      return void 0 !== bb.vignetteCentreX && (wb.vignetteCenterX = bb.vignetteCentreX), void 0 !== bb.vignetteCentreY && (wb.vignetteCenterY = bb.vignetteCentreY), wb
    }

    function Zb() {
      cb || (cb = !0, Db.Parse = Yb, zb.d._ImageProcessingConfigurationParser = Yb, (0, Rb.e)("BABYLON.ImageProcessingConfiguration", Db))
    }
  },
  41806: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(39971),
      Hb = Mb(41771);
    class pb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 ? arguments[3] : void 0,
          Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          pb = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = bb, this._noUBO = !bb.supportsUniformBuffers || Hb, this._dynamic = Mb, this._name = eb ?? "no-name", this._data = wb || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === pb && this._engine._features.trackUbosInFrame || !0 === pb) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.kbb = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.kbb = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
        let wb;
        if (wb = bb <= 2 ? bb : 4, this._uniformLocationPointer % wb !== 0) {
          const bb = this._uniformLocationPointer;
          this._uniformLocationPointer += wb - this._uniformLocationPointer % wb;
          const Mb = this._uniformLocationPointer - bb;
          for (let wb = 0; wb < Mb; wb++) this._data.push(0)
        }
      }
      addUniform(bb, wb) {
        let Mb, eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (eb > 0 && "number" === typeof wb && (this._uniformArraySizes[bb] = {
            strideSize: wb,
            arraySize: eb
          }), void 0 === this._uniformLocations[bb] && (this._uniformNames.push(bb), !this._noUBO)) {
          if (eb > 0) {
            if (wb instanceof Array) throw "addUniform should not be use with Array in UBO: " + bb;
            if (this._fillAlignment(4), 16 == wb) wb *= eb;
            else {
              wb = wb * eb + (4 - wb) * eb
            }
            Mb = [];
            for (let bb = 0; bb < wb; bb++) Mb.push(0)
          } else {
            if (wb instanceof Array) Mb = wb, wb = Mb.length;
            else {
              Mb = [];
              for (let bb = 0; bb < wb; bb++) Mb.push(0)
            }
            this._fillAlignment(wb)
          }
          this._uniformSizes[bb] = wb, this._uniformLocations[bb] = this._uniformLocationPointer, this._uniformLocationPointer += wb;
          for (let bb = 0; bb < wb; bb++) this._data.push(Mb[bb]);
          this._needSync = !0
        }
      }
      addMatrix(bb, wb) {
        this.addUniform(bb, Array.prototype.slice.call(wb.ppb()))
      }
      addFloat2(bb, wb, Mb) {
        const eb = [wb, Mb];
        this.addUniform(bb, eb)
      }
      addFloat3(bb, wb, Mb, eb) {
        const Hb = [wb, Mb, eb];
        this.addUniform(bb, Hb)
      }
      addColor3(bb, wb) {
        const Mb = [wb.r, wb.g, wb.b];
        this.addUniform(bb, Mb)
      }
      addColor4(bb, wb, Mb) {
        const eb = [wb.r, wb.g, wb.b, Mb];
        this.addUniform(bb, eb)
      }
      addVector3(bb, wb) {
        const Mb = [wb.x, wb.y, wb.z];
        this.addUniform(bb, Mb)
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
        let wb = 0;
        for (const Mb in this._uniformLocations)
          if (bb.push(Mb), 10 === ++wb) break;
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
      _buffersEqual(bb, wb) {
        for (let Mb = 0; Mb < bb.length; ++Mb)
          if (bb[Mb] !== wb[Mb]) return !1;
        return !0
      }
      _copyBuffer(bb, wb) {
        for (let Mb = 0; Mb < bb.length; ++Mb) wb[Mb] = bb[Mb]
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
        let wb = this._slotByOwner.get(bb);
        if (void 0 === wb && (wb = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(bb, wb), this._ownerCount++, bb._uniformBuffersWithOwnedSlot || (bb._uniformBuffersWithOwnedSlot = []), bb._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(wb, bb._uniformBuffersWithOwnedSlot)), this._slotGeneration[wb] === this._dataGeneration) return this._bufferIndex = wb, this._buffer = this._buffers[wb][0], this.bindUniformBuffer(), this._slotFrameId[wb] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const Mb = this._buffers[wb][1];
        this._slotFrameId[wb] === this._currentFrameId && Mb && !this._buffersEqual(this._bufferData, Mb) && (wb = this._takeFreeSlot(!1)), this._bufferIndex = wb, this._buffer = this._buffers[wb][0], this.bindUniformBuffer();
        const eb = this._buffers[wb][1];
        eb && this._buffersEqual(this._bufferData, eb) || (eb && this._copyBuffer(this._bufferData, eb), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[wb] = this._currentFrameId, this._slotGeneration[wb] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(bb) {
        for (let Mb = 0; Mb < this._freeSlots.length; ++Mb) {
          const wb = this._freeSlots[Mb];
          if (this._slotFrameId[wb] !== this._currentFrameId) return bb && (this._freeSlots[Mb] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), wb
        }
        this._rebuild();
        const wb = this._buffers.length - 1;
        return bb || this._freeSlots.push(wb), wb
      }
      _releaseOwnerSlot(bb) {
        const wb = this._slotByOwner?.get(bb);
        if (void 0 === wb) return;
        this._slotByOwner.delete(bb);
        const Mb = this._ownerListsBySlot.get(wb);
        Mb && (this._removeOwnerBacklink(Mb), this._ownerListsBySlot.delete(wb)), this._ownerCount--, this._freeSlots.push(wb)
      }
      _removeOwnerBacklink(bb) {
        const wb = bb.indexOf(this); - 1 !== wb && (bb[wb] = bb[bb.length - 1], bb.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(bb, wb, Mb) {
        this._checkNewFrame();
        let Hb = this._uniformLocations[bb];
        if (void 0 === Hb) {
          if (this._buffer) return void eb.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + bb);
          this.addUniform(bb, Mb), Hb = this._uniformLocations[bb]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let bb = 0; bb < Mb; bb++) this._bufferData[Hb + bb] = wb[bb];
          this._dataGeneration++
        } else {
          let bb = !1;
          for (let eb = 0; eb < Mb; eb++)(16 === Mb && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[Hb + eb] !== Math.fround(wb[eb])) && (bb = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Hb + eb] = wb[eb]);
          this._needSync = this._needSync || bb, bb && this._dataGeneration++
        }
      }
      updateUniformArray(bb, wb, Mb) {
        this._checkNewFrame();
        const pb = this._uniformLocations[bb];
        if (void 0 === pb) return void eb.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const Vb = this._uniformArraySizes[bb];
        if (this._dynamic) {
          for (let bb = 0; bb < Mb; bb++) this._bufferData[pb + bb] = wb[bb];
          this._dataGeneration++
        } else {
          let bb = !1,
            eb = 0,
            gb = 0;
          for (let lb = 0; lb < Mb; lb++)
            if (this._bufferData[pb + 4 * gb + eb] !== Hb.e.FloatRound(wb[lb]) && (bb = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[pb + 4 * gb + eb] = wb[lb]), eb++, eb === Vb.strideSize) {
              for (; eb < 4; eb++) this._bufferData[pb + 4 * gb + eb] = 0;
              eb = 0, gb++
            } this._needSync = this._needSync || bb, bb && this._dataGeneration++
        }
      }
      _cacheMatrix(bb, wb) {
        this._checkNewFrame();
        const Mb = this._valueCache[bb],
          eb = wb.updateFlag;
        return (void 0 === Mb || Mb !== eb) && (this._valueCache[bb] = eb, !0)
      }
      _updateMatrix3x3ForUniform(bb, wb) {
        for (let Mb = 0; Mb < 3; Mb++) pb._TempBuffer[4 * Mb] = wb[3 * Mb], pb._TempBuffer[4 * Mb + 1] = wb[3 * Mb + 1], pb._TempBuffer[4 * Mb + 2] = wb[3 * Mb + 2], pb._TempBuffer[4 * Mb + 3] = 0;
        this.updateUniform(bb, pb._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(bb, wb) {
        this._currentEffect.setMatrix3x3(bb, wb)
      }
      _updateMatrix2x2ForEffect(bb, wb) {
        this._currentEffect.setMatrix2x2(bb, wb)
      }
      _updateMatrix2x2ForUniform(bb, wb) {
        for (let Mb = 0; Mb < 2; Mb++) pb._TempBuffer[4 * Mb] = wb[2 * Mb], pb._TempBuffer[4 * Mb + 1] = wb[2 * Mb + 1], pb._TempBuffer[4 * Mb + 2] = 0, pb._TempBuffer[4 * Mb + 3] = 0;
        this.updateUniform(bb, pb._TempBuffer, 8)
      }
      _updateFloatForEffect(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(bb + Mb, wb)
      }
      _updateFloatForUniform(bb, wb) {
        pb._TempBuffer[0] = wb, this.updateUniform(bb, pb._TempBuffer, 1)
      }
      _updateFloat2ForEffect(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(bb + eb, wb, Mb)
      }
      _updateFloat2ForUniform(bb, wb, Mb) {
        pb._TempBuffer[0] = wb, pb._TempBuffer[1] = Mb, this.updateUniform(bb, pb._TempBuffer, 2)
      }
      _updateFloat3ForEffect(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(bb + Hb, wb, Mb, eb)
      }
      _updateFloat3ForUniform(bb, wb, Mb, eb) {
        pb._TempBuffer[0] = wb, pb._TempBuffer[1] = Mb, pb._TempBuffer[2] = eb, this.updateUniform(bb, pb._TempBuffer, 3)
      }
      _updateFloat4ForEffect(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(bb + pb, wb, Mb, eb, Hb)
      }
      _updateFloat4ForUniform(bb, wb, Mb, eb, Hb) {
        pb._TempBuffer[0] = wb, pb._TempBuffer[1] = Mb, pb._TempBuffer[2] = eb, pb._TempBuffer[3] = Hb, this.updateUniform(bb, pb._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[bb]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(bb + Mb, wb);
            break;
          case 3:
            this._currentEffect.setFloatArray3(bb + Mb, wb);
            break;
          case 4:
            this._currentEffect.setFloatArray4(bb + Mb, wb);
            break;
          default:
            this._currentEffect.setFloatArray(bb + Mb, wb)
        }
      }
      _updateFloatArrayForUniform(bb, wb) {
        this.updateUniformArray(bb, wb, wb.length)
      }
      _updateArrayForEffect(bb, wb) {
        this._currentEffect.setArray(bb, wb)
      }
      _updateArrayForUniform(bb, wb) {
        this.updateUniformArray(bb, wb, wb.length)
      }
      _updateIntArrayForEffect(bb, wb) {
        this._currentEffect.setIntArray(bb, wb)
      }
      _updateIntArrayForUniform(bb, wb) {
        pb._TempBufferInt32View.set(wb), this.updateUniformArray(bb, pb._TempBuffer, wb.length)
      }
      _updateUIntArrayForEffect(bb, wb) {
        this._currentEffect.setUIntArray(bb, wb)
      }
      _updateUIntArrayForUniform(bb, wb) {
        pb._TempBufferUInt32View.set(wb), this.updateUniformArray(bb, pb._TempBuffer, wb.length)
      }
      _updateMatrixForEffect(bb, wb) {
        this._currentEffect.setMatrix(bb, wb)
      }
      _updateMatrixForUniform(bb, wb) {
        this._cacheMatrix(bb, wb) && this.updateUniform(bb, wb.ppb(), 16)
      }
      _updateMatricesForEffect(bb, wb) {
        this._currentEffect.setMatrices(bb, wb)
      }
      _updateMatricesForUniform(bb, wb) {
        this.updateUniform(bb, wb, wb.length)
      }
      _updateVector3ForEffect(bb, wb) {
        this._currentEffect.setVector3(bb, wb)
      }
      _updateVector3ForUniform(bb, wb) {
        pb._TempBuffer[0] = wb.x, pb._TempBuffer[1] = wb.y, pb._TempBuffer[2] = wb.z, this.updateUniform(bb, pb._TempBuffer, 3)
      }
      _updateVector4ForEffect(bb, wb) {
        this._currentEffect.setVector4(bb, wb)
      }
      _updateVector4ForUniform(bb, wb) {
        pb._TempBuffer[0] = wb.x, pb._TempBuffer[1] = wb.y, pb._TempBuffer[2] = wb.z, pb._TempBuffer[3] = wb.w, this.updateUniform(bb, pb._TempBuffer, 4)
      }
      _updateColor3ForEffect(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(bb + Mb, wb)
      }
      _updateColor3ForUniform(bb, wb) {
        pb._TempBuffer[0] = wb.r, pb._TempBuffer[1] = wb.g, pb._TempBuffer[2] = wb.b, this.updateUniform(bb, pb._TempBuffer, 3)
      }
      _updateColor4ForEffect(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(bb + eb, wb, Mb)
      }
      _updateDirectColor4ForEffect(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(bb + Mb, wb)
      }
      _updateColor4ForUniform(bb, wb, Mb) {
        pb._TempBuffer[0] = wb.r, pb._TempBuffer[1] = wb.g, pb._TempBuffer[2] = wb.b, pb._TempBuffer[3] = Mb, this.updateUniform(bb, pb._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(bb, wb) {
        pb._TempBuffer[0] = wb.r, pb._TempBuffer[1] = wb.g, pb._TempBuffer[2] = wb.b, pb._TempBuffer[3] = wb.a, this.updateUniform(bb, pb._TempBuffer, 4)
      }
      _updateIntForEffect(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(bb + Mb, wb)
      }
      _updateIntForUniform(bb, wb) {
        pb._TempBufferInt32View[0] = wb, this.updateUniform(bb, pb._TempBuffer, 1)
      }
      _updateInt2ForEffect(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(bb + eb, wb, Mb)
      }
      _updateInt2ForUniform(bb, wb, Mb) {
        pb._TempBufferInt32View[0] = wb, pb._TempBufferInt32View[1] = Mb, this.updateUniform(bb, pb._TempBuffer, 2)
      }
      _updateInt3ForEffect(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(bb + Hb, wb, Mb, eb)
      }
      _updateInt3ForUniform(bb, wb, Mb, eb) {
        pb._TempBufferInt32View[0] = wb, pb._TempBufferInt32View[1] = Mb, pb._TempBufferInt32View[2] = eb, this.updateUniform(bb, pb._TempBuffer, 3)
      }
      _updateInt4ForEffect(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(bb + pb, wb, Mb, eb, Hb)
      }
      _updateInt4ForUniform(bb, wb, Mb, eb, Hb) {
        pb._TempBufferInt32View[0] = wb, pb._TempBufferInt32View[1] = Mb, pb._TempBufferInt32View[2] = eb, pb._TempBufferInt32View[3] = Hb, this.updateUniform(bb, pb._TempBuffer, 4)
      }
      _updateUIntForEffect(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(bb + Mb, wb)
      }
      _updateUIntForUniform(bb, wb) {
        pb._TempBufferUInt32View[0] = wb, this.updateUniform(bb, pb._TempBuffer, 1)
      }
      _updateUInt2ForEffect(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(bb + eb, wb, Mb)
      }
      _updateUInt2ForUniform(bb, wb, Mb) {
        pb._TempBufferUInt32View[0] = wb, pb._TempBufferUInt32View[1] = Mb, this.updateUniform(bb, pb._TempBuffer, 2)
      }
      _updateUInt3ForEffect(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(bb + Hb, wb, Mb, eb)
      }
      _updateUInt3ForUniform(bb, wb, Mb, eb) {
        pb._TempBufferUInt32View[0] = wb, pb._TempBufferUInt32View[1] = Mb, pb._TempBufferUInt32View[2] = eb, this.updateUniform(bb, pb._TempBuffer, 3)
      }
      _updateUInt4ForEffect(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(bb + pb, wb, Mb, eb, Hb)
      }
      _updateUInt4ForUniform(bb, wb, Mb, eb, Hb) {
        pb._TempBufferUInt32View[0] = wb, pb._TempBufferUInt32View[1] = Mb, pb._TempBufferUInt32View[2] = eb, pb._TempBufferUInt32View[3] = Hb, this.updateUniform(bb, pb._TempBuffer, 4)
      }
      setTexture(bb, wb) {
        this._currentEffect.setTexture(bb, wb)
      }
      setTextureArray(bb, wb) {
        this._currentEffect.setTextureArray(bb, wb)
      }
      bindTexture(bb, wb) {
        this._currentEffect._bindTexture(bb, wb)
      }
      updateUniformDirectly(bb, wb) {
        this.updateUniform(bb, wb, wb.length), this.update()
      }
      bindToEffect(bb, wb) {
        this._currentEffect = bb, this._currentEffectName = wb
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(bb) {
        if (!this._buffers) return this._buffer === bb;
        for (let wb = 0; wb < this._buffers.length; ++wb) {
          if (this._buffers[wb][0] === bb) return this._bufferIndex = wb, this._buffer = bb, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[wb][1] && (this._bufferData.set(this._buffers[wb][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(bb) {
        return void 0 !== this._uniformLocations[bb]
      }
      dispose() {
        if (this._noUBO) return;
        const bb = this._engine._uniformBuffers,
          wb = bb.indexOf(this);
        if (-1 !== wb && (bb[wb] = bb[bb.length - 1], bb.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let bb = 0; bb < this._buffers.length; ++bb) {
            const wb = this._buffers[bb][0];
            this._engine._releaseBuffer(wb)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    pb._MAX_UNIFORM_SIZE = 256, pb._TempBuffer = new Float32Array(pb._MAX_UNIFORM_SIZE), pb._TempBufferInt32View = new Int32Array(pb._TempBuffer.buffer), pb._TempBufferUInt32View = new Uint32Array(pb._TempBuffer.buffer)
  },
  41594: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb
    });
    var eb = Mb(41603);
    class Hb extends eb.c {
      constructor(bb) {
        super(), this._buffer = bb
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  41686: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => lb,
      d: () => Lb
    });
    const eb = "__bjs_serializable__",
      Hb = new WeakMap;

    function pb(bb, wb) {
      return Object.prototype.hasOwnProperty.call(bb, wb)
    }
    const Vb = function() {
      let bb = Symbol.metadata;
      return bb || (bb = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: bb
      })), bb
    }();

    function gb(bb) {
      return "function" === typeof bb ? bb : bb?.constructor
    }

    function lb(bb) {
      if (!bb) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(Vb)}) polyfill must run before decorated classes are evaluated.`);
      return pb(bb, eb) || (bb[eb] = {}), bb[eb]
    }

    function Lb(bb) {
      const wb = gb(bb),
        Mb = wb ? wb[Vb] : void 0;
      if (!Mb) return {};
      const lb = Hb.get(Mb);
      if (lb) return lb;
      const Lb = {},
        Ib = [];
      let Ob = Mb;
      for (; Ob;) Ib.push(Ob), Ob = Object.getPrototypeOf(Ob);
      for (const Hb of Ib)
        if (pb(Hb, eb)) {
          const bb = Hb[eb];
          for (const wb in bb) Lb[wb] = bb[wb]
        } return Hb.set(Mb, Lb), Lb
    }
  },
  41679: (bb, wb, Mb) => {
    Mb.d(wb, {
      B: () => Ob,
      E: () => Vb,
      c: () => mb,
      d: () => pb,
      f: () => sb,
      g: () => tb,
      i: () => lb,
      l: () => Cb,
      m: () => Lb,
      q: () => Fb,
      r: () => Ub,
      t: () => Eb,
      x: () => gb,
      y: () => Ib
    });
    var eb = Mb(41686);

    function Hb(bb, wb) {
      return (Mb, Hb) => {
        if (!Hb.metadata) return;
        const pb = String(Hb.name),
          Vb = (0, eb.b)(Hb.metadata);
        Vb[pb] || (Vb[pb] = {
          type: bb,
          sourceName: wb
        })
      }
    }

    function pb(bb) {
      return function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (Mb, eb) => {
          const Hb = wb || "_" + String(eb.name);
          return {
            init(bb) {
              return void 0 === bb && Hb in this || (this[Hb] = bb), bb
            },
            get() {
              return this[Hb]
            },
            set(wb) {
              "function" === typeof this[Hb]?.equals && this[Hb].equals(wb) || this[Hb] !== wb && (this[Hb] = wb, this[bb]())
            }
          }
        }
      }(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function Vb(bb) {
      return Hb(0, bb)
    }

    function gb(bb) {
      return Hb(1, bb)
    }

    function lb(bb) {
      return Hb(2, bb)
    }

    function Lb(bb) {
      return Hb(3, bb)
    }

    function Ib(bb) {
      return Hb(4, bb)
    }

    function Ob(bb) {
      return Hb(5, bb)
    }

    function Ub(bb) {
      return Hb(6, bb)
    }

    function tb(bb) {
      return Hb(7, bb)
    }

    function Cb(bb) {
      return Hb(8, bb)
    }

    function Eb(bb) {
      return Hb(10, bb)
    }

    function Fb(bb) {
      return Hb(12, bb)
    }

    function Bb(bb, wb, Mb) {
      const eb = String(wb.name);
      let Hb = null;
      const pb = function() {
        if (null === Hb) {
          Hb = bb, "undefined" !== typeof _native && _native[eb] && (Hb = Mb(_native[eb], bb));
          const Vb = this && (wb.static ? this : Object.getPrototypeOf(this));
          Vb?.[eb] === pb && (Vb[eb] = Hb)
        }
        for (var Vb = arguments.length, gb = new Array(Vb), lb = 0; lb < Vb; lb++) gb[lb] = arguments[lb];
        return Hb.apply(this, gb)
      };
      return pb
    }

    function sb(bb, wb) {
      return Bb(bb, wb, (bb => bb))
    }

    function mb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (Mb, eb) => {
        const Hb = wb || "_" + String(eb.name);
        return {
          get() {
            return this[Hb]?.value
          },
          set(wb) {
            "function" === typeof this[Hb]?.value?.equals && this[Hb].value.equals(wb) || this[Hb].value !== wb && (this[Hb].value = wb, this[bb]())
          }
        }
      }
    }
    sb.filter = function(bb) {
      return (wb, Mb) => Bb(wb, Mb, ((wb, Mb) => function() {
        for (var eb = arguments.length, Hb = new Array(eb), pb = 0; pb < eb; pb++) Hb[pb] = arguments[pb];
        return bb(...Hb) ? wb(...Hb) : Mb.apply(this, Hb)
      }))
    }
  },
  41697: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb
    });
    var eb = Mb(41554),
      Hb = Mb(41705),
      pb = Mb(38406),
      Vb = Mb(38285),
      gb = Mb(41686);
    const lb = function(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const pb = bb();
      Hb.c && Hb.c.HasTags(wb) && Hb.c.AddTagsTo(pb, Hb.c.GetTags(wb, !0));
      const Vb = (0, gb.d)(pb),
        lb = {};
      for (const Hb in Vb) {
        const bb = Vb[Hb],
          gb = wb[Hb],
          Ib = bb.type;
        if (void 0 !== gb && null !== gb && ("uniqueId" !== Hb || Lb.AllowLoadingUniqueId)) switch (Ib) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof gb.slice ? pb[Hb] = gb.slice() : pb[Hb] = gb;
            break;
          case 1:
            eb.cloneTexturesOnlyOnce && lb[gb.uniqueId] ? pb[Hb] = lb[gb.uniqueId] : (pb[Hb] = Mb || gb.isRenderTarget ? gb : gb.clone(), lb[gb.uniqueId] = pb[Hb]);
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
            pb[Hb] = Mb ? gb : gb.clone()
        }
      }
      return pb
    };
    class Lb {
      static AppendSerializedAnimations(bb, wb) {
        if (bb.animations) {
          wb.animations = [];
          for (let Mb = 0; Mb < bb.animations.length; Mb++) {
            const eb = bb.animations[Mb];
            wb.animations.push(eb.serialize())
          }
        }
      }
      static Serialize(bb, wb) {
        wb || (wb = {}), Hb.c && (wb.tags = Hb.c.GetTags(bb));
        const Mb = (0, gb.d)(bb);
        for (const eb in Mb) {
          const Hb = Mb[eb],
            pb = Hb.sourceName || eb,
            Vb = Hb.type,
            gb = bb[eb];
          if (void 0 !== gb && null !== gb && ("uniqueId" !== eb || Lb.AllowLoadingUniqueId)) switch (Vb) {
            case 0:
              Array.isArray(gb) ? wb[pb] = gb.slice() : wb[pb] = gb;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              wb[pb] = gb.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              wb[pb] = gb.ppb();
              break;
            case 6:
            case 11:
              wb[pb] = gb.id
          }
        }
        return wb
      }
      static ParseProperties(bb, wb, Mb, eb) {
        eb || (eb = "");
        const Hb = (0, gb.d)(wb);
        for (const gb in Hb) {
          const lb = Hb[gb],
            Ib = bb[lb.sourceName || gb],
            Ob = lb.type;
          if (void 0 !== Ib && null !== Ib && ("uniqueId" !== gb || Lb.AllowLoadingUniqueId)) {
            const bb = wb;
            switch (Ob) {
              case 0:
                bb[gb] = Ib;
                break;
              case 1:
                Mb && (bb[gb] = Lb._TextureParser(Ib, Mb, eb));
                break;
              case 2:
                bb[gb] = pb.e.FromArray(Ib);
                break;
              case 3:
                bb[gb] = Lb._FresnelParametersParser(Ib);
                break;
              case 4:
                bb[gb] = Vb.m.FromArray(Ib);
                break;
              case 5:
                bb[gb] = Vb.o.FromArray(Ib);
                break;
              case 6:
                Mb && (bb[gb] = Mb.getLastMeshById(Ib));
                break;
              case 7:
                bb[gb] = Lb._ColorCurvesParser(Ib);
                break;
              case 8:
                bb[gb] = pb.f.FromArray(Ib);
                break;
              case 9:
                bb[gb] = Lb._ImageProcessingConfigurationParser(Ib);
                break;
              case 10:
                bb[gb] = Vb.e.FromArray(Ib);
                break;
              case 11:
                Mb && (bb[gb] = Mb.getCameraById(Ib));
                break;
              case 12:
                bb[gb] = Vb.b.FromArray(Ib);
                break;
              case 13:
                bb[gb] = Vb.q.FromArray(Ib)
            }
          }
        }
      }
      static Parse(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const pb = bb();
        return Hb.c && Hb.c.AddTagsTo(pb, wb.tags), Lb.ParseProperties(wb, pb, Mb, eb), pb
      }
      static Clone(bb, wb) {
        return lb(bb, wb, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(bb, wb) {
        return lb(bb, wb, !0)
      }
    }
    Lb.AllowLoadingUniqueId = !1, Lb._ImageProcessingConfigurationParser = bb => {
      throw (0, eb.k)("ImageProcessingConfiguration")
    }, Lb._FresnelParametersParser = bb => {
      throw (0, eb.k)("FresnelParameters")
    }, Lb._ColorCurvesParser = bb => {
      throw (0, eb.k)("ColorCurves")
    }, Lb._TextureParser = (bb, wb, Mb) => {
      throw (0, eb.k)("Texture")
    }
  },
  41631: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb
    });
    var eb = Mb(41581);
    class Hb {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = Hb.Enabled, this._lastSecValueCount++
      }
      addCount(bb, wb) {
        Hb.Enabled && (this._current += bb, this._hasCurrentValue = !0, wb && this._fetchResult())
      }
      beginMonitoring() {
        Hb.Enabled && (this._startMonitoringTime = eb.e.Now)
      }
      endMonitoring() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!Hb.Enabled) return;
        bb && this.fetchNewFrame();
        const wb = eb.e.Now;
        this._current = wb - this._startMonitoringTime, this._hasCurrentValue = !0, bb && this._fetchResult()
      }
      tO() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const bb = eb.e.Now;
        bb - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = bb, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    Hb.Enabled = !0
  },
  41777: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb,
      h: () => eb
    });
    class eb {
      constructor(bb) {
        this.length = 0, this.data = new Array(bb), this._id = eb._GlobalId++
      }
      push(bb) {
        this.data[this.length++] = bb, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(bb) {
        for (let wb = 0; wb < this.length; wb++) bb(this.data[wb])
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
          for (let wb = 0; wb < bb.length; wb++) this.data[this.length++] = (bb.data || bb)[wb]
        }
      }
      indexOf(bb) {
        const wb = this.data.indexOf(bb);
        return wb >= this.length ? -1 : wb
      }
      contains(bb) {
        return -1 !== this.indexOf(bb)
      }
    }
    eb._GlobalId = 0;
    class Hb extends eb {
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
          for (let wb = 0; wb < bb.length; wb++) {
            const Mb = (bb.data || bb)[wb];
            this.pushNoDuplicate(Mb)
          }
        }
      }
    }
  },
  41705: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    class eb {
      static Eval(bb, wb) {
        return "true" === (bb = bb.match(/\([^()]*\)/g) ? bb.replace(/\([^()]*\)/g, (bb => (bb = bb.slice(1, bb.length - 1), eb._HandleParenthesisContent(bb, wb)))) : eb._HandleParenthesisContent(bb, wb)) || "false" !== bb && eb.Eval(bb, wb)
      }
      static _HandleParenthesisContent(bb, wb) {
        let Mb;
        wb = wb || (bb => "true" === bb);
        const Hb = bb.split("||");
        for (const pb in Hb)
          if (Object.prototype.hasOwnProperty.call(Hb, pb)) {
            let bb = eb._SimplifyNegation(Hb[pb].trim());
            const Vb = bb.split("&&");
            if (Vb.length > 1)
              for (let Hb = 0; Hb < Vb.length; ++Hb) {
                const pb = eb._SimplifyNegation(Vb[Hb].trim());
                if (Mb = "true" !== pb && "false" !== pb ? "!" === pb[0] ? !wb(pb.substring(1)) : wb(pb) : "true" === pb, !Mb) {
                  bb = "false";
                  break
                }
              }
            if (Mb || "true" === bb) {
              Mb = !0;
              break
            }
            Mb = "true" !== bb && "false" !== bb ? "!" === bb[0] ? !wb(bb.substring(1)) : wb(bb) : "true" === bb
          } return Mb ? "true" : "false"
      }
      static _SimplifyNegation(bb) {
        return "!true" === (bb = (bb = bb.replace(/^[\s!]+/, (bb => (bb = bb.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? bb = "false" : "!false" === bb && (bb = "true"), bb
      }
    }
    class Hb {
      static EnableFor(bb) {
        bb._tags = bb._tags || {}, bb.hasTags = () => Hb.HasTags(bb), bb.addTags = wb => Hb.AddTagsTo(bb, wb), bb.removeTags = wb => Hb.RemoveTagsFrom(bb, wb), bb.matchesTagsQuery = wb => Hb.MatchesQuery(bb, wb)
      }
      static DisableFor(bb) {
        delete bb._tags, delete bb.hasTags, delete bb.addTags, delete bb.removeTags, delete bb.matchesTagsQuery
      }
      static HasTags(bb) {
        if (!bb._tags) return !1;
        const wb = bb._tags;
        for (const Mb in wb)
          if (Object.prototype.hasOwnProperty.call(wb, Mb)) return !0;
        return !1
      }
      static GetTags(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!bb._tags) return null;
        if (wb) {
          const wb = [];
          for (const Mb in bb._tags) Object.prototype.hasOwnProperty.call(bb._tags, Mb) && !0 === bb._tags[Mb] && wb.push(Mb);
          return wb.join(" ")
        }
        return bb._tags
      }
      static AddTagsTo(bb, wb) {
        if (!wb) return;
        if ("string" !== typeof wb) return;
        const Mb = wb.split(" ");
        for (const eb of Mb) Hb._AddTagTo(bb, eb)
      }
      static _AddTagTo(bb, wb) {
        "" !== (wb = wb.trim()) && "true" !== wb && "false" !== wb && (wb.match(/[\s]/) || wb.match(/^([!]|([|]|[&]){2})/) || (Hb.EnableFor(bb), bb._tags[wb] = !0))
      }
      static RemoveTagsFrom(bb, wb) {
        if (!Hb.HasTags(bb)) return;
        const Mb = wb.split(" ");
        for (const eb in Mb) Hb._RemoveTagFrom(bb, Mb[eb])
      }
      static _RemoveTagFrom(bb, wb) {
        delete bb._tags[wb]
      }
      static MatchesQuery(bb, wb) {
        return void 0 === wb || ("" === wb ? Hb.HasTags(bb) : eb.Eval(wb, (wb => Hb.HasTags(bb) && bb._tags[wb])))
      }
    }
  },
  41819: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(41816),
      Hb = Mb(38318);
    class pb {
      constructor(bb) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new Hb.b, this._scene = bb
      }
      _prepareBuffers() {
        if (this._vertexBuffers[eb.i.PositionKind]) return;
        const bb = [];
        bb.push(1, 1), bb.push(-1, 1), bb.push(-1, -1), bb.push(1, -1), this._vertexBuffers[eb.i.PositionKind] = new eb.i(this._scene.DC(), bb, eb.i.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const bb = [];
        bb.push(0), bb.push(1), bb.push(2), bb.push(0), bb.push(2), bb.push(3), this._indexBuffer = this._scene.DC().createIndexBuffer(bb)
      }
      _getActivePostProcesses(bb) {
        const wb = this._activePostProcesses;
        wb.length = 0;
        for (let Mb = 0; Mb < bb.length; Mb++) {
          const eb = bb[Mb];
          eb && wb.push(eb)
        }
        return wb
      }
      _rebuild() {
        const bb = this._vertexBuffers[eb.i.PositionKind];
        bb && (bb._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Mb = this._scene.activeCamera;
        return !!Mb && (wb = wb || this._getActivePostProcesses(Mb._postProcesses), !(!wb || 0 === wb.length || !this._scene.postProcessesEnabled) && (wb[0].activate(Mb, bb, null !== wb && void 0 !== wb), !0))
      }
      directRender(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : bb.length;
        const gb = this._scene.DC();
        for (let lb = 0; lb < Vb; lb++) {
          lb < bb.length - 1 ? bb[lb + 1].activate(this._scene.activeCamera || this._scene, wb?.texture) : (wb ? gb.bindFramebuffer(wb, eb, void 0, void 0, Mb, Hb) : pb || gb.restoreDefaultFramebuffer(), gb._debugInsertMarker?.(`post process ${bb[lb].name} output`));
          const Vb = bb[lb],
            Lb = Vb.apply();
          Lb && (Vb.onBeforeRenderObservable.notifyObservers(Lb), this._prepareBuffers(), gb.bindBuffers(this._vertexBuffers, this._indexBuffer, Lb), gb.drawElementsType(0, 0, 6), Vb.onAfterRenderObservable.notifyObservers(Lb))
        }
        gb.setDepthBuffer(!0), gb.setDepthWrite(!0)
      }
      _finalizeFrame(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pb = this._scene.activeCamera;
        if (!pb) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (eb = eb || this._getActivePostProcesses(pb._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const Vb = this._scene.DC();
        for (let gb = 0, lb = eb.length; gb < lb; gb++) {
          const Lb = eb[gb];
          if (gb < lb - 1 ? Lb._outputTexture = eb[gb + 1].activate(pb, wb?.texture) : (wb ? (Vb.bindFramebuffer(wb, Mb, void 0, void 0, Hb), Lb._outputTexture = wb) : (Vb.restoreDefaultFramebuffer(), Lb._outputTexture = null), Vb._debugInsertMarker?.(`post process ${eb[gb].name} output`)), bb) break;
          const Ib = Lb.apply();
          Ib && (Lb.onBeforeRenderObservable.notifyObservers(Ib), this._prepareBuffers(), Vb.bindBuffers(this._vertexBuffers, this._indexBuffer, Ib), Vb.drawElementsType(0, 0, 6), Lb.onAfterRenderObservable.notifyObservers(Ib))
        }
        Vb.setDepthBuffer(!0), Vb.setDepthWrite(!0), Vb.setAlphaMode(0)
      }
      dispose() {
        const bb = this._vertexBuffers[eb.i.PositionKind];
        bb && (bb.dispose(), this._vertexBuffers[eb.i.PositionKind] = null), this._indexBuffer && (this._scene.DC()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  41834: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Lb
    });
    var eb = Mb(41777),
      Hb = Mb(38285);
    const pb = [],
      Vb = [];
    let gb = !1;

    function lb(bb, wb) {
      for (; bb.length < wb;) bb.push(void 0)
    }
    class Lb {
      set opaqueSortCompareFn(bb) {
        this._opaqueSortCompareFn = bb || Lb.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(bb) {
        this._alphaTestSortCompareFn = bb || Lb.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(bb) {
        this._transparentSortCompareFn = bb || Lb.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = bb, this._opaqueSubMeshes = new eb.h(256), this._transparentSubMeshes = new eb.h(256), this._alphaTestSubMeshes = new eb.h(256), this._depthOnlySubMeshes = new eb.h(256), this._particleSystems = new eb.h(256), this._spriteManagers = new eb.h(256), this._empty = !0, this._edgesRenderers = new eb.e(16), this.disableDepthPrePass = !1, this._scene = wb, this.opaqueSortCompareFn = Mb, this.alphaTestSortCompareFn = Hb, this.transparentSortCompareFn = pb
      }
      render(bb, wb, Mb, eb) {
        let Hb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          pb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Vb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          gb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          lb = arguments.length > 8 ? arguments[8] : void 0;
        if (bb) return void bb(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const Lb = this._scene.DC();
        Hb && 0 !== this._depthOnlySubMeshes.length && (Lb.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), Lb.setColorWrite(!0)), pb && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), Vb && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const Ib = Lb.getStencilBuffer();
        if (Lb.setStencilBuffer(!1), wb && this._renderSprites(), Mb && this._renderParticles(eb), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), gb && (lb || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (Lb.setStencilBuffer(Ib), lb) lb(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const bb = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            bb.length && this._renderTransparent(bb)
          } else this._renderTransparent(this._transparentSubMeshes);
          Lb.setAlphaMode(0)
        }
        if (Lb.setStencilBuffer(!1), pb && this._edgesRenderers.length) {
          for (let bb = 0; bb < this._edgesRenderers.length; bb++) this._edgesRenderers.data[bb].render();
          Lb.setAlphaMode(0)
        }
        Lb.setStencilBuffer(Ib)
      }
      _renderOpaqueSorted(bb) {
        Lb._RenderSorted(bb, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(bb) {
        Lb._RenderSorted(bb, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(bb) {
        Lb._RenderSorted(bb, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(bb, wb, Mb, eb, pb) {
        let Ib, Ob = 0;
        const Ub = Mb ? Mb.globalPosition : Lb._ZeroVector;
        if (eb && wb !== Lb.PainterSortCompare)
          for (; Ob < bb.length; Ob++) Ib = bb.data[Ob], Ib._alphaIndex = Ib.getMesh().alphaIndex, Ib._distanceToCamera = Hb.o.Distance(Ib.XN().Kpb.centerWorld, Ub);
        const tb = bb.length;
        let Cb = bb.data;
        const Eb = tb !== Cb.length && !gb;
        if (Eb) {
          for (gb = !0, lb(Vb, tb), Ob = 0; Ob < tb; Ob++) Vb[Ob] = Cb[Ob];
          Cb = Vb
        } else tb !== Cb.length && (Cb = Cb.slice(0, tb));
        try {
          wb && Lb._StableSort(Cb, tb, wb), Lb._DrawSorted(Cb, tb, eb, pb)
        } finally {
          Eb && (Vb.fill(void 0, 0, tb), gb = !1)
        }
      }
      static _DrawSorted(bb, wb, Mb, eb) {
        let Hb;
        const pb = bb[0].getMesh().RJ();
        for (let Vb = 0; Vb < wb; Vb++) {
          if (Hb = bb[Vb], pb._activeMeshesFrozenButKeepClipping && !Hb.isInFrustum(pb._frustumPlanes)) continue;
          let wb = !1;
          if (Mb) {
            const bb = Hb.AC();
            if (bb && bb.needDepthPrePass && !eb) {
              wb = !0;
              const Mb = bb.RJ().DC();
              Mb.setColorWrite(!1), Mb.setAlphaMode(0), Hb.render(!1), Mb.setColorWrite(!0)
            }
          }
          const gb = Hb._renderingMesh;
          !wb && gb._renderRunFollower(Hb, Mb) || Hb.render(Mb)
        }
      }
      static _StableSort(bb, wb, Mb) {
        for (let eb = 0; eb < wb; eb += 16) {
          const Hb = Math.min(eb + 16, wb);
          for (let wb = eb + 1; wb < Hb; wb++) {
            const Hb = bb[wb];
            let pb = eb,
              Vb = wb;
            for (; pb < Vb;) {
              const wb = pb + Vb >>> 1;
              Mb(Hb, bb[wb]) < 0 ? Vb = wb : pb = wb + 1
            }
            for (let Mb = wb; Mb > pb; Mb--) bb[Mb] = bb[Mb - 1];
            bb[pb] = Hb
          }
        }
        if (!(wb <= 16)) {
          lb(pb, wb);
          try {
            let eb = bb,
              Hb = pb;
            for (let bb = 16; bb < wb; bb *= 2) {
              for (let Vb = 0; Vb < wb; Vb += 2 * bb) {
                const pb = Math.min(Vb + bb, wb),
                  gb = Math.min(Vb + 2 * bb, wb);
                let lb = Vb,
                  Lb = pb,
                  Ib = Vb;
                if (pb < gb && Mb(eb[pb], eb[pb - 1]) < 0)
                  for (; lb < pb && Lb < gb;) Hb[Ib++] = Mb(eb[Lb], eb[lb]) < 0 ? eb[Lb++] : eb[lb++];
                for (; lb < pb;) Hb[Ib++] = eb[lb++];
                for (; Lb < gb;) Hb[Ib++] = eb[Lb++]
              }
              const pb = Hb;
              Hb = eb, eb = pb
            }
            if (eb !== bb)
              for (let Mb = 0; Mb < wb; Mb++) bb[Mb] = eb[Mb]
          } finally {
            pb.fill(void 0, 0, wb)
          }
        }
      }
      static defaultTransparentSortCompare(bb, wb) {
        return bb._alphaIndex > wb._alphaIndex ? 1 : bb._alphaIndex < wb._alphaIndex ? -1 : Lb.backToFrontSortCompare(bb, wb)
      }
      static backToFrontSortCompare(bb, wb) {
        return bb._distanceToCamera < wb._distanceToCamera ? 1 : bb._distanceToCamera > wb._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(bb, wb) {
        return bb._distanceToCamera < wb._distanceToCamera ? -1 : bb._distanceToCamera > wb._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(bb, wb) {
        const Mb = bb.getMesh(),
          eb = wb.getMesh();
        return Mb.material && eb.material ? Mb.material.uniqueId - eb.material.uniqueId : Mb.uniqueId - eb.uniqueId
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
      dispatch(bb, wb, Mb) {
        void 0 === wb && (wb = bb.getMesh()), void 0 === Mb && (Mb = bb.AC()), null !== Mb && void 0 !== Mb && (Mb.needAlphaBlendingForMesh(wb) ? this._transparentSubMeshes.push(bb) : Mb.needAlphaTestingForMesh(wb) ? (Mb.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(bb), this._alphaTestSubMeshes.push(bb)) : (Mb.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(bb), this._opaqueSubMeshes.push(bb)), wb._renderingGroup = this, wb._edgesRenderer && wb.isEnabled() && wb.isVisible && wb._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(wb._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(bb) {
        this._spriteManagers.push(bb), this._empty = !1
      }
      dispatchParticles(bb) {
        this._particleSystems.push(bb), this._empty = !1
      }
      _renderParticles(bb) {
        if (0 === this._particleSystems.length) return;
        const wb = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let Mb = 0; Mb < this._particleSystems.length; Mb++) {
          const eb = this._particleSystems.data[Mb];
          if (0 === (wb && wb.layerMask & eb.layerMask)) continue;
          const Hb = eb.emitter;
          Hb.position && bb && -1 === bb.indexOf(Hb) || this._scene._activeParticles.addCount(eb.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const bb = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let wb = 0; wb < this._spriteManagers.length; wb++) {
          const Mb = this._spriteManagers.data[wb];
          0 !== (bb && bb.layerMask & Mb.layerMask) && Mb.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    Lb._ZeroVector = Hb.o.Zero()
  },
  41827: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(41834);
    class Hb {}
    class pb {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(bb) {
        this._disableDepthPrePass = bb;
        for (const wb of this._renderingGroups) wb.disableDepthPrePass = bb
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(bb) {
        bb !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = bb, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const bb of this._scene.meshes)
          if (bb.oR)
            for (const wb of bb.oR) wb._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const bb of this._scene.spriteManagers) bb._wasDispatched = !1;
        for (const bb of this._scene.kR) bb._wasDispatched = !1
      }
      constructor(bb) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new Hb, this._maintainStateBetweenFrames = !1, this._scene = bb;
        for (let wb = pb.MIN_RENDERINGGROUPS; wb < pb.MAX_RENDERINGGROUPS; wb++) this._autoClearDepthStencil[wb] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(bb) {
        const wb = bb || 0;
        return this._prepareRenderingGroup(wb), this._renderingGroups[wb]
      }
      _clearDepthStencilBuffer() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.DC().clear(null, !1, bb, wb), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(bb, wb, Mb, eb) {
        let Hb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Vb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          gb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          lb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Lb = arguments.length > 8 ? arguments[8] : void 0,
          Ib = arguments.length > 9 ? arguments[9] : void 0;
        const Ob = this._renderingGroupInfo;
        Ob.JE = this._scene, Ob.camera = this._scene.activeCamera, Ob.renderingManager = this;
        const Ub = Ib ?? this._scene.spriteManagers;
        if (Ub && eb)
          for (let pb = 0; pb < Ub.length; pb++) {
            const bb = Ub[pb];
            this.dispatchSprites(bb)
          }
        for (let tb = pb.MIN_RENDERINGGROUPS; tb < pb.MAX_RENDERINGGROUPS; tb++) {
          this._depthStencilBufferAlreadyCleaned = tb === pb.MIN_RENDERINGGROUPS;
          const Ib = this._renderingGroups[tb];
          if (!Ib || Ib._empty) continue;
          const Ub = 1 << tb;
          if (Ob.renderingGroupId = tb, this._scene.onBeforeRenderingGroupObservable.notifyObservers(Ob, Ub), pb.AUTOCLEAR) {
            const bb = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(tb) : this._autoClearDepthStencil[tb];
            bb && bb.autoClear && this._clearDepthStencilBuffer(bb.depth, bb.stencil)
          }
          for (let bb = 0, wb = this._scene._beforeRenderingGroupDrawStage; bb < wb.length; bb++) {
            wb[bb].action(tb)
          }
          Ib.render(bb, eb, Mb, wb, Hb, Vb, gb, lb, Lb);
          for (let bb = 0, wb = this._scene._afterRenderingGroupDrawStage; bb < wb.length; bb++) {
            wb[bb].action(tb)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(Ob, Ub)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let bb = pb.MIN_RENDERINGGROUPS; bb < pb.MAX_RENDERINGGROUPS; bb++) {
            const wb = this._renderingGroups[bb];
            wb && wb.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let bb = pb.MIN_RENDERINGGROUPS; bb < pb.MAX_RENDERINGGROUPS; bb++) {
            const wb = this._renderingGroups[bb];
            wb && wb.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let bb = pb.MIN_RENDERINGGROUPS; bb < pb.MAX_RENDERINGGROUPS; bb++) {
          const wb = this._renderingGroups[bb];
          wb && wb.dispose()
        }
      }
      _prepareRenderingGroup(bb) {
        void 0 === this._renderingGroups[bb] && (this._renderingGroups[bb] = new eb.e(bb, this._scene, this._customOpaqueSortCompareFn[bb], this._customAlphaTestSortCompareFn[bb], this._customTransparentSortCompareFn[bb]), this._renderingGroups[bb].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(bb) {
        this.maintainStateBetweenFrames && bb._wasDispatched || (bb._wasDispatched = !0, this.getRenderingGroup(bb.renderingGroupId).dispatchSprites(bb))
      }
      dispatchParticles(bb) {
        this.maintainStateBetweenFrames && bb._wasDispatched || (bb._wasDispatched = !0, this.getRenderingGroup(bb.renderingGroupId).dispatchParticles(bb))
      }
      dispatch(bb, wb, Mb) {
        void 0 === wb && (wb = bb.getMesh()), this.maintainStateBetweenFrames && bb._wasDispatched || (bb._wasDispatched = !0, this.getRenderingGroup(wb.renderingGroupId).dispatch(bb, wb, Mb))
      }
      setRenderingOrder(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[bb] = wb, this._customAlphaTestSortCompareFn[bb] = Mb, this._customTransparentSortCompareFn[bb] = eb, this._renderingGroups[bb]) {
          const wb = this._renderingGroups[bb];
          wb.opaqueSortCompareFn = this._customOpaqueSortCompareFn[bb], wb.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[bb], wb.transparentSortCompareFn = this._customTransparentSortCompareFn[bb]
        }
      }
      setRenderingAutoClearDepthStencil(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[bb] = {
          autoClear: wb,
          depth: Mb,
          stencil: eb
        }
      }
      getAutoClearDepthStencilSetup(bb) {
        return this._autoClearDepthStencil[bb]
      }
    }
    pb.MAX_RENDERINGGROUPS = 4, pb.MIN_RENDERINGGROUPS = 0, pb.AUTOCLEAR = !0
  },
  41590: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    class eb {
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
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[wb] !== bb && (bb ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[wb] = bb, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(bb, wb, Mb, eb) {
        this._blendConstants[0] === bb && this._blendConstants[1] === wb && this._blendConstants[2] === Mb && this._blendConstants[3] === eb || (this._blendConstants[0] = bb, this._blendConstants[1] = wb, this._blendConstants[2] = Mb, this._blendConstants[3] = eb, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(bb, wb, Mb, eb) {
        const Hb = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[Hb + 0] === bb && this._blendFunctionParameters[Hb + 1] === wb && this._blendFunctionParameters[Hb + 2] === Mb && this._blendFunctionParameters[Hb + 3] === eb || (this._blendFunctionParameters[Hb + 0] = bb, this._blendFunctionParameters[Hb + 1] = wb, this._blendFunctionParameters[Hb + 2] = Mb, this._blendFunctionParameters[Hb + 3] = eb, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(bb, wb) {
        const Mb = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[Mb + 0] === bb && this._blendEquationParameters[Mb + 1] === wb || (this._blendEquationParameters[Mb + 0] = bb, this._blendEquationParameters[Mb + 1] = wb, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== wb && (this._numTargets = wb, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== Mb && (this._blendDisabledTargetsMask = Mb, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (bb.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === wb || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (wb > 1 && 0 !== Mb && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & Mb) ? bb.enable(bb.BLEND) : bb.disable(bb.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (bb.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (bb.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const eb = bb;
        if (this._isAlphaBlendDirty) {
          for (let Hb = 0; Hb < wb; Hb++) {
            const wb = Hb < this._numTargetEnabled ? Hb : 0;
            this._alphaBlend[wb] && 0 === (Mb & 1 << Hb) ? eb.enableIndexed(bb.BLEND, Hb) : eb.disableIndexed(bb.BLEND, Hb)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let bb = 0; bb < wb; bb++) {
            const wb = bb < this._numTargetEnabled ? 4 * bb : 0;
            eb.blendFuncSeparateIndexed(bb, this._blendFunctionParameters[wb + 0], this._blendFunctionParameters[wb + 1], this._blendFunctionParameters[wb + 2], this._blendFunctionParameters[wb + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let bb = 0; bb < wb; bb++) {
            const wb = bb < this._numTargetEnabled ? 2 * bb : 0;
            eb.blendEquationSeparateIndexed(bb, this._blendEquationParameters[wb + 0], this._blendEquationParameters[wb + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(bb, wb) {
        let Mb = 32774;
        switch (bb) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, wb);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, wb);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, wb);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, wb);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, wb);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, wb);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, wb);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, wb);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, wb);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, wb);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, wb);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, wb);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, wb);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, wb);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, wb);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, wb);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, wb), Mb = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, wb), Mb = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, wb);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, wb)
        }
        this.setAlphaEquationParameters(Mb, Mb, wb)
      }
    }
  },
  41856: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    class eb {}
    eb._IsPickingAvailable = !1
  },
  41764: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => lM,
      g: () => VM
    });
    var eb = Mb(41771),
      Hb = Mb(41565),
      pb = Mb(41581),
      Vb = Mb(38318),
      gb = Mb(41777);
    class lb {
      constructor() {
        this._count = 0, this._data = {}
      }
      eZ(bb) {
        this.clear(), bb.forEach(((bb, wb) => this.add(bb, wb)))
      }
      get(bb) {
        const wb = this._data[bb];
        if (void 0 !== wb) return wb
      }
      getOrAddWithFactory(bb, wb) {
        let Mb = this.get(bb);
        return void 0 !== Mb || (Mb = wb(bb), Mb && this.add(bb, Mb)), Mb
      }
      getOrAdd(bb, wb) {
        const Mb = this.get(bb);
        return void 0 !== Mb ? Mb : (this.add(bb, wb), wb)
      }
      contains(bb) {
        return void 0 !== this._data[bb]
      }
      add(bb, wb) {
        return void 0 === this._data[bb] && (this._data[bb] = wb, ++this._count, !0)
      }
      set(bb, wb) {
        return void 0 !== this._data[bb] && (this._data[bb] = wb, !0)
      }
      getAndRemove(bb) {
        const wb = this.get(bb);
        return void 0 !== wb ? (delete this._data[bb], --this._count, wb) : null
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
        for (const wb in this._data) {
          bb(wb, this._data[wb])
        }
      }
      first(bb) {
        for (const wb in this._data) {
          const Mb = bb(wb, this._data[wb]);
          if (Mb) return Mb
        }
        return null
      }
    }
    var Lb = Mb(41705),
      Ib = Mb(38285),
      Ob = Mb(41786),
      Ub = Mb(41806),
      tb = Mb(41808);
    class Cb {
      constructor(bb, wb, Mb, eb, Hb, pb) {
        this.source = bb, this.pointerX = wb, this.pointerY = Mb, this.meshUnderPointer = eb, this.sourceEvent = Hb, this.additionalData = pb
      }
      static CreateNew(bb, wb, Mb) {
        const eb = bb.RJ();
        return new Cb(bb, eb.pointerX, eb.pointerY, eb.meshUnderPointer || bb, wb, Mb)
      }
      static CreateNewFromSprite(bb, wb, Mb, eb) {
        return new Cb(bb, wb.pointerX, wb.pointerY, wb.meshUnderPointer, Mb, eb)
      }
      static CreateNewFromScene(bb, wb) {
        return new Cb(null, bb.pointerX, bb.pointerY, bb.meshUnderPointer, wb)
      }
      static CreateNewFromPrimitive(bb, wb, Mb, eb) {
        return new Cb(bb, wb.x, wb.y, null, Mb, eb)
      }
    }
    var Eb = Mb(41819),
      Fb = Mb(41825),
      Bb = Mb(41827),
      sb = Mb(41841),
      mb = Mb(41535),
      hb = Mb(38313),
      zb = Mb(41554),
      Xb = Mb(41843);
    class xb {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const bb in xb.Triggers)
          if (Object.prototype.hasOwnProperty.call(xb.Triggers, bb)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const bb in xb.Triggers)
          if (Object.prototype.hasOwnProperty.call(xb.Triggers, bb)) {
            const wb = parseInt(bb);
            if (wb >= 1 && wb <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(bb) {
        for (const wb in xb.Triggers)
          if (Object.prototype.hasOwnProperty.call(xb.Triggers, wb)) {
            if (parseInt(wb) === bb) return !0
          } return !1
      }
    }
    xb.Triggers = {};
    var jb, Kb, rb, Rb, Db, cb, Yb, Zb = Mb(41845);
    ! function(bb) {
      bb[bb.Generic = 0] = "Generic", bb[bb.Keyboard = 1] = "Keyboard", bb[bb.Mouse = 2] = "Mouse", bb[bb.Touch = 3] = "Touch", bb[bb.DualShock = 4] = "DualShock", bb[bb.Xbox = 5] = "Xbox", bb[bb.Switch = 6] = "Switch", bb[bb.DualSense = 7] = "DualSense"
    }(jb || (jb = {})),
    function(bb) {
      bb[bb.Horizontal = 0] = "Horizontal", bb[bb.Vertical = 1] = "Vertical", bb[bb.LeftClick = 2] = "LeftClick", bb[bb.MiddleClick = 3] = "MiddleClick", bb[bb.RightClick = 4] = "RightClick", bb[bb.BrowserBack = 5] = "BrowserBack", bb[bb.BrowserForward = 6] = "BrowserForward", bb[bb.MouseWheelX = 7] = "MouseWheelX", bb[bb.MouseWheelY = 8] = "MouseWheelY", bb[bb.MouseWheelZ = 9] = "MouseWheelZ", bb[bb.Move = 12] = "Move"
    }(Kb || (Kb = {})),
    function(bb) {
      bb[bb.Horizontal = 0] = "Horizontal", bb[bb.Vertical = 1] = "Vertical", bb[bb.LeftClick = 2] = "LeftClick", bb[bb.MiddleClick = 3] = "MiddleClick", bb[bb.RightClick = 4] = "RightClick", bb[bb.BrowserBack = 5] = "BrowserBack", bb[bb.BrowserForward = 6] = "BrowserForward", bb[bb.MouseWheelX = 7] = "MouseWheelX", bb[bb.MouseWheelY = 8] = "MouseWheelY", bb[bb.MouseWheelZ = 9] = "MouseWheelZ", bb[bb.DeltaHorizontal = 10] = "DeltaHorizontal", bb[bb.DeltaVertical = 11] = "DeltaVertical"
    }(rb || (rb = {})),
    function(bb) {
      bb[bb.Cross = 0] = "Cross", bb[bb.Circle = 1] = "Circle", bb[bb.Square = 2] = "Square", bb[bb.Triangle = 3] = "Triangle", bb[bb.L1 = 4] = "L1", bb[bb.R1 = 5] = "R1", bb[bb.L2 = 6] = "L2", bb[bb.R2 = 7] = "R2", bb[bb.Share = 8] = "Share", bb[bb.Options = 9] = "Options", bb[bb.L3 = 10] = "L3", bb[bb.R3 = 11] = "R3", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.TouchPad = 17] = "TouchPad", bb[bb.LStickXAxis = 18] = "LStickXAxis", bb[bb.LStickYAxis = 19] = "LStickYAxis", bb[bb.RStickXAxis = 20] = "RStickXAxis", bb[bb.RStickYAxis = 21] = "RStickYAxis"
    }(Rb || (Rb = {})),
    function(bb) {
      bb[bb.Cross = 0] = "Cross", bb[bb.Circle = 1] = "Circle", bb[bb.Square = 2] = "Square", bb[bb.Triangle = 3] = "Triangle", bb[bb.L1 = 4] = "L1", bb[bb.R1 = 5] = "R1", bb[bb.L2 = 6] = "L2", bb[bb.R2 = 7] = "R2", bb[bb.Create = 8] = "Create", bb[bb.Options = 9] = "Options", bb[bb.L3 = 10] = "L3", bb[bb.R3 = 11] = "R3", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.TouchPad = 17] = "TouchPad", bb[bb.LStickXAxis = 18] = "LStickXAxis", bb[bb.LStickYAxis = 19] = "LStickYAxis", bb[bb.RStickXAxis = 20] = "RStickXAxis", bb[bb.RStickYAxis = 21] = "RStickYAxis"
    }(Db || (Db = {})),
    function(bb) {
      bb[bb.A = 0] = "A", bb[bb.B = 1] = "B", bb[bb.X = 2] = "X", bb[bb.Y = 3] = "Y", bb[bb.LB = 4] = "LB", bb[bb.RB = 5] = "RB", bb[bb.LT = 6] = "LT", bb[bb.RT = 7] = "RT", bb[bb.Back = 8] = "Back", bb[bb.Start = 9] = "Start", bb[bb.LS = 10] = "LS", bb[bb.RS = 11] = "RS", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.LStickXAxis = 17] = "LStickXAxis", bb[bb.LStickYAxis = 18] = "LStickYAxis", bb[bb.RStickXAxis = 19] = "RStickXAxis", bb[bb.RStickYAxis = 20] = "RStickYAxis"
    }(cb || (cb = {})),
    function(bb) {
      bb[bb.B = 0] = "B", bb[bb.A = 1] = "A", bb[bb.Y = 2] = "Y", bb[bb.X = 3] = "X", bb[bb.L = 4] = "L", bb[bb.R = 5] = "R", bb[bb.ZL = 6] = "ZL", bb[bb.ZR = 7] = "ZR", bb[bb.Minus = 8] = "Minus", bb[bb.Plus = 9] = "Plus", bb[bb.LS = 10] = "LS", bb[bb.RS = 11] = "RS", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.Capture = 17] = "Capture", bb[bb.LStickXAxis = 18] = "LStickXAxis", bb[bb.LStickYAxis = 19] = "LStickYAxis", bb[bb.RStickXAxis = 20] = "RStickXAxis", bb[bb.RStickYAxis = 21] = "RStickYAxis"
    }(Yb || (Yb = {}));
    var fb = Mb(41852);
    class Ab {
      static CreateDeviceEvent(bb, wb, Mb, eb, Hb, pb, Vb) {
        switch (bb) {
          case jb.Keyboard:
            return this._CreateKeyboardEvent(Mb, eb, Hb, pb);
          case jb.Mouse:
            if (Mb === Kb.MouseWheelX || Mb === Kb.MouseWheelY || Mb === Kb.MouseWheelZ) return this._CreateWheelEvent(bb, wb, Mb, eb, Hb, pb);
          case jb.Touch:
            return this._CreatePointerEvent(bb, wb, Mb, eb, Hb, pb, Vb);
          default:
            throw `Unable to generate event for device ${jb[bb]}`
        }
      }
      static _CreatePointerEvent(bb, wb, Mb, eb, Hb, pb, Vb) {
        const gb = this._CreateMouseEvent(bb, wb, Mb, eb, Hb, pb);
        bb === jb.Mouse ? (gb.deviceType = jb.Mouse, gb.pointerId = 1, gb.pointerType = "mouse") : (gb.deviceType = jb.Touch, gb.pointerId = Vb ?? wb, gb.pointerType = "touch");
        let lb = 0;
        return lb += Hb.pollInput(bb, wb, Kb.LeftClick), lb += 2 * Hb.pollInput(bb, wb, Kb.RightClick), lb += 4 * Hb.pollInput(bb, wb, Kb.MiddleClick), gb.buttons = lb, Mb === Kb.Move ? gb.type = "pointermove" : Mb >= Kb.LeftClick && Mb <= Kb.RightClick && (gb.type = 1 === eb ? "pointerdown" : "pointerup", gb.button = Mb - 2), gb
      }
      static _CreateWheelEvent(bb, wb, Mb, eb, Hb, pb) {
        const Vb = this._CreateMouseEvent(bb, wb, Mb, eb, Hb, pb);
        switch (Vb.pointerId = 1, Vb.type = "wheel", Vb.deltaMode = fb.c.DOM_DELTA_PIXEL, Vb.deltaX = 0, Vb.deltaY = 0, Vb.deltaZ = 0, Mb) {
          case Kb.MouseWheelX:
            Vb.deltaX = eb;
            break;
          case Kb.MouseWheelY:
            Vb.deltaY = eb;
            break;
          case Kb.MouseWheelZ:
            Vb.deltaZ = eb
        }
        return Vb
      }
      static _CreateMouseEvent(bb, wb, Mb, eb, Hb, pb) {
        const Vb = this._CreateEvent(pb),
          gb = Hb.pollInput(bb, wb, Kb.Horizontal),
          lb = Hb.pollInput(bb, wb, Kb.Vertical);
        return pb ? (Vb.movementX = 0, Vb.movementY = 0, Vb.offsetX = Vb.movementX - pb.getBoundingClientRect().x, Vb.offsetY = Vb.movementY - pb.getBoundingClientRect().y) : (Vb.movementX = Hb.pollInput(bb, wb, 10), Vb.movementY = Hb.pollInput(bb, wb, 11), Vb.offsetX = 0, Vb.offsetY = 0), this._CheckNonCharacterKeys(Vb, Hb), Vb.clientX = gb, Vb.clientY = lb, Vb.x = gb, Vb.y = lb, Vb.deviceType = bb, Vb.deviceSlot = wb, Vb.inputIndex = Mb, Vb
      }
      static _CreateKeyboardEvent(bb, wb, Mb, eb) {
        const Hb = this._CreateEvent(eb);
        return this._CheckNonCharacterKeys(Hb, Mb), Hb.deviceType = jb.Keyboard, Hb.deviceSlot = 0, Hb.inputIndex = bb, Hb.type = 1 === wb ? "keydown" : "keyup", Hb.key = String.fromCharCode(bb), Hb.keyCode = bb, Hb
      }
      static _CheckNonCharacterKeys(bb, wb) {
        const Mb = wb.isDeviceAvailable(jb.Keyboard),
          eb = Mb && 1 === wb.pollInput(jb.Keyboard, 0, 18),
          Hb = Mb && 1 === wb.pollInput(jb.Keyboard, 0, 17),
          pb = Mb && (1 === wb.pollInput(jb.Keyboard, 0, 91) || 1 === wb.pollInput(jb.Keyboard, 0, 92) || 1 === wb.pollInput(jb.Keyboard, 0, 93)),
          Vb = Mb && 1 === wb.pollInput(jb.Keyboard, 0, 16);
        bb.altKey = eb, bb.ctrlKey = Hb, bb.metaKey = pb, bb.shiftKey = Vb
      }
      static _CreateEvent(bb) {
        const wb = {
          preventDefault: () => {}
        };
        return wb.target = bb, wb
      }
    }
    class Wb {
      constructor(bb, wb, Mb) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(bb, wb, ((bb, wb, eb, Hb) => {
          const pb = Ab.CreateDeviceEvent(bb, wb, eb, Hb, this);
          Mb(bb, wb, pb)
        })) : this._createDummyNativeInput()
      }
      pollInput(bb, wb, Mb) {
        return this._nativeInput.pollInput(bb, wb, Mb)
      }
      isDeviceAvailable(bb) {
        return bb === jb.Mouse || bb === jb.Touch
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
    const Jb = Object.keys(Kb).length / 2;
    class Sb {
      constructor(bb, wb, Mb, Hb) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = eb.e.IsSafari(), this._usingMacOs = (0, mb.g)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = bb => {}, this._keyboardUpEvent = bb => {}, this._keyboardBlurEvent = bb => {}, this._pointerMoveEvent = bb => {}, this._pointerDownEvent = bb => {}, this._pointerUpEvent = bb => {}, this._pointerCancelEvent = bb => {}, this._pointerCancelTouch = bb => {}, this._pointerLeaveEvent = bb => {}, this._pointerWheelEvent = bb => {}, this._pointerBlurEvent = bb => {}, this._pointerMacOsChromeOutEvent = bb => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, mb.g)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, mb.g)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = bb => {}, this._gamepadDisconnectedEvent = bb => {}, this._eventPrefix = eb.e.GetPointerPrefix(bb), this._engine = bb, this._onDeviceConnected = wb, this._onDeviceDisconnected = Mb, this._onInputChanged = Hb, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(bb, wb, Mb) {
        const Hb = this._inputs[bb][wb];
        if (!Hb) throw `Unable to find device ${jb[bb]}`;
        bb >= jb.DualShock && bb <= jb.DualSense && this._updateDevice(bb, wb, Mb);
        const pb = Hb[Mb];
        if (void 0 === pb) throw `Unable to find input ${Mb} for device ${jb[bb]} in slot ${wb}`;
        return Mb === Kb.Move && eb.e.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), pb
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
                for (const wb in bb) {
                  const Mb = bb[+wb];
                  if (Mb)
                    for (let bb = 0; bb < Mb.length; bb++) Mb[bb] = 0
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
          for (const wb of bb) wb && this._addGamePad(wb)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(jb.Mouse, 0, 0, 0)
      }
      _addGamePad(bb) {
        const wb = this._getGamepadDeviceType(bb.id),
          Mb = bb.index;
        this._gamepads = this._gamepads || new Array(bb.index + 1), this._registerDevice(wb, Mb, bb.buttons.length + bb.axes.length), this._gamepads[Mb] = wb
      }
      _addPointerDevice(bb, wb, Mb, eb) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(bb, wb, Jb);
        const Hb = this._inputs[bb][wb];
        Hb[0] = Mb, Hb[1] = eb
      }
      _registerDevice(bb, wb, Mb) {
        if (void 0 === wb) throw `Unable to register device ${jb[bb]} to undefined slot.`;
        if (this._inputs[bb] || (this._inputs[bb] = {}), !this._inputs[bb][wb]) {
          const eb = new Array(Mb);
          eb.fill(0), this._inputs[bb][wb] = eb, this._onDeviceConnected(bb, wb)
        }
      }
      _unregisterDevice(bb, wb) {
        this._inputs[bb][wb] && (delete this._inputs[bb][wb], this._onDeviceDisconnected(bb, wb))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = bb => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(jb.Keyboard, 0, 255));
          const wb = this._inputs[jb.Keyboard][0];
          if (wb) {
            wb[bb.keyCode] = 1;
            const Mb = bb;
            Mb.inputIndex = bb.keyCode, this._usingMacOs && bb.metaKey && "Meta" !== bb.key && (this._metaKeys.includes(bb.keyCode) || this._metaKeys.push(bb.keyCode)), this._onInputChanged(jb.Keyboard, 0, Mb)
          }
        }, this._keyboardUpEvent = bb => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(jb.Keyboard, 0, 255));
          const wb = this._inputs[jb.Keyboard][0];
          if (wb) {
            wb[bb.keyCode] = 0;
            const Mb = bb;
            if (Mb.inputIndex = bb.keyCode, this._usingMacOs && "Meta" === bb.key && this._metaKeys.length > 0) {
              for (const bb of this._metaKeys) {
                const Mb = Ab.CreateDeviceEvent(jb.Keyboard, 0, bb, 0, this, this._elementToAttachTo);
                wb[bb] = 0, this._onInputChanged(jb.Keyboard, 0, Mb)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(jb.Keyboard, 0, Mb)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const bb = this._inputs[jb.Keyboard][0];
            for (let wb = 0; wb < bb.length; wb++)
              if (0 !== bb[wb]) {
                bb[wb] = 0;
                const Mb = Ab.CreateDeviceEvent(jb.Keyboard, 0, wb, 0, this, this._elementToAttachTo);
                this._onInputChanged(jb.Keyboard, 0, Mb)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, mb.g)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let eb = 0; eb < this._maxTouchPoints; eb++) this._activeTouchIds[eb] = -1;
        this._pointerMoveEvent = bb => {
          const wb = this._getPointerType(bb);
          let Mb = wb === jb.Mouse ? 0 : this._activeTouchIds.indexOf(bb.pointerId);
          if (wb === jb.Touch && -1 === Mb) {
            if (0 === bb.buttons) return;
            const Hb = this._activeTouchIds.indexOf(-1);
            if (!(Hb >= 0)) return void eb.e.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Mb = Hb, this._activeTouchIds[Hb] = bb.pointerId, this._onDeviceConnected(wb, Mb)
          }
          this._inputs[wb] || (this._inputs[wb] = {}), this._inputs[wb][Mb] || this._addPointerDevice(wb, Mb, bb.clientX, bb.clientY);
          const Hb = this._inputs[wb][Mb];
          if (Hb) {
            const eb = bb;
            eb.inputIndex = Kb.Move, Hb[Kb.Horizontal] = bb.clientX, Hb[Kb.Vertical] = bb.clientY, wb === jb.Touch && 0 === Hb[Kb.LeftClick] && (Hb[Kb.LeftClick] = 1), void 0 === bb.pointerId && (bb.pointerId = this._mouseId), this._onInputChanged(wb, Mb, eb), this._usingSafari || -1 === bb.button || (eb.inputIndex = bb.button + 2, Hb[bb.button + 2] = Hb[bb.button + 2] ? 0 : 1, this._onInputChanged(wb, Mb, eb))
          }
        }, this._pointerDownEvent = bb => {
          const wb = this._getPointerType(bb);
          let Mb = wb === jb.Mouse ? 0 : bb.pointerId;
          if (wb === jb.Touch) {
            let wb = this._activeTouchIds.indexOf(bb.pointerId);
            if (-1 === wb && (wb = this._activeTouchIds.indexOf(-1)), !(wb >= 0)) return void eb.e.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Mb = wb, this._activeTouchIds[wb] = bb.pointerId
          }
          this._inputs[wb] || (this._inputs[wb] = {}), this._inputs[wb][Mb] ? wb === jb.Touch && this._onDeviceConnected(wb, Mb) : this._addPointerDevice(wb, Mb, bb.clientX, bb.clientY);
          const Hb = this._inputs[wb][Mb];
          if (Hb) {
            const eb = Hb[Kb.Horizontal],
              Vb = Hb[Kb.Vertical];
            if (wb === jb.Mouse) {
              if (void 0 === bb.pointerId && (bb.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (pb) {}
            } else if (bb.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(bb.pointerId)
            } catch (pb) {}
            Hb[Kb.Horizontal] = bb.clientX, Hb[Kb.Vertical] = bb.clientY, Hb[bb.button + 2] = 1;
            const gb = bb;
            gb.inputIndex = bb.button + 2, this._onInputChanged(wb, Mb, gb), eb === bb.clientX && Vb === bb.clientY || (gb.inputIndex = Kb.Move, this._onInputChanged(wb, Mb, gb))
          }
        }, this._pointerUpEvent = bb => {
          const wb = this._getPointerType(bb),
            Mb = wb === jb.Mouse ? 0 : this._activeTouchIds.indexOf(bb.pointerId);
          if (wb === jb.Touch) {
            if (-1 === Mb) return;
            this._activeTouchIds[Mb] = -1
          }
          const eb = this._inputs[wb]?.[Mb];
          let Hb = bb.button,
            pb = eb && 0 !== eb[Hb + 2];
          if (!pb && this._isUsingFirefox && this._usingMacOs && eb && (Hb = 2 === Hb ? 0 : 2, pb = 0 !== eb[Hb + 2]), pb) {
            const pb = eb[Kb.Horizontal],
              Vb = eb[Kb.Vertical];
            eb[Kb.Horizontal] = bb.clientX, eb[Kb.Vertical] = bb.clientY, eb[Hb + 2] = 0;
            const gb = bb;
            void 0 === bb.pointerId && (bb.pointerId = this._mouseId), pb === bb.clientX && Vb === bb.clientY || (gb.inputIndex = Kb.Move, this._onInputChanged(wb, Mb, gb)), gb.inputIndex = Hb + 2, wb === jb.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : bb.pointerId && this._elementToAttachTo.hasPointerCapture?.(bb.pointerId) && this._elementToAttachTo.releasePointerCapture(bb.pointerId), this._onInputChanged(wb, Mb, gb), wb === jb.Touch && this._onDeviceDisconnected(wb, Mb)
          }
        }, this._pointerCancelTouch = bb => {
          const wb = this._activeTouchIds.indexOf(bb);
          if (-1 === wb) return;
          this._elementToAttachTo.hasPointerCapture?.(bb) && this._elementToAttachTo.releasePointerCapture(bb), this._inputs[jb.Touch][wb][Kb.LeftClick] = 0;
          const Mb = Ab.CreateDeviceEvent(jb.Touch, wb, Kb.LeftClick, 0, this, this._elementToAttachTo, bb);
          this._onInputChanged(jb.Touch, wb, Mb), this._activeTouchIds[wb] = -1, this._onDeviceDisconnected(jb.Touch, wb)
        }, this._pointerCancelEvent = bb => {
          if ("mouse" === bb.pointerType) {
            const bb = this._inputs[jb.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let wb = Kb.LeftClick; wb <= Kb.BrowserForward; wb++)
              if (1 === bb[wb]) {
                bb[wb] = 0;
                const Mb = Ab.CreateDeviceEvent(jb.Mouse, 0, wb, 0, this, this._elementToAttachTo);
                this._onInputChanged(jb.Mouse, 0, Mb)
              }
          } else this._pointerCancelTouch(bb.pointerId)
        }, this._pointerLeaveEvent = bb => {
          "pen" === bb.pointerType && this._pointerCancelTouch(bb.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let bb = !1;
        const wb = function() {};
        try {
          const Mb = Object.defineProperty({}, "passive", {
            get: function() {
              bb = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", wb, Mb), this._elementToAttachTo.removeEventListener("test", wb, Mb)
        } catch (Mb) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(jb.Mouse)) {
            const bb = this._inputs[jb.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let wb = Kb.LeftClick; wb <= Kb.BrowserForward; wb++)
              if (1 === bb[wb]) {
                bb[wb] = 0;
                const Mb = Ab.CreateDeviceEvent(jb.Mouse, 0, wb, 0, this, this._elementToAttachTo);
                this._onInputChanged(jb.Mouse, 0, Mb)
              }
          }
          if (this.isDeviceAvailable(jb.Touch)) {
            const bb = this._inputs[jb.Touch];
            for (let wb = 0; wb < this._activeTouchIds.length; wb++) {
              const Mb = this._activeTouchIds[wb];
              if (this._elementToAttachTo.hasPointerCapture?.(Mb) && this._elementToAttachTo.releasePointerCapture(Mb), -1 !== Mb && 1 === bb[wb]?.[Kb.LeftClick]) {
                bb[wb][Kb.LeftClick] = 0;
                const eb = Ab.CreateDeviceEvent(jb.Touch, wb, Kb.LeftClick, 0, this, this._elementToAttachTo, Mb);
                this._onInputChanged(jb.Touch, wb, eb), this._activeTouchIds[wb] = -1, this._onDeviceDisconnected(jb.Touch, wb)
              }
            }
          }
        }, this._pointerWheelEvent = bb => {
          const wb = jb.Mouse;
          this._inputs[wb] || (this._inputs[wb] = []), this._inputs[wb][0] || (this._pointerActive = !0, this._registerDevice(wb, 0, Jb));
          const Mb = this._inputs[wb][0];
          if (Mb) {
            Mb[Kb.MouseWheelX] = bb.deltaX || 0, Mb[Kb.MouseWheelY] = bb.deltaY || bb.wheelDelta || 0, Mb[Kb.MouseWheelZ] = bb.deltaZ || 0;
            const eb = bb;
            void 0 === bb.pointerId && (bb.pointerId = this._mouseId), 0 !== Mb[Kb.MouseWheelX] && (eb.inputIndex = Kb.MouseWheelX, this._onInputChanged(wb, 0, eb)), 0 !== Mb[Kb.MouseWheelY] && (eb.inputIndex = Kb.MouseWheelY, this._onInputChanged(wb, 0, eb)), 0 !== Mb[Kb.MouseWheelZ] && (eb.inputIndex = Kb.MouseWheelZ, this._onInputChanged(wb, 0, eb))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = bb => {
          bb.buttons > 1 && this._pointerCancelEvent(bb)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!bb && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(jb.Mouse)) {
            const bb = this._inputs[jb.Mouse][0];
            bb[Kb.MouseWheelX] = 0, bb[Kb.MouseWheelY] = 0, bb[Kb.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = bb => {
          this._addGamePad(bb.gamepad)
        }, this._gamepadDisconnectedEvent = bb => {
          if (this._gamepads) {
            const wb = this._getGamepadDeviceType(bb.gamepad.id),
              Mb = bb.gamepad.index;
            this._unregisterDevice(wb, Mb), delete this._gamepads[Mb]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(bb, wb, Mb) {
        const eb = navigator.getGamepads()[wb];
        if (eb && bb === this._gamepads[wb]) {
          const Hb = this._inputs[bb][wb];
          Mb >= eb.buttons.length ? Hb[Mb] = eb.axes[Mb - eb.buttons.length].valueOf() : Hb[Mb] = eb.buttons[Mb].value
        }
      }
      _getGamepadDeviceType(bb) {
        return -1 !== bb.indexOf("054c") ? -1 !== bb.indexOf("0ce6") ? jb.DualSense : jb.DualShock : -1 !== bb.indexOf("Xbox One") || -1 !== bb.search("Xbox 360") || -1 !== bb.search("xinput") || -1 !== bb.indexOf("045e") && -1 === bb.indexOf("Surface Dock") ? jb.Xbox : -1 !== bb.indexOf("057e") ? jb.Switch : jb.Generic
      }
      _getPointerType(bb) {
        let wb = jb.Mouse;
        return ("touch" === bb.pointerType || "pen" === bb.pointerType || bb.touches) && (wb = jb.Touch), wb
      }
    }
    class Nb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = wb, this.deviceSlot = Mb, this.onInputChangedObservable = new Vb.b, this._deviceInputSystem = bb
      }
      getInput(bb) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, bb)
      }
    }
    class vb {
      constructor(bb) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = bb => {
          for (let wb = 0; wb < this._devices.length; wb++) {
            const Mb = this._devices[wb];
            for (const eb in Mb) {
              const Mb = +eb;
              bb._addDevice(new Nb(this._deviceInputSystem, wb, Mb))
            }
          }
          this._registeredManagers.push(bb)
        }, this.unregisterManager = bb => {
          const wb = this._registeredManagers.indexOf(bb);
          wb > -1 && this._registeredManagers.splice(wb, 1)
        };
        const wb = Object.keys(jb).length / 2;
        this._devices = new Array(wb);
        const Mb = (bb, wb) => {
            this._devices[bb] || (this._devices[bb] = new Array), this._devices[bb][wb] || (this._devices[bb][wb] = wb);
            for (const Mb of this._registeredManagers) {
              const eb = new Nb(this._deviceInputSystem, bb, wb);
              Mb._addDevice(eb)
            }
          },
          eb = (bb, wb) => {
            this._devices[bb]?.[wb] && delete this._devices[bb][wb];
            for (const Mb of this._registeredManagers) Mb._removeDevice(bb, wb)
          },
          Hb = (bb, wb, Mb) => {
            if (Mb)
              for (const eb of this._registeredManagers) eb._onInputChanged(bb, wb, Mb)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new Wb(Mb, eb, Hb) : this._deviceInputSystem = new Sb(bb, Mb, eb, Hb)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class Qb {
      getDeviceSource(bb, wb) {
        if (void 0 === wb) {
          if (void 0 === this._firstDevice[bb]) return null;
          wb = this._firstDevice[bb]
        }
        return this._devices[bb] && void 0 !== this._devices[bb][wb] ? this._devices[bb][wb] : null
      }
      getDeviceSources(bb) {
        return this._devices[bb] ? this._devices[bb].filter((bb => !!bb)) : []
      }
      constructor(bb) {
        const wb = Object.keys(jb).length / 2;
        this._devices = new Array(wb), this._firstDevice = new Array(wb), this._engine = bb, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new vb(bb)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new Vb.b((bb => {
          for (const wb of this._devices)
            if (wb)
              for (const Mb of wb) Mb && this.onDeviceConnectedObservable.notifyObserver(bb, Mb)
        })), this.onDeviceDisconnectedObservable = new Vb.b, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = bb.vJ.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.vJ.remove(this._onDisposeObserver)
      }
      _addDevice(bb) {
        this._devices[bb.deviceType] || (this._devices[bb.deviceType] = []), this._devices[bb.deviceType][bb.deviceSlot] || (this._devices[bb.deviceType][bb.deviceSlot] = bb, this._updateFirstDevices(bb.deviceType)), this.onDeviceConnectedObservable.notifyObservers(bb)
      }
      _removeDevice(bb, wb) {
        const Mb = this._devices[bb]?.[wb];
        this.onDeviceDisconnectedObservable.notifyObservers(Mb), this._devices[bb]?.[wb] && delete this._devices[bb][wb], this._updateFirstDevices(bb)
      }
      _onInputChanged(bb, wb, Mb) {
        this._devices[bb]?.[wb]?.onInputChangedObservable.notifyObservers(Mb)
      }
      _updateFirstDevices(bb) {
        switch (bb) {
          case jb.Keyboard:
          case jb.Mouse:
            this._firstDevice[bb] = 0;
            break;
          case jb.Touch:
          case jb.DualSense:
          case jb.DualShock:
          case jb.Xbox:
          case jb.Switch:
          case jb.Generic: {
            delete this._firstDevice[bb];
            const wb = this._devices[bb];
            if (wb)
              for (let Mb = 0; Mb < wb.length; Mb++)
                if (wb[Mb]) {
                  this._firstDevice[bb] = Mb;
                  break
                } break
          }
        }
      }
    }
    var Gb = Mb(41856);
    class qb {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get Tg() {
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
      set Tg(bb) {
        this._doubleClick = bb
      }
      set hasSwiped(bb) {
        this._hasSwiped = bb
      }
      set ignore(bb) {
        this._ignore = bb
      }
    }
    class ab {
      constructor(bb) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new Ib.m(0, 0), this._previousStartingPointerPosition = new Ib.m(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = bb || hb.e.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(bb) {
        return this._meshUnderPointerId[bb] || null
      }
      get unTranslatedPointer() {
        return new Ib.m(this._unTranslatedPointerX, this._unTranslatedPointerY)
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
        const wb = this._scene.DC().getInputElementClientRect();
        wb && (this._pointerX = bb.clientX - wb.left, this._pointerY = bb.clientY - wb.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(bb, wb) {
        const Mb = this._scene,
          eb = Mb.DC(),
          Hb = eb.getInputElement();
        Hb && (Hb.tabIndex = eb.canvasTabIndex, Mb.doNotHandleCursors || (Hb.style.cursor = Mb.defaultCursor)), this._setCursorAndPointerOverMesh(bb, wb, Mb);
        for (const gb of Mb._pointerMoveStage) {
          bb = bb || this._pickMove(wb);
          const Mb = !!bb?.pickedMesh;
          bb = gb.action(this._unTranslatedPointerX, this._unTranslatedPointerY, bb, Mb, Hb)
        }
        const pb = wb.inputIndex >= Kb.MouseWheelX && wb.inputIndex <= Kb.MouseWheelZ ? Xb.b.POINTERWHEEL : Xb.b.POINTERMOVE;
        let Vb;
        Mb.onPointerMove && (bb = bb || this._pickMove(wb), Mb.onPointerMove(wb, bb, pb)), bb ? (Vb = new Xb.f(pb, wb, bb), this._setRayOnPointerInfo(bb, wb)) : (Vb = new Xb.f(pb, wb, null, this), this._movePointerInfo = Vb), Mb.onPointerObservable.hasObservers() && Mb.onPointerObservable.notifyObservers(Vb, pb)
      }
      _setRayOnPointerInfo(bb, wb) {
        const Mb = this._scene;
        bb && Gb.e._IsPickingAvailable && (bb.ray || (bb.ray = Mb.createPickingRay(wb.offsetX, wb.offsetY, Ib.b.Identity(), Mb.activeCamera)))
      }
      _addCameraPointerObserver(bb, wb) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(bb, wb)
      }
      _removeCameraPointerObserver(bb) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(bb)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(bb, wb, Mb) {
        const eb = this._scene,
          Hb = new Xb.c(Mb, wb, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return bb && (Hb.originalPickingInfo = bb, Hb.ray = bb.ray, "xr-near" === wb.pointerType && bb.originMesh && (Hb.nearInteractionPickingInfo = bb)), eb.onPrePointerObservable.notifyObservers(Hb, Mb), !!Hb.skipOnPointerObservable
      }
      _pickMove(bb) {
        const wb = this._scene,
          Mb = wb.Vt(this._unTranslatedPointerX, this._unTranslatedPointerY, wb.pointerMovePredicate, wb.pointerMoveFastCheck, wb.cameraToUseForPointers, wb.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(Mb, bb, wb), Mb
      }
      _updateMeshUnderPointer() {
        const bb = this._scene;
        if (!bb.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || bb.skipPointerMovePicking || !bb.cameraToUseForPointers && !bb.activeCamera) return;
        this._ensurePointerMovePredicate();
        const wb = this._pointerX,
          Mb = this._pointerY,
          eb = this._unTranslatedPointerX,
          Hb = this._unTranslatedPointerY;
        for (const pb of this._latestPointerMoveEvents.values()) this._pointerX = pb.pointerX, this._pointerY = pb.pointerY, this._unTranslatedPointerX = pb.unTranslatedPointerX, this._unTranslatedPointerY = pb.unTranslatedPointerY, this._pickMove(pb.event);
        this._pointerX = wb, this._pointerY = Mb, this._unTranslatedPointerX = eb, this._unTranslatedPointerY = Hb
      }
      _ensurePointerMovePredicate() {
        const bb = this._scene;
        bb.pointerMovePredicate || (bb.pointerMovePredicate = wb => (wb._isPointerMovePickable ?? wb.NE) && wb.isVisible && wb.isReady() && wb.isEnabled() && (wb.enablePointerMoveEvents || bb.constantlyUpdateMeshUnderPointer || null !== wb._getActionManagerForTrigger()) && (!bb.cameraToUseForPointers || 0 !== (bb.cameraToUseForPointers.layerMask & wb.layerMask)))
      }
      _setCursorAndPointerOverMesh(bb, wb, Mb) {
        const eb = Mb.DC().getInputElement();
        if (bb?.pickedMesh) {
          if (this.setPointerOverMesh(bb.pickedMesh, wb.pointerId, bb, wb), !Mb.doNotHandleCursors && eb && this._pointerOverMesh) {
            const bb = this._pointerOverMesh._getActionManagerForTrigger();
            bb && bb.hasPointerTriggers && (eb.style.cursor = bb.hoverCursor || Mb.hoverCursor)
          }
        } else this.setPointerOverMesh(null, wb.pointerId, bb, wb)
      }
      simulatePointerMove(bb, wb) {
        const Mb = new PointerEvent("pointermove", wb);
        Mb.inputIndex = Kb.Move, this._checkPrePointerObservable(bb, Mb, Xb.b.POINTERMOVE) || this._processPointerMove(bb, Mb)
      }
      simulatePointerDown(bb, wb) {
        const Mb = new PointerEvent("pointerdown", wb);
        Mb.inputIndex = Mb.button + 2, this._checkPrePointerObservable(bb, Mb, Xb.b.POINTERDOWN) || this._processPointerDown(bb, Mb)
      }
      _processPointerDown(bb, wb) {
        const Mb = this._scene;
        if (bb?.pickedMesh) {
          this._pickedDownMesh = bb.pickedMesh;
          const eb = bb.pickedMesh._getActionManagerForTrigger();
          if (eb) {
            if (eb.hasPickTriggers) switch (eb.processTrigger(5, new Cb(bb.pickedMesh, Mb.pointerX, Mb.pointerY, bb.pickedMesh, wb, bb)), wb.button) {
              case 0:
                eb.processTrigger(2, new Cb(bb.pickedMesh, Mb.pointerX, Mb.pointerY, bb.pickedMesh, wb, bb));
                break;
              case 1:
                eb.processTrigger(4, new Cb(bb.pickedMesh, Mb.pointerX, Mb.pointerY, bb.pickedMesh, wb, bb));
                break;
              case 2:
                eb.processTrigger(3, new Cb(bb.pickedMesh, Mb.pointerX, Mb.pointerY, bb.pickedMesh, wb, bb))
            }
            eb.hasSpecificTrigger(8) && window.setTimeout((() => {
              const bb = Mb.Vt(this._unTranslatedPointerX, this._unTranslatedPointerY, (bb => bb.NE && bb.isVisible && bb.isReady() && bb.actionManager && bb.actionManager.hasSpecificTrigger(8) && bb === this._pickedDownMesh), !1, Mb.cameraToUseForPointers);
              bb?.pickedMesh && eb && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > ab.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, eb.processTrigger(8, Cb.CreateNew(bb.pickedMesh, wb)))
            }), ab.LongPressDelay)
          }
        } else
          for (const pb of Mb._pointerDownStage) bb = pb.action(this._unTranslatedPointerX, this._unTranslatedPointerY, bb, wb, !1);
        let eb;
        const Hb = Xb.b.POINTERDOWN;
        bb ? (Mb.onPointerDown && Mb.onPointerDown(wb, bb, Hb), eb = new Xb.f(Hb, wb, bb), this._setRayOnPointerInfo(bb, wb)) : eb = new Xb.f(Hb, wb, null, this), Mb.onPointerObservable.hasObservers() && Mb.onPointerObservable.notifyObservers(eb, Hb)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(bb, wb, Mb) {
        const eb = new PointerEvent("pointerup", wb);
        eb.inputIndex = Kb.Move;
        const Hb = new qb;
        Mb ? Hb.Tg = !0 : Hb.singleClick = !0, this._checkPrePointerObservable(bb, eb, Xb.b.POINTERUP) || this._processPointerUp(bb, eb, Hb)
      }
      _processPointerUp(bb, wb, Mb) {
        const eb = this._scene;
        if (bb?.pickedMesh) {
          if (this._pickedUpMesh = bb.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (eb.onPointerPick && eb.onPointerPick(wb, bb), Mb.singleClick && !Mb.ignore && eb.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const Mb = Xb.b.POINTERPICK,
              Hb = new Xb.f(Mb, wb, bb);
            this._setRayOnPointerInfo(bb, wb), eb.onPointerObservable.notifyObservers(Hb, Mb)
          }
          const Hb = bb.pickedMesh._getActionManagerForTrigger();
          if (Hb && !Mb.ignore) {
            Hb.processTrigger(7, Cb.CreateNew(bb.pickedMesh, wb, bb)), !Mb.hasSwiped && Mb.singleClick && Hb.processTrigger(1, Cb.CreateNew(bb.pickedMesh, wb, bb));
            const eb = bb.pickedMesh._getActionManagerForTrigger(6);
            Mb.Tg && eb && eb.processTrigger(6, Cb.CreateNew(bb.pickedMesh, wb, bb))
          }
        } else if (!Mb.ignore)
          for (const Hb of eb._pointerUpStage) bb = Hb.action(this._unTranslatedPointerX, this._unTranslatedPointerY, bb, wb, Mb.Tg);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const bb = this._pickedDownMesh._getActionManagerForTrigger(16);
          bb && bb.processTrigger(16, Cb.CreateNew(this._pickedDownMesh, wb))
        }
        if (!Mb.ignore) {
          const Hb = new Xb.f(Xb.b.POINTERUP, wb, bb);
          if (this._setRayOnPointerInfo(bb, wb), eb.onPointerObservable.notifyObservers(Hb, Xb.b.POINTERUP), eb.onPointerUp && eb.onPointerUp(wb, bb, Xb.b.POINTERUP), !Mb.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let Hb = 0;
            if (Mb.singleClick ? Hb = Xb.b.POINTERTAP : Mb.Tg && (Hb = Xb.b.POINTERDOUBLETAP), Hb) {
              const Mb = new Xb.f(Hb, wb, bb);
              eb.onPointerObservable.hasObservers() && eb.onPointerObservable.hasSpecificMask(Hb) && eb.onPointerObservable.notifyObservers(Mb, Hb)
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
          wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Hb = this._scene,
          pb = Hb.DC();
        eb || (eb = pb.getInputElement()), this._alreadyAttached && this.detachControl(), eb && (this._alreadyAttachedTo = eb), this._deviceSourceManager = new Qb(pb), this._initActionManager = bb => {
          if (!this._meshPickProceed) {
            const wb = Hb.skipPointerUpPicking || 0 === Hb._registeredActions && !this._checkForPicking() && !Hb.onPointerUp ? null : Hb.Vt(this._unTranslatedPointerX, this._unTranslatedPointerY, Hb.pointerUpPredicate, Hb.pointerUpFastCheck, Hb.cameraToUseForPointers, Hb.pointerUpTrianglePredicate);
            this._currentPickResult = wb, wb && (bb = wb.hit && wb.pickedMesh ? wb.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return bb
        }, this._delayedSimpleClick = (bb, wb, Mb) => {
          if ((Date.now() - this._previousStartingPointerTime > ab.DoubleClickDelay && !this._doubleClickOccured || bb !== this._previousButtonPressed) && (this._doubleClickOccured = !1, wb.singleClick = !0, wb.ignore = !1, this._delayedClicks[bb])) {
            const wb = this._delayedClicks[bb].evt,
              Mb = Xb.b.POINTERTAP,
              eb = new Xb.f(Mb, wb, this._currentPickResult);
            Hb.onPointerObservable.hasObservers() && Hb.onPointerObservable.hasSpecificMask(Mb) && Hb.onPointerObservable.notifyObservers(eb, Mb), this._delayedClicks[bb] = null
          }
        }, this._initClickEvent = (bb, wb, Mb, eb) => {
          const Hb = new qb;
          this._currentPickResult = null;
          let pb = null,
            Vb = bb.hasSpecificMask(Xb.b.POINTERPICK) || wb.hasSpecificMask(Xb.b.POINTERPICK) || bb.hasSpecificMask(Xb.b.POINTERTAP) || wb.hasSpecificMask(Xb.b.POINTERTAP) || bb.hasSpecificMask(Xb.b.POINTERDOUBLETAP) || wb.hasSpecificMask(Xb.b.POINTERDOUBLETAP);
          !Vb && xb && (pb = this._initActionManager(pb, Hb), pb && (Vb = pb.hasPickTriggers));
          let gb = !1;
          if (Vb = Vb && !this._isMultiTouchGesture, Vb) {
            const Vb = Mb.button;
            if (Hb.hasSwiped = this._isPointerSwiping(), !Hb.hasSwiped) {
              let lb = !ab.ExclusiveDoubleClickMode;
              if (lb || (lb = !bb.hasSpecificMask(Xb.b.POINTERDOUBLETAP) && !wb.hasSpecificMask(Xb.b.POINTERDOUBLETAP), lb && !xb.HasSpecificTrigger(6) && (pb = this._initActionManager(pb, Hb), pb && (lb = !pb.hasSpecificTrigger(6)))), lb)(Date.now() - this._previousStartingPointerTime > ab.DoubleClickDelay || Vb !== this._previousButtonPressed) && (Hb.singleClick = !0, eb(Hb, this._currentPickResult), gb = !0);
              else {
                const bb = {
                  evt: Mb,
                  clickInfo: Hb,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, Vb, Hb, eb), ab.DoubleClickDelay)
                };
                this._delayedClicks[Vb] = bb
              }
              let Lb = bb.hasSpecificMask(Xb.b.POINTERDOUBLETAP) || wb.hasSpecificMask(Xb.b.POINTERDOUBLETAP);
              !Lb && xb.HasSpecificTrigger(6) && (pb = this._initActionManager(pb, Hb), pb && (Lb = pb.hasSpecificTrigger(6))), Lb && (Vb === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < ab.DoubleClickDelay && !this._doubleClickOccured ? (Hb.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Vb, ab.ExclusiveDoubleClickMode ? (this._delayedClicks[Vb] && (clearTimeout(this._delayedClicks[Vb]?.timeoutId), this._delayedClicks[Vb] = null), eb(Hb, this._previousPickResult)) : eb(Hb, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, Hb.Tg = !0, Hb.ignore = !1, ab.ExclusiveDoubleClickMode && this._delayedClicks[Vb] && (clearTimeout(this._delayedClicks[Vb]?.timeoutId), this._delayedClicks[Vb] = null), eb(Hb, this._currentPickResult)), gb = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Vb))
            }
          }
          gb || eb(Hb, this._currentPickResult)
        }, this._onPointerMove = bb => {
          if (this._updatePointerPosition(bb), this._latestPointerMoveEvents.set(bb.pointerId, {
              event: bb,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > ab.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > ab.DragMovementThreshold), pb.isPointerLock && pb._verifyPointerLock(), this._checkPrePointerObservable(null, bb, bb.inputIndex >= Kb.MouseWheelX && bb.inputIndex <= Kb.MouseWheelZ ? Xb.b.POINTERWHEEL : Xb.b.POINTERMOVE)) return;
          if (!Hb.cameraToUseForPointers && !Hb.activeCamera) return;
          if (Hb.skipPointerMovePicking) return void this._processPointerMove(new tb.c, bb);
          this._ensurePointerMovePredicate();
          const wb = Hb._registeredActions > 0 || Hb.constantlyUpdateMeshUnderPointer ? this._pickMove(bb) : null;
          this._processPointerMove(wb, bb)
        }, this._onPointerDown = bb => {
          const wb = this._activePointerIds.indexOf(-1);
          if (-1 === wb ? this._activePointerIds.push(bb.pointerId) : this._activePointerIds[wb] = bb.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, ab.ExclusiveDoubleClickMode)
            for (let eb = 0; eb < this._delayedClicks.length; eb++)
              if (this._delayedClicks[eb])
                if (bb.button === eb) clearTimeout(this._delayedClicks[eb]?.timeoutId);
                else {
                  const bb = this._delayedClicks[eb].clickInfo;
                  this._doubleClickOccured = !1, bb.singleClick = !0, bb.ignore = !1;
                  const wb = this._delayedClicks[eb].evt,
                    Mb = Xb.b.POINTERTAP,
                    pb = new Xb.f(Mb, wb, this._currentPickResult);
                  Hb.onPointerObservable.hasObservers() && Hb.onPointerObservable.hasSpecificMask(Mb) && Hb.onPointerObservable.notifyObservers(pb, Mb), this._delayedClicks[eb] = null
                } if (this._updatePointerPosition(bb), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = bb.button), Hb.preventDefaultOnPointerDown && eb && (bb.preventDefault(), eb.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, bb, Xb.b.POINTERDOWN)) return;
          if (!Hb.cameraToUseForPointers && !Hb.activeCamera) return;
          let Mb;
          this._pointerCaptures[bb.pointerId] = !0, Hb.pointerDownPredicate || (Hb.pointerDownPredicate = bb => bb.NE && bb.isVisible && bb.isReady() && bb.isEnabled() && (!Hb.cameraToUseForPointers || 0 !== (Hb.cameraToUseForPointers.layerMask & bb.layerMask))), this._pickedDownMesh = null, Mb = Hb.skipPointerDownPicking || 0 === Hb._registeredActions && !this._checkForPicking() && !Hb.onPointerDown ? new tb.c : Hb.Vt(this._unTranslatedPointerX, this._unTranslatedPointerY, Hb.pointerDownPredicate, Hb.pointerDownFastCheck, Hb.cameraToUseForPointers, Hb.pointerDownTrianglePredicate), this._processPointerDown(Mb, bb)
        }, this._onPointerUp = bb => {
          const wb = this._activePointerIds.indexOf(bb.pointerId); - 1 !== wb && (this._activePointerIds[wb] = -1, this._activePointerIdsCount--, "touch" === bb.pointerType && this._latestPointerMoveEvents.delete(bb.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(bb), Hb.preventDefaultOnPointerUp && eb && (bb.preventDefault(), eb.focus()), this._initClickEvent(Hb.onPrePointerObservable, Hb.onPointerObservable, bb, ((wb, Mb) => {
            if (Hb.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !wb.ignore)) {
              if (this._checkPrePointerObservable(null, bb, Xb.b.POINTERUP)) return this._swipeButtonPressed === bb.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === bb.buttons && (this._pointerCaptures[bb.pointerId] = !1));
              wb.hasSwiped || (wb.singleClick && Hb.onPrePointerObservable.hasSpecificMask(Xb.b.POINTERTAP) && this._checkPrePointerObservable(null, bb, Xb.b.POINTERTAP) && (this._skipPointerTap = !0), wb.Tg && Hb.onPrePointerObservable.hasSpecificMask(Xb.b.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, bb, Xb.b.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[bb.pointerId] ? (0 === bb.buttons && (this._pointerCaptures[bb.pointerId] = !1), (Hb.cameraToUseForPointers || Hb.activeCamera) && (Hb.pointerUpPredicate || (Hb.pointerUpPredicate = bb => bb.NE && bb.isVisible && bb.isReady() && bb.isEnabled() && (!Hb.cameraToUseForPointers || 0 !== (Hb.cameraToUseForPointers.layerMask & bb.layerMask))), !this._meshPickProceed && (xb && xb.HasTriggers || this._checkForPicking() || Hb.onPointerUp) && this._initActionManager(null, wb), Mb || (Mb = this._currentPickResult), this._processPointerUp(Mb, bb, wb), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === bb.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === bb.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = bb => {
          const wb = Zb.e.KEYDOWN;
          if (Hb.onPreKeyboardObservable.hasObservers()) {
            const Mb = new Zb.h(wb, bb);
            if (Hb.onPreKeyboardObservable.notifyObservers(Mb, wb), Mb.skipOnKeyboardObservable) return
          }
          if (Hb.onKeyboardObservable.hasObservers()) {
            const Mb = new Zb.j(wb, bb);
            Hb.onKeyboardObservable.notifyObservers(Mb, wb)
          }
          Hb.actionManager && Hb.actionManager.processTrigger(14, Cb.CreateNewFromScene(Hb, bb))
        }, this._onKeyUp = bb => {
          const wb = Zb.e.KEYUP;
          if (Hb.onPreKeyboardObservable.hasObservers()) {
            const Mb = new Zb.h(wb, bb);
            if (Hb.onPreKeyboardObservable.notifyObservers(Mb, wb), Mb.skipOnKeyboardObservable) return
          }
          if (Hb.onKeyboardObservable.hasObservers()) {
            const Mb = new Zb.j(wb, bb);
            Hb.onKeyboardObservable.notifyObservers(Mb, wb)
          }
          Hb.actionManager && Hb.actionManager.processTrigger(15, Cb.CreateNewFromScene(Hb, bb))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((eb => {
          eb.deviceType === jb.Mouse ? eb.onInputChangedObservable.add((Hb => {
            this._originMouseEvent = Hb, Hb.inputIndex === Kb.LeftClick || Hb.inputIndex === Kb.MiddleClick || Hb.inputIndex === Kb.RightClick || Hb.inputIndex === Kb.BrowserBack || Hb.inputIndex === Kb.BrowserForward ? wb && 1 === eb.getInput(Hb.inputIndex) ? this._onPointerDown(Hb) : bb && 0 === eb.getInput(Hb.inputIndex) && this._onPointerUp(Hb) : Mb && (Hb.inputIndex === Kb.Move ? this._onPointerMove(Hb) : Hb.inputIndex !== Kb.MouseWheelX && Hb.inputIndex !== Kb.MouseWheelY && Hb.inputIndex !== Kb.MouseWheelZ || this._onPointerMove(Hb))
          })) : eb.deviceType === jb.Touch ? eb.onInputChangedObservable.add((Hb => {
            Hb.inputIndex === Kb.LeftClick && (wb && 1 === eb.getInput(Hb.inputIndex) ? (this._onPointerDown(Hb), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : bb && 0 === eb.getInput(Hb.inputIndex) && (this._onPointerUp(Hb), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), Mb && Hb.inputIndex === Kb.Move && this._onPointerMove(Hb)
          })) : eb.deviceType === jb.Keyboard && eb.onInputChangedObservable.add((bb => {
            "keydown" === bb.type ? this._onKeyDown(bb) : "keyup" === bb.type && this._onKeyUp(bb)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[wb] === bb && (!bb || !bb._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const Hb = this._meshUnderPointerId[wb];
        let pb;
        Hb && (pb = Hb._getActionManagerForTrigger(10), pb && pb.processTrigger(10, new Cb(Hb, this._pointerX, this._pointerY, bb, eb, {
          pointerId: wb
        }))), bb ? (this._meshUnderPointerId[wb] = bb, this._pointerOverMesh = bb, pb = bb._getActionManagerForTrigger(9), pb && pb.processTrigger(9, new Cb(bb, this._pointerX, this._pointerY, bb, eb, {
          pointerId: wb,
          pickResult: Mb
        }))) : (delete this._meshUnderPointerId[wb], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: bb,
          pointerId: wb
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(bb) {
        this._pointerOverMesh === bb && (this._pointerOverMesh = null), this._pickedDownMesh === bb && (this._pickedDownMesh = null), this._pickedUpMesh === bb && (this._pickedUpMesh = null);
        for (const wb in this._meshUnderPointerId) this._meshUnderPointerId[wb] === bb && delete this._meshUnderPointerId[wb]
      }
    }
    ab.DragMovementThreshold = 10, ab.LongPressDelay = 500, ab.DoubleClickDelay = 300, ab.ExclusiveDoubleClickMode = !1;
    var ib = Mb(41631),
      ub = Mb(38406),
      db = Mb(38994);
    class Pb {
      static get UniqueId() {
        const bb = this._UniqueIdCounter;
        return this._UniqueIdCounter++, bb
      }
    }
    Pb._UniqueIdCounter = 1;
    var nb = Mb(41722),
      yb = Mb(41858),
      ob = Mb(38299);
    class Tb {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var kb, bw, ww, Mw, ew, Hw, pw, Vw, gw, lw, Lw, Iw, Ow, Uw, tw, Cw, Ew, Fw, Bw, sw, mw, hw, zw, Xw, xw, jw, Kw, rw, Rw, Dw, Yw, Zw, fw, Aw, Ww, Jw, Sw, Nw, vw, Qw, Gw, qw, aw, iw, uw, dw, Pw, nw, yw, ow, Tw, kw, bM, wM = Mb(39971),
      MM = Mb(38333);
    const eM = new Ib.q,
      HM = new Ib.q;
    var pM;
    ! function(bb) {
      bb[bb.BackwardCompatible = 0] = "BackwardCompatible", bb[bb.Intermediate = 1] = "Intermediate", bb[bb.Aggressive = 2] = "Aggressive"
    }(pM || (pM = {}));
    class VM {
      static DefaultMaterialFactory(bb) {
        throw (0, zb.k)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, zb.k)("DefaultCollisionCoordinator")
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
        for (const wb of this.skeletons) bb = bb.concat(wb.bones);
        return bb
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(bb) {
        this._animationPropertiesOverride = bb
      }
      set onDispose(bb) {
        this._onDisposeObserver && this.vJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.vJ.add(bb)
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
        return ab.DragMovementThreshold
      }
      static set DragMovementThreshold(bb) {
        ab.DragMovementThreshold = bb
      }
      static get LongPressDelay() {
        return ab.LongPressDelay
      }
      static set LongPressDelay(bb) {
        ab.LongPressDelay = bb
      }
      static get DoubleClickDelay() {
        return ab.DoubleClickDelay
      }
      static set DoubleClickDelay(bb) {
        ab.DoubleClickDelay = bb
      }
      static get ExclusiveDoubleClickMode() {
        return ab.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(bb) {
        ab.ExclusiveDoubleClickMode = bb
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? Ib.o.ZeroReadOnly
      }
      bindEyePosition(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const eb = this._eyePosition,
          Hb = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          pb = this.floatingOriginOffset,
          Vb = eM.set(eb.x, eb.y, eb.z, Hb ? -1 : 1),
          gb = Vb.subtractFromFloatsToRef(pb.x, pb.y, pb.z, 0, HM);
        return bb && (Mb ? bb.setFloat3(wb, gb.x, gb.y, gb.z) : bb.setVector4(wb, gb)), Vb
      }
      finalizeSceneUbo() {
        const bb = this.getSceneUniformBuffer(),
          wb = this.bindEyePosition(null),
          Mb = this.floatingOriginOffset;
        return bb.updateFloat4("vEyePosition", wb.x - Mb.x, wb.y - Mb.y, wb.z - Mb.z, wb.w), bb.update(), bb
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
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), bb && (this._unObserveActiveCameras = (0, ob.h)(bb, (() => {
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
        return VM.DefaultMaterialFactory !== VM._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = VM.DefaultMaterialFactory(this)), this._defaultMaterial
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
        return this._collisionCoordinator || (this._collisionCoordinator = VM.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
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
      BHb(bb) {
        this._components.push(bb), this._transientComponents.push(bb);
        const wb = bb;
        wb.addFromContainer && wb.serialize && this._serializableComponents.push(wb)
      }
      _getComponent(bb) {
        for (const wb of this._components)
          if (wb.name === bb) return wb;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(bb, wb) {
        this._inputManager = new ab(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new ub.f(.2, .2, .3, 1), this.onClearColorChangedObservable = new Vb.b, this.ambientColor = new ub.e(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new Vb.b, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.kR = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.vJ = new Vb.b, this._onDisposeObserver = null, this.onBeforeRenderObservable = new Vb.b, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new Vb.b, this.onAfterRenderCameraObservable = new Vb.b, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new Vb.b, this.onAfterAnimationsObservable = new Vb.b, this.onBeforeDrawPhaseObservable = new Vb.b, this.onAfterDrawPhaseObservable = new Vb.b, this.onReadyObservable = new Vb.b, this.onBeforeCameraRenderObservable = new Vb.b, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new Vb.b, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new Vb.b, this.onAfterActiveMeshesEvaluationObservable = new Vb.b, this.onBeforeParticlesRenderingObservable = new Vb.b, this.onAfterParticlesRenderingObservable = new Vb.b, this.onDataLoadedObservable = new Vb.b, this.onNewCameraAddedObservable = new Vb.b, this.onCameraRemovedObservable = new Vb.b, this.onNewLightAddedObservable = new Vb.b, this.onLightRemovedObservable = new Vb.b, this.onNewGeometryAddedObservable = new Vb.b, this.onGeometryRemovedObservable = new Vb.b, this.onNewTransformNodeAddedObservable = new Vb.b, this.onTransformNodeRemovedObservable = new Vb.b, this.onNewMeshAddedObservable = new Vb.b, this.onMeshRemovedObservable = new Vb.b, this.onNewSkeletonAddedObservable = new Vb.b, this.onSkeletonRemovedObservable = new Vb.b, this.onNewParticleSystemAddedObservable = new Vb.b, this.onParticleSystemRemovedObservable = new Vb.b, this.onNewAnimationGroupAddedObservable = new Vb.b, this.onAnimationGroupRemovedObservable = new Vb.b, this.onNewMaterialAddedObservable = new Vb.b, this.onNewMultiMaterialAddedObservable = new Vb.b, this.onMaterialRemovedObservable = new Vb.b, this.onMultiMaterialRemovedObservable = new Vb.b, this.onNewTextureAddedObservable = new Vb.b, this.onTextureRemovedObservable = new Vb.b, this.onNewFrameGraphAddedObservable = new Vb.b, this.onFrameGraphRemovedObservable = new Vb.b, this.onNewObjectRendererAddedObservable = new Vb.b, this.onObjectRendererRemovedObservable = new Vb.b, this.onNewPostProcessAddedObservable = new Vb.b, this.onPostProcessRemovedObservable = new Vb.b, this.onNewEffectLayerAddedObservable = new Vb.b, this.onEffectLayerRemovedObservable = new Vb.b, this.onBeforeRenderTargetsRenderObservable = new Vb.b, this.onAfterRenderTargetsRenderObservable = new Vb.b, this.onBeforeStepObservable = new Vb.b, this.onAfterStepObservable = new Vb.b, this.onActiveCameraChanged = new Vb.b, this.onActiveCamerasChanged = new Vb.b, this.onBeforeRenderingGroupObservable = new Vb.b, this.onAfterRenderingGroupObservable = new Vb.b, this.onMeshImportedObservable = new Vb.b, this.onAnimationFileImportedObservable = new Vb.b, this.onEnvironmentTextureChangedObservable = new Vb.b, this.onMeshUnderPointerUpdatedObservable = new Vb.b, this._registeredForLateAnimationBindings = new gb.e(256), this._pointerPickingConfiguration = new Tb, this.onPrePointerObservable = new Vb.b, this.onPointerObservable = new Vb.b, this.onPreKeyboardObservable = new Vb.b, this.onKeyboardObservable = new Vb.b, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = VM.FOGMODE_NONE, this.fogColor = new ub.e(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.iG = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new Ib.o(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new gb.e(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new ib.d, this._activeIndices = new ib.d, this._activeParticles = new ib.d, this._activeBones = new ib.d, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new gb.h(256), this._processedMaterials = new gb.h(256), this._renderTargets = new gb.e(256), this._materialsRenderTargets = new gb.e(256), this._activeParticleSystems = new gb.h(256), this._activeSkeletons = new gb.e(32), this._softwareSkinnedMeshes = new gb.e(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = Ib.b.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = sb.f.Create(), this._beforeClearStage = sb.f.Create(), this._beforeRenderTargetClearStage = sb.f.Create(), this._gatherRenderTargetsStage = sb.f.Create(), this._gatherActiveCameraRenderTargetsStage = sb.f.Create(), this._isReadyForMeshStage = sb.f.Create(), this._beforeEvaluateActiveMeshStage = sb.f.Create(), this._evaluateSubMeshStage = sb.f.Create(), this._preActiveMeshStage = sb.f.Create(), this._cameraDrawRenderTargetStage = sb.f.Create(), this._beforeCameraDrawStage = sb.f.Create(), this._beforeRenderTargetDrawStage = sb.f.Create(), this._beforeRenderingGroupDrawStage = sb.f.Create(), this._beforeRenderingMeshStage = sb.f.Create(), this._afterRenderingMeshStage = sb.f.Create(), this._afterRenderingGroupDrawStage = sb.f.Create(), this._afterCameraDrawStage = sb.f.Create(), this._afterCameraPostProcessStage = sb.f.Create(), this._afterRenderTargetDrawStage = sb.f.Create(), this._afterRenderTargetPostProcessStage = sb.f.Create(), this._afterRenderStage = sb.f.Create(), this._pointerMoveStage = sb.f.Create(), this._pointerDownStage = sb.f.Create(), this._pointerUpStage = sb.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new Vb.b, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const Mb = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...wb
        };
        this.defaultCameraLayerMask = Mb.defaultCameraLayerMask, this.defaultRenderableLayerMask = Mb.defaultRenderableLayerMask, bb = this._engine = bb || hb.e.LastCreatedEngine, Mb.virtual ? bb._virtualScenes.push(this) : (hb.e._LastCreatedScene = this, bb.scenes.push(this)), (bb.getCreationOptions().useLargeWorldRendering || wb?.useFloatingOrigin) && ((0, Fb.d)(), this._floatingOriginScene = this, Fb.b.RJ = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new Bb.e(this), Eb.e && (this.postProcessManager = new Eb.e(this)), (0, mb.j)() && this.attachControl(), this._createUbo(), Ob.e && (this._imageProcessingConfiguration = new Ob.e), this.setDefaultCandidateProviders(), Mb.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = Mb.useMaterialMeshMap, this.useClonedMeshMap = Mb.useClonedMeshMap, wb && wb.virtual || bb.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(bb) {
        return this._defaultSubMeshCandidates.data = bb.oR, this._defaultSubMeshCandidates.length = bb.oR.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = bb => this._getDefaultSubMeshCandidates(bb), this.getIntersectingSubMeshCandidates = (bb, wb) => this._getDefaultSubMeshCandidates(bb), this.getCollidingSubMeshCandidates = (bb, wb) => this._getDefaultSubMeshCandidates(bb)
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
      isCachedMaterialInvalid(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== wb || this._cachedMaterial !== bb || this._cachedVisibility !== Mb
      }
      DC() {
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
      simulatePointerMove(bb, wb) {
        return this._inputManager.simulatePointerMove(bb, wb), this
      }
      simulatePointerDown(bb, wb) {
        return this._inputManager.simulatePointerDown(bb, wb), this
      }
      simulatePointerUp(bb, wb, Mb) {
        return this._inputManager.simulatePointerUp(bb, wb, Mb), this
      }
      isPointerCaptured() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(bb)
      }
      attachControl() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(bb, wb, Mb)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let bb, wb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const Mb = this.DC(),
          eb = Mb.currentRenderPassId;
        Mb.currentRenderPassId = this.activeCamera?.renderPassId ?? eb;
        let Hb = !0;
        for (this._pendingData.length > 0 && (Hb = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && Hb && (Hb = this.depthPeelingRenderer.isReady()), wb && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), bb = 0; bb < this.meshes.length; bb++) {
          const eb = this.meshes[bb];
          if (!eb.oR || 0 === eb.oR.length) continue;
          if (!eb.isReady(!0)) {
            Hb = !1;
            continue
          }
          const pb = eb.hasThinInstances || "InstancedMesh" === eb.getClassName() || "InstancedLinesMesh" === eb.getClassName() || Mb.getCaps().instancedArrays && eb.instances.length > 0;
          for (let bb = 0, wb = this._isReadyForMeshStage; bb < wb.length; bb++) {
            wb[bb].action(eb, pb) || (Hb = !1)
          }
          if (!wb) continue;
          const Vb = eb.material || this.defaultMaterial;
          if (Vb)
            if (Vb._storeEffectOnSubMeshes)
              for (const bb of eb.oR) {
                const wb = bb.AC();
                wb && wb.hasRenderTargetTextures && null != wb.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(wb) && (this._processedMaterials.push(wb), this._materialsRenderTargets.concatWithNoDuplicate(wb.getRenderTargetTextures()))
              } else Vb.hasRenderTargetTextures && null != Vb.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Vb) && (this._processedMaterials.push(Vb), this._materialsRenderTargets.concatWithNoDuplicate(Vb.getRenderTargetTextures()))
        }
        if (wb) {
          for (bb = 0; bb < this._materialsRenderTargets.length; ++bb) {
            this._materialsRenderTargets.data[bb].isReadyForRendering() || (Hb = !1)
          }
          for (bb = 0; bb < this.customRenderTargets.length; ++bb) {
            this.customRenderTargets[bb].isReadyForRendering() || (Hb = !1)
          }
        }
        for (bb = 0; bb < this.geometries.length; bb++) {
          2 === this.geometries[bb].delayLoadState && (Hb = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const pb of this.activeCameras) pb.isReady(!0) || (Hb = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (Hb = !1));
        for (const pb of this.kR) pb.isReady() || (Hb = !1);
        if (this.proceduralTexturesEnabled)
          for (const pb of this.proceduralTextures) pb.isReady() || (Hb = !1);
        if (this.layers)
          for (const pb of this.layers) pb.isReady() || (Hb = !1);
        if (this.effectLayers)
          for (const pb of this.effectLayers) pb.isLayerReady() || (Hb = !1);
        for (const pb of this._isReadyChecks) pb.isReady() || (Hb = !1);
        return Mb.areAllEffectsReady() || (Hb = !1), Mb.currentRenderPassId = eb, Hb
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
        const wb = () => {
          bb(), setTimeout((() => {
            this.unregisterBeforeRender(wb)
          }))
        };
        this.registerBeforeRender(wb)
      }
      executeOnceBeforeRender(bb, wb) {
        void 0 !== wb ? setTimeout((() => {
          this._executeOnceBeforeRender(bb)
        }), wb) : this._executeOnceBeforeRender(bb)
      }
      addPendingData(bb) {
        this._pendingData.push(bb)
      }
      removePendingData(bb) {
        const wb = this.isLoading,
          Mb = this._pendingData.indexOf(bb); - 1 !== Mb && this._pendingData.splice(Mb, 1), wb && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
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
        const wb = this._isReadyChecks.indexOf(bb); - 1 !== wb && this._isReadyChecks.splice(wb, 1)
      }
      executeWhenReady(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(bb), null === this._executeWhenReadyTimeoutId && this._checkIsReady(wb)
      }
      async whenReadyAsync() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((wb => {
          this.executeWhenReady((() => {
            wb()
          }), bb)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = pb.e.Now;
        else if (this.onReadyTimeoutDuration > 0 && pb.e.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(bb)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(bb)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = pb.e.Now
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
      setTransformMatrix(bb, wb, Mb, eb) {
        this._multiviewSceneUboIsActive = !!(Mb && eb && this._multiviewSceneUbo), this._viewUpdateFlag === bb.updateFlag && this._projectionUpdateFlag === wb.updateFlag || (this._viewUpdateFlag = bb.updateFlag, this._projectionUpdateFlag = wb.updateFlag, this._viewMatrix = bb, this._projectionMatrix = wb, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new Ib.b), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? db.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = db.b.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(Mb, eb) : this._sceneUbo.useUbo && (this._sceneUbo.kbb("viewProjection", this._transformMatrix), this._sceneUbo.kbb("view", this._viewMatrix), this._sceneUbo.kbb("projection", this._projectionMatrix), this._sceneUbo.kbb("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(bb, wb) {
        const Mb = "boolean" === typeof wb ? wb : wb?.trackUBOsInFrame,
          eb = new Ub.c(this._engine, void 0, !1, bb ?? "JE", void 0, Mb);
        return eb.addUniform("viewProjection", 16), eb.addUniform("view", 16), eb.addUniform("projection", 16), eb.addUniform("vEyePosition", 4), eb.addUniform("inverseProjection", 16), eb
      }
      setSceneUniformBuffer(bb) {
        this._sceneUbo = bb, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : Ib.o.ZeroReadOnly
      }
      getUniqueId() {
        return Pb.UniqueId
      }
      lpb(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(bb), bb._resyncLightSources(), bb.parent || bb._addToSceneRootNodes(), Hb.d.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(bb)
          })), wb)) {
          const wb = bb.getChildMeshes();
          for (const bb of wb) this.lpb(bb)
        }
      }
      dJ(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Mb = this.meshes.indexOf(bb);
        if (-1 !== Mb && (this.meshes.splice(Mb, 1), bb.parent || bb._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(bb), this.onMeshRemovedObservable.notifyObservers(bb), wb) {
          const wb = bb.getChildMeshes();
          for (const bb of wb) this.dJ(bb)
        }
        return Mb
      }
      addTransformNode(bb) {
        this._blockEntityCollection || bb.RJ() === this && -1 !== bb._indexInSceneTransformNodesArray || (bb._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(bb), bb.parent || bb._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(bb))
      }
      removeTransformNode(bb) {
        const wb = bb._indexInSceneTransformNodesArray;
        if (-1 !== wb) {
          if (wb !== this.transformNodes.length - 1) {
            const bb = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[wb] = bb, bb._indexInSceneTransformNodesArray = wb
          }
          bb._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), bb.parent || bb._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(bb), wb
      }
      removeSkeleton(bb) {
        const wb = this.skeletons.indexOf(bb);
        return -1 !== wb && (this.skeletons.splice(wb, 1), this.onSkeletonRemovedObservable.notifyObservers(bb), this._executeActiveContainerCleanup(this._activeSkeletons)), wb
      }
      removeMorphTargetManager(bb) {
        const wb = this.morphTargetManagers.indexOf(bb);
        return -1 !== wb && this.morphTargetManagers.splice(wb, 1), wb
      }
      removeLight(bb) {
        const wb = this.lights.indexOf(bb);
        if (-1 !== wb) {
          for (const wb of this.meshes) wb._removeLightSource(bb, !1);
          this.lights.splice(wb, 1), this.sortLightsByPriority(), bb.parent || bb._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(bb)
        }
        return wb
      }
      removeCamera(bb) {
        const wb = this.cameras.indexOf(bb);
        if (-1 !== wb && (this.cameras.splice(wb, 1), bb.parent || bb._removeFromSceneRootNodes()), this.activeCameras) {
          const wb = this.activeCameras.indexOf(bb); - 1 !== wb && this.activeCameras.splice(wb, 1)
        }
        return this.activeCamera === bb && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(bb), wb
      }
      removeParticleSystem(bb) {
        const wb = this.kR.indexOf(bb);
        return -1 !== wb && (this.kR.splice(wb, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(bb), wb
      }
      removeAnimation(bb) {
        const wb = this.animations.indexOf(bb);
        return -1 !== wb && this.animations.splice(wb, 1), wb
      }
      stopAnimation(bb, wb, Mb) {}
      removeAnimationGroup(bb) {
        const wb = this.animationGroups.indexOf(bb);
        return -1 !== wb && this.animationGroups.splice(wb, 1), this.onAnimationGroupRemovedObservable.notifyObservers(bb), wb
      }
      removeMultiMaterial(bb) {
        const wb = this.multiMaterials.indexOf(bb);
        return -1 !== wb && this.multiMaterials.splice(wb, 1), this.onMultiMaterialRemovedObservable.notifyObservers(bb), wb
      }
      removeMaterial(bb) {
        const wb = bb._indexInSceneMaterialArray;
        if (-1 !== wb && wb < this.materials.length) {
          if (wb !== this.materials.length - 1) {
            const bb = this.materials[this.materials.length - 1];
            this.materials[wb] = bb, bb._indexInSceneMaterialArray = wb
          }
          bb._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(bb), wb
      }
      removeActionManager(bb) {
        const wb = this.actionManagers.indexOf(bb);
        return -1 !== wb && this.actionManagers.splice(wb, 1), wb
      }
      removeTexture(bb) {
        const wb = this.textures.indexOf(bb);
        return -1 !== wb && this.textures.splice(wb, 1), this.onTextureRemovedObservable.notifyObservers(bb), wb
      }
      removeFrameGraph(bb) {
        const wb = this.frameGraphs.indexOf(bb);
        return -1 !== wb && this.frameGraphs.splice(wb, 1), this.onFrameGraphRemovedObservable.notifyObservers(bb), wb
      }
      removeObjectRenderer(bb) {
        const wb = this.objectRenderers.indexOf(bb);
        return -1 !== wb && this.objectRenderers.splice(wb, 1), this.onObjectRendererRemovedObservable.notifyObservers(bb), wb
      }
      removePostProcess(bb) {
        const wb = this.postProcesses.indexOf(bb);
        return -1 !== wb && this.postProcesses.splice(wb, 1), this.onPostProcessRemovedObservable.notifyObservers(bb), wb
      }
      removeEffectLayer(bb) {
        const wb = this.effectLayers.indexOf(bb);
        return -1 !== wb && this.effectLayers.splice(wb, 1), this.onEffectLayerRemovedObservable.notifyObservers(bb), wb
      }
      addLight(bb) {
        if (!this._blockEntityCollection) {
          this.lights.push(bb), this.sortLightsByPriority(), bb.parent || bb._addToSceneRootNodes();
          for (const wb of this.meshes) - 1 === wb.lightSources.indexOf(bb) && (wb.lightSources.push(bb), wb._resyncLightSources());
          Hb.d.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(bb)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(yb.c.CompareLightsPriority)
      }
      addCamera(bb) {
        this._blockEntityCollection || (this.cameras.push(bb), Hb.d.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(bb)
        })), bb.parent || bb._addToSceneRootNodes())
      }
      addSkeleton(bb) {
        this._blockEntityCollection || (this.skeletons.push(bb), Hb.d.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(bb)
        })))
      }
      addParticleSystem(bb) {
        this._blockEntityCollection || (this.kR.push(bb), Hb.d.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(bb)
        })))
      }
      addAnimation(bb) {
        this._blockEntityCollection || this.animations.push(bb)
      }
      addAnimationGroup(bb) {
        this._blockEntityCollection || (this.animationGroups.push(bb), Hb.d.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(bb)
        })))
      }
      addMultiMaterial(bb) {
        this._blockEntityCollection || (this.multiMaterials.push(bb), Hb.d.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(bb)
        })))
      }
      addMaterial(bb) {
        this._blockEntityCollection || bb.RJ() === this && -1 !== bb._indexInSceneMaterialArray || (bb._indexInSceneMaterialArray = this.materials.length, this.materials.push(bb), Hb.d.SetImmediate((() => {
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
        this.frameGraphs.push(bb), Hb.d.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(bb)
        }))
      }
      addObjectRenderer(bb) {
        this.objectRenderers.push(bb), Hb.d.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(bb)
        }))
      }
      addPostProcess(bb) {
        this._blockEntityCollection || (this.postProcesses.push(bb), Hb.d.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(bb)
        })))
      }
      addEffectLayer(bb) {
        this._blockEntityCollection || (this.effectLayers.push(bb), Hb.d.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(bb)
        })))
      }
      switchActiveCamera(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = bb, wb && bb.attachControl())
      }
      setActiveCameraById(bb) {
        const wb = this.getCameraById(bb);
        return wb ? (this.activeCamera = wb, wb) : null
      }
      setActiveCameraByName(bb) {
        const wb = this.getCameraByName(bb);
        return wb ? (this.activeCamera = wb, wb) : null
      }
      getAnimationGroupByName(bb) {
        for (let wb = 0; wb < this.animationGroups.length; wb++)
          if (this.animationGroups[wb].name === bb) return this.animationGroups[wb];
        return null
      }
      _getMaterial(bb, wb) {
        for (let Mb = 0; Mb < this.materials.length; Mb++) {
          const bb = this.materials[Mb];
          if (wb(bb)) return bb
        }
        if (bb)
          for (let Mb = 0; Mb < this.multiMaterials.length; Mb++) {
            const bb = this.multiMaterials[Mb];
            if (wb(bb)) return bb
          }
        return null
      }
      getMaterialByUniqueID(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(bb, wb)
      }
      getMaterialByUniqueId(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(wb, (wb => wb.uniqueId === bb))
      }
      getMaterialById(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(wb, (wb => wb.id === bb))
      }
      getMaterialByName(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(wb, (wb => wb.name === bb))
      }
      getLastMaterialById(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let Mb = this.materials.length - 1; Mb >= 0; Mb--)
          if (this.materials[Mb].id === bb) return this.materials[Mb];
        if (wb)
          for (let Mb = this.multiMaterials.length - 1; Mb >= 0; Mb--)
            if (this.multiMaterials[Mb].id === bb) return this.multiMaterials[Mb];
        return null
      }
      getTextureByUniqueId(bb) {
        for (let wb = 0; wb < this.textures.length; wb++)
          if (this.textures[wb].uniqueId === bb) return this.textures[wb];
        return null
      }
      getTextureByName(bb) {
        for (let wb = 0; wb < this.textures.length; wb++)
          if (this.textures[wb].name === bb) return this.textures[wb];
        return null
      }
      getCameraById(bb) {
        for (let wb = 0; wb < this.cameras.length; wb++)
          if (this.cameras[wb].id === bb) return this.cameras[wb];
        return null
      }
      getCameraByUniqueId(bb) {
        for (let wb = 0; wb < this.cameras.length; wb++)
          if (this.cameras[wb].uniqueId === bb) return this.cameras[wb];
        return null
      }
      getCameraByName(bb) {
        for (let wb = 0; wb < this.cameras.length; wb++)
          if (this.cameras[wb].name === bb) return this.cameras[wb];
        return null
      }
      getBoneById(bb) {
        for (let wb = 0; wb < this.skeletons.length; wb++) {
          const Mb = this.skeletons[wb];
          for (let wb = 0; wb < Mb.bones.length; wb++)
            if (Mb.bones[wb].id === bb) return Mb.bones[wb]
        }
        return null
      }
      getBoneByName(bb) {
        for (let wb = 0; wb < this.skeletons.length; wb++) {
          const Mb = this.skeletons[wb];
          for (let wb = 0; wb < Mb.bones.length; wb++)
            if (Mb.bones[wb].name === bb) return Mb.bones[wb]
        }
        return null
      }
      getLightByName(bb) {
        for (let wb = 0; wb < this.lights.length; wb++)
          if (this.lights[wb].name === bb) return this.lights[wb];
        return null
      }
      getLightById(bb) {
        for (let wb = 0; wb < this.lights.length; wb++)
          if (this.lights[wb].id === bb) return this.lights[wb];
        return null
      }
      getLightByUniqueId(bb) {
        for (let wb = 0; wb < this.lights.length; wb++)
          if (this.lights[wb].uniqueId === bb) return this.lights[wb];
        return null
      }
      getParticleSystemById(bb) {
        for (let wb = 0; wb < this.kR.length; wb++)
          if (this.kR[wb].id === bb) return this.kR[wb];
        return null
      }
      getGeometryById(bb) {
        for (let wb = 0; wb < this.geometries.length; wb++)
          if (this.geometries[wb].id === bb) return this.geometries[wb];
        return null
      }
      _getGeometryByUniqueId(bb) {
        if (this._geometriesByUniqueId) {
          const wb = this._geometriesByUniqueId[bb];
          if (void 0 !== wb) return this.geometries[wb]
        } else
          for (let wb = 0; wb < this.geometries.length; wb++)
            if (this.geometries[wb].uniqueId === bb) return this.geometries[wb];
        return null
      }
      getFrameGraphByName(bb) {
        for (let wb = 0; wb < this.frameGraphs.length; wb++)
          if (this.frameGraphs[wb].name === bb) return this.frameGraphs[wb];
        return null
      }
      pushGeometry(bb, wb) {
        return !(!wb && this._getGeometryByUniqueId(bb.uniqueId)) && (this.addGeometry(bb), Hb.d.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(bb)
        })), !0)
      }
      removeGeometry(bb) {
        let wb;
        if (this._geometriesByUniqueId) {
          if (wb = this._geometriesByUniqueId[bb.uniqueId], void 0 === wb) return !1
        } else if (wb = this.geometries.indexOf(bb), wb < 0) return !1;
        if (wb !== this.geometries.length - 1) {
          const bb = this.geometries[this.geometries.length - 1];
          bb && (this.geometries[wb] = bb, this._geometriesByUniqueId && (this._geometriesByUniqueId[bb.uniqueId] = wb))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[bb.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(bb), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(bb) {
        for (let wb = 0; wb < this.meshes.length; wb++)
          if (this.meshes[wb].id === bb) return this.meshes[wb];
        return null
      }
      getMeshesById(bb) {
        return this.meshes.filter((function(wb) {
          return wb.id === bb
        }))
      }
      getTransformNodeById(bb) {
        for (let wb = 0; wb < this.transformNodes.length; wb++)
          if (this.transformNodes[wb].id === bb) return this.transformNodes[wb];
        return null
      }
      getTransformNodeByUniqueId(bb) {
        for (let wb = 0; wb < this.transformNodes.length; wb++)
          if (this.transformNodes[wb].uniqueId === bb) return this.transformNodes[wb];
        return null
      }
      getTransformNodesById(bb) {
        return this.transformNodes.filter((function(wb) {
          return wb.id === bb
        }))
      }
      getMeshByUniqueId(bb) {
        for (let wb = 0; wb < this.meshes.length; wb++)
          if (this.meshes[wb].uniqueId === bb) return this.meshes[wb];
        return null
      }
      getLastMeshById(bb) {
        for (let wb = this.meshes.length - 1; wb >= 0; wb--)
          if (this.meshes[wb].id === bb) return this.meshes[wb];
        return null
      }
      getLastTransformNodeById(bb) {
        for (let wb = this.transformNodes.length - 1; wb >= 0; wb--)
          if (this.transformNodes[wb].id === bb) return this.transformNodes[wb];
        return null
      }
      getLastEntryById(bb) {
        let wb;
        for (wb = this.meshes.length - 1; wb >= 0; wb--)
          if (this.meshes[wb].id === bb) return this.meshes[wb];
        for (wb = this.transformNodes.length - 1; wb >= 0; wb--)
          if (this.transformNodes[wb].id === bb) return this.transformNodes[wb];
        for (wb = this.cameras.length - 1; wb >= 0; wb--)
          if (this.cameras[wb].id === bb) return this.cameras[wb];
        for (wb = this.lights.length - 1; wb >= 0; wb--)
          if (this.lights[wb].id === bb) return this.lights[wb];
        for (wb = this.skeletons.length - 1; wb >= 0; wb--) {
          const Mb = this.skeletons[wb];
          for (let wb = Mb.bones.length - 1; wb >= 0; wb--)
            if (Mb.bones[wb].id === bb) return Mb.bones[wb]
        }
        return null
      }
      getNodeById(bb) {
        const wb = this.getMeshById(bb);
        if (wb) return wb;
        const Mb = this.getTransformNodeById(bb);
        if (Mb) return Mb;
        const eb = this.getLightById(bb);
        if (eb) return eb;
        const Hb = this.getCameraById(bb);
        if (Hb) return Hb;
        const pb = this.getBoneById(bb);
        return pb || null
      }
      getNodeByName(bb) {
        const wb = this.getMeshByName(bb);
        if (wb) return wb;
        const Mb = this.getTransformNodeByName(bb);
        if (Mb) return Mb;
        const eb = this.getLightByName(bb);
        if (eb) return eb;
        const Hb = this.getCameraByName(bb);
        if (Hb) return Hb;
        const pb = this.getBoneByName(bb);
        return pb || null
      }
      getMeshByName(bb) {
        for (let wb = 0; wb < this.meshes.length; wb++)
          if (this.meshes[wb].name === bb) return this.meshes[wb];
        return null
      }
      getTransformNodeByName(bb) {
        for (let wb = 0; wb < this.transformNodes.length; wb++)
          if (this.transformNodes[wb].name === bb) return this.transformNodes[wb];
        return null
      }
      getLastSkeletonById(bb) {
        for (let wb = this.skeletons.length - 1; wb >= 0; wb--)
          if (this.skeletons[wb].id === bb) return this.skeletons[wb];
        return null
      }
      getSkeletonByUniqueId(bb) {
        for (let wb = 0; wb < this.skeletons.length; wb++)
          if (this.skeletons[wb].uniqueId === bb) return this.skeletons[wb];
        return null
      }
      getSkeletonById(bb) {
        for (let wb = 0; wb < this.skeletons.length; wb++)
          if (this.skeletons[wb].id === bb) return this.skeletons[wb];
        return null
      }
      getSkeletonByName(bb) {
        for (let wb = 0; wb < this.skeletons.length; wb++)
          if (this.skeletons[wb].name === bb) return this.skeletons[wb];
        return null
      }
      getMorphTargetManagerById(bb) {
        for (let wb = 0; wb < this.morphTargetManagers.length; wb++)
          if (this.morphTargetManagers[wb].uniqueId === bb) return this.morphTargetManagers[wb];
        return null
      }
      getMorphTargetById(bb) {
        for (let wb = 0; wb < this.morphTargetManagers.length; ++wb) {
          const Mb = this.morphTargetManagers[wb];
          for (let wb = 0; wb < Mb.numTargets; ++wb) {
            const eb = Mb.getTarget(wb);
            if (eb.id === bb) return eb
          }
        }
        return null
      }
      getMorphTargetByName(bb) {
        for (let wb = 0; wb < this.morphTargetManagers.length; ++wb) {
          const Mb = this.morphTargetManagers[wb];
          for (let wb = 0; wb < Mb.numTargets; ++wb) {
            const eb = Mb.getTarget(wb);
            if (eb.name === bb) return eb
          }
        }
        return null
      }
      getPostProcessByName(bb) {
        for (let wb = 0; wb < this.postProcesses.length; ++wb) {
          const Mb = this.postProcesses[wb];
          if (Mb.name === bb) return Mb
        }
        return null
      }
      isActiveMesh(bb) {
        return -1 !== this._activeMeshes.indexOf(bb)
      }
      get uid() {
        return this._uid || (this._uid = eb.e.RandomId()), this._uid
      }
      addExternalData(bb, wb) {
        return this._externalData || (this._externalData = new lb), this._externalData.add(bb, wb)
      }
      getExternalData(bb) {
        return this._externalData ? this._externalData.get(bb) : null
      }
      getOrAddExternalDataWithFactory(bb, wb) {
        return this._externalData || (this._externalData = new lb), this._externalData.getOrAddWithFactory(bb, wb)
      }
      removeExternalData(bb) {
        return this._externalData.remove(bb)
      }
      _evaluateSubMesh(bb, wb, Mb, eb) {
        if (eb || bb.isInFrustum(this._frustumPlanes)) {
          for (let eb = 0, Hb = this._evaluateSubMeshStage; eb < Hb.length; eb++) {
            Hb[eb].action(wb, bb)
          }
          const Mb = bb.AC();
          null !== Mb && void 0 !== Mb && (Mb.hasRenderTargetTextures && null != Mb.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Mb) && (this._processedMaterials.push(Mb), this._materialsRenderTargets.concatWithNoDuplicate(Mb.getRenderTargetTextures())), this._renderingManager.dispatch(bb, wb, Mb))
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
            const wb = this.activeCameras[bb];
            wb && wb._activeMeshes && wb._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let bb = 0; bb < this.textures.length; bb++) {
            const wb = this.textures[bb];
            wb && wb.renderList && wb.freeRenderingGroups()
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
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          pb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const Vb = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const bb of Vb) bb.objectRenderer._freezeActiveMeshes(eb);
          return this._freezeActiveMeshesCancel = (0, Hb.e)((() => {
            let bb = !0,
              wb = !0;
            for (const Mb of Vb) bb && (bb = Mb.objectRenderer._isFrozen), wb && (wb = null !== Mb.objectRenderer._freezeActiveMeshesCancel);
            if (bb) return !0;
            if (!wb) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = pb, this._skipEvaluateActiveMeshesCompletely = bb, wb?.()
          }), ((bb, wb) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), wb) {
              const wb = "Scene: Timeout while waiting for meshes to be frozen.";
              Mb ? Mb(wb) : (wM.b.Error(wb), bb && wM.b.Error(bb))
            } else {
              const wb = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              Mb ? Mb(wb) : (wM.b.Error(wb), bb && (wM.b.Error(bb), bb.stack && wM.b.Error(bb.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = pb, this._skipEvaluateActiveMeshesCompletely = bb, eb)
              for (let bb = 0; bb < this._activeMeshes.length; bb++) this._activeMeshes.data[bb]._freeze();
            wb && wb()
          } else Mb && Mb("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let bb = 0; bb < this.meshes.length; bb++) {
          const wb = this.meshes[bb];
          wb._internalAbstractMeshDataInfo && (wb._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const bb = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const wb of bb) wb.objectRenderer._unfreezeActiveMeshes()
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
            for (let wb = 0; wb < bb; wb++) {
              this._activeMeshes.data[wb].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const bb = this._activeParticleSystems.length;
            for (let wb = 0; wb < bb; wb++) this._activeParticleSystems.data[wb].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let Hb = 0, pb = this._beforeEvaluateActiveMeshStage; Hb < pb.length; Hb++) {
          pb[Hb].action()
        }
        const bb = this.getActiveMeshCandidates(),
          wb = bb.length,
          Mb = ib.d.Enabled,
          eb = this.customLODSelector;
        for (let Hb = 0; Hb < wb; Hb++) {
          const wb = bb.data[Hb],
            pb = !eb && !wb.QJ && !wb._internalMeshDataInfo?._LODLevels.length;
          let Vb, gb;
          if ((pb || (Vb = wb._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), Vb ? Vb[1] = -1 : (Vb = [wb, -1], wb._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, Vb))), !wb.isBlocked) && (Mb && this._totalVertices.addCount(wb.getTotalVertices(), !1), wb.isReady() && wb.isEnabled() && !wb.CO.hasAZeroComponent)) {
            if (wb.computeWorldMatrix(), wb.actionManager && wb.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(wb), pb) gb = wb;
            else if (gb = eb ? eb(wb, this.activeCamera) : wb.getLOD(this.activeCamera), Vb[0] = gb, Vb[1] = this._frameId, void 0 === gb || null === gb) continue;
            if (gb !== wb && 0 !== gb.billboardMode && gb.computeWorldMatrix(), wb._preActivate(), wb.isVisible && wb.visibility > 0 && 0 !== (wb.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || wb.cC || wb.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(wb), this.activeCamera._activeMeshes.push(wb), gb !== wb && gb._activate(this._renderId, !1);
              for (let bb = 0, Mb = this._preActiveMeshStage; bb < Mb.length; bb++) {
                Mb[bb].action(wb)
              }
              wb._activate(this._renderId, !1) && (wb.QJ ? wb._internalAbstractMeshDataInfo._actAsRegularMesh && (gb = wb) : gb._internalAbstractMeshDataInfo._onlyForInstances = !1, gb._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(wb, gb)), wb._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let bb = 0; bb < this.kR.length; bb++) {
            const wb = this.kR[bb];
            if (!wb.isStarted() || !wb.emitter) continue;
            const Mb = wb.emitter;
            Mb.position && !Mb.isEnabled() || (this._activeParticleSystems.push(wb), wb.animate(), this._renderingManager.dispatchParticles(wb))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(bb) {
        this._skeletonsEnabled && bb.skeleton && (this._activeSkeletons.pushNoDuplicate(bb.skeleton) && (bb.skeleton.prepare(), this._activeBones.addCount(bb.skeleton.bones.length, !1)), bb.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(bb) && this.frameGraph && bb.applySkeleton(bb.skeleton))
      }
      _activeMesh(bb, wb) {
        this._prepareSkeleton(wb);
        let Mb = bb.ypb || bb.QJ || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || wb.cC;
        if (wb && wb.oR && wb.oR.length > 0) {
          const eb = this.getActiveSubMeshCandidates(wb),
            Hb = eb.length;
          Mb = Mb || 1 === Hb;
          for (let pb = 0; pb < Hb; pb++) {
            const Hb = eb.data[pb];
            this._evaluateSubMesh(Hb, wb, bb, Mb)
          }
        }
      }
      updateTransformMatrix(bb) {
        const wb = this.activeCamera;
        if (wb)
          if (wb._renderingMultiview) {
            const Mb = wb._rigCameras[0],
              eb = wb._rigCameras[1];
            this.setTransformMatrix(Mb.getViewMatrix(), Mb.getProjectionMatrix(bb), eb.getViewMatrix(), eb.getProjectionMatrix(bb))
          } else this.setTransformMatrix(wb.getViewMatrix(), wb.getProjectionMatrix(bb))
      }
      _bindFrameBuffer(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (bb && bb._multiviewTexture ? bb._multiviewTexture._bindFrameBuffer() : bb && bb.outputRenderTarget ? bb.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), wb && this._clearFrameBuffer(bb)
      }
      _clearFrameBuffer(bb) {
        if (bb && bb._multiviewTexture);
        else if (bb && bb.outputRenderTarget && !bb._renderingMultiview) {
          const wb = bb.outputRenderTarget;
          wb.onClearObservable.hasObservers() ? wb.onClearObservable.notifyObservers(this._engine) : wb.skipInitialClear || bb.isRightCamera || (this.autoClear && this._engine.clear(wb.clearColor || this._clearColor, !wb._cleared, !0, !0), wb._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (bb && bb._skipRendering) return;
        const Hb = this._engine;
        if (this._activeCamera = bb, !this.activeCamera) throw new Error("Active camera not set");
        if (Hb.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && Mb) {
          let wb = !0;
          bb._renderingMultiview && bb.outputRenderTarget && (wb = bb.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, bb.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), bb._renderingMultiview && bb.outputRenderTarget && (bb.outputRenderTarget.skipInitialClear = wb)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = bb.outputRenderTarget?.renderPassId ?? bb.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let eb = 0; eb < this._softwareSkinnedMeshes.length; eb++) {
          const bb = this._softwareSkinnedMeshes.data[eb];
          bb.applySkeleton(bb.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), bb.customRenderTargets && bb.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(bb.customRenderTargets), wb && wb.customRenderTargets && wb.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(wb.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let eb = 0, gb = this._gatherActiveCameraRenderTargetsStage; eb < gb.length; eb++) {
          gb[eb].action(this._renderTargets)
        }
        let pb = !1;
        if (this.renderTargetsEnabled) {
          let bb;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            eb.e.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const wb = this.getBoundingBoxRenderer?.();
            for (let Mb = 0; Mb < this._renderTargets.length; Mb++) {
              const eb = this._renderTargets.data[Mb];
              if (eb._shouldRender()) {
                this._renderId++;
                const Mb = eb.activeCamera && eb.activeCamera !== this.activeCamera;
                wb && !bb && (bb = wb.renderList.length > 0 ? wb.renderList.data.slice() : [], bb.length = wb.renderList.length), eb.render(Mb, this.dumpNextRenderTargets), pb = !0
              }
            }
            wb && bb && (wb.renderList.data = bb, wb.renderList.length = bb.length), eb.e.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const wb = this.getBoundingBoxRenderer?.();
            wb && !bb && (bb = wb.renderList.length > 0 ? wb.renderList.data.slice() : [], bb.length = wb.renderList.length);
            for (let bb = 0, Mb = this._cameraDrawRenderTargetStage; bb < Mb.length; bb++) {
              pb = Mb[bb].action(this.activeCamera) || pb
            }
            wb && bb && (wb.renderList.data = bb, wb.renderList.length = bb.length)
          }
          this._intermediateRendering = !1
        }
        pb && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || bb._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let eb = 0, gb = this._beforeCameraDrawStage; eb < gb.length; eb++) {
          gb[eb].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const Vb = Hb.snapshotRendering && 1 === Hb.snapshotRenderingMode;
        Vb && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !Vb), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let eb = 0, gb = this._afterCameraDrawStage; eb < gb.length; eb++) {
          gb[eb].action(this.activeCamera)
        }
        if (this.postProcessManager && !bb._multiviewTexture) {
          const wb = bb.outputRenderTarget ? bb.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(bb.isIntermediate, wb)
        }
        for (let eb = 0, gb = this._afterCameraPostProcessStage; eb < gb.length; eb++) {
          gb[eb].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === bb.cameraRigMode || bb._renderingMultiview) return bb._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(bb, void 0, wb), void this.onAfterRenderCameraObservable.notifyObservers(bb);
        if (bb._useMultiviewToSingleView) this._renderMultiviewToSingleView(bb);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(bb);
          for (let wb = 0; wb < bb._rigCameras.length; wb++) this._renderForCamera(bb._rigCameras[wb], bb)
        }
        this._activeCamera = bb, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(bb)
      }
      _checkIntersections() {
        for (let bb = 0; bb < this._meshesForIntersections.length; bb++) {
          const wb = this._meshesForIntersections.data[bb];
          if (wb.actionManager)
            for (let bb = 0; wb.actionManager && bb < wb.actionManager.actions.length; bb++) {
              const Mb = wb.actionManager.actions[bb];
              if (12 === Mb.trigger || 13 === Mb.trigger) {
                const bb = Mb.getTriggerParameter(),
                  eb = bb.mesh ? bb.mesh : bb,
                  Hb = eb.Gpb(wb, bb.usePreciseIntersection),
                  pb = wb._intersectionsInProgress.indexOf(eb);
                Hb && -1 === pb ? 12 === Mb.trigger ? (Mb._executeCurrent(Cb.CreateNew(wb, void 0, eb)), wb._intersectionsInProgress.push(eb)) : 13 === Mb.trigger && wb._intersectionsInProgress.push(eb) : !Hb && pb > -1 && (13 === Mb.trigger && Mb._executeCurrent(Cb.CreateNew(wb, void 0, eb)), wb.actionManager.hasSpecificTrigger(13, (bb => {
                  const wb = bb.mesh ? bb.mesh : bb;
                  return eb === wb
                })) && 13 !== Mb.trigger || wb._intersectionsInProgress.splice(pb, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(bb) {}
      _animate(bb) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let bb = Math.max(VM.MinDeltaTime, Math.min(this._engine.getDeltaTime(), VM.MaxDeltaTime)) + this._timeAccumulator;
          const wb = this._engine.getTimeStep(),
            Mb = 1e3 / wb / 1e3;
          let eb = 0;
          const Hb = this._engine.getLockstepMaxSteps();
          let pb = Math.floor(bb / wb);
          for (pb = Math.min(pb, Hb); bb > 0 && eb < pb;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = wb * Mb, this._animate(wb), this.onAfterAnimationsObservable.notifyObservers(this), this.iG && this._advancePhysicsEngineStep(wb), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, eb++, bb -= wb;
          this._timeAccumulator = bb < 0 ? 0 : bb
        } else {
          const bb = this.useConstantAnimationDeltaTime ? 16 : Math.max(VM.MinDeltaTime, Math.min(this._engine.getDeltaTime(), VM.MaxDeltaTime));
          this._animationRatio = .06 * bb, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.iG && this._advancePhysicsEngineStep(bb)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(bb) {
        if (bb?.outputRenderTarget && !bb?.isRigCamera && (bb.outputRenderTarget._cleared = !1), bb?.rigCameras?.length)
          for (let wb = 0; wb < bb.rigCameras.length; ++wb) {
            const Mb = bb.rigCameras[wb].outputRenderTarget;
            Mb && (Mb._cleared = !1)
          }
      }
      resetDrawCache(bb) {
        if (this.meshes)
          for (const wb of this.meshes) wb.resetDrawCache(bb)
      }
      _renderWithFrameGraph() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          wb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, bb)
          for (const Mb of this.cameras)
            if (Mb.update(), 0 !== Mb.cameraRigMode)
              for (let bb = 0; bb < Mb._rigCameras.length; bb++) Mb._rigCameras[bb].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(wb)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(bb) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const wb = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), eb.e.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let bb = 0; bb < this._renderTargets.length; bb++) {
            const Mb = this._renderTargets.data[bb],
              eb = Mb.activeCamera || wb;
            this._renderRenderTarget(Mb, eb, !0, this.dumpNextRenderTargets)
          }
          eb.e.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let Mb = 0, eb = this._beforeClearStage; Mb < eb.length; Mb++) {
          eb[Mb].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const wb = this.getActiveMeshCandidates(),
            Mb = wb.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let bb = 0; bb < Mb; bb++) {
                const Mb = wb.data[bb];
                Mb._internalAbstractMeshDataInfo._wasActiveLastFrame && Mb.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const bb = this._activeParticleSystems.length;
              for (let wb = 0; wb < bb; wb++) this._activeParticleSystems.data[wb].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let eb = 0; eb < Mb; eb++) {
              const Mb = wb.data[eb];
              Mb._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, Mb.isBlocked || (this._totalVertices.addCount(Mb.getTotalVertices(), !1), Mb.isReady() && Mb.isEnabled() && !Mb.CO.hasAZeroComponent && (Mb.computeWorldMatrix(bb), Mb.actionManager && Mb.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Mb)))
            }
            if (this.particlesEnabled)
              for (let bb = 0; bb < this.kR.length; bb++) {
                const wb = this.kR[bb];
                if (!wb.isStarted() || !wb.emitter) continue;
                const Mb = wb.emitter;
                Mb.position && !Mb.isEnabled() || (this._activeParticleSystems.push(wb), wb.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, bb._shouldRender()) {
          if (this._renderId++, this.activeCamera = wb, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), bb.render(Mb, eb)
        }
        this._intermediateRendering = !1
      }
      render() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.RD) return;
        const Mb = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(bb, wb)
        } finally {
          this._renderingMeshEvaluationDepth = Mb
        }
      }
      _renderFrame(bb, wb) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), Fb.b.RJ = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const Mb of this.activeCameras) this._checkCameraRenderTarget(Mb);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), wb || this.animate();
        for (let Mb = 0, eb = this._beforeCameraUpdateStage; Mb < eb.length; Mb++) {
          eb[Mb].action()
        }
        if (bb)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Mb = 0; Mb < this.activeCameras.length; Mb++) {
              const bb = this.activeCameras[Mb];
              if (bb.update(), 0 !== bb.cameraRigMode)
                for (let wb = 0; wb < bb._rigCameras.length; wb++) bb._rigCameras[wb].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let Mb = 0; Mb < this.activeCamera._rigCameras.length; Mb++) this.activeCamera._rigCameras[Mb].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(bb, wb);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const bb = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            eb.e.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let wb = 0; wb < this.customRenderTargets.length; wb++) {
              const Mb = this.customRenderTargets[wb],
                eb = Mb.activeCamera || this.activeCamera;
              this._renderRenderTarget(Mb, eb, bb !== eb, this.dumpNextRenderTargets)
            }
            eb.e.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = bb?.renderPassId ?? 0, this.activeCamera = bb, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let wb = 0, Mb = this._beforeClearStage; wb < Mb.length; wb++) {
            Mb[wb].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let wb = 0, Mb = this._gatherRenderTargetsStage; wb < Mb.length; wb++) {
            Mb[wb].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let wb = 0; wb < this.activeCameras.length; wb++) this._processSubCameras(this.activeCameras[wb], wb > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let Mb = 0, eb = this._afterRenderStage; Mb < eb.length; Mb++) {
          eb[Mb].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let bb = 0; bb < this._toBeDisposed.length; bb++) {
            const wb = this._toBeDisposed[bb];
            wb && wb.dispose()
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
        if (this.RD) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, zb.e)(this.stopAllAnimations)) {
          for (const bb of this._activeAnimatables) bb.onAnimationEndObservable.clear(), bb.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const bb = this._activeRequests.slice();
        for (const pb of bb) pb.abort();
        this._activeRequests.length = 0;
        try {
          this.vJ.notifyObservers(this)
        } catch (Hb) {
          wM.b.Error("An error occurred while calling onDisposeObservable!", Hb)
        }
        this.detachControl();
        const wb = this._engine.getInputElement?.();
        if (wb)
          for (let pb = 0; pb < this.cameras.length; pb++) this.cameras[pb].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (bb => bb.dispose(!0))), this._disposeList(this.transformNodes, (bb => bb.dispose(!0)));
        const Mb = this.cameras;
        this._disposeList(Mb), this._disposeList(this.kR), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let eb = this._engine.scenes.indexOf(this);
        if (eb > -1 && this._engine.scenes.splice(eb, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, Fb.h)(), hb.e._LastCreatedScene === this) {
          hb.e._LastCreatedScene = null;
          let bb = hb.e.Instances.length - 1;
          for (; bb >= 0;) {
            const wb = hb.e.Instances[bb];
            if (wb.scenes.length > 0) {
              hb.e._LastCreatedScene = wb.scenes[this._engine.scenes.length - 1];
              break
            }
            bb--
          }
        }
        eb = this._engine._virtualScenes.indexOf(this), eb > -1 && this._engine._virtualScenes.splice(eb, 1), this._engine.wipeCaches(!0), this.vJ.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(bb, wb) {
        const Mb = bb.slice(0);
        wb = wb ?? (bb => bb.dispose());
        for (const eb of Mb) wb(eb);
        bb.length = 0
      }
      get RD() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let bb = 0; bb < this.meshes.length; bb++) {
          const wb = this.meshes[bb].geometry;
          wb && wb.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const bb of this.textures) {
          bb._buffer && (bb._buffer = null)
        }
      }
      getWorldExtends(bb) {
        const wb = new Ib.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Mb = new Ib.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        bb = bb || (() => !0);
        const eb = this.meshes.filter(bb);
        for (const Hb of eb) {
          if (Hb.computeWorldMatrix(!0), !Hb.oR || 0 === Hb.oR.length || Hb.infiniteDistance) continue;
          const bb = Hb.XN(),
            eb = bb.boundingBox.minimumWorld,
            pb = bb.boundingBox.maximumWorld;
          Ib.o.CheckExtends(eb, wb, Mb), Ib.o.CheckExtends(pb, wb, Mb)
        }
        return wb.x === Number.MAX_VALUE ? {
          min: Ib.o.Zero(),
          max: Ib.o.Zero()
        } : {
          min: wb,
          max: Mb
        }
      }
      createPickingRay(bb, wb, Mb, eb) {
        throw (0, zb.k)("Ray")
      }
      createPickingRayToRef(bb, wb, Mb, eb, Hb) {
        throw (0, zb.k)("Ray")
      }
      createPickingRayInCameraSpace(bb, wb, Mb) {
        throw (0, zb.k)("Ray")
      }
      createPickingRayInCameraSpaceToRef(bb, wb, Mb, eb) {
        throw (0, zb.k)("Ray")
      }
      Vt(bb, wb, Mb, eb, Hb, pb) {
        const Vb = (0, zb.k)("Ray", !0);
        return Vb && wM.b.Warn(Vb), new tb.c
      }
      pickWithBoundingInfo(bb, wb, Mb, eb, Hb) {
        const pb = (0, zb.k)("Ray", !0);
        return pb && wM.b.Warn(pb), new tb.c
      }
      pickWithRay(bb, wb, Mb, eb) {
        throw (0, zb.k)("Ray")
      }
      multiPick(bb, wb, Mb, eb, Hb) {
        throw (0, zb.k)("Ray")
      }
      multiPickWithRay(bb, wb, Mb) {
        throw (0, zb.k)("Ray")
      }
      setPointerOverMesh(bb, wb, Mb) {
        this._inputManager.setPointerOverMesh(bb, wb, Mb)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const bb of this.geometries) bb._rebuild();
        for (const bb of this.meshes) bb._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const bb of this._components) bb.rebuild();
        for (const bb of this.kR) bb.rebuild();
        if (this.spriteManagers)
          for (const bb of this.spriteManagers) bb.rebuild()
      }
      _rebuildTextures() {
        for (const bb of this.textures) bb._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(bb, wb, Mb) {
        if (void 0 === wb) return bb;
        const eb = [];
        for (const Hb in bb) {
          const pb = bb[Hb];
          Lb.c && Lb.c.MatchesQuery(pb, wb) && (!Mb || Mb(pb)) && eb.push(pb)
        }
        return eb
      }
      getMeshesByTags(bb, wb) {
        return this._getByTags(this.meshes, bb, wb)
      }
      getCamerasByTags(bb, wb) {
        return this._getByTags(this.cameras, bb, wb)
      }
      getLightsByTags(bb, wb) {
        return this._getByTags(this.lights, bb, wb)
      }
      getMaterialByTags(bb, wb) {
        return this._getByTags(this.materials, bb, wb).concat(this._getByTags(this.multiMaterials, bb, wb))
      }
      getTransformNodesByTags(bb, wb) {
        return this._getByTags(this.transformNodes, bb, wb)
      }
      setRenderingOrder(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(bb, wb, Mb, eb)
      }
      setRenderingAutoClearDepthStencil(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(bb, wb, Mb, eb)
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
      markAllMaterialsAsDirty(bb, wb) {
        if (!this._blockMaterialDirtyMechanism)
          for (const Mb of this.materials) wb && !wb(Mb) || Mb.eeb(bb)
      }
      _loadFile(bb, wb, Mb, eb, Hb, pb, Vb) {
        const gb = (0, nb.k)(bb, wb, Mb, eb ? this.offlineProvider : void 0, Hb, pb, Vb);
        return this._activeRequests.push(gb), gb.onCompleteObservable.add((bb => {
          this._activeRequests.splice(this._activeRequests.indexOf(bb), 1)
        })), gb
      }
      async _loadFileAsync(bb, wb, Mb, eb, Hb) {
        return await new Promise(((pb, Vb) => {
          this._loadFile(bb, (bb => {
            pb(bb)
          }), wb, Mb, eb, ((bb, wb) => {
            Vb(wb)
          }), Hb)
        }))
      }
      async _loadDelayedFileAsync(bb, wb, Mb) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const eb = `${bb}|${wb?"binary":"string"}`;
        let Hb = this._delayedFileRequests.get(eb);
        if (!Hb) {
          Hb = wb ? this._loadFileAsync(bb, void 0, Mb, !0) : this._loadFileAsync(bb, void 0, Mb, !1);
          const pb = Hb;
          (async () => {
            try {
              await pb
            } catch {}
            this._delayedFileRequests?.delete(eb)
          })(), this._delayedFileRequests.set(eb, Hb)
        }
        return await Hb
      }
      _requestFile(bb, wb, Mb, eb, Hb, pb, Vb) {
        const gb = (0, nb.w)(bb, wb, Mb, eb ? this.offlineProvider : void 0, Hb, pb, Vb);
        return this._activeRequests.push(gb), gb.onCompleteObservable.add((bb => {
          this._activeRequests.splice(this._activeRequests.indexOf(bb), 1)
        })), gb
      }
      async _requestFileAsync(bb, wb, Mb, eb, Hb) {
        return await new Promise(((pb, Vb) => {
          this._requestFile(bb, (bb => {
            pb(bb)
          }), wb, Mb, eb, (bb => {
            Vb(bb)
          }), Hb)
        }))
      }
      _readFile(bb, wb, Mb, eb, Hb) {
        const pb = (0, nb.p)(bb, wb, Mb, eb, Hb);
        return this._activeRequests.push(pb), pb.onCompleteObservable.add((bb => {
          this._activeRequests.splice(this._activeRequests.indexOf(bb), 1)
        })), pb
      }
      async _readFileAsync(bb, wb, Mb) {
        return await new Promise(((eb, Hb) => {
          this._readFile(bb, (bb => {
            eb(bb)
          }), wb, Mb, (bb => {
            Hb(bb)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, zb.k)("performanceViewerSceneExtension")
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
    VM.FOGMODE_NONE = 0, VM.FOGMODE_EXP = 1, VM.FOGMODE_EXP2 = 2, VM.FOGMODE_LINEAR = 3, VM.MinDeltaTime = 1, VM.MaxDeltaTime = 1e3, VM._OriginalDefaultMaterialFactory = VM.DefaultMaterialFactory;
    let gM = !1;

    function lM() {
      gM || (gM = !0, (0, MM.e)("BABYLON.Scene", VM))
    }(kb = VM.prototype).sortActiveAnimatables ?? (kb.sortActiveAnimatables = (0, zb.h)("Scene", "sortActiveAnimatables")), (bw = VM.prototype).beginWeightedAnimation ?? (bw.beginWeightedAnimation = (0, zb.h)("Scene", "beginWeightedAnimation")), (ww = VM.prototype).beginAnimation ?? (ww.beginAnimation = (0, zb.h)("Scene", "beginAnimation")), (Mw = VM.prototype).beginHierarchyAnimation ?? (Mw.beginHierarchyAnimation = (0, zb.h)("Scene", "beginHierarchyAnimation")), (ew = VM.prototype).beginDirectAnimation ?? (ew.beginDirectAnimation = (0, zb.h)("Scene", "beginDirectAnimation")), (Hw = VM.prototype).beginDirectHierarchyAnimation ?? (Hw.beginDirectHierarchyAnimation = (0, zb.h)("Scene", "beginDirectHierarchyAnimation")), (pw = VM.prototype).getAnimatableByTarget ?? (pw.getAnimatableByTarget = (0, zb.h)("Scene", "getAnimatableByTarget")), (Vw = VM.prototype).getAllAnimatablesByTarget ?? (Vw.getAllAnimatablesByTarget = (0, zb.h)("Scene", "getAllAnimatablesByTarget")), (gw = VM.prototype).stopAllAnimations ?? (gw.stopAllAnimations = (0, zb.h)("Scene", "stopAllAnimations")), (lw = VM.prototype).getSoundByName ?? (lw.getSoundByName = (0, zb.h)("Scene", "getSoundByName")), (Lw = VM.prototype).createOrUpdateSelectionOctree ?? (Lw.createOrUpdateSelectionOctree = (0, zb.h)("Scene", "createOrUpdateSelectionOctree")), (Iw = VM.prototype).createDefaultLight ?? (Iw.createDefaultLight = (0, zb.h)("Scene", "createDefaultLight")), (Ow = VM.prototype).createDefaultCamera ?? (Ow.createDefaultCamera = (0, zb.h)("Scene", "createDefaultCamera")), (Uw = VM.prototype).createDefaultCameraOrLight ?? (Uw.createDefaultCameraOrLight = (0, zb.h)("Scene", "createDefaultCameraOrLight")), (tw = VM.prototype).createDefaultSkybox ?? (tw.createDefaultSkybox = (0, zb.h)("Scene", "createDefaultSkybox")), (Cw = VM.prototype).createDefaultEnvironment ?? (Cw.createDefaultEnvironment = (0, zb.h)("Scene", "createDefaultEnvironment")), (Ew = VM.prototype).createDefaultVRExperience ?? (Ew.createDefaultVRExperience = (0, zb.h)("Scene", "createDefaultVRExperience")), (Fw = VM.prototype).createDefaultXRExperienceAsync ?? (Fw.createDefaultXRExperienceAsync = (0, zb.h)("Scene", "createDefaultXRExperienceAsync")), (Bw = VM.prototype).getGlowLayerByName ?? (Bw.getGlowLayerByName = (0, zb.h)("Scene", "getGlowLayerByName")), (sw = VM.prototype).getHighlightLayerByName ?? (sw.getHighlightLayerByName = (0, zb.h)("Scene", "getHighlightLayerByName")), (mw = VM.prototype).getSelectionOutlineLayerByName ?? (mw.getSelectionOutlineLayerByName = (0, zb.h)("Scene", "getSelectionOutlineLayerByName")), (hw = VM.prototype).removeLensFlareSystem ?? (hw.removeLensFlareSystem = (0, zb.h)("Scene", "removeLensFlareSystem")), (zw = VM.prototype).addLensFlareSystem ?? (zw.addLensFlareSystem = (0, zb.h)("Scene", "addLensFlareSystem")), (Xw = VM.prototype).getLensFlareSystemByName ?? (Xw.getLensFlareSystemByName = (0, zb.h)("Scene", "getLensFlareSystemByName")), (xw = VM.prototype).getLensFlareSystemByID ?? (xw.getLensFlareSystemByID = (0, zb.h)("Scene", "getLensFlareSystemByID")), (jw = VM.prototype).getLensFlareSystemById ?? (jw.getLensFlareSystemById = (0, zb.h)("Scene", "getLensFlareSystemById")), (Kw = VM.prototype).getPhysicsEngine ?? (Kw.getPhysicsEngine = (0, zb.h)("Scene", "getPhysicsEngine")), (rw = VM.prototype).enablePhysics ?? (rw.enablePhysics = (0, zb.h)("Scene", "enablePhysics")), (Rw = VM.prototype).disablePhysicsEngine ?? (Rw.disablePhysicsEngine = (0, zb.h)("Scene", "disablePhysicsEngine")), (Dw = VM.prototype).isPhysicsEnabled ?? (Dw.isPhysicsEnabled = (0, zb.h)("Scene", "isPhysicsEnabled")), (Yw = VM.prototype).deleteCompoundImpostor ?? (Yw.deleteCompoundImpostor = (0, zb.h)("Scene", "deleteCompoundImpostor")), (Zw = VM.prototype).removeReflectionProbe ?? (Zw.removeReflectionProbe = (0, zb.h)("Scene", "removeReflectionProbe")), (fw = VM.prototype).addReflectionProbe ?? (fw.addReflectionProbe = (0, zb.h)("Scene", "addReflectionProbe")), (Aw = VM.prototype).getBoundingBoxRenderer ?? (Aw.getBoundingBoxRenderer = (0, zb.h)("Scene", "getBoundingBoxRenderer")), (Ww = VM.prototype).enableDepthRenderer ?? (Ww.enableDepthRenderer = (0, zb.h)("Scene", "enableDepthRenderer")), (Jw = VM.prototype).disableDepthRenderer ?? (Jw.disableDepthRenderer = (0, zb.h)("Scene", "disableDepthRenderer")), (Sw = VM.prototype).enableFluidRenderer ?? (Sw.enableFluidRenderer = (0, zb.h)("Scene", "enableFluidRenderer")), (Nw = VM.prototype).disableFluidRenderer ?? (Nw.disableFluidRenderer = (0, zb.h)("Scene", "disableFluidRenderer")), (vw = VM.prototype).enableGeometryBufferRenderer ?? (vw.enableGeometryBufferRenderer = (0, zb.h)("Scene", "enableGeometryBufferRenderer")), (Qw = VM.prototype).disableGeometryBufferRenderer ?? (Qw.disableGeometryBufferRenderer = (0, zb.h)("Scene", "disableGeometryBufferRenderer")), (Gw = VM.prototype).enableIblCdfGenerator ?? (Gw.enableIblCdfGenerator = (0, zb.h)("Scene", "enableIblCdfGenerator")), (qw = VM.prototype).disableIblCdfGenerator ?? (qw.disableIblCdfGenerator = (0, zb.h)("Scene", "disableIblCdfGenerator")), (aw = VM.prototype).getOutlineRenderer ?? (aw.getOutlineRenderer = (0, zb.h)("Scene", "getOutlineRenderer")), (iw = VM.prototype).enablePrePassRenderer ?? (iw.enablePrePassRenderer = (0, zb.h)("Scene", "enablePrePassRenderer")), (uw = VM.prototype).disablePrePassRenderer ?? (uw.disablePrePassRenderer = (0, zb.h)("Scene", "disablePrePassRenderer")), (dw = VM.prototype).enableSubSurfaceForPrePass ?? (dw.enableSubSurfaceForPrePass = (0, zb.h)("Scene", "enableSubSurfaceForPrePass")), (Pw = VM.prototype).disableSubSurfaceForPrePass ?? (Pw.disableSubSurfaceForPrePass = (0, zb.h)("Scene", "disableSubSurfaceForPrePass")), (nw = VM.prototype).pickSprite ?? (nw.pickSprite = (0, zb.h)("Scene", "pickSprite")), (yw = VM.prototype).pickSpriteWithRay ?? (yw.pickSpriteWithRay = (0, zb.h)("Scene", "pickSpriteWithRay")), (ow = VM.prototype).multiPickSprite ?? (ow.multiPickSprite = (0, zb.h)("Scene", "multiPickSprite")), (Tw = VM.prototype).multiPickSpriteWithRay ?? (Tw.multiPickSpriteWithRay = (0, zb.h)("Scene", "multiPickSpriteWithRay")), (kw = VM.prototype).setPointerOverSprite ?? (kw.setPointerOverSprite = (0, zb.h)("Scene", "setPointerOverSprite")), (bM = VM.prototype).getPointerOverSprite ?? (bM.getPointerOverSprite = (0, zb.h)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(VM.prototype, "mainSoundTrack") || Object.defineProperty(VM.prototype, "mainSoundTrack", (0, zb.g)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(VM.prototype, "soundTracks") || Object.defineProperty(VM.prototype, "soundTracks", (0, zb.g)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(VM.prototype, "audioEnabled") || Object.defineProperty(VM.prototype, "audioEnabled", (0, zb.g)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(VM.prototype, "headphone") || Object.defineProperty(VM.prototype, "headphone", (0, zb.g)("Scene", "headphone")), Object.getOwnPropertyDescriptor(VM.prototype, "audioListenerPositionProvider") || Object.defineProperty(VM.prototype, "audioListenerPositionProvider", (0, zb.g)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(VM.prototype, "audioListenerRotationProvider") || Object.defineProperty(VM.prototype, "audioListenerRotationProvider", (0, zb.g)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(VM.prototype, "audioPositioningRefreshRate") || Object.defineProperty(VM.prototype, "audioPositioningRefreshRate", (0, zb.g)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(VM.prototype, "selectionOctree") || Object.defineProperty(VM.prototype, "selectionOctree", (0, zb.g)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(VM.prototype, "debugLayer") || Object.defineProperty(VM.prototype, "debugLayer", (0, zb.g)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(VM.prototype, "gamepadManager") || Object.defineProperty(VM.prototype, "gamepadManager", (0, zb.g)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(VM.prototype, "simplificationQueue") || Object.defineProperty(VM.prototype, "simplificationQueue", (0, zb.g)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(VM.prototype, "onBeforePhysicsObservable") || Object.defineProperty(VM.prototype, "onBeforePhysicsObservable", (0, zb.g)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(VM.prototype, "onAfterPhysicsObservable") || Object.defineProperty(VM.prototype, "onAfterPhysicsObservable", (0, zb.g)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(VM.prototype, "reflectionProbes") || Object.defineProperty(VM.prototype, "reflectionProbes", (0, zb.g)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(VM.prototype, "forceShowBoundingBoxes") || Object.defineProperty(VM.prototype, "forceShowBoundingBoxes", (0, zb.g)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(VM.prototype, "depthPeelingRenderer") || Object.defineProperty(VM.prototype, "depthPeelingRenderer", (0, zb.g)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(VM.prototype, "useOrderIndependentTransparency") || Object.defineProperty(VM.prototype, "useOrderIndependentTransparency", (0, zb.g)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(VM.prototype, "fluidRenderer") || Object.defineProperty(VM.prototype, "fluidRenderer", (0, zb.g)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(VM.prototype, "geometryBufferRenderer") || Object.defineProperty(VM.prototype, "geometryBufferRenderer", (0, zb.g)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(VM.prototype, "iblCdfGenerator") || Object.defineProperty(VM.prototype, "iblCdfGenerator", (0, zb.g)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(VM.prototype, "prePassRenderer") || Object.defineProperty(VM.prototype, "prePassRenderer", (0, zb.g)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(VM.prototype, "subSurfaceConfiguration") || Object.defineProperty(VM.prototype, "subSurfaceConfiguration", (0, zb.g)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(VM.prototype, "spriteManagers") || Object.defineProperty(VM.prototype, "spriteManagers", (0, zb.g)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(VM.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(VM.prototype, "onBeforeSpritesRenderingObservable", (0, zb.g)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(VM.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(VM.prototype, "onAfterSpritesRenderingObservable", (0, zb.g)("Scene", "onAfterSpritesRenderingObservable"))
  },
  41841: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      f: () => Hb
    });
    class eb {}
    eb.NAME_EFFECTLAYER = "EffectLayer", eb.NAME_LAYER = "Layer", eb.NAME_LENSFLARESYSTEM = "LensFlareSystem", eb.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", eb.NAME_PARTICLESYSTEM = "ParticleSystem", eb.NAME_GAMEPAD = "Gamepad", eb.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", eb.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", eb.NAME_PREPASSRENDERER = "PrePassRenderer", eb.NAME_DEPTHRENDERER = "DepthRenderer", eb.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", eb.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", eb.NAME_SPRITE = "Sprite", eb.NAME_SUBSURFACE = "SubSurface", eb.NAME_OUTLINERENDERER = "Outline", eb.NAME_PROCEDURALTEXTURE = "ProceduralTexture", eb.NAME_SHADOWGENERATOR = "ShadowGenerator", eb.NAME_OCTREE = "Opb", eb.NAME_PHYSICSENGINE = "PhysicsEngine", eb.NAME_AUDIO = "Audio", eb.NAME_FLUIDRENDERER = "FluidRenderer", eb.NAME_IBLCDFGENERATOR = "iblCDFGenerator", eb.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", eb.STEP_ISREADYFORMESH_EFFECTLAYER = 0, eb.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, eb.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, eb.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, eb.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, eb.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, eb.STEP_BEFORECAMERADRAW_PREPASS = 0, eb.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, eb.STEP_BEFORECAMERADRAW_LAYER = 2, eb.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, eb.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, eb.STEP_BEFORERENDERINGMESH_PREPASS = 0, eb.STEP_BEFORERENDERINGMESH_OUTLINE = 1, eb.STEP_AFTERRENDERINGMESH_PREPASS = 0, eb.STEP_AFTERRENDERINGMESH_OUTLINE = 1, eb.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, eb.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, eb.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, eb.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, eb.STEP_BEFORECLEAR_PREPASS = 1, eb.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, eb.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, eb.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, eb.STEP_AFTERCAMERADRAW_PREPASS = 0, eb.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, eb.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, eb.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, eb.STEP_AFTERCAMERADRAW_LAYER = 4, eb.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, eb.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, eb.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, eb.STEP_AFTERRENDER_AUDIO = 0, eb.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, eb.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, eb.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, eb.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, eb.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, eb.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, eb.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, eb.STEP_POINTERMOVE_SPRITE = 0, eb.STEP_POINTERDOWN_SPRITE = 0, eb.STEP_POINTERUP_SPRITE = 0;
    class Hb extends Array {
      constructor(bb) {
        super(...bb)
      }
      static Create() {
        return Object.create(Hb.prototype)
      }
      registerStep(bb, wb, Mb) {
        let eb, Hb = 0;
        for (; Hb < this.length; Hb++) {
          if (eb = this[Hb].index, bb < eb) break
        }
        this.splice(Hb, 0, {
          index: bb,
          component: wb,
          action: Mb.bind(wb)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  41675: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      f: () => gb,
      i: () => eb,
      m: () => Hb,
      n: () => pb
    });

    function eb(bb, wb, Mb, eb, Hb, pb) {
      function Vb(bb) {
        if (void 0 !== bb && "function" !== typeof bb) throw new TypeError("Function expected");
        return bb
      }
      for (var gb, lb = eb.kind, Lb = "getter" === lb ? "get" : "setter" === lb ? "set" : "value", Ib = !wb && bb ? eb.static ? bb : bb.prototype : null, Ob = wb || (Ib ? Object.getOwnPropertyDescriptor(Ib, eb.name) : {}), Ub = !1, tb = Mb.length - 1; tb >= 0; tb--) {
        var Cb = {};
        for (var Eb in eb) Cb[Eb] = "access" === Eb ? {} : eb[Eb];
        for (var Eb in eb.access) Cb.access[Eb] = eb.access[Eb];
        Cb.addInitializer = function(bb) {
          if (Ub) throw new TypeError("Cannot add initializers after decoration has completed");
          pb.push(Vb(bb || null))
        };
        var Fb = (0, Mb[tb])("accessor" === lb ? {
          get: Ob.get,
          set: Ob.set
        } : Ob[Lb], Cb);
        if ("accessor" === lb) {
          if (void 0 === Fb) continue;
          if (null === Fb || "object" !== typeof Fb) throw new TypeError("Object expected");
          (gb = Vb(Fb.get)) && (Ob.get = gb), (gb = Vb(Fb.set)) && (Ob.set = gb), (gb = Vb(Fb.init)) && Hb.unshift(gb)
        } else(gb = Vb(Fb)) && ("field" === lb ? Hb.unshift(gb) : Ob[Lb] = gb)
      }
      Ib && Object.defineProperty(Ib, eb.name, Ob), Ub = !0
    }

    function Hb(bb, wb, Mb) {
      for (var eb = arguments.length > 2, Hb = 0; Hb < wb.length; Hb++) Mb = eb ? wb[Hb].call(bb, Mb) : wb[Hb].call(bb);
      return eb ? Mb : void 0
    }

    function pb(bb, wb, Mb) {
      return "symbol" === typeof wb && (wb = wb.description ? "[".concat(wb.description, "]") : ""), Object.defineProperty(bb, "name", {
        configurable: !0,
        value: Mb ? "".concat(Mb, " ", wb) : wb
      })
    }
    Object.create;
    Object.create;

    function Vb(bb, wb, Mb, eb) {
      if ("a" === Mb && !eb) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof wb ? bb !== wb || !eb : !wb.has(bb)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Mb ? eb : "a" === Mb ? eb.call(bb) : eb ? eb.value : wb.get(bb)
    }

    function gb(bb, wb, Mb, eb, Hb) {
      if ("m" === eb) throw new TypeError("Private method is not writable");
      if ("a" === eb && !Hb) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof wb ? bb !== wb || !Hb : !wb.has(bb)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === eb ? Hb.call(bb, Mb) : Hb ? Hb.value = Mb : wb.set(bb, Mb), Mb
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);