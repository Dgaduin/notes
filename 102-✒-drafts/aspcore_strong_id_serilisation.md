# Strong Id Serilisation 
#aspcore #pin 

```
[JsonConverter(typeof(OrderIdJsonConverter))]
public readonly struct OrderId : IComparable<OrderId>, IEquatable<OrderId>
{
    // Strongly-typed ID implementation elided 

    class OrderIdJsonConverter : JsonConverter
    {
        public override bool CanConvert(Type objectType)
        {
            return objectType == typeof(OrderId);
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            var id = (OrderId)value;
            serializer.Serialize(writer, id.Value);
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            var guid = serializer.Deserialize<Guid>(reader);
            return new OrderId(guid);
        }
    }
}
```

```
[JsonConverter(typeof(OrderIdJsonConverter))]
[TypeConverter(typeof(OrderIdTypeConverter))]
public readonly struct OrderId : IComparable<OrderId>, IEquatable<OrderId>
{
    // Strongly-typed ID implementation elided 

    class OrderIdTypeConverter : TypeConverter
    {
        public override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)
        {
            return sourceType == typeof(string) || base.CanConvertFrom(context, sourceType);
        }

        public override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)
        {
            var stringValue = value as string;
            if (!string.IsNullOrEmpty(stringValue)
                && Guid.TryParse(stringValue, out var guid))
            {
                return new OrderId(guid);
            }

            return base.ConvertFrom(context, culture, value);

        }
    }
}
```

```
[JsonConverter(typeof(FooIdJsonConverter))]
[TypeConverter(typeof(FooIdTypeConverter))]
public readonly struct FooId : IComparable<FooId>, IEquatable<FooId>
{
    public Guid Value { get; }

    public FooId(Guid value)
    {
        Value = value;
    }

    public static FooId New() => new FooId(Guid.NewGuid());
    public static FooId Empty { get; } = new FooId(Guid.Empty);

    public bool Equals(FooId other) => this.Value.Equals(other.Value);
    public int CompareTo(FooId other) => Value.CompareTo(other.Value);

    public override bool Equals(object obj)
    {
        if (ReferenceEquals(null, obj)) return false;
        return obj is FooId other && Equals(other);
    }

    public override int GetHashCode() => Value.GetHashCode();

    public override string ToString() => Value.ToString();
    public static bool operator ==(FooId a, FooId b) => a.CompareTo(b) == 0;
    public static bool operator !=(FooId a, FooId b) => !(a == b);

    class FooIdJsonConverter : JsonConverter
    {
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            var id = (FooId)value;
            serializer.Serialize(writer, id.Value);
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            var guid = serializer.Deserialize<Guid>(reader);
            return new FooId(guid);
        }

        public override bool CanConvert(Type objectType)
        {
            return objectType == typeof(FooId);
        }
    }

    class FooIdTypeConverter : TypeConverter
    {
        public override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)
        {
            return sourceType == typeof(string) || base.CanConvertFrom(context, sourceType);
        }

        public override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)
        {
            var stringValue = value as string;
            if (!string.IsNullOrEmpty(stringValue)
                && Guid.TryParse(stringValue, out var guid))
            {
                return new FooId(guid);
            }

            return base.ConvertFrom(context, culture, value);

        }
    }
}
```


https://andrewlock.net/using-strongly-typed-entity-ids-to-avoid-primitive-obsession-part-2/

this is some test textr trying out the keyboard 
actually quite good and enjoyablepublic int Method {get;set;} this is some thest var a = 5 ++ asdasd d=]]]]]]]]]]